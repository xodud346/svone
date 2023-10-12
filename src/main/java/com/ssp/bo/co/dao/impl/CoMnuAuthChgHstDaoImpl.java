package com.ssp.bo.co.dao.impl;

import com.ssp.bo.co.dao.CoMnuAuthChgHstDao;
import com.ssp.core.co.dao.CommonDAO;

import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * <pre></pre>
 * @title
 * @package com.ssp.bo.co.dao.impl
 * <pre>    CoSmsSendHstDaoImpl</pre>
 * @author lee
 * @since 2023. 07. 24
 * @version 1.0
 * @see CoMnuAuthChgHstDaoImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2023.06.02.	이상민	최초작성
 */
@Repository("CoMnuAuthChgHstDao")
public class CoMnuAuthChgHstDaoImpl implements CoMnuAuthChgHstDao {

    @Resource(name = "commonDAO")
    private CommonDAO commonDAO;

    /**
     * 메뉴권한변경이력 데이터 수 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public int selectMnuAuthChgHstListCount(Map<String, Object> searchMap) {
        return commonDAO.selectCount("CoMnuAuthChgHst.selectMnuAuthChgHstListCount", searchMap);
    }
    
    /**
     * 메뉴권한변경이력 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectMnuAuthChgHstList(Map<String, Object> searchMap) {
        return commonDAO.selectList("CoMnuAuthChgHst.selectMnuAuthChgHstList", searchMap);
    }
    
}
