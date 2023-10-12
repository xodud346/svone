package com.ssp.bo.co.dao.impl;


import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.ssp.bo.co.dao.OperatorTransferDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.bo.co.dao.impl
 * <pre>    OperatorTransferDaoImple
 * @author lee
 * @since 2022-03-04
 * @version 1.0
 * @see OperatorTransferDaoImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022-03-04	lee	최초작성
 */
@Repository("operatorTransferDao")
public class OperatorTransferDaoImpl implements OperatorTransferDao {

    @Resource(name = "commonDAO")
    private CommonDAO commonDAO;

    /**
     * 회원운영자조직정보 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectCoMbrOprtrOrgInfoList(Map<String, Object> searchMap) {
        return commonDAO.selectList("com.ssp.bo.co.operatorTransfer.selectCoMbrOprtrOrgInfoList", searchMap);
    }

    /**
     * 회원운영자정보 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectCoMbrOprtrInfoList(Map<String, Object> searchMap) {
        return commonDAO.selectList("com.ssp.bo.co.operatorTransfer.selectCoMbrOprtrInfoList", searchMap);
    }

    /**
     * 회원운영자정보 INF 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectCoMbrOprtrInfoInfList(Map<String, Object>  searchMap) {
        return commonDAO.selectList("com.ssp.bo.co.operatorTransfer.selectCoMbrOprtrInfoInfList", searchMap);
    }

    /**
     * 회원운영자정보 INF 등록
     * @param saveMap Map
     * @return int
     * @throws Exception sql
     */
    @Override
    public int insertOperatorInfTransfer(Map<String, Object> saveMap) throws Exception {
        return commonDAO.insert("com.ssp.bo.co.operatorTransfer.insertOperatorInfTransfer", saveMap);
    }

    /**
     * 회원운영자정보 INF 삭제
     * @param saveMap Map
     * @return int
     * @throws Exception sql
     */
    @Override
    public int deleteOperatorInfTransfer(Map<String, Object> saveMap) throws Exception {
        return commonDAO.update("com.ssp.bo.co.operatorTransfer.deleteOperatorInfTransfer", saveMap);
    }

    /**
     * 회원운영자정보 등록
     * @param saveMap Map
     * @return int
     * @throws Exception sql
     */
    @Override
    public int insertOperatorTransfer(Map<String, Object> saveMap) throws Exception {
        return commonDAO.insert("com.ssp.bo.co.operatorTransfer.insertOperatorTransfer", saveMap);
    }

    /**
     * 회원운영자정보 삭제
     * @param saveMap Map
     * @return int
     * @throws Exception sql
     */
    @Override
    public int deleteOperatorTransfer(Map<String, Object> saveMap) throws Exception {
        return commonDAO.update("com.ssp.bo.co.operatorTransfer.deleteOperatorTransfer", saveMap);
    }

    /**
     * 회원운영자정보 INF 개수 조회
     * @param saveMap Map
     * @return int
     * @throws Exception sql
     */
    @Override
    public int selectCoMbrOprtrInfoInfCount(Map<String, Object> saveMap) throws Exception {
        return commonDAO.selectCount("com.ssp.bo.co.operatorTransfer.selectCoMbrOprtrInfoInfCount", saveMap);
    }

    /**
     * 회원운영자정보 개수 조회
     * @param saveMap Map
     * @return int
     * @throws Exception sql
     */
    @Override
    public int selectCoMbrOprtrInfoCount(Map<String, Object> saveMap) throws Exception {
        return commonDAO.selectCount("com.ssp.bo.co.operatorTransfer.selectCoMbrOprtrInfoCount", saveMap);
    }
    
    /**
     * 운영자 조직 목록 카운트 조회 
     * @param saveMap Map
     * @return int
     * @throws Exception sql
     */
    @Override
    public int selectOprtrOrgInfoListCount(Map<String, Object> saveMap) throws Exception {
        return commonDAO.selectCount("com.ssp.bo.co.operatorTransfer.selectOprtrOrgInfoListCount", saveMap);
    }
    
    /**
     * 운영자 조직 목록 조회 
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectOprtrOrgInfoList(Map<String, Object> searchMap) {
        return commonDAO.selectList("com.ssp.bo.co.operatorTransfer.selectOprtrOrgInfoList", searchMap);
    }
    

    /**
     * 운영자 목록 카운트 조회 
     * @param saveMap Map
     * @return int
     * @throws Exception sql
     */
    @Override
    public int selectOprtrInfoListCount(Map<String, Object> saveMap) throws Exception {
        return commonDAO.selectCount("com.ssp.bo.co.operatorTransfer.selectOprtrInfoListCount", saveMap);
    }
    
    /**
     * 운영자 목록 조회 
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectOprtrInfoList(Map<String, Object> searchMap) {
        return commonDAO.selectList("com.ssp.bo.co.operatorTransfer.selectOprtrInfoList", searchMap);
    }
    
    /**
     * 운영자 상세 정보 조회 
     * @param searchMap Map
     * @return Map
     */
    @Override
    public Map<String, Object> selectMbrOprtrInfo(Map<String, Object> searchMap) throws Exception {
        return commonDAO.select("com.ssp.bo.co.operatorTransfer.selectMbrOprtrInfo", searchMap);
    }

    /**
     * 운영자 이관등록 엑셀 다운로드 조회
     * @param searchMap Map
     * @return List
     * @throws Exception sql
     */
	@Override
	public List<Map<String, Object>> selectCoMbrOprtrInfoExcelList(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectList("com.ssp.bo.co.operatorTransfer.selectCoMbrOprtrInfoExcelList", searchMap);
	}

}
