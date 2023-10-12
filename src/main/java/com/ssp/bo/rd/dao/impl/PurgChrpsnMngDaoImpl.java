/*------------------------------------------------------------------------------
 * NAME : PurgChrpsnMngDaoImpl.java
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

import com.ssp.bo.rd.dao.PurgChrpsnMngDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 *
 * @title   PurgChrpsnMngDaoImpl
 * @@desc   구매담당자 관리 DaoImpl
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
@Repository("purgChrpsnMngDao")
public class PurgChrpsnMngDaoImpl implements PurgChrpsnMngDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

    @Override
    public List<Map> selectPurgChrpsnMng(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("PurgChrpsnMng.selectPurgChrpsnMng", map);
    }

    @Override
    public int selectPurgChrpsnMngCount(Map<String, Object> map) throws Exception {
     	return commonDAO.selectInteger("PurgChrpsnMng.selectPurgChrpsnMngCount", map);
    }

	@Override
	public List<Map> selectPurgChrpsnMngDtl(Map<String, Object> searchMap) throws Exception {
		return commonDAO.selectList("PurgChrpsnMng.selectPurgChrpsnMngDtl", searchMap);
	}

	@Override
	public int updatePurgChrpsnMng(Map<String, Object> saveData) throws Exception {
		return commonDAO.update("PurgChrpsnMng.updatePurgChrpsnMng", saveData);
	}

	@Override
	public int insertPurgChrpsnMng(Map<String, Object> saveData) throws Exception {
		return commonDAO.insert("PurgChrpsnMng.insertPurgChrpsnMng", saveData);
	}

	@Override
	public int selectPurgChrpsnMngDupl(Map<String, Object> saveData) throws Exception {
		return commonDAO.selectInteger("PurgChrpsnMng.selectPurgChrpsnMngDupl", saveData);
	}

	@Override
	public int selectPurgChrpsnMngSprChk(Map<String, Object> saveData) throws Exception {
		return commonDAO.selectInteger("PurgChrpsnMng.selectPurgChrpsnMngSprChk", saveData);
	}
	
	 /**
     * 신규 저장 코드체크여부 조회(selectCodeChkYn)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectCodeChkYn(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("PurgChrpsnMng.selectCodeChkYn", map);
    }
    
    /**
     * 수정 코드체크여부 조회(selectUpCodeChkYn)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public List<Map> selectUpCodeChkYn(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("PurgChrpsnMng.selectUpCodeChkYn", map);
    }
    
}