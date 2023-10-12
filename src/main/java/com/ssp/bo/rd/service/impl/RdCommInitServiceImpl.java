package com.ssp.bo.rd.service.impl;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.StringTokenizer;
import java.util.Vector;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.rd.dao.RdCommInitDao;
import com.ssp.bo.rd.service.RdCommInitService;

/**
 * <pre>
 * &#64;title  R&D공통모듈
 * &#64;desc   R&D공통모듈 Implementation
 * &#64;package com.ssp.bo.rd.service.impl
 * </pre>
 *
 * @author
 * @since 2022. 04. 14
 * @version 1.0
 * @see =================== 변경 내역 ================== 날짜 변경자 내용
 *      ------------------------------------------------ 2022.04.14 최초작성
 */
@Service("rdCommInitService")
public class RdCommInitServiceImpl implements RdCommInitService {
	@Resource(name = "rdCommInitDao")
	private RdCommInitDao rdCommInitDao;

	/**
	 *
	 * <pre>
	 * 1. MethodName : selectCommInitList
	 * 2. ClassName  : RdCommInitServiceImpl
	 * 3. Comment    : R&D공통모듈
	 * 4. 작성자     :
	 * 5. 작성일     : 2022.04.14
	 * </pre>
	 *
	 * @param searchMap
	 * @return
	 * @throws Exception
	 */
	@Override
	public NexacroResult selectCommInitList(Map<String,Object> inMap) throws Exception {
    	NexacroResult result = new NexacroResult();

		String dataSet    = inMap.get("dsDataSet").toString();  // 전체데이타셋"dsUseYn|dsGUseYn|dsPrefix|dsGPrefix"
		String commLgcd   = inMap.get("commLgCode").toString(); // 공통코드 "000002|000002|000008|000008"
		String commHipoFg = inMap.get("commHipoFg").toString(); // 콤보 초기 셋팅 (T:전체, S:선택, N:공백, X:해당사항없음)
		String language   = inMap.get("language").toString();   // 다국어시 언어를 셋팅시 사용(현재 사용 않함)

		StringTokenizer tokDataSet    = new StringTokenizer(dataSet,   "|");
		StringTokenizer tokCommLgcd   = new StringTokenizer(commLgcd,  "|");
		StringTokenizer tokCommHipoFg = new StringTokenizer(commHipoFg,"|");

		int iDataSet = tokDataSet.countTokens(); // DataSet
		Vector vtDataSet = new Vector();
		for (int idx = 0; idx < iDataSet; idx++) {
			vtDataSet.addElement(tokDataSet.nextToken());
		}

		int iCommLgcd = tokCommLgcd.countTokens(); // 공통코드
		Vector vtCommLgcd = new Vector();
		for (int idx = 0; idx < iCommLgcd; idx++) {
			vtCommLgcd.addElement(tokCommLgcd.nextToken());
		}

		int iCommHipoFg = tokCommHipoFg.countTokens(); // 콤보 초기 셋팅
		Vector vtCommHipoFg = new Vector();
		for (int idx = 0; idx < iCommHipoFg; idx++) {
			vtCommHipoFg.addElement(tokCommHipoFg.nextToken());
		}

		if (iCommLgcd > 0) {
			HashMap<String, Object> map = new HashMap<String, Object>();

			for (int i = 0; i < vtCommLgcd.size(); i++)	{
				map.put("code",  vtCommLgcd.get(i).toString()); // 실제공통코드 조회조건.
				map.put("langCd",language);                     // 언어

				List<Map> records = new ArrayList<Map>();

				if (vtCommHipoFg.get(i).toString().trim().equals("T")) {
					records = rdCommInitDao.selectCommInitListT(map);

				} else if (vtCommHipoFg.get(i).toString().trim().equals("S")) {
					records = rdCommInitDao.selectCommInitListS(map);

				} else if (vtCommHipoFg.get(i).toString().trim().equals("N")) {
					records = rdCommInitDao.selectCommInitListN(map);

				} else	{
					records = rdCommInitDao.selectCommInitListX(map);
				}

				String getDataSet = vtDataSet.get(i).toString();
		        result.addDataSet(getDataSet, records);
			}
		}

        return result;
    }

    /**
     * RND상품권한조회(selectRndPrdAuthInq)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectRndPrdAuthInq(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        // RND상품권한조회
        List<Map> records1 = rdCommInitDao.selectRndPrdAuthInq(searchMap);

        result.addDataSet("ds_rndPrdAuth",records1);

        return result;
    }
}
