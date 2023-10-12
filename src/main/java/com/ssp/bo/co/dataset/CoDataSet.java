package com.ssp.bo.co.dataset;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;

import javax.xml.crypto.Data;

/**
 * <pre>
 * @title test
 * @desc 초기 데이터셋 생성
 * @package com.ssp.bo.co.dataset
 * <pre>
 * @author lee
 * @since 2022-03-11
 * @version 1.0
 * @see CoDataSet
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022-03-11	lee	최초작성
 */
public class CoDataSet {

    public static DataSet getDs(String type, String dsName) {

        DataSet resDataSet = new DataSet(dsName);

        switch (type) {
            case "coTransStatMng":  //거래명세서 관리 조회
                resDataSet.addColumn("RPT_ID", DataTypes.STRING);
                resDataSet.addColumn("RPT_NM", DataTypes.STRING);
                resDataSet.addColumn("RPT_URL", DataTypes.STRING);
                resDataSet.addColumn("SALSPRC_YN", DataTypes.STRING);
                resDataSet.addColumn("USE_YN", DataTypes.STRING);
                resDataSet.addColumn("REG_DTM", DataTypes.STRING);
                resDataSet.addColumn("REGPSN_ID", DataTypes.STRING);
                resDataSet.addColumn("REGPSN_NM", DataTypes.STRING);
                resDataSet.addColumn("UPD_DTM", DataTypes.STRING);
                resDataSet.addColumn("UPDPSN_ID", DataTypes.STRING);
                resDataSet.addColumn("UPDPSN_NM", DataTypes.STRING);
                resDataSet.addColumn("COL_CHK", DataTypes.STRING);

                break;
            case "excelMetaMst":    // 엑셀 메타 마스터 데이터 셋
                resDataSet.addColumn("PGM_ID", DataTypes.STRING);
                resDataSet.addColumn("EXCEL_META_SEQ", DataTypes.STRING);
                resDataSet.addColumn("IPT_PST_TYPE_CD", DataTypes.STRING);
                resDataSet.addColumn("DOWN_LMT_CNT", DataTypes.STRING);
                resDataSet.addColumn("BVAL_DOWN_YN", DataTypes.STRING);
                resDataSet.addColumn("COL_INFO", DataTypes.STRING);
                resDataSet.addColumn("COL_ATTR_INFO", DataTypes.STRING);
                resDataSet.addColumn("USE_YN", DataTypes.STRING);
                resDataSet.addColumn("CHK_COL", DataTypes.STRING);
                resDataSet.addColumn("PGM_NM", DataTypes.STRING);

                break;
            case "excelMetaDtl": //엑셀메타 상세 데이터 셋
                resDataSet.addColumn("PGM_ID", DataTypes.STRING);
                resDataSet.addColumn("EXCEL_META_SEQ", DataTypes.STRING);
                resDataSet.addColumn("LANG_CD", DataTypes.STRING);

                break;
            case "systemMessageMng" :   //시스템 메세지 데이터 셋
                resDataSet.addColumn("MSG_CD", DataTypes.STRING);
                resDataSet.addColumn("MSG_CTS", DataTypes.STRING);
                resDataSet.addColumn("USE_YN", DataTypes.STRING);
                resDataSet.addColumn("REG_DTM", DataTypes.STRING);
                resDataSet.addColumn("REGPSN_ID", DataTypes.STRING);
                resDataSet.addColumn("REGPSN_NM", DataTypes.STRING);
                resDataSet.addColumn("UPD_DTM", DataTypes.STRING);
                resDataSet.addColumn("UPDPSN_ID", DataTypes.STRING);
                resDataSet.addColumn("UPDPSN_NM", DataTypes.STRING);
                resDataSet.addColumn("RNUM", DataTypes.STRING);
                resDataSet.addColumn("LANG_CD", DataTypes.STRING);
                resDataSet.addColumn("COL_CHK", DataTypes.STRING);

                break;

            case "deptAuthMng" : //부서별 메뉴권한 권한목록 데이터셋
                resDataSet.addColumn("CO_CD", DataTypes.STRING);
                resDataSet.addColumn("ORG_CD", DataTypes.STRING);
                resDataSet.addColumn("AUTH_GRP_ROLE_CD", DataTypes.STRING);
                resDataSet.addColumn("AUTH_GRP_ROLE_NM", DataTypes.STRING);
                resDataSet.addColumn("USE_YN", DataTypes.STRING);
                resDataSet.addColumn("REG_DTM", DataTypes.STRING);
                resDataSet.addColumn("REGPSN_ID", DataTypes.STRING);
                resDataSet.addColumn("REGPSN_NM", DataTypes.STRING);
                resDataSet.addColumn("CHK_COL", DataTypes.STRING);
                break;

            case "oprtrAuthInfo" : //운영자별 메뉴 권한 목록 데이터 셋
                resDataSet.addColumn("CO_CD", DataTypes.STRING);
                resDataSet.addColumn("OPRTR_ID", DataTypes.STRING);
                resDataSet.addColumn("AUTH_GRP_ROLE_CD", DataTypes.STRING);
                resDataSet.addColumn("AUTH_CLSF_NM", DataTypes.STRING);
                resDataSet.addColumn("AUTH_GRP_ROLE_CLCD", DataTypes.STRING);
                resDataSet.addColumn("CHK_COL", DataTypes.STRING);
                resDataSet.addColumn("REGPSN_ID", DataTypes.STRING);
                resDataSet.addColumn("REG_DTM", DataTypes.STRING);
                resDataSet.addColumn("REGPSN_NM", DataTypes.STRING);

                break;
            case "oprtrMnuMng" : //운영자별 개별메뉴 권한 메뉴 목록 데이터 셋
                resDataSet.addColumn("MNU_SEQ", DataTypes.STRING);
                resDataSet.addColumn("MNU_NM", DataTypes.STRING);
                resDataSet.addColumn("MNU_LVL_SPR_CD", DataTypes.STRING);
                resDataSet.addColumn("USE_YN", DataTypes.STRING);
                resDataSet.addColumn("MNU_LVL", DataTypes.STRING);
                resDataSet.addColumn("HRNK_MNU_SEQ", DataTypes.STRING);
                resDataSet.addColumn("SRT_SO", DataTypes.STRING);
                resDataSet.addColumn("MNU_TP_CD", DataTypes.STRING);
                resDataSet.addColumn("HGST_MNU_SEQ", DataTypes.STRING);
                resDataSet.addColumn("PGM_ID", DataTypes.STRING);
                resDataSet.addColumn("PGM_NM", DataTypes.STRING);
                resDataSet.addColumn("OPRTR_ID", DataTypes.STRING);
                resDataSet.addColumn("CHK_COL", DataTypes.STRING);

                break;

            case "largeExcelDownInfo" : //대용량 엑셀다운로드 정보
                resDataSet.addColumn("FILE_SEQ", DataTypes.STRING);
                resDataSet.addColumn("CO_CD", DataTypes.STRING);
                resDataSet.addColumn("USR_ID", DataTypes.STRING);
                resDataSet.addColumn("FILE_NM", DataTypes.STRING);
                resDataSet.addColumn("FILE_PATH", DataTypes.STRING);
                resDataSet.addColumn("FILE_SIZE", DataTypes.STRING);
                resDataSet.addColumn("DOWN_PROC_STATS_CD", DataTypes.STRING);
                resDataSet.addColumn("REQ_DTM", DataTypes.STRING);
                resDataSet.addColumn("CRT_DTM", DataTypes.STRING);
                resDataSet.addColumn("PROC_RSLT_MSG", DataTypes.STRING);
                resDataSet.addColumn("HOST_INFO", DataTypes.STRING);
                resDataSet.addColumn("INST_INFO", DataTypes.STRING);
                resDataSet.addColumn("EXCEL_PWD", DataTypes.STRING);
                resDataSet.addColumn("REG_DTM", DataTypes.STRING);
                resDataSet.addColumn("REGPSN_ID", DataTypes.STRING);
                resDataSet.addColumn("UPD_DTM", DataTypes.STRING);
                resDataSet.addColumn("UPDPSN_ID", DataTypes.STRING);

                break;

            case "oggLog" : // OGG 로그
                resDataSet.addColumn("EXCE_DTM", DataTypes.STRING);
                resDataSet.addColumn("OGG_ID", DataTypes.STRING);
                resDataSet.addColumn("SRC_TBL", DataTypes.STRING);
                resDataSet.addColumn("TGT_TBL", DataTypes.STRING);
                resDataSet.addColumn("SUCC_YN", DataTypes.STRING);
                resDataSet.addColumn("EXCE_DATA", DataTypes.STRING);
                resDataSet.addColumn("RMKS", DataTypes.STRING);

                break;

            case "excelTempData" : //엑셀 temp
                resDataSet.addColumn("coCd", DataTypes.STRING);
                resDataSet.addColumn("excelRowNo", DataTypes.STRING);
                resDataSet.addColumn("usrId", DataTypes.STRING);
                resDataSet.addColumn("upldPgmIdtNm", DataTypes.STRING);
                resDataSet.addColumn("bzplcId", DataTypes.STRING);
                resDataSet.addColumn("oprUnitId", DataTypes.STRING);
                resDataSet.addColumn("prdId", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal01", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal02", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal03", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal04", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal05", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal06", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal07", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal08", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal09", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal10", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal11", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal12", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal13", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal14", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal15", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal16", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal17", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal18", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal19", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal20", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal21", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal22", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal23", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal24", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal25", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal26", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal27", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal28", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal29", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal30", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal31", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal32", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal33", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal34", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal35", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal36", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal37", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal38", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal39", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal40", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal41", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal42", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal43", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal44", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal45", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal46", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal47", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal48", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal49", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal50", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal51", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal52", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal53", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal54", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal55", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal56", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal57", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal58", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal59", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal60", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal61", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal62", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal63", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal64", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal65", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal66", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal67", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal68", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal69", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal70", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal71", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal72", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal73", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal74", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal75", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal76", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal77", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal78", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal79", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal80", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal81", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal82", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal83", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal84", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal85", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal86", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal87", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal88", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal89", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal90", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal91", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal92", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal93", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal94", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal95", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal96", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal97", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal98", DataTypes.STRING);
                resDataSet.addColumn("excelDataVal99", DataTypes.STRING);
                resDataSet.addColumn("updMtdCd", DataTypes.STRING);
                resDataSet.addColumn("comErrOcurCd", DataTypes.STRING);
                resDataSet.addColumn("comErrOcurCts", DataTypes.STRING);
                resDataSet.addColumn("vldLnmVldtDtm", DataTypes.STRING);
                resDataSet.addColumn("regpsnId", DataTypes.STRING);
                resDataSet.addColumn("regDtm", DataTypes.STRING);

                break;

            default :
                break;
        }
        return resDataSet;
    }

}
