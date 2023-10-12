/*------------------------------------------------------------------------------
 * NAME : ChmMtlInfoMngDao.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.04.28  newwhite7
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 *
 * @title   ChmMtlInfoMngDao
 * @@desc   화학물질정보관리 Dao
 * @package com.ssp.bo.rd.dao
 * <pre>
 * @author
 * @since 2022.04.28
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.04.28			       최초작성n */
public interface ChmMtlInfoMngDao {

    /**
     * 화학물질정보관리 리스트 조회(selectChmMtlInfoMng)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectChmMtlInfoMng(Map<String, Object> map) throws Exception;

    /**
     * 화학물질정보관리 리스트 중복 체크조회(selectChmMtlInfoMngCount)
     * @param input
     * @return
     * @throws Exception
     */
    int selectChmMtlInfoMngCount(Map<String, Object> map) throws Exception;

    /**
     * 화학물질정보관리카스정보 카운트 조회(selectChmMtlInfoMngCasNoCount)
     * @param input
     * @return
     * @throws Exception
     */
    int selectChmMtlInfoMngCasNoCount(Map<String, Object> map) throws Exception;    
    
    /**
     * 화학물질정보관리 CAS NO 리스트 조회(selectChmMtlInfoMngCasno)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectChmMtlInfoMngCasno(Map<String, Object> searchMap) throws Exception;
    
    /**
     * 화학물질정보관리 CAS NO 리스트 중복 체크조회(selectChmMtlInfoMngCasnoCount)
     * @param input
     * @return
     * @throws Exception
     */
    int selectChmMtlInfoMngCasnoCount(Map<String, Object> searchMap) throws Exception;

    /**
     * 화학물질상품정보 조회(selectChmMtlPrdInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectChmMtlPrdInfoInq(Map<String, Object> searchMap) throws Exception;

    /**
     * 화학물질정보 조회(selectChmMtlInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectChmMtlInfoInq(Map<String, Object> searchMap) throws Exception;

    /**
     * 화학물질추가정보 조회(selectChmMtlAddInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectChmMtlAddInfoInq(Map<String, Object> searchMap) throws Exception;

    /**
     * 첨부파일 리스트 조회(selectAttcFileDtlsInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectAttcFileDtlsInq(Map<String, Object> searchMap) throws Exception;

    /**
     * 규제정보확인여부 리스트 조회(selectRegulationInfoCnfYn)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectRegulationInfoCnfYn(List<Map<String, Object>> searchMap) throws Exception;

    /**
     * 화학물질검증정보 리스트 조회(selectChmMtlVldtInfoListInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectChmMtlVldtInfoListInq(List<Map<String, Object>> searchMap) throws Exception;

    /**
     * 화학물질검증추가정보 리스트 조회(selectChmMtlVldtAddInfoListInq)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectChmMtlVldtAddInfoListInq(List<Map<String, Object>> searchMap) throws Exception;

    /**
     * 화학물질정보확인 저장(insertChmMtlInfoCnf)
     * @param input
     * @return
     * @throws Exception
     */
    int insertChmMtlInfoCnf(Map<String, Object> searchMap) throws Exception;

    /**
     * 화학물질정보확인 수정(updateChmMtlInfoCnf)
     * @param input
     * @return
     * @throws Exception
     */
    int updateChmMtlInfoCnf(Map<String, Object> searchMap) throws Exception;

    /**
     * 화학물질처리 저장(updateSpRdChmMtlsProc)
     * @param input
     * @return
     * @throws Exception
     */
    int updateSpRdChmMtlsProc(Map<String, Object> searchMap) throws Exception;

    /**
     * MRO상품정보 수정(updateMroPrdInfoUpd)
     * @param input
     * @return
     * @throws Exception
     */
    int updateMroPrdInfoUpd(Map<String, Object> searchMap) throws Exception;

    /**
     * 화학물질정보 삭제(deleteChmMtlInfoDel)
     * @param input
     * @return
     * @throws Exception
     */
    int deleteChmMtlInfoDel(Map<String, Object> searchMap) throws Exception;    
    
	/**
     * 저장/수정 코드체크여부 조회(selectCodeChkYn)
     * @param input
     * @return
     * @throws Exception
     */
    List<Map> selectCodeChkYn(Map<String, Object> map) throws Exception;
}