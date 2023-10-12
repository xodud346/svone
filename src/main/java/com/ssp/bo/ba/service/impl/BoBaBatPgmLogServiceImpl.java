package com.ssp.bo.ba.service.impl;

import com.ssp.bo.ba.dao.BoBaBatPgmLogDao;
import com.ssp.bo.ba.service.BoBaBatPgmLogService;
import com.ssp.core.ba.vo.BaBatPgmLogVo;
import com.ssp.core.util.StringUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ssp.core.co.util.ConvertUtil;

import java.util.List;

@Service("boBaBatPgmLogService")
public class BoBaBatPgmLogServiceImpl implements BoBaBatPgmLogService {

	@Autowired
	private BoBaBatPgmLogDao boBaBatPgmLogDao;
	
	private Logger logger = LoggerFactory.getLogger(this.getClass());

	/**
	 *
	 * <pre>
	 * 1. MethodName : inqBatPgmLogList
	 * 2. ClassName : BaBatPgmLogServiceImpl
	 * 3. Comment : 배치프로그램 실행이력 조회
	 * 4. 작성자 : spect22
	 * 5. 작성일 : 2022-12-28
	 * </pre>
	 *
	 * @param baBatPgmLogVo
	 * @return List<BaBatPgmLogVo>
	 */
	@Override
	public List<BaBatPgmLogVo> inqBatPgmLogList(BaBatPgmLogVo baBatPgmLogVo) throws Exception {
		if(StringUtil.isNotEmpty(baBatPgmLogVo.getSortColumn())) {
			String sortColumn = ConvertUtil.camelToSnake(baBatPgmLogVo.getSortColumn());
			baBatPgmLogVo.setSortColumn(sortColumn);
		}
		
		List<BaBatPgmLogVo> inqBatPgmLogList = boBaBatPgmLogDao.inqBatPgmLogList(baBatPgmLogVo);
		return inqBatPgmLogList;
	}
	
	@Override
	public int inqBatPgmLogListCount(BaBatPgmLogVo baBatPgmLogVo) throws Exception {
		return boBaBatPgmLogDao.inqBatPgmLogListCount(baBatPgmLogVo);
	}
}
