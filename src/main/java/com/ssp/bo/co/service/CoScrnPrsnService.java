package com.ssp.bo.co.service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title 공통 컨트롤러
 * @package com.ssp.core.co.service
 * </pre>
 * @author lee
 * @since 2022. 01. 18.
 * @version 1.0
 * @see CoMnuMngService
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2017. 11. 8.		lee	최초작성
 */
public interface CoScrnPrsnService {
    /** 개인화 목록 조회 */
    List<Map<String, Object>> selectScrnPrsnList(Map<String, String> commandMap) throws Exception;

    /** 개인화 저장 */
    NexacroResult saveScrnPrsn(List<Map<String, Object>> commandMapList) throws Exception;

}
