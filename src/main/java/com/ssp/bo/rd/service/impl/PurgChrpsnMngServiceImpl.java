/*------------------------------------------------------------------------------
 * NAME : PurgChrpsnMngServiceImpl.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.04.28  newwhite7
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import com.nexacro.uiadapter17.spring.core.data.DataSetRowTypeAccessor;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;
import com.ssp.bo.rd.dao.PurgChrpsnMngDao;
import com.ssp.bo.rd.service.PurgChrpsnMngService;
import com.ssp.bo.rd.util.StringUtils;
import com.ssp.core.co.util.CommUtil;
import com.ssp.core.common.exception.MessageException;
import com.ssp.core.legacy.mall.model.Admin;
import com.ssp.core.util.ObjectUtils;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 *
 * @title   PurgChrpsnMngServiceImpl
 * @@desc   구매담당자 관리 ServiceImpl
 * @package com.ssp.bo.rd.service.impl
 * <pre>
 * @author
 * @since 2022.04.28
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.04.28			       최초작성
 */
@Service("purgChrpsnMngService")
public class PurgChrpsnMngServiceImpl implements PurgChrpsnMngService {

    @Resource(name = "purgChrpsnMngDao")
    private PurgChrpsnMngDao purgChrpsnMngDao;

    /**
     * 구매담당자 관리 리스트 조회(selectPurgChrpsnMng)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectPurgChrpsnMng(Map<String, Object> searchMap, HttpSession session) throws Exception {

        NexacroResult result = new NexacroResult();

        searchMap.put("SES_ID", session.getId());
        int totalCount    = purgChrpsnMngDao.selectPurgChrpsnMngCount(searchMap);
        List<Map> records = purgChrpsnMngDao.selectPurgChrpsnMng(searchMap);

        result.addDataSet("ds_master",  records);
        result.addVariable("totalCount",totalCount);

        return result;
    }


	/**
	 * 구매담당자 상세 조회(selectPurgChrpsnMngDtl)
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult selectPurgChrpsnMngDtl(Map<String, Object> searchMap) throws Exception {
		NexacroResult result = new NexacroResult();

		List<Map> records = purgChrpsnMngDao.selectPurgChrpsnMngDtl(searchMap);
		result.addDataSet("ds_master", records);

		return result;
	}


	/**
	 * R&D 구매 담당자 수정
	 *
	 * @param searchMap
	 * @param saveMap
	 * @param userInfo
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult updatePurgChrpsnMng(
		Map<String, Object> searchMap
		, List<Map<String, Object>> saveMap
		, Map<String, Object> userInfo
	) throws Exception {
		NexacroResult result = new NexacroResult();

		int uCnt = 0;
		int rowType;
		String recordPKeyValue = "";

		try {
			if (saveMap.size() > 0) {
				for (int i = 0; i < saveMap.size(); i++) {
					Map<String, Object> saveData = saveMap.get(i);

					rowType = Integer.parseInt(String.valueOf(saveData.get(DataSetRowTypeAccessor.NAME)));

					if (rowType == DataSet.ROW_TYPE_UPDATED) {
						String mngSpr = StringUtil.getString(saveData.get("PRD_CLSF_CHRPSN_SPR_CD"));
						String psnId = StringUtil.getString(saveData.get("PRD_CLSF_CHRPSN_ID"));
						String oldPsnId = StringUtil.getString(saveData.get("OLD_PRD_CLSF_CHRPSN_ID"));
						String useYn = StringUtil.getString(saveData.get("PRD_CLSF_CHRPSN_USEYN"));
						String oldUseYn = StringUtil.getString(saveData.get("OLD_PRD_CLSF_CHRPSN_USEYN"));

						if (!psnId.equals(oldPsnId)) {
							saveData.put("CHK_PSN_ID", oldPsnId);
						}

						// 정담당자 등록시만 체크
						if (mngSpr.equals("10")) {
							if (
								(useYn.equals("Y") && !useYn.equals(oldUseYn))
								|| useYn.equals("Y")
								&& !psnId.equals(oldPsnId)
							) {
								int dupList = purgChrpsnMngDao.selectPurgChrpsnMngSprChk(saveData);

								if (dupList > 0) {
									throw new MessageException(-200, "");   // 정담당자는 1명만 등록 가능합니다.
								}
							}
						}

						saveData.put("SESSION_OPRTR_ID", StringUtil.getString(userInfo.get("OPRTR_ID")));

						uCnt = purgChrpsnMngDao.updatePurgChrpsnMng(saveData);
					}

					recordPKeyValue =
						StringUtil.getString(saveData.get("CO_CD"))
						+ "|"
						+ StringUtil.getString(saveData.get("PRD_CLSF_CHRPSN_ID"))
						+ "|"
						+ StringUtil.getString(saveData.get("PRD_CLCD"))
						+ "|"
						+ StringUtil.getString(saveData.get("MNFR_NO"));
				}
			}
		} catch (MessageException e) {
			if (e.getCode() == -200) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
				result.setErrorCode(e.getCode());
				result.setErrorMsg(e.getMessage());

				return result;
			} else {
				throw e;
			}
		}

		result.addVariable("strKeyValue", recordPKeyValue);

		return result;
	}


	/**
	 * 구매담당자 등록
	 *
	 * @param saveMap
	 * @param userInfo
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult insertPurgChrpsnMng(List<Map<String, Object>> saveMap, Map<String, Object> userInfo) throws Exception {
		NexacroResult result = new NexacroResult();
		String recordPKeyValue = "";
		int iCnt = 0;
		int rowType;

		try {
			if (saveMap.size() > 0) {
				for (int i = 0; i < saveMap.size(); i++) {
					Map<String, Object> saveData = saveMap.get(i);
					rowType = Integer.parseInt(String.valueOf(saveData.get(DataSetRowTypeAccessor.NAME)));

					if (rowType == DataSet.ROW_TYPE_INSERTED) {
						int dupList = purgChrpsnMngDao.selectPurgChrpsnMngDupl(saveData);

						if (dupList > 0) {
							// 이미 등록되어 있는 담당자 입니다.
							throw new MessageException(-200, "");
						}

						/*String mngSpr = StringUtil.getString(saveData.get("PRD_CLSF_CHRPSN_SPR_CD"));
						// 정담당자 등록시만 체크
						if (mngSpr.equals("10")) {
							dupList = purgChrpsnMngDao.selectPurgChrpsnMngSprChk(saveData);
							if (dupList > 0) {
								throw new MessageException(-300, "");        //정담당자는 1명만 등록 가능합니다.
							}
						}*/

						saveData.put("SESSION_OPRTR_ID", StringUtil.getString(userInfo.get("OPRTR_ID")));

						iCnt = purgChrpsnMngDao.insertPurgChrpsnMng(saveData);
					}
					recordPKeyValue =
						StringUtil.getString(saveData.get("CO_CD"))
						+ "|"
						+ StringUtil.getString(saveData.get("PRD_CLSF_CHRPSN_ID"))
						+ "|"
						+ StringUtil.getString(saveData.get("PRD_CLCD"))
						+ "|"
						+ StringUtil.getString(saveData.get("MNFR_NO"));
				}
			}
		} catch (MessageException e) {
			if (e.getCode() == -200 || e.getCode() == -300) {
				TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.
				result.setErrorCode(e.getCode());
				result.setErrorMsg(e.getMessage());

				return result;
			} else {
				throw e;
			}
		}

		result.addVariable("strKeyValue", recordPKeyValue);

		return result;
	}


	/**
     * 신규 저장 코드체크여부 조회(selectCodeChkYn)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectCodeChkYn(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        List<Map> records = purgChrpsnMngDao.selectCodeChkYn(searchMap);

        result.addDataSet("ds_codeChkYn",  records);

        return result;
    }

    /**
     * 수정 코드체크여부 조회(selectUpCodeChkYn)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectUpCodeChkYn(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        List<Map> records = purgChrpsnMngDao.selectUpCodeChkYn(searchMap);

        result.addDataSet("ds_codeChkYn",  records);

        return result;
    }


}