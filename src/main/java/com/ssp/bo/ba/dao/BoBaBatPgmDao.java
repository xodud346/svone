package com.ssp.bo.ba.dao;

import com.ssp.core.ba.vo.BaBatPgmVo;

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

public interface BoBaBatPgmDao {
	/** 배치프로그램 ID 중복확인 */
	BaBatPgmVo selectBatPgm(BaBatPgmVo baBatPgmVo) throws Exception;

	/** 배치프로그램 등록 */
	int insertBatPgm(BaBatPgmVo baBatPgmVo) throws Exception;
	
	/** 배치프로그램 갱신 */
	int updateBatPgm(BaBatPgmVo baBatPgmVo) throws Exception;
	
	/** 배치프로그램 삭제 */
	int deleteBatPgm(BaBatPgmVo baBatPgmVo) throws Exception;
}
