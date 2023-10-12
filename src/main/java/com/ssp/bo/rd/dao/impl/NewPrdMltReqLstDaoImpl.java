/*------------------------------------------------------------------------------
 * NAME : NewPrdMltReqLstDaoImpl.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2023.07.04  김완수
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.dao.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.ssp.bo.rd.dao.NewPrdMltReqLstDao;
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
@Repository("newPrdMltReqLstDao")
public class NewPrdMltReqLstDaoImpl implements NewPrdMltReqLstDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

    /**
     * 신규상품요청처리 리스트 조회(selectNewPrdMltReqLst)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectNewPrdMltReqLst(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("NewPrdMltReqLst.selectNewPrdMltReqLst", map);
    }
    
    /**
     * 합의완료 진열상태 리스트 조회(selectAgrCompDispStt)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectAgrCompDispStt(Map<String, Object> map) throws Exception {
    	return commonDAO.selectList("NewPrdMltReqLst.selectAgrCompDispStt", map);
    }

    /**
     * 신규상품요청처리 리스트 중복 체크조회(selectNewPrdMltReqLstCount)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int selectNewPrdMltReqLstCount(Map<String, Object> map) throws Exception {
     	return commonDAO.selectInteger("NewPrdMltReqLst.selectNewPrdMltReqLstCount", map);
    }
    
    /**
     * 신규상품일괄등록 상세리스트 조회(selectNewPrdReqLst)
     * @param input
     * @return
     * @throws Exception
     */
	public List<Map> selectNewPrdReqLst(String newPrdReqGrpNo) throws Exception{
		return commonDAO.selectList("NewPrdMltReqLst.selectNewPrdReqLst", newPrdReqGrpNo);
	}

    
    /**
     * 신규상품요청처리 리스트 저장(insertNewPrdReqLst)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int updateAgrProcRsn(Map<String, Object> map) throws Exception {
     	return commonDAO.update("NewPrdMltReqLst.updateAgrProcRsn", map);
    }
    
    /**
     * 신규상품요청처리 리스트 저장(insertNewPrdReqLst)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int updateNewPrdMltReqRjct(Map<String, Object> map) throws Exception {
    	return commonDAO.update("NewPrdMltReqLst.updateNewPrdMltReqRjct", map);
    }
    
    /**
     * 신규상품요청처리 합의처리 정보 조회(selectNewPrdReqInfo)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectNewPrdReqInfo(Map param) throws Exception{
		return commonDAO.selectList("NewPrdMltReqLst.selectNewPrdReqInfo", param);
	}
    
    /**
     * 디테일 테이블 PRD_ID 수정(updatePrdId)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public int updatePrdId(Map<String, Object> map) throws Exception {
     	return commonDAO.update("NewPrdMltReqLst.updatePrdId", map);
    }
    
    /**
    * 해당 상품ID 로 트리거로 진열 처리된 것을 일괄 변경 처리 
    * @param newPrdReqGrpNo
    * @return
    * @throws Exception
    */
    @Override
    public int updateNewPrdDisp(String newPrdReqGrpNo) throws Exception {
     	return commonDAO.update("NewPrdMltReqLst.updateNewPrdDisp", newPrdReqGrpNo);
    }
    
    /**
     * 협력사 메일수신여부 확인(selectCprtcpMailRcvAgreYn) 
     * @param input
     * @return
     * @throws Exception
     */
	@Override
	public String selectCprtcpMailRcvAgreYn(Map<String, Object> map) throws Exception {
		return commonDAO.selectStr("NewPrdMltReqLst.selectCprtcpMailRcvAgreYn", map);
	}
	
	/**
    * 협력사 담당자 정보 확인(selectChrpsnInfo)
    * @param input
    * @return
    * @throws Exception
    */
	@Override
	public List<Map> selectChrpsnInfo(Map<String, Object> saveData) throws Exception {
		return commonDAO.selectList("NewPrdMltReqLst.selectChrpsnInfo", saveData);
	}
}