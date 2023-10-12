package com.ssp.bo.cc.service.impl;


import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssp.bo.cc.dao.CorpDao;
import com.ssp.bo.cc.service.CorpService;

/**
 * <pre>
 * @title  법인정보
 * @desc   법인정보 Implementation
 * @package com.ssp.bo.cc.service.impl
 * </pre>
 * 
 * @author
 * @since 2022. 01. 25
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜        변경자  내용
 * ------------------------------------------------
 * 2022.02.09  박성근  최초작성
 * ------------------------------------------------
 */
@Service("corpService")
public class CorpServiceImpl implements CorpService {
	
	@Autowired
	private CorpDao corpDao;

	/**
	 *
	 * <pre>
	 * 1. MethodName : list
	 * 2. ClassName  : CorpServiceImpl
	 * 3. Comment    : 사업장기본 목록
	 * 4. 작성자     : 박성근
	 * 5. 작성일     : 2022.02.09
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> list(Map<String, Object> params) throws Exception {
		
		return corpDao.selectList(params);
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : xlsx
	 * 2. ClassName  : CorpServiceImpl
	 * 3. Comment    : 사업장기본 목록
	 * 4. 작성자     : 박성근
	 * 5. 작성일     : 2022.02.09
	 * </pre>
	 *
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Map<String, Object>> xlsx(Map<String, Object> params) throws Exception {
		return corpDao.selectXlsx(params);
	}
	
}
