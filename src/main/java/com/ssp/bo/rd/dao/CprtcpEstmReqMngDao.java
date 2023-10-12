/*------------------------------------------------------------------------------
 * NAME : CprtcpEstmReqMngDao.java
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
package com.ssp.bo.rd.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 *
 * @title   CprtcpEstmReqMngDao
 * @@desc   협력사 견적요청 관리 Dao
 * @package com.ssp.bo.rd.dao
 * <pre>
 * @author
 * @since 2022.06.16
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.04.28			       최초작성n */
public interface CprtcpEstmReqMngDao {

    /**
     * 협력사 견적요청 관리 리스트 조회(selectCprtcpEstmReqMng)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectCprtcpEstmReqMng(Map<String, Object> map) throws Exception;

    /**
     * 협력사 견적요청 관리 리스트 중복 체크조회(selectCprtcpEstmReqMngCount)
     * @param input
     * @return
     * @throws Exception
     */
    int selectCprtcpEstmReqMngCount(Map<String, Object> map) throws Exception;

    /**
     * 견적요청상세정보 조회(selectEstmReqDtlInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectEstmReqDtlInfoInq(Map<String, Object> map) throws Exception;

    /**
     * 견적요청회신리스트 조회(selectEstmReqRplyListInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectEstmReqRplyListInq(Map<String, Object> map) throws Exception;

    /**
     * RnD 전시상품 견적요청회신목록 조회 (selectRndDispEstmReqRplyListInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map<String, Object>> selectRndDispEstmReqRplyListInq(Map<String, Object> map) throws Exception;

    /**
     * 요청협력사견적상태내역리스트 조회(selectReqCprtcpEstmStatsDtlsListInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectReqCprtcpEstmStatsDtlsListInq(Map<String, Object> map) throws Exception;

    /**
     * RnD전시상품 요청협력사견적상태내역리스트 조회(selectRndDispReqCprtcpEstmStatsDtls)
     * @param map
     * @return
     * @throws Exception
     */
    List<Map<String, Object>> selectRndDispReqCprtcpEstmStatsDtls(Map<String, Object> map) throws Exception;

    /**
     * 견적요청화학물질정보 조회(selectEstmReqChmMtlInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectEstmReqChmMtlInfoInq(Map<String, Object> map) throws Exception;

    /**
     * 협력사상품정보 조회(selectCprtcpPrdInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectCprtcpPrdInfoInq(Map<String, Object> map) throws Exception;

    /**
     * 화학물질추가정보 조회(selectChmMtlAddInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectChmMtlAddInfoInq(Map<String, Object> map) throws Exception;

    /**
     * 화학물질정보 조회(selectChmMtlInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectChmMtlInfoInq(Map<String, Object> map) throws Exception;

    /**
     * 첨부파일내역 조회(selectAttcFileDtlsInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectAttcFileDtlsInq(Map<String, Object> map) throws Exception;

    /**
     * 요청협력사견적상세등록 저장(insertReqCprtcpEstmDtlReg)
     * @param input
     * @return
     * @throws Exception
     */
    int insertReqCprtcpEstmDtlReg(Map<String, Object> map) throws Exception;  

    /**
     * 요청협력사전시견적상세 등록 저장 (insertReqCprtcpDispEstmDtlReg)
     *
     * @param map
     * @return
     * @throws Exception
     */
    int insertReqCprtcpDispEstmDtlReg(Map<String, Object> map) throws Exception;

    /**
     * 요청협력사견적상세 삭제(deleteReqCprtcpEstmDtlDel)
     * @param input
     * @return
     * @throws Exception
     */
    int deleteReqCprtcpEstmDtlDel(Map<String, Object> map) throws Exception;  

    /**
     * 요청협력사전시견적상세 삭제 (deleteReqCprtcpDispEstmDtlDel)
     * @param map
     * @return
     * @throws Exception
     */
    int deleteReqCprtcpDispEstmDtlDel(Map<String, Object> map) throws Exception;

    /**
     * 협력사견적상태내역 저장(updateCprtcpEstmStatsDtlsStor)
     * @param input
     * @return
     * @throws Exception
     */
    int updateCprtcpEstmStatsDtlsStor(Map<String, Object> map) throws Exception;    

    /**
     * 협력사전시견적상태내역 저장 (updateCprtcpDispEstmStatsDtlsStor)
     * @param map
     * @return
     * @throws Exception
     */
    int updateCprtcpDispEstmStatsDtlsStor(Map<String, Object> map) throws Exception;

    /**
     * 견적불가처리 저장(updateEstmDisProcStor)
     * @param input
     * @return
     * @throws Exception
     */
    int updateEstmDisProcStor(Map<String, Object> map) throws Exception;

    /**
     * 전시견적불가처리 저장 (updateDispEstmDisProcStor)
     * @param map
     * @return
     * @throws Exception
     */
    int updateDispEstmDisProcStor(Map<String, Object> map) throws Exception;

    /**
     * 요청협력사합의물질정보 저장(insertReqCprtcpConsnMtlInfoStor)
     * @param input
     * @return
     * @throws Exception
     */
    int insertReqCprtcpConsnMtlInfoStor(Map<String, Object> map) throws Exception;

    /**
     * 요청협력사합의상세 수정(updateReqCprtcpConsnDtlUpd)
     * @param input
     * @return
     * @throws Exception
     */
    int updateReqCprtcpConsnDtlUpd(Map<String, Object> map) throws Exception;

    /**
     * 요청협력사합의물질정보 삭제(deleteReqCprtcpConsnMtlInfoDel)
     * @param input
     * @return
     * @throws Exception
     */
    int deleteReqCprtcpConsnMtlInfoDel(Map<String, Object> map) throws Exception;
    
    int insertNewPrdReqStats(Map<String, Object> map) throws Exception;

    /**
     * 임시계약 삭제 PI 계약번호 조회
     *
     * @param custPreqno
     * @return
     * @throws Exception
     */
    List<Map> selectDelPiContractNoList(String custPreqno) throws Exception;


    /**
     * 요청협력사합의상태내역
     *  - 임시계약 삭제 대상 상태 변경
     *
     * @param contNo
     * @param updpsnId
     * @return
     * @throws Exception
     */
    int insertCprtcpConsnStatsDtls(Map<String, Object> map) throws Exception;


    /**
     * 견적요청 처리 상태 조회
     *
     * @param paramMap
     * @return
     */
    boolean isCprtcpEstmStatsDtls(Map<String, Object> paramMap) throws Exception;

    /**
     * 전시견적요청 처리 상태 조회
     *
     * @param paramMap
     * @return
     */
    boolean isCprtcpDispEstmStatsDtls(Map<String, Object> paramMap) throws Exception;


	/**
	 * <pre>
	 * 신규상품등록요청 견적불가 처리
	 * - 신규상품요청상태내역 적재
	 * - 신규상품요청처리 등록불가사유 적재
	 * </pre>
	 *
	 * @param map
	 * @return
	 * @throws Exception
	 */
	int updateNewPrdReqProc(Map<String, Object> map) throws Exception;

	/**
	 * <pre>
	 * 협력사 구매정보 회신 시 등록한 MSDS 정보
	 * - 물질비중, 성상 구분 코드
	 * </pre>
	 *
	 * @param map
	 * @return
	 * @throws Exception
	 */
	List<Map> selectCprtcpPrdMSDSInfoList(Map<String, Object> map) throws Exception;

	/**
	 * <pre>
	 * 견적요청 상세 구매정보 등록 시 MSDS 정보 마스터 등록
	 * - 구매정보 등록 정상 처리 시 물질비중, 성상구분코드 상품 마스터 테이블 업데이트
	 * </pre>
	 *
	 * @param map
	 * @return
	 * @throws Exception
	 */
	int updatePrMroPrdInfoMSDSInfo(Map<String, Object> map) throws Exception;

    /**
     * 협력사별 메일발송용 견적요청 목록 조회
     *
     * @param paramMap
     * @return
     * @throws Exception
     */
    List<Map<String, Object>> selectCprtcpDispEstmReqLst(Map<String, Object> paramMap) throws Exception;
}