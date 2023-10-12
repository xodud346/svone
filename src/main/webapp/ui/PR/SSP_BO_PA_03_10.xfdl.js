(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PP_03_10");
            this.set_titletext("시리즈그룹상품 정보");
            this.set_scrollbartype("none none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1296,569);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_series", this);
            obj._setContents("<ColumnInfo><Column id=\"MIN_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_PRD_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_relation", this);
            obj._setContents("<ColumnInfo><Column id=\"MIN_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_PRD_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static60_00","0","1","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("시리즈그룹상품 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","30",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","0","61",null,"239","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","129","30","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("그룹ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_background("whitesmoke");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","499","30","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("그룹명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_background("whitesmoke");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00","925","30","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("그룹생성일");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_background("whitesmoke");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","30","130","270",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("시리즈상품");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_series","139","71","1148","219",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_series");
            obj.set_autofittype("none");
            obj.set_autosizingtype("col");
            obj.set_autosizebandtype("allband");
            obj.set_nodatatext("시리즈상품이 존재하지 않습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"146\"/><Column size=\"299\"/><Column size=\"365\"/><Column size=\"243\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"상품ID\"/><Cell col=\"2\" text=\"상품명\"/><Cell col=\"3\" text=\"규격\"/><Cell col=\"4\" text=\"주문단위\"/></Band><Band id=\"body\"><Cell text=\"expr:BSS_PRD_YN==&apos;Y&apos;?&quot;기준상품&quot;:MIN_SEQ==0?currow:currow+1\" padding=\"0px 10px\"/><Cell col=\"1\" text=\"bind:PRD_ID_VIEW\" displaytype=\"text\" textAlign=\"right\" padding=\"0px 10px\"/><Cell col=\"2\" text=\"bind:PRD_NM\" textAlign=\"left\" padding=\"0px 10px\"/><Cell col=\"3\" text=\"bind:ATTR_VAL\" textAlign=\"left\" padding=\"0px 10px\"/><Cell col=\"4\" text=\"bind:SELL_UNIT\" padding=\"0px 10px\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01","0","299",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","0","330",null,"239","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_01","129","299","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("그룹ID");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_background("whitesmoke");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","299","130","270",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("연관상품");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_relation","139","340","1148","219",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_binddataset("ds_relation");
            obj.set_autofittype("none");
            obj.set_autosizingtype("col");
            obj.set_autosizebandtype("allband");
            obj.set_nodatatext("연관상품이 존재하지 않습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"상품ID\"/><Cell col=\"2\" text=\"상품명\"/><Cell col=\"3\" text=\"규격\"/><Cell col=\"4\" text=\"주문단위\"/></Band><Band id=\"body\"><Cell text=\"expr:BSS_PRD_YN==&apos;Y&apos;?&quot;기준상품&quot;:MIN_SEQ==0?currow:currow+1\" padding=\"0px 10px\"/><Cell col=\"1\" text=\"bind:PRD_ID_VIEW\" displaytype=\"text\" textAlign=\"right\" padding=\"0px 10px\"/><Cell col=\"2\" text=\"bind:PRD_NM\" textAlign=\"left\" padding=\"0px 10px\"/><Cell col=\"3\" text=\"bind:ATTR_VAL\" textAlign=\"left\" padding=\"0px 10px\"/><Cell col=\"4\" text=\"bind:SELL_UNIT\" padding=\"0px 10px\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdGrpId_s","268","34","222","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdGrpNm_s","638","34","280","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_regDtm_s","1064","34","222","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdGrpId_r","268","303","222","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_01","499","299","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("그룹명");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_background("whitesmoke");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdGrpNm_r","638","303","280","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00","925","299","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("그룹생성일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_background("whitesmoke");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_regDtm_r","1064","303","222","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1296,569,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SSP_BO_PA_03_10.xfdl", function() {
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
        this.loaded = false; //로딩여부
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
        	var sUrl = "/pr/prd-mng/select-series-group-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_series=seriesList ds_relation=relationList";
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
        	var isResize = false;	//시리즈그룹정보 존재하지 않을시 부모창 DIV영역 숨김처리  default : 569

        	switch(svcID){
        		case "call":
        			if(this.ds_series.rowcount>0){
        				this.edt_prdGrpId_s.set_value(this.ds_series.getColumn(0, "PRD_GRP_ID"));
        				this.edt_prdGrpNm_s.set_value(this.ds_series.getColumn(0, "PRD_GRP_NM"));
        				this.edt_regDtm_s.set_value(this.ds_series.getColumn(0, "REG_DTM"));
        			}else{
        				isResize = true;
        			}

        			if(this.ds_relation.rowcount>0){
        				this.edt_prdGrpId_r.set_value(this.ds_relation.getColumn(0, "PRD_GRP_ID"));
        				this.edt_prdGrpNm_r.set_value(this.ds_relation.getColumn(0, "PRD_GRP_NM"));
        				this.edt_regDtm_r.set_value(this.ds_relation.getColumn(0, "REG_DTM"));
        				isResize = false;
        			}else if(isResize){
        				isResize = true;
        				this.height = 0;
        			}else{
        				isResize = true;
        				this.height = 300;
        			}

        			this.loaded = true;

        			break;

        	}

        	//부모창 결과리턴
        	if(!this.gfn_isNull(this.fCallBackFn)){
        		this.lookupFunc(this.fCallBackFn).call(this.sSvcID, errorCode, errorMsg, {id:this.sSvcID, status:this.loaded, isResize:isResize});
        	}

        };
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        /*
        서비스ID(콜백ID)
        파라미터맵,
        콜백펑션
        */
        this.cfn_read = function(svcID, params, callBackFunction){
        	var paramArr = [{id:'coCd', name:'회사코드'}, {id:'prdId', name:'상품ID'}];
        	for(var i = 0; i<paramArr.length; i++){
        		if(this.gfn_isNull(params[paramArr[i]['id']])){
        			alert(this.titletext+' > 필수값 오류 > '+paramArr[i]['name']);
        			return false;
        		}
        	}
        	var coCd = params.coCd;
        	var prdId = params.prdId;
        	this.sSvcID = svcID;
        	this.fCallBackFn = callBackFunction;
        	this.ds_search.setColumn(0, "CO_CD", coCd);
        	this.ds_search.setColumn(0, "PRD_ID", prdId);

        	this.fn_call();
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

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        this.grd_relation_oncellclick = function(obj,e)
        {
        	var PRD_GRP_ID = this.ds_relation.getColumn(e.row, "PRD_GRP_ID");
        	var PRD_GRP_NM = this.ds_relation.getColumn(e.row, "PRD_GRP_NM");
        	var REG_DTM = this.ds_relation.getColumn(e.row, "REG_DTM");
        	this.edt_prdGrpId_r.set_value(PRD_GRP_ID);
        	this.edt_prdGrpNm_r.set_value(PRD_GRP_NM);
        	this.edt_regDtm_r.set_value(REG_DTM);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.Static02_01.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.Static02_01_00.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.Static02_01_00_00.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.Static02.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.Static02_01_01.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.Static02_00.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.grd_relation.addEventHandler("oncellclick",this.grd_relation_oncellclick,this);
            this.Static02_01_00_01.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.Static02_01_00_00_00.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_PA_03_10.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
