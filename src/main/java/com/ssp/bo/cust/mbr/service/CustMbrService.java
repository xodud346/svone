package com.ssp.bo.cust.mbr.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.NexacroException;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.cc.CCUtils;
import com.ssp.core.legacy.mall.model.Admin;

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
public interface CustMbrService {
	public NexacroResult selectCodeList();
	public NexacroResult selectMbrList( Map<String,Object> searchMap );
	
	public Map<String, Object> updateMbrUseCdList(List<Map<String,String>> updateInfoList, CCUtils ccUtils) throws NexacroException;
	
	// 휴먼회원관리 목록 조회
	List<Map<String, Object>> selectDrmcMbrList(Map<String,Object> searchInfo, CCUtils ccUtils) throws Exception;

	// 휴먼회원관리 상세 조회
	NexacroResult selectDrmcMbrDeatil(Map<String,Object> searchInfo) throws Exception;
	
	// 휴먼회원관리 상세 수정
	NexacroResult saveDrmcMbrDeatil(List<Map<String,Object>> saveListMap) throws Exception;
		
	// 휴먼회원관리 결재자관리 조회
	NexacroResult selectDrmcMbrAprvl(Map<String,Object> searchInfo) throws Exception;
	
	// 탈퇴회원관리 목록
	List<Map<String,Object>> selectLevMbrList(Map<String,Object> searchInfo, CCUtils ccUtils) throws Exception;

	// 탈퇴회원관리 상세
	List<Map<String,Object>> selectLevMbrDeatail(Map<String,Object> searchInfo) throws Exception;
	

	//회원생성 코드 조회
	List selectMbrRegCodeList();
	
	//회원생성 고객유형 조회
	Map selectMbrRegCustSprCd(Map<String, Object> searchMap)  throws Exception ;
	
	//회원생성 저장
	Map<String,Object> insertMbrRegDtl(Map<String, Object> map, List<Map<String, Object>> aprvlList, List<Map<String, Object>> orderList, CCUtils cCUtils) throws Exception;

	//회원생성 고객유형 조회
	Map selectMbrRegDupCheck(Map<String, Object> searchMap)  throws Exception ;
	
	//회원생성 상세정보 조회
	Map selectMbrRegDtl(Map<String, Object> searchMap)  throws Exception ;
	
	//회원생성 상세정보 수정
	Map<String, Object> updateMbrRegDtl(Map<String, Object> map, List<Map<String, Object>> aprvlList, List<Map<String, Object>> orderList, CCUtils cCUtils, List<Map<String, Object>> otherInfo) throws Exception;

	//회원생성 결제자, 발주자 조회
	List<Map<String,Object>> selectMbrRegAprvl(Map<String, Object> searchMap) throws Exception;

	//회원탈퇴
	Map<String, Object> updateStopMbrStatus(List<Map<String, Object>> list, CCUtils cCUtils) throws Exception;

	//회원정보 복사
	Map<String,Object> copyMbrInfo(Map<String, Object> map, List<Map<String, Object>> aprvlList, List<Map<String, Object>> orderList, CCUtils cCUtils) throws Exception;

	//MRO 회원목록 조회
	List<Map<String,Object>> selectMroMbrList(Map<String, Object> searchMap) throws Exception;

	void selectAllExcelDownload(Map<String, Object> searchMap, CCUtils ccUtils) throws Exception;

	//회원 pw 초기화
	String updatePwd(Map<String, Object> dtlMap, CCUtils cCUtils) throws Exception;
	
	//회원/부서 기타정보 조회
	List<Map<String,Object>> selectMbrOtherInfo(Map<String, Object> searchMap) throws Exception;
	
	 // 부서 사용 상태 조회
	Map<String, Object> selectDeptInfo(Map<String, Object> map) throws Exception;
	

}
