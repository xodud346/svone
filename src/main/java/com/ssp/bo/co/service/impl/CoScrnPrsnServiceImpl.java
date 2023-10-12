package com.ssp.bo.co.service.impl;

import java.util.List;
import java.util.Map;
import java.util.Objects;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.co.dao.CoScrnPrsnDao;
import com.ssp.bo.co.service.CoScrnPrsnService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title  공통 서비스
 * @package com.ssp.core.co.service.impl
 * </pre>
 * @author lee
 * @since 2022. 01. 18.
 * @version 1.0
 * @see CoMnuMngServiceImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2017. 11. 8.		lee	최초작성
 */
@Service("coScrnPrsnService")
public class CoScrnPrsnServiceImpl implements CoScrnPrsnService {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private CoScrnPrsnDao coScrnPrsnDao;

    /**
     *
     * <pre>
     * 1. MethodName : selectScrnPrsnList
     * 2. ClassName : CoCommonServiceImpl
     * 3. Comment : 개인화 조회
     * 4. 작성자 : ksy
     * 5. 작성일 : 2022-02-17
     * </pre>
     *
     * @param searchMap Map
     * @return List
     * @throws Exception exception
     */
	public List<Map<String,Object>> selectScrnPrsnList(Map<String,String> searchMap) throws Exception{
        return coScrnPrsnDao.selectScrnPrsnList(searchMap);
    }

    /**
     * 개인화 저장
     * @param commandMapList List<Map<String, Object>>
     * @return NexacroResult
     * @throws Exception exception
     */
    @Override
    public NexacroResult saveScrnPrsn(List<Map<String, Object>> commandMapList) throws Exception {
        NexacroResult result = new NexacroResult();

        // 개인화 저장
        for( Map<String, Object> data : commandMapList ) {
            int saveType = StringUtil.getInt(data.get("DataSetRowType"));
            int rtn = 0;
            
            Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);

            if(requiredCheck(saveMap)) {
                switch(saveType) {
                    case 1: rtn = coScrnPrsnDao.insertScrnPrsn(saveMap); break;  // 신규
                    case 2: rtn = coScrnPrsnDao.updateScrnPrsn(saveMap); break;  // 수정
                    case 3: rtn = coScrnPrsnDao.deleteScrnPrsn(saveMap); break;  // 삭제
                }
            }

            if( rtn <= 0 ) throw new Exception(getErrorMsg(saveMap));
        }

        return result;
    }

    private boolean requiredCheck(Map<String, Object> map) {
        if(Objects.isNull(map)
                || Objects.isNull(map.get("DataSetRowType")) || Objects.isNull(map.get("oprtrId"))
                || Objects.isNull(map.get("mnuSeq")) || Objects.isNull(map.get("gridNm"))) {
            logger.error(getErrorMsg(map));
            return false;
        }
        return true;
    }

    private String getErrorMsg(Map<String, Object> map) {
        if(Objects.isNull(map)) {
            return "레이아웃 저장/초기화 실패 ::: parameter is null";
        }
        return String.format("레이아웃 저장/초기화 실패 ::: dataSetRowType : {%s} / oprtrId : {%s} / mnuSeq : {%s} / gridNm : {%s} / mnuNm : {%s} / pgmPath : {%s}"
                , map.get("DataSetRowType")
                , map.get("oprtrId")
                , map.get("mnuSeq")
                , map.get("gridNm")
                , map.get("mnuNm")
                , map.get("pgmPath")
        );
    }
}
