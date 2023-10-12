(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PP_03_03");
            this.set_titletext("S-MRO 부가정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(640,186);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_addInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HUB_HNL_PSB_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_LT\" type=\"STRING\" size=\"256\"/><Column id=\"CHM_MTL_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RGNT_SELL_PSB_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TOXIC_MTL1\" type=\"STRING\" size=\"256\"/><Column id=\"LMT_MTL1\" type=\"STRING\" size=\"256\"/><Column id=\"ACCD_PSB_MTL1\" type=\"STRING\" size=\"256\"/><Column id=\"PHBT_MTL2\" type=\"STRING\" size=\"256\"/><Column id=\"PERMIT_MTL2\" type=\"STRING\" size=\"256\"/><Column id=\"TX_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"INVN_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static27_00_00","0","93",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_01","0","62",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00","0","31",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00","0","31","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Hub취급가능여부");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("S-MRO 부가정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","-1129","66","110","110",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("image");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","62","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("화학물질여부");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_01_00","0","124",null,"62","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00_00_00","0","124","130","62",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("유해화학물질여부");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00_01","310","31","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("평균배송일");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00_00_01","310","62","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("자사허가여부");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00","310","93","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("재고여부");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_TOXIC_MTL1","140","130","67","23",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("유독물질");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_enable("true");
            obj.set_enableevent("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_PHBT_MTL2","140","157","67","23",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("금지물질");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_enable("true");
            obj.set_enableevent("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_LMT_MTL1","250","129","67","23",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("제한물질");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_enable("true");
            obj.set_enableevent("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_ACCD_PSB_MTL1","350","130","91","23",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("사고대비물질");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_enable("true");
            obj.set_enableevent("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_PERMIT_MTL2","250","157","67","23",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("허가물질");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_enable("true");
            obj.set_enableevent("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_hubHnlPsbYn","139","35","161","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dlvLt","449","35","180","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_chmMtlPrdYn","139","66","161","24",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dlvLt00","449","66","180","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_txClcd","139","97","161","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_invnYn","449","97","180","24",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_00_00","0","93","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("과면세구분");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",640,186,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_hubHnlPsbYn","value","ds_addInfo","HUB_HNL_PSB_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_dlvLt","value","ds_addInfo","DLV_LT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_chmMtlPrdYn","value","ds_addInfo","CHM_MTL_PRD_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_txClcd","value","ds_addInfo","TX_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","chk_TOXIC_MTL1","value","ds_addInfo","TOXIC_MTL1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","chk_LMT_MTL1","value","ds_addInfo","LMT_MTL1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","chk_ACCD_PSB_MTL1","value","ds_addInfo","ACCD_PSB_MTL1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","chk_PHBT_MTL2","value","ds_addInfo","PHBT_MTL2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","chk_PERMIT_MTL2","value","ds_addInfo","PERMIT_MTL2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt_dlvLt00","value","ds_addInfo","RGNT_SELL_PSB_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edt_invnYn","value","ds_addInfo","INVN_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SSP_BO_PA_03_03.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES : 2022.03.17 조지훈
        *******************************************************/
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object
        this.sSvcID = "";
        this.fCallBackFn = "";	//콜백
        this.loaded = false;
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
        	var sSvcId = "mroAddInfo";
        	var sUrl = "/pr/prd-mng/select-mro-add-info.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_addInfo=attrInfo";
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
        		case "mroAddInfo":
        			this.loaded = true;

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
        //호출(서비스ID, 파라미터맵, 콜백펑션)
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
        };
        this.loadIncludeScript("SSP_BO_PA_03_03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
