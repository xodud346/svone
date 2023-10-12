package com.ssp.bo.co.dao;

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
 * @see CoMnuMngDao
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2017. 11. 8.		lee	최초작성
 */
public interface CoScrnPrsnDao {   
    /** 개인화 리스트 조회 */
    List<Map<String, Object>> selectScrnPrsnList(Map<String, String> searchMap);
    

    /** 개인화 등록  Dao interface */
    int insertScrnPrsn(Map<String, Object> saveMap) throws Exception;

    /** 개인화 수정  Dao interface */
    int updateScrnPrsn(Map<String, Object> saveMap) throws Exception;

    /** 개인화 삭제  Dao interface */
    int deleteScrnPrsn(Map<String, Object> saveMap) throws Exception;
}
