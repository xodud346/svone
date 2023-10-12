package com.ssp.bo.rd.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.bo.rd.dao
 * <pre>     RdNxPlatGeneratorDao
 * @author
 * @since 2022.04.14
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.04.14 	최초작성
 */
public interface RdNxPlatGeneratorDao {

	/**                                                                                                                     	
	 * 테이블 유저를 조회(selectNxPlatGeneratorUser)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */  
    List<Map> selectNxPlatGeneratorUser() throws Exception;

	/**                                                                                                                     	
	 * 모든 테이블을 조회(selectNxPlatGeneratorM)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */  
	List<Map> selectNxPlatGeneratorM(Map<String, Object> map) throws Exception;

	/**                                                                                                                     	
	 * 모든 테이블을 조회(selectNxPlatGeneratorD)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */  
	List<Map> selectNxPlatGeneratorD(Map<String, Object> map) throws Exception;
}
