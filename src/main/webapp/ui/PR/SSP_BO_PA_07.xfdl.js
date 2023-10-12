(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("divPopup");
            this.set_titletext("시리즈그룹상품 생성");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,763);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"SEL_MTHD_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"codeList\" type=\"STRING\" size=\"256\"/><Column id=\"langCd\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_PRD_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_PRD_ATTR_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"PRD_ATTR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"BASS_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"CTRY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CTRY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_save", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_PRD_ATTR_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"BASS_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_saveList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_PRD_ATTR_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"BASS_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_saveTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_PRD_ATTR_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"BASS_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divDetail","20","48",null,null,"20","123",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("0px solid darkblue");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static29_00_00","125","6",null,"32","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L_tdt");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta_prd_grp_spr_cd","0","6","140","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_text("그룹구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static07","100","37",null,"32","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta_prd_grp_nm","0","37","140","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_text("그룹명");
            obj.set_cssclass("sta_cm_box01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static07_00","100","68",null,"32","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","68","140","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_text("그룹 상품 추가");
            obj.set_cssclass("sta_cm_box01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Radio("PRD_GRP_SPR_CD","150","10","470","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            var divDetail_form_PRD_GRP_SPR_CD_innerdataset = new nexacro.NormalDataset("divDetail_form_PRD_GRP_SPR_CD_innerdataset", obj);
            divDetail_form_PRD_GRP_SPR_CD_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">시리즈-동기화</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">시리즈-비동기화</Col></Row><Row><Col id=\"datacolumn\">연관</Col><Col id=\"codecolumn\">30</Col></Row></Rows>");
            obj.set_innerdataset(divDetail_form_PRD_GRP_SPR_CD_innerdataset);
            obj.set_text("시리즈-속성");
            obj.set_value("20");
            obj.set_index("0");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("PRD_GRP_NM","150","41","470","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_maxlength("40");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtPrdNm","251","72","182","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btn_prd","436","72","25","25",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_verticalAlign("");
            obj.set_cssclass("btn_WF_search02");
            this.divDetail.addChild(obj.name, obj);

            obj = new CheckBox("chkBssPrdYn","150","72","100","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("기준상품");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("N");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","100","99",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","0","99","140",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_text("그룹 상품 리스트");
            obj.set_cssclass("sta_cm_box01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grd_list","151","107",null,null,"10","15",null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_binddataset("ds_list");
            obj.set_cssclass("grd_WF_list");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_autoenter("select");
            obj.set_autosizingtype("row");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"180\"/><Column size=\"300\"/><Column size=\"30\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"상품ID\"/><Cell col=\"3\" text=\"상품명\"/><Cell col=\"4\" text=\"S-MRO속성\"/><Cell col=\"5\" colspan=\"2\" text=\"SSP속성\"/><Cell col=\"7\" text=\"제조원\"/><Cell col=\"8\" text=\"주문단위\"/><Cell col=\"9\" text=\"원산지\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" textAlign=\"left\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" suppressalign=\"middle\" suppress=\"2\"/><Cell col=\"1\" text=\"bind:PRD_NUM\" suppress=\"2\" suppressalign=\"middle\"/><Cell col=\"2\" text=\"bind:PRD_ID\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"3\" text=\"bind:PRD_NM\" textAlign=\"left\" suppress=\"2\" suppressalign=\"middle\" wordWrap=\"char\"/><Cell col=\"4\" text=\"bind:MRO_PRD_ATTR_VAL\" wordWrap=\"char\" textAlign=\"left\"/><Cell col=\"5\" displaytype=\"expr:(BSS_PRD_YN == &apos;Y&apos; &amp;&amp; PRD_GRP_SPR_CD == &apos;20&apos;)?&apos;checkboxcontrol&apos;:&apos; normal&apos;\" edittype=\"expr:(BSS_PRD_YN == &apos;Y&apos; &amp;&amp; PRD_GRP_SPR_CD == &apos;20&apos;)?&apos;checkbox&apos;:&apos;none&apos;\" text=\"bind:BASS_CHK\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"6\" text=\"bind:SSP_PRD_ATTR_VAL\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:MNFR_NM\" suppress=\"2\" suppressalign=\"middle\" wordWrap=\"char\"/><Cell col=\"8\" text=\"bind:SELL_UNIT\" suppress=\"2\" suppressalign=\"middle\"/><Cell col=\"9\" text=\"bind:CTRY_NM\" suppress=\"2\" suppressalign=\"middle\" wordWrap=\"char\"/></Band></Format><Format id=\"format00\"><Columns><Column size=\"30\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"220\"/><Column size=\"350\"/><Column size=\"120\"/><Column size=\"85\"/><Column size=\"85\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"상품ID\"/><Cell col=\"3\" text=\"상품명\"/><Cell col=\"4\" text=\"규격\"/><Cell col=\"5\" text=\"제조원\"/><Cell col=\"6\" text=\"주문단위\"/><Cell col=\"7\" text=\"원산지\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:PRD_SEQ\"/><Cell col=\"2\" text=\"bind:PRD_ID\"/><Cell col=\"3\" text=\"bind:PRD_NM\" textAlign=\"left\" wordWrap=\"char\"/><Cell col=\"4\" text=\"bind:PRD_ATTR_VAL\" textAlign=\"left\" wordWrap=\"char\"/><Cell col=\"5\" text=\"bind:MNFR_NM\" wordWrap=\"char\"/><Cell col=\"6\" text=\"bind:SELL_UNIT\"/><Cell col=\"7\" text=\"bind:CTRY_NM\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btn_add","471","72","72","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_text("추가");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btn_del","547","72","72","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_text("삭제");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btn_cancel","548",null,"100","32",null,"20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert","652",null,"100","32",null,"20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","20","20","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("| 시리즈그룹상품 생성");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt00","20",null,null,"25","450","90",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("※ 시리즈상품 생성 시 기준상품의 선택된 SSP속성으로 나머지 상품들의 SSP속성도 동기화 됩니다 (주문단위는 제외)");
            obj.set_usedecorate("true");
            obj.set_color("#ff4242");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt00_00","20",null,null,"25","450","70",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("※ 체크 된 속성 값을 제외한 나머지 속성값이 동기화 됩니다.");
            obj.set_usedecorate("true");
            obj.set_color("#ff4242");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1300,763,this,function(p){});
            obj.set_stepindex("");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divDetail.form.PRD_GRP_NM","value","ds_detail","PRD_GRP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divDetail.form.PRD_GRP_SPR_CD","value","ds_detail","PRD_GRP_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_PA_07.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_PA_07.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_PA_07.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP카테고리 생성 팝업
        CREATION DATES : 2021.01.19
        *******************************************************/
        // 공통형 스크립트 인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.valiFormIds = [
        	   {"name" : "그룹구분", "id" : "PRD_GRP_SPR_CD"}
        	   , {"name" : "그룹명", "id" : "PRD_GRP_NM"}
        ];

        this.coCd = this.parent.coCd;
        this.mallSprCd = "10";
        this.bssCnt = 0;
        this.prdClcd = null;

        var rtnData = {};
        var bssPrdYn = false;
        var prdSeq = 0;

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	// 초기화
        	this.ds_detail.clearData();
        	this.ds_detail.addRow();
        	this.ds_detail.setColumn(0,"CO_CD",this.coCd);
        	this.ds_detail.setColumn(0,"MALL_SPR_CD",this.mallSprCd);

        	this.divDetail.form.PRD_GRP_SPR_CD.set_value("20");
        	this.divDetail.form.chkBssPrdYn.set_value("Y");
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_searchBssTmp = function()
        {
        	var sSvcId = "selectSeriesBssTmp";
        	var sUrl   = "/pr/prd-mng/select-series-bss-temp.do";
        	var inDs   = "ds_search=ds_search";
        	var outDs  = "";
        	var arg    = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        this.fn_searchTmp = function()
        {
        	var sSvcId = "selectSeriesTmp";
        	var sUrl   = "/pr/prd-mng/select-series-temp.do";
        	var inDs   = "ds_search=ds_search";
        	var outDs  = "ds_temp=ds_output";
        	var arg    = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        // 등록
        this.fn_save = function()
        {
        	var	validation = this.fn_validationForm(this.divDetail, this.valiFormIds, this.ds_detail);

        	if( validation ) {
         		if(this.divDetail.form.PRD_GRP_SPR_CD.value != "30"){
         			if(!bssPrdYn) {
         				//this.alert("기준상품을 추가해야만 시리즈그룹을 만들 수 있습니다.")
        				this.alert(this.fn_getMessage("ERRP000046"));
         				return false;
         			}
        			for(var i=0; i< this.ds_saveTemp.rowcount; i++){
        				if(this.divDetail.form.PRD_GRP_SPR_CD.value == "20"){
        					if(this.ds_saveTemp.getColumn(i,"BSS_PRD_YN") == "Y" && this.gfn_isNull(this.ds_saveTemp.getColumn(i,"BSS_PRD_ATTR_INFO"))){
        						//this.alert("동기화가 필요한 기준상품의 속성을 선택해 주세요.");
        						this.alert(this.fn_getMessage("ERRP000270"));
        						return false
        					}
        				}
        			}
         		}

        		if(this.ds_saveTemp.rowcount < 2){
        			//this.alert("그룹 상품 리스트에 2개 이상의 상품을 구성해주세요")
        			this.alert(this.fn_getMessage("ERRP000009"));
        			return false;
        		}

        		this.ds_detail.setColumn(0,"USE_YN","Y");

        		var sSvcId = "saveProductSeries";
        		var sUrl   = "/pr/prd-mng/save-product-series.do";
        		var inDs   = "ds_detail=ds_detail:U ds_list=ds_saveTemp:U";
        		var outDs  = "";
        		var arg    = "";

        		if( this.confirm(this.fn_getMessage("ERRP000011")) ) {
        			this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        		}
        	}

        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(errorCode != 0){
        		this.alert(errorMsg);
        		return;
        	}

        	switch(svcID)
        	{
        	case "selectSeriesTmp" :
        		this.divDetail.form.grd_list.set_enableredraw(false);
        		this.divDetail.form.grd_list.set_enableevent(false);
        		this.ds_list.set_enableevent(false);

        		for(var i=0; i<this.ds_temp.rowcount; i++){
        			var nRow = this.ds_list.addRow();
        			this.ds_list.setColumn(nRow,"CO_CD",this.ds_temp.getColumn(i,"CO_CD"));
        			this.ds_list.setColumn(nRow,"PRD_ID",this.ds_temp.getColumn(i,"PRD_ID"));
        			this.ds_list.setColumn(nRow,"PRD_NM",this.ds_temp.getColumn(i,"PRD_NM"));
        			this.ds_list.setColumn(nRow,"CTRY_NM",this.ds_temp.getColumn(i,"CTRY_NM"));
        			this.ds_list.setColumn(nRow,"SELL_UNIT",this.ds_temp.getColumn(i,"SELL_UNIT"));
        			this.ds_list.setColumn(nRow,"MNFR_NM",this.ds_temp.getColumn(i,"MNFR_NM"));
        			this.ds_list.setColumn(nRow,"PRD_GRP_SPR_CD",this.divDetail.form.PRD_GRP_SPR_CD.value);

        			var prdSeq = this.gfn_isNull(this.ds_list.getMax("PRD_SEQ"))?0:this.ds_list.getMax("PRD_SEQ");

        			if(this.divDetail.form.PRD_GRP_SPR_CD.value != "30"){
        				if(this.divDetail.form.chkBssPrdYn.value == "Y"){
        					this.ds_list.setColumn(nRow,"BSS_PRD_YN","Y");
        					this.ds_list.setColumn(nRow,"PRD_SEQ",0);
        					this.ds_list.setColumn(nRow,"PRD_NUM","기준상품");
        					bssPrdYn = true;
        				}else{
        					this.ds_list.setColumn(nRow,"PRD_SEQ", prdSeq+1);
        					this.ds_list.setColumn(nRow,"PRD_NUM", prdSeq+1);
        				}
        				this.ds_list.setColumn(nRow,"MRO_PRD_ATTR_VAL",this.ds_temp.getColumn(i,"MRO_PRD_ATTR_VAL"));
        				this.ds_list.setColumn(nRow,"SSP_PRD_ATTR_VAL",this.ds_temp.getColumn(i,"SSP_PRD_ATTR_VAL"));
        				this.ds_list.setColumn(nRow,"PRD_ATTR_CD",this.ds_temp.getColumn(i,"PRD_ATTR_CD"));

        			}else{
        				this.ds_list.setColumn(nRow,"PRD_ATTR_VAL",this.ds_temp.getColumn(i,"PRD_ATTR_VAL"));
        				this.ds_list.setColumn(nRow,"PRD_SEQ",prdSeq+1);
        				this.ds_list.setColumn(nRow,"PRD_NUM",prdSeq+1);
        			}

        		}

        		// 상품추가 초기화
        		this.divDetail.form.chkBssPrdYn.set_value("N");
        		this.divDetail.form.edtPrdNm.set_value("");

        		// 기준상품 존재여부
        		if(bssPrdYn){
        			this.divDetail.form.chkBssPrdYn.set_enable(false);
        		}
        		rtnData = {};
        		this.ds_list.set_keystring("S:PRD_SEQ");

        		this.divDetail.form.grd_list.set_enableredraw(true);
        	    this.divDetail.form.grd_list.set_enableevent(true);
        		this.ds_list.set_enableevent(true);

         		if(this.divDetail.form.PRD_GRP_SPR_CD != "30"){
         			this.gfn_gridMergeCell(this.divDetail.form.grd_list, 4, 4);
         		}

        		break;

        	case "saveProductSeries":
        		//this.alert("저장 되었습니다.");
        		this.alert(this.fn_getMessage("ERRS000156"));
        		this.close(true);
        		break;

        	case "selectSeriesBssTmp" :
        		if(this.bssCnt > 0){
        			//this.alert("기준상품이 중복됩니다.")
        			this.alert(this.fn_getMessage("ERRP000267"));
        			return false;
        		}else{
        			// 상품속성정보 조회
        			this.fn_searchTmp();
        		}
        		break;
        	default:
        		break;
        	}
        };

        this.fn_popupCallback = function(sPopupId, sRetValue){
        	rtnData = {};
        	if(sRetValue == undefined){
                return;
            }else{
        		resData = JSON.parse(sRetValue);
        	}

        	switch(sPopupId)
        	{
        	case "ssp_bo_pp_38":
        		rtnData = resData;
        		if(!this.gfn_isNull(rtnData)){
        			this.divDetail.form.edtPrdNm.set_value(resData.PRD_NM);

        			if(this.divDetail.form.PRD_GRP_SPR_CD.value == "30"){
        				this.prdClcd = null;
        			}else{
        				this.prdClcd = resData.PRD_CLCD;
        			}
        		}
        		break;
        	default:
        		break;
        	}
        };
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){

        	//static 필수값 표시 초기 설정
        	this.divDetail.form.sta_prd_grp_spr_cd.uEssentiel = "true";
        	this.divDetail.form.sta_prd_grp_nm.uEssentiel = "true";

        };
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        // 중복값 제거
        this.fn_distincDsFilter = function(objDs, sColID)
        {
        	var arrArgs	= this.gfn_trim(sColID).split(",");
        	var sFilterExpr		= "";
        	var sFindRowExpr	= "";

        	for (var i=0; i<arrArgs.length; i++)
        	{
        		if (objDs.getColumnInfo(arrArgs[i]) == null) continue;

        		sFindRowExpr	+= (this.gfn_isNull(sFindRowExpr) == false) ? " && " : "";
        		sFindRowExpr	+= "" + arrArgs[i] + "=='\" + " + arrArgs[i] + " + \"'";
        	}

        	if (this.gfn_isNull(sFindRowExpr) == false) {
        		sFilterExpr	= "rowidx==dataset.findRowExpr(\"" + sFindRowExpr + "\")";
        	}

        	objDs.filter(sFilterExpr);
        }

        //멀티 삭제
        this.fn_multiDelete = function(chkId, dataSet) {
        	if( chkId == undefined ) chkId = "CHK";
        	var chkCnt = dataSet.getCaseCount(chkId + "==1");

        	if( chkCnt == 0 ) {
        		//this.alert("선택된 행이 없습니다.");
        		this.alert(this.fn_getMessage("ERRS000137"));
        		return false;
        	}

        	var delArr = [];
        	for(var i=0; i<dataSet.rowcount; i++){
        		var checkbox = dataSet.getColumn(i, chkId);
        		var value = dataSet.getColumn(i, "BSS_PRD_YN");
        		if(checkbox==1){
        			delArr.push(i);
        			if(value=="Y"){
        				bssPrdYn=false;
        				this.divDetail.form.chkBssPrdYn.set_enable(true);
        				this.divDetail.form.chkBssPrdYn.set_value("Y");
        				this.prdClcd = null;
        			}
        		}
        	}
        	dataSet.deleteMultiRows(delArr);
        }

        /**
        * @class Grid에 보여지는 값을 기준으로 같은 값이 존재 시 Row, Cell Merge
        *        - Grid.cell에 suppress 속성이 정의 되어 있으면 objGrd.mergeCell() api가 작동안됨
        * @param {object} objGrd   - 작업 Grid
        * @param {number} startIdx - 시작 cell
        * @param {number} endIdx   - 종료 cell
        * @exam  this.gfn_gridMergeCell(this.grd_result, 0, nHeadRowCnt);
        */
        this.gfn_gridMergeCell = function(objGrd, startIdx, endIdx)
        {
        	if (endIdx <= 1) return;
        	var objDs  = objGrd.getBindDataset();

        	//var rowCnt = 2;
        	var rowCnt = objDs.getRowCount();
        	//1. row 수행
        	for(var row=0; row<rowCnt; row++)
        	{
        		var nStartCol = startIdx;
        		var nEndCol   = -1;
        		var nStartRow = row;
        		var nEndRow   = row;
        		var befText   = objGrd.getCellText(row, 0);

        		//2. head cell 수만큼 수행
        		for(var cell=startIdx+1; cell<endIdx; cell++)
        		{
        			var currText = objGrd.getCellText(row, cell);
        			// a. 옆으로(cell) 동일한 값이 존재 하는 경우
        			if (befText == currText)
        			{
        				nEndCol = cell;
        			}
        			// b. 옆으로(cell) 동일한 값을 검사중 다른값이 나온 경우
        			else
        			{
        				// ㄱ. 옆으로(cell) 동일한 값이 존재 하는 경우
        				if (nEndCol >= 0)
        				{
        					this.gfn_gridMergeCellRow(objGrd, nStartCol, nEndCol, nStartRow);
        				}
        				//
        				else
        				{
        					this.gfn_gridMergeCellRow(objGrd, nStartCol, nStartCol, nStartRow);
        					nStartCol = cell;
        					befText   = currText;
        				}
        			}
        		}
        		// 옆으로 동일한 값이 존재 하는 경우
        		if (nEndCol >= 0)
        		{
        			this.gfn_gridMergeCellRow(objGrd, nStartCol, nEndCol, nStartRow);
        		}
        		// 옆으로 동일한 값이 하나도 존재 하지 않은 경우
        		else
        		{
        			this.gfn_gridMergeCellRow(objGrd, nStartCol, nStartCol, nStartRow);
        		}

        	}
        }

        /**
        * @class Grid에 보여지는 값을 기준으로 Row로 검사해서 Row, Cell Merge
        *        - 이 함수는 바로 호출해도 작동안됨
        *        - gfn_gridMergeCell()에서만 호출해야 정상작동
        * @param {object} objGrd    - 작업 Grid
        * @param {number} nStartCol - 시작 cell
        * @param {number} nEndCol   - 종료 cell
        * @param {number} nStartRow - 시작 row
        * @참고  종료 row는 gfn_gridMergeCellRow()이 함수에서 찾아서 merge 함
        */
        this.gfn_gridMergeCellRow = function(objGrd, nStartCol, nEndCol, nStartRow)
        {
        	var objDs   = objGrd.getBindDataset();
        	var rowCnt  = objDs.getRowCount();
        	var nEndRow = (nStartCol == nEndCol ? -1  : nStartRow);

        	//1. row별로 같은 값이 있는지 검사
        	//var nDifCnt = nEndCol - nStartCol + 1;
        	for(var row=nStartRow+1; row<rowCnt; row++)
        	{
        		var bSame = true;
        		for(var cell=nStartCol; cell<=nEndCol; cell++)
        		{
        			var startVal = objGrd.getCellText(nStartRow, cell);
        			var nextVal  = objGrd.getCellText(row, cell);

        			if (startVal != nextVal)
        			{
        				bSame = false;
        				break;
        			}
        		}
        		if (bSame == true)
        		{
        			nEndRow = row;
        		}
        		else
        		{
        			break;
        		}
        	}

        	//3. merge
        	if (nEndRow >= 0)
        	{
        		objGrd.mergeCell(nStartCol, nEndCol, nStartRow, nEndRow);
        	}
        }

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        //등록 버튼
        this.insert_btn_onclick = function(obj,e)
        {
        	this.ds_save.clearData();
        	this.ds_saveList.clearData();
        	this.ds_saveTemp.clearData();

        	// 기준상품 SSP속성  선택항목
        	var bssPrdAttrInfo = "";
        	for(var j=0; j<this.ds_list.rowcount; j++){
        		if(this.ds_list.getColumn(j,"BASS_CHK") == "Y"){
        			bssPrdAttrInfo += this.ds_list.getColumn(j,"PRD_ATTR_CD") + ',';
        		}
        	}

        	for(var i=0; i<this.ds_list.rowcount; i++){
        		var nRow = this.ds_save.addRow();

        		this.ds_save.setColumn(nRow,"CO_CD",this.coCd);
        		this.ds_save.setColumn(nRow,"PRD_ID",this.ds_list.getColumn(i,"PRD_ID"));
        		this.ds_save.setColumn(nRow,"BSS_PRD_YN",this.ds_list.getColumn(i,"BSS_PRD_YN"));
        		this.ds_save.setColumn(nRow,"PRD_SEQ",this.ds_list.getColumn(i,"PRD_SEQ"));

        		// 기준상품 체크한 SSP속성값 담기
        		if(this.ds_list.getColumn(i,"BSS_PRD_YN") == "Y"){
        			this.ds_save.setColumn(nRow,"BSS_PRD_ATTR_INFO", bssPrdAttrInfo.replace(/,\s*$/, ""));
        		}
        	}

        	// 중복데이터 제거
        	this.fn_distincDsFilter(this.ds_save,"CO_CD,PRD_ID");
        	this.ds_saveList.copyData(this.ds_save,true);

        	// 순번 부여
        	for(var k=0; k<this.ds_saveList.rowcount; k++){
        		if(this.gfn_isNull(this.ds_saveList.getColumn(k,"PRD_SEQ"))){
        			this.ds_saveList.setColumn(k,"PRD_SEQ",Number(k+1));
        		}
        	}

        	for(var i=0; i<this.ds_saveList.rowcount; i++){
        		var nRow = this.ds_saveTemp.addRow();
        		this.ds_saveTemp.setColumn(nRow,"CO_CD",this.ds_saveList.getColumn(i,"CO_CD"));
        		this.ds_saveTemp.setColumn(nRow,"PRD_ID",this.ds_saveList.getColumn(i,"PRD_ID"));
        		this.ds_saveTemp.setColumn(nRow,"BSS_PRD_YN",this.ds_saveList.getColumn(i,"BSS_PRD_YN"));
        		this.ds_saveTemp.setColumn(nRow,"BSS_PRD_ATTR_INFO",this.ds_saveList.getColumn(i,"BSS_PRD_ATTR_INFO"));
        		this.ds_saveTemp.setColumn(nRow,"PRD_SEQ",this.ds_saveList.getColumn(i,"PRD_SEQ"));
        	}

        	this.fn_save();
        };
        //취소 버튼
        this.btn_clear_onclick = function(obj,e)
        {
        	//등록을 취소하고 목록으로 이동하시겠습니까?
        	if(this.confirm(this.fn_getMessage("ERRP000007"))){
        		this.close(false);
        	}
        };

        this.divDetail_btn_prd_onclick = function(obj,e)
        {
        	var objParam = {coCd:this.coCd, prdClcd:this.prdClcd, selMthdCd:"Y"};
        	this.gfn_openPopup("ssp_bo_pp_38", "PR_POP::SSP_BO_PP_38.xfdl", objParam);
        };

        this.divDetail_PRD_GRP_SPR_CD_onitemchanged = function(obj,e)
        {
        	// 데이터셋 초기화
        	this.ds_list.clearData();
        	this.ds_save.clearData();
        	this.ds_saveList.clearData();

        	if(obj.value == '30'){ // 연관
        		bssPrdYn = false;
        		this.divDetail.form.grd_list.set_formatid("format00");
        		this.divDetail.form.grd_list.set_autofittype("col");
        		this.divDetail.form.chkBssPrdYn.set_enable(false);
        		this.divDetail.form.chkBssPrdYn.set_value("N");
        		this.prdClcd = null;
        	}else{	// 시리즈
        		this.divDetail.form.grd_list.set_formatid("default");
        		this.divDetail.form.grd_list.set_autofittype("none");
        		this.divDetail.form.chkBssPrdYn.set_enable(true);
        		this.divDetail.form.chkBssPrdYn.set_value("Y");
        	}

        };

        this.divDetail_btn_add_onclick = function(obj,e)
        {
        	if(this.gfn_isNull(rtnData.PRD_ID)){
        		//this.alert("상품을 선택해 주세요");
        		this.alert(this.fn_getMessage("ERRP000025"));
        	}else{
        		for(var i=0; i<this.ds_list.rowcount; i++){
        			if(rtnData.PRD_ID_VIEW == this.ds_list.getColumn(i,"PRD_ID")){
        				//this.alert("그룹 상품 리스트에 중복된 상품이 있습니다. 확인해 주세요.");
        				this.alert(this.fn_getMessage("ERRP000010"));
        				return false;
        			}
        		}

        		this.ds_search.setColumn(0,"CO_CD", this.coCd);
        		this.ds_search.setColumn(0,"PRD_ID", rtnData.PRD_ID);
        		this.ds_search.setColumn(0,"PRD_GRP_SPR_CD", this.divDetail.form.PRD_GRP_SPR_CD.value);
        		this.ds_search.setColumn(0,"BSS_PRD_YN", this.divDetail.form.chkBssPrdYn.value);

        		if(this.divDetail.form.chkBssPrdYn.value == "Y"){
        			// 기준상품 중복 체크
        			this.fn_searchBssTmp();
        		}else{
        			// 상품속성정보 조회
        			this.fn_searchTmp();
        		}
        	}
        };

        this.divDetail_btn_del_onclick = function(obj,e)
        {
        	this.fn_multiDelete("CHK",this.ds_list);
        };


        this.divDetail_grd_list_oncellclick = function(obj,e)
        {
        	if(e.cell == 0){
        		var checkbox = this.ds_list.getColumn(e.row, "CHK");
        		var prdid = this.ds_list.getColumn(e.row, "PRD_ID");

        		for(var j=0; j< this.ds_list.rowcount; j++){
        			if( checkbox == 1 && prdid == this.ds_list.getColumn(j,"PRD_ID")) {
        				this.ds_list.setColumn(j,"CHK",1);
        			}else if( checkbox == 0 && prdid == this.ds_list.getColumn(j,"PRD_ID")){
        				this.ds_list.setColumn(j,"CHK",0);
        			}
        		}
        	}
        };

        // 단축키
        this.divPopup_onkeyup = function(obj,e)
        {
        	// ESC
        	if(e.keycode == 27){
        		// 닫기
        		//this.btn_clear_onclick();
        		this.close();
        	}

        	// CTRL + s
        	if(e.keycode == 83 && e.ctrlkey == true){
        		// 저장
        		this.insert_btn_onclick();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.divPopup_onkeyup,this);
            this.divDetail.form.Static29_00_00.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.divDetail.form.PRD_GRP_SPR_CD.addEventHandler("onitemchanged",this.divDetail_PRD_GRP_SPR_CD_onitemchanged,this);
            this.divDetail.form.btn_prd.addEventHandler("onclick",this.divDetail_btn_prd_onclick,this);
            this.divDetail.form.grd_list.addEventHandler("oncellclick",this.divDetail_grd_list_oncellclick,this);
            this.divDetail.form.btn_add.addEventHandler("onclick",this.divDetail_btn_add_onclick,this);
            this.divDetail.form.btn_del.addEventHandler("onclick",this.divDetail_btn_del_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_insert.addEventHandler("onclick",this.insert_btn_onclick,this);
            this.sta_totcnt00.addEventHandler("onclick",this.Div_top_info00_sta_totcnt00_onclick,this);
            this.sta_totcnt00_00.addEventHandler("onclick",this.Div_top_info00_sta_totcnt00_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_PA_07.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
