package com.ssp.bo.pr.service;

import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.ssp.bo.pr.service.impl.PrProductNewServiceImpl;
import com.ssp.core.util.SspMap;

/**
 * <pre>
 * @title  신규상품요청 목록
 * @package com.ssp.bo.pr.service.impl
 * <pre>
 * @author  김주화
 * @since   2022.04.12
 * @version 1.0
 * @see PrProductNewServiceImpl
 * =================== 변경 내역 ==================
 * 날짜            변경자        내용
 * ------------------------------------------------
 * 2022.04.12      김주화        최초작성
 */

public interface PrProductNewService {
	List<Map<String, Object>> selectNewProductReqList(Map<String, Object> var1) throws Exception;
	List<Map<String, Object>> selectNewProductReqDetail(Map<String, Object> var1) throws Exception;
	List<Map<String, Object>> selectMroClPrdChrpsn(Map<String, Object> var1) throws Exception;
	List<Map<String, Object>> selectProductSpecList (Map<String, Object> var1) throws Exception;
	List<Map<String, Object>> selectReqProcAttrInfoList (Map<String, Object> var1) throws Exception;
    List<Map<String, Object>> selectNewPrdReqFileList(Map<String, Object> detailMap) throws Exception;
	int updateNewPrdReqProc(Map<String, Object> detailMap) throws Exception;
	int insertNewPrdReqStatsDtls(Map<String, Object> detailMap) throws Exception;
	int deleteReqProcAttrInfoList(Map<String, Object> detailMap) throws Exception;
	int mergeReqProcAttrInfoList(Map<String, Object> detailMap, List<Map<String, Object>> prdAttrMap) throws Exception;
	int insertNewPrdReqStatsDtlsList(List<Map<String, Object>> listMap, Map<String, Object> adminMap) throws Exception;
	int mergeNewPrdReqRvwDtls(Map<String, Object> detailMap) throws Exception;
	Map<String,Object> selectSalsChrspnInfo(Map<String, Object> param) throws Exception;
	int insertNewPrdMemo(Map<String, Object> detailMap) throws Exception;
	int checkMnfrCnt(Map<String, Object> detailMap) throws Exception;
	Map<String,Object> selectReSendMroRequestCheck(Map<String, Object> detailMap) throws Exception;
}