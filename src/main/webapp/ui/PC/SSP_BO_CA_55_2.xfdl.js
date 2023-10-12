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
            this.set_titletext("예외가격 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1340,990);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"codeList\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">20</Col><Col id=\"PRD_USE_YN\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_exPrdPrcList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COL_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_DSGN_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"DSTRB_STD_PRC\" type=\"STRING\" size=\"256\"/><Column id=\"MRK_LWST_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"CURR_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_page", this);
            obj._setContents("<ColumnInfo><Column id=\"COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COUNT\">10</Col></Row><Row><Col id=\"COUNT\">20</Col></Row><Row><Col id=\"COUNT\">30</Col></Row><Row><Col id=\"COUNT\">40</Col></Row><Row><Col id=\"COUNT\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USE_YN\"/><Col id=\"USE_YN_NM\">전체</Col></Row><Row><Col id=\"USE_YN_NM\">사용</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"USE_YN\">N</Col><Col id=\"USE_YN_NM\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pubOnlySprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","65",null,"815","4",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_exPrdPrcList","20","60",null,"653","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_exPrdPrcList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autosizingtype("none");
            obj.set_nodatatext("조회 조건을 선택 하신 후, 조회해 주세요.");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"상품ID\"/><Cell col=\"1\" text=\"상품명\"/><Cell col=\"2\" text=\"공용전용구분\"/><Cell col=\"3\" text=\"SSP상품상태\"/><Cell col=\"4\" text=\"구매지정판매가\"/><Cell col=\"5\" text=\"List Price\"/><Cell col=\"6\" text=\"시장최저판매가\"/><Cell col=\"7\" text=\"판매통화\"/><Cell col=\"8\" text=\"최종변경일\"/></Band><Band id=\"body\"><Cell text=\"bind:PRD_ID\" expr=\"PRD_ID  == &apos;&apos; ? PRD_ID : &quot;&lt;u v=&apos;true&apos;&gt;&quot;+PRD_ID+&quot;&lt;/u&gt;&quot;\" displaytype=\"decoratetext\" color=\"#290ccf\"/><Cell col=\"1\" text=\"bind:PRD_NM\"/><Cell col=\"2\" text=\"bind:PUB_ONLY_SPR_NM\"/><Cell col=\"3\" text=\"bind:PRD_USE_YN\"/><Cell col=\"4\" text=\"bind:PURG_DSGN_SALSPRC\"/><Cell col=\"5\" text=\"bind:DSTRB_STD_PRC\"/><Cell col=\"6\" text=\"bind:MRK_LWST_SALSPRC\"/><Cell col=\"7\" text=\"bind:CURR_UNIT_CD\"/><Cell col=\"8\" text=\"bind:UPD_DTM\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_excel",null,"23","87","30","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("액셀 다운로드");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_insert",null,"23","69","30","btn_excel:5",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("일괄등록");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20","25","300","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("(총 0건, 1/N)");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("div_paging","7","grd_exPrdPrcList:5",null,"38","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_insert00",null,"25","69","30","btn_insert:5",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("개별등록");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00","0","15",null,"75","4",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색 영역");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","40","0",null,"32","20",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02","20","0","130","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("상품ID");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static04","562","0","130","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_text("공용전용구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("btn_init",null,"38","65","26","86",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("3");
            obj.set_text("초기화");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button58",null,"38","60","26","22",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_select");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("edt_prd_id","159","4","295","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("5");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button33","edt_prd_id:4","4","24","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button33_00_00_00","Button33:4","4","24","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_document");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static04_00","945","0","130","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("8");
            obj.set_text("SSP상품상태");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("cmb_useYn","1080","4","150","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_useYn");
            obj.set_datacolumn("USE_YN_NM");
            obj.set_codecolumn("USE_YN");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("cmb_pubOnlySprCd","702","4","150","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_pubOnlySprCd");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.Div00_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1340,990,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00_00.form.edt_prd_id","value","ds_search","PRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00_00.form.cmb_useYn","value","ds_search","PRD_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00_00.form.cmb_pubOnlySprCd","value","ds_search","PUB_ONLY_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.registerScript("SSP_BO_CA_55_2.xfdl", function() {
        /*******************************************************
          PROJECT NAME : 상품군계획매익률
          CREATION DATES : 2022.01.25
        *******************************************************/

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

        	//조회함수
        	this.fn_doSearch(0);
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_doSearch = function(page)
        {
        	 var sSvcId = "selectIntlLwstList";
             var sUrl = "/pc/prdPrc/selectExPrdPrcList.do";
        	 var inDs = "ds_search=ds_search"
             var outDs = "ds_exPrdPrcList=ds_output";
             var arg;
             var callback = "fn_received";

        	 // 조회버튼 클릭시 페이징 초기화 시킨다.
        	 if( page == 0 ) {
        		this.Div00.form.div_paging.uPage=1;
        		this.Div00.form.div_paging.uPageNum=0;
        		this.ds_search.setColumn(0,"START_NUM", 0);
        	 }

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        };

        //공통코드조회
        this.fn_commonCodeSearch = function()
        {
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_pubOnlySprCd=ds_output1";
        	var arg = "";
        	var callback = "fn_received";

        	this.ds_search.setColumn(0, "codeList", "PUB_ONLY_SPR_CD");
        	this.ds_search.setColumn(0, "langCd", "KO");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/

        //조회 트랜잭션 콜백함수
        this.fn_received = function(svcID, errorCode, errorMsg)	{

        	switch(svcID)
        	{
        		case 'selectIntlLwstList' :
        			// 조회 카운트가 없으면 데이터셋이 날라감으로 강제 설정
        			if( this.ds_exPrdPrcList.rowcount == 0 ) {
        				this.ds_exPrdPrcList.copyData(this.ds_exPrdPrcListCopy);
        				this.Div00.form.grd_exPrdPrcList.set_nodatatext("조회 결과가 없습니다.");
        			}

        		break;

        		case "commonCodeSearch":

        		    this.ds_pubOnlySprCd.insertRow(0);
        			this.ds_pubOnlySprCd.setColumn(0,"COM_DTL_CD","");
        			this.ds_pubOnlySprCd.setColumn(0,"COM_DTL_CD_NM","전체");
        			this.Div00_00.form.cmb_pubOnlySprCd.set_value("");
        			break;

        		default :
        		break;
        	}

        	//paging 처리
        	this.Div00.form.div_paging.form.cfn_createPage(this.Div00.form.div_paging, this.totalCount, 20, "fn_pageCallback");
        }

        //페이징 콜백
        this.fn_pageCallback = function(sFlag){

        	var oPaging = this.Div00.form.div_paging;

        	if(sFlag){
        		this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT", 20);
        		this.fn_doSearch(3);
        	}

        	var sTotText = "(총 "+ this.totalCount+"건, "+ oPaging.uPage +" / "+ oPaging.uPageCnt +")";
        	this.Div00.form.totalPageCount.set_text(sTotText);
        }

        //정렬콜백
        this.fn_sortCallback = function(sGridId){

        	var oGrid = null;
        	if(sGridId == "grd_exPrdPrcList"){
        		oSortInfo = this.Div00.form.grd_exPrdPrcList.uaSortInfo;
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
        	this.Div00.form.grd_exPrdPrcList.uSortFlag = "false";
        	this.Div00.form.grd_exPrdPrcList.uServerSortFlag = "true";
        	this.Div00.form.grd_exPrdPrcList.uSortCallback = "fn_sortCallback";
        	this.Div00.form.grd_exPrdPrcList.uCellSizeType = "true";

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
        	}

        	return sReturn;
        }


        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        this.Div00_00_Button58_onclick = function(obj,e)
        {
        	this.fn_doSearch(1);
        };


        this.Div00_00_btn_init_onclick = function(obj,e)
        {
        	//카테고리
        	this.ds_search.setColumn(0,"ADJ_YM","");
        	this.ds_search.setColumn(0,"PRD_ID","");

        };

        this.Div00_btn_insert_onclick = function(obj,e)
        {
        	alert("일괄업로드 준비중...");
        };

        this.Div00_btn_excel_onclick = function(obj,e)
        {
        	alert("엑셀다운로드 준비중...");
        };

        this.Div00_grd_exPrdPrcList_oncellclick = function(obj,e)
        {
        	if(e.cell == 0){
        		//var objParam = {};
        		//objParam.oftenQstSeq = this.ds_oftenQst.getColumn(e.row, "OFTEN_QST_SEQ");
        		//this.gfn_openPopup("SSP_BO_CN_13", "CO::SSP_BO_CN_13.xfdl", objParam);
        		alert("준비중");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.Div00.form.grd_exPrdPrcList.addEventHandler("oncellclick",this.Div00_grd_exPrdPrcList_oncellclick,this);
            this.Div00.form.btn_excel.addEventHandler("onclick",this.Div00_btn_excel_onclick,this);
            this.Div00.form.btn_insert.addEventHandler("onclick",this.Div00_btn_insert_onclick,this);
            this.Div00.form.totalPageCount.addEventHandler("onclick",this.totalPageCount_onclick,this);
            this.Div00_00.form.btn_init.addEventHandler("onclick",this.Div00_00_btn_init_onclick,this);
            this.Div00_00.form.Button58.addEventHandler("onclick",this.Div00_00_Button58_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_CA_55_2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
