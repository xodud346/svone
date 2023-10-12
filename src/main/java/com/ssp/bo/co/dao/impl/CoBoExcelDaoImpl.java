package com.ssp.bo.co.dao.impl;


import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.ssp.bo.co.dao.CoBoExcelDao;
import com.ssp.bo.co.dao.CoComCdMngDao;
import com.ssp.core.co.dao.CommonDAO;
import com.ssp.core.co.dto.CoExcelDto;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.core.co.dao
 * <pre>    CoBoExcelDaoImpl
 * @author  KST
 * @since   2023-07-20
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2023. 07. 20.		KST	최초작성
 */
@Repository("coBoExcelDao")
public class CoBoExcelDaoImpl implements CoBoExcelDao {

    @Resource(name = "commonDAO")
    private CommonDAO commonDAO;

	/** 2023.07.20 KST 추가 - NVL 제거 버전 */
	@Override
	public List<CoExcelDto> selectExcelList(Map<String, Object> commandMap) throws Exception {
		return commonDAO.selectList("com.ssp.bo.co.coBoExcel.selectExcelList", commandMap);
	}   
}
