package com.ssp.bo.rd.dao.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.ssp.bo.rd.dao.RdCommInitDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.bo.rd.dao.impl
 * <pre>     RdCommInitDaoImpl
 * @author
 * @since 2022.04.14
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.26		최초작성
 */
@SuppressWarnings("unchecked")
@Repository("rdCommInitDao")
public class RdCommInitDaoImpl implements RdCommInitDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

	/**                                                                                                                     	
	 * 공통코드 설정에 따라 조회-전체(selectCommInitListT)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */  
	@Override
	public List<Map> selectCommInitListT(Map<String, Object> inMap) throws Exception {
		return commonDAO.selectList("RdCommInit.selectCommInitListT", inMap);
	}

	/**                                                                                                                     	
	 * 공통코드 설정에 따라 조회-선택(selectCommInitListS)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */  
    @Override
    public List<Map> selectCommInitListS(Map<String, Object> inMap) throws Exception {
        return commonDAO.selectList("RdCommInit.selectCommInitListS", inMap);
    }

	/**                                                                                                                     	
	 * 공통코드 설정에 따라 조회-공백(selectCommInitListN)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */
    @Override
    public List<Map> selectCommInitListN(Map<String, Object> inMap) throws Exception {
        return commonDAO.selectList("RdCommInit.selectCommInitListN", inMap);
    }

	/**                                                                                                                     	
	 * 공통코드 설정에 따라 조회-없음(selectCommInitListX)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */
    @Override
    public List<Map> selectCommInitListX(Map<String, Object> inMap) throws Exception {
        return commonDAO.selectList("RdCommInit.selectCommInitListX", inMap);
    }

	/**                                                                                                                     	
	 * RND상품권한조회(selectRndPrdAuthInq)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */
    @Override
    public List<Map> selectRndPrdAuthInq(Map<String, Object> inMap) throws Exception {
        return commonDAO.selectList("RdCommInit.selectRndPrdAuthInq", inMap);
    }
}
