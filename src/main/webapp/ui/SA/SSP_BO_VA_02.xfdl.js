(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_VA_02");
            this.set_titletext("메인상품 상품등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_save", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CHN_TP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MAIN_PRD_EXPS_PST_ID\" type=\"INT\" size=\"16\"/><Column id=\"EXPS_NOTIC_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_IDS\" type=\"STRING\" size=\"256\"/><Column id=\"NOTLOGN_INC_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\">1000</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_noticSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mainPrdDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_PRD_DTL_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"MAIN_PRD_EXPS_PST_ID\" type=\"INT\" size=\"256\"/><Column id=\"CHN_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NOTIC_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_SO\" type=\"INT\" size=\"256\"/><Column id=\"PRD_REG_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_oprUnitList", this);
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchOprUnitCheckList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rtnOprUnitCheckList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchPrdIdCheckList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdInfoList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_PRD_DTL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_PARAM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_NOTIC_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_dtl","20","20",null,"240","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","1",null,"160","0",null,null,null,null,null,this.div_dtl.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_dtl.addChild(obj.name, obj);

            obj = new Static("Static04","0","160",null,"64","0",null,null,null,null,null,this.div_dtl.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_dtl.addChild(obj.name, obj);

            obj = new Static("Static02","0","160","130","64",null,null,null,null,null,null,this.div_dtl.form);
            obj.set_taborder("5");
            obj.set_text("상품ID");
            obj.set_cssclass("sta_cm_box01L");
            this.div_dtl.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","Static02:4","163",null,"24","60",null,null,null,null,null,this.div_dtl.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.div_dtl.addChild(obj.name, obj);

            obj = new Button("btn_prdMulti","edt_prdId:4","162","24","24",null,null,null,null,null,null,this.div_dtl.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_multi");
            obj.set_text("");
            this.div_dtl.addChild(obj.name, obj);

            obj = new Static("Static01","0","1","130","160",null,null,null,null,null,null,this.div_dtl.form);
            obj.set_taborder("4");
            obj.set_text("게시 구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_dtl.addChild(obj.name, obj);

            obj = new Radio("rdo_noticSprCd","Static01:10","15","127","115",null,null,null,null,null,null,this.div_dtl.form);
            obj.set_innerdataset("ds_noticSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_direction("horizontal");
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.div_dtl.addChild(obj.name, obj);

            obj = new Static("Static00","Static02:4","191",null,"24","20",null,null,null,null,null,this.div_dtl.form);
            obj.set_taborder("7");
            obj.set_text(" 상품ID는 쉼표 “,”로 구분하여 입력해주세요.");
            this.div_dtl.addChild(obj.name, obj);

            obj = new Grid("grd_oprUnitList","rdo_noticSprCd:23","11",null,"139","60",null,null,null,null,null,this.div_dtl.form);
            obj.set_taborder("10");
            obj.set_binddataset("ds_oprUnitList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"126\"/><Column size=\"200\"/><Column size=\"48\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"운영단위ID\"/><Cell col=\"1\" text=\"운영단위명\"/><Cell col=\"2\"/></Band><Band id=\"body\"><Cell text=\"bind:OPR_UNIT_ID\"/><Cell col=\"1\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.div_dtl.addChild(obj.name, obj);

            obj = new Button("btn_oprUnitMulti","grd_oprUnitList:4","16","24","24",null,null,null,null,null,null,this.div_dtl.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_multi");
            this.div_dtl.addChild(obj.name, obj);

            obj = new Button("btn_oprUnitMultiText","btn_oprUnitMulti:4","16","24","24",null,null,null,null,null,null,this.div_dtl.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
            this.div_dtl.addChild(obj.name, obj);

            obj = new Button("btn_prdMultiText","btn_prdMulti:4","162","24","24",null,null,null,null,null,null,this.div_dtl.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
            this.div_dtl.addChild(obj.name, obj);

            obj = new Static("sta_totalCountOprUnit","220","15","121","25",null,null,null,null,null,null,this.div_dtl.form);
            obj.set_taborder("12");
            obj.set_text("(총 0건)");
            obj.set_usedecorate("true");
            this.div_dtl.addChild(obj.name, obj);

            obj = new CheckBox("chk_notLogn_Inc_Yn","140","133","134","20",null,null,null,null,null,null,this.div_dtl.form);
            obj.set_taborder("13");
            obj.set_text("미로그인 포함");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.div_dtl.addChild(obj.name, obj);

            obj = new Button("btn_cancel","330","div_dtl:10","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","btn_cancel:4",null,"70","30",null,"50",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,350,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_dtl.form.rdo_noticSprCd","value","ds_save","EXPS_NOTIC_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_dtl.form.edt_prdId","value","ds_save","PRD_IDS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_dtl.form.chk_notLogn_Inc_Yn","value","ds_save","NOTLOGN_INC_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_VA_02.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_VA_02.xfdl","OD::odUtils.xjs");
        this.addIncludeScript("SSP_BO_VA_02.xfdl","SA::saUtils.xjs");
        this.registerScript("SSP_BO_VA_02.xfdl", function() {
        /*******************************************************
          PROJECT NAME : 메인상품 등록
          CREATION DATES : 2022.03.04
          CREATER        : 이민호
        *******************************************************/
        //인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        this.executeIncludeScript("SA::saUtils.xjs"); /*include "SA::saUtils.xjs"*/;
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.fv_oApp = nexacro.getApplication();
        this.fv_coCd = this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD");
        this.maxFileSize = "10";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	// 파라미터 값 ds setcolumn
        	this.ds_save.setColumn(0, "CO_CD", this.parent.coCd);
        	this.ds_save.setColumn(0, "CHN_TP_CD", this.parent.chnTpCd);
        	this.ds_save.setColumn(0, "MALL_SPR_CD", this.parent.mallSprCd);
        	this.ds_save.setColumn(0, "MAIN_PRD_EXPS_PST_ID", this.parent.mainPrdExpsPstId);

        	//공통코드 조회
        	this.fn_commonCodeSearch();

        };

        this.fn_onkeyup = function(obj,e)
        {
        	//ESC : 닫기기능
        	if(e.keycode == 27){
        		this.close();
        	}
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //공통코드 조회
        this.fn_commonCodeSearch = function()
        {
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_noticSprCd=ds_output1";
        	var arg = "";

        	//조회 값 담기
        	this.ds_search.setColumn(0, "CODE_LIST", "EXPS_NOTIC_SPR_CD");
        	this.ds_search.setColumn(0, "LANG_CD", "KO");
        	//전송
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        //저장
        this.fn_save = function() {
        	var sSvcId = "insertMainPrdDtl";
        	var sUrl = "/sa/main-prd/insert-main-prd-dtl.do";
        	var inDs = "ds_save=ds_save:A ds_oprUnitList=ds_oprUnitList:A";
        	var outDs = "";
        	var arg = "";
        	var callback = "fn_callBack";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }

        // 운영단위ID 유효성 검사
        this.fn_oprUnitCheck = function() {
        	var sSvcId = "oprUnitCheck";
        	var sUrl = "/sa/com/select-opr-unit-check-list.do";
        	var sInData = "ds_searchOprUnitCheckList=ds_searchOprUnitCheckList:A"
        	var sOutData = "ds_rtnOprUnitCheckList=ds_output1";
        	var sArg = "";
        	var sCallback = "fn_callBack";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        }

        // 메인상품ID 유효성 검사
        this.fn_mainPrdIdCheck = function()
        {
        	var sSvcId = "mainPrdIdCheck";
        	var sUrl = "/sa/main-prd/select-main-prd-id-check-list.do";
        	var sInData = "ds_save=ds_save:A ds_oprUnitList=ds_oprUnitList:A ds_searchPrdIdCheckList=ds_searchPrdIdCheckList:A"
        	var sOutData = "ds_prdInfoList=ds_output1";
        	var sArg = "";
        	var sCallback = "fn_callBack";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        }

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg) {

        	switch(svcID) {
        		case "commonCodeSearch" :

        			this.div_dtl.form.rdo_noticSprCd.set_index(0);
        			this.rdo_noticSprCd_onitemchanged();

        			// SSP-2971
        			this.chk_notLogn_Inc_Yn.set_enable(true);
        			this.chk_notLogn_Inc_Yn.set_value(false);
        			this.ds_save.setColumn(0, "NOTLOGN_INC_YN", "N");

        			break;

        		case "insertMainPrdDtl" :

        			if(errorCode == ""){
        				alert(this.fn_getMessage("ERRN000030")); // 저장되었습니다.
        				this.close();
        				this.opener.fn_mainPrdDtlListSearch();
        			}else{
        				alert(errorMsg);
        			}

        			break;

        		case "oprUnitCheck" :

        			var tempOprUnitId = "";

        			for (var x = 0; x < this.ds_rtnOprUnitCheckList.getRowCount(); x++) {
        				var sBzplcId = this.ds_rtnOprUnitCheckList.getColumn(x, "BZPLC_ID");
        				var sOprUnitId = this.ds_rtnOprUnitCheckList.getColumn(x, "OPR_UNIT_ID");
        				var sOprUnitNm = this.ds_rtnOprUnitCheckList.getColumn(x, "OPR_UNIT_NM");

        				if (sOprUnitNm == "" || sOprUnitNm == undefined) {
        					tempOprUnitId = tempOprUnitId + "사업장ID : " + sBzplcId + " / 운영단위ID : " + sOprUnitId + "\n";
        				}
        			}

        			if (tempOprUnitId != "") {
        				this.fn_textCopy(this.fn_getMessage("ERRN000023", tempOprUnitId));
        				alert(this.fn_getMessage("ERRN000023", tempOprUnitId)); // 없는 운영단위ID를 입력하였습니다. 운영단위ID를 확인해주세요.\n&1
        			}

        			var totalCount2 = 0;
        			tempOprUnitId = "";

        			for (var x = 0; x < this.ds_rtnOprUnitCheckList.getRowCount(); x++) {
        				var sBzplcId = this.ds_rtnOprUnitCheckList.getColumn(x, "BZPLC_ID");
        				var sOprUnitId = this.ds_rtnOprUnitCheckList.getColumn(x, "OPR_UNIT_ID");
        				var sOprUnitNm = this.ds_rtnOprUnitCheckList.getColumn(x, "OPR_UNIT_NM");

        				if (sOprUnitNm != "" && sOprUnitNm != undefined) {
        					var findRow = this.ds_oprUnitList.findRowExpr("BZPLC_ID == '" + sBzplcId + "' && OPR_UNIT_ID == '" + sOprUnitId + "'");

        					if(findRow < 0) {
        						var nRow = this.ds_oprUnitList.addRow();

        						this.ds_oprUnitList.setColumn(nRow, "BZPLC_ID", sBzplcId);
        						this.ds_oprUnitList.setColumn(nRow, "OPR_UNIT_ID", sOprUnitId);
        						this.ds_oprUnitList.setColumn(nRow, "OPR_UNIT_NM", sOprUnitNm);
        					} else {
        						totalCount2 = totalCount2 + 1;

        						tempOprUnitId = tempOprUnitId + "사업장ID : " + sBzplcId + " / 운영단위ID : " + sOprUnitId + "\n";
        					}
        				}
        			}

        			if (totalCount2 > 0) {
        				this.fn_textCopy(this.fn_getMessage("ERRN000024", tempOprUnitId));
        				alert(this.fn_getMessage("ERRN000024", tempOprUnitId)); // 운영단위ID가 중복되었습니다. 운영단위ID를 확인해주세요.\n&1
        			}

        			var sTotText = "(<b v='true'>총 " + this.ds_oprUnitList.getRowCount() + "건 </b>)";
        			this.div_dtl.form.sta_totalCountOprUnit.set_text(sTotText);

        			break;

        		case "mainPrdIdCheck" :

        			var noPrdId = "";
        			var okPrdId = "";
        			var duplPrdId = "";

        			for (var x = 0; x < this.ds_prdInfoList.getRowCount(); x++) {
        				var sPrdId = this.ds_prdInfoList.getColumn(x, "PRD_ID");
        				var sPrdIdParam = this.ds_prdInfoList.getColumn(x, "PRD_ID_PARAM");
        				var sPrdIdView = this.ds_prdInfoList.getColumn(x, "PRD_ID_VIEW");
        				var sPrdNm = this.ds_prdInfoList.getColumn(x, "PRD_NM");
        				var sMainPrdDtlSeq = this.ds_prdInfoList.getColumn(x, "MAIN_PRD_DTL_SEQ");
        				var sOprUnitId = this.ds_prdInfoList.getColumn(x, "OPR_UNIT_ID");
        				var sBzplcId = this.ds_prdInfoList.getColumn(x, "BZPLC_ID");
        				var sExpsNoticSprCd = this.ds_prdInfoList.getColumn(x, "EXPS_NOTIC_SPR_CD");

        				if(sPrdNm == "" || sPrdNm == undefined) {
        					if(sExpsNoticSprCd == "10" || sExpsNoticSprCd == "20") {
        						noPrdId = noPrdId + sPrdIdView + ",";
        						var findRow = this.ds_searchPrdIdCheckList.findRowExpr("PRD_ID == '" + sPrdIdParam + "'");
        						if(findRow >= 0) {
        							this.ds_searchPrdIdCheckList.deleteRow(findRow);
        						}
        					} else {
        						noPrdId = noPrdId + "운영단위ID : " + sOprUnitId + " / 상품ID : " + sPrdIdView + "\n";
        						var findRow = this.ds_searchPrdIdCheckList.findRowExpr("PRD_ID == '" + sPrdIdParam + "'");
        						if(findRow >= 0) {
        							this.ds_searchPrdIdCheckList.deleteRow(findRow);
        						}
        					}
        				} else if(!this.gfn_isNull(sMainPrdDtlSeq)) {
        					if(sExpsNoticSprCd == "10" || sExpsNoticSprCd == "20") {
        						duplPrdId = duplPrdId + sPrdIdView + ",";
        						var findRow = this.ds_searchPrdIdCheckList.findRowExpr("PRD_ID == '" + sPrdIdParam + "'");
        						if(findRow >= 0) {
        							this.ds_searchPrdIdCheckList.deleteRow(findRow);
        						}
        					} else {
        						duplPrdId = duplPrdId + "운영단위ID : " + sOprUnitId + " / 상품ID : " + sPrdIdView + "\n";
        						var findRow = this.ds_searchPrdIdCheckList.findRowExpr("PRD_ID == '" + sPrdIdParam + "'");
        						if(findRow >= 0) {
        							this.ds_searchPrdIdCheckList.deleteRow(findRow);
        						}
        					}
        				}
        			}

        			if(noPrdId != "") {
        				noPrdId = noPrdId.substring(0, noPrdId.length-1);
        				this.fn_textCopy(this.fn_getMessage("ERRN000025", noPrdId));
        				alert(this.fn_getMessage("ERRN000025", noPrdId)); // 없는 상품ID가 있습니다. 상품ID를 확인해주세요.\n&1
        			}
        			if(duplPrdId != "") {
        				if(this.div_dtl.form.rdo_noticSprCd.value != "30") {
        					duplPrdId = duplPrdId.substring(0, duplPrdId.length-1);
        				}
        				this.fn_textCopy(this.fn_getMessage("ERRN000026", duplPrdId));
        				alert(this.fn_getMessage("ERRN000026", duplPrdId)); // 상품이 중복되었습니다. 상품ID를 확인해주세요.\n&1
        			}

        			if (noPrdId != "" || duplPrdId != "") {
        				// 운영단위개수x상품개수만큼 상품id가 더 들어가서, 저장 전 데이터셋에 있는 상품id로 값 세팅
        				for(var i=0; i < this.ds_searchPrdIdCheckList.rowcount; i++) {
        					okPrdId = okPrdId + this.ds_searchPrdIdCheckList.getColumn(i, "PRD_ID") + ",";
        				}

        				okPrdId = okPrdId.substring(0, okPrdId.length-1);
        				this.div_dtl.form.edt_prdId.set_value(okPrdId);

        				// 데이터 셋 다시 세팅하여 전달
        				var okPrdIdSplit = okPrdId.split(",");
        				this.ds_searchPrdIdCheckList.clearData();

        				if(okPrdId != "") {
        					for(var i=0; i < okPrdIdSplit.length; i++) {
        						var nRow = this.ds_searchPrdIdCheckList.addRow();
        						this.ds_searchPrdIdCheckList.setColumn(nRow, "CO_CD", this.parent.coCd);
        						this.ds_searchPrdIdCheckList.setColumn(nRow, "PRD_ID", okPrdIdSplit[i]);
        					}
        				}
        				return;
        			} else {
        				this.fn_save();
        			}

        			break;

        		default :
        			break;
        	}
        }

        this.fn_popupCallback = function(sPopupId, sRetValue)
        {
        	if(this.gfn_isNull(sRetValue)) {
        		return;
        	}
        	var retObj = JSON.parse(sRetValue);

        	switch(sPopupId) {
        		case "btn_oprUnitMulti" :
        			var totalCount2 = 0;
        			var tempOprUnitId = "";

        			for(var i=0; i < retObj.length; i++) {
        				var rowData = JSON.parse(retObj[i]);
        				var findRow = this.ds_oprUnitList.findRowExpr("BZPLC_ID == '" + rowData.OPR_BZPLC_ID + "' && OPR_UNIT_ID == '" + rowData.OPR_UNIT_ID + "'");

        				if(findRow < 0) {
        					var nRow = this.ds_oprUnitList.addRow();
        					this.ds_oprUnitList.setColumn(nRow, "BZPLC_ID", rowData.OPR_BZPLC_ID);
        					this.ds_oprUnitList.setColumn(nRow, "OPR_UNIT_ID", rowData.OPR_UNIT_ID);
        					this.ds_oprUnitList.setColumn(nRow, "OPR_UNIT_NM", rowData.OPR_UNIT_NM);
        				} else {
        					totalCount2 = totalCount2 + 1;
        					tempOprUnitId = tempOprUnitId + "사업장ID : " + rowData.OPR_BZPLC_ID + " / 운영단위ID : " + rowData.OPR_UNIT_ID + "\n";
        				}
        			}

        			if (totalCount2 > 0) {
        				this.fn_textCopy(this.fn_getMessage("ERRN000024", tempOprUnitId));
        				alert(this.fn_getMessage("ERRN000024", tempOprUnitId)); // 운영단위ID가 중복되었습니다. 운영단위ID를 확인해주세요.\n&1
        			}

        			var sTotText = "(<b v='true'>총 " + this.ds_oprUnitList.getRowCount() + "건 </b>)";
        			this.div_dtl.form.sta_totalCountOprUnit.set_text(sTotText);

        			break;

        		case "btn_oprUnitMultiText" :

        			var retValue = retObj.textValue;

        			if (retValue != "") {
        				this.ds_searchOprUnitCheckList.clearData();

        				var sTempValue = retValue.split(",");

        				for (var x = 0; x < sTempValue.length; x++) {
        					var sTempValueSplit = sTempValue[x].split("	");

        					var sBzplcId = sTempValueSplit[0];
        					var sOprUnitId = sTempValueSplit[1];

        					if (sBzplcId != "" && sBzplcId != undefined && sOprUnitId != "" && sOprUnitId != undefined) {
        						var nRow = this.ds_searchOprUnitCheckList.addRow();

        						this.ds_searchOprUnitCheckList.setColumn(nRow, "CO_CD", this.parent.coCd);
        						this.ds_searchOprUnitCheckList.setColumn(nRow, "BZPLC_ID", sBzplcId);
        						this.ds_searchOprUnitCheckList.setColumn(nRow, "OPR_UNIT_ID", sOprUnitId);
        					}
        				}

        				this.fn_oprUnitCheck();
        			}

        			break;

        		case "btn_prdMulti" :
        			var prdIds = "";
        			var edtPrdIdComma = this.gfn_isNull(this.div_dtl.form.edt_prdId.value) ? "" : this.div_dtl.form.edt_prdId.value + ",";
        			var totalCount2 = 0;
        			var tempPrdId = "";

        			for(var i=0; i < retObj.length; i++) {

        				var rowData = JSON.parse(retObj[i]);
        				var prdIdView = rowData.PRD_ID_VIEW;
        				var findRow = this.ds_searchPrdIdCheckList.findRowExpr("PRD_ID == '" + prdIdView + "'");

        				if(findRow < 0) {
        					prdIds += prdIdView + ",";
        					var nRow = this.ds_searchPrdIdCheckList.addRow();
        					this.ds_searchPrdIdCheckList.setColumn(nRow, "CO_CD", this.parent.coCd);
        					this.ds_searchPrdIdCheckList.setColumn(nRow, "PRD_ID", prdIdView);
        				} else {
        					totalCount2 = totalCount2 + 1;
        					tempPrdId = tempPrdId + rowData.PRD_ID_VIEW + ",";
        				}
        			}

        			if (totalCount2 > 0) {
        				tempPrdId = tempPrdId.substring(0, tempPrdId.length-1);
        				this.fn_textCopy(this.fn_getMessage("ERRN000026", tempPrdId));
        				alert(this.fn_getMessage("ERRN000026", tempPrdId)); // 상품이 중복되었습니다. 상품ID를 확인해주세요.\n&1
        				edtPrdIdComma = edtPrdIdComma.substring(0, edtPrdIdComma.length-1)
        			}

        			if(retObj.length > 0) { // 팝업에서 그냥 선택눌렀을 경우 제외하고
        				this.div_dtl.form.edt_prdId.set_value(edtPrdIdComma + prdIds.substring(0, prdIds.length-1));
        			}

        			break;

        		case "btn_prdMultiText" :

        			var retValue = retObj.textValue;

        			var sTempValue = retValue.split(",");
        			var totalCount2 = 0;
        			var tempPrdId = "";

        			if (retValue != "") {
        				var prdIds = "";

        				this.ds_searchPrdIdCheckList.clearData();

        				for(var i = 0; i < sTempValue.length; i++) {
        					if(!this.gfn_isNull(sTempValue[i])) {
        						//var rtnData = JSON.parse(sTempValue[i]);
        						var rtnData = nexacro.toNumber(sTempValue[i]);
        						if(!isNaN(rtnData)) { // 숫자형 확인
        							var findRow = this.ds_searchPrdIdCheckList.findRowExpr("PRD_ID == '" + rtnData + "'");

        							if(findRow < 0) {
        								prdIds += rtnData + ",";
        								var nRow = this.ds_searchPrdIdCheckList.addRow();
        								this.ds_searchPrdIdCheckList.setColumn(nRow, "CO_CD", this.parent.coCd);
        								this.ds_searchPrdIdCheckList.setColumn(nRow, "PRD_ID", rtnData);
        							} else {
        								totalCount2 = totalCount2 + 1;
        								tempPrdId = tempPrdId + rtnData + ",";
        							}
        						}
        					}
        				}

        				if (totalCount2 > 0) {
        					tempPrdId = tempPrdId.substring(0, tempPrdId.length-1);
        					this.fn_textCopy(this.fn_getMessage("ERRN000026", tempPrdId));
        					alert(this.fn_getMessage("ERRN000026", tempPrdId)); // 상품이 중복되었습니다. 상품ID를 확인해주세요.\n&1
        				}

        				this.div_dtl.form.edt_prdId.set_value(prdIds.substring(0, prdIds.length-1));
        			} else {
        				this.ds_searchPrdIdCheckList.clearData();
        				this.div_dtl.form.edt_prdId.set_value("");
        			}

        			break;

        		default :

        			break;
        	}
        }
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){
        	//search static 초기 설정
        	this.div_dtl.form.Static01.uEssentiel = "true";
        	this.div_dtl.form.Static02.uEssentiel = "true";

        	// grid 초기 설정
        	this.div_dtl.form.grd_oprUnitList.uSortFlag = "true";
        	this.div_dtl.form.grd_oprUnitList.uServerSortFlag = "false";
        	this.div_dtl.form.grd_oprUnitList.uCellSizeType = "true";
        }
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/


        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //상품 멀티검색 버튼
        this.btn_prdMulti_onclick = function(obj,e)
        {
        	var params = {coCd:this.fv_coCd, mallSprCd:this.parent.mallSprCd};
            var options = {};
            this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_16.xfdl", params,  "fn_popupCallback", options);
        };

        //운영단위 멀티 검색 버튼
        this.btn_oprUnitMulti_onclick = function(obj,e)
        {
        	var oArg = {coCd:this.fv_coCd
        	           };

        	var oOption = { top : "-1"
        	              , left : "-1"
        	              , width : "-1"
        	              , height : "-1"
        	              , popuptype : "modal"	// modal:showModal, modeless:application.open, modalsync:showModalSync, modalwindow:showModalWindow
        	              , layered : "false"
        	              , opacity : "100"
        	              , autosize : "true"
        	              , titlebar : "true"
        	              , title : "운영단위 조회"
        	              };

        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_23.xfdl", oArg, "fn_popupCallback", oOption);
        };

        //운영단위 멀티텍스트 검색 버튼
        this.btn_oprUnitMultiText_onclick = function(obj,e)
        {
        	var params = { textId : this.div_dtl.form.btn_oprUnitMultiText };
        	var options = {};
        	options.title = "멀티 텍스트 팝업";

        	this.gfn_openPopup(e.fromobject.id, "SA::SSP_BO_SA_MSEARCH.xfdl", params,  "fn_popupCallback", options);
        };

        //게시구분 변경 이벤트
        this.rdo_noticSprCd_onitemchanged = function(obj,e)
        {
        	if(this.div_dtl.form.rdo_noticSprCd.value == "30" || this.div_dtl.form.rdo_noticSprCd.value == "50"
        		|| this.div_dtl.form.rdo_noticSprCd.value == "60" || this.div_dtl.form.rdo_noticSprCd.value == "70") {
        		this.div_dtl.form.grd_oprUnitList.set_enable(true);
        		this.div_dtl.form.btn_oprUnitMulti.set_enable(true);
        		this.div_dtl.form.btn_oprUnitMultiText.set_enable(true);

        		this.div_dtl.form.chk_notLogn_Inc_Yn.set_enable(true);
        	} else {
        		this.div_dtl.form.grd_oprUnitList.set_enable(false);
        		this.div_dtl.form.btn_oprUnitMulti.set_enable(false);
        		this.div_dtl.form.btn_oprUnitMultiText.set_enable(false);

        		this.div_dtl.form.chk_notLogn_Inc_Yn.set_value(false);
        		this.div_dtl.form.chk_notLogn_Inc_Yn.set_enable(false);
        		this.ds_save.setColumn(0, "NOTLOGN_INC_YN", "N");
        	}
        };

        // 취소 버튼
        this.btn_cancel_onclick = function(obj,e)
        {
        	if(confirm(this.fn_getMessage("ERRN000054"))) { // 입력한 내용은 저장되지 않습니다. 목록으로 이동하시겠습니까?
        		this.close();
        	}
        };

        // 저장 버튼
        this.btn_save_onclick = function(obj,e)
        {
        	if (this.div_dtl.form.rdo_noticSprCd.value == "30") {
        		if (this.ds_oprUnitList.getRowCount() <= 0) {
        			alert(this.fn_getMessage("ERRN000001", "로그인 운영단위를 선택하시면, 최소 1개의 운영단위는")); // 로그인 운영단위를 선택하시면, 최소 1개의 운영단위는 필수 입력항목입니다.
        			return;
        		}
        	}
        	if(this.gfn_isNull(this.div_dtl.form.edt_prdId.value)) {
        		alert(this.fn_getMessage("ERRN000001", "상품ID는")); // 상품ID는 필수 입력항목입니다.
        		return;
        	}

        	//this.fn_save();
        	this.fn_mainPrdIdCheck();
        };

        // 운영단위 삭제
        this.grd_oprUnitList_oncellclick = function(obj,e)
        {
        	var sEditType = obj.getCellProperty("body", e.cell, "edittype");

        	if(sEditType == "button") {
        		if(confirm(this.fn_getMessage("ERRN000048"))) { // 삭제하시겠습니까?
        			this.ds_oprUnitList.deleteRow(e.row);

        			var sTotText = "(<b v='true'>총 " + this.ds_oprUnitList.getRowCount() + "건 </b>)";
        			this.div_dtl.form.sta_totalCountOprUnit.set_text(sTotText);
        		}
        	}
        };

        // 상품 검색 멀티텍스트
        this.btn_prdMultiText_onclick = function(obj,e)
        {
        	var params = { textId : this.div_dtl.form.edt_prdId };
        	var options = {};
        	options.title = "멀티 텍스트 팝업";

        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_13.xfdl", params,  "fn_popupCallback", options);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.div_dtl.form.btn_prdMulti.addEventHandler("onclick",this.btn_prdMulti_onclick,this);
            this.div_dtl.form.rdo_noticSprCd.addEventHandler("onitemchanged",this.rdo_noticSprCd_onitemchanged,this);
            this.div_dtl.form.grd_oprUnitList.addEventHandler("oncellclick",this.grd_oprUnitList_oncellclick,this);
            this.div_dtl.form.btn_oprUnitMulti.addEventHandler("onclick",this.btn_oprUnitMulti_onclick,this);
            this.div_dtl.form.btn_oprUnitMultiText.addEventHandler("onclick",this.btn_oprUnitMultiText_onclick,this);
            this.div_dtl.form.btn_prdMultiText.addEventHandler("onclick",this.btn_prdMultiText_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_VA_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
