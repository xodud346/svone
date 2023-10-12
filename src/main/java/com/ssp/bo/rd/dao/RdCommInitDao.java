package com.ssp.bo.rd.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.bo.rd.dao
 * <pre>     RdCommInitDao
 * @author
 * @since 2022.04.14
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.04.14 	최초작성
 */
public interface RdCommInitDao {

	/**                                                                                                                     	
	 * 공통코드 설정에 따라 조회-전체(selectCommInitListT)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */  
    List<Map> selectCommInitListT(Map<String, Object> inMap) throws Exception;

	/**                                                                                                                     	
	 * 공통코드 설정에 따라 조회-선택(selectCommInitListS)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */  
    List<Map> selectCommInitListS(Map<String, Object> inMap) throws Exception;

	/**                                                                                                                     	
	 * 공통코드 설정에 따라 조회-공백(selectCommInitListN)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */
    List<Map> selectCommInitListN(Map<String, Object> inMap) throws Exception;

	/**                                                                                                                     	
	 * 공통코드 설정에 따라 조회-없음(selectCommInitListX)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */
    List<Map> selectCommInitListX(Map<String, Object> inMap) throws Exception;

	/**                                                                                                                     	
	 * RND상품권한조회(selectRndPrdAuthInq)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */
    List<Map> selectRndPrdAuthInq(Map<String, Object> inMap) throws Exception;
}
