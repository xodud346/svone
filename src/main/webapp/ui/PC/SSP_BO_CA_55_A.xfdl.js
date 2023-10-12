(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("intlLwstList");
            this.set_titletext("내부최저판매가 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1340,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ePRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_YM\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">20</Col><Col id=\"USE_YN\">Y</Col><Col id=\"PRD_STD_YN\"/><Col id=\"PRD_ID\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_intlLwst", this);
            obj._setContents("<ColumnInfo><Column id=\"ADJ_YM\" type=\"string\" size=\"32\"/><Column id=\"PRD_ID\" type=\"string\" size=\"32\"/><Column id=\"PRD_ID_NUM\" type=\"string\" size=\"32\"/><Column id=\"PRD_NM\" type=\"string\" size=\"32\"/><Column id=\"INTL_LWST_SALSPRC\" type=\"bigdecimal\" size=\"16\"/><Column id=\"BZPLC_ID\" type=\"string\" size=\"32\"/><Column id=\"BZPLC_NM\" type=\"undefined\" size=\"0\"/><Column id=\"UPDPSN_ID\" type=\"string\" size=\"32\"/><Column id=\"REG_RSN\" type=\"string\" size=\"32\"/><Column id=\"UPD_DTM\" type=\"datetime\" size=\"17\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_page", this);
            obj._setContents("<ColumnInfo><Column id=\"COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COUNT\">10</Col></Row><Row><Col id=\"COUNT\">20</Col></Row><Row><Col id=\"COUNT\">30</Col></Row><Row><Col id=\"COUNT\">40</Col></Row><Row><Col id=\"COUNT\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","65",null,"715","4",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_dlvplcList","20","60",null,"580","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_intlLwst");
            obj.set_autoenter("select");
            obj.set_nodatatext("조회 조건을 선택 하신 후, 조회해 주세요.");
            obj.set_autosizingtype("col");
            obj.set_autosizebandtype("allband");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"55\"/><Column size=\"80\"/><Column size=\"270\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"350\"/><Column size=\"140\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"정산월\" autosizecol=\"limitmin\"/><Cell col=\"1\" text=\"상품ID\" autosizecol=\"limitmin\"/><Cell col=\"2\" text=\"상품명\" autosizecol=\"limitmin\"/><Cell col=\"3\" text=\"내부최저판매가\" autosizecol=\"limitmin\"/><Cell col=\"4\" text=\"최저판매가사업장ID\" autosizecol=\"limitmin\"/><Cell col=\"5\" text=\"최저판매가사업장명\" autosizecol=\"limitmin\"/><Cell col=\"6\" text=\"등록변경담당자ID\" autosizecol=\"limitmin\"/><Cell col=\"7\" text=\"등록변경담당자\" autosizecol=\"limitmin\"/><Cell col=\"8\" text=\"등록변경사유\" autosizecol=\"limitmin\"/><Cell col=\"9\" text=\"등록변경일\" autosizecol=\"limitmin\"/></Band><Band id=\"body\"><Cell text=\"bind:ADJ_YM\" calendardateformat=\"yyyy-MM\" displaytype=\"date\" autosizecol=\"limitmin\"/><Cell col=\"1\" text=\"bind:PRD_ID_NUM\" displaytype=\"text\" autosizecol=\"limitmin\"/><Cell col=\"2\" text=\"bind:PRD_NM\" textAlign=\"left\" autosizecol=\"limitmin\"/><Cell col=\"3\" text=\"bind:INTL_LWST_SALSPRC\" autosizecol=\"limitmin\"/><Cell col=\"4\" text=\"bind:BZPLC_ID\" displaytype=\"text\" autosizecol=\"limitmin\"/><Cell col=\"5\" text=\"bind:BZPLC_NM\" autosizecol=\"limitmin\"/><Cell col=\"6\" text=\"bind:UPDPSN_ID\" autosizecol=\"limitmin\"/><Cell col=\"7\" text=\"bind:UPDPSN_NM\" autosizecol=\"limitmin\"/><Cell col=\"8\" text=\"bind:REG_RSN\" textAlign=\"left\" autosizecol=\"limitmin\"/><Cell col=\"9\" text=\"bind:UPD_DTM\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"expr:UPD_DTM!=undefined?&apos;date&apos;:&apos;&apos;\" calendardisplayinvalidtype=\"none\" calendardisplaynulltype=\"none\" autosizecol=\"limitmin\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_viewCount",null,"25","104","28","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_type("dropdown");
            var Div00_form_cmb_viewCount_innerdataset = new nexacro.NormalDataset("Div00_form_cmb_viewCount_innerdataset", obj);
            Div00_form_cmb_viewCount_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20개씩</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50개씩</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100개씩</Col></Row><Row><Col id=\"codecolumn\">500</Col><Col id=\"datacolumn\">500개씩</Col></Row><Row><Col id=\"codecolumn\">1000</Col><Col id=\"datacolumn\">1,000개씩</Col></Row><Row><Col id=\"codecolumn\">5000</Col><Col id=\"datacolumn\">5,000개씩</Col></Row><Row><Col id=\"codecolumn\">10000</Col><Col id=\"datacolumn\">10,000개씩</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_cmb_viewCount_innerdataset);
            obj.set_text("1,000개씩");
            obj.set_value("1000");
            obj.set_index("4");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button62_00",null,"25","110","28","cmb_viewCount:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("대용량다운로드");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01",null,"25","110","28","Button62_00:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_insert",null,"25","69","28","Button01:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("일괄등록");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20","25","300","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("(총 0건, 1 / 0)");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("div_paging","7","grd_dlvplcList:5",null,"38","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00","0","15",null,"75","24",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색 영역");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","40","0",null,"32","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02","20","0","130","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("정산월");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Calendar("cal_srchDt","159","4","140","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static04","562","0","130","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("3");
            obj.set_text("상품ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button58",null,"38","60","26","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("5");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_select");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("btn_init",null,"38","65","26","Button58:4",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("4");
            obj.set_text("초기화");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","700","4","174","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("9");
            obj.set_readonly("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm","edt_prdId:4","4","151","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("btn_prdIdMultiPopup","edt_prdNm:4","4","24","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_multi");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("btn_prdIdMultiInput","btn_prdIdMultiPopup:4","4","24","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_document");
            this.Div00_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1340,750,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item4","Div00_00.form.cal_srchDt","value","ds_search","ADJ_YM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div00_00.form.edt_prdNm","value","ds_search","PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00_00.form.edt_prdId","value","ds_search","ePRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CA_55_A.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_CA_55_A.xfdl", function() {
        /*******************************************************
          PROJECT NAME : 상품군계획매익률
          CREATION DATES : 2022.01.25
        *******************************************************/
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

        	if(typeof(this.parent.parent.parent.tabPage) == "function"){
        		this.parent.parent.parent.tabPage();
        	}

        	//단축키 함수 호출
        	this.fn_regShortCutMethod();
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_doSearch = function(page)
        {
        	 var sSvcId = "selectIntlLwstList";
             var sUrl = "/pc/intlLwst/selectIntlLwstList.do";
        	 var inDs = "ds_search=ds_search"
             var outDs = "ds_intlLwst=ds_output";
             var arg;
             var callback = "fn_received";

        	 // 조회버튼 클릭시 페이징 초기화 시킨다.
        	 if( page == 0 ) {
        		this.Div00.form.div_paging.uPage=1;
        		this.Div00.form.div_paging.uPageNum=0;
        		this.ds_search.setColumn(0,"START_NUM", 0);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.Div00.form.cmb_viewCount.value);
        	 }

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        };

        //대용량다운로드
        this.fn_largeFileDown = function (){
        	var sSvcId = "largeFileDown";
        	var sUrl = "/pc/pc-xlsx-down/excel-intl-lwst.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/

        //조회 트랜잭션 콜백함수
        this.fn_received = function(svcID, errorCode, errorMsg)	{

        	switch(svcID)
        	{
        		case 'selectDetrInfoList' :
        		break;
        		case 'selectIntlLwstList' :

        			if( this.ds_intlLwst.rowcount == 0 ) {
        				this.Div00.form.grd_dlvplcList.set_nodatatext('조회 결과가 없습니다.');
        			}
        		break;

        		case "commonCodeSearch":

        		    this.ds_inqPerdSpr.insertRow(0);
        			this.ds_inqPerdSpr.setColumn(0,"COM_DTL_CD","");
        			this.ds_inqPerdSpr.setColumn(0,"COM_DTL_CD_NM","전체");
        			this.Div00_00.form.cbo_inqPerdSpr.set_value("");
        			break;

        		default :
        		break;
        	}

        	//paging 처리
        	this.Div00.form.div_paging.form.cfn_createPage(this.Div00.form.div_paging, this.totalCount, this.Div00.form.cmb_viewCount.value, "fn_pageCallback");
        }

        //페이징 콜백
        this.fn_pageCallback = function(sFlag){

        	var oPaging = this.Div00.form.div_paging;

        	if(sFlag){
        		this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.Div00.form.cmb_viewCount.value);
        		this.fn_doSearch(3);
        	}

        	var sTotText = "(총 "+ this.fn_AmountCommas(this.totalCount)+"건, "+ this.fn_AmountCommas(oPaging.uPage) +" / "+ this.fn_AmountCommas(oPaging.uPageCnt) +")";
        	this.Div00.form.totalPageCount.set_text(sTotText);
        }

        //정렬콜백
        this.fn_sortCallback = function(sGridId){

        	var oGrid = null;
        	if(sGridId == "grd_dlvplcList"){
        		oSortInfo = this.Div00.form.grd_dlvplcList.uaSortInfo;
        		this.ds_search.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
        		this.ds_search.setColumn(0,"SORT_TYPE",oSortInfo.status);
        		this.fn_doSearch(0);
        	}
        };

        this.fn_callBackForSearch = function(){
        	this.fn_doSearch(0);
        }
        this.fn_callBackForLargeFileDown = function(){
        	this.fn_largeFileDown();
        }


        // 멀티팝업버튼 클릭 콜백
        this.fn_popupCallback = function(sPopupId, args){

        	switch(sPopupId) {
        		case "btn_prdIdMultiPopup" :
        			var jsonData = JSON.parse(args);
        			var prdStr = "";
        			var prdNm = "";
        			if(jsonData.length > 0){
        				for(var i = 0; i<jsonData.length; i++){
        					var rtnData = JSON.parse(jsonData[i]);
        					prdStr += rtnData.PRD_ID_VIEW + ",";
        					prdNm += rtnData.PRD_NM + ",";
        				}

        				this.Div00_00.form.edt_prdId.set_value(prdStr.substring(0, prdStr.length-1));
        				this.Div00_00.form.edt_prdNm.set_value(prdNm.substring(0, prdNm.length-1));
        			}

        			break;


        		case "btn_prdIdMultiInput" :
        			var jsonData = JSON.parse(args);
        			this.Div00_00.form.edt_prdId.set_value(nexacro.trimRight(jsonData.textValue,','));
        			break;


        	}
        }



        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function()
        {
        	//grid 초기 설정
        	this.Div00.form.grd_dlvplcList.uSortFlag = "false";
        	this.Div00.form.grd_dlvplcList.uServerSortFlag = "true";
        	this.Div00.form.grd_dlvplcList.uSortCallback = "fn_sortCallback";
        	this.Div00.form.grd_dlvplcList.uCellSizeType = "true";

        	//페이징 초기 설정
        	this.Div00.form.div_paging.uPage = 1;
        	this.Div00.form.div_paging.uPageNum = 0;
        	this.Div00.form.div_paging.uPageRowCnt = this.Div00.form.cmb_viewCount.value;
        	this.Div00.form.div_paging.uPageCnt = 0;
        	this.Div00.form.div_paging.uTotCount = 0;
        }

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/

        this.fn_calDateOffset = function(currDate,offset){
        	var sReturn = "";

        	var sGb = offset.substr(0,1);
        	var sOffset = offset.substr(1,offset.length-1);

        	if(sGb == "W"){
        	    sReturn = this.gfn_addDate(currDate,sOffset*(-7)+1);
        	}else if(sGb == "M"){
        	    sReturn = this.gfn_addMonth(currDate,sOffset*(-1));
        	}else if(sGb == "Y"){
        	    sReturn = this.gfn_addMonth(currDate,sOffset*(-12));
        	}

        	return sReturn;
        }

        this.fn_AmountCommas = function(val){ //세자리마다',' 적용
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
        }

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodCtrlENTER("Div00_00_Button58_onclick");
        };


        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        this.Div00_00_Button58_onclick = function(obj,e)
        {
        	//this.fn_doSearch(1);
        	// 화면ID set
        	this.ds_search.setColumn(0,"INQ_COND_DTLS", this.name);

        	var prdIdStr = this.Div00_00.form.edt_prdId.value;
        	// edt 입력 기준으로 조회조건 다시 세팅
        	this.fn_setMSearch(this.name,"PRD_ID",prdIdStr);

        	// 조회
        	if(this.ds_select.getRowCount() <= 0 ){
        		this.fn_doSearch(0);
        	}
        	else{
        		this.fn_insertSelectedData("fn_callBackForSearch");
        	}


        };


        this.Div00_00_btn_init_onclick = function(obj,e)
        {
        	//카테고리
        	this.ds_search.setColumn(0,"ADJ_YM","");
        	this.ds_search.setColumn(0,"ePRD_ID","");
        	this.ds_search.setColumn(0,"PRD_NM","");

        };

        this.Div00_btn_insert_onclick = function(obj,e)
        {
        	var param = {pgmId : "SSP_BO_CA_55_02"}; //프로그램 ID ex) CO_SA_01
        	this.gfn_openPopup("SSP_BO_PP_34", "CO_POP::SSP_BO_PP_34.xfdl", param);
        };


        this.Div00_00_btn_prdIdMultiPopup_onclick = function(obj,e)
        {
        	var params = {coCd:this.fv_coCd};
            var options = {};
            this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_16.xfdl", params,  "fn_popupCallback", options);
        };

        this.Div00_00_btn_prdIdMultiInput_onclick = function(obj,e)
        {
        	var params = {textId: this.Div00_00.form.edt_prdId};
            var options = {};
            this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_13.xfdl", params,  "fn_popupCallback", options);
        };

        this.Div00_Button01_onclick = function(obj,e)
        {
        	if(this.ds_intlLwst.getRowCount() > 0){
        		this.ofn_exportExcel({form:this, grid:this.Div00.form.grd_dlvplcList, fileName:"내부최저판매가관리"});
        	}else{
        		alert(this.fn_getMessage("ERRS000202"));
        	}
        };

        this.Div01_Button62_00_onclick = function(obj,e)
        {
        	//var sReturn = this.confirm("다운로드 하시겠습니까?");
        	var sReturn = this.confirm(this.fn_getMessage("ERRP000202"));
        	if(sReturn == true){
        		//this.fn_search();

        		//this.fn_doSearch(1);
        		// 화면ID set
        		this.ds_search.setColumn(0,"INQ_COND_DTLS", this.name);

        		var prdIdStr = this.Div00_00.form.edt_prdId.value;
        		// edt 입력 기준으로 조회조건 다시 세팅
        		this.fn_setMSearch(this.name,"PRD_ID",prdIdStr);



        		// 조회
        		if(this.ds_select.getRowCount() <= 0 ){
        			this.fn_largeFileDown();
        		}
        		else{
        			this.fn_insertSelectedData("fn_callBackForLargeFileDown");
        		}
        	}



        };

        this.intlLwstList_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.intlLwstList_onkeyup,this);
            this.Div00.form.Button62_00.addEventHandler("onclick",this.Div01_Button62_00_onclick,this);
            this.Div00.form.Button01.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.Div00.form.btn_insert.addEventHandler("onclick",this.Div00_btn_insert_onclick,this);
            this.Div00.form.totalPageCount.addEventHandler("onclick",this.totalPageCount_onclick,this);
            this.Div00_00.form.Button58.addEventHandler("onclick",this.Div00_00_Button58_onclick,this);
            this.Div00_00.form.btn_init.addEventHandler("onclick",this.Div00_00_btn_init_onclick,this);
            this.Div00_00.form.btn_prdIdMultiPopup.addEventHandler("onclick",this.Div00_00_btn_prdIdMultiPopup_onclick,this);
            this.Div00_00.form.btn_prdIdMultiInput.addEventHandler("onclick",this.Div00_00_btn_prdIdMultiInput_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_CA_55_A.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
