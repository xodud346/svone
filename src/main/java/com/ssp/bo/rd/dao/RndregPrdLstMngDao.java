package com.ssp.bo.rd.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.bo.rd.dao
 * <pre>    RndregPrdLstMngDao
 * @author 
 * @since 2022.03.16
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.26 	최초작성
 */
public interface RndregPrdLstMngDao {
 
	int selectPcPrdPrcDtlsCount(Map<String, Object> searchMap) throws Exception;
	
    List<Map<String, Object>> selectPcPrdPrcDtls(Map<String, Object> searchMap) throws Exception;

}
