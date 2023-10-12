package com.ssp.bo.ba.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssp.bo.ba.dao.BoBaBatPgmDao;
import com.ssp.bo.ba.service.BoBaBatPgmChgHstService;
import com.ssp.bo.ba.service.BoBaBatPgmLogService;
import com.ssp.bo.ba.service.BoBaBatPgmService;
import com.ssp.bo.cc.CCUtils;
import com.ssp.core.ba.service.CoreBaBatPgmLogService;
import com.ssp.core.ba.service.CoreBaBatPgmService;
import com.ssp.core.ba.service.CoreBaBatSvrService;
import com.ssp.core.ba.vo.*;
import com.ssp.core.common.exception.MessageException;
import org.apache.commons.beanutils.BeanUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service("boBaBatPgmService")
public class BoBaBatPgmServiceImpl implements BoBaBatPgmService {

	@Autowired
	private BoBaBatPgmDao boBaBatPgmDao;
	
	@Autowired
	private BoBaBatPgmChgHstService boBaBatPgmChgHstService;
	
	@Autowired
	private BoBaBatPgmLogService boBaBatPgmLogService;
	
	@Autowired
	private CoreBaBatSvrService coreBaBatSvrService;
	
	@Autowired
	private CoreBaBatPgmService coreBaBatPgmService;
	
	@Autowired
	private CoreBaBatPgmLogService coreBaBatPgmLogService;
	
	private Logger logger = LoggerFactory.getLogger(this.getClass());

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectBatPgm
	 * 2. ClassName : BaBatPgmServiceImpl
	 * 3. Comment : 배치프로그램 ID 중복확인
	 * 4. 작성자 : spect22
	 * 5. 작성일 : 2022-12-26
	 * </pre>
	 *
	 * @param baBatPgmVo
	 * @return BaBatPgmVo
	 */
	@Override
	public BaBatPgmVo selectBatPgm(BaBatPgmVo baBatPgmVo) throws Exception {
		return boBaBatPgmDao.selectBatPgm(baBatPgmVo);
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : insertBatPgm
	 * 2. ClassName : BaBatPgmServiceImpl
	 * 3. Comment : 배치프로그램 등록
	 * 4. 작성자 : spect22
	 * 5. 작성일 : 2022-12-26
	 * </pre>
	 *
	 * @param baBatPgmVo
	 * @return BaBatPgmVo
	 */
	@Override
	public BaBatPgmVo insertBatPgm(BaBatPgmVo baBatPgmVo, CCUtils ccUtils) throws Exception {
	
		BaBatPgmVo rtnBatPgmVo = new BaBatPgmVo();
		baBatPgmVo.setRegpsnId(ccUtils.getSession().get("OPRTR_ID").toString());
		baBatPgmVo.setUpdpsnId(ccUtils.getSession().get("OPRTR_ID").toString());
		
		try {
			//이미 등록된 배치프로그램 ID가 존재하는지 확인
			BaBatPgmVo chkBatPgm = boBaBatPgmDao.selectBatPgm(baBatPgmVo);
			String chkBatPgmId = null;
			
			if(chkBatPgm != null) {
				chkBatPgmId = chkBatPgm.getBatPgmId();
			}
			
			if(chkBatPgmId == null) {	//동일한 프로그램 ID가 이미 DB에 존재하지 않는다면
				//배치 프로그램 등록
				int batPgmSeq = boBaBatPgmDao.insertBatPgm(baBatPgmVo);    //등록된 배치프로그램 순번 불러오기
				baBatPgmVo.setBatPgmSeq(batPgmSeq);
				
				//배치프로그램 변경이력 등록
				BaBatPgmChgHstVo baBatPgmChgHstVo = new BaBatPgmChgHstVo();
				BeanUtils.copyProperties(baBatPgmChgHstVo, baBatPgmVo);
				baBatPgmChgHstVo.setDataChgTpCd("I");
				
				BaBatPgmChgHstVo rtnBaBatPgmChgHstVo = boBaBatPgmChgHstService.insertBatPgmChgHst(baBatPgmChgHstVo);
				
				if (batPgmSeq < 1 && rtnBaBatPgmChgHstVo.getTransBatPgmChgHstCnt() < 1) {
					rtnBatPgmVo.setStatCode(BaBatStat.ERROR);
					rtnBatPgmVo.setStatMsg("등록실패");
					throw new MessageException(-100, "등록실패");
				} else {
					rtnBatPgmVo.setTransBatPgmCnt(batPgmSeq);
					rtnBatPgmVo.setBatPgmSeq(batPgmSeq);
					rtnBatPgmVo.setStatCode(BaBatStat.NORMAL);
					rtnBatPgmVo.setStatMsg("정상처리");
				}
			}
			else{
				rtnBatPgmVo.setStatCode(BaBatStat.ERROR);
				rtnBatPgmVo.setStatMsg("동일한 배치프로그램ID가 존재합니다.");
			}
		}
		catch(MessageException e) {
			if( e.getCode() == -1 || e.getCode() == -100 ) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
				rtnBatPgmVo.setTransBatPgmCnt(0);
				rtnBatPgmVo.setStatCode(String.valueOf(e.getCode()));
				rtnBatPgmVo.setStatMsg(e.getMessage());
				return rtnBatPgmVo;
			} else {
				throw e;
			}
		}
		
		return rtnBatPgmVo;
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : updateBatPgm
	 * 2. ClassName : BaBatPgmServiceImpl
	 * 3. Comment : 배치프로그램 갱신
	 * 4. 작성자 : spect22
	 * 5. 작성일 : 2022-12-28
	 * </pre>
	 *
	 * @param baBatPgmVo
	 * @return BaBatPgmVo
	 */
	@Override
	public BaBatPgmVo updateBatPgm(BaBatPgmVo baBatPgmVo, CCUtils ccUtils) throws Exception {
		
		BaBatPgmVo rtnBatPgmVo = new BaBatPgmVo();
		baBatPgmVo.setRegpsnId(ccUtils.getSession().get("OPRTR_ID").toString());
		baBatPgmVo.setUpdpsnId(ccUtils.getSession().get("OPRTR_ID").toString());
		
		try {
			//배치프로그램 갱신
			int insBatPgmCnt = boBaBatPgmDao.updateBatPgm(baBatPgmVo);
			
			//배치프로그램 변경이력 등록
			BaBatPgmChgHstVo baBatPgmChgHstVo = new BaBatPgmChgHstVo();
			BeanUtils.copyProperties(baBatPgmChgHstVo, baBatPgmVo);
			baBatPgmChgHstVo.setDataChgTpCd("U");
			
			//배치프로그램 변경이력 로그에 가장 마지막 저장 내역과 변경점이 없는지 확인
			int findChgBatPgmChgHst = boBaBatPgmChgHstService.findChgBatPgmChgHst(baBatPgmChgHstVo);
			
			if(findChgBatPgmChgHst == 0) {	//마지막 저장 내역과 현재 저장할 내역이 같지 않다면
				BaBatPgmChgHstVo rtnBaBatPgmChgHstVo = boBaBatPgmChgHstService.insertBatPgmChgHst(baBatPgmChgHstVo);
				
				if (insBatPgmCnt < 1 && rtnBaBatPgmChgHstVo.getTransBatPgmChgHstCnt() < 1) {
					rtnBatPgmVo.setStatCode(BaBatStat.ERROR);
					rtnBatPgmVo.setStatMsg("수정실패");
					throw new MessageException(-100, "수정실패");
				} else {
					rtnBatPgmVo.setTransBatPgmCnt(insBatPgmCnt);
					rtnBatPgmVo.setBatPgmSeq(baBatPgmVo.getBatPgmSeq());
					rtnBatPgmVo.setStatCode(BaBatStat.NORMAL);
					rtnBatPgmVo.setStatMsg("정상처리");
				}
			}
			else{
				rtnBatPgmVo.setStatCode(BaBatStat.NORMAL);
				rtnBatPgmVo.setStatMsg("정상처리");
			}
		}
		catch (MessageException e){
			if( e.getCode() == -1 || e.getCode() == -100 ) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
				rtnBatPgmVo.setTransBatPgmCnt(0);
				rtnBatPgmVo.setStatCode(String.valueOf(e.getCode()));
				rtnBatPgmVo.setStatMsg(e.getMessage());
				return rtnBatPgmVo;
			} else {
				throw e;
			}
		}
		
		return rtnBatPgmVo;
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : baSvrBatPgmUpdt
	 * 2. ClassName : BaBatPgmServiceImpl
	 * 3. Comment : 배치서버 배치프로그램목록(static) 갱신
	 * 4. 작성자 : spect22
	 * 5. 작성일 : 2023-02-10
	 * </pre>
	 *
	 * @param baBatPgmVo
	 * @return BaBatPgmVo
	 */
	@Override
	public BaBatPgmVo batSvrBatPgmUpdt(BaBatPgmVo baBatPgmVo) throws Exception {
		BaBatPgmVo rtnBatPgmVo = new BaBatPgmVo();
		
		try {
			//SSP Batch의 (B08) 배치프로그램 갱신을 호출(restApi) 해서 static 메모리의 배치 프로그램 정보를 Update 처리
			//입력 시에는 서버정보를 가지고 있지 않으므로 해당 정보를 불러온다.
			BaBatSvrVo baBatSvrVo = new BaBatSvrVo();
			baBatSvrVo.setSvrChkYn("N");        //서버 상태체크 제외 옵션
			List<BaBatSvrVo> inqBatSvrList = coreBaBatSvrService.inqBatSvrList(baBatSvrVo);
			if (inqBatSvrList != null && inqBatSvrList.size() > 0) {
				//현재 등록된 모든 서버의 static 배치프로그램 정보를 갱신 처리 진행
				for (BaBatSvrVo batSvrVo : inqBatSvrList) {
					//URL 세팅
					HttpHeaders headers = new HttpHeaders();
					headers.setContentType(MediaType.APPLICATION_JSON_UTF8);
					String url = batSvrVo.getPrtclCd() + "://" + batSvrVo.getIpAddr() + ":" + batSvrVo.getPort() + "/ba/bat-adm/updt-bat-pgm.do";
					Map<String, Object> params = new HashMap<>();
					params.put("batPgmSeq", baBatPgmVo.getBatPgmSeq());
					
					//배치 서버의 배치 프로그램 갱신 Api 호출
					String response = coreBaBatPgmService.sendApi(url, headers, params);
					//배치 서버의 배치 프로그램 갱신은 진행하되, 진행 이후 결과값은 해당 배치프로그램의 배치서버의 결과값만 받는다.
					if (response == null) {
						logger.error(baBatPgmVo.getBatPgmNm() + "배치 프로그램 정보가 DB에 등록되었으나 " + batSvrVo.getServerNm() + "에 " + baBatPgmVo.getBatPgmNm() + " 배치 프로그램 정보가 조회되지 않습니다.");
						rtnBatPgmVo.setStatCode(BaBatStat.SERVER_ERROR);
						rtnBatPgmVo.setStatMsg("등록실패");
						rtnBatPgmVo.setNxtExceDtm("-");
						//throw new MessageException(-100, baBatPgmVo.getBatPgmNm() + "배치 프로그램 정보가 DB에 등록되었으나 " + batSvrVo.getServerNm() + "에 " + baBatPgmVo.getBatPgmNm() + " 배치 프로그램 정보가 조회되지 않습니다.");
					} else {
						try {
							ObjectMapper objectMapper = new ObjectMapper();
							Map<String, Object> recvApiMap = objectMapper.readValue(response, Map.class);
							rtnBatPgmVo.setStatCode(recvApiMap.get("statCode").toString());
							rtnBatPgmVo.setStatMsg(recvApiMap.get("statMsg").toString());
							
						} catch (RuntimeException ex) {
							logger.error(ex.getMessage());
							//throw new MessageException(-100, "등록실패");
						}
					}
				}
			}
		}
		catch (MessageException e){
			if( e.getCode() == -1 || e.getCode() == -100 ) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
				rtnBatPgmVo.setTransBatPgmCnt(0);
				rtnBatPgmVo.setStatCode(String.valueOf(e.getCode()));
				rtnBatPgmVo.setStatMsg(e.getMessage());
				return rtnBatPgmVo;
			} else {
				throw e;
			}
		}
	
		return rtnBatPgmVo;
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : deleteBatPgm
	 * 2. ClassName : BaBatPgmServiceImpl
	 * 3. Comment : 배치프로그램 삭제
	 * 4. 작성자 : spect22
	 * 5. 작성일 : 2023-01-05
	 * </pre>
	 *
	 * @param baBatPgmVo
	 * @return BaBatPgmVo
	 */
	@Override
	public BaBatPgmVo deleteBatPgm(BaBatPgmVo baBatPgmVo) throws Exception {
		BaBatPgmVo batPgmVo = new BaBatPgmVo();
		
		try {
			//실행이력이 존재하거나 현재 해당 배치가 실행중(추후 체크!!)이면 삭제 금지
			BaBatPgmLogVo baBatPgmLogVo = new BaBatPgmLogVo();
			baBatPgmLogVo.setBatPgmSeq(baBatPgmVo.getBatPgmSeq());
			baBatPgmLogVo.setRowCount(20);
			baBatPgmLogVo.setStartNum(0);
			
			List<BaBatPgmLogVo> inqBatPgmLogList = boBaBatPgmLogService.inqBatPgmLogList(baBatPgmLogVo);
			
			if (inqBatPgmLogList != null && inqBatPgmLogList.size() == 0) {
				int insBatPgmCnt = boBaBatPgmDao.deleteBatPgm(baBatPgmVo);
				
				//실행서버, 예약일정, 사용여부 변경에 따라서 배치 실행처리를 다시 해야 함
				if (insBatPgmCnt < 1) {
					batPgmVo.setStatMsg("배치프로그램 삭제에 실패하였습니다.");
					throw new MessageException(-100, "배치프로그램 삭제에 실패하였습니다.");
				} else {
					batPgmVo.setTransBatPgmCnt(insBatPgmCnt);
				}
			} else {
				batPgmVo.setStatMsg("배치프로그램 실행이력이 존재합니다. 삭제가 불가능 합니다.");
				throw new MessageException(-100, "배치프로그램 실행이력이 존재합니다. 삭제가 불가능 합니다.");
			}
		}
		catch (MessageException e){
			if( e.getCode() == -100 ) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
			}
		}
		
		return batPgmVo;
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : runBatPgm
	 * 2. ClassName : BaBatPgmServiceImpl
	 * 3. Comment : 배치프로그램 실행
	 * 4. 작성자 : spect22
	 * 5. 작성일 : 2023-02-13
	 * </pre>
	 *
	 * @param baBatPgmVo
	 * @return BaBatPgmVo
	 */
	@Override
	public BaBatPgmVo runBatPgm(BaBatPgmVo baBatPgmVo) throws Exception {
		BaBatPgmVo rtnBatPgmVo = new BaBatPgmVo();
		
		/** 배치프로그램 실행로그를 위한 공통 Vo 생성 */
		BaBatPgmLogVo baBatPgmLogVo = new BaBatPgmLogVo();	//배치 프로그램 로그를 위한 Vo
		
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String today = formatter.format(new Date());
		
		baBatPgmLogVo.setBatPgmSeq(baBatPgmVo.getBatPgmSeq());			//배치프로그램순번
		baBatPgmLogVo.setBatServerSeq(baBatPgmVo.getBatServerSeq());	//배치서버순번
		baBatPgmLogVo.setStrDtm(today);									//시작일시
		baBatPgmLogVo.setEndDtm(today);									//종료일시
		baBatPgmLogVo.setExceStatsCd("20");								//실행상태 코드
		baBatPgmLogVo.setRegpsnId("SYSTEM");							//등록자ID
		//baBatPgmLogVo.setMsg(null);									//메시지
		
		//URL 세팅
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON_UTF8);
		String url = baBatPgmVo.getPrtclCd() + "://" + baBatPgmVo.getIpAddr() + ":" + baBatPgmVo.getPort() + "/ba/bat-adm/run-bat-pgm.do";
		Map<String, Object> params = new HashMap<>();
		params.put("batPgmId", baBatPgmVo.getBatPgmId());
		
		//배치 서버의 배치 프로그램 조회 Api 호출
		String response = coreBaBatPgmService.sendApi(url, headers, params);
		
		if (response == null) {
			logger.error(baBatPgmVo.getServerNm() + "에 " + baBatPgmVo.getBatPgmNm() + " 배치 프로그램 실행불가");
			rtnBatPgmVo.setStatCode(BaBatStat.SERVER_ERROR);
			rtnBatPgmVo.setStatMsg(baBatPgmVo.getServerNm() + "에 " + baBatPgmVo.getBatPgmNm() + " 배치 프로그램 실행불가");
			rtnBatPgmVo.setNxtExceDtm("-");
			
			//(B14) 배치프로그램 실행오류 Logging
			baBatPgmLogVo.setLogLvl("error");
			baBatPgmLogVo.setErrorDtls(baBatPgmVo.getServerNm() + "에 " + baBatPgmVo.getBatPgmNm() + " 배치 프로그램 실행불가");
			coreBaBatPgmLogService.regBatPgmLog(baBatPgmLogVo);
			
		} else {
			try {
				ObjectMapper objectMapper = new ObjectMapper();
				Map<String, Object> recvApiMap = objectMapper.readValue(response, Map.class);
				rtnBatPgmVo.setStatCode(recvApiMap.get("statCode").toString());
				rtnBatPgmVo.setStatMsg(recvApiMap.get("statMsg").toString());
			} catch (RuntimeException ex) {
				logger.error(ex.getMessage());
				rtnBatPgmVo.setStatCode(BaBatStat.SERVER_ERROR);
				rtnBatPgmVo.setStatMsg(baBatPgmVo.getServerNm() + "에 " + baBatPgmVo.getBatPgmNm() + " 배치 프로그램이 실행오류 발생");
				rtnBatPgmVo.setNxtExceDtm("-");
				//throw new MessageException(-100, "실행실패");
				
				//(B14) 배치프로그램 실행오류 Logging
				baBatPgmLogVo.setLogLvl("error");
				baBatPgmLogVo.setErrorDtls(baBatPgmVo.getServerNm() + "에 " + baBatPgmVo.getBatPgmNm() + " 배치 프로그램이 실행오류 발생");
				coreBaBatPgmLogService.regBatPgmLog(baBatPgmLogVo);
			}
			
		}
	
		return rtnBatPgmVo;
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : endBatPgm
	 * 2. ClassName : BaBatPgmServiceImpl
	 * 3. Comment : 배치프로그램 강제종료
	 * 4. 작성자 : spect22
	 * 5. 작성일 : 2023-02-15
	 * </pre>
	 *
	 * @param baBatPgmVo
	 * @return BaBatPgmVo
	 */
	@Override
	public BaBatPgmVo endBatPgm(BaBatPgmVo baBatPgmVo) throws Exception {
		BaBatPgmVo rtnBatPgmVo = new BaBatPgmVo();
		
		/** 배치프로그램 실행로그를 위한 공통 Vo 생성 */
		BaBatPgmLogVo baBatPgmLogVo = new BaBatPgmLogVo();	//배치 프로그램 로그를 위한 Vo
		
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String today = formatter.format(new Date());
		
		baBatPgmLogVo.setBatPgmSeq(baBatPgmVo.getBatPgmSeq());			//배치프로그램순번
		baBatPgmLogVo.setBatServerSeq(baBatPgmVo.getBatServerSeq());	//배치서버순번
		baBatPgmLogVo.setStrDtm(today);									//시작일시
		baBatPgmLogVo.setEndDtm(today);									//종료일시
		baBatPgmLogVo.setExceStatsCd("20");								//실행상태 코드
		baBatPgmLogVo.setRegpsnId("SYSTEM");								//등록자ID(누구로 입력??)
		//baBatPgmLogVo.setMsg(null);									//메시지
		
		//URL 세팅
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON_UTF8);
		String url = baBatPgmVo.getPrtclCd() + "://" + baBatPgmVo.getIpAddr() + ":" + baBatPgmVo.getPort() + "/ba/bat-adm/end-bat-pgm.do";
		Map<String, Object> params = new HashMap<>();
		params.put("batPgmId", baBatPgmVo.getBatPgmId());
		
		//배치 서버의 배치 프로그램 조회 Api 호출
		String response = coreBaBatPgmService.sendApi(url, headers, params);
		
		if (response == null) {
			logger.error(baBatPgmVo.getServerNm() + "에 " + baBatPgmVo.getBatPgmNm() + " 배치 프로그램 강제종료 불가");
			rtnBatPgmVo.setStatCode(BaBatStat.SERVER_ERROR);
			rtnBatPgmVo.setStatMsg(baBatPgmVo.getServerNm() + "에 " + baBatPgmVo.getBatPgmNm() + " 배치 프로그램 강제종료 불가");
			rtnBatPgmVo.setNxtExceDtm("-");
			
			//(B14) 배치프로그램 실행오류 Logging
			/*baBatPgmLogVo.setLogLvl("error");
			baBatPgmLogVo.setErrorDtls(baBatPgmVo.getServerNm() + "에 " + baBatPgmVo.getBatPgmNm() + " 배치 프로그램 강제종료 불가");
			coreBaBatPgmLogService.regBatPgmLog(baBatPgmLogVo);*/
			
		} else {
			try {
				ObjectMapper objectMapper = new ObjectMapper();
				Map<String, Object> recvApiMap = objectMapper.readValue(response, Map.class);
				rtnBatPgmVo.setStatCode(recvApiMap.get("statCode").toString());
				rtnBatPgmVo.setStatMsg(recvApiMap.get("statMsg").toString());
				
			} catch (RuntimeException ex) {
				logger.error(ex.getMessage());
				rtnBatPgmVo.setStatCode(BaBatStat.SERVER_ERROR);
				rtnBatPgmVo.setStatMsg(baBatPgmVo.getServerNm() + "에 " + baBatPgmVo.getBatPgmNm() + " 배치 프로그램 강제종료 오류 발생");
				rtnBatPgmVo.setNxtExceDtm("-");
				
				//(B14) 배치프로그램 실행오류 Logging
				baBatPgmLogVo.setLogLvl("error");
				baBatPgmLogVo.setErrorDtls(baBatPgmVo.getServerNm() + "에 " + baBatPgmVo.getBatPgmNm() + " 배치 프로그램 강제종료 오류 발생");
				coreBaBatPgmLogService.regBatPgmLog(baBatPgmLogVo);
			}
			
		}
	
		return rtnBatPgmVo;
	}
}
