(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ssp_bo_ma_03");
            this.set_titletext("산업군조회 목록/상세/등록/수정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COL_VALUE\">Y</Col><Col id=\"COL_NM\">사용</Col></Row><Row><Col id=\"COL_VALUE\">A</Col><Col id=\"COL_NM\">전체</Col></Row><Row><Col id=\"COL_VALUE\">N</Col><Col id=\"COL_NM\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn2", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COL_VALUE\">Y</Col><Col id=\"COL_NM\">사용</Col></Row><Row><Col id=\"COL_VALUE\">N</Col><Col id=\"COL_NM\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_custIddt", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"IDDT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IDDT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_CHR_MD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_CHR_MD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_CHR_CS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_CHR_CS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHR_MD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHR_MD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHR_CS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHR_CS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHR_OP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHR_OP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_REG_CS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_REG_CS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_STATE\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_SO\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ICON_ON_PC_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ICON_OFF_PC_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PACKAGE_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_IDDT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"10\"/><Column id=\"CUST_GRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_custIddtOut", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"IDDT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IDDT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_CHR_MD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_CHR_CS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_TEAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHR_MD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHR_CS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHR_OP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_REG_CS_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_salsChr", this);
            obj._setContents("<ColumnInfo><Column id=\"SALS_CHR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALS_CHR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,"97","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","20","20",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static1","20","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("상태");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_useYn","Static1:10","24","170","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_useYn");
            obj.set_datacolumn("COL_NM");
            obj.set_codecolumn("COL_VALUE");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"61","60","28","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"61","60","28","btn_search:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_reset");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01",null,"116","110","28","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"116","100","28","248",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_newData",null,"116","81","28","btn_layoutSave:4",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("신규 생성");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"116","81","28","btn_newData:4",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_allStateSave",null,"116","96","28","649",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("일괄 상태 변경");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_useYn2",null,"116","81","28","755",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_useYn2");
            obj.set_codecolumn("COL_VALUE");
            obj.set_datacolumn("COL_NM");
            obj.set_text("");
            obj.set_value("Y");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","20","cbo_useYn2:10",null,null,"20","60",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","662",null,"38","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_totCount","20",null,"200","25",null,"Div01:4",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("(총 0건)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20",null,"629","30",null,"31",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("※ 담당자 변경을 원하실 경우 돋보기, 삭제를 원하실 경우 더블클릭 해주세요.");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"맑은고딕\",\"Apple SD Gothic Neo\",\"dotum\",\"돋움\",\"arial\",\"sans-serif\"");
            obj.set_color("#474747");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mainList","20","Button01:10",null,"612","20",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_autofittype("none");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_custIddt");
            obj.set_visible("true");
            obj.set_nodatatext("조회 조건을 선택 하신 후, 조회해 주세요.");
            obj.set_font("12px/normal \"Arial\",\"맑은고딕\"");
            obj.set_selecttype("area");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"32\"/><Column size=\"80\"/><Column size=\"64\"/><Column size=\"125\"/><Column size=\"104\"/><Column size=\"104\"/><Column size=\"104\"/><Column size=\"104\"/><Column size=\"104\"/><Column size=\"104\"/><Column size=\"104\"/><Column size=\"104\"/><Column size=\"104\"/><Column size=\"104\"/><Column size=\"104\"/><Column size=\"64\"/><Column size=\"64\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"64\"/><Column size=\"101\"/><Column size=\"84\"/><Column size=\"84\"/><Column size=\"126\"/><Column size=\"84\"/><Column size=\"84\"/><Column size=\"126\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"산업군 ID\"/><Cell col=\"3\" text=\"산업군 명\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"4\" text=\"사업장 담당MDID\"/><Cell col=\"5\" text=\"사업장 담당CSID\"/><Cell col=\"6\" text=\"영업담당코드\"/><Cell col=\"7\" text=\"영업팀코드\"/><Cell col=\"8\" text=\"조직코드\"/><Cell col=\"9\" text=\"서비스조직코드\"/><Cell col=\"10\" text=\"운영조직코드\"/><Cell col=\"11\" text=\"담당MDID\"/><Cell col=\"12\" text=\"담당CSID\"/><Cell col=\"13\" text=\"담당OPID\"/><Cell col=\"14\" text=\"상품등록CSID\"/><Cell col=\"15\" text=\"노출여부\"/><Cell col=\"16\" text=\"노출순서\"/><Cell col=\"17\" colspan=\"2\" text=\"이미지\"/><Cell col=\"19\" text=\"패키지 수\"/><Cell col=\"20\" text=\"MRO코드\"/><Cell col=\"21\" text=\"등록자ID\"/><Cell col=\"22\" text=\"등록자 명\"/><Cell col=\"23\" text=\"등록일시\"/><Cell col=\"24\" text=\"수정자ID\"/><Cell col=\"25\" text=\"수정자 명\"/><Cell col=\"26\" text=\"수정일시\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:USE_YN\" displaytype=\"expr:String(IDDT_ID).valueOf()!=&quot;999&quot;?&apos;combocontrol&apos;:&apos;combotext&apos;\" edittype=\"expr:String(IDDT_ID).valueOf()!=&quot;999&quot;?&apos;combo&apos;:&apos;none&apos;\" combodataset=\"ds_useYn2\" combodatacol=\"COL_NM\" combocodecol=\"COL_VALUE\"/><Cell col=\"2\" text=\"bind:IDDT_ID\" suppressalign=\"middle\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:IDDT_NM\" displaytype=\"expr:String(IDDT_ID).valueOf()!=&quot;999&quot;?&apos;editcontrol&apos;:&apos;text&apos;\" edittype=\"expr:String(IDDT_ID).valueOf()!=&quot;999&quot;?&apos;text&apos;:&apos;none&apos;\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:BZPLC_CHR_MD_NM\" textAlign=\"center\" expandshow=\"show\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"5\" text=\"bind:BZPLC_CHR_CS_NM\" expandshow=\"show\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:SALS_CHR_CD\" textAlign=\"center\" displaytype=\"normal\" edittype=\"none\" expandshow=\"hide\"/><Cell col=\"7\" text=\"bind:SALS_TEAM_CD\" expandshow=\"show\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:SALS_ORG_CD\" expandshow=\"hide\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:SVC_ORG_CD\" expandshow=\"show\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:OPR_ORG_CD\" expandshow=\"show\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:CHR_MD_NM\" expandshow=\"show\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:CHR_CS_NM\" expandshow=\"show\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:CHR_OP_NM\" expandshow=\"show\" textAlign=\"center\"/><Cell col=\"14\" text=\"bind:PRD_REG_CS_NM\" expandshow=\"show\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:EXPS_YN\" textAlign=\"center\"/><Cell col=\"16\" text=\"bind:EXPS_SO\" textAlign=\"center\"/><Cell col=\"17\" displaytype=\"imagecontrol\" expr=\"&quot;/co/file-download.do?docRegId=&quot; + ICON_ON_PC_DOC_REG_ID + &quot;&amp;docRegSeq=&quot; + DOC_REG_SEQ\"/><Cell col=\"18\" displaytype=\"imagecontrol\" expr=\"&quot;/co/file-download.do?docRegId=&quot; + ICON_OFF_PC_DOC_REG_ID + &quot;&amp;docRegSeq=&quot; + DOC_REG_SEQ\"/><Cell col=\"19\" text=\"bind:PACKAGE_COUNT\" textAlign=\"center\"/><Cell col=\"20\" text=\"bind:MRO_IDDT_ID\"/><Cell col=\"21\" text=\"bind:REGPSN_ID\"/><Cell col=\"22\" text=\"bind:REGPSN_NM\"/><Cell col=\"23\" text=\"bind:REG_DTM\" edittype=\"none\" calendardisplaynulltype=\"none\" maskedittype=\"string\" maskeditformat=\"yyyy-MM-dd hh:mm:ss\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"24\" text=\"bind:UPDPSN_ID\"/><Cell col=\"25\" text=\"bind:UPDPSN_NM\"/><Cell col=\"26\" text=\"bind:UPD_DTM\" edittype=\"none\" calendardisplaynulltype=\"none\" maskedittype=\"string\" maskeditformat=\"yyyy-MM-dd hh:mm:ss\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pkgSetting",null,"116","110","28","526",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("패키지 설정");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutClear",null,"116","110","28","Button01:4",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.cbo_useYn","text","ds_useYn","COL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cbo_useYn2","text","ds_useYn2","COL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MA_52.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_52.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_MA_52.xfdl", function() {
        /*******************************************************
          PROJECT NAME : SSP-BO
          CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;

        this.columnId = ""; // 팝업오픈 시 칼럼명 저장
        this.columnRow = 0; // 팝업오픈 시 그리드 row 저장
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//검색 영역 최소size 적용
        	//this.Div00.set_height(this.Div00.uMinSize);
        	this.resetScroll();

        	this.copyPaste.addGrid(this.grd_mainList);
        };


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        	//조회
        	this.fn_search = function()	{
        		this.ds_search.setColumn(0,"USE_YN",this.Div00.form.cbo_useYn.value);

        		var sSvcId = "selectCustGrdList";
        		var sUrl = "/bo/cust/iddt/select-cust-iddt-list.do";
        		var inDs = "ds_search=ds_search";
        		var outDs = "ds_custIddt=ds_output1";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_received");
        	};

        	//저장
        	this.fn_saveData = function(){
        		var sSvcId = "saveCustIddtList";
        		var sUrl = "/bo/cust/iddt/save-cust-iddt.do";
        		var inDs = "ds_save=ds_custIddtOut";
        		var outDs = "ds_returnMsg=ds_output1";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        	this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        		if(svcID == "saveCustIddtList"){
        			// 저장 트랜잭션 콜백
        			if(errorCode == -1 || errorCode == -100){
        				//alert(this.fn_getMessageOnServer(errorMsg));
        			}else{
        				this.fn_search();
        			}
        		}
        	}

        	//조회 트랜잭션 콜백함수
        	this.fn_received = function(svcID, errorCode, errorMsg)	{
        		this.preSelectRowPosition = 0;
        		//paging 처리
        		this.Div01.form.div_paging.form.cfn_createPage(this.Div01.form.div_paging, this.totalCount, this.cbo_page.value, "fn_pageCallback");
        	}

        	//조회 트랜잭션 콜백함수
        	this.fn_received = function(svcID, errorCode, errorMsg)	{
        		if( this.ds_custIddt.rowcount == 0 ) {
        			this.grd_mainList.set_nodatatext("조회 결과가 없습니다.");
        		}

        		var sTotText = "(총 "+ this.gfn_appendComma(this.totalCount)+"건)";
        		this.sta_totCount.set_text(sTotText);
        	}

        	this.fn_sortCallback = function(sGridId){
        		var oGrid=null;
        		if(sGridId == "grd_mainList"){
        			oSortInfo = this.grd_mainList.uaSortInfo;
        			this.ds_search.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
        			this.ds_search.setColumn(0,"SORT_TYPE",oSortInfo.status);
        			this.fn_search();
        		}
        	}

        	this.fn_popupCallback = function(sPopupId, sRetValue){
        		if(!sRetValue) return;

        		const Obj = JSON.parse(sRetValue);
        		switch(sPopupId){
        			case "BZPLC_CHR_MD_ID" :
        				this.ds_custIddt.setColumn(this.ds_custIddt.rowposition ,"BZPLC_CHR_MD_ID", Obj.EMP_NO);
        				this.ds_custIddt.setColumn(this.ds_custIddt.rowposition ,"BZPLC_CHR_MD_NM", Obj.OPRTR_NM);
        				break;

        			case "BZPLC_CHR_CS_ID" :
        				this.ds_custIddt.setColumn(this.ds_custIddt.rowposition,"BZPLC_CHR_CS_ID", Obj.EMP_NO);
        				this.ds_custIddt.setColumn(this.ds_custIddt.rowposition,"BZPLC_CHR_CS_NM", Obj.OPRTR_NM);
        				break;

        			case "SALS_TEAM_CD" :
        				this.ds_custIddt.setColumn(this.ds_custIddt.rowposition,"SALS_CHR_CD", Obj.SALS_CHR_CD);

        				this.ds_custIddt.setColumn(this.ds_custIddt.rowposition,"SALS_TEAM_CD", Obj.SALS_TEAM_CD);

        				this.ds_custIddt.setColumn(this.ds_custIddt.rowposition,"SALS_ORG_CD", Obj.TEAM_CD);

        				break;

        			case "SVC_ORG_CD" :
        				this.ds_custIddt.setColumn(this.ds_custIddt.rowposition,"SVC_ORG_CD", Obj.TEAM_CD);
        				break;

        			case "OPR_ORG_CD" :
        				this.ds_custIddt.setColumn(this.ds_custIddt.rowposition,"OPR_ORG_CD", Obj.TEAM_CD);
        				break;

        			case "CHR_MD_ID" :
        				this.ds_custIddt.setColumn(this.ds_custIddt.rowposition,"CHR_MD_ID", Obj.EMP_NO);
        				this.ds_custIddt.setColumn(this.ds_custIddt.rowposition,"CHR_MD_NM", Obj.OPRTR_NM);
        				break;

        			case "CHR_CS_ID" :
        				this.ds_custIddt.setColumn(this.ds_custIddt.rowposition,"CHR_CS_ID", Obj.EMP_NO);
        				this.ds_custIddt.setColumn(this.ds_custIddt.rowposition,"CHR_CS_NM", Obj.OPRTR_NM);
        				break;

        			case "CHR_OP_ID" :
        				this.ds_custIddt.setColumn(this.ds_custIddt.rowposition,"CHR_OP_ID", Obj.EMP_NO);
        				this.ds_custIddt.setColumn(this.ds_custIddt.rowposition,"CHR_OP_NM", Obj.OPRTR_NM);
        				break;

        			case "PRD_REG_CS_ID" :
        				this.ds_custIddt.setColumn(this.ds_custIddt.rowposition,"PRD_REG_CS_ID", Obj.EMP_NO);
        				this.ds_custIddt.setColumn(this.ds_custIddt.rowposition,"PRD_REG_CS_NM", Obj.OPRTR_NM);
        				break;
        			case "IDDT_MKTG_INFO":
        				break;
        		}
        	}

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        	//화면 설정 함수
        	this.cfn_formInit = function(){
        		//search div 초기 설정
        		this.Div00.uMinSize = 94;
        		this.Div00.uMaxSize = 157;

        		//grid 초기 설정
        		this.grd_mainList.uSortFlag = "false";
        		this.grd_mainList.uServerSortFlag = "true";
        		this.grd_mainList.uSortCallback = "fn_sortCallback";
        		this.grd_mainList.uCellSizeType = "true";

        		//페이징 초기 설정
        		this.Div01.form.div_paging.uPage = 1;
        		this.Div01.form.div_paging.uPageNum = 0;
        		this.Div01.form.div_paging.uPageRowCnt = 10;
        		this.Div01.form.div_paging.uPageCnt = 0;
        		this.Div01.form.div_paging.uTotCount = 0;

        		//grid 개인화(전제조건 : grid Head가 무조건 1Row인 경우)
        		this.uGridList = "grd_mainList";
        		this.grd_mainList.uRightMouse = "true";
        		this.grd_mainList.uPersonalFlag = "true";
        		this.grd_mainList.uDefaultFormat = "CHK,USE_YN,IDDT_ID,IDDT_NM,BZPLC_CHR_MD_NM,BZPLC_CHR_CS_NM,SALS_CHR_CD,SALS_TEAM_CD,SALS_ORG_CD,SVC_ORG_CD,OPR_ORG_CD,CHR_MD_NM,CHR_CS_NM,CHR_OP_NM,PRD_REG_CS_NM,REGPSN_ID,REGPSN_NM,REG_DTM,UPDPSN_ID,UPDPSN_NM,UPD_DTM";
        	}

        	this.cfn_personalPopupClose = function(sRet){
        		this.grd_mainList.set_formats(sRet);
        		this.pdiv_personal.closePopup();
        	};
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        	// 그리드 이벤트에서 해당 칼럼의 ID를 찾는 햄수
        	this.getBindColumnIDByIndex = function(grid, index) {
        	    var text = "";
        	    var columnid = null;
        	    var subCell = grid.getCellProperty("body", index, "subcell");
        	    if ( subCell > 0 ) {
        		    text = grid.getSubCellProperty("body", index, 0, "text");
        	    }
        	    else {
        		    text = grid.getCellProperty("body", index, "text");
        	    }

        	    if ( text && text.length > 0 ) {
        		    if ( text.search(/^bind:/) > -1 ) {
        		        columnid = text.replace(/^bind:/, "");
        		    } else if ( text.search(/^BIND\(/) > -1 ) {
        		        columnid = text.replace(/^BIND\(/, "");
        		      columnid = columnid.substr(0, columnid.length-1);
        		    }
        	    }
        	    return columnid;
        	}
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        	//조회 버튼 click  이벤트
        	this.btn_search_onclick = function(obj,e)
        	{
        		var useYn = this.Div00.form.cbo_useYn.value;
        		if(useYn == "A"){
        			useYn = "";
        		}
        		this.ds_search.setColumn(0, "USE_YN", useYn);

        		this.fn_search();
        	};

        	// 초기화 버튼
        	this.btn_reset_onclick = function(obj,e)
        	{
        		this.Div00.form.cbo_useYn.set_value("Y");
        	};

        	this.Button00_onclick = function(obj,e)
        	{
        		trace("Quick Frame ===>"+this.fv_oApp.agv_QuickFrame.getOffsetWidth() + " : " +  this.fv_oApp.agv_QuickFrame.getOffsetHeight());
        		trace("Left Frame ===>"+this.fv_oApp.agv_LeftFrame.getOffsetWidth() + " : " +  this.fv_oApp.agv_LeftFrame.getOffsetHeight());
        		trace("Main Frame ===>"+this.fv_oApp.agv_MainFrame.getOffsetWidth() + " : " +  this.fv_oApp.agv_MainFrame.getOffsetHeight());
        		trace("Mdi Frame ===>"+this.fv_oApp.agv_MdiFrame.getOffsetWidth() + " : " +  this.fv_oApp.agv_MdiFrame.getOffsetHeight());
        		trace("Work Frame Set===>"+this.fv_oApp.agv_WorkFrameSet.getOffsetWidth() + " : " +  this.fv_oApp.agv_WorkFrameSet.getOffsetHeight());
        	};

        	// 신규생성 버튼
        	this.btn_rowAdd = function(obj,e)
        	{
        		this.ds_custIddt.insertRow(0);
        		this.ds_custIddt.setColumn(0, "USE_YN", "Y");
        		this.ds_custIddt.setColumn(0, "ROW_STATE", "NEW");
        	};


        	// 저장 버튼
        	this.fn_btnSave = function(obj,e)
        	{
        		var chkStr = this.ds_custIddt.getCaseCount("CHK>0");
        		if(chkStr < 1){
        			alert(this.fn_getMessage("ERRC000050", "항목")); // 선택된 항목이 없습니다.
        			return;
        		}

        		if(!this.confirm(this.fn_getMessage("ERRC000080"))){
        			// 저장하시겠습니까?
        			return;
        		}

        		this.ds_custIddtOut.clearData();

        		for(var i=0; i<this.ds_custIddt.rowcount; i++){
        			if(this.ds_custIddt.getColumn(i, "CHK") == 1){
        				var row = this.ds_custIddtOut.addRow();

        				if(this.ds_custIddt.getColumn(i,"IDDT_NM") == "" || this.ds_custIddt.getColumn(i,"IDDT_NM") == null){
        					alert(this.fn_getMessage("ERRC000004", "산업군명")); // 산업군명은 필수 입력값 입니다.
        					return;
        				}

        				if(this.ds_custIddt.getColumn(i,"USE_YN") == "" || this.ds_custIddt.getColumn(i,"USE_YN") == null){
        					this.ds_custGrd.setColumn(i, "USE_YN", 'Y');
        				}

        				// 통합테스트 2022.06.09 추가 : 운영조직코드 입력 시 담당OPID는 필수입력
        				if(this.ds_custIddt.getColumn(i,"OPR_ORG_CD") != "" && this.ds_custIddt.getColumn(i,"OPR_ORG_CD") != null){
        					if(this.ds_custIddt.getColumn(i,"CHR_OP_ID") == "" || this.ds_custIddt.getColumn(i,"CHR_OP_ID") == null){
        						alert(this.fn_getMessage("ERRC000245", "운영조직코드",  "담당OPID")); // &1 값이 존재하는 경우 &2 은(는) 필수 입력값입니다.
        						return;
        					}
        				}

        				this.ds_custIddtOut.copyRow(row, this.ds_custIddt, i);
        			}
        		}
        		this.fn_saveData();
        	};

        	// 일괄상태변경 버튼
        	this.fn_btnAllStateSave = function(obj,e)
        	{
        		var chkStr = this.ds_custIddt.getCaseCount("CHK>0");
        		if(chkStr < 1){
        			alert(this.fn_getMessage("ERRC000050", "항목")); // 선택된 항목이 없습니다.
        			return;
        		}

        		var allUseYn = this.cbo_useYn2.value;
        		for(var i=0; i<this.ds_custIddt.rowcount; i++){
        			if(this.ds_custIddt.getColumn(i, "CHK") == 1){
        				// 산업군 미지정은 상태변경 불가
        				var iddtId = this.ds_custIddt.getColumn(i,"IDDT_ID");
        				if(iddtId == "999"){
        					this.ds_custIddt.setColumn(i,"CHK",0);
        					continue;
        				}

        				this.ds_custIddt.setColumn(i, "USE_YN", allUseYn);
        			}
        		}
        	};

        	// 그리드 돋보기 클릭 시 이벤트
        	this.Div01_grd_mainList_onexpandup = function(obj,e)
        	{
        		this.columnRow = e.row;
        		this.columnId = this.getBindColumnIDByIndex(obj, e.cell); // 클릭한 그리드 칼럼의 ID

        		var args = { coCd: '1000' };
        		var opts = { titlebar: 'true', autosize: 'false' }

        		if(this.columnId == "BZPLC_CHR_MD_NM"){
        			// 사업장담당MD
        			args.empNo = this.ds_custIddt.getColumn(e.row, "BZPLC_CHR_MD_ID");
        			opts.title = '사업장담당MD 조회';
        			this.gfn_openPopup("BZPLC_CHR_MD_ID", "CO_POP::SSP_BO_PP_27.xfdl", args, "fn_popupCallback");
        		}
        		if(this.columnId == "BZPLC_CHR_CS_NM"){
        			// 사업장담당CS
        			args.empNo = this.ds_custIddt.getColumn(e.row, "BZPLC_CHR_CS_ID");
        			opts.title = '사업장담당CS 조회';
        			this.gfn_openPopup("BZPLC_CHR_CS_ID", "CO_POP::SSP_BO_PP_27.xfdl", args, "fn_popupCallback");
        		}
        		if(this.columnId == "SALS_TEAM_CD"){
        			// 영업팀
        			args.searchType = '1';
        			args.salsTeamCd = this.ds_custIddt.getColumn(e.row, "SALS_TEAM_CD");
        			opts.title = '영업팀 조회';
        			this.gfn_openPopup("SALS_TEAM_CD", 'CC::SSP_BO_PP_26.xfdl', args, 'fn_popupCallback', opts);
        		}
        		if(this.columnId == "SVC_ORG_CD"){
        			// 서비스 조직코드
        			args.searchType = '2';
        			args.teamCd = this.ds_custIddt.getColumn(e.row, "SVC_ORG_CD");
        			opts.title = '서비스 조직코드 조회';
        			this.gfn_openPopup("SVC_ORG_CD", "CC::SSP_BO_PP_26.xfdl", args, "fn_popupCallback", opts);
        		}
        		if(this.columnId == "OPR_ORG_CD"){
        			// 운영조직코드
        			args.searchType = '5';
        			args.teamCd = this.ds_custIddt.getColumn(e.row, "OPR_ORG_CD");
        			opts.title = '운영 조직코드 조회';
        			this.gfn_openPopup("OPR_ORG_CD", "CC::SSP_BO_PP_26.xfdl", args, "fn_popupCallback", opts);
        		}
        		if(this.columnId == "CHR_MD_NM"){
        			// 담당MD
        			args.empNo = this.ds_custIddt.getColumn(e.row, "CHR_MD_ID");
        			opts.title = '담당MD 조회';
        			this.gfn_openPopup("CHR_MD_ID", "CO_POP::SSP_BO_PP_27.xfdl", args, "fn_popupCallback", opts);
        		}
        		if(this.columnId == "CHR_CS_NM"){
        			// 담당CS
        			args.empNo = this.ds_custIddt.getColumn(e.row, "CHR_CS_ID");
        			opts.title = '담당CS 조회';
        			this.gfn_openPopup("CHR_CS_ID", "CO_POP::SSP_BO_PP_27.xfdl", args, "fn_popupCallback", opts);
        		}
        		if(this.columnId == "CHR_OP_NM"){
        			// 담당OP
        			args.empNo = this.ds_custIddt.getColumn(e.row, "CHR_OP_ID");
        			opts.title = '담당OP 조회';
        			this.gfn_openPopup("CHR_OP_ID", "CO_POP::SSP_BO_PP_27.xfdl", args, "fn_popupCallback", opts);
        		}
        		if(this.columnId == "PRD_REG_CS_NM"){
        			// 상품등록 CS ID
        			args.empNo = this.ds_custIddt.getColumn(e.row, "PRD_REG_CS_ID");
        			opts.title = '상품등록 CS ID 조회';
        			this.gfn_openPopup("PRD_REG_CS_ID", "CO_POP::SSP_BO_PP_27.xfdl", args, "fn_popupCallback", opts);
        		}

        	};

        	this.openPakgInfo = function(obj,row){
        		var iddtId = this.ds_custIddt.getColumn(row, "IDDT_ID");
        		if(!iddtId){
        			alert(this.fn_getMessage("ERRC000285"));
        			return;
        		}
        		var args = { iddtId: iddtId};
        		var options = {};
        		options.title = "패키지 설정";
        		this.gfn_openPopup('IDDT_MKTG_INFO', "CC::SSP_BO_MA_52_1.xfdl", args, "fn_popupCallback", options);
        	}

        	// 그리드 더블클릭시 삭제
        	this.Div01_grd_mainList_oncelldblclick = function(obj,e)
        	{
        		var columnRow = e.row;
        		var columnId = this.getBindColumnIDByIndex(obj, e.cell); // 클릭한 그리드 칼럼의 ID
        		var displaytype = this.grd_mainList.getCellProperty("body",e.cell,"displaytype");

        		if(columnId=='CHK' || columnId=='USE_YN' || columnId=='IDDT_ID' || columnId=='IDDT_NM'
        				|| columnId=='REGPSN_ID' || columnId=='REG_DTM' || columnId=='UPDPSN_ID' || columnId=='UPD_DTM') return;

        		if(columnId=='EXPS_YN' || columnId=='EXPS_SO' || columnId=='PACKAGE_COUNT' ||columnId=='MRO_IDDT_ID' || displaytype=='imagecontrol'){
        			this.openPakgInfo(obj,columnRow);

        		}else{
        			if(this.ds_custIddt.getColumn(columnRow, columnId) == null || this.ds_custIddt.getColumn(columnRow, columnId) == '') return;
        			if(!this.confirm(this.fn_getMessage("ERRC000048"))) {
        				//삭제하시겠습니까?
        				return;
        			}

        			if(columnId == 'SALS_CHR_CD' || columnId == 'SALS_TEAM_CD' ||  columnId == 'SALS_ORG_CD'){
        				this.ds_custIddt.setColumn(columnRow, 'SALS_CHR_CD', "");
        				this.ds_custIddt.setColumn(columnRow, 'SALS_TEAM_CD', "");
        				this.ds_custIddt.setColumn(columnRow, 'SALS_ORG_CD', "");
        			}else if(columnId == 'BZPLC_CHR_MD_NM'){
        				this.ds_custIddt.setColumn(columnRow, 'BZPLC_CHR_MD_ID', "");
        			}else if(columnId == 'BZPLC_CHR_CS_NM'){
        				this.ds_custIddt.setColumn(columnRow, 'BZPLC_CHR_CS_ID', "");
        			}else if(columnId == 'CHR_MD_NM'){
        				this.ds_custIddt.setColumn(columnRow, 'CHR_MD_ID', "");
        			}else if(columnId == 'CHR_CS_NM'){
        				this.ds_custIddt.setColumn(columnRow, 'CHR_CS_ID', "");
        			}else if(columnId == 'CHR_OP_NM'){
        				this.ds_custIddt.setColumn(columnRow, 'CHR_OP_ID', "");
        			}else if(columnId == 'PRD_REG_CS_NM'){
        				this.ds_custIddt.setColumn(columnRow, 'PRD_REG_CS_ID', "");
        			}

        			this.ds_custIddt.setColumn(columnRow, columnId, "");
        		}
        	};

        	// 엑셀 다운로드
        	this.Button01_onclick = function(obj,e)
        	{
        		this.ofn_exportExcel({form:this, grid:this.grd_mainList, fileName:"산업군 목록"});
        	};

        	// 그리드 콤보박스 클릭
        	this.Div01_grd_mainList_oncellclick = function(obj,e)
        	{
        		obj.dropdownCombo();
        	};

        	// 레이아웃 저장
        	this.btn_layoutSave_onclick = function(obj,e)
        	{
        		this.gfn_personalSave("grd_mainList", this.grd_mainList.getCurFormatString());
        	};

        	// 레이아웃 초기화
        	this.btn_layoutClear_onclick = function(obj,e)
        	{
        		//suOrgFormat
        		this.gfn_personalSave("grd_mainList", this.grd_mainList.uOrgFormat);
        		this.grd_mainList.set_formats(this.grd_mainList.uOrgFormat);
        	};

        	this.ssp_bo_ma_03_onkeyup = function(obj,e)
        	{
        		if(e.keycode == 13 && e.ctrlkey){
        			this.btn_search_onclick();
        		}
        	};

        	//패키지 설정 버튼 클릭
        	this.btn_pkgSetting_onclick = function(obj,e)
        	{
        		var rowArr = this.ds_custIddt.extractRows("CHK == 1");
        		if(rowArr.length == 0) {
        			alert(this.fn_getMessage("ERRC000050", "산업군"));
        			return;
        		}
        		if(rowArr.length > 1) {
        			alert(this.fn_getMessage("ERRC000284"));
        			return;
        		}

        		if(rowArr.length == 1){
        			var row = rowArr[0]
        			this.openPakgInfo(obj,row);
        		}
        	};

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.ssp_bo_ma_03_onkeyup,this);
            this.Div00.form.cbo_useYn.addEventHandler("onitemchanged",this.cmb_thmeDownCd_onitemchanged,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div00.form.btn_reset.addEventHandler("onclick",this.btn_reset_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_newData.addEventHandler("onclick",this.btn_rowAdd,this);
            this.btn_save.addEventHandler("onclick",this.fn_btnSave,this);
            this.btn_allStateSave.addEventHandler("onclick",this.fn_btnAllStateSave,this);
            this.cbo_useYn2.addEventHandler("onitemchanged",this.cbo_useYn2_onitemchanged,this);
            this.grd_mainList.addEventHandler("onselectchanged",this.fn_editChg,this);
            this.grd_mainList.addEventHandler("onexpandup",this.Div01_grd_mainList_onexpandup,this);
            this.grd_mainList.addEventHandler("oncelldblclick",this.Div01_grd_mainList_oncelldblclick,this);
            this.grd_mainList.addEventHandler("oncellclick",this.Div01_grd_mainList_oncellclick,this);
            this.btn_pkgSetting.addEventHandler("onclick",this.btn_pkgSetting_onclick,this);
            this.btn_layoutClear.addEventHandler("onclick",this.btn_layoutClear_onclick,this);
            this.ds_custIddtOut.addEventHandler("oncolumnchanged",this.ds_custGrd_oncolumnchanged,this);
        };
        this.loadIncludeScript("SSP_BO_MA_52.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
