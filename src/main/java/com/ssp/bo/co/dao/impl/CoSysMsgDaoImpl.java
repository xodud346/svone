package com.ssp.bo.co.dao.impl;

import com.ssp.bo.co.dao.CoSysMsgDao;
import com.ssp.core.co.dao.CommonDAO;

import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title 시스템메시지관리
 * @desc dao
 * @package com.ssp.bo.co.dao.impl
 * <pre>    CoSysMsgDaoImpl
 * @author lee
 * @since 2022-03-08
 * @version 1.0
 * @see CoSysMsgDaoImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022-03-08	lee	최초작성
 */
@Repository("coSysMsgDao")
public class CoSysMsgDaoImpl implements CoSysMsgDao {

    @Resource(name = "commonDAO")
    private CommonDAO commonDAO;

    /**
     * 시스템 메세지관리 목록 개수 조회
     * @param searchMap Map
     * @return int
     */
    @Override
    public int selectSystemMessageMngListCount(Map<String, Object> searchMap) {
        return commonDAO.selectCount("SysMng.selectSystemMessageMngListCount", searchMap);
    }

    /**
     * 시스템 메세지관리 목록 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectSystemMessageMngList(Map<String, Object> searchMap) {
        return commonDAO.selectList("SysMng.selectSystemMessageMngList", searchMap);
    }

    /**
     * 시스템 메세지관리 등록
     * @param saveMap map
     * @return int
     * @throws Exception sql
     */
    @Override
    public int insertSysMessageMng(Map<String, Object> saveMap) throws Exception {
        return commonDAO.insert("SysMng.insertSysMessageMng", saveMap);
    }

    /**
     * 시스템 메세지관리 수정
     * @param saveMap map
     * @return int
     * @throws Exception sql
     */
    @Override
    public int updateSysMessageMng(Map<String, Object> saveMap) throws Exception {
        return commonDAO.update("SysMng.updateSysMessageMng", saveMap);
    }

    /**
     * 시스템 메세지관리 삭제
     * @param saveMap map
     * @return int
     * @throws Exception sql
     */
    @Override
    public int deleteSysMessageMng(Map<String, Object> saveMap) throws Exception {
        return commonDAO.delete("SysMng.deleteSysMessageMng", saveMap);
    }

}
