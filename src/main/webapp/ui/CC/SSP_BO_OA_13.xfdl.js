(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_OA_13");
            this.set_titletext("고객사 참조코드 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(540,540);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsParam", this);
            obj._setContents("<ColumnInfo><Column id=\"cdCd\" type=\"STRING\" size=\"256\"/><Column id=\"bzplcId\" type=\"STRING\" size=\"256\"/><Column id=\"oprUnitId\" type=\"STRING\" size=\"256\"/><Column id=\"deptId\" type=\"STRING\" size=\"256\"/><Column id=\"startNum\" type=\"STRING\" size=\"256\"/><Column id=\"rowCount\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRefCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("lblRefCdNm","20","8","155","37",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("고객사 참조코드");
            obj.set_font("bold 14pt \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00","20","44","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("상세관리 코드ID");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_01","140","44",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRefCdDtlId","150","49","370","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_00","20","74","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("상세코드");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00","140","74",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRefCdDtlId00","150","79","370","21",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_00_00","20","105","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("상세코드명");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00_00","140","105",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRefCdDtlId00_00","150","110","370","21",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_00_00_00","20","136","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("관리코드명");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00_00_00","140","136",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRefCdDtlId00_00_00","150","141","370","21",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Button("btnSrch","441","173",null,"24","20",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Button("btnReset4Opru","345","173",null,"24","btnSrch:6",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("초기화");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdRslt","20","242",null,"220","20",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_autofittype("col");
            obj.set_binddataset("dsRefCd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"상세 관리 코드 ID\"/><Cell col=\"1\" text=\"상세 코드\"/><Cell col=\"2\" text=\"상세 코드명\"/><Cell col=\"3\" text=\"관리 코드명\"/></Band><Band id=\"body\"><Cell text=\"bind:REF_CD_SEQ\"/><Cell col=\"1\" text=\"bind:REF_CD\"/><Cell col=\"2\" text=\"bind:REF_CD_NM\"/><Cell col=\"3\" text=\"bind:REF_CD_GRP_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divPaging","10","462",null,"30","10",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("lblPageInfo","20","212","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("(총 0건 1/1)");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbPageSz","440","212",null,"24","20",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_codecolumn("cd");
            obj.set_datacolumn("nm");
            var cmbPageSz_innerdataset = new nexacro.NormalDataset("cmbPageSz_innerdataset", obj);
            cmbPageSz_innerdataset._setContents("<ColumnInfo><Column id=\"cd\" size=\"256\"/><Column id=\"nm\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cd\">2</Col><Col id=\"nm\">2개씩</Col></Row><Row><Col id=\"cd\">20</Col><Col id=\"nm\">20개씩</Col></Row><Row><Col id=\"cd\">50</Col><Col id=\"nm\">50개씩</Col></Row><Row><Col id=\"cd\">100</Col><Col id=\"nm\">100개씩</Col></Row></Rows>");
            obj.set_innerdataset(cmbPageSz_innerdataset);
            obj.set_text("20개씩");
            obj.set_value("20");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnTstO","18","178","87","27",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("테스트 OPU");
            this.addChild(obj.name, obj);

            obj = new Button("btnTstD","113","178","87","27",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("테스트 DEP");
            this.addChild(obj.name, obj);

            obj = new Button("btnSele",null,"502","80","28","230",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("선택");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",540,540,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cmbPageSz","value","dsParam","rowCount");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_OA_13.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_OA_13.xfdl","CC::CcUtils.xjs");
        this.registerScript("SSP_BO_OA_13.xfdl", function() {
        /*******************************************************
          PROJECT NAME : SSP
          CREATION DATES :
        *******************************************************/

        // 공통형 스크립트 인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object
        this.page= {
        	  lbl: this.lblPageInfo
        	, siz: this.cmbPageSz
        	, div: this.divPaging
        	, dst: this.dsRefCd
        };
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e) {
        	this.gfn_formOnLoad(this);  //공통 함수 호출(필수)

        	this.newDsParam();
        	this.cmbPageSz.set_value(20);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fnRefCdDtl=function(sPage) {
        	trace("<sPage:"+ sPage +"/>");

        	var sSvc  = 'refCdDtl';
        	var sUrl  = '/bo/cust/oprunit/ref-cd/list.do';
        	var inDs  = 'dsParam=dsParam'; // 'dsParams=dsParams';  // + dsParams.id;
        	var outDs = 'dsRefCd=dsRefCd'  ;
        	var arg   = '';

        	// Paging
        	var pg = this.page;
        	pg.siz.value = pg.siz.value == undefined ? 20 : pg.siz.value;
        	if( sPage == 0 || sPage == undefined ) {
        		pg.div.uPage    = 1 ;
        		pg.div.uPageNum = 0 ;
        		this.dsParam.setColumn(0, "startNum", pg.div.uPageNum);
        		this.dsParam.setColumn(0, "rowCount", pg.siz.value   );
        	}

        	trace('this.fnRefCdDtl[sPage:'+ sPage +'][dsParam.startNum:'+ this.dsParam.getColumn(0, 'startNum') +'][dsParam.rowCount:'+ this.dsParam.getColumn(0, 'rowCount') +']');
        	this.gfn_transaction(sSvc, sUrl, inDs, outDs, arg, 'fnRefCdDtlClbk');
        }

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fnRefCdDtlClbk=function(rCodes, rCode, rMesg) {
        	var pg = this.page, totCunt = pg.dst.getColumn(0, 'TOT_CUNT');
        	pg.div.uTotCunt = totCunt == undefined ? 0 : totCunt;  //this.uPaging.uTotCount = this.dsBzplc.getColumn(0, "TOT_CUNT");

        	pg.div.form.cfn_createPage(pg.div, pg.div.uTotCunt, pg.siz.value, 'fnPageClbk');
        }

        this.fnPageClbk= function(flg) {
        	var pg = this.page;

        	if (flg) {
        		pg.div.uPage    = 1 ;
        		pg.div.uPageNum = 0 ;
        		this.dsParam.setColumn(0, 'startNum', pg.div.uPageNum);
        		this.dsParam.setColumn(0, 'rowCount', pg.siz.value   );

        		this.fnRefCdDtl(pg.div.uPageNum);
        	}

        	pg.lbl.set_text("(총 "+ pg.div.uTotCunt +"건, "+ pg.div.uPage +" / "+ pg.div.uPageCnt +")");
        }

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/


        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.newDsParam=function(dsId, oPrm) {
        	dsId = dsId == undefined ? 'dsParam' : dsId;

        	var prop=[ 'coCd', 'bzplcId', 'oprUnitId', 'deptId', 'startNum', 'rowCount' ];
        	var ds=new Dataset(dsId);
        	for (var i in prop) {
        		ds.addColumn(prop[i], 'String');
        	}

        	var rIx=ds.addRow();
        	if (oPrm != undefined) {
        		var props = Object.keys(oPrm);
        		for (var i in props) {
        			var k=props[i], v=oPrm[k];
        			ds.setColumn(rIx, k,  v);
        		}
        	}
        	ds.setColumn(rIx, 'startNum',  0);
        	ds.setColumn(rIx, 'rowCount', 20);

        	this[dsId]=ds;
        	return ds;
        }

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        this.btnSrch_onclick = function(obj,e) {
        	this.fnRefCdDtl();
        };

        this.btnTstO_onclick = function(obj,e)
        {
        	this.newDsParam('dsParam', { coCd: '1000', bzplcId: 'S000000001', oprUnitId: 'S000006713' });
        	this.fnRefCdDtl();
        };

        this.btnTstD_onclick = function(obj,e)
        {
        	this.newDsParam('dsParam', { coCd: '1000', bzplcId: 'S000000001', oprUnitId: 'S000006713', deptId: 'D000297053' });
        	this.fnRefCdDtl();
        };

        this.btnSele_onclick = function(obj,e)
        {
        	var seleRow=this.fnDatasetRow2Object(this.dsRefCdDtl);
        	if (seleRow==undefined) { alert('선택된 항목이 없습니다.'); return; }

        	// trace('[rown:'+ seleRow.rown +']<seleRow: '+JSON.stringify( seleRow )+' />');
        	this.close(seleRow);
        };


        this.SSP_BO_OA_13_onkeyup = function(obj,e)
        {
        	//ESC : 닫기기능
        	if(e.keycode == 27){
        		this.close();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.SSP_BO_OA_13_onkeyup,this);
            this.btnSrch.addEventHandler("onclick",this.btnSrch_onclick,this);
            this.btnReset4Opru.addEventHandler("onclick",this.divSrch_btnInitSrchForm_onclick,this);
            this.btnTstO.addEventHandler("onclick",this.btnTstO_onclick,this);
            this.btnTstD.addEventHandler("onclick",this.btnTstD_onclick,this);
            this.btnSele.addEventHandler("onclick",this.btnSele_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_OA_13.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
