(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_NA_19");
            this.set_titletext("이벤트 - 스템프형- 참여자목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(820,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_IDS\" type=\"STRING\" size=\"256\"/><Column id=\"START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"END_YN\" type=\"STRING\" size=\"256\"/><Column id=\"STAMP_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_EVT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_DOWNLOAD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"dbWrk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchMbrIdList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gridEvtPrtcDtls", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_PRTC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRTC_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"PRTC_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"RPLY_OPUB_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RPLY_DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRTC_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRTC_COUNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_DOWNLOAD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gridEvtPrtcDtlsExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_PRTC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRTC_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"PRTC_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"RPLY_OPUB_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RPLY_DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRTC_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRTC_COUNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_DOWNLOAD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gridEvtPrtcDtlsAll", this);
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_PRTC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRTC_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"PRTC_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"RPLY_OPUB_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RPLY_DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0","800","139",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo50","159","-73","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo51","1021","-73","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","0","20","600",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("W20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","780","0","20","600",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("W20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","800","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("H20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01_00","20","20","760","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","20","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("회원");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mbrIdNm","160","24","553","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchMbrId","717","24","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_multi");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchMbrIdMulText","745","24","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_document");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00_00","769","21","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01_00_00","20","51","760","32",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","51","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("완료 기간");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_searchEndDate","284","55","106","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("Static59","271","55","9","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_searchStartDate","160","55","107","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00","279","52","5","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("W5");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","400","51","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("완료 여부");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03","530","52","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","530","52","249","3",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_03_01","530","79","249","3",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01","267","52","5","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("W5");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_searchEndYn","540","55","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdo_searchEndYn_innerdataset = new nexacro.NormalDataset("rdo_searchEndYn_innerdataset", obj);
            rdo_searchEndYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">완료</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미완료</Col></Row></Rows>");
            obj.set_innerdataset(rdo_searchEndYn_innerdataset);
            obj.set_text("A");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01","0","83","800","10",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("H10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00","0","119","800","20",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("H20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_init","656","93","60","26",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","720","93","60","26",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totalCount","20","179","121","25",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("(총 0건 0/0)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDownload","670","169","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","0","139","800","30",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("H30");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_01","0","197","800","10",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("H10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_evtPrtcDtls","20","207","760","364",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_gridEvtPrtcDtls");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"85\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"105\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"회원 ID\"/><Cell col=\"1\" text=\"회원명\"/><Cell col=\"2\" text=\"로그인 ID\"/><Cell col=\"3\" text=\"최종 완료 일시\"/><Cell col=\"4\" text=\"참여 횟수\"/><Cell col=\"5\" text=\"이벤트 완료\"/><Cell col=\"6\" text=\"쿠폰 다운로드\"/><Cell col=\"7\" text=\"쿠폰번호\"/></Band><Band id=\"body\"><Cell text=\"bind:MBR_ID\" textAlign=\"center\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:MBR_NM\"/><Cell col=\"2\" text=\"bind:LOGN_ID\" textAlign=\"center\" displaytype=\"normal\"/><Cell col=\"3\" text=\"bind:PRTC_DTM\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:PRTC_COUNT\" textAlign=\"right\" expr=\"&quot;&lt;u v=&apos;true&apos;&gt;&quot; + dataset.parent.fn_getAutoComma(PRTC_COUNT) + &quot;&lt;/u&gt;&quot;\" displaytype=\"decoratetext\"/><Cell col=\"5\" text=\"bind:PRTC_COUNT_NM\"/><Cell col=\"6\" text=\"bind:CPN_DOWNLOAD_YN\" border=\"1px solid #d4d4d4\"/><Cell col=\"7\" text=\"bind:CPN_NO\" border=\"1px solid #d4d4d4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","920","800","20",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("H20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00","0","571","800","30",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("H30");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","602","760","38",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_02","0","640","800","10",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("H10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","365","650","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00_00_01_00_00","0","723","800","10",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("H10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static64_00_00","19","702","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("전체 참여 내역");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00_00_00_00_00_00_00","0","680","800","30",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("H30");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_evtPrtcDtlsAll","20","733","760","167",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_gridEvtPrtcDtlsAll");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"655\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"참여일시\"/></Band><Band id=\"body\"><Cell text=\"bind:RN\" textAlign=\"center\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:PRTC_DTM\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","20","900","760","20",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_background("white");
            obj.set_visible("true");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_evtPrtcDtlsExcel","20","978","760","102",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_gridEvtPrtcDtlsExcel");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"85\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"105\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"회원 ID\"/><Cell col=\"1\" text=\"회원명\"/><Cell col=\"2\" text=\"로그인 ID\"/><Cell col=\"3\" text=\"최종 완료 일시\"/><Cell col=\"4\" text=\"참여 횟수\"/><Cell col=\"5\" text=\"이벤트 완료\"/><Cell col=\"6\" text=\"쿠폰 다운로드\"/><Cell col=\"7\" text=\"쿠폰번호\"/></Band><Band id=\"body\"><Cell text=\"bind:MBR_ID\" textAlign=\"center\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:MBR_NM\"/><Cell col=\"2\" text=\"bind:LOGN_ID\" textAlign=\"center\" displaytype=\"normal\"/><Cell col=\"3\" text=\"bind:PRTC_DTM\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:PRTC_COUNT\" textAlign=\"right\" expr=\"dataset.parent.fn_getAutoComma(PRTC_COUNT)\" displaytype=\"normal\"/><Cell col=\"5\" text=\"bind:PRTC_COUNT_NM\"/><Cell col=\"6\" text=\"bind:CPN_DOWNLOAD_YN\" border=\"1px solid #d4d4d4\"/><Cell col=\"7\" text=\"bind:CPN_NO\" border=\"1px solid #d4d4d4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",820,700,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","cal_searchStartDate","value","ds_search","START_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cal_searchEndDate","value","ds_search","END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","rdo_searchEndYn","value","ds_search","END_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_NA_19.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_NA_19.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_NA_19.xfdl", function() {
        /*******************************************************
          PROJECT NAME : 이벤트 - 스템프형- 참여자목록
          CREATION DATES : 2022.03.16
        *******************************************************/

        /* 스크립트 인클루드 */
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /* ===============================================================
         * 0. Form Variable
         *  - Form 변수 영역
         * ===============================================================
         */
        //var fv_변수명;
        var fv_coCd = "";		// 선택한 회사코드
        var fv_evtSeq = "";		// 선택한 이벤트순번
        var fv_stampCnt = "";	// 선택한 이벤트 스템프 개수
        var fv_cpnEvtNo = "";	// 선택한 이벤트 쿠폰이벤트번호

        this.totalCount = 0;

        /* ===============================================================
         * 1. Form Load
         *  - Form 로드시 실행
         * ===============================================================
         */
        this.SSP_BO_NA_19_onload = function(obj, e)
        {
        	// 공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	// 초기화
        	this.fn_init("VAL_INIT");
        	this.fn_init("SEARCH_INIT");
        	this.fn_init("GRID_INIT");

        	// 단축키 등록
        	this.fn_regShortCutMethod();
        }

        this.fn_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };








        /* ===============================================================
         * 2. transaction
         *  - transaction 영역
         * ===============================================================
         */

        /**
         * 이벤트 grid 값 조회
         */
        this.fn_gridEvtPrtcDtlsList = function (sPage)
        {
        	/*
        	if (this.cal_searchStartDate.value == "" || this.cal_searchStartDate.value == undefined)
        	{
        		alert(this.fn_getMessage("ERRN000001", "시작일은")); // 시작일은 필수 입력항목입니다.
        		return
        	}

        	if (this.cal_searchEndDate.value == "" || this.cal_searchEndDate.value == undefined)
        	{
        		alert(this.fn_getMessage("ERRN000001", "종료일은")); // 종료일은 필수 입력항목입니다.
        		return
        	}
        	*/

        	if (this.cal_searchStartDate.value != "" && this.cal_searchStartDate.value != undefined && (this.cal_searchEndDate.value == "" || this.cal_searchEndDate.value == undefined))
        	{
        		alert(this.fn_getMessage("ERRN000001", "시작일을 입력하면 종료일은")); // 시작일을 입력하면 종료일은 필수 입력항목입니다.
        		this.cal_searchEndDate.setFocus();
        		return
        	}

        	if ((this.cal_searchStartDate.value == "" || this.cal_searchStartDate.value == undefined) && this.cal_searchEndDate.value != "" && this.cal_searchEndDate.value != undefined)
        	{
        		alert(this.fn_getMessage("ERRN000001", "종료일을 입력하면 시작일은")); // 종료일을 입력하면 시작일은 필수 입력항목입니다.
        		this.cal_searchStartDate.setFocus();
        		return
        	}

        	if (this.cal_searchStartDate.value > this.cal_searchEndDate.value)
        	{
        		alert(this.fn_getMessage("ERRN000002", "종료일이 시작일보다")); // 종료일이 시작일보다 작습니다.
        		return
        	}

        	if (sPage == 0)
        	{
        		// 페이징 초기화
        		var oPaging = this.div_paging;
        		oPaging.uPage = 1;
        		oPaging.uPageNum = 0;

        		this.ds_search.setColumn(0, "START_NUM", 0);
        		this.ds_search.setColumn(0, "ROW_COUNT", this.div_paging.uPageRowCnt);
        		this.ds_search.setColumn(0, "dbWrk", "SELECT");
        	}

        	var sSvcId = "gridEvtPrtcDtlsList";
        	var sUrl = "/sa/evt/select-evt-prtc-dtls-stamp-list.do";
        	var sInData = "ds_search=ds_search ds_searchMbrIdList=ds_searchMbrIdList"
        	var sOutData = "ds_gridEvtPrtcDtls=ds_output1";
        	var sArg = "";
        	var sCallback = "fn_callbackFunction";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        };

        /**
         * 이벤트 엑셀 grid 값 조회
         */
        this.fn_gridEvtPrtcDtlsListExcel = function ()
        {
        	/*
        	if (this.cal_searchStartDate.value == "" || this.cal_searchStartDate.value == undefined)
        	{
        		alert(this.fn_getMessage("ERRN000001", "시작일은")); // 시작일은 필수 입력항목입니다.
        		return
        	}

        	if (this.cal_searchEndDate.value == "" || this.cal_searchEndDate.value == undefined)
        	{
        		alert(this.fn_getMessage("ERRN000001", "종료일은")); // 종료일은 필수 입력항목입니다.
        		return
        	}
        	*/

        	if (this.cal_searchStartDate.value != "" && this.cal_searchStartDate.value != undefined && (this.cal_searchEndDate.value == "" || this.cal_searchEndDate.value == undefined))
        	{
        		alert(this.fn_getMessage("ERRN000001", "시작일을 입력하면 종료일은")); // 시작일을 입력하면 종료일은 필수 입력항목입니다.
        		this.cal_searchEndDate.setFocus();
        		return
        	}

        	if ((this.cal_searchStartDate.value == "" || this.cal_searchStartDate.value == undefined) && this.cal_searchEndDate.value != "" && this.cal_searchEndDate.value != undefined)
        	{
        		alert(this.fn_getMessage("ERRN000001", "종료일을 입력하면 시작일은")); // 종료일을 입력하면 시작일은 필수 입력항목입니다.
        		this.cal_searchStartDate.setFocus();
        		return
        	}

        	if (this.cal_searchStartDate.value > this.cal_searchEndDate.value)
        	{
        		alert(this.fn_getMessage("ERRN000002", "종료일이 시작일보다")); // 종료일이 시작일보다 작습니다.
        		return
        	}

        	var sSvcId = "gridEvtPrtcDtlsListExcel";
        	var sUrl = "/sa/evt/select-evt-prtc-dtls-stamp-list.do";
        	var sInData = "ds_search=ds_search ds_searchMbrIdList=ds_searchMbrIdList"
        	var sOutData = "ds_gridEvtPrtcDtlsExcel=ds_output1";
        	var sArg = "";
        	var sCallback = "fn_callbackFunction";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        };

        /**
         * 이벤트 grid 값 조회
         */
        this.fn_gridEvtPrtcDtlsAllList = function ()
        {
        	var sSvcId = "gridEvtPrtcDtlsAllList";
        	var sUrl = "/sa/evt/select-evt-prtc-dtls-stamp-all-list.do";
        	var sInData = "ds_search=ds_search"
        	var sOutData = "ds_gridEvtPrtcDtlsAll=ds_output1";
        	var sArg = "";
        	var sCallback = "fn_callbackFunction";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        };










        /* ===============================================================
         * 3. CallBack
         *  - transaction 후 처리 영역
         * ===============================================================
         */

        /**
         * 공통 callback
         */
        this.fn_callbackFunction = function(svcID, errorCode, errorMsg)
        {
        	if(errorCode < 0)
        	{
        		alert(errorMsg);
        		return;
        	}

        	switch (svcID)
        	{
        		case "gridEvtPrtcDtlsList" :

        			//paging 처리
        			this.div_paging.form.cfn_createPage(this.div_paging, this.totalCount, this.div_paging.uPageRowCnt, "fn_pageCallbackFunction");

        			// dataset 영역
        			this.ds_gridEvtPrtcDtlsAll.clearData();

        			this.grd_evtPrtcDtlsAll.clearSelect();
        			this.grd_evtPrtcDtlsAll.nodatatext = "조회 결과가 없습니다.";

        			break;

        		case "gridEvtPrtcDtlsListExcel" :

        			//trace(this.ds_gridEvtPrtcDtlsExcel.saveXML());

        			var sFileName = "이벤트_참여자목록_스템프형_EXCEL_EXPORT";			// file Name
        			var aGrid = [this.grd_evtPrtcDtlsExcel];
        			var aSht  = ["이벤트 - 참여자목록(스템프형)"];

        			var oParam = {form:this, grid:aGrid, fileName:sFileName, sheetName:aSht};
        			this.gfn_exportExcel(oParam);

        			break;

        		case "gridEvtPrtcDtlsAllList" :

        			break;

        		default :

        			break;
        	}
        }

        /**
         * 싱글/멀티 팝업 공통 callback
         */
        this.fn_popupCallbackFunction = function(sPopupId, sRetValue)
        {
        	if(this.gfn_isNull(sRetValue))
        	{
        		return;
        	}

        	var retObj = JSON.parse(sRetValue);

        	switch(sPopupId)
        	{
        		case "btn_searchMbrId" :

        			for(var i=0; i<retObj.length; i++)
        			{
        				var rowData = JSON.parse(retObj[i]);

        				var findRow = this.ds_searchMbrIdList.findRowExpr("MBR_ID == '" + rowData.MBR_ID + "'");

        				if(findRow < 0)
        				{
        					var nRow = this.ds_searchMbrIdList.addRow();

        					this.ds_searchMbrIdList.setColumn(nRow, "MBR_ID", rowData.MBR_ID);
        					this.ds_searchMbrIdList.setColumn(nRow, "MBR_NM", rowData.MBR_NM);
        				}
        			}

        			var sNmList = "";

        			for(var i=0; i<this.ds_searchMbrIdList.getRowCount(); i++)
        			{
        				sNmList += this.ds_searchMbrIdList.getColumn(i, "MBR_NM") + ",";
        			}

        			sNmList = sNmList.substring(0, sNmList.length-1);

        			this.edt_mbrIdNm.set_value(sNmList);

        			break;

        		case "btn_searchMbrIdMulText" :

        			var retValue = retObj.textValue;

        			var arrValue = retValue.split(",");

        			for( var i = 0; i < arrValue.length; i++)
        			{
        				var sMbrId = arrValue[i];

        				if (sMbrId != "")
        				{
        					var findRow = this.ds_searchMbrIdList.findRowExpr("MBR_ID == '" + sMbrId + "'");

        					if(findRow < 0)
        					{
        						var nRow = this.ds_searchMbrIdList.addRow();

        						this.ds_searchMbrIdList.setColumn(nRow, "MBR_ID", sMbrId);
        						this.ds_searchMbrIdList.setColumn(nRow, "MBR_NM", sMbrId);
        					}
        				}
        			}

        			var sNmList = "";

        			for(var i=0; i<this.ds_searchMbrIdList.getRowCount(); i++)
        			{
        				sNmList += this.ds_searchMbrIdList.getColumn(i, "MBR_NM") + ",";
        			}

        			sNmList = sNmList.substring(0, sNmList.length-1);

        			this.edt_mbrIdNm.set_value(sNmList);

        			break;

        		default :

        			break;
        	}
        }

        /**
         * 페이징 공통 callback
         */
        this.fn_pageCallbackFunction = function(sFlag)
        {
        	var oPaging = this.div_paging;

        	if(sFlag)
        	{
        		this.ds_search.setColumn(0, "START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0, "ROW_COUNT", this.div_paging.uPageRowCnt);
        		this.fn_gridEvtPrtcDtlsList();
        	}

        	var sTotText = "(<b v='true'>총 " + oPaging.uTotCount + "건 </b><fc v='red'>" + oPaging.uPage + "</fc> / " + oPaging.uPageCnt + ")";

        	this.sta_totalCount.set_text(sTotText);
        };

        /**
         * 정렬 공통 callback
         */
        this.fn_sortCallbackFunction = function(sGridId)
        {
        	var oGrid = null;

        	if(sGridId == "grd_evtPrtcDtls")
        	{
        		oSortInfo = this.grd_evtPrtcDtls.uaSortInfo;

        		if (oSortInfo.bindCol != "READ_COL")
        		{
        			this.ds_search.setColumn(0, "SORT_COLUMN", oSortInfo.bindCol);
        			this.ds_search.setColumn(0, "SORT_TYPE", oSortInfo.status);

        			this.fn_gridEvtPrtcDtlsList();
        		}
        	}
        };










        /* ===============================================================
         * 4. 외부 호출 FUNCTION 영역
         * ===============================================================
         */

        /**
         * 화면 설정 함수
         */
        this.cfn_formInit = function()
        {
        	// grid 초기 설정
        	this.grd_evtPrtcDtls.uSortFlag = "false";
        	this.grd_evtPrtcDtls.uServerSortFlag = "true";
        	this.grd_evtPrtcDtls.uSortCallback = "fn_sortCallbackFunction";
        	this.grd_evtPrtcDtls.uCellSizeType = "true";

        	// 페이징 초기 설정
        	this.div_paging.uPage = 1;
        	this.div_paging.uPageNum = 0;
        	this.div_paging.uPageRowCnt = 20;
        	this.div_paging.uPageCnt = 0;
        	this.div_paging.uTotCount = 0;
        }










        /* ===============================================================
         * 5. event action
         *  - dataset 및 component 이벤트 영역
         * ===============================================================
         */

        /**
         * 회원 검색 아이콘 클릭 시
         */
        this.btn_searchMbrId_onclick = function(obj,e)
        {
        	var oArg = { coCd : this.fv_coCd
        	           };

        	var oOption = { top : "-1"
        	              , left : "-1"
        	              , width : "-1"
        	              , height : "-1"
        	              , popuptype : "modal"	// modal:showModal, modeless:application.open, modalsync:showModalSync, modalwindow:showModalWindow
        	              , layered : "false"
        	              , opacity : "100"
        	              , autosize : "true"
        	              , titlebar : "true"
        	              , title : "회원 조회"
        	              };

        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_25.xfdl", oArg, "fn_popupCallbackFunction", oOption);
        };

        /**
         * 회원 멀티텍스트 아이콘 클릭 시
         */
        this.btn_searchMbrIdMulText_onclick = function(obj,e)
        {
        	var oArg = { coCd : this.fv_coCd
        	           , textId : this.btn_searchMbrIdMulText
        	           };

        	var oOption = { top : "-1"
        	              , left : "-1"
        	              , width : "-1"
        	              , height : "-1"
        	              , popuptype : "modal"	// modal:showModal, modeless:application.open, modalsync:showModalSync, modalwindow:showModalWindow
        	              , layered : "false"
        	              , opacity : "100"
        	              , autosize : "true"
        	              , titlebar : "true"
        	              , title : "멀티 텍스트"
        	              };

        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_13.xfdl", oArg, "fn_popupCallbackFunction", oOption);
        };

        /**
         * 초기화 버튼 클릭 시
         */
        this.btn_init_onclick = function(obj,e)
        {
        	this.fn_init("SEARCH_INIT");
        };

        /**
         * 조회 버튼 클릭 시
         */
        this.btn_search_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0, "EXCEL_DOWNLOAD_YN", "N");

        	this.fn_gridEvtPrtcDtlsList(0);
        };

        /**
         * 엑셀다운로드 버튼 클릭 시
         */
        this.btn_excelDownload_onclick = function(obj,e)
        {
        	this.gfn_openPopup("excelDownPopup", "CO_POP::excelDownPopup.xfdl", null, "fn_excelDownload");
        };

        /**
         * 그리드 cell 클릭 시
         */
        this.grd_evtPrtcDtls_oncellclick = function(obj,e)
        {
        	if(e.col == this.grd_evtPrtcDtls.getBindCellIndex("body", "PRTC_COUNT"))
        	{
        		// 이벤트 명 컬럼 클릭 시

        		var objDs = obj.getBindDataset();
        		var nRow = objDs.rowposition;

        		var sMbrId = objDs.getColumn(nRow, "MBR_ID");

        		this.ds_search.setColumn(0, "MBR_ID", sMbrId);

        		// dataset 영역
        		this.ds_gridEvtPrtcDtlsAll.clearData();

        		// 참여자목록 (전체) 조회
        		this.fn_gridEvtPrtcDtlsAllList(0);
        	}
        };

        /**
         * 닫기 버튼 클릭 시
         */
        this.btn_close_onclick = function(obj,e)
        {
        	var resData = {};
        	var resString = "";

        	resData.RETURN_YN = "N";

        	// json string 변경
        	resString = JSON.stringify(resData);

        	// return
        	this.close(resString);
        };










        /* ===============================================================
         * 6. User Function
         *  - 사용자 구현 함수 영역
         * =============================================================== */

        /**
         * 자동콤마 찍기
         */
        this.fn_getAutoComma = function(sVal)
        {
        	var newValue;
        	var len;
        	var ch;
        	var j;
        	var formatValue;

        	newValue = "" + sVal;
        	len = newValue.length;
        	ch = "";
        	j = 1;
        	formatValue = "";

        	//newValue = uf_getSelectNumber(newValue);
        	len = newValue.length;

        	for ( i=len; i>0; i-- )
        	{
        		ch = newValue.substring(i-1,i);

        		formatValue = ch + formatValue;

        		if ( (j%3) == 0 && i>1 )
        		{
        			formatValue = "," + formatValue
        		}

        		j++;
        	}

        	return formatValue;
        }

        /**
         * 화면 초기화 함수
         */
        this.fn_init = function(sVal)
        {
        	switch (sVal)
        	{
        		case "VAL_INIT" :

        			// 변수 초기화

        			this.fv_coCd = this.parent.sCoCd;
        			this.fv_evtSeq = this.parent.sEvtSeq;
        			this.fv_stampCnt = this.parent.sStampCnt;
        			this.fv_cpnEvtNo = this.parent.sCpnEvtNo;
        			this.totalCount = 0;

        			break;

        		case "SEARCH_INIT" :

        			// 검색 항목 초기화

        			// dataset 설정
        			this.ds_search.clearData();
        			var nRow = this.ds_search.addRow();

        			this.ds_search.setColumn(nRow, "CO_CD", this.fv_coCd);
        			this.ds_search.setColumn(nRow, "EVT_SEQ", this.fv_evtSeq);
        			this.ds_search.setColumn(nRow, "STAMP_CNT", this.fv_stampCnt);
        			this.ds_search.setColumn(nRow, "CPN_EVT_NO", this.fv_cpnEvtNo);
        			this.ds_search.setColumn(nRow, "SORT_COLUMN", "");
        			this.ds_search.setColumn(nRow, "SORT_TYPE", "");
        			this.ds_search.setColumn(nRow, "EXCEL_DOWNLOAD_YN", "N");

        			this.ds_searchMbrIdList.clearData();

        			// 입력 항목 영역
        			this.edt_mbrIdNm.set_value("");
        			this.cal_searchStartDate.set_value("");
        			this.cal_searchEndDate.set_value("");
        			this.rdo_searchEndYn.set_index(0);

        			// 회원 명 항목 비활성화
        			this.edt_mbrIdNm.set_readonly(true);

        			// 버튼 영역

        			// 회원 검색, 회원 멀티텍스트 아이콘
        			this.btn_searchMbrId.set_enable(true);
        			this.btn_searchMbrIdMulText.set_enable(true);

        			// 초기화, 조회
        			this.btn_init.set_enable(true);
        			this.btn_search.set_enable(true);

        			// 엑셀다운로드
        			this.btn_excelDownload.set_enable(true);

        			// 페이징 초기화
        			this.ds_search.setColumn(0, "START_NUM", 0);
        			this.ds_search.setColumn(0, "ROW_COUNT", this.div_paging.uPageRowCnt);

        			// 닫기
        			this.btn_close.set_enable(true);

        			break;

        		case "GRID_INIT" :

        			// grid 초기화

        			this.sta_totalCount.set_text("(<b v='true'>총 0건 </b><fc v='red'>0</fc> / 0)");

        			// dataset 영역
        			this.ds_gridEvtPrtcDtls.clearData();
        			this.ds_gridEvtPrtcDtlsExcel.clearData();
        			this.ds_gridEvtPrtcDtlsAll.clearData();

        			this.grd_evtPrtcDtls.clearSelect();
        			this.grd_evtPrtcDtlsExcel.clearSelect();
        			this.grd_evtPrtcDtlsAll.clearSelect();

        			this.grd_evtPrtcDtls.nodatatext = "조회 결과가 없습니다.";
        			this.grd_evtPrtcDtlsExcel.nodatatext = "조회 결과가 없습니다.";
        			this.grd_evtPrtcDtlsAll.nodatatext = "조회 결과가 없습니다.";

        			// 참여자목록 조회
        			//this.fn_gridEvtPrtcDtlsList(0);

        			break;

        		default :

        			//alert("작업구분이 없습니다.");

        			break;
        	}
        }

        // 창닫기
        this.fn_closeForm = function() {
        	this.close();
        };

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodENTER("btn_search_onclick");
        	this.fn_regMethodESC("fn_closeForm");
        };

        // 엑셀다운로드
        this.fn_excelDownload = function(objId, ret) {

        	if(this.ds_gridEvtPrtcDtls.rowcount < 1)
            {
                this.fn_alert("ERRS000202", "EXCEL 정보" ,"","information");              // 엑셀 파일로 다운로드 할 수 있는 자료가 없습니다.
                return false;
            }

        	var answr = ret.split("||||");

        	if(this.gfn_isNull(answr)) return;

        	this.gfn_exportExcel({form:this, grid:this.grd_evtPrtcDtls, fileName:"이벤트_참여자목록_스템프형", password: answr[0], downRsn: answr[1], pgmId: "SSP_BO_NA_19", dbWrk: "DOWNLOAD"});

        }








        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_NA_19_onload,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.btn_searchMbrId.addEventHandler("onclick",this.btn_searchMbrId_onclick,this);
            this.btn_searchMbrIdMulText.addEventHandler("onclick",this.btn_searchMbrIdMulText_onclick,this);
            this.btn_init.addEventHandler("onclick",this.btn_init_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_excelDownload.addEventHandler("onclick",this.btn_excelDownload_onclick,this);
            this.grd_evtPrtcDtls.addEventHandler("oncellclick",this.grd_evtPrtcDtls_oncellclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.grd_evtPrtcDtlsExcel.addEventHandler("oncellclick",this.grd_evtPrtcDtls_oncellclick,this);
        };
        this.loadIncludeScript("SSP_BO_NA_19.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
