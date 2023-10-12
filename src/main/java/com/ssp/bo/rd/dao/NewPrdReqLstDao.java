/*------------------------------------------------------------------------------
 * NAME : NewPrdReqLstDao.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.04.21  오왕표
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 *
 * @title   NewPrdReqLstDao
 * @@desc   신규상품요청처리 Dao
 * @package com.ssp.bo.rd.dao
 * <pre>
 * @author
 * @since 2022.04.21
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.04.21			       최초작성
 */
public interface NewPrdReqLstDao {

    /**
     * 신규상품요청처리 리스트 조회(selectNewPrdReqLst)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectNewPrdReqLst(Map<String, Object> map) throws Exception;

    /**
     * 신규상품요청번호 리스트 키값을 조회(selectNewPrdReqNoPKey)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectNewPrdReqNoPKey(Map<String, Object> map) throws Exception;

    /**
     * 신규상품ID 리스트 키값을 조회(selectNewPrdReqNoPKey)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectNewPrdIdPKey(Map<String, Object> map) throws Exception;

    /**
     * 신규상품요청처리 리스트 중복 체크조회(selectNewPrdReqLstCount)
     * @param input
     * @return
     * @throws Exception
     */
    int selectNewPrdReqLstCount(Map<String, Object> map) throws Exception;

    /**
     * 상품등록자사조회 리스트 조회(selectPrdRegOcorpInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectPrdRegOcorpInq(Map<String, Object> map) throws Exception;

    /**
     * 카테고리속성정보 카운트(selectCatgAttrInfo)
     * @param input
     * @return
     * @throws Exception
     */
    int selectNewPrdProcCount(Map<String, Object> map) throws Exception;
    
    /**
     * 카테고리속성정보 리스트 조회(selectCatgAttrInfo)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectCatgAttrInfo(Map<String, Object> map) throws Exception;

    /**
     * 상품고시상품 리스트 조회(selectPrdNotiPrdInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectPrdNotiPrdInq(Map<String, Object> map) throws Exception;

    /**
     * 요청처리내역 리스트 조회(selectReqProcDtlsInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectReqProcDtlsInq(Map<String, Object> map) throws Exception;

    /**
     * 첨부파일내역 리스트 조회(selectAttcFileDtlsInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectAttcFileDtlsInq(Map<String, Object> map) throws Exception;

    /**
     * 협력사요청정보 리스트 조회(selectCprtcpReqInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectCprtcpReqInfoInq(Map<String, Object> map) throws Exception;

    /**
     * 신규상품고객요청정보 조회(selectNewPrdCustReqInfo)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectNewPrdCustReqInfo(Map<String, Object> map) throws Exception;

    /**
     * 신규상품구매물량내역 조회(selectNewPrdPurgQtyDtls)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectNewPrdPurgQtyDtls(Map<String, Object> map) throws Exception;

    /**
     * 상품ID존재여부 조회(selectPrdIdExstYn)
     * @param input
     * @return
     * @throws Exception
     */
    String selectPrdIdExstYn(Map<String, Object> map) throws Exception;

    /**
     * 배지 리스트 정보 조회(selectBgListInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectBgListInfoInq(Map<String, Object> map) throws Exception;

    /**
     * 코드체크여부 조회(selectCdChkYnInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectCdChkYnInq(Map<String, Object> map) throws Exception;

    /**
     * 신규상품요청처리 리스트 저장(insertNewPrdReqLst)
     * @param input
     * @return
     * @throws Exception
     */
    int insertNewPrdReqLst(Map<String, Object> map) throws Exception;

    /**
     * 신규상품요청상태내역 리스트 저장(insertNewPrdReqStatsDtls)
     * @param input
     * @return
     * @throws Exception
     */
    int insertNewPrdReqStatsDtls(Map<String, Object> map) throws Exception;

    /**
     * 신규상품고객요청속성정보 리스트 저장(insertNewPrdCustReqAttrInfo)
     * @param input
     * @return
     * @throws Exception
     */
    int insertNewPrdCustReqAttrInfo(Map<String, Object> map) throws Exception;

    /**
     * 등록처리상품고시품목매핑 리스트 저장(insertRegProcPrdNotiItmMapp)
     * @param input
     * @return
     * @throws Exception
     */
    int insertRegProcPrdNotiItmMapp(Map<String, Object> map) throws Exception;

    /**
     * 신규상품요청반려처리 수정(updateNewPrdReqRjctProc)
     * @param input
     * @return
     * @throws Exception
     */
    int updateNewPrdReqRjctProc(Map<String, Object> map) throws Exception;

    /**
     * 협력사중복상품처리저장 수정
     *
     * @param map
     * @return
     * @throws Exception
     */
    int insertCprtcpDupPrdProcStor(Map<String, Object> map) throws Exception;

    /**
     * 협력사등록저장 수정(insertCprtcpRegStor)
     * @param input
     * @return
     * @throws Exception
     */
    int insertCprtcpRegStor(Map<String, Object> map) throws Exception;

    /**
     * 가격조건내역 삭제(deletePrcCondDtls)
     * @param input
     * @return
     * @throws Exception
     */
    int deletePrcCondDtls(Map<String, Object> map) throws Exception;

    /**
     * 가격조건내역 저장(insertPrcCondDtls)
     * @param input
     * @return
     * @throws Exception
     */
    int insertPrcCondDtls(Map<String, Object> map) throws Exception;

    /**
     * 신규상품요청처리속성정보 저장(insertNewPrdReqProcAttrInfoStor)
     * @param input
     * @return
     * @throws Exception
     */
    int insertNewPrdReqProcAttrInfoStor(Map<String, Object> map) throws Exception;

    /**
     * 고객SSP이관요청처리 저장(updateCustReqProc)
     * @param input
     * @return
     * @throws Exception
     */
    int updateCustReqProc(Map<String, Object> map) throws Exception;

    /**
     * 상품의 구매정보유무 검증(validatePurgInfo) 
     * @param input
     * @return
     * @throws Exception
     */
	int validatePurgInfo(Map<String, Object> map) throws Exception;
	
	/**
     * 해당사업장 진열정보유무 검증(validateDispInfo) 
     * @param input
     * @return
     * @throws Exception
     */
	int validateDispInfo(Map<String, Object> map) throws Exception;
	
	/**
     * 협력사 신규상품요청 검증(selectValidReqInfo) 
     * @param input
     * @return
     * @throws Exception
     */
	int selectValidReqInfo(Map<String, Object> saveData) throws Exception;
	
	/**
    * 고객의 업무용메일수신동의여부 검증(selectCustMailRcvAgreYn) 
    * @param input
    * @return
    * @throws Exception
    */
	String selectCustMailRcvAgreYn(Map<String, Object> saveData) throws Exception;

}