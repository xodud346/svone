(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form1");
            this.set_titletext("예산 계정/부서 설정(일반)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1130,730);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_PERD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_YY\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_APLY_PERD_CD_1\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_APLY_PERD_CD_2\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_REG_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_TP_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bgtPerdSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">1</Col><Col id=\"NM\">월별</Col></Row><Row><Col id=\"CD\">2</Col><Col id=\"NM\">분기별</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_month1", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_month2", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qrtBgtUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"QRT_BGT_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_OVER_AGD_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_YY\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_PERD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_APLY_PERD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_APLY_PERD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"CUR_BGT_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_BGT_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_REG_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_RSN_HST\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_ODR_AMT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","18","16","155","37",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("예산설정");
            obj.set_font("bold 14pt \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","20","56",null,"84","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","-1","7","300","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("| 조회");
            obj.set_cssclass("sta_WF_title02");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03","20","36",null,"32","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","0","36","110","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("선택계정");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","395","36","110","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04_00","675","36","110","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("예산기간");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Radio("rdo_bgtPerdSprCd","523","42","120","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_columncount("2");
            obj.set_innerdataset("ds_bgtPerdSprCd");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            obj.set_value("1");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_year","790","40","100","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_year");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            obj.set_text("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_month1","904","40","80","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_month1");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            obj.set_text("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_month2","1000","40","80","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_month2");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            obj.set_text("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01","988","44","1.47%","14",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edtAcctId","117","40","263","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","200",null,"450","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_list");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"200\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"부서ID\"/><Cell col=\"1\" text=\"부서명\"/><Cell col=\"2\" text=\"예산 년/월\"/><Cell col=\"3\" text=\"예산 설정액\"/><Cell col=\"4\" text=\"주문가능액\"/><Cell col=\"5\" text=\"원 예산\"/><Cell col=\"6\" text=\"사유\"/><Cell col=\"7\" text=\"기존 사유\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_ID\" displaytype=\"normal\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:DEPT_NM\" textAlign=\"left\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:BGT_APLY_PERD_NM\"/><Cell col=\"3\" displaytype=\"maskeditcontrol\" edittype=\"mask\" textAlign=\"right\" text=\"bind:BGT_AMT\" maskeditformat=\"###,###,###,###,##0\" maskeditlimitbymask=\"both\"/><Cell col=\"4\" text=\"bind:CUR_BGT_AMT\" textAlign=\"right\" displaytype=\"expr:CUR_BGT_AMT==&apos;-&apos; ? &apos;normal&apos; : &apos;number&apos;\"/><Cell col=\"5\" displaytype=\"expr:ORG_BGT_AMT==&apos;-&apos; ? &apos;normal&apos; : &apos;number&apos;\" textAlign=\"right\" text=\"bind:ORG_BGT_AMT\"/><Cell col=\"6\" displaytype=\"editcontrol\" edittype=\"text\" text=\"bind:CHG_RSN\"/><Cell col=\"7\" text=\"bind:CHG_RSN_HST\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00_00","20","164","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("| 목록");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","463","665","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","528","665","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"132","60","30","83",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_reset");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"132","60","30","19",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1130,730,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.rdo_bgtPerdSprCd","value","ds_search","BGT_PERD_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cbo_year","value","ds_search","BGT_YY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cbo_month1","value","ds_search","BGT_APLY_PERD_CD_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.cbo_month2","value","ds_search","BGT_APLY_PERD_CD_2");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MA_83.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_MA_83.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.today = "";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e){
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	this.copyPaste.addGrid(this.grd_list, this, false); //그리드 붙여넣기 기능

        	// 단축키 등록
        	this.fn_regShortCutMethod();
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_searchQrtBgtUseYn = function (bInit){
        	var sSvcId = "searchQrtBgtUseYn";
        	var sUrl = "/bo/cust/bgt/ssp_bo_ma_84/selectQrtBgtUseYn.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_qrtBgtUseYn=ds_qrtBgtUseYn";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        this.fn_search = function (bInit){
        	var sSvcId = "search";
        	var sUrl = "/bo/cust/bgt/ssp_bo_ma_83/select-bgt-dept-dtl-mapp-list-by-acct.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_list=ds_list";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        this.fn_save = function (bInit){
        	var sSvcId = "save";
        	var sUrl = "/bo/cust/bgt/ssp_bo_ma_84/save-bgt-dept-dtl.do";
        	var inDs = "ds_list=ds_list:U";
        	var outDs = "";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };


        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(errorCode == -1) {
        		alert(this.fn_getMessage("ERRC000058")); //오류가 발생했습니다.
        	}
        	else {
        		if(svcID == "searchQrtBgtUseYn") { //운영단위 제어권한 분기예산사용여부 조회
        			this.fn_resetSearch();
        		}
        		else if(svcID == "search"){

        		}
        		else if(svcID == "save"){
        			alert(this.fn_getMessage("ERRC000081")); //저장되었습니다.
        			this.fn_search();
        		}
        	}
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){
        	this.ds_search.setColumn(0,"CO_CD",this.parent.CO_CD);
        	this.ds_search.setColumn(0,"BZPLC_ID",this.parent.BZPLC_ID);
        	this.ds_search.setColumn(0,"OPR_UNIT_ID",this.parent.OPR_UNIT_ID);
        	this.ds_search.setColumn(0,"ACCT_ID",this.parent.ACCT_ID);
        	this.ds_search.setColumn(0,"ACCT_NM",this.parent.ACCT_NM);
        	this.ds_search.setColumn(0,"BGT_REG_SPR_CD", "20"); //예산등록구분코드(10:계정별, 20:부서별)
        	this.ds_search.setColumn(0,"ACCT_TP_CD", "1"); //계정유형코드(1:일반, 2:공통)

        	this.div_search.form.edtAcctId.set_value(this.ds_search.getColumn(0,"ACCT_ID") + " | " + this.ds_search.getColumn(0,"ACCT_NM"));

        	//예산기간 년도 데이터셋 설정
        	this.today = this.gfn_getDate();
        	var year = Number(this.gfn_left(this.today,4));
        	var nRow = this.ds_year.addRow();
        	this.ds_year.setColumn(nRow, "CD", year);
        	this.ds_year.setColumn(nRow, "NM", year);
        	nRow = this.ds_year.addRow();
        	this.ds_year.setColumn(nRow, "CD", year+1);
        	this.ds_year.setColumn(nRow, "NM", year+1);

        	//운영단위 제어권한 분기예산사용여부 조회
        	this.fn_searchQrtBgtUseYn();
        };
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.fn_resetSearch = function() {
        	this.div_search.form.cbo_year.set_index(0); //년도콤보 첫행 표시

        	if(this.ds_qrtBgtUseYn.getColumn(0,"QRT_BGT_USE_YN") == "Y") this.div_search.form.rdo_bgtPerdSprCd.set_index(1); //분기별
        	else this.div_search.form.rdo_bgtPerdSprCd.set_index(0); //월별

        	//예산기간 월 설정
        	this.setMonthCombo(this.ds_search.getColumn(0,"BGT_PERD_SPR_CD"));
        }

        this.setMonthCombo = function(cd) {
        	var month = this.today.substr(4,2);
        	this.ds_month1.clearData();
        	this.ds_month2.clearData();

        	if(cd == "1") { //월별
        		for(var i=1; i<=12; i++) {
        			var nRow = this.ds_month1.addRow();
        			this.ds_month1.setColumn(nRow, "CD", i.toString().padLeft(2, '0'));
        			this.ds_month1.setColumn(nRow, "NM", i + "월");
        			nRow = this.ds_month2.addRow();
        			this.ds_month2.setColumn(nRow, "CD", i.toString().padLeft(2, '0'));
        			this.ds_month2.setColumn(nRow, "NM", i + "월");
        		}

        		this.div_search.form.cbo_month1.set_value(month);
        	}
        	else if(cd == "2") { //분기별
        		for(var i=1; i<=4; i++) {
        			var nRow = this.ds_month1.addRow();
        			this.ds_month1.setColumn(nRow, "CD", (20+i).toString());
        			this.ds_month1.setColumn(nRow, "NM", i + "분기");
        			nRow = this.ds_month2.addRow();
        			this.ds_month2.setColumn(nRow, "CD", (20+i).toString());
        			this.ds_month2.setColumn(nRow, "NM", i + "분기");
        		}

        		if(month >= 1 && month <= 3) this.div_search.form.cbo_month1.set_value("21"); //1분기
        		else if(month >= 4 && month <= 6) this.div_search.form.cbo_month1.set_value("22"); //2분기
        		else if(month >= 7 && month <= 9) this.div_search.form.cbo_month1.set_value("23"); //3분기
        		else if(month >= 10 && month <= 12) this.div_search.form.cbo_month1.set_value("24"); //4분기
        	}

        	this.div_search.form.cbo_month2.set_index(this.div_search.form.cbo_month2.getCount()-1); //마지막 선택옵션 설정
        };

        this.fn_validatePeriod = function(cboId, prevIdx) {
        	var month = this.today.substr(4,2);

        	if(this.ds_search.getColumn(0,"BGT_PERD_SPR_CD") == "1") { //월별
        		if(cboId == "cbo_month1") {
        			if(month > this.ds_search.getColumn(0,"BGT_APLY_PERD_CD_1")) {
        				alert(this.fn_getMessage("ERRC000021")); //과거기간을 선택할 수 없습니다.
        				this.div_search.form.cbo_month1.set_index(prevIdx);
        				return;
        			}
        		}
        		else if(cboId == "cbo_month2") {
        			if(month > this.ds_search.getColumn(0,"BGT_APLY_PERD_CD_2")) {
        				alert(this.fn_getMessage("ERRC000021")); //과거기간을 선택할 수 없습니다.
        				this.div_search.form.cbo_month2.set_index(prevIdx);
        				return;
        			}
        		}
        	}
        	else if(this.ds_search.getColumn(0,"BGT_PERD_SPR_CD") == "2") { //분기별
        		if(cboId == "cbo_month1") {
        			if(month >= 4 && month <= 6) { //2분기
        				if(this.ds_search.getColumn(0,"BGT_APLY_PERD_CD_1") == "21") {
        					alert(this.fn_getMessage("ERRC000021")); //과거기간을 선택할 수 없습니다.
        					this.div_search.form.cbo_month1.set_index(prevIdx);
        					return;
        				}
        			}
        			else if(month >= 7 && month <= 9) { //3분기
        				if(this.ds_search.getColumn(0,"BGT_APLY_PERD_CD_1") <= "22") {
        					alert(this.fn_getMessage("ERRC000021")); //과거기간을 선택할 수 없습니다.
        					this.div_search.form.cbo_month1.set_index(prevIdx);
        					return;
        				}
        			}
        			else if(month >= 10 && month <= 12) { //4분기
        				if(this.ds_search.getColumn(0,"BGT_APLY_PERD_CD_1") <= "23") {
        					alert(this.fn_getMessage("ERRC000021")); //과거기간을 선택할 수 없습니다.
        					this.div_search.form.cbo_month1.set_index(prevIdx);
        					return;
        				}
        			}
        		}
        		else if(cboId == "cbo_month2") {
        			if(month >= 4 && month <= 6) { //2분기
        				if(this.ds_search.getColumn(0,"BGT_APLY_PERD_CD_2") == "21") {
        					alert(this.fn_getMessage("ERRC000021")); //과거기간을 선택할 수 없습니다.
        					this.div_search.form.cbo_month2.set_index(prevIdx);
        					return;
        				}
        			}
        			else if(month >= 7 && month <= 9) { //3분기
        				if(this.ds_search.getColumn(0,"BGT_APLY_PERD_CD_2") <= "22") {
        					alert(this.fn_getMessage("ERRC000021")); //과거기간을 선택할 수 없습니다.
        					this.div_search.form.cbo_month2.set_index(prevIdx);
        					return;
        				}
        			}
        			else if(month >= 10 && month <= 12) { //4분기
        				if(this.ds_search.getColumn(0,"BGT_APLY_PERD_CD_2") <= "23") {
        					alert(this.fn_getMessage("ERRC000021")); //과거기간을 선택할 수 없습니다.
        					this.div_search.form.cbo_month2.set_index(prevIdx);
        					return;
        				}
        			}
        		}
        	}
        };

        // 창닫기
        this.fn_closeForm = function() {
        	this.close();
        };

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodENTER("btn_search_onclick");
        	this.fn_regMethodESC("fn_closeForm");
        };
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        this.rdo_bgtPerdSprCd_onitemchanged = function(obj,e)
        {
        	if(e.postvalue == "1") { //월별
        		if(this.ds_qrtBgtUseYn.getColumn(0,"QRT_BGT_USE_YN") == "Y") { //운영단위 제어권한 분기예산사용여부
        			this.div_search.form.rdo_bgtPerdSprCd.set_index(1);
        			alert(this.fn_getMessage("ERRC000098")); //해당 운영단위는 월별 예산을 사용할 수 없습니다.
        			return;
        		}
        	}
        	else if(e.postvalue == "2") { //분기별
        		if(this.ds_qrtBgtUseYn.getColumn(0,"QRT_BGT_USE_YN") != "Y") { //운영단위 제어권한 분기예산사용여부
        			this.div_search.form.rdo_bgtPerdSprCd.set_index(0);
        			alert(this.fn_getMessage("ERRC000097")); //해당 운영단위는 분기별 예산을 사용할 수 없습니다.
        			return;
        		}
        	}

        	//예산기간 월 설정
        	this.setMonthCombo(e.postvalue);
        };

        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_search();
        };

        this.btn_cancel_onclick = function(obj,e)
        {
        	if(!confirm(this.fn_getMessage("ERRC000087"))) { //취소하시겠습니까?
        		return;
        	}

        	this.close();
        };

        this.btn_save_onclick = function(obj,e)
        {
        	if(!this.gfn_dsIsUpdated(this.ds_list)) {
        		alert(this.fn_getMessage("COMS000008","입력","예산설정액")); //&1된 &2이(가) 없습니다.
        		return;
        	}

        	for(i=0; i<this.ds_list.getRowCount(); i++) {
        		if(this.ds_list.getRowType(i)=="4" && this.gfn_isNull(this.ds_list.getColumn(i,"BGT_AMT"))) { //수정건중 예산설정액이 공백일때
        			alert(this.fn_getMessage("ERRC000009", "예산설정액")); //을 입력하세요.
        			return;
        		}
        	}

        	if(this.ds_qrtBgtUseYn.getColumn(0,"BGT_OVER_AGD_YN") =='N'){ // 예산 초과 사용유무가 N 일 경우
        		for(i=0; i<this.ds_list.getRowCount(); i++) {
        		 var sumBgtAmt = parseFloat(this.ds_list.getColumn(i,"TOT_ODR_AMT")) + parseFloat(this.ds_list.getColumn(i,"BGT_AMT"));
        			if(this.ds_list.getRowType(i)=="4" && 0 > sumBgtAmt) { //수정건중 예산설정액+ 주문액이 음수 일때
        				alert(this.fn_getMessage("ERRS000484"));
        				return;
        			}
        		}
        	}

        	if(!confirm(this.fn_getMessage("ERRC000080"))) { //저장하시겠습니까?
        		return;
        	}

        	this.fn_save();
        };

        this.btn_reset_onclick = function(obj,e)
        {
        	this.fn_resetSearch();
        };

        this.cbo_month1_onitemchanged = function(obj,e)
        {
        	this.fn_validatePeriod(obj.id, e.preindex);
        };

        this.cbo_month2_onitemchanged = function(obj,e)
        {
        	this.fn_validatePeriod(obj.id, e.preindex);
        };

        this.grd_list_oncellclick = function(obj,e)
        {
        	obj.showEditor(true); //한번 클릭시 그리드텍사스박스에 포커스 줌
        };

        this.form1_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.form1_onkeyup,this);
            this.div_search.form.rdo_bgtPerdSprCd.addEventHandler("onitemchanged",this.rdo_bgtPerdSprCd_onitemchanged,this);
            this.div_search.form.cbo_month1.addEventHandler("onitemchanged",this.cbo_month1_onitemchanged,this);
            this.div_search.form.cbo_month2.addEventHandler("onitemchanged",this.cbo_month2_onitemchanged,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_reset.addEventHandler("onclick",this.btn_reset_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_MA_83.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
