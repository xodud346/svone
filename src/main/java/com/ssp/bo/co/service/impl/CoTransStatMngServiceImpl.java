package com.ssp.bo.co.service.impl;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.ssp.bo.co.dao.CoTransStatMngDao;
import com.ssp.bo.co.service.CoTransStatMngService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title CoTransStatMngServiceImpl
 * @desc 거래명세서관리 service implement
 * @package com.ssp.bo.co.service.impl
 * <pre>
 * @author lee
 * @since 2022-03-11
 * @version 1.0
 * @see CoTransStatMngServiceImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022-03-11	lee	최초작성
 */
@Service("coTransStatMngService")
public class CoTransStatMngServiceImpl implements CoTransStatMngService {

    private final Logger logger = LoggerFactory.getLogger(CoTransStatMngServiceImpl.class);

    @Autowired
    CoTransStatMngDao coTransStatMngDao;

    /**
     *
     * <pre>
     * 1. MethodName : selectTransStatMngListCount
     * 2. ClassName : CoTransStatMngServiceImpl
     * 3. Comment : 거래명세서관리 목록 카운트 조회
     * 4. 작성자 : lee
     * 5. 작성일 : 2022-03-11
     * </pre>
     *
     * @param searchMap Map
     * @return int
     */
    @Override
    public int selectTransStatMngListCount(Map<String, Object> searchMap) {
        logger.info("####################### selectTransStatMngListCount #############################");
        return coTransStatMngDao.selectTransStatMngListCount(searchMap);
    }

    /**
     *
     * <pre>
     * 1. MethodName : selectTransStatMngList
     * 2. ClassName : CoTransStatMngServiceImpl
     * 3. Comment : 거래명세서관리 목록 조회
     * 4. 작성자 : lee
     * 5. 작성일 : 2022-03-11
     * </pre>
     *
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectTransStatMngList(Map<String, Object> searchMap) {
        logger.info("####################### selectTransStatMngList #############################");
        return coTransStatMngDao.selectTransStatMngList(searchMap);
    }

    /**
     *
     * <pre>
     * 1. MethodName : saveTransStatMng
     * 2. ClassName : CoTransStatMngServiceImpl
     * 3. Comment : 거래명세서 목록 저장
     * 4. 작성자 : lee
     * 5. 작성일 : 2022-03-11
     * </pre>
     *
     * @param commandMapList List
     * @return int
     * @throws Exception io
     */
    @Override
    public int saveTransStatMng(List<Map<String, Object>> commandMapList) throws Exception {

        int rtn = 0;
        String msg = "";
        // 메인코드 저장.
        try{

            Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

            for( Map<String, Object> data : commandMapList ) {
                int saveType = StringUtil.getInt(data.get("DataSetRowType"));
                String langCd = StringUtil.getString(data.get("LANG_CD"), "KO");

                //언어코드
                data.put("LANG_CD", langCd);
                data.put("CO_CD", admin.get("CO_CD"));
                data.put("MBR_ID", admin.get("MBR_ID"));
                data.put("REGPSN_ID", admin.get("OPRTR_ID"));
                data.put("UPDPSN_ID", admin.get("OPRTR_ID"));

                Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);

                if( saveType == 1) {   // 신규
                    msg = "등록";

                    // 리포트 존재여부 카운트
                    int comCdCount = coTransStatMngDao.selectTransStatMngListCount(saveMap);

                    if( comCdCount > 0 ) {
                        String rptId = StringUtil.getString(saveMap.get("rptId"));
                        //String msgCts = StringUtil.getString(saveMap.get("msgCts"));

                        throw new MessageException(-100, "리포트 ID : " + rptId + " 가 중복되어 등록 할 수 없습니다.");
                    }

                    rtn = coTransStatMngDao.insertTransStatMng(saveMap);

                } else if( saveType == 2 ) {    //  수정
                    msg = "수정";
                    rtn = coTransStatMngDao.updateTransStatMng(saveMap);

                } else if( saveType == 3 ) {    //  삭제
                    msg = "삭제";
                    rtn = coTransStatMngDao.deleteTransStatMng(saveMap);
                }
            }

            if( rtn == 0 ) throw new MessageException(-100, "거래명세서 목록 " + msg +" 에 실패했습니다.");

        } catch ( MessageException e ) {
            if( e.getCode() == -100 ) {
                TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
            }
            throw e;
        }
        return 0;
    }
}
