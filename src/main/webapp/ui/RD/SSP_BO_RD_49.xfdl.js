(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("R&D MSDS관리 상세");
            this.set_background("black");
            this.getSetter("uEssentiel").set("true");
            if (Form == this.constructor)
            {
                this._setFormPosition(1140,610);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_master", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_VIEW_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"32\"/><Column id=\"MRO_MNFR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRVL_LIST\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MSDS_ATTC_FILENM\" type=\"STRING\" size=\"256\"/><Column id=\"MSDS_ATTC_FILEID\" type=\"STRING\" size=\"256\"/><Column id=\"RND_MSDS_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MSDS_FNL_CHG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"FNL_UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"32\"/><Column id=\"LOC_ATTC_FILEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_ATTC_FILENM\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_ATFL_FNL_CHG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_ATFL_UPD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_ATTC_FILE_UPDPSN_IDNM\" type=\"STRING\" size=\"256\"/><Column id=\"SRVON_CERT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SRVON_CERT_FNL_CHG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SRVON_CERT_UPD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SRVON_CERT_UPDPSN_IDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_saveFileList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_uploadResult", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_downLoad", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuth", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_CHRPSN_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_TP_CD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuthCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_bg","0","22",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","503","547","67","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","575","547","67","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","20","98",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prd","20","98","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("상품");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","0","50",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01_00_00","0","525","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_01","20","129",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdClcd","20","129","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("카테고리");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_01_00","20","159",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_01_00_00","20","189",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_01_00_00_00","20","219",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_01_00_00_00_00","20","339",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_01_00_00_00_00_00","20","369",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_01_00_00_00_00_00_00","20","399",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_mnfr","20","159","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_reprSpec","20","189","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("대표규격");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_cprtcp","20","219","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("협력사");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file","510","344","67","23",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("파일 등록");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_msdsPath","196","373","914","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_01_00_00_00_01","20","249",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_01_00_00_00_01_00","20","279",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_01_00_00_00_01_00_00","20","309",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_purgChrpsn","20","249","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("구매담당자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_fnlUpdDt","20","279","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("최종수정일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_fnlUpdr","20","309","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("최종수정자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"0","20","20","0",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("X");
            obj.set_visible("true");
            obj.set_background("black");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","20","20","300","36",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("MSDS 상세");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","0","87","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01_00_00_00","0","573","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("30");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cprtcpId","582","222","154","24",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","582","102","154","24",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUploadSingle","538","29","290","19",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload","832","29","98","19",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("FileDownload");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fileId","582","343","117","24",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_enable("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fileName","196","343","308","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textDecoration("underline");
            obj.set_color("royalblue");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdIdNm","196","102","381","24",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdClNm","196","132","381","24",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm","196","163","381","24",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_reprSpecNm","196","192","381","24",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cprtcpNm","196","223","381","24",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_purgChrpsnNm","196","252","381","24",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fnlUpdDtNm","196","283","381","24",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fnlUpdrNm","196","313","381","24",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_fnlUpdDt","196","403","104","24",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","3","155","16",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_title02");
            obj.set_color("white");
            obj.set_text("수정");
            this.addChild(obj.name, obj);

            obj = new Static("stc_msdsFile","20","340","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("MSDS 파일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.getSetter("uEssentiel").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_msdsPath","20","369","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("MSDS 경로");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.getSetter("uEssentiel").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_01_00_00_00_00_01","20","430",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_01_00_00_00_00_00_01","20","461",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_01_00_00_00_00_00_00_00","20","491",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_svronCertFnlChgDt","764","465","104","24",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_svronCertUpdDt","764","495","135","24",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_svronCertUpdpsn","904","495","176","24",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_svronCertYn","764","437","144","22",null,null,null,null,null,null,this);
            obj.set_initvalueid("N");
            obj.set_taborder("54");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_columncount("0");
            var rdo_svronCertYn_innerdataset = new nexacro.NormalDataset("rdo_svronCertYn_innerdataset", obj);
            rdo_svronCertYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(rdo_svronCertYn_innerdataset);
            obj.set_text("미사용");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_svronCertYn","588","430","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("자체증빙여부");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_locFileName","196","434","308","24",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textDecoration("underline");
            obj.set_color("royalblue");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_locFile","510","435","67","23",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("파일 등록");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_ltterFnlChgDt","196","465","104","24",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ltterUpdDt","196","495","135","24",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_readonly("true");
            obj.set_value("2023-01-01 00:00:00");
            obj.set_text("2023-01-01 00:00:00");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ltterUpdpsn","336","495","168","24",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_svronCertFnlChgDt","588","461","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("자체증빙일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_svronCertUpdDtPsn","588","491","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("자체증빙 수정일시/수정자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_locFileId","460","465","117","24",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_enable("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_msdsFnlUpdDt","20","399","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("MSDS 최종개정일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.getSetter("uEssentiel").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ltterFile","20","430","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("레터파일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_lttrFnlChgDt","20","461","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("레터파일 최종개정일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ltterUpdDtPsn","20","491","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("레터파일 수정일시/수정자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1140,610,this,function(p){});
            obj.set_description("R&D MSDS관리 상세");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_fileId","value","ds_master","MSDS_ATTC_FILEID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_prdId","value","ds_master","PRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_cprtcpId","value","ds_master","CPRTCP_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edt_msdsPath","value","ds_master","RND_MSDS_URL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edt_fileName","value","ds_master","MSDS_ATTC_FILENM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edt_prdIdNm","value","ds_master","PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_prdClNm","value","ds_master","PRD_CLCD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","edt_mnfrNm","value","ds_master","MRO_MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edt_reprSpecNm","value","ds_master","PRVL_LIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","edt_cprtcpNm","value","ds_master","CPRTCP_KOR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","edt_purgChrpsnNm","value","ds_master","PRD_CLSF_CHRPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","edt_fnlUpdrNm","value","ds_master","UPDPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cal_fnlUpdDt","value","ds_master","MSDS_FNL_CHG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","cal_svronCertFnlChgDt","value","ds_master","SRVON_CERT_FNL_CHG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt_svronCertUpdDt","value","ds_master","SRVON_CERT_UPD_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edt_svronCertUpdpsn","value","ds_master","SRVON_CERT_UPDPSN_IDNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","rdo_svronCertYn","value","ds_master","SRVON_CERT_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_locFileName","value","ds_master","LOC_ATTC_FILENM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cal_ltterFnlChgDt","value","ds_master","LOC_ATFL_FNL_CHG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt_ltterUpdDt","value","ds_master","LOC_ATFL_UPD_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edt_ltterUpdpsn","value","ds_master","LOC_ATTC_FILE_UPDPSN_IDNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","edt_locFileId","value","ds_master","LOC_ATTC_FILEID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","edt_fnlUpdDtNm","value","ds_master","FNL_UPD_DTM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","ds_master");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_RD_49.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_RD_49.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_RD_49.xfdl(R&D MSDS관리 상세 팝업)
        * 작 성			일 명: 손나라
        * 작 성	    	일 자: 2022/05/16
        * 변 경     	일 자:
        * 변 경			자 명:
        * 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술
        */
        /**********************************************************************
        	01. 전처리 공통 함수 선언
        ***********************************************************************/
        this.executeIncludeScript("RD::rdMain.xjs"); /*include "RD::rdMain.xjs"*/;
        /**********************************************************************
        	02. 폼 변수 정의
        ***********************************************************************/
        this.fv_oApp                = nexacro.getApplication();	//application object
        this.sOptinoArg1;
        this.sOptinoArg2;
        this.sParamArg1;
        this.sParamArg2;
        this.sParamArg3;
        this.sParamArg4;
        this.mallSprCd 		= "20";
        this.totalCount 	= 0;
        this.strKeyValue 	= "";
        this.lv_coCd        = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"") == "" ? "1000" : this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"");
        this.lv_orgCd       = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"ORG_CD"),"");
        this.lv_btnChkYn    = "";
        /**********************************************************************
        	03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.form_onload = function(obj,e)
        {
        	//폼에 공통으로 로드시 사용하는 함수.
        	this.gfn_formOnLoad(this);
        	// 로컬 로그인 사용 않할시
        	this.fn_setLocalUserCreate(true);
        	//사용자 초기화 함수
        	this.fn_formInit();
        };
        /**
         * 기능 : 폼언 로드(닫기전 셋팅)  Setting
         */
        this.form_onclose = function(obj,e)
        {

        };
        /**********************************************************************
        	04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
        	/******************* 기본셋팅 *********************/
        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sOp01))
        	{
        		 this.sOptinoArg1 = this.getOwnerFrame().pv_sOp01;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sOp02))
        	{
        		 this.sOptinoArg2 = this.getOwnerFrame().pv_sOp02;
        	}

        	/******************* 넘어온 인자값 *********************/
        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal01))
        	{
        		 this.sParamArg1 = this.getOwnerFrame().pv_sVal01;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal02))
        	{
        		 this.sParamArg2 = this.getOwnerFrame().pv_sVal02;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal03))
        	{
        		 this.sParamArg3 = this.getOwnerFrame().pv_sVal03;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal04))
        	{
        		 this.sParamArg4 = this.getOwnerFrame().pv_sVal04;
        	}

            var strDs    = "ds_rndPrdAuthCombo";           // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "CHRPSN_TEAM_SPR_CD";           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X";                            // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                             // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

            // fn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
            // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.fn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);

        };

        this.fn_PostformInit = function()
        {
        	var nRow = this.ds_search.addRow();
        	this.ds_search.setColumn(nRow,"CO_CD",this.sParamArg1);
        	this.ds_search.setColumn(nRow,"PRD_ID",this.sParamArg2);
        	this.ds_search.setColumn(nRow,"CPRTCP_ID",this.sParamArg3);

        	this.fn_Ret();
        };


        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
        	if(nErrorCode != 0)
        	{
        		this.fn_alert(sErrorMsg,"에러정보","","error");
        		if(nErrorCode == -100)
        		{
        			this.edt_prdViewId.setFocus();
        		}
        		return false;
        	}else
        	{
        		/*sSvcId (Transaction Id)*/
        		switch(sSvcId)
        		{
        			case "Init":
        				this.fn_PostformInit();
        				break;
        			case "Ret":
        			    this.fn_postRet();
        				break;
        			case "Save":
        			    this.fn_PostSave();
        				break;

        			default:
        				break;
        		}
        	}
        };

        //Popup callback영역
        this.fn_popupCallback = function(strId, strVal)
        {
            switch(strId)
            {

        		case "SSP_BO_RD_56" :                         // 변경 이력 처리시
                    if(!this.gfn_isNull(strVal))
                    {
                        //일반
                        var sRtn = strVal.split(",");
        				if(sRtn[0] == "CLOSE")
                        {
                        }else if(sRtn[0] == "EXIT")
                        {
                        }else
        				{

        				}
                    }
        		    break;
                default:
                    break;
            }
        };
        /**********************************************************************
        	05. 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_preRet = function()
        {
        	// 조회조건 셋팅
        	return true;
        };
        /**
         * 기능 : 화면조회 전 실행
         */
        this.fn_Ret = function()
        {
        	if(!this.fn_preRet())
        	{
        		return false;
        	}
        	var strSvc      = "Ret";
            var strUrl      = "/rd/msds-mng/select-msds-mng-dtl.do";
            var strInDs     = "ds_search=ds_search";
            var strOutDs    = "ds_master=ds_master ";
        	    strOutDs   += "ds_saveFileList=ds_saveFileList";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        }

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_postRet = function()
        {
        	this.edt_fileName_onchanged       (this['edt_fileName'   ], new nexacro.ChangeEventInfo    ());
        	this.edt_fileName_onchanged       (this['edt_locFileName'], new nexacro.ChangeEventInfo    ());
        	this.rdo_svronCertYn_onitemchanged(this['rdo_svronCertYn'], new nexacro.ItemChangeEventInfo());

        	// RND화면권한제어
        	this.fn_setRndUiAuthCtl();
        };

        /**********************************************************************
                06. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 버튼 클릭시
         */
        this.btn_save_onclick = function(obj,e)
        {
        	this.fn_Save();
        };

        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
        	if(!this.gfn_dsIsUpdated(this.ds_master) && !this.gfn_dsIsUpdated(this.ds_saveFileList))
        	{
        		this.fn_alert("ERRC000035","저장정보","","question"); // 변경된 이력이 없습니다.!
        		return false;
        	}

        	if(this.gfn_isNull(this.edt_fileName.value) && this.gfn_isNull(this.edt_msdsPath.value) )
        	{
        		this.fn_alert("ERRS000136","저장","MSDS 파일,MSDS 경로","question");      // MSDS 파일,MSDS 경로 (&1 또는 &2 둘 중에 하나는 필수입니다)
        		this.edt_fileId.setFocus();
        		return false;
        	}

        	var regex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

        	// MSDS URL 경로 정합성 체크
        	if(!this.gfn_isNull(this.edt_msdsPath.value) && !regex.test(this.edt_msdsPath.value))
        	{
        		this.fn_alert("ERRR000231","저장","MSDS 경로","question");      // &1 URL 주소가 잘못 입력 되었습니다. 해당 URL 주소를 확인 해주세요.
        		this.edt_msdsPath.setFocus();
        		return false;
        	}

        	if(this.gfn_isNull(this.cal_fnlUpdDt.value) )
        	{
        		this.fn_alert("ERRS000144","저장","MSDS 최종개정일 ","question");                     // 협력사 &1은(는) 필수입력사항입니다.
        		this.cal_fnlUpdDt.setFocus();
        		return false;
        	}

        	// 2023.02.07 sg.park - AI-009 MSDS파일 2년경과 갱신처리
        	// 레터파일(첨부파일 + 최종변경일), 자체증빙(여부 + 최종변경일)
        	var lns={
        		  todayYmd : this.gfn_getDate()
        		, msdsFile : { attcFl: this.ds_master.getColumn(0, 'MSDS_ATTC_FILENM'), fnlChgDt: this.ds_master.getColumn(0, 'MSDS_FNL_CHG_DT'      ) , url: this.ds_master.getColumn(0, 'RND_MSDS_URL') }
        		, locFile  : { attcFl: this.ds_master.getColumn(0, 'LOC_ATTC_FILENM' ), fnlChgDt: this.ds_master.getColumn(0, 'LOC_ATFL_FNL_CHG_DT'  ) }
        		, svronCert: { certYn: this.ds_master.getColumn(0, 'SRVON_CERT_YN'   ), fnlChgDt: this.ds_master.getColumn(0, 'SRVON_CERT_FNL_CHG_DT') }
        	};
        	// MSDS (첨부파일 + 최종변경일)
        	if ( !this.gfn_isNull( lns.msdsFile.attcFl ) || !this.gfn_isNull( lns.msdsFile.fnlChgDt ) || !this.gfn_isNull( lns.msdsFile.url ) ) {
        		// 첨부파일 + Url
        		if (  this.gfn_isNull( lns.msdsFile.attcFl ) && this.gfn_isNull( lns.msdsFile.url ) ) {
        			this.fn_alert('ERRS000136', '저장', 'MSDS 파일, MSDS 경로', 'question');        // MSDS 파일,MSDS 경로 (&1 또는 &2 둘 중에 하나는 필수입니다)
        			return false;
        		}
        		if (  this.gfn_isNull( lns.msdsFile.fnlChgDt ) ) {
        			this.fn_alert('ERRS000144', '저장', 'MSDS 최종개정일 ', 'question');            // &1은(는) 필수입력사항입니다.
        			return false;
        		}
        		if ( !this.gfn_isNull( lns.msdsFile.fnlChgDt ) && lns.todayYmd < lns.msdsFile.fnlChgDt ) {
        			alert('MSDS 최종개정일은 미래날짜 입력이 불가능 합니다.');
        			return false;
        		}
        	}

        	// 레터(첨부파일 + 최종변경일)
        	if ( !this.gfn_isNull( lns.locFile.attcFl ) || !this.gfn_isNull( lns.locFile.fnlChgDt ) ) {

        		if (  this.gfn_isNull( lns.locFile.attcFl ) ) {
        			this.fn_alert('ERRS000144', '저장', '레터파일 ', 'question');
        			return false;
        		}
        		if (  this.gfn_isNull( lns.locFile.fnlChgDt ) ) {
        			this.fn_alert('ERRS000144', '저장', '레터파일 최종개정일 ', 'question');
        			return false;
        		}
        		if ( !this.gfn_isNull( lns.locFile.fnlChgDt ) && lns.todayYmd < lns.locFile.fnlChgDt ) {
        			alert('레터파일 최종개정일은 미래날짜 입력이 불가능 합니다.');
        			return false;
        		}
        	}

        	// 자체증빙(여부 + 최종변경일)
        	if ( (!this.gfn_isNull( lns.svronCert.certYn ) && 'Y' == lns.svronCert.certYn) || !this.gfn_isNull( lns.svronCert.fnlChgDt ) ) {

        		if (  this.gfn_isNull( lns.svronCert.certYn ) || 'Y' != lns.svronCert.certYn ) {
        			this.fn_alert('ERRS000144', '저장', '자체증빙여부 ', 'question');
        			return false;
        		}
        		if (  this.gfn_isNull( lns.svronCert.fnlChgDt ) ) {
        			this.fn_alert('ERRS000144', '저장', '자체증빙일 ', 'question');
        			return false;
        		}
        		if ( !this.gfn_isNull( lns.svronCert.fnlChgDt ) && lns.todayYmd < lns.svronCert.fnlChgDt ) {
        			alert('자체증빙일은 미래날짜 입력이 불가능 합니다.');
        			return false;
        		}
        	}
        	// /2023.02.07 sg.park - AI-009 MSDS파일 2년경과 갱신처리

        	var result = this.fn_confirm( "ERRR000098", "저장","", "question" ); // 저장 하시겠습니까?
        	if(result == 0) { return false; }

        	return true;
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Save = function()
        {
            if(!this.fn_PreSave())
            {
                return false;
            }

            var strSvc      = "Save";
            var strUrl      = "/rd/msds-mng/save-msds-mng.do";
            var strInDs     = "ds_master=ds_master:u ";
        	    strInDs    += "ds_saveFileList=ds_saveFileList:u";
            var strOutDs    = "";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };

        /**
         * 기능 : 저장시 후처리
         */
        this.fn_PostSave = function()
        {
            var objRtnArr = new Array(2);
        	objRtnArr[0] = "SUCCESS";
        	objRtnArr[1] = this.strKeyValue;
        	this.close(objRtnArr.toString());

        };
        /**********************************************************************
        	07. 닫기버튼
        ***********************************************************************/
        this.btn_close_onclick = function(obj,e)
        {
        	var result = this.fn_confirm( "ERRN000053", "취소","", "question" ); // 취소 하시겠습니까?
            if(result == 1)
            {
        		this.fn_saveMultiFileDelUpdate("CLOSE");
        	}
        };

        this.btn_cancel_onclick = function(obj,e)
        {
        	var result = this.fn_confirm( "ERRN000053", "취소","", "question" ); // 취소 하시겠습니까?
            if(result == 1)
            {
        		this.fn_saveMultiFileDelUpdate("EXIT");
        	}
        };

        /**********************************************************************
        	08.Get, Set Method
        ***********************************************************************/
         /**********************************************************************
        	09.기타 Control Event
        ***********************************************************************/
        /**
         * RND화면권한제어
         */
        this.fn_setRndUiAuthCtl = function()
        {
        	var strRndPrdAuth = this.ds_rndPrdAuthCombo.findRowExpr("COM_DTL_CD == '" + this.lv_orgCd + "' && USE_YN == 'Y'");

        	// RND상품담당권한 슈퍼 조직인 경우
        	if(strRndPrdAuth != -1 && this.ds_rndPrdAuthCombo.getColumn(strRndPrdAuth,"COM_USR_DEFN_NM_1") == "S")
        	{
        		this.lv_btnChkYn = "P";
        	}
        	else
        	{
        		var strMnfrNo  = this.ds_master.getColumn(0,"MNFR_NO");
        		var strPrdClcd = this.ds_master.getColumn(0,"PRD_CLCD");

        		// RND상품권한조회 구매담당자 & 상품담당자 정/부 체크
        		this.fn_getRndPrdAuthInq(strMnfrNo,strPrdClcd);

        		if(!this.gfn_isNull(this.ds_rndPrdAuth.getColumn(0,"PRD_CLSF_CHRPSN_TP_CD")))
        		{
        			this.lv_btnChkYn = this.ds_rndPrdAuth.getColumn(0,"PRD_CLSF_CHRPSN_TP_CD") == "30" ? "Y" : "N";
        		}
        	}

        	// 슈퍼권한 혹은 구매담당자 or 상품담당자가 아닐 경우 조회만 가능
        	if(this.gfn_isNull(this.lv_btnChkYn))
        	{
        		this.fn_compontAllControl();
        	}
        };

        this.fn_compontAllControl = function ()
        {
        	var btnEnableTreu   = {
        							btn_close  : this.btn_close
        						  , btn_cancel : this.btn_cancel
        	                      };
        	var btnVisibleFalse = {
        							btn_save : this.btn_save
        						  };

        	this.fn_componentInitViewControl(this,btnEnableTreu,btnVisibleFalse);
        };

        /**
         * 파일 첨부파일 업로드 버튼 클릭시 이벤트 발생 처리
         * ATFL_TP_CD [ 95: MSDS시트, 9A: LOC(Letter Of Confirmation) ]
         */
        this.cfg_atfl={
        	prop: 'uActvUpld',
        	msds: { atflTpNm: 'msds', atflTpCd: '95', btn: 'btn_file'   , flnm: 'edt_fileName'   , flid: 'edt_fileId'   , dsColId: 'MSDS_ATTC_FILEID', dsColNm: 'MSDS_ATTC_FILENM' },
        	loc : { atflTpNm: 'loc' , atflTpCd: '9A', btn: 'btn_locFile', flnm: 'edt_locFileName', flid: 'edt_locFileId', dsColId: 'MSDS_ATTC_FILEID', dsColNm: 'LOC_ATTC_FILENM'  },  // 2/17 dsColId: 'LOC_ATTC_FILEID' => 'MSDS_ATTC_FILEID'
        };

        this.btn_file_onclick = function(obj,e)
        {
        	// 2023.02.07 sg.park - AI-009 MSDS파일 2년경과 갱신처리
        	var actvCfg=this.cfg_atfl.loc.btn==obj.id ? this.cfg_atfl.loc : this.cfg_atfl.msds, actvBtnTxt=obj.text;
        	if ('파일 등록' == actvBtnTxt ) {
        		this.FileUploadSingle.deleteItem(0);
        		this.FileUploadSingle.appendItem();
        		this.FileUploadSingle.filefindbuttons[0].click();

        		this.FileUploadSingle.getSetter(this.cfg_atfl.prop).set(actvCfg);
        	} else {
        		var result = this.fn_confirm( "ERRR000134", "파일 삭제","", "question" ); // 등록된 파일을 삭제하시겠습니까?
        		if (result) {
        			var delRow = this.ds_saveFileList.findRow('ETC_FDS_2', actvCfg.atflTpCd);  // 95: MSDS시트, 9A: LOC(Letter Of Confirmation)
        			this.ds_saveFileList.setColumn(delRow    ,'ETC_FDS_2', 'del'           );
        			this[actvCfg.flid].set_value('');
        			this[actvCfg.flnm].set_value('');
        			this.edt_fileName_onchanged(this[actvCfg.flnm], new nexacro.ChangeEventInfo());
        		}   // if (result)
        	}
        	// /2023.02.07 sg.park - AI-009 MSDS파일 2년경과 갱신처리
        };

        /**
         * 이미지등록 아이템 값 변경시 onitemchanged 이벤트 발생 처리
         */
        this.upldAuthExts = [
        	  'PPTX', "PPT", "DOCX", "DOC", "XLSX", "XLS", "PDF", "HWP"  // Office
        	, "GIF", "PNG" , "JPG", "JPEG"                               // Image
        	, "TEXT", "TXT", "ZIP"                                       // Normal
        ];
        this.FileUploadSingle_onitemchanged = function(obj,e)
        {
        	var actvCfg=this.FileUploadSingle[this.cfg_atfl.prop];  // ATFL_TP_CD [ 95: MSDS시트, 9A: LOC(Letter Of Confirmation) ]

        	var sCompValue = this.FileUploadSingle.value; // 파일 업로드 로컬패스(전용브라우저 가능)
        	var start = sCompValue.lastIndexOf(".");	   						// [object Grid]

        	if ( start > -1) {
        		sCompValue = sCompValue.substr(start + 1, sCompValue.length);  // 확장자명
        	}

        // 	if( !( sCompValue.toUpperCase() == "PPTX" || sCompValue.toUpperCase() == "PPT"
        // 		|| sCompValue.toUpperCase() == "DOCX" || sCompValue.toUpperCase() == "DOC"
        // 		|| sCompValue.toUpperCase() == "XLS"  || sCompValue.toUpperCase() == "XLSX"
        // 		|| sCompValue.toUpperCase() == "TEXT" || sCompValue.toUpperCase() == "ZIP"
        // 		|| sCompValue.toUpperCase() == "TXT"  || sCompValue.toUpperCase() == "PDF"
        // 		|| sCompValue.toUpperCase() == "PNG"  || sCompValue.toUpperCase() == "JPG"
        // 		|| sCompValue.toUpperCase() == "GIF"  || sCompValue.toUpperCase() == "JPEG"
        // 		|| sCompValue.toUpperCase() == "HWP"))
        	if ( this.upldAuthExts.indexOf( sCompValue.toUpperCase() ) < 0 ) {
        		this.fn_alert("ERRR000173","파일 정보","","information");  // 파일형식이 아닙니다.
        		return false;
        	}

        	var sFilePath = this.FileUploadSingle.value;  // 파이로 로컬풀패스
        	var dirExpt   = nexacro.toNumber(sFilePath.lastIndexOf("\\"))+1;    // 파일이름 시작위치
        	var sFileName = sFilePath.substr(dirExpt);                          // 파일명
        	var docRegId  = this.gfn_nvl(this.ds_master.getColumn(0, actvCfg.dsColId), '');
        		docRegId  = docRegId != "" ? docRegId : this.gfn_nvl(this.ds_uploadResult.getColumn(0, 'DOC_REG_ID'), '');

        	var objEnv  = nexacro.getEnvironment();
        	var svcUrl  = objEnv.services["svcUrl"].url;               			        	 // web서버 URL ex)http://localhost:8080/
        	var strUrl  = svcUrl + "rd/file-upload-dowload/save-file-upload-dowload.do?";    // BLOB변환 && 파일업로드 기능
        		strUrl += "&docRegId="+ docRegId;
        		strUrl += "&etcFds2=" + actvCfg.atflTpCd;  // "95";  // ATFL_TP_CD [ 95: MSDS시트, 9A: LOC(Letter Of Confirmation) ]

        	var bSucc = this.FileUploadSingle.upload(strUrl); 		 // 파일 업로드
        };


        /**
         * 이미지 첨부파일 업로드 성공후 onsuccess 이벤트 발생 처리
         */
        this.FileUploadSingle_onsuccess = function(obj,e)
        {
        	var actvCfg=this.FileUploadSingle[this.cfg_atfl.prop];  // ATFL_TP_CD [ 95: MSDS시트, 9A: LOC(Letter Of Confirmation) ]

        	this.ds_uploadResult.assign(e.datasets[0]);
        	this.ds_uploadResult.clear();
        	this.ds_uploadResult.copyData(e.datasets[0]);

        	var delRow = this.ds_saveFileList.findRow('ETC_FDS_2', actvCfg.atflTpCd);  // ATFL_TP_CD [ 95: MSDS시트, 9A: LOC(Letter Of Confirmation) ]
        	this.ds_saveFileList.setColumn(delRow,    'ETC_FDS_2', 'del'           );

        	var strAtflNm = this.ds_uploadResult.getColumn(0, 'ATFL_NM');
        	var textArry  = "";

        	for(var idx=0; idx<strAtflNm.length; idx++) {
        		if(strAtflNm.charCodeAt(idx) != "32") {
        		    textArry += String.fromCharCode(strAtflNm.charCodeAt(idx));
        		}
        	}

        	if(!this.gfn_isNull(textArry)) {
        		this.ds_uploadResult.setColumn(0, "ATFL_NM", textArry);
        	}

        	var nRow = this.ds_saveFileList.addRow();
        	this.ds_saveFileList.copyRow(nRow, this.ds_uploadResult);         	// 싱글 파일 패스

        	// 최초 파일 등록시 상품문서등록ID Set
        	if (this.gfn_nvl(this.ds_master.getColumn(0, actvCfg.dsColId), '') == '') {
        		this.ds_master.setColumn(0, actvCfg.dsColId, this.ds_uploadResult.getColumn(0, 'DOC_REG_ID'));
        	}
        	// this.ds_master.setColumn(0, actvCfg.dsColId, this.ds_uploadResult.getColumn(0, 'DOC_REG_ID'));
        	this.ds_master.setColumn(0, actvCfg.dsColNm, this.ds_uploadResult.getColumn(0, 'ATFL_NM'   ));
        	this.edt_fileName_onchanged(this[actvCfg.flnm], new nexacro.ChangeEventInfo());
        };

        this.FileUploadSingle_onerror = function(obj,e)
        {
        	var msg = ">>>>>>>>> 파일 업로드 에러 발생 >>>>>>>>\n";
        	msg += "error type : " + e.errortype + "\n";
        	msg += "error message : " + e.errormsg + "\n";
        	msg += "status code : " + e.statuscode;

        	this.nRow = -1;

        	this.alert(msg);
        };

        /**
         * 파일 첨부파일 변경시 onchanged 이벤트 발생 처리
         */
        this.edt_fileName_onchanged = function(obj, e)
        {
        	var actvCfg=this.cfg_atfl.loc.flnm==obj.id ? this.cfg_atfl.loc : this.cfg_atfl.msds;
        	var oActvBtn = this[actvCfg.btn];

        	oActvBtn.set_text("파일 등록");
        	obj.set_cursor('');

        	if( !this.gfn_isNull(obj.value) ) {
        		oActvBtn.set_text("삭제");
        		obj.set_cursor("pointer");
        	}
        };

        /**
         * 첨부파일 다운로드 클릭시 oneditclick  이벤트 발생 처리
         */
        this.fileName_oneditclick = function(obj,e)
        {
        	var actvCfg=this.cfg_atfl.loc.flnm==obj.id ? this.cfg_atfl.loc : this.cfg_atfl.msds;

        	var eDocRegId = this[actvCfg.flid].value;  // e.fromobject.value;
        	if (this.gfn_nvl(eDocRegId, '') != '') {
        		//var nDsFlRow = this.ds_saveFileList.findRow('DOC_REG_ID', eDocRegId);
        		var nDsFlRow = this.ds_saveFileList.findRowExpr("DOC_REG_ID=='"+ eDocRegId +"' && ETC_FDS_2=='"+ ('edt_locFileName'==e.fromobject.id ? '9A' : '95') +"'");

        		this.ds_uploadResult.clearData();
        		var nRow = this.ds_uploadResult.addRow();
        		this.ds_uploadResult.copyRow(nRow, this.ds_saveFileList, nDsFlRow);

        		this.fn_fileDownload(this.ds_uploadResult, this.ds_downLoad, this.FileDownload);
        	}
        };

        // 서브원 인증여부
        this.rdo_svronCertYn_onitemchanged = function(obj,e)
        {
        	var ds=this.ds_master, isYes = obj.value == 'Y';
        	if (!isYes) {
        		ds.setColumn(0, 'SRVON_CERT_FNL_CHG_DT' , null);
        // 		ds.setColumn(0, 'SRVON_CERT_UPD_DATE'   , null);
        // 		ds.setColumn(0, 'SRVON_CERT_UPDPSN_IDNM', null);
        	}

        	this.cal_svronCertFnlChgDt.visible = isYes;
        	//if (isYes) { this.cal_svronCertFnlChgDt.setFocus(); }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_file.addEventHandler("onclick",this.btn_file_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.FileUploadSingle.addEventHandler("onitemchanged",this.FileUploadSingle_onitemchanged,this);
            this.FileUploadSingle.addEventHandler("onsuccess",this.FileUploadSingle_onsuccess,this);
            this.FileUploadSingle.addEventHandler("onerror",this.FileUploadSingle_onerror,this);
            this.FileDownload.addEventHandler("onerror",this.FileDownload_onerror,this);
            this.FileDownload.addEventHandler("onsuccess",this.FileDownload_onsuccess,this);
            this.edt_fileName.addEventHandler("oneditclick",this.fileName_oneditclick,this);
            this.edt_fileName.addEventHandler("onchanged",this.edt_fileName_onchanged,this);
            this.rdo_svronCertYn.addEventHandler("onitemchanged",this.rdo_svronCertYn_onitemchanged,this);
            this.edt_locFileName.addEventHandler("oneditclick",this.fileName_oneditclick,this);
            this.edt_locFileName.addEventHandler("onchanged",this.edt_fileName_onchanged,this);
            this.btn_locFile.addEventHandler("onclick",this.btn_file_onclick,this);
            this.ds_master.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
        };
        this.loadIncludeScript("SSP_BO_RD_49.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
