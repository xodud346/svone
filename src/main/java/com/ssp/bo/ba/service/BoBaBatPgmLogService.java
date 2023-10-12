package com.ssp.bo.ba.service;

import com.ssp.core.ba.vo.BaBatPgmLogVo;

import java.util.List;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.bo.ba.service
 * <pre>    BaBatPgmLogService
 * @author  spect22
 * @since   2022-12-28
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022. 12. 28.		spect22	최초작성
 */
 
public interface BoBaBatPgmLogService {

	/** 배치프로그램 실행이력 조회 서비스 interface */
	List<BaBatPgmLogVo> inqBatPgmLogList(BaBatPgmLogVo baBatPgmLogVo) throws Exception;
	
	/** 배치프로그램 실행이력 카운트 서비스 interface */
	int inqBatPgmLogListCount(BaBatPgmLogVo baBatPgmLogVo) throws Exception;
}

