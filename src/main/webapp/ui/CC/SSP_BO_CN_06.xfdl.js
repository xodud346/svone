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
            obj._setContents("<ColumnInfo><Column id=\"coCd\" type=\"STRING\" size=\"256\"/><Column id=\"bzplcIds\" type=\"STRING\" size=\"256\"/><Column id=\"bzplcNms\" type=\"STRING\" size=\"256\"/><Column id=\"oprUnitIds\" type=\"STRING\" size=\"256\"/><Column id=\"oprUnitNms\" type=\"STRING\" size=\"256\"/><Column id=\"csChrPsnIds\" type=\"STRING\" size=\"256\"/><Column id=\"csChrPsnNms\" type=\"STRING\" size=\"256\"/><Column id=\"caddrDispNms\" type=\"STRING\" size=\"256\"/><Column id=\"caddrSprCd\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"startNum\" type=\"STRING\" size=\"256\"/><Column id=\"rowCount\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"rowCount\">20</Col></Row></Rows>");
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
            
            // UI Components Initialize
            obj = new Div("divSrch","20","20",null,"100","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색 영역");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","0","0",null,"32","0",null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("Static31","0","31",null,"32","0",null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","130","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("2");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("Static06","0","31","130","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("3");
            obj.set_text("FRONT 표시명");
            obj.set_cssclass("sta_cm_box01L");
            this.divSrch.addChild(obj.name, obj);

            obj = new Edit("edtOPR_UNIT_ID","139","4","181","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("4");
            obj.set_enable("false");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("btn_oprMultiText","616","4","24","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_document");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("Static08","976","31","130","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("7");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("Static08_00","648","31","130","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("8");
            obj.set_text("연락처 구분");
            obj.set_cssclass("sta_cm_box01L");
            this.divSrch.addChild(obj.name, obj);

            obj = new Static("Static04_00","648","0","130","32",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("9");
            obj.set_text("담당CS");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.divSrch.addChild(obj.name, obj);

            obj = new Edit("edtCADDR_DISP_NM","139","35","442","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("10");
            obj.set_enable("true");
            this.divSrch.addChild(obj.name, obj);

            obj = new Combo("cboCADDR_SPR_CD","788","35","182","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_innerdataset("dsComCADDR_SPR_CD");
            obj.set_datacolumn("NM");
            obj.set_codecolumn("CD");
            obj.set_taborder("11");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("btn_oprMulti","591","4","24","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_multi");
            this.divSrch.addChild(obj.name, obj);

            obj = new Edit("edtOPR_UNIT_NM","327","4","254","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("12");
            obj.set_enable("false");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("btn_oprMultiText00","1265","4","24","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_document");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("btnOprtr","1240","4","24","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_multi");
            this.divSrch.addChild(obj.name, obj);

            obj = new Edit("edtCsChrPsnNms","976","4","254","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("15");
            obj.set_enable("false");
            this.divSrch.addChild(obj.name, obj);

            obj = new Edit("edtCsChrPsnIds","788","4","181","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("16");
            obj.set_enable("false");
            this.divSrch.addChild(obj.name, obj);

            obj = new Combo("cboUSE_YN","1109","35","180","24",null,null,null,null,null,null,this.divSrch.form);
            obj.set_innerdataset("dsComUSE_YN");
            obj.set_datacolumn("NM");
            obj.set_codecolumn("CD");
            obj.set_taborder("17");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("btnSrch",null,"70","80","26","0",null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("18");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.divSrch.addChild(obj.name, obj);

            obj = new Button("btnReset",null,"70","81","28","86",null,null,null,null,null,this.divSrch.form);
            obj.set_taborder("19");
            obj.set_text("초기화");
            this.divSrch.addChild(obj.name, obj);

            obj = new Grid("grdList","20","164",null,"616","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_autosizingtype("col");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"190\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"운영단위 ID\"/><Cell col=\"2\" text=\"운영단위\"/><Cell col=\"3\" text=\"Zendesk 그룹 ID\"/><Cell col=\"4\" text=\"Zendesk 그룹명\"/><Cell col=\"5\" text=\"FRONT 표시 명\"/><Cell col=\"6\" text=\"연락처등록\"/><Cell col=\"7\" text=\"연락처 구분\"/><Cell col=\"8\" text=\"담당자 연락처\"/><Cell col=\"9\" text=\"그룹 인원\"/><Cell col=\"10\" text=\"담당 CS\"/><Cell col=\"11\" text=\"사용 여부\"/></Band><Band id=\"body\"><Cell text=\"bind:CUST_SPR_NM\"/><Cell col=\"1\" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"2\" text=\"bind:OPR_UNIT_NM\" tooltiptext=\"bind:OPR_UNIT_NM\"/><Cell col=\"3\" text=\"bind:ZENDESK_GRP_ID\"/><Cell col=\"4\" text=\"bind:ZENDESK_GRP_NM\"/><Cell col=\"5\" text=\"bind:CADDR_DISP_NM\"/><Cell col=\"6\" text=\"bind:CUST_HELPER_CADDR_REG_NO\"/><Cell col=\"7\" text=\"bind:CADDR_SPR_NM\"/><Cell col=\"8\" text=\"bind:CUST_HELPER_CADDR\"/><Cell col=\"9\" text=\"bind:ZENDESK_CHRPSN_NMS\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:SVC_CHRPSN_NM\"/><Cell col=\"11\" text=\"bind:USE_YN_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button62_00",null,"130","81","28","222",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","1119","130","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cboPageSize",null,"130","80","28","20",null,null,null,null,null,this);
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            obj.set_taborder("4");
            obj.set_displayrowcount("5");
            var cboPageSize_innerdataset = new nexacro.NormalDataset("cboPageSize_innerdataset", obj);
            cboPageSize_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20개씩 보기</Col></Row><Row><Col id=\"codecolumn\">30</Col><Col id=\"datacolumn\">30개씩 보기</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50개씩 보기</Col></Row></Rows>");
            obj.set_innerdataset(cboPageSize_innerdataset);
            obj.set_text("20개씩 보기");
            obj.set_value("20");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Div("divPaging","20","790",null,"38","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("lblPageInfo","20","135","121","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("(총 0건 1/1)");
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

            obj = new BindItem("item2","divSrch.form.cboUSE_YN","value","dsParam","useYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSrch.form.edtCADDR_DISP_NM","value","dsParam","caddrDispNms");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSrch.form.edtCsChrPsnIds","value","dsParam","csChrPsnIds");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSrch.form.edtCsChrPsnNms","value","dsParam","csChrPsnNms");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSrch.form.edtOPR_UNIT_ID","value","dsParam","oprUnitIds");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSrch.form.edtOPR_UNIT_NM","value","dsParam","oprUnitNms");
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
        this.registerScript("SSP_BO_CN_06.xfdl", function() {
        /*******************************************************
          PROJECT NAME : MarketA
          CREATION DATES :
        *******************************************************/

        // 공통형 스크립트 인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;

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
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fnCcComCodes=function() {
        	this.ccComCodes([ '전체:CADDR_SPR_CD', '전체:USE_YN', 'QTY_DISP_UNIT_CD' ], 'fnCcComCodesClbk');
        }

        this.fnSearch=function(page) {
        	var sSvcId = 'listCustHelper'         ;
        	var sUrl   = '/vo/voc/helper/list.do';
        	var inDs   = 'dsParam=dsParam'  ; // "dsParam=dsParam";  // + dsParam.id;
        	var outDs  = 'dsList=dsList'    ;
        	var arg    = '';

        	// Paging
        	/*if( page == 0 || page == undefined ) {
        		this.$p.pgDv.uPage    = 1 ;
        		this.$p.pgDv.uPageNum = 0 ;
        		this.dsParam.setColumn(0, 'startNum', this.$p.pgDv.uPageNum);
        		this.dsParam.setColumn(0, 'rowCount', this.$p.pgSz.value   );
        	}*/
        	this.$page.preSearch(page);

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
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){
        	trace("this.cfn_formInit");

        	this.$p.grid.uSortFlag     = "true";
        	this.$p.grid.uCellSizeType = "true";
        	this.$p.div .uPageNum      = this.$p.dflt.startNum;
        	this.$p.div .uPageRowCnt   = this.$p.dflt.rowCount;
        }

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.srchFlds=[ 'oprUnitIds', 'oprUnitNms', 'csChrPsnIds', 'csChrPsnNms', 'caddrDispNms', 'caddrSprCd', 'useYn' ];
        this.srchReset=function() {
        	for(var i in this.srchFlds) {
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
        	var coCd=this.getSession().coCd, p={ coCd: coCd };  //trace(JSON.stringify( p ));
        	this.$popup(this).mOprtr(p, function(p, r) {
        		trace(r);
        		if (r==undefined) { return; }
        		var row=JSON.parse(r);

        		this.dsParam.setColumn(0, 'csChrPsnIds', row.OPRTR_ID);
        		this.dsParam.setColumn(0, 'csChrPsnNms', row.OPRTR_NM);
        	});
        };

        this.cboPageSize_onitemchanged = function(obj,e) {
        	this.fnSearch();
        };

        this.divSrch_btnSrch_onclick = function(obj,e) {
        	if (e.ctrlkey) { alert(nexacro.getApplication().gds_userInfo.saveXML()); }

        	this.fnSearch();
        };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.divSrch.form.Static02.addEventHandler("onclick",this.Div00_Static02_onclick,this);
            this.divSrch.form.btn_oprMultiText.addEventHandler("onclick",this.multipleTextBtn_onclick,this);
            this.divSrch.form.btn_oprMulti.addEventHandler("onclick",this.divSrch_btn_oprMulti_onclick,this);
            this.divSrch.form.btn_oprMultiText00.addEventHandler("onclick",this.multipleTextBtn_onclick,this);
            this.divSrch.form.btnOprtr.addEventHandler("onclick",this.divSrch_btnOprtr_onclick,this);
            this.divSrch.form.btnSrch.addEventHandler("onclick",this.divSrch_btnSrch_onclick,this);
            this.divSrch.form.btnReset.addEventHandler("onclick",this.divSrch_btnReset_onclick,this);
            this.cboPageSize.addEventHandler("onitemchanged",this.cboPageSize_onitemchanged,this);
        };
        this.loadIncludeScript("SSP_BO_CN_06.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
