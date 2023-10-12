package com.ssp.bo.co.service.impl;

import java.util.List;
import java.util.Map;

import com.ssp.core.co.util.CommonUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.ssp.bo.co.dao.CoComCdMngDao;
import com.ssp.bo.co.service.CoComCdMngService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title 메뉴관리 service implements
 * @package com.ssp.core.co.service.impl
 * <pre>    CoComCdMngServiceImpl
 * @author lee
 * @since 2022-01-25
 * @version 1.0
 * @see CoComCdMngServiceImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022. 01. 25.		lee	최초작성
 */
@Service("coComCdMngService")
public class CoComCdMngServiceImpl implements CoComCdMngService {

    @Autowired
    private CoComCdMngDao coComCdMngDao;

    private final Logger logger = LoggerFactory.getLogger(CoComCdMngServiceImpl.class);

    /**
     *
     * <pre>
     * 1. MethodName : selectComCdClsfSearchCount
     * 2. ClassName : CoComCdMngServiceImpl
     * 3. Comment : 분류코드 목록 카운트
     * 4. 작성자 : lee
     * 5. 작성일 : 2022-02-25
     * </pre>
     *
     * @param searchMap Map
     * @return int
     * @throws Exception exception
     */
    @Override
    public int selectComCdClsfSearchCount(Map<String, Object> searchMap) throws Exception {
        return coComCdMngDao.selectComCdClsfSearchCount(searchMap);
    }

    /**
     *
     * <pre>
     * 1. MethodName : comCodeExcelList
     * 2. ClassName : CoComCdMngServiceImpl
     * 3. Comment : 공통코드 엑셀 다운로드용 조회
     * 4. 작성자 : lee
     * 5. 작성일 : 2022-05-19
     * </pre>
     *
     * @param searchMap Map
     * @return List
     */
	@Override
	public List<Map<String, Object>> comCodeExcelList(Map<String, Object> searchMap) throws Exception {
        return coComCdMngDao.comCodeExcelList(searchMap);
	}

	/**
     *
     * <pre>
     * 1. MethodName : comCdClsfSearchList
     * 2. ClassName : CoCommonServiceImpl
     * 3. Comment : 분류코드 리스트를 조회한다.
     * 4. 작성자 : lee
     * 5. 작성일 : 2022-01-25
     * </pre>
     *
     * @param commandMap Map
     * @return NexacroResult
     * @throws Exception e
     */
    @Override
    public List<Map<String,Object>> comCdClsfSearchList(Map<String, Object> commandMap) throws Exception {
        return coComCdMngDao.selectComCdClsfSearchList(commandMap);
    }

    /**
     * 상세코드 리스트를 조회한다.
     * @param searchMap Map
     * @return List
     * @throws Exception Exception
     */
    @Override
    public List<Map<String, Object>> comCdClsfDtlSearchList(Map<String, Object> searchMap) throws Exception {
        return coComCdMngDao.selectComCdClsfDtlSearchList(searchMap);
    }

    /**
     *
     * <pre>
     * 1. MethodName : comCdClsfSave
     * 2. ClassName : CoCommonServiceImpl
     * 3. Comment : 분류코드 저장
     * 4. 작성자 : lee
     * 5. 작성일 : 2022-01-25
     * </pre>
     *
     * @param commandMap List<Map<String, Object>>
     * @param commandMapList List<Map<String, Object>>
     * @return NexacroResult
     * @throws Exception exception
     */
    @Override
    public void comCdClsfSave(List<Map<String, Object>> commandMap, List<Map<String, Object>> commandMapList) throws Exception {

        int rtn = 0;
        // 메인코드 저장.
        try{
        	Map<String, Object> admin = SessionsAdmin.getSessionAdmn();

            for( Map<String, Object> data : commandMap ) {
                int saveType = StringUtil.getInt(data.get("DataSetRowType"));
                String langCd = StringUtil.getString(data.get("LANG_CD"), "KO");

                //언어코드
                data.put("LANG_CD", langCd);

                String msg = "";
                Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);
                
                if( saveType == 1) {   // 신규
                    // 분류코드 존재여부 카운트
                    int comCdCount = coComCdMngDao.selectComCdClsCount(saveMap);

                    if( comCdCount > 0 ) {
                        String comClsfCd = StringUtil.getString(saveMap.get("comClsfCd"));
                        String comClsfCdNm = StringUtil.getString(saveMap.get("comClsfCdNm"));

                        throw new MessageException(-100, "분류코드 : " + comClsfCd + " ( " + comClsfCdNm + " ) " + "가 중복되어 등록 할 수 없습니다.");
                    }
                    
                    saveMap.put("regpsnId", admin.get("OPRTR_ID"));
                    rtn = coComCdMngDao.insertComCdClsf(saveMap);
                    msg = "등록";

                } else if( saveType == 2 ) {    //  수정
                	saveMap.put("updpsnId", admin.get("OPRTR_ID"));
                	rtn = coComCdMngDao.updateComCdClsf(saveMap);
                    msg = "수정";

                } else if( saveType == 3 ) {    //  삭제
                    int detailListCount = coComCdMngDao.selectComCdClsfDtlCount(saveMap);
                    if( detailListCount == 0 ) {
                        rtn = coComCdMngDao.deleteComCdClsf(saveMap);
                    } else {

                        String comClsfCd = StringUtil.getString(saveMap.get("comClsfCd"));
                        String comClsfCdNm = StringUtil.getString(saveMap.get("comClsfCdNm"));

                        throw new MessageException(-100, "분류코드 : " + comClsfCd + "(" + comClsfCdNm + ")" + " 의 상세코드가 존재하여 삭제할 수 없습니다.");
                    }
                    msg = "삭제";
                }
                if( rtn <= 0 ) throw new MessageException(-100, "메인코드 " + msg + " 실패");

            }

            //상세코드 저장
            for( Map<String, Object> data : commandMapList ) {
                int saveType = StringUtil.getInt(data.get("DataSetRowType"));
                String msg = "";
                Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);
                if( saveType == 1) {   // 신규

                    // 상세코드 중복여부 체크
                    int detailCodeCount = coComCdMngDao.selectComCdClsfDtlCount(saveMap);

                    if (detailCodeCount > 0) {
                        String comDtlCd = StringUtil.getString(saveMap.get("comDtlCd"));
                        String comDtlCdNm = StringUtil.getString(saveMap.get("comDtlCdNm"));

                        throw new MessageException(-100, "상세 코드 : " + comDtlCd + "(" + comDtlCdNm + ")" + " 가 중복되어 등록 할 수 없습니다.");
                    }

                    saveMap.put("regpsnId", admin.get("OPRTR_ID"));
                    rtn = coComCdMngDao.insertComCdClsfDtl(saveMap);
                    msg = "등록";

                } else if(  saveType == 2 ) {  //  수정
                	saveMap.put("updpsnId", admin.get("OPRTR_ID"));
                	rtn = coComCdMngDao.updateComCdClsfDtl(saveMap);
                    msg = "수정";

                } else if( saveType == 3 ) {    //  삭제
                    rtn = coComCdMngDao.deleteComCdClsfDtl(saveMap);
                    msg = "삭제";

                }


                if( rtn <= 0 ) throw new MessageException(-100, "상세코드 " + msg + " 실패");
            }

        } catch ( MessageException e) {
            if( e.getCode() == -100 ) {
                TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
            }
            throw e;
        }
    }


}
