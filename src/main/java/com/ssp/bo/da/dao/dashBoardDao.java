 package com.ssp.bo.da.dao;

import java.util.List;
import java.util.Map;

public interface dashBoardDao {
	

	/**
	 * SSP / R&D 조직 체크 ( 공통코드 이용 )
	 * @param map
	 * @return
	 * @throws Exception
	 */
	Map<String, Object> selectOprType(Map<String, Object> map) throws Exception;
	
	/**
	 * SSP / R&D 하위 조직의 팀 리더인지 체크 ( 공통코드 이용 )
	 * @param map
	 * @return
	 * @throws Exception
	 */
	String selectChildTeamReader(Map<String, Object> map) throws Exception;
	
	/**
	 * 팀 멤버 가져오기
	 * @param map
	 * @return
	 * @throws Exception
	 */
	List<Map<String, Object>> selectTeamMember(Map<String, Object> map) throws Exception;
	
	/** 메뉴리스트 */
	List<Map<String, Object>> selectMenuList(Map<String, Object> map) throws Exception;
	
	/** 상품관리 - 전시상품관리 - 견적요청관리 */
	List<Map<String, Object>> selectBoardEstimateCntLst(Map<String, Object> map) throws Exception;
	
	/** 상품관리 - 상품등록 - 신규상품요청처리
	 * 추가정보요청등록              : 27
	 */
	List<Map<String, Object>> selectBoardNewProductCntLst(Map<String, Object> map) throws Exception;
	
	/** 상품관리 - 상품등록 - 상품추가 */
	List<Map<String, Object>> selectBoardProductCntList(Map<String, Object> map) throws Exception;
	
	/** 가격/진열관리 - 가격/진열관리 - 공용상품가격관리 */
	List<Map<String, Object>> selectPubCntList(Map<String, Object> map) throws Exception;
	
	/** 고객관리 - 고객조회/변경 - 일반고객 종결대상 사업장 */
	List<Map<String, Object>> selectCustTrmnTgEndtBzplc(Map<String, Object> map) throws Exception;
	
	/** 정산관리 - 고객사 입고처리 */
	List<Map<String, Object>> selectWarehousingList(Map<String, Object> map) throws Exception;
	
	/** 주문관리 - 주문조회/변경 - 주문조회  */
	List<Map<String, Object>> selectOrderOprCntList(Map<String, Object> map) throws Exception;
	
	/** 전용상품처리대기 */
	List<Map<String, Object>> selectPcPubPrdProcStbCntList(Map<String, Object> map) throws Exception;
	
	/** R&D상품관리 - R&D상품등록 - 신규상품등록요청목록  */
	List<Map<String, Object>> selectNewPrdReqCntList(Map<String, Object> map) throws Exception;
	
	/** R&D상품관리 - R&D상품등록 - 신규상품일괄등록요청목록 */
	List<Map<String, Object>> selectNewPrdMltReqList(Map<String, Object> map) throws Exception;
	
	/** R&D상품관리 - R&D등록상품관리 - 견적요청목록 */
	List<Map<String, Object>> selectCprtcpEstmReqMngNotCntList(Map<String, Object> map) throws Exception;

	/**   R&D상품관리 - R&D전시상품관리  - 전시상품견적요청목록*/
	List<Map<String, Object>> selectProductEstimateList(Map<String, Object> map) throws Exception;
	
	/**  R&D가격관리 - 처리대기목록  - 전용상품처리대기*/
	List<Map<String, Object>> selectOnlyPrdProcStbList(Map<String, Object> map) throws Exception;
	
	/**  R&D가격관리 - 처리대기목록  - 공용상품처리대기*/
	List<Map<String, Object>> selectPubPrdProcStbList(Map<String, Object> map) throws Exception;
	
	/** 구매정보 일괄변경관리 */
	List<Map<String, Object>> selectPurgInfoPkgChgCntList(Map<String, Object> map) throws Exception;
	
	/**
	 * CMS 오류정비
	 */
	List<Map<String, Object>> selectCmsErrRepairCntList(Map<String, Object> map) throws Exception;
	
	
	
	
	
	
	
	
	
    /**
     * 고객사 입고처리 
     */
    List<Map<String, Object>> selectNewPrdMlt2233ReqList(Map<String, Object> map) throws Exception;
	
	
	
	

	
	
	
	/**
	 * 전시상품견적요청목록
	 */
	List<Map<String, Object>> selectProductEstimate1020List(Map<String, Object> map) throws Exception;
	/**
	 * 처리대기목록
	 */
	List<Map<String, Object>> selectPubPrdProcStb10List(Map<String, Object> map) throws Exception;
	List<Map<String, Object>> selectOnlyPrdProcStb10List(Map<String, Object> map) throws Exception;
	
	/** 구매정보현황 */
	List<Map<String, Object>> selectRndPrdCprtcpCntList(Map<String, Object> map) throws Exception;
	
	/** 신규상품등록현황  작성 */
	List<Map<String, Object>> selectNewItemList(Map<String, Object> map) throws Exception;
	
	List<Map<String, Object>> selectNewItemListBatch(Map<String, Object> map) throws Exception;
	List<Map<String, Object>> selectRndPrdCprtcpCntListBatch(Map<String, Object> map) throws Exception;

}
