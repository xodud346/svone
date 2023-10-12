package com.ssp.bo.co.dao.impl;

import java.util.List;
import java.util.Map;
import java.util.HashMap;
import javax.annotation.Resource;
import org.springframework.stereotype.Repository;
import com.ssp.bo.co.dao.CoMbrSysCnctLogDao;
import com.ssp.core.co.dao.CommonDAO;


/**
 * <pre>
 * @title 회원 접속 로그
 * @package com.ssp.bo.co.dao.impl
 * <pre>    CoMbrSysCnctLogImpl
 * @author 박성진
 * @since 2022-03-18
 * @version 1.0
 * @see CoMbrSysCnctLogImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022-03-18	박성진 최초작성
 */
@Repository("coMbrSysCnctLogDao")
public class CoMbrSysCnctLogDaoImpl implements CoMbrSysCnctLogDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;
    
    /**
     * 접속 로그 목록 카운트
     * @param searchMap Map
     * @return int
     * @throws Exception exception
     */

	@Override
	public int selectCoMbrSysCnctLogListCount(Map<String, Object> searchMap) {
		// TODO Auto-generated method stub
		return commonDAO.selectCount("CoMbrSysCnctLog.selectCoMbrSysCnctLogListCount", searchMap);
	}    
	
    /**
     * 접속 로그 저장
     * @param searchMap Map
     * @return int
     * @throws Exception exception
     */
	@Override
	public List<Map<String, Object>> selectCoMbrSysCnctLogList(Map<String, Object> searchMap) {
		// TODO Auto-generated method stub
		return commonDAO.selectList("CoMbrSysCnctLog.selectCoMbrSysCnctLogList", searchMap);
	}

    /**
     * 접속 로그 목록 조회
     * @param save Map
     * @return int
     * @throws Exception exception
     */
	@Override
	public int insertBoSysCnctLog(Map<String, Object> saveMap) throws Exception {
		// TODO Auto-generated method stub
		return commonDAO.insert("CoMbrSysCnctLog.insertBoSysCnctLog", saveMap);
	}
	
}
