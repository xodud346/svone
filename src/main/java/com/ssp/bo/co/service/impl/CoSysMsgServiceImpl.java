package com.ssp.bo.co.service.impl;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.ssp.bo.co.dao.CoSysMsgDao;
import com.ssp.bo.co.service.CoSysMsgService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title  시스템메시지관리
 * @desc 서비스
 * @package com.ssp.bo.co.service.impl
 * <pre>    CoSysMsgServiceImpl
 * @author lee
 * @since 2022-03-08
 * @version 1.0
 * @see CoSysMsgServiceImpl
 * =================== 변경 내역 ==================`
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022-03-08	lee	최초작성
 */
@Service("coSysMsgService")
public class CoSysMsgServiceImpl implements CoSysMsgService {

    private final Logger logger = LoggerFactory.getLogger(CoSysMsgServiceImpl.class);

    @Autowired
    CoSysMsgDao coSysMsgDao;

    /**
     *
     * <pre>
     * 1. MethodName : selectSystemMessageMngListCount
     * 2. ClassName : CoSysMsgServiceImpl
     * 3. Comment : 시스템 메세지관리 목록 개수 조회
     * 4. 작성자 : lee
     * 5. 작성일 : 2022-03-08
     * </pre>
     *
     * @param searchMap Map
     * @return int
     * @throws Exception io
     */
    @Override
    public int selectSystemMessageMngListCount(Map<String, Object> searchMap) throws Exception {
        return coSysMsgDao.selectSystemMessageMngListCount(searchMap);
    }

    /**
     *
     * <pre>
     * 1. MethodName : selectSystemMessageMngList
     * 2. ClassName : CoSysMsgServiceImpl
     * 3. Comment : 시스템 메세지관리 목록 조회
     * 4. 작성자 : lee
     * 5. 작성일 : 2022-03-08
     * </pre>
     *
     * @param searchMap Map
     * @return List
     * @throws Exception io
     */
    @Override
    public List<Map<String, Object>> selectSystemMessageMngList(Map<String, Object> searchMap) throws Exception {
        return coSysMsgDao.selectSystemMessageMngList(searchMap);
    }

    /**
     *
     * <pre>
     * 1. MethodName : saveSysMsg
     * 2. ClassName : CoSysMsgServiceImpl
     * 3. Comment : 시스템 메세지를 저장한다.
     * 4. 작성자 : lee
     * 5. 작성일 : 2022-03-10
     * </pre>
     *
     * @param commandMapList List
     * @return int
     * @throws Exception io
     */
    @Override
    public int saveSysMessageMng(List<Map<String, Object>> commandMapList) throws Exception {

        int rtn = 0;
        String msg = "";

        try {

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
                	String msgCts = (String) saveMap.get("msgCts");
                	String useYn = (String) saveMap.get("useYn");
                	saveMap.put("useYn",useYn );
                	saveMap.put("msgCts", msgCts);
                    // 코드 존재여부 카운트
                    int comCdCount = coSysMsgDao.selectSystemMessageMngListCount(saveMap);

                    if( comCdCount > 0 ) {
                        String msgCd = StringUtil.getString(saveMap.get("msgCd"));
                        //String msgCts = StringUtil.getString(saveMap.get("msgCts"));

                        throw new MessageException(-100, "메시지 코드 : " + msgCd + " 가 중복되어 등록 할 수 없습니다.");
                    }

                    rtn = coSysMsgDao.insertSysMessageMng(saveMap);
                    msg = "등록";
                } else if( saveType == 2) {
                    rtn = coSysMsgDao.updateSysMessageMng(saveMap);
                    msg = "수정";
                } else if( saveType == 3) {
                    rtn = coSysMsgDao.deleteSysMessageMng(saveMap);
                    msg = "삭제";
                }
            }

            if( rtn == 0 ) throw new MessageException(-100, "시스템 메세지 " + msg +" 에 실패했습니다.");

        } catch ( MessageException me ) {
            if( me.getCode() == -100 ) {
                TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
            }
            throw me;
        }




        return rtn;
    }
}
