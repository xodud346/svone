package com.ssp.bo.cust.mbr.dao.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.ssp.bo.cc.CCUtils;
import com.ssp.bo.cust.mbr.dao.CustMbrDao;

/**
 * <pre>
 * @title   
 * @desc    회원관리를 위한 클래스 입니다.
 * -        CustMbrDaoImpl Class
 * @package com.ssp.bo.cust.mbr.service.impl
 * <pre>
 * @author  신경민
 * @since   2022. 02. 10
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜				변경자		내용
 * ------------------------------------------------
 * 2022. 02. 10.	신경민		최초작성
 * 2022. 02. 22.	문주환		휴먼회원관리 목록 추가
 * 2022. 02. 24.	문주환		휴먼회원관리 상세/수정 추가
 * 2022. 02. 25.	문주환		탈퇴회원관리 목록, 상세 추가
 */
@Repository
public class CustMbrDaoImpl implements CustMbrDao {
	
	@Autowired
	private SqlSession sqlSession;
	
	@Override
	@SuppressWarnings({ "rawtypes" })
	public List selectCodeList() {
		return sqlSession.selectList("com.ssp.bo.Cust.selectCodeList",null);
	}

	@Override
	@SuppressWarnings({ "rawtypes" })
	public List selectMbrList(Map<String, Object> searchMapAll) {
		CCUtils.prefixCoCd(searchMapAll);
		return sqlSession.selectList("com.ssp.bo.Cust.selectMbrList",searchMapAll);
	}
	@Override
	@SuppressWarnings("unchecked")
	public String selectMbrOne(Map<String,Object> one) throws Exception{
		return sqlSession.selectOne("com.ssp.bo.Cust.selectMbrOne", one);
	}
	
	@Override
	public Map<String,String> selectMbrDeptUseYn(Map<String,String> one) throws Exception{
		return sqlSession.selectOne("com.ssp.bo.Cust.selectMbrDeptUseYn", one);
	}
		
	@Override
	@Transactional
	public int updateMbrUseCd(Map<String, String> updateInfo) throws Exception{
		return sqlSession.update("com.ssp.bo.Cust.updateMbrUseCd",updateInfo);
	}
	
	
	
	@Override
	public int selectMbrListCnt(Map<String, Object> searchMapAll) {
		return sqlSession.selectOne("com.ssp.bo.Cust.selectMbrListCnt",searchMapAll);
	}
	
	/**
     * 휴먼회원관리 목록 조회
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectDrmcMbrList(Map<String, Object> searchMap) {
        return sqlSession.selectList("com.ssp.bo.Cust.selectDrmcMbrList", searchMap);
    }
    
    /**
     * 휴먼회원관리 목록 조회 카운트
     * @param searchMap Map
     * @return int
     */
    @Override
	public int selectDrmcMbrListCount(Map<String, Object> searchMap) throws Exception {
    	return sqlSession.selectOne("com.ssp.bo.Cust.selectDrmcMbrListCount", searchMap);
	}

    /**
     * 휴먼회원관리 상세 조회
     * @param searchMap Map
     * @return int
     */
	@Override
	public List<Map<String, Object>> selectDrmcMbrDeatil(Map<String, Object> searchMap) {
    	return sqlSession.selectList("com.ssp.bo.Cust.selectDrmcMbrDeatil", searchMap);
	}
	
	/**
     * 해당 회원이 휴면상태인지 확인
     * @param 
     * @return List
     */
	@Override
	public int selectChkDrmcMbr(Map<String, Object> saveMap) throws Exception {
		return sqlSession.selectOne("com.ssp.bo.Cust.selectChkDrmcMbr", saveMap);
	}

	/**
     * 휴먼회원관리 상세 수정
     * @param searchMap Map
     * @return int
     */
	@Override
	public int saveDrmcMbrDeatil(Map<String, Object> saveMap) throws Exception {
    	return sqlSession.update("com.ssp.bo.Cust.saveDrmcMbrDeatil", saveMap);
	}
	
	/**
     * 휴먼회원관리 상세 수정 이력
     * @param searchMap Map
     * @return int
     */
	@Override
	public void insertMbrHumHst(Map<String, Object> saveMap) throws Exception {
		sqlSession.insert("com.ssp.bo.Cust.insertMbrHumHst", saveMap);
	}

	/**
     * 휴먼회원관리 결재자관리 조회
     * @param searchMap Map
     * @return int
     */
	@Override
	public List<Map<String, Object>> selectDrmcMbrAprvl(Map<String, Object> searchMap) {
        return sqlSession.selectList("com.ssp.bo.Cust.selectDrmcMbrAprvl", searchMap);
	}

	/**
     * 탈퇴회원관리 목록
     * @param searchMap Map
     * @return List
     */
	@Override
	public List<Map<String, Object>> selectLevMbrList(Map<String, Object> searchMap) {
        return sqlSession.selectList("com.ssp.bo.Cust.selectLevMbrList", searchMap);
	}
	
	/**
     * 탈퇴회원관리 상세
     * @param searchMap Map
     * @return List
     */
	@Override
	public List<Map<String, Object>> selectLevMbrDeatail(Map<String, Object> searchMap) {
        return sqlSession.selectList("com.ssp.bo.Cust.selectLevMbrDeatail", searchMap);
	}
	


	/**
     * 회원생성 코드 조회
     * @param 
     * @return List
     */
	@Override	
	public List selectMbrRegCodeList() {
		return sqlSession.selectList("com.ssp.bo.Cust.selectMbrRegCodeList",null);
	}

	/**
     * 회원생성 고객유형 조회
     * @param searchMap Map
     * @return Map
     */
	@Override	
	public Map selectMbrRegCustSprCd(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectOne("com.ssp.bo.Cust.selectMbrRegCustSprCd",searchMap);
	}
	/**
	 * 부서 사용 상태 조회
	 * @param map
	 * @return map
	 * 
	 */
	@Override
	public Map selectDeptInfo(Map<String, Object> map)throws Exception{
		return sqlSession.selectOne("com.ssp.bo.Cust.selectDeptInfo",map);
	}
	/**
     * 회원생성 로그인ID 저장
     * @param map
     * @return 
     */	
	@Override
	public void insertMbrRegLognId(Map<String, Object> map) throws Exception {
    	sqlSession.insert("com.ssp.bo.Cust.insertMbrRegLognId", map);
	}

	/**
     * 회원생성 정보 저장
     * @param map
     * @return 
     */	
	@Override
	public void insertMbrRegDtl(Map<String, Object> map) throws Exception {
    	sqlSession.insert("com.ssp.bo.Cust.insertMbrRegDtl", map);
	}

	/**
     * 회원생성 이력 정보 저장
     * @param map
     * @return 
     */	
	@Override
	public void insertMbrRegDtlHst(Map<String, Object> map) throws Exception {
    	sqlSession.insert("com.ssp.bo.Cust.insertMbrRegDtlHst", map);
	}

	/**
     * 회원생성 제어권한 저장
     * @param map
     * @return 
     */
	@Override
	public void insertMbrRegCtlAuth(Map<String, Object> map) throws Exception {
    	sqlSession.insert("com.ssp.bo.Cust.insertMbrRegCtlAuth", map);
	}

	/**
     * 회원생성 제어권한(예산,정산,관리) 삭제
     * @param map
     * @return 
     */
	@Override
	public void deleteMbrRegCtlAuthMapp(Map<String, Object> map) throws Exception {
    	sqlSession.delete("com.ssp.bo.Cust.deleteMbrRegCtlAuthMapp", map);
	}

	/**
     * 회원생성 제어권한(예산,정산,관리) 저장
     * @param map
     * @return 
     */
	@Override
	public void insertMbrRegCtlAuthMapp(Map<String, Object> map) throws Exception {
    	sqlSession.insert("com.ssp.bo.Cust.insertMbrRegCtlAuthMapp", map);
	}

	/**
     * 회원생성 결제자, 발주자 삭제
     * @param map
     * @return 
     */
	@Override
	public void deleteMbrRegAprvl(Map<String, Object> map) throws Exception {
    	sqlSession.insert("com.ssp.bo.Cust.deleteMbrRegAprvl", map);
	}

	/**
     * 회원생성 결제자, 발주자 저장
     * @param map
     * @return 
     */
	@Override
	public void insertMbrRegAprvl(Map<String, Object> map) throws Exception {
    	sqlSession.insert("com.ssp.bo.Cust.insertMbrRegAprvl", map);
	}

	/**
     * 회원생성 배송지 저장
     * @param map
     * @return 
     */
	@Override
	public void insertMbrRegDlvplc(Map<String, Object> map) throws Exception {
    	sqlSession.insert("com.ssp.bo.Cust.insertMbrRegDlvplc", map);
	}

	/**
     * MRO회원 id 삭제
     * @param map
     * @return 
     */
	@Override
	public void deleteMroMbr(Map<String, Object> map) throws Exception {
    	sqlSession.delete("com.ssp.bo.Cust.deleteMroMbr", map);
	}

	/**
     * MRO회원 id 등록
     * @param map
     * @return 
     */
	@Override
	public void insertMroMbr(Map<String, Object> map) throws Exception {
    	sqlSession.update("com.ssp.bo.Cust.insertMroMbr", map);
	}

	/**
     * 회원배송지 존재 여부 체크
     * @param searchMap Map
     * @return String
     */
	@Override	
	public String selectExistMbrDlvplcBasis(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectOne("com.ssp.bo.Cust.selectExistMbrDlvplcBasis",searchMap);
	}

	/**
     * 회원생성 아이디 중복 체크
     * @param searchMap Map
     * @return int
     */
	@Override	
	public Map selectMbrRegDupCheck(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectOne("com.ssp.bo.Cust.selectMbrRegDupCheck",searchMap);
	}


	/**
     * 회원생성 상세정보 조회
     * @param searchMap Map
     * @return Map
     */
	@Override	
	public Map selectMbrRegDtl(Map<String, Object> searchMap) throws Exception {
		return sqlSession.selectOne("com.ssp.bo.Cust.selectMbrRegDtl",searchMap);
	}
	/**
     * 회원 정보 조회
     * @return Map
     */
	@Override	
	public Map selectMbrinfo(Map<String, Object> map) throws Exception {
		return sqlSession.selectOne("com.ssp.bo.Cust.selectMbrinfo",map);
	}
	// [2022.07.18] 박성근 Core로 구현이동 예정
	///**
    // * MRO 회원 조회
    // * @param 
    // * @return List
    // */
	//@Override	
	//public Map selectMroMbrDtl(Map<String, Object> searchMap) throws Exception {
	//	return sqlSession.selectOne("com.ssp.bo.Cust.selectMroMbrDtl", searchMap);
	//}
	// [2022.07.18] 박성근 Core로 구현이동 예정
	
	
	/**
     * 회원 로그인 ID 수정
     * @param map
     * @return 
     */	
	@Override
	public void updateMbrRegLognId(Map<String, Object> map) throws Exception {
    	sqlSession.insert("com.ssp.bo.Cust.updateMbrRegLognId", map);
	}

	/**
     * 회원생성 상세정보 수정
     * @param map
     * @return 
     */	
	@Override
	public void updateMbrRegDtl(Map<String, Object> map) throws Exception {
    	sqlSession.insert("com.ssp.bo.Cust.updateMbrRegDtl", map);
	}

	/**
     * 회원생성 제어권한(예산,정산,관리) 조회
     * @param 
     * @return List
     */
	@Override	
	public List selectMbrRegCtlAuthMapp(Map<String, Object> searchMap) {
		return sqlSession.selectList("com.ssp.bo.Cust.selectMbrRegCtlAuthMapp", searchMap);
	}

	/**
     * 회원생성 결제자, 발주자 조회
     * @param 
     * @return List
     */
	@Override	
	public List selectMbrRegAprvl(Map<String, Object> searchMap) {
		return sqlSession.selectList("com.ssp.bo.Cust.selectMbrRegAprvl", searchMap);
	}
	
	/**
     * 회원탈퇴
     * @param map
     * @return 
     */	
	@Override
	public void updateStopMbrStatus(Map<String, Object> map) throws Exception {
    	sqlSession.insert("com.ssp.bo.Cust.updateStopMbrStatus", map);
	}

	/**
     * 복사된 회원정보 등록
     * @param map
     * @return 
     */	
	@Override
	public void insertMbrRegDtlFull(Map<String, Object> map) throws Exception {
    	sqlSession.insert("com.ssp.bo.Cust.insertMbrRegDtlFull", map);
	}

	/**
     * MRO 회원목록 조회
     * @param 
     * @return List
     */
	@Override	
	public List selectMroMbrList(Map<String, Object> searchMap) {
		return sqlSession.selectList("com.ssp.bo.Cust.selectMroMbrList", searchMap);
	}
	/**
     * 회원pw 수정 이력 정보 저장
     * @param map
     * @return 
     */	
	@Override
	public void insertMbrChangePwdHst(Map<String, Object> map) throws Exception {
    	sqlSession.insert("com.ssp.bo.Cust.insertMbrChangePwdHst", map);
	}
	
	/**
     * 회원/부서 기타정보 조회
     * @param 
     * @return List
     */
	@Override
	public List selectMbrOtherInfo(Map<String, Object> searchMap) {
		return sqlSession.selectList("com.ssp.bo.Cust.selectMbrOtherInfo", searchMap);
	}
}