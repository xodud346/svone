(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("work04");
            this.set_titletext("거래명세서관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"RPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RPT_URL\" type=\"STRING\" size=\"256\"/><Column id=\"SALSPRC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COL_CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SALSPRC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search_origin", this);
            obj._setContents("<ColumnInfo><Column id=\"MSG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_salsprc_YN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">유</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"NAME\">무</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn_grd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_salsprc_YN_grd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">유</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"NAME\">무</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_excel", this);
            obj._setContents("<ColumnInfo><Column id=\"RPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RPT_URL\" type=\"STRING\" size=\"256\"/><Column id=\"SALSPRC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COL_CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,"140","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","20","21",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static20","20","21","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Report ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static22","631","21","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Report 명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo50","159","-73","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo51","1021","-73","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"94","60","26","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("RPT_ID","160","25","461","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("RPT_NM","771","25",null,"24","28",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnClear",null,"94","60","26","btn_search:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("초기화");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static21_00","20","52",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static20_00","20","52","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("판매가여부");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static22_00","631","52","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("USE_YN","771","56","139","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_innerdataset("ds_useYn");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("SALSPRC_YN","160","56","139","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_innerdataset("ds_salsprc_YN");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","208",null,null,"20","96",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("none");
            obj.set_autosizingtype("none");
            obj.set_nodatatext("조회 결과가 없습니다.");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.set_selecttype("area");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"27\"/><Column size=\"100\"/><Column size=\"112\"/><Column size=\"105\"/><Column size=\"275\"/><Column size=\"66\"/><Column size=\"94\"/><Column size=\"108\"/><Column size=\"80\"/><Column size=\"115\"/><Column size=\"114\"/><Column size=\"113\"/><Column size=\"124\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"Report ID\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"2\" text=\"Report 명\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"3\" text=\"판매가여부\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"4\" text=\"URL\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"5\" text=\"미리보기\" displaytype=\"normal\"/><Cell col=\"6\" text=\"사용여부\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"7\" text=\"등록일자\"/><Cell col=\"8\" text=\"등록자ID\"/><Cell col=\"9\" text=\"등록자명\"/><Cell col=\"10\" text=\"수정일자\"/><Cell col=\"11\" text=\"수정자ID\"/><Cell col=\"12\" text=\"수정자명\"/></Band><Band id=\"body\"><Cell text=\"bind:COL_CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:RPT_ID\" edittype=\"expr:dataset.getRowType(currow) == 2 ? &quot;text&quot; : &quot;none&quot;\" editmaxlength=\"10\"/><Cell col=\"2\" text=\"bind:RPT_NM\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:SALSPRC_YN\" edittype=\"combo\" combodataset=\"ds_salsprc_YN_grd\" combocodecol=\"CODE\" combodatacol=\"NAME\" displaytype=\"combotext\"/><Cell col=\"4\" text=\"bind:RPT_URL\" edittype=\"text\"/><Cell col=\"5\" text=\"미리보기\" displaytype=\"buttoncontrol\"/><Cell col=\"6\" text=\"bind:USE_YN\" edittype=\"combo\" combodataset=\"ds_useYn_grd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\" displaytype=\"combotext\"/><Cell col=\"7\" text=\"bind:REG_DTM\"/><Cell col=\"8\" text=\"bind:REGPSN_ID\"/><Cell col=\"9\" text=\"bind:REGPSN_NM\"/><Cell col=\"10\" text=\"bind:UPD_DTM\"/><Cell col=\"11\" text=\"bind:UPDPSN_ID\"/><Cell col=\"12\" text=\"bind:UPDPSN_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20",null,"270","25",null,"grd_list:2",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("(총 0건, 1 / 1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnLayoutSave",null,null,"110","28","134","grd_list:10",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("레이아웃 저장");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,null,"110","28","btnLayoutSave:4","grd_list:10",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"81","28","btnExcel:4","grd_list:10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,null,"81","28","btnSave:4","grd_list:10",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,null,"81","28","btnDel:4","grd_list:10",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","grd_list:30",null,"36","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnLayoutClear",null,null,"110","28","20","grd_list:10",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("레이아웃 초기화");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list_excel","20","955",null,null,"-4","-219",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_list_excel");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj.set_nodatatext("조회 결과가 없습니다.");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"112\"/><Column size=\"105\"/><Column size=\"275\"/><Column size=\"94\"/><Column size=\"108\"/><Column size=\"80\"/><Column size=\"115\"/><Column size=\"114\"/><Column size=\"113\"/><Column size=\"124\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"Report ID\" cssclass=\"grd_WF_bg_image\" autosizecol=\"default\"/><Cell col=\"1\" text=\"Report 명\" cssclass=\"grd_WF_bg_image\" autosizecol=\"default\"/><Cell col=\"2\" text=\"판매가여부\" cssclass=\"grd_WF_bg_image\" autosizecol=\"default\"/><Cell col=\"3\" text=\"URL\" cssclass=\"grd_WF_bg_image\" autosizecol=\"default\"/><Cell col=\"4\" text=\"사용여부\" cssclass=\"grd_WF_bg_image\" autosizecol=\"default\"/><Cell col=\"5\" text=\"등록일자\" autosizecol=\"default\"/><Cell col=\"6\" text=\"등록자ID\" autosizecol=\"default\"/><Cell col=\"7\" text=\"등록자명\" autosizecol=\"default\"/><Cell col=\"8\" text=\"수정일자\" autosizecol=\"default\"/><Cell col=\"9\" text=\"수정자ID\" autosizecol=\"default\"/><Cell col=\"10\" text=\"수정자명\" autosizecol=\"default\"/></Band><Band id=\"body\"><Cell text=\"bind:RPT_ID\" edittype=\"expr:dataset.getRowType(currow) == 2 ? &quot;text&quot; : &quot;none&quot;\" editmaxlength=\"10\"/><Cell col=\"1\" text=\"bind:RPT_NM\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:SALSPRC_YN\" edittype=\"combo\" combodataset=\"ds_salsprc_YN_grd\" combocodecol=\"CODE\" combodatacol=\"NAME\" displaytype=\"combotext\"/><Cell col=\"3\" text=\"bind:RPT_URL\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:USE_YN\" edittype=\"combo\" combodataset=\"ds_useYn_grd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\" displaytype=\"combotext\"/><Cell col=\"5\" text=\"bind:REG_DTM\"/><Cell col=\"6\" text=\"bind:REGPSN_ID\"/><Cell col=\"7\" text=\"bind:REGPSN_NM\"/><Cell col=\"8\" text=\"bind:UPD_DTM\"/><Cell col=\"9\" text=\"bind:UPDPSN_ID\"/><Cell col=\"10\" text=\"bind:UPDPSN_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.USE_YN","value","ds_search","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.RPT_ID","value","ds_search","RPT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.RPT_NM","value","ds_search","RPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.SALSPRC_YN","value","ds_search","SALSPRC_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_YA_15.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_YA_15.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_YA_15.xfdl", function() {
        /***********************************************************/
        /* 프 로 그 램 : SSP_BO_YA_15
        /* 작 성 일 자 : 2022/03/11
        /* 작  성   자 : 이성민
        /* 설       명 : 시스템관리 > 거래명세서관리
        /***********************************************************/

        /* 스크립트 인클루드 */
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object
        this.totalCount = 0; //토탈카운트
        this.pageViewCnt = 20; //페이지당 보여줄 목록 개수

        //필수값 체크
        this.valiGridIds = [
        	  {"name" : "Report ID", "id" : "RPT_ID"}
        	, {"name" : "Report 명", "id" : "RPT_NM"}
        	, {"name" : "URL", "id" : "RPT_URL"}
        	//, {"name" : "판매가 여부", "id" : "SALSPRC_YN"}
        	//, {"name" : "사용여부", "id" : "USE_YN"}
        ];

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//공통코드 조회
        	this.fn_commonCodeSearch();

        	// 단축키
        	this.gfn_initFormHotKey({
        		ENTER : "",
        		ESC : "",
        		CTRL_ENTER : "Div00_btn_search_onclick",
        		SHIFT_ENTER : "",
        		SHIFT_S : "btnSave_onclick",
        		SHIFT_A : "",
        		SHIFT_D : "",
        	});
        };

        /*this.fn_onkeyup = function(obj:nexacro.Form,e:nexacro.KeyEventInfo){
        	var objType = obj.getFocus();
        	if( e.keycode == 13 && objType == "[object Edit]" ) {
        		//조회
        		this.fn_search(1);
        	}
        };*/

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //공통코드조회
        this.fn_commonCodeSearch = function(){
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_useYn=ds_output1";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "USE_YN");
        	this.ds_search.setColumn(0, "LANG_CD", "KO");

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //조회
        this.fn_search = function(page) {
        	 var sSvcId = "selectTransStatMngList";
             var sUrl = "/co/select-trans-stat-mng-list.do";
        	 var inDs = "ds_search=ds_search"
             var outDs = "ds_list=ds_output";
             var arg;
             var callback = "fn_callBack";

        	 // 조회버튼 클릭시 페이징 초기화 시킨다.
        	 if( page == 0 ) {
        		this.div_paging.uPage=1;
        		this.div_paging.uPageNum=0;
        		this.ds_search.setColumn(0,"START_NUM", 0);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.pageViewCnt);
        	 }

        	 this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }

        //저장
        this.fn_save = function() {
        	var sSvcId = "saveTransStatMng";
        	var sUrl = "/co/save-trans-stat-mng.do";
        	var inDs = "ds_save=ds_list:U"
        	var outDs = "";
        	var arg;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg) {

        	switch(svcID) {
        		case "commonCodeSearch" :

        			//전체값이 그리드에 보이면 안되므로 복사본 설정
        			this.ds_useYn_grd.copyData(this.ds_useYn);
        			this.ds_salsprc_YN_grd.copyData(this.ds_salsprc_YN);

        			//사용여부 전체값 추가
        			this.ds_useYn.insertRow(0);
        			this.ds_useYn.setColumn(0, "COM_DTL_CD", "");
        			this.ds_useYn.setColumn(0, "COM_DTL_CD_NM", "전체");
        			this.Div00.form.USE_YN.set_index(0);

        			//판매가여부 초기값
        			this.ds_salsprc_YN.insertRow(0);
        			this.ds_salsprc_YN.setColumn(0, "CODE", "");
        			this.ds_salsprc_YN.setColumn(0, "NAME", "전체");
        			this.Div00.form.SALSPRC_YN.set_index(0);

        			//검색 초기값 설정
        			this.ds_search_origin.copyData(this.ds_search);

        			break;

        		case "selectTransStatMngList" :
        			//페이징 처리
        			this.div_paging.form.cfn_createPage(this.div_paging, this.totalCount, this.pageViewCnt, "fn_pageCallback");
        			break;

        		case "saveTransStatMng" :
        			if( errorCode == 0 ) {
        				alert(this.gfn_getMessage("ERRC000121")); //정상적으로 처리되었습니다.
        				this.fn_search(0);
        			}
        			break;

        		case "selectTransStatMngExcelList" :
        			this.ofn_exportExcel({ form:this, grid:this.grd_list_excel, fileName:"거래명세서관리" });
        			break;

        		default : "";
        	}

        }

        //페이징 콜백
        this.fn_pageCallback = function(sFlag){
        	var oPaging = this.div_paging;

        	if(sFlag){
        		//this.ds_search.setColumn(0,"START_NUM", (oPaging.uPageNum == 0 || oPaging.uPageNum == 1 ? 0 : ( oPaging.uPageNum -1 ) * 10));
        		this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.pageViewCnt);
        		this.fn_search();
        	}

        	var sTotText = "(총 "+ this.gfn_appendComma(oPaging.uTotCount, 0)+"건, "+ oPaging.uPage +" / "+ oPaging.uPageCnt +")";
        	this.totalPageCount.set_text(sTotText);
        }

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){

        	//페이징 초기 설정
        	this.div_paging.uPage = 1;
        	this.div_paging.uPageNum = 0;
        	this.div_paging.uPageRowCnt = 10;
        	this.div_paging.uPageCnt = 0;
        	this.div_paging.uTotCount = 0;

        	//grid 개인화(전제조건 : grid Head가 무조건 1Row인 경우)
        	this.uGridList = "grd_list";
        	this.grd_list.uRightMouse = "true";
        	this.grd_list.uPersonalFlag = "true";
        	this.grd_list.uDefaultFormat = "RPT_ID,RPT_NM,RPT_URL,SALSPRC_YN,USE_YN,REG_DTM,REGPSN_ID,UPD_DTM,UPDPSN_ID";
        }

        this.cfn_personalPopupClose = function(sRet){
        	this.grd_list.set_formats(sRet);
        	this.pdiv_personal.closePopup();
        }

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        // 검색영역 초기화
        this.clear = function() {
        	this.ds_search.copyData(this.ds_search_origin);
        };

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        //조회버튼
        this.Div00_btn_search_onclick = function(obj,e)
        {
        	this.fn_search(0);
        };

        //추가버튼
        this.btnAdd_onclick = function(obj,e)
        {
        	var idx = this.ds_list.addRow();
        	this.ds_list.setColumn(idx, "USE_YN", "Y");
        	this.ds_list.setColumn(idx, "SALSPRC_YN", "Y");

        	this.grd_list.setCellPos(1);
        	this.grd_list.showEditor(true);
        };

        //삭제버튼
        this.btnDel_onclick = function(obj,e)
        {
        	var sReturn = this.confirm(this.gfn_getMessage("ERRC000048")); //삭제하시겠습니까?
        	if(sReturn == true){
        		var chkCnt = this.ds_list.getCaseCount("COL_CHK==1");

        		if( chkCnt == 0 ) {
        			alert(this.gfn_getMessage("COMS000008", ["선택", "행"])); //선택된 행이 없습니다.
        			return false;
        		}

        		var delArr = [];
        		for(var i=0; i < this.ds_list.rowcount; i++){
        			var checkbox = this.ds_list.getColumn(i, "COL_CHK");
        			if( checkbox == 1 ) {
        				delArr.push(i);
        			}
        		}
        		this.ds_list.deleteMultiRows(delArr);
        	}

        	/*
        	var sReturn = this.confirm("삭제하시겠습니까?");
        	if(sReturn == true){
        		this.fn_save();
        	}
        	*/

        };

        //저장버튼
        this.btnSave_onclick = function(obj,e)
        {
        	var chkDsChange = this.fn_dataChangeCheck(this.ds_list);
        	if( !chkDsChange ) {
        		alert(this.gfn_getMessage("COMS000008", ["수정", "내용"])); //선택된 행이 없습니다.
        		return false;
        	} else {
        		//그리드 필수값 체크
        		var validation = this.fn_validationGrid(this.grd_list, this.valiGridIds, this.ds_list);

        		if(validation){
        			var sReturn = this.confirm(this.gfn_getMessage("COMS000013", ["저장"])); //저장하시겠습니까
        			if(sReturn == true){
        				this.fn_save();
        			}
        		}
        	}
        };


        this.ds_list_cancolumnchange = function(obj,e)
        {
        	if( e.columnid == "MSG_CD" ) {
        		var engNum = /^[a-zA-Z0-9]*$/gi;

        		if(e.newvalue != "")
        		{
        			var objResult = engNum.test(e.newvalue);
        			if(!objResult) {
        				alert(this.gfn_getMessage("COMS000017", ["메시지 코드", "영문/숫자만"])); //메시지 코드는 영문/숫자만 입력 가능합니다.
        				return false;
        			}
        		}
        	}
        };

        //레이아웃 저장 버튼
        this.btnLayoutSave_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grd_list", this.grd_list.getCurFormatString());
        };

        //레이아웃 초기화
        this.btnLayoutClear_onclick = function(obj,e)
        {
        	this.gfn_personalReset("grd_list");
        	this.grd_list.set_formats(this.grd_list.uOrgFormat);
        };

        //초기화
        this.Div00_btnClear_onclick = function(obj,e)
        {
        	this.clear();
        };

        // 그리드 클릭
        this.grd_list_oncellclick = function(obj,e)
        {
        	if( e.col == 5) {
        		var rprtId = this.ds_list.getColumn(obj.currentrow, "RPT_ID");
        		var params = [];

        		switch (rprtId) {
        			case "SD00001":
        				params.push({
        					"REPORT_ID": "/OUT_COM/OUT00000_1(price)"
        				  , "VALUES": ["", "", "", "pre"]
        		        });
        				break;
        			case "SD00002":
        				params.push({
        					"REPORT_ID": "/OUT_COM/OUT00000_2(nonprice)"
        				  , "VALUES": ["", "", "", "pre"]
        		        });
        				break;
        			default:
        				alert("추후 개발 예정");
        				return;

        		}

        		var objParam = {
        			reportParams : params
        		};

        		this.gfn_openPopup("SSP_BO_YA_16", "CO_POP::SSP_BO_YA_16.xfdl", objParam);
        	}
        };

        //엑셀 다운로드
        this.btnExcel_onclick = function(obj,e)
        {
        	if(this.ds_search.getRowType(0) == Dataset.ROWTYPE_UPDATE) {
        		alert(this.gfn_getMessage("COMS000007")); //조회 조건이 변경 되었습니다.\n다시 조회하시기 바랍니다.
        		return false;
        	}

        	 var sSvcId = "selectTransStatMngExcelList";
             var sUrl = "/co/select-trans-stat-mng-list.do";
        	 var inDs = "ds_search=ds_search"
             var outDs = "ds_list_excel=ds_output";
             var arg;
             var callback = "fn_callBack";

        	this.ds_search.setColumn(0,"START_NUM", null);
        	this.ds_search.setColumn(0,"ROW_COUNT", null);

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.Div00.addEventHandler("onkeyup",this.Div00_onkeyup,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.Div00_btn_search_onclick,this);
            this.Div00.form.btnClear.addEventHandler("onclick",this.Div00_btnClear_onclick,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.btnLayoutSave.addEventHandler("onclick",this.btnLayoutSave_onclick,this);
            this.btnExcel.addEventHandler("onclick",this.btnExcel_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.btnLayoutClear.addEventHandler("onclick",this.btnLayoutClear_onclick,this);
            this.grd_list_excel.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.ds_list.addEventHandler("cancolumnchange",this.ds_list_cancolumnchange,this);
            this.ds_list_excel.addEventHandler("cancolumnchange",this.ds_list_cancolumnchange,this);
        };
        this.loadIncludeScript("SSP_BO_YA_15.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
