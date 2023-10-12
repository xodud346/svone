(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PA_48");
            this.set_titletext("R&D이관 이력");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,584);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_CHG_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BF_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"BF_PRD_CLSF_NN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NN\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TRSF_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mallSpr", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">20</Col><Col id=\"NM\">SSP</Col></Row><Row><Col id=\"CD\">10</Col><Col id=\"NM\">R&amp;D</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_list","20","75",null,null,"20","63",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_cellsizebandtype("allband");
            obj.set_autofittype("col");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"62\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"변경 전&#13;&#10;카테고리ID\"/><Cell col=\"1\" text=\"변경 전&#13;&#10;카테고리명\"/><Cell col=\"2\" text=\"변경 후&#13;&#10;카테고리ID\"/><Cell col=\"3\" text=\"변경 후&#13;&#10;카테고리명\"/><Cell col=\"4\" text=\"변경자\"/><Cell col=\"5\" text=\"변경주체\"/><Cell col=\"6\" text=\"변경일시\"/><Cell col=\"7\" text=\"변경사유\"/></Band><Band id=\"body\"><Cell text=\"bind:BF_PRD_CLCD\" wordWrap=\"char\"/><Cell col=\"1\" text=\"bind:BF_PRD_CLSF_NN\" wordWrap=\"char\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:PRD_CLCD\" wordWrap=\"char\"/><Cell col=\"3\" text=\"bind:PRD_CLSF_NN\" wordWrap=\"char\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:UPD_NAME\" wordWrap=\"char\"/><Cell col=\"5\" text=\"bind:MALL_SPR_CD\" wordWrap=\"char\" displaytype=\"combotext\" combodataset=\"ds_mallSpr\" combocodecol=\"CD\" combodatacol=\"NM\"/><Cell col=\"6\" text=\"bind:UPD_DTM\" wordWrap=\"char\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" text=\"bind:TRSF_RSN\" wordWrap=\"char\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardisplaynulltype=\"none\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staticTitle","20","20","155","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("| R&D이관이력");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","408",null,"65","30",null,"20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20","50","170","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("(총 0건)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",900,584,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SSP_BO_PA_50.xfdl", function() {
        /*******************************************************
        PROJECT NAME : ssp_bo
        CREATION DATES : 2022.04.20
        DESC : R&D이관 이력 팝업

        * ======================= 변경 내역 ======================
        * 날짜			담당자		유형코드		유형명칭
        * 2022.04.20	이원준 	    person		    R&D이관 이력
        *******************************************************/

        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        //부모창에서 넘긴 파라미터
        this.coCd = this.parent.coCd;
        this.newPrdReqNo = this.parent.newPrdReqNo;
        this.totalCount = 0;

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {
            this.gfn_formOnLoad(this);

        	if(!this.gfn_isNull(this.newPrdReqNo)){
        		this.ds_search.setColumn(0, "CO_CD", this.coCd);
        		this.ds_search.setColumn(0, "NEW_PRD_REQ_NO", this.newPrdReqNo);
        		this.fn_search();
        	}

        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function ()
        {
            var sSvcId = "search";
            var sUrl = "/pr/prd-popup/select-new-prd-proc-hst.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_list=ds_list";
            var arg = "";

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg) {
            switch(svcID) {
                case "search" :
        			this.sta_totcnt.set_text("(총 "+ this.gfn_appendComma(this.totalCount, 0) +"건)");
                    break;

            }
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        this.SSP_BO_PA_48_onkeyup = function(obj,e)
        {
        	// ENTER
        	if (e.keycode == 13) {
        		// 조회
        		this.fn_search();
        	}

        	// ESC
        	if (e.keycode == 27) {
        		// 팝업 화면 닫기
        		this.btn_close_onclick();
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.SSP_BO_PA_48_onkeyup,this);
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_PA_50.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
