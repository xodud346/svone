(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_OG_01");
            this.set_titletext("메타태그 - 목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\"/><Col id=\"ROW_COUNT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_metaTagList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"META_TAG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CHN_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHN_TP_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_PAGE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TGT_URL\" type=\"STRING\" size=\"256\"/><Column id=\"OG_TTL\" type=\"STRING\" size=\"256\"/><Column id=\"OG_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"OG_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"OG_URL\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEFAULT_SORT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_paging","20",null,null,"55","20","20",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("auto auto");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"20","60","28","26",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_metaTagList","32","70",null,"600","8",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_metaTagList");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"91\"/><Column size=\"104\"/><Column size=\"273\"/><Column size=\"146\"/><Column size=\"117\"/><Column size=\"119\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순서\"/><Cell col=\"1\" text=\"사용여부\"/><Cell col=\"2\" text=\"디바이스구분\"/><Cell col=\"3\" text=\"노출페이지명\"/><Cell col=\"4\" text=\"등록일\"/><Cell col=\"5\" text=\"등록자사번\"/><Cell col=\"6\" text=\"등록자\"/></Band><Band id=\"body\"><Cell text=\"expr:DEFAULT_SORT==&apos;1&apos;?&apos;-&apos;:META_TAG_SEQ\" cssclass=\"expr:DEFAULT_SORT==&apos;1&apos;?&apos;grd_bgGray&apos;:&apos;&apos;\"/><Cell col=\"1\" text=\"bind:USE_YN_NM\" cssclass=\"expr:DEFAULT_SORT==&apos;1&apos;?&apos;grd_bgGray&apos;:&apos;&apos;\"/><Cell col=\"2\" text=\"bind:CHN_TP_CD_NM\" cssclass=\"expr:DEFAULT_SORT==&apos;1&apos;?&apos;grd_bgGray&apos;:&apos;&apos;\"/><Cell col=\"3\" text=\"bind:EXPS_PAGE_NM\" displaytype=\"decoratetext\" expr=\"EXPS_PAGE_NM  == &apos;&apos; ? EXPS_PAGE_NM : &quot;&lt;u v=&apos;true&apos;&gt;&quot;+EXPS_PAGE_NM+&quot;&lt;/u&gt;&quot;\" color=\"#290ccf\" cssclass=\"expr:DEFAULT_SORT==&apos;1&apos;?&apos;grd_bgGray&apos;:&apos;&apos;\"/><Cell col=\"4\" text=\"bind:REG_DTM\" displaytype=\"normal\" cssclass=\"expr:DEFAULT_SORT==&apos;1&apos;?&apos;grd_bgGray&apos;:&apos;&apos;\"/><Cell col=\"5\" text=\"bind:REGPSN_ID\" cssclass=\"expr:DEFAULT_SORT==&apos;1&apos;?&apos;grd_bgGray&apos;:&apos;&apos;\"/><Cell col=\"6\" text=\"bind:REGPSN_NM\" cssclass=\"expr:DEFAULT_SORT==&apos;1&apos;?&apos;grd_bgGray&apos;:&apos;&apos;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_write",null,"20","81","28","96",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Static("totalPageCount","17","36","121","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("(총 0건 0/0)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_OG_01.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_OG_01.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_OG_01.xfdl", function() {
        /*******************************************************
        PROJECT NAME : 메타태그 관리
        CREATION DATES : 2023.05.22
        CREATER        : YHK
        *******************************************************/

        /* 스크립트 인클루드 */
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
         * 0.Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();
        this.fv_coCd = this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD");
        this.totalCount = 0;
        /***********************************************************************************************
        * 1.FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//초기화
        	this.fn_init();

        };

        this.fn_onkeyup = function(obj,e)
        {
        	// CTRL+ENTER KEY
        	if(e.keycode == 13 && e.ctrlkey){
        		this.btn_search_onclick();
        	}
        };

        /***********************************************************************************************
        * 2.Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_search = function(page)
        {
        	var sSvcId = "selectMetaTagInfoList";
        	var sUrl = "/sa/meta-tag/select-meta-tag-info-list.do";
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_metaTagList=ds_output";
        	var arg;

        	// 조회버튼 클릭시 페이징 초기화 시킨다.
        	if( page == 0 ) {
        		this.div_paging.uPage=1;
        		this.div_paging.uPageNum=0;
        		this.ds_search.setColumn(0,"START_NUM", 0);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.div_paging.uPageRowCnt);
        	}

        	this.ds_search.setColumn(0,"CO_CD", this.fv_coCd);

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callback");
        };

        /***********************************************************************************************
        * 3.Callback 처리 영역
        ************************************************************************************************/

        //콜백
        this.fn_callback = function(svcID, errorCode, errorMsg) {

        	if(errorCode < 0)
        	{
        		alert(errorMsg);
        		return;
        	}

        	switch (svcID)
        	{
        		case "selectMetaTagInfoList" :

        			if(this.ds_metaTagList.getRowCount() > 0) {

        				var strExpr = "DEFAULT_SORT == '1'";
        				var arrRows = this.ds_metaTagList.extractRows(strExpr);

        				for(var j = 0; j < arrRows.length; j++){
        					var rowIdx = arrRows[j]

        					this.ds_metaTagList.setColumn(rowIdx, "META_TAG_SEQ", "-");
        					//this.ds_metaTagList.setColumn(rowIdx, "CHN_TP_CD_NM", "공통");
        					this.ds_metaTagList.setColumn(rowIdx, "REG_DTM", "-");
        					this.ds_metaTagList.setColumn(rowIdx, "REGPSN_ID", "-");
        					this.ds_metaTagList.setColumn(rowIdx, "REGPSN_NM", "-");

        				}
        			}

        			//목록 조회후 paging 처리
        			this.div_paging.form.cfn_createPage(this.div_paging, this.totalCount, this.div_paging.uPageRowCnt, "fn_pageCallback");

        			break;

        		default :

        			break;
        	}
        }

        //페이징 콜백
        this.fn_pageCallback = function(sFlag){

        	var oPaging = this.div_paging;

        	if(sFlag){
        		this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.div_paging.uPageRowCnt);
        		this.fn_search();
        	}

        	var sTotText = "(<b v='true'>총 " + oPaging.uTotCount + "건 </b><fc v='red'>" + oPaging.uPage + "</fc> / " + oPaging.uPageCnt + ")";

        	this.totalPageCount.set_text(sTotText);

        }

        //팝업콜백
        this.fn_popupCallback = function(sPopupId, sRetValue)
        {
        	if(this.gfn_isNull(sRetValue))
        	{
        		return;
        	}

        	var retObj = JSON.parse(sRetValue);

        	switch(sPopupId)
        	{
        		case "btn_write" :

        			if (retObj.RETURN_YN.replace(/,\s*$/, "") == "Y")
        			{
        				this.fn_search(0);
        			}

        			break;

        		default :

        			break;
        	}
        }


        /***********************************************************************************************
        * 4.외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수

        this.cfn_formInit = function()
        {
        	//grid 초기 설정
        	this.grd_metaTagList.uSortFlag = "false";
        	this.grd_metaTagList.uServerSortFlag = "true";
        	this.grd_metaTagList.uSortCallback = "fn_sortCallback";
        	this.grd_metaTagList.uCellSizeType = "true";

        	//페이징 초기 설정
        	this.div_paging.uPage = 1;
        	this.div_paging.uPageNum = 0;
        	this.div_paging.uPageRowCnt = 50;
        	this.div_paging.uPageCnt = 0;
        	this.div_paging.uTotCount = 0;

        	//grid 개인화(전제조건 : grid Head가 무조건 1Row인 경우)
        	this.uGridList = "grd_metaTagList";
        	this.grd_metaTagList.uRightMouse = "true";
        	this.grd_metaTagList.uPersonalFlag = "true";
        	this.grd_metaTagList.uDefaultFormat = "";

        }



        /***********************************************************************************************
        *  5.개발자(사용자) 함수 영역
        ************************************************************************************************/

        //화면 초기화 함수
        this.fn_init = function() {

        	this.btn_write.set_enable(true);
        	this.btn_search.set_enable(true);

        	// 페이징 초기화
        	this.ds_search.setColumn(0, "START_NUM", 0);
        	this.ds_search.setColumn(0, "ROW_COUNT", this.div_paging.uPageRowCnt);

        	// grid 초기화
        	this.totalPageCount.set_text("(<b v='true'>총 0건 </b><fc v='red'>0</fc> / 0)");
        	this.ds_metaTagList.clearData();
        	this.grd_metaTagList.clearSelect();

        }



        /***********************************************************************************************
        *  6.각 Component 별 이벤트 영역
        ************************************************************************************************/


        //조회 버튼
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_search(0);
        };

        //등록 버튼
        this.btn_write_onclick = function(obj,e)
        {

        	var objParam = {
        			coCd : this.fv_coCd
        		};

        	this.gfn_openPopup(e.fromobject.id, "SA::SSP_BO_OG_02.xfdl", objParam, "fn_popupCallback");

        };

        //그리드 클릭
        this.grd_edmList_oncellclick = function(obj,e)
        {
        	if(e.col == this.grd_metaTagList.getBindCellIndex("body", "EXPS_PAGE_NM")) {

        		var objParam = {
        			coCd : this.ds_metaTagList.getColumn(e.row, "CO_CD")
        			, metaTagSeq : this.ds_metaTagList.getColumn(e.row, "META_TAG_SEQ")
        			, defaultSort : this.ds_metaTagList.getColumn(e.row, "DEFAULT_SORT")
        		};

        		this.gfn_openPopup(e.fromobject.id, "SA::SSP_BO_OG_02.xfdl", objParam, "fn_popupCallback");

        	}

        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.grd_metaTagList.addEventHandler("oncellclick",this.grd_edmList_oncellclick,this);
            this.btn_write.addEventHandler("onclick",this.btn_write_onclick,this);
            this.FileDownTransfer.addEventHandler("onsuccess",this.FileDownTransfer_onsuccess,this);
        };
        this.loadIncludeScript("SSP_BO_OG_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
