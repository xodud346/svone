/*------------------------------------------------------------------------------
 * NAME : PrdInfoMngDaoImpl.java
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
package com.ssp.bo.rd.dao.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.ssp.bo.rd.dao.PrdInfoMngDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 *
 * @title   PrdInfoMngDaoImpl
 * @@desc   MRO상품정보 DaoImpl
 * @package com.ssp.bo.rd.dao.Impl
 * <pre>
 * @author
 * @since 2022.05.10
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.05.10			       최초작성
 */

@SuppressWarnings("unchecked")
@Repository("prdInfoMngDao")
public class PrdInfoMngDaoImpl implements PrdInfoMngDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

    /**
     * MRO상품정보 리스트 조회(selectPrdInfoMng)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectPrdInfoMng(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("PrdInfoMng.selectPrdInfoMng", map);
    }

    /**
     * 상품정보관리상세수정 리스트 조회(selectPrdInfoMngDtlUpdInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectPrdInfoMngDtlUpdInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("PrdInfoMng.selectPrdInfoMngDtlUpdInq", map);
    }

    /**
     * 카테고리속성정보 리스트 조회(selectCatgAttrInfo)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectCatgAttrInfo(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("PrdInfoMng.selectCatgAttrInfo", map);
    }

    /**
     * 상품고시상품 리스트 조회(selectPrdNotiPrdInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectPrdNotiPrdInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("PrdInfoMng.selectPrdNotiPrdInq", map);
    }

    /**
     * 첨부파일내역 리스트 조회(selectAttcFileDtlsInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectAttcFileDtlsInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("PrdInfoMng.selectAttcFileDtlsInq", map);
    }

    /**
     * 시리즈그룹상품 조회(selectSrsGrpPrdInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectSrsGrpPrdInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("PrdInfoMng.selectSrsGrpPrdInq", map);
    }

    /**
     * 시리즈그룹상품 리스트 조회(selectSrsGrpPrdListInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectSrsGrpPrdListInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("PrdInfoMng.selectSrsGrpPrdListInq", map);
    }

    /**
     * 연관상품 리스트 조회(selectReltPrdListInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectReltPrdListInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("PrdInfoMng.selectReltPrdListInq", map);
    }

    /**
     * 구매정보 리스트 조회(selectPurgInfoListInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectPurgInfoListInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("PrdInfoMng.selectPurgInfoListInq", map);
    }

    /**
     * 화학물질정보 리스트 조회(selectChmMtlInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectChmMtlInfoInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("PrdInfoMng.selectChmMtlInfoInq", map);
    }

    /**
     * 화학물질추가정보 리스트 조회(selectChmMtlAddInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectChmMtlAddInfoInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("PrdInfoMng.selectChmMtlAddInfoInq", map);
    }

    /**
     * 상품인증정보 리스트 조회(selectPrdCertInfoInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectPrdCertInfoInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("PrdInfoMng.selectPrdCertInfoInq", map);
    }

    /**
     * 상품이미지리스트다운로드 조회(selectPrdImgListDownInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectPrdImgListDownInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("PrdInfoMng.selectPrdImgListDownInq", map);
    }

    /**
     * MRO상품정보 리스트 카운트 체크조회(selectPrdInfoMngCount)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int selectPrdInfoMngCount(Map<String, Object> map) throws Exception {
     	return commonDAO.selectInteger("PrdInfoMng.selectPrdInfoMngCount", map);
    }

    /**
     * 상품가격내역 리스트 카운트 체크조회(selectPrdPrcDtlsInqCount)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int selectPrdPrcDtlsInqCount(Map<String, Object> map) throws Exception {
     	return commonDAO.selectInteger("PrdInfoMng.selectPrdPrcDtlsInqCount", map);
    }

    /**
     * 상품가격내역등록 저장(insertPrdInfoMng)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int insertPrdPrcDtlsReg(Map<String, Object> map) throws Exception {
     	return commonDAO.insert("PrdInfoMng.insertPrdPrcDtlsReg", map);
    }

    /**
     * 상품가격내역수정 저장(updatePrdPrcDtlsUpd)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int updatePrdPrcDtlsUpd(Map<String, Object> map) throws Exception {
     	return commonDAO.update("PrdInfoMng.updatePrdPrcDtlsUpd", map);
    }

	/**
	 * MRO상품정보 리스트 수정
	 *
	 * @param map
	 * @return
	 * @throws Exception
	 */
	@Override
	public int updatePrdInfoMng(Map<String, Object> map) throws Exception {
		return commonDAO.update("PrdInfoMng.updatePrdInfoMng", map);
	}

    /**
     * 상품정보속성매핑 저장(insertPrdInfoAttrMappStor)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int insertPrdInfoAttrMappStor(Map<String, Object> map) throws Exception {
     	return commonDAO.update("PrdInfoMng.insertPrdInfoAttrMappStor", map);
    }

    /**
     * 상품고시품목매핑 저장(insertPrdNotiItmMappStor)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int insertPrdNotiItmMappStor(Map<String, Object> map) throws Exception {
     	return commonDAO.update("PrdInfoMng.insertPrdNotiItmMappStor", map);
    }

    /**
     * MRO상품정보 리스트 삭제(deletePrdInfoMng)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int deletePrdInfoMng(Map<String, Object> map) throws Exception {
     	return commonDAO.delete("PrdInfoMng.deletePrdInfoMng", map);
    }

    /**
     * 주문조회대상내역 삭제(deleteOdrInqTgtDtlsDel)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int deleteOdrInqTgtDtlsDel(Map<String, Object> map) throws Exception {
     	return commonDAO.delete("PrdInfoMng.deleteOdrInqTgtDtlsDel", map);
    }

	@Override
	public int updatePrdDispStatsInfo(Map<String, Object> map) throws Exception {
		return commonDAO.update("PrdInfoMng.updatePrdDispStatsInfo", map);
	}
}