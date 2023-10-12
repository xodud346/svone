package com.ssp.bo.rd.service.impl;


import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.rd.dao.RdNxPlatGeneratorDao;
import com.ssp.bo.rd.service.RdNxPlatGeneratorService;

/**
 * <pre>
 * &#64;title  제너레이트(Ibits/Map버전)
 * &#64;desc   제너레이트(Ibits/Map버전) Implementation
 * &#64;package com.ssp.bo.rd.service.impl
 * </pre>
 *
 * @author
 * @since 2022. 04. 14
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 *      ------------------------------------------------ 2022.04.14 최초작성
 */
@Service("rdNxPlatGeneratorService")
public class RdNxPlatGeneratorServiceImpl implements RdNxPlatGeneratorService {
	@Resource(name = "rdNxPlatGeneratorDao")
	private RdNxPlatGeneratorDao rdNxPlatGeneratorDao;

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectNxPlatGeneratorUser
	 * 2. ClassName  : RdCommInitServiceImpl
	 * 3. Comment    : 테이블 유저를 조회
	 * 4. 작성자     :
	 * 5. 작성일     : 2022.04.14
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult selectNxPlatGeneratorUser() throws Exception {
	   	NexacroResult result = new NexacroResult();

	   	List<Map> records = new ArrayList<Map>();

	   	records = rdNxPlatGeneratorDao.selectNxPlatGeneratorUser();

	   	result.addDataSet("ds_ower", records);

	    return result;
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectNxPlatGeneratorM
	 * 2. ClassName  : RdCommInitServiceImpl
	 * 3. Comment    : 모든 테이블을 조회
	 * 4. 작성자     :
	 * 5. 작성일     : 2022.04.14
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult selectNxPlatGeneratorM(Map<String,Object> searchMap) throws Exception {
	   	NexacroResult result = new NexacroResult();

	   	List<Map> records = new ArrayList<Map>();

	   	records = rdNxPlatGeneratorDao.selectNxPlatGeneratorM(searchMap);

	   	result.addDataSet("ds_master", records);

	    return result;
	}

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectNxPlatGeneratorD
	 * 2. ClassName  : RdCommInitServiceImpl
	 * 3. Comment    : 각각 테이블 항목을 조회
	 * 4. 작성자     :
	 * 5. 작성일     : 2022.04.14
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult selectNxPlatGeneratorD(Map<String,Object> searchMap) throws Exception {
	   	NexacroResult result = new NexacroResult();

	   	List<Map> records = new ArrayList<Map>();

	   	records = rdNxPlatGeneratorDao.selectNxPlatGeneratorD(searchMap);

	   	result.addDataSet("ds_detail", records);

	    return result;
	}
}
