(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_YA_17");
            this.set_titletext("PI로그조회");
            this.set_rtl("false");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_PERD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IF_SYSTEM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PROC_RSLT_START_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PROC_RSLT_END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_START_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_INQ_PERD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PROC_RSLT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IF_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SBJCT_AR\" type=\"STRING\" size=\"256\"/><Column id=\"IF_RSLT_FLD\" type=\"STRING\" size=\"256\"/><Column id=\"IF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_IF_MSG_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col><Col id=\"IF_SYSTEM_ID\"/><Col id=\"IF_PI_ID\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inqPerdSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_piRcvLog", this);
            obj._setContents("<ColumnInfo><Column id=\"IF_SYSTEM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IF_MSG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PROC_RSLT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PROC_RSLT_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"IF_RSLT_FLD_1\" type=\"STRING\" size=\"256\"/><Column id=\"IF_RSLT_FLD_2\" type=\"STRING\" size=\"256\"/><Column id=\"IF_RSLT_FLD_3\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"IF_MSG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"IF_RSLT_FLD_4\" type=\"STRING\" size=\"256\"/><Column id=\"IF_RSLT_FLD_5\" type=\"STRING\" size=\"256\"/><Column id=\"RETRY_CNT\" type=\"INT\" size=\"256\"/><Column id=\"ERROR_DTLS\" type=\"STRING\" size=\"4000\"/><Column id=\"SND_DATA_CTS\" type=\"STRING\" size=\"4000\"/><Column id=\"SND_DATA_CLASS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYNC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PI_RSLT_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"IF_NM\" type=\"STRING\" size=\"1000\"/><Column id=\"IF_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SBJCT_AR\" type=\"STRING\" size=\"256\"/><Column id=\"RETRY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"THME_DOMN_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_IF_MSG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RCV_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ifProcRsltCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inqPerdSprCd2", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excel", this);
            obj._setContents("<ColumnInfo><Column id=\"IF_SYSTEM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IF_MSG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PROC_RSLT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PROC_RSLT_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"IF_RSLT_FLD_1\" type=\"STRING\" size=\"256\"/><Column id=\"IF_RSLT_FLD_2\" type=\"STRING\" size=\"256\"/><Column id=\"IF_RSLT_FLD_3\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"IF_MSG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"IF_RSLT_FLD_4\" type=\"STRING\" size=\"256\"/><Column id=\"IF_RSLT_FLD_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj._setContents("<ColumnInfo><Column id=\"IF_SYSTEM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IF_MSG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PROC_RSLT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PROC_RSLT_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"IF_RSLT_FLD_1\" type=\"STRING\" size=\"256\"/><Column id=\"IF_RSLT_FLD_2\" type=\"STRING\" size=\"256\"/><Column id=\"IF_RSLT_FLD_3\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"IF_MSG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"IF_RSLT_FLD_4\" type=\"STRING\" size=\"256\"/><Column id=\"IF_RSLT_FLD_5\" type=\"STRING\" size=\"256\"/><Column id=\"RETRY_CNT\" type=\"INT\" size=\"256\"/><Column id=\"ERROR_DTLS\" type=\"STRING\" size=\"4000\"/><Column id=\"SND_DATA_CTS\" type=\"STRING\" size=\"4000\"/><Column id=\"SND_DATA_CLASS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYNC_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_themeDownCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_retry", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"IF_SYSTEM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IF_MSG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PROC_RSLT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PROC_RSLT_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"IF_RSLT_FLD_1\" type=\"STRING\" size=\"256\"/><Column id=\"IF_RSLT_FLD_2\" type=\"STRING\" size=\"256\"/><Column id=\"IF_RSLT_FLD_3\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"IF_MSG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"IF_RSLT_FLD_4\" type=\"STRING\" size=\"256\"/><Column id=\"IF_RSLT_FLD_5\" type=\"STRING\" size=\"256\"/><Column id=\"RETRY_CNT\" type=\"INT\" size=\"256\"/><Column id=\"ERROR_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"SND_DATA_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"SND_DATA_CLASS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYNC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PI_RSLT_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"IF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IF_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SBJCT_AR\" type=\"STRING\" size=\"256\"/><Column id=\"RETRY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"THME_DOMN_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,"162","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","20",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","20","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("등록일자");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_regStartDate","159","24","125","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static59","287","24","9","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("~");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_regEndDate","299","24","125","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_inqPerdSprCd","cal_regEndDate:5","24","107","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_inqPerdSprCd");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_text("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"123","60","26","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"123","65","26","btn_search:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("초기화");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static17","20","51",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static16","20","51","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("주제");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00","546","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("처리일자");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_procRsltStartDtm","686","24","125","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static59_00","814","24","9","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("~");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_procRsltEndDtm","826","24","125","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_inqPerdSprCd2","cal_procRsltEndDtm:4","24","107","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_inqPerdSprCd");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_text("");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static16_00","955","51","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("처리결과");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static28","546","51","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("SSP IF ID");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_ifProcRsltCd","1095","55","211","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_innerdataset("ds_ifProcRsltCd");
            obj.set_text("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_piId","686","55","260","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_subjectAr","159","55","377","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_themeDownCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static17_00","20","82",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static28_00","546","82","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_text("IF 명");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_ifRsltFld","159","86","377","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_ifNm","686","86","260","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static16_00_00","955","82","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_text("메시지키");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_oriIfMsgId","1095","86","211","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_layoutClear",null,"200","110","28","381",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("레이아웃 초기화");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"200","100","28","btn_layoutClear:5",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("레이아웃 저장");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20","209","200","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("(총 0건, 1 / 1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","244",null,null,"20","86",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_piRcvLog");
            obj.set_autofittype("none");
            obj.set_cssclass("grd_WF_list");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_readonly("true");
            obj.set_positionstep("0");
            obj.set_selecttype("area");
            obj.set_cellmovingtype("none");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"43\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"270\"/><Column size=\"84\"/><Column size=\"113\"/><Column size=\"138\"/><Column size=\"84\"/><Column size=\"91\"/><Column size=\"190\"/><Column size=\"190\"/><Column size=\"80\"/><Column size=\"222\"/><Column size=\"84\"/><Column size=\"113\"/><Column size=\"88\"/><Column size=\"86\"/><Column size=\"86\"/><Column size=\"86\"/><Column size=\"86\"/><Column size=\"86\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"주제영역\"/><Cell col=\"2\" text=\"SSP IF ID\"/><Cell col=\"3\" text=\"MRO PI ID\"/><Cell col=\"4\" text=\"IF 명\"/><Cell col=\"5\" text=\"송신내용\"/><Cell col=\"6\" text=\"등록일시\"/><Cell col=\"7\" text=\"처리일시\"/><Cell col=\"8\" text=\"처리결과코드\"/><Cell col=\"9\" text=\"송수신여부\"/><Cell col=\"10\" text=\"메시지 키\"/><Cell col=\"11\" text=\"오리지널 메시지키\"/><Cell col=\"12\" text=\"메세지순번\"/><Cell col=\"13\" text=\"OGG 수신메시지\"/><Cell col=\"14\" text=\"WAS 메시지\"/><Cell col=\"15\" text=\"재시도 횟수\"/><Cell col=\"16\" text=\"재전송\"/><Cell col=\"17\" text=\"전송필드 1\"/><Cell col=\"18\" text=\"전송필드 2\"/><Cell col=\"19\" text=\"전송필드 3\"/><Cell col=\"20\" text=\"전송필드 4\"/><Cell col=\"21\" text=\"전송필드 5\"/></Band><Band id=\"body\"><Cell text=\"bind:NO\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:THME_DOMN_CD_NM\" combodataset=\"ds_gRfiTpCd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\" textAlign=\"center\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:IF_ID\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:IF_PI_ID\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:IF_NM\" textAlign=\"left\"/><Cell col=\"5\" displaytype=\"expr:IF_MSG_SEQ==&apos;1&apos;?&apos;buttoncontrol&apos;:&apos;normal&apos;\" edittype=\"expr:IF_MSG_SEQ==&apos;1&apos;?&apos;button&apos;:&apos;normal&apos;\" text=\"expr:IF_MSG_SEQ==&apos;1&apos;?&apos;상세보기&apos;:&apos;&apos;\"/><Cell col=\"6\" text=\"bind:REG_DTM\"/><Cell col=\"7\" text=\"bind:IF_PROC_RSLT_DTM\"/><Cell col=\"8\" text=\"bind:IF_PROC_RSLT_CD\"/><Cell col=\"9\" text=\"expr:RCV_TYPE==&apos;S&apos;?&apos;송신&apos;:&apos;수신&apos;\"/><Cell col=\"10\" text=\"bind:IF_MSG_ID\" textAlign=\"center\" displaytype=\"normal\" edittype=\"none\" calendardateformat=\"yyyy.MM.dd\" calendareditformat=\"yyyy.MM.dd\"/><Cell col=\"11\" text=\"expr:IF_MSG_ID==ORI_IF_MSG_ID?&apos;-&apos;:ORI_IF_MSG_ID\"/><Cell col=\"12\" text=\"bind:IF_MSG_SEQ\"/><Cell col=\"13\" text=\"bind:PI_RSLT_MSG\" textAlign=\"left\"/><Cell col=\"14\" displaytype=\"expr:IF_MSG_SEQ==&apos;1&apos; ? (IF_ID == &apos;IF_PI_1304&apos; ? &apos;buttoncontrol&apos; :(IF_PROC_RSLT_CD ==&apos;E&apos;?&apos;buttoncontrol&apos;:&apos;normal&apos; )) : &apos;normal&apos;\" edittype=\"expr:IF_MSG_SEQ==&apos;1&apos; ? (IF_ID == &apos;IF_PI_1304&apos; ? &apos;button&apos; :(IF_PROC_RSLT_CD ==&apos;E&apos;?&apos;button&apos;:&apos;none&apos; ) ): &apos;normal&apos;\" text=\"expr:IF_MSG_SEQ==&apos;1&apos; ? (IF_ID == &apos;IF_PI_1304&apos; ? &apos;상세보기&apos; :( IF_PROC_RSLT_CD ==&apos;E&apos; ? &apos;상세보기&apos; : &apos;-&apos; ) ) : &apos;&apos;\"/><Cell col=\"15\" text=\"bind:RETRY_CNT\"/><Cell col=\"16\" text=\"expr:(IF_MSG_SEQ==&apos;1&apos;&amp;&amp;RETRY_YN == &apos;Y&apos;&amp;&amp;(IF_PROC_RSLT_CD==&apos;E&apos;||IF_PROC_RSLT_CD==&apos;X&apos;)&amp;&amp;!RETRY_CNT&gt;=1)?&apos;재전송&apos;:&apos;-&apos;\" displaytype=\"expr:(IF_MSG_SEQ==&apos;1&apos;&amp;&amp;RETRY_YN == &apos;Y&apos;&amp;&amp;(IF_PROC_RSLT_CD==&apos;E&apos;||IF_PROC_RSLT_CD==&apos;X&apos;)&amp;&amp;!RETRY_CNT&gt;=1)?&apos;buttoncontrol&apos;:&apos;normal&apos;\" edittype=\"expr:(IF_MSG_SEQ==&apos;1&apos;&amp;&amp;RETRY_YN == &apos;Y&apos;&amp;&amp;(IF_PROC_RSLT_CD==&apos;E&apos;||IF_PROC_RSLT_CD==&apos;X&apos;)&amp;&amp;!RETRY_CNT&gt;=1)?&apos;button&apos;:&apos;normal&apos;\"/><Cell col=\"17\" text=\"bind:IF_RSLT_FLD_1\"/><Cell col=\"18\" text=\"bind:IF_RSLT_FLD_2\" textAlign=\"center\" displaytype=\"normal\"/><Cell col=\"19\" text=\"bind:IF_RSLT_FLD_3\"/><Cell col=\"20\" text=\"bind:IF_RSLT_FLD_4\"/><Cell col=\"21\" text=\"bind:IF_RSLT_FLD_5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","grd_list:30",null,"grd_list:6.44%","55",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDown",null,"200","110","28","25",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("엑셀다운로드");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_excel");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_excel","4","977",null,null,"36","-274",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_excel");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_readonly("true");
            obj.set_positionstep("0");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"43\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"154\"/><Column size=\"80\"/><Column size=\"86\"/><Column size=\"86\"/><Column size=\"86\"/><Column size=\"86\"/><Column size=\"86\"/><Column size=\"113\"/><Column size=\"84\"/><Column size=\"250\"/><Column size=\"113\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"송신시스템 ID\"/><Cell col=\"2\" text=\"PI ID\"/><Cell col=\"3\" text=\"메시지 ID\"/><Cell col=\"4\" text=\"메세지순번\"/><Cell col=\"5\" text=\"전송필드 1\"/><Cell col=\"6\" text=\"전송필드 2\"/><Cell col=\"7\" text=\"전송필드 3\"/><Cell col=\"8\" text=\"전송필드 4\"/><Cell col=\"9\" text=\"전송필드 5\"/><Cell col=\"10\" text=\"등록일시\"/><Cell col=\"11\" text=\"처리결과코드\"/><Cell col=\"12\" text=\"PI결과메시지\"/><Cell col=\"13\" text=\"처리일시\"/></Band><Band id=\"body\"><Cell text=\"bind:NO\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:IF_SYSTEM_ID\" combodataset=\"ds_gRfiTpCd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\" textAlign=\"center\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:IF_PI_ID\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:IF_MSG_ID\" textAlign=\"center\" displaytype=\"normal\" edittype=\"none\" calendardateformat=\"yyyy.MM.dd\" calendareditformat=\"yyyy.MM.dd\"/><Cell col=\"4\" text=\"bind:IF_MSG_SEQ\"/><Cell col=\"5\" text=\"bind:IF_RSLT_FLD_1\"/><Cell col=\"6\" text=\"bind:IF_RSLT_FLD_2\" textAlign=\"center\" displaytype=\"normal\"/><Cell col=\"7\" text=\"bind:IF_RSLT_FLD_3\"/><Cell col=\"8\" text=\"bind:IF_RSLT_FLD_4\"/><Cell col=\"9\" text=\"bind:IF_RSLT_FLD_5\"/><Cell col=\"10\" text=\"bind:REG_DTM\"/><Cell col=\"11\" text=\"bind:IF_PROC_RSLT_CD\"/><Cell col=\"12\" text=\"bind:PI_RSLT_MSG\"/><Cell col=\"13\" text=\"bind:IF_PROC_RSLT_DTM\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_select","3","1160","1014","69",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_select");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"IF_SYSTEM_ID\"/><Cell col=\"1\" text=\"IF_PI_ID\"/><Cell col=\"2\" text=\"IF_MSG_ID\"/><Cell col=\"3\" text=\"REG_DTM\"/><Cell col=\"4\" text=\"IF_PROC_RSLT_CD\"/><Cell col=\"5\" text=\"IF_PROC_RSLT_DTM\"/><Cell col=\"6\" text=\"IF_RSLT_FLD_1\"/><Cell col=\"7\" text=\"IF_RSLT_FLD_2\"/><Cell col=\"8\" text=\"IF_RSLT_FLD_3\"/><Cell col=\"9\" text=\"NO\"/><Cell col=\"10\" text=\"IF_MSG_SEQ\"/><Cell col=\"11\" text=\"IF_RSLT_FLD_4\"/><Cell col=\"12\" text=\"IF_RSLT_FLD_5\"/><Cell col=\"13\" text=\"RETRY_CNT\"/><Cell col=\"14\" text=\"ERROR_DTLS\"/><Cell col=\"15\" text=\"SND_DATA_CTS\"/><Cell col=\"16\" text=\"SND_DATA_CLASS_NM\"/><Cell col=\"17\" text=\"SYNC_YN\"/></Band><Band id=\"body\"><Cell text=\"bind:IF_SYSTEM_ID\"/><Cell col=\"1\" text=\"bind:IF_PI_ID\"/><Cell col=\"2\" text=\"bind:IF_MSG_ID\"/><Cell col=\"3\" text=\"bind:REG_DTM\"/><Cell col=\"4\" text=\"bind:IF_PROC_RSLT_CD\"/><Cell col=\"5\" text=\"bind:IF_PROC_RSLT_DTM\"/><Cell col=\"6\" text=\"bind:IF_RSLT_FLD_1\"/><Cell col=\"7\" text=\"bind:IF_RSLT_FLD_2\"/><Cell col=\"8\" text=\"bind:IF_RSLT_FLD_3\"/><Cell col=\"9\" text=\"bind:NO\"/><Cell col=\"10\" text=\"bind:IF_MSG_SEQ\"/><Cell col=\"11\" text=\"bind:IF_RSLT_FLD_4\"/><Cell col=\"12\" text=\"bind:IF_RSLT_FLD_5\"/><Cell col=\"13\" text=\"bind:RETRY_CNT\"/><Cell col=\"14\" text=\"bind:ERROR_DTLS\"/><Cell col=\"15\" text=\"bind:SND_DATA_CTS\"/><Cell col=\"16\" text=\"bind:SND_DATA_CLASS_NM\"/><Cell col=\"17\" text=\"bind:SYNC_YN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_01","20","82","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("전송필드");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Button("btn_piPopup",null,"202","85","26","141",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("PI정보관리");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","Div00.form.cal_regStartDate","value","ds_search","REG_START_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.cal_regEndDate","value","ds_search","REG_END_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.cmb_inqPerdSprCd","value","ds_search","INQ_PERD_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.cal_procRsltStartDtm","value","ds_search","IF_PROC_RSLT_START_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.cal_procRsltEndDtm","value","ds_search","IF_PROC_RSLT_END_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.cmb_inqPerdSprCd2","value","ds_search","REG_INQ_PERD_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div00.form.cmb_ifProcRsltCd","value","ds_search","IF_PROC_RSLT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Div00.form.edt_piId","value","ds_search","IF_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div00.form.cmb_subjectAr","value","ds_search","SBJCT_AR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","Div00.form.edt_ifRsltFld","value","ds_search","IF_RSLT_FLD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","Div00.form.edt_ifNm","value","ds_search","IF_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Div00.form.edt_oriIfMsgId","value","ds_search","ORI_IF_MSG_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_YA_17.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_YA_17.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_YA_17.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.fv_oApp = nexacro.getApplication();	//application object
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
        	this.gfn_formOnLoad(this);
        	this.fn_commonCodeSearch();
        	this.fn_setFromToDate(this.Div00.form.cmb_inqPerdSprCd, this.Div00.form.cal_regStartDate, this.Div00.form.cal_regEndDate);
        	this.fn_setFromToDate(this.Div00.form.cmb_inqPerdSprCd2, this.Div00.form.cal_procRsltStartDtm, this.Div00.form.cal_procRsltEndDtm);
        	//this.fn_search(true);

        	// 단축키
        	this.gfn_initFormHotKey({
        		ENTER : "",
        		ESC : "",
        		CTRL_ENTER : "btn_search_onclick",
        		SHIFT_ENTER : "",
        		SHIFT_S : "",
        		SHIFT_A : "",
        		SHIFT_D : "",
        	});
        };

        /*this.fn_onkeyup = function(obj:nexacro.Form,e:nexacro.KeyEventInfo){
        	var objType = obj.getFocus();
        	if( e.keycode == 13 && objType == "[object Edit]"){
        		this.fn_search(true);
        	}
        };*/
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_search = function(bInit){
        	if(this.Div00.form.cal_regStartDate.value > this.Div00.form.cal_regEndDate.value){
        		alert("등록일자의 종료일이 시작일보다 작습니다.");
        		this.Div00.form.cal_regEndDate.setFocus();
        		return;
        	}

        	if(this.Div00.form.cal_procRsltStartDtm.value > this.Div00.form.cal_procRsltEndDtm.value){
        		alert("처리일자의 종료일이 시작일보다 작습니다.");
        		this.Div00.form.cal_procRsltEndDtm.setFocus();
        		return;
        	}

        	var sSvcId = "search";
        	var sUrl = "/co/select-pi-rcv-log-list.do";
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_piRcvLog=ds_output1";
        	var arg;

        	if(bInit) {
        		var oPaging = this.div_paging;
        		oPaging.uPage = 1;
        		oPaging.uPageNum = 0;
        		this.ds_search.setColumn(0,"START_NUM",0);
        		this.ds_search.setColumn(0,"ROW_COUNT",this.fv_oApp.gv_pageViewCnt);
        	}

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //공통코드조회
        this.fn_commonCodeSearch = function(){
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_ifProcRsltCd=ds_output1 ds_inqPerdSprCd=ds_output2 ds_inqPerdSprCd2=ds_output2 ds_themeDownCd=ds_output3";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "IF_PROC_RSLT_CD,INQ_PERD_SPR_CD,THME_DOMN_CD");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //엑셀다운로드 데이터 조회
        this.fn_excelSearch = function(){
        	var sSvcId = "excelSearch";
        	var sUrl = "/co/select-pi-rcv-log-list.do";
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_excel=ds_output1";
        	var arg;

        	this.ds_search.setColumn(0,"START_NUM", null);
        	this.ds_search.setColumn(0,"ROW_COUNT", null);

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	var oPaging = this.div_paging;

        	switch(svcID){
        		case "search":
        			this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.fv_oApp.gv_pageViewCnt,"fn_pageCallback");
        			break;
        		case "commonCodeSearch":
        			this.ds_ifProcRsltCd.insertRow(0);
        			this.ds_ifProcRsltCd.setColumn(0,"COM_DTL_CD_NM","전체");
        			this.ds_themeDownCd.insertRow(0);
        			this.ds_themeDownCd.setColumn(0,"COM_DTL_CD_NM","전체");
        			this.Div00.form.cmb_ifProcRsltCd.set_index(0);
        			this.Div00.form.cmb_inqPerdSprCd.set_index(1);
        			break;
        		case "excelSearch":
        			this.ofn_exportExcel({form:this, grid:this.grd_excel, fileName:"PI로그조회"});
        			break;
        		default:
        			break;
        	}

        };

        //페이징 콜백
        this.fn_pageCallback = function(sFlag){
        	var oPaging = this.div_paging;

        	if(sFlag){
        		this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.fv_oApp.gv_pageViewCnt);
        		this.fn_search();
        	}

        	var sTotText = "(총 "+ this.gfn_appendComma(oPaging.uTotCount, 0)+"건, "+ oPaging.uPage +" / "+ oPaging.uPageCnt +")";
        	this.sta_totcnt.set_text(sTotText);
        };

        //정렬콜백
        /*
        this.fn_sortCallback = function(sGridId){
        	var oGrid = null;
        	if(sGridId == "grd_list"){
        		oSortInfo = this.grd_list.uaSortInfo;
        		this.ds_search.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
        		this.ds_search.setColumn(0,"SORT_TYPE",oSortInfo.status);
        		this.fn_search();
        	}
        };*/

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        this.cfn_formInit = function(){
        	//grid 초기 설정
        	this.grd_list.uSortFlag = "false";
        	this.grd_list.uServerSortFlag = "true";
        	this.grd_list.uSortCallback = "fn_sortCallback";
        	this.grd_list.uCellSizeType = "true";

        	//페이징 초기 설정
        	this.div_paging.uPage = 1;
        	this.div_paging.uPageNum = 0;
        	this.div_paging.uPageRowCnt = 10;
        	this.div_paging.uPageCnt = 0;
        	this.div_paging.uTotCount = 0;

        	//grid 개인화(전제조건 : grid Head가 무조건 1Row인 경우)
        	//this.uGridList = "grd_list";
        	//this.grd_list.uRightMouse = "true";
        	//this.grd_list.uPersonalFlag = "true";
        	//this.grd_list.uDefaultFormat = "NO,SBJCT_AR,IF_PI_ID,IF_MSG_ID,IF_MSG_SEQ,IF_RSLT_FLD_1,IF_RSLT_FLD_2,IF_RSLT_FLD_3,IF_RSLT_FLD_4,IF_RSLT_FLD_5,REG_DTM,IF_PROC_RSLT_CD,IF_PROC_RSLT_DTM";
        };

        this.cfn_personalPopupClose = function(sRet){
        	this.grd_list.set_formats(sRet);
        	this.pdiv_personal.closePopup();
        };

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/


        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //조회 click  이벤트
        this.btn_search_onclick = function(obj,e){
        	this.fn_search(true);
        };



        //등록일 조회기간 콤보박스 변경
        this.cmb_inqPerdSprCd_onitemchanged = function(obj,e)
        {
        	this.fn_setFromToDate(this.Div00.form.cmb_inqPerdSprCd, this.Div00.form.cal_regStartDate, this.Div00.form.cal_regEndDate);
        };

        //레이아웃저장
        this.btn_layoutSave_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grd_list", this.grd_list.getCurFormatString());
        };

        //레이아웃초기화
        this.btn_layoutClear_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grd_list", this.grd_list.uOrgFormat);
        	this.grd_list.set_formats(this.grd_list.uOrgFormat);
        };

        //초기화
        this.Div00_btn_clear_onclick = function(obj,e)
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.fn_setFromToDate(this.Div00.form.cmb_inqPerdSprCd, this.Div00.form.cal_regStartDate, this.Div00.form.cal_regEndDate);
        	this.fn_setFromToDate(this.Div00.form.cmb_inqPerdSprCd2, this.Div00.form.cal_procRsltStartDtm, this.Div00.form.cal_procRsltEndDtm);
        	this.Div00.form.cmb_inqPerdSprCd.set_index(1);
        	this.Div00.form.cmb_inqPerdSprCd2.set_index(1);
        };

        this.btn_excelDown_onclick = function(obj,e)
        {
        	if(this.ds_search.getRowType(0) == Dataset.ROWTYPE_UPDATE) {
        		alert('조회 조건이 변경 되었습니다.\n다시 조회하시기 바랍니다.');
        		return;
        	}

        	this.fn_excelSearch();
        };

        //처리일자 기간 콤보박스 이벤트
        this.cmb_inqPerdSprCd2_onitemchanged = function(obj,e)
        {
        	this.fn_setFromToDate(this.Div00.form.cmb_inqPerdSprCd2, this.Div00.form.cal_procRsltStartDtm, this.Div00.form.cal_procRsltEndDtm);
        };
        //그리드 셀 클릭 이벤트
        this.grd_list_oncellclick = function(obj,e) {

        	//오류, 전송내역 상세조회 팝업 호출
        	var dataSet = obj.getBindDataset();
        	var msgSeq = this.ds_piRcvLog.getColumn(e.row, "IF_MSG_SEQ");
        	var ifprocrsltcd = this.ds_piRcvLog.getColumn(e.row, "IF_PROC_RSLT_CD")
        	var ifId =  this.ds_piRcvLog.getColumn(e.row, "IF_ID");
        	var code1 =  'IF_PI_1801'; //IF_ID 특정 코드일 때 오류이지만 재전송 버튼 비활성화
        	var code2 =  'IF_PI_1802';
        	var code3 =  'IF_PI_1803';
        	var code4 =  'IF_PI_1804';
        	var code5 =  'IF_PI_1805';
        	var code6 =  'IF_PI_1304';
        	var retryYn =  this.ds_piRcvLog.getColumn(e.row, "RETRY_YN"); //IF별로 재전송여부 관리
        	var retryCnt =  this.ds_piRcvLog.getColumn(e.row, "RETRY_CNT");
        	// 메세지 순번이 1 일때 버튼 비활성화 (expr)
        	if (msgSeq != 1 ) { return; }
        	if ( e.col == 14 ) {

        	if (ifId == code6)
        	{
        		var params = {
        			detailMsg :  dataSet.getColumn(e.row, "ERROR_DTLS")
        		};
        	}else if(ifprocrsltcd != 'E'){
        		return;
        	}else{
        		var params = {
        			detailMsg :  dataSet.getColumn(e.row, "ERROR_DTLS")
        		};
        	}
        	var options = {};
        		options.title = "EEROR 상세 내역";

        		this.gfn_openPopup("oprUntSinglePop", "CO_POP::errorDtlsPopup.xfdl", params,  "", options);

        	} else
        	if (e.col == 5) {
        		this.ds_retry.clearData();
        		this.ds_retry.insertRow(0);
        		this.ds_retry.copyRow(0, this.ds_piRcvLog, e.row);
        		var params = {
        			detailMsg : dataSet.getColumn(e.row, "SND_DATA_CTS"),
        			ds_retry : this.ds_retry
        		};


        		var options = {};
        		options.title = "전송 상세 내용";

        		this.gfn_openPopup("oprUntSinglePop", "CO_POP::sndDataCtnPopup.xfdl", params,  "", options);
        	} else
        	//재전송
        	if (e.col == 16) {
        		if (ifprocrsltcd != 'E' && ifprocrsltcd !='X') { //E와 X일때만 버튼 활성화
        			return;
        		}else{
        			if ( retryYn != 'Y' || retryCnt >= 1 ) //특정 코드일 때 오류이지만 재전송 버튼 비활성화
        			{
        				return;
        			}else{
        		if (!this.confirm("재전송하시겠습니까?")) { return; }

        		var sysId = this.ds_piRcvLog.getColumn(e.row, "IF_SYSTEM_ID");
        		var piId =  this.ds_piRcvLog.getColumn(e.row, "IF_PI_ID");
        		var msgId = this.ds_piRcvLog.getColumn(e.row, "IF_MSG_ID");
        //		var msgSeq = this.ds_piRcvLog.getColumn(e.row, "IF_MSG_SEQ");
        		var ifRsltFld1 = this.ds_piRcvLog.getColumn(e.row, "IF_RSLT_FLD_1");
        		var ifRsltFld2 = this.ds_piRcvLog.getColumn(e.row, "IF_RSLT_FLD_2");
        		var ifRsltFld3 = this.ds_piRcvLog.getColumn(e.row, "IF_RSLT_FLD_3");
        		var ifRsltFld4 = this.ds_piRcvLog.getColumn(e.row, "IF_RSLT_FLD_4");
        		var ifRsltFld5 = this.ds_piRcvLog.getColumn(e.row, "IF_RSLT_FLD_5");
        		var sndDataClassNm = this.ds_piRcvLog.getColumn(e.row, "SND_DATA_CLASS_NM");
        		var no = this.ds_piRcvLog.getColumn(e.row, "NO");
        		var errorDtls = this.ds_piRcvLog.getColumn(e.row, "ERROR_DTLS");
        		var ifprocRsocRsltDtm = this.ds_piRcvLog.getColumn(e.row, "IF_PROC_RSLT_DTM");
        		var ifProcRsltCd = this.ds_piRcvLog.getColumn(e.row, "IF_PROC_RSLT_CD");
        		var sndDataCts = this.ds_piRcvLog.getColumn(e.row, "SND_DATA_CTS");
        		var retryCnt = this.ds_piRcvLog.getColumn(e.row, "RETRY_CNT");
        		var sndDataClassNm = this.ds_piRcvLog.getColumn(e.row, "SND_DATA_CLASS_NM");
        		var syncYn = this.ds_piRcvLog.getColumn(e.row, "SYNC_YN");


        		this.ds_select.addRow();

        		this.ds_select.setColumn(0,"IF_SYSTEM_ID",sysId);
        		this.ds_select.setColumn(0,"IF_PI_ID",piId);
        		this.ds_select.setColumn(0,"IF_MSG_ID",msgId);
        		this.ds_select.setColumn(0,"IF_MSG_SEQ",msgSeq);
        		this.ds_select.setColumn(0,"IF_RSLT_FLD_1",ifRsltFld1);
        		this.ds_select.setColumn(0,"IF_RSLT_FLD_2",ifRsltFld2);
        		this.ds_select.setColumn(0,"IF_RSLT_FLD_3",ifRsltFld3);
        		this.ds_select.setColumn(0,"NO",no);
        		this.ds_select.setColumn(0,"IF_RSLT_FLD_4",ifRsltFld4);
        		this.ds_select.setColumn(0,"IF_RSLT_FLD_5",ifRsltFld5);
        		this.ds_select.setColumn(0,"ERROR_DTLS",sndDataClassNm);
        		this.ds_select.setColumn(0,"SND_DATA_CTS",sndDataCts);
        		this.ds_select.setColumn(0,"SND_DATA_CLASS_NM",sndDataClassNm);
        		this.ds_select.setColumn(0,"IF_PROC_RSLT_CD",ifProcRsltCd);
        		this.ds_select.setColumn(0,"IF_PROC_RSLT_DTM",ifprocRsocRsltDtm);
        		this.ds_select.setColumn(0,"RETRY_CNT",retryCnt);
        		this.ds_select.setColumn(0,"SND_DATA_CLASS_NM",sndDataClassNm);
        		this.ds_select.setColumn(0,"SYNC_YN",syncYn);



        		var sSvcId = "select";
        		var sUrl = "/co/select-pi-rcv-log-retry.do";
        		//내보내는 dataSet
        		var inDs = "ds_select=ds_select";
        		//받아오는 dataSet
        		var outDs = "ds_piRcvLog=ds_output1";

        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, "" , "");
        	}
        	}
        	}
        };

        this.Button00_onclick = function(obj,e)
        {
        	var sysId =
        			 this.ds_piRcvLog.getColumn(e.row, "IF_SYSTEM_ID")
        		;
        	var piId =
        			 this.ds_piRcvLog.getColumn(e.row, "IF_PI_ID")
        		;
        	var msgId =
        			 this.ds_piRcvLog.getColumn(e.row, "IF_MSG_ID")
        		;
        		var msgSeq =
        			 this.ds_piRcvLog.getColumn(e.row, "IF_MSG_SEQ")
        		;
        		this.alert(sysId +" , "+ piId +" , "+ msgId+ " , "+ msgSeq);
        		this.ds_select.addRow();

        		this.ds_select.setColumn(0,"IF_SYSTEM_ID",sysId);
        		this.ds_select.setColumn(0,"IF_PI_ID",piId);
        		this.ds_select.setColumn(0,"IF_MSG_ID",msgId);
        		this.ds_select.setColumn(0,"IF_MSG_SEQ",msgSeq);
        		//2022.10.11 수정
        };
        this.btn_piPopup_onclick = function(obj,e)
        {
        	var options = {title:'PI정보관리'};
        	var params = {coCd:this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")};
        	this.gfn_openPopup("piInfoPopup", "CO_POP::piIfInfoPopup.xfdl", params,  "", options);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.Div00.form.cmb_inqPerdSprCd.addEventHandler("onitemchanged",this.cmb_inqPerdSprCd_onitemchanged,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div00.form.btn_clear.addEventHandler("onclick",this.Div00_btn_clear_onclick,this);
            this.Div00.form.cmb_inqPerdSprCd2.addEventHandler("onitemchanged",this.cmb_inqPerdSprCd2_onitemchanged,this);
            this.Div00.form.cmb_ifProcRsltCd.addEventHandler("onitemchanged",this.Div00_cmb_ifProcRsltCd_onitemchanged,this);
            this.btn_layoutClear.addEventHandler("onclick",this.btn_layoutClear_onclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.btn_excelDown.addEventHandler("onclick",this.btn_excelDown_onclick,this);
            this.grd_excel.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.btn_piPopup.addEventHandler("onclick",this.btn_piPopup_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_YA_17.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
