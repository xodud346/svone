package com.ssp.bo.co.dao.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.ssp.bo.co.dao.CoMnuMngDao;
import com.ssp.core.co.dao.CommonDAO;

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
@Repository("coMnuMngDao")
public class CoMnuMngDaoImpl implements CoMnuMngDao {

    @Resource(name = "commonDAO")
    private CommonDAO commonDAO;

    /**
     * 메뉴 등록
     * @param saveMap Map
     * @return int
     */
    @Override
    public int insertComMenu(Map<String, Object> saveMap) throws Exception {
        return commonDAO.insert("CoMnuMng.insertComMenu", saveMap);
    }

    /**
     * 메뉴 수정
     * @param saveMap Map
     * @return int
     */
    @Override
    public int updateComMenu(Map<String, Object> saveMap) throws Exception {
        return commonDAO.update("CoMnuMng.updateComMenu", saveMap);
    }

    /**
     * 메뉴 삭제
     * @param saveMap Map
     * @return int
     */
    @Override
    public int deleteComMenu(Map<String, Object> saveMap) throws Exception {
        return commonDAO.update("CoMnuMng.deleteComMenu", saveMap);
    }

    /**
     * 메뉴 시퀀스 채번
     * @return int
     * @throws Exception sql
     */
    @Override
    public int selectMenuSeq(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectInteger("CoMnuMng.selectMenuSeq", searchMap);
    }

    /**
     * 메뉴 리스트 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectMnuMngList(Map<String, Object> searchMap) {
        //noinspection unchecked
        return commonDAO.selectList("CoMnuMng.selectMnuMngList", searchMap);
    }
    
    /**
     * 메뉴 리스트 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectMenuFileList(Map<String, Object> searchMap) {
    
        return commonDAO.selectList("CoMnuMng.selectMenuFileList", searchMap);
    }
    
    /**
     * 메뉴 관리  조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectMnuList(Map<String, Object> searchMap) {
        //noinspection unchecked
        return commonDAO.selectList("CoMnuMng.selectMnuList", searchMap);
    }
    

    /**
     * 즐겨찾기 리스트 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectMnuFvrtsList(Map<String, String> searchMap) {
        return commonDAO.selectList("CoMnuMng.selectMnuFvrtsList", searchMap);
    }    

    /**
     * 즐겨찾기 건수
     * @return int
     * @throws Exception sql
     */
    @Override
    public int selectMnuFvrtsCnt(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectInteger("CoMnuMng.selectMnuFvrtsCnt", searchMap);
    }

    /**
     * 메뉴관리 메뉴 목록
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectMenuMngList(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectList("CoMnuMng.selectMenuMngList", searchMap);
    }

    /**
     * 즐겨찾기 등록
     * @param saveMap Map
     * @return int
     */
    @Override
    public int insertMnuFvrts(Map<String, Object> saveMap) throws Exception {
        return commonDAO.insert("CoMnuMng.insertMnuFvrts", saveMap);
    }

    /**
     * 즐겨찾기 삭제
     * @param saveMap Map
     * @return int
     */
    @Override
    public int deleteMnuFvrts(Map<String, Object> saveMap) throws Exception {
        return commonDAO.update("CoMnuMng.deleteMnuFvrts", saveMap);
    }
    
    @Override
    public Map<String, Object> selectMnuMng(Map<String, Object> searchMap) throws Exception {
        return commonDAO.select("CoMnuMng.selectMenu", searchMap);
    }
    
    @Override
	@SuppressWarnings("unchecked")
    public Map<String, Object> selectMnuMng(String pgmId) throws Exception {
    	Map<String, Object> searchMap = new HashMap<String, Object>();
    	searchMap.put("pgmId", pgmId);
        return commonDAO.select("CoMnuMng.selectMnuMng", searchMap);
    }
    
}
