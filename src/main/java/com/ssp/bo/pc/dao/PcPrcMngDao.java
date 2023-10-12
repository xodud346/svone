package com.ssp.bo.pc.dao;

import java.util.List;
import java.util.Map;

public interface PcPrcMngDao {

    List<Map<String, Object>> selectBzplcList(Map<String, Object> searchMap) throws Exception;

    int selectBzplcCount(Map<String, Object> searchMap) throws Exception;

    List<Map<String, Object>> selectPrcHistList(Map<String, Object> searchMap) throws Exception;

    int selectPrcHistCount(Map<String, Object> searchMap) throws Exception;

    List<Map<String, Object>> selectList(Map<String, Object> searchMap) throws Exception;

	int selectCount(Map<String, Object> searchMap) throws Exception;

	int selectPubPrcCount(Map<String, Object> searchMap) throws Exception;

	List<Map<String, Object>> selectPubPrcList(Map<String, Object> searchMap) throws Exception;

	List<Map<String, Object>> selectItem(Map<String, Object> searchMap) throws Exception;

	int selectPrcListCount(Map<String, Object> searchMap) throws Exception;

	List<Map<String, Object>> selectListExhbnInfo(Map<String, Object> searchMap) throws Exception;

	List<Map<String, Object>> selectListPcPrdQty(Map<String, Object> searchMap) throws Exception;

	List<Map<String, Object>> selectListPcPrdDlcst(Map<String, Object> searchMap) throws Exception;

	List<Map<String, Object>> selectPrcList(Map<String, Object> searchMap) throws Exception;
	List<Map<String, Object>> selectPcPrdPrcList(Map<String, Object> searchMap) throws Exception;
	List<Map<String, Object>> getPcPrdPrcSimulList(Map<String, Object> searchMap) throws Exception;


	Map<String, Object> selectPcPrdReq(Map<String, Object> searchMap) throws Exception;

	int selectCountPcPrdQty(Map<String, Object> searchMap) throws Exception;

	int selectCountPcPrdDlcst(Map<String, Object> searchMap) throws Exception;

	int deletePcPrdQty(Map<String, Object> searchMap) throws Exception;

	int deletePcPrdDlcst(Map<String, Object> searchMap) throws Exception;

	List<Map<String, Object>> selectPubDispList(Map<String, Object> searchMap) throws Exception;

}
