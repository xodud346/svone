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
            this.set_titletext("참조가격 변경이력");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,740);
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
            obj = new Tab("Tab00","20","60",null,"680","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_preload("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("참조가격");
            obj.set_url("PC::SSP_BO_CA_28_1.xfdl");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("내부최저판매가");
            obj.set_url("PC::SSP_BO_CA_42.xfdl");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("st_title","20","20","490","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("참조가격 변경이력");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,740,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","PC::SSP_BO_CA_28_1.xfdl");
            this._addPreloadList("fdl","PC::SSP_BO_CA_42.xfdl");
        };
        
        // User Script
        this.registerScript("SSP_BO_CA_28.xfdl", function() {
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
        	this.prdId = this.parent.prdId;
        };


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


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
        };
        this.loadIncludeScript("SSP_BO_CA_28.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
