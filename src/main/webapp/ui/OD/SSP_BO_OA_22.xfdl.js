(function() 
{ 
    return function() 
    { 
        if (!this._is_form) 
            return; 
         
        var obj = null; 
         
        this.on_create = function() 
        { 
            this.set_name("SSP_BO_OA_02_05"); 
            this.set_titletext("정산 정보"); 
            if (Form == this.constructor) 
            { 
                this._setFormPosition(1336,846); 
            } 
             
            // Object(Dataset, ExcelExportObject) Initialize 
            obj = new Dataset("ds_search", this); 
            obj.set_useclientlayout("true"); 
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col></Row></Rows>"); 
            this.addChild(obj.name, obj); 
 
 
            obj = new Dataset("ds_list01", this); 
            obj.set_useclientlayout("true"); 
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"GI_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GI_STATS_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_DD\" type=\"STRING\" size=\"256\"/><Column id=\"STL_MEAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"STL_MEAN_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BILCLT_COND_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BILCLT_COND_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ELMN_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"IRCPS_CMPL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"IRCPS_CMPL_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VERF_STATS_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_STATS_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>"); 
            this.addChild(obj.name, obj); 
 
 
            obj = new Dataset("ds_list02", this); 
            obj.set_useclientlayout("true"); 
            obj._setContents("<ColumnInfo><Column id=\"GDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GDPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GI_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GI_DCN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"GI_REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"GI_MEMO_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"AUTO_GI_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>"); 
            this.addChild(obj.name, obj); 
 
 
            obj = new Dataset("ds_list03", this); 
            obj.set_useclientlayout("true"); 
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_FW_ITM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_YM\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ADJ_YM\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"VERF_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_MM_CHG_RSN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_DCN_DEALR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_ADJ_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_MM_CHG_RSN_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_ADJ_STATS_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>"); 
            this.addChild(obj.name, obj); 
             
            // UI Components Initialize 
            obj = new Div("Div00","0","0",null,null,"0","0",null,null,null,null,this); 
            obj.set_taborder("0"); 
            obj.set_text("Div00"); 
            this.addChild(obj.name, obj); 
 
            obj = new Div("Div00","0","20",null,"125","0",null,null,null,null,null,this.Div00.form); 
            obj.set_taborder("0"); 
            obj.set_text("Div00"); 
            obj.set_background("transparent"); 
            this.Div00.addChild(obj.name, obj); 
 
            obj = new Static("sta_stlInfo","0","0","200","20",null,null,null,null,null,null,this.Div00.form.Div00.form); 
            obj.set_taborder("0"); 
            obj.set_text("■ 기본 정보"); 
            obj.set_cssclass("sta_WF_title01"); 
            this.Div00.form.Div00.addChild(obj.name, obj); 
 
            obj = new Static("Static03","0","30",null,"32","0",null,null,null,null,null,this.Div00.form.Div00.form); 
            obj.set_taborder("1"); 
            obj.set_cssclass("sta_cm_box02L_tdt"); 
            obj.set_text(""); 
            this.Div00.form.Div00.addChild(obj.name, obj); 
 
            obj = new Static("Static07","0","61",null,"32","0",null,null,null,null,null,this.Div00.form.Div00.form); 
            obj.set_taborder("2"); 
            obj.set_cssclass("sta_cm_box02L"); 
            this.Div00.form.Div00.addChild(obj.name, obj); 
 
            obj = new Static("Static65","0","92",null,"32","0",null,null,null,null,null,this.Div00.form.Div00.form); 
            obj.set_taborder("3"); 
            obj.set_cssclass("sta_cm_box02L"); 
            this.Div00.form.Div00.addChild(obj.name, obj); 
 
            obj = new Static("Static04","862","30","130","32",null,null,null,null,null,null,this.Div00.form.Div00.form); 
            obj.set_taborder("4"); 
            obj.set_text("정산 상태"); 
            obj.set_cssclass("sta_cm_box01L_tdt"); 
            this.Div00.form.Div00.addChild(obj.name, obj); 
 
            obj = new Static("Static10","0","92","130","32",null,null,null,null,null,null,this.Div00.form.Div00.form); 
            obj.set_taborder("5"); 
            obj.set_text("선수금대상여부"); 
            obj.set_cssclass("sta_cm_box01L"); 
            this.Div00.form.Div00.addChild(obj.name, obj); 
 
            obj = new Static("sta_dlvForm","430","61","130","32",null,null,null,null,null,null,this.Div00.form.Div00.form); 
            obj.set_taborder("6"); 
            obj.set_text("결제 수단"); 
            obj.set_cssclass("sta_cm_box01L"); 
            this.Div00.form.Div00.addChild(obj.name, obj); 
 
            obj = new Static("Static06_00","862","61","130","32",null,null,null,null,null,null,this.Div00.form.Div00.form); 
            obj.set_taborder("7"); 
            obj.set_text("수금 조건"); 
            obj.set_cssclass("sta_cm_box01L"); 
            this.Div00.form.Div00.addChild(obj.name, obj); 
 
            obj = new Static("Static02","0","30","130","32",null,null,null,null,null,null,this.Div00.form.Div00.form); 
            obj.set_taborder("8"); 
            obj.set_text("입고 내역"); 
            obj.set_cssclass("sta_cm_box01L_tdt"); 
            this.Div00.form.Div00.addChild(obj.name, obj); 
 
            obj = new Static("Static22","430","30","130","32",null,null,null,null,null,null,this.Div00.form.Div00.form); 
            obj.set_taborder("9"); 
            obj.set_text("검수 상태"); 
            obj.set_cssclass("sta_cm_box01L_tdt"); 
            this.Div00.form.Div00.addChild(obj.name, obj); 
 
            obj = new Static("Static06_01","0","61","130","32",null,null,null,null,null,null,this.Div00.form.Div00.form); 
            obj.set_taborder("10"); 
            obj.set_text("정산일"); 
            obj.set_cssclass("sta_cm_box01L"); 
            this.Div00.form.Div00.addChild(obj.name, obj); 
 
            obj = new Static("Static02_01_00_00_01_01","130","30","10","30",null,null,null,null,null,null,this.Div00.form.Div00.form); 
            obj.set_taborder("11"); 
            obj.set_text("10"); 
            obj.set_cssclass("div_WF_guide"); 
            obj.set_visible("false"); 
            this.Div00.form.Div00.addChild(obj.name, obj); 
 
            obj = new Static("Static02_01_00_00_01_01_00","560","30","10","30",null,null,null,null,null,null,this.Div00.form.Div00.form); 
            obj.set_taborder("12"); 
            obj.set_text("10"); 
            obj.set_cssclass("div_WF_guide"); 
            obj.set_visible("false"); 
            this.Div00.form.Div00.addChild(obj.name, obj); 
 
            obj = new Static("Static02_01_00_00_01_01_00_00_00","992","31","10","30",null,null,null,null,null,null,this.Div00.form.Div00.form); 
            obj.set_taborder("13"); 
            obj.set_text("10"); 
            obj.set_cssclass("div_WF_guide"); 
            obj.set_visible("false"); 
            this.Div00.form.Div00.addChild(obj.name, obj); 
 
            obj = new Static("Static02_00_01_00_00_01_00",null,"20","30","10","1296",null,null,null,null,null,this.Div00.form.Div00.form); 
            obj.set_taborder("14"); 
            obj.set_cssclass("div_WF_guide"); 
            obj.set_visible("false"); 
            obj.set_text("10"); 
            this.Div00.form.Div00.addChild(obj.name, obj); 
 
            obj = new Edit("edt_dstrbPath","140","34","280","24",null,null,null,null,null,null,this.Div00.form.Div00.form); 
            obj.set_taborder("15"); 
            obj.set_readonly("true"); 
            obj.set_text("입고 완료"); 
            this.Div00.form.Div00.addChild(obj.name, obj); 
 
            obj = new Static("Static02_01_00_00_01_01_01","420","30","10","30",null,null,null,null,null,null,this.Div00.form.Div00.form); 
            obj.set_taborder("16"); 
            obj.set_text("10"); 
            obj.set_cssclass("div_WF_guide"); 
            obj.set_visible("false"); 
            this.Div00.form.Div00.addChild(obj.name, obj); 
 
            obj = new Edit("edt_verfStats","570","34","282","24",null,null,null,null,null,null,this.Div00.form.Div00.form); 
            obj.set_taborder("17"); 
            obj.set_readonly("true"); 
            obj.set_text("검수 완료"); 
            this.Div00.form.Div00.addChild(obj.name, obj); 
 
            obj = new Static("Static02_01_00_00_01_01_00_00","852","30","10","30",null,null,null,null,null,null,this.Div00.form.Div00.form); 
            obj.set_taborder("18"); 
            obj.set_text("10"); 
            obj.set_cssclass("div_WF_guide"); 
            obj.set_visible("false"); 
            this.Div00.form.Div00.addChild(obj.name, obj); 
 
            obj = new Edit("edt_adjStats","1002","34",null,"24","10",null,null,null,null,null,this.Div00.form.Div00.form); 
            obj.set_taborder("19"); 
            obj.set_readonly("true"); 
            obj.set_text("정산 완료"); 
            this.Div00.form.Div00.addChild(obj.name, obj); 
 
            obj = new Static("Static02_01_00_00_01_01_00_00_00_00","1325","30","10","30",null,null,null,null,null,null,this.Div00.form.Div00.form); 
            obj.set_taborder("20"); 
            obj.set_text("10"); 
            obj.set_cssclass("div_WF_guide"); 
            obj.set_visible("false"); 
            this.Div00.form.Div00.addChild(obj.name, obj); 
 
            obj = new Edit("edt_adjDay","140","65","280","24",null,null,null,null,null,null,this.Div00.form.Div00.form); 
            obj.set_taborder("21"); 
            obj.set_readonly("true"); 
            obj.set_text("31"); 
            this.Div00.form.Div00.addChild(obj.name, obj); 
 
            obj = new Edit("edt_ircpsTgtYn","140","96","280","24",null,null,null,null,null,null,this.Div00.form.Div00.form); 
            obj.set_taborder("22"); 
            obj.set_readonly("true"); 
            obj.set_text("대상 아님"); 
            this.Div00.form.Div00.addChild(obj.name, obj); 
 
            obj = new Edit("edt_aprvMean","570","65","282","24",null,null,null,null,null,null,this.Div00.form.Div00.form); 
            obj.set_taborder("23"); 
            obj.set_readonly("true"); 
            obj.set_text("P012 | 월정산거래"); 
            this.Div00.form.Div00.addChild(obj.name, obj); 
 
            obj = new Edit("edt_bilcltCond","1002","65",null,"24","10",null,null,null,null,null,this.Div00.form.Div00.form); 
            obj.set_taborder("24"); 
            obj.set_readonly("true"); 
            obj.set_text("Q914 | 어음 익월14일 발행/당월말 기준 90일 만기"); 
            this.Div00.form.Div00.addChild(obj.name, obj); 
 
            obj = new Static("Static10_00","430","92","130","32",null,null,null,null,null,null,this.Div00.form.Div00.form); 
            obj.set_taborder("25"); 
            obj.set_text("선수금완료여부"); 
            obj.set_cssclass("sta_cm_box01L"); 
            this.Div00.form.Div00.addChild(obj.name, obj); 
 
            obj = new Edit("edt_elmnQty","1002","96",null,"24","10",null,null,null,null,null,this.Div00.form.Div00.form); 
            obj.set_taborder("26"); 
            obj.set_readonly("true"); 
            obj.set_text("대상 아님"); 
            this.Div00.form.Div00.addChild(obj.name, obj); 
 
            obj = new Static("Static10_00_00","862","92","130","32",null,null,null,null,null,null,this.Div00.form.Div00.form); 
            obj.set_taborder("27"); 
            obj.set_text("제각 수량"); 
            obj.set_cssclass("sta_cm_box01L"); 
            this.Div00.form.Div00.addChild(obj.name, obj); 
 
            obj = new Edit("edt_ircpsCmplYn","570","96","282","24",null,null,null,null,null,null,this.Div00.form.Div00.form); 
            obj.set_taborder("28"); 
            obj.set_readonly("true"); 
            obj.set_text("P012 | 월정산거래"); 
            this.Div00.form.Div00.addChild(obj.name, obj); 
 
            obj = new Div("Div01","0","175",null,"94","0",null,null,null,null,null,this.Div00.form); 
            obj.set_taborder("1"); 
            obj.set_text("Div00"); 
            obj.set_background("transparent"); 
            this.Div00.addChild(obj.name, obj); 
 
            obj = new Static("sta_stlInfo","0","0","200","20",null,null,null,null,null,null,this.Div00.form.Div01.form); 
            obj.set_taborder("0"); 
            obj.set_text("■ 고객 입고/검수 현황"); 
            obj.set_cssclass("sta_WF_title01"); 
            this.Div00.form.Div01.addChild(obj.name, obj); 
 
            obj = new Static("Static02_00_01_00_00_01_00",null,"20","30","10","1296",null,null,null,null,null,this.Div00.form.Div01.form); 
            obj.set_taborder("1"); 
            obj.set_cssclass("div_WF_guide"); 
            obj.set_visible("false"); 
            obj.set_text("10"); 
            this.Div00.form.Div01.addChild(obj.name, obj); 
 
            obj = new Grid("grid_list01","0","30",null,null,"0","0",null,null,null,null,this.Div00.form.Div01.form); 
            obj.set_taborder("2"); 
            obj.set_autofittype("col"); 
            obj.set_nodatatext("조회된 결과가 없습니다."); 
            obj.set_selecttype("area"); 
            obj.set_binddataset("ds_list02"); 
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"60\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"200\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"입고 처리자 ID\"/><Cell col=\"1\" text=\"입고 처리자\"/><Cell col=\"2\" text=\"입고 수량\"/><Cell col=\"3\" text=\"주문 단위\"/><Cell col=\"4\" text=\"입고 확정일\"/><Cell col=\"5\" text=\"등록 일시\"/><Cell col=\"6\" text=\"입고 메모\"/></Band><Band id=\"body\"><Cell text=\"bind:GDPSN_ID\"/><Cell col=\"1\" text=\"bind:GDPSN_NM\"/><Cell col=\"2\" text=\"bind:GI_QTY\" displaytype=\"mask\" maskeditformat=\"###,###,###\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:UNIT_CD\"/><Cell col=\"4\" text=\"bind:GI_DCN_DT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" text=\"bind:GI_REG_DTM\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" maskeditmaskchar=\"#\" maskeditformat=\"####-##-## ##:##:##\" maskedittype=\"string\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" text=\"bind:GI_MEMO_CTS\"/></Band></Format></Formats>"); 
            this.Div00.form.Div01.addChild(obj.name, obj); 
 
            obj = new Div("Div02","0","310",null,"526","0",null,null,null,null,null,this.Div00.form); 
            obj.set_taborder("2"); 
            obj.set_text("Div00"); 
            obj.set_background("transparent"); 
            this.Div00.addChild(obj.name, obj); 
 
            obj = new Static("sta_stlInfo","0","0","200","20",null,null,null,null,null,null,this.Div00.form.Div02.form); 
            obj.set_taborder("0"); 
            obj.set_text("■ 고객 검수 현황"); 
            obj.set_cssclass("sta_WF_title01"); 
            this.Div00.form.Div02.addChild(obj.name, obj); 
 
            obj = new Static("Static02_00_01_00_00_01_00",null,"20","30","10","1296",null,null,null,null,null,this.Div00.form.Div02.form); 
            obj.set_taborder("1"); 
            obj.set_cssclass("div_WF_guide"); 
            obj.set_visible("false"); 
            obj.set_text("10"); 
            this.Div00.form.Div02.addChild(obj.name, obj); 
 
            obj = new Grid("grid_list02","0","30",null,null,"0","0",null,null,null,null,this.Div00.form.Div02.form); 
            obj.set_taborder("2"); 
            obj.set_autofittype("col"); 
            obj.set_nodatatext("조회된 결과가 없습니다."); 
            obj.set_selecttype("area"); 
            obj.set_binddataset("ds_list03"); 
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"순번\" autosizecol=\"limitmax\"/><Cell col=\"1\" text=\"검수 월\"/><Cell col=\"2\" text=\"검수 수량\"/><Cell col=\"3\" text=\"주문단위\"/><Cell col=\"4\" text=\"이월/전월 사유\"/><Cell col=\"5\" text=\"검수 처리자\"/><Cell col=\"6\" text=\"매출 정산 여부\"/></Band><Band id=\"body\"><Cell text=\"bind:ADJ_FW_ITM_SEQ\"/><Cell col=\"1\" text=\"bind:ADJ_YM\" displaytype=\"mask\" maskedittype=\"string\" maskeditmaskchar=\"#\" maskeditformat=\"####-##\"/><Cell col=\"2\" text=\"bind:VERF_QTY\" displaytype=\"mask\" maskeditformat=\"###,###,###\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:SELL_UNIT_CD\"/><Cell col=\"4\" text=\"bind:ADJ_MM_CHG_RSN_CD_NM\"/><Cell col=\"5\" text=\"bind:ADJ_DCN_DEALR_ID\"/><Cell col=\"6\" text=\"bind:SALE_ADJ_STATS_CD_NM\"/></Band></Format></Formats>"); 
            this.Div00.form.Div02.addChild(obj.name, obj); 
 
            obj = new Static("Static02_00_01_00_00_01_00",null,"280","30","30","1236",null,null,null,null,null,this); 
            obj.set_taborder("1"); 
            obj.set_cssclass("div_WF_guide"); 
            obj.set_visible("false"); 
            obj.set_text("30"); 
            this.addChild(obj.name, obj); 
            // Layout Functions 
            //-- Default Layout : this 
            obj = new Layout("default","",1336,846,this,function(p){}); 
            this.addLayout(obj.name, obj); 
             
            // BindItem Information 
            obj = new BindItem("item0","Div00.form.Div00.form.edt_dstrbPath","value","ds_list01","GI_STATS_CD_NM"); 
            this.addChild(obj.name, obj); 
            obj.bind(); 
 
            obj = new BindItem("item1","Div00.form.Div00.form.edt_adjDay","value","ds_list01","ADJ_DD"); 
            this.addChild(obj.name, obj); 
            obj.bind(); 
 
            obj = new BindItem("item2","Div00.form.Div00.form.edt_aprvMean","value","ds_list01","STL_MEAN_CD_NM"); 
            this.addChild(obj.name, obj); 
            obj.bind(); 
 
            obj = new BindItem("item3","Div00.form.Div00.form.edt_bilcltCond","value","ds_list01","BILCLT_COND_CD_NM"); 
            this.addChild(obj.name, obj); 
            obj.bind(); 
 
            obj = new BindItem("item4","Div00.form.Div00.form.edt_ircpsTgtYn","value","ds_list01","ELMN_QTY"); 
            this.addChild(obj.name, obj); 
            obj.bind(); 
 
            obj = new BindItem("item5","Div00.form.Div00.form.edt_elmnQty","value","ds_list01","ELMN_QTY"); 
            this.addChild(obj.name, obj); 
            obj.bind(); 
 
            obj = new BindItem("item6","Div00.form.Div00.form.edt_ircpsCmplYn","value","ds_list01","IRCPS_CMPL_YN_NM"); 
            this.addChild(obj.name, obj); 
            obj.bind(); 
 
            obj = new BindItem("item7","Div00.form.Div00.form.edt_verfStats","value","ds_list01","VERF_STATS_CD_NM"); 
            this.addChild(obj.name, obj); 
            obj.bind(); 
 
            obj = new BindItem("item8","Div00.form.Div00.form.edt_adjStats","value","ds_list01","ADJ_STATS_CD_NM"); 
            this.addChild(obj.name, obj); 
            obj.bind(); 
             
            // TriggerItem Information 
 
        }; 
         
        this.loadPreloadList = function() 
        { 
 
        }; 
         
        // User Script 
        this.addIncludeScript("SSP_BO_OA_22.xfdl","OD::odUtils.xjs"); 
        this.registerScript("SSP_BO_OA_22.xfdl", function() { 
        // 주문관리 상세 - 입고상태 
 
        /*********************************************************************************************** 
         * Form 변수 선언 영역 
        ************************************************************************************************/ 
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/; 
 
        this.fv_oApp = nexacro.getApplication();	//application object 
 
        this.odrNo = ""; 
        this.odrItmNo = ""; 
        this.bzplcId = ""; 
        this.odrpsnId = ""; 
 
        /*********************************************************************************************** 
        * FORM EVENT 영역 
        ************************************************************************************************/ 
        this.SSP_BO_OA_02_05_oninit = function(obj,e) 
        { 
        	var nIndex = this.addEventHandlerLookup( "onload", "fn_afterFormLoad", this.parent.parent.parent); 
        }; 
 
        this.SSP_BO_OA_02_05_onload = function(obj,e) 
        { 
        	//공통 함수 호출(필수) 
        	this.gfn_formOnLoad(this); 
        	this.resetScroll(); 
        	this.fn_odCommLoading(); 
 
        	this.copyPaste.addGrid(this.Div00.form.Div01.form.grid_list01); 
        	this.copyPaste.addGrid(this.Div00.form.Div02.form.grid_list02); 
        }; 
 
        /*********************************************************************************************** 
        * Transaction 서비스 호출 영역 
        ************************************************************************************************/ 
        this.fn_search = function() { 
        	var sSvcId = "selectAdjInfo"; 
        	var sUrl = "/od/oderlist/selectAdjInfo.do"; 
        	var inDs = "ds_search=ds_search"; 
        	var outDs = "ds_list01=ds_output1 ds_list02=ds_output2 ds_list03=ds_output3"; 
        	var arg = ""; 
 
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack"); 
        }; 
 
        /*********************************************************************************************** 
        * Callback 처리 영역 
        ************************************************************************************************/ 
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{ 
        	if (svcID == "selectAdjInfo") { 
        		trace("### selectAdjInfo - ds_list01.rowcount : " + this.ds_list01.rowcount); // + ", ds_list02.rowcount : " + this.ds_list02.rowcount); 
 
        	} 
        	else if (svcID == "selectCommonCodeList") { 
        		this.fn_setCommonCode(); 
        	} 
 
        }; 
 
        /*********************************************************************************************** 
        * 외부 호출 FUNCTION 영역 
        ************************************************************************************************/ 
 
 
        /*********************************************************************************************** 
        * 사용자 함수 영역 
        ************************************************************************************************/ 
        // 조회 함수(모든 탭 폼에 있어야되는 함수) 
        this.fn_searchOdrInfo = function(odrNo, odrItmNo, bzplcId, odrpsnId) { 
        	trace("### SSP_BO_OA_22 - fn_searchOdrInfo"); 
        	this.odrNo = odrNo; 
        	this.odrItmNo = odrItmNo; 
        	this.bzplcId = bzplcId; 
        	this.odrpsnId = odrpsnId; 
 
        	this.ds_search.setColumn(0, "ODR_NO", this.odrNo); 
        	this.ds_search.setColumn(0, "ODR_ITM_NO", this.odrItmNo); 
        	this.ds_search.setColumn(0, "BZPLC_ID", this.bzplcId); 
        	this.ds_search.setColumn(0, "CO_CD", this.fv_coCd); 
 
        	this.fn_search(); 
        }; 
        // 데이터 변경내역 유무 조회(모든 탭 폼에 있어야되는 함수) 
        this.fn_shouldSave = function() { 
        	var rowType = ""; 
        	var deletedCount = 0; 
        	// ds_list01 
        	for (var i = 0; i < this.ds_list01.rowcount; i++) { 
        		rowType = this.ds_list01.getRowType(i); 
        		deletedCount = this.ds_list01.getDeletedRowCount(); 
 
        		if (rowType == Dataset.ROWTYPE_UPDATE || 
        			rowType == Dataset.ROWTYPE_INSERT || 
        			deletedCount > 0) { 
        			return true; 
        		} 
        	} 
        	// ds_list02 
        	for (var i = 0; i < this.ds_list02.rowcount; i++) { 
        		rowType = this.ds_list02.getRowType(i); 
        		deletedCount = this.ds_list02.getDeletedRowCount(); 
 
        		if (rowType == Dataset.ROWTYPE_UPDATE || 
        			rowType == Dataset.ROWTYPE_INSERT || 
        			deletedCount > 0) { 
        			return true; 
        		} 
        	} 
        	// ds_list03 
        	for (var i = 0; i < this.ds_list03.rowcount; i++) { 
        		rowType = this.ds_list03.getRowType(i); 
        		deletedCount = this.ds_list03.getDeletedRowCount(); 
 
        		if (rowType == Dataset.ROWTYPE_UPDATE || 
        			rowType == Dataset.ROWTYPE_INSERT || 
        			deletedCount > 0) { 
        			return true; 
        		} 
        	} 
 
        	return false; 
        }; 
 
        /*********************************************************************************************** 
        * BUTTON EVENT 영역 
        ************************************************************************************************/ 
 
 
 
        }); 
         
        // Regist UI Components Event 
        this.on_initEvent = function() 
        { 
            this.addEventHandler("onload",this.SSP_BO_OA_02_05_onload,this); 
            this.addEventHandler("oninit",this.SSP_BO_OA_02_05_oninit,this); 
            this.Div00.form.Div00.form.sta_dlvForm.addEventHandler("onclick",this.Div00_Static06_onclick,this); 
            this.Div00.form.Div00.form.Static06_00.addEventHandler("onclick",this.Div00_Static06_onclick,this); 
            this.Div00.form.Div00.form.Static06_01.addEventHandler("onclick",this.Div00_Static06_onclick,this); 
        }; 
        this.loadIncludeScript("SSP_BO_OA_22.xfdl"); 
        this.loadPreloadList(); 
         
        // Remove Reference 
        obj = null; 
    }; 
} 
)(); 
