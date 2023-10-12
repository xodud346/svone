/*------------------------------------------------------------------------------
 * NAME : MsdsMngDaoImpl.java
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
package com.ssp.bo.rd.dao.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.ssp.bo.rd.dao.MsdsMngDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * MSDS관리 DaoImpl
 *
 * @since 2022.04.28
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.04.28			       최초작성
 */
@SuppressWarnings("unchecked")
@Repository("msdsMngDao")
public class MsdsMngDaoImpl implements MsdsMngDao {

	@Resource(name = "commonDAO")
	private CommonDAO commonDAO;

	/**
	 * MSDS관리 리스트 조회
	 *
	 * @param map
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map> selectMsdsMng(Map<String, Object> map) throws Exception {
		return commonDAO.selectList("MsdsMng.selectMsdsMng", map);
	}

    /**
     * MSDS관리 카운트 체크조회(selectMsdsMngCount)
     * @param input
     * @return
     * @throws Exception
     */

    @Override
    public int selectMsdsMngCount(Map<String, Object> map) throws Exception {
     	return commonDAO.selectInteger("MsdsMng.selectMsdsMngCount", map);
    }
	/**
	 * MSDS관리 중복체크(selectMsdsMngDupl)
	 * @param input
	 * @return
	 * @throws Exception
	 */
    
    @Override
	public int selectMsdsMngDupl(Map<String, Object> saveData) throws Exception {
		return commonDAO.selectInteger("MsdsMng.selectMsdsMngDupl", saveData);
	}

    /**
     * MSDS관리 저장(insertMsdsMng)
     * @param input
     * @return
     * @throws Exception
     */
	@Override
	public int insertMsdsMng(Map<String, Object> saveData) throws Exception {
		return commonDAO.insert("MsdsMng.insertMsdsMng", saveData);
	}
	
	/**
	 * MSDS관리 수정(updateMsdsMng)
	 * @param input
	 * @return
	 * @throws Exception
	 */
    @Override
    public int updateMsdsMng(Map<String, Object> saveData) throws Exception {
     	return commonDAO.update("MsdsMng.updateMsdsMng", saveData);
    }

	/**
	 * MSDS관리 상세조회 (selectMsdsMngDtl)
	 * @param input
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map> selectMsdsMngDtl(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("MsdsMng.selectMsdsMngDtl", searchMap);
	}
	
	/**
	 * MSDS관리 파일상세조회 (selectAttcFileDtlsInq)
	 * @param input
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map> selectAttcFileDtlsInq(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("MsdsMng.selectAttcFileDtlsInq", searchMap);
	}

	/**
     * 저장 코드체크여부 조회(selectCodeChkYn)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectCodeChkYn(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("MsdsMng.selectCodeChkYn", map);
    }
    
    /**
     * 협력사상품정보 조회(selectCprtcpPrdInfo)
     * @param saveData
     * @return
     * @throws Exception
     */
	@Override
	public int selectCprtcpPrdInfo(Map<String, Object> saveData) throws Exception {
		return commonDAO.selectCount("MsdsMng.selectCprtcpPrdInfo", saveData);
	}
	
	
	/**
	 * MSDS 엑셀업로드 후 데이터 처리
	 * @param lsMap
	 * @return
	 * @throws Exception
	 */
	public int saveSpRdCprtrMsdsLocMultiUpld(Map<String, Object> map) throws Exception {
		return commonDAO.update("MsdsMng.saveSpRdCprtrMsdsLocMultiUpld", map);
	}
}