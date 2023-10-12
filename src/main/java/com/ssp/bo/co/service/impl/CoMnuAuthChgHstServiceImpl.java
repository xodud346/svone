package com.ssp.bo.co.service.impl;

import java.util.List;
import java.util.Map;
import java.util.Objects;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.co.dao.CoMnuAuthChgHstDao;
import com.ssp.bo.co.service.CoMnuAuthChgHstService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title  공통 서비스
 * @package com.ssp.bo.co.service.impl
 * </pre>
 * @author lee
 * @since 2023. 07. 24.
 * @version 1.0
 * @see CoMnuAuthChgHstServiceImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2023.07.24.	이상민	최초작성
 */
@Service("CoMnuAuthChgHstService")
public class CoMnuAuthChgHstServiceImpl implements CoMnuAuthChgHstService {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private CoMnuAuthChgHstDao coMnuAuthChgHstDao;
    
    /**
    *
    * <pre>
    * 1. MethodName 	: selectMnuAuthChgHstListCount
    * 2. ClassName 		: CoMnuAuthChgHstServiceImpl
    * 3. Comment 		: 메뉴권한변경이력 데이터 카운트
    * 4. 작성자 			: 이상민
    * 5. 작성일 			: 2023-07-24
    * </pre>
    *
    * @param searchMap Map
    * @return Int
    * @throws Exception exception
    */
	public int selectMnuAuthChgHstListCount(Map<String, Object> searchMap) throws Exception{
       return coMnuAuthChgHstDao.selectMnuAuthChgHstListCount(searchMap);
   }
	
    /**
     *
     * <pre>
     * 1. MethodName 	: selectMnuAuthChgHstList
     * 2. ClassName 	: CoMnuAuthChgHstServiceImpl
     * 3. Comment 		: 메뉴권한변경이력조회
     * 4. 작성자 			: 이상민
     * 5. 작성일 			: 2023-07-24
     * </pre>
     *
     * @param searchMap Map
     * @return List
     * @throws Exception exception
     */
	public List<Map<String,Object>> selectMnuAuthChgHstList(Map<String,Object> searchMap) throws Exception{
        return coMnuAuthChgHstDao.selectMnuAuthChgHstList(searchMap);
	}
}
