package com.ssp.bo.cc.service;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.bo.cc.service
 * <pre>    CustMbrHistService
 * @author  moonjooh
 * @since   2022. 02. 24.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 *  2022.02.24		최초작성
 */

public interface CustMbrHistService {

	// 회원정보 전체 이력 조회
	List<Map<String,Object>> selectMbrHistPop(Map<String,Object> searchInfo);
	
}
