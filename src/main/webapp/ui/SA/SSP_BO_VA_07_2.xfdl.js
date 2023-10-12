(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_VA_07");
            this.set_titletext("배너");
            if (Form == this.constructor)
            {
                this._setFormPosition(1055,770);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_bnrExpsList", this);
            obj._setContents("<ColumnInfo><Column id=\"BNR_EXPS_LVL\" type=\"INT\" size=\"16\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CHN_TP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"BNR_EXPS_PST_ID\" type=\"INT\" size=\"16\"/><Column id=\"BNR_EXPS_PST_NM\" type=\"STRING\" size=\"16\"/><Column id=\"HRNK_BNR_EXPS_PST_ID\" type=\"INT\" size=\"32\"/><Column id=\"PLD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"INT\" size=\"256\"/><Column id=\"CATG_DEL_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHN_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BNR_EXPS_PST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chnTpCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_noticSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bnrList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BNR_INFO_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"BNR_EXPS_PST_ID\" type=\"INT\" size=\"256\"/><Column id=\"CHN_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NOTIC_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TTL\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_SO\" type=\"INT\" size=\"256\"/><Column id=\"DISP_STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_INC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_BNR_EXPS_PST_ID\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dtlSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHN_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NOTIC_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BNR_EXPS_PST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USE_YN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_oprUnitList", this);
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchOprUnitList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USE_YN\"/><Col id=\"USE_YN_NM\">전체</Col></Row><Row><Col id=\"USE_YN\">Y</Col><Col id=\"USE_YN_NM\">사용</Col></Row><Row><Col id=\"USE_YN_NM\">미 사용</Col><Col id=\"USE_YN\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bnrExps", this);
            obj._setContents("<ColumnInfo><Column id=\"BNR_EXPS_LVL\" type=\"INT\" size=\"16\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CHN_TP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"BNR_EXPS_PST_ID\" type=\"INT\" size=\"16\"/><Column id=\"BNR_EXPS_PST_NM\" type=\"STRING\" size=\"16\"/><Column id=\"HRNK_BNR_EXPS_PST_ID\" type=\"INT\" size=\"32\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"INT\" size=\"256\"/><Column id=\"CATG_DEL_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pprCatgBnrList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BNR_EXPS_PST_ID\" type=\"INT\" size=\"256\"/><Column id=\"CHN_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PPR_CATG_ZONE_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TTL\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NMS\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title00","20","15","200","23",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_title02");
            obj.set_text("■ 배너 등록 안내");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_bnrList","20","78",null,null,"20","50",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_pprCatgBnrList");
            obj.set_visible("true");
            obj.set_nodatatext("조회된 데이터가 없습니다.");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"300\"/><Column size=\"150\"/><Column size=\"370\"/><Column size=\"70\"/><Column size=\"75\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"구역NO\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"카테고리\"/><Cell col=\"3\" text=\"제조원\"/><Cell col=\"4\" text=\"등록일\"/><Cell col=\"5\" text=\"등록자\"/></Band><Band id=\"body\"><Cell text=\"bind:PPR_CATG_ZONE_SPR_CD\" color=\"#000000\" textDecoration=\"none\"/><Cell col=\"1\" text=\"bind:TTL\" color=\"blue\" textDecoration=\"underline\"/><Cell col=\"2\" text=\"bind:PRD_CLSF_NM\"/><Cell col=\"3\" textAlign=\"center\" text=\"bind:MNFR_NMS\"/><Cell col=\"4\" text=\"bind:REG_DTM\" edittype=\"none\" maskedittype=\"string\" displaytype=\"date\" calendardateformat=\"yyyy.MM.dd\" calendareditformat=\"yyyy.MM.dd\"/><Cell col=\"5\" text=\"bind:REGPSN_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_info","20","43","350","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("인기 카테고리 배너 등록시 배너 위치 정보 안내\r\n");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","280","38","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_help");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","1090","52","760","681",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_border("1px solid #000000");
            obj.set_background("#ffffff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","3","1","751","638",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_imagealign("center middle");
            obj.set_stretch("fit");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_02","1","669","800","10",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("H10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_close","346","639","70","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("닫기");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1055,770,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_VA_07_2.xfdl","CO::coUtils.xjs");
        this.registerScript("SSP_BO_VA_07_2.xfdl", function() {
        /*******************************************************
        PROJECT NAME : 인기카테고리 배너 목록
        CREATION DATES : 2022.03.30
        CREATER        : 이민호
        *******************************************************/
        //인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        var sUrl = nexacro.getEnvironment().services["svcUrl"].url;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.Div00.form.ImageViewer00.set_image(sUrl + "/am/img/ppr_catg_img.png");
        };


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //인기카테고리 배너리스트 조회
        this.fn_bnrPprCatgListSearch = function()
        {
        	var sSvcId = "pprCatgBnrList";
        	var sUrl = "/sa/bnr/select-ppr-catg-bnr-list.do";
        	var inDs = "ds_search=ds_dtlSearch";
        	var outDs = "ds_pprCatgBnrList=ds_output";
        	var arg = "";
        	var callback = "fn_callBack";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)
        {
        	switch(svcID) {

        		case "pprCatgBnrList" :

        			break;

        		default :
        			break;
        	}
        }

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        // 배너 호출 시 세팅
        this.fn_setInit = function() {
        	// SSP_BO_VA_07의 값 세팅
        	this.ds_bnrExps.copyRow(0, this.parent.parent.parent.ds_bnrExps, 0); // 배너 단일 복사
         	this.ds_dtlSearch.copyRow(0, this.parent.parent.parent.ds_bnrExps, 0); // CO_CD, BNR_EXPS_PST_ID, CHN_TP_CD, MALL_SPR_CD 복사

        	//인기카테고리 배너 조회
        	this.fn_bnrPprCatgListSearch();
        }

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        // 배너리스트 그리드 클릭
        this.grd_bnrList_oncellclick = function(obj,e)
        {
        	if(e.col == this.grd_bnrList.getBindCellIndex("body", "TTL")) {
        		var objParam = {
        			coCd:this.ds_pprCatgBnrList.getColumn(e.row, "CO_CD")
        			, chnTpCd:this.ds_pprCatgBnrList.getColumn(e.row, "CHN_TP_CD")
        			, pprCatgZoneSprCd:this.ds_pprCatgBnrList.getColumn(e.row, "PPR_CATG_ZONE_SPR_CD")
        			, mallSprCd:this.ds_pprCatgBnrList.getColumn(e.row, "MALL_SPR_CD")
        		};

        		this.gfn_openPopup(e.fromobject.id, "SA::SSP_BO_VA_08_4.xfdl", objParam, "fn_popupCallback");
        	}
        };

        // 인기 카테고리 배너 등록시 배너 위치 정보 안내 아이콘 클릭 시
        this.Button01_onclick = function(obj,e)
        {
        	this.Div00.set_top(53);
        	this.Div00.set_left(299);
        	this.Div00.set_visible(true);
        };

        // 인기 카테고리 배너 등록시 배너 위치 정보 안내 아이콘 마무스 오버 시
        this.Button01_onmouseenter = function(obj,e)
        {
        	return;

        	this.Div00.set_top(53);
        	this.Div00.set_left(299);
        	this.Div00.set_visible(true);
        };

        // 인기 카테고리 배너 등록시 배너 위치 정보 안내 닫기 버튼 클릭 시
        this.Div00_btn_close_onclick = function(obj,e)
        {
        	this.Div00.set_visible(false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.grd_bnrList.addEventHandler("onselectchanged",this.fn_editChg,this);
            this.grd_bnrList.addEventHandler("oncellclick",this.grd_bnrList_oncellclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button01.addEventHandler("onmouseenter",this.Button01_onmouseenter,this);
            this.Div00.form.btn_close.addEventHandler("onclick",this.Div00_btn_close_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_VA_07_2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
