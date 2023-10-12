/*------------------------------------------------------------------------------
 * NAME : NewPrdMltReqLstDao.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2023.07.04  김완수
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 *
 * @title   NewPrdMltReqLstDao
 * @@desc   신규상품일괄요청처리 Dao
 * @package com.ssp.bo.rd.dao
 * <pre>
 * @author
 * @since 2023.07.04
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2023.07.04			       최초작성
 */
public interface NewPrdMltReqLstDao {

    /**
     * 신규상품요청처리 리스트 조회(selectNewPrdMltReqLst)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectNewPrdMltReqLst(Map<String, Object> map) throws Exception;
    
    /**
     * 합의완료 진열상태 리스트 조회(selectAgrCompDispStt)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectAgrCompDispStt(Map<String, Object> map) throws Exception;

    /**
     * 신규상품요청처리 리스트 중복 체크조회(selectNewPrdMltReqLstCount)
     * @param input
     * @return
     * @throws Exception
     */
    int selectNewPrdMltReqLstCount(Map<String, Object> map) throws Exception;

    /**
     * 신규상품요청처리 리스트 저장(insertNewPrdReqLst)
     * @param input
     * @return
     * @throws Exception
     */
    int updateAgrProcRsn(Map<String, Object> map) throws Exception;
    
    /**
     * 신규상품일괄등록 상세리스트 조회(selectNewPrdReqLst)
     * @param input
     * @return
     * @throws Exception
     */
	List<Map> selectNewPrdReqLst(String newPrdReqGrpNo) throws Exception;

	/**
     * 신규상품일괄등록반려 저장(updateNewPrdMltReqRjct)
     * @param input
     * @return
     * @throws Exception
     */
	int updateNewPrdMltReqRjct(Map<String, Object> dataMap) throws Exception;
	
	/**
     * 신규상품일괄등록합의 정보 조회(updateNewPrdMltReqRjct)
     * @param input
     * @return
     * @throws Exception
     */
	List<Map> selectNewPrdReqInfo(Map<String, Object> infoMap) throws Exception;

	/**
     * 디테일 테이블 PRD_ID 수정(updatePrdId)
     * @param input
     * @return
     * @throws Exception
     */
	int updatePrdId(Map<String, Object> saveData) throws Exception;
	
	
	/**
    * 해당 상품ID 로 트리거로 진열 처리된 것을 일괄 변경 처리 
    * @param newPrdReqGrpNo
    * @return
    * @throws Exception
    */
	int updateNewPrdDisp(String newPrdReqGrpNo) throws Exception;
	
	/**
	 * 협력사 메일수신여부 확인(selectCprtcpMailRcvAgreYn)
	 * @param input
	 * @return
	 * @throws Exception
	 */
	String selectCprtcpMailRcvAgreYn(Map<String, Object> saveData) throws Exception;

	/**
	 * 협력사 담당자 정보 확인(selectChrpsnInfo)
	 * @param input
	 * @return
	 * @throws Exception
	 */
	List<Map> selectChrpsnInfo(Map<String, Object> param) throws Exception;
}