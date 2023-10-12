package com.ssp.bo.ba.dao;

import com.ssp.core.ba.vo.BaBatPgmChgHstVo;

import java.util.List;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.bo.ba.dao
 * <pre>    BaBatPgmDao
 * @author spect22
 * @since 2022-12-15
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022. 12. 15.		spect22	최초작성
 */

public interface BoBaBatPgmChgHstDao {
	
	/** 배치프로그램 변경이력 등록 interface */
	int insertBatPgmChgHst(BaBatPgmChgHstVo baBatPgmChgHstVo) throws Exception;
	
	/** 배치프로그램 변경이력 리스트 interface */
	List<BaBatPgmChgHstVo> inqBatPgmChgHstList(BaBatPgmChgHstVo baBatPgmChgHstVo) throws Exception;
	
	/** 배치프로그램 변경이력 카운트 interface */
	int inqBatPgmChgHstListCount(BaBatPgmChgHstVo baBatPgmChgHstVo) throws Exception;
	
	/** 배치프로그램 변경점 확인 interface */
	int findChgBatPgmChgHst(BaBatPgmChgHstVo baBatPgmChgHstVo) throws Exception;
}
