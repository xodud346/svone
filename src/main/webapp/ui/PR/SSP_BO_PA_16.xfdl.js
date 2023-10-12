(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PA_16");
            this.set_titletext("상품군 SSP속성 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(930,594);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list1", this);
            obj._setContents("<ColumnInfo><Column id=\"PRNM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"INTG_ATTR_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRNM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAND_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"INTG_ATTR_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"INTG_ATTR_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PRNM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divPopup","20","20",null,null,"20","63",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0","300","21",null,null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("0");
            obj.set_text("| 상품군 SSP속성 관리");
            obj.set_cssclass("sta_WF_title02");
            this.divPopup.addChild(obj.name, obj);

            obj = new Grid("grd_list1","0","78","330",null,null,"0",null,null,null,null,this.divPopup.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_list1");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회 결과가 존재하지 않습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"100\"/><Column size=\"190\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"SSP속성코드\"/><Cell col=\"2\" text=\"SSP속성명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:PRD_ATTR_CD\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:PRNM\" cssclass=\"grd_WF_left\" tooltiptext=\"bind:PRNM\"/></Band></Format></Formats>");
            this.divPopup.addChild(obj.name, obj);

            obj = new Div("div","326","0","64",null,null,"0",null,null,null,null,this.divPopup.form);
            obj.set_taborder("2");
            obj.set_text("Div01");
            this.divPopup.addChild(obj.name, obj);

            obj = new Button("btn_allRight","20","50%","24","24",null,null,null,null,null,null,this.divPopup.form.div.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_shuttleR");
            obj.set_text("");
            this.divPopup.form.div.addChild(obj.name, obj);

            obj = new Button("btn_allLeft","20","btn_allRight:4","24","24",null,null,null,null,null,null,this.divPopup.form.div.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_shuttleL");
            obj.set_text("");
            this.divPopup.form.div.addChild(obj.name, obj);

            obj = new Grid("grd_list2","387","78",null,null,"0","0",null,null,null,null,this.divPopup.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_list2");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회 결과가 존재하지 않습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"100\"/><Column size=\"175\"/><Column size=\"60\"/><Column size=\"62\"/><Column size=\"68\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"SSP속성코드\"/><Cell col=\"2\" text=\"SSP속성명\"/><Cell col=\"3\" text=\"필수항목\"/><Cell col=\"4\" text=\"노출여부\"/><Cell col=\"5\" text=\"속성구분\"/></Band><Band id=\"body\"><Cell edittype=\"expr:INTG_ATTR_SPR_CD==&apos;10&apos;?&apos;checkbox&apos;:&apos;none&apos;\" displaytype=\"expr:INTG_ATTR_SPR_CD==&apos;10&apos;?&apos;checkboxcontrol&apos;:&apos;none&apos;\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:PRD_ATTR_CD\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:PRNM\" cssclass=\"grd_WF_left\" tooltiptext=\"bind:PRNM\"/><Cell col=\"3\" text=\"bind:MAND_YN\" displaytype=\"expr:INTG_ATTR_SPR_CD==&apos;10&apos;?&apos;checkboxcontrol&apos;:&apos;none&apos;\" edittype=\"expr:INTG_ATTR_SPR_CD==&apos;10&apos;?&apos;checkbox&apos;:&apos;none&apos;\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"4\" text=\"bind:EXPS_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"5\" text=\"bind:INTG_ATTR_SPR_CD_NM\"/></Band></Format></Formats>");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static60_00_00","0","50","120","30",null,null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("4");
            obj.set_text("■ 속성명 조회");
            obj.set_cssclass("sta_WF_title02");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static60_00_00_00","390","50","180","30",null,null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("5");
            obj.set_text("■ 상품군 사용 SSP속성");
            obj.set_cssclass("sta_WF_title02");
            this.divPopup.addChild(obj.name, obj);

            obj = new Edit("edtSearch","111","50",null,"24","590",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("6");
            this.divPopup.addChild(obj.name, obj);

            obj = new Button("btn_top","838","9.78%","24","24",null,null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("7");
            obj.set_text("▲");
            this.divPopup.addChild(obj.name, obj);

            obj = new Button("btn_down","btn_top:4","9.78%","24","24",null,null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("8");
            obj.set_text("▼");
            this.divPopup.addChild(obj.name, obj);

            obj = new Button("btn_find",null,"50","24","24","560",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.divPopup.addChild(obj.name, obj);

            obj = new Button("btn_cancel00","363",null,"100","32",null,"21",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","467",null,"100","32",null,"21",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",930,594,this,function(p){});
            obj.set_stepindex("");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_PA_16.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_PA_16.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_PA_16.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP속성 생성 팝업
        CREATION DATES : 2021.01.19
        *******************************************************/
        // 공통형 스크립트 인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object

        this.prdClcd = this.parent.prdClcd;
        this.mroPrdClcd = this.parent.mroPrdClcd;

        this.mallSprCd = "10";
        this.coCd = this.parent.coCd;

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	this.ds_search.setColumn(0,"CO_CD", this.coCd);
        	this.ds_search.setColumn(0,"MALL_SPR_CD", this.mallSprCd);
        	this.ds_search.setColumn(0,"MRO_PRD_CLCD", this.mroPrdClcd);

        	this.fn_search02();
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/

        // 속성명 조회
        this.fn_search01 = function()	{

        	var sSvcId = "selectPrdAttrList";
        	var sUrl = "/pr/ctg-mng/select-prd-attr-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_list1=ds_output";
        	var arg = "";

        	this.ds_search.setColumn(0,"PRNM", this.gfn_trim(this.divPopup.form.edtSearch.value));
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 상품군 사용 SSP속성 조회
        this.fn_search02 = function()	{

        	var sSvcId = "selectClsfAttrMappList";
        	var sUrl = "/pr/ctg-mng/select-clsf-attr-mapp-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_list2=ds_output";
        	var arg = "";

        	this.ds_search.setColumn(0,"PRD_CLCD", this.prdClcd);
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 저장
        this.fn_save = function()
        {
        	var sSvcId = "saveClsfAttrMapp";
        	var sUrl   = "/pr/ctg-mng/save-clsf-attr-mapp.do";
        	var inDs   = "ds_save=ds_list2:U";
        	var outDs  = "";
        	var arg    = "";

        	if( this.confirm(this.fn_getMessage("ERRP000031")) ) {
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(errorCode != 0)
        	{
        		this.alert(errorMsg);
        		return;
        	}

        	switch(svcID)
        	{
        	case "selectPrdAttrList":

        		if(this.ds_list2.rowcount > 0){
        			this.ds_list1.set_enableevent(false);
        			if(!this.gfn_dsIsUpdated(this.ds_list2)){
        				this.fn_search02();
        			}else{
        				var aChkArr = new Array();
        				for(var i=0; i<this.ds_list2.rowcount; i++){
        					aChkArr.push(this.ds_list2.getColumn(i, "PRD_ATTR_CD"));
        				}
        				for(var i=0; i<=aChkArr.length-1; i++){
        					var aDelArr =  new Array();
        					var row = this.ds_list1.findRow("PRD_ATTR_CD", aChkArr[i]);

        					for (var j = row; j <= row; j++){
        						aDelArr.push(j);
        					}
        					this.ds_list1.deleteMultiRows(aDelArr);
        				}
        			}
        			this.ds_list1.set_enableevent(true);
        		}else{
        			this.fn_search02();
        		}
        		break;
        	case "selectClsfAttrMappList":
        		if(this.ds_list1.rowcount > 0 ){
        			var aChkArr = new Array();
        			for(var i=0; i<this.ds_list2.rowcount; i++){
        				aChkArr.push(this.ds_list2.getColumn(i, "PRD_ATTR_CD"));
        			}

        			for(var i=0; i<=aChkArr.length-1; i++){
        				var aDelArr =  new Array();
        				var row = this.ds_list1.findRow("PRD_ATTR_CD", aChkArr[i]);

        				for (var j = row; j <= row; j++){
        					aDelArr.push(j);
        				}
        				this.ds_list1.deleteMultiRows(aDelArr);
        			}
        		}else{
        			//초기접속시 SSP속성 정렬값 변경처리
        			for(var i=0; i<this.ds_list2.rowcount; i++){
        				var SRT_SO = this.ds_list2.getColumn(i, "SRT_SO");
        				var RN = this.ds_list2.getColumn(i, "RN");
        				if(SRT_SO != RN){
        					this.ds_list2.setColumn(i, "SRT_SO", RN);
        				}
        			}

        		}

        		break;
        	case "saveClsfAttrMapp":
        		//this.alert("저장 되었습니다.");
        		this.alert(this.fn_getMessage("ERRS000156"));
        		var resData = {};
        		var resString = "";

        		resData.PRD_CLCD = this.prdClcd;
        		resString = JSON.stringify(resData);
        		this.close(resString);
        		break;
        	default:
        		break;
        	}
        };
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/

        //전체 메뉴 이동 호출 함수
        this.fn_allMoveDataSet= function(orgGrid, targetGrid, orgDs, targetDs){
        	var aChkArr = new Array();

        	for(var i=0; i<orgDs.rowcount; i++){
        		if(orgDs.getColumn(i, "CHK") == 1){
        			aChkArr.push(orgDs.getColumn(i, "PRD_ATTR_CD"));
        		}
        	}
        	this.fnAllCopy(orgGrid, targetGrid, orgDs, targetDs,  aChkArr);
        };

        this.fnAllCopy= function(orgGrid, targetGrid, orgDs, targetDs, arrayRow){
        	var dsOrg	  = orgDs;
        	var dsTarget  = targetDs;
        	var nEnd = 0;
        	var nStart = 0;
        	var nRow = 0;

        	for(var i=0; i<=arrayRow.length-1; i++){
        		var aDelArr =  new Array();
        		var row = orgDs.findRow("PRD_ATTR_CD", arrayRow[i]);

        		if( row >= 0){
        			//start, end에 현재 row 값 세팅
        			nStart = nEnd = row;
        			dsTarget.set_enableevent(false);

        			for (var j = nStart; j <= nEnd; j++){
        				//옮길트리에서 seqKey에 해당하는 값 찾아서 중복제거
        				var findRow = dsTarget.findRowExpr("PRD_ATTR_CD" + " == "+ dsOrg.getColumn(j, "PRD_ATTR_CD"));
        				if(findRow < 0){
        					nRow = dsTarget.addRow();
        					dsTarget.copyRow(nRow, dsOrg, j);
        					dsTarget.setColumn(nRow, "CHK", 0);
        					dsTarget.setColumn(nRow, "PRD_CLCD", this.prdClcd);
        					dsTarget.setColumn(nRow, "SRT_SO", nRow+1 );
        					dsTarget.setColumn(nRow, "CO_CD", this.coCd );
        					dsTarget.setColumn(nRow, "MRO_PRD_CLCD", this.mroPrdClcd );
        					dsTarget.setColumn(nRow, "INTG_ATTR_SPR_CD", "10" );
        					dsTarget.setColumn(nRow, "INTG_ATTR_SPR_CD_NM", "SSP" );
        					dsTarget.setColumn(nRow, "EXPS_YN", "Y" );
        				}
        				//삭제할 배열 row 추가
        				aDelArr.push(j);
        			}
        			dsTarget.set_enableevent(true);

        			//옮길 트리에 추가한 후 삭제시작
        			//1.선택한 현재~자식 row 삭제
        			dsOrg.deleteMultiRows(aDelArr);

        		}

        		nEnd = 0;
        		nStart = 0;
        		nRow = 0;
        	}
        };

        //팝업 콜백
        this.fn_popupCallback = function(sPopupId, sRetValue){

        	if(sRetValue == undefined){
                return;
            }else{
        		resData = JSON.parse(sRetValue);
        	}

        	switch(sPopupId)
        	{
        		case "ssp_bo_na_27" :
        			for(var i=0; i<this.ds_list2.rowcount; i++){
        				if(this.ds_list2.getRowTypeNF(i) == "2" ||
        				   //this.ds_list2.getRowTypeNF(i) == "4" ||
        				   this.ds_list2.getRowTypeNF(i) == "8"){
        					this.ds_list2.setColumn(i, "UPD_RSN", resData.UPD_RSN);
        				}
        			}
        			this.fn_save();
        			break;
        		default :
        			break;
        	}
        }
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //취소 버튼
        this.btn_clear_onclick = function(obj,e)
        {
        	this.close();
        };

        // 저장
        this.btn_save_onclick = function(obj,e)
        {

        	if( !this.fn_dataCheck(this.ds_list2)) {
        		//alert("변경된 내용이 없습니다.");
        		this.alert(this.fn_getMessage("ERRP000129"));
        		return false;
        	} else {
        		this.fn_save();
        // 		var objParam = {};
        // 		this.gfn_openPopup("ssp_bo_na_27", "PR_POP::SSP_BO_NA_27.xfdl", objParam);
        	}

        };

        // 돋보기 버튼
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_search01();
        };

        this.btn_allRight_onclick = function(obj,e)
        {
        	var chkCnt = this.ds_list1.getCaseCount("CHK == 1");
        	if(chkCnt == 0){
        		//alert("속성을 선택해주세요.");
        		this.alert(this.fn_getMessage("ERRP000273"));
        		return;
        	}

        	this.fn_allMoveDataSet(this.divPopup.form.grd_list1, this.divPopup.form.grd_list2, this.ds_list1, this.ds_list2);
        	//this.ds_list2.set_keystring("S:+SRT_SO");
        };

        this.btn_allLeft_onclick = function(obj,e)
        {
        	var chkCnt = this.ds_list2.getCaseCount("CHK == 1");
        	if(chkCnt == 0){
        		//alert("선택한 데이터가 없습니다.");
        		this.alert(this.fn_getMessage("ERRS000137"));
        		return;
        	}

        	this.fn_allMoveDataSet(this.divPopup.form.grd_list2, this.divPopup.form.grd_list1, this.ds_list2, this.ds_list1);
        	this.ds_list1.set_keystring("S:+PRD_ATTR_CD");
        };

        this.divPopup_btn_top_onclick = function(obj,e)
        {
        	var nTRow = this.ds_list2.rowposition;
        	if(nTRow == 0){
        		//this.alert("더 이상 이동할 수 없습니다.");
        		this.alert(this.fn_getMessage("ERRN000038"));
        		return false;
        	}
        	this.ds_list2.moveRow(nTRow, (nTRow-1));

        	for(var i=0; i<this.ds_list2.rowcount; i++){
        		this.ds_list2.setColumn(i,"SRT_SO", i+1);
        	}
        };

        this.divPopup_btn_down_onclick = function(obj,e)
        {
        	var nTRow = this.ds_list2.rowposition;
        	if(nTRow == (this.ds_list2.getRowCount()-1)){
        		//this.alert("더 이상 이동할 수 없습니다.");
        		this.alert(this.fn_getMessage("ERRN000038"));
        		return false;
        	}
        	this.ds_list2.moveRow(nTRow, (nTRow+1));

        	for(var i=0; i<this.ds_list2.rowcount; i++){
        		this.ds_list2.setColumn(i,"SRT_SO", i+1);
        	}
        };

        this.divPopup_edtSearch_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.fn_search01();
        	}
        };

        this.divPopup_grd_list1_oncellclick = function(obj,e)
        {
        	if(this.ds_list1.getColumn(e.row,"CHK") == 1){
        		this.ds_list1.setColumn(e.row,"CHK", 0);
        	}else{
        		this.ds_list1.setColumn(e.row,"CHK", 1);
        	}
        };

        this.divPopup_grd_list2_oncellclick = function(obj,e)
        {
        	if((e.cell == "0" || e.cell == "1" || e.cell == "2")
        		&& this.ds_list2.getColumn(e.row, "INTG_ATTR_SPR_CD") == '10'){
        		if(this.ds_list2.getColumn(e.row,"CHK") == 1){
        			this.ds_list2.setColumn(e.row,"CHK", 0);
        		}else{
        			this.ds_list2.setColumn(e.row,"CHK", 1);
        		}
        	}
        };

        // 단축키
        this.SSP_BO_PA_16_onkeyup = function(obj,e)
        {
        	// ENTER
        	if (e.keycode == 13) {
        		// 조회
        	}

        	// ESC
        	if (e.keycode == 27) {
        		// 팝업 화면 닫기
        		this.btn_clear_onclick();
        	}

        	// CTRL + s
        	if (e.keycode == 83 && e.ctrlkey == true) {
        		// 저장
        		this.btn_save_onclick();
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.SSP_BO_PA_16_onkeyup,this);
            this.divPopup.form.grd_list1.addEventHandler("oncellclick",this.divPopup_grd_list1_oncellclick,this);
            this.divPopup.form.grd_list1.addEventHandler("oncelldblclick",this.divPopup_grd_list1_oncelldblclick,this);
            this.divPopup.form.div.form.btn_allRight.addEventHandler("onclick",this.btn_allRight_onclick,this);
            this.divPopup.form.div.form.btn_allLeft.addEventHandler("onclick",this.btn_allLeft_onclick,this);
            this.divPopup.form.grd_list2.addEventHandler("oncelldblclick",this.divPopup_grd_list2_oncelldblclick,this);
            this.divPopup.form.grd_list2.addEventHandler("oncellclick",this.divPopup_grd_list2_oncellclick,this);
            this.divPopup.form.edtSearch.addEventHandler("onkeyup",this.divPopup_edtSearch_onkeyup,this);
            this.divPopup.form.btn_top.addEventHandler("onclick",this.divPopup_btn_top_onclick,this);
            this.divPopup.form.btn_down.addEventHandler("onclick",this.divPopup_btn_down_onclick,this);
            this.divPopup.form.btn_find.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_cancel00.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_PA_16.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
