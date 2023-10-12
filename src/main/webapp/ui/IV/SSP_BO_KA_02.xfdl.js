(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_KA_01");
            this.set_titletext("S-MRP 마스터 상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,441);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_resDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"BSS_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"BZ_DOMN_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MRO_REPR_ATTR\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"32\"/><Column id=\"MRO_MNFR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"INVN_TP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"INVN_TP_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SAFT_INVN_QTY\" type=\"STRING\" size=\"32\"/><Column id=\"MAX_INVN_QTY\" type=\"STRING\" size=\"32\"/><Column id=\"GI_DUE_QTY\" type=\"STRING\" size=\"32\"/><Column id=\"APRV_PRGS_QTY\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_INVN_QTY\" type=\"STRING\" size=\"32\"/><Column id=\"TRNS_INVN_QTY\" type=\"STRING\" size=\"32\"/><Column id=\"SO_PRGS_QTY\" type=\"STRING\" size=\"32\"/><Column id=\"SSP_ODR_QTY\" type=\"STRING\" size=\"32\"/><Column id=\"SSP_AVAIL_INVN_QTY\" type=\"STRING\" size=\"32\"/><Column id=\"INVN_STATS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"INVN_STATS_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_TEAM_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_TEAM_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_CHRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_CHRPSN_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","-10","78","1336","157",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색 영역");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","50","0",null,"32","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static31","50","31",null,"32","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static31_00","50","62",null,"32","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_productId","30","0","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("상품 ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_standard","30","31","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("규격");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_manufacturerId","30","62","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("제조원 ID");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_stockType","892","62","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("재고 유형");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","461","165","66","23",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_productName","470","0","132","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("상품명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_manufacturerName","470","62","132","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("제조원명");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static31_01","50","93",null,"32","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static31_00_00","50","124",null,"32","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_ba","30","93","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("B/A");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_partnersId","30","124","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("협력사 ID");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_companyCd","470","93","132","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("회사코드");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_partnersName","470","124","132","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("협력사명");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_orderUnit","892","0","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("주문단위");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_mallSales01","892","31","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("몰 판매 여부");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_purchaseTeam","892","93","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("구매팀");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_purchasingManager","892","124","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_text("구매 담당자");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_prdId","159","0","313","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_cm_box02L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_prdNm","599","0","294","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_cm_box02L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_sellUnitCd","1021","0","305","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_cm_box02L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_mroReprAttr","159","31","734","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_invnStatsCdNm","1021","31","305","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_mnfrNo","159","62","313","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_mroMnfrNm","600","62","293","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_invnTpCdNm","1021","62","305","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_purgTeamNm","1021","93","305","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_purgChrpsnNm","1021","124","305","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_bzDomnCd","159","93","313","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_cprtcpId","159","124","313","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_coCd","600","93","293","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_cprtcpKorNm","600","124","293","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_title1","20","20","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("S-MRP 마스터 조회");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title1_1","20","51","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("■  상품 정보");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title1_2","21","261","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("■  재고관리 정보");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00","40","287",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","20","318",null,"32","19",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_safetyStock","20","287","145","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("안전 재고");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_maxStock","164","287","145","32",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("최대 재고");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_expStock","308","287","145","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("입고 예정 수량");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_reqPayment","452","287","145","32",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("결재 중 요청");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_productStock","596","287","145","32",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("상품 재고");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_tranStock","740","287","145","32",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("운송 중 재고");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_openSo","884","287","145","32",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Open S/O");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sspPrgOrder","1028","287","145","32",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("SSP 진행 중 주문");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sspAvaStock","1172","287","145","32",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("SSP 가용 재고");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_SaftInvnQty","20","318","145","32",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("sta_maxInvnQty","164","318","145","32",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("sta_giDueQty","308","318","145","32",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("sta_aprvPrgsQty","452","318","145","32",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("sta_prdInvnQty","596","318","145","32",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("sta_trnsInvnQty","740","318","145","32",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("sta_soPrgsQty","884","318","145","32",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sspOdrQty","1028","318","145","32",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sspAvailInvnQty","1172","318","145","32",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Button("btn_list","613","370",null,"40","613",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("목록");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00","195","420","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_00_00",null,"411","30","30","651",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_00",null,"350","30","20","646",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("20");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00",null,"277","30","10","1276",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,441,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_KA_02.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_KA_02.xfdl", function() {
        /*******************************************************
          PROJECT NAME : 재고 관리 - S-MRP 마스터 조회 상세
          CREATION DATES :
        *******************************************************/



        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        this.fv_oApp = nexacro.getApplication();	//application object

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//검색 영역 최소size 적용
        	this.Div00.set_height(this.Div00.uMinSize);
        	this.resetScroll();

        	this.fn_search();
        	this.fn_regShortCutMethod();
        };

        this.SSP_BO_KA_01_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_search = function()	{
        	//this.alert(this.parent.prdId + " 넘어 옴");
        	this.ds_search.setColumn(0,"PRD_ID", this.parent.prdId);
        	this.ds_search.setColumn(0,"BSS_DT", this.parent.bssDt);
        	this.ds_search.setColumn(0,"CO_CD", this.parent.coCd);
        	this.ds_search.setColumn(0,"LANG_CD", "KO");

        	var sSvcId = "selectInventoryDetail";
        	var sUrl = "/iv/inv/select-inventory-detail.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_resDetail=inventoryDetail";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack"); // 콜백 비움
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if (svcID == "selectInventoryDetail") {
        		this.Div00.form.sta_prdId.set_text(this.ds_resDetail.getColumn(0, "PRD_ID"));
        		this.Div00.form.sta_prdNm.set_text(this.ds_resDetail.getColumn(0, "PRD_NM"));
        		this.Div00.form.sta_sellUnitCd.set_text(this.ds_resDetail.getColumn(0, "SELL_UNIT_CD"));
        		this.Div00.form.sta_mroReprAttr.set_text(this.ds_resDetail.getColumn(0, "MRO_REPR_ATTR"));
        		this.Div00.form.sta_invnStatsCdNm.set_text(this.ds_resDetail.getColumn(0, "INVN_TP_CD_NM"));
        		this.Div00.form.sta_mnfrNo.set_text(this.ds_resDetail.getColumn(0, "MNFR_NO"));
        		this.Div00.form.sta_mroMnfrNm.set_text(this.ds_resDetail.getColumn(0, "MRO_MNFR_NM"));
        		this.Div00.form.sta_invnTpCdNm.set_text(this.ds_resDetail.getColumn(0, "INVN_TP_CD_NM"));
        		this.Div00.form.sta_bzDomnCd.set_text(this.ds_resDetail.getColumn(0, "BZ_DOMN_CD"));
        		this.Div00.form.sta_coCd.set_text(this.ds_resDetail.getColumn(0, "CO_CD"));
        		this.Div00.form.sta_purgTeamNm.set_text(this.ds_resDetail.getColumn(0, "PURG_TEAM_NM"));
        		this.Div00.form.sta_cprtcpId.set_text(this.ds_resDetail.getColumn(0, "CPRTCP_ID"));
        		this.Div00.form.sta_cprtcpKorNm.set_text(this.ds_resDetail.getColumn(0, "CPRTCP_KOR_NM"));
        		this.Div00.form.sta_purgChrpsnNm.set_text(this.ds_resDetail.getColumn(0, "PURG_CHRPSN_NM"));

        		this.sta_SaftInvnQty.set_text(this.gfn_appendComma(this.ds_resDetail.getColumn(0, "SAFT_INVN_QTY"), 0));
        		this.sta_maxInvnQty.set_text(this.gfn_appendComma(this.ds_resDetail.getColumn(0, "MAX_INVN_QTY"), 0));
        		this.sta_giDueQty.set_text(this.gfn_appendComma(this.ds_resDetail.getColumn(0, "GI_DUE_QTY"), 0));
        		this.sta_aprvPrgsQty.set_text(this.gfn_appendComma(this.ds_resDetail.getColumn(0, "APRV_PRGS_QTY"), 0));
        		this.sta_prdInvnQty.set_text(this.gfn_appendComma(this.ds_resDetail.getColumn(0, "PRD_INVN_QTY"), 0));
        		this.sta_trnsInvnQty.set_text(this.gfn_appendComma(this.ds_resDetail.getColumn(0, "TRNS_INVN_QTY"), 0));
        		this.sta_soPrgsQty.set_text(this.gfn_appendComma(this.ds_resDetail.getColumn(0, "SO_PRGS_QTY"), 0));
        		this.sta_sspOdrQty.set_text(this.gfn_appendComma(this.ds_resDetail.getColumn(0, "SSP_ODR_QTY"), 0));
        		this.sta_sspAvailInvnQty.set_text(this.gfn_appendComma(this.ds_resDetail.getColumn(0, "SSP_AVAIL_INVN_QTY"), 0));
        	}
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function() {
        	//search div 초기 설정
        	this.Div00.uMinSize = 94;
        	this.Div00.uMaxSize = 157;
        };

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodENTER("fn_search");
        	this.fn_regMethodESC("btn_list_onclick");
        };

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        this.btn_list_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.SSP_BO_KA_01_onkeyup,this);
            this.Div00.form.Static05.addEventHandler("onclick",this.Div00_Static05_onclick,this);
            this.Div00.form.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Div00.form.sta_productName.addEventHandler("onclick",this.Div00_sta_productId_onclick,this);
            this.sta_title1.addEventHandler("onclick",this.Static00_onclick,this);
            this.sta_title1_1.addEventHandler("onclick",this.Static00_onclick,this);
            this.sta_title1_2.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static05_00.addEventHandler("onclick",this.Div00_Static05_onclick,this);
            this.btn_list.addEventHandler("onclick",this.btn_list_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_KA_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
