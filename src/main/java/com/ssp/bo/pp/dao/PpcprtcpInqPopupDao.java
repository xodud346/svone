package com.ssp.bo.pp.dao;

import java.util.List;
import java.util.Map;

public interface PpcprtcpInqPopupDao {
	
    int selectManufacturerCount(Map<String, Object> searchMap) throws Exception;
    List<Map<String, Object>> selectManufacturerList(Map<String, Object> searchMap);

}
