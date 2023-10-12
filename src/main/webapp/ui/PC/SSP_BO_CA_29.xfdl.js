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
            this.set_titletext("Condition 이력조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1100,700);
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
            obj = new Tab("Tab00","20","50",null,"590","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_WF_basic");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("물량할인");
            obj.set_url("PC::SSP_BO_CA_29_A.xfdl");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("배송비");
            obj.set_url("PC::SSP_BO_CA_29_B.xfdl");
            this.Tab00.addChild(obj.name, obj);

            obj = new Button("btn_select","47.27%","655","65","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_select");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("st_title","20","20","490","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Condition 이력조회");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1100,700,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","PC::SSP_BO_CA_29_A.xfdl");
            this._addPreloadList("fdl","PC::SSP_BO_CA_29_B.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CA_29.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_CA_29.xfdl", function() {
        /*******************************************************
        PROJECT NAME : 메뉴관리
        CREATION DATES : 2022.01.26
        *******************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.prdId = "";
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//단축키 함수 호출
        	this.fn_regShortCutMethod();

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
        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodESC("btn_select_onclick");
        };

        this.btn_select_onclick = function(obj,e)
        {
        	this.close();
        };

        this.work04_onkeyup = function(obj,e)
        {
        	// 단축키 등록
        	this.fn_processKey(obj, e);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.work04_onkeyup,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.btn_select.addEventHandler("onclick",this.btn_select_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_CA_29.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
