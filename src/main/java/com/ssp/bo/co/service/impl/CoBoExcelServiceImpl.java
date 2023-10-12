package com.ssp.bo.co.service.impl;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssp.bo.co.dao.CoBoExcelDao;
import com.ssp.bo.co.service.CoBoExcelService;
import com.ssp.core.co.dto.CoExcelDto;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.core.co.service
 * <pre>    CoBoExcelServiceImpl
 * @author  KST
 * @since   2023-07-20
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2023. 07. 20.		KST	최초작성
 */
@Service("coBoExcelService")
public class CoBoExcelServiceImpl implements CoBoExcelService {

    @Autowired
    private CoBoExcelDao coBoExcelDao;

    private final Logger logger = LoggerFactory.getLogger(CoBoExcelServiceImpl.class);

	@Override
	public List<CoExcelDto> selectExcelList(Map<String, Object> commandMap) throws Exception {
		return coBoExcelDao.selectExcelList(commandMap);
	}
	
}
