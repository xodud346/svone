package com.ssp.bo.cc.service;

import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.cc.CCUtils;

/**
 * <pre>
 * @title DvplcMngService
 * @desc 배송지 관리
 * @package com.ssp.core.cc.service
 * </pre>
 * @author 
 * @since 2022. 02. 09.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.25			최초작성
 */
public interface CustDvlplcService {

	Map<String, Object> insertDvplcInfo(Map<String, Object> paramMap) throws Exception;
	Map<String, Object> selectDlvplcInfo(Map<String, Object> paramMap) throws Exception;
	Map<String, Object> deleteDlvPlcUseYn(Map<String, Object> paramMap) throws Exception;
	NexacroResult selectDlvplcList(Map<String, Object> paramMap, CCUtils ccUtils) throws Exception;
	NexacroResult selectMbrBasicInfo(Map<String, Object> paramMap) throws Exception;
	NexacroResult selectMbrBasicInfoList(Map<String, Object> paramMap) throws Exception;
	NexacroResult deleteDlvplcInfo(Map<String, Object> paramMap) throws Exception;
	NexacroResult updateMbrDlvplcBasisYn(Map<String, Object> paramMap) throws Exception;
	Map<String,Object> selectAllExcelDownload(Map<String, Object> searchMap, CCUtils ccUtils) throws Exception;
}
