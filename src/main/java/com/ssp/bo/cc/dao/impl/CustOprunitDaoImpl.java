package com.ssp.bo.cc.dao.impl;


import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.cc.dao.CustOprunitDao;


/**
 * <pre></pre>
 * @title
 * @desc
 * @package com.ssp.bo.cc.dao.impl
 * <pre>    CustOprunitDao</pre>
 * @author  moonjooh
 * @since   2022. 02. 16.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.02.16		최초작성
 */
@Repository("custOprunitDao")
public class CustOprunitDaoImpl implements CustOprunitDao {
	
	@Autowired
	private SqlSession sqlSession;
	
	private final String ns(String qryId) {
		return new StringBuffer("com.ssp.cc.oprunit.").append(qryId).toString();
	}
	
	
    /**
     * 고객등급 리스트를 조회
     * @param searchMap Map
     * @return List
     */
	@Override
    public List<Map<String, Object>> selectCustOprunit(Map<String, Object> searchMap) {
        return sqlSession.selectList(ns("selectCustOprunit"        ), searchMap);
    }

	
	
	public List<Map<String, Object>> selectBzplcOprunitDept(Map<String, Object> param) throws Exception {
		return sqlSession.selectList(ns("selectBzplcOprunitDept"   ), param);
	}
	
	
	// 운영단위 상세 조회
	public List<Map<String, Object>> selectOprunitBasis(Map<String, Object> param) throws Exception {
		return sqlSession.selectList(ns("selectOprunitBasis"    ), param);
	}
	@Override
	public List<Map<String, Object>> selectRefCdGrp (Map<String, Object> param) throws Exception {
		return sqlSession.selectList(ns("selectRefCdGrp"        ), param);
	}
	@Override
	public List<Map<String, Object>> selectOshtCd(Map<String, Object> param) throws Exception {
		return sqlSession.selectList(ns("selectOshtCd"          ), param);
	}
	
	
	// 운영단위 상세 저장
	public int saveOprunitBasis        (Map<String, Object> param) throws Exception {
		return sqlSession.update       (ns("saveOprunitBasis"     ), param);
	}
	public int saveOprunitCtlAuthParts (Map<String, Object> param) throws Exception {
		int ss = sqlSession.update       (ns("saveCtlAuthInfo4Parts"), param);
		return sqlSession.update    (ns("saveCtlAuthInfoHst"          ), param);
	}
	
	public int saveRefCdGrp            (Map<String, Object> param) throws Exception {
		return sqlSession.insert       (ns("saveRefCdGrp"         ), param);
	}
	public int saveRefCdGrp4Post       (Map<String, Object> param) throws Exception {
		if (param.get("REF_CD_USE_N")==null) { return 0; }
		return sqlSession.update       (ns("saveRefCdGrp4Post"    ), param);
	}
	
	public int saveOshtCd              (Map<String, Object> param) throws Exception {
		return sqlSession.update       (ns("saveOshtCd"           ), param);
	}
	
	
	// 운영단위 참조코드 설정
	public List<Map<String, Object>> selectRefCd(Map<String, Object> param) throws Exception {
		return sqlSession.selectList   (ns("selectRefCd"          ), param);
	}
	public int saveRefCd(Map<String, Object> param) throws Exception {
		return sqlSession.insert       (ns("saveRefCd"            ), param);
	}
	
	
	// 운영단위 제어권한 설정
	public List<Map<String, Object>> selectCtlAuthInfo(Map<String, Object> param) throws Exception {
		return sqlSession.selectList(ns("selectCtlAuthInfo"           ), param);
	}
	public int saveCtlAuthInfo(Map<String, Object> param) throws Exception {
			   sqlSession.update    (ns("saveCtlAuthInfo"             ), param);
		return sqlSession.update    (ns("saveCtlAuthInfoHst"          ), param);
	}
	public int saveCtlAuthInfo4MbrJoinApprr(Map<String, Object> param) throws Exception {
		int updtCunt = 0;
		
		if (null!=param.get("MBR_JOIN_APPRR")) {
			sqlSession.update    (ns("saveCtlAuthInfo4MbrJoinApprr"       ), param);
		}
			sqlSession.update    (ns("postSaveCtlAuthInfo4MbrJoinApprr"   ), param);
		
		return updtCunt;
	}
	
	
	// 입고 책임자 설정
	public List<Map<String, Object>> selectByoprunitGiChrpsn(Map<String, Object> param) throws Exception {
		return sqlSession.selectList(ns("selectByoprunitGiChrpsn"     ), param);
	}
	public List<Map<String, Object>> selectBydeptGiChrpsn   (Map<String, Object> param) throws Exception {
		return sqlSession.selectList(ns("selectBydeptGiChrpsn"        ), param);
	}
	public int saveByoprunitGiChrpsn(Map<String, Object> param) throws Exception {
		int r = 0;
		List<Map<String, Object>> lsBYOPRUNIT_GI_CHRPSN = (List<Map<String, Object>>) param.get("BYOPRUNIT_GI_CHRPSN");
		if (lsBYOPRUNIT_GI_CHRPSN != null && lsBYOPRUNIT_GI_CHRPSN.size() > 0) {
			List<String> lsGI_CHRPSN_ID = (List<String>) lsBYOPRUNIT_GI_CHRPSN.get(0).get("GI_CHRPSN_ID");
			if (lsGI_CHRPSN_ID != null && lsGI_CHRPSN_ID.size() > 0) {
				sqlSession.update    (ns("saveByoprunitGiChrpsn"       ), param);
			}
			
				sqlSession.update    (ns("savePostByoprunitGiChrpsn"   ), param);
		}
		
		return r;
	}
	public int saveBydeptGiChrpsn   (Map<String, Object> param) throws Exception {
		int r = 0;
		
		List<Map<String, Object>> lsBYOPRUNIT_GI_CHRPSN = (List<Map<String, Object>>) param.get("BYDEPT_GI_CHRPSN");
		if (lsBYOPRUNIT_GI_CHRPSN != null && lsBYOPRUNIT_GI_CHRPSN.size() > 0) {
			List<String> lsGI_CHRPSN_ID = (List<String>) lsBYOPRUNIT_GI_CHRPSN.get(0).get("GI_CHRPSN_ID");
			if (lsGI_CHRPSN_ID != null && lsGI_CHRPSN_ID.size() > 0) {
				sqlSession.update    (ns("saveBydeptGiChrpsn"          ), param);
			}
				sqlSession.update    (ns("savePostBydeptGiChrpsn"      ), param);
		}
		
		return r;
	}
	
	public int saveOprunitGiLvl     (Map<String, Object> param) throws Exception {
		return sqlSession.update     (ns("saveOprunitGiLvl"            ), param);
	}
	
	//출고명세서 목록 팝업 ,	박재광,	2022. 05. 10.
	public List<Map<String, Object>> selectGoStmList(Map<String, Object> param) throws Exception {
		return sqlSession.selectList(ns("selectGoStmList"), param);
	}
	
	//출고명세서 목록 팝업 카운트 조회(팝업용),	박재광,	2022. 05. 10.
	public int selectGoStmListCnt(Map<String, Object> param) throws Exception {
		return sqlSession.selectOne(ns("selectGoStmListCnt"), param);
	}
	
	@Override
	public List<Map<String, Object>> selectStlMeanCd(Map<String, Object> param) throws Exception {
		return sqlSession.selectList(ns("selectStlMeanCd"), param);
	}


	@Override
	public int saveDeptCtlAuthInfo(Map<String, Object> param) throws Exception {
		return sqlSession.update (ns("saveDeptCtlAuthInfo"), param);
		
	}

	@Override
	public int saveDeptCtlAuthInfoHst(Map<String, Object> param) throws Exception {
		return sqlSession.insert(ns("saveDeptCtlAuthInfoHst"), param);
		
	}


	@Override
	public int chkMbrJoinAppr(Map<String, Object> param) throws Exception {
		return sqlSession.selectOne(ns("chkMbrJoinAppr"), param);
	}
	
	
	
	/* [2022.07.05] 박성근 설정된 입고레벨 이외의 입고담당자 정보는 삭제처리 */
	@Override
	public int deleteByoprunitGiChrpsn(Map<String, Object> param) throws Exception {
		return sqlSession.delete(ns("deleteByoprunitGiChrpsn"), param);
	}
	
	@Override
	public int deleteBydeptGiChrpsn   (Map<String, Object> param) throws Exception {
		return sqlSession.delete(ns("deleteBydeptGiChrpsn"   ), param);
	}
	/* /[2022.07.05] 박성근 설정된 입고레벨 이외의 입고담당자 정보는 삭제처리 */


	@Override
	public List<Map<String, Object>> selectChkCcoDetail(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectList(ns("selectChkCcoDetail"), searchMap);
	}
}
