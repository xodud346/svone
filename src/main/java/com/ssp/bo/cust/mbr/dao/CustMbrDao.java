package com.ssp.bo.cust.mbr.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title   
 * @desc    회원관리를 위한 클래스 입니다.
 * -        CustMbrDao Class
 * @package com.ssp.bo.cust.mbr.service
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
public interface CustMbrDao {
	@SuppressWarnings("rawtypes")
	public List selectCodeList();
	
	@SuppressWarnings("rawtypes")
	public List selectMbrList(Map<String,Object> searchMapAll);
	public int selectMbrListCnt(Map<String,Object> searchMapAll);
	
	public String selectMbrOne(Map<String,Object> one)  throws Exception;
	
	public Map<String,String> selectMbrDeptUseYn(Map<String,String> one)  throws Exception;
	
	public int updateMbrUseCd(Map<String, String> updateInfo) throws Exception;
	
	// 휴먼회원관리 목록 조회
    List<Map<String, Object>> selectDrmcMbrList(Map<String, Object> searchMap);
 
    // 휴먼회원관리 목록 조회 카운트
  	int selectDrmcMbrListCount(Map<String, Object> searchMap) throws Exception;
  	
  	// 휴먼회원관리 상세 조회
    List<Map<String, Object>> selectDrmcMbrDeatil(Map<String, Object> searchMap);
    
    // 해당 회원이 휴면상태인지 확인
 	int selectChkDrmcMbr(Map<String, Object> saveMap) throws Exception;
    
    // 휴먼회원관리 상세 수정
    int saveDrmcMbrDeatil(Map<String, Object> saveMap) throws Exception;
    
    // 휴면 상세 수정시 이력저장
 	void insertMbrHumHst(Map<String, Object> saveMap) throws Exception;
    
    // 휴먼회원관리 결재자관리 조회
    List<Map<String, Object>> selectDrmcMbrAprvl(Map<String, Object> searchMap);
    
    // 탈퇴회원관리 목록
    List<Map<String, Object>> selectLevMbrList(Map<String, Object> searchMap);

    // 탈퇴회원관리 상세
    List<Map<String, Object>> selectLevMbrDeatail(Map<String, Object> searchMap);
    

    //회원생성 코드 조회
    List selectMbrRegCodeList();

    //회원생성 고객유형조회
    Map selectMbrRegCustSprCd(Map<String, Object> searchMap) throws Exception;
    
    //회원생성 로그인ID 저장
    void insertMbrRegLognId(Map<String, Object> map) throws Exception;

    //회원생성 저장
    void insertMbrRegDtl(Map<String, Object> map) throws Exception;

    //회원생성 저장
    void insertMbrRegDtlHst(Map<String, Object> map) throws Exception;

    //회원생성 제어권한 저장
    void insertMbrRegCtlAuth(Map<String, Object> map) throws Exception;

    //회원생성 제어권한(예산,정산,관리) 삭제
    void deleteMbrRegCtlAuthMapp(Map<String, Object> map) throws Exception;

    //회원생성 제어권한(예산,정산,관리) 저장
    void insertMbrRegCtlAuthMapp(Map<String, Object> map) throws Exception;

    //회원생성 결제자, 발주자 삭제
    void deleteMbrRegAprvl(Map<String, Object> map) throws Exception;

    //회원생성 결제자, 발주자 저장
    void insertMbrRegAprvl(Map<String, Object> map) throws Exception;

    //배송지 저장
    void insertMbrRegDlvplc(Map<String, Object> map) throws Exception;

    //MRO회원 id 삭제
    void deleteMroMbr(Map<String, Object> map) throws Exception;

    //MRO회원 id 등록
    void insertMroMbr(Map<String, Object> map) throws Exception;

    //회원배송지 존재 여부 체크
    String selectExistMbrDlvplcBasis(Map<String, Object> searchMap) throws Exception;

    //회원생성 아이디 중복 체크
    Map selectMbrRegDupCheck(Map<String, Object> searchMap) throws Exception;

    //회원생성 상세정보 조회
    Map selectMbrRegDtl(Map<String, Object> searchMap) throws Exception;

    // [2022.07.18] 박성근 Core로 구현이동 예정
    //MRO 회원 조회
    //Map selectMroMbrDtl(Map<String, Object> searchMap) throws Exception;
    // /[2022.07.18] 박성근 Core로 구현이동 예정
    
    //회원 로그인 ID 수정
    void updateMbrRegLognId(Map<String, Object> map) throws Exception;

    //회원생성 상세정보 수정
    void updateMbrRegDtl(Map<String, Object> map) throws Exception;

    //회원생성 제어권한(예산,정산,관리) 조회
    List<Map<String, Object>> selectMbrRegCtlAuthMapp(Map<String, Object> searchMap);

    //회원생성 결제자, 발주자 조회
    List<Map<String, Object>> selectMbrRegAprvl(Map<String, Object> searchMap);
    
    //회원탈퇴
    void updateStopMbrStatus(Map<String, Object> map) throws Exception;

    //복사된 회원정보 등록
    void insertMbrRegDtlFull(Map<String, Object> map) throws Exception;

    //MRO 회원목록 조회
    List<Map<String, Object>> selectMroMbrList(Map<String, Object> searchMap);


	// 회원 정보 조회
	Map selectMbrinfo(Map<String, Object> map) throws Exception;
	/**
	 * 회원pw 수정 이력 정보 저장
	 * @param map
	 * @return 
	 */
	void insertMbrChangePwdHst(Map<String, Object> map) throws Exception;
	
	//회원/부서 기타정보 조회
	List<Map<String,Object>> selectMbrOtherInfo(Map<String, Object> searchMap) throws Exception;


	//부서 사용 상태 조회
	Map selectDeptInfo(Map<String, Object> map) throws Exception;

}