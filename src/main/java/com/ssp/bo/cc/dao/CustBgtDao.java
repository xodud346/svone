package com.ssp.bo.cc.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title 예산
 * @desc
 * @package com.ssp.core.co.dao
 * @ClassName CustBgtDao
 * </pre>    
 * @author  차상영
 * @since   2022. 02. 11.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 
 */
public interface CustBgtDao {

    List<Map<String, Object>> selectBgtList(Map<String, Object> searchMap);
    
    List<Map<String, Object>> selectBgtCommonList(Map<String, Object> searchMap);
    
    List<Map<String, Object>> selectBgtTransMonthList(Map<String, Object> searchMap);

    void saveBgtTransMonthDtlFrom(Map<String, Object> map) throws Exception;
    
    void saveBgtTransMonthDtlTo(Map<String, Object> map) throws Exception;

    void saveBgtTransMonthHst(Map<String, Object> map) throws Exception;

    List<Map<String, Object>> selectBgtDeptMappList(Map<String, Object> searchMap);
 
    List<Map<String, Object>> selectBgtDeptMappListByAcct(Map<String, Object> searchMap);
    
    List<Map<String, Object>> selectBgtDeptMappListByCommonAcct(Map<String, Object> searchMap);
    
    void updateBgtMappDept(Map<String, Object> map) throws Exception;

    void updateBgtMappBgtUseHrnkAcct(Map<String, Object> map) throws Exception;
    
    Map<String, Object> selectQrtBgtUseYn(Map<String, Object> searchMap) throws Exception;
    
    Map<String, Object> selectBzplcQrtBgtUseYn(Map<String, Object> searchMap) throws Exception;
    
    List<Map<String, Object>> selectBgtDeptDtlMappListByDept(Map<String, Object> searchMap);
    
    List<Map<String, Object>> selectBgtDeptDtlMappListByAcct(Map<String, Object> searchMap);
    
    List<Map<String, Object>> selectBgtDeptDtlMappListByCommonAcct(Map<String, Object> searchMap);
    
    void saveBgtDeptDtl(Map<String, Object> map) throws Exception;
    
    void saveBgtDeptDtlHst(Map<String, Object> map) throws Exception;
    
    void saveBgtCommonAcctDtl(Map<String, Object> map) throws Exception;
    
    void saveBgtCommonAcctDtlHst(Map<String, Object> map) throws Exception;

    Map<String, Object> selectBalanceAmt(Map<String, Object> searchMap) throws Exception;	//박재광 2022.03.28
    
    void insertBgtChgHst(Map<String, Object> map) throws Exception;	//박재광 2022.03.28
    
    int selectLastBgtNo(Map<String, Object> searchMap) throws Exception;	//박재광 2022.03.28
    
    void updateBgtDtlsDsp(Map<String, Object> map) throws Exception;	//일반예산이체 변경전 수정, 박재광 2022.03.28
    
    void updateBgtDtlsRcv(Map<String, Object> map) throws Exception;	//일반예산이체 변경후 수정, 박재광 2022.03.28
    
    void insertBgtDtlsRcv(Map<String, Object> map) throws Exception;	//일반예산이체 변경후 등록, 박재광 2022.03.28
    
    // 공통예산이월 ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    List<Map<String, Object>> selectComBgtFwList(Map<String, Object> searchMap);	//공통예산이월 목록 조회, 박재광 2022.04.06

    void insertComBgtFwHst(Map<String, Object> map) throws Exception;	//공통예산이월 이력 등록, 박재광 2022.04.06
    
    int selectLastBgtNoComBgtFw(Map<String, Object> searchMap) throws Exception;	//공통예산이월  예산내역에 있나 확인, 박재광 2022.04.06    

    void updateComBgtFwDtlFrom(Map<String, Object> map) throws Exception;	//공통예산이월 이체할 상세 , 박재광 2022.04.06
    
    void updateComBgtFwDtlTo(Map<String, Object> map) throws Exception;	//공통예산이월 이체받을 상세 , 박재광 2022.04.06

    void insertComBgtFwDtlTo(Map<String, Object> map) throws Exception;	//공통예산이월 이체받을 상세 , 박재광 2022.04.06
    // 공통예산이월 ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
    
}
