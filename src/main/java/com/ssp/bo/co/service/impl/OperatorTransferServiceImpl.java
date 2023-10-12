package com.ssp.bo.co.service.impl;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.ssp.bo.co.dao.OperatorTransferDao;
import com.ssp.bo.co.service.OperatorTransferService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.bo.co.service.impl
 * <pre>    OperatorTransferServiceImpl
 * @author lee
 * @since 2022-03-04
 * @version 1.0
 * @see OperatorTransferServiceImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022-03-04	lee	최초작성
 */
@Service("operatorTransferService")
public class OperatorTransferServiceImpl implements OperatorTransferService {

    private final Logger logger = LoggerFactory.getLogger(OperatorTransferServiceImpl.class);

    @Autowired
    private OperatorTransferDao operatorTransferDao;

    /**
     *
     * <pre>
     * 1. MethodName : selectCoMbrOprtrOrgInfoList
     * 2. ClassName : OperatorTransferServiceImpl
     * 3. Comment : 회원운영자조직정보 조회
     * 4. 작성자 : lee
     * 5. 작성일 : 2022-03-04
     * </pre>
     *
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectCoMbrOprtrOrgInfoList(Map<String, Object> searchMap) {
        logger.info("============================================= selectCoMbrOprtrOrgInfoList ==========================================================");
        return operatorTransferDao.selectCoMbrOprtrOrgInfoList(searchMap);
    }

    /**
     *
     * <pre>
     * 1. MethodName : selectCoMbrOprtrInfoList
     * 2. ClassName : OperatorTransferServiceImpl
     * 3. Comment : 회원운영자정보 조회
     * 4. 작성자 : lee
     * 5. 작성일 : 2022-03-04
     * </pre>
     *
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectCoMbrOprtrInfoList(Map<String, Object> searchMap) {
        logger.info("============================================= selectCoMbrOprtrInfoList ==========================================================");
        return operatorTransferDao.selectCoMbrOprtrInfoList(searchMap);
    }

    /**
     *
     * <pre>
     * 1. MethodName : selectCoMbrOprtrInfoInfList
     * 2. ClassName : OperatorTransferServiceImpl
     * 3. Comment : 회원운영자정보 INF 조회
     * 4. 작성자 : lee
     * 5. 작성일 : 2022-03-04
     * </pre>
     *
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectCoMbrOprtrInfoInfList(Map<String, Object> searchMap) {
        logger.info("============================================= selectCoMbrOprtrInfoInfList ==========================================================");
        return operatorTransferDao.selectCoMbrOprtrInfoInfList(searchMap);
    }

    /**
     *
     * <pre>
     * 1. MethodName : saveOperatorTransfer
     * 2. ClassName : OperatorTransferServiceImpl
     * 3. Comment : 회원 이관 저장
     * 4. 작성자 : lee
     * 5. 작성일 : 2022-03-07
     * </pre>
     *
     * @param saveTMap List
     * @param saveBMap List
     */
    @Override
    public void saveOperatorTransfer(List<Map<String, Object>> saveTMap, List<Map<String, Object>> saveBMap) throws Exception {

        int rtn = 0;
        String msg = "";
        try{

            // 인터페이스 테이블( TB_CO_MBR_OPRTR_INFO_IF ) 에 저장 및 삭제
            for( Map<String, Object> data : saveTMap ) {
                int saveType = StringUtil.getInt(data.get("DataSetRowType"));
                String langCd = StringUtil.getString(data.get("LANG_CD"), "KO");

                //언어코드
                data.put("LANG_CD", langCd);
                Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);

                //같은 데이터를 이동 후 재 이동 시키면 등록 상태가 된다. 무결성 에러가 발생하므로 조회 체크
                //int cnt = operatorTransferDao.selectCoMbrOprtrInfoInfCount(saveMap);
                //if( cnt > 0 ) continue;

                if( saveType == 1) {   // 신규
                    rtn = operatorTransferDao.insertOperatorInfTransfer(saveMap);
                } else if( saveType == 3) {   // 삭제
                    rtn = operatorTransferDao.deleteOperatorInfTransfer(saveMap);
                }
                msg = "회원운영자정보 인터페이스";
            }

            // INFO 테이블( TB_CO_MBR_OPRTR_INFO ) 에 저장 및 삭제
            for( Map<String, Object> data : saveBMap ) {
                int saveType = StringUtil.getInt(data.get("DataSetRowType"));
                String langCd = StringUtil.getString(data.get("LANG_CD"), "KO");

                //언어코드
                data.put("LANG_CD", langCd);
                Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);

                //같은 데이터를 이동 후 재 이동 시키면 등록 상태가 된다. 무결성 에러가 발생하므로 조회 체크
                //int cnt = operatorTransferDao.selectCoMbrOprtrInfoCount(saveMap);
                //if( cnt > 0 ) continue;

                if( saveType == 1) {   // 신규
                    rtn = operatorTransferDao.insertOperatorTransfer(saveMap);
                } else if( saveType == 3) {   // 삭제
                    rtn = operatorTransferDao.deleteOperatorTransfer(saveMap);
                }
                msg = "회원운영자정보";
            }

            if( rtn <= 0 ) throw new MessageException(-100, msg + "저장 실패");

        } catch ( MessageException e) {
            if( e.getCode() == -100 ) {
                TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
            }
            throw e;
        }
    }

    /**
    *
    * <pre>
    * 1. MethodName : selectOprtrOrgInfoList
    * 2. ClassName : OperatorTransferServiceImpl
    * 3. Comment : 운영자 조직 목록 조회
    * 4. 작성자 :
    * 5. 작성일 : 2022-03-08
    * </pre>
    *
    * @param searchMap Map
    * @return List
    */
   @Override
   public List<Map<String, Object>> selectOprtrOrgInfoList(Map<String, Object> searchMap) {
       logger.info("============================================= selectOprtrOrgInfoList ==========================================================");
       return operatorTransferDao.selectOprtrOrgInfoList(searchMap);
   }

    /**
    *
    * <pre>
    * 1. MethodName : selectCoMbrOprtrOrgInfoListCount
    * 2. ClassName : OperatorTransferServiceImpl
    * 3. Comment : 운영자 조직 목록 카운트 조회
    * 4. 작성자 :
    * 5. 작성일 : 2022.02.28
    * </pre>
    *
    * @param searchMap Map
    * @return NexacroResult
    */
	@Override
	public int selectOprtrOrgInfoListCount(Map<String, Object> searchMap) throws Exception {
		return operatorTransferDao.selectOprtrOrgInfoListCount(searchMap);
	}


    /**
    *
    * <pre>
    * 1. MethodName : selectOprtrInfoList
    * 2. ClassName : OperatorTransferServiceImpl
    * 3. Comment : 운영자 목록 조회
    * 4. 작성자 :
    * 5. 작성일 : 2022-03-08
    * </pre>
    *
    * @param searchMap Map
    * @return List
    */
   @Override
   public List<Map<String, Object>> selectOprtrInfoList(Map<String, Object> searchMap) {
       return operatorTransferDao.selectOprtrInfoList(searchMap);
   }

    /**
    *
    * <pre>
    * 1. MethodName : selectOprtrInfoListCount
    * 2. ClassName : OperatorTransferServiceImpl
    * 3. Comment : 운영자 목록 카운트 조회
    * 4. 작성자 :
    * 5. 작성일 : 2022.03.08
    * </pre>
    *
    * @param searchMap Map
    * @return NexacroResult
    */
	@Override
	public int selectOprtrInfoListCount(Map<String, Object> searchMap) throws Exception {
		return operatorTransferDao.selectOprtrInfoListCount(searchMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectMbrOprtrInfo
	 * 2. ClassName : CoCommonPopupServiceImpl
	 * 3. Comment : 운영자 상세 정보 조회
	 * 4. 작성자 : 
	 * 5. 작성일 : 2022.03.15
	 * </pre>
	 *
	 */
	@Override
	public Map<String, Object> selectMbrOprtrInfo(Map<String, Object> commandMap) throws Exception {
		return operatorTransferDao.selectMbrOprtrInfo(commandMap);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectCoMbrOprtrInfoExcelList
	 * 2. ClassName : OperatorTransferServiceImpl
	 * 3. Comment : 운영자 이관등록 엑셀 다운로드 조회
	 * 4. 작성자 : lee
	 * 5. 작성일 : 2022-05-17
	 * </pre>
	 *
	 * @param searchMap Map
	 * @return List
	 * @throws Exception exceltion
	 */
	@Override
	public List<Map<String, Object>> selectCoMbrOprtrInfoExcelList(Map<String, Object> searchMap) throws Exception {
		return operatorTransferDao.selectCoMbrOprtrInfoExcelList(searchMap);
	}

}
