(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_MA_95");
            this.set_titletext("SSO고객사관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_thmeDomnCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD_NM\">전체</Col></Row><Row><Col id=\"COM_DTL_CD_NM\">사용</Col><Col id=\"COM_DTL_CD\">Y</Col></Row><Row><Col id=\"COM_DTL_CD_NM\">미사용</Col><Col id=\"COM_DTL_CD\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ssoMng", this);
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIZNO\" type=\"STRING\" size=\"256\"/><Column id=\"CNSOL_IP_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"PREFIX_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PWD_CTL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"KEY_VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"KEY_VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"RMKS\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIZNO\" type=\"STRING\" size=\"256\"/><Column id=\"CNSOL_IP_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"PREFIX_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PSN_INFO_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PWD_CTL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"KEY_VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"KEY_VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"RMKS\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD_NM\">전체</Col></Row><Row><Col id=\"COM_DTL_CD_NM\">사용</Col><Col id=\"COM_DTL_CD\">Y</Col></Row><Row><Col id=\"COM_DTL_CD_NM\">미사용</Col><Col id=\"COM_DTL_CD\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ssoTpCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ssoMngCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIZNO\" type=\"STRING\" size=\"256\"/><Column id=\"CNSOL_IP_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"PREFIX_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PSN_INFO_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PWD_CTL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"KEY_VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"KEY_VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"RMKS\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gThmeDomnCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_delPgmMng", this);
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIZNO\" type=\"STRING\" size=\"256\"/><Column id=\"CNSOL_IP_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"PREFIX_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PSN_INFO_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PWD_CTL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"KEY_VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"KEY_VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"RMKS\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD\">Y</Col><Col id=\"COM_DTL_CD_NM\">Y</Col></Row><Row><Col id=\"COM_DTL_CD\">N</Col><Col id=\"COM_DTL_CD_NM\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gJoinYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD\">Y</Col><Col id=\"COM_DTL_CD_NM\">Y</Col></Row><Row><Col id=\"COM_DTL_CD\">N</Col><Col id=\"COM_DTL_CD_NM\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gPwdCtlYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD\">Y</Col><Col id=\"COM_DTL_CD_NM\">Y</Col></Row><Row><Col id=\"COM_DTL_CD\">N</Col><Col id=\"COM_DTL_CD_NM\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_save",null,"170","81","28","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"170","81","28","btn_save:180",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"170","81","28","btn_del:-256",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("추가");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","208",null,null,"20","96",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("none");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_ssoMng");
            obj.set_autoenter("select");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellmovingtype("col");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"109\"/><Column size=\"103\"/><Column size=\"194\"/><Column size=\"66\"/><Column size=\"108\"/><Column size=\"95\"/><Column size=\"244\"/><Column size=\"143\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"84\"/><Column size=\"98\"/><Column size=\"84\"/><Column size=\"98\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"사업자번호\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"1\" text=\"사업장ID\"/><Cell col=\"2\" text=\"사업장명\"/><Cell col=\"3\" text=\"연동건수\"/><Cell col=\"4\" text=\"IP\"/><Cell col=\"5\" text=\"Prefix ID\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"6\" text=\"암호화 KEY\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"7\" text=\"암호화 Vector\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"8\" text=\"사용 여부\"/><Cell col=\"9\" text=\"회원가입 허용 여부\"/><Cell col=\"10\" text=\"PW 제어여부\"/><Cell col=\"11\" text=\"등록자ID\"/><Cell col=\"12\" text=\"등록시간\"/><Cell col=\"13\" text=\"변경자ID\"/><Cell col=\"14\" text=\"변경시간\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:BIZNO == undefined || dataset.getRowType(currow) == 2 ? &quot;editcontrol&quot; : &quot;text&quot; \" edittype=\"expr:BIZNO == undefined || dataset.getRowType(currow) == 2 ? &quot;normal&quot; : &quot;none&quot; \" text=\"bind:BIZNO\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:BZPLC_ID\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:BZPLC_NM\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:LOGN_CNT\" autosizerow=\"default\" wordWrap=\"none\" color=\"blue\" textDecoration=\"underline\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:CNSOL_IP_ADDR\" edittype=\"text\" textAlign=\"center\" displaytype=\"editcontrol\"/><Cell col=\"5\" text=\"bind:PREFIX_ID\" edittype=\"text\" textAlign=\"center\" displaytype=\"editcontrol\"/><Cell col=\"6\" text=\"bind:KEY_VAL1\" edittype=\"text\" textAlign=\"center\" displaytype=\"editcontrol\"/><Cell col=\"7\" text=\"bind:KEY_VAL2\" edittype=\"text\" textAlign=\"center\" displaytype=\"editcontrol\"/><Cell col=\"8\" text=\"bind:USE_YN\" edittype=\"combo\" displaytype=\"combocontrol\" combodataset=\"ds_gUseYn\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:RMKS\" edittype=\"combo\" displaytype=\"combocontrol\" combodataset=\"ds_gJoinYn\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:PWD_CTL_YN\" edittype=\"combo\" displaytype=\"combocontrol\" combodataset=\"ds_gPwdCtlYn\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:REGPSN_ID\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:REG_DTM\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:UPDPSN_ID\" textAlign=\"center\"/><Cell col=\"14\" text=\"bind:UPD_DTM\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","grd_list:30",null,"grd_list:36","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","0",null,"140","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","20",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","20","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"94","60","26","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"94","60","26","btn_search:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("초기화");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_bizno","160","24","190","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_positionstep("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","374","20","132","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_useYn","516","24","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_useYn");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_positionstep("0");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20","181","370","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("(총 0건, 1 / 1)");
            obj.set_usedecorate("true");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item4","Div00.form.edt_bizno","value","ds_search","BIZNO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div00.form.cmb_useYn","value","ds_search","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MA_95.xfdl","CO::coUtils.xjs");
        this.registerScript("SSP_BO_MA_95.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.valiGridIds = [
        	  {"name" : "사업자번호", "id" : "BIZNO"}
        	, {"name" : "Prefix ID", "id" : "PREFIX_ID"}
        	, {"name" : "암호화 KEY", "id" : "KEY_VAL1"}
        	, {"name" : "암호화 Vector", "id" : "KEY_VAL2"}
        ];
        this.fv_oApp = nexacro.getApplication();	//application object
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
        	this.gfn_formOnLoad(this);
        	this.Div00.form.cmb_useYn.set_index(0);
        	this.fn_commonCodeSearch();

        	// 단축키
        	this.gfn_initFormHotKey({
        		ENTER : "",
        		ESC : "",
        		CTRL_ENTER : "btn_search_onclick",
        		SHIFT_ENTER : "",
        		SHIFT_S : "btn_save_onclick",
        		SHIFT_A : "",
        		SHIFT_D : "",
        	});
        };

        /*this.fn_onkeyup = function(obj:nexacro.Form,e:nexacro.KeyEventInfo){
        	var objType = obj.getFocus();
        	if( e.keycode == 13 && objType == "[object Edit]"){
        		this.fn_search(true, null);
        	}
        };*/
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_search = function(bInit, type){
        	var bReturn  = true;

        	if(type != "del" && this.fn_dataCheck(this.ds_ssoMng)){
        		bReturn = this.confirm("변경된 내역이 존재합니다. 조회하시겠습니까?");
        	}

        	this.ds_search.setColumn(0,"USE_YN", this.Div00.form.cmb_useYn.value);

        	if(bReturn == true){
        		var sSvcId = "search";
        		var sUrl = "/cc/select-sso-mng-list.do";
        		var inDs = "ds_search=ds_search"
        		var outDs = "ds_ssoMng=ds_output1";
        		var arg;

        		if(bInit) {
        			var oPaging = this.div_paging;
        			oPaging.uPage = 1;
        			oPaging.uPageNum = 0;
        			this.ds_search.setColumn(0,"START_NUM", 0);
        			this.ds_search.setColumn(0,"ROW_COUNT", this.fv_oApp.gv_pageViewCnt);
        		}

        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}
        };

        //공통코드조회
        this.fn_commonCodeSearch = function(){
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_thmeDomnCd=ds_output1 ds_pgmTpCd=ds_output2 ds_useYn=ds_output3";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "THME_DOMN_CD,PGM_TP_CD,USE_YN");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //저장
        this.fn_save = function(){
            trace("ds_ssoMng: " + this.ds_ssoMng.saveXML());

        	var sSvcId = "save";
        	var sUrl = "/cc/save-sso-mng-list.do";
        	var inDs = "ds_search=ds_search ds_save=ds_ssoMng:U"
        	var outDs = "";
        	var arg;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //삭제
        this.fn_delete = function(){
        	var sSvcId = "delete";
        	var sUrl = "/cc/delete-sso-mng-list.do";
        	var inDs = "ds_delete=ds_delPgmMng:U"
        	var outDs = "";
        	var arg;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	switch(svcID){
        		case "search":
        			if(this.ds_ssoMng.rowcount < 1){
        				this.ds_ssoMng.copyData(this.ds_ssoMngCopy);
        			}

        			this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.fv_oApp.gv_pageViewCnt,"fn_pageCallback");
        			break;
        		case "save":
        			//결과값 초기화
        			this.ds_search.setColumn(0, "PGM_ID_LIST", "");

        			if(errorCode == -100){
        				alert(errorMsg);
        			}else{
        				alert("저장되었습니다.");
        				this.fn_search(true, null);
        			}

        			break;
        		case "delete":
        		/*
        			for(var i=0; i < this.ds_delPgmMng.rowcount; i++){
        				var nRow = this.ds_ssoMng.findRow("PGM_ID", this.ds_delPgmMng.getColumn(i, "PGM_ID"));
        				this.ds_ssoMng.deleteRow(nRow);
        			}
        */
        			if(this.ds_delPgmMng.rowcount >= 0){
        				this.grd_list.setCellProperty("head", 0,"text","0");
        			}

        			this.ds_delPgmMng.clearData();
        			alert("삭제되었습니다.");
        			this.fn_search(true, "del");
        			break;
        		default:
        			break;
        	}
        };

        //페이징 콜백
        this.fn_pageCallback = function(sFlag){
        	var oPaging = this.div_paging;

        	if(sFlag){
        		this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.fv_oApp.gv_pageViewCnt);
        		this.fn_search(false, null);
        	}

        	var sTotText = "(총 "+ this.gfn_appendComma(oPaging.uTotCount, 0)+"건, "+ oPaging.uPage +" / "+ oPaging.uPageCnt +")";
        	this.sta_totcnt.set_text(sTotText);
        };

        //정렬콜백
        this.fn_sortCallback = function(sGridId){
        	var oGrid = null;
        	if(sGridId == "grd_list"){
        		oSortInfo = this.grd_list.uaSortInfo;
        		this.ds_search.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
        		this.ds_search.setColumn(0,"SORT_TYPE",oSortInfo.status);
        		this.fn_search(false, null);
        	}
        };
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
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
        };

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        //저장 유효성 체크
        this.fn_validationCheck = function(){

        	if(!this.fn_dataCheck(this.ds_ssoMng)){
        		alert("저장할 내용이 없습니다.");
        		return false;
        	}

        	//그리드 필수값 체크
        	var validation = this.fn_validationGrid(this.grd_list, this.valiGridIds, this.ds_ssoMng);
        	if(!validation){
        		return false;
        	}

        	return true;
        };

        //SSOID 수정여부 체크
        this.fn_pgmIdUpdCheck = function(currow){
        	var sPgmId = this.ds_ssoMng.getColumn(currow, "BIZNO");
        	var rowType = this.ds_ssoMng.getRowType(currow);

        	if(sPgmId == undefined || rowType == 2){
        		return "normal";
        	}else{
        		return "none";
        	}
        };

        this.fn_dataCheck = function(dataset){
        	var dataChk = false;
        	var arrayIds = dataset.colinfos._idArray;

        	if( dataset.rowcount <= 0 ) {
        		dataChk = false;
        	} else {
        		for(var i = 0; i < dataset.rowcount; i++){
        			var sRowType = dataset.getRowType(i);

        			if( sRowType == 2 || sRowType == 4 ){

        				var orgIdx = dataset._rawRecords[i]._orgidx;
        				for( var idx in arrayIds ){
        					var id = arrayIds[idx];
        					var value = dataset.getColumn(i, id);
        					var originValue = dataset.getOrgColumn(i, id);

        					// 값이 없을 시 undefined가 넘어옴.
        					if( originValue == undefined ) originValue = "";
        					//orgIdx 값이 없는 경우는 신규임.
        					if( orgIdx == undefined ) {
        						dataChk = true;
        					} else if( value != undefined ) {	// 존재할때
        						if( id.indexOf("CHK") == -1 && (value.toString() != originValue.toString()) ) {	// 체크박스 제외 및 값 비교
        							dataChk = true;
        						}
        					}
        				}
        			}
        		}
        	}
        	return dataChk;
        };

        //그리드 헤더 특수문자 제거
        this.gfn_removeCharValue = function(strValue){
        	var strSpecial = "~!@#$%^&*-+./=_`{|}()\\?<>▲▼";

	for (i = 0; i < strValue.length; i++) {
        		for (j = 0; j < strSpecial.length; j++) {
        			if (strValue.charAt(i) == strSpecial.charAt(j))
        			strValue = strValue.replace(strValue.charAt(i), "");
        		}
        	}

        	return strValue;
        };

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //조회 click  이벤트
        this.btn_search_onclick = function(obj,e){
        	this.fn_search(true, null);
        };

        //추가 click 이벤트
        this.btn_add_onclick = function(obj,e){
        	var nRow = this.ds_ssoMng.addRow();
        	this.ds_ssoMng.setColumn(nRow, "USE_YN", "Y");
        	this.ds_ssoMng.setColumn(nRow, "PWD_CTL_YN", "N");
        	this.ds_ssoMng.setColumn(nRow, "RMKS", "N");
        	this.grd_list.setCellPos(1);
        	this.grd_list.showEditor(true);
        };

        //삭제 click 이벤트
        this.btn_del_onclick = function(obj,e){
        	var delArr = [];
        	var chkCnt = this.ds_ssoMng.getCaseCount("CHK == 1");
        	var nRowType = "";
        	var delArr = [];

        	if(chkCnt == 0){
        		alert("삭제할 데이터를 선택해주세요.");
        		return;
        	}

        	var sReturn = this.confirm("선택한 데이터를 삭제하시겠습니까?");
        	if(sReturn == true){
        		for(var i=0; i < this.ds_ssoMng.rowcount; i++){
        			if(this.ds_ssoMng.getColumn(i, "CHK") == 1){
        				nRowType = this.ds_ssoMng.getRowType(i);
        				if(nRowType == Dataset.ROWTYPE_INSERT){
        					delArr.push(i);
        				}else{
        					var nRow = this.ds_delPgmMng.addRow();
        					this.ds_delPgmMng.setColumn(nRow, "PGM_ID", "Y");
        					this.ds_delPgmMng.copyRow(nRow, this.ds_ssoMng, i);
        				}
        			}
        		}
        		this.ds_ssoMng.deleteMultiRows(delArr);
        		if(this.ds_delPgmMng.rowcount > 0){
        			this.fn_delete();
        		}else{
        			this.grd_list.setCellProperty("head", 0,"text","0");
        		}
        	}
        };

        //저장 click 이벤트
        this.btn_save_onclick = function(obj,e){
        	if(this.fn_validationCheck()){
        		var sReturn = this.confirm("저장하시겠습니까?");
        		if(sReturn == true){
        			this.fn_save();
        		}
        	}
        };

        //엑셀 click 이벤트
        this.btn_excelDown_onclick = function(obj,e)
        {
        	alert("엑셀다운로드");
        };

        //레이아웃 저장 click 이벤트
        this.btn_saveLayout_onclick = function(obj,e)
        {
        	alert("레이아웃 저장");
        };

        //레이아웃 초기화 click 이벤트
        this.btn_clearLayout_onclick = function(obj,e)
        {
        	alert("레이아웃 초기화");
        };


        //enterkey 입력시 다음 cell로 이동
        this.grd_list_onkeyup = function(obj,e){
        	if(e.keycode == 13){
        		obj.moveToNextCell();
        	}
        };


        this.ds_ssoMng_cancolumnchange = function(obj,e){
        	var eRow = e.row;

        	//SSOID 신규 입력시 중복체크 click 이벤트
        	if(e.columnid == "PGM_ID"){
        		var nCnt = this.ds_ssoMng.extractRowsNF("PGM_ID == '" + this.gfn_trim(e.newvalue) + "'");
        		if(nCnt.length >= 1){
        			alert("SSOID : "+ e.newvalue + "가 중복되었습니다.");
        			return false;
        		}
        	}
        };


        this.Div00_btn_clear_onclick = function(obj,e)
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.Div00.form.cmb_thmeDownCd.set_index(0);
        	this.Div00.form.cmb_useYn.set_index(0);
        	this.Div00.form.cmb_psnInfoYn.set_index(0);
        };

        this.grd_list_oncellclick = function(obj,e)
        {
            var bindText = this.grd_list.getCellProperty("body", e.col, "text");
        	var bindTooltiptext = this.grd_list.getCellProperty("body", e.col, "tooltiptext");

            if(bindText == "bind:LOGN_CNT"){	//상세화면 팝업

        	  var param = {
        	               bzplcId:this.ds_ssoMng.getColumn(e.row, "BZPLC_ID"),
        				   bzplcNm:this.ds_ssoMng.getColumn(e.row, "BZPLC_NM")
        	              };

        	  this.gfn_menuOpen("9113000000", param);

            }
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.grd_list.addEventHandler("onkeyup",this.grd_list_onkeyup,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div00.form.btn_clear.addEventHandler("onclick",this.Div00_btn_clear_onclick,this);
            this.Div00.form.cmb_useYn.addEventHandler("onitemchanged",this.Div00_cmb_useYn_onitemchanged,this);
            this.ds_ssoMng.addEventHandler("cancolumnchange",this.ds_ssoMng_cancolumnchange,this);
            this.ds_ssoMng.addEventHandler("oncolumnchanged",this.ds_ssoMng_oncolumnchanged,this);
            this.ds_ssoMngCopy.addEventHandler("cancolumnchange",this.ds_ssoMng_cancolumnchange,this);
        };
        this.loadIncludeScript("SSP_BO_MA_95.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
