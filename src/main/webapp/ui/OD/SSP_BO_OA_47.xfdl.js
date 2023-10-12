(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_OA_47");
            this.set_titletext("주문연계현황 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PROC_RSLT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MD_CHRPSN\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHRPSN\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_CHRPSN\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_CHRPSN\" type=\"STRING\" size=\"256\"/><Column id=\"IS_SSP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list01", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"JNT_ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IF_MSG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PROC_RSLT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PROC_RSLT_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PROC_RSLT_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PI_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_IF_MSG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_IF_MSG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"IF_MSG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RETRY_PROC_RSLT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_CRT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"IF_SYSTEM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_CHRPSN_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_CHRPSN_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_CHRPSN_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MD_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MD_CHRPSN_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TNO\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SND_USR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fromServer", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"RTN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RTN_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list02", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"JNT_ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IF_MSG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PROC_RSLT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PROC_RSLT_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PROC_RSLT_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PI_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_IF_MSG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_IF_MSG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"IF_MSG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RETRY_PROC_RSLT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IF_RSLT_FLD_1\" type=\"STRING\" size=\"256\"/><Column id=\"IF_RSLT_FLD_2\" type=\"STRING\" size=\"256\"/><Column id=\"IF_RSLT_FLD_3\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IF_SYSTEM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_CRT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_CRT_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VOC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SND_USR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"JNT_ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IF_MSG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PROC_RSLT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PROC_RSLT_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PROC_RSLT_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PI_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_IF_MSG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_IF_MSG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"IF_MSG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RETRY_PROC_RSLT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IF_SYSTEM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchCoCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IS_TOTAL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_CLSF_CD\">CUST_SPR_CD</Col><Col id=\"IS_TOTAL\">Y</Col></Row><Row><Col id=\"COM_CLSF_CD\">MALL_SPR_CD</Col><Col id=\"IS_TOTAL\">Y</Col></Row><Row><Col id=\"COM_CLSF_CD\">PI_SPR_CD</Col><Col id=\"IS_TOTAL\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCDCustTP", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCDMallSpr", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCDPiSprCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,"187","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchArea");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","20","20",null,"157","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_background("transparent");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","0","0",null,"32","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static07","0","31",null,"32","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static04","862","0","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("13");
            obj.set_text("상품 ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static06","430","31","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("14");
            obj.set_text("몰구분");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_usedecorate("false");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_00","862","31","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("15");
            obj.set_text("주문 생성일");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("16");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_usedecorate("true");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static22","430","0","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("17");
            obj.set_text("주문번호");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_usedecorate("true");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_01","0","31","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("18");
            obj.set_text("주문상태");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_oprUnit","140","4","228","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_text("112");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01","130","0","10","30",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_oprUnitMultiPopup","edt_oprUnit:4","4","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_multi");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_oprUnitInput","btn_oprUnitMultiPopup:4","4","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_odrNo","570","4","228","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("3");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00","560","0","10","30",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_odrNoMultiPopup","edt_odrNo:4","4","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_odrNoInput","btn_odrNoMultiPopup:4","4","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_document");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_fromTo","1139","35","9","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("21");
            obj.set_text("~");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Calendar("cal_inqEnd","1157","35","130","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("9");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","1002","4","228","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("6");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00_00","992","1","10","30",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_prdIdMultiPopup","edt_prdId:4","4","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_prdIdInput","btn_prdIdMultiPopup:4","4","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_document");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_mallSpr","570","35","228","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_comCDMallSpr");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("10");
            obj.set_index("0");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","61",null,"32","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_01_00","0","61","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("24");
            obj.set_text("전송 상태");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Radio("rdo_transState","141","64","279","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("25");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("4");
            var Div00_form_Div01_form_rdo_transState_innerdataset = new nexacro.NormalDataset("Div00_form_Div01_form_rdo_transState_innerdataset", obj);
            Div00_form_Div01_form_rdo_transState_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">S</Col><Col id=\"datacolumn\">성공</Col></Row><Row><Col id=\"codecolumn\">E</Col><Col id=\"datacolumn\">실패</Col></Row><Row><Col id=\"codecolumn\">P</Col><Col id=\"datacolumn\">진행</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Div01_form_rdo_transState_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_02","430","61","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("26");
            obj.set_text("고객유형");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_usedecorate("false");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_odrStats","141","34","228","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("27");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_odrStatsMultiPopup","373","34","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_odrStatsInput","401","34","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_document");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_00_00","862","61","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("인터페이스 구분");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_custTp","570","65","228","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("31");
            obj.set_innerdataset("ds_comCDCustTP");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Calendar("cal_inqStart","1003","35","129","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("32");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_calendar");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_ifPiId","1002","65","228","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("33");
            obj.set_innerdataset("ds_comCDPiSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static03_00","0","92",null,"32","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static04_00","862","92","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("35");
            obj.set_text("구매담당자");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","92","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("36");
            obj.set_text("MD담당자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_usedecorate("true");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static22_00","430","92","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("37");
            obj.set_text("영업담당자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_usedecorate("true");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_mdChrpsn","140","96","228","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("38");
            obj.set_enable("true");
            obj.set_text("112");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_01","130","92","10","30",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("39");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_mdChrpsnMultiPopup","372","96","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("40");
            obj.set_cssclass("btn_WF_multi");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_mdChrpsnInput","400","96","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("41");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_salsChrpsn","570","96","228","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("42");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00","560","92","10","30",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("43");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_salsChrpsnMultiPopup","802","96","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("44");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_salsChrpsnInput","830","96","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("45");
            obj.set_cssclass("btn_WF_document");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_purgChrpsn","1002","96","228","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("46");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00_00_00","992","93","10","30",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("47");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_purgChrpsnMultiPopup","1234","96","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("48");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_purgChrpsnInput","1262","96","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("49");
            obj.set_cssclass("btn_WF_document");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","0","122",null,"32","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","862","122","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","0","122","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("52");
            obj.set_text("서비스담당자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_usedecorate("true");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static22_00_00","430","122","130","32",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_usedecorate("true");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_oprChrpsn","140","126","228","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("54");
            obj.set_enable("true");
            obj.set_text("112");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_01_00","130","122","10","30",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("55");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_oprChrpsnMultiPopup","372","126","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("56");
            obj.set_cssclass("btn_WF_multi");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_oprChrpsnInput","400","126","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("57");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00_01","560","122","10","30",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("58");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00_00_00_00","992","123","10","30",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("59");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Div("Div01_00","0","Div00:0",null,"36","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"0","60","28","20",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"0","60","28","btn_search:5",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("1");
            obj.set_text("초기화");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("btn_active",null,"0","60","28","150",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("2");
            obj.set_text("활성화");
            obj.set_cssclass("btn_WF_default");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Div("Div00_00","20","Div01_00:10",null,"43.00%","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00",null,"20","30","10","1296",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Grid("grid_list01","0","38",null,null,"0","0",null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_autofittype("none");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_binddataset("ds_list01");
            obj.set_cellsizingtype("col");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"200\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"280\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"행선택\"/><Cell col=\"1\" text=\"주문번호\"/><Cell col=\"2\" text=\"인터페이스 구분\"/><Cell col=\"3\" text=\"상품 ID\"/><Cell col=\"4\" text=\"상품명\"/><Cell col=\"5\" text=\"메세지ID\"/><Cell col=\"6\" text=\"전송일시\"/><Cell col=\"7\" text=\"수신일시\"/><Cell col=\"8\" text=\"성공 여부\"/><Cell col=\"9\" text=\"메시지\"/><Cell col=\"10\" text=\"MRO생성여부\"/><Cell col=\"11\" text=\"VOC NO\"/><Cell col=\"12\" text=\"승인번호\"/><Cell col=\"13\" text=\"승인/취소금액\"/><Cell col=\"14\" text=\"MD담당자\"/><Cell col=\"15\" text=\"영업담당자\"/><Cell col=\"16\" text=\"구매담당자\"/><Cell col=\"17\" text=\"서비스담당자\"/><Cell col=\"18\" text=\"전송자\"/></Band><Band id=\"body\"><Cell displaytype=\"imagecontrol\" text=\"expr:comp.parent.parent.parent.fn_isSelectedRow(currow, comp.currentcell) == true ? &quot;url(&apos;theme://images/btn_WF_page_last.png&apos;)&quot; : &quot;&quot;\"/><Cell col=\"1\" text=\"bind:JNT_ODR_ITM_NO\"/><Cell col=\"2\" text=\"bind:IF_PI_NM\"/><Cell col=\"3\" text=\"bind:PRD_ID\"/><Cell col=\"4\" text=\"bind:PRD_NM\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:IF_MSG_ID\"/><Cell col=\"6\" text=\"bind:REG_DTM\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" text=\"bind:IF_PROC_RSLT_DTM\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" text=\"bind:IF_PROC_RSLT_CD_NM\"/><Cell col=\"9\" displaytype=\"normal\" calendardateformat=\"yyyy.MM.dd\" text=\"bind:IF_PI_MSG\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:MRO_CRT_YN\"/><Cell col=\"11\" text=\"bind:VOC_NO\"/><Cell col=\"12\" text=\"bind:TNO\"/><Cell col=\"13\" text=\"bind:AMOUNT\"/><Cell col=\"14\" text=\"bind:MD_CHRPSN_ID_NM\"/><Cell col=\"15\" text=\"bind:SALS_CHR_CD_NM\"/><Cell col=\"16\" text=\"bind:PURG_CHRPSN_ID_NM\"/><Cell col=\"17\" text=\"bind:SVC_CHRPSN_ID_NM\"/><Cell col=\"18\" text=\"bind:SND_USR_NM\"/></Band></Format></Formats>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("btn_excelDownload",null,"0","110","28","109",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("btn_resend",null,"0","60","28","226",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("3");
            obj.set_text("재전송");
            obj.set_cssclass("btn_WF_default");
            obj.set_enable("true");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("cmb_viewCount",null,"0","104","28","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_type("dropdown");
            var Div00_00_form_cmb_viewCount_innerdataset = new nexacro.NormalDataset("Div00_00_form_cmb_viewCount_innerdataset", obj);
            Div00_00_form_cmb_viewCount_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20개씩</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50개씩</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100개씩</Col></Row><Row><Col id=\"codecolumn\">500</Col><Col id=\"datacolumn\">500개씩</Col></Row><Row><Col id=\"codecolumn\">1000</Col><Col id=\"datacolumn\">1,000개씩</Col></Row><Row><Col id=\"codecolumn\">5000</Col><Col id=\"datacolumn\">5,000개씩</Col></Row><Row><Col id=\"codecolumn\">10000</Col><Col id=\"datacolumn\">10,000개씩</Col></Row></Rows>");
            obj.set_innerdataset(Div00_00_form_cmb_viewCount_innerdataset);
            obj.set_text("100개씩");
            obj.set_value("100");
            obj.set_index("2");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","0","13","240","14",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("5");
            obj.set_text("(총 0건 1/1)");
            obj.set_usedecorate("true");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Div("div_paging","20",null,null,"30","20","200",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","20","div_paging:20",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Static("sta_stlInfo","0","0","200","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("■ 주문 전송 이력");
            obj.set_cssclass("sta_WF_title01");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("grid_list02","0","30",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_autofittype("none");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_binddataset("ds_list02");
            obj.set_cellsizingtype("col");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"280\"/><Column size=\"140\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"주문번호\"/><Cell col=\"1\" text=\"인터페이스 구분\"/><Cell col=\"2\" text=\"상품 ID\"/><Cell col=\"3\" text=\"상품명\"/><Cell col=\"4\" text=\"MRO생성여부\"/><Cell col=\"5\" text=\"VOC NO\"/><Cell col=\"6\" text=\"메세지ID\"/><Cell col=\"7\" text=\"전송일시\"/><Cell col=\"8\" text=\"수신일시\"/><Cell col=\"9\" text=\"성공 여부\"/><Cell col=\"10\" text=\"메시지\"/><Cell col=\"11\" text=\"전송자\"/></Band><Band id=\"body\"><Cell text=\"bind:JNT_ODR_ITM_NO\"/><Cell col=\"1\" text=\"bind:IF_PI_NM\"/><Cell col=\"2\" text=\"bind:PRD_ID\"/><Cell col=\"3\" text=\"bind:PRD_NM\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:MRO_CRT_YN_NM\"/><Cell col=\"5\" text=\"bind:VOC_NO\"/><Cell col=\"6\" text=\"bind:IF_MSG_ID\"/><Cell col=\"7\" text=\"bind:REG_DTM\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" text=\"bind:IF_PROC_RSLT_DTM\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" text=\"bind:IF_PROC_RSLT_CD_NM\"/><Cell col=\"10\" displaytype=\"normal\" calendardateformat=\"yyyy.MM.dd\" text=\"bind:IF_PI_MSG\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:SND_USR_NM\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_excelDownload2",null,"0","110","28","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.Div01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","Div00.form.Div01.form.cmb_custTp","value","ds_search","CUST_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.Div01.form.cal_inqStart","value","ds_search","FROM_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.Div01.form.cal_inqEnd","value","ds_search","TO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div00.form.Div01.form.rdo_transState","value","ds_search","IF_PROC_RSLT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div00.form.Div01.form.cmb_mallSpr","value","ds_search","MALL_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.Div01.form.cmb_ifPiId","value","ds_search","IF_PI_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_OA_47.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_OA_47.xfdl", function() {
        // 연계정보 조회

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        this.fv_oApp = nexacro.getApplication();	//application object
        this.totalCount = 0;
        this.selectedRow = -1;

        this.lockType = {UNKNOWN:-1, ACTIVE:0, LOCK:1, RELEASE:2};	// 활성화:0, 잠금:1, 초기화:2
        /***********************************************************************************************
        * FORM EVENT 영역
        ************************************************************************************************/
        this.SSP_BO_OA_42_onload = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.resetScroll();
        	this.fn_odCommLoading();

        	this.fn_initView();

        	this.copyPaste.addGrid(this.Div00_00.form.grid_list01);
        	this.copyPaste.addGrid(this.Div01.form.grid_list02);
        	this.fn_regShortCutMethod();
        };

        this.SSP_BO_OA_47_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_search = function(page) {
            var sSvcId = "selectSndRcvInfoList";
            var sUrl = "/od/oderlist/selectSndRcvInfoList.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_list01=ds_output1 ds_search=ds_output2";
            var arg = "";

            if (page) {
                var oPaging = this.div_paging;
                oPaging.uPage = 1;
                oPaging.uPageNum = 0;
                this.ds_search.setColumn(0, "START_NUM", 0);
        		this.ds_search.setColumn(0, "ROW_COUNT", this.Div00_00.form.cmb_viewCount.value);
                this.ds_search.setColumn(0, "SORT_COLUMN", "");
                this.ds_search.setColumn(0, "SORT_TYPE", "");
                this.ds_search.setColumn(0, "INQ_COND_DTLS", this.name);
                this.ds_search.setColumn(0, "CO_CD", this.fv_coCd);
                this.ds_search.setColumn(0, "TOTAL_COUNT", -1);
        		this.ds_search.setColumn(0, "IS_SSP", "Y");
            }
        	trace(this.fn_getStrFromDataset(this.ds_search, 0));
            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 공통코드
        this.fn_searchCommonCode = function() {
            var sSvcId = "selectCommonCodeList";
            var sUrl = "/od/odrPopup/selectCommonCodeList.do";
            var inDs = "ds_search=ds_searchCoCd";
            var outDs = "ds_comCd=ds_output1";
            var arg = "";
            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 재전송
        this.fn_requestResend = function() {
        	var sSvcId = "interfaceInfoResend";
            var sUrl = "/od/oderlist/interfaceInfoResend.do";
            var inDs = "ds_search=ds_search2";
            var outDs = "ds_fromServer=ds_output1";
            var arg = "";

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        this.fn_selectSndRcvInfoList2 = function() {
        	var sSvcId = "selectSndRcvInfoList2";
        	var sUrl = "/od/oderlist/selectSndRcvInfoList2.do";
        	var inDs = "ds_search=ds_search2";
        	var outDs = "ds_list02=ds_output1";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/

        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if (svcID == "selectSndRcvInfoList") {
        		this.div_paging.form.cfn_createPage(this.div_paging, this.totalCount, this.Div00_00.form.cmb_viewCount.value, "fn_pageCallback");
        		this.fn_changeSearchConditionLock(this.lockType.LOCK);

        		this.fn_resetSubGrid();
        	}
        	else if (svcID == "selectCommonCodeList") {
                this.fn_setCommonCode();
        		this.Div00.form.Div01.form.cmb_ifPiId.set_index(0);
            }
        	else if (svcID == "insertOdrInqTgtDtls") {
        		this.fn_search(true);
        	}
        	else if (svcID == "selectSndRcvInfoList2") {
        		if (errorCode < 0) {
        			//alert(errorMsg);
        		}
        	}
        	else if (svcID == "interfaceInfoResend") {
        		if (errorCode < 0) {
        			//alert(errorMsg);
        		}
        		else {
        			alert(this.fn_getMessage("ERRS000391"));
        		}
        	}
        };

        //페이징 콜백
        this.fn_pageCallback = function(sFlag) {
        	var oPaging = this.div_paging;

        	if (sFlag) {
        		this.ds_search.setColumn(0, "START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0, "ROW_COUNT", this.Div00_00.form.cmb_viewCount.value);
        		this.fn_search(false);
        		this.selectedRow = -1;
        		this.ds_list02.clearData();
        	}

        	var sTotText = "(<b v='true'>총 "+ oPaging.uTotCount+"건 </b><fc v='red'>"+ oPaging.uPage +"</fc> / "+ oPaging.uPageCnt +")";
        	this.Div00_00.form.sta_totcnt.set_text(sTotText);
        };


        /***********************************************************************************************
        * POPUP CALLBACK 영역
        ************************************************************************************************/
        this.fn_popupCallback = function(sPopupId, sRetValue) {
            var resData = "";
            var sIdList = "";
            var sNmList = "";

            if (sRetValue == undefined) {
                return;
            }
            else {
                resData = JSON.parse(sRetValue);
            }

            switch (sPopupId) {
                // 운영단위 멀티 팝업
                case "oprUnitMultiPopup":
                    for(var i = 0; i < resData.length; i++) {
                        var rtnData = JSON.parse(resData[i]);
                        sIdList += rtnData.OPR_UNIT_ID +",";
                        sNmList += rtnData.OPR_UNIT_NM +",";
                    }
                    this.Div00.form.Div01.form.edt_oprUnit.set_value(sIdList);
                    //this.fn_setMSearch(this.name, "OPR_UNIT_ID", sIdList);
                    break;
                // 운영단위 멀티 INPUT
                case "SSP_BO_OA_42;OPR_UNIT_ID":
                    for(var i = 0; i < resData.length; i++) {
                        var rtnData = JSON.parse(resData[i]);
                        sIdList += rtnData.VALUE +",";
                    }
                    this.Div00.form.Div01.form.edt_oprUnit.set_value(sIdList);
                    //this.fn_setMSearch(this.name, "OPR_UNIT_ID", sIdList);
                    break;
                // 주문번호 멀티 팝업
                case "odrNoPopup":
                    for(var i = 0; i < resData.length; i++) {
                        var rtnData = JSON.parse(resData[i]);
                        sIdList += rtnData.ODR_NO +",";
                    }
                    this.Div00.form.Div01.form.edt_odrNo.set_value(sIdList);
                    //this.fn_setMSearch(this.name, "ODR_NO", sIdList);
                    break;
                // 주문번호 멀티 INPUT
                case "SSP_BO_OA_42;ODR_NO":
                    for(var i = 0; i < resData.length; i++) {
                        var rtnData = JSON.parse(resData[i]);
                        sIdList += rtnData.VALUE +",";
                    }
                    this.Div00.form.Div01.form.edt_odrNo.set_value(sIdList);
                    //this.fn_setMSearch(this.name, "ODR_NO", sIdList);
                    break;
                // 주문상태 멀티 팝업
                case "odrStatsCdPopup":
                    for(var i = 0; i < resData.length; i++) {
                        var rtnData = JSON.parse(resData[i]);
                        sIdList += rtnData.COM_DTL_CD +",";
                        sNmList += rtnData.COM_DTL_CD_NM +",";
                    }
        			// 주문상태가 B21 이하인 경우만 검색조건으로 활용 가능
        			if (this.fn_checkOdrStats(sIdList, sNmList) == true) {
        				this.Div00.form.Div01.form.edt_odrStats.set_value(sIdList);
        			}
                    break;
                // 주문상태 멀티 INPUT
                case "SSP_BO_OA_42;ODR_STATS":
                    for(var i = 0; i < resData.length; i++) {
                        var rtnData = JSON.parse(resData[i]);
                        sIdList += rtnData.VALUE +",";
                    }
                    this.Div00.form.Div01.form.edt_odrStats.set_value(sIdList);
                    //this.fn_setMSearch(this.name, "ODR_STATS", sIdList);
                    break;
                // 상품ID 멀티 팝업
                case "prdIdPopup":
                    for(var i = 0; i < resData.length; i++) {
                        var rtnData = JSON.parse(resData[i]);
                        sIdList += rtnData.PRD_ID_VIEW +",";
                        sNmList += rtnData.PRD_NM +",";
                    }
                    this.Div00.form.Div01.form.edt_prdId.set_value(sIdList);
                    //this.fn_setMSearch(this.name, "PRD_ID", sIdList);
                    break;
                // 상품ID 멀티 INPUT
                case "SSP_BO_OA_42;PRD_ID":
                    for(var i = 0; i < resData.length; i++) {
                        var rtnData = JSON.parse(resData[i]);
                        sIdList += rtnData.VALUE +",";
                    }
                    this.Div00.form.Div01.form.edt_prdId.set_value(sIdList);
                    //this.fn_setMSearch(this.name, "PRD_ID", sIdList);
                    break;
        		// MD 담당자 멀티 팝업
        		case "mdChrpsnPopup":
        			for(var i = 0; i < resData.length; i++) {
                        var rtnData = JSON.parse(resData[i]);
                        sIdList += rtnData.OPRTR_ID +",";
                    }
        			this.Div00.form.Div01.form.edt_mdChrpsn.set_value(sIdList);
        			break;
        		// MD 담당자 멀티 INPUT
                case "SSP_BO_OA_42;MD_CHRPSN":
                    for(var i = 0; i < resData.length; i++) {
                        var rtnData = JSON.parse(resData[i]);
                        sIdList += rtnData.VALUE +",";
                    }
                    this.Div00.form.Div01.form.edt_mdChrpsn.set_value(sIdList);
                    break;
        		// 영업담당자 멀티 팝업
        		case "salsChrpsnPopup":
        			for(var i = 0; i < resData.length; i++) {
                        var rtnData = JSON.parse(resData[i]);
                        sIdList += rtnData.OPRTR_ID +",";
                    }
        			this.Div00.form.Div01.form.edt_salsChrpsn.set_value(sIdList);
        			break;
        		// 영업담당자 멀티 INPUT
                case "SSP_BO_OA_42;SALS_CHRPSN":
                    for(var i = 0; i < resData.length; i++) {
                        var rtnData = JSON.parse(resData[i]);
                        sIdList += rtnData.VALUE +",";
                    }
                    this.Div00.form.Div01.form.edt_salsChrpsn.set_value(sIdList);
                    break;
        		// 구매담당자 멀티 팝업
        		case "purgChrpsnPopup":
        			for(var i = 0; i < resData.length; i++) {
                        var rtnData = JSON.parse(resData[i]);
                        sIdList += rtnData.OPRTR_ID +",";
                    }
        			this.Div00.form.Div01.form.edt_purgChrpsn.set_value(sIdList);
        			break;
        		// 구매담당자 멀티 INPUT
                case "SSP_BO_OA_42;PURG_CHRPSN":
                    for(var i = 0; i < resData.length; i++) {
                        var rtnData = JSON.parse(resData[i]);
                        sIdList += rtnData.VALUE +",";
                    }
                    this.Div00.form.Div01.form.edt_purgChrpsn.set_value(sIdList);
                    break;
        		// 서비스담당자 멀티 팝업
        		case "svcChrpsnPopup":
        			for(var i = 0; i < resData.length; i++) {
                        var rtnData = JSON.parse(resData[i]);
                        sIdList += rtnData.OPRTR_ID +",";
                    }
        			this.Div00.form.Div01.form.edt_oprChrpsn.set_value(sIdList);
        			break;
        		// 서비스담당자 멀티 INPUT
                case "SSP_BO_OA_42;SVC_CHRPSN":
                    for(var i = 0; i < resData.length; i++) {
                        var rtnData = JSON.parse(resData[i]);
                        sIdList += rtnData.VALUE +",";
                    }
                    this.Div00.form.Div01.form.edt_oprChrpsn.set_value(sIdList);
                    break;
        	}
        };

        /***********************************************************************************************
        * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_initView = function() {
            // 공통코드 조회
            this.fn_searchCommonCode();

            this.Div00.form.Div01.form.cal_inqStart.set_value(new nexacro.Date());
            this.Div00.form.Div01.form.cal_inqEnd.set_value(new nexacro.Date());
        	this.Div00_00.form.cmb_viewCount.set_index(2);
        };
        // 서버에서 리턴받은 공통코드 리스트를 공통코드별로 분류
        this.fn_setCommonCode = function() {
            // 고객구분코드
            this.ds_comCd.filter("COM_CLSF_CD=='CUST_SPR_CD'");
            this.ds_comCDCustTP.copyData(this.ds_comCd, true);

            // 몰구분 코드
            this.ds_comCd.filter("COM_CLSF_CD=='MALL_SPR_CD'");
            this.ds_comCDMallSpr.copyData(this.ds_comCd, true);

        	// 인터페이스구분 코드
            this.ds_comCd.filter("COM_CLSF_CD=='PI_SPR_CD' && COM_USR_DEFN_NM_1=='Y'");
            this.ds_comCDPiSprCd.copyData(this.ds_comCd, true);
        	this.ds_comCDPiSprCd.set_keystring("S:+SRT_SO");

        	this.ds_comCDPiSprCd.insertRow(0);
        	this.ds_comCDPiSprCd.setColumn(0, "COM_DTL_CD_NM", "전체");
            // 콤보박스에서 기본적으로 "전체"를 선택하도록 설정
            this.Div00.form.Div01.form.cmb_mallSpr.set_index(0);
        	this.Div00.form.Div01.form.cmb_custTp.set_index(0);
        	this.Div00.form.Div01.form.cmb_ifPiId.set_index(0);
            // 추가적인 작업
            this.Div00.form.Div01.form.rdo_transState.set_index(0);
        };

        this.fn_checkSearchCondition = function() {
        	if (this.gfn_isNull(this.Div00.form.Div01.form.edt_oprUnit.value) &&		// 운영단위
        		this.gfn_isNull(this.Div00.form.Div01.form.edt_odrNo.value) && 			// 주문번호
        		this.gfn_isNull(this.Div00.form.Div01.form.edt_prdId.value) && 			// 상품ID
        		this.gfn_isNull(this.Div00.form.Div01.form.edt_odrStats.value) && 		// 주문상태
        		this.gfn_isNull(this.Div00.form.Div01.form.edt_mdChrpsn.value) && 		// MD담당자
        		this.gfn_isNull(this.Div00.form.Div01.form.edt_salsChrpsn.value) && 	// 영업담당자
        		this.gfn_isNull(this.Div00.form.Div01.form.edt_purgChrpsn.value) && 	// 구매담당자
        		this.gfn_isNull(this.Div00.form.Div01.form.edt_oprChrpsn.value) && 		// 운영담당자
        		this.Div00.form.Div01.form.cmb_mallSpr.index == 0 &&					// 몰구분
        		this.Div00.form.Div01.form.cmb_custTp.index == 0 &&						// 고객유형
        		this.Div00.form.Div01.form.rdo_transState.index == 0) {					// 전송상태
        			return false;
        		}
        	return true;
        };

        this.fn_changeSearchConditionLock = function(lockState) {
        	if (lockState == this.lockType.UNKONWN) {

        	}
        	// 활성화
        	else if (lockState == this.lockType.ACTIVE) {
        		this.Div00.form.Div01.set_enable(true);
        		this.Div00_00.form.cmb_viewCount.set_enable(true);
        	}
        	// 잠금
        	else if (lockState == this.lockType.LOCK) {
        		this.Div00.form.Div01.set_enable(false);
        		this.Div00_00.form.cmb_viewCount.set_enable(false);
        	}
        	// 초기화
        	else if (lockState == this.lockType.RELEASE) {
        		this.Div00.form.Div01.set_enable(true);
        		this.Div00_00.form.cmb_viewCount.set_enable(true);
        		this.Div00.form.Div01.form.edt_oprUnit.set_value("");
        		this.Div00.form.Div01.form.edt_odrNo.set_value("");
        		this.Div00.form.Div01.form.edt_prdId.set_value("");
        		this.Div00.form.Div01.form.edt_odrStats.set_value("");
        		this.Div00.form.Div01.form.rdo_transState.set_index(0);
        		this.Div00.form.Div01.form.cmb_mallSpr.set_index(0);
        		this.Div00.form.Div01.form.cmb_custTp.set_index(0);
        		this.Div00.form.Div01.form.cmb_ifPiId.set_index(0);
        		this.Div00.form.Div01.form.cal_inqStart.set_value(new nexacro.Date());
        		this.Div00.form.Div01.form.cal_inqEnd.set_value(new nexacro.Date());
        		this.Div00_00.form.cmb_viewCount.set_index(2);
        		this.ds_list01.clearData();
        		this.ds_list02.clearData();
        	}
        };

        // 행선택
        this.fn_isSelectedRow = function(currow, cellPos) {
        	if (cellPos == 0) {
        		if (currow == this.ds_list01.rowposition)	return true;
        		return false;
        	}

        	if (currow == this.selectedRow) {
        		return true;
        	}

        	return false;
        };

        this.fn_resetSubGrid = function() {
        	this.selectedRow = -1;
        	this.Div00_00.form.grid_list01.redrawExprCell("body");
        	this.ds_list02.clearData();
        };

        this.fn_showResendButton = function(result) {
        	/*
        	if (result == "S") {
        		this.Div00_00.form.btn_resend.set_visible(false);
        	}
        	else if (result == "E") {
        		this.Div00_00.form.btn_resend.set_visible(true);
        	}
        	else {
        		this.Div00_00.form.btn_resend.set_visible(false);
        	}
        	*/
        };

        this.fn_checkOdrStats = function(idList, nmList) {
        	if (this.gfn_isNull(idList) && this.gfn_isNull(nmList)) {
        		trace("### idList and nmList are null");
        		return true;
        	}

        	var idListArr = idList.split(",");
        	var nmListArr = nmList.split(",");
        	var id = "";
        	var nm = "";

        	for (var i = 0; i < idList.length; i++) {
        		id = idListArr[i];
        		nm = nmListArr[i];
        		if (this.gfn_isNull(id))	continue;

        		if (id <= "B21") {
        			//alert("검색조건으로 사용할 수 없는 주문상태(" + nm + ", " + id + ")를 선택하셨습니다. 사용할 수 없습니다.");
        			alert(this.fn_getMessage("ERRS000417", nm, id));
        			return false;
        		}
        	}

        	return true;
        };

        // 조회기간 유효성 검사
        this.fn_isValidInq = function() {
        	var inqStart = this.Div00.form.Div01.form.cal_inqStart.value;
        	var inqEnd = this.Div00.form.Div01.form.cal_inqEnd.value;

        	if (inqStart > inqEnd) {
        		return false;
        	}

        	return true;
        };

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodCtrlENTER("btn_search_onclick");
        	//this.fn_regMethodSave("btn_save_onclick");
        };

        /***********************************************************************************************
        * BUTTON 영역
        ************************************************************************************************/
        this.btn_search_onclick = function(obj,e)
        {
        	if (this.fn_isValidInq() == false) {
        		alert(this.fn_getMessage("ERRS000240"));
        		return;
        	}

        	this.fn_setMSearch(this.name, "OPR_UNIT_ID", this.Div00.form.Div01.form.edt_oprUnit.value);
            this.fn_setMSearch(this.name, "ODR_NO", this.Div00.form.Div01.form.edt_odrNo.value);
        	this.fn_setMSearch(this.name, "PRD_ID", this.Div00.form.Div01.form.edt_prdId.value);
            this.fn_setMSearch(this.name, "ODR_STATS_CD", this.Div00.form.Div01.form.edt_odrStats.value);
        	this.fn_setMSearch(this.name, "MD_CHRPSN", this.Div00.form.Div01.form.edt_mdChrpsn.value);
        	this.fn_setMSearch(this.name, "SALS_CHRPSN", this.Div00.form.Div01.form.edt_salsChrpsn.value);
        	this.fn_setMSearch(this.name, "PURG_CHRPSN", this.Div00.form.Div01.form.edt_purgChrpsn.value);
        	this.fn_setMSearch(this.name, "SVC_CHRPSN", this.Div00.form.Div01.form.edt_oprChrpsn.value);

        	if (!this.fn_checkSearchCondition()) {
        		alert(this.fn_getMessage("ERRS000380"));
                return;
        	}

        	trace("### rdo_transState : " + this.Div00.form.Div01.form.rdo_transState.index);
        	if(this.ds_select.getRowCount() <= 0) {
        		this.fn_search(true);
        	}
        	else {
        		this.fn_insertSelectedData("fn_callBack");
        	}
        };
        // 운영단위 멀티팝업
        this.btn_oprUnitMultiPopup_onclick = function(obj,e)
        {
        	var objParam = {coCd:this.fv_coCd, bzplcId:""};
            this.gfn_openPopup("oprUnitMultiPopup", "CO_POP::SSP_BO_PP_23.xfdl", objParam);
        };
        // 운영단위 멀티인풋
        this.btn_oprUnitInput_onclick = function(obj,e)
        {
        	this.fn_showTareaInput(this.name, "OPR_UNIT_ID", this.Div00.form.Div01.form.edt_oprUnit.value, "fn_popupCallback", 120, 300);
        };
        // 주문번호 멀티팝업
        this.btn_odrNoMultiPopup_onclick = function(obj,e)
        {
        	var objParam = {coCd:this.fv_coCd};
            this.gfn_openPopup("odrNoPopup", "OD::SSP_BO_OA_28.xfdl", objParam);
        };
        // 주문번호 멀티인풋
        this.btn_odrNoInput_onclick = function(obj,e)
        {
        	this.fn_showTareaInput(this.name, "ODR_NO", this.Div00.form.Div01.form.edt_odrNo.value, "fn_popupCallback", 130, 300);
        };
        // 상품ID 멀티팝업
        this.btn_prdIdMultiPopup_onclick = function(obj,e)
        {
        	var objParam = {coCd:this.fv_coCd};
            this.gfn_openPopup("prdIdPopup", "PR_POP::SSP_BO_PP_16.xfdl", objParam);
        };
        // 상품ID 멀티인풋
        this.btn_prdIdInput_onclick = function(obj,e)
        {
        	this.fn_showTareaInput(this.name, "PRD_ID", this.Div00.form.Div01.form.edt_prdId.value, "fn_popupCallback", 120, 300);
        };
        // 주문상태 멀티팝업
        this.btn_odrStatsMultiPopup_onclick = function(obj,e)
        {
        	var objParam = {comClsfCd:"ODR_STATS_CD", langCd:"KO"};
            this.gfn_openPopup("odrStatsCdPopup", "OD::SSP_BO_OA_COM_POP.xfdl", objParam);
        };
        // 주문상태 멀티인풋
        this.btn_odrStatsInput_onclick = function(obj,e)
        {
        	this.fn_showTareaInput(this.name, "ODR_STATS", this.Div00.form.Div01.form.edt_odrStats.value, "fn_popupCallback", 120, 300);
        };
        // 활성화
        this.btn_active_onclick = function(obj,e)
        {
        	this.fn_changeSearchConditionLock(this.lockType.ACTIVE);
        };
        // 초기화
        this.btn_clear_onclick = function(obj,e)
        {
        	this.fn_changeSearchConditionLock(this.lockType.RELEASE);
        };
        // 재전송
        this.btn_resend_onclick = function(obj,e)
        {
        	/*
        	var odrno = this.ds_list01.getColumn(this.selectedRow, "JNT_ODR_ITM_NO");
        	var rtn = this.confirm(this.fn_getMessage("ERRS000397", odrno));
        	if (rtn) {
        		// "확인"
        		this.fn_requestResend();
        	}
        	else {
        		// "취소"
        	}
        	*/
        };

        this.btn_excelDownload_onclick = function(obj,e)
        {
        	this.ofn_exportExcel({form:this, grid:this.Div00_00.form.grid_list01, fileName:"주문전송정보"});
        };

        this.btn_excelDownload2_onclick = function(obj,e)
        {
        	this.ofn_exportExcel({form:this, grid:this.Div01.form.grid_list02, fileName:"주문이력정보"});
        };

        // MD담당자 멀티 팝업
        this.btn_mdChrpsnMultiPopup_onclick = function(obj,e)
        {
        	var objParam = {coCd:this.fv_coCd, title:"MD 담당자 조회"};
        	this.gfn_openPopup("mdChrpsnPopup", "OD::SSP_BO_OA_44.xfdl", objParam);
        };
        // MD담당자 멀티 인풋
        this.btn_mdChrpsnInput_onclick = function(obj,e)
        {
        	this.fn_showTareaInput(this.name, "MD_CHRPSN", this.Div00.form.Div01.form.edt_mdChrpsn.value, "fn_popupCallback", 120, 300);
        };
        // 영업담당자 멀티 팝업
        this.btn_salsChrpsnMultiPopup_onclick = function(obj,e)
        {
        	var objParam = {coCd:this.fv_coCd, title:"영업담당자 조회"};
        	this.gfn_openPopup("salsChrpsnPopup", "OD::SSP_BO_OA_43.xfdl", objParam);
        };
        // 영업담당자 멀티 인풋
        this.btn_salsChrpsnInput_onclick = function(obj,e)
        {
        	this.fn_showTareaInput(this.name, "SALS_CHRPSN", this.Div00.form.Div01.form.edt_salsChrpsn.value, "fn_popupCallback", 120, 300);
        };
        // 구매담당자 멀티 팝업
        this.btn_purgChrpsnMultiPopup_onclick = function(obj,e)
        {
        	var objParam = {coCd:this.fv_coCd, title:"구매담당자 조회"};
        	this.gfn_openPopup("purgChrpsnPopup", "OD::SSP_BO_OA_43.xfdl", objParam);
        };
        // 구매담당자 멀티 인풋
        this.btn_purgChrpsnInput_onclick = function(obj,e)
        {
        	this.fn_showTareaInput(this.name, "PURG_CHRPSN", this.Div00.form.Div01.form.edt_purgChrpsn.value, "fn_popupCallback", 120, 300);
        };
        // 서비스담당자 멀티 팝업
        this.btn_oprChrpsnMultiPopup_onclick = function(obj,e)
        {
        	var objParam = {coCd:this.fv_coCd, title:"서비스담당자 조회"};
        	this.gfn_openPopup("svcChrpsnPopup", "OD::SSP_BO_OA_43.xfdl", objParam);
        };
        // 서비스담당자 멀티 인풋
        this.btn_oprChrpsnInput_onclick = function(obj,e)
        {
        	this.fn_showTareaInput(this.name, "SVC_CHRPSN", this.Div00.form.Div01.form.edt_oprChrpsn.value, "fn_popupCallback", 120, 300);
        };


        /***********************************************************************************************
        * GRID 영역
        ************************************************************************************************/
        this.grid_list01_oncellposchanged = function(obj,e)
        {
        	if (e.col != 0 || e.row < 0) return;

        	this.selectedRow = e.row;

        	this.ds_search2.clearData();
        	var nRow = this.ds_search2.addRow();
        	this.ds_search2.copyRow(nRow, this.ds_list01, e.row);

        	this.fn_selectSndRcvInfoList2();

        	var ifProcRsltCd = this.ds_list01.getColumn(e.row, "IF_PROC_RSLT_CD");

        	this.fn_showResendButton(ifProcRsltCd);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_OA_42_onload,this);
            this.addEventHandler("onkeyup",this.SSP_BO_OA_47_onkeyup,this);
            this.Div00.form.Div01.form.Static06.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Div01.form.Static06_00.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Div01.form.Static06_01.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Div01.form.btn_oprUnitMultiPopup.addEventHandler("onclick",this.btn_oprUnitMultiPopup_onclick,this);
            this.Div00.form.Div01.form.btn_oprUnitInput.addEventHandler("onclick",this.btn_oprUnitInput_onclick,this);
            this.Div00.form.Div01.form.btn_odrNoMultiPopup.addEventHandler("onclick",this.btn_odrNoMultiPopup_onclick,this);
            this.Div00.form.Div01.form.btn_odrNoInput.addEventHandler("onclick",this.btn_odrNoInput_onclick,this);
            this.Div00.form.Div01.form.cal_inqEnd.addEventHandler("onchanged",this.Div00_Calendar42_onchanged,this);
            this.Div00.form.Div01.form.btn_prdIdMultiPopup.addEventHandler("onclick",this.btn_prdIdMultiPopup_onclick,this);
            this.Div00.form.Div01.form.btn_prdIdInput.addEventHandler("onclick",this.btn_prdIdInput_onclick,this);
            this.Div00.form.Div01.form.Static06_01_00.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Div01.form.Static06_02.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Div01.form.btn_odrStatsMultiPopup.addEventHandler("onclick",this.btn_odrStatsMultiPopup_onclick,this);
            this.Div00.form.Div01.form.btn_odrStatsInput.addEventHandler("onclick",this.btn_odrStatsInput_onclick,this);
            this.Div00.form.Div01.form.Static06_00_00.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Div01.form.btn_mdChrpsnMultiPopup.addEventHandler("onclick",this.btn_mdChrpsnMultiPopup_onclick,this);
            this.Div00.form.Div01.form.btn_mdChrpsnInput.addEventHandler("onclick",this.btn_mdChrpsnInput_onclick,this);
            this.Div00.form.Div01.form.btn_salsChrpsnMultiPopup.addEventHandler("onclick",this.btn_salsChrpsnMultiPopup_onclick,this);
            this.Div00.form.Div01.form.btn_salsChrpsnInput.addEventHandler("onclick",this.btn_salsChrpsnInput_onclick,this);
            this.Div00.form.Div01.form.btn_purgChrpsnMultiPopup.addEventHandler("onclick",this.btn_purgChrpsnMultiPopup_onclick,this);
            this.Div00.form.Div01.form.btn_purgChrpsnInput.addEventHandler("onclick",this.btn_purgChrpsnInput_onclick,this);
            this.Div00.form.Div01.form.btn_oprChrpsnMultiPopup.addEventHandler("onclick",this.btn_oprChrpsnMultiPopup_onclick,this);
            this.Div00.form.Div01.form.btn_oprChrpsnInput.addEventHandler("onclick",this.btn_oprChrpsnInput_onclick,this);
            this.Div01_00.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div01_00.form.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.Div01_00.form.btn_active.addEventHandler("onclick",this.btn_active_onclick,this);
            this.Div00_00.form.grid_list01.addEventHandler("oncellposchanged",this.grid_list01_oncellposchanged,this);
            this.Div00_00.form.btn_excelDownload.addEventHandler("onclick",this.btn_excelDownload_onclick,this);
            this.Div00_00.form.btn_resend.addEventHandler("onclick",this.btn_resend_onclick,this);
            this.Div01.form.btn_excelDownload2.addEventHandler("onclick",this.btn_excelDownload2_onclick,this);
            this.ds_search2.addEventHandler("onrowposchanged",this.ds_list01_onrowposchanged,this);
        };
        this.loadIncludeScript("SSP_BO_OA_47.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
