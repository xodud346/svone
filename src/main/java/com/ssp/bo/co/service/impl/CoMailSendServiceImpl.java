package com.ssp.bo.co.service.impl;

import com.ssp.bo.co.service.CoMailSendService;
import com.ssp.bo.pc.dao.PcNewPrdReqPrcDao;
import com.ssp.bo.pr.service.PrProductNewService;
import com.ssp.bo.rd.dao.NewPrdMltReqLstDao;
import com.ssp.bo.rd.dao.NewPrdReqLstDao;
import com.ssp.core.co.service.CoCommonSendService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.property.SspPropertyService;
import com.ssp.core.util.StringUtil;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service("coMailSendService")
public class CoMailSendServiceImpl implements CoMailSendService {
	private Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	protected SspPropertyService sspPropertyService;

	@Resource(name = "coCommonSendService")
	private CoCommonSendService coCommonSendService;

	@Autowired
	private PrProductNewService prProductNewService;

	@Autowired
	private PcNewPrdReqPrcDao pcNewPrdReqPrcDao;

	@Autowired
	private NewPrdReqLstDao newPrdReqLstDao;
	
	@Autowired
	private NewPrdMltReqLstDao newPrdMltReqLstDao;

	/**
	 * 신규 상품 대체제안 등록 안내 메일 발송
	 *
	 * <PRE>
	 * - 업무영역 : 상품, R&D상품
	 * - EVENT ID : 20052
	 * - SSP_ID : 20052-01
	 * - 메일 명 : 신규상품대체제안
	 * - 수신자 : 고객
	 * - 발송 시점 : 신규상품 대체제안 등록
	 * </PRE>
	 *
	 * @param param
	 * @return
	 */
	@Override
	public int newProductAltMailSend(Map<String, Object> param) throws Exception {
		int insertCnt = 0;
		if (!isValidateCustMailRcvAgreYn(param)) {
			return insertCnt;
		}
		Map<String, Object> commandMap = new HashMap<>();
		List<Map<String, Object>> map = new ArrayList<>();
		Map<String, Object> tMap = new HashMap<>();
		Map<String, Object> tMap2 = new HashMap<>();

		// 정보조회
		Map<String, Object> prdInf = prProductNewService.selectNewProductReqDetail(param).get(0); // 요청상품정보
		Map<String, Object> salsChrpsnInfo = prProductNewService.selectSalsChrspnInfo(param); // 영업담당자정보 조회

		// 이메일 헤더정보
		commandMap.put("eventId", "20052"); // 이메일 템플릿 정보
		commandMap.put("subInfoYn", "Y"); // 이메일 디테일 유무
		commandMap.put("fromEmail", "mail@serveone.co.kr"); // 발신자 이메일
		commandMap.put("fromName", "서브원스토어"); // 발신자 이름
		commandMap.put("toEmail", prdInf.get("EMAIL_ADDR")); // 수신자 이메일
		commandMap.put("toName", prdInf.get("MBR_NM")); // 수신자 이름
		commandMap.put("title", "[" + prdInf.get("NEW_PRD_REQ_NO") + "]" + " 신규상품등록에 대하여 당사의 경쟁력있는 상품으로 제안드립니다.");
		commandMap.put("mapping1", sspPropertyService.getString("mail.resource.root")
				+ sspPropertyService.getString("mail.resource.logo"));
		commandMap.put("mapping2", "상품등록 안내"); // 치환값2
		commandMap.put("mapping3", prdInf.get("MBR_NM")); // 치환값3
		commandMap.put("mapping4", "마이페이지>신규상품처리현황"); // 치환값4
		commandMap.put("mapping5", salsChrpsnInfo.get("SALS_CHRPSN_NM1")); // 치환값5
		commandMap.put("mapping6", salsChrpsnInfo.get("EMAIL_ADDR")); // 치환값6
		commandMap.put("mapping7", ""); // 치환값7
		commandMap.put("mapping8", ""); // 치환값8
		commandMap.put("mapping9", ""); // 치환값9
		commandMap.put("mapping10", sspPropertyService.getString("mail.resource.root")); // 서브원스토어의 URL경로
		commandMap.put("sendTime", ""); // 예약전송일시
		commandMap.put("userId", prdInf.get("MBR_ID")); // 주문 회원자ID

		// 이메일 상세 01
		tMap.put("eventId", "20052"); // 이메일 템플릿 정보
		tMap.put("mstSeq", 1); // 마스터순번
		tMap.put("reptNo", 1); // 반복번호
		tMap.put("reptSeq", 1); // 반복순번
		tMap.put("transEtcFds1", prdInf.get("NEW_PRD_REQ_NO")); // 신규상품요청번호
		tMap.put("transEtcFds2", prdInf.get("REQ_PRD_NM")); // 상품명
		tMap.put("transEtcFds3", prdInf.get("MNFR_NM")); // 제조사명
		tMap.put("transEtcFds4", prdInf.get("REQ_PRVL")); // 요청규격

		map.add(CommonUtil.toCamelCaseMap(tMap));

		// 디테일정보_02
		String ssoServiceUrl = sspPropertyService.getString("mail.resource.root");
		tMap2.put("eventId", "20052"); // 이메일 템플릿 정보
		tMap2.put("mstSeq", 1); // 마스터순번
		tMap2.put("reptNo", 2); // 반복번호
		tMap2.put("reptSeq", 1); // 반복순번
		tMap2.put("transEtcFds1", prdInf.get("PRD_IMG")); // 상품의 이미지
		tMap2.put("transEtcFds2", prdInf.get("PRPS_PRD_ID")); // 상품ID
		tMap2.put("transEtcFds3", prdInf.get("PRPS_PRD_NM")); // 상품명
		tMap2.put("transEtcFds4", prdInf.get("MRO_PRD_PRVL")); // 대표규격
		tMap2.put("transEtcFds5", prdInf.get("PRPS_MNFR_NM") + "/" + prdInf.get("MAIL_ORGPLC_CTRY_NM"));
		// 제조원/원산지
		tMap2.put("transEtcFds6", prdInf.get("MAIL_HPE_SELL_UNIT_CD")); // 단위
		tMap2.put("transEtcFds7", prdInf.get("MAIL_HPE_SELL_UNIT_QTY")); // 최소구매수량

		tMap2.put("transEtcFds8", sspPropertyService.getString("mail.resource.root")
				+ "/pr/pr-product-detail.do?mailYn=Y&prdId=" + prdInf.get("PRPS_PRD_ID")); // 상품상세URL

		map.add(CommonUtil.toCamelCaseMap(tMap2));

		try {
			coCommonSendService.insertCoSendMail(commandMap, map);
			insertCnt++;
		} catch (Exception e) {
			this.logger.error("신규상품요청 대체상품 메일전송 오류");
			throw new Exception(e);
		}

		return insertCnt;
	}

	/**
	 * 상품 등록 불가 안내 메일 발송
	 *
	 * <PRE>
	 * - 업무영역 : 상품, R&D상품
	 * - EVENT ID : 20073
	 * - SSP_ID : 20073-01
	 * - 메일 명 : 신규상품등록예외종료
	 * - 수신자 : 고객
	 * - 발송 시점 : 신규상품 예외종료 시점
	 * </PRE>
	 *
	 * @param param
	 * @return
	 */
	@Override
	public int newProductRejectedMailSend(Map<String, Object> param) throws Exception {
		int insertCnt = 0;
		if (!isValidateCustMailRcvAgreYn(param)) {
			return insertCnt;
		}
		Map<String, Object> commandMap = new HashMap<>();
		List<Map<String, Object>> map = new ArrayList<>();
		Map<String, Object> tMap = new HashMap<>();
		Map<String, Object> tMap2 = new HashMap<>();

		// 영업담당자정보 조회
		Map<String, Object> prdInf = prProductNewService.selectNewProductReqDetail(param).get(0); // 요청상품정보
		Map<String, Object> salsChrpsnInfo = prProductNewService.selectSalsChrspnInfo(param);
		
		

		// 이메일 헤더정보
		commandMap.put("eventId", "20073"); // 이메일 템플릿 정보
		commandMap.put("subInfoYn", "Y"); // 이메일 디테일 유무
		commandMap.put("fromEmail", "mail@serveone.co.kr"); // 발신자 이메일
		commandMap.put("fromName", "서브원스토어 G-lab"); 			// 발신자 이름   
		commandMap.put("mapping1", sspPropertyService.getString("host.rnd")
				+ sspPropertyService.getString("mail.resource.rnd.logo"));
		commandMap.put("mapping10", sspPropertyService.getString("host.rnd")); 
		commandMap.put("toEmail", prdInf.get("EMAIL_ADDR")); // 수신자 이메일
		commandMap.put("toName", prdInf.get("MBR_NM")); // 수신자 이름
		commandMap.put("title", "[" + param.get("NEW_PRD_REQ_NO") + "]" + " 신규상품등록이 취소처리 되었습니다."); // 메일 제목
		commandMap.put("mapping2", "상품등록 취소 안내"); // 치환값2
		commandMap.put("mapping3", prdInf.get("MBR_NM")); // 치환값3
		commandMap.put("mapping4", "마이페이지>신규상품처리현황"); // 치환값4
		commandMap.put("mapping5", salsChrpsnInfo.get("SALS_CHRPSN_NM1")); // 치환값5
		commandMap.put("mapping6", salsChrpsnInfo.get("EMAIL_ADDR")); // 치환값6
		commandMap.put("mapping7", ""); // 치환값7
		commandMap.put("mapping8", ""); // 치환값8
		commandMap.put("mapping9", ""); // 치환값9
		//commandMap.put("mapping10", sspPropertyService.getString("mail.resource.root")); // 서브원스토어의 URL경로
		commandMap.put("mapping10", sspPropertyService.getString("host.rnd")); // G-lab URL경로
		commandMap.put("sendTime", ""); // 예약전송일시
		commandMap.put("userId", param.get("MBR_ID")); // 주문 회원자ID

		// 이메일 상세 01
		tMap.put("eventId", "20073"); // 이메일 템플릿 정보
		tMap.put("mstSeq", 1); // 마스터순번
		tMap.put("reptNo", 1); // 반복번호
		tMap.put("reptSeq", 1); // 반복순번
		tMap.put("transEtcFds1", prdInf.get("NEW_PRD_REQ_NO")); // 신규상품요청번호
		tMap.put("transEtcFds2", prdInf.get("REQ_PRD_NM")); // 상품명
		tMap.put("transEtcFds3", prdInf.get("MNFR_NM")); // 제조사명
		tMap.put("transEtcFds4", prdInf.get("REQ_PRVL")); // 요청규격

		map.add(CommonUtil.toCamelCaseMap(tMap));

		// 이메일 상세 02
		tMap2.put("eventId", "20073"); // 이메일 템플릿 정보
		tMap2.put("mstSeq", 1); // 마스터순번
		tMap2.put("reptNo", 2); // 반복번호
		tMap2.put("reptSeq", 1); // 반복순번
		tMap2.put("transEtcFds1", "등록불가유형 : " + param.get("PRD_REG_DIS_TP_NM"));  // 등록불가유형
		tMap2.put("transEtcFds2", param.get("REG_DIS_RSN")); 						// 상세사유

		
		map.add(CommonUtil.toCamelCaseMap(tMap2));

		try {
			coCommonSendService.insertCoSendMail(commandMap, map);
			insertCnt++;
		} catch (Exception e) {
			this.logger.error("신규상품요청 등록불가 메일전송 오류");
			throw new Exception(e);
		}

		return insertCnt;
	}
	
	/**
	 * 상품 일괄등록 불가 안내 메일 발송
	 *
	 * <PRE>
	 * - 업무영역 : 상품, R&D상품
	 * - EVENT ID : 20074
	 * - SSP_ID : 20074-01
	 * - 메일 명 : 신규상품일괄등록예외종료
	 * - 수신자 : 고객
	 * - 발송 시점 : 신규상품 예외종료 시점
	 * </PRE>
	 *
	 * @param param
	 * @return
	 */
	@Override
	public int newProductMultiRejectedMailSend(Map<String, Object> param) throws Exception {
		int insertCnt = 0;
		if (!isValidateCprtcpMailRcvAgreYn(param)) {
			return insertCnt;
		}
		Map<String, Object> commandMap = new HashMap<>();
		List<Map<String, Object>> map = new ArrayList<>();
		Map<String, Object> tMap = new HashMap<>();
		Map<String, Object> tMap2 = new HashMap<>();
		
		// 영업담당자정보 조회
		Map<String, Object> prdInf = newPrdMltReqLstDao.selectChrpsnInfo(param).get(0); // 요청상품정보

		// 이메일 헤더정보
		commandMap.put("eventId", "20074"); // 이메일 템플릿 정보
		commandMap.put("subInfoYn", "Y"); // 이메일 디테일 유무
		commandMap.put("fromEmail", "mail@serveone.co.kr"); // 발신자 이메일
		commandMap.put("fromName", "서브원스토어 G-lab"); 			// 발신자 이름   
		commandMap.put("mapping1", sspPropertyService.getString("host.rnd")
				+ sspPropertyService.getString("mail.resource.rnd.logo"));
		commandMap.put("toEmail", prdInf.get("CHRPSN_EMAIL_ADDR")); // 수신자 이메일
		commandMap.put("toName", prdInf.get("CHRPSN_NM")); // 수신자 이름
		commandMap.put("title", "[" + param.get("NEW_PRD_REQ_GRP_NO") + "]" + " 상품 일괄등록요청이 반려처리 되었습니다."); // 메일 제목
		commandMap.put("mapping2", "상품 일괄등록요청 반려안내"); // 치환값2
		commandMap.put("mapping3", prdInf.get("CHRPSN_NM")); // 치환값3
		commandMap.put("mapping4", "협력사 사이트>G-lab의 [상품일괄등록요청]"); // 치환값4
		commandMap.put("mapping5", param.get("OPRTR_NM")); // 치환값5
		commandMap.put("mapping6", param.get("EMAIL_ADDR")); // 치환값6
		commandMap.put("mapping7", ""); // 치환값7
		commandMap.put("mapping8", ""); // 치환값8
		commandMap.put("mapping9", "협력사사이트"); // 치환값9
		commandMap.put("mapping10", sspPropertyService.getString("host.cprtcp")); // 치환값10 협력사 URL경로
		commandMap.put("sendTime", ""); // 예약전송일시
		commandMap.put("userId", param.get("MBR_ID")); // 주문 회원자ID
		
		// 이메일 상세 01
		tMap.put("eventId", "20074"); // 이메일 템플릿 정보
		tMap.put("mstSeq", 1); // 마스터순번
		tMap.put("reptNo", 1); // 반복번호
		tMap.put("reptSeq", 1); // 반복순번
		tMap.put("transEtcFds1", param.get("NEW_PRD_REQ_GRP_NO")); // 신규상품요청번호
		tMap.put("transEtcFds2", param.get("ATFL_NM")); // 상품등록 요청파일명
		tMap.put("transEtcFds3", param.get("REG_DTM")); // 상품등록 요청일
		tMap.put("transEtcFds4", "/co/mail/file-down.do?target="+param.get("EXCEL_DOC_REG_ID")); // 첨부파일 다운로드 URL
		tMap.put("prdMltRejt", "Y");
		
		map.add(CommonUtil.toCamelCaseMap(tMap));
		
		// 이메일 상세 02
		tMap2.put("eventId", "20074"); // 이메일 템플릿 정보
		tMap2.put("mstSeq", 1); // 마스터순번
		tMap2.put("reptNo", 2); // 반복번호
		tMap2.put("reptSeq", 1); // 반복순번
		tMap2.put("transEtcFds1", "등록불가유형 : " + param.get("PRD_REG_DIS_TP_NM"));  // 등록불가유형
		tMap2.put("transEtcFds2", param.get("REG_DIS_RSN")); 						// 상세사유
		
		
		map.add(CommonUtil.toCamelCaseMap(tMap2));
		
		try {
			coCommonSendService.insertCoSendMail(commandMap, map);
			insertCnt++;
		} catch (Exception e) {
			this.logger.error("신규상품요청 등록불가 메일전송 오류");
			throw new Exception(e);
		}
		
		return insertCnt;
	}

	/**
	 * 신규상품 등록완료 메일 발송
	 *
	 * <PRE>
	 * - 업무영역 : 상품, R&D상품
	 * - EVENT ID : 20051
	 * - SSP_ID : 20051-01
	 * - 메일 명 : 신규상품등록완료
	 * - 수신자 : 고객
	 * - 발송 시점 : 신규상품 등록완료 시점
	 * </PRE>
	 *
	 * @param param
	 * @return
	 */
	@Override
	public int newProductCompleteMailSend(Map<String, Object> emailData) throws Exception {
		emailData.put("CO_CD", StringUtil.getString(emailData.get("coCd")));
		emailData.put("NEW_PRD_REQ_NO", StringUtil.getString(emailData.get("newPrdReqNo")));
		int insertCnt = 0;
		if (!isValidateCustMailRcvAgreYn(emailData)) {
			return insertCnt;
		}
		try {
			pcNewPrdReqPrcDao.insertEmailSendRequest(emailData);
			insertCnt++;
		} catch (Exception e) {
			this.logger.error("신규상품요청 등록완료 메일전송 오류");
			throw new Exception(e);
		}
		return insertCnt;
	}

	/**
	 * 고객의 업무용메일수신동의여부 검증
	 */
	@Override
	public boolean isValidateCustMailRcvAgreYn(Map<String, Object> param) throws Exception {
		String custMailRcvAgreYn = newPrdReqLstDao.selectCustMailRcvAgreYn(param);
		if ("Y".equals(custMailRcvAgreYn)) {
			return true;
		} else if ("N".equals(custMailRcvAgreYn)) {
			return false;
		} else {
			return false;
		}
	}
	
	/**
	 * 협력사의 업무용메일수신동의여부 검증
	 */
	@Override
	public boolean isValidateCprtcpMailRcvAgreYn(Map<String, Object> param) throws Exception {
		String custMailRcvAgreYn = newPrdMltReqLstDao.selectCprtcpMailRcvAgreYn(param);
		if ("Y".equals(custMailRcvAgreYn)) {
			return true;
		} else if ("N".equals(custMailRcvAgreYn)) {
			return false;
		} else {
			return false;
		}
	}

}