/*------------------------------------------------------------------------------
 * NAME : CprtcpEstmReqMngService.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.06.16  오왕표
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

/**
 * <pre>
 *
 * @title   CprtcpEstmReqMngService
 * @@desc   협력사 견적요청 관리 Service
 * @package com.ssp.bo.rd.service
 * <pre>
 * @author
 * @since 2022.06.16
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.04.28			       최초작성
 */
public interface CprtcpEstmReqMngService {

    /**
     * 협력사 견적요청 관리 리스트 조회(selectCprtcpEstmReqMng)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectCprtcpEstmReqMng(Map<String, Object> searchMap) throws Exception;

    /**
     * 견적요청상세정보 조회(selectEstmReqDtlInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectEstmReqDtlInfoInq(Map<String, Object> searchMap) throws Exception;

    /**
     * 견적요청화학물질정보 조회(selectEstmReqChmMtlInfoInq)
     * @param session 
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectEstmReqChmMtlInfoInq(Map<String, Object> searchMap, Map<String, Object> userInfo) throws Exception;

    /**
     * 협력사상품정보 조회(selectCprtcpPrdInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult selectCprtcpPrdInfoInq(Map<String, Object> searchMap) throws Exception;

    /**
     * 협력사견적상태내역 저장/수정(saveCprtcpEstmStatsDtlsStor)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult saveCprtcpEstmStatsDtlsStor(Map<String, Object> searchMap
    		                                , List<Map<String, Object>> saveMap
    		                                , List<Map<String, Object>> delMap 
    		                                , List<Map<String, Object>> masterMap
    		                                , List<Map<String, Object>> detailMap
    		                                , Map<String, Object> userInfo) throws Exception;

	/**
	 * RnD전시상품 협력사견적상태내역 저장/수정 (saveCprtcpDispEstmStatsDtlsStor)
	 *
	 * @param searchMap
	 * @param saveMap
	 * @param delMap
	 * @param masterMap
	 * @param detailMap
	 * @param userInfo
	 * @param optionMap
	 * @param addOptionMap
	 * @return
	 * @throws Exception
	 */
    NexacroResult saveCprtcpDispEstmStatsDtlsStor(Map<String, Object> searchMap
    		                                , List<Map<String, Object>> saveMap
    		                                , List<Map<String, Object>> delMap
    		                                , Map<String, Object> masterMap
    		                                , List<Map<String, Object>> detailMap
    		                                , Map<String, Object> userInfo
    		                                , List<Map<String, Object>> optionMap
    		                                , List<Map<String, Object>> addOptionMap) throws Exception;

    /**
     * 견적불가처리 저장(saveEstmDisProcStor)
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult saveEstmDisProcStor(Map<String, Object> saveMap, Map<String, Object> userInfo) throws Exception;

	/**
	 * 전시견적불가처리 저장 (saveDispEstmDisProcStor)
	 *
	 * @param saveMap
	 * @param userInfo
	 * @return
	 * @throws Exception
	 */
	NexacroResult saveDispEstmDisProcStor(Map<String, Object> saveMap, Map<String, Object> userInfo) throws Exception;

    /**
     * 화학물질정보확인 저장(saveChmMtlInfoCnf)
     * @param session 
     * @param input
     * @return
     * @throws Exception
     */
    NexacroResult saveChmMtlInfoCnf(Map<String, Object> searchMap
    		                      , Map<String, Object> mainMap
    		                      , List<Map<String, Object>> saveMap
    		                      , List<Map<String, Object>> saveFileList
    		                      , Map<String, Object> userInfo
    		                      , String contextRealPath) throws Exception;


	/**
	 * 처리완료 시 임시계약 삭제 계약번호
	 *
	 * @param custPreqno    견적요청번호
	 * @param empNo         작업자Id
	 * @param coCd          회사코드
	 * @return
	 */
	int deleteContractPI(String custPreqno, String empNo, String coCd) throws Exception;


	/**
	 * <pre>
	 * 합의된 MSDS 정보 상품 마스터 테이블 등록
	 * - 물질비중
	 * - 성상구분 코드
	 * </pre>
	 *
	 * @param userInfo 사용자 정보
	 * @param custPreqNo 견적요청번호
	 * @param prdId 상품 ID
	 * @param contNo 계약요청번호
	 * @return
	 * @throws Exception
	 */
	int updatePrMroPrdInfoMSDSInfo(Map<String, Object> userInfo, String custPreqNo, String prdId, int contNo) throws Exception;

	/**
	 * RnD 전시상품 견적요청회신목록 조회
	 *
	 * @param map
	 * @return
	 * @throws Exception
	 */
	List<Map<String, Object>> selectRndDispEstmReqRplyListInq(Map<String, Object> map) throws Exception;

	/**
	 * RnD전시상품 요청협력사견적상태내역리스트 조회
	 *
	 * @param map
	 * @return
	 * @throws Exception
	 */
	List<Map<String, Object>> selectRndDispReqCprtcpEstmStatsDtls(Map<String, Object> map) throws Exception;
}