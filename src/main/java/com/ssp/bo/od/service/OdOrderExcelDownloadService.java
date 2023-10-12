package com.ssp.bo.od.service;
import java.util.Map;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.od.OdOrderComm;

public interface OdOrderExcelDownloadService {
    /* OA_01 주문관리 엑셀 대용량 다운로드 */
    NexacroResult excelBigDownloadOA01(Map<String, Object> searchMap, OdOrderComm odOrderComm) throws Exception;

    /* OA_04 주문변경목록 엑셀 대용량 다운로드 */
    NexacroResult excelBigDownloadOA04(Map<String, Object> searchMap, OdOrderComm odOrderComm) throws Exception;

    /* KA_01 재고관리(S-MRP) 엑셀 대용량 다운로드 */
    NexacroResult excelBigDownloadKA01(Map<String, Object> searchMap, OdOrderComm odOrderComm) throws Exception;

    /* SN_09 정산대사 엑셀 대용량 다운로드 */
    NexacroResult excelBigDownloadSN09(Map<String, Object> searchMap, OdOrderComm odOrderComm) throws Exception;

}
