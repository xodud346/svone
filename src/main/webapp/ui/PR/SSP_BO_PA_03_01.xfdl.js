(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PP_03_01");
            this.set_titletext("S-MRO 카테고리/속성 정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(638,302);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_mroAttr", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_MRO_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_ATTR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRNM\" type=\"STRING\" size=\"256\"/><Column id=\"PRVL\" type=\"STRING\" size=\"256\"/><Column id=\"MAND_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static27_00_00","0","62",null,"240","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00","0","31",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00","0","31","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("카테고리");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_00_00","0","62","130","240",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("속성");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mroAttr","140","73",null,"219","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_mroAttr");
            obj.set_autofittype("col");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"150\"/><Column size=\"250\"/><Column size=\"0\"/><Column size=\"65\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"MRO_ATTR_CD\"/><Cell col=\"1\" text=\"속성명\"/><Cell col=\"2\" text=\"속성값\"/><Cell col=\"3\" text=\"ATTR_SEQ\"/><Cell col=\"4\" text=\"노출여부\"/></Band><Band id=\"body\"><Cell text=\"bind:MRO_ATTR_CD\"/><Cell col=\"1\" displaytype=\"decoratetext\" text=\"expr:MAND_YN == &quot;Y&quot; ? PRNM+&quot;&lt;fc v=&apos;red&apos;&gt; *&lt;/fc&gt;&quot; : PRNM\"/><Cell col=\"2\" text=\"bind:PRVL\"/><Cell col=\"3\" text=\"bind:ATTR_SEQ\"/><Cell col=\"4\" text=\"bind:EXPS_YN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("S-MRO 카테고리/속성 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mroPrdClcd","140","35","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mroPrdClsfNm","294","35","334","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",638,302,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_mroPrdClcd","value","ds_mroAttr","MRO_PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_mroPrdClsfNm","value","ds_mroAttr","FULL_MRO_PRD_CLSF_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_PA_03_01.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_PA_03_01.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES : 2022.03.17 조지훈
        *******************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object
        this.sSvcID = "";	    //콜백서비스ID
        this.fCallBackFn = "";	//콜백
        this.sCoCd = "";	    //회사코드
        this.sPrdId = "";	    //상품ID
        this.sClcd = "";	    //카테고리ID
        this.sClsfNm = "";	    //카테고리명
        this.sFullClsfNm = "";	//풀카테고리명
        this.loaded = false;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//ctrl+c v
        	this.copyPaste.addGrid(this.grd_mroAttr);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_callInfo = function(){
        	var sSvcId = "mroCategoryAttr";
        	var sUrl = "/pr/prd-mng/select-mro-category-attr-list.do";
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_mroAttr=categoryAttrInfo";
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
        		case "mroCategoryAttr":
        			this.sCoCd = this.ds_mroAttr.getColumn(0, "CO_CD");
        			this.sPrdId = this.ds_mroAttr.getColumn(0, "PRD_ID");
        			this.sClcd = this.ds_mroAttr.getColumn(0, "MRO_PRD_CLCD");
        			this.sClsfNm = this.ds_mroAttr.getColumn(0, "MRO_PRD_CLSF_NM");
        			this.sFullClsfNm = this.ds_mroAttr.getColumn(0, "MRO_PRD_FULL_CLSF_NM");

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
        //호출(서비스ID(콜백), 파라미터맵, 콜백펑션)
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
        	var prdClcd = params.prdClcd;
        	this.sSvcID = svcID;
        	this.sCoCd = coCd;
        	this.sPrdId = prdId;
        	this.sClcd = prdClcd;
        	this.fCallBackFn = callBackFunction;

        	this.ds_search.setColumn(0, "CO_CD", this.sCoCd);
        	this.ds_search.setColumn(0, "PRD_ID", this.sPrdId);
        	this.ds_search.setColumn(0, "PRD_CLCD", this.sClcd);

        	this.fn_callInfo();
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
        this.loadIncludeScript("SSP_BO_PA_03_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
