package com.ssp.bo.ba.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssp.bo.ba.dao.BoBaBatSvrDao;
import com.ssp.bo.ba.service.BoBaBatSvrService;
import com.ssp.core.ba.service.CoreBaBatPgmService;
import com.ssp.core.ba.service.CoreBaBatSvrService;
import com.ssp.core.ba.vo.BaBatPgmVo;
import com.ssp.core.ba.vo.BaBatStat;
import com.ssp.core.ba.vo.BaBatSvrVo;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.util.StringUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service("boBaBatSvrService")
public class BoBaBatSvrServiceImpl implements BoBaBatSvrService {
	
	@Autowired
	private CoreBaBatPgmService coreBaBatPgmService;
	
	@Autowired
	private BoBaBatSvrDao boBaBatSvrDao;
	
	@Autowired
	private CoreBaBatSvrService coreBaBatSvrService;
	
	private Logger logger = LoggerFactory.getLogger(this.getClass());

	/**
	 *
	 * <pre>
	 * 1. MethodName : saveBatSvrStatList
	 * 2. ClassName : BaBatSvrServiceImpl
	 * 3. Comment : 배치서버 목록 저장
	 * 4. 작성자 : spect22
	 * 5. 작성일 : 2022-12-29
	 * </pre>
	 *
	 * @param baBatSvrVoList
	 * @return List<BaBatSvrVo>
	 */
	@Override
	public List<BaBatSvrVo> saveBatSvrStatList(List<BaBatSvrVo> baBatSvrVoList) throws Exception {
		List<BaBatSvrVo> rtnBatSvrList = new ArrayList<BaBatSvrVo>();
		
		try {
			//리스트 화면에서 수정된 목록과 신규로 생성된 내역을 수정, 저장 처리
			int tranCnt = 0;			//transaction 갯수
			String statMsg = "";		//transaction 관련 메세지
			Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			
			for (BaBatSvrVo baBatSvrVo : baBatSvrVoList) {
				int saveType = baBatSvrVo.getRowTranType();
				baBatSvrVo.setRegpsnId(StringUtil.getString(admin.get("OPRTR_ID")));
				baBatSvrVo.setUpdpsnId(StringUtil.getString(admin.get("OPRTR_ID")));
				
				if (saveType == 1) {			//신규
					statMsg = "등록";
					tranCnt = boBaBatSvrDao.insertBatSvr(baBatSvrVo);
				} else if (saveType == 2) {		//수정
					statMsg = "수정";
					tranCnt = boBaBatSvrDao.updateBatSvr(baBatSvrVo);
				} else if (saveType == 3) {		//삭제
					//배치 프로그램에서 해당서버를 사용하고 있다면 삭제처리를 못하게 막아야 함
					BaBatPgmVo baBatPgmVo = new BaBatPgmVo();
					baBatPgmVo.setBatServerSeq(baBatSvrVo.getBatServerSeq());
					
					List<BaBatPgmVo> pgmList = coreBaBatPgmService.inqBatPgmSearchList(baBatPgmVo);
					
					if(pgmList == null || pgmList.size() == 0){		//해당 배치를 사용하는 배치 프로그램이 존재하지 않는다면
						statMsg = "삭제";
						tranCnt = boBaBatSvrDao.deleteBatSvr(baBatSvrVo);
					}
					else if(pgmList.size() > 0){					//배치 프로그램이 존재한다면
						tranCnt = 1;
					}
				}
				baBatSvrVo.setStatMsg(statMsg);
				baBatSvrVo.setTranCnt(tranCnt);
				rtnBatSvrList.add(baBatSvrVo);
			}
			
			if( tranCnt == 0 ) throw new MessageException(-100, "서버 목록 " + statMsg +" 에 실패했습니다.");
		}
		catch ( MessageException e ) {
			if( e.getCode() == -100 ) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
			}
			throw e;
		}
	
		return rtnBatSvrList;
	}
	
	@Override
	public BaBatSvrVo batSvrBatSvrUpdt(BaBatSvrVo baBatSvrVo) throws Exception {
		BaBatSvrVo rtnBaBatSvrVo = new BaBatSvrVo();
		
		try {
			//URL 세팅
			/*HttpHeaders headers = new HttpHeaders();
			headers.setContentType(MediaType.APPLICATION_JSON_UTF8);
			String url = baBatSvrVo.getPrtclCd() + "://" + baBatSvrVo.getIpAddr() + ":" + baBatSvrVo.getPort() + "/ba/bat-adm/updt-bat-svr.do";
			Map<String, Object> params = new HashMap<>();
			params.put("batServerSeq", baBatSvrVo.getBatServerSeq());
			
			//배치 서버의 배치 프로그램 조회 Api 호출
			String response = coreBaBatPgmService.sendApi(url, headers, params);
			
			if (response == null) {
				logger.error(baBatSvrVo.getServerNm() + "배치 서버 정보가 DB에 등록되었으나 " + baBatSvrVo.getServerNm() + "에 서버에 서버 정보가 죄회되지 않습니다.");
				rtnBaBatSvrVo.setStatCode(BaBatStat.SERVER_ERROR);
				rtnBaBatSvrVo.setStatMsg("등록실패");
				//throw new MessageException(-100, baBatSvrVo.getServerNm() + "배치 서버 정보가 DB에 등록되었으나 " + baBatSvrVo.getServerNm() + "에 서버에 서버 정보가 죄회되지 않습니다.");
			} else {
				try {
					ObjectMapper objectMapper = new ObjectMapper();
					Map<String, Object> recvApiMap = objectMapper.readValue(response, Map.class);
					rtnBaBatSvrVo.setStatCode(recvApiMap.get("statCode").toString());
					rtnBaBatSvrVo.setStatMsg(recvApiMap.get("statMsg").toString());
					
				} catch (RuntimeException ex) {
					logger.error(ex.getMessage());
					//throw new MessageException(-100, "등록실패");
				}
				
			}*/
			
			BaBatSvrVo batSvrVo = new BaBatSvrVo();
			batSvrVo.setSvrChkYn("N");        //서버 상태체크 제외 옵션
			List<BaBatSvrVo> inqBatSvrList = coreBaBatSvrService.inqBatSvrList(batSvrVo);
			if (inqBatSvrList != null && inqBatSvrList.size() > 0) {
				//현재 등록된 모든 배치서버의 static 배치서버 정보를 갱신 처리 진행(배치서버 정보가 배치프로그램에도 전달 되어야 하므로 모든 서버에 다 갱신처리 진행)
				for (BaBatSvrVo loopBatSvrVo : inqBatSvrList) {
					//URL 세팅
					HttpHeaders headers = new HttpHeaders();
					headers.setContentType(MediaType.APPLICATION_JSON_UTF8);
					String url = loopBatSvrVo.getPrtclCd() + "://" + loopBatSvrVo.getIpAddr() + ":" + loopBatSvrVo.getPort() + "/ba/bat-adm/updt-bat-svr.do";
					Map<String, Object> params = new HashMap<>();
					params.put("batServerSeq", loopBatSvrVo.getBatServerSeq());
					
					//배치 서버의 배치 프로그램 조회 Api 호출
					String response = coreBaBatPgmService.sendApi(url, headers, params);
					//Map<String, Object> callRestApiRtnMap = coreBaBatSvrService.callRestApi(url, headers, params);
					
					if(baBatSvrVo.getBatServerSeq() == loopBatSvrVo.getBatServerSeq()) {
						if (response == null) {
							logger.error(loopBatSvrVo.getServerNm() + "배치 서버 정보가 DB에 등록되었으나 " + loopBatSvrVo.getServerNm() + "에 서버에 서버 정보가 조회되지 않습니다.");
							rtnBaBatSvrVo.setStatCode(BaBatStat.SERVER_ERROR);
							rtnBaBatSvrVo.setStatMsg(loopBatSvrVo.getServerNm() + "배치 서버 정보가 DB에 등록되었으나 " + loopBatSvrVo.getServerNm() + "에 서버에 서버 정보가 조회되지 않습니다.");
							//throw new MessageException(-100, loopBatSvrVo.getServerNm() + "배치 서버 정보가 DB에 등록되었으나 " + loopBatSvrVo.getServerNm() + "에 서버에 서버 정보가 죄회되지 않습니다.");
						} else {
							try {
								ObjectMapper objectMapper = new ObjectMapper();
								Map<String, Object> recvApiMap = objectMapper.readValue(response, Map.class);
								//String body = callRestApiRtnMap.get("body").toString();
								
								rtnBaBatSvrVo.setStatCode(recvApiMap.get("statCode").toString());
								rtnBaBatSvrVo.setStatMsg(recvApiMap.get("statMsg").toString());
								
							} catch (RuntimeException ex) {
								logger.error(ex.getMessage());
								//throw new MessageException(-100, "등록실패");
							}
							
						}
					}
				}
			}
		}
		catch (MessageException e){
			if( e.getCode() == -1 || e.getCode() == -100 ) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
				rtnBaBatSvrVo.setTranCnt(0);
				rtnBaBatSvrVo.setStatCode(String.valueOf(e.getCode()));
				rtnBaBatSvrVo.setStatMsg(e.getMessage());
				return rtnBaBatSvrVo;
			} else {
				throw e;
			}
		}
	
		return rtnBaBatSvrVo;
	}
}
