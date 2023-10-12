package com.ssp.bo.ba.service;

import com.ssp.core.ba.vo.BaBatSvrVo;

import java.util.List;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.bo.ba.service
 * <pre>    BaBatSvrService
 * @author  spect22
 * @since   2022-12-19
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022. 12. 19.		spect22	최초작성
 */
 
public interface BoBaBatSvrService {

	/** 배치서버 목록 저장 interface */
	List<BaBatSvrVo> saveBatSvrStatList(List<BaBatSvrVo> baBatSvrVoList) throws Exception;
	
	/** 배치서버 배치서버목록(static) 갱신 interface */
	BaBatSvrVo batSvrBatSvrUpdt(BaBatSvrVo baBatSvrVo) throws Exception;
}

