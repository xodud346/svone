package com.ssp.bo.cc.dao.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ssp.bo.cc.dao.CustDvlplcDao;


/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.core.cc.dao.impl
 * <pre>    DvplcMngDaoImpl
 * @author 
 * @since 2022.02.09
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.01.26		최초작성
 */
@SuppressWarnings("unchecked")
@Repository("custDvlplcDao")
public class CustDvlplcDaoImpl implements CustDvlplcDao {

    @Autowired
    private SqlSession sqlSession;

    /**
     * 배송지 등록
     * @param saveMap Map
     * @return int
     * @throws Exception sqlException
     */
	@Override
	public int insertDvplcInfo(Map<String, Object> saveMap) throws Exception {
		return sqlSession.insert("Dvplc.insertDvplcInfo", saveMap);
	}

	/**
     * 기본배송지 등록시 기존 기본배송지를 추가배송지로 변경
     * @param saveMap Map
     * @return int
     * @throws Exception sqlException
     */
	@Override
	public int updateDlvPlcN(Map<String, Object> paramMap) throws Exception {
		return sqlSession.update("Dvplc.updateDlvPlcN", paramMap);
	}

	/**
     * 배송지 등록
     * @param saveMap Map
     * @return int
     * @throws Exception sqlException
     */
	@Override
	public Map<String, Object> selectDlvplcInfo(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectOne("Dvplc.selectDlvplcInfo", paramMap);
	}

	/**
     * 배송지정보 삭제처리(사용여부 N으로 수정)
     * @param saveMap Map
     * @return int
     * @throws Exception sqlException
     */
	@Override
	public int deleteDlvPlcUseYn(Map<String, Object> paramMap) throws Exception {
		return sqlSession.update("Dvplc.deleteDlvPlcUseYn", paramMap);
	}

	/**
     * 기본배송지여부 조회
     * @param saveMap Map
     * @return int
     * @throws Exception sqlException
     */
	@Override
	public int selectBasisDlvplcCount(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectOne("Dvplc.selectBasisDlvplcCount", paramMap);
	}

	/**
     * 회원 기본배송지 존재여부 조회
     * @param saveMap Map
     * @return int
     * @throws Exception sqlException
     */
	@Override
	public int selectMbrBasisDlvplcCount(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectOne("Dvplc.selectMbrBasisDlvplcCount", paramMap);
	}

	/**
     * 배송지 리스트 조회
     * @param saveMap Map
     * @return int
     * @throws Exception sqlException
     */
	@Override
	public List<Map<String, Object>> selectDlvplcList(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectList("Dvplc.selectDlvplcList", searchMap);
	}
	
	/**
     * 배송지 리스트 조회 카운트 (페이징용)
     * @param saveMap Map
     * @return int
     * @throws Exception sqlException
     */
	@Override
	public int selectDlvplcListCount(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectOne("Dvplc.selectDlvplcListCountOrd", searchMap);
	}

	/**
     * 회원 기본정보 조회
     * @param paramMap Map
     * @return Map<String, Object>
     * @throws Exception sqlException
     */
	@Override
	public Map<String, Object> selectMbrBasicInfo(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectOne("Dvplc.selectMbrBasicInfo", paramMap);
	}

	/**
     * 회원 기본정보 리스트 조회
     * @param searchMap Map
     * @return List<Map<String, Object>> 
     * @throws Exception sqlException
     */
	@Override
	public List<Map<String, Object>> selectMbrBasicList(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectList("Dvplc.selectMbrBasicList", searchMap);
	}

	/**
     * 회원 기본정보 리스트 카운트 조회 (페이징용)
     * @param searchMap Map
     * @return int
     * @throws Exception sqlException
     */
	@Override
	public int selectMbrBasicListCnt(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectOne("Dvplc.selectMbrBasicListCnt", searchMap);
	}

	/**
     * 배송지정보 다중삭제
     * @param searchMap Map
     * @return int
     * @throws Exception sqlException
     */
	@Override
	public int deleteDlvplcInfo(Map<String, Object> paramMap) throws Exception {
		return sqlSession.update("Dvplc.deleteDlvplcInfo", paramMap);
	}

	/**
     * 다중 기본배송지여부 조회
     * @param searchMap Map
     * @return int
     * @throws Exception sqlException
     */
	@Override
	public int selectBasisDlvplcListCount(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectOne("Dvplc.selectBasisDlvplcListCount", paramMap);
	}

	@Override
	public List<Map<String, Object>> selectDlvplcListNew(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectList("Dvplc.selectDlvplcListNew", searchMap);
	}

	@Override
	public int selectDlvplcListNewCnt(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectOne("Dvplc.selectDlvplcListNewCnt", searchMap);
	}

	/**
	 * 기본배송지로 변경
	 */
	@Override
	public int updateDlvPlcY(Map<String, Object> paramMap) throws Exception {
		return sqlSession.update("Dvplc.updateDlvPlcY", paramMap);
	}

	@Override
	public List<Map<String, Object>> selectBeforeDlvplcBasisInfo(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectList("Dvplc.selectBeforeDlvplcBasisInfo", paramMap);
	}
	
	@Override
	public int selectDlvplcBasisCnt(Map<String, Object> paramMap) throws Exception {
		return sqlSession.selectOne("Dvplc.selectDlvplcBasisCnt", paramMap);
	}
}
