(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PP_10");
            this.set_titletext("상품군 조회");
            this.set_scrollbartype("none none");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HIER_LVL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LWST_CD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SEL_MTHD_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LWST_CD_YN\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_listCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HIER_LVL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_list","20","98",null,null,"20","60",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj.set_cellsizebandtype("allband");
            obj.set_autosizingtype("none");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_scrollbartype("auto fixed");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"202\"/><Column size=\"291\"/><Column size=\"48\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"상품군ID\"/><Cell col=\"1\" text=\"상품군명\"/><Cell col=\"2\" text=\"레벨\"/></Band><Band id=\"body\"><Cell text=\"bind:PRD_CLCD\" wordWrap=\"none\" textAlign=\"left\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\"/><Cell col=\"1\" text=\"bind:FULL_PRD_CLSF_NM\" wordWrap=\"none\" textAlign=\"left\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\"/><Cell col=\"2\" text=\"bind:HIER_LVL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","20","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("상품군 조회");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"60","60","28","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20","64","250","14",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("총 0건");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_rowCount",null,"60","100","28","84",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("1000");
            obj.set_readonly("true");
            obj.set_text("1000");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt00",null,"60","60","28","188",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("최대조회수");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_txtR");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,null,"60","30","270","20",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,530,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SSP_BO_PP_10.xfdl", function() {
        /*******************************************************
        PROJECT NAME : MarketA
        CREATION DATES : 2021.01.19
        *******************************************************/

        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();
        this.fn_onLoad = function(obj,e)
        {
            this.gfn_formOnLoad(this);
        	var coCd = this.parent.coCd;
        	var prdClcd = this.parent.prdClcd;
        	var prdClsfNm = this.parent.prdClsfNm;
        	var mallSprCd = this.parent.mallSprCd;
        	var selMthdCd = this.parent.selMthdCd;
        	var lwstCdYn = this.parent.lwstCdYn;

        	this.ds_search.setColumn(0, "SEL_MTHD_CD", selMthdCd);

        	if(this.gfn_isNull(coCd)){
        		alert("팝업창의 회사코드가 비어있습니다. 확인해주세요.");
        		return;
        	}else{
        		this.ds_search.setColumn(0, "CO_CD", coCd);
        	}

        	if(this.gfn_isNull(mallSprCd)){
        		alert('몰구분코드는 필수입니다.');
        		this.close(false);
        	}
        	this.ds_search.setColumn(0, "MALL_SPR_CD", mallSprCd);	//몰구분

        	if(lwstCdYn == "") this.ds_search.setColumn(0, "LWST_CD_YN", lwstCdYn); //최하위코드 여부

        	if(!this.gfn_isNull(prdClcd) || !this.gfn_isNull(prdClsfNm)){
        		this.ds_search.setColumn(0, "PRD_CLCD", prdClcd);
        		this.ds_search.setColumn(0, "PRD_CLSF_NM", prdClsfNm);
        		this.fn_search();
        	}else{
        		this.fn_initGrid();
        	}
        };

        this.fn_onkeyup = function(obj,e)
        {
            var objType = obj.getFocus();
            if( e.keycode == 13 && objType == "[object Edit]" ) {
                //조회
                this.fn_search(true);
            }else if(e.keycode == 27){	//ESC : 닫기기능
                this.close();
            }
        };

        this.fn_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13 && e.ctrlkey){	//Ctrl+Enter : 선택기능
        		this.btn_add_onclick();
        	}
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function (bInit)
        {
            var sSvcId = "search";
            var sUrl = "/pr/prd-popup/select-category-popup-list.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_listCopy=ds_list";
            var arg = "";

            this.ds_search.setColumn(0,"ROW_COUNT", this.edt_rowCount.value);

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg) {
            switch(svcID) {
                case "search" :
        			this.ds_list.clearData();
        			this.fn_initGrid();
        			this.ds_list.appendData(this.ds_listCopy, true);
                    this.sta_totcnt.set_text("총 "+ this.gfn_appendComma(this.totalCount, 0) +"건");
                    break;

            }
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.fn_initGrid = function(){
        	this.ds_list.insertRow(0);
        	this.ds_list.setColumn(0, "PRD_CLCD",  this.ds_search.getColumn(0, "PRD_CLCD"));
        	this.ds_list.setColumn(0, "FULL_PRD_CLSF_NM",  this.ds_search.getColumn(0, "PRD_CLSF_NM"));
        	this.ds_list.set_rowposition(-1);
        };

        this.fn_searchMapSetting = function(){
        	this.ds_search.setColumn(0, "PRD_CLCD", this.ds_list.getColumn(0, "PRD_CLCD"));
        	this.ds_search.setColumn(0, "PRD_CLSF_NM", this.ds_list.getColumn(0, "FULL_PRD_CLSF_NM"));
        };
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //조회버튼
        this.btn_search_onclick = function(obj,e)
        {
        	var coCd = this.ds_search.getColumn(0, "CO_CD");
        	if(this.gfn_isNull(coCd) || coCd ==  undefined){
        		alert("팝업창의 회사코드가 비어있습니다. 확인해주세요.");
        		return;
        	}
        	this.fn_searchMapSetting();
            this.fn_search();
        };

        //검색조건 ROW에서 엔터
        this.grd_list_onenterdown = function(obj,e)
        {
        	this.fn_searchMapSetting();
        	this.fn_search();
        };

        //ROW더블클릭
        this.grd_list_oncelldblclick = function(obj,e)
        {
        	if(e.row != 0){
        		var resData = {};
        		var resString = "";

        		resData.PRD_CLCD = this.ds_list.getColumn(this.ds_list.rowposition, "PRD_CLCD");
        		resData.PRD_CLSF_NM = this.ds_list.getColumn(this.ds_list.rowposition, "PRD_CLSF_NM");
        		resData.FULL_PRD_CLSF_NM = this.ds_list.getColumn(this.ds_list.rowposition, "FULL_PRD_CLSF_NM");

        		resString = JSON.stringify(resData);
        		this.close(resString);
        	}
        };

        //검색조건 ROW의 CELL 클릭 시 글자 맨 끝으로 커서 가도록
        this.grd_list_oncellclick = function(obj,e)
        {
        	if(e.row == 0){
        		var cellText = obj.getCellText(e.row, e.cell);
        		if(cellText != undefined){
        			obj.setEditSelect(cellText.length, cellText.length);
        		}
        	}
        };

        this.btn_add_onclick = function(obj,e)
        {
        	if(this.ds_list.rowposition < 1){
        		alert("선택된 데이터가 없습니다.");
        		return;
        	}
        	var resData = {};
        	var resString = "";
        	resData.PRD_CLCD = this.ds_list.getColumn(this.ds_list.rowposition, "PRD_CLCD");
        	resData.PRD_CLSF_NM = this.ds_list.getColumn(this.ds_list.rowposition, "PRD_CLSF_NM");
        	resData.FULL_PRD_CLSF_NM = this.ds_list.getColumn(this.ds_list.rowposition, "FULL_PRD_CLSF_NM");
        	resString = JSON.stringify(resData);
        	this.close(resString);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeydown",this.fn_onkeydown,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.grd_list.addEventHandler("onenterdown",this.grd_list_onenterdown,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.sta_totcnt00.addEventHandler("onclick",this.Div00_sta_totcnt00_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_PP_10.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
