package com.ssp.bo.co.interceptor;

import java.lang.reflect.Field;
import java.util.*;

import org.apache.ibatis.executor.Executor;
import org.apache.ibatis.mapping.BoundSql;
import org.apache.ibatis.mapping.MappedStatement;
import org.apache.ibatis.mapping.ParameterMapping;
import org.apache.ibatis.plugin.Interceptor;
import org.apache.ibatis.plugin.Intercepts;
import org.apache.ibatis.plugin.Invocation;
import org.apache.ibatis.plugin.Signature;
import org.apache.ibatis.session.ResultHandler;
import org.apache.ibatis.session.RowBounds;
import org.springframework.util.StringUtils;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.ssp.core.co.util.SessionsAdmin;

@Intercepts({
	  @Signature(type=Executor.class, method="query", args= { MappedStatement.class, Object.class, RowBounds.class, ResultHandler.class })
	, @Signature(type=Executor.class, method="update", args= { MappedStatement.class, Object.class })
})
public class SQLInterceptor implements Interceptor {
	private String[] excep = new String[] {
			  "CoPsnInfoArcHst.selectPgmInfo"
			, "CoPsnInfoArcHst.insertCoPsnInfoArcHst"
			, "com.ssp.core.od.odOrderComm.deleteOdrInqTgtDtls"
			, "com.ssp.core.od.odOrderComm.insertOdrInqTgtDtls"
			, "CoPsnInfoArcHst.selectCount"
	};

	private List<String> dbWrkList = Arrays.asList(new String[] {"BIGDOWNLOAD", "DOWNLOAD", "SELECT", "INSERT", "UPDATE", "DELETE"});
	
	private static ServletRequestAttributes currentRequestAttributes() {
		RequestAttributes requestAttr = RequestContextHolder.currentRequestAttributes();
		
		if (!(requestAttr instanceof ServletRequestAttributes)) {
			return null;
		}
		
		return (ServletRequestAttributes) requestAttr;
	}	 
	
	@SuppressWarnings("rawtypes")
	@Override
	public Object intercept(Invocation invocation) throws Throwable {
		Object[] args = invocation.getArgs();
		Object param = args[1];
		
		ServletRequestAttributes sra = currentRequestAttributes();
		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();		
		MappedStatement stmt = (MappedStatement) args[0];
		BoundSql bsql = stmt.getBoundSql(param);
		String uri = sra.getRequest().getRequestURI();
		String qid = stmt.getId();

		if (Arrays.asList(excep).indexOf(qid) < 0 && !qid.endsWith("count") && !qid.endsWith("Count")) {
			Map<String, Object> pgm = SQLInterceptorUtil.coPsnInfoArcHstDao.selectPgmInfo(uri);
			
			String method = invocation.getMethod().getName();
			int inqCnt = 0;
			
			if (pgm != null) {
				String bindSql = bindSql(bsql, param);
				
				if (method.equals("query")) {
					try {
						System.out.println("##########################################");
						System.out.println(bindSql);
						Map<String, Object> map = new HashMap<String, Object>();
						map.put("bindSql", bindSql);
						inqCnt = SQLInterceptorUtil.coPsnInfoArcHstDao.selectCount(map);
					} catch (Exception e) {
						inqCnt = 0;
					}
				}
				
				Map<String, Object> log = new HashMap<String, Object>();
				log.put("orgCd", admin.get("ORG_CD"));
				log.put("oprtrId", admin.get("OPRTR_ID"));
				log.put("pstnNm", admin.get("PSTN_NM"));
				log.put("pgmId", pgm.get("PGM_ID"));
				log.put("cnsolIpAddr", sra != null ? sra .getRequest().getRemoteAddr() : "");
				log.put("dbWrk", getDbWrk(stmt, (Map) param));
				log.put("inqCnt", inqCnt);
				log.put("dbInq", bindSql);
				log.put("downRsn", (String) ((Map) param).get("downRsn"));
				
				SQLInterceptorUtil.coPsnInfoArcHstDao.insertCoPsnInfoArcHst(log);
			}
		}
		
		return invocation.proceed();
	}

	private String getDbWrk(MappedStatement stmt, Map param) {
		String sqlCommandType = stmt.getSqlCommandType().toString();
		if(Objects.isNull(param))	return sqlCommandType;

		String dbWrk = (String) param.get("dbWrk");
		if(!StringUtils.hasText(dbWrk))	return sqlCommandType;

		dbWrk = dbWrk.toUpperCase();
		if(dbWrkList.indexOf(dbWrk) >= 0)	return dbWrk;

		return sqlCommandType;
	}

	@SuppressWarnings("rawtypes")
	private String bindSql(BoundSql boundSql, Object param) throws NoSuchFieldException, IllegalAccessException {
		//BoundSql boundSql = handler.getBoundSql();

		// 쿼리실행시 맵핑되는 파라미터를 구한다
		//Object param = handler.getParameterHandler().getParameterObject();
		// 쿼리문을 가져온다(이 상태에서의 쿼리는 값이 들어갈 부분에 ?가 있다)
		String sql = boundSql.getSql();

		// 바인딩 파라미터가 없으면
		if (param == null) {
			sql = sql.replaceFirst("\\?", "''");
			return sql;
		}

		// 해당 파라미터의 클래스가 Integer, Long, Float, Double 클래스일 경우
		if (param instanceof Integer || param instanceof Long || param instanceof Float || param instanceof Double) {
			sql = sql.replaceFirst("\\?", param.toString());
		}
		// 해당 파라미터의 클래스가 String인 경우
		else if (param instanceof String) {
			sql = sql.replaceFirst("\\?", "'" + param + "'");
		}
		// 해당 파라미터의 클래스가 Map인 경우
		else if (param instanceof Map) {
			List<ParameterMapping> paramMapping = boundSql.getParameterMappings();
			for (ParameterMapping mapping : paramMapping) {
				String propValue = mapping.getProperty();
				Object value = ((Map) param).get(propValue);
				value = value == null ? "" : value;
				sql = sql.replaceFirst("\\?", "'" + String.valueOf(value) + "'");
			}
		}
		// 해당 파라미터의 클래스가 사용자 정의 클래스인 경우
		else {
			List<ParameterMapping> paramMapping = boundSql.getParameterMappings();
			Class<? extends Object> paramClass = param.getClass();

			for (ParameterMapping mapping : paramMapping) {
				String propValue = mapping.getProperty();
				Field field = paramClass.getDeclaredField(propValue);
				field.setAccessible(true);
				Class<?> javaType = mapping.getJavaType();
				if (String.class == javaType) {
					sql = sql.replaceFirst("\\?", "'" + field.get(param) + "'");
				} else {
					sql = sql.replaceFirst("\\?", field.get(param).toString());
				}
			}
		}

		// return sql
		return sql;
	}
}
