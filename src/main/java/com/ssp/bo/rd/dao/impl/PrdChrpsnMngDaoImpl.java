/*------------------------------------------------------------------------------
 * NAME : PrdChrpsnMngDaoImpl.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.05.02  홍길동
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.dao.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.ssp.bo.rd.dao.PrdChrpsnMngDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 *
 * @title   PrdChrpsnMngDaoImpl
 * @@desc   상품담당자관리 DaoImpl
 * @package com.ssp.bo.rd.dao.Impl
 * <pre>
 * @author
 * @since 2022.05.02
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.05.02			       최초작성
 */

@SuppressWarnings("unchecked")
@Repository("prdChrpsnMngDao")
public class PrdChrpsnMngDaoImpl implements PrdChrpsnMngDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

    @Override
    public List<Map> selectPrdChrpsnMng(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("PrdChrpsnMng.selectPrdChrpsnMng", map);
    }

    @Override
    public int selectPrdChrpsnMngCount(Map<String, Object> map) throws Exception {
     	return commonDAO.selectInteger("PrdChrpsnMng.selectPrdChrpsnMngCount", map);
    }
    
    @Override
	public List<Map> selectPrdChrpsnMngDtl(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("PrdChrpsnMng.selectPrdChrpsnMngDtl", searchMap);
	}

	@Override
	public int updatePrdChrpsnMng(Map<String, Object> saveData) throws Exception {
		return commonDAO.update("PrdChrpsnMng.updatePrdChrpsnMng", saveData);
	}

	@Override
	public int insertPrdChrpsnMng(Map<String, Object> saveData) throws Exception {
		return commonDAO.insert("PrdChrpsnMng.insertPrdChrpsnMng", saveData);
	}

	@Override
	public int selectPrdChrpsnMngDupl(Map<String, Object> saveData) throws Exception {
		return commonDAO.selectInteger("PrdChrpsnMng.selectPrdChrpsnMngDupl", saveData);
	}

	@Override
	public int selectPrdChrpsnMngSprChk(Map<String, Object> saveData) throws Exception {
		return commonDAO.selectInteger("PrdChrpsnMng.selectPrdChrpsnMngSprChk", saveData);
	}
	
	 /**
     * 신규 저장 코드체크여부 조회(selectCodeChkYn)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectCodeChkYn(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("PrdChrpsnMng.selectCodeChkYn", map);
    }
    
    /**
     * 수정 코드체크여부 조회(selectUpCodeChkYn)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectUpCodeChkYn(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("PrdChrpsnMng.selectUpCodeChkYn", map);
    }

}