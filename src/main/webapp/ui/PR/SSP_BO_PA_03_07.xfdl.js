(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PP_03_07");
            this.set_titletext("화학물질정보");
            this.set_scrolltype("both");
            this.set_scrollbartype("none none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1296,575);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PRD_ID\">000000000002274874</Col><Col id=\"CO_CD\">1000</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chmTotalInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHM_MTL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CAS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TOXIC_MTL1\" type=\"STRING\" size=\"256\"/><Column id=\"LMT_MTL1\" type=\"STRING\" size=\"256\"/><Column id=\"ACCD_PSB_MTL1\" type=\"STRING\" size=\"256\"/><Column id=\"PHBT_MTL2\" type=\"STRING\" size=\"256\"/><Column id=\"PERMIT_MTL2\" type=\"STRING\" size=\"256\"/><Column id=\"MIN_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"AVG_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"MTL_GRAVITY\" type=\"STRING\" size=\"256\"/><Column id=\"PHASE_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PHASE_SPR_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chmAddInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"LAW_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LAWKIND1\" type=\"STRING\" size=\"256\"/><Column id=\"LAWKIND2\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chmAddInfo2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LAW_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LAWKIND1\" type=\"STRING\" size=\"256\"/><Column id=\"LAWKIND2\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chmAddInfo3", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LAW_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LAWKIND1\" type=\"STRING\" size=\"256\"/><Column id=\"LAWKIND2\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chmAddInfo1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LAW_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LAWKIND1\" type=\"STRING\" size=\"256\"/><Column id=\"LAWKIND2\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chmAddInfoVer", this);
            obj._setContents("<ColumnInfo><Column id=\"T1_LAW2_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"T1_LAW2_NM\" type=\"STRING\" size=\"256\"/><Column id=\"T2_LAW2_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"T2_LAW2_NM\" type=\"STRING\" size=\"256\"/><Column id=\"T3_LAW2_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"T3_LAW2_NM\" type=\"STRING\" size=\"256\"/><Column id=\"T4_LAW2_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"T4_LAW2_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_chmInfo","0","20",null,"188","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_chmTotalInfo");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_scrollbartype("auto fixed");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"369\"/><Column size=\"155\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"103\"/><Column size=\"103\"/><Column size=\"103\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"화학물질명\"/><Cell col=\"1\" rowspan=\"2\" text=\"CAS_NO\"/><Cell col=\"2\" colspan=\"5\" text=\"유해화학물질구분\"/><Cell col=\"7\" colspan=\"3\" text=\"함량(%)\"/><Cell row=\"1\" col=\"2\" text=\"유독물질\"/><Cell row=\"1\" col=\"3\" text=\"제한물질\"/><Cell row=\"1\" col=\"4\" text=\"사고대비물질\"/><Cell row=\"1\" col=\"5\" text=\"금지물질\"/><Cell row=\"1\" col=\"6\" text=\"허가물질\"/><Cell row=\"1\" col=\"7\" text=\"From\"/><Cell row=\"1\" col=\"8\" text=\"To\"/><Cell row=\"1\" col=\"9\" text=\"평균\"/></Band><Band id=\"body\"><Cell text=\"bind:CHM_MTL_NM\" textAlign=\"left\" padding=\"0px 5px\"/><Cell col=\"1\" text=\"bind:CAS_NO\" padding=\"0px 5px\"/><Cell col=\"2\" text=\"bind:TOXIC_MTL1\" padding=\"0px 5px\"/><Cell col=\"3\" text=\"bind:LMT_MTL1\" padding=\"0px 5px\"/><Cell col=\"4\" text=\"bind:ACCD_PSB_MTL1\" padding=\"0px 5px\"/><Cell col=\"5\" text=\"bind:PHBT_MTL2\" padding=\"0px 5px\"/><Cell col=\"6\" text=\"bind:PERMIT_MTL2\" padding=\"0px 5px\"/><Cell col=\"7\" text=\"bind:MIN_CONTENT\" displaytype=\"number\" textAlign=\"right\" padding=\"0px 5px\"/><Cell col=\"8\" text=\"bind:MAX_CONTENT\" displaytype=\"number\" textAlign=\"right\" padding=\"0px 5px\"/><Cell col=\"9\" text=\"bind:AVG_CONTENT\" displaytype=\"number\" textAlign=\"right\" padding=\"0px 5px\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00_00","0","268","100","16",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("추가규제정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00","0","217","440","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00","0","217","75","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("물질 비중");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","219","217","75","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("성상");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_gravity","84","221","126","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pahse","303","221","126","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00_00_00","100","268","150","16",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("(*는 체크 시 취급불가)");
            obj.set_font("normal 8pt/normal \"normal/normal\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_addChmInfo4_00","0","294",null,"281","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_autofittype("col");
            obj.set_readonly("true");
            obj.set_visible("true");
            obj.set_binddataset("ds_chmAddInfoVer");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"294\"/><Column size=\"30\"/><Column size=\"294\"/><Column size=\"30\"/><Column size=\"294\"/><Column size=\"30\"/><Column size=\"294\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"화평/화관법\"/><Cell col=\"2\" colspan=\"2\" text=\"산업안전보건법\"/><Cell col=\"4\" colspan=\"2\" text=\"마약류관리법\"/><Cell col=\"6\" colspan=\"2\" text=\"위험물안전관리법\"/></Band><Band id=\"body\"><Cell text=\"bind:T1_LAW2_VAL\" displaytype=\"expr:T1_LAW2_NM==null?&apos;none&apos;:&apos;checkboxcontrol&apos;\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" border=\"1px solid #d4d4d4,0px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4\"/><Cell col=\"1\" text=\"bind:T1_LAW2_NM\" border=\"1px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4,0px solid #d4d4d4\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:T2_LAW2_VAL\" displaytype=\"expr:T2_LAW2_NM==null?&apos;none&apos;:&apos;checkboxcontrol&apos;\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" border=\"1px solid #d4d4d4,0px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4\"/><Cell col=\"3\" text=\"bind:T2_LAW2_NM\" border=\"1px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4,0px solid #d4d4d4\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:T3_LAW2_VAL\" displaytype=\"expr:T3_LAW2_NM==null?&apos;none&apos;:&apos;checkboxcontrol&apos;\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" border=\"1px solid #d4d4d4,0px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4\"/><Cell col=\"5\" text=\"bind:T3_LAW2_NM\" border=\"1px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4,0px solid #d4d4d4\" textAlign=\"left\"/><Cell col=\"6\" text=\"expr:T4_LAW2_VAL!=null?1:0\" displaytype=\"expr:T4_LAW2_NM==null?&apos;none&apos;:&apos;checkboxcontrol&apos;\" edittype=\"checkbox\" checkboxtruevalue=\"1\" border=\"1px solid #d4d4d4,0px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4\" checkboxfalsevalue=\"0\"/><Cell col=\"7\" text=\"bind:T4_LAW2_NM\" border=\"1px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4,0px solid #d4d4d4\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1296,575,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SSP_BO_PA_03_07.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES : 2022.03.17 조지훈
        *******************************************************/
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object
        this.fCallBackFn = "";	//콜백
        this.pageType = "edit";	//기본edit모드
        this.sSvcID = "";
        this.contextRealPath = "";
        this.loaded = false; //로딩여부
        this.isResize = false;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_call = function(){
        	var sSvcId = "call";
        	var sUrl = "/pr/prd-mng/select-product-chm-info.do";
        	var inDs = "ds_searchLarge=ds_search";
        	var outDs = "ds_chmTotalInfo=chmMtlList ds_chmAddInfoVer=addRegulation";
        	var arg;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack", false);
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(errorCode != 0 && errorCode != -100){
        		trace(errorMsg);
        	}

        	switch(svcID){
        		case "call":
        			/*
        			this.ds_chmAddInfo1.clearData();
        			this.ds_chmAddInfo2.clearData();
        			this.ds_chmAddInfo3.clearData();
        			for(var i=0; i<this.ds_chmAddInfo.rowcount; i++){
        				if(this.ds_chmAddInfo.getColumn(i,"LAW_CD") == '1'){
        					var nRow = this.ds_chmAddInfo1.addRow();
        					this.ds_chmAddInfo1.copyRow(nRow, this.ds_chmAddInfo, i);
        				}else if(this.ds_chmAddInfo.getColumn(i,"LAW_CD") == '2'){
        					var nRow = this.ds_chmAddInfo2.addRow();
        					this.ds_chmAddInfo2.copyRow(nRow, this.ds_chmAddInfo, i);
        				}else if(this.ds_chmAddInfo.getColumn(i,"LAW_CD") == '3'){
        					var nRow = this.ds_chmAddInfo3.addRow();
        					this.ds_chmAddInfo3.copyRow(nRow, this.ds_chmAddInfo, i);
        				}
        			}
        			*/

        			if(this.ds_chmTotalInfo.rowcount>0){
        				var MTL_GRAVITY = this.ds_chmTotalInfo.getColumn(0, "MTL_GRAVITY");	//물질비중
        				var PHASE_SPR_CD_NM = this.ds_chmTotalInfo.getColumn(0, "PHASE_SPR_CD_NM");	//성상
        				this.edt_gravity.set_value(MTL_GRAVITY);
        				this.edt_pahse.set_value(PHASE_SPR_CD_NM);
        			}

        			this.loaded = true;

        			if(this.isResize){
        				//부모 사이즈 변경호출
        				this.lookupFunc(this.fCallBackFn).call('tab_resize', 0, '', {'height':575});
        			}

        			break;

        	}

        	//부모창 결과리턴
        	if(!this.gfn_isNull(this.fCallBackFn)){
        		this.lookupFunc(this.fCallBackFn).call(this.sSvcID, errorCode, errorMsg);
        	}

        };
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        /*
        서비스ID(콜백ID)
        파라미터,
        콜백펑션,
        페이지타입 옵션 : edit:수정모드, read:읽기모드
        */
        this.cfn_read = function(svcID, params, callBackFunction, pageMode, isResize){
        	this.isResize = isResize;
        	if(isResize && !this.gfn_isNull(this.fCallBackFn)){
        		//부모 사이즈 변경호출
        		this.lookupFunc(this.fCallBackFn).call('tab_resize', 0, '', {'height':575});
        	}
        	if(this.fn_reloadCheck(params)){
        		if(this.fn_init(svcID, params, callBackFunction, pageMode)){
        			this.fn_call();
        		}
        	}
        }

        this.cfn_regProcRead = function(svcID, params, callBackFunction, pageMode){
        	this.cfn_read(svcID, params, callBackFunction, pageMode);
        }

        //사이즈 조절 필요시 호출
        this.cfn_resize = function(width, height){
        	if(!this.gfn_isNull(width)){
        		this.set_width(width);
        	}
        	if(!this.gfn_isNull(height)){
        		this.set_height(height);
        	}
        }
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.fn_init = function(svcID, params, callBackFunction, pageType) {
        	if(this.gfn_isNull(params.coCd) || this.gfn_isNull(params.prdId)){
        		trace(this.name+' > 필수값 오류');
        		return false;
        	}
        	this.sSvcID = svcID;
        	this.fCallBackFn = callBackFunction;
        	this.ds_search.setColumn(0, "CO_CD", params.coCd);
        	this.ds_search.setColumn(0, "PRD_ID", params.prdId);
        	return true;
        };

        //재조회체크
        this.fn_reloadCheck = function(params) {
        	if(this.loaded){
        		return false;
        	}else{
        		return true;
        	}
        };
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        this.grd_chmInfo_oncellclick = function(obj,e)
        {
        	var MTL_GRAVITY = this.ds_chmTotalInfo.getColumn(e.row, "MTL_GRAVITY");	//물질비중
        	var PHASE_SPR_CD_NM = this.ds_chmTotalInfo.getColumn(e.row, "PHASE_SPR_CD_NM");	//성상
        	this.edt_gravity.set_value(MTL_GRAVITY);
        	this.edt_pahse.set_value(PHASE_SPR_CD_NM);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.grd_chmInfo.addEventHandler("oncellclick",this.grd_chmInfo_oncellclick,this);
        };
        this.loadIncludeScript("SSP_BO_PA_03_07.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
