package com.ssp.bo.co.dao.impl;

import com.ssp.bo.co.dao.CoSmsSendHstDao;
import com.ssp.core.co.dao.CommonDAO;

import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * <pre></pre>
 * @title
 * @package com.ssp.core.co.dao.impl
 * <pre>    CoSmsSendHstDaoImpl</pre>
 * @author lee
 * @since 2023. 06. 02
 * @version 1.0
 * @see CoSmsSendHstDaoImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2023.06.02.	이상민	최초작성
 */
@Repository("coSmsSendHstDao")
public class CoSmsSendHstDaoImpl implements CoSmsSendHstDao {

    @Resource(name = "commonDAO")
    private CommonDAO commonDAO;

    /**
     * SMS발송내역리스트 데이터 수 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public int selectSmsSendHstListCount(Map<String, Object> searchMap) {
        return commonDAO.selectCount("CoSmsSendHst.selectSmsSendHstListCount", searchMap);
    }
    
    /**
     * SMS발송내역리스트 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectSmsSendHstList(Map<String, Object> searchMap) {
        return commonDAO.selectList("CoSmsSendHst.selectSmsSendHstList", searchMap);
    }
    
}
