package com.ssp.bo.sa.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.nexacro.uiadapter17.spring.core.NexacroException;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.co.service.impl.CoComCdMngServiceImpl;
import com.ssp.bo.sa.dao.EvtInfoDao;
import com.ssp.bo.sa.service.EvtInfoService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title 이벤트 Serviceimpl
 * @package com.ssp.bo.sample.service.impl
 * </pre>
 * 
 * @author 박진원
 * @since 2022.03.14.
 * @version 1.0
 * @see EvtInfoServiceImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.03.14.	박진원		최초작성
 */
@Service("EvtInfoService")
public class EvtInfoServiceImpl implements EvtInfoService
{
	@Resource(name = "EvtInfoDao")
	private EvtInfoDao EvtInfoDao;

    private final Logger logger = LoggerFactory.getLogger(CoComCdMngServiceImpl.class);

	/**
	* <pre>
	* 1. MethodName : selectEvtInfoList
	* 2. ClassName : EvtInfoServiceImpl
	* 3. Comment : 이벤트 목록 조회
	* 4. 작성자 : 박진원
	* 5. 작성일 : 2022.03.14.
	* </pre>
	*
	* @param searchMap
	* @return
	* @throws NexacroException
	*/
	@Override
	public List<Map<String,Object>> selectEvtInfoList(Map<String, Object> searchMap) throws Exception
	{
		return EvtInfoDao.selectEvtInfoList(searchMap);
	}

	/**
	* <pre>
	* 1. MethodName : selectEvtInfoListCount
	* 2. ClassName : EvtInfoServiceImpl
	* 3. Comment : 이벤트 목록 건수 조회
	* 4. 작성자 : 박진원
	* 5. 작성일 : 2022.03.14.
	* </pre>
	*
	* @param searchMap
	* @return
	* @throws NexacroException
	*/
	@Override
	public int selectEvtInfoListCount(Map<String, Object> searchMap) throws Exception
	{
		return EvtInfoDao.selectEvtInfoListCount(searchMap);
	}

	/**
	* <pre>
	* 1. MethodName : saveEvtInfo
	* 2. ClassName : EvtInfoServiceImpl
	* 3. Comment : 이벤트 등록/수정/삭제
	* 4. 작성자 : 박진원
	* 5. 작성일 : 2022.03.14.
	* </pre>
	*
	* @param saveEvtInfoMap, saveEvtOprUnitMapList
	* @return
	* @throws NexacroException
	*/
	@Override
	public NexacroResult saveEvtInfo(Map<String, Object> saveEvtInfoMap, 
			List<Map<String, Object>> saveEvtOprUnitMapList) throws Exception
	{	
        NexacroResult result = new NexacroResult();

        try
        {
            int rtn = 0;
            String msg = "";
    		
            String sEvtSeq = StringUtil.getString(saveEvtInfoMap.get("evtSeq"));
            String sRegpsnId = StringUtil.getString(saveEvtInfoMap.get("regpsnId"));
            String sUpdpsnId = StringUtil.getString(saveEvtInfoMap.get("updpsnId"));

            if ("".equals(sEvtSeq))
            {	
            	// 이벤트 시퀀스 값 조회
            	Map<String,Object> evtInfoSeqMap = EvtInfoDao.selectEvtInfoSeq(saveEvtInfoMap);

                String sEvtSeqNew = StringUtil.getString(evtInfoSeqMap.get("EVT_SEQ"));
                
                sEvtSeq = sEvtSeqNew;

                saveEvtInfoMap.put("evtSeq", sEvtSeq);
                
            	// 이벤트 기본 정보 등록
                rtn = EvtInfoDao.insertEvtInfo(saveEvtInfoMap);
                msg = "이벤트 기본 정보 등록";            	
            }
            else
            {
            	// 이벤트 기본 정보 수정
                rtn = EvtInfoDao.updateEvtInfo(saveEvtInfoMap);
                msg = "이벤트 기본 정보 수정";            	
            }

            // 운영단위 삭제
            for( Map<String, Object> data : saveEvtOprUnitMapList )
            {
            	int saveType = StringUtil.getInt(data.get("DataSetRowType"));

                Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);

                saveMap.put("evtSeq", sEvtSeq);
            	saveMap.put("regpsnId", sRegpsnId);
            	saveMap.put("updpsnId", sUpdpsnId);

                if( saveType == 3 )
                {
                	// 삭제

                	// 이벤트 운영단위 정보 삭제
                    rtn = EvtInfoDao.deleteEvtOprUnit(saveMap);
                    msg = "이벤트 운영단위 정보 삭제";   
                }
            }

            // 운영단위 등록/수정.
            for( Map<String, Object> data : saveEvtOprUnitMapList )
            {
            	int saveType = StringUtil.getInt(data.get("DataSetRowType"));

                Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);

                saveMap.put("evtSeq", sEvtSeq);
            	saveMap.put("regpsnId", sRegpsnId);
            	saveMap.put("updpsnId", sUpdpsnId);

                if( saveType == 1)
                {
                	// 등록

                	// 이벤트 운영단위 정보 등록
                    rtn = EvtInfoDao.insertEvtOprUnit(saveMap);
                    msg = "이벤트 운영단위 정보 등록";   
            	}
                else if( saveType == 2 )
                {
                	// 수정
                }
            }

            if( rtn < 0 )
            {
            	throw new MessageException(-100, msg + " 실패");
            }
		}
        catch ( MessageException e )
        {
            logger.info("result==>" + e.getCode());
            logger.info("result==>" + e.getMessage());

            // 에러코드 반환시만 처리하자
            if( e.getCode() == -100 )
            {
                TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
                result.setErrorCode(e.getCode());
                result.setErrorMsg(e.getMessage());
                return result;
            }
            else
            {
                throw e;
            }
        }

        return result;
	}

	/**
	* <pre>
	* 1. MethodName : selectEvtInfo
	* 2. ClassName : EvtInfoServiceImpl
	* 3. Comment : 이벤트 상세
	* 4. 작성자 : 박진원
	* 5. 작성일 : 2022.03.14.
	* </pre>
	*
	* @param searchMap
	* @return
	* @throws NexacroException
	*/
	@Override
	public Map<String,Object> selectEvtInfo(Map<String, Object> searchMap) throws Exception
	{
		return EvtInfoDao.selectEvtInfo(searchMap);
	}

	/**
	* <pre>
	* 1. MethodName : selectEvtOprUnitList
	* 2. ClassName : EvtInfoServiceImpl
	* 3. Comment : 이벤트 운영단위상세
	* 4. 작성자 : 박진원
	* 5. 작성일 : 2022.03.14.
	* </pre>
	*
	* @param searchMap
	* @return
	* @throws NexacroException
	*/
	@Override
	public List<Map<String,Object>> selectEvtOprUnitList(Map<String, Object> searchMap) throws Exception
	{
		return EvtInfoDao.selectEvtOprUnitList(searchMap);
	}

	/**
	* <pre>
	* 1. MethodName : deleteEvtInfo
	* 2. ClassName : EvtInfoServiceImpl
	* 3. Comment : 이벤트 삭제
	* 4. 작성자 : 박진원
	* 5. 작성일 : 2022.03.14.
	* </pre>
	*
	* @param searchMap
	* @return
	* @throws NexacroException
	*/
	@Override
	public NexacroResult deleteEvtInfo(Map<String, Object> searchMap) throws Exception
	{	
        NexacroResult result = new NexacroResult();

        try
        {
            int rtn = 0;
            String msg = "";

        	// 이벤트 정보 삭제
            rtn = EvtInfoDao.deleteEvtInfo(searchMap);
            msg = "이벤트 정보 삭제";   

        	// 이벤트 운영단위 정보 삭제 (전체)
            rtn = EvtInfoDao.deleteEvtOprUnitAll(searchMap);
            msg = "이벤트 운영단위 정보 삭제 (전체)";   

            if( rtn < 0 )
            {
            	throw new MessageException(-100, msg + " 실패");
            }
		}
        catch ( MessageException e )
        {
            logger.info("result==>" + e.getCode());
            logger.info("result==>" + e.getMessage());

            // 에러코드 반환시만 처리하자
            if( e.getCode() == -100 )
            {
                TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
                result.setErrorCode(e.getCode());
                result.setErrorMsg(e.getMessage());
                return result;
            }
            else
            {
                throw e;
            }
        }

        return result;
	}

	/**
	* <pre>
	* 1. MethodName : selectEvtPrtcDtlsList
	* 2. ClassName : EvtInfoServiceImpl
	* 3. Comment : 이벤트 - 응모형- 참여자목록 조회
	* 4. 작성자 : 박진원
	* 5. 작성일 : 2022.03.16.
	* </pre>
	*
	* @param searchMap
	* @return
	* @throws NexacroException
	*/
	@Override
	public List<Map<String,Object>> selectEvtPrtcDtlsList(Map<String, Object> searchMap) throws Exception
	{
		return EvtInfoDao.selectEvtPrtcDtlsList(searchMap);
	}

	/**
	* <pre>
	* 1. MethodName : selectEvtPrtcDtlsListCount
	* 2. ClassName : EvtInfoServiceImpl
	* 3. Comment : 이벤트 - 응모형- 참여자목록 건수 조회
	* 4. 작성자 : 박진원
	* 5. 작성일 : 2022.03.16.
	* </pre>
	*
	* @param searchMap
	* @return
	* @throws NexacroException
	*/
	@Override
	public int selectEvtPrtcDtlsListCount(Map<String, Object> searchMap) throws Exception
	{
		return EvtInfoDao.selectEvtPrtcDtlsListCount(searchMap);
	}

	/**
	* <pre>
	* 1. MethodName : saveEvtPrtcDtls
	* 2. ClassName : EvtInfoServiceImpl
	* 3. Comment : 이벤트 - 응모형- 참여자목록 댓글 공개 여부 수정
	* 4. 작성자 : 박진원
	* 5. 작성일 : 2022.03.16.
	* </pre>
	*
	* @param saveEvtPrtcDtlsMapList
	* @return
	* @throws NexacroException
	*/
	@Override
	public NexacroResult saveEvtPrtcDtls(List<Map<String, Object>> saveEvtPrtcDtlsMapList) throws Exception
	{	
        NexacroResult result = new NexacroResult();

        try
        {
        	String sRegpsnId = "";
        	String sUpdpsnId = "";
        	
			Map<String, Object> sessionsAdmin = SessionsAdmin.getSessionAdmn();
			
			if (sessionsAdmin != null)
			{
				sRegpsnId = StringUtil.getString(sessionsAdmin.get("OPRTR_ID"));
				sUpdpsnId = StringUtil.getString(sessionsAdmin.get("OPRTR_ID"));
			}

            int rtn = 0;
            String msg = "";

            // 댓글 공개 여부 수정
            for( Map<String, Object> data : saveEvtPrtcDtlsMapList )
            {
                Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);

            	saveMap.put("regpsnId", sRegpsnId);
            	saveMap.put("updpsnId", sUpdpsnId);

            	// 댓글 공개 여부 수정
                rtn = EvtInfoDao.updateEvtPrtcDtls(saveMap);
                msg = "댓글 공개 여부 수정"; 
            }

            if( rtn < 0 )
            {
            	throw new MessageException(-100, msg + " 실패");
            }
		}
        catch ( MessageException e )
        {
            logger.info("result==>" + e.getCode());
            logger.info("result==>" + e.getMessage());

            // 에러코드 반환시만 처리하자
            if( e.getCode() == -100 )
            {
                TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
                result.setErrorCode(e.getCode());
                result.setErrorMsg(e.getMessage());
                return result;
            }
            else
            {
                throw e;
            }
        }

        return result;
	}

	/**
	* <pre>
	* 1. MethodName : selectEvtPrtcDtlsStampList
	* 2. ClassName : EvtInfoServiceImpl
	* 3. Comment : 이벤트 - 스템프형- 참여자목록 조회
	* 4. 작성자 : 박진원
	* 5. 작성일 : 2022.03.16.
	* </pre>
	*
	* @param searchMap
	* @return
	* @throws NexacroException
	*/
	@Override
	public List<Map<String,Object>> selectEvtPrtcDtlsStampList(Map<String, Object> searchMap) throws Exception
	{
		return EvtInfoDao.selectEvtPrtcDtlsStampList(searchMap);
	}

	/**
	* <pre>
	* 1. MethodName : selectEvtPrtcDtlsStampListCount
	* 2. ClassName : EvtInfoServiceImpl
	* 3. Comment : 이벤트 - 스템프형- 참여자목록 건수 조회
	* 4. 작성자 : 박진원
	* 5. 작성일 : 2022.03.16.
	* </pre>
	*
	* @param searchMap
	* @return
	* @throws NexacroException
	*/
	@Override
	public int selectEvtPrtcDtlsStampListCount(Map<String, Object> searchMap) throws Exception
	{
		return EvtInfoDao.selectEvtPrtcDtlsStampListCount(searchMap);
	}

	/**
	* <pre>
	* 1. MethodName : selectEvtPrtcDtlsStampAllList
	* 2. ClassName : EvtInfoServiceImpl
	* 3. Comment : 이벤트 - 스템프형- 참여자목록 (전체)
	* 4. 작성자 : 박진원
	* 5. 작성일 : 2022.03.16.
	* </pre>
	*
	* @param searchMap
	* @return
	* @throws NexacroException
	*/
	@Override
	public List<Map<String,Object>> selectEvtPrtcDtlsStampAllList(Map<String, Object> searchMap) throws Exception
	{
		return EvtInfoDao.selectEvtPrtcDtlsStampAllList(searchMap);
	}

	/**
	* <pre>
	* 1. MethodName : selectEvtInfoMbrList
	* 2. ClassName : EvtInfoServiceImpl
	* 3. Comment : 이벤트 목록 (회원) 조회
	* 4. 작성자 : 박진원
	* 5. 작성일 : 2022.03.17.
	* </pre>
	*
	* @param searchMap
	* @return
	* @throws NexacroException
	*/
	@Override
	public List<Map<String,Object>> selectEvtInfoMbrList(Map<String, Object> searchMap) throws Exception
	{
		return EvtInfoDao.selectEvtInfoMbrList(searchMap);
	}

	/**
	* <pre>
	* 1. MethodName : selectEvtInfoMbrListCount
	* 2. ClassName : EvtInfoServiceImpl
	* 3. Comment : 이벤트 목록 (회원) 건수 조회
	* 4. 작성자 : 박진원
	* 5. 작성일 : 2022.03.17.
	* </pre>
	*
	* @param searchMap
	* @return
	* @throws NexacroException
	*/
	@Override
	public int selectEvtInfoMbrListCount(Map<String, Object> searchMap) throws Exception
	{
		return EvtInfoDao.selectEvtInfoMbrListCount(searchMap);
	}
}
