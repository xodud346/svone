(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_MA_63");
            this.set_titletext("공통 예산 이월 탭");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,680);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_NM\" type=\"STRING\" size=\"600\"/><Column id=\"ACCT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_LVL\" type=\"INT\" size=\"5\"/><Column id=\"HRNK_ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_ACCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_ACCT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_PERD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_BGT_YY\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_BGT_APLY_PERD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_BGT_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"FW_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TO_BGT_YY\" type=\"STRING\" size=\"256\"/><Column id=\"TO_BGT_APLY_PERD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TO_BGT_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TO_BGT_AMT_ORG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CHG_RSN\" type=\"STRING\" size=\"2000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_PERD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_BGT_YY\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_BGT_APLY_PERD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TO_BGT_YY\" type=\"STRING\" size=\"256\"/><Column id=\"TO_BGT_APLY_PERD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BGT_PERD_SPR_CD\"/><Col id=\"FROM_BGT_APLY_PERD_CD\"/><Col id=\"TO_BGT_APLY_PERD_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fromBgtYy", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fromBgtAplyPerdCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_PERD_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NM\">선택</Col><Col id=\"CD\"/><Col id=\"BGT_PERD_SPR_CD\">0</Col></Row><Row><Col id=\"CD\">01</Col><Col id=\"NM\">1월</Col><Col id=\"BGT_PERD_SPR_CD\">1</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"NM\">2월</Col><Col id=\"BGT_PERD_SPR_CD\">1</Col></Row><Row><Col id=\"CD\">03</Col><Col id=\"NM\">3월</Col><Col id=\"BGT_PERD_SPR_CD\">1</Col></Row><Row><Col id=\"CD\">04</Col><Col id=\"NM\">4월</Col><Col id=\"BGT_PERD_SPR_CD\">1</Col></Row><Row><Col id=\"CD\">05</Col><Col id=\"NM\">5월</Col><Col id=\"BGT_PERD_SPR_CD\">1</Col></Row><Row><Col id=\"CD\">06</Col><Col id=\"NM\">6월</Col><Col id=\"BGT_PERD_SPR_CD\">1</Col></Row><Row><Col id=\"CD\">07</Col><Col id=\"NM\">7월</Col><Col id=\"BGT_PERD_SPR_CD\">1</Col></Row><Row><Col id=\"CD\">08</Col><Col id=\"NM\">8월</Col><Col id=\"BGT_PERD_SPR_CD\">1</Col></Row><Row><Col id=\"CD\">09</Col><Col id=\"NM\">9월</Col><Col id=\"BGT_PERD_SPR_CD\">1</Col></Row><Row><Col id=\"CD\">10</Col><Col id=\"NM\">10월</Col><Col id=\"BGT_PERD_SPR_CD\">1</Col></Row><Row><Col id=\"CD\">11</Col><Col id=\"NM\">11월</Col><Col id=\"BGT_PERD_SPR_CD\">1</Col></Row><Row><Col id=\"CD\">12</Col><Col id=\"NM\">12월</Col><Col id=\"BGT_PERD_SPR_CD\">1</Col></Row><Row><Col id=\"CD\">21</Col><Col id=\"NM\">1분기</Col><Col id=\"BGT_PERD_SPR_CD\">2</Col></Row><Row><Col id=\"CD\">22</Col><Col id=\"NM\">2분기</Col><Col id=\"BGT_PERD_SPR_CD\">2</Col></Row><Row><Col id=\"CD\">23</Col><Col id=\"NM\">3분기</Col><Col id=\"BGT_PERD_SPR_CD\">2</Col></Row><Row><Col id=\"CD\">24</Col><Col id=\"NM\">4분기</Col><Col id=\"BGT_PERD_SPR_CD\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_toBgtYy", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_toBgtAplyPerdCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_PERD_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NM\">선택</Col><Col id=\"CD\"/><Col id=\"BGT_PERD_SPR_CD\">0</Col></Row><Row><Col id=\"CD\">01</Col><Col id=\"NM\">1월</Col><Col id=\"BGT_PERD_SPR_CD\">1</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"NM\">2월</Col><Col id=\"BGT_PERD_SPR_CD\">1</Col></Row><Row><Col id=\"CD\">03</Col><Col id=\"NM\">3월</Col><Col id=\"BGT_PERD_SPR_CD\">1</Col></Row><Row><Col id=\"CD\">04</Col><Col id=\"NM\">4월</Col><Col id=\"BGT_PERD_SPR_CD\">1</Col></Row><Row><Col id=\"CD\">05</Col><Col id=\"NM\">5월</Col><Col id=\"BGT_PERD_SPR_CD\">1</Col></Row><Row><Col id=\"CD\">06</Col><Col id=\"NM\">6월</Col><Col id=\"BGT_PERD_SPR_CD\">1</Col></Row><Row><Col id=\"CD\">07</Col><Col id=\"NM\">7월</Col><Col id=\"BGT_PERD_SPR_CD\">1</Col></Row><Row><Col id=\"CD\">08</Col><Col id=\"NM\">8월</Col><Col id=\"BGT_PERD_SPR_CD\">1</Col></Row><Row><Col id=\"CD\">09</Col><Col id=\"NM\">9월</Col><Col id=\"BGT_PERD_SPR_CD\">1</Col></Row><Row><Col id=\"CD\">10</Col><Col id=\"NM\">10월</Col><Col id=\"BGT_PERD_SPR_CD\">1</Col></Row><Row><Col id=\"CD\">11</Col><Col id=\"NM\">11월</Col><Col id=\"BGT_PERD_SPR_CD\">1</Col></Row><Row><Col id=\"CD\">12</Col><Col id=\"NM\">12월</Col><Col id=\"BGT_PERD_SPR_CD\">1</Col></Row><Row><Col id=\"CD\">21</Col><Col id=\"NM\">1분기</Col><Col id=\"BGT_PERD_SPR_CD\">2</Col></Row><Row><Col id=\"CD\">22</Col><Col id=\"NM\">2분기</Col><Col id=\"BGT_PERD_SPR_CD\">2</Col></Row><Row><Col id=\"CD\">23</Col><Col id=\"NM\">3분기</Col><Col id=\"BGT_PERD_SPR_CD\">2</Col></Row><Row><Col id=\"CD\">24</Col><Col id=\"NM\">4분기</Col><Col id=\"BGT_PERD_SPR_CD\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bgtPerdSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\"/><Col id=\"NM\">선택</Col></Row><Row><Col id=\"CD\">1</Col><Col id=\"NM\">월</Col></Row><Row><Col id=\"NM\">분기</Col><Col id=\"CD\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qrtBgtUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"QRT_BGT_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_CLOS_DD_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","25",null,"63","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색 영역");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20","0",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","432","0","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("계정");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_bzpSingle","393","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_search02");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcId","134","4","95","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcNm","233","4","154","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static31","0","31",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("lblAcct","0","31","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("이월기준");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static10","862","31","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("(To)");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static08","432","31","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("(From)");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_bgtPerdSprCd","133","35","116","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_innerdataset("ds_bgtPerdSprCd");
            obj.set_datacolumn("NM");
            obj.set_codecolumn("CD");
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_text("선택");
            obj.set_value("  ");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_fromBgtAplyPerdCd","671","35","100","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_innerdataset("ds_fromBgtAplyPerdCd");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            obj.set_text("선택");
            obj.set_value(" ");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_fromBgtYy","567","35","100","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_innerdataset("ds_fromBgtYy");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            obj.set_text("선택");
            obj.set_value("  ");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_toBgtYy","997","35","100","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_innerdataset("ds_toBgtYy");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            obj.set_readonly("true");
            obj.set_text("선택");
            obj.set_value("  ");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_toBgtAplyPerdCd","1101","35","100","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_innerdataset("ds_toBgtAplyPerdCd");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            obj.set_readonly("true");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_acctMemo","827","5","30","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_document");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_acctMulti","804","4","24","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_multi");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_acctId","567","4","100","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_enable("true");
            obj.set_enableevent("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_acctNm","671","4","130","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("18");
            obj.set_enable("false");
            obj.set_enableevent("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"93","60","30","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchReset",null,"93","60","30","btn_search:4",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_reset");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"149","60","30","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_saveReset",null,"149","60","30","btn_save:4",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("초기화");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_reset");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","184",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_autofittype("none");
            obj.set_autosizingtype("none");
            obj.set_binddataset("ds_list");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_enable("true");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"255\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"계정ID\"/><Cell col=\"1\" text=\"계정명\"/><Cell col=\"2\" text=\"계정코드\"/><Cell col=\"3\" text=\"계정레벨\"/><Cell col=\"4\" text=\"상위계정ID\"/><Cell col=\"5\" text=\"상위계정명\"/><Cell col=\"6\" text=\"상위계정코드\"/><Cell col=\"7\" text=\"이월가능금액\"/><Cell col=\"8\" text=\"이월금액\"/><Cell col=\"9\" text=\"이월후 합산금액\"/><Cell col=\"10\" text=\"사유\"/></Band><Band id=\"body\"><Cell text=\"bind:ACCT_ID\"/><Cell col=\"1\" text=\"bind:ACCT_NM\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:ACCT_CD\"/><Cell col=\"3\" text=\"bind:ACCT_LVL\"/><Cell col=\"4\" text=\"bind:HRNK_ACCT_ID\"/><Cell col=\"5\" text=\"bind:HRNK_ACCT_NM\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:HRNK_ACCT_CD\"/><Cell col=\"7\" text=\"bind:FROM_BGT_AMT\" textAlign=\"right\" displaytype=\"normal\"/><Cell col=\"8\" text=\"bind:FW_AMT\" textAlign=\"right\" displaytype=\"maskeditcontrol\" editinputfilter=\"none,sign,space,symbol,dot,comma,alpha,digit\" editinputtype=\"number\" maskedittrimtype=\"both\" edittype=\"mask\" editmaxlength=\"22\" maskeditformat=\"##,##0\"/><Cell col=\"9\" text=\"bind:TO_BGT_AMT\" textAlign=\"right\" displaytype=\"normal\"/><Cell col=\"10\" text=\"bind:CHG_RSN\" textAlign=\"left\" edittype=\"text\" displaytype=\"editcontrol\" editmaxlength=\"2000\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"150","100","28","242",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutClear",null,"150","110","28","128",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,680,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.edt_bzplcId","value","ds_search","BZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.edt_bzplcNm","value","ds_search","BZPLC_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_deliver.form.cbo_bgtYyStrMm00","value","ds_dtl","DLV_HP_NO_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_basis.form.Static29_00_00_00_00_00","text","ds_dtl","BIZNO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_search.form.cbo_bgtPerdSprCd","value","ds_search","BGT_PERD_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_search.form.cbo_fromBgtAplyPerdCd","value","ds_search","FROM_BGT_APLY_PERD_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_search.form.cbo_fromBgtYy","value","ds_search","FROM_BGT_YY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_search.form.cbo_toBgtYy","value","ds_search","TO_BGT_YY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_search.form.cbo_toBgtAplyPerdCd","value","ds_search","TO_BGT_APLY_PERD_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.edt_acctId","value","ds_search","ACCT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.edt_acctNm","value","ds_search","ACCT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MA_63.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_63.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_63.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_MA_63.xfdl", function() {
        /*******************************************************
          PROJECT NAME : SSP
          프로그램명 : 공통예산이월탭
          CREATION DATES : 2022.04.05
          박재광
          최초작성
        *******************************************************/
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_sessionData = this.getSession(); //session object
        this.fv_coCd = this.fv_sessionData.coCd; //회사코드
        this.today = "";

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//검색 영역 최소size 적용
        	this.div_search.set_height(this.div_search.uMinSize);
        	this.resetScroll();

        	//조회조건 초기화
        	this.initSearchParam();
        };


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //목록 조회
        this.fn_searchList= function()	{
        	oSortInfo = this.grdList.uaSortInfo;
        	if(oSortInfo != null){
        		this.ds_search.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
        		this.ds_search.setColumn(0,"SORT_TYPE",oSortInfo.status);
        	}

        	var sSvcId = "selectList";
        	var sUrl = "/bo/cust/bgt/ssp_bo_ma_63/select-com-bgt-fw-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_list=ds_list";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //목록 저장
        this.fn_saveList = function()	{
        	var sSvcId = "saveList";
        	var sUrl = "/bo/cust/bgt/ssp_bo_ma_63/save-com-bgt-fw-list.do";
        	var inDs = "ds_list=ds_list:U";
        	var outDs = "";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //사업장 제어권한 조회
        this.fn_searchQrtBgtUseYn = function (bInit){
        	var sSvcId = "searchQrtBgtUseYn";
        	var sUrl = "/bo/cust/bgt/ssp_bo_ma_85/selectBzplcQrtBgtUseYn.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_qrtBgtUseYn=ds_qrtBgtUseYn";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        //
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(errorCode == -1) {
        		alert(this.fn_getMessage("ERRC000058"));	//오류가 발생했습니다.
        	} else {
        		if(svcID == "selectList") {
        			//
        		} else if(svcID == "saveList") {
        			alert(this.fn_getMessage("ERRC000007"));	//정상적으로 저장되었습니다
        			this.fn_searchList();
        		} else if(svcID == "searchQrtBgtUseYn") { //사업장 제어권한 분기예산사용여부 조회
        			var yn = this.ds_qrtBgtUseYn.getColumn(0,"QRT_BGT_USE_YN");
        			var dd = this.ds_qrtBgtUseYn.getColumn(0,"BGT_CLOS_DD_CD");
        			var fw = this.ds_qrtBgtUseYn.getColumn(0,"BGT_FW_SPR_CD");
        			trace("분기 : " + yn);
        			trace("마감일 : " + dd);
        			trace("수동이월 : " + fw);

        			this.today = this.gfn_getDate();

        			var fromYyyy = this.today.substr(0,4);
        			var fromMm = this.today.substr(4,2);
        			var fromQrt = this.getQrt(fromMm);

        			var todayAfter1Mon = this.gfn_addMonth(this.today, 1);
        			var todayAfter1Qrt = this.gfn_addMonth(this.today, 3);

        			var toMonYyyy = todayAfter1Mon.substr(0,4);
        			var toMon = todayAfter1Mon.substr(4,2);
        			var toQrtYyyy = todayAfter1Qrt.substr(0,4);
        			var toQrt = this.getQrt(todayAfter1Qrt.substr(4,2));

        			this.div_search.form.cbo_fromBgtYy.set_value(fromYyyy);
        			if(yn=="Y") {	//분기
        				this.div_search.form.cbo_bgtPerdSprCd.set_value("2");
        				this.ds_fromBgtAplyPerdCd.filter("BGT_PERD_SPR_CD!='1'");
        				this.div_search.form.cbo_fromBgtAplyPerdCd.set_value(fromQrt);
        				this.div_search.form.cbo_toBgtYy.set_value(toQrtYyyy);
        				this.div_search.form.cbo_toBgtAplyPerdCd.set_value(toQrt);
        				this.div_search.form.Static08.set_text("예산년분기(From)");	//from
        				this.div_search.form.Static10.set_text("예산년분기(To)");	//to
        			} else {	//월
        				this.div_search.form.cbo_bgtPerdSprCd.set_value("1");
        				this.ds_fromBgtAplyPerdCd.filter("BGT_PERD_SPR_CD!='2'");
        				this.div_search.form.cbo_fromBgtAplyPerdCd.set_value(fromMm);
        				this.div_search.form.cbo_toBgtYy.set_value(toMonYyyy);
        				this.div_search.form.cbo_toBgtAplyPerdCd.set_value(toMon);
        				this.div_search.form.Static08.set_text("예산년월(From)");	//from
        				this.div_search.form.Static10.set_text("예산년월(To)");	//to
        			}

        			if(Number(this.today.substr(6,2)) <= Number(this.ds_qrtBgtUseYn.getColumn(0,"BGT_CLOS_DD_CD"))) {
        				this.div_search.form.cbo_fromBgtYy.set_enable(true);
        				this.div_search.form.cbo_fromBgtAplyPerdCd.set_enable(true);
        			} else {
        				this.div_search.form.cbo_fromBgtYy.set_enable(false);
        				this.div_search.form.cbo_fromBgtAplyPerdCd.set_enable(false);
        			}

        			if(fw == "02") { //예산이월구분코드 (01:자동이월,02:수동이월,03:이월사용안함)
        				this.btn_search.set_enable(true);
        				this.btn_saveReset.set_enable(true);
        				this.btn_save.set_enable(true);
        				this.grdList.set_enable(true);
        				this.grdList.set_nodatatext("조회된 결과가 없습니다.");
        			} else {
        				this.btn_search.set_enable(false);
        				this.btn_saveReset.set_enable(false);
        				this.btn_save.set_enable(false);
        				this.grdList.set_enable(false);
        				this.grdList.set_nodatatext(this.fn_getMessage("ERRC000124", "사업장"));	//수동이월 처리 대상 &1 이(가) 아닙니다
        				this.ds_list.clearData();
        			}
        		}
        	}
        };

        this.fn_sortCallback = function(sGridId){
        	var oGrid=null;
        	if(sGridId == "grdList"){
        		this.btn_search_onclick();
        	}
        };
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function()
        {
        	//search static 필수표시 설정
        	this.div_search.form.Static02.uEssentiel = "true";
        	this.div_search.form.lblAcct.uEssentiel = "true";
        	this.div_search.form.Static08.uEssentiel = "true";
        	this.div_search.form.Static10.uEssentiel = "true";

        	//search div 초기 설정
        	this.div_search.uMinSize = this.div_search.height;
        	this.div_search.uMaxSize = 157;

        	this.today = this.gfn_getDate();

        	//grid 초기 설정
        	this.grdList.uSortFlag = "false";
        	this.grdList.uServerSortFlag = "true";
        	this.grdList.uSortCallback = "fn_sortCallback";
        	this.grdList.uCellSizeType = "true";

        	//grid 개인화(전제조건 : grid Head가 무조건 1Row인 경우)
        	this.uGridList = "grdList";
        	this.grdList.uRightMouse = "true";
        	this.grdList.uPersonalFlag = "true";
        	this.grdList.uDefaultFormat = "ACCT_ID,ACCT_NM,ACCT_CD,ACCT_LVL,HRNK_ACCT_ID,HRNK_ACCT_NM,HRNK_ACCT_CD,FROM_BGT_AMT,FW_AMT,TO_BGT_AMT,CHG_RSN";
        };

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        // 월로 분기 구하기
        this.getQrt = function(mm)
        {
        	var qrt = "";
        	if(mm=="01"||mm=="02"||mm=="03") {
        		qrt = "21";
        	} else if(mm=="04"||mm=="05"||mm=="06") {
        		qrt = "22";
        	} else if(mm=="07"||mm=="08"||mm=="09") {
        		qrt = "23";
        	} else if(mm=="10"||mm=="11"||mm=="12") {
        		qrt = "24";
        	}
        	return qrt;
        }

        //조회조건 초기화
        this.initSearchParam = function()
        {
        	var curYear = this.gfn_left(this.today,4);
        	var nextYear = this.gfn_left(this.gfn_addMonth(this.today, 12),4);
        	var prevYear = this.gfn_left(this.gfn_addMonth(this.today, -12),4);

        	this.ds_fromBgtYy.clearData();
        	this.ds_fromBgtYy.addRow();
        	this.ds_fromBgtYy.setColumn(0,"CD", prevYear);
        	this.ds_fromBgtYy.setColumn(0,"NM", prevYear + "년");
        	this.ds_fromBgtYy.addRow();
        	this.ds_fromBgtYy.setColumn(1,"CD", curYear);
        	this.ds_fromBgtYy.setColumn(1,"NM", curYear + "년");
        	this.div_search.form.cbo_fromBgtYy.set_value(curYear);

        	this.ds_toBgtYy.clearData();
        	this.ds_toBgtYy.addRow();
        	this.ds_toBgtYy.setColumn(0,"CD", prevYear);
        	this.ds_toBgtYy.setColumn(0,"NM", prevYear + "년");
        	this.ds_toBgtYy.addRow();
        	this.ds_toBgtYy.setColumn(1,"CD", curYear);
        	this.ds_toBgtYy.setColumn(1,"NM", curYear + "년");
        	this.ds_toBgtYy.addRow();
        	this.ds_toBgtYy.setColumn(2,"CD", nextYear);
        	this.ds_toBgtYy.setColumn(3,"NM", nextYear + "년");
        	this.div_search.form.cbo_toBgtYy.set_value(curYear);

        	this.ds_fromBgtAplyPerdCd.filter("BGT_PERD_SPR_CD=='0'");

        	this.ds_search.setColumn(0,"CO_CD",this.fv_coCd);
        	this.ds_search.setColumn(0,"BZPLC_ID","");
        	this.ds_search.setColumn(0,"BZPLC_NM","");
        	this.ds_search.setColumn(0,"ACCT_ID","");
        	this.ds_search.setColumn(0,"ACCT_NM","");
        	this.ds_search.setColumn(0,"BGT_PERD_SPR_CD","");
        	this.ds_search.setColumn(0,"FROM_BGT_YY",curYear);
        	this.ds_search.setColumn(0,"FROM_BGT_APLY_PERD_CD","");	//from월 빈값
        	this.ds_search.setColumn(0,"TO_BGT_YY",curYear);
        	this.ds_search.setColumn(0,"TO_BGT_APLY_PERD_CD","");	//to월 빈값

        	this.div_search.form.Static08.set_text("(From)");	//from
        	this.div_search.form.Static10.set_text("(To)");	//to
        }


        /***********************************************************************************************
        *  큰 버튼 이벤트들
        ************************************************************************************************/
        //조회 버튼 클릭
        this.btn_search_onclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.ds_search.getColumn(0,"BZPLC_ID"))) {
        		alert(this.fn_getMessage("ERRC000004","사업장"));	//&1 은(는) 필수 입력값입니다.
        		return;
        	}

        	if(this.gfn_isNull(this.ds_search.getColumn(0,"FROM_BGT_YY"))) {
        		alert(this.fn_getMessage("ERRC000004","예산 년도(From)"));	//&1 은(는) 필수 입력값입니다.
        		return;
        	}

        	if(this.gfn_isNull(this.ds_search.getColumn(0,"FROM_BGT_APLY_PERD_CD"))) {
        		alert(this.fn_getMessage("ERRC000004","예산 월이나 분기(From)"));	//&1 은(는) 필수 입력값입니다.
        		return;
        	}

        	if(this.gfn_isNull(this.ds_search.getColumn(0,"TO_BGT_YY"))) {
        		alert(this.fn_getMessage("ERRC000004","예산 년도(To)"));	//&1 은(는) 필수 입력값입니다.
        		return;
        	}

        	if(this.gfn_isNull(this.ds_search.getColumn(0,"TO_BGT_APLY_PERD_CD"))) {
        		alert(this.fn_getMessage("ERRC000004","예산 월이나 분기"));	//&1 은(는) 필수 입력값입니다.
        		return;
        	}

        	this.fn_searchList();
        };

        //초기화 버튼(조회조건영역) 클릭
        this.btn_searchReset_onclick = function(obj,e)
        {
        	this.initSearchParam();	//조회조건 초기화
        };

        //저장 버튼 클릭
        this.btn_save_onclick = function(obj,e)
        {
        	if(this.gfn_dsIsUpdated(this.ds_list)) {
        		for(var i = 0; i < this.ds_list.getRowCount(); i++) {
        			if(this.ds_list.getRowType(i)==Dataset.ROWTYPE_UPDATE) {
        				var chgRsn = this.ds_list.getColumn(i,"CHG_RSN");
        				var fwAmt = this.ds_list.getColumn(i,"FW_AMT");
        				if(this.gfn_isNull(chgRsn)) {
        					this.grdList.selectRow(i);
        					alert(this.fn_getMessage("ERRC000009","사유"));	//&1 을(를) 입력하세요.
        					return;
        				} else if(this.gfn_isNull(fwAmt) || Number(fwAmt) < 0) {
        					this.grdList.selectRow(i);
        					alert(this.fn_getMessage("ERRC000009","정확한 이월금액"));	//&1 을(를) 입력하세요.
        					return;
        				}
        			}
        		}
        		if(confirm(this.fn_getMessage("ERRC000080"))) {	//저장하시겠습니까?
        			this.fn_saveList();
        		}
        	} else {
        		alert(this.fn_getMessage("ERRC000083"));	//저장할 데이터가 없습니다.
        	}
        };

        //초기화 버튼(입력영역) 버큰 클릭
        this.btn_saveReset_onclick = function(obj,e)
        {
        	if(this.gfn_dsIsUpdated(this.ds_list)) {
        		if(confirm(this.fn_getMessage("ERRC000030"))) {	//목록에 변경된 내역이 존재합니다. 초기화하시겠습니까?
        			this.ds_list.reset();
        		}
        	} else {
        		alert(this.fn_getMessage("ERRC000035"));	//변경된 내용이 없습니다.
        	}
        };


        /***********************************************************************************************
        *  팝업 버튼 이벤트들
        ************************************************************************************************/

        // 조회조건 사업장 팝업 버튼 클릭
        this.div_search_btn_bzpSingle_onclick = function(obj,e)
        {
        	var oArg = {
        		coCd : this.fv_coCd
        	};
        	this.gfn_openPopup('bizPop', "CO_POP::SSP_BO_PP_22.xfdl", oArg, "fn_popupCallback", {titlebar:"true"});
        };

        // 계정 멀티 팝업 버튼 클릭
        this.div_search_btn_acctMulti_onclick = function(obj,e)
        {
        	var paramBzplcId = this.ds_search.getColumn(0, "BZPLC_ID");

        	if(this.gfn_isNull(paramBzplcId)) {
        		alert(this.fn_getMessage("ERRC000009","사업장"));	//&1 을(를) 입력하세요.
        		return;
        	}

        	var oArg = {
        		coCd : this.fv_coCd
        		,bzplcId : paramBzplcId
        		,acctTpCd : "2"	//계정유형코드:공통
        	};

        	this.gfn_openPopup('acctMulti', "CC::SSP_BO_PP_31.xfdl", oArg, "fn_popupCallback", {titlebar:"true"});	//MA_76화면은 안쓰는거임.
        };

        //멀티서치
        this.div_search_btn_acctMemo_onclick = function(obj,e)
        {
        	var params = { textId :  this.div_search.form.edt_acctId };
        	var options = {title : "멀티 텍스트 팝업"};
        	this.gfn_openPopup("acctMemo", "CO_POP::SSP_BO_PP_13.xfdl", params, "fn_popupCallback", options);
        };

        // 팝업버튼 클릭 콜백
        this.fn_popupCallback = function(sPopupId, sRetValue){
        	if(this.gfn_isNull(sRetValue)) return;

        	var retObj = JSON.parse(sRetValue);

        	switch(sPopupId) {
        		case "bizPop":	//사업장
        			this.ds_search.setColumn(0,"BZPLC_ID", retObj.BZPLC_ID.replace(/,\s*$/, ""));
        			this.ds_search.setColumn(0,"BZPLC_NM", retObj.BZPLC_NM.replace(/,\s*$/, ""));
        			this.ds_search.setColumn(0,"ACCT_ID", "");
        			this.ds_search.setColumn(0,"ACCT_NM", "");
        			this.fn_searchQrtBgtUseYn();
        			break;
        		case "acctMulti": //계정 멀티
        			var sIdList = "";
        			var sNmList = "";
        			for (var i = 0; i < retObj.length; i++) {
        				var rtnData = JSON.parse(retObj[i]);
        				if(rtnData.ACCT_ID==undefined || rtnData.ACCT_NM==undefined || rtnData.ACCT_ID==null || rtnData.ACCT_NM==null || rtnData.ACCT_ID=="" || rtnData.ACCT_NM=="") {
        					continue;
        				} else {
        					sIdList += rtnData.ACCT_ID +",";
        					sNmList += rtnData.ACCT_NM +",";
        				}
        			}
        			this.ds_search.setColumn(0, "ACCT_ID", sIdList.replace(/,\s*$/, ""));
        			this.ds_search.setColumn(0, "ACCT_NM", sNmList.replace(/,\s*$/, ""));
        			break;
        		case "acctMemo": //계정 멀티 텍스트 팝업
        			this.ds_search.setColumn(0, "ACCT_ID", retObj.textValue.replace(/,\s*$/, ""));
        			this.ds_search.setColumn(0, "ACCT_NM", retObj.textValue.replace(/,\s*$/, ""));
        			break;
        	}
        }

        //조회조건 예산 년도(from) 선택하려고 할때
        this.div_search_cbo_fromBgtYy_canitemchange = function(obj,e)
        {
        	var fromYyyy = e.postvalue;
        	var fromPerd = this.div_search.form.cbo_fromBgtAplyPerdCd.value;
        	return this.canYyyyPerdChange(fromYyyy,fromPerd);
        };

        //조회조건 예산 월/분기(from) 선택하려고 할때
        this.div_search_cbo_fromBgtAplyPerdCd_canitemchange = function(obj,e)
        {
        	var fromYyyy = this.div_search.form.cbo_fromBgtYy.value;
        	var fromPerd = e.postvalue;
        	return this.canYyyyPerdChange(fromYyyy,fromPerd);
        };

        //년도나 월/분기를 선택하려고 할때
        this.canYyyyPerdChange = function(fromYyyy, fromPerd)
        {
        	var yyyyPerdSelect = Number("" + fromYyyy + fromPerd);

        	if(this.gfn_isNull(fromYyyy)) {
        		alert(this.fn_getMessage("ERRC000005","예산년도(from)"));	//&1 을(를) 먼저 선택하세요.
        		return false;
        	}
        	if(this.gfn_isNull(fromPerd)) {
        		alert(this.fn_getMessage("ERRC000005","예산월/분기(from)"));	//&1 을(를) 먼저 선택하세요.
        		return false;
        	}

        	if(Number(fromPerd) >= 1 && Number(fromPerd) <= 12) {	//기간코드가 월일 경우
        		var yyyyMmToday = Number(this.gfn_left(this.today,6));
        		trace("yyyyMmTodayyyyyMmToday : " + yyyyMmToday);
        		trace("yyyyPerdSelectyyyyPerdSelect : " + yyyyPerdSelect);
        		if(yyyyMmToday >= yyyyPerdSelect) {
        			return true;
        		} else {
        			alert(this.fn_getMessage("ERRS000241", "현재"));  //조회기간은 &1을(를) 초과할 수 없습니다.
        			return false;
        		}
        	} else if(Number(fromPerd) >= 21 && Number(fromPerd) <= 24) {	//기간코드가 분기일 경우 21,22,23,24
        		var mm = this.gfn_right(this.gfn_left(this.today,6),2);
        		var qrt = "";
        		if(mm=="01"||mm=="02"||mm=="03") {
        			qrt = "21";
        		} else if(mm=="04"||mm=="05"||mm=="06") {
        			qrt = "22";
        		} else if(mm=="07"||mm=="08"||mm=="09") {
        			qrt = "23";
        		} else if(mm=="10"||mm=="11"||mm=="12") {
        			qrt = "24";
        		}

        		var yyyyQrtToday = Number(this.gfn_left(this.today,4) + qrt);
        		trace("yyyyQrtTodayyyyyQrtToday : " + yyyyQrtToday);
        		trace("yyyyPerdSelectyyyyPerdSelect : " + yyyyPerdSelect);
        		if(yyyyQrtToday >= yyyyPerdSelect) {
        			return true;
        		} else {
        			alert(this.fn_getMessage("ERRS000241", "현재"));  //조회기간은 &1을(를) 초과할 수 없습니다.
        			return false;
        		}
        	}
        }

        //조회조건 예산 월/분기(from) 선택한 후에
        this.div_search_cbo_fromBgtAplyPerdCd_onitemchanged = function(obj,e)
        {
        	var fromYyyy = this.div_search.form.cbo_fromBgtYy.value;
        	var fromPerd = this.div_search.form.cbo_fromBgtAplyPerdCd.value;
        	var yn = this.ds_qrtBgtUseYn.getColumn(0,"QRT_BGT_USE_YN");

        	if(yn=="Y") {	//분기
        		var toYyyy = fromYyyy;
        		var toPerd = "";
        		if(fromPerd=="21") {
        			toPerd = "22";
        		} else if(fromPerd=="22") {
        			toPerd = "23";
        		} else if(fromPerd=="23") {
        			toPerd = "24";
        		} else if(fromPerd=="24") {
        			toYyyy = String(Number(fromYyyy)+1);
        			toPerd = "21";
        		}

        		this.div_search.form.cbo_toBgtYy.set_value(toYyyy);
        		this.div_search.form.cbo_toBgtAplyPerdCd.set_value(toPerd);
        	} else {	//월
        		var dateM = this.gfn_addMonth(fromYyyy + fromPerd + "01", 1);
        		this.div_search.form.cbo_toBgtYy.set_value(dateM.substr(0,4));
        		this.div_search.form.cbo_toBgtAplyPerdCd.set_value(dateM.substr(4,2));
        	}
        };

        // 목록 데이터셋 변경하려고 할때
        this.ds_list_cancolumnchange = function(obj,e)
        {
        	if(e.columnid=="FW_AMT") {	//이월금액 변경시
        		if(this.gfn_isNull(e.newvalue)) {
        			return true;
        		} else {
        			var fwAmt = Number(e.newvalue);
        			if(fwAmt==0) {
        				return true;
        			} else if(fwAmt<0) {
        				alert(this.fn_getMessage("ERRC000068"));	//이월금액에 음수를 입력할 수 없습니다.
        				return false;
        			} else {
        				var fromBgtAmt = Number(this.ds_list.getColumn(e.row,"FROM_BGT_AMT"));
        				if(fromBgtAmt < fwAmt) {
        					alert(this.fn_getMessage("ERRC000065"));	//이월 금액을 이월 가능 금액보다 적게 입력해주세요.
        					return false;
        				} else {
        					return true;
        				}
        			}
        		}
        	} else if(e.columnid=="CHG_RSN") {	//사유 변경시
        		return true;
        	}
        };

        // 목록 데이터셋 변경되었을때
        this.ds_list_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid=="FW_AMT") {	//이월금액 변경시
        		var toBgtAmtOrg = Number(this.ds_list.getColumn(e.row,"TO_BGT_AMT_ORG"));
        		if(this.gfn_isNull(e.newvalue)) {
        			this.ds_list.setColumn(e.row,"FW_AMT",0);	//이월금액 삭제
        			this.ds_list.setColumn(e.row,"TO_BGT_AMT",toBgtAmtOrg);
        		} else {
        			var fwAmt = Number(e.newvalue);
        			if(fwAmt < 0) {
        				this.ds_list.setColumn(e.row,"FW_AMT",0);	//이월금액 삭제
        				this.ds_list.setColumn(e.row,"TO_BGT_AMT",toBgtAmtOrg);
        			} else {
        				this.ds_list.setColumn(e.row,"TO_BGT_AMT",toBgtAmtOrg + fwAmt);	//이월후에 더해주기
        			}
        		}
        		this.ds_list.setColumn(e.row,"CHG_RSN",null);	//사유 삭제
        	} else if(e.columnid=="CHG_RSN") {	//사유 변경시
        		var fwAmt = this.ds_list.getColumn(e.row,"FW_AMT");
        		if(this.gfn_isNull(fwAmt) || Number(fwAmt) < 0) {
        			alert(this.fn_getMessage("ERRC000005","이월금액"));	//&1 을(를) 먼저 선택하세요.
        			this.ds_list.setColumn(e.row,"CHG_RSN",null);	//사유 삭제
        		}
        	}
        };

        this.div_search_edt_bzplcId_canchange = function(obj,e)
        {
        	return this.fn_isBzplcId(this.gfn_trim(obj.value));
        };

        this.div_search_edt_bzplcId_onchanged = function(obj,e)
        {
        	obj.set_value(this.gfn_trim(obj.value));
        	this.fn_getCodeName(obj,this.div_search.form.edt_bzplcNm,"BZPLC","fn_bzplcCodeNameCallback");
        };

        // 사업장id 입력완료후 콜백
        this.fn_bzplcCodeNameCallback = function()
        {
        	if(this.gfn_isNull(this.ds_search.getColumn(0,"BZPLC_ID"))) {
        		this.ds_search.setColumn(0,"BZPLC_NM","");
        	}
        	this.ds_search.setColumn(0,"ACCT_ID","");
        	this.ds_search.setColumn(0,"ACCT_NM","");
        	this.fn_searchQrtBgtUseYn();	//사업장 제어권한 분기예산사용여부 조회
        }

        this.div_search_edt_acctId_canchange = function(obj,e)
        {
        	return this.fn_isAcctId(this.gfn_trim(obj.value));
        };

        this.div_search_edt_acctId_onchanged = function(obj,e)
        {
        	obj.set_value(this.gfn_trim(obj.value));
        	this.fn_getCodeName(obj,this.div_search.form.edt_acctNm,"ACCT","fn_acctCodeNameCallback");
        };

        // 계정id 입력완료후 콜백
        this.fn_acctCodeNameCallback = function()
        {
        	if(this.gfn_isNull(this.ds_search.getColumn(0,"ACCT_ID"))) {
        		this.ds_search.setColumn(0,"ACCT_NM","");
        	}
        }

        // 그리드 헤더 우클릭 이벤트, 박재광 20220712
        this.cfn_personalPopupClose = function(sRet){
        	this.grdList.set_formats(sRet);
        	this.pdiv_personal.closePopup();
        };

        // 레이아웃 저장버튼
        this.btn_layoutSave_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grdList", this.grdList.getCurFormatString());
        };

        // 레이아웃 초기화버튼
        this.btn_layoutClear_onclick = function(obj,e)
        {
        	//suOrgFormat
        	this.gfn_personalSave("grdList", this.grdList.uOrgFormat);
        	this.grdList.set_formats(this.grdList.uOrgFormat);
        };
        this.SSP_BO_MA_63_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13 && e.ctrlkey){
        		this.btn_search_onclick();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.SSP_BO_MA_63_onkeyup,this);
            this.div_search.form.btn_bzpSingle.addEventHandler("onclick",this.div_search_btn_bzpSingle_onclick,this);
            this.div_search.form.edt_bzplcId.addEventHandler("onchanged",this.div_search_edt_bzplcId_onchanged,this);
            this.div_search.form.edt_bzplcId.addEventHandler("canchange",this.div_search_edt_bzplcId_canchange,this);
            this.div_search.form.cbo_fromBgtAplyPerdCd.addEventHandler("onitemchanged",this.div_search_cbo_fromBgtAplyPerdCd_onitemchanged,this);
            this.div_search.form.cbo_fromBgtAplyPerdCd.addEventHandler("canitemchange",this.div_search_cbo_fromBgtAplyPerdCd_canitemchange,this);
            this.div_search.form.cbo_fromBgtYy.addEventHandler("onitemchanged",this.div_search_cbo_fromBgtAplyPerdCd_onitemchanged,this);
            this.div_search.form.cbo_fromBgtYy.addEventHandler("canitemchange",this.div_search_cbo_fromBgtYy_canitemchange,this);
            this.div_search.form.btn_acctMemo.addEventHandler("onclick",this.div_search_btn_acctMemo_onclick,this);
            this.div_search.form.btn_acctMulti.addEventHandler("onclick",this.div_search_btn_acctMulti_onclick,this);
            this.div_search.form.edt_acctId.addEventHandler("onchanged",this.div_search_edt_acctId_onchanged,this);
            this.div_search.form.edt_acctId.addEventHandler("canchange",this.div_search_edt_acctId_canchange,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_searchReset.addEventHandler("onclick",this.btn_searchReset_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_saveReset.addEventHandler("onclick",this.btn_saveReset_onclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_layoutClear.addEventHandler("onclick",this.btn_layoutClear_onclick,this);
            this.ds_list.addEventHandler("cancolumnchange",this.ds_list_cancolumnchange,this);
            this.ds_list.addEventHandler("oncolumnchanged",this.ds_list_oncolumnchanged,this);
        };
        this.loadIncludeScript("SSP_BO_MA_63.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
