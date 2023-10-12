/*------------------------------------------------------------------------------
 * NAME : PrdInfoMngDao.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.05.10  오왕표
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 *
 * @title   PrdInfoMngDao
 * @@desc   MRO상품정보 Dao
 * @package com.ssp.bo.rd.dao
 * <pre>
 * @author
 * @since 2022.05.10
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.05.10			       최초작성
 */
public interface PrdInfoMngDao {

    /**
     * MRO상품정보 리스트 조회(selectPrdInfoMng)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectPrdInfoMng(Map<String, Object> map) throws Exception;

    /**
     * 상품정보관리상세수정 리스트 조회(selectPrdInfoMngDtlUpdInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectPrdInfoMngDtlUpdInq(Map<String, Object> map) throws Exception;

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
     * 첨부파일내역 리스트 조회(selectAttcFileDtlsInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectAttcFileDtlsInq(Map<String, Object> map) throws Exception;

    /**
     * 시리즈그룹상품 조회(selectSrsGrpPrdInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectSrsGrpPrdInq(Map<String, Object> map) throws Exception;

    /**
     * 시리즈그룹상품 리스트 조회(selectSrsGrpPrdListInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectSrsGrpPrdListInq(Map<String, Object> map) throws Exception;

    /**
     * 연관상품 리스트 조회(selectReltPrdListInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectReltPrdListInq(Map<String, Object> map) throws Exception;

    /**
     * 구매정보 리스트 조회(selectPurgInfoListInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectPurgInfoListInq(Map<String, Object> map) throws Exception;

    /**
     * 화학물질정보 리스트 조회(selectChmMtlInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectChmMtlInfoInq(Map<String, Object> map) throws Exception;

    /**
     * 화학물질추가정보 리스트 조회(selectChmMtlAddInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectChmMtlAddInfoInq(Map<String, Object> map) throws Exception;

    /**
     * 상품인증정보 리스트 조회(selectPrdCertInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectPrdCertInfoInq(Map<String, Object> map) throws Exception;

    /**
     * 상품이미지리스트다운로드 조회(selectPrdImgListDownInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectPrdImgListDownInq(Map<String, Object> map) throws Exception;

    /**
     * MRO상품정보 리스트 카운트 체크조회(selectPrdInfoMngCount)
     * @param input
     * @return
     * @throws Exception
     */
    int selectPrdInfoMngCount(Map<String, Object> map) throws Exception;

    /**
     * 상품가격내역 리스트 카운트 체크조회(selectPrdPrcDtlsInqCount)
     * @param input
     * @return
     * @throws Exception
     */
    int selectPrdPrcDtlsInqCount(Map<String, Object> map) throws Exception;

    /**
     * 상품가격내역등록 저장(insertPrdInfoMng)
     * @param input
     * @return
     * @throws Exception
     */
    int insertPrdPrcDtlsReg(Map<String, Object> map) throws Exception;

    /**
     * 상품가격내역수정 저장(updatePrdInfoMng)
     * @param input
     * @return
     * @throws Exception
     */
    int updatePrdPrcDtlsUpd(Map<String, Object> map) throws Exception;

    /**
     * MRO상품정보 리스트 수정(updatePrdInfoMng)
     * @param input
     * @return
     * @throws Exception
     */
    int updatePrdInfoMng(Map<String, Object> map) throws Exception;

    /**
     * 상품정보속성매핑 저장(insertPrdInfoAttrMappStor)
     * @param input
     * @return
     * @throws Exception
     */
    int insertPrdInfoAttrMappStor(Map<String, Object> map) throws Exception;

    /**
     * 상품고시품목매핑 저장(insertPrdNotiItmMappStor)
     * @param input
     * @return
     * @throws Exception
     */
    int insertPrdNotiItmMappStor(Map<String, Object> map) throws Exception;

    /**
     * MRO상품정보 리스트 삭제(deletePrdInfoMng)
     * @param input
     * @return
     * @throws Exception
     */
    int deletePrdInfoMng(Map<String, Object> map) throws Exception;

    /**
     * 주문조회대상내역 삭제(deleteOdrInqTgtDtlsDel)
     * @param input
     * @return
     * @throws Exception
     */
    int deleteOdrInqTgtDtlsDel(Map<String, Object> map) throws Exception;

	/**
	 * 상품 진열 상태 변경
	 *
	 */
	int updatePrdDispStatsInfo(Map<String, Object> map) throws Exception;
}