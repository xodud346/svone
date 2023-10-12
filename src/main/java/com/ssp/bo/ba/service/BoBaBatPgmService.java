package com.ssp.bo.ba.service;

import com.ssp.bo.cc.CCUtils;
import com.ssp.core.ba.vo.BaBatPgmVo;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.bo.ba.service
 * <pre>    BaBatPgmService
 * @author  spect22
 * @since   2022-12-15
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022. 12. 15.		spect22	최초작성
 */
 
public interface BoBaBatPgmService {

	/** 배치프로그램 ID 중복확인 interface */
	BaBatPgmVo selectBatPgm(BaBatPgmVo baBatPgmVo) throws Exception;
	
	/** 배치프로그램 등록 interface */
	BaBatPgmVo insertBatPgm(BaBatPgmVo baBatPgmVo, CCUtils ccUtils) throws Exception;
	
	/** 배치프로그램 갱신 interface */
	BaBatPgmVo updateBatPgm(BaBatPgmVo baBatPgmVo, CCUtils ccUtils) throws Exception;
	
	/** 배치서버 배치프로그램목록(static) 갱신 interface */
	BaBatPgmVo batSvrBatPgmUpdt(BaBatPgmVo baBatPgmVo) throws Exception;
	
	/** 배치프로그램 삭제 interface */
	BaBatPgmVo deleteBatPgm(BaBatPgmVo baBatPgmVo) throws Exception;
	
	/** 배치프로그램 실행 interface */
	BaBatPgmVo runBatPgm(BaBatPgmVo baBatPgmVo) throws Exception;
	
	/** 배치프로그램 강제종료 interface */
	BaBatPgmVo endBatPgm(BaBatPgmVo baBatPgmVo) throws Exception;
}

