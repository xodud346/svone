package com.ssp.bo.co.dao.impl;

import com.ssp.bo.co.dao.CoScrnPrsnDao;
import com.ssp.core.co.dao.CommonDAO;

import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * <pre></pre>
 * @title
 * @package com.ssp.core.co.dao.impl
 * <pre>    CoMnuMngDaoImpl</pre>
 * @author lee
 * @since 2022-01-25
 * @version 1.0
 * @see CoMnuMngDaoImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2017. 11. 8.		lee	최초작성
 */
@Repository("coScrnPrsnDao")
public class CoScrnPrsnDaoImpl implements CoScrnPrsnDao {

    @Resource(name = "commonDAO")
    private CommonDAO commonDAO;

    /**
     * 개인화 리스트 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectScrnPrsnList(Map<String, String> searchMap) {
        return commonDAO.selectList("CoScrnPrsn.selectScrnPrsnList", searchMap);
    }  
    
    /**
     * 개인화 등록
     * @param saveMap Map
     * @return int
     */
    @Override
    public int insertScrnPrsn(Map<String, Object> saveMap) throws Exception {
        return commonDAO.insert("CoScrnPrsn.insertScrnPrsn", saveMap);
    }

    /**
     * 개인화 수정
     * @param saveMap Map
     * @return int
     */
    @Override
    public int updateScrnPrsn(Map<String, Object> saveMap) throws Exception {
        return commonDAO.update("CoScrnPrsn.updateScrnPrsn", saveMap);
    }

    /**
     * 개인화 삭제
     * @param saveMap Map
     * @return int
     */
    @Override
    public int deleteScrnPrsn(Map<String, Object> saveMap) throws Exception {
        return commonDAO.update("CoScrnPrsn.deleteScrnPrsn", saveMap);
    }
    
}
