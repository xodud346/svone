package com.ssp.bo.cc.dao.impl;


import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.ssp.bo.cc.dao.BzplcDao;
import com.ssp.core.cc.dao.CustCoreDao;


/**
 * <pre>
 * @title   Bzplc Dao
 * @desc    사업장기본
 * @package com.ssp.bo.cc.dao.impl
 * <pre>
 * 
 * @author  박성근
 * @since   2022.02.11
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자   	내용
 * ------------------------------------------------
 * 2022.02.11   박성근   	최초작성
 * ------------------------------------------------
 */
@Repository("bzplcDao")
public class BzplcDaoImpl extends CustCoreDao implements BzplcDao {
    
    private final String NS = "com.ssp.bo.cc.bzplc.";
    private String ns(String s) {
        return new StringBuffer(NS).append(s).toString();
    }
    
    /**
     * 사업장 조회
     * @param searchMap Map
     * @return List
     */
    public List<Map<String, Object>> selectList(Map<String, Object> params) throws Exception {
        return selectList(ns("selectListBzplc"), params);
    }
    
    /**
     * 사업장 엑셀
     * @param searchMap Map
     * @return List
     */
    public List<Map<String, Object>> selectXlsx(Map<String, Object> params) throws Exception {
        return selectList(ns("selectXlsxBzplc"), params);
    }
    
    /**
     * 사업장 상세
     * @param searchMap Map
     * @return List
     */
    public List<Map<String, Object>> selectDetail(Map<String, Object> params) throws Exception {
        return selectList(ns("selectDetailBzplc"), params);
    }
    
    /**
     * 사업장 삭제
     * @param searchMap Map
     * @return List
     */
	@Override
	public int delete(Map<String, Object> params) throws Exception {
		return update(ns("updateBzplc"), params);
	}
    
    /**
     * 사업장 저장
     * @param searchMap Map
     * @return List
     */
	@Override
	public int save(Map<String, Object> params) throws Exception {
		return update(ns("updateBzplc"), params);
	}
}
