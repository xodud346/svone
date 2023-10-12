(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_MF_14");
            this.set_titletext("상품결재선 관리 목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"ID_CHK1\" type=\"STRING\" size=\"256\"/><Column id=\"ID_CHK2\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APRVL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APRVL_SET_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRVL\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"CATG\" type=\"STRING\" size=\"256\"/><Column id=\"ORGPLC_CTRY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"APRVR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APRVR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APRVL_PST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"eBZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ePRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"eACCT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">20</Col><Col id=\"BZPLC_ID\"/><Col id=\"PRD_ID\"/><Col id=\"ACCT_ID\"/><Col id=\"DEPT_ID\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pageOpt", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COL_VALUE\">20</Col><Col id=\"COL_NM\">20개씩</Col></Row><Row><Col id=\"COL_VALUE\">50</Col><Col id=\"COL_NM\">50개씩</Col></Row><Row><Col id=\"COL_VALUE\">100</Col><Col id=\"COL_NM\">100개씩</Col></Row><Row><Col id=\"COL_VALUE\">10000</Col><Col id=\"COL_NM\">10,000개씩</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_aprvlPstCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCodeSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"codeList\" type=\"STRING\" size=\"32\"/><Column id=\"langCd\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_listOut", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"ID_CHK1\" type=\"STRING\" size=\"256\"/><Column id=\"ID_CHK2\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APRVL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APRVL_SET_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRVL\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"CATG\" type=\"STRING\" size=\"256\"/><Column id=\"ORGPLC_CTRY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"APRVR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APRVL_PST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,"97","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20","20",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","20","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcId","Static02:10","24","231","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_bzpMulti","edt_bzplcId:4","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_bzpMultiText","btn_bzpMulti:4","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_document");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","883","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("결재자");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00","450","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("상품");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","Static04_00:10","24","231","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_enable("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_prdMulti","edt_prdId:4","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_prdMultiText","btn_prdMulti:4","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_document");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_acctId","Static04:10","24","231","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_enable("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_acctMulti","edt_acctId:4","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_acctMultiText","btn_acctMulti:4","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_document");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"61","60","28","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"61","60","28","btn_search:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_reset");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_page",null,"116","110","28","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_pageOpt");
            obj.set_codecolumn("COL_VALUE");
            obj.set_datacolumn("COL_NM");
            obj.set_text("");
            obj.set_value("Y");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","20","cbo_page:10",null,null,"20","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","604",null,"38","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_totCount","20",null,"200","25",null,"Div01:4",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("(총 0건 1/1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"116","100","28","248",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"116","87","28","btn_layoutSave:4",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_copy",null,"116","87","28","btn_delete:4",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("복사");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reg",null,"116","87","28","btn_copy:4",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"116","110","28","btn_reg:95",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mainList","20","153",null,"574","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_autofittype("none");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_list");
            obj.set_visible("true");
            obj.set_nodatatext("조회 조건을 선택 하신 후, 조회해 주세요.");
            obj.set_autosizingtype("none");
            obj.set_selecttype("area");
            obj.set_font("12px/normal \"Arial\",\"맑은고딕\"");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"28\"/><Column size=\"106\"/><Column size=\"195\"/><Column size=\"102\"/><Column size=\"162\"/><Column size=\"195\"/><Column size=\"90\"/><Column size=\"121\"/><Column size=\"158\"/><Column size=\"255\"/><Column size=\"59\"/><Column size=\"82\"/><Column size=\"89\"/><Column size=\"69\"/><Column size=\"92\"/><Column size=\"99\"/><Column size=\"133\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"사업장 ID\"/><Cell col=\"2\" text=\"사업장 명\"/><Cell col=\"3\" text=\"상품 ID\"/><Cell col=\"4\" text=\"상품명\"/><Cell col=\"5\" text=\"대표규격\"/><Cell col=\"6\" text=\"제조사번호\"/><Cell col=\"7\" text=\"제조원\"/><Cell col=\"8\" text=\"상품분류코드\"/><Cell col=\"9\" text=\"카테고리\"/><Cell col=\"10\" text=\"결재순번\"/><Cell col=\"11\" text=\"결재자ID\"/><Cell col=\"12\" text=\"결재자명\"/><Cell col=\"13\" text=\"최초/최종\"/><Cell col=\"14\" text=\"최종변경자ID\"/><Cell col=\"15\" text=\"최종변경자 명\"/><Cell col=\"16\" text=\"최종변경일시\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"expr:String(ID_CHK1).valueOf() == String(ID_CHK2).valueOf() ? &quot;none&quot; : &quot;checkboxcontrol&quot;\" edittype=\"expr:String(ID_CHK1).valueOf() == String(ID_CHK2).valueOf() ? &quot;none&quot; : &quot;checkbox&quot;\"/><Cell col=\"1\" text=\"bind:BZPLC_ID\"/><Cell col=\"2\" text=\"bind:BZPLC_NM\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PRD_ID_VIEW\" displaytype=\"text\" textAlign=\"center\" color=\"blue\" textDecoration=\"underline\"/><Cell col=\"4\" text=\"bind:PRD_NM\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:PRVL\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:MNFR_NO\"/><Cell col=\"7\" text=\"bind:MNFR_NM\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:MRO_PRD_CLCD\"/><Cell col=\"9\" text=\"bind:CATG\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:APRV_SEQ\"/><Cell col=\"11\" text=\"bind:APRVR_ID\"/><Cell col=\"12\" text=\"bind:APRVR_NM\"/><Cell col=\"13\" text=\"bind:APRVL_PST_CD\" combodisplaynulltype=\"none\" combodataset=\"ds_aprvlPstCd\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\" displaytype=\"combotext\"/><Cell col=\"14\" text=\"bind:UPDPSN_ID\" displaytype=\"normal\"/><Cell col=\"15\" text=\"bind:UPDPSN\" displaytype=\"normal\"/><Cell col=\"16\" text=\"bind:UPD_DTM\" edittype=\"none\" calendardisplaynulltype=\"none\" maskedittype=\"string\" maskeditformat=\"yyyy-MM-dd hh:mm:ss\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutClear",null,"116","110","28","cbo_page:4",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelReg",null,"116","87","28","625",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("일괄등록");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cbo_page","value","ds_search","ROW_COUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.edt_bzplcId","value","ds_search","eBZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.edt_prdId","value","ds_search","ePRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.edt_acctId","value","ds_search","eACCT_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MF_14.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_MF_14.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_MF_14.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_MF_14.xfdl", function() {
        /*******************************************************
          PROJECT NAME : SSP-BO
          CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.preSelectRowPosition = 0;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//공통코드 조회
        	this.fn_commonCodeSearch();

        	//검색 영역 최소size 적용
        	this.Div00.set_height(this.Div00.uMinSize);
        	this.resetScroll();

        	this.copyPaste.addGrid(this.grd_mainList);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        	//공통코드 조회
        	this.fn_commonCodeSearch = function(){
        		this.ds_comCodeSearch.setColumn(0, "codeList", "APRVL_PST_CD");
        		this.ds_comCodeSearch.setColumn(0, "langCd", "KO");
        		var sSvcId = "commonCodeSearch";
        		var sUrl = "/co/select-common-code-list.do";
        		var inDs = "ds_search=ds_comCodeSearch";
        		var outDs = "ds_aprvlPstCd=ds_output1";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}

        	//조회
        	this.fn_search = function()	{
        		var sSvcId = "selectCustGrdList";
        		var sUrl = "/bgt/prd/aprvl/select-cust-bgt-prd-aprvl.do";
        		var inDs = "ds_search=ds_search";
        		var outDs = "ds_list=ds_output1";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_received");
        	};

        	// 삭제
        	this.fn_delete = function() {
        		var sSvcId = "delete";
        		var sUrl = "/bgt/prd/aprvl/delete-cust-bgt-prd-aprvl.do";
        		var inDs = "ds_save=ds_listOut";
        		var outDs = "";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        	this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        		if(svcID == "delete"){
        			// 삭제 트랜잭션 콜백
        			if(errorCode == -1 || errorCode == -100){
        				//alert(this.fn_getMessageOnServer(errorMsg));
        			}else{
        				//alert("삭제되었습니다.");
        				alert(this.fn_getMessage("ERRC000047"));

        				this.Div01.form.div_paging.uPage = 1;
        				this.ds_search.setColumn(0, "START_NUM", 0);
        				this.fn_search();
        			}
        		}
        	}

        	this.fn_callBackForSearch = function(){
        		this.fn_search();
        	}

        	//조회 트랜잭션 콜백함수
        	this.fn_received = function(svcID, errorCode, errorMsg)	{
        		if( this.ds_list.rowcount == 0 ) {
        			this.grd_mainList.set_nodatatext("조회 결과가 없습니다.");
        		}

        		this.totalCount = 0;
        		if(this.ds_list.getRowCount() > 0) {
        			this.totalCount = this.ds_list.getColumn(0,"TOT_CUNT");
        		}

        		//paging 처리
        		this.Div01.form.div_paging.form.cfn_createPage(this.Div01.form.div_paging, this.totalCount, this.cbo_page.value, "fn_pageCallback");
        	}

        	this.fn_pageCallback = function(sFlag){
        		var oPaging = this.Div01.form.div_paging;
        		if(sFlag){
        			this.ds_search.setColumn(0,"START_NUM",oPaging.uPageNum);
        			this.ds_search.setColumn(0,"ROW_COUNT",this.cbo_page.value);
        			this.fn_search();
        		}

        		var sTotText = "(<b v='true'>총 "+ this.gfn_appendComma(oPaging.uTotCount)+"건 </b><fc v='red'>"+ oPaging.uPage +"</fc> / "+ oPaging.uPageCnt +")";
        		this.sta_totCount.set_text(sTotText);
        	};

        	this.fn_sortCallback = function(sGridId){
        		var oGrid=null;
        		if(sGridId == "grd_mainList"){
        			oSortInfo = this.grd_mainList.uaSortInfo;
        			this.ds_search.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
        			this.ds_search.setColumn(0,"SORT_TYPE",oSortInfo.status);
        			this.fn_search();
        		}
        	}

        	// 멀티팝업버튼 클릭 콜백
        	this.fn_popupCallback = function(sPopupId, sRetValue){
        		switch(sPopupId){
        			case "btn_bzpMulti":
        				const cmpObj = JSON.parse(sRetValue);

        				var sIdList = "";
        				var sNmList = "";
        				for(var i=0; i<cmpObj.length; i++){
        					var rowData = JSON.parse(cmpObj[i]);
        					sIdList += rowData.BZPLC_ID +",";
        				}
        				this.ds_search.setColumn(0,"BZPLC_ID", cmpObj.length);
        				this.Div00.form.edt_bzplcId.set_value(sIdList.replace(/,\s*$/, ""));
        				break;

        			case "btn_acctMulti":
        				const acctObj = JSON.parse(sRetValue);

        				var sIdList = "";
        				var sNmList = "";
        				for(var i=0; i<acctObj.length; i++){
        					var rowData = JSON.parse(acctObj[i]);
        					sIdList += rowData.MBR_ID +",";
        				}
        				this.ds_search.setColumn(0,"ACCT_ID", acctObj.length);
        				this.Div00.form.edt_acctId.set_value(sIdList.replace(/,\s*$/, ""));
        				break;

        			case "btn_prdMulti":
        				const prdObj = JSON.parse(sRetValue);

        				var sIdList = "";
        				for(var i=0; i<prdObj.length; i++){
        					var rowData = JSON.parse(prdObj[i]);
        					//var rowData = prdObj[i];
        					sIdList += rowData.PRD_ID_VIEW +",";
        				}
        				this.ds_search.setColumn(0,"PRD_ID", prdObj.length);
        				this.Div00.form.edt_prdId.set_value(sIdList.replace(/,\s*$/, ""));

        				break;

        			case "SSP_BO_MF_14;BZPLC_ID":
        				var resData = JSON.parse(sRetValue);
        				var rtnData = "";
        				var sIdList = "";
        				for(var i = 0; i < resData.length; i++) {
        					rtnData = JSON.parse(resData[i]);
        					sIdList += rtnData.VALUE +",";
        				}
        				this.Div00.form.edt_bzplcId.set_value(sIdList);
        				this.fn_setMSearch(this.name,"BZPLC_ID",sIdList);
        				break;

        			case "SSP_BO_MF_14;PRD_ID":
        				var resData = JSON.parse(sRetValue);
        				var rtnData = "";
        				var sIdList = "";
        				for(var i = 0; i < resData.length; i++) {
        					rtnData = JSON.parse(resData[i]);
        					sIdList += rtnData.VALUE +",";
        				}
        				this.Div00.form.edt_prdId.set_value(sIdList);
        				this.fn_setMSearch(this.name,"PRD_ID",sIdList);
        				break;

        			case "SSP_BO_MF_14;ACCT_ID":
        				var resData = JSON.parse(sRetValue);
        				var rtnData = "";
        				var sIdList = "";
        				for(var i = 0; i < resData.length; i++) {
        					rtnData = JSON.parse(resData[i]);
        					sIdList += rtnData.VALUE +",";
        				}
        				this.Div00.form.edt_acctId.set_value(sIdList);
        				this.fn_setMSearch(this.name,"ACCT_ID",sIdList);
        				break;
        		}
        	}

        	// 팝업 콜백
        	this.fn_detailPopupCallback = function(sPopupId, sRetValue){
        		this.fn_search();
        	}

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        	//화면 설정 함수
        	this.cfn_formInit = function(){
        		//search div 초기 설정
        		this.Div00.uMinSize = 97;
        		this.Div00.uMaxSize = 157;

        		//grid 초기 설정
        		this.grd_mainList.uSortFlag = "false";
        		this.grd_mainList.uServerSortFlag = "true";
        		this.grd_mainList.uSortCallback = "fn_sortCallback";
        		this.grd_mainList.uCellSizeType = "true";

        		//페이징 초기 설정
        		this.Div01.form.div_paging.uPage = 1;
        		this.Div01.form.div_paging.uPageNum = 0;
        		this.Div01.form.div_paging.uPageRowCnt = 10;
        		this.Div01.form.div_paging.uPageCnt = 0;
        		this.Div01.form.div_paging.uTotCount = 0;

        		//grid 개인화(전제조건 : grid Head가 무조건 1Row인 경우)
        		this.uGridList = "grd_mainList";
        		this.grd_mainList.uRightMouse = "true";
        		this.grd_mainList.uPersonalFlag = "true";
        		this.grd_mainList.uDefaultFormat = "CHK,BZPLC_ID,BZPLC_NM,PRD_ID_VIEW,PRD_NM,PRVL,MNFR_NM,CATG,APRV_SEQ,APRVR_ID,APRVR_NM,APRVL_PST_CD,UPDPSN_ID,UPDPSN,UPD_DTM";
        	}

        	this.cfn_personalPopupClose = function(sRet){
        		this.grd_mainList.set_formats(sRet);
        		this.pdiv_personal.closePopup();
        	};

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        	// 체크박스 전체클릭시 중복된 체크해제
        	this.fn_setUnCheck = function(){
        		for(var i=0; i<this.ds_list.rowcount; i++){
        			if(this.ds_list.getColumn(i, "CHK") == 1){
        				var chk1 = this.ds_list.getColumn(i, "ID_CHK1");
        				var chk2 = this.ds_list.getColumn(i, "ID_CHK2");

        				if(chk1 == chk2){
        					this.ds_list.setColumn(i, "CHK", 0);
        				}
        			}
        		}
        	}

        	// 엑셀다운로드
        	this.fn_excelDownload = function(objId, ret) {
        		var answr = ret.split("||||");

        		if(this.gfn_isNull(answr)) { return; }
        		this.ofn_exportExcel({form:this, grid:this.grd_mainList, fileName:"상품 결재선 관리", password: answr[0], downRsn: answr[1], dbWrk: "DOWNLOAD", pgmId: "SSP_BO_MF_14"});

        	}
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        	//조회 버튼 click  이벤트
        	this.btn_search_onclick = function(obj,e)
        	{
        		// 화면ID set
        		this.ds_search.setColumn(0,"INQ_COND_DTLS", this.name);

        		var bzplcStr = this.Div00.form.edt_bzplcId.value;
        		var prdStr = this.Div00.form.edt_prdId.value;
        		var acctStr = this.Div00.form.edt_acctId.value;

        		// edt 입력 기준으로 조회조건 다시 세팅
        		if(bzplcStr!="" && bzplcStr!=null){
        			this.fn_setMSearch(this.name,"BZPLC_ID",bzplcStr);
        		}else{
        			this.ds_search.setColumn(0, "BZPLC_ID", null);
        		}

        		if(prdStr!="" && prdStr!=null){
        			this.fn_setMSearch(this.name,"PRD_ID",prdStr);
        		}else{
        			this.ds_search.setColumn(0, "PRD_ID", null);
        		}

        		if(acctStr!="" && acctStr!=null){
        			this.fn_setMSearch(this.name,"ACCT_ID",acctStr);
        		}else{
        			this.ds_search.setColumn(0, "ACCT_ID", null);
        		}

        		this.Div01.form.div_paging.uPage = 1;
        		this.ds_search.setColumn(0, "START_NUM", 0);

        		// 조회
        		if(this.ds_select.getRowCount() <= 0 ){
        			this.fn_search();
        		}
        		else{
        			this.fn_insertSelectedData("fn_callBackForSearch");
        		}
        	};

        	// 초기화 버튼
        	this.btn_reset_onclick = function(obj,e)
        	{
        		this.ds_search.setColumn(0, "BZPLC_ID", "");
        		this.ds_search.setColumn(0, "PRD_ID", "");
        		this.ds_search.setColumn(0, "ACCT_ID", "");
        		this.ds_search.setColumn(0, "eBZPLC_ID", "");
        		this.ds_search.setColumn(0, "ePRD_ID", "");
        		this.ds_search.setColumn(0, "eACCT_ID", "");
        	};

        	this.Button00_onclick = function(obj,e)
        	{
        		trace("Quick Frame ===>"+this.fv_oApp.agv_QuickFrame.getOffsetWidth() + " : " +  this.fv_oApp.agv_QuickFrame.getOffsetHeight());
        		trace("Left Frame ===>"+this.fv_oApp.agv_LeftFrame.getOffsetWidth() + " : " +  this.fv_oApp.agv_LeftFrame.getOffsetHeight());
        		trace("Main Frame ===>"+this.fv_oApp.agv_MainFrame.getOffsetWidth() + " : " +  this.fv_oApp.agv_MainFrame.getOffsetHeight());
        		trace("Mdi Frame ===>"+this.fv_oApp.agv_MdiFrame.getOffsetWidth() + " : " +  this.fv_oApp.agv_MdiFrame.getOffsetHeight());
        		trace("Work Frame Set===>"+this.fv_oApp.agv_WorkFrameSet.getOffsetWidth() + " : " +  this.fv_oApp.agv_WorkFrameSet.getOffsetHeight());
        	};

        	// 멀티 회원설정 팝업
        	this.multiPopOpen_onclick = function(obj,e)
        	{
        		var oArg = {
        			coCd : '1000'
        			//, bzplcId : this.Div00.form.edt_bzplcId.value
        			//, prdId : this.Div00.form.edt_prdId
        			//, acctId : this.Div00.form.edt_acctId
        		};
        		var oOption = {};

        		if(e.fromobject.id == 'btn_bzpMulti'){
        			oArg.bzplcId = this.Div00.form.edt_bzplcId.value;
        			oOption.title = '사업장 조회';
        			this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_14.xfdl", oArg, "fn_popupCallback", oOption);
        		}
        		if(e.fromobject.id == 'btn_prdMulti'){
        			oArg.prdId = this.Div00.form.edt_prdId.value;
        			oOption.title = '상품 조회';
        			this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_16.xfdl", oArg, "fn_popupCallback", oOption);
        		}
        		if(e.fromobject.id == 'btn_acctMulti'){
        			oArg.acctId = this.Div00.form.edt_acctId.value;
        			oOption.title = '결재자 조회';
        			this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_25.xfdl", oArg, "fn_popupCallback", oOption);
        		}
        	};

        	// 멀티텍스트 팝업
        	this.multipleTextBtn_onclick = function(obj,e)
        	{
        		if(e.fromobject.id == 'btn_bzpMultiText'){
        			//사업장
        			this.fn_showTareaInput(this.name,"BZPLC_ID",this.Div00.form.edt_bzplcId.value, "fn_popupCallback",120,300);
        		}
        		if(e.fromobject.id == 'btn_prdMultiText'){
        			//상품
        			this.fn_showTareaInput(this.name,"PRD_ID",this.Div00.form.edt_prdId.value, "fn_popupCallback",160,300);
        		}
        		if(e.fromobject.id == 'btn_acctMultiText'){
        			//결재자
        			this.fn_showTareaInput(this.name,"ACCT_ID",this.Div00.form.edt_acctId.value, "fn_popupCallback",160,300);
        		}
        	};

        	// 그리드 상세보기 버튼 클릭
        	this.Div01_grd_mainList_oncellclick = function(obj,e)
        	{
        		this.columnRow = e.row;
        		this.columnId = this.getBindColumnIDByIndex(obj, e.cell); // 클릭한 그리드 칼럼의 ID
        		if(this.columnId == "PRD_ID_VIEW"){
        			var params = {
        				popMode : "update"
        				, coCd : this.ds_list.getColumn(this.columnRow,"CO_CD")
        				, bzplcId : this.ds_list.getColumn(this.columnRow,"BZPLC_ID")
        				, bzplcNm : this.ds_list.getColumn(this.columnRow,"BZPLC_NM")
        				, aprvlSprCd : this.ds_list.getColumn(this.columnRow,"APRVL_SPR_CD")
        				, aprvlSetSSeq : this.ds_list.getColumn(this.columnRow,"APRVL_SET_SEQ")
        				, prdIdView : this.ds_list.getColumn(this.columnRow,"PRD_ID_VIEW")
        				, prdId : this.ds_list.getColumn(this.columnRow,"PRD_ID")
        				, prdNm : this.ds_list.getColumn(this.columnRow,"PRD_NM")
        				, prvl : this.ds_list.getColumn(this.columnRow,"PRVL")
        				, mnfrNm : this.ds_list.getColumn(this.columnRow,"MNFR_NM")
        				, catg : this.ds_list.getColumn(this.columnRow,"CATG")
        				, orgplcCtryCd : this.ds_list.getColumn(this.columnRow,"ORGPLC_CTRY_CD")
        			};
        			var options = {};
        			options.title = "상품결재선 관리 상세/수정";
        			this.gfn_openPopup(e.fromobject.id, "CC::SSP_BO_MF_15.xfdl", params,  "fn_detailPopupCallback", options);
        		}
        	};

        	this.btn_reg_onclick = function(obj,e)
        	{
        		var params = {popMode : "insert"}
        		var options = {};
        		options.title = "상품결재선 생성";
        		this.gfn_openPopup(e.fromobject.id, "CC::SSP_BO_MF_15.xfdl", params,  "fn_detailPopupCallback", options);
        	};

        	// 복사버튼
        	this.btn_copy_onclick = function(obj,e)
        	{
        		this.fn_setUnCheck();

        		var chkStr = this.ds_list.getCaseCount("CHK>0");
        		if(chkStr < 1){
        			alert(this.fn_getMessage("ERRC000050", "항목")); // 선택된 항목이 없습니다.
        			return;
        		}else if(chkStr > 1){
        			alert(this.fn_getMessage("ERRC000094")); // 하나의 항목만 선택하세요.
        			return;
        		}

        		for(var i=0; i<this.ds_list.rowcount; i++){
        			if(this.ds_list.getColumn(i, "CHK") == 1){
        				var params = {
        				popMode : "copy"
        				, coCd : this.ds_list.getColumn(i,"CO_CD")
        				, bzplcId : this.ds_list.getColumn(i,"BZPLC_ID")
        				, bzplcNm : this.ds_list.getColumn(i,"BZPLC_NM")
        				, aprvlSprCd : this.ds_list.getColumn(i,"APRVL_SPR_CD")
        				, aprvlSetSSeq : this.ds_list.getColumn(i,"APRVL_SET_SEQ")
        				, prdId : this.ds_list.getColumn(i,"PRD_ID")
        				, prdNm : this.ds_list.getColumn(i,"PRD_NM")
        				, prvl : this.ds_list.getColumn(i,"PRVL")
        				, mnfrNm : this.ds_list.getColumn(i,"MNFR_NM")
        				, catg : this.ds_list.getColumn(i,"CATG")
        				, orgplcCtryCd : this.ds_list.getColumn(i,"ORGPLC_CTRY_CD")
        			};
        			var options = {};
        			options.title = "상품결재선 관리 복사";
        			this.gfn_openPopup(e.fromobject.id, "CC::SSP_BO_MF_15.xfdl", params,  "fn_detailPopupCallback", options);

        			}
        		}
        	};

        	this.btn_delete_onclick = function(obj,e)
        	{
        		this.fn_setUnCheck();

        		var chkStr = this.ds_list.getCaseCount("CHK>0");
        		if(chkStr < 1){
        			alert(this.fn_getMessage("ERRC000050", "항목")); // 선택된 항목이 없습니다.
        			return;
        		}

        		if(!this.confirm(this.fn_getMessage("ERRC000023"))){
        			// 기 등록된 결재선 전체가 삭제됩니다. 삭제하시겠습니까?
        			return;
        		}

        		this.ds_listOut.clearData();
        		for(var i=0; i<this.ds_list.rowcount; i++){
        			if(this.ds_list.getColumn(i, "CHK") == 1){
        				var row = this.ds_listOut.addRow();
        				this.ds_listOut.copyRow(row, this.ds_list, i);
        			}
        		}

        		this.fn_delete();
        	};

        	this.cbo_page_onitemchanged = function(obj,e)
        	{
        		this.fn_search();
        	};

        	// 엑셀다운로드
        	this.Button01_onclick = function(obj,e)
        	{
        		this.gfn_openPopup("excelDownPopup", "CO_POP::excelDownPopup.xfdl", null, "fn_excelDownload");
        	};

        	// 레이아웃 저장
        	this.btn_layoutSave_onclick = function(obj,e)
        	{
        		this.gfn_personalSave("grd_mainList", this.grd_mainList.getCurFormatString());
        	};

        	// 레이아웃 초기화
        	this.btn_layoutClear_onclick = function(obj,e)
        	{
        		//suOrgFormat
        		this.gfn_personalSave("grd_mainList", this.grd_mainList.uOrgFormat);
        		this.grd_mainList.set_formats(this.grd_mainList.uOrgFormat);
        	};

        	// 일괄등록 버튼, 박재광 20220722
        	this.btn_allInput_onclick = function(obj,e)
        	{
        		var param = {pgmId : "SSP_BO_MF_14"};
        		var options = {};
        		options.title = "상품결재선 일괄등록";
        		this.gfn_openPopup("SSP_BO_PP_34", "CO_POP::SSP_BO_PP_34.xfdl", param, "fn_callBackForSearch", options);
        	};

        	this.SSP_BO_MF_14_onkeyup = function(obj,e)
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
            this.addEventHandler("onkeyup",this.SSP_BO_MF_14_onkeyup,this);
            this.Div00.form.Static02.addEventHandler("onclick",this.Div00_Static02_onclick,this);
            this.Div00.form.btn_bzpMulti.addEventHandler("onclick",this.multiPopOpen_onclick,this);
            this.Div00.form.btn_bzpMultiText.addEventHandler("onclick",this.multipleTextBtn_onclick,this);
            this.Div00.form.btn_prdMulti.addEventHandler("onclick",this.multiPopOpen_onclick,this);
            this.Div00.form.btn_prdMultiText.addEventHandler("onclick",this.multipleTextBtn_onclick,this);
            this.Div00.form.btn_acctMulti.addEventHandler("onclick",this.multiPopOpen_onclick,this);
            this.Div00.form.btn_acctMultiText.addEventHandler("onclick",this.multipleTextBtn_onclick,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div00.form.btn_reset.addEventHandler("onclick",this.btn_reset_onclick,this);
            this.cbo_page.addEventHandler("onitemchanged",this.cbo_page_onitemchanged,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.btn_copy.addEventHandler("onclick",this.btn_copy_onclick,this);
            this.btn_reg.addEventHandler("onclick",this.btn_reg_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.grd_mainList.addEventHandler("onselectchanged",this.fn_editChg,this);
            this.grd_mainList.addEventHandler("oncellclick",this.Div01_grd_mainList_oncellclick,this);
            this.btn_layoutClear.addEventHandler("onclick",this.btn_layoutClear_onclick,this);
            this.btn_excelReg.addEventHandler("onclick",this.btn_allInput_onclick,this);
            this.ds_list.addEventHandler("oncolumnchanged",this.ds_custIddt_oncolumnchanged,this);
            this.ds_listOut.addEventHandler("oncolumnchanged",this.ds_custIddt_oncolumnchanged,this);
        };
        this.loadIncludeScript("SSP_BO_MF_14.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
