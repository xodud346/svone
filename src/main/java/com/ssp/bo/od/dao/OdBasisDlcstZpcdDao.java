package com.ssp.bo.od.dao;

import java.util.List;
import java.util.Map;


/**
 * <pre>
 * @title 도서산간 배송비
 * @package com.ssp.bo.dl.dao
 * </pre>
 * @author neonlee
 * @since 2022. 02. 24.
 * @version 1.0
 * @see OdBasisDlcstZpcdDao
 * =================== 변경 내역 ==================
 * 날짜       변경자     내용
 * ------------------------------------------------
 * 
 */
public interface OdBasisDlcstZpcdDao {
    /** 배송비구분 리스트 조회 */
    List<Map<String, Object>> selectBasisDlcstList(Map<String, Object> searchMap)throws Exception;
    
    /** 배송비구분 추가 */
    int insertBasisDlcst(Map<String, Object> commandMap) throws Exception;
    
    /** 배송비구분 추가2 */
    int insertBasisDlcst2(Map<String, Object> commandMap) throws Exception;
    
    /** 배송비구분 업데이트 **/
    int updateBasisDlcst(Map<String, Object> commandMap) throws Exception;
    
    /** 배송비구분 종료일자 업데이트 **/
    int updateBasisDlcstWithStartDate(Map<String, Object> commandMap) throws Exception;
    
    /** 배송비구분 삭제 **/
    int deleteBasisDlcst(Map<String, Object> commandMap) throws Exception;
    
    /** 배송비구분 동일한 PK의 개수 조회 **/
    int selectBasisDlcstKeyCount(Map<String, Object> searchMap) throws Exception;
    
    /** 배송비구분 첫번째 PK의 개수 조회 **/
    int selectBasisDlcstFirstKeyCount(Map<String, Object> searchMap) throws Exception;
    
    /** 배송비구분 테이블 Count **/
    int selectBasisDlcstCount(Map<String, Object> searchMap) throws Exception;
    
    /** 배송비구분 이력 Count **/
    int selectBasisDlcstHistoryCount(Map<String, Object> searchMap) throws Exception;
    
    /** 배송비구분 이력 조회 */
    List<Map<String, Object>> selectCartDlcstPopupList(Map<String, Object> searchMap)throws Exception;
    
    /** 배송비구분 업데이트 - SP */
    Map<String, Object> updateCartDlcstPopupListSP(Map<String, Object> searchMap)throws Exception;
    
    
    
    
    /** 도서산간 배송비 우편정보 테이블 Count **/
    int selectIsareaZpcdCount(Map<String, Object> searchMap) throws Exception;
    
    /** 도서산간 배송비 우편정보 리스트 조회 */
    List<Map<String, Object>> selectIsareaZpcdList(Map<String, Object> searchMap)throws Exception;
    
    /** 도서산간 배송비 우편정보 추가 **/
    int insertIsareaZpcd(Map<String, Object> commandMap) throws Exception;
    
    /** 도서산간 배송비 우편정보 업데이트 **/
    int updateIsareaZpcd(Map<String, Object> commandMap) throws Exception;
    
    /** 도서산간 배송비 우편정보 삭제 **/
    int deleteIsareaZpcd(Map<String, Object> commandMap) throws Exception;
    
    /** 도서산간 배송비 우편정보 구분정보 조회 */
    List<Map<String, Object>> selectIsareaZpcdGubunList(Map<String, Object> searchMap) throws Exception;
    
}
