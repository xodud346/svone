/*------------------------------------------------------------------------------
 * NAME : NewPrdReqLstDaoImpl.java
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
package com.ssp.bo.rd.dao.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.ssp.bo.rd.dao.NewPrdReqLstDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 *
 * @title   NewPrdReqLstDaoImpl
 * @@desc   신규상품요청처리 DaoImpl
 * @package com.ssp.bo.rd.dao.Impl
 * <pre>
 * @author
 * @since 2022.04.21
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.04.21			       최초작성
 */

@SuppressWarnings("unchecked")
@Repository("newPrdReqLstDao")
public class NewPrdReqLstDaoImpl implements NewPrdReqLstDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

    /**
     * 신규상품요청처리 리스트 조회(selectNewPrdReqLst)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectNewPrdReqLst(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("NewPrdReqLst.selectNewPrdReqLst", map);
    }

    /**
     * 신규상품요청번호 리스트 키값을 조회(selectNewPrdReqNoPKey)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectNewPrdReqNoPKey(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("NewPrdReqLst.selectNewPrdReqNoPKey", map);
    }

    /**
     * 신규상품ID 리스트 키값을 조회(selectNewPrdReqNoPKey)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectNewPrdIdPKey(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("NewPrdReqLst.selectNewPrdIdPKey", map);
    }

    /**
     * 신규상품요청처리 리스트 중복 체크조회(selectNewPrdReqLstCount)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int selectNewPrdReqLstCount(Map<String, Object> map) throws Exception {
     	return commonDAO.selectInteger("NewPrdReqLst.selectNewPrdReqLstCount", map);
    }

    /**
     * 상품등록자사조회 리스트 조회(selectPrdRegOcorpInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectPrdRegOcorpInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("NewPrdReqLst.selectPrdRegOcorpInq", map);
    }
    
    /**
     * 카테고리속성정보 카운트(selectNewPrdProcCount)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int selectNewPrdProcCount(Map<String, Object> map) throws Exception {
    	return commonDAO.selectInteger("NewPrdReqLst.selectNewPrdProcCount", map);
    }

    /**
     * 카테고리속성정보 리스트 조회(selectCatgAttrInfo)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectCatgAttrInfo(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("NewPrdReqLst.selectCatgAttrInfo", map);
    }

    /**
     * 상품고시상품 리스트 조회(selectPrdNotiPrdInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectPrdNotiPrdInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("NewPrdReqLst.selectPrdNotiPrdInq", map);
    }

    /**
     * 첨부파일내역 리스트 조회(selectAttcFileDtlsInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectAttcFileDtlsInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("NewPrdReqLst.selectAttcFileDtlsInq", map);
    }

    /**
     * 요청처리내역 리스트 조회(selectReqProcDtlsInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectReqProcDtlsInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("NewPrdReqLst.selectReqProcDtlsInq", map);
    }

    /**
     * 협력사요청정보 리스트 조회(selectNewPrdReqLst)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectCprtcpReqInfoInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("NewPrdReqLst.selectCprtcpReqInfoInq", map);
    }

    /**
     * 신규상품고객요청정보 리스트 조회(selectNewPrdCustReqInfo)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectNewPrdCustReqInfo(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("NewPrdReqLst.selectNewPrdCustReqInfo", map);
    }

    /**
     * 신규상품구매물량내역 리스트 조회(selectNewPrdPurgQtyDtls)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectNewPrdPurgQtyDtls(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("NewPrdReqLst.selectNewPrdPurgQtyDtls", map);
    }

	/**
	 * 상품ID존재여부 리스트 조회(selectPrdIdExstYn)
	 *
	 * @param map
	 * @return
	 * @throws Exception
	 */
	@Override
	public String selectPrdIdExstYn(Map<String, Object> map) throws Exception {
		return commonDAO.selectStr("NewPrdReqLst.selectPrdIdExstYn", map);
	}

    /**
     * 배지 리스트 정보 조회(selectBgList)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectBgListInfoInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("NewPrdReqLst.selectBgListInfoInq", map);
    }

    /**
     * 코드체크여부 조회(selectCdChkYnInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectCdChkYnInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("NewPrdReqLst.selectCdChkYnInq", map);
    }    

    /**
     * 신규상품요청처리 리스트 저장(insertNewPrdReqLst)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int insertNewPrdReqLst(Map<String, Object> map) throws Exception {
     	return commonDAO.update("NewPrdReqLst.insertNewPrdReqLst", map);
    }

    /**
     * 신규상품요청상태내역 리스트 저장(insertNewPrdReqStatsDtls)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int insertNewPrdReqStatsDtls(Map<String, Object> map) throws Exception {
     	return commonDAO.insert("NewPrdReqLst.insertNewPrdReqStatsDtls", map);
    }

    /**
     * 신규상품고객요청속성정보 리스트 저장(insertNewPrdCustReqAttrInfo)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int insertNewPrdCustReqAttrInfo(Map<String, Object> map) throws Exception {
     	return commonDAO.insert("NewPrdReqLst.insertNewPrdCustReqAttrInfo", map);
    }

    /**
     * 등록처리상품고시품목매핑 리스트 저장(insertRegProcPrdNotiItmMapp)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int insertRegProcPrdNotiItmMapp(Map<String, Object> map) throws Exception {
     	return commonDAO.update("NewPrdReqLst.insertRegProcPrdNotiItmMapp", map);
    }

    /**
     * 신규상품요청반려처리 수정(updateNewPrdReqRjctProc)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int updateNewPrdReqRjctProc(Map<String, Object> map) throws Exception {
     	return commonDAO.update("NewPrdReqLst.updateNewPrdReqRjctProc", map);
    }

	/**
	 * 협력사중복상품처리저장 수정
	 *
	 * @param map
	 * @return
	 * @throws Exception
	 */
	@Override
	public int insertCprtcpDupPrdProcStor(Map<String, Object> map) throws Exception {
		return commonDAO.update("NewPrdReqLst.insertCprtcpDupPrdProcStor", map);
	}

    /**
     * 협력사등록저장 수정(insertCprtcpRegStor)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int insertCprtcpRegStor(Map<String, Object> map) throws Exception {
     	return commonDAO.update("NewPrdReqLst.insertCprtcpRegStor", map);
    }

    /**
     * 가격조건내역 삭제(deletePrcCondDtls)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int deletePrcCondDtls(Map<String, Object> map) throws Exception {
     	return commonDAO.delete("NewPrdReqLst.deletePrcCondDtls", map);
    }

    /**
     * 가격조건내역 등록(insertPrcCondDtls)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int insertPrcCondDtls(Map<String, Object> map) throws Exception {
     	return commonDAO.insert("NewPrdReqLst.insertPrcCondDtls", map);
    }

    /**
     * 신규상품요청처리속성정보 등록(insertNewPrdReqProcAttrInfoStor)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int insertNewPrdReqProcAttrInfoStor(Map<String, Object> map) throws Exception {
     	return commonDAO.insert("NewPrdReqLst.insertNewPrdReqProcAttrInfoStor", map);
    }

    /**
     * 고객요청처리 등록(updateCustReqProc)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int updateCustReqProc(Map<String, Object> map) throws Exception {
     	return commonDAO.insert("NewPrdReqLst.updateCustReqProc", map);
    }
    
    /**
     * 상품의 구매정보유무 검증(validatePurgInfo) 
     * @param input
     * @return
     * @throws Exception
     */
	@Override
	public int validatePurgInfo(Map<String, Object> map) throws Exception {
		return commonDAO.selectInteger("NewPrdReqLst.validatePurgInfo", map);
	}
	
	/**
     * 해당사업장, 운영단위 진열정보유무 검증(validateDispInfo) 
     * @param input
     * @return
     * @throws Exception
     */
	@Override
	public int validateDispInfo(Map<String, Object> map) throws Exception {
		return commonDAO.selectInteger("NewPrdReqLst.validateDispInfo", map);
	}
	
	/**
     * 협력사 신규상품요청 검증(selectValidReqInfo) 
     * @param input
     * @return
     * @throws Exception
     */
	@Override
	public int selectValidReqInfo(Map<String, Object> map) throws Exception {
		return commonDAO.selectInteger("NewPrdReqLst.selectValidReqInfo", map);
	}
	
	/**
    * 고객의 업무용메일수신동의여부 검증(selectCustMailRcvAgreYn) 
    * @param input
    * @return
    * @throws Exception
    */
	@Override
	public String selectCustMailRcvAgreYn(Map<String, Object> saveData) throws Exception {
		return commonDAO.selectStr("NewPrdReqLst.selectCustMailRcvAgreYn", saveData);
	}
}