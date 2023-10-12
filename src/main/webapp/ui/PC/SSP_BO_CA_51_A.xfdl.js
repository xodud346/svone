(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("dlvplcMngList");
            this.set_titletext("상품군계획매익율");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_STD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"codeList\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">20</Col><Col id=\"USE_YN\">Y</Col><Col id=\"PRD_STD_YN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_plnPrfrtList", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"USE_YN_NM\" type=\"string\" size=\"32\"/><Column id=\"PRD_CLCD\" type=\"string\" size=\"32\"/><Column id=\"PRD_CLCD_NM\" type=\"string\" size=\"32\"/><Column id=\"PRD_STD_YN\" type=\"string\" size=\"32\"/><Column id=\"PRD_STD_YN_NM\" type=\"string\" size=\"32\"/><Column id=\"PLN_PRFRT\" type=\"string\" size=\"16\"/><Column id=\"PLN_PRFRT_NM\" type=\"bigdecimal\" size=\"16\"/><Column id=\"REGPSN_ID\" type=\"string\" size=\"32\"/><Column id=\"REG_RSN\" type=\"string\" size=\"32\"/><Column id=\"REG_DTM\" type=\"string\" size=\"32\"/><Column id=\"UPD_DTM\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USE_YN\"/><Col id=\"USE_YN_NM\">전체</Col></Row><Row><Col id=\"USE_YN_NM\">사용</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"USE_YN\">N</Col><Col id=\"USE_YN_NM\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_page", this);
            obj._setContents("<ColumnInfo><Column id=\"COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COUNT\">10</Col></Row><Row><Col id=\"COUNT\">20</Col></Row><Row><Col id=\"COUNT\">30</Col></Row><Row><Col id=\"COUNT\">40</Col></Row><Row><Col id=\"COUNT\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_stdYn", this);
            obj._setContents("<ColumnInfo><Column id=\"STD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"STD_YN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"STD_YN\"/><Col id=\"STD_YN_NM\">전체</Col></Row><Row><Col id=\"STD_YN_NM\">표준</Col><Col id=\"STD_YN\">Y</Col></Row><Row><Col id=\"STD_YN\">N</Col><Col id=\"STD_YN_NM\">비표준</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inqPerdSpr", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","125",null,null,"4","46",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_dlvplcList","20","56",null,"450","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_plnPrfrtList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autosizingtype("col");
            obj.set_autosizebandtype("allband");
            obj.set_nodatatext("조회 조건을 선택 하신 후, 조회해 주세요.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"470\"/><Column size=\"101\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"338\"/><Column size=\"120\"/><Column size=\"98\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"사용상태\" autosizecol=\"limitmin\"/><Cell col=\"1\" text=\"SSP카테고리ID\" autosizecol=\"limitmin\"/><Cell col=\"2\" text=\"SSP카테고리\" autosizecol=\"limitmin\"/><Cell col=\"3\" text=\"계획매익율\" autosizecol=\"limitmin\"/><Cell col=\"4\" text=\"등록담당자ID\" autosizecol=\"limitmin\"/><Cell col=\"5\" text=\"등록담당자\" autosizecol=\"limitmin\"/><Cell col=\"6\" text=\"등록사유\" autosizecol=\"limitmin\"/><Cell col=\"7\" text=\"등록일\" autosizecol=\"limitmin\"/><Cell col=\"8\" text=\"변경이력\" autosizecol=\"limitmin\"/></Band><Band id=\"body\"><Cell text=\"bind:USE_YN_NM\" autosizecol=\"limitmin\"/><Cell col=\"1\" text=\"bind:PRD_CLCD\" autosizecol=\"limitmin\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:PRD_CLCD_NM\" autosizecol=\"limitmin\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PLN_PRFRT\" displaytype=\"mask\" autosizecol=\"limitmin\" maskeditformat=\"#,0.00\" maskeditpostfixtext=\"%\"/><Cell col=\"4\" text=\"bind:REGPSN_ID\" autosizecol=\"limitmin\"/><Cell col=\"5\" text=\"bind:OPRTR_NM\" autosizecol=\"limitmin\"/><Cell col=\"6\" text=\"bind:REG_RSN\" autosizecol=\"limitmin\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:REG_DTM\" autosizecol=\"limitmin\" displaytype=\"expr:REG_DTM!=undefined?&apos;date&apos;:&apos;&apos;\" calendardisplayinvalidtype=\"none\" calendardisplaynulltype=\"none\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"8\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"변경이력\" autosizecol=\"limitmin\"/></Band></Format></Formats>");
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

            obj = new Button("Button01",null,"25","110","28","cmb_viewCount:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_insert",null,"25","69","28","Button01:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("일괄등록");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20","35","300","14",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("(총 0건, 1 / 0)");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("div_paging","7","grd_dlvplcList:20",null,"38","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00","0","20",null,"115","24",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색 영역");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","40","0",null,"32","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static31","40","31",null,"32","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02","20","0","130","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_text("SSP카테고리");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static06","20","31","130","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("3");
            obj.set_text("등록일");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Calendar("cal_srchFrDt","159","35","140","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd ");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static59","303","36","9","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("5");
            obj.set_text("~");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Calendar("cal_srchToDt","316","35","140","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("cbo_inqPerdSpr","461","35","100","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_inqPerdSpr");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static04","882","0","130","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("8");
            obj.set_text("사용상태");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("cmb_useYn","1020","4","150","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_useYn");
            obj.set_datacolumn("USE_YN_NM");
            obj.set_codecolumn("USE_YN");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("edt_prdClcd","159","4","140","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("10");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("edt_prdClNm","304","4","140","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("btn_prdClcdPopup","449","4","24","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_search02");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("btn_init",null,"77","65","26","64",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("13");
            obj.set_text("초기화");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button58",null,"77","60","26","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("14");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_select");
            this.Div00_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,750,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","Div00_00.form.cmb_useYn","value","ds_search","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00_00.form.edt_prdClcd","value","ds_search","PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00_00.form.edt_prdClNm","value","ds_search","PRD_CLCD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00_00.form.cal_srchFrDt","value","ds_search","STR_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00_00.form.cal_srchToDt","value","ds_search","END_DTM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CA_51_A.xfdl","PC::pcUtils.xjs");
        this.addIncludeScript("SSP_BO_CA_51_A.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_CA_51_A.xfdl", function() {
        /*******************************************************
          PROJECT NAME : 상품군계획매익률
          CREATION DATES : 2022.01.25
        *******************************************************/
        this.executeIncludeScript("PC::pcUtils.xjs"); /*include "PC::pcUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.preSelectRowPosition = 0;
        this.searchPrdClsfNm = '';
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//공통코드 조회
        	this.fn_commonCodeSearch();
        	this.Div00_00.form.cbo_inqPerdSpr.set_value("2");
        	this.fn_pcDateChage(this.Div00_00.form.cal_srchFrDt,this.Div00_00.form.cal_srchToDt, this.Div00_00.form.cbo_inqPerdSpr);

        	if(typeof(this.parent.parent.parent.tabPage) == "function"){
        		this.parent.parent.parent.tabPage();
        	}

        	//단축키 함수 호출
        	this.fn_regShortCutMethod();

        	//조회함수
        	//this.fn_doSearch(0);
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_doSearch = function(page)
        {
        	 var sSvcId = "selectDetrInfoList";
             var sUrl = "/pc/plnPrfrt/selectPlnPrfrtList.do";
        	 var inDs = "ds_search=ds_search"
             var outDs = "ds_plnPrfrtList=ds_output";
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

        //공통코드조회
        this.fn_commonCodeSearch = function()
        {
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_inqPerdSpr=ds_output1";
        	var arg = "";
        	var callback = "fn_received";

        	this.ds_search.setColumn(0, "codeList", "INQ_PERD_SPR_CD");
        	this.ds_search.setColumn(0, "langCd", "KO");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        };

        //폼 엔터처리용
        this.fn_popupSearch = function (svcId, url){
        	var sSvcId = svcId;
        	var sUrl = url;
        	var inDs = "ds_search=ds_search";
        	var outDs = "";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_received");
        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        //조회 트랜잭션 콜백함수
        this.fn_received = function(svcID, errorCode, errorMsg)	{

        // 	this.preSelectRowPosition = 0;
        //
        // 	// 조회 카운트가 없으면 데이터셋이 날라감으로 강제 설정
        // 	if( this.ds_plnPrfrtList.rowcount == 0 ) {
        // 		this.ds_plnPrfrtList.copyData(this.ds_dlvplcListCopy);
        // 	}
        	switch(svcID)
        	{
        		case 'selectDetrInfoList' :
        			if( this.ds_plnPrfrtList.rowcount == 0 ) {
        				//this.ds_intlLwstList.copyData(this.ds_dlvplcListCopy);
        				this.Div00.form.grd_dlvplcList.set_nodatatext("조회 결과가 없습니다.");

        			}
        			//paging 처리
        		this.Div00.form.div_paging.form.cfn_createPage(this.Div00.form.div_paging, this.totalCount, this.Div00.form.cmb_viewCount.value, "fn_pageCallback");
        		break;

        		case "commonCodeSearch":

        		    this.ds_inqPerdSpr.insertRow(0);
        			this.ds_inqPerdSpr.setColumn(0,"COM_DTL_CD","");
        			this.ds_inqPerdSpr.setColumn(0,"COM_DTL_CD_NM","전체");
        			this.Div00_00.form.cbo_inqPerdSpr.set_value("2");
        			break;

        		default :
        		break;

        		case "edt_prdClcd" :
                    this.Div00_00.form.edt_prdClNm.set_value(this.searchPrdClsfNm);
                    break;
        	}


        }

        // 멀티팝업버튼 클릭 콜백
        	this.fn_popupCallback = function(sPopupId, args){

        		switch(sPopupId) {

        				case "btn_prdClcdPopup" :
        				var jsonData = JSON.parse(args);

        				this.Div00_00.form.edt_prdClcd.set_value(jsonData.PRD_CLCD.replace(/,\s*$/, ""));
        				this.Div00_00.form.edt_prdClNm.set_value(jsonData.PRD_CLSF_NM.replace(/,\s*$/, ""));

        				break;

        		}
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
        	this.Div00.form.div_paging.uPageRowCnt = 20;
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
        	}else if(sGb == "D"){
        	    sReturn = this.gfn_addMonth(currDate,0);
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
        	this.fn_doSearch(0);
        };


        this.Div00_00_btn_init_onclick = function(obj,e)
        {
        	//카테고리
        	this.ds_search.setColumn(0,"PRD_CLCD","");
        	this.ds_search.setColumn(0,"PRD_CLCD_NM","");

        	//달력
        	this.Div00_00.form.cbo_inqPerdSpr.set_value("2");
        	this.fn_pcDateChage(this.Div00_00.form.cal_srchFrDt,this.Div00_00.form.cal_srchToDt, this.Div00_00.form.cbo_inqPerdSpr);

        	//사용여부
        	this.ds_search.setColumn(0,"USE_YN","Y");

        };

        this.Div00_grd_dlvplcList_oncellclick = function(obj,e)
        {
        	// 상세조회 팝업 호출
        	var dataSet = obj.getBindDataset();

        	if( e.col == 8 ) {
        		var objParam = {
        			prdClcd:dataSet.getColumn(e.row, "PRD_CLCD")
        		};

        		this.gfn_openPopup("SSP_BO_CA_53", "PC::SSP_BO_CA_53.xfdl", objParam);

        	}
        };

        this.Div00_btn_insert_onclick = function(obj,e)
        {
        	var param = {pgmId : "SSP_BO_CA_51"}; //프로그램 ID ex) CO_SA_01
        	this.gfn_openPopup("SSP_BO_PP_34", "CO_POP::SSP_BO_PP_34.xfdl", param);
        };

        this.Div00_00_cbo_inqPerdSpr_onitemchanged = function(obj,e)
        {
        	this.fn_pcDateChage(this.Div00_00.form.cal_srchFrDt,this.Div00_00.form.cal_srchToDt, this.Div00_00.form.cbo_inqPerdSpr);
        };


        this.Div00_00_btn_prdClcdPopup_onclick = function(obj,e)
        {
        	var params = {coCd:this.fv_coCd,mallSprCd:'10'};
            var options = {};
            this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_10.xfdl", params,  "fn_popupCallback", options);
        };


        this.dlvplcMngList_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);

        	var objType = obj.getFocus();

        	if( e.keycode == 13 && objType == "[object Edit]"){
        		var value = e.fromobject.value;
        		if(this.gfn_lengthByte(this.gfn_allTrim(value)) > 0){
        			if( e.fromobject.id == "edt_prdClcd") {
        				this.ds_search.setColumn(0, "PRD_CLCD", value);
        				this.fn_popupSearch("edt_prdClcd", "/pr/prd-popup/select-category-popup-list.do");
        			}
        		}
        	}
        };

        this.Div00_00_cal_srchFrDt_onchanged = function(obj,e)
        {
        	this.fn_pcDateValidate(this.Div00_00.form.cal_srchFrDt,this.Div00_00.form.cal_srchToDt);
        };

        this.Div00_00_cal_srchToDt_onchanged = function(obj,e)
        {
        	this.fn_pcDateValidate(this.Div00_00.form.cal_srchFrDt,this.Div00_00.form.cal_srchToDt);
        };

        this.Div00_Button01_onclick = function(obj,e)
        {
        	if(this.ds_plnPrfrtList.getRowCount() > 0){
        		this.ofn_exportExcel({form:this, grid:this.Div00.form.grd_dlvplcList, fileName:"상품군계획매익율"});
        	}else{
        		alert(this.fn_getMessage("ERRS000202"));
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.dlvplcMngList_onkeyup,this);
            this.Div00.form.grd_dlvplcList.addEventHandler("oncellclick",this.Div00_grd_dlvplcList_oncellclick,this);
            this.Div00.form.Button01.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.Div00.form.btn_insert.addEventHandler("onclick",this.Div00_btn_insert_onclick,this);
            this.Div00.form.totalPageCount.addEventHandler("onclick",this.totalPageCount_onclick,this);
            this.Div00_00.form.cal_srchFrDt.addEventHandler("onchanged",this.Div00_00_cal_srchFrDt_onchanged,this);
            this.Div00_00.form.cal_srchToDt.addEventHandler("onchanged",this.Div00_00_cal_srchToDt_onchanged,this);
            this.Div00_00.form.cbo_inqPerdSpr.addEventHandler("onitemchanged",this.Div00_00_cbo_inqPerdSpr_onitemchanged,this);
            this.Div00_00.form.edt_prdClcd.addEventHandler("onkeyup",this.Div00_00_edt_prdClcd_onkeyup,this);
            this.Div00_00.form.btn_prdClcdPopup.addEventHandler("onclick",this.Div00_00_btn_prdClcdPopup_onclick,this);
            this.Div00_00.form.btn_init.addEventHandler("onclick",this.Div00_00_btn_init_onclick,this);
            this.Div00_00.form.Button58.addEventHandler("onclick",this.Div00_00_Button58_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_CA_51_A.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
