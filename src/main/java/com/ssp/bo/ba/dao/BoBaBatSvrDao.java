package com.ssp.bo.ba.dao;

import com.ssp.core.ba.vo.BaBatSvrVo;

/**
 * <pre>
 * @title
 * @desc
 * @package com.ssp.bo.ba.dao
 * <pre>    BaBatSvrDao
 * @author spect22
 * @since 2022-12-19
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022. 12. 19.		spect22	최초작성
 */

public interface BoBaBatSvrDao {

	/** 배치서버 등록 interface */
	int insertBatSvr(BaBatSvrVo baBatSvrVo) throws Exception;
	
	/** 배치서버 갱신 interface */
	int updateBatSvr(BaBatSvrVo baBatSvrVo) throws Exception;
	
	/** 배치서버 삭제 interface */
	int deleteBatSvr(BaBatSvrVo baBatSvrVo) throws Exception;
}
