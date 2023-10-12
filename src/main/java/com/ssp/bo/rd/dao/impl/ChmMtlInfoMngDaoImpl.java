/*------------------------------------------------------------------------------
 * NAME : ChmMtlInfoMngDaoImpl.java
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

import com.ssp.bo.rd.dao.ChmMtlInfoMngDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 *
 * @title   ChmMtlInfoMngDaoImpl
 * @@desc   화학물질정보관리 DaoImpl
 * @package com.ssp.bo.rd.dao.Impl
 * <pre>
 * @author
 * @since 2022.04.28
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.04.28			       최초작성
 */

@SuppressWarnings("unchecked")
@Repository("chmMtlInfoMngDao")
public class ChmMtlInfoMngDaoImpl implements ChmMtlInfoMngDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

    @Override
    public List<Map> selectChmMtlInfoMng(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("ChmMtlInfoMng.selectChmMtlInfoMng", map);
    }

    @Override
    public int selectChmMtlInfoMngCount(Map<String, Object> map) throws Exception {
     	return commonDAO.selectInteger("ChmMtlInfoMng.selectChmMtlInfoMngCount", map);
    }

	@Override
	public List<Map> selectChmMtlInfoMngCasno(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("ChmMtlInfoMng.selectChmMtlInfoMngCasno", searchMap);
	}

	@Override
	public int selectChmMtlInfoMngCasnoCount(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectInteger("ChmMtlInfoMng.selectChmMtlInfoMngCasnoCount", searchMap);
	}

    /**
     * 화학물질상품정보 조회(selectChmMtlPrdInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
	@Override
	public List<Map> selectChmMtlPrdInfoInq(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("ChmMtlInfoMng.selectChmMtlPrdInfoInq", searchMap);
	}

    /**
     * 화학물질정보 조회(selectChmMtlInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
	@Override
	public List<Map> selectChmMtlInfoInq(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("ChmMtlInfoMng.selectChmMtlInfoInq", searchMap);
	}

    /**
     * 화학물질정보관리카스정보 카운트 조회(selectChmMtlInfoMngCasNoCount)
     * @param input
     * @return
     * @throws Exception
     */
	@Override
	public int selectChmMtlInfoMngCasNoCount(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectInteger("ChmMtlInfoMng.selectChmMtlInfoMngCasNoCount", searchMap);
	}	

    /**
     * 화학물질추가정보 조회(selectChmMtlAddInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
	@Override
	public List<Map> selectChmMtlAddInfoInq(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("ChmMtlInfoMng.selectChmMtlAddInfoInq", searchMap);
	}

    /**
     * 첨부파일 리스트 조회(selectAttcFileDtlsInq)
     * @param input
     * @return
     * @throws Exception
     */
	@Override
	public List<Map> selectAttcFileDtlsInq(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("ChmMtlInfoMng.selectAttcFileDtlsInq", searchMap);
	}

    /**
     * 규제정보확인여부 리스트 조회(selectRegulationInfoCnfYn)
     * @param input
     * @return
     * @throws Exception
     */
	@Override
	public List<Map> selectRegulationInfoCnfYn(List<Map<String, Object>> searchMap) throws Exception {
		return commonDAO.selectList("ChmMtlInfoMng.selectRegulationInfoCnfYn", searchMap);
	}

    /**
     * 화학물질검증정보 리스트 조회(selectChmMtlVldtInfoListInq)
     * @param input
     * @return
     * @throws Exception
     */
	@Override
	public List<Map> selectChmMtlVldtInfoListInq(List<Map<String, Object>> searchMap) throws Exception {
		return commonDAO.selectList("ChmMtlInfoMng.selectChmMtlVldtInfoListInq", searchMap);
	}

    /**
     * 화학물질검증추가정보 리스트 조회(selectChmMtlVldtAddInfoListInq)
     * @param input
     * @return
     * @throws Exception
     */
	@Override
	public List<Map> selectChmMtlVldtAddInfoListInq(List<Map<String, Object>> searchMap) throws Exception {
		return commonDAO.selectList("ChmMtlInfoMng.selectChmMtlVldtAddInfoListInq", searchMap);
	}

    /**
     * 화학물질정보확인 저장(insertChmMtlInfoCnf)
     * @param input
     * @return
     * @throws Exception
     */
	@Override
	public int insertChmMtlInfoCnf(Map<String, Object> searchMap) throws Exception {
		return commonDAO.insert("ChmMtlInfoMng.insertChmMtlInfoCnf", searchMap);
	}

    /**
     * 화학물질정보확인 수정(updateChmMtlInfoCnf)
     * @param input
     * @return
     * @throws Exception
     */
	@Override
	public int updateChmMtlInfoCnf(Map<String, Object> searchMap) throws Exception {
		return commonDAO.update("ChmMtlInfoMng.updateChmMtlInfoCnf", searchMap);
	}

    /**
     * 화학물질처리 저장(updateSpRdChmMtlsProc)
     * @param input
     * @return
     * @throws Exception
     */
	@Override
	public int updateSpRdChmMtlsProc(Map<String, Object> searchMap) throws Exception {
		return commonDAO.insert("ChmMtlInfoMng.updateSpRdChmMtlsProc", searchMap);
	}

    /**
     * MRO상품정보 수정(updateMroPrdInfoUpd)
     * @param input
     * @return
     * @throws Exception
     */
	@Override
	public int updateMroPrdInfoUpd(Map<String, Object> searchMap) throws Exception {
		return commonDAO.update("ChmMtlInfoMng.updateMroPrdInfoUpd", searchMap);
	}

    /**
     * 화학물질정보 삭제(deleteChmMtlInfoDel)
     * @param input
     * @return
     * @throws Exception
     */
	@Override
	public int deleteChmMtlInfoDel(Map<String, Object> searchMap) throws Exception {
		return commonDAO.delete("ChmMtlInfoMng.deleteChmMtlInfoDel", searchMap);
	}
	
    /**
     * 저장/수정 코드체크여부 조회(selectCodeChkYn)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectCodeChkYn(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("ChmMtlInfoMng.selectCodeChkYn", map);
    }
    
}