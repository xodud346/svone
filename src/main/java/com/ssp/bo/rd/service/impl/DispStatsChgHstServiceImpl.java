package com.ssp.bo.rd.service.impl;


import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.rd.dao.DispStatsChgHstDao;
import com.ssp.bo.rd.dao.PubPrdProcStbDao;
import com.ssp.bo.rd.service.DispStatsChgHstService;
import com.ssp.bo.rd.service.PubPrdProcStbService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * &#64;title  진열상태변경이력
 * &#64;desc 진열상태변경이력 Implementation
 * &#64;package com.ssp.bo.rd.service.impl
 * </pre>
 * 
 * @author
 * @since 2022. 02. 17
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 *      ------------------------------------------------ 2022.02.17 최초작성
 */
@Service("dispStatsChgHstService")
public class DispStatsChgHstServiceImpl implements DispStatsChgHstService {
	@Resource(name = "dispStatsChgHstDao")
	private DispStatsChgHstDao dispStatsChgHstDao;

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectList
	 * 2. ClassName : dispStatsChgHstServiceImpl
	 * 3. Comment : 진열상태변경이력
	 * 4. 작성자 : 
	 * 5. 작성일 : 2022.02.17
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult selectList(Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();

		// input dataset id 카멜화
        searchMap = CommonUtil.toCamelCaseMap(searchMap);    
		int totalCount = dispStatsChgHstDao.selectCount(searchMap);
		List<Map<String, Object>> list = dispStatsChgHstDao.selectList(searchMap);
		result.addDataSet("ds_main", list);
		result.addVariable("totalCount", totalCount);
		return result;
	}

	

}
