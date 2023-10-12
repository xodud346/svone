package com.ssp.bo.cc.dao.impl;


import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.cc.dao.CustHelperDao;


/**
 * <pre>
 * @title voc
 * @desc
 * @package com.ssp.bo.cc.dao.impl
 * @ClassName CustHelperDaoImpl
 * </pre>
 * @author  유창호
 * @since   2022. 04. 25.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 */
@Repository("custHelperDao")
public class CustHelperDaoImpl implements CustHelperDao {

	@Autowired
    private SqlSession sqlSession;

	@Override
	public Map<String, Object> selectCustHelperDetail(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectOne("com.ssp.bo.cc.cust.helper.selectCustHelperDetail", paramMap);
	}

	@Override
	public int updateOprUnitCustHelperCaddrRegNo(Map<String, Object> paramMap) throws Exception {
		return sqlSession.update("com.ssp.bo.cc.cust.helper.updateOprUnitCustHelperCaddrRegNo", paramMap);
	}

	@Override
	public int updtaeOprUnitZendeskGrpId(Map<String, Object> paramMap) throws Exception {
		return sqlSession.update("com.ssp.bo.cc.cust.helper.updtaeOprUnitZendeskGrpId", paramMap);
	}

	@Override
	public int selectOprUnitChk(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectOne("com.ssp.bo.cc.cust.helper.selectOprUnitChk", paramMap);
	}

	@Override
	public int insertOprUnitCustHelperInfo(Map<String, Object> paramMap) throws Exception {
		return sqlSession.insert("com.ssp.bo.cc.cust.helper.insertOprUnitCustHelperInfo", paramMap);
	}

	@Override
	public int insertOprUnitZendeskInfo(Map<String, Object> paramMap) throws Exception {
		return sqlSession.insert("com.ssp.bo.cc.cust.helper.insertOprUnitZendeskInfo", paramMap);
	}

	@Override
	public int deleteOprUnitCustHelperCaddrRegNo(Map<String, Object> paramMap) throws Exception {
		return sqlSession.update("com.ssp.bo.cc.cust.helper.deleteOprUnitCustHelperCaddrRegNo", paramMap);
	}

	@Override
	public int deleteOprUnitZendeskGrpId(Map<String, Object> paramMap) throws Exception {
		return sqlSession.update("com.ssp.bo.cc.cust.helper.deleteOprUnitZendeskGrpId", paramMap);
	}


}
