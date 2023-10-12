(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PA_27");
            this.set_titletext("제조원 목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM_START\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM_END\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM_DIFF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NO\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FRT_EXPS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_SYM_UNN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM_DIFF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comboDate", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD\">0</Col><Col id=\"COM_DTL_CD_NM\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comboDateTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_saveRow", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,"132","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","20",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static65","20","51",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","20","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","762","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("수정자");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10","20","51","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("수정일자");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static66","762","51","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("제조원명 상이여부");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm","266","24","184","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_enable("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_mnfrPopup","edt_mnfrNm:4","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_startDate","160","55","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_enable("true");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static59","304","55","9","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("~");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_endDate","317","55","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_inqPerdSprCd","cal_endDate:4","55","130","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_innerdataset("ds_comboDate");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo50","159","-93","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo51","1021","-93","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"93","60","28","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"93","60","28","84",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("초기화");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNo","160","24","100","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_psnPopup","1195","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_oprtrNm","1007","24","184","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_enable("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_updpsnId","901","24","100","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("chk_mnfrNmDiffYn","902","56","18","23",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_text("CheckBox00");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_upload",null,"152","81","28","342",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("일괄수정");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exceldown",null,"152","110","28","228",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","190",null,null,"20","110",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_autoenter("select");
            obj.set_autosizingtype("none");
            obj.set_selecttype("multiarea");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"37\"/><Column size=\"97\"/><Column size=\"155\"/><Column size=\"155\"/><Column size=\"102\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"103\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"제조원ID\"/><Cell col=\"2\" text=\"S-MRO 제조원명\"/><Cell col=\"3\" text=\"SSP 제조원명\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"4\" text=\"제조원명 상이여부\"/><Cell col=\"5\" text=\"제조원명 수정일\"/><Cell col=\"6\" text=\"제조원명 수정자ID\"/><Cell col=\"7\" text=\"제조원명 수정자명\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:MNFR_NO\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:MRO_MNFR_NM\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:MNFR_NM\" displaytype=\"editcontrol\" editautoselect=\"false\" edittype=\"expr:CHK==1?&quot;text&quot;:&quot;readonly&quot;\" editmaxlength=\"100\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:MNFR_NM_DIFF_YN\" textAlign=\"center\" expr=\"MNFR_NM_DIFF_YN==&apos;Y&apos;?&apos;Y&apos;:&apos;&apos;\"/><Cell col=\"5\" text=\"bind:UPD_DTM\" textAlign=\"center\" displaytype=\"text\" calendardisplaynulltype=\"none\" calendardateformat=\"yyyy-MM-dd hh:mm:ss\"/><Cell col=\"6\" text=\"bind:UPDPSN_ID\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:UPDPSN_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","grd_list:30",null,"grd_list:30","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20","165","300","14",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("(총 0건 0 / 0)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"152","81","28","427",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"152","100","28","124",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutInit",null,"152","100","28","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("레이아웃 초기화");
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
        this.registerScript("SSP_BO_PA_27.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/

        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.mnfrTotalCount = 0;

        this.searchMnfrCount = 0;
        this.searchMnfrNo = "";
        this.searchMnfrNm = "";

        this.oprtrCount = 0;
        this.searchEmpNo = '';
        this.searchOprtrNm = '';
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();
        this.fn_onLoad = function(obj,e){
            //공통 함수 호출(필수)
            this.gfn_formOnLoad(this);
            //this.fn_search(true);
            this.fn_commonCodeSearch();
        };

        this.fn_onkeyup = function(obj,e){
        	var objType = obj.getFocus();

        	if( e.keycode == 13 && objType == "[object Edit]"){
        		var value = e.fromobject.value;
        		this.ds_search.setColumn(0, "CO_CD", this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD"));
        		this.ds_search.setColumn(0, "ROW_COUNT", 1000);
        		this.ds_search.setColumn(0, "START_NUM", 0);
        		if(this.gfn_lengthByte(this.gfn_allTrim(value)) > 0){
        			if( e.fromobject.id == "edt_mnfrNo") {	//제조원ID
        				this.ds_search.setColumn(0, "MNFR_NO", value);
        				this.fn_popupSearch("edt_mnfrNo", "/pr/prd-popup/select-manufacturer-popup-list.do");
        			}

        			if( e.fromobject.id == "edt_mnfrNm") {	//제조원명
        				this.ds_search.setColumn(0, "MNFR_NM", value);
        				this.fn_popupSearch("edt_mnfrNm", "/pr/prd-popup/select-manufacturer-popup-list.do");
        			}

        			if( e.fromobject.id == "edt_updpsnId") {	//담당자
        				this.ds_search.setColumn(0, "EMP_NO", value);
        				this.fn_popupSearch("edt_updpsnId", "/co/popup/select-operator-popup-list.do");
        			}
        		}
        	}
        }

        // 화면 단축키
        this.fn_onkeydown = function(obj,e)
        {
        	// CTRL + ENTER
        	if (e.keycode == 13 && e.ctrlkey == true) {
        		// 조회
        		this.btn_search_onclick();
        	}

        	// CTRL + s
        	if (e.keycode == 83 && e.ctrlkey == true) {
        		// 저장
        		this.btn_save_onclick();
        		event.preventDefault();
        	}
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function (bInit){

            var sSvcId = "search";
            var sUrl = "/pr/ctg-mng/select-manufacturer-list.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_list=manufacturerList";
            var arg = "";

            // 조회버튼 클릭시 페이징 초기화 시킨다.
            if(bInit) {
                this.div_paging.uPage = 1;
                this.div_paging.uPageNum = 0;
                this.ds_search.setColumn(0,"START_NUM",0);
                this.ds_search.setColumn(0,"ROW_COUNT",this.fv_oApp.gv_pageViewCnt);
            }

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        this.fn_save = function (bInit){

            var sSvcId = "save";
            var sUrl = "/pr/ctg-mng/save-manufacturer.do";
            var inDs = "ds_saveRow=ds_saveRow";
            var outDs = "ds_list=manufacturerList";
            var arg = "";

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //공통코드조회
        this.fn_commonCodeSearch = function(){

            var sSvcId = "commonCodeSearch";
            var sUrl = "/co/select-common-code-list.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_comboDate=ds_output1";
            var arg = "";

            this.ds_search.setColumn(0, "CODE_LIST", "INQ_PERD_SPR_CD");
            this.ds_search.setColumn(0, "LANG_CD", "KO");
            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //폼 엔터처리용
        this.fn_popupSearch = function (svcId, url){
        	var sSvcId = svcId;
        	var sUrl = url;
        	var inDs = "ds_search=ds_search";
        	var outDs = "";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg) {
            switch(svcID) {
                case "search" :
                    this.div_paging.form.cfn_createPage(this.div_paging,this.mnfrTotalCount,this.fv_oApp.gv_pageViewCnt,"fn_pageCallback");
                    break;

                case "commonCodeSearch" :
        			this.ds_comboDate.insertRow(0);
                    this.ds_comboDate.setColumn(0, "COM_DTL_CD", "");
                    this.ds_comboDate.setColumn(0, "COM_DTL_CD_NM", "전체");
                    this.Div00.form.cmb_inqPerdSprCd.set_index(0);
        			this.fn_setSearchDate();

                    break;

                case "save" :
                    this.fn_search(false);
                    break;

                case "edt_mnfrNo" :
                    if(this.searchMnfrCount>0){
        				this.Div00.form.edt_mnfrNm.set_value(this.searchMnfrNm);
        			}else{
        				var params = {coCd:this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD"), mnfrNo:this.Div00.form.edt_mnfrNo.value};
        				var options = {};
        				this.gfn_openPopup('btn_mnfrPopup', "PR_POP::SSP_BO_PP_08.xfdl", params,  "fn_popupCallback", options);
        			}
                    break;

        		case "edt_mnfrNm" :
                    if(this.searchMnfrCount==1){
        				this.Div00.form.edt_mnfrNo.set_value(this.searchMnfrNo);
        			}else{
        				this.Div00.form.edt_mnfrNo.set_value('');
        				var params = {coCd:this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD"), mnfrNm:this.Div00.form.edt_mnfrNm.value};
        				var options = {};
        				this.gfn_openPopup('btn_mnfrPopup', "PR_POP::SSP_BO_PP_08.xfdl", params,  "fn_popupCallback", options);
        			}
                    break;

        		case "edt_updpsnId" :
                    if(this.oprtrCount>0){
        				this.Div00.form.edt_oprtrNm.set_value(this.searchOprtrNm);
        			}else{
        				var params = {coCd:this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD"), oprtrId:this.Div00.form.edt_updpsnId.value};
        				var options = {};
        				this.gfn_openPopup('btn_psnPopup', "CO_POP::SSP_BO_PP_27.xfdl", params,  "fn_popupCallback", options);
        			}
                    break;
            }
        };

        this.fn_pageCallback = function(sFlag){
            var oPaging = this.div_paging;

            if(sFlag){
                this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
                this.ds_search.setColumn(0,"ROW_COUNT", this.fv_oApp.gv_pageViewCnt);
                this.fn_search();
            }

            var sTotText = "(총 "+ this.gfn_appendComma(oPaging.uTotCount, 0) +"건 </b>"+ this.gfn_appendComma(oPaging.uPage) +" / "+ this.gfn_appendComma(oPaging.uPageCnt) +")";
            this.totalPageCount.set_text(sTotText);
        };

        //팝업콜백
        this.fn_popupCallback = function(svcID, args){
            switch(svcID) {
                case "btn_mnfrPopup" :
                    var jsonData = JSON.parse(args);
                    this.Div00.form.edt_mnfrNo.set_value(jsonData.MNFR_NO);
                    this.Div00.form.edt_mnfrNm.set_value(jsonData.MNFR_NM);

                    break;

        		case "btn_psnPopup" :
                    var jsonData = JSON.parse(args);
                    this.Div00.form.edt_updpsnId.set_value(jsonData.EMP_NO);
                    this.Div00.form.edt_oprtrNm.set_value(jsonData.OPRTR_NM);

                    break;

            }
        }

        //정렬콜백
        this.fn_sortCallback = function(sGridId){
            var oGrid=null;
            if(sGridId == "grd_list"){
                oSortInfo = this.grd_list.uaSortInfo;
                this.ds_search.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
                this.ds_search.setColumn(0,"SORT_TYPE",oSortInfo.status);
                this.fn_search(true);
            }
        };


        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){
            //grid 초기 설정
            this.grd_list.uSortFlag = "false";
            this.grd_list.uServerSortFlag = "true";
            this.grd_list.uSortCallback = "fn_sortCallback";
            this.grd_list.uCellSizeType = "true";

            //페이징 초기 설정
            this.div_paging.uPage = 1;
            this.div_paging.uPageNum = 0;
            this.div_paging.uPageRowCnt = 10;
            this.div_paging.uPageCnt = 0;
            this.div_paging.uTotCount = 0;

        	this.uGridList="grd_list";
        	this.grd_list.uRightMouse="true";
        	this.grd_list.uPersonalFlag="true";
        	this.grd_list.uDefaultFormat="CHK|MNFR_NO|MRO_MNFR_NM|MNFR_NM|MNFR_NM_DIFF_YN|UPD_DTM|UPDPSN_ID|UPDPSN_NM";

        }
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        //기간 설정
        this.fn_setSearchDate = function() {

            var term = this.Div00.form.cmb_inqPerdSprCd.value;
            var objDate = new Date();
            var sToday = objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0');

            /* 1 : 1일,    2 : 1주일,    3 : 2주일,    4 : 1개월,    5 : 3개월,    6 : 6개월,    7 : 1년 */
        	if( term == "" ) {
                this.Div00.form.cal_startDate.set_value("");
        		this.Div00.form.cal_endDate.set_value("");
            } else {
        		if( term == "1" ) {
        			objDate.setDate(objDate.getDate());
        		} else if( term == "2" ) {
        			objDate.setDate(objDate.getDate() -6);
        		} else if( term == "3" ) {
        			objDate.setDate(objDate.getDate() -13);
        		} else if( term == "4" ) {
        			objDate.setMonth(objDate.getMonth() -1);
        			objDate.setDate(objDate.getDate() +1);
        		} else if( term == "5" ) {
        			objDate.setMonth(objDate.getMonth() -3);
        			objDate.setDate(objDate.getDate() +1);
        		} else if( term == "6" ) {
        			objDate.setMonth(objDate.getMonth() -6);
        			objDate.setDate(objDate.getDate() +1);
        		} else if( term == "7" ) {
        			objDate.setMonth(objDate.getMonth() -12);
        			objDate.setDate(objDate.getDate() +1);
        		}

        		this.Div00.form.cal_startDate.set_value(objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0'));
        		this.Div00.form.cal_endDate.set_value(sToday);
        	}
        };
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //달력콤보선택
        this.Div00_cmb_inqPerdSprCd_onitemchanged = function(obj,e)
        {
            this.fn_setSearchDate();
        };

        //조회버튼
        this.btn_search_onclick = function(obj,e)
        {
            this.ds_search.setColumn(0, "MNFR_NO", this.Div00.form.edt_mnfrNo.value); //제조원ID
            this.ds_search.setColumn(0, "MNFR_NM", this.Div00.form.edt_mnfrNm.value); //제조원명
            this.ds_search.setColumn(0, "UPDPSN_ID", this.Div00.form.edt_updpsnId.value); //수정자ID
            this.ds_search.setColumn(0, "OPRTR_NM", this.Div00.form.edt_oprtrNm.value);   //수정자명
            this.ds_search.setColumn(0, "DATE_UNIT", this.Div00.form.cmb_inqPerdSprCd.value);   //날짜단위
            this.ds_search.setColumn(0, "UPD_DTM_START", this.Div00.form.cal_startDate.value);  //수정일자시작
            this.ds_search.setColumn(0, "UPD_DTM_END", this.Div00.form.cal_endDate.value);  //수정일자종료
            this.ds_search.setColumn(0, "MNFR_NM_DIFF_YN", this.Div00.form.chk_mnfrNmDiffYn.value);  //제조원명 상이여부

            this.fn_search(true);
        };

        //제조원조회팝업
        this.Div00_btn_mnfrPopup_onclick = function(obj,e)
        {
            var params = {coCd:this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")};
            var options = {};
            this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_08.xfdl", params,  "fn_popupCallback", options);
        };

        //저장버튼
        this.btn_save_onclick = function(obj,e)
        {
            this.ds_saveRow.clearData();
            for(var i=0; i<this.ds_list.rowcount; i++)
            {
                if(this.ds_list.getColumn(i, "CHK")==1){//체크된것만
                    var nRow = this.ds_saveRow.addRow();
                    this.ds_saveRow.copyRow(nRow, this.ds_list, i);
                }
            }

            if(this.ds_saveRow.getRowCount()==0){
                alert('제조원을 선택해 주세요');
                return false;
            }

            for(var i=0; i<this.ds_saveRow.rowcount; i++)
            {
                if(this.ds_saveRow.getColumn(i, "MNFR_NM").trim().length==0){
                    alert('SSP 제조원명을 입력해 주세요');
                    return false;
                }
            }

            var sReturn = this.confirm("수정된 내용으로 저장하시겠습니까?");
            if(sReturn){
                this.fn_save();
            }
        };

        //초기화버튼
        this.Div00_btn_clear_onclick = function(obj,e)
        {
            var objDate = new Date();
            var today = objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0');
            this.ds_search.reset();
            this.Div00.form.edt_mnfrNo.set_value('');
            this.Div00.form.edt_mnfrNm.set_value('');
            this.Div00.form.edt_updpsnId.set_value('');
            this.Div00.form.edt_oprtrNm.set_value('');
            this.Div00.form.cmb_inqPerdSprCd.set_index(0);
            this.Div00.form.cal_startDate.set_value('');
            this.Div00.form.cal_endDate.set_value('');
            this.Div00.form.chk_mnfrNmDiffYn.set_value(false);

        };

        this.btn_exceldown_onclick = function(obj,e)
        {
        	if(this.ds_list.rowcount>0){
        		this.gfn_excelExport(this.grd_list, "제조원 목록", "제조원 목록", null, ["CHK"]);
        	}else{
        		alert('엑셀 파일로 다운로드 할 수 있는 자료가 없습니다.');
        	}
        };

        //수정자조회팝업
        this.Div00_btn_psnPopup_onclick = function(obj,e)
        {
            var params = {coCd:this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")};
            var options = {};
            this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_27.xfdl", params,  "fn_popupCallback", options);
        };

        this.btn_upload_onclick = function(obj,e)
        {
            var param = {pgmId : "SSP_JF_PR_09"};
        	this.gfn_openPopup("SSP_BO_PP_34", "CO_POP::SSP_BO_PP_34.xfdl", param);
        };

        this.Div00_edt_mnfrNo_onkeyup = function(obj,e)
        {
            if( e.keycode == 13 ) {
                this.fn_mnfrSearch(true);
            }

        };



        this.Div00_btn_psnPopup_onclickDiv00_btn_PSN_onclick = function(obj,e)
        {

        };

        this.btn_saveAll_onclick = function(obj,e)
        {
        	alert('작업예정');
        };


        this.btn_layoutSave_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grd_list", this.grd_list.getCurFormatString());
        };

        this.btn_layoutInit_onclick = function(obj,e)
        {
        	this.gfn_personalReset("grd_list");
        	this.grd_list.set_formats(this.grd_list.uOrgFormat);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.addEventHandler("onkeydown",this.fn_onkeydown,this);
            this.Div00.form.Static03.addEventHandler("onclick",this.Div00_Static03_onclick,this);
            this.Div00.form.btn_mnfrPopup.addEventHandler("onclick",this.Div00_btn_mnfrPopup_onclick,this);
            this.Div00.form.cmb_inqPerdSprCd.addEventHandler("onitemchanged",this.Div00_cmb_inqPerdSprCd_onitemchanged,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div00.form.btn_clear.addEventHandler("onclick",this.Div00_btn_clear_onclick,this);
            this.Div00.form.btn_psnPopup.addEventHandler("onclick",this.Div00_btn_psnPopup_onclick,this);
            this.btn_upload.addEventHandler("onclick",this.btn_upload_onclick,this);
            this.btn_exceldown.addEventHandler("onclick",this.btn_exceldown_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_layoutInit.addEventHandler("onclick",this.btn_layoutInit_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_PA_27.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
