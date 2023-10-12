package com.ssp.bo.ba.service.impl;

import com.ssp.bo.ba.dao.BoBaBatPgmChgHstDao;
import com.ssp.bo.ba.service.BoBaBatPgmChgHstService;
import com.ssp.core.ba.vo.BaBatPgmChgHstVo;
import com.ssp.core.co.util.ConvertUtil;
import com.ssp.core.util.StringUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("boBaBatPgmChgHstService")
public class BoBaBatPgmChgHstServiceImpl implements BoBaBatPgmChgHstService {

	@Autowired
	private BoBaBatPgmChgHstDao boBaBatPgmChgHstDao;
	
	private Logger logger = LoggerFactory.getLogger(this.getClass());

	/**
	 *
	 * <pre>
	 * 1. MethodName : insertBatPgmChgHst
	 * 2. ClassName : BaBatPgmServiceImpl
	 * 3. Comment : 배치프로그램 변경이력 등록
	 * 4. 작성자 : spect22
	 * 5. 작성일 : 2023-02-09
	 * </pre>
	 *
	 * @param baBatPgmChgHstVo
	 * @return BaBatPgmChgHstVo
	 */
	@Override
	public BaBatPgmChgHstVo insertBatPgmChgHst(BaBatPgmChgHstVo baBatPgmChgHstVo) throws Exception {
		int insBatPgmChgHstCnt = boBaBatPgmChgHstDao.insertBatPgmChgHst(baBatPgmChgHstVo);
		
		BaBatPgmChgHstVo rtnBaBatPgmChgHstVo = new BaBatPgmChgHstVo();
		rtnBaBatPgmChgHstVo.setTransBatPgmChgHstCnt(insBatPgmChgHstCnt);
		
		return rtnBaBatPgmChgHstVo;
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : inqBatPgmChgHstList
	 * 2. ClassName : BaBatPgmServiceImpl
	 * 3. Comment : 배치프로그램 변경이력 리스트
	 * 4. 작성자 : spect22
	 * 5. 작성일 : 2023-02-16
	 * </pre>
	 *
	 * @param baBatPgmChgHstVo
	 * @return BaBatPgmChgHstVo
	 */
	@Override
	public List<BaBatPgmChgHstVo> inqBatPgmChgHstList(BaBatPgmChgHstVo baBatPgmChgHstVo) throws Exception {
		if(StringUtil.isNotEmpty(baBatPgmChgHstVo.getSortColumn())) {
			String sortColumn = ConvertUtil.camelToSnake(baBatPgmChgHstVo.getSortColumn());
			baBatPgmChgHstVo.setSortColumn(sortColumn);
		}
		
		List<BaBatPgmChgHstVo> inqBatPgmLogList = boBaBatPgmChgHstDao.inqBatPgmChgHstList(baBatPgmChgHstVo);
		return inqBatPgmLogList;
	}
	
	/**
	 *
	 * <pre>
	 * 1. MethodName : inqBatPgmChgHstListCount
	 * 2. ClassName : BaBatPgmServiceImpl
	 * 3. Comment : 배치프로그램 변경이력 리스트 카운트
	 * 4. 작성자 : spect22
	 * 5. 작성일 : 2023-02-16
	 * </pre>
	 *
	 * @param baBatPgmChgHstVo
	 * @return BaBatPgmChgHstVo
	 */
	@Override
	public int inqBatPgmChgHstListCount(BaBatPgmChgHstVo baBatPgmChgHstVo) throws Exception {
		return boBaBatPgmChgHstDao.inqBatPgmChgHstListCount(baBatPgmChgHstVo);
	}
	
	@Override
	public int findChgBatPgmChgHst(BaBatPgmChgHstVo baBatPgmChgHstVo) throws Exception {
		return boBaBatPgmChgHstDao.findChgBatPgmChgHst(baBatPgmChgHstVo);
	}
}
