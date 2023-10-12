package com.ssp.bo.iv.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.iv.dao.IvPopupDao;
import com.ssp.bo.iv.service.IvPopupService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.od.utils.OU;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title  재고관리 팝업
 * @package com.ssp.bo.iv.service.impl
 * <pre>
 * @author  윤민우
 * @since   2022.03.16
 * @version 1.0
 * @see IvPopupServiceImpl
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.03.16    윤민우        최초작성
 */
@Service("ivPopupService")
public class IvPopupServiceImpl implements IvPopupService {

	@Autowired
	private IvPopupDao ivPopupDao;


	/**
	 * <pre>
	 * 1. MethodName : selectOperatorPopupListCount
	 * 2. ClassName  : IvPopupServiceImpl
	 * 3. Comment    : 재고관리 구매담당자 팝업 목록 카운트
	 * 4. 작성자       : 윤민우
	 * 5. 작성일       : 2022. 03. 17.
	 * </pre>
	 *
	 * @param commandMap
	 * @return
	 * @throws Exception
	 */
	public int selectOperatorPopupListCount(Map<String, Object> commandMap) throws Exception {
		if (!StringUtil.getString(commandMap.get("empNo")).isEmpty()){
			String[] splitStr = OU.asS(commandMap.get("empNo")).trim().split("\\s*,\\s*");
			if(splitStr.length > 0) {
				commandMap.put("arrEmpNo", splitStr);
				commandMap.put("empNo", "");
			}else {
				commandMap.put("empNo", commandMap.get("empNo"));
				commandMap.put("arrEmpNo", "");
			}
		}
		return ivPopupDao.selectOperatorPopupListCount(commandMap);
	}

	/**
	 * <pre>
	 * 1. MethodName : selectOperatorPopupList
	 * 2. ClassName  : IvPopupServiceImpl
	 * 3. Comment    : 재고관리 구매담당자 팝업 목록 조회
	 * 4. 작성자       : 윤민우
	 * 5. 작성일       : 2022. 03. 17.
	 * </pre>
	 *
	 * @param commandMap
	 * @return
	 * @throws Exception
	 */
	public List<Map<String, Object>> selectOperatorPopupList(Map<String, Object> commandMap) throws Exception {
		if (!StringUtil.getString(commandMap.get("empNo")).isEmpty()){
			String[] splitStr = OU.asS(commandMap.get("empNo")).trim().split("\\s*,\\s*");
			if(splitStr.length > 0) {
				commandMap.put("arrEmpNo", splitStr);
				commandMap.put("empNo", "");
			}else {
				commandMap.put("empNo", commandMap.get("empNo"));
				commandMap.put("arrEmpNo", "");
			}
		}
		return ivPopupDao.selectOperatorPopupList(commandMap);
	}

	@Override
	public NexacroResult selectMbrOprtrOrgInfoList(Map<String, Object> searchInfo) throws Exception {
		NexacroResult result = new NexacroResult();

        // input dataset id 카멜화
        Map<String, Object> searchMap = CommonUtil.toCamelCaseMap(searchInfo);

        // 조회
        List<Map<String,Object>> list = ivPopupDao.selectMbrOprtrOrgInfoList(searchMap);

        // 카운트
      	int totalCount = ivPopupDao.selectMbrOprtrOrgInfoListCnt(searchMap);

      	// 리턴값 set
        result.addVariable( "totalCount", totalCount);
        result.addDataSet("ds_output1", list);

        return result;
	}

}
