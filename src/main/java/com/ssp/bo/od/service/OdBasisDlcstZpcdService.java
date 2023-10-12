package com.ssp.bo.od.service;

import java.util.List;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;

/**
 * <pre>
 * @title 도서산간 배송비
 * @package com.ssp.bo.dl.service
 * </pre>
 *
 * @author neonlee
 * @since 2022. 02. 24.
 * @version 1.0
 * @see OdBasisDlcstZpcdService
 * =================== 변경 내역 ==================
 * 날짜           변경자     내용
 * ------------------------------------------------
 */

public interface OdBasisDlcstZpcdService {
    /** 배송비구분 조회 */
    NexacroResult selectBasisDlcstList(Map<String, Object> searchMap) throws Exception;

    /** 배송비구분 추가 */
    int insertBasisDlcst(Map<String, Object> searchMap) throws Exception;

    /** 배송비구분 추가 */
    NexacroResult insertBasisDlcst2(Map<String, Object> searchMap) throws Exception;

    /** 배송비구분 업데이트 **/
    NexacroResult updateBasisDlcst(Map<String, Object> commandMap,OdOrderComm odComm) throws Exception;

    /** 배송비구분 종료일자 업데이트 **/
    int updateBasisDlcstWithStartDate(Map<String, Object> commandMap) throws Exception;

    /** 배송비구분 삭제 **/
    NexacroResult deleteBasisDlcst(Map<String, Object> commandMap) throws Exception;

    /** 배송비구분 동일한 PK의 개수 조회 **/
    int selectBasisDlcstKeyCount(Map<String, Object> searchMap) throws Exception;

    /** 배송비구분 첫번째 PK의 개수 조회 **/
    int selectBasisDlcstFirstKeyCount(Map<String, Object> searchMap) throws Exception;

    /** 배송비구분 테이블 Count 조회 **/
    NexacroResult selectBasisDlcstCount(Map<String, Object> searchMap) throws Exception;

    /** 배송비구분 이력 Count **/
    NexacroResult selectBasisDlcstHistoryCount(Map<String, Object> searchMap) throws Exception;

    /** 배송비구분 이력 조회 */
    NexacroResult selectCartDlcstPopupList(Map<String, Object> searchMap) throws Exception;

    /** 도서산간 배송비 우편정보 Count 조회 **/
    NexacroResult selectIsareaZpcdCount(Map<String, Object> searchMap) throws Exception;

    /** 도서산간 배송비 우편정보 조회 */
    NexacroResult selectIsareaZpcdList(Map<String, Object> searchMap) throws Exception;

    /** 도서산간 배송비 우편정보 추가 **/
    NexacroResult insertIsareaZpcd(List<Map<String, Object>> commandMap,OdOrderComm odComm) throws Exception;

    /** 도서산간 배송비 우편정보 업데이트 **/
    NexacroResult updateIsareaZpcd(List<Map<String, Object>> commandMap,OdOrderComm odComm) throws Exception;

    /** 도서산간 배송비 우편정보 삭제 **/
    NexacroResult deleteIsareaZpcd(Map<String, Object> commandMap) throws Exception;

    /** 도서산간 배송비 우편정보 구분정보 조회 */
    NexacroResult selectIsareaZpcdGubunList(Map<String, Object> searchMap) throws Exception;
}