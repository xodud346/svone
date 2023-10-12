package com.ssp.bo.sa.service;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

/**
 * <pre>
 * @title 영업마케팅 공통 Service
 * @package com.ssp.bo.sa.service
 * </pre>
 *
 * @author 87minho
 * @since 2022.03.18.
 * @version 1.0
 * @see SaComService
 * =================== 변경 내역 ==================
 * 날짜			변경자	내용
 * ------------------------------------------------
 * 2022.03.18.	87minho	최초작성
 * 2022.04.11.	박진원	상품, 운영단위 벨리데이션 체크
 */
public interface SaComService
{
	/** 단일 파일 업로드 */
	NexacroResult singleFileUpload(HttpServletRequest request) throws Exception;

	/** 파일 업로드 */
	NexacroResult fileUpload(HttpServletRequest request) throws Exception;

	/** 상품ID 유효성 검사 */
	public List<Map<String, Object>> selectPrdIdCheckList(Map<String, Object> searchMap, List<Map<String, Object>> searchPrdIdCheckMapList) throws Exception;

	/** 운영단위ID 유효성 검사 */
	public List<Map<String, Object>> selectOprUnitCheckList(Map<String, Object> searchMap, List<Map<String, Object>> ds_searchOprUnitCheckList) throws Exception;

	/** 상품군ID 유효성 검사 */
	public List<Map<String, Object>> selectPrdClcdCheckList(Map<String, Object> searchMap, List<Map<String, Object>> searchPrdClcdCheckMapList) throws Exception;

	/** 파일 삭제 */
	public void deleteFile(String contextRealPath, String atflStorPath, String oriAtflNm);

	/** 파일 삭제 */
	int deleteCoAtflFile(String strDocRegId, String intDocRegSeq, String strAtflStorPath, String strOriAtflNm) throws Exception;
}
