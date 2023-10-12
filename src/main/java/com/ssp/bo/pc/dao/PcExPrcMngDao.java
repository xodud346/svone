package com.ssp.bo.pc.dao;

import java.util.List;
import java.util.Map;

public interface PcExPrcMngDao {

	List<Map<String, Object>> selectUpdatedListOprUnit(Map<String, Object> searchMap) throws Exception;

	List<Map<String, Object>> selectPcPrdSalsprc(Map<String, Object> searchMap) throws Exception;

	List<Map<String, Object>> selectPcPrdSalsprcNew(Map<String, Object> searchMap) throws Exception;
	
	List<Map<String, Object>> selectPcPrdPubSalsprc(Map<String, Object> searchMap) throws Exception;

    List<Map<String, Object>> selectSalsPrcHistList(Map<String, Object> searchMap) throws Exception;

    List<Map<String, Object>> selectOprUnitDispList(Map<String, Object> searchMap) throws Exception;

    Map<String, Object> selectCurrentStatus(Map<String, Object> searchMap)throws Exception;

}
