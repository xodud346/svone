package com.ssp.bo.da.dao.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.ssp.bo.da.dao.dashBoardDao;
import com.ssp.core.co.dao.CommonDAO;


@SuppressWarnings("unchecked")
@Repository("dashBoardDao")
public class dashBoardDaoImpl implements dashBoardDao{
	@Resource(name="commonDAO")
	private CommonDAO commonDAO;
	
	/** SSP / R&D 조직 체크 */
	@Override
	public Map<String, Object> selectOprType(Map<String, Object> map) throws Exception{
		return commonDAO.select("daDashBoard.selectOprType", map);
	}
	
	/** SSP / R&D 하위 조직의 팀 리더인지 체크 ( 공통코드 이용 ) */
	@Override
	public String selectChildTeamReader(Map<String, Object> map) throws Exception{
		return commonDAO.selectStr("daDashBoard.selectChildTeamReader", map);
	}
	
	/** 팀 멤버 가져오기 */
	@Override
	public List<Map<String, Object>> selectTeamMember(Map<String, Object> map) throws Exception{
		return commonDAO.selectList("daDashBoard.selectTeamMember", map);
	}
	
	/** 메뉴리스트 */
	@Override
	public List<Map<String, Object>> selectMenuList(Map<String, Object> map) throws Exception {
		return commonDAO.selectList("daDashBoard.selectMenuList", map);
	}
	
	/**
	 * 상품관리 - 전시상품관리 - 견적요청관리
	 * 요청         (ESTM_REQ_PROC_STATS_CD) : 10
	 * 상품등록요청 (ESTM_REQ_PROC_STATS_CD) : 50
	 */
	@Override
	public List<Map<String, Object>> selectBoardEstimateCntLst(Map<String, Object> map) throws Exception {
		return commonDAO.selectList("daDashBoard.selectBoardEstimateCntLst", map);
	}
	
	/**
	 * 상품관리 - 상품등록 - 신규상품요청처리
	 * 요청                          (NEW_PRD_REQ_STATS_CD) : 22
	 * 접수                          (NEW_PRD_REQ_STATS_CD) : 25
	 * 처리대기                      (NEW_PRD_REQ_STATS_CD) : 32
	 * 신규상품요청처리(R&D이관반려) (NEW_PRD_REQ_STATS_CD) : 35
	 * 추가정보요청등록              (NEW_PRD_REQ_STATS_CD) : 27
	 */
	@Override
	public List<Map<String, Object>> selectBoardNewProductCntLst(Map<String, Object> map) throws Exception {
		return commonDAO.selectList("daDashBoard.selectBoardNewProductCntLst", map);
	}

	/**
	 * 상품관리 - 상품등록 - 상품추가
	 * REQ    : 요청
	 * ACCEPT : 접수
	 */
	@Override
	public List<Map<String, Object>> selectBoardProductCntList(Map<String, Object> map) throws Exception {
		return commonDAO.selectList("daDashBoard.selectBoardProductCntList", map);
	}
	
	/** 
	 * 가격/진열관리 - 가격/진열관리 - 공용상품가격관리
	 * 일시품절         (TB_DP_PRD_DISP_STATS_INFO  . DISP_STATS_CD) : 30
	 * 공급불가상태     (TB_PC_CPRTCP_LWST_PRC_INFO . PCPRC_INC_YN ) : NULL
	 *                  (VW_IV_PRD_INVN_DTLS        . NVL(DECODE(INVN_TP_CD,'C','Y','N'),'N')  ) : N
	 * 판매유효기간만료 (PRD_ID IS NULL)
	 * 안전재고이하     (VW_IV_PRD_INVN_DTLS        . INVN_STATS_CD  : 2
	 * 매입가인상       (TB_PC_CPRTCP_LWST_PRC_INFO . PCPRC_INC_YN ) : Y
	 */
	@Override
	public List<Map<String, Object>> selectPubCntList(Map<String, Object> map) throws Exception{
		return commonDAO.selectList("daDashBoard.selectPubCntList", map);
	}
	
	/** 고객관리 - 고객조회/변경 - 일반고객 종결대상 사업장 */
	@Override
	public List<Map<String, Object>> selectCustTrmnTgEndtBzplc(Map<String, Object> map) throws Exception {
		return commonDAO.selectList("daDashBoard.selectCustTrmnTgEndtBzplc", map);
	}
	
	/** 정산관리 - 고객사입고처리 */
	@Override
	public List<Map<String, Object>> selectWarehousingList(Map<String, Object> map) throws Exception {
		return commonDAO.selectList("daDashBoard.selectWarehousingList", map);
	}
	
	/** 주주문관리 - 주문조회/변경 - 주문조회
	 * 결제신청       ( TB_OD_ODR_DTL . ODR_STATS_CD ) : A00
	 * 결재완료(단계) ( TB_OD_ODR_DTL . ODR_STATS_CD ) : A25
	 * 결제완료       ( TB_OD_ODR_DTL . ODR_STATS_CD ) : A31
	 * 결제완료       ( TB_OD_ODR_DTL . ODR_STATS_CD ) : B12
	 */
	@Override
	public List<Map<String, Object>> selectOrderOprCntList(Map<String, Object> map) throws Exception {
		return commonDAO.selectList("daDashBoard.selectOrderOprList", map);
	}
	
	/** 가격/진열관리 - 신규상품가격처리 - 전용상품처리대기 */
	@Override
	public List<Map<String, Object>> selectPcPubPrdProcStbCntList(Map<String, Object> map) throws Exception {
		return commonDAO.selectList("daDashBoard.selectPcPubPrdProcStbCntList", map);
	}
	
	/** R&D상품관리 - R&D상품등록 - 신규상품등록요청목록  */
	@Override
	public List<Map<String, Object>> selectNewPrdReqCntList(Map<String, Object> map) throws Exception {
		return commonDAO.selectList("daDashBoard.selectNewPrdReqCntList", map);
	}
	
	/** R&D상품관리 - R&D상품등록 - 신규상품일괄등록요청목록*/
	@Override
	public List<Map<String, Object>> selectNewPrdMltReqList(Map<String, Object> map) throws Exception {
		return commonDAO.selectList("daDashBoard.selectNewPrdMltReqList", map);
	}
	
	/** R&D상품관리 - R&D등록상품관리 - 견적요청목록 */
	@Override
	public List<Map<String, Object>> selectCprtcpEstmReqMngNotCntList(Map<String, Object> map) throws Exception {
		return commonDAO.selectList("daDashBoard.selectCprtcpEstmReqMngNotCntList", map);
	}
	
	/** R&D상품관리 - R&D전시상품관리  - 전시상품견적요청목록 */
	@Override
	public List<Map<String, Object>> selectProductEstimateList(Map<String, Object> map) throws Exception {
		return commonDAO.selectList("daDashBoard.selectProductEstimateList", map);
	}
	
	/** R&D가격관리 - 처리대기목록  - 전용상품처리대기 */
	@Override
	public List<Map<String, Object>> selectOnlyPrdProcStbList(Map<String, Object> map) throws Exception {
		return commonDAO.selectList("daDashBoard.selectOnlyPrdProcStbList", map);
	}
	
	/** R&D가격관리 - 처리대기목록  - 공용상품처리대기 */
	@Override
	public List<Map<String, Object>> selectPubPrdProcStbList(Map<String, Object> map) throws Exception {
		return commonDAO.selectList("daDashBoard.selectPubPrdProcStbList", map);
	}
	
	/**
	 * 구매정보 일괄변경 관리 
	 */
	@Override
	public List<Map<String, Object>> selectPurgInfoPkgChgCntList(Map<String, Object> map) throws Exception {
		return commonDAO.selectList("daDashBoard.selectPurgInfoPkgChgCntList", map);
	}
	
	/**
	 * CMS 오류정비 
	 */
	@Override
	public List<Map<String, Object>> selectCmsErrRepairCntList(Map<String, Object> map) throws Exception {
		return commonDAO.selectList("daDashBoard.selectCmsErrRepairCntList", map);
	}
	/**
	 * 전시상품견적요청목록
	 */
	@Override
	public List<Map<String, Object>> selectProductEstimate1020List(Map<String, Object> map) throws Exception {
		return commonDAO.selectList("daDashBoard.selectProductEstimate1020List", map);
	}
	/**
	 * 처리대기목록
	 */
	@Override
	public List<Map<String, Object>> selectPubPrdProcStb10List(Map<String, Object> map) throws Exception {
		return commonDAO.selectList("daDashBoard.selectPubPrdProcStb10List", map);
	}
	@Override
	public List<Map<String, Object>> selectOnlyPrdProcStb10List(Map<String, Object> map) throws Exception {
		return commonDAO.selectList("daDashBoard.selectOnlyPrdProcStb10List", map);
	}

	@Override
	public List<Map<String, Object>> selectNewPrdMlt2233ReqList(Map<String, Object> map) throws Exception {
		return commonDAO.selectList("daDashBoard.selectNewPrdMlt2233ReqList", map);
	}
	
	
	/** 구매정보현황 */
	public List<Map<String, Object>> selectRndPrdCprtcpCntList(Map<String, Object> map) throws Exception{
		return commonDAO.selectList("daDashBoard.selectRndPrdCprtcpCntList", map);
	}
	/** 신규상품등록현황   작성
	 */
	@Override
	public List<Map<String, Object>> selectNewItemList(Map<String, Object> map) throws Exception{
		return commonDAO.selectList("daDashBoard.selectNewItemList", map);
	}
	
	
	
	@Override
	public List<Map<String, Object>> selectNewItemListBatch(Map<String, Object> map) throws Exception{
		return commonDAO.selectList("daDashBoard.selectNewItemListBatch", map);
	}
	
	@Override
	public List<Map<String, Object>> selectRndPrdCprtcpCntListBatch(Map<String, Object> map) throws Exception{
		return commonDAO.selectList("daDashBoard.selectRndPrdCprtcpCntListBatch", map);
	}
	
	
	
}
