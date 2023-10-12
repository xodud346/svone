package com.ssp.bo.iv.dao;

import java.util.List;
import java.util.Map;

public interface IvPopupDao {
	
    int selectOperatorPopupListCount(Map<String, Object> searchMap) throws Exception;
    List<Map<String, Object>> selectOperatorPopupList(Map<String, Object> searchMap);
    // [팝업]팀 조회 옵션 설정 리스트
    List<Map<String, Object>> selectMbrOprtrOrgInfoList(Map<String, Object> searchMap);
    // [팝업]팀 조회 옵션 설정 리스트 카운트
  	int selectMbrOprtrOrgInfoListCnt(Map<String, Object> searchMap) throws Exception;
    

}
