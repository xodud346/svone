(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("intlLwstList");
            this.set_titletext("가격 팝업테스트");
            if (Form == this.constructor)
            {
                this._setFormPosition(1340,990);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"codeList\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">20</Col><Col id=\"PRD_USE_YN\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_insert", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"prdText\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BZPLC_ID\">S000000782</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_DTM\" type=\"DATETIME\" size=\"17\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SSP_BSS_SALSPRC_VLD_PERD_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PRC_APLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_VLD_PERD_YN\" type=\"STRING\" size=\"32\"/><Column id=\"AUTO_LOGIC_EM_YN\" type=\"STRING\" size=\"32\"/><Column id=\"RND_USCUST_DISP_STATS_CHGRSN\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_CHGRSN\" type=\"STRING\" size=\"32\"/><Column id=\"DISP_STATS_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_INFO_PSB_YN\" type=\"STRING\" size=\"32\"/><Column id=\"SAFT_INVN_YN\" type=\"STRING\" size=\"32\"/><Column id=\"MRO_PRD_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REPR_PRD_SPR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"DATETIME\" size=\"17\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PURG_SPL_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PCPRC_INC_YN\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","170","525","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("전용상품등록");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","45","120","545","310",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CO_CD\"/><Cell col=\"1\" text=\"PRD_ID\"/><Cell col=\"2\" text=\"BZPLC_ID\"/><Cell col=\"3\" text=\"OPR_UNIT_ID\"/><Cell col=\"4\" text=\"UPD_DTM\"/></Band><Band id=\"body\"><Cell text=\"bind:CO_CD\"/><Cell col=\"1\" text=\"bind:PRD_ID\"/><Cell col=\"2\" text=\"bind:BZPLC_ID\"/><Cell col=\"3\" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"4\" text=\"bind:UPD_DTM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","61","67","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_font("28px/normal \"Malgun Gothic\",\"맑은고딕\",\"Apple SD Gothic Neo\",\"dotum\",\"돋움\",\"arial\",\"sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","50","525","120","85",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("영업");
            obj.set_font("28px/normal \"Malgun Gothic\",\"맑은고딕\",\"Apple SD Gothic Neo\",\"dotum\",\"돋움\",\"arial\",\"sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","780","60","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("MD");
            obj.set_font("28px/normal \"Malgun Gothic\",\"맑은고딕\",\"Apple SD Gothic Neo\",\"dotum\",\"돋움\",\"arial\",\"sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_md","765","120","545","310",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CO_CD\"/><Cell col=\"1\" text=\"PRD_ID\"/><Cell col=\"2\" text=\"BZPLC_ID\"/><Cell col=\"3\" text=\"OPR_UNIT_ID\"/><Cell col=\"4\" text=\"UPD_DTM\"/></Band><Band id=\"body\"><Cell text=\"bind:CO_CD\"/><Cell col=\"1\" text=\"bind:PRD_ID\"/><Cell col=\"2\" text=\"bind:BZPLC_ID\"/><Cell col=\"3\" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"4\" text=\"bind:UPD_DTM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_youngup","61","595","545","310",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CO_CD\"/><Cell col=\"1\" text=\"PRD_ID\"/><Cell col=\"2\" text=\"BZPLC_ID\"/><Cell col=\"3\" text=\"OPR_UNIT_ID\"/><Cell col=\"4\" text=\"UPD_DTM\"/></Band><Band id=\"body\"><Cell text=\"bind:CO_CD\"/><Cell col=\"1\" text=\"bind:PRD_ID\"/><Cell col=\"2\" text=\"bind:BZPLC_ID\"/><Cell col=\"3\" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"4\" text=\"bind:UPD_DTM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1340,990,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PopupTest.xfdl", function() {
        /*******************************************************
          PROJECT NAME : 상품군계획매익률
          CREATION DATES : 2022.01.25
        *******************************************************/

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.preSelectRowPosition = 0;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	this.fn_doSearch();

        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_doSearch = function(page)
        {
        	var sSvcId = "test";
        	var sUrl = "/pc/detrInfo/select-sampl-disp-list.do";
        	var inDs = "ds_insert=ds_insert";
        	var outDs = "ds_list=ds_output";
        	var arg = "";


        	//전송
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/

        //조회 트랜잭션 콜백함수
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{

        	if( errorCode == -1 || errorCode == -100) { //사용자 지정 에러코드 -100
        			alert(errorMsg);
        		} else {
        			//alert("저장되었습니다.");
        			//this.fn_doSearch(0);
        		}

        }



        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/


        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        this.Button00_onclick = function(obj,e)
        {
        	var params = {};
            var options = {};
            this.gfn_openPopup(e.fromobject.id, "./PC/SSP_BO_CA_39.xfdl", params,  "fn_popupCallback", options);
        };

        this.Grid00_oncellclick = function(obj,e)
        {
        	if(e.col == 0 || e.col == 1){
        		var objParam = {
        				prdId : this.ds_list.getColumn(this.ds_list.rowposition, "PRD_ID"),
        				prdIdView : this.ds_list.getColumn(this.ds_list.rowposition, "PRD_ID"),
        				bzplcId : this.ds_list.getColumn(this.ds_list.rowposition, "BZPLC_ID")
        			};
        		this.gfn_openPopup(e.fromobject.id, "PC::SSP_BO_CA_40_2.xfdl", objParam);
        	}
        };

        this.Grid00_md_oncellclick = function(obj,e)
        {
        	if(e.col == 0 || e.col == 1){
        		alert('MD 상세');
        		var objParam = {
        				prdId : this.ds_list.getColumn(this.ds_list.rowposition, "PRD_ID"),
        				prdIdView : this.ds_list.getColumn(this.ds_list.rowposition, "PRD_ID"),
        				bzplcId : this.ds_list.getColumn(this.ds_list.rowposition, "BZPLC_ID")
        			};
        		this.gfn_openPopup(e.fromobject.id, "PC::SSP_BO_CA_40.xfdl", objParam);
        	}
        };

        this.Grid00_youngup_oncellclick = function(obj,e)
        {
        	if(e.col == 0 || e.col == 1){
        		alert('영업상세');
        		var objParam = {
        				prdId : this.ds_list.getColumn(this.ds_list.rowposition, "PRD_ID"),
        				prdIdView : this.ds_list.getColumn(this.ds_list.rowposition, "PRD_ID"),
        				bzplcId : this.ds_list.getColumn(this.ds_list.rowposition, "BZPLC_ID")
        			};
        		this.gfn_openPopup(e.fromobject.id, "PC::SSP_BO_CA_40_1.xfdl", objParam);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Grid00_md.addEventHandler("oncellclick",this.Grid00_md_oncellclick,this);
            this.Grid00_youngup.addEventHandler("oncellclick",this.Grid00_youngup_oncellclick,this);
        };
        this.loadIncludeScript("PopupTest.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
