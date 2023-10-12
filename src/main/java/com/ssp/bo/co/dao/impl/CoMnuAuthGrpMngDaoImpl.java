package com.ssp.bo.co.dao.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.ssp.bo.co.dao.CoMnuAuthGrpMngDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 * @title
 * @desc
 * @package com.serveone.co.dao.impl
 * <pre>    CoMnuAuthGrpMngDaoImpl
 * @author 
 * @since 2022.01.27
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.27		최초작성
 */
@Repository("coMnuAuthGrpMngDao")
public class CoMnuAuthGrpMngDaoImpl implements CoMnuAuthGrpMngDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

    @Override
    public List<Map<String, Object>> selectMnuMngList(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.co.coMnuAuthGrpMng.selectMnuMngList", searchMap);
    }
    
    @Override
    public List<Map<String, Object>> selectMnuAuthGrpInfoList(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.co.coMnuAuthGrpMng.selectMnuAuthGrpInfoList", searchMap);
    }
    
    @Override
    public List<Map<String, Object>> selectMnuAuthInfoList(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.co.coMnuAuthGrpMng.selectMnuAuthInfoList", searchMap);
    }

    @Override
    public int insertMnuAuthInfo(Map<String, Object> saveMap) throws Exception {
        return commonDAO.insert("com.ssp.bo.co.coMnuAuthGrpMng.insertMnuAuthInfo", saveMap);
    }

    @Override
    public int deleteMnuAuthInfo(Map<String, Object> saveMap) throws Exception {
        return commonDAO.insert("com.ssp.bo.co.coMnuAuthGrpMng.deleteMnuAuthInfo", saveMap);
    }
    
    @Override
    public int insertMnuAuthGrpInfo(Map<String, Object> saveMap) throws Exception {
        return commonDAO.insert("com.ssp.bo.co.coMnuAuthGrpMng.insertMnuAuthGrpInfo", saveMap);
    }

    @Override
    public int deleteMnuAuthGrpInfo(Map<String, Object> saveMap) throws Exception {
        return commonDAO.insert("com.ssp.bo.co.coMnuAuthGrpMng.deleteMnuAuthGrpInfo", saveMap);
    }

    /**
     * 부서별 권한 목록
     * @param searchMap  Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectDeptAuthMngList(Map<String, Object> searchMap) {
        return commonDAO.selectList("com.ssp.bo.co.coMnuAuthGrpMng.selectDeptAuthMngList", searchMap);
    }

    /**
     * 부서별 권한 메뉴
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectDeptAuthMngMenu(Map<String, Object> searchMap) {
        return commonDAO.selectList("com.ssp.bo.co.coMnuAuthGrpMng.selectDeptAuthMngMenu", searchMap);
    }

    /**
     * 부서별 권한 메뉴 등록
     * @param saveMap Map
     * @return Map
     * @throws Exception sql
     */
    @Override
    public int insertDeptAuthMngMenu(Map<String, Object> saveMap) throws Exception {
        return commonDAO.insert("com.ssp.bo.co.coMnuAuthGrpMng.insertDeptAuthMngMenu", saveMap);
    }

    /**
     * 부서별 권한 메뉴 수정
     * @param saveMap Map
     * @return Map
     * @throws Exception sql
     */
    @Override
    public int updateDeptAuthMngMenu(Map<String, Object> saveMap) throws Exception {
        return commonDAO.update("com.ssp.bo.co.coMnuAuthGrpMng.updateDeptAuthMngMenu", saveMap);
    }

    /**
     * 부서별 권한 메뉴 삭제
     * @param saveMap Map
     * @return Map
     * @throws Exception sql
     */
    @Override
    public int deleteDeptAuthMngMenu(Map<String, Object> saveMap) throws Exception {
        return commonDAO.update("com.ssp.bo.co.coMnuAuthGrpMng.deleteDeptAuthMngMenu", saveMap);
    }

    /**
     * 부서별 권한 메뉴 카운트
     * @param saveMap Map
     * @return int
     */
    @Override
    public int selectDeptAuthMngCount(Map<String, Object> saveMap) {
        return commonDAO.selectCount("com.ssp.bo.co.coMnuAuthGrpMng.selectDeptAuthMngCount", saveMap);
    }

    /**
     * 운영자별 메뉴권한분류코드 목록
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectOprtrAuthInfoList(Map<String, Object> searchMap) {
        return commonDAO.selectList("com.ssp.bo.co.coMnuAuthGrpMng.selectOprtrAuthInfoList", searchMap);
    }

    /**
     * 운영자별 메뉴권한분류코드 카운트
     * @param saveMap Map
     * @return int
     */
    @Override
    public int selectOprtrAuthInfoCount(Map<String, Object> saveMap) {
        return commonDAO.selectCount("com.ssp.bo.co.coMnuAuthGrpMng.selectOprtrAuthInfoCount", saveMap);
    }

    /**
     * 운영자별 메뉴권한분류코드 등록
     * @param saveMap Map
     * @return int
     */
    @Override
    public int insertOprtrAuthInfo(Map<String, Object> saveMap) throws Exception {
        return commonDAO.insert("com.ssp.bo.co.coMnuAuthGrpMng.insertOprtrAuthInfo", saveMap);
    }

    /**
     * 운영자별 메뉴권한분류코드 수정
     * @param saveMap Map
     * @return int
     */
    @Override
    public int updateOprtrAuthInfo(Map<String, Object> saveMap) throws Exception {
        return commonDAO.update("com.ssp.bo.co.coMnuAuthGrpMng.updateOprtrAuthInfo", saveMap);
    }

    /**
     * 운영자별 메뉴권한분류코드 삭제
     * @param saveMap Map
     * @return int
     */
    @Override
    public int deleteOprtrAuthInfo(Map<String, Object> saveMap) throws Exception {
        return commonDAO.update("com.ssp.bo.co.coMnuAuthGrpMng.deleteOprtrAuthInfo", saveMap);
    }

    /**
     * 운영자 권한 제외 메뉴 목록
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectOprtrMnuMngList(Map<String, Object> searchMap) {
        return commonDAO.selectList("com.ssp.bo.co.coMnuAuthGrpMng.selectOprtrMnuMngList", searchMap);
    }

    /**
     * 운영자별 메뉴 목록
     * @param searchMap  Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectOprtrMnuAuthGrpMngList(Map<String, Object> searchMap) {
        return commonDAO.selectList("com.ssp.bo.co.coMnuAuthGrpMng.selectOprtrMnuAuthGrpMngList", searchMap);
    }

    /**
     *
     * @param data Map
     * @return int
     * @throws Exception sql
     */
    @Override
    public int deleteAuthOprtrMng(Map<String, Object> data) throws Exception {
        return commonDAO.update("com.ssp.bo.co.coMnuAuthGrpMng.deleteAuthOprtrMng", data);
    }

    /**
     *
     * @param data Map
     * @return int
     * @throws Exception sql
     */
    @Override
    public int insertAuthOprtrMng(Map<String, Object> data) throws Exception {
        return commonDAO.insert("com.ssp.bo.co.coMnuAuthGrpMng.insertAuthOprtrMng", data);
    }

    /**
     * 부서별 메뉴권한 엑셀
     * @param searchMap Map
     * @return List
     * @throws Exception sql
     */
	@Override
	public List<Map<String, Object>> selectDeptAuthMngMenuExcel(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.co.coMnuAuthGrpMng.selectDeptAuthMngMenuExcel", searchMap);
	}

    /**
     * 운영자별 메뉴권한 엑셀
     * @param searchMap Map
     * @return List
     * @throws Exception sql
     */
    @Override
    public List<Map<String, Object>> selectOprtrAuthMngMenuExcel(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.co.coMnuAuthGrpMng.selectOprtrAuthMngMenuExcel", searchMap);
    }

}
