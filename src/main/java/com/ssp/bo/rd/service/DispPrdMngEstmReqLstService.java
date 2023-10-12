/*------------------------------------------------------------------------------
 * NAME : DispPrdMngEstmReqLstService.java
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
package com.ssp.bo.rd.service;

import com.ssp.bo.od.OdOrderComm;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 *
 * @title   DispPrdMngEstmReqLstService
 * @@desc   전시상품관리 견적요청 Service
 * @package com.ssp.bo.rd.service
 * <pre>
 * @author
 * @since 2022.04.28
 * @version 1.0
 * 날짜			변경자		내용 
 * ------------------------------------------------ 
 * 2022.04.28			       최초작성n */
public interface DispPrdMngEstmReqLstService {

    /**
     * <pre>
     * 1. MethodName : selectProductEstimateCount
     * 2. ClassName  : PrProductEstimateService.java
     * 3. Comment    : 견적요청 카운트 조회
     * 4. 작성자       : 윤주영
     * 5. 작성일       : 2021.9. 06.
     * </pre>
     *
     * @param param
     * @return
     * @throws Exception
     */
    int selectProductEstimateCount(Map<String, Object> param, OdOrderComm odOrder) throws Exception;

    /**
     * <pre>
     * 1. MethodName : selectProductEstimateList
     * 2. ClassName  : PrProductEstimateService.java
     * 3. Comment    : 견적요청 조회
     * 4. 작성자       : 윤주영
     * 5. 작성일       : 2021.9. 06.
     * </pre>
     *
     * @param param
     * @return
     * @throws Exception
     */
    List<Map<String, Object>> selectProductEstimateList(Map<String, Object> param, OdOrderComm odOrder) throws Exception;

    /**
     * <pre>
     * 1. MethodName : selectProductEstimateCount
     * 2. ClassName  : PrProductEstimateService.java
     * 3. Comment    : 견적요청 상세 조회
     * 4. 작성자       : 윤주영
     * 5. 작성일       : 2021.9. 06.
     * </pre>
     *
     * @param param
     * @return
     * @throws Exception
     */
    Map<String, String> selectProductEstimateDetail(Map<String, Object> param) throws Exception;

    /**
     * <pre>
     * 1. MethodName : selectNewProductDetail
     * 2. ClassName  : PrProductEstimateService.java
     * 3. Comment    : 견적요청 상세 조회
     * 4. 작성자       : 김재흥
     * 5. 작성일       : 2023.08. 07.
     * </pre>
     *
     * @param param
     * @return
     * @throws Exception
     */
    Map<String, String> selectNewProductDetail(Map<String, Object> param) throws Exception;

    /**
     * <pre>
     * 1. MethodName : selectProductEstimateOption
     * 2. ClassName  : PrProductEstimateService.java
     * 3. Comment    : 견적요청 옵션 조회
     * 4. 작성자       : 윤주영
     * 5. 작성일       : 2021.9. 06.
     * </pre>
     *
     * @param param
     * @return
     * @throws Exception
     */
    List<Map<String, String>> selectProductEstimateOption(Map<String, Object> param) throws Exception;

    /**
     * <pre>
     * 1. MethodName : selectNewProductOption
     * 2. ClassName  : PrProductEstimateService.java
     * 3. Comment    : 견적요청 옵션 조회
     * 4. 작성자       : 김재흥
     * 5. 작성일       : 2023.08.08
     * </pre>
     *
     * @param param
     * @return
     * @throws Exception
     */
    List<Map<String, String>> selectNewProductOption(Map<String, Object> param) throws Exception;

    /**
     * <pre>
     * 1. MethodName : selectProductEstimateAddOption
     * 2. ClassName  : PrProductEstimateService.java
     * 3. Comment    : 견적요청 추가옵션 조회
     * 4. 작성자       : 윤주영
     * 5. 작성일       : 2021.9. 06.
     * </pre>
     *
     * @param param
     * @return
     * @throws Exception
     */
    List<Map<String, String>> selectProductEstimateAddOption(Map<String, Object> param) throws Exception;

    /**
     * <pre>
     * 1. MethodName : selectProductEstimateHistory
     * 2. ClassName  : PrProductEstimateService.java
     * 3. Comment    : 견적요청 히스토리 조회
     * 4. 작성자       : 윤주영
     * 5. 작성일       : 2021.9. 06.
     * </pre>
     *
     * @param param
     * @return
     * @throws Exception
     */
    List<Map<String, String>> selectProductEstimateHistory(Map<String, Object> param) throws Exception;

    /**
     * <pre>
     * 1. MethodName : insertProductEstimateStatusList
     * 2. ClassName  : PrProductEstimateService.java
     * 3. Comment    : 견적요청 접수
     * 4. 작성자       : 윤주영
     * 5. 작성일       : 2021.9. 06.
     * </pre>
     *
     * @param list
     * @param op
     * @param addOp
     * @param userInfo
     * @return
     * @throws Exception
     */
    int insertProductEstimateStatusList(List<Map<String, Object>> list
            , List<Map<String, Object>> op
            , List<Map<String, Object>> addOp
            , Map<String, Object> userInfo) throws Exception;

    /**
     * <pre>
     * 1. MethodName : insertProductEstimateStatus
     * 2. ClassName  : PrProductEstimateService.java
     * 3. Comment    : 견적요청 상태 등록
     * 4. 작성자       : 윤주영
     * 5. 작성일       : 2021.9. 06.
     * </pre>
     *
     * @param param
     * @return
     * @throws Exception
     */
    Map insertProductEstimateStatus(Map<String, Object> param) throws Exception;

    /**
     * <pre>
     * 1. MethodName : sendNewProductReqPI
     * 2. ClassName  : PrProductEstimateService.java
     * 3. Comment    : 상품등록 PI 요청
     * 4. 작성자       : 윤주영
     * 5. 작성일       : 2021.9. 06.
     * </pre>
     *
     * @param commandMap
     * @return
     * @throws Exception
     */
    //public void sendNewProductReqPI(Map<String, Object> param) throws Exception;

    /**
     * <pre>
     * 1. MethodName : deleteProductEstimateLayoutReset
     * 2. ClassName  : PrProductEstimateService.java
     * 3. Comment    : 레이아웃 초기화
     * 4. 작성자       : 윤주영
     * 5. 작성일       : 2021.9. 06.
     * </pre>
     *
     * @param param
     * @return
     * @throws Exception
     */
    int deleteProductEstimateLayoutReset(Map<String, Object> param) throws Exception;

    /**
     * <pre>
     * 1. MethodName : estmProcCompleteSendMail
     * 2. ClassName  : PrProductEstimateService.java
     * 3. Comment    : 견적처리완료 이메일 발송
     * 4. 작성자       : 김명기
     * 5. 작성일       : 2023.1. 16.
     * </pre>
     *
     * @param param
     * @return
     * @throws Exception
     */
    void estmProcCompleteSendMail(Map<String, Object> param) throws Exception;

    /**
     * <pre>
     * 1. MethodName : saveRndDispEstmAddOptions
     * 2. ClassName  : PrProductEstimateService.java
     * 3. Comment    : 견적요청 추가정보 등록
     * 4. 작성자       : 김재흥
     * 5. 작성일       : 2023.08.08
     * </pre>
     *
     * @param param
     * @return
     * @throws Exception
     */
    void saveRndDispEstmAddOptions(Map<String, Object> param) throws Exception;

    Map<String, Object> selectReqProcStat(Map<String, Object> param) throws Exception;
}