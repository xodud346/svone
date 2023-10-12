package com.ssp.bo.sa.dao;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * @title 쿠폰 Dao
 * @package com.ssp.bo.sa.dao
 * </pre>
 * @author
 * @since 2022.03.17.
 * @version 1.0
 * @see CpnInfoDao
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.03.17.	박진원		최초작성
 */
public interface CpnInfoDao
{
	/** 쿠폰 목록 조회 */
	List<Map<String, Object>> selectCpnInfoList(Map<String, Object> searchMap) throws Exception;

	/** 쿠폰 목록 건수 조회 */
	int selectCpnInfoListCount(Map<String, Object> searchMap) throws Exception;

	/** 쿠폰 발행 내역 목록 조회 */
	List<Map<String, Object>> selectCpnPubcUseDtlsList(Map<String, Object> searchMap) throws Exception;

	/** 쿠폰 발행 내역 목록 건수 조회 */
	int selectCpnPubcUseDtlsListCount(Map<String, Object> searchMap) throws Exception;

	/** 쿠폰 발급 대상 목록 */
	List<Map<String, Object>> selectCpnPubcMbrList(Map<String, Object> searchMap) throws Exception;

	/** 쿠폰 시퀀스 값 조회 */
	Map<String, Object> selectCpnInfoSeq(Map<String, Object> saveCpnInfoMap) throws Exception;

	/** 쿠폰 기본 정보 등록 */
	int insertCpnInfo(Map<String, Object> saveCpnInfoMap) throws Exception;

	/** 쿠폰 기본 정보 수정 */
	int updateCpnInfo(Map<String, Object> saveCpnInfoMap) throws Exception;

	/** 쿠폰 개별 발행 대상 삭제 */
	int deleteCpnPubcUseDtls(Map<String, Object> saveCpnPubcUseDtlsMap) throws Exception;

	/** 쿠폰 발급 수량 조회 */
	int selectCpnPubcCount(Map<String, Object> saveCpnInfoMap) throws Exception;

	/** 쿠폰 중복 발급 확인 건수 조회 */
	int selectCpnDuplPubcCount(Map<String, Object> searchMap) throws Exception;

	/** 쿠폰 개별 발행 대상 등록 */
	int insertCpnPubcUseDtls(Map<String, Object> saveCpnPubcUseDtlsMap) throws Exception;

	/** 쿠폰 적용 대상 상품/상품군, 제외 대상 상품/상품군 삭제 */
	int deleteCpnPrdDtl(Map<String, Object> saveCpnPrdDtlMap) throws Exception;

	/** 쿠폰 적용 대상 상품/상품군, 제외 대상 상품/상품 등록 */
	int insertCpnPrdDtl(Map<String, Object> saveCpnPrdDtlMap) throws Exception;

	/** 쿠폰 상세 */
	Map<String, Object> selectCpnInfo(Map<String, Object> searchMap) throws Exception;

	/** 쿠폰 발급 대상 목록 */
	List<Map<String, Object>> selectCpnPubcUseDtlsInfoList(Map<String, Object> searchMap) throws Exception;

	/** 쿠폰 적용 대상 상품/상품군, 제외 대상 상품/상품 목록 */
	List<Map<String, Object>> selectCpnPrdDtlList(Map<String, Object> searchMap) throws Exception;

	/** 쿠폰 - 목록 - 쿠폰설정 팝업 */
	List<Map<String, Object>> selectCpnInfoPopupList(Map<String, Object> searchMap) throws Exception;

	/** 쿠폰 목록 (회원) 조회 */
	List<Map<String, Object>> selectCpnInfoMbrList(Map<String, Object> searchMap) throws Exception;

	/** 쿠폰 목록 (회원) 건수 조회 */
	int selectCpnInfoMbrListCount(Map<String, Object> searchMap) throws Exception;

	/** 쿠폰 목록 (회원) 사용가능/사용한/만료된 건수 조회 */
	Map<String, Object> selectCpnInfoMbrCount(Map<String, Object> searchMap) throws Exception;
}
