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
            this.set_titletext("R&D MSDS관리 등록");
            this.set_background("black");
            if (Form == this.constructor)
            {
                this._setFormPosition(1140,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_master", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_VIEW_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRVL_LIST\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MSDS_ATTC_FILEID\" type=\"STRING\" size=\"256\"/><Column id=\"RND_MSDS_URL\" type=\"STRING\" size=\"256\"/><Column id=\"FNL_UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MSDS_FNL_CHG_DT\" type=\"STRING\" size=\"32\"/><Column id=\"LOC_ATTC_FILEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_ATTC_FILENM\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_ATFL_FNL_CHG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_ATFL_UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_ATTC_FILE_UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SRVON_CERT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SRVON_CERT_FNL_CHG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SRVON_CERT_UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"SRVON_CERT_UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MSDS_ATTC_FILENM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRVL\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popupList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchChkYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/><Col id=\"MALL_SPR_CD\"/><Col id=\"PRD_ID\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_codeChkYn", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_ID_YN\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_ID_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PRD_ID_YN\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_bg","0","22",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"0","20","20","0",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("X");
            obj.set_visible("true");
            obj.set_background("black");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","573","420","67","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","501","420",null,"24","btn_save:4",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Static("StaticRow_01","20","61",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdId","20","61","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("상품");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            obj.getSetter("uEssentiel").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("sblnk_01","0","50","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sblnk_02","0","398","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("StaticRow_02","20","92",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdClcd","20","92","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("카테고리");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("StaticRow_03","20","122",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("StaticRow_04","20","152",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("StaticRow_05","20","182",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("StaticRow_06","20","212",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("StaticRow_07","20","242",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("StaticRow_08","20","273",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_mnfr","20","122","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_reprSpec","20","152","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("대표규격");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_cprtcp","20","182","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("협력사");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.getSetter("uEssentiel").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_msdsFile","20","212","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("MSDS 파일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.getSetter("uEssentiel").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_fnlUpdDt","20","242","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("MSDS 경로");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.getSetter("uEssentiel").set("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdViewId","196","65","93","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            obj.set_maxlength("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdIdNm","294","65","139","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prdPopup","438","65","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdClcd","196","95","93","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autoselect("true");
            obj.set_maxlength("0");
            obj.set_enableevent("true");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdClNm","294","95","139","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrCd","196","125","93","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_autoselect("true");
            obj.set_maxlength("10");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm","294","125","139","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cprtcpId","196","185","93","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_autoselect("true");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cprtcpNm","294","185","139","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cprtcpPopup","438","185","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_reprSpec","196","155","337","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fileName","196","215","308","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_textDecoration("underline");
            obj.set_color("royalblue");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file","510","215","67","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("파일 등록");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_msdsPath","196","246","329","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","20","20","300","36",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("MSDS 등록");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);

            obj = new Static("sblnk_03","0","447","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("30");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","476","65","93","24",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_autoselect("true");
            obj.set_maxlength("0");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUploadSingle","726","32","290","19",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload","1020","32","98","19",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("FileDownload");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fileId","585","216","207","24",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_enable("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_fnlUpdDt","196","277","104","24",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","3","155","16",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_title02");
            obj.set_color("white");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Static("stc_msdsPath","20","273","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("MSDS 최종개정일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.getSetter("uEssentiel").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("StaticRow_09","20","304",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("StaticRow_10","20","335",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("StaticRow_11","20","365",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_svronCertFnlChgDt","764","339","104","24",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_svronCertUpdDt","764","369","135","24",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_svronCertUpdpsn","904","369","176","24",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_svronCertYn","764","311","144","22",null,null,null,null,null,null,this);
            obj.set_initvalueid("N");
            obj.set_taborder("50");
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

            obj = new Static("stc_svronCertYn","588","304","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("자체증빙여부");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_locFileName","196","308","308","24",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textDecoration("underline");
            obj.set_color("royalblue");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_locFile","510","309","67","23",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("파일 등록");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_locFnlChgDt","196","339","104","24",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_locUpdDt","196","369","135","24",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_readonly("true");
            obj.set_value("2023-01-01 00:00:00");
            obj.set_text("2023-01-01 00:00:00");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_locUpdpsn","336","369","168","24",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_svronCertFnlChgDt","588","335","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("자체증빙일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_svronCertUpdDtPsn","588","365","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("자체증빙 수정일시/수정자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_locFileId","460","339","117","24",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_enable("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_locFile","20","304","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("레터파일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_lttrFnlChgDt","20","335","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("레터파일 최종개정일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_locUpdDtPsn","20","365","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("레터파일 수정일시/수정자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1140,480,this,function(p){});
            obj.set_description("R&D MSDS관리 등록");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_prdViewId","value","ds_master","PRD_VIEW_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_prdIdNm","value","ds_master","PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_prdId","value","ds_master","PRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_prdClcd","value","ds_master","PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_prdClNm","value","ds_master","PRD_CLCD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt_mnfrCd","value","ds_master","MNFR_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt_mnfrNm","value","ds_master","MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_reprSpec","value","ds_master","PRVL_LIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt_cprtcpId","value","ds_master","CPRTCP_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt_cprtcpNm","value","ds_master","CPRTCP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edt_fileName","value","ds_master","MSDS_ATTC_FILENM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edt_msdsPath","value","ds_master","RND_MSDS_URL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edt_fileId","value","ds_master","MSDS_ATTC_FILEID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","cal_fnlUpdDt","value","ds_master","MSDS_FNL_CHG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","cal_svronCertFnlChgDt","value","ds_master","SRVON_CERT_FNL_CHG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","edt_svronCertUpdDt","value","ds_master","SRVON_CERT_UPD_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edt_svronCertUpdpsn","value","ds_master","SRVON_CERT_UPDPSN_IDNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","rdo_svronCertYn","value","ds_master","SRVON_CERT_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","edt_locFileName","value","ds_master","LOC_ATTC_FILENM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","cal_locFnlChgDt","value","ds_master","LOC_ATFL_FNL_CHG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","edt_locUpdDt","value","ds_master","LOC_ATFL_UPD_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","edt_locUpdpsn","value","ds_master","LOC_ATTC_FILE_UPDPSN_IDNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","edt_locFileId","value","ds_master","LOC_ATTC_FILEID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","ds_master");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_RD_48.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_RD_48.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_RD_48.xfdl(R&D MSDS관리 등록 팝업)
        * 작 성			일 명: 손나라
        * 작 성	    	일 자: 2022/05/13
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
        this.lvGetDate      = "";
        this.existYn        = "";
        this.lv_coCd        = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"") == "" ? "1000" : this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"");
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

        	this.fn_PostformInit();

        };

        this.fn_PostformInit = function()
        {
        	this.lvGetDate = this.fn_getSvrDate();             // 각각 실시간으로 시스템의 현재일자를 가지고 오는 함수.

        	this.ds_master.clearData();
        	var nRow = this.ds_master.addRow();
        	this.ds_master.setColumn(nRow, 'CO_CD'        , this.lv_coCd);
        	//this.ds_master.setColumn(nRow,"MSDS_FNL_CHG_DT",this.lvGetDate); 현재 일자 셋팅
        	this.ds_master.setColumn(nRow, 'SRVON_CERT_YN', 'N');

        	this.edt_prdViewId.setFocus();
        };


        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
        	if(nErrorCode != 0)
        	{
        		if(nErrorCode == -200)
        		{
        			this.fn_alert("ERRR000204","에러정보","","error");
        			this.edt_cprtcpId.setFocus();
        			return false;
        		}
        		if(nErrorCode == -150) {
        			this.fn_alert("ERRR000160","에러정보","","error");
        			this.edt_cprtcpId.setFocus();
        			return false;
        		}

        	}else
        	{
        		/*sSvcId (Transaction Id)*/
        		switch(sSvcId)
        		{
        			case "Init":
        				this.fn_PostformInit();
        				break;
        			case "Save":
        			    this.fn_PostSave();
        				break;
        			case "validationCprtcp":

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
                // 카테고리 조회팝업 후처리
        		case "SSP_BO_PP_38" :
        				if(!this.gfn_isNull(strVal))
        				{
        					var jsonData = JSON.parse(strVal);
        					this.edt_prdViewId.set_value(jsonData.PRD_ID_VIEW);
        					this.edt_prdIdNm.set_value(jsonData.PRD_NM);
        					this.edt_prdId.set_value(jsonData.PRD_ID);
        					this.edt_prdClcd.set_value(jsonData.PRD_CLCD);
        					this.edt_prdClNm.set_value(jsonData.FULL_PRD_CLSF_NM);
        					this.edt_mnfrCd.set_value(jsonData.MNFR_NO);
        					this.edt_mnfrNm.set_value(jsonData.MNFR_NM);
        					this.edt_reprSpec.set_value(jsonData.ATTR_VAL);
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        			 break;
        		// 제조원 조회팝업 후처리
        		case "SSP_BO_PP_41" :

        				if(!this.gfn_isNull(strVal))
        				{	var jsonData = JSON.parse(strVal);

        					// SSP-623 : 협력사 MSDS정보 유무 검증
        					var prdId = this.gfn_trim(this.edt_prdId.value);
        					var cprtcpId = jsonData.CPRTCP_ID;

        					if(!this.fn_cprtcpValidation(prdId, cprtcpId)){
        						return false;
        					}

        					this.edt_cprtcpId.set_value(jsonData.CPRTCP_ID);
        					this.edt_cprtcpNm.set_value(jsonData.CPRTCP_KOR_NM);
        				}else
        				{
        				// 닫기 버튼 처리
        				}
        		     break;
                default:
                    break;
            }
        };

        /**********************************************************************
        	05. 조회 함수 선언
        ***********************************************************************/
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

        	if(this.gfn_isNull(this.edt_prdId.value) )
        	{
        		this.fn_alert("ERRS000144","저장","상품 ","question");                       // 상품 &1은(는) 필수입력사항입니다.
        		this.edt_prdViewId.setFocus();
        		return false;
        	}
        	if(this.gfn_isNull(this.edt_cprtcpId.value) )
        	{
        		this.fn_alert("ERRS000144","저장","협력사 ","question");                     // 협력사 &1은(는) 필수입력사항입니다.
        		this.edt_cprtcpId.setFocus();
        		return false;
        	}

        	if(this.gfn_isNull(this.cal_fnlUpdDt.value) )
        	{
        		this.fn_alert("ERRS000144","저장","MSDS 최종개정일 ","question");                     // 협력사 &1은(는) 필수입력사항입니다.
        		this.cal_fnlUpdDt.setFocus();
        		return false;
        	}
        	if(this.gfn_isNull(this.edt_fileName.value) && this.gfn_isNull(this.edt_msdsPath.value) )
        	{
        		this.fn_alert("ERRS000136","저장","MSDS 파일,MSDS 경로","question");        // MSDS 파일,MSDS 경로 (&1 또는 &2 둘 중에 하나는 필수입니다)
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

        	//  상품ID 적합성 체크
        	if (!this.fn_codeChkYn()) { return false; }

        	var result = this.fn_confirm( "ERRR000098", "저장","", "question" );            // 저장 하시겠습니까?
        	if (result == 0) { return false; }

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


        /**
         * 상품ID && 협력사 코드 적합성 체크
         */
        this.fn_codeChkYn = function()
        {
        	this.ds_searchChkYn.clearData();
        	var nRow = this.ds_searchChkYn.addRow();

        	this.ds_searchChkYn.setColumn(nRow,"CO_CD",			this.lv_coCd);
        	this.ds_searchChkYn.setColumn(nRow,"MALL_SPR_CD",	this.mallSprCd );
        	this.ds_searchChkYn.setColumn(nRow,"PRD_ID",	    this.gfn_trim(this.edt_prdViewId.value));
        	this.ds_searchChkYn.setColumn(nRow,"CPRTCP_ID",	    this.gfn_trim(this.edt_cprtcpId.value));

        	var strSvc      = "CodeYn";
            var strUrl      = "/rd/msds-mng/select-code-chk-yn.do";
            var strInDs     = "ds_searchChkYn=ds_searchChkYn";
            var strOutDs    = "ds_codeChkYn=ds_codeChkYn";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = false;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);


        	var strPrdIdYn 	= this.ds_codeChkYn.getColumn(0,"PRD_ID_YN");
        	var strCprtcpYn = this.ds_codeChkYn.getColumn(0,"CPRTCP_ID_YN");

        	// 상품ID
        	if(strPrdIdYn == "N")
        	{
        		this.fn_alert("ERRR000174","저장정보","상품ID","question"); // 존재하지 않는 &1 입니다.
        		this.edt_prdViewId.setFocus();
        		return false;
        	}

        	// 협력사 코드
        	if(strCprtcpYn == "N")
        	{
        		this.fn_alert("ERRR000174","저장정보","협력사 코드","question"); // 존재하지 않는 &1 입니다.
        		this.edt_cprtcpId.setFocus();
        		return false;
        	}

        	return true;
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

        /***********************************************************************************************
        *  상품 조회팝업 시작
        /***********************************************************************************************/
        /**
         * 조회조건 상품 조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_prdPopup_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.edt_prdViewId.value);
        	this.fn_setCallPopup(sCodeId);
        };

        /**
         * 입력창을 지우면 자동을 이름도 초기화처리
         */

        this.edt_prdViewId_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.ds_master.clearData();
        		var nRow = this.ds_master.addRow();
        		this.ds_master.setColumn(nRow,"CO_CD",this.lv_coCd);
        	}
        };

        /**
         * 입력에디터에 코드/명을 입력시 처리
         * 한행 바로셋팅/여러행일시 팝업을 띄운다.(단 입력창에 한글자 이상일때만 처리가능)
         */
        this.edt_prdViewId_onkeyup = function(obj,e)
        {
        	var sCodeId =  this.gfn_trim(this.edt_prdViewId.value);

        	//13(Enter) 누르면 조회
        	if(e.keycode == 13)
        	{	if(!this.gfn_isNull(sCodeId))
        		{
        			this.fn_setCallPopup(sCodeId);
        		}
        	}
        };
        /**
         * 실제로 처리하는 팝업함수
         */
        this.fn_setCallPopup = function(sCodeId)
        {
        	this.ds_input.clearData();
        	this.ds_popupList.clearData();
        	var nRow = this.ds_input.addRow();

        	if(!this.gfn_isNull(sCodeId))
        	{
        		this.ds_input.setColumn(nRow,"CO_CD", 			this.lv_coCd);
        		this.ds_input.setColumn(nRow,"PRD_ID",  		sCodeId);
        		this.ds_input.setColumn(nRow,"MALL_SPR_CD",		this.mallSprCd );
        		this.ds_input.setColumn(nRow,"ROW_COUNT",  		1000);
        		this.ds_input.setColumn(nRow,"START_NUM",  		0);

        		var strSvc 		= "Search";
        		var strUrl 		= "/pr/prd-popup/select-product-popup-list.do";
        		var strInDs  	= "ds_search=ds_input";                                 // 물리적 생성 ds_input
        		var strOutDs 	= "ds_popupList=ds_list";                               // 물리적 생성 ds_popupList
        		var strArg 		= "";
        		var strCallBack = "fn_callBack";    									// 공백일시 기본 fn_callBack
        		var strASync    = false;												// 생략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_transaction( strSvc
        							, strUrl
        							, strInDs
        							, strOutDs
        							, strArg
        							, strCallBack
        							, strASync);
        	}

        	if(this.ds_popupList.rowcount == 1)
        	{
        		this.ds_master.setColumn(this.ds_master.rowposition,"PRD_VIEW_ID",  this.ds_popupList.getColumn(0,"PRD_ID_VIEW"));
        		this.ds_master.setColumn(this.ds_master.rowposition,"PRD_NM", 		this.ds_popupList.getColumn(0,"PRD_NM"));
        		this.ds_master.setColumn(this.ds_master.rowposition,"PRD_ID", 		this.ds_popupList.getColumn(0,"PRD_ID"));
        		this.ds_master.setColumn(this.ds_master.rowposition,"PRD_CLCD", 	this.ds_popupList.getColumn(0,"PRD_CLCD"));
        		this.ds_master.setColumn(this.ds_master.rowposition,"PRD_CLCD_NM", 	this.ds_popupList.getColumn(0,"FULL_PRD_CLSF_NM"));
        		this.ds_master.setColumn(this.ds_master.rowposition,"MNFR_NO", 		this.ds_popupList.getColumn(0,"MNFR_NO"));
        		this.ds_master.setColumn(this.ds_master.rowposition,"MNFR_NM", 		this.ds_popupList.getColumn(0,"MNFR_NM"));
        		this.ds_master.setColumn(this.ds_master.rowposition,"PRVL_LIST", 	this.ds_popupList.getColumn(0,"ATTR_VAL"));

        	} else
        	{

        		var params  = { coCd      : this.lv_coCd
        		              , prdId     : sCodeId
        					  , mallSprCd : this.mallSprCd };
        		var options = { title  :  "상품ID 단일조회" };

        		this.gfn_openPopup( "SSP_BO_PP_38"
        		                  , "PR_POP::SSP_BO_PP_38.xfdl"
        						  , params
        						  , "fn_popupCallback"
        					      , options);

        	}
        };
        /***********************************************************************************************
        *  상품 조회팝업 종료
        /***********************************************************************************************/
        /***********************************************************************************************
        *  협력사 조회팝업 시작
        /***********************************************************************************************/
        /**
         * 조회조건 협력사 조회팝업 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_cprtcpPopup_onclick = function(obj,e)
        {
        	//SSP-623 : 협력사를 조회하는 시점에 상품ID정보가 있어야 해당협력사의 MSDS정보유무를 조회가능
        	if(this.gfn_isNull(this.edt_prdId.value)){

        		this.fn_alert("ERRR000185","에러정보","","error");	// 상품ID 먼저 등록하셔야 합니다.
        		return false;
        	}
        	var sCodeId = this.gfn_trim(this.edt_cprtcpId.value);
        	this.fn_setCallPopup01(sCodeId);

        };
        /**
         * 입력창을 지우면 자동을 이름도 초기화처리
         */
        this.edt_cprtcpId_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.edt_cprtcpNm.set_value("");
        	}
        };

        /**
         * 입력에디터에 코드/명을 입력시 처리
         * 한행 바로셋팅/여러행일시 팝업을 띄운다.(단 입력창에 한글자 이상일때만 처리가능)
         */
        this.edt_cprtcpId_onkeyup = function(obj,e)
        {
        	var sCodeId =  this.gfn_trim(this.edt_cprtcpId.value);

        	//13(Enter) 누르면 조회
        	if(e.keycode == 13)
        	{	if(!this.gfn_isNull(sCodeId))
        		{
        			this.fn_setCallPopup01(sCodeId);
        		}
        	}
        };

        /**
         * 실제로 처리하는 팝업함수
         */
        this.fn_setCallPopup01 = function(sCodeId)
        {
        	this.ds_input.clearData();
        	this.ds_popupList.clearData();
        	var nRow = this.ds_input.addRow();

        	if(!this.gfn_isNull(sCodeId))
        	{
        		this.ds_input.setColumn(nRow,"CO_CD",      this.lv_coCd);
        		this.ds_input.setColumn(nRow,"CPRTCP_ID",  sCodeId);
        		this.ds_input.setColumn(nRow,"MALL_SPR_CD",this.mallSprCd);
        		this.ds_input.setColumn(nRow,"ROW_COUNT",  1000);
        		this.ds_input.setColumn(nRow,"START_NUM",  0);

        		var strSvc 		= "Search";
        		var strUrl 		= "/pp/ppcprtcpInqPopup/selectPpcprtcpInqPopuplst.do";
        		var strInDs  	= "ds_search=ds_input";                                 // 물리적 생성 ds_input
        		var strOutDs 	= "ds_popupList=manufacturerList";                               // 물리적 생성 ds_popupList
        		var strArg 		= "";
        		var strCallBack = "fn_callBack";    									// 공백일시 기본 fn_callBack
        		var strASync    = false;												// 생략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_transaction( strSvc
        							, strUrl
        							, strInDs
        							, strOutDs
        							, strArg
        							, strCallBack
        							, strASync);
        	}

        	//SSP-623
        	var prdId = this.gfn_trim(this.edt_prdId.value);

        	if(this.ds_popupList.rowcount == 1)
        	{
        		// SSP-623 : 협력사 MSDS정보 유무 검증
        		var cprtcpId = this.ds_popupList.getColumn(0,"CPRTCP_ID");

        		if(!this.fn_cprtcpValidation(prdId, cprtcpId)){
        			return false;
        		}

        		this.ds_master.setColumn(this.ds_master.rowposition,"CPRTCP_ID", cprtcpId);
        		this.ds_master.setColumn(this.ds_master.rowposition,"CPRTCP_NM", this.ds_popupList.getColumn(0,"CPRTCP_KOR_NM"));
        	} else
        	{
        		var params  = { coCd     : this.lv_coCd
        					  , cprtcpId : sCodeId
        					  };
        		var options = { title    : "협력사" };
        		this.gfn_openPopup( "SSP_BO_PP_41"
        						  , "PP_POP::SSP_BO_PP_41.xfdl"
        						  , params
        						  , "fn_popupCallback"
        						  , options);

        	}
        };

        //SSP-623 : 협력사 MSDS정보 유무 검증
        this.fn_cprtcpValidation = function(prdId, cprtcpId){

        	this.ds_input.clearData();
        	var nRow = this.ds_input.addRow();

        	this.ds_input.setColumn(nRow,"CO_CD", 			this.lv_coCd);
        	this.ds_input.setColumn(nRow,"PRD_ID",  		prdId);
        	this.ds_input.setColumn(nRow,"CPRTCP_ID",		cprtcpId);

        	var strSvc 		= "validationCprtcp";
        	var strUrl 		= "/rd/msds-mng/validation-cprtcp.do";
        	var strInDs  	= "ds_search=ds_input";
        	var strOutDs 	= "";
        	var strArg 		= "";
        	var strCallBack = "fn_callBack";
        	var strASync    = false;
        	this.gfn_transaction( strSvc
        						, strUrl
        						, strInDs
        						, strOutDs
        						, strArg
        						, strCallBack
        						, strASync);

        	if(this.existYn == 'N'){
        		return true;
        	}
        	else{
        		return false;
        	}

        }

        /***********************************************************************************************
        *  협력사 조회팝업 종료
        /***********************************************************************************************/

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
        /*
        	if(obj.text == "파일 등록")
        	{
        		this.FileUploadSingle.deleteItem(0);
        		this.FileUploadSingle.appendItem();
        		this.FileUploadSingle.filefindbuttons[0].click();
        	}
        	else
        	{
        		var result = this.fn_confirm( "ERRR000134", "파일 삭제","", "question" ); // 등록된 파일을 삭제하시겠습니까?

        		if(result)
        		{
        			var delRow = this.ds_saveFileList.findRow("ETC_FDS_2","95");
        			this.ds_saveFileList.setColumn(delRow,"ETC_FDS_2","del");
        			this.edt_fileName.set_value("");
        			this.edt_fileId.set_value("");
        			this.edt_fileName_onchanged(this.edt_fileName,new nexacro.ChangeEventInfo());
        		}
        	}
        */
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

        	if( start > -1)
        	{
        		sCompValue = sCompValue.substr(start + 1, sCompValue.length);  // 확장자명
        	}

        // 	if(!(sCompValue.toUpperCase() == "PPTX" || sCompValue.toUpperCase() == "PPT"
        //       || sCompValue.toUpperCase() == "DOCX" || sCompValue.toUpperCase() == "DOC"
        // 	  || sCompValue.toUpperCase() == "XLS"  || sCompValue.toUpperCase() == "XLSX"
        // 	  || sCompValue.toUpperCase() == "TEXT" || sCompValue.toUpperCase() == "ZIP"
        // 	  || sCompValue.toUpperCase() == "TXT"  || sCompValue.toUpperCase() == "PDF"
        // 	  || sCompValue.toUpperCase() == "PNG"  || sCompValue.toUpperCase() == "JPG"
        // 	  || sCompValue.toUpperCase() == "GIF"  || sCompValue.toUpperCase() == "JPEG"
        // 	  || sCompValue.toUpperCase() == "HWP"))
        	if ( this.upldAuthExts.indexOf( sCompValue.toUpperCase() ) < 0 ) {
        		this.fn_alert("ERRR000173","파일 정보","파일","information");  // 파일형식이 아닙니다.
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
        		this.ds_uploadResult.setColumn(0, "ATFL_NM",textArry);
        	}

        	var nRow = this.ds_saveFileList.addRow();
        	this.ds_saveFileList.copyRow(nRow,this.ds_uploadResult);         	// 싱글 파일 패스

        	// 최초 파일 등록시 상품문서등록ID Set
        	if (this.gfn_nvl(this.ds_master.getColumn(0, actvCfg.dsColId), '') == '') {
        		this.ds_master.setColumn(0, actvCfg.dsColId, this.ds_uploadResult.getColumn(0, 'DOC_REG_ID'));
        	}
        	// this.ds_master.setColumn(0, actvCfg.dsColId, this.ds_uploadResult.getColumn(0, 'DOC_REG_ID'));
        	this.ds_master.setColumn(0, actvCfg.dsColNm, this.ds_uploadResult.getColumn(0, 'ATFL_NM'   ));    console.log('fl: '+ this.ds_master.getColumn(0, actvCfg.dsColNm));
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
        this.edt_fileName_onchanged = function(obj,e)
        {
        	var actvCfg=this.cfg_atfl.loc.flnm==obj.id ? this.cfg_atfl.loc : this.cfg_atfl.msds;    console.log('fl: '+ this.ds_master.getColumn(0, actvCfg.dsColNm));
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
        	if(this.gfn_nvl(eDocRegId,"") != "")
        	{
        		var nDsFlRow = this.ds_saveFileList.findRowExpr("DOC_REG_ID=='"+ eDocRegId +"' && ETC_FDS_2=='"+ ('edt_locFileName'==e.fromobject.id ? '9A' : '95') +"'");

        		this.ds_uploadResult.clearData();
        		var nRow = this.ds_uploadResult.addRow();
        		this.ds_uploadResult.copyRow(nRow,this.ds_saveFileList, nDsFlRow);

        		this.fn_fileDownload(this.ds_uploadResult,this.ds_downLoad,this.FileDownload);
        	}
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.edt_prdViewId.addEventHandler("onkeyup",this.edt_prdViewId_onkeyup,this);
            this.edt_prdViewId.addEventHandler("oninput",this.edt_prdViewId_oninput,this);
            this.btn_prdPopup.addEventHandler("onclick",this.btn_prdPopup_onclick,this);
            this.edt_prdClcd.addEventHandler("onkeyup",this.edtSizeCd_onkeyup,this);
            this.edt_prdClcd.addEventHandler("oninput",this.edtSizeCd_oninput,this);
            this.edt_mnfrCd.addEventHandler("onkeyup",this.edtSizeCd_onkeyup,this);
            this.edt_mnfrCd.addEventHandler("oninput",this.edtSizeCd_oninput,this);
            this.edt_cprtcpId.addEventHandler("onkeyup",this.edt_cprtcpId_onkeyup,this);
            this.edt_cprtcpId.addEventHandler("oninput",this.edt_cprtcpId_oninput,this);
            this.btn_cprtcpPopup.addEventHandler("onclick",this.btn_cprtcpPopup_onclick,this);
            this.edt_fileName.addEventHandler("onchanged",this.edt_fileName_onchanged,this);
            this.edt_fileName.addEventHandler("oneditclick",this.fileName_oneditclick,this);
            this.btn_file.addEventHandler("onclick",this.btn_file_onclick,this);
            this.edt_prdId.addEventHandler("onkeyup",this.edtSizeCd_onkeyup,this);
            this.edt_prdId.addEventHandler("oninput",this.edtSizeCd_oninput,this);
            this.FileUploadSingle.addEventHandler("onitemchanged",this.FileUploadSingle_onitemchanged,this);
            this.FileUploadSingle.addEventHandler("onsuccess",this.FileUploadSingle_onsuccess,this);
            this.FileUploadSingle.addEventHandler("onerror",this.FileUploadSingle_onerror,this);
            this.FileDownload.addEventHandler("onerror",this.FileDownload_onerror,this);
            this.FileDownload.addEventHandler("onsuccess",this.FileDownload_onsuccess,this);
            this.rdo_svronCertYn.addEventHandler("onitemchanged",this.rdo_svronCertYn_onitemchanged,this);
            this.edt_locFileName.addEventHandler("oneditclick",this.fileName_oneditclick,this);
            this.edt_locFileName.addEventHandler("onchanged",this.edt_fileName_onchanged,this);
            this.btn_locFile.addEventHandler("onclick",this.btn_file_onclick,this);
            this.ds_master.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
        };
        this.loadIncludeScript("SSP_BO_RD_48.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
