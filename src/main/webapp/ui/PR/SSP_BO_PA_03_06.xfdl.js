(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PP_03_06");
            this.set_titletext("가격정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1296,83);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_price", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_PLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_APLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MCND_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"STPRC\" type=\"STRING\" size=\"256\"/><Column id=\"MRK_LWST_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"INTL_LWST_SALSPRC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdAplySprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdAplySprCdCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD\"/><Col id=\"COM_DTL_CD_NM\">선택</Col></Row><Row><Col id=\"COM_DTL_CD_NM\">미끼상품</Col><Col id=\"COM_DTL_CD\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mcnd", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_APLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MCND_PRD_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pubSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_type", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"STPRC\" type=\"STRING\" size=\"256\"/><Column id=\"MRK_LWST_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"DSTRB_STD_PRC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static21_00","0","20",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00","0","20","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("SSP기준가");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","430","20","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("시장최저판매가");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00_00_00","860","20","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("List Price");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_00","0","51",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00_01","0","51","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("예외가격관리대상");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_prcAplySprCd","209","55","190","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_prdAplySprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","406","29","12","14",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","836","29","12","14",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","1276","29","12","14",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("원");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_sspPrice","209","24","190","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_format("#,#.###");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_lowPrice","639","24","191","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_format("#,#.###");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_listPrice","1069","24","201","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_format("#,#.###");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1296,83,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_sspPrice","value","ds_type","STPRC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_lowPrice","value","ds_type","MRK_LWST_SALSPRC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_listPrice","value","ds_type","DSTRB_STD_PRC");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SSP_BO_PA_03_06.xfdl", function() {
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
        this.loaded = false;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.fn_commonCodeSearch();
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //공통코드조회
        this.fn_commonCodeSearch = function(){
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_prdAplySprCd=ds_output1";
        	var arg = "";

        	this.ds_search.insertRow(0);
        	this.ds_search.setColumn(0, "CODE_LIST", "PRC_APLY_SPR_CD");
        	this.ds_search.setColumn(0, "LANG_CD", "KO");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //가격대상 조회
        this.fn_call = function(){
        	var sSvcId = "call";
        	var sUrl = "/pr/prd-mng/select-product-price.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_price=price";
        	var arg;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack", false);
        };

        //가격정보 조회
        this.fn_price = function(){
        	var sSvcId = "price";
        	var sUrl = "/pr/prd-mng/select-price-info.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_type=ds_output";
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
        		case "commonCodeSearch":
        			this.ds_prdAplySprCd.insertRow(0);
        			this.ds_prdAplySprCd.setColumn(0, "COM_DTL_CD", "");
        			this.ds_prdAplySprCd.setColumn(0, "COM_DTL_CD_NM", "선택");

        			break;

        		case "call":
        			var MCND_PRD_YN = this.ds_price.getColumn(0, "MCND_PRD_YN");	        //카테고리 시황상품여부
        			var PRC_APLY_SPR_CD = this.ds_price.getColumn(0, "PRC_APLY_SPR_CD");    //10 시황자재		20 미끼상품
        			var PUB_ONLY_SPR_CD = this.ds_pubSprCd.getColumn(0, "PUB_ONLY_SPR_CD"); //공용전용 구분

        			if(MCND_PRD_YN == 'Y'){
        				this.cmb_prcAplySprCd.set_innerdataset(this.ds_prdAplySprCd);     //시황상품일 경우 시황상품 고정
        				this.cmb_prcAplySprCd.set_value('10');
        				this.cmb_prcAplySprCd.set_readonly(true);
        			} else{
        				this.cmb_prcAplySprCd.set_innerdataset(this.ds_prdAplySprCdCopy); //시황상품이 아닐 경우 미끼상품만 노출
        				if(!this.gfn_isNull(PRC_APLY_SPR_CD)){
        					this.cmb_prcAplySprCd.set_value(PRC_APLY_SPR_CD);
        					this.cmb_prcAplySprCd.set_readonly(false);
        				} else{
        					this.cmb_prcAplySprCd.set_value("");
        					this.cmb_prcAplySprCd.set_readonly(false);
        				}
        			}

        			if(PUB_ONLY_SPR_CD == "전용"){
        				this.cmb_prcAplySprCd.set_readonly(true);                         //전용상품일 경우 가격대상 수정 불가
        			}

        			this.loaded = true;

        			break;

        		case "price":

        			break;
        	}

        	//부모창 결과리턴
        	if(!this.gfn_isNull(this.fCallBackFn)){
        		this.lookupFunc(this.fCallBackFn).call(this.sSvcID, errorCode, errorMsg, {id:this.sSvcID, status:this.loaded});
        	}

        };
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        /*
        서비스ID(콜백ID)
        회사코드,
        상품ID,
        콜백펑션,
        페이지타입 옵션 : edit:수정모드, read:읽기모드
        */
        this.cfn_read = function(svcID, params, callBackFunction, pageType, isResize){
        	if(isResize){
        		//부모 사이즈 변경호출
        		this.lookupFunc(callBackFunction).call('tab_resize', 0, '', {'height':200});
        	}
        	if(this.loaded){
        		return false;
        	}
        	var paramArr = [{id:'coCd', name:'회사코드'}, {id:'prdId', name:'상품ID'}];
        	for(var i = 0; i<paramArr.length; i++){
        		if(this.gfn_isNull(params[paramArr[i]['id']])){
        			alert(this.titletext+' > 필수값 오류 > '+paramArr[i]['name']);
        			return false;
        		}
        	}


        	var pubOnlySprCd = params.pubOnlySprCd;
        	var prdClcd = params.prdClcd;
        	var mroPrdClcd = params.mroPrdClcd;
        	this.sSvcID = svcID;
        	this.fCallBackFn = callBackFunction;
        	if(pageType == 'read'){
        		var object = this.all;
        		for( var i = 0; i < object.length; i++ ){
        			var stype = object[i].valueOf();
        			if(stype == '[object Combo]'){
        				this[object[i].id].set_readonly(true);
        			}
        		}
        	}

        	this.ds_search.setColumn(0, "CO_CD", params.coCd);
        	this.ds_search.setColumn(0, "PRD_ID", params.prdId);
        	this.ds_search.setColumn(0, "PRD_CLCD", params.prdClcd);
        	this.ds_search.setColumn(0, "MRO_PRD_CLCD", params.mroPrdClcd);
        	this.ds_pubSprCd.setColumn(0, "PUB_ONLY_SPR_CD", params.pubOnlySprCd);

        	this.fn_call();
        	this.fn_price();
        }

        //필요값 리턴
        this.cfn_getData = function(){
        	var returnObject = {
        		'PRC_APLY_SPR_CD' : this.cmb_prcAplySprCd.value
        	};

        	return returnObject;
        };

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

        //가격 대상 선택 후
        this.cmb_prcAplySprCd_onitemchanged = function(obj,e)
        {
        	var value = this.cmb_prcAplySprCd.value;
        	this.ds_price.setColumn(0, "PRC_APLY_SPR_CD", value);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.cmb_prcAplySprCd.addEventHandler("onitemchanged",this.cmb_prcAplySprCd_onitemchanged,this);
            this.ds_search.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
        };
        this.loadIncludeScript("SSP_BO_PA_03_06.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
