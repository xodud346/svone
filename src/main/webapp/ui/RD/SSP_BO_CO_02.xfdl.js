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
            this.set_titletext("개발시공용사용(팝업및공통코드)");
            this.set_enable("true");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cond", this);
            obj._setContents("<ColumnInfo><Column id=\"TEST_CD1\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_CD2\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_CD3\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_CD4\" type=\"STRING\" size=\"256\"/><Column id=\"SYST_SDT\" type=\"STRING\" size=\"256\"/><Column id=\"SYST_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_TX1\" type=\"STRING\" size=\"256\"/><Column id=\"LARGE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MID_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SMALL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DETA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LMSD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"KWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REL_CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SAUP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_BIG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SP_GROUP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SP_GROUP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_STOP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"STORE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"STORE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_STORE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FC_STORE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HANG_CD3\" type=\"STRING\" size=\"256\"/><Column id=\"HANG_NM3\" type=\"STRING\" size=\"256\"/><Column id=\"HANG_CD2\" type=\"STRING\" size=\"256\"/><Column id=\"HANG_CD1\" type=\"STRING\" size=\"256\"/><Column id=\"HANG_NM1\" type=\"STRING\" size=\"256\"/><Column id=\"HANG_NM2\" type=\"STRING\" size=\"256\"/><Column id=\"STORE_DISTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"STORE_DISTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DUTY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_AUTH_CHK_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TEST_CD1\"/><Col id=\"TEST_CD2\"/><Col id=\"TEST_CD3\"/><Col id=\"TEST_CD4\"/><Col id=\"SYST_SDT\"/><Col id=\"SYST_EDT\"/><Col id=\"TEST_TX1\"/><Col id=\"LARGE_CD\"/><Col id=\"MID_CD\"/><Col id=\"SMALL_CD\"/><Col id=\"SEARCH_GROUP\">NM</Col><Col id=\"DATA_AUTH_CHK_YN\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDummy", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BIZNO\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"lvl\" type=\"bigdecimal\" size=\"16\"/><Column id=\"menuId\" type=\"string\" size=\"32\"/><Column id=\"parentMenuId\" type=\"string\" size=\"32\"/><Column id=\"menuNm\" type=\"string\" size=\"32\"/><Column id=\"menuTnm\" type=\"string\" size=\"32\"/><Column id=\"menuEng\" type=\"string\" size=\"32\"/><Column id=\"menuCh\" type=\"string\" size=\"32\"/><Column id=\"menuJp\" type=\"string\" size=\"32\"/><Column id=\"menuEtc\" type=\"string\" size=\"32\"/><Column id=\"menuDc\" type=\"string\" size=\"32\"/><Column id=\"progId\" type=\"string\" size=\"32\"/><Column id=\"formPath\" type=\"string\" size=\"32\"/><Column id=\"formId\" type=\"string\" size=\"32\"/><Column id=\"formNm\" type=\"string\" size=\"32\"/><Column id=\"menuPath\" type=\"string\" size=\"32\"/><Column id=\"menuUrl\" type=\"string\" size=\"32\"/><Column id=\"menuLvl\" type=\"bigdecimal\" size=\"16\"/><Column id=\"menuDiv\" type=\"string\" size=\"32\"/><Column id=\"linkYn\" type=\"string\" size=\"32\"/><Column id=\"menuSort\" type=\"string\" size=\"32\"/><Column id=\"menuCd1\" type=\"string\" size=\"32\"/><Column id=\"menuCd2\" type=\"string\" size=\"32\"/><Column id=\"menuCd3\" type=\"string\" size=\"32\"/><Column id=\"menuCd4\" type=\"string\" size=\"32\"/><Column id=\"regId\" type=\"string\" size=\"32\"/><Column id=\"regDt\" type=\"string\" size=\"32\"/><Column id=\"updId\" type=\"string\" size=\"32\"/><Column id=\"updDt\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PROG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"FORM_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_YN\" type=\"STRING\" size=\"256\"/><Column id=\"STOR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"STOR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PROG_ID\"/><Col id=\"FORM_PATH\"/><Col id=\"FORM_ID\"/><Col id=\"FORM_NM\"/><Col id=\"USER_YN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsStoreMaster", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"CMP_CD\" type=\"STRING\" size=\"4\"/><Column id=\"SALES_ORG_CD\" type=\"STRING\" size=\"4\"/><Column id=\"STOR_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BIZ_NO\" type=\"STRING\" size=\"10\"/><Column id=\"DRT_FRCS_TYPE\" type=\"STRING\" size=\"1\"/><Column id=\"STOR_NM\" type=\"STRING\" size=\"60\"/><Column id=\"OPER_24_YN\" type=\"STRING\" size=\"1\"/><Column id=\"OPER_TYPE\" type=\"STRING\" size=\"2\"/><Column id=\"STATUS_DIV\" type=\"STRING\" size=\"1\"/><Column id=\"HQ_STOR_YN\" type=\"STRING\" size=\"1\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"14\"/><Column id=\"REG_USER_ID\" type=\"STRING\" size=\"50\"/><Column id=\"UPD_DATE\" type=\"STRING\" size=\"14\"/><Column id=\"UPD_USER_ID\" type=\"STRING\" size=\"50\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"STOR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"STOR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GROUP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GROUP_KOREAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GRADE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GRADE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PURCHASE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PURCHASE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COLOR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COLOR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SIZE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SIZE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SHOP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SHOP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COUPON_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COUPON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BRAND_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BRAND_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCE_NN\" type=\"STRING\" size=\"256\"/><Column id=\"BOGJONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BOGJONG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRODYEAR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRODYEAR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"STOR_CD\"/><Col id=\"STOR_NM\"/><Col id=\"CD_GROUP_CD\"/><Col id=\"CD_GROUP_KOREAN_NM\"/><Col id=\"SALE_CD\"/><Col id=\"SALE_NM\"/><Col id=\"CUST_CD\"/><Col id=\"CUST_NM\"/><Col id=\"CUST_GRADE_NM\"/><Col id=\"CUST_GRADE_CD\"/><Col id=\"PURCHASE_CD\"/><Col id=\"PURCHASE_NM\"/><Col id=\"COLOR_CD\"/><Col id=\"COLOR_NM\"/><Col id=\"ACCOUNT_CD\"/><Col id=\"ACCOUNT_NM\"/><Col id=\"ITEM_CD\"/><Col id=\"ITEM_NM\"/><Col id=\"SIZE_CD\"/><Col id=\"SIZE_NM\"/><Col id=\"SHOP_CD\"/><Col id=\"SHOP_NM\"/><Col id=\"COUPON_CD\"/><Col id=\"COUPON_NM\"/><Col id=\"BRAND_CD\"/><Col id=\"BRAND_NM\"/><Col id=\"PRODUCE_CD\"/><Col id=\"PRODUCE_NN\"/><Col id=\"BOGJONG_CD\"/><Col id=\"BOGJONG_NM\"/><Col id=\"PRODYEAR_CD\"/><Col id=\"PRODYEAR_NM\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","503","745","998","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("grdObj.getBindCellIndex(\"body\", \"classId\")                          /***** 바운드 한 셀의 인덱스값을 가짐 ****/\r\r\r\r\nthis.tbMain.tabpages[this.tbMain.tabindex].name;                  /***** 텝인덱스의 명을 가지고올수 있음 ****/");
            obj.set_color("red");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_cond12","2","640","520","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_inquiryTable");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","2","41","490","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_SearchArea");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","2","490","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01","0","2","146","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("팝업샘풀1(조건있음)");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edtCodeId","156","6","101","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btnPopClick","458","6","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_search02");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edtCodeNm","262","6","191","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_search01","2","108","490","36",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_SearchArea");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","2","490","32",null,null,null,null,null,null,this.div_search01.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_search01.addChild(obj.name, obj);

            obj = new Static("Static01","0","2","146","32",null,null,null,null,null,null,this.div_search01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("매장코드");
            this.div_search01.addChild(obj.name, obj);

            obj = new Edit("edtStoreCd","156","6","101","24",null,null,null,null,null,null,this.div_search01.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            obj.set_enable("false");
            this.div_search01.addChild(obj.name, obj);

            obj = new Button("btnStorePopup","458","6","24","24",null,null,null,null,null,null,this.div_search01.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_search02");
            this.div_search01.addChild(obj.name, obj);

            obj = new Edit("edtStoreNm","262","6","191","24",null,null,null,null,null,null,this.div_search01.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.div_search01.addChild(obj.name, obj);

            obj = new Static("stc_11","0","0","497","33",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("기본 샘플 팝업");
            obj.set_cssclass("sta_WF_title02");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_11_00","6","137","497","33",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("앱관리 기본 공통 팝업");
            obj.set_cssclass("sta_WF_title02");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("div_search0","2","76","490","36",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WF_SearchArea");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","2","490","32",null,null,null,null,null,null,this.div_search0.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_search0.addChild(obj.name, obj);

            obj = new Static("Static01","0","2","146","32",null,null,null,null,null,null,this.div_search0.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("팝업샘풀2(조건없음)");
            this.div_search0.addChild(obj.name, obj);

            obj = new Edit("edtCodeId","156","6","101","24",null,null,null,null,null,null,this.div_search0.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.div_search0.addChild(obj.name, obj);

            obj = new Button("btnPopClick","458","6","24","24",null,null,null,null,null,null,this.div_search0.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_search02");
            this.div_search0.addChild(obj.name, obj);

            obj = new Edit("edtCodeNm","262","6","191","24",null,null,null,null,null,null,this.div_search0.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.div_search0.addChild(obj.name, obj);

            obj = new Grid("Grid00","507","43","413","181",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsDummy");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CHK\"/><Cell col=\"1\" text=\"BZPLC_ID\"/><Cell col=\"2\" text=\"BZPLC_NM\"/><Cell col=\"3\" text=\"BIZNO\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:BZPLC_ID\"/><Cell col=\"2\" text=\"bind:BZPLC_NM\"/><Cell col=\"3\" text=\"bind:BIZNO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","1047","187","147","44",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("파업테스트");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_formId","1047","65","147","37",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_value("SSP_BO_RD_23");
            obj.set_text("SSP_BO_RD_23");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_valu1","1047","105","147","37",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_value("젓번째");
            obj.set_text("젓번째");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_valu2","1047","145","147","37",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_value("두번째");
            obj.set_text("두번째");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","935","71","109","33",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("팝업아이디");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","935","110","109","33",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("메이넘기는1번째값");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","935","151","109","33",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("메이넘기는2번째값");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","931","31","109","33",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text(" 프리픽스(ID)");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prix","1047","25","147","37",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_value("RD");
            obj.set_text("RD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_rjct","417","284","67","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("반려");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_reMack","6","284","408","136",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","div_search.form.edtCodeId","value","ds_input","PROG_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.edtCodeNm","value","ds_input","FORM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_search01.form.edtStoreCd","value","ds_input","STOR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_search01.form.edtStoreNm","value","ds_input","STOR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search0.form.edtCodeId","value","ds_input","PROG_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search0.form.edtCodeNm","value","ds_input","FORM_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsDummy");
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsStoreMaster");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CO_02.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_CO_02.xfdl", function() {
        /**
        *  메시지 관리
        *  @MenuPath
        *  @FileName 		MSCO000102.xfdl
        *  @Creator 	    lyc
        *  @CreateDate 		2018.01.30
        *  @LastModifier
        *  @LastModifyDate
        *  @Version 		1.0
        *  @Outline
        *  @Description
        ************** 소스 수정 이력 *************************************************
        *    date          		Modifier            Description
        *******************************************************************************
        *  2018.01.30    	    lyc                 최초 생성
        *******************************************************************************
        */
        this.executeIncludeScript("RD::rdMain.xjs"); /*include "RD::rdMain.xjs"*/;

        /* 아래 소스 해당 화면에 복사후 팝업에 알맞은걸로 변경 하시오.
        this.fn_dsChildCopydsDummy = function(ds)
        {
        	this.dsDummy.clearData();
        	this.dsDummy.copyData(ds);
        };

        //Popup callback영역
        this.fn_popupCallback = function(strId, strVal)
        {
        	switch(strId)
        	{
        			case "SSP_BO_CO_03" :

        			//중분류팝업조회
        			if(!this.gfn_isNull(strVal))
        			{
        				//일반
        				var sRtn = strVal.split(",");

        				if(sRtn[0] == "CLOSE")
        				{
        					//trace(sRtn[0]);

        				}else
        				{
        					this.div_search.form.edtCodeId.set_value(this.dsDummy.getColumn(0,"PROG_ID"));
        					this.div_search.form.edtCodeNm.set_value(this.dsDummy.getColumn(0,"PROG_NM"));

        					trace("sRtn[1] ======> " + sRtn[1]);
        					trace("sRtn[2] ======> " + sRtn[2]);

        					//Dataset
        					//this.dsDummy.loadXML(sRtn[3]);
        					trace(this.dsDummy.saveXML());
        				}
        			}
        			break;
        		default	:
        			break;
        	}
         };
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/


        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	//폼에 공통으로 로드시 사용하는 함수.
        	this.gfn_formOnLoad(this);
        	this.fn_setLocalUserCreate(true);

        };

        this.fn_popupCallback1 = function(strId, strVal)
        {
        	switch(strId)
        	{
        			case this.edt_formId.value :
        				//중분류팝업조회
        				if(!this.gfn_isNull(strVal))
        				{
        					//일반
        					var sRtn = strVal.split(",");

        					if(sRtn[0] == "CLOSE")
        					{
        						//trace(sRtn[0]);

        					}else
        					{
        						//this.div_search.form.edtCodeId.set_value(this.dsDummy.getColumn(0,"PROG_ID"));
        						//this.div_search.form.edtCodeNm.set_value(this.dsDummy.getColumn(0,"PROG_NM"));

        						trace("sRtn[1] ======> " + sRtn[1]);
        						trace("sRtn[2] ======> " + sRtn[2]);

        						//Dataset
        						//this.dsDummy.loadXML(sRtn[3]);
        						trace(this.dsDummy.saveXML());
        					}
        				}
        			break;
        		default	:
        			break;
        	}
         };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/
        this.fn_dsChildCopydsDummy = function(ds)
        {
        	this.dsDummy.clearData();
        	this.dsDummy.copyData(ds);
        };


        //Popup callback영역
        this.fn_popupCallback = function(strId, strVal)
        {
        	switch(strId)
        	{
        		case "SSP_BO_CO_03" :

        			//중분류팝업조회
        			if(!this.gfn_isNull(strVal))
        			{
        				//일반
        				var sRtn = strVal.split(",");

        				if(sRtn[0] == "CLOSE")
        				{
        					//trace(sRtn[0]);

        				}else
        				{
        					this.div_search.form.edtCodeId.set_value(this.dsDummy.getColumn(0,"PROG_ID"));
        					this.div_search.form.edtCodeNm.set_value(this.dsDummy.getColumn(0,"FORM_NM"));
        					/*
        					trace("sRtn[1] ======> " + sRtn[1]);
        					trace("sRtn[2] ======> " + sRtn[2]);
        					*/
        					//Dataset
        					//this.dsDummy.loadXML(sRtn[3]);
        					//trace(this.dsDummy.saveXML());
        				}
        			}
        			break;
        		case "SSP_BO_CO_08" :

        			//중분류팝업조회
        			if(!this.gfn_isNull(strVal))
        			{
        				//일반
        				var sRtn = strVal.split(",");

        				if(sRtn[0] == "CLOSE")
        				{
        					//trace(sRtn[0]);

        				}else
        				{
        					this.div_search0.form.edtCodeId.set_value(this.dsDummy.getColumn(0,"PROG_ID"));
        					this.div_search0.form.edtCodeNm.set_value(this.dsDummy.getColumn(0,"FORM_NM"));
        					/*
        					trace("sRtn[1] ======> " + sRtn[1]);
        					trace("sRtn[2] ======> " + sRtn[2]);
        					*/
        					//Dataset
        					//this.dsDummy.loadXML(sRtn[3]);
        					//trace(this.dsDummy.saveXML());
        				}
        			}
        			break;
        		case "SSP_BO_CO_04" :

        			if(!this.gfn_isNull(strVal))
        			{
        				//일반
        				var sRtn = strVal.split(",");
        		        if(sRtn[0] == "CLOSE")
        				{

        				} else if(sRtn[0] == "EXIT")
        				{

        				}else
        				{
        					this.fn_setPopup(this.dsDummy,this.ds_input,"BZPLC_ID","STOR_CD");
        					this.fn_setPopup(this.dsDummy,this.ds_input,"BZPLC_NM","STOR_NM");
        				}
        			}
        			break;
        		case "SSP_BO_RP_01" :
        			if(!this.gfn_isNull(strVal))
        			{
        				//일반
        				var sRtn = strVal.split(",");
        		        if(sRtn[0] == "CLOSE")
        				{

        				} else if(sRtn[0] == "EXIT")
        				{

        				}else
        				{
        					this.txt_reMack.set_value(this.dsDummy.getColumn(0,"REASON"));
        				}
        			}
        			break;
        		default	:
        			break;
        	}
         };


        /***********************************************************************************************
        * 샘풀팝업시작(SSP_BO_CO_03)
        /***********************************************************************************************/
        /**
         * 돋보기버튼을 클릭(일반버튼)
         */
        this.div_search_btnPopClick_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edtCodeId.value);
        	/*
        	// dataset으로 인자값을 받음
        	var sCodeId = this.gfn_trim(this.ds_input.getColumn(this.ds_input.rowposition,"progId"));
        	*/
        	this.fn_setCallPopup01(sCodeId);
        };
        /**
         * 입력에디터에 코드/명을 입력시 처리
         * 한행 바로셋팅/여러행일시 팝업을 띄운다.(단 입력창에 한글자 이상일때만 처리가능)
         */
        this.div_search_edtCodeId_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search.form.edtCodeId.value);
        	/*
        	// dataset으로 인자값을 받음
        	var sCodeId = this.gfn_trim(this.ds_input.getColumn(this.ds_input.rowposition,"progId"));
        	*/
        	//13(Enter) 누르면 조회
        	if(e.keycode == 13)
        	{
        		this.fn_setCallPopup01(sCodeId);
        	}
        };
        /**
         * 입력창을 지우면 자동을 이름도 초기화처리
         */
        this.div_search_edtCodeId_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.div_search.form.edtCodeNm.set_value("");
        	}
        };
        /**
         * 실제로 처리하는 팝업함수
         */
        this.fn_setCallPopup01 = function(sCodeId)
        {

        	this.dsMaster.clearData();

        	if(!this.gfn_isNull(sCodeId))
        	{
        		var strSvc 		= "Search";
        		var strUrl 		= "/prj/pop/RetrievePopUpSizeW480xH480SampleList.do";
        		var strInDs  	= "ds_input=ds_input";
        		var strOutDs 	= "ds_list=ds_list";
        		var strArg 		= "";
        		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        		var strASync    = false;			//샏략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_transaction( strSvc
        							, strUrl
        							, strInDs
        							, strOutDs
        							, strArg
        							, strCallBack
        							, strASync);

        	}

        	if(this.dsMaster.rowcount == 1 )
        	{
        		this.div_search.form.edtCodeId.set_value(this.dsMaster.getColumn(0,"PROG_ID"));
        		this.div_search.form.edtCodeNm.set_value(this.dsMaster.getColumn(0,"FORM_NM"));

        	} else
        	{
        		var lv_sFlag01 			= "Y";						// (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        		var lv_sFlag02			= "N";						// (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        		var lv_sValue01 		= "";						// 부모에서 넘어가는 파라미터(프로그래ID)
        		var lv_sValue02 		= "";						// 부모에서 넘어가는 파라미터(폼ID)
        		var lv_sValue03 		= "";						// 부모에서 넘어가는 파라미터(폼이름)
        		var lv_sValue04 		= "";						// 부모에서 넘어가는 파라미터(폼경로)

        		var sPopId 			= "SSP_BO_CO_03";
        		var sUrl 			= "RD::SSP_BO_CO_03.xfdl";
        		var oArg 			= { pv_sOp01:lv_sFlag01      	// 조회조건 : 조회조건셋팅/조회조건에 미셋팅 Y:조회조건셋팅/조회조건자동셋팅않함.
        							  , pv_sOp02:lv_sFlag02       	// 자동조회 : 바로조회/미조회   Y:자동조회/N:자동조회않임
        							  , pv_sVal01:lv_sValue01      	// 파라미터1
        							  , pv_sVal02:lv_sValue02       // 파라미터2
        							  , pv_sVal03:lv_sValue03       // 파라미터3
        							  , pv_sVal04:lv_sValue04};     // 파라미터4
        		var sPopupCallBack 	= "fn_popupCallback";
        		var oOption 		= {titlebar:"false"};

        		this.gfn_openPopup( sPopId
        						  , sUrl
        						  , oArg
        						  , sPopupCallBack
        						  , oOption);
        	}
        };

        /***********************************************************************************************
        * 샘풀팝업1종료
        /***********************************************************************************************/
        /***********************************************************************************************
        * 샘풀팝업시작(SSP_BO_CO_07)
        /***********************************************************************************************/
        /**
         * 돋보기버튼을 클릭(일반버튼)
         */
        this.div_search0_btnPopClick_onclick = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search0.form.edtCodeId.value);
        	/*
        	// dataset으로 인자값을 받음
        	var sCodeId = this.gfn_trim(this.ds_input.getColumn(this.ds_input.rowposition,"progId"));
        	*/
        	this.fn_setCallPopup02(sCodeId);
        };
        /**
         * 입력에디터에 코드/명을 입력시 처리
         * 한행 바로셋팅/여러행일시 팝업을 띄운다.(단 입력창에 한글자 이상일때만 처리가능)
         */
        this.div_search0_edtCodeId_onkeyup = function(obj,e)
        {
        	var sCodeId = this.gfn_trim(this.div_search0.form.edtCodeId.value);
        	/*
        	// dataset으로 인자값을 받음
        	var sCodeId = this.gfn_trim(this.ds_input.getColumn(this.ds_input.rowposition,"progId"));
        	*/
        	//13(Enter) 누르면 조회
        	if(e.keycode == 13)
        	{
        		this.fn_setCallPopup02(sCodeId);
        	}
        };
        /**
         * 입력창을 지우면 자동을 이름도 초기화처리
         */
        this.div_search0_edtCodeId_oninput = function(obj,e)
        {
        	if(obj.getLength() == 0)
        	{
        		this.div_search0.form.edtCodeNm.set_value("");
        	}
        };
        /**
         * 실제로 처리하는 팝업함수
         */
        this.fn_setCallPopup02 = function(sCodeId)
        {

        	this.dsMaster.clearData();

        	if(!this.gfn_isNull(sCodeId))
        	{
        		var strSvc 		= "Search";
        		var strUrl 		= "/prj/pop/RetrievePopUpSizeW480xH480SampleList.do";
        		var strInDs  	= "ds_input=ds_input";
        		var strOutDs 	= "ds_list=ds_list";
        		var strArg 		= "";
        		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        		var strASync    = false;			//샏략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_transaction( strSvc
        							, strUrl
        							, strInDs
        							, strOutDs
        							, strArg
        							, strCallBack
        							, strASync);

        	}

        	if(this.dsMaster.rowcount == 1 )
        	{
        		this.div_search0.form.edtCodeId.set_value(this.ds_list.getColumn(0,"PROG_ID"));
        		this.div_search0.form.edtCodeNm.set_value(this.ds_list.getColumn(0,"FORM_NM"));

        	} else
        	{
        		var lv_sFlag01 			= "Y";						// (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        		var lv_sFlag02			= "N";						// (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        		var lv_sValue01 		= "";						// 부모에서 넘어가는 파라미터(프로그래ID)
        		var lv_sValue02 		= "";						// 부모에서 넘어가는 파라미터(폼ID)
        		var lv_sValue03 		= "";						// 부모에서 넘어가는 파라미터(폼이름)
        		var lv_sValue04 		= "";						// 부모에서 넘어가는 파라미터(폼경로)

        		var sPopId 			= "SSP_BO_CO_08";
        		var sUrl 			= "RD::SSP_BO_CO_08.xfdl";
        		var oArg 			= { pv_sOp01:lv_sFlag01      	// 조회조건 : 조회조건셋팅/조회조건에 미셋팅 Y:조회조건셋팅/조회조건자동셋팅않함.
        							  , pv_sOp02:lv_sFlag02       	// 자동조회 : 바로조회/미조회   Y:자동조회/N:자동조회않임
        							  , pv_sVal01:lv_sValue01      	// 파라미터1
        							  , pv_sVal02:lv_sValue02       // 파라미터2
        							  , pv_sVal03:lv_sValue03       // 파라미터3
        							  , pv_sVal04:lv_sValue04};     // 파라미터4
        		var sPopupCallBack 	= "fn_popupCallback";
        		var oOption 		= {titlebar:"false"};

        		this.gfn_openPopup( sPopId
        						  , sUrl
        						  , oArg
        						  , sPopupCallBack
        						  , oOption);
        	}
        };

        /***********************************************************************************************
        * 샘풀팝업2종료
        /***********************************************************************************************/
        /***********************************************************************************************
        * 매장팝업(매장팝업)
        /***********************************************************************************************/
        /**
         * 돋보기버튼을 클릭(일반버튼)
         */
        this.div_search01_btnStorePopup_onclick = function(obj,e)
        {
        	this.fn_storPopup();
        };


        /**
         * 실제로 처리하는 팝업함수
         */
        this.fn_storPopup = function()
        {

        		var lv_sFlag01 			= "N";						                // (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        		var lv_sFlag02			= "N";						                // (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        		var lv_sValue01 		= "";	                                    // 부모에서 넘어가는 파라미터(프로그래ID)
        		var lv_sValue02 		= this.ds_input.getColumn(0,"STOR_CD");		// 부모에서 넘어가는 파라미터(폼ID)
        		var lv_sValue03 		= this.ds_input.getColumn(0,"STOR_NM");  	// 부모에서 넘어가는 파라미터(폼이름)

        		var sPopId 			= "SSP_BO_CO_04";
        		var sUrl 			= "RD::SSP_BO_CO_04.xfdl";
        		var oArg 			= { pv_sOp01:lv_sFlag01      	// 조회조건 : 조회조건셋팅/조회조건에 미셋팅 Y:조회조건셋팅/조회조건자동셋팅않함.
        							  , pv_sOp02:lv_sFlag02       	// 자동조회 : 바로조회/미조회   Y:자동조회/N:자동조회않임
        							  , pv_sVal01:lv_sValue01      	// 파라미터1
        							  , pv_sVal02:lv_sValue02       // 파라미터2
        							  , pv_sVal03:lv_sValue03};     // 파라미터3
        		var sPopupCallBack 	= "fn_popupCallback";
        		var oOption 		= {titlebar:"false"};
        		this.gfn_openPopup( sPopId
        						  , sUrl
        						  , oArg
        						  , sPopupCallBack
        						  , oOption);

        };

        /***********************************************************************************************
        * 매장팝업 종료
        /***********************************************************************************************/

        this.Button00_onclick = function(obj,e)
        {
        	var lv_sFlag01 			= "N";						                // (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        	var lv_sFlag02			= "N";						                // (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        	var lv_sValue01 		= this.edt_valu1;	                                    // 부모에서 넘어가는 파라미터(프로그래ID)
        	var lv_sValue02 		= this.edt_valu1;	                        // 부모에서 넘어가는 파라미터(폼ID)
        	var lv_sValue03 		= this.edt_valu2;  	                        // 부모에서 넘어가는 파라미터(폼이름)

        	var sPopId 			= this.edt_formId.value;
        	var sUrl 			= this.edt_prix.value + "::" + this.edt_formId.value + ".xfdl";
        	var oArg 			= { pv_sOp01:lv_sFlag01      	// 조회조건 : 조회조건셋팅/조회조건에 미셋팅 Y:조회조건셋팅/조회조건자동셋팅않함.
        						  , pv_sOp02:lv_sFlag02       	// 자동조회 : 바로조회/미조회   Y:자동조회/N:자동조회않임
        						  , pv_sVal01:lv_sValue01      	// 파라미터1
        						  , pv_sVal02:lv_sValue02       // 파라미터2
        						  , pv_sVal03:lv_sValue03};     // 파라미터3
        	var sPopupCallBack 	= "fn_popupCallback1";
        	var oOption 		= {titlebar:"false"};

        	this.gfn_openPopup( sPopId
        					  , sUrl
        					  , oArg
        					  , sPopupCallBack
        					  , oOption);
        };
        /***********************************************************************************************
        * 매장팝업 종료
        /***********************************************************************************************/
        /***********************************************************************************************
        * 사유팝업 시작
        /***********************************************************************************************/
        this.btn_rjct_onclick = function(obj,e)
        {
        	var lv_sFlag01 		= "N";						    // (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        	var lv_sFlag02		= "N";						    // (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        	var lv_sValue01 	= "반려사유제목";	            // 프로그램 제목
        	var lv_sValue02 	= "반려사유";                  // sta_Title 타이틀
        	var lv_sValue03 	= "";  	                        // 추가파라미터

        	var sPopId 			= "SSP_BO_RP_01";
        	var sUrl 			= "RD_POP::SSP_BO_RP_01.xfdl";
        	var oArg 			= { pv_sOp01:lv_sFlag01      	// 조회조건 : 조회조건셋팅/조회조건에 미셋팅 Y:조회조건셋팅/조회조건자동셋팅않함.
        						  , pv_sOp02:lv_sFlag02       	// 자동조회 : 바로조회/미조회   Y:자동조회/N:자동조회않임
        						  , pv_sVal01:lv_sValue01      	// 파라미터1
        						  , pv_sVal02:lv_sValue02       // 파라미터2
        						  , pv_sVal03:lv_sValue03};     // 파라미터3
        	var sPopupCallBack 	= "fn_popupCallback";
        	var oOption 		= {titlebar:"false"};

        	this.gfn_openPopup( sPopId
        					  , sUrl
        					  , oArg
        					  , sPopupCallBack
        					  , oOption);
        };
        /***********************************************************************************************
        * 사유팝업 종료
        /***********************************************************************************************/
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.div_search.form.edtCodeId.addEventHandler("onkeyup",this.div_search_edtCodeId_onkeyup,this);
            this.div_search.form.edtCodeId.addEventHandler("oninput",this.div_search_edtCodeId_oninput,this);
            this.div_search.form.btnPopClick.addEventHandler("onclick",this.div_search_btnPopClick_onclick,this);
            this.div_search01.form.btnStorePopup.addEventHandler("onclick",this.div_search01_btnStorePopup_onclick,this);
            this.div_search0.form.edtCodeId.addEventHandler("oninput",this.div_search0_edtCodeId_oninput,this);
            this.div_search0.form.edtCodeId.addEventHandler("onkeyup",this.div_search0_edtCodeId_onkeyup,this);
            this.div_search0.form.btnPopClick.addEventHandler("onclick",this.div_search0_btnPopClick_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.btn_rjct.addEventHandler("onclick",this.btn_rjct_onclick,this);
            this.ds_cond.addEventHandler("oncolumnchanged",this.ds_cond_oncolumnchanged,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.dsMaster.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.dsStoreMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("SSP_BO_CO_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
