package com.ssp.bo.rd.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.bo.rd.dao
 * <pre>    PubPrdProcStbDao
 * @author 
 * @since 2022.02.15
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.26 	최초작성
 */
public interface PubPrdSalsprcQtyDao {
 
	List<Map<String, Object>> selectPrPrdInfo(Map<String, Object> searchMap) throws Exception;
	
	List<Map<String, Object>> selectDpPrdStatsInfo(Map<String, Object> searchMap) throws Exception;
	
	int selectPurcInfoCount(Map<String, Object> searchMap) throws Exception;
	
	List<Map<String, Object>> selectPurcInfo(Map<String, Object> searchMap) throws Exception;

	List<Map<String, Object>> selectPcPrdPrc(Map<String, Object> searchMap) throws Exception;

	int selectPcPrdQtyCount(Map<String, Object> searchMap) throws Exception;	
	
	List<Map<String, Object>> selectPcPrdQty(Map<String, Object> searchMap) throws Exception;
	
	int selectPcPrdDlcstDtlsCount(Map<String, Object> searchMap) throws Exception;
	
	List<Map<String, Object>> selectPcPrdDlcstDtls(Map<String, Object> searchMap) throws Exception;
	
	List<Map<String, Object>> selectRdReqNewPrdInfo(Map<String, Object> searchMap) throws Exception;	
	
    int updateDpPrdStatsInfo(Map<String, Object> saveMap) throws Exception;	
    
    int insertDpPrdStatsInfo(Map<String, Object> saveMap) throws Exception;
    
    int updatePcPrdPrcDtls(Map<String, Object> saveMap) throws Exception;	
    
    int insertPcPrdQtyDtls(Map<String, Object> saveMap) throws Exception;
    
    int updatePcPrdQtyDtls(Map<String, Object> saveMap) throws Exception;	
    
    Integer deletePcPrdQtyDtls(Map<String, Object> saveMap) throws Exception; 
    
    int insertPcPrdDlcstDtls(Map<String, Object> saveMap) throws Exception;    
    
    int updatePcPrdDlcstDtls(Map<String, Object> saveMap) throws Exception;	
    
    Integer deletePcPrdDlcstDtls(Map<String, Object> saveMap) throws Exception;
}
