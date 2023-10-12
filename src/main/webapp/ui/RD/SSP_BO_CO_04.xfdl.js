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
            this.set_titletext("샘풀  POPUP");
            this.set_background("black");
            if (Form == this.constructor)
            {
                this._setFormPosition(675,840);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDummy", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsStatusDiv", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ADDR\" type=\"STRING\" size=\"32\"/><Column id=\"CD_DC\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"32\"/><Column id=\"REF_2\" type=\"STRING\" size=\"32\"/><Column id=\"REF_3\" type=\"STRING\" size=\"32\"/><Column id=\"REF_4\" type=\"STRING\" size=\"32\"/><Column id=\"REF_5\" type=\"STRING\" size=\"32\"/><Column id=\"REF_6\" type=\"STRING\" size=\"32\"/><Column id=\"REF_7\" type=\"STRING\" size=\"32\"/><Column id=\"REF_8\" type=\"STRING\" size=\"32\"/><Column id=\"REF_9\" type=\"STRING\" size=\"32\"/><Column id=\"REF_10\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"AUTO_PLUS\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BIZNO\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"CHK\">0</Col><Col id=\"BZPLC_ID\">1111</Col><Col id=\"BZPLC_NM\">테스트1</Col><Col id=\"BIZNO\">1111</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"BZPLC_ID\">2222</Col><Col id=\"BZPLC_NM\">테스트2</Col><Col id=\"BIZNO\">3333</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"BZPLC_ID\">3333</Col><Col id=\"BZPLC_NM\">테스트3</Col><Col id=\"BIZNO\">34444</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"BZPLC_ID\">34434</Col><Col id=\"BZPLC_NM\">테스트4</Col><Col id=\"BIZNO\">2222</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"FORM_ID\" type=\"STRING\" size=\"32\"/><Column id=\"FORM_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PROG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"FORM_ID\"/><Col id=\"FORM_PATH\"/><Col id=\"FORM_NM\"/><Col id=\"USER_YN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tlist", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BIZNO\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_bg","-1","22",null,null,"1","0",null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","19","50","635","43",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","20",null,null,"20","20","46",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0",null,null,"20","0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","0","20",null,null,"20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static05",null,"0","20",null,"0","20",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20","70","350","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("총 0건 (최대 조회수 : 1,000건)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","594","69","60","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","20","23","300","36",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("제목조회");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","0","60",null,"10","20",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","98","99.85%","10",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","403","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"413","65","28","20",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_select");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","0","442","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_selcnt","20","427","250","14",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("선택건수 : 0건");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_select","45.19%","790","65","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_select");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"792","60","26","21",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("삭제");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","19","108",null,"295","21",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("none");
            obj.set_cellsizebandtype("body");
            obj.set_autoenter("select");
            obj.set_positionstep("0");
            obj.set_cellsizingtype("col");
            obj.set_selecttype("multirow");
            obj.set_autosizebandtype("body");
            obj.set_scrollbartype("auto auto");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"96\"/><Column size=\"292\"/><Column size=\"87\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"사업장ID\"/><Cell col=\"2\" text=\"사업장명\"/><Cell col=\"3\" text=\"사업자번호\"/></Band><Band id=\"body\"><Cell edittype=\"expr:currow == 0 ? &quot;none&quot; :  &quot;checkbox&quot; \" displaytype=\"expr:currow == 0 ? &quot;imagecontrol&quot; : &quot;checkboxcontrol&quot;\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:BZPLC_ID\" textAlign=\"center\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/><Cell col=\"2\" text=\"bind:BZPLC_NM\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" cssclass=\"grd_WF_left\"/><Cell col=\"3\" text=\"bind:BIZNO\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_noData","19","186",null,"188","21",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("조회된 결과가 없습니다.");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_tlist","20","452",null,"322","21",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_binddataset("ds_tlist");
            obj.set_autofittype("none");
            obj.set_cellsizebandtype("body");
            obj.set_positionstep("0");
            obj.set_cellsizingtype("col");
            obj.set_scrollbartype("auto auto");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"96\"/><Column size=\"292\"/><Column size=\"87\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"사업장ID\"/><Cell col=\"2\" text=\"사업장명\"/><Cell col=\"3\" text=\"사업자번호\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" textAlign=\"center\" text=\"bind:BZPLC_ID\"/><Cell col=\"2\" text=\"bind:BZPLC_NM\" cssclass=\"grd_WF_left\"/><Cell col=\"3\" text=\"bind:BIZNO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","654","0","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("X");
            obj.set_visible("true");
            obj.set_background("black");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt00","456","72",null,"25","159",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("최대조회수");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_maxCnt","520","70",null,"26","89",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_textAlign("right");
            obj.set_enable("false");
            obj.set_text("dddd");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",675,840,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_maxCnt","value","ds_search","ROW_COUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsDummy");
            this._addPreloadList("data","","ds_list");
            this._addPreloadList("data","","ds_tlist");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CO_04.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_CO_04.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): POP005StorPopupP01.xfdl(화면관리팝업)
        * 작 성			일 명: 나용철
        * 작 성	    	일 자: 2018/09/17
        * 변 경     	일 자:
        * 변 경			자 명:
        * 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술
        */
        /**********************************************************************
        	01. 전처리 공통 함수 선언
        ***********************************************************************/
        this.executeIncludeScript("RD::rdMain.xjs"); /*include "RD::rdMain.xjs"*/;
        /**********************************************************************
        	02. 폼 변수 정의
        ***********************************************************************/
        this.sOptinoArg1;
        this.sOptinoArg2;
        this.sParamArg1;
        this.sParamArg2;
        this.sParamArg3;
        /**********************************************************************
        	03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.form_onload = function(obj,e)
        {
        	//폼에 공통으로 로드시 사용하는 함수.
        	this.gfn_formOnLoad(this);
        	//사용자 초기화 함수
        	this.fn_formInit();
        };
        /**
         * 기능 : 폼언 로드(닫기전 셋팅)  Setting
         */
        this.form_onclose = function(obj,e)
        {

        };
        /**********************************************************************
        	04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
        	/******************* 기본셋팅 *********************/
        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sOp01))
        	{
        		 this.sOptinoArg1 = this.getOwnerFrame().pv_sOp01;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sOp02))
        	{
        		 this.sOptinoArg2 = this.getOwnerFrame().pv_sOp02;
        	}


        	/******************* 넘어온 인자값 *********************/
        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal01))
        	{
        		 this.sParamArg1 = this.getOwnerFrame().pv_sVal01;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal02))
        	{
        		 this.sParamArg2 = this.getOwnerFrame().pv_sVal02;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal03))
        	{
        		 this.sParamArg3 = this.getOwnerFrame().pv_sVal03;
        	}

        	var strDs   = "dsStatusDiv";		        // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
        	var strLgcd = "000016";           		// 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
        	var strComb = "X";   								// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
        	var strOptn = "";										// 조건문 " AND COMM_IT02 = '" + vip + "'|||";
        	var svcId 	= "Init";

           // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
           // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.fn_CmmnMultiComboLoad(strDs
        							  , strLgcd
        							  , strComb
        							  , strOptn
        							  , svcId);
        };

        this.postformInit = function()
        {
        	this.fn_initGrid(this.sOptinoArg1); // 파라미터 "Y" 그리드에 셋팅 / "N"  셋팅을 안됨

        	if(this.sOptinoArg2 == "Y")
        	{
        		this.btn_search.setFocus();
        		this.btn_search.click();
        	}
        };

        /**
         *  초기화셋팅
         */
        this.fn_initGrid = function(sSetComponet)
        {
        	this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();
        	this.ds_search.setColumn(nRow,"ROW_COUNT","1000");
        	if(this.ds_list.rowcount > 0)
        	{
        		//팝업창으로 넘어온 값이 ''면 sta_noData 안보이도록 처리
        		this.sta_noData.sendToBack();
        	}else
        	{
        		this.sta_noData.bringToFront();
        	}
        	this.ds_list.insertRow(0);
        	if(sSetComponet == "Y")
        	{
        		this.ds_search.setColumn(nRow, "BZPLC_ID",   this.sParamArg1);
        		this.ds_search.setColumn(nRow, "BZPLC_NM",   this.sParamArg2);
        		this.ds_search.setColumn(nRow, "BIZNO",    this.sParamArg3);

        		this.ds_list.setColumn(nRow,"BZPLC_ID",	this.ds_search.getColumn(nRow,"BZPLC_ID"));
        		this.ds_list.setColumn(nRow,"BZPLC_NM",	this.ds_search.getColumn(nRow,"BZPLC_NM"));
        		this.ds_list.setColumn(nRow,"BIZNO ",	this.ds_search.getColumn(nRow,"BIZNO"));

        	}
        	this.ds_list.set_rowposition(-1);

        };
        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
        	if(nErrorCode != 0)
        	{
        		this.gfn_alert(sErrorMsg,"에러정보","","error");
        		return false;
        	}else
        	{
        		/*sSvcId (Transaction Id)*/
        		switch(sSvcId)
        		{
        			case "Init":
        				this.postformInit();
        				break;
        			case "Search":
        			    this.postSearch();
        				break;
        			case "Save":
        			    this.postSave();
        				break;
        			case "Insert":
        				this.postAdd();
        				break;
        			case "Delete":
        				this.postDel();
        				break;
        			default:
        				break;
        		}
        	}
        };
        /**********************************************************************
        	05. 조회 함수 선언
        ***********************************************************************/
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_searchMapSetting();
        	this.fn_search();
        };
        /**
         * 기능 : 조회 전 실행
         */
        this.preSearch = function()
        {
        	// 조회조건 셋팅
        	return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_search = function()
        {
        	if(!this.preSearch())
        	{
        		return false;
        	}
        	var strSvc 		= "Search";
        	var strUrl 		= "/prj/pop/RetrieveStorPopupList.do";
        	var strInDs  	= "ds_input=ds_input";
        	var strOutDs 	= "ds_list=ds_list";
        	var strArg 		= "";
        	var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        	var strASync    = true;			//샏략이나 공백일시에는 ASync=true,싱크시는 false로
        	this.gfn_transaction( strSvc
        						, strUrl
        						, strInDs
        						, strOutDs
        						, strArg
        						, strCallBack
        						, strASync);
        };
        /**
         * 기능 : 조회 후 실행
         */
        this.postSearch = function()
        {
        	if(this.dsStoreMaster.rowcount < 1)
        	{
        		this.gfn_alert("조회자료가 없습니다.","조회정보","","information"); // 조회자료가 없습니다.
        	}
        	this.gfn_getRowCount(this.staRowCnt,this.dsStoreMaster);
        	//trace(this.dsStoreMaster.saveXML());
        };

        /**********************************************************************
        	06. 닫기버튼
        ***********************************************************************/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close("CLOSE");
        };

        /**********************************************************************
        	07.Get, Set Method
        ***********************************************************************/
         /**
         * 한행을 처리하는 로직
         **/
        this.selDataSet = function(dsobj)
        {
        	var odsObj   = this.all[dsobj];
        	var objRtnArr = new Array(2);
        	objRtnArr[0] = "SUCCESS";
        	objRtnArr[1] = odsObj.saveXML();
        	this.opener.fn_dsChildCopydsDummy(odsObj);
        	this.close(objRtnArr.toString());
        };
         /**
         * 원본파일을 복사
         **/
        this.dsCopyTemp = function (dsObj,tdsObj,sChkCol,dsIdNm)
        {
        	var odsObj = dsObj;
        	var ds = new Dataset;
        	this.dsDummy.copyData(odsObj);
        	this.dsDummy.clearData();
        	ds.copyData(this.dsDummy); 			//전체 구조을 카피하기위해 데이타를 카피

        	this.dsDummy.getColumn(i,sChkCol)
        	var TRow = -1;
        	var oRow = -1;
        	for(var i = 0; i < odsObj.rowcount; i++)
        	{
        		if(odsObj.getColumn(i,sChkCol) == 0 || i==0 )
        		{
        			continue;
        		}
        		TRow = ds.addRow();
        		ds.copyRow(TRow, odsObj, i);
        	}

        	for(var j=0; j < ds.rowcount; j++)
        	{
        		ds.setColumn(j,sChkCol,"0");      // 타겟체크박스초기화
        	}

        	for(var k=0; k < ds.rowcount; k++)
        	{
        		var id   = ds.getColumn(k,dsIdNm);
        		var iRow = tdsObj.findRow(dsIdNm,id);
        		if(iRow == -1)
        		{
        			oRow = tdsObj.addRow();
        			tdsObj.copyRow(oRow, ds, k);
        		}
        	}
        	//tdsObj.copyData(ds);
        	this.sta_selcnt.set_text("선택건수 :"+ tdsObj.rowcount +"건");
        };
        /**********************************************************************
        	08.기타 Control Event
        ***********************************************************************/
        /*
         * 데이타셋을 추가
         */
        this.btn_add_onclick = function(obj,e)
        {
        	this.dsCopyTemp(this.ds_list,this.ds_tlist,"CHK","BZPLC_ID");

        };
        /*
         * 선택데이타를 메인화면으로 넘겨줌.
         */
        this.btn_select_onclick = function(obj,e)
        {
        	var grdDs = this.grd_tlist.getBindDataset();
        	if(grdDs.rowcount < 1)
        	{
        		this.fn_alert("선택한 데이타가 없습니다.","조회정보","","information"); // 선택한 데이타가 없습니다.
        		return false;
        	}

        	this.selDataSet(this.grd_tlist.binddataset);

        };

        /*
         * 선택데이타를 삭제한다.
         */
        this.btn_del_onclick = function(obj,e)
        {
        	if(this.ds_tlist.findRow("CHK","1") < 0)
        	{
        		this.fn_alert("선택한 데이타가 없습니다.","조회정보","","information"); // 선택한 데이타가 없습니다.
        		return false;
        	}
        	// 멀티 삭제 처리
            for(var i = this.ds_tlist.rowcount-1; 0 <= i; i--)
            {
                if(this.ds_tlist.getColumn(i,"CHK") == 1)
                {
                    this.ds_tlist.deleteRow(i);
                }
            }
        };

        /*
         * 그리드 엔터조회
         */
        this.grd_list_onenterdown = function(obj,e)
        {
        	if(e.row == 0)
        	{
        		this.fn_searchMapSetting();
        		this.fn_search();
        	}
        };

        /*
         * 조회조건을 세팅한다
         */
        this.fn_searchMapSetting = function()
        {
        	this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();

        	this.ds_search.setColumn(nRow,"BZPLC_ID",	this.ds_list.getColumn(0,"BZPLC_ID"));
        	this.ds_search.setColumn(nRow,"BZPLC_NM",	this.ds_list.getColumn(0,"BZPLC_NM"));
        	this.ds_search.setColumn(nRow,"BIZNO ",  	this.ds_list.getColumn(0,"BIZNO"));
        };













        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_select.addEventHandler("onclick",this.btn_select_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.grd_list.addEventHandler("onenterdown",this.grd_list_onenterdown,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list01_oncellclick,this);
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list01_oncelldblclick,this);
            this.sta_noData.addEventHandler("onclick",this.sta_noData_onclick,this);
            this.grd_tlist.addEventHandler("oncelldblclick",this.Div00_grd_list02_oncelldblclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.edt_maxCnt.addEventHandler("onkeyup",this.Div00_edt_maxCnt_onkeyup,this);
        };
        this.loadIncludeScript("SSP_BO_CO_04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
