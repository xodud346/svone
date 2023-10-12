/*------------------------------------------------------------------------------
 * NAME : CprtcpEstmReqMngDaoImpl.java
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
package com.ssp.bo.rd.dao.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.ssp.bo.rd.dao.CprtcpEstmReqMngDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 *
 * @title   CprtcpEstmReqMngDaoImpl
 * @@desc   협력사 견적요청 관리 DaoImpl
 * @package com.ssp.bo.rd.dao.Impl
 * <pre>
 * @author
 * @since 2022.06.16
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.04.28			       최초작성
 */

@SuppressWarnings("unchecked")
@Repository("cprtcpEstmReqMngDao")
public class CprtcpEstmReqMngDaoImpl implements CprtcpEstmReqMngDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

    /**
     * 협력사 견적요청 관리 리스트 조회(selectCprtcpEstmReqMng)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectCprtcpEstmReqMng(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("CprtcpEstmReqMng.selectCprtcpEstmReqMng", map);
    }

    /**
     * 협력사 견적요청 관리 리스트 중복 체크조회(selectCprtcpEstmReqMngCount)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int selectCprtcpEstmReqMngCount(Map<String, Object> map) throws Exception {
     	return commonDAO.selectInteger("CprtcpEstmReqMng.selectCprtcpEstmReqMngCount", map);
    }

    /**
     * 견적요청상세정보 조회
     *
     * @param map
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectEstmReqDtlInfoInq(Map<String, Object> map) throws Exception {
        return commonDAO.selectList("CprtcpEstmReqMng.selectEstmReqDtlInfoInq", map);
    }

    /**
     * 견적요청회신리스트 조회
     *
     * @param map
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectEstmReqRplyListInq(Map<String, Object> map) throws Exception {
        return commonDAO.selectList("CprtcpEstmReqMng.selectEstmReqRplyListInq", map);
    }

    /**
     * RnD 전시상품 견적요청회신목록 조회(selectRndDispEstmReqRplyListInq)
     *
     * @param map
     * @return
     * @throws Exception
     */
    @Override
    public List<Map<String, Object>> selectRndDispEstmReqRplyListInq(Map<String, Object> map) throws Exception {
        return commonDAO.selectList("CprtcpEstmReqMng.selectRndDispEstmReqRplyListInq", map);
    }

    /**
     * 요청협력사견적상태내역리스트 조회(selectReqCprtcpEstmStatsDtlsListInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectReqCprtcpEstmStatsDtlsListInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("CprtcpEstmReqMng.selectReqCprtcpEstmStatsDtlsListInq", map);
    }

    /**
     * RnD전시상품 요청협력사견적상태내역리스트 조회(selectRndDispReqCprtcpEstmStatsDtls)
     * @param map
     * @return
     * @throws Exception
     */
    @Override
    public List<Map<String, Object>> selectRndDispReqCprtcpEstmStatsDtls(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("CprtcpEstmReqMng.selectRndDispReqCprtcpEstmStatsDtls", map);
    }

    /**
     * 견적요청화학물질정보 조회(selectEstmReqChmMtlInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectEstmReqChmMtlInfoInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("CprtcpEstmReqMng.selectEstmReqChmMtlInfoInq", map);
    }

    /**
     * 화학물질정보 조회(selectChmMtlInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectChmMtlInfoInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("CprtcpEstmReqMng.selectChmMtlInfoInq", map);
    }

    /**
     * 화학물질추가정보 조회(selectChmMtlAddInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectChmMtlAddInfoInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("CprtcpEstmReqMng.selectChmMtlAddInfoInq", map);
    }

    /**
     * 협력사상품정보 조회(selectCprtcpPrdInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectCprtcpPrdInfoInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("CprtcpEstmReqMng.selectCprtcpPrdInfoInq", map);
    }

    /**
     * 첨부파일내역 조회(selectAttcFileDtlsInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectAttcFileDtlsInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("CprtcpEstmReqMng.selectAttcFileDtlsInq", map);
    }

    /**
     * 요청협력사견적상세등록 저장(insertReqCprtcpEstmDtlReg)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int insertReqCprtcpEstmDtlReg(Map<String, Object> map) throws Exception {
     	return commonDAO.insert("CprtcpEstmReqMng.insertReqCprtcpEstmDtlReg", map);
    }

    /**
     * 요청협력사전시견적상세 등록 저장 (insertReqCprtcpDispEstmDtlReg)
     * @param map
     * @return
     * @throws Exception
     */
    @Override
    public int insertReqCprtcpDispEstmDtlReg(Map<String, Object> map) throws Exception {
     	return commonDAO.insert("CprtcpEstmReqMng.insertReqCprtcpDispEstmDtlReg", map);
    }

    /**
     * 요청협력사견적상세 삭제(deleteReqCprtcpEstmDtlDel)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int deleteReqCprtcpEstmDtlDel(Map<String, Object> map) throws Exception {
     	return commonDAO.insert("CprtcpEstmReqMng.deleteReqCprtcpEstmDtlDel", map);
    }

    /**
     * 요청협력사전시견적상세 삭제 (deleteReqCprtcpDispEstmDtlDel)
     * @param map
     * @return
     * @throws Exception
     */
    @Override
    public int deleteReqCprtcpDispEstmDtlDel(Map<String, Object> map) throws Exception {
     	return commonDAO.insert("CprtcpEstmReqMng.deleteReqCprtcpDispEstmDtlDel", map);
    }

    /**
     * 협력사견적상태내역 저장(updateCprtcpEstmStatsDtlsStor)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int updateCprtcpEstmStatsDtlsStor(Map<String, Object> map) throws Exception {
     	return commonDAO.update("CprtcpEstmReqMng.updateCprtcpEstmStatsDtlsStor", map);
    }

    /**
     * 협력사전시견적상태내역 저장 (updateCprtcpDispEstmStatsDtlsStor)
     * @param map
     * @return
     * @throws Exception
     */
    @Override
    public int updateCprtcpDispEstmStatsDtlsStor(Map<String, Object> map) throws Exception {
     	return commonDAO.update("CprtcpEstmReqMng.updateCprtcpDispEstmStatsDtlsStor", map);
    }

    /**
     * 견적불가처리 저장(updateEstmDisProcStor)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int updateEstmDisProcStor(Map<String, Object> map) throws Exception {
     	return commonDAO.update("CprtcpEstmReqMng.updateEstmDisProcStor", map);
    }

    /**
     * 전시견적불가처리 저장 (updateDispEstmDisProcStor)
     * @param map
     * @return
     * @throws Exception
     */
    @Override
    public int updateDispEstmDisProcStor(Map<String, Object> map) throws Exception {
     	return commonDAO.update("CprtcpEstmReqMng.updateDispEstmDisProcStor", map);
    }

    /**
     * 요청협력사합의물질정보 저장(insertReqCprtcpConsnMtlInfoStor)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int insertReqCprtcpConsnMtlInfoStor(Map<String, Object> map) throws Exception {
     	return commonDAO.insert("CprtcpEstmReqMng.insertReqCprtcpConsnMtlInfoStor", map);
    }

    /**
     * 요청협력사합의상세 수정(updateReqCprtcpConsnDtlUpd)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int updateReqCprtcpConsnDtlUpd(Map<String, Object> map) throws Exception {
     	return commonDAO.update("CprtcpEstmReqMng.updateReqCprtcpConsnDtlUpd", map);
    }

    /**
     * 요청협력사합의물질정보 삭제(deleteReqCprtcpConsnMtlInfoDel)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int deleteReqCprtcpConsnMtlInfoDel(Map<String, Object> map) throws Exception {
     	return commonDAO.delete("CprtcpEstmReqMng.deleteReqCprtcpConsnMtlInfoDel", map);
    }
    
    @Override
    public int insertNewPrdReqStats(Map<String, Object> map) throws Exception {
     	return commonDAO.insert("CprtcpEstmReqMng.insertNewPrdReqStats", map);
    }

    @Override
    public List<Map> selectDelPiContractNoList(String custPreqno) throws Exception {
        return commonDAO.selectList("CprtcpEstmReqMng.selectDelPiContractNoList", custPreqno);
    }

    @Override
    public int insertCprtcpConsnStatsDtls(Map<String, Object> map) throws Exception {
        return commonDAO.insert("CprtcpEstmReqMng.insertCprtcpConsnStatsDtls", map);
    }

    @Override
    public boolean isCprtcpEstmStatsDtls(Map<String, Object> paramMap) throws Exception {
        String cprtcpEstmStatsDtls = commonDAO.selectStr("CprtcpEstmReqMng.selectCprtcpEstmStatsDtls", paramMap);

        return "Y".equals(cprtcpEstmStatsDtls);
    }

    @Override
    public boolean isCprtcpDispEstmStatsDtls(Map<String, Object> paramMap) throws Exception {
        String cprtcpEstmStatsDtls = commonDAO.selectStr("CprtcpEstmReqMng.selectCprtcpDispEstmStatsDtls", paramMap);

        return "Y".equals(cprtcpEstmStatsDtls);
    }

    @Override
    public int updateNewPrdReqProc(Map<String, Object> map) throws Exception {
        return commonDAO.update("CprtcpEstmReqMng.updateNewPrdReqProc", map);
    }

	@Override
	public List<Map> selectCprtcpPrdMSDSInfoList(Map<String, Object> map) throws Exception {
		return commonDAO.selectList("CprtcpEstmReqMng.selectCprtcpPrdMSDSInfoList", map);
	}

	@Override
	public int updatePrMroPrdInfoMSDSInfo(Map<String, Object> map) throws Exception {
		return commonDAO.update("CprtcpEstmReqMng.updatePrMroPrdInfoMSDSInfo", map);
	}

    @Override
    public List<Map<String, Object>> selectCprtcpDispEstmReqLst(Map<String, Object> paramMap) throws Exception {
        return commonDAO.selectList("CprtcpEstmReqMng.selectCprtcpDispEstmReqLst", paramMap);
    }
}