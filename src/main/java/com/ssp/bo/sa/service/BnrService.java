package com.ssp.bo.sa.service;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;

/**
 * <pre>
 * @title 배너 서비스
 * @package com.ssp.bo.sa.service
 * </pre>
 * @author
 * @since 2022. 03. 14.
 * @version 1.0
 * @see BnrService
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.03.14.		87minho	최초작성
 */
public interface BnrService {

	/** 배너 노출 목록 조회 */
	NexacroResult selectBnrExpsList(Map<String, Object> searchMap) throws Exception;

	/** 배너 목록 조회 */
	NexacroResult selectBnrList(Map<String, Object> searchMap, List<Map<String, Object>> oprUnitList, OdOrderComm odComm) throws Exception;

	/** 게시구분:전체 배너 개수 조회 */
	NexacroResult selectNoticAllBnrCnt(Map<String, Object> searchMap) throws Exception;

	/** 배너 순서 저장 */
	NexacroResult updateBnrDispSo(List<Map<String, Object>> saveMap) throws Exception;

	/** 배너 노출정보 및 배너정보 삭제 */
	NexacroResult deleteBnrExps(Map<String, Object> deleteMap) throws Exception;

	/** 배너 상세 조회 */
	NexacroResult selectBnrInfo(Map<String, Object> searchMap) throws Exception;

	/** 배너 저장 */
	NexacroResult saveBnrInfo(Map<String, Object> searchMap, List<Map<String, Object>> oprUnitList) throws Exception;

	/** 배너 삭제 */
	NexacroResult deleteBnrInfo(Map<String, Object> deleteMap) throws Exception;

	/** 인기카테고리 배너 목록 조회 */
	NexacroResult selectPprCatgBnrList(Map<String, Object> searchMap) throws Exception;

	/** 인기카테고리 배너 상세 조회 */
	NexacroResult selectPprCatgBnrInfo(Map<String, Object> searchMap) throws Exception;

	/** 인기카테고리 배너 저장 */
	NexacroResult savePprCatgBnrInfo(Map<String, Object> saveMap) throws Exception;

	int deleteCoAtflFile(String strDocRegId, String intDocRegSeq, String strAtflStorPath, String strOriAtflNm) throws Exception;

}
