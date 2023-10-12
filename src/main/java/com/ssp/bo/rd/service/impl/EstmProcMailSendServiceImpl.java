package com.ssp.bo.rd.service.impl;

import com.ssp.bo.rd.dao.DispEstmProcMailDao;
import com.ssp.bo.rd.service.EstmProcMailSendService;
import com.ssp.core.co.service.CoCommonSendService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.common.property.SspPropertyService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service("estmProcMailSendService")
public class EstmProcMailSendServiceImpl implements EstmProcMailSendService {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	protected SspPropertyService sspPropertyService;

	@Resource(name = "coCommonSendService")
	private CoCommonSendService coCommonSendService;

	@Autowired
	private DispEstmProcMailDao dispEstmProcMailDao;

	/**
	 * 고객의 업무용메일수신동의여부 검증
	 */
	@Override
	public boolean isValidateCustMailRcvAgreYn(Map<String, Object> param) throws Exception {
		String custMailRcvAgreYn = dispEstmProcMailDao.selectCustMailRcvAgreYn(param);
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
		String custMailRcvAgreYn = dispEstmProcMailDao.selectCprtcpMailRcvAgreYn(param);
		if ("Y".equals(custMailRcvAgreYn)) {
			return true;
		} else if ("N".equals(custMailRcvAgreYn)) {
			return false;
		} else {
			return false;
		}
	}

	/**
	 * 전문제작품등록 완료 안내 메일 발송
	 *
	 * <PRE>
	 * - 업무영역 : 상품, R&D상품
	 * - EVENT ID : 20077
	 * - SSP_ID : 20077-01
	 * - 수신자 : 고객
	 * </PRE>
	 *
	 * @param param
	 * @return
	 */
	@Override
	public int estmProcCompleteSendMail(Map<String, Object> param) throws Exception {
		int insertCnt = 0;
		if (!isValidateCustMailRcvAgreYn(param)) {
			return insertCnt;
		}
		Map<String, Object> commandMap = new HashMap<>();
		List<Map<String, Object>> map = new ArrayList<>();
		Map<String, Object> tMap = new HashMap<>();
		Map<String, Object> tMap2 = new HashMap<>();

		// 이메일 헤더정보
		commandMap.put("eventId", "20077"); // 이메일 템플릿 정보
		commandMap.put("subInfoYn", "Y"); // 이메일 디테일 유무
		commandMap.put("fromEmail", "mail@serveone.co.kr"); // 발신자 이메일
		commandMap.put("fromName", "서브원스토어 G-lab"); 			// 발신자 이름
		commandMap.put("mapping1", sspPropertyService.getString("host.rnd")
				+ sspPropertyService.getString("mail.resource.rnd.logo")); //치환값1(로고)
		commandMap.put("toEmail", param.get("MBR_EMAIL")); // 수신자 이메일
		commandMap.put("toName", param.get("MBR_NM")); // 수신자 이름
		commandMap.put("title", "[" + param.get("ESTM_REQ_NO") + "]" + " 전문제작품 견적이 완료되었습니다."); // 메일 제목
		commandMap.put("mapping2", "전문제작품등록 완료 안내"); // 치환값2(메일 문구 제목)
		commandMap.put("mapping3", param.get("MBR_NM")); // 치환값3(본문 주문자명)
		commandMap.put("mapping4", "마이페이지>전문 제작품 견적현황"); // 치환값4
		commandMap.put("mapping5", param.get("OPRTR_NM") + " " + param.get("PSTN_NM")); // 치환값5(담당자 + 직책)
		commandMap.put("mapping6", param.get("OPRTR_MAIL")); // 치환값6(담당자 메일주소)
		commandMap.put("mapping7", "요청하신 전문제작품의 견적이 완료되어 안내드립니다. \r\n"
				+ "등록 상세 내용은 마이페이지>전문 제작품 견적현황 에서 확인하실 수 있습니다. \r\n"
				+ "\r\n"
				+ "* 전문제작품의 가격은 상품 등록 완료 후 30일간 유효합니다. \r\n"
				+ "   견적기간 만료 후에는 상품 주문 불가하오니 견적요청 재진행 부탁드립니다."); // 치환값7(메일 문구 본문)
		commandMap.put("mapping10", sspPropertyService.getString("host.rnd")); // G-lab URL경로
		commandMap.put("sendTime", ""); // 예약전송일시
		commandMap.put("userId", param.get("MBR_ID")); // 주문 회원자ID

		// 이메일 상세 01
		tMap.put("eventId", "20077"); 	// 이메일 템플릿 정보
		tMap.put("mstSeq", 1); 			// 마스터순번
		tMap.put("reptNo", 1); 			// 반복번호
		tMap.put("reptSeq", 1); 		// 반복순번
		tMap.put("transEtcFds1", param.get("ESTM_REQ_NO")); 			// 요청번호
		tMap.put("transEtcFds2", param.get("DISP_PRD_NM")); 			// 상품명
		tMap.put("transEtcFds3", param.get("MNFR_NM")); 				// 제조원
		tMap.put("transEtcFds4", param.get("NEW_PRD_REQ_PRVL_LIST")); 	// 요청규격
		
		map.add(CommonUtil.toCamelCaseMap(tMap));
		
		// 이메일 상세 02
		tMap2.put("eventId", "20077"); 	// 이메일 템플릿 정보
		tMap2.put("mstSeq", 1); 		// 마스터순번
		tMap2.put("reptNo", 2); 		// 반복번호
		tMap2.put("reptSeq", 1); 		// 반복순번
		tMap2.put("transEtcFds1", param.get("IMG_PATH")); 									// 상품이미지 URL
		tMap2.put("transEtcFds2", param.get("NEW_PRD_ID")); 								// 상품ID
		tMap2.put("transEtcFds3", param.get("DISP_PRD_NM")); 								// 상품명
		tMap2.put("transEtcFds4", param.get("NEW_PRD_REQ_PRVL_LIST"));						// 대표규격
		tMap2.put("transEtcFds5", param.get("MNFR_NM") + " / " + param.get("CTRY_NM")); 	// 제조원/원산지
		tMap2.put("transEtcFds6", param.get("BASIS_UNIT_CD")); 								// 단위
		tMap2.put("transEtcFds7", String.valueOf(param.get("BASIS_UNIT_QTY"))+param.get("BASIS_UNIT_CD"));	// 최소구매수량
		tMap2.put("transEtcFds8", param.get("ITM_URL")); 									// 상품 연결 URL

		map.add(CommonUtil.toCamelCaseMap(tMap2));
		
		try {
			coCommonSendService.insertCoSendMail(commandMap, map);
			insertCnt++;
		} catch (Exception e) {
			this.logger.error("전문제작품등록 완료 안내 메일전송 오류");
			throw new Exception(e);
		}
		
		return insertCnt;
	}
	
	/**
	 * 전문제작품등록 불가 안내 메일 발송
	 *
	 * <PRE>
	 * - 업무영역 : 상품, R&D상품
	 * - EVENT ID : 20053
	 * - SSP_ID : 20053-02
	 * - 수신자 : 고객
	 * </PRE>
	 *
	 * @param param
	 * @return
	 */
	@Override
	public int estmProcRejectSendMail(Map<String, Object> param) throws Exception {
		int insertCnt = 0;
		if (!isValidateCustMailRcvAgreYn(param)) {
			return insertCnt;
		}
		Map<String, Object> commandMap = new HashMap<>();
		List<Map<String, Object>> map = new ArrayList<>();
		Map<String, Object> tMap = new HashMap<>();
		Map<String, Object> tMap2 = new HashMap<>();
		
		// 이메일 헤더정보
		commandMap.put("eventId", "20053"); // 이메일 템플릿 정보
		commandMap.put("subInfoYn", "Y"); // 이메일 디테일 유무
		commandMap.put("fromEmail", "mail@serveone.co.kr"); // 발신자 이메일
		commandMap.put("fromName", "서브원스토어 G-lab"); 			// 발신자 이름   
		commandMap.put("mapping1", sspPropertyService.getString("host.rnd")
				+ sspPropertyService.getString("mail.resource.rnd.logo")); //치환값1(로고)
		commandMap.put("toEmail", param.get("MBR_EMAIL")); // 수신자 이메일
		commandMap.put("toName", param.get("MBR_NM")); // 수신자 이름
		commandMap.put("title", "[" + param.get("ESTM_REQ_NO") + "]" + " 전문제작품 견적이 등록 취소되었습니다."); // 메일 제목
		commandMap.put("mapping2", "전문제작품등록 불가 안내"); // 치환값2(메일 문구 제목)
		commandMap.put("mapping3", param.get("MBR_NM")); // 치환값3(본문 주문자명)
		commandMap.put("mapping4", "마이페이지>전문 제작품 견적현황"); // 치환값4
		commandMap.put("mapping5", param.get("OPRTR_NM") + " " + param.get("OPRTR_PSTN_NM")); // 치환값5(담당자 + 직책)
		commandMap.put("mapping6", param.get("OPRTR_MAIL")); // 치환값6(담당자 메일주소)
		commandMap.put("mapping10", sspPropertyService.getString("host.rnd")); // G-lab URL경로
		commandMap.put("sendTime", ""); // 예약전송일시
		commandMap.put("userId", param.get("MBR_ID")); // 주문 회원자ID
		
		// 이메일 상세 01
		tMap.put("eventId", "20053"); // 이메일 템플릿 정보
		tMap.put("mstSeq", 1); // 마스터순번
		tMap.put("reptNo", 1); // 반복번호
		tMap.put("reptSeq", 1); // 반복순번
		tMap.put("transEtcFds1", param.get("ESTM_REQ_NO")); // 요청번호
		tMap.put("transEtcFds2", param.get("REQ_PRD_NM")); // 상품명
		tMap.put("transEtcFds3", param.get("MNFR_NM")); // 제조원
		tMap.put("transEtcFds4", param.get("SSP_REPR_ATTR")); // 요청규격
		
		map.add(CommonUtil.toCamelCaseMap(tMap));
		
		// 이메일 상세 02
		tMap2.put("eventId", "20053"); // 이메일 템플릿 정보
		tMap2.put("mstSeq", 1); // 마스터순번
		tMap2.put("reptNo", 2); // 반복번호
		tMap2.put("reptSeq", 1); // 반복순번
		tMap2.put("transEtcFds1", param.get("ESTM_DIS_RSN")); // 취소사유
		tMap2.put("transEtcFds2", param.get("")); // 취소유형(bold) - 무시
		
		
		map.add(CommonUtil.toCamelCaseMap(tMap2));
		
		try {
			coCommonSendService.insertCoSendMail(commandMap, map);
			insertCnt++;
		} catch (Exception e) {
			this.logger.error("전문제작품등록 불가 안내 메일전송 오류");
			throw new Exception(e);
		}
		
		return insertCnt;
	}
	
	/**
	 * 전문제작품 견적 참여 요청 안내 메일 발송
	 *
	 * <PRE>
	 * - 업무영역 : 상품, R&D상품
	 * - EVENT ID : 20061
	 * - SSP_ID : 20061-01
	 * - 수신자 : 고객
	 * </PRE>
	 *
	 * @param params
	 * @return
	 */
	@Override
	public int estmProcRequestSendMail(List<Map<String, Object>> params) throws Exception {
		int insertCnt = 0;
		Map<String, Object> baseMap = params.get(0);
		if (!isValidateCprtcpMailRcvAgreYn(baseMap)) {
			return insertCnt;
		}
		Map<String, Object> commandMap = new HashMap<>();
		List<Map<String, Object>> map = new ArrayList<>();
		Map<String, Object> tMap = new HashMap<>();

		// 이메일 헤더정보
		commandMap.put("eventId", "20061"); // 이메일 템플릿 정보
		commandMap.put("subInfoYn", "Y"); // 이메일 디테일 유무
		commandMap.put("fromEmail", "mail@serveone.co.kr"); // 발신자 이메일
		commandMap.put("fromName", "서브원스토어 G-lab"); 			// 발신자 이름   
		commandMap.put("mapping1", sspPropertyService.getString("host.rnd")
				+ sspPropertyService.getString("mail.resource.rnd.logo")); //치환값1(로고)
		commandMap.put("toEmail", baseMap.get("CHRPSN_NM")); // 수신자 이메일
		commandMap.put("toName", baseMap.get("CHRPSN_NM")); // 수신자 이름
		commandMap.put("title", "견적 참여 요청 메일입니다."); // 메일 제목
		commandMap.put("mapping2", "견적 참여 요청 안내"); // 치환값2(메일 문구 제목)
		commandMap.put("mapping3", "견적참여 요청 중 총"+baseMap.get("REQ_COUNT")+"건 입니다."); // 치환값3(본문)
		commandMap.put("mapping4", "견적참여는 전체메뉴>상품등록>견적요청 목록에서 확인하실 수 있습니다."); // 치환값4(본문2)
		commandMap.put("mapping5", "※ 기타 문의사항이 있으실 경우, 구매담당자에게 문의해주시기 바랍니다."); // 치환값5(담당자 + 직책)
		commandMap.put("mapping7", baseMap.get("REG_DTTM")); // 치환값6(입력일시)
		commandMap.put("mapping10", sspPropertyService.getString("host.cprtcp")); // 치환값10 협력사 URL경로
		commandMap.put("sendTime", ""); // 예약전송일시
		commandMap.put("userId", baseMap.get("CPRTCP_ID")); // 협력사 담당자ID
		
		// 이메일 상세 01
		int i = 1;
		for (Map<String, Object> param : params) {
			tMap.put("eventId", "20061"); 							// 이메일 템플릿 정보
			tMap.put("mstSeq", 1); 									// 마스터순번
			tMap.put("reptNo", 1); 									// 반복번호
			tMap.put("reptSeq", i); 								// 반복순번
			tMap.put("transEtcFds1", param.get("ESTM_REQ_NO")); 	// 요청번호
			tMap.put("transEtcFds2", param.get("PRD_ID")); 			// 상품ID
			tMap.put("transEtcFds3", param.get("PRD_NM")); 			// 상품명
			tMap.put("transEtcFds4", param.get("SSP_REPR_ATTR")); 	// 대표규격
			tMap.put("transEtcFds5", param.get("MNFR_NM")); 		// 제조원
			tMap.put("transEtcFds6", param.get("OPRTR_NM")); 		// 구매담당자

			map.add(CommonUtil.toCamelCaseMap(tMap));
			i++;
		}

		try {
			coCommonSendService.insertCoSendMail(commandMap, map);
			insertCnt++;
		} catch (Exception e) {
			this.logger.error("전문제작품등록 불가 안내 메일전송 오류");
			throw new Exception(e);
		}
		
		return insertCnt;
	}
}