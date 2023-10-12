(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_NA_20");
            this.set_titletext("쿠폰 - 발행 대상 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(870,795);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DRMC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mbrInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MASK_MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MASK_LOGN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DRMC_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mbrInfoSelect", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MASK_MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MASK_LOGN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","870","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("H20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","0","20","795",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("W20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","850","0","20","795",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("W20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00_00_00_00_00_00_00","0","775","870","20",null,null,null,null,null,null,this);
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

            obj = new Static("Static00_02_01_01","0","69","870","10",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("H10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static61","19","12","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("발행 대상 조회");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00","0","33","870","10",null,null,null,null,null,null,this);
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

            obj = new Grid("grd_cpnPubcMbr","20","79","830","300",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_mbrInfo");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"85\"/><Column size=\"75\"/><Column size=\"75\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"사업장ID\"/><Cell col=\"2\" text=\"사업장명\"/><Cell col=\"3\" text=\"운영단위ID\"/><Cell col=\"4\" text=\"운영단위명\"/><Cell col=\"5\" text=\"부서ID\"/><Cell col=\"6\" text=\"부서명\"/><Cell col=\"7\" text=\"회원ID\"/><Cell col=\"8\" text=\"회원명\"/><Cell col=\"9\" text=\"휴면회원&#13;&#10;여부\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"expr:currow == 0 ? &quot;imagecontrol&quot; : &quot;checkboxcontrol&quot;\" edittype=\"expr:currow == 0 ? &quot;none&quot; :  &quot;checkbox&quot; \" cssclass=\"expr:currow == 0 ? &quot;grd_WF_searchImg&quot; : &quot;&quot;\"/><Cell col=\"1\" text=\"bind:BZPLC_ID\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/><Cell col=\"2\" text=\"bind:BZPLC_NM\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\"/><Cell col=\"3\" text=\"bind:OPR_UNIT_ID\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/><Cell col=\"4\" text=\"bind:OPR_UNIT_NM\" textAlign=\"center\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\"/><Cell col=\"5\" text=\"bind:DEPT_ID\" textAlign=\"center\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/><Cell col=\"6\" text=\"bind:DEPT_NM\" textAlign=\"center\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/><Cell col=\"7\" text=\"bind:MBR_ID\" textAlign=\"center\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/><Cell col=\"8\" text=\"bind:MBR_NM\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\"/><Cell col=\"9\" text=\"bind:DRMC_YN\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"389","65","28","20",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_select");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_01_00","0","379","870","10",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("H10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00_00_00_00","0","417","870","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("H30");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_cpnPubcMbrSelect","20","447","830","250",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_mbrInfoSelect");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"85\"/><Column size=\"75\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"사업장ID\"/><Cell col=\"2\" text=\"사업장명\"/><Cell col=\"3\" text=\"운영단위ID\"/><Cell col=\"4\" text=\"운영단위명\"/><Cell col=\"5\" text=\"부서ID\"/><Cell col=\"6\" text=\"부서명\"/><Cell col=\"7\" text=\"회원ID\"/><Cell col=\"8\" text=\"회원명\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:BZPLC_ID\"/><Cell col=\"2\" text=\"bind:BZPLC_NM\"/><Cell col=\"3\" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"4\" text=\"bind:OPR_UNIT_NM\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:DEPT_ID\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:DEPT_NM\" textAlign=\"center\" displaytype=\"normal\"/><Cell col=\"7\" text=\"bind:MBR_ID\" textAlign=\"center\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"8\" text=\"bind:MBR_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"707","65","28","20",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("삭제");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_01_00_00","0","697","870","10",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("H10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_select","403","745","65","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_select");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_01_00_00_00","0","735","870","10",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("H10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totalCountSelect","20","419","121","25",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("선택건수 0건");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totCnt","81","52","130","25",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("최대 조회수 : 1,000건");
            obj.set_usedecorate("true");
            obj.set_textAlign("right");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_noData","0","171",null,"144","0",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("조회된 결과가 없습니다.");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",870,795,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_NA_20.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_NA_20.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_NA_20.xfdl", function() {
        /*******************************************************
          PROJECT NAME : 쿠폰 - 발행 대상 조회
          CREATION DATES : 2022.03.18
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

        /* ===============================================================
         * 1. Form Load
         *  - Form 로드시 실행
         * ===============================================================
         */
        this.SSP_BO_NA_20_onload = function(obj, e)
        {
        	// 공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	// 초기화
        	this.fn_init("VAL_INIT");
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
         * 발행 대상 grid 값 조회
         */
        this.fn_gridCpnPubcMbrList = function ()
        {
        	this.ds_search.setColumn(0, "BZPLC_ID", this.ds_mbrInfo.getColumn(0, "BZPLC_ID"));
        	this.ds_search.setColumn(0, "BZPLC_NM", this.ds_mbrInfo.getColumn(0, "BZPLC_NM"));
        	this.ds_search.setColumn(0, "OPR_UNIT_ID", this.ds_mbrInfo.getColumn(0, "OPR_UNIT_ID"));
        	this.ds_search.setColumn(0, "OPR_UNIT_NM", this.ds_mbrInfo.getColumn(0, "OPR_UNIT_NM"));
        	this.ds_search.setColumn(0, "DEPT_ID", this.ds_mbrInfo.getColumn(0, "DEPT_ID"));
        	this.ds_search.setColumn(0, "DEPT_NM", this.ds_mbrInfo.getColumn(0, "DEPT_NM"));
        	this.ds_search.setColumn(0, "MBR_ID", this.ds_mbrInfo.getColumn(0, "MBR_ID"));
        	this.ds_search.setColumn(0, "MBR_NM", this.ds_mbrInfo.getColumn(0, "MBR_NM"));
        	this.ds_search.setColumn(0, "DRMC_YN", this.ds_mbrInfo.getColumn(0, "DRMC_YN"));

        	if ((this.ds_search.getColumn(0, "BZPLC_ID") == "" || this.ds_search.getColumn(0, "BZPLC_ID") == undefined) &&
        		(this.ds_search.getColumn(0, "BZPLC_NM") == "" || this.ds_search.getColumn(0, "BZPLC_NM") == undefined) &&
        		(this.ds_search.getColumn(0, "OPR_UNIT_ID") == "" || this.ds_search.getColumn(0, "OPR_UNIT_ID") == undefined) &&
        		(this.ds_search.getColumn(0, "OPR_UNIT_NM") == "" || this.ds_search.getColumn(0, "OPR_UNIT_NM") == undefined) &&
        		(this.ds_search.getColumn(0, "DEPT_ID") == "" || this.ds_search.getColumn(0, "DEPT_ID") == undefined) &&
        		(this.ds_search.getColumn(0, "DEPT_NM") == "" || this.ds_search.getColumn(0, "DEPT_NM") == undefined) &&
        		(this.ds_search.getColumn(0, "MBR_ID") == "" || this.ds_search.getColumn(0, "MBR_ID") == undefined) &&
        		(this.ds_search.getColumn(0, "MBR_NM") == "" || this.ds_search.getColumn(0, "MBR_NM") == undefined) &&
        		(this.ds_search.getColumn(0, "DRMC_YN") == "" || this.ds_search.getColumn(0, "DRMC_YN") == undefined))
        	{
        		alert(this.fn_getMessage("ERRN000001", "검색조건은 한 개이상")); // 검색조건은 한 개이상 필수 입력항목입니다.
        		return
        	}

        	this.ds_search.setColumn(0,"START_NUM", 0);
        	this.ds_search.setColumn(0,"ROW_COUNT", 1000);

        	this.ds_search.setColumn(0,"CO_CD", this.parent.coCd);


        	var sSvcId = "gridCpnPubcMbrList";
        	var sUrl = "/sa/cpn/select-cpn-pubc-mbr-list.do";
        	var sInData = "ds_search=ds_search"
        	var sOutData = "ds_mbrInfo=ds_output1";
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
        		case "gridCpnPubcMbrList" :

        			if(this.ds_mbrInfo.rowcount < 1) {
        				this.sta_noData.bringToFront();
        			}else{
        				this.sta_noData.sendToBack();
        			}

        			var sTotText = "<b v='true'>총 " + this.ds_mbrInfo.rowcount + "건</b>";
        			this.sta_totalCount.set_text(sTotText);

        			this.fn_init("SEARCH_INIT");

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
        	this.fn_gridCpnPubcMbrList();
        };

        /**
         * 그리드 cell 클릭 시
         */
        this.grd_cpnPubcMbr_oncellclick = function(obj,e)
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
        this.grd_cpnPubcMbr_oncelldblclick = function(obj,e)
        {
        	if(e.row != 0 )
        	{
        		if(this.ds_mbrInfo.getColumn(e.row, "DRMC_YN") == "Y") {
        			alert(this.fn_getMessage("ERRN000106", this.ds_mbrInfo.getColumn(e.row, "MBR_ID"))); // 휴면회원입니다.\n회원ID :
        			return;
        		}
        		if(this.ds_mbrInfo.getColumn(e.row, "CUST_SPR_CD") != "30") {
        			alert(this.fn_getMessage("ERRN000109", this.ds_mbrInfo.getColumn(e.row, "MBR_ID"))); // 일반 회원만 쿠폰발급이 가능합니다.회원ID : &1
        			return;
        		}

        		var findRow = this.ds_mbrInfoSelect.findRowExpr("MBR_ID == '" + this.ds_mbrInfo.getColumn(e.row, "MBR_ID") + "'");

        		if(findRow < 0)
        		{
        			var nRow = this.ds_mbrInfoSelect.addRow();

        			this.ds_mbrInfoSelect.copyRow(nRow, this.ds_mbrInfo, e.row);
        			this.ds_mbrInfoSelect.setColumn(nRow, "CHK", 0);

        			this.ds_mbrInfo.setColumn(e.row, "CHK", 1);

        			var sTotText = "선택건수 : <b v='true'>" + this.ds_mbrInfoSelect.rowcount + "</b> 건";
        			this.sta_totalCountSelect.set_text(sTotText);
        		}
        	}
        };

        /**
         * 그리드 cell 엔터 시
         */
        this.grd_cpnPubcMbr_onenterdown = function(obj,e)
        {
        	if(e.col != 0)
        	{
        		this.fn_gridCpnPubcMbrList();
        	}
        };

        /**
         * 추가 버튼 클릭 시
         */
        this.btn_add_onclick = function(obj,e)
        {
        	var chkCnt = this.ds_mbrInfo.getCaseCount("CHK == 1");
        	var drmcMbrId = "";
        	var noGenMbrId = "";

        	if(chkCnt == 0)
        	{
        		alert(this.fn_getMessage("ERRN000033")); // 선택된 항목이 없습니다.
        		return;
        	}

        	for(var i = 1; i< this.ds_mbrInfo.rowcount; i++)
        	{
        		if(this.ds_mbrInfo.getColumn(i, "CHK") == 1)
        		{
        			if(this.ds_mbrInfo.getColumn(i, "DRMC_YN") == "Y")
        			{
        				drmcMbrId = drmcMbrId + this.ds_mbrInfo.getColumn(i, "MBR_ID") + "," ;
        				continue;
        			}
        			if(this.ds_mbrInfo.getColumn(i, "CUST_SPR_CD") != "30")
        			{
        				noGenMbrId = noGenMbrId + this.ds_mbrInfo.getColumn(i, "MBR_ID") + "," ;
        				continue;
        			}
        			var findRow = this.ds_mbrInfoSelect.findRowExpr("MBR_ID == '" + this.ds_mbrInfo.getColumn(i, "MBR_ID") + "'");

        			if(findRow < 0)
        			{
        				var nRow = this.ds_mbrInfoSelect.addRow();

        				this.ds_mbrInfoSelect.copyRow(nRow, this.ds_mbrInfo, i);
        				this.ds_mbrInfoSelect.setColumn(nRow, "CHK", 0);
        			}
        		}
        	}
        	if(drmcMbrId != "")
        	{
        		drmcMbrId = drmcMbrId.substring(0, drmcMbrId.length-1);
        		alert(this.fn_getMessage("ERRN000106", drmcMbrId)); // 휴면회원입니다.\n회원ID :
        	}
        	if(noGenMbrId != "")
        	{
        		noGenMbrId = noGenMbrId.substring(0, noGenMbrId.length-1);
        		alert(this.fn_getMessage("ERRN000109", noGenMbrId)); // 일반 회원만 쿠폰발급이 가능합니다.회원ID : &1
        	}

        	var sTotText = "선택건수 : <b v='true'>" + this.ds_mbrInfoSelect.rowcount + "</b> 건";
        	this.sta_totalCountSelect.set_text(sTotText);

        	this.grd_cpnPubcMbr.setCellProperty("head", 0, "text", "0");
        };

        /**
         * 삭제 버튼 클릭 시
         */
        this.btn_delete_onclick = function(obj,e)
        {
        	var chkCnt = this.ds_mbrInfoSelect.getCaseCount("CHK == 1");

        	if(chkCnt == 0)
        	{
        		alert(this.fn_getMessage("ERRN000033")); // 선택된 항목이 없습니다.
        		return;
        	}

        	if ( confirm(this.fn_getMessage("ERRN000048"))) // 삭제하시겠습니까?
        	{
        		var aDelArr = new Array();
        		var aDelIdArr = new Array();

        		for(var i = 0; i< this.ds_mbrInfoSelect.rowcount; i++)
        		{
        			if(this.ds_mbrInfoSelect.getColumn(i, "CHK") == 1)
        			{
        				aDelArr.push(i);
        				aDelIdArr.push(this.ds_mbrInfoSelect.getColumn(i, "MBR_ID"));
        			}
        		}

        		this.ds_mbrInfoSelect.deleteMultiRows(aDelArr);

        		for(var i = 0; i< aDelIdArr.length; i++)
        		{
        			var findRow = this.ds_mbrInfo.findRowExpr("MBR_ID == '" + aDelIdArr[i] + "'");

        			if(findRow >= 0)
        			{
        				this.ds_mbrInfo.setColumn(findRow, "CHK", 0);
        			}
        		}

        		var sTotText = "선택건수 : <b v='true'>" + this.ds_mbrInfoSelect.rowcount + "</b> 건";
        		this.sta_totalCountSelect.set_text(sTotText);

        		this.grd_cpnPubcMbrSelect.setCellProperty("head", 0, "text", "0");
        	}
        };

        /**
         * 선택 버튼 클릭 시
         */
        this.btn_select_onclick = function(obj,e)
        {
        // 	var chkCnt = this.ds_mbrInfoSelect.getCaseCount("CHK == 1");
        //
        // 	if(chkCnt == 0)
        // 	{
        // 		alert("선택된 항목이 없습니다.");
        // 		return;
        // 	}

        	var resData = {};
        	var resList = [];

        	for(var i = 0; i< this.ds_mbrInfoSelect.rowcount; i++)
        	{
        		resData.CO_CD = this.ds_mbrInfoSelect.getColumn(i, "CO_CD");
        		resData.MBR_ID = this.ds_mbrInfoSelect.getColumn(i, "MBR_ID");
        		resData.MBR_NM = this.ds_mbrInfoSelect.getColumn(i, "MBR_NM");
        		resData.MASK_MBR_NM = this.ds_mbrInfoSelect.getColumn(i, "MASK_MBR_NM");
        		resData.LOGN_ID = this.ds_mbrInfoSelect.getColumn(i, "LOGN_ID");
        		resData.MASK_LOGN_ID = this.ds_mbrInfoSelect.getColumn(i, "MASK_LOGN_ID");
        		resData.CUST_SPR_CD = this.ds_mbrInfoSelect.getColumn(i, "CUST_SPR_CD");
        		resData.CUST_SPR_CD_NM = this.ds_mbrInfoSelect.getColumn(i, "CUST_SPR_CD_NM");
        		resData.BZPLC_ID = this.ds_mbrInfoSelect.getColumn(i, "BZPLC_ID");
        		resData.BZPLC_NM = this.ds_mbrInfoSelect.getColumn(i, "BZPLC_NM");
        		resData.OPR_UNIT_ID = this.ds_mbrInfoSelect.getColumn(i, "OPR_UNIT_ID");
        		resData.OPR_UNIT_NM = this.ds_mbrInfoSelect.getColumn(i, "OPR_UNIT_NM");
        		resData.DEPT_ID = this.ds_mbrInfoSelect.getColumn(i, "DEPT_ID");
        		resData.DEPT_NM = this.ds_mbrInfoSelect.getColumn(i, "DEPT_NM");

        		resList.push(JSON.stringify(resData));
        	}

        	this.close(JSON.stringify(resList));
        };










        /* ===============================================================
         * 6. User Function
         *  - 사용자 구현 함수 영역
         * =============================================================== */

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

        		case "FORM_INIT" :

        			// 입력 항목 초기화

        			// dataset 영역
        			this.ds_search.clearData();
        			var nRow = this.ds_search.addRow();

        			this.ds_mbrInfo.clearData();
        			this.ds_mbrInfoSelect.clearData();

        			// grid 영역
        			this.sta_totalCount.set_text("총 <b v='true'>0 </b>건");
        			this.sta_totalCountSelect.set_text("선택건수 : <b v='true'>0</b>건");
        			this.sta_totCnt.set_text("(최대 조회수 : 1,000건)");

        			this.grd_cpnPubcMbr.set_enable(true);
        			this.grd_cpnPubcMbrSelect.set_enable(true);

        			this.grd_cpnPubcMbr.set_nodatatext("조회된 결과가 없습니다.");
        			this.grd_cpnPubcMbrSelect.set_nodatatext("추가한 항목이 없습니다.");

        			this.fn_init("SEARCH_INIT");

        			break;

        		case "SEARCH_INIT" :

        			// 검색조건 셋팅

        			this.ds_mbrInfo.insertRow(0);

        			this.ds_mbrInfo.setColumn(0, "BZPLC_ID",  this.ds_search.getColumn(0, "BZPLC_ID"));
        			this.ds_mbrInfo.setColumn(0, "BZPLC_NM",  this.ds_search.getColumn(0, "BZPLC_NM"));
        			this.ds_mbrInfo.setColumn(0, "OPR_UNIT_ID",  this.ds_search.getColumn(0, "OPR_UNIT_ID"));
        			this.ds_mbrInfo.setColumn(0, "OPR_UNIT_NM",  this.ds_search.getColumn(0, "OPR_UNIT_NM"));
        			this.ds_mbrInfo.setColumn(0, "DEPT_ID",  this.ds_search.getColumn(0, "DEPT_ID"));
        			this.ds_mbrInfo.setColumn(0, "DEPT_NM",  this.ds_search.getColumn(0, "DEPT_NM"));
        			this.ds_mbrInfo.setColumn(0, "MBR_ID",  this.ds_search.getColumn(0, "MBR_ID"));
        			this.ds_mbrInfo.setColumn(0, "MBR_NM",  this.ds_search.getColumn(0, "MBR_NM"));
        			this.ds_mbrInfo.setColumn(0, "DRMC_YN",  this.ds_search.getColumn(0, "DRMC_YN"));

        			this.ds_mbrInfo.set_rowposition(-1);

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
        	this.fn_regMethodShiftENTER("btn_select_onclick");
        };








        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_NA_20_onload,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.grd_cpnPubcMbr.addEventHandler("oncelldblclick",this.grd_cpnPubcMbr_oncelldblclick,this);
            this.grd_cpnPubcMbr.addEventHandler("onenterdown",this.grd_cpnPubcMbr_onenterdown,this);
            this.grd_cpnPubcMbr.addEventHandler("oncellclick",this.grd_cpnPubcMbr_oncellclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.btn_select.addEventHandler("onclick",this.btn_select_onclick,this);
            this.sta_noData.addEventHandler("onclick",this.Div00_sta_noData_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_NA_20.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
