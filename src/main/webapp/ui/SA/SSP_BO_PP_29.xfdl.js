(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PP_29");
            this.set_titletext("쿠폰 - 목록 - 쿠폰설정 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_EVT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_KND_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_PUBC_MTHD_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchComCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comboCpnKndCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gridCpnInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_EVT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_KND_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NOTIC_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_DC_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DC_AMT_DCRT\" type=\"STRING\" size=\"256\"/><Column id=\"MIN_PURG_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_DC_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"PUBC_STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PUBC_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PUBC_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"UNLMT_PUBC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_PUBC_MTHD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPNBOX_EXPS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_USE_PERD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_USE_STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_USE_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_PSB_DCNT\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_GUDC\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_APLY_TGT_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_EXCPT_TGT_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_KND_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NOTIC_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_DC_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UNLMT_PUBC_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_PUBC_MTHD_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPNBOX_EXPS_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_USE_PERD_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_APLY_TGT_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_EXCPT_TGT_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_QTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","800","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("H20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","0","20","600",null,null,null,null,null,null,this);
            obj.set_taborder("1");
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

            obj = new Static("Static00_02_01_00_00_00_00_00_00_00","0","580","800","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("H20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totalCount","20","51","121","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("총 0건");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_01","0","69","800","10",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("H10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static61","19","12","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("쿠폰 조회");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00","0","33","800","10",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("H10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"43","60","26","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_cpnInfo","20","79","760","501",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_gridCpnInfo");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj.set_extendsizetype("none");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"100\"/><Column size=\"405\"/><Column size=\"120\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"쿠폰 이벤트 번호\"/><Cell col=\"1\" text=\"쿠폰 종류\"/><Cell col=\"2\" text=\"쿠폰명\"/><Cell col=\"3\" text=\"할인 금액/율&#13;&#10;(최대 할인 금액)\"/></Band><Band id=\"body\"><Cell text=\"bind:CPN_EVT_NO\" textAlign=\"center\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/><Cell col=\"1\" text=\"bind:CPN_KND_CD\" displaytype=\"expr:currow == 0 ? &quot;combocontrol&quot; : &quot;combotext&quot;\" edittype=\"expr:currow == 0 ? &quot;combo&quot; : &quot;none&quot;\" combodataset=\"ds_comboCpnKndCd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\" comboautoselect=\"true\"/><Cell col=\"2\" text=\"bind:CPN_NM\" textAlign=\"left\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/><Cell col=\"3\" textAlign=\"center\" expr=\"currow == 0 ? &quot;&quot; : dataset.parent.fn_getAutoComma(DC_AMT_DCRT) + (CPN_DC_SPR_CD  == &apos;10&apos; ? &quot;원&quot; : &quot;%&quot;) + &quot;\\n(&quot; + dataset.parent.fn_getAutoComma(MAX_DC_AMT) + &quot;원)&quot;\" text=\"bind:DC_AMT_DCRT\" displaytype=\"expr:currow == 0 ? &quot;normal&quot; : &quot;decoratetext&quot;\" wordWrap=\"none\" verticalAlign=\"middle\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totCnt",null,"51","130","25","585",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("(최대 조회수 : 1,000건)");
            obj.set_usedecorate("true");
            obj.set_textAlign("right");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_noData","0","276",null,"144","0",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("조회된 결과가 없습니다.");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_PP_29.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_PP_29.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_PP_29.xfdl", function() {
        /*******************************************************
          PROJECT NAME : 쿠폰 - 목록 - 쿠폰설정 팝업
          CREATION DATES : 2022.03.23
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
        this.fv_oApp = nexacro.getApplication();

        /* ===============================================================
         * 1. Form Load
         *  - Form 로드시 실행
         * ===============================================================
         */
        this.SSP_BO_PP_29_onload = function(obj, e)
        {
        	// 공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	// 초기화
        	this.fn_init("VAL_INIT");
        	this.fn_init("CODE_INIT");
        	this.fn_init("FORM_INIT");

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
         * 쿠폰 종류 radio 값 조회
         */
        this.fn_comCdCpnKndCdList = function()
        {
        	this.ds_searchComCd.clearData();
        	var nRow = this.ds_searchComCd.addRow();

        	this.ds_searchComCd.setColumn(nRow, "CODE_LIST", "CPN_KND_CD");
        	this.ds_searchComCd.setColumn(nRow, "LANG_CD", "KO");

        	var sSvcId = "comCdCpnKndCdList";
        	var sUrl = "/co/select-common-code-list.do";
        	var sInData = "ds_search=ds_searchComCd"
        	var sOutData = "ds_comboCpnKndCd=ds_output1";
        	var sArg = "";
        	var sCallback = "fn_callbackFunction";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        };

        /**
         * 쿠폰 grid 값 조회
         */
        this.fn_gridCpnInfoList = function ()
        {
        	this.ds_search.setColumn(0, "CPN_EVT_NO", this.ds_gridCpnInfo.getColumn(0, "CPN_EVT_NO"));
        	this.ds_search.setColumn(0, "CPN_KND_CD", this.ds_gridCpnInfo.getColumn(0, "CPN_KND_CD"));
        	this.ds_search.setColumn(0, "CPN_NM", this.ds_gridCpnInfo.getColumn(0, "CPN_NM"));

        	if ((this.ds_search.getColumn(0, "CPN_EVT_NO") == "" || this.ds_search.getColumn(0, "CPN_EVT_NO") == undefined) &&
        		(this.ds_search.getColumn(0, "CPN_KND_CD") == "" || this.ds_search.getColumn(0, "CPN_KND_CD") == undefined) &&
        		(this.ds_search.getColumn(0, "CPN_NM") == "" || this.ds_search.getColumn(0, "CPN_NM") == undefined))
        	{
        		alert(this.fn_getMessage("ERRN000001", "검색조건은 한 개이상")); // 검색조건은 한 개이상 필수 입력항목입니다.
        		return
        	}

        	this.ds_search.setColumn(0,"START_NUM", 0);
        	this.ds_search.setColumn(0,"ROW_COUNT", 1000);

        	this.ds_search.setColumn(0,"CO_CD", this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD"));
        	this.ds_search.setColumn(0,"CPN_PUBC_MTHD_CD", "30"); // 다운로드 쿠폰만 나오도록


        	var sSvcId = "gridCpnInfoList";
        	var sUrl = "/sa/cpn/select-cpn-info-popup-list.do";
        	var sInData = "ds_search=ds_search"
        	var sOutData = "ds_gridCpnInfo=ds_output1";
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
        		case "comCdCpnKndCdList" :

        			var nRow = this.ds_comboCpnKndCd.insertRow(0);

        			this.ds_comboCpnKndCd.setColumn(nRow, "COM_DTL_CD", "");
        			this.ds_comboCpnKndCd.setColumn(nRow, "COM_DTL_CD_NM", "전체");

        			this.ds_gridCpnInfo.setColumn(0, "CPN_KND_CD", "");

        			break;

        		case "gridCpnInfoList" :

        			if(this.ds_gridCpnInfo.rowcount < 1) {
        				this.sta_noData.bringToFront();
        			}else{
        				this.sta_noData.sendToBack();
        			}

        			var sTotText = "총 <b v='true'>" + this.ds_gridCpnInfo.rowcount + "</b>건";
        			this.sta_totalCount.set_text(sTotText);

        			this.fn_init("SEARCH_INIT");
        			this.grd_cpnInfo.setFixedRow(0);

        			break;

        		default :

        			break;
        	}
        }










        /* ===============================================================
         * 4. 외부 호출 FUNCTION 영역
         * ===============================================================
         */










        /* ===============================================================
         * 5. event action
         *  - dataset 및 component 이벤트 영역
         * ===============================================================
         */

        /**
         * 조회 버튼 클릭 시
         */
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_gridCpnInfoList(0);
        };

        /**
         * 그리드 cell 클릭 시
         */
        this.grd_cpnInfo_oncellclick = function(obj,e)
        {
        	if(e.row == 0)
        	{
        		if(e.col != 0)
        		{
        			var cellText = obj.getCellText(e.row, e.cell);

        			if(cellText != undefined)
        			{
        				obj.setEditSelect(cellText.length, cellText.length);
        			}
        		}
        	}
        };

        /**
         * 그리드 cell 더블 클릭 시
         */
        this.grd_cpnInfo_oncelldblclick = function(obj,e)
        {
        	if(e.row != 0)
        	{
        		var resData = {};
        		var resString = "";

        		resData.CPN_EVT_NO = this.ds_gridCpnInfo.getColumn(this.ds_gridCpnInfo.rowposition, "CPN_EVT_NO");
        		resData.CPN_NM = this.ds_gridCpnInfo.getColumn(this.ds_gridCpnInfo.rowposition, "CPN_NM");

        		resString = JSON.stringify(resData);

        		this.close(resString);
        	}
        };

        /**
         * 그리드 cell 엔터 시
         */
        this.grd_cpnInfo_onenterdown = function(obj,e)
        {
        	this.fn_gridCpnInfoList();
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

        	if (sVal == "" || sVal == "undefined" || sVal == undefined)
        	{
        		return 0;
        	}

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

        			break;

        		case "CODE_INIT" :

        			// 코드 초기화

        			// 쿠폰 종류 radio 값 조회
        			this.fn_comCdCpnKndCdList();

        			break;

        		case "FORM_INIT" :

        			// 입력 항목 초기화

        			// dataset 영역
        			this.ds_search.clearData();
        			var nRow = this.ds_search.addRow();

        			this.ds_gridCpnInfo.clearData();

        			// grid 영역
        			this.sta_totalCount.set_text("총 <b v='true'>0</b>건");
        			this.sta_totCnt.set_text("(최대 조회수 : 1,000건)");

        			this.grd_cpnInfo.set_enable(true);

        			this.grd_cpnInfo.set_nodatatext("조회된 결과가 없습니다.");

        			this.fn_init("SEARCH_INIT");

        			break;

        		case "SEARCH_INIT" :

        			// 검색조건 셋팅

        			this.ds_gridCpnInfo.insertRow(0);

        			this.ds_gridCpnInfo.setColumn(0, "CPN_EVT_NO",  this.ds_search.getColumn(0, "CPN_EVT_NO"));
        			this.ds_gridCpnInfo.setColumn(0, "CPN_KND_CD",  this.ds_search.getColumn(0, "CPN_KND_CD"));
        			this.ds_gridCpnInfo.setColumn(0, "CPN_NM",  this.ds_search.getColumn(0, "CPN_NM"));

        			this.ds_gridCpnInfo.set_rowposition(-1);

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
        	//this.fn_regMethodENTER("btn_search_onclick");
        	this.fn_regMethodESC("fn_closeForm");
        };








        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_PP_29_onload,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.grd_cpnInfo.addEventHandler("oncellclick",this.grd_cpnInfo_oncellclick,this);
            this.grd_cpnInfo.addEventHandler("oncelldblclick",this.grd_cpnInfo_oncelldblclick,this);
            this.grd_cpnInfo.addEventHandler("onenterdown",this.grd_cpnInfo_onenterdown,this);
            this.sta_noData.addEventHandler("onclick",this.Div00_sta_noData_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_PP_29.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
