package com.ssp.bo.co.service.impl;

import java.util.List;
import java.util.Map;
import java.util.Objects;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.co.dao.CoSmsSendHstDao;
import com.ssp.bo.co.service.CoSmsSendHstService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title  공통 서비스
 * @package com.ssp.core.co.service.impl
 * </pre>
 * @author lee
 * @since 2023. 06. 02.
 * @version 1.0
 * @see CoSmsSendHstServiceImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2023.06.02.	이상민	최초작성
 */
@Service("coSmsSendHstService")
public class CoSmsSendHstServiceImpl implements CoSmsSendHstService {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private CoSmsSendHstDao coSmsSendHstDao;
    
    /**
    *
    * <pre>
    * 1. MethodName 	: selectSmsSendHstListCount
    * 2. ClassName 		: CoSmsSendHstServiceImpl
    * 3. Comment 		: SMS발송이력조회 데이터 카운트
    * 4. 작성자 			: 이상민
    * 5. 작성일 			: 2023-06-02
    * </pre>
    *
    * @param searchMap Map
    * @return Int
    * @throws Exception exception
    */
	public int selectSmsSendHstListCount(Map<String, Object> searchMap) throws Exception{
       return coSmsSendHstDao.selectSmsSendHstListCount(searchMap);
   }
	
    /**
     *
     * <pre>
     * 1. MethodName 	: selectSmsSendHstList
     * 2. ClassName 	: CoSmsSendHstServiceImpl
     * 3. Comment 		: SMS발송이력조회
     * 4. 작성자 			: 이상민
     * 5. 작성일 			: 2023-06-02
     * </pre>
     *
     * @param searchMap Map
     * @return List
     * @throws Exception exception
     */
	public List<Map<String,Object>> selectSmsSendHstList(Map<String,Object> searchMap) throws Exception{
        return coSmsSendHstDao.selectSmsSendHstList(searchMap);
	}
}
