package com.ssp.bo.co.dao.impl;

import com.ssp.bo.co.dao.CoTransStatMngDao;
import com.ssp.core.co.dao.CommonDAO;

import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title CoTransStatMngDaoImpl
 * @desc 거래명세서관리 dao implement
 * @package com.ssp.bo.co.dao.impl
 * <pre>
 * @author lee
 * @since 2022-03-11
 * @version 1.0
 * @see CoTransStatMngDaoImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022-03-11	lee	최초작성
 */
@Repository("coTransStatMngDao")
public class CoTransStatMngDaoImpl implements CoTransStatMngDao {

    @Resource(name = "commonDAO")
    private CommonDAO commonDAO;

    /**
     * 거래명세서관리 목록 카운트 조회
     * @param searchMap Map
     * @return int
     */
    @Override
    public int selectTransStatMngListCount(Map<String, Object> searchMap) {
        return commonDAO.selectCount("CoTransStatMng.selectTransStatMngListCount", searchMap);
    }

    /**
     * 거래명세서관리 목록 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectTransStatMngList(Map<String, Object> searchMap) {
        return commonDAO.selectList("CoTransStatMng.selectTransStatMngList", searchMap);
    }

    /**
     * 거래명세서관리 등록
     * @param saveMap Map
     * @return int
     * @throws Exception sql
     */
    @Override
    public int insertTransStatMng(Map<String, Object> saveMap) throws Exception {
        return commonDAO.insert("CoTransStatMng.insertTransStatMng", saveMap);
    }

    /**
     * 거래명세서관리 수정
     * @param saveMap Map
     * @return int
     * @throws Exception sql
     */
    @Override
    public int updateTransStatMng(Map<String, Object> saveMap) throws Exception {
        return commonDAO.update("CoTransStatMng.updateTransStatMng", saveMap);
    }

    /**
     * 거래명세서관리 삭제
     * @param saveMap Map
     * @return int
     * @throws Exception sql
     */
    @Override
    public int deleteTransStatMng(Map<String, Object> saveMap) throws Exception {
        return commonDAO.update("CoTransStatMng.deleteTransStatMng", saveMap);
    }
}
