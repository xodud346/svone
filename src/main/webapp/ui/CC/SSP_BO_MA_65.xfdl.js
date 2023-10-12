(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_MA_65");
            this.set_titletext("권한 별 운영 단위 설정 조회 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(820,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBzplcOprunit", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsParam", this);
            obj._setContents("<ColumnInfo><Column id=\"grpId\" type=\"STRING\" size=\"256\"/><Column id=\"corpId\" type=\"STRING\" size=\"256\"/><Column id=\"oprUnitId\" type=\"STRING\" size=\"256\"/><Column id=\"oprUnitINm\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"startNum\" type=\"STRING\" size=\"256\"/><Column id=\"rowCount\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"rowCount\">20</Col><Col id=\"startNum\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAplyBzplcOprunit", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("lblPageInfo","20","30","121","14",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("(총 -건 -/-)");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSrch","20","54",null,"266","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsBzplcOprunit");
            obj.set_autoenter("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"340\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"선택\"/><Cell col=\"1\" text=\"그룹ID\"/><Cell col=\"2\" text=\"법인ID\"/><Cell col=\"3\" text=\"사업장ID\"/><Cell col=\"4\" text=\"운영단위ID\"/><Cell col=\"5\" text=\"운영단위명\"/><Cell row=\"1\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell row=\"1\" col=\"1\" displaytype=\"editcontrol\" edittype=\"text\" editautoselect=\"true\" textAlign=\"left\" verticalAlign=\"middle\" editinputtype=\"full\"/><Cell row=\"1\" col=\"2\" displaytype=\"editcontrol\" edittype=\"text\" editautoselect=\"true\" textAlign=\"left\" verticalAlign=\"middle\"/><Cell row=\"1\" col=\"3\" displaytype=\"editcontrol\" edittype=\"text\" editautoselect=\"true\" textAlign=\"left\" verticalAlign=\"middle\"/><Cell row=\"1\" col=\"4\" displaytype=\"editcontrol\" edittype=\"text\" editautoselect=\"true\" textAlign=\"left\" verticalAlign=\"middle\" text=\"bind:OPR_UNIT_ID\"/><Cell row=\"1\" col=\"5\" displaytype=\"editcontrol\" edittype=\"text\" editautoselect=\"true\" textAlign=\"left\" verticalAlign=\"middle\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" tooltiptext=\"bind:TOT_CUNT\"/><Cell col=\"1\" text=\"bind:GRP_ID\" textAlign=\"center\" tooltiptext=\"bind:GRP_NM\" displaytype=\"expr:currow==0? &apos;editcontrol&apos; : &apos;normal&apos;\" edittype=\"expr:currow==0? &apos;text&apos; : &apos;none&apos;\" editautoselect=\"true\"/><Cell col=\"2\" text=\"bind:CORP_ID\" tooltiptext=\"bind:CORP_NM\" displaytype=\"expr:currow==0? &apos;editcontrol&apos; : &apos;normal&apos;\" edittype=\"expr:currow==0? &apos;text&apos; : &apos;none&apos;\" editautoselect=\"true\"/><Cell col=\"3\" text=\"bind:BZPLC_ID\" tooltiptext=\"bind:BZPLC_NM\" displaytype=\"expr:currow==0? &apos;editcontrol&apos; : &apos;normal&apos;\" edittype=\"expr:currow==0? &apos;text&apos; : &apos;none&apos;\" editautoselect=\"true\"/><Cell col=\"4\" text=\"bind:OPR_UNIT_ID\" tooltiptext=\"bind:OPR_UNIT_ID\" displaytype=\"expr:currow==0? &apos;editcontrol&apos; : &apos;normal&apos;\" edittype=\"expr:currow==0? &apos;text&apos; : &apos;none&apos;\" editautoselect=\"true\"/><Cell col=\"5\" text=\"bind:OPR_UNIT_NM\" tooltiptext=\"bind:OPR_UNIT_NM\" textAlign=\"left\" displaytype=\"expr:currow==0? &apos;editcontrol&apos; : &apos;normal&apos;\" edittype=\"expr:currow==0? &apos;text&apos; : &apos;none&apos;\" editautoselect=\"true\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAply","20","420",null,"210","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("dsAplyBzplcOprunit");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"340\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"선택\"/><Cell col=\"1\" text=\"그룹ID\"/><Cell col=\"2\" text=\"법인ID\"/><Cell col=\"3\" text=\"사업장ID\"/><Cell col=\"4\" text=\"운영단위ID\"/><Cell col=\"5\" text=\"운영단위명\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_ID\"/><Cell col=\"1\" text=\"bind:GRP_ID\" textAlign=\"center\" tooltiptext=\"bind:GRP_NM\"/><Cell col=\"2\" text=\"bind:CORP_ID\" tooltiptext=\"bind:CORP_NM\"/><Cell col=\"3\" text=\"bind:BZPLC_ID\" tooltiptext=\"bind:BZPLC_NM\"/><Cell col=\"4\" text=\"bind:OPR_UNIT_ID\" tooltiptext=\"bind:OPR_UNIT_ID\"/><Cell col=\"5\" text=\"bind:OPR_UNIT_NM\" tooltiptext=\"bind:OPR_UNIT_NM\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSrch",null,"20","80","26","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.addChild(obj.name, obj);

            obj = new Button("btnAply",null,"374","80","28","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btnDele",null,"640","80","28","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btnSele",null,"676","80","28","370",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("선택");
            this.addChild(obj.name, obj);

            obj = new Div("divPaging","20","330",null,"38","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",820,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MA_65.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_65.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_65.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_MA_65.xfdl", function() {
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

        this.oPage = {
            prm: this.dsParam    ,
        	div: this.divPaging  ,
        	siz: this.cmbPageSz  ,
        	inf: this.lblPageInfo,
        	sz : 20,
        };

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e) {
        	this.gfn_formOnLoad(this);  //공통 함수 호출(필수)

        	// 단축키 등록
        	this.fn_regShortCutMethod();
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fnSelectBzplcOprunit=function(page) {
        	trace('this.fnSelectBzplcOprunit()');

        	var sSvc  = 'selectBzplcOprunit';
        	var sUrl  = '/cc/com/bzplc/oprunit.do';
        	var inDs  = 'dsParam=dsParam';
        	var outDs = 'dsBzplcOprunit=dsBzplcOprunit'  ;
        	var arg   = '';

        	var grdDS=this.grdSrch.getBindDataset();
        	if (grdDS!=undefined) {
        		this.dsParam.setColumn(0, 'coCd'     , grdDS.getColumn(0, 'CO_CD'      ));  trace('['+'coCd'     +':'+ grdDS.getColumn(0, 'CO_CD'      ) +']');
        		this.dsParam.setColumn(0, 'grpId'    , grdDS.getColumn(0, 'GRP_ID'     ));  trace('['+'grpId'    +':'+ grdDS.getColumn(0, 'GRP_ID'     ) +']');
        		this.dsParam.setColumn(0, 'corpId'   , grdDS.getColumn(0, 'CORP_ID'    ));  trace('['+'corpId'   +':'+ grdDS.getColumn(0, 'CORP_ID'    ) +']');
        		this.dsParam.setColumn(0, 'bzplcId'  , grdDS.getColumn(0, 'BZPLC_ID'   ));  trace('['+'bzplcId'  +':'+ grdDS.getColumn(0, 'BZPLC_ID'   ) +']');
        		this.dsParam.setColumn(0, 'oprUnitId', grdDS.getColumn(0, 'OPR_UNIT_ID'));  trace('['+'oprUnitId'+':'+ grdDS.getColumn(0, 'OPR_UNIT_ID') +']');
        		this.dsParam.setColumn(0, 'oprUnitNm', grdDS.getColumn(0, 'OPR_UNIT_NM'));  trace('['+'oprUnitNm'+':'+ grdDS.getColumn(0, 'OPR_UNIT_NM') +']');
        	}

        	if (page==0 || page==undefined) {
        		this.oPage.div.uPage    = 1 ;
        		this.oPage.div.uPageNum = 0 ;
        		this.dsParam.setColumn(0, 'startNum', this.oPage.div.uPageNum);
        		this.dsParam.setColumn(0, 'rowCount', this.oPage.sz          );  // this.oPage.siz.value
        	}

        	trace('[sUrl:'+ sUrl +']');
        	this.gfn_transaction(sSvc, sUrl, inDs, outDs, arg, 'fnSelectBzplcOprunitClbk');
        }



        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        // 공통코드 조회 콜백
        this.fnCcComCodesClbk=function(rCodes, rCode, rMesg) {
        	trace('this.fnCcComCodesClbk() >>' + rCodes);

        	//trace(this.dsComCTL_AUTH_USE_SPR_CD.saveXML());
        	//trace(this.cmbBLNG_DEPT_USE_SPR_CD.getInnerDataset().saveXML());
         	trace('this.fnCcComCodesClbk[ this.dsParam:'+ this.dsParam +']');

         	var props = [ 'coCd', 'bzplcId', 'oprUnitId' ];
         	if (this.cnvtExtnlArgs2Dataset(this.parent, 'dsParam', props) == null) { return; }
        	//this.fnSelectCtlAuthDtl();
        }
        this.fnSelectBzplcOprunitClbk=function(rCodes, rCode, rMesg) {
        	trace('this.fnSelectBzplcOprunitClbk() >>' + rCodes);

        	// Page
        	var totCunt = this.dsBzplcOprunit.getColumn(this.dsBzplcOprunit.rowcount-1, 'TOT_CUNT');   trace('[totCunt:'+ totCunt +']');
        	this.oPage.div.uTotCunt = totCunt == undefined ? 0 : totCunt;  //this.uPaging.uTotCount = this.dsBzplc.getColumn(0, "TOT_CUNT");

        	this.oPage.div.form.cfn_createPage(this.oPage.div, this.oPage.div.uTotCunt, this.oPage.sz, 'fnPageClbk');  // this.oPage.siz.value, 'fnPageClbk');
        }
        // Page Callback
        this.fnPageClbk = function(flg){
        	trace("<flg:"+ flg +"/>");

        	if (flg) {
        		this.dsParam.setColumn(0, 'startNum', this.oPage.div.uPageNum);
        		this.dsParam.setColumn(0, 'rowCount', this.oPage.sz          );  // this.uPageSz.value   );

        		this.fnSelectBzplcOprunit(this.oPage.div.uPageNum);
        	}

        	this.oPage.inf.set_text("(총 "+ this.oPage.div.uTotCunt +"건, "+ this.oPage.div.uPage +" / "+ this.oPage.div.uPageCnt +")");
        }

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function() {
        	//trace('this.cfn_formInit() > [refCdGrpNm:'+ this.parent['refCdGrpNm'] +']');

        	var sess = this.getSession();
        	trace(JSON.stringify( sess ));

        	// Bind - Grid Header Column ParamSet
        	this.grdSrch.setCellProperty('head',  7, 'text', this.dsParam.getColumn(0, 'grpId'    ));
        	this.grdSrch.setCellProperty('head',  8, 'text', this.dsParam.getColumn(0, 'corpId'   ));
        	this.grdSrch.setCellProperty('head',  9, 'text', this.dsParam.getColumn(0, 'bzplcId'  ));
        	this.grdSrch.setCellProperty('head', 10, 'text', this.dsParam.getColumn(0, 'oprUnitId'));
        	this.grdSrch.setCellProperty('head', 11, 'text', this.dsParam.getColumn(0, 'oprUnitNm'));

        	if ( this.parent != undefined ) {
        		this.cnvtObject2Dataset('dsParam', {
        			  coCd     : this.parent['coCd'     ]
        			, grpId    : this.parent['grpId'    ]
        			, corpId   : this.parent['corpId'   ]
        			, bzplcId  : this.parent['bzplcId'  ]
        			, oprUnitId: this.parent['oprUnitId']
        			, oprUnitNm: this.parent['oprUnitNm']
        			, startNum : 0
        			, rowCount : 20
        		});
        		this.fnSelectBzplcOprunit();
        	}

        };

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.testCtlAuth=function() {
        	this.cnvtObject2Dataset('dsParam', { coCd: '1000', bzplcId: 'S000013507', oprUnitId: 'S000013644' });
        	this.fnSelectCtlAuthDtl();
        }

        this.fnCopyDataRow=function(dsSrce, dsTrgt) {
        	var fndCol='OPR_UNIT_ID', fndVal= dsSrce.getColumn(dsSrce.rowposition, fndCol), fndRix=dsTrgt.findRow(fndCol, fndVal);
        	if (fndRix > -1) { return; }

        	dsTrgt.set_enableevent(false);
        	var tRix=dsTrgt.addRow();  trace('[tRix:'+ tRix +']');
        	dsTrgt.copyRow(tRix, dsSrce, dsSrce.rowposition);
        	dsTrgt.set_enableevent(true);
        }

        // 창닫기
        this.fn_closeForm = function() {
        	this.close();
        };

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodENTER("btnSrch_onclick");
        	this.fn_regMethodESC("fn_closeForm");
        	this.fn_regMethodShiftENTER("btnSele_onclick");
        };
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        this.btnSrch_onclick = function(obj,e)
        {
        	this.fnSelectBzplcOprunit();
        };

        this.grdSrch_oncelldblclick = function(obj,e)
        {
        	trace('[e.row:'+ e.row +']');
        	if (e.row == 0) { return; }
        	this.fnCopyDataRow(obj.getBindDataset(), this.grdAply.getBindDataset());
        };

        this.btnDele_onclick = function(obj,e)
        {
        	var tDS=this.grdAply.getBindDataset();
        	tDS.deleteRow(tDS.rowposition!=undefined?tDS.rowposition:0);
        };

        this.btnSele_onclick = function(obj,e) {
        	var tDS=this.grdAply.getBindDataset(), r={ textName: null, textValue: null, rows: [] };

        	for (var i=0; i < tDS.rowcount; i++) {
        		r.textName  += (r.textName==null?'':',') + tDS.getColumn(i, 'OPR_UNIT_NM');
        		r.textValue += (r.textName==null?'':',') + tDS.getColumn(i, 'OPR_UNIT_ID');

        		r.rows.push({
        			  coCd     : tDS.getColumn(i, 'CO_CD'      )
        			, grpId    : tDS.getColumn(i, 'GRP_ID'     )
        			, corpId   : tDS.getColumn(i, 'CORP_ID'    )
        			, bzplcId  : tDS.getColumn(i, 'BZPLC_ID'   )
        			, oprUnitId: tDS.getColumn(i, 'OPR_UNIT_ID')
        			, oprUnitNm: tDS.getColumn(i, 'OPR_UNIT_NM')
        		});
        	}

        	this.close(JSON.stringify( r ));
        };

        this.SSP_BO_MA_65_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.SSP_BO_MA_65_onkeyup,this);
            this.grdSrch.addEventHandler("oncelldblclick",this.grdSrch_oncelldblclick,this);
            this.grdAply.addEventHandler("oncellclick",this.grdBydeptGi_oncellclick,this);
            this.btnSrch.addEventHandler("onclick",this.btnSrch_onclick,this);
            this.btnDele.addEventHandler("onclick",this.btnDele_onclick,this);
            this.btnSele.addEventHandler("onclick",this.btnSele_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_MA_65.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
