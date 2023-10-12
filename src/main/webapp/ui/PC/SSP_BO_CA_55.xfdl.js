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
            this.set_titletext("기준판매가 참조가격관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1340,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"codeList\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"DETR_UNIT_SEQ\" type=\"INT\" size=\"16\"/><Column id=\"DETR_UNIT_NM\" type=\"string\" size=\"32\"/><Column id=\"DETR_BSS_CD\" type=\"string\" size=\"0\"/><Column id=\"DETR_MTHD_CD\" type=\"string\" size=\"0\"/><Column id=\"UPD_DTM\" type=\"datetime\" size=\"17\"/><Column id=\"UPDPSN_ID\" type=\"string\" size=\"32\"/><Column id=\"MAX_PRC_LENGTH\" type=\"INT\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detrBssCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detrMthdCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("Tab00","20","20",null,"806","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_preload("true");
            obj.set_cssclass("tab_WF_basic");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("참조가격관리");
            obj.set_url("PC::SSP_BO_CA_55_B.xfdl");
            obj.set_async("false");
            obj.set_formscrolltype("horizontal");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("내부최저판매가 관리");
            obj.set_url("PC::SSP_BO_CA_55_A.xfdl");
            obj.set_formscrolltype("horizontal");
            this.Tab00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1340,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","PC::SSP_BO_CA_55_B.xfdl");
            this._addPreloadList("fdl","PC::SSP_BO_CA_55_A.xfdl");
        };
        
        // User Script
        this.registerScript("SSP_BO_CA_55.xfdl", function() {
        /*******************************************************
        PROJECT NAME : 메뉴관리
        CREATION DATES : 2022.01.26
        *******************************************************
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);



        };

        this.tabPage = function(){
        	this.isDiv = "false";
        	if(typeof(this.parent.parent.tabPageInit) == "function"){
        		this.parent.parent.tabPageInit();
        		this.isDiv = true;
        	}
        }


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/


        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/


        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/

        this.Tab00_onchanged = function(obj,e)
        {
        	//탭 이동시 포커스 이동
        	this.Tab00.tabpages[e.postindex].form.Div00_00.form.edt_prdId.setFocus();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
        };
        this.loadIncludeScript("SSP_BO_CA_55.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
