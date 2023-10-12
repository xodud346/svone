(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_CN_06");
            this.set_titletext("고객 도우미 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsParam", this);
            obj._setContents("<ColumnInfo><Column id=\"coCd\" type=\"STRING\" size=\"256\"/><Column id=\"bzplcIds\" type=\"STRING\" size=\"256\"/><Column id=\"bzplcNms\" type=\"STRING\" size=\"256\"/><Column id=\"oprUnitIds\" type=\"STRING\" size=\"256\"/><Column id=\"oprUnitNms\" type=\"STRING\" size=\"256\"/><Column id=\"csChrPsnIds\" type=\"STRING\" size=\"256\"/><Column id=\"csChrPsnNms\" type=\"STRING\" size=\"256\"/><Column id=\"caddrDispNms\" type=\"STRING\" size=\"256\"/><Column id=\"caddrSprCd\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"startNum\" type=\"STRING\" size=\"256\"/><Column id=\"rowCount\" type=\"STRING\" size=\"256\"/><Column id=\"custHelperSprCd\" type=\"STRING\" size=\"256\"/><Column id=\"sortColumn\" type=\"STRING\" size=\"256\"/><Column id=\"sortType\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"rowCount\">20</Col><Col id=\"startNum\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComCADDR_SPR_CD", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComUSE_YN", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComQTY_DISP_UNIT_CD", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComCUST_HELPER_SPR_CD", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSrch","0","0",null,"130","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색 영역");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20","20",null,"32","20",null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("Static31","20","51",null,"32","20",null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("Static02","20","20","110","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("2");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("Static06","20","51","110","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("3");
            obj.set_text("FRONT 표시명");
            obj.set_cssclass("sta_cm_box01L");
            this.divSrch.addChild(obj.name, obj);

            obj = new Edit("edtOPR_UNIT_ID","Static02:10","24","250","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("btn_oprMulti","395","24","24","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_multi");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("btn_oprMultiText","btn_oprMulti:4","24","24","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_document");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("Static08","883","51","110","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("7");
            obj.set_text("고객도우미 구분");
            obj.set_cssclass("sta_cm_box01L");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("Static08_00","450","51","110","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("8");
            obj.set_text("연락처 구분");
            obj.set_cssclass("sta_cm_box01L");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("Static04_00","450","20","110","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("9");
            obj.set_text("담당CS");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.divSrch.addChild(obj.name, obj);

            obj = new Edit("edtCADDR_DISP_NM","Static06:10","55","250","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("10");
            obj.set_enable("true");
            this.divSrch.addChild(obj.name, obj);

            obj = new Combo("cboCADDR_SPR_CD","Static08_00:10","55","250","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_innerdataset("dsComCADDR_SPR_CD");
            obj.set_datacolumn("NM");
            obj.set_codecolumn("CD");
            obj.set_taborder("11");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("btnOprtr","825","24","24","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_search02");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("btn_csChrPsnIdsMultiText","btnOprtr:4","24","24","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_document");
            this.divSrch.addChild(obj.name, obj);

            obj = new Edit("edtCsChrPsnIds","Static04_00:10","24","250","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("14");
            obj.set_enable("true");
            this.divSrch.addChild(obj.name, obj);

            obj = new Combo("choCUST_HELPER_SPR_CD","Static08:10","55","250","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_innerdataset("dsComCUST_HELPER_SPR_CD");
            obj.set_datacolumn("NM");
            obj.set_codecolumn("CD");
            obj.set_taborder("15");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("btnSrch",null,"Static31:10","60","28","20",null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("16");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("btnReset",null,"Static31:10","60","28","btnSrch:4",null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("17");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_reset");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("Static08_01","883","20","110","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("18");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.divSrch.addChild(obj.name, obj);

            obj = new Combo("cboUSE_YN","Static08_01:10","24","250","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_innerdataset("dsComUSE_YN");
            obj.set_datacolumn("NM");
            obj.set_codecolumn("CD");
            obj.set_taborder("19");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.divSrch.addChild(obj.name, obj);

            obj = new Combo("cboPageSize",null,"divSrch:20","110","28","20",null,null,null,null,null,this);
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            obj.set_displayrowcount("5");
            var cboPageSize_innerdataset = new nexacro.NormalDataset("cboPageSize_innerdataset", obj);
            cboPageSize_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20개씩</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50개씩</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100개씩</Col></Row><Row><Col id=\"codecolumn\">10000</Col><Col id=\"datacolumn\">10000개씩</Col></Row></Rows>");
            obj.set_innerdataset(cboPageSize_innerdataset);
            obj.set_text("20개씩");
            obj.set_value("20");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","20","cboPageSize:10",null,null,"20","118",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_autosizingtype("col");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_binddataset("dsList");
            obj.set_selecttype("area");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"80\"/><Column size=\"170\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"220\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"운영단위 ID\"/><Cell col=\"2\" text=\"운영단위\"/><Cell col=\"3\" text=\"Zendesk 그룹 ID\"/><Cell col=\"4\" text=\"Zendesk 그룹명\"/><Cell col=\"5\" text=\"FRONT 표시 명\"/><Cell col=\"6\" text=\"연락처등록\"/><Cell col=\"7\" text=\"연락처 구분\"/><Cell col=\"8\" text=\"담당자 연락처\"/><Cell col=\"9\" text=\"그룹 인원\"/><Cell col=\"10\" text=\"담당 CS\"/><Cell col=\"11\" text=\"사용 여부\"/></Band><Band id=\"body\"><Cell text=\"bind:CUST_HELPER_SPR_CD_NM\" displaytype=\"decoratetext\" cssclass=\"expr:&apos;,1,2&apos;.indexOf(&apos;,&apos;+String(CUST_HELPER_SPR_CD).valueOf())&gt;-1?&apos;grid_activeC&apos;:&apos;&apos;\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:OPR_UNIT_ID\" expr=\"&apos;,1,2&apos;.indexOf(&apos;,&apos;+String(CUST_HELPER_SPR_CD).valueOf())&gt;-1?&apos;&apos;:OPR_UNIT_ID\" displaytype=\"decoratetext\" cssclass=\"expr:&apos;,3,4&apos;.indexOf(&apos;,&apos;+String(CUST_HELPER_SPR_CD).valueOf())&gt;-1?&apos;grid_activeC&apos;:&apos;&apos;\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:OPR_UNIT_NM\" tooltiptext=\"bind:OPR_UNIT_NM\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:ZENDESK_GRP_ID\"/><Cell col=\"4\" text=\"bind:ZENDESK_GRP_NM\"/><Cell col=\"5\" text=\"bind:CADDR_DISP_NM\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:CUST_HELPER_CADDR_REG_NO\"/><Cell col=\"7\" text=\"bind:CADDR_SPR_NM\"/><Cell col=\"8\" text=\"bind:CUST_HELPER_CADDR\"/><Cell col=\"9\" text=\"bind:ZENDESK_CHRPSN_NMS\" textAlign=\"left\" tooltiptext=\"bind:ZENDESK_CHRPSN_NMS\"/><Cell col=\"10\" text=\"bind:SVC_CHRPSN_NM\"/><Cell col=\"11\" text=\"bind:USE_YN_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnApnd",null,"divSrch:20","81","28","cboPageSize:4",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"divSrch:20","100","28","333",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"divSrch:20","105","28","btn_layoutSave:4",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("divPaging","20","grdList:30",null,"38","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("lblPageInfo","20","divSrch:30","121","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("(총 0건 1/1)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutClear",null,"divSrch:20","110","28","btnApnd:4",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cboPageSize","value","dsParam","rowCount");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSrch.form.cboCADDR_SPR_CD","value","dsParam","caddrSprCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSrch.form.edtCADDR_DISP_NM","value","dsParam","caddrDispNms");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSrch.form.edtCsChrPsnIds","value","dsParam","csChrPsnIds");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSrch.form.edtOPR_UNIT_ID","value","dsParam","oprUnitIds");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSrch.form.cboUSE_YN","value","dsParam","useYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSrch.form.choCUST_HELPER_SPR_CD","value","dsParam","custHelperSprCd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CN_06.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_CN_06.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_CN_06.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_CN_06.xfdl", function() {
        /*******************************************************
          PROJECT NAME : MarketA
          CREATION DATES :
        *******************************************************/

        // 공통형 스크립트 인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object

        this.$this=this;
        this.$p = {
        	$this: this.$this      ,
        	grid : this.grdList    ,
        	size : this.cboPageSize,
        	div  : this.divPaging  ,
        	label: this.lblPageInfo,

        	dflt : { page: 1, startNum: 0, rowCount: 20 },
        	param: this.dsParam    ,
        	fSrch: this.fnSearch   ,
        };

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e) {
        	trace("this.fn_onLoad");
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	// 고객파트 공통
        	this.dsParam.setColumn(0, 'coCd', this.getSession().coCd);  // Session
        	this.$page.init(this.$p);

        	this.fnCcComCodes();

        	this.copyPaste.addGrid(this.grdList);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fnCcComCodes=function() {
        	this.ccComCodes([ '전체:CADDR_SPR_CD', '전체:USE_YN', 'QTY_DISP_UNIT_CD', '전체:CUST_HELPER_SPR_CD' ], 'fnCcComCodesClbk');
        }

        this.fnSearch=function(page) {
        	var sSvcId = 'listCustHelper'        ;
        	var sUrl   = '/vo/voc/helper/list.do';
        	var inDs   = 'dsParam=dsParam'  ; // "dsParam=dsParam";  // + dsParam.id;
        	var outDs  = 'dsList=dsList'    ;
        	var arg    = '';

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, 'fnSearchClbk');
        }
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fnCcComCodesClbk=function(rCodes, rCode, rMesg)	{
        	trace('this.fnCcComCodesClbk() >>' + rCodes);
        }
        this.fnSearchClbk=function(rCodes, rCode, rMesg) {
        	trace('this.fnSearchClbk() >>' + rCodes);

        	var tot=this.dsList.getColumn(0, 'TOT_CUNT');
        	this.$page.postSearch(tot, 'fnPageClbk');
        }
        this.fnPageClbk=function(flg) {  //trace(' fnPageClbk >>> ['+ p +']');
        	var $p=this.$p;
        	if (flg) {
        		var page=$p.div.uPage, startNum=$p.div.uPageNum, rowCount=$p.size.value;
        		$p.param.setColumn (0, 'startNum' , startNum);  $p.param.setColumn(0, "START_NUM", startNum);
        		$p.param.setColumn (0, 'rowCount' , rowCount);  $p.param.setColumn(0, "ROW_COUNT", rowCount);

        		this.fnSearch(page);
        	}

        	if (this.$page.isNull($p.label)) { return; }
        	$p.label.set_text("(총 "+ $p.div.uTotCunt +"건, "+ $p.div.uPage +" / "+ $p.div.uPageCnt +")");
        }

        this.fn_sortCallback = function(sGridId){
        	var oGrid=null;
        	if(sGridId == "grdList"){
        		oSortInfo = this.grdList.uaSortInfo;
        		if(oSortInfo != null){
        			this.dsParam.setColumn(0,"sortColumn",oSortInfo.bindCol);
        			this.dsParam.setColumn(0,"sortType",oSortInfo.status);
        		}
        		this.fnSearch();
        	}
        };
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){
        	trace("this.cfn_formInit_CN_06");

        	//grid 초기 설정
        	this.grdList.uSortFlag = "false";
        	this.grdList.uServerSortFlag = "true";
        	this.grdList.uSortCallback = "fn_sortCallback";
        	this.grdList.uCellSizeType = "true";

        	this.$p.div .uPageNum      = this.$p.dflt.startNum;
        	this.$p.div .uPageRowCnt   = this.$p.dflt.rowCount;

        	//grid 개인화(전제조건 : grid Head가 무조건 1Row인 경우)
        	this.uGridList = "grdList";
        	this.grdList.uRightMouse = "true";
        	this.grdList.uPersonalFlag = "true";
        	this.grdList.uDefaultFormat = "CUST_HELPER_SPR_CD_NM,OPR_UNIT_ID,OPR_UNIT_NM,ZENDESK_GRP_ID,ZENDESK_GRP_NM,CADDR_DISP_NM,CUST_HELPER_CADDR_REG_NO,CADDR_SPR_NM,CUST_HELPER_CADDR,ZENDESK_CHRPSN_NMS,SVC_CHRPSN_NM,USE_YN_NM";

        }

        this.cfn_personalPopupClose = function(sRet){
        	this.grdList.set_formats(sRet);
        	this.pdiv_personal.closePopup();
        };
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.srchFlds=[ 'oprUnitIds', 'oprUnitNms', 'csChrPsnIds', 'csChrPsnNms', 'caddrDispNms', 'caddrSprCd', 'custHelperSprCd', 'useYn' ];
        this.srchReset=function() {
         	for(var i in this.srchFlds) {  // this.dsParam.reset();
         		this.dsParam.setColumn(0, this.srchFlds[i], undefined);
         	}
        }
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        this.divSrch_btnReset_onclick = function(obj,e) {
        	this.srchReset();
        };

        this.divSrch_btn_oprMulti_onclick = function(obj,e) {
        	var coCd=this.getSession().coCd, p={ coCd: coCd };  //trace(JSON.stringify( p ));
        	this.$popup(this).mOprunit(p, function(p, r) {
        		if (r==undefined) { return; }
        		var rows=JSON.parse(r), oprUnitIds='', oprUnitNms='';
        		for (var i in rows) {
        			var row=JSON.parse(rows[i]);
        			oprUnitIds += (oprUnitIds==''?'':',')+row.OPR_UNIT_ID;
        			oprUnitNms += (oprUnitNms==''?'':',')+row.OPR_UNIT_NM;
        		}
        		this.dsParam.setColumn(0, 'oprUnitIds', oprUnitIds);
        		this.dsParam.setColumn(0, 'oprUnitNms', oprUnitNms);
        	});
        };
        this.divSrch_btnOprtr_onclick = function(obj,e) {
        	/* 22.06.02 문주환 단위테스트 수정
        	var coCd=this.getSession().coCd, p={ coCd: coCd };  //trace(JSON.stringify( p ));
        	this.$popup(this).mOprtr(p, function(p, r) {
        		trace(r);
        		if (r==undefined) { return; }
        		var row=JSON.parse(r);

        		this.dsParam.setColumn(0, 'csChrPsnIds', row.OPRTR_ID);
        		this.dsParam.setColumn(0, 'csChrPsnNms', row.OPRTR_NM);
        	});
        	*/
        	var args = {
        		coCd : '1000'
        		, empNo : this.dsParam.getColumn(0, "csChrPsnIds")
        	};
        	this.gfn_openPopup("CHR_CS_ID", "CO_POP::SSP_BO_PP_27.xfdl", args, function(sPopupId, sRetValue) {
        		var obj = JSON.parse(sRetValue);
        		this.dsParam.setColumn(0, 'csChrPsnIds', obj.EMP_NO);
        		this.dsParam.setColumn(0, 'csChrPsnNms', obj.OPRTR_NM);
        	}, {title:"담당CS 조회", titlebar:"true"});
        };

        this.cboPageSize_onitemchanged = function(obj,e) {
        	this.fnSearch();
        };

        this.divSrch_btnSrch_onclick = function(obj,e) {
        	// Paging - 조회버튼 클릭시 페이징 초기화 시킨다.
        	if( page == 0 || page == undefined ) {
        		var page=1, startNum=0, rowCount=this.$p.size.value;

        		this.divPaging.uPage   =page;
        		this.divPaging.uPageNum=0;
        		this.dsParam.setColumn(0,"START_NUM", startNum);  this.dsParam.setColumn(0,"startNum" , startNum);
        		this.dsParam.setColumn(0,"ROW_COUNT", rowCount);  this.dsParam.setColumn(0,"rowCount" , rowCount);
        	}
        	this.fnSearch();
        };

        this.popCfg = { 'reg': 'VO::SSP_BO_CN_17.xfdl', '20': 'SSP_BO_CN_07.xfdl', '30': 'SSP_BO_CN_18.xfdl' };

        // 등록화면 - SSP_BO_CN_17
        this.btnApnd_onclick = function(obj,e) {
        	// 'SSP_BO_CN_17'
        	var p={
        		//  coCd     : ds.getColumn(evtRidx, 'CO_CD'      )
        		//, bzplcId  : ds.getColumn(evtRidx, 'BZPLC_ID'   )
        		//, oprUnitId: ds.getColumn(evtRidx, 'OPR_UNIT_ID')
        		pageDiv : 1 // 페이지 호출 구분 - 1:등록페이지, 2:수정페이지
        	};

        	var oOpts = { titlebar: 'true', autosize: 'false', title: '고객도우미 등록' };
        	this.gfn_openPopup('btnApndPop', this.popCfg['reg'], p, "btnApndClbk", oOpts);
        };
        this.btnApndClbk=function() {
        	this.fnSearch();
        };

        // 정보화면 - SSP_BO_CN_07(계약), SSP_BO_CN_18(일반)
        this.grdList_oncellclick = function(obj,e) {
        	var evtColID = this.getBindColumnIDByIndex(obj, e.cell), evtRidx = e.row;
        	var ds = obj.getBindDataset();
        	var pageName = '';

        	var vhsCd=ds.getColumn(e.row, 'CUST_HELPER_SPR_CD'), clckAct=(',1,2'.indexOf(vhsCd)>-1 && 'CUST_HELPER_SPR_CD_NM'==evtColID) || (',3,4'.indexOf(vhsCd)>-1 && 'OPR_UNIT_ID'==evtColID);
        	trace('[evtColID:'+ evtColID +'][vhsCd:'+ vhsCd +'][clckAct:'+ clckAct +']');
        	if (clckAct) {
        		var p={
        		      pageDiv  : 2
        			, coCd     : ds.getColumn(evtRidx, 'CO_CD'      )
        			, bzplcId  : ds.getColumn(evtRidx, 'BZPLC_ID'   )
        			, oprUnitId: ds.getColumn(evtRidx, 'OPR_UNIT_ID')
        			, custSprCd: ds.getColumn(evtRidx, 'CUST_SPR_CD')
        		};
        		console.log(">>>>>["+ this.dsList.getColumn(this.dsList.rowposition, "CUST_SPR_CD") +"]");
        		var bzplcNm  =this.dsList.getColumn(this.dsList.rowposition, "BZPLC_NM"   );
        		var oprUnitNm=this.dsList.getColumn(this.dsList.rowposition, "OPR_UNIT_NM");
        		var custSprCd=this.dsList.getColumn(this.dsList.rowposition, "CUST_SPR_CD");
        		var custHelperSprCd=this.dsList.getColumn(this.dsList.rowposition, "CUST_HELPER_SPR_CD");

        		trace('세희	'+'[oprUnitNm:'+ oprUnitNm+'	[custSprCd:'+ custSprCd +'	[custHelperSprCd:'+custHelperSprCd );
        		//if(bzplcNm==undefined) { return; }
        		if(oprUnitNm!=undefined && custSprCd=='30'){
        			//30 : SSP_일반고객
        			pageName = 'VO::SSP_BO_CN_17.xfdl';
        		} else if(oprUnitNm!=undefined && custSprCd=='20'){
        			//20 : SSP_계약고객
        			pageName = 'VO::SSP_BO_CN_07.xfdl';
        		} else if(custHelperSprCd == '1' ||custHelperSprCd == '2'){
        			pageName = 'VO::SSP_BO_CN_17.xfdl';
        		} else {
        			pageName = 'VO::SSP_BO_CN_07.xfdl';
        		}

        		var oOpts = { titlebar: 'true', autosize: 'false', title: '고객도우미 등록정보' };
        		//this.gfn_openPopup(e.fromobject.id, 'VO::'+ this.popCfg[p.custSprCd], p, 'btnApndClbk', oOpts);
        		this.gfn_openPopup(e.fromobject.id, pageName, p, 'btnApndClbk', oOpts);
        	}
        };
        this.grdListCellClbk=function() {

        }

        /* 엑셀다운로드 */
        this.Button01_onclick = function(obj,e)
        {
        	this.ofn_exportExcel({form:this, grid:this.grdList, fileName:"고객도우미 관리"});
        };

        // 멀티팝업버튼 클릭
        this.multipleTextBtn_onclick = function(obj,e) {
        		if(e.fromobject.id == 'btn_oprMultiText'){
        			//운영단위
        			this.fn_showTareaInput(this.name, 'OPR_UNIT_ID', this.divSrch.form.edtOPR_UNIT_ID.value, 'fn_popupCallback',160,300);
        		}
        		if(e.fromobject.id == 'btn_csChrPsnIdsMultiText'){
        			this.fn_showTareaInput(this.name, 'CS_CHR_PSN_ID', this.divSrch.form.edtCsChrPsnIds.value, 'fn_popupCallback',160,300);
        		}

        }
        // 멀티팝업버튼 클릭 콜백
        this.fn_popupCallback = function(sPopupId, sRetValue){
        	switch(sPopupId){
        		case 'SSP_BO_CN_06;OPR_UNIT_ID':
        			var resData = JSON.parse(sRetValue);
        			var rtnData = "";
        			var sIdList = "";
        			for(var i = 0; i < resData.length; i++) {
        				rtnData = JSON.parse(resData[i]);
        				sIdList += rtnData.VALUE +",";
        			}
        			this.divSrch.form.edtOPR_UNIT_ID.set_value(sIdList);
        			this.fn_setMSearch(this.name,'OPR_UNIT_ID',sIdList);
        			break;

        		case 'SSP_BO_CN_06;CS_CHR_PSN_ID':
        			var resData = JSON.parse(sRetValue);
        			var rtnData = "";
        			var sIdList = "";
        			for(var i = 0; i < resData.length; i++) {
        				rtnData = JSON.parse(resData[i]);
        				sIdList += rtnData.VALUE +",";
        			}
        			this.divSrch.form.edtCsChrPsnIds.set_value(sIdList);
        			this.fn_setMSearch(this.name,'CS_CHR_PSN_ID',sIdList);
        			break;
        	}
        }

        // 레이아웃 저장
        this.btn_layoutSave_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grdList", this.grdList.getCurFormatString());
        };

        // 레이아웃 초기화
        this.btn_layoutClear_onclick = function(obj,e)
        {
        	//suOrgFormat
        	this.gfn_personalSave("grdList", this.grdList.uOrgFormat);
        	this.grdList.set_formats(this.grdList.uOrgFormat);
        };

        this.SSP_BO_CN_06_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13 && e.ctrlkey){
        		this.fnSearch();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.SSP_BO_CN_06_onkeyup,this);
            this.divSrch.form.Static02.addEventHandler("onclick",this.Div00_Static02_onclick,this);
            this.divSrch.form.btn_oprMulti.addEventHandler("onclick",this.divSrch_btn_oprMulti_onclick,this);
            this.divSrch.form.btn_oprMultiText.addEventHandler("onclick",this.multipleTextBtn_onclick,this);
            this.divSrch.form.btnOprtr.addEventHandler("onclick",this.divSrch_btnOprtr_onclick,this);
            this.divSrch.form.btn_csChrPsnIdsMultiText.addEventHandler("onclick",this.multipleTextBtn_onclick,this);
            this.divSrch.form.btnSrch.addEventHandler("onclick",this.divSrch_btnSrch_onclick,this);
            this.divSrch.form.btnReset.addEventHandler("onclick",this.divSrch_btnReset_onclick,this);
            this.cboPageSize.addEventHandler("onitemchanged",this.cboPageSize_onitemchanged,this);
            this.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
            this.btnApnd.addEventHandler("onclick",this.btnApnd_onclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.btn_layoutClear.addEventHandler("onclick",this.btn_layoutClear_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_CN_06.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
