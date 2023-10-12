(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BA_CO_05");
            this.set_titletext("배치프로그램 실행이력 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"thmeDomnCd\" type=\"STRING\" size=\"256\"/><Column id=\"batServerSeq\" type=\"INT\" size=\"256\"/><Column id=\"serverNm\" type=\"STRING\" size=\"256\"/><Column id=\"ipAddr\" type=\"STRING\" size=\"256\"/><Column id=\"batPgmId\" type=\"STRING\" size=\"256\"/><Column id=\"batPgmNm\" type=\"STRING\" size=\"256\"/><Column id=\"batStat\" type=\"STRING\" size=\"256\"/><Column id=\"rsrvSprCd\" type=\"STRING\" size=\"256\"/><Column id=\"rsrvSch\" type=\"STRING\" size=\"256\"/><Column id=\"strDtm\" type=\"STRING\" size=\"256\"/><Column id=\"endDtm\" type=\"STRING\" size=\"256\"/><Column id=\"exceStatsCd\" type=\"STRING\" size=\"256\"/><Column id=\"nxtEndDtm\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"nxtStartDtm\" type=\"STRING\" size=\"256\"/><Column id=\"logLvl\" type=\"STRING\" size=\"256\"/><Column id=\"startNum\" type=\"STRING\" size=\"256\"/><Column id=\"rowCount\" type=\"STRING\" size=\"256\"/><Column id=\"sortColumn\" type=\"STRING\" size=\"256\"/><Column id=\"sortType\" type=\"STRING\" size=\"256\"/><Column id=\"batPgmSeq\" type=\"INT\" size=\"256\"/><Column id=\"classMethodNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"thmeDomnCd\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"strDtm\" type=\"DATE\" size=\"256\"/><Column id=\"endDtm\" type=\"DATE\" size=\"256\"/><Column id=\"batServerSeq\" type=\"INT\" size=\"256\"/><Column id=\"serverNm\" type=\"STRING\" size=\"256\"/><Column id=\"batPgmId\" type=\"STRING\" size=\"256\"/><Column id=\"classMethodNm\" type=\"STRING\" size=\"256\"/><Column id=\"batStat\" type=\"STRING\" size=\"256\"/><Column id=\"batPgmNm\" type=\"STRING\" size=\"256\"/><Column id=\"tgtCnt\" type=\"INT\" size=\"256\"/><Column id=\"logLvl\" type=\"STRING\" size=\"256\"/><Column id=\"msg\" type=\"STRING\" size=\"256\"/><Column id=\"errorDtls\" type=\"STRING\" size=\"256\"/><Column id=\"exceStatsCd\" type=\"STRING\" size=\"256\"/><Column id=\"exceStatsCdTxt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_thmeDomnCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_batSvrType", this);
            obj._setContents("<ColumnInfo><Column id=\"batServerSeq\" type=\"STRING\" size=\"256\"/><Column id=\"serverNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inqPerdSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inqPerdSprCd2", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_exceStatsCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_batPgmType", this);
            obj._setContents("<ColumnInfo><Column id=\"batPgmSeq\" type=\"INT\" size=\"256\"/><Column id=\"serverNm\" type=\"STRING\" size=\"256\"/><Column id=\"batPgmId\" type=\"STRING\" size=\"256\"/><Column id=\"batPgmNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search3", this);
            obj._setContents("<ColumnInfo><Column id=\"nxtEndDtm\" type=\"STRING\" size=\"256\"/><Column id=\"nxtStartDtm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search2", this);
            obj._setContents("<ColumnInfo><Column id=\"thmeDomnCd\" type=\"STRING\" size=\"256\"/><Column id=\"batServerSeq\" type=\"INT\" size=\"256\"/><Column id=\"serverNm\" type=\"STRING\" size=\"256\"/><Column id=\"ipAddr\" type=\"STRING\" size=\"256\"/><Column id=\"batPgmId\" type=\"STRING\" size=\"256\"/><Column id=\"batPgmNm\" type=\"STRING\" size=\"256\"/><Column id=\"batStat\" type=\"STRING\" size=\"256\"/><Column id=\"rsrvSprCd\" type=\"STRING\" size=\"256\"/><Column id=\"rsrvSch\" type=\"STRING\" size=\"256\"/><Column id=\"strDtm\" type=\"STRING\" size=\"256\"/><Column id=\"endDtm\" type=\"STRING\" size=\"256\"/><Column id=\"exceStatsCd\" type=\"STRING\" size=\"256\"/><Column id=\"nxtEndDtm\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"nxtStartDtm\" type=\"STRING\" size=\"256\"/><Column id=\"logLvl\" type=\"STRING\" size=\"256\"/><Column id=\"startNum\" type=\"STRING\" size=\"256\"/><Column id=\"rowCount\" type=\"STRING\" size=\"256\"/><Column id=\"sortColumn\" type=\"STRING\" size=\"256\"/><Column id=\"sort_Type\" type=\"STRING\" size=\"256\"/><Column id=\"batPgmSeq\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"thmeDomnCd\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,"165","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","20",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static65","20","51",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","20","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("주제영역");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","622","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("배치프로그램");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10","20","51","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("실행일시");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static66","622","51","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("실행상태");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo50","159","-93","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo51","1021","-93","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"124","60","28","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"124","60","28","84",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("초기화");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static65_00","20","82",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static66_00","622","82","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10_01","20","82","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("클래스_메소드명");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_exceStatsCd","762","55","130","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_innerdataset("ds_exceStatsCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_startDtm","160","55","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_enable("true");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static59","305","55","9","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("~");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_endDtm","317","55","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_thmeDomnCd","160","24","130","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_innerdataset("ds_thmeDomnCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","314","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_text("실행서버");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_batSvrType","451","24","130","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_innerdataset("ds_batSvrType");
            obj.set_codecolumn("batServerSeq");
            obj.set_datacolumn("serverNm");
            obj.set_text("");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_inqPerdSprCd","460","55","100","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_innerdataset("ds_inqPerdSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_batPgmType","762","24","330","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_batPgmType");
            obj.set_codecolumn("batPgmSeq");
            obj.set_datacolumn("batPgmNm");
            obj.set_text("");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_classMethodNm","160","86","200","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_enable("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_exceldown",null,"184","110","28","132",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","222",null,null,"20","110",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list");
            obj.set_autosizingtype("col");
            obj.set_autosizebandtype("body");
            obj.set_selecttype("multiarea");
            obj.set_cellmovingtype("col");
            obj.set_nodatatext("조회 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"125\"/><Column size=\"125\"/><Column size=\"90\"/><Column size=\"125\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"시작일시\"/><Cell col=\"1\" text=\"종료일시\"/><Cell col=\"2\" text=\"배치서버\"/><Cell col=\"3\" text=\"배치프로그램 ID\"/><Cell col=\"4\" text=\"클래스_메소드명\"/><Cell col=\"5\" text=\"배치프로그램명\"/><Cell col=\"6\" text=\"상태\"/><Cell col=\"7\" text=\"대상건수\"/><Cell col=\"8\" text=\"성공건수\"/><Cell col=\"9\" text=\"메세지\"/><Cell col=\"10\" text=\"Exception\"/></Band><Band id=\"body\"><Cell calendardateformat=\"yyyy-MM-dd hh:mm:ss\" autosizerow=\"default\" wordWrap=\"char\" calendardisplaynulltype=\"none\" text=\"bind:strDtm\"/><Cell col=\"1\" text=\"bind:endDtm\" autosizerow=\"default\" wordWrap=\"char\"/><Cell col=\"2\" text=\"bind:serverNm\" calendardateformat=\"yyyy-MM-dd hh:mm:ss\" autosizerow=\"default\" wordWrap=\"char\" displaytype=\"normal\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" text=\"bind:batPgmId\" autosizerow=\"default\" wordWrap=\"char\"/><Cell col=\"4\" text=\"bind:classMethodNm\"/><Cell col=\"5\" text=\"bind:batPgmNm\"/><Cell col=\"6\" text=\"bind:exceStatsCdTxt\"/><Cell col=\"7\" text=\"bind:tgtCnt\"/><Cell col=\"8\" text=\"bind:succCnt\"/><Cell col=\"9\" text=\"expr:msg!=null?&apos;상세보기&apos;:&apos;&apos;\" displaytype=\"expr:msg!=null?&apos;buttoncontrol&apos;:&apos;none&apos;\" edittype=\"expr:msg!=null?&apos;button&apos;:&apos;none&apos;\"/><Cell col=\"10\" text=\"expr:errorDtls == null ? &apos;&apos; : errorDtls == &apos;&apos; ? &apos;&apos; : errorDtls == undefined ? &apos;&apos; : &apos;상세보기&apos;\" displaytype=\"expr:errorDtls == null ? &apos;none&apos; : errorDtls == &apos;&apos; ? &apos;none&apos; : errorDtls == undefined ? &apos;none&apos; : &apos;buttoncontrol&apos;\" edittype=\"expr:errorDtls == null ? &apos;none&apos; : errorDtls == &apos;&apos; ? &apos;none&apos; : errorDtls == undefined ? &apos;none&apos; : &apos;buttoncontrol&apos;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","grd_list:30",null,"grd_list:30","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20","197","300","14",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("(총 0건 0 / 0)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_viewCount",null,"184","104","28","22",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_type("dropdown");
            var cmb_viewCount_innerdataset = new nexacro.NormalDataset("cmb_viewCount_innerdataset", obj);
            cmb_viewCount_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20개씩</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50개씩</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100개씩</Col></Row><Row><Col id=\"codecolumn\">500</Col><Col id=\"datacolumn\">500개씩</Col></Row><Row><Col id=\"codecolumn\">1000</Col><Col id=\"datacolumn\">1,000개씩</Col></Row><Row><Col id=\"codecolumn\">5000</Col><Col id=\"datacolumn\">5,000개씩</Col></Row><Row><Col id=\"codecolumn\">10000</Col><Col id=\"datacolumn\">10,000개씩</Col></Row></Rows>");
            obj.set_innerdataset(cmb_viewCount_innerdataset);
            obj.set_text("20개씩");
            obj.set_value("20");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list_excel","20","973",null,null,"20","-224",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list");
            obj.set_autosizingtype("none");
            obj.set_autosizebandtype("body");
            obj.set_selecttype("row");
            obj.set_cellmovingtype("none");
            obj.set_nodatatext("조회 결과가 없습니다.");
            obj.set_visible("false");
            obj.set_cellsizingtype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"125\"/><Column size=\"125\"/><Column size=\"90\"/><Column size=\"125\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"100\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"최근 실행일시(시작)\"/><Cell col=\"1\" text=\"최근 실행일시(종료)\"/><Cell col=\"2\" text=\"배치서버\"/><Cell col=\"3\" text=\"배치프로그램 ID\"/><Cell col=\"4\" text=\"배치프로그램명\"/><Cell col=\"5\" text=\"대상건수\"/><Cell col=\"6\" text=\"로그레벨\"/><Cell col=\"7\" text=\"메세지\"/><Cell col=\"8\" text=\"Exception\"/></Band><Band id=\"body\"><Cell calendardateformat=\"yyyy-MM-dd hh:mm:ss\" autosizerow=\"default\" wordWrap=\"char\" calendardisplaynulltype=\"none\" text=\"bind:strDtm\"/><Cell col=\"1\" text=\"bind:endDtm\" autosizerow=\"default\" wordWrap=\"char\"/><Cell col=\"2\" text=\"bind:serverNm\" calendardateformat=\"yyyy-MM-dd hh:mm:ss\" autosizerow=\"default\" wordWrap=\"char\" displaytype=\"normal\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" text=\"bind:batPgmId\" autosizerow=\"default\" wordWrap=\"char\"/><Cell col=\"4\" text=\"bind:batPgmNm\"/><Cell col=\"5\" text=\"bind:tgtCnt\"/><Cell col=\"6\" text=\"bind:logLvl\"/><Cell col=\"7\" text=\"bind:msg\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"none\" text=\"bind:errorDtls\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.cmb_thmeDomnCd","value","ds_search","thmeDomnCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.cmb_batSvrType","value","ds_search","batServerSeq");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.cal_startDtm","value","ds_search","strDtm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.cal_endDtm","value","ds_search","endDtm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.cmb_exceStatsCd","value","ds_search","exceStatsCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","cmb_batPgmType","value","ds_search","batPgmId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div00.form.cmb_batPgmType","value","ds_search","batPgmSeq");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.edt_classMethodNm","value","ds_search","classMethodNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BA_CO_05.xfdl","CO::coUtils.xjs");
        this.registerScript("SSP_BA_CO_05.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.fv_oApp = nexacro.getApplication();	//application object
        this.oArgs = null;
        this.batPgmSeq = 0;

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();
        this.fn_onLoad = function(obj,e){
        	oArgs = this.getOwnerFrame().arguments["oArgs"];

        	if(oArgs.batPgmSeq > 0 && oArgs.batPgmSeq != null){
        		batPgmSeq = oArgs.batPgmSeq;
        	}

            //공통 함수 호출(필수)
            this.gfn_formOnLoad(this);
            // this.fn_search(true);
        	this.fn_commonCodeSearch();
        	this.Div00.form.cmb_inqPerdSprCd.value = "7";		//기간 설정 1년으로 지정
        	this.fn_setFromToDate(this.Div00.form.cmb_inqPerdSprCd, this.Div00.form.cal_startDtm, this.Div00.form.cal_endDtm);
        	//this.Div00.form.cmb_inqPerdSprCd2.value = "7";		//기간 설정 1년으로 지정
        	//this.fn_setFromToDate(this.Div00.form.cmb_inqPerdSprCd2, this.Div00.form.cal_nxtStartDtm, this.Div00.form.cal_nxtEndDtm);

        	this.fn_batSvrSearch();
        	this.fn_batPgmSearch();
        };

        /*this.fn_onkeyup = function(obj:nexacro.Form,e:nexacro.KeyEventInfo){
            var objType = obj.getFocus();

            if( e.keycode == 13 && objType == "[object Edit]"){
                var value = e.fromobject.value;
                if(this.gfn_lengthByte(this.gfn_allTrim(value)) > 0){
        			this.ds_search.setColumn(0, "CO_CD", this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD"));
                    if( e.fromobject.id == "edt_prdClcd") {
        				this.searchPrdClcd = "";
        				this.searchPrdClsfNm = "";
                        this.ds_search.setColumn(0, "PRD_CLCD", value);
                        this.ds_search.setColumn(0, "LWST_CD_YN", 'Y');
        				this.ds_search.setColumn(0, "MALL_SPR_CD", '10');
                        this.fn_popupSearch("edt_prdClcd", "/pr/prd-popup/select-category-popup-list.do");
                    }

                    if( e.fromobject.id == "edt_psnId") {   //담당자
                        this.ds_search.setColumn(0, "EMP_NO", value);
                        this.fn_popupSearch("edt_psnId", "/co/popup/select-operator-popup-list.do");
                    }

        			if( e.fromobject.id == "edt_prdClsfNm") {
        				this.searchPrdClcd = "";
        				this.searchPrdClsfNm = "";
                        this.ds_search.setColumn(0, "PRD_CLSF_NM", value);
                        this.ds_search.setColumn(0, "LWST_CD_YN", 'Y');
        				this.ds_search.setColumn(0, "MALL_SPR_CD", '10');
                        this.fn_popupSearch("edt_prdClsfNm", "/pr/prd-popup/select-category-popup-list.do");
                    }

                    if( e.fromobject.id == "edt_psnNm") {   //담당자
                        this.ds_search.setColumn(0, "MEM_NM", value);
                        this.fn_popupSearch("edt_psnNm", "/co/popup/select-operator-popup-list.do");
                    }
                }
            }
        }*/

        // 화면 단축키
        this.fn_onkeydown = function(obj,e)
        {
        	// CTRL + ENTER
        	if (e.keycode == 13 && e.ctrlkey == true) {
        		// 조회
        		this.btn_search_onclick();
        	}
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function (bInit){

            var sSvcId = "search";
            var sUrl = "/ba/bat-adm/bat-pgm-log-list.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_list=ds_list";
            var arg = "";

            // 조회버튼 클릭시 페이징 초기화 시킨다.
            if(bInit) {
                this.div_paging.uPage = 1;
                this.div_paging.uPageNum = 0;
                this.ds_search.setColumn(0,"startNum",0);
                this.ds_search.setColumn(0,"rowCount",this.cmb_viewCount.value);
            }

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //실행서버조회
        this.fn_batSvrSearch = function(){
        	var sSvcId = "batSvrSearch";
            var sUrl = "/ba/bat-adm/bat-svr-list.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_batSvrType=ds_list";
            var arg = "";

        	this.ds_search.setColumn(0,"useYn","Y");
        	//서버 keepAlive 체크여부
        	this.ds_search.setColumn(0,"svrChkYn","N");

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //배치프로그램명 검색조건
        this.fn_batPgmSearch = function(){
        	var sSvcId = "batPgmSearch";
            var sUrl = "/ba/bat-adm/bat-pgm-list.do";
            var inDs = "ds_search=ds_search3";
            var outDs = "ds_batPgmType=ds_list";
            var arg = "";

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //공통코드조회
        this.fn_commonCodeSearch = function(){

            var sSvcId = "commonCodeSearch";
            var sUrl = "/co/select-common-code-list.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_thmeDomnCd=ds_output1 ds_inqPerdSprCd=ds_output2 ds_inqPerdSprCd2=ds_output2 ds_exceStatsCd=ds_output3";
            var arg = "";

            this.ds_search.setColumn(0, "CODE_LIST", "THME_DOMN_CD,INQ_PERD_SPR_CD,EXCE_STATS_CD");
            this.ds_search.setColumn(0, "LANG_CD", "KO");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };


        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg) {
            switch(svcID) {
                case "search" :
                    this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.cmb_viewCount.value,"fn_pageCallback");
                    break;

                case "commonCodeSearch" :
        			 this.ds_search2.copyData(this.ds_search, true);

        			 this.ds_thmeDomnCd.insertRow(0);
                     this.ds_thmeDomnCd.setColumn(0, "COM_DTL_CD", "");
                     this.ds_thmeDomnCd.setColumn(0, "COM_DTL_CD_NM", "선택");
        			 this.Div00.form.cmb_thmeDomnCd.set_index(0);

        			 this.ds_exceStatsCd.insertRow(0);
                     this.ds_exceStatsCd.setColumn(0, "COM_DTL_CD", "");
                     this.ds_exceStatsCd.setColumn(0, "COM_DTL_CD_NM", "선택");
        			 this.Div00.form.cmb_exceStatsCd.set_index(0);

        			 if(oArgs != null && oArgs.batPgmSeq != null){
        				this.ds_search.setColumn(0, "batPgmSeq", oArgs.batPgmSeq);
        				this.Div00.form.cmb_batPgmType.set_value(oArgs.batPgmSeq);
        				this.fn_search(true);
        			}

                    break;

        		case "batSvrSearch" :
        			 this.ds_batSvrType.insertRow(0);
                     this.ds_batSvrType.setColumn(0, "batServerSeq", "");
                     this.ds_batSvrType.setColumn(0, "serverNm", "선택");
        			 this.Div00.form.cmb_batSvrType.set_index(0);

                    break;

        		case "batPgmSearch" :
        			this.ds_batPgmType.insertRow(0);
        			this.ds_batPgmType.setColumn(0, "batPgmSeq", "");
        			this.ds_batPgmType.setColumn(0, "batPgmNm", "선택");

        			if(oArgs.batPgmSeq > 0){
        				this.Div00.form.cmb_batPgmType.set_value(oArgs.batPgmSeq);
        			}
        			else{
        				this.Div00.form.cmb_batPgmType.set_index(0);
        			}

        			break;

            }
        };

        this.fn_pageCallback = function(sFlag){
            var oPaging = this.div_paging;

            if(sFlag){
                this.ds_search.setColumn(0,"startNum", oPaging.uPageNum);
                this.ds_search.setColumn(0,"rowCount", this.cmb_viewCount.value);
                this.fn_search();
            }

        	var sTotText = "(총 "+ this.gfn_appendComma(oPaging.uTotCount, 0) +"건 </b>"+ this.gfn_appendComma(oPaging.uPage) +" / "+ this.gfn_appendComma(oPaging.uPageCnt) +")";
            this.totalPageCount.set_text(sTotText);
        };

        //팝업콜백
        this.fn_popupCallback = function(svcID, args){
            switch(svcID) {
                case "batPgmLogErrorDtls" :

                    break;
            }
        }

        //정렬콜백
        this.fn_sortCallback = function(sGridId){
            var oGrid=null;
            if(sGridId == "grd_list"){
                oSortInfo = this.grd_list.uaSortInfo;

                this.ds_search.setColumn(0,"sortColumn",oSortInfo.bindCol);
                this.ds_search.setColumn(0,"sortType",oSortInfo.status);
                this.fn_search();
            }
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        this.cfn_formInit = function(){
        	//grid 초기 설정
        	this.grd_list.uSortFlag = "false";
        	this.grd_list.uServerSortFlag = "true";
        	this.grd_list.uSortCallback = "fn_sortCallback";
        	this.grd_list.uCellSizeType = "true";

        	//페이징 초기 설정
        	this.div_paging.uPage = 1;
        	this.div_paging.uPageNum = 0;
        	this.div_paging.uPageRowCnt = 10;
        	this.div_paging.uPageCnt = 0;
        	this.div_paging.uTotCount = 0;

        	//grid 개인화(전제조건 : grid Head가 무조건 1Row인 경우)
        	this.uGridList = "grd_list";
        	this.grd_list.uRightMouse = "true";
        	this.grd_list.uPersonalFlag = "true";
        	this.grd_list.uDefaultFormat = "STR_DTM,END_DTM,SERVER_NM,BAT_PGM_ID,CLASS_METHOD_NM,BAT_PGM_NM,BAT_STAT,TGT_CNT,SUCC_CNT";
        };

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        //기간 설정
        this.fn_setSearchDate = function() {

            var term = this.Div00.form.cmb_dateUnit.value;
            var objDate = new Date();
            var sToday = objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0');

            /* 1 : 1일,    2 : 1주일,    3 : 2주일,    4 : 1개월,    5 : 3개월,    6 : 6개월,    7 : 1년 */
        	if( term == "" ) {
                this.Div00.form.cal_startDtm.set_value("");
        		this.Div00.form.cal_endDtm.set_value("");
            } else {
        		if( term == "1" ) {
        			objDate.setDate(objDate.getDate());
        		} else if( term == "2" ) {
        			objDate.setDate(objDate.getDate() -6);
        		} else if( term == "3" ) {
        			objDate.setDate(objDate.getDate() -13);
        		} else if( term == "4" ) {
        			objDate.setMonth(objDate.getMonth() -1);
        			objDate.setDate(objDate.getDate() +1);
        		} else if( term == "5" ) {
        			objDate.setMonth(objDate.getMonth() -3);
        			objDate.setDate(objDate.getDate() +1);
        		} else if( term == "6" ) {
        			objDate.setMonth(objDate.getMonth() -6);
        			objDate.setDate(objDate.getDate() +1);
        		} else if( term == "7" ) {
        			objDate.setMonth(objDate.getMonth() -12);
        			objDate.setDate(objDate.getDate() +1);
        		}

        		this.Div00.form.cal_startDtm.set_value(objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0'));
        		this.Div00.form.cal_endDtm.set_value(sToday);
        	}
        };

        this.fn_getUnreg = function(){
            if(this.unReg10){
                return '10';
            }else{
                if(this.unReg20){
                    return '20';
                }else{
                    return '';
                }
            }
        }

        //초기화
        this.fn_init = function() {
            this.ds_search.clearData();
            this.ds_search.addRow();
        	this.Div00.form.cmb_inqPerdSprCd.value = "7";		//기간 설정 1년으로 지정
        	//this.Div00.form.cmb_inqPerdSprCd2.value = "7";		//기간 설정 1년으로 지정
        	this.fn_setFromToDate(this.Div00.form.cmb_inqPerdSprCd, this.Div00.form.cal_startDtm, this.Div00.form.cal_endDtm);
        	//this.fn_setFromToDate(this.Div00.form.cmb_inqPerdSprCd2, this.Div00.form.cal_nxtStartDtm, this.Div00.form.cal_nxtEndDtm);
        	this.Div00.form.cmb_batPgmType.set_index(0)
        	this.Div00.form.cmb_inqPerdSprCd.set_index(6);
        	//this.Div00.form.cmb_inqPerdSprCd2.set_index(6);
        	this.Div00.form.cmb_exceStatsCd.set_index(0);
        	this.Div00.form.cmb_thmeDomnCd.set_index(0);
        	this.Div00.form.cmb_batSvrType.set_index(0);
        }
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //조회버튼
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_search(true);
        };

        //초기화버튼
        this.Div00_btn_clear_onclick = function(obj,e)
        {
        	this.ds_search.copyData(this.ds_search2, true);
            this.fn_init();
        };

        this.btn_exceldown_onclick = function(obj,e)
        {
        	if(this.grd_list_excel.rowcount>0){
        		this.gfn_excelExport(this.grd_list_excel, "배치프로그램 실행이력", "배치프로그램 실행이력", null, null);
        	}else{
        		alert('엑셀 파일로 다운로드 할 수 있는 자료가 없습니다.');
        	}
        };

        //상세화면팝업
        this.grd_list_oncellclick = function(obj,e)
        {
        	var bindText = this.grd_list.getCellProperty("body", e.col, "text");

        	if(e.col == 9){	//메세지
        		var params = {
        			errorDtls:this.ds_list.getColumn(e.row, "msg")
        		}
        		if(this.ds_list.getColumn(e.row, "msg")){
        			var options = {};
        			this.gfn_openPopup('batPgmLogMsg', "BA::SSP_BA_CO_06.xfdl", params,  "", options);
        		}
        	}

        	if(e.col == 10){	//Exception
        		var params = {
        			errorDtls:this.ds_list.getColumn(e.row, "errorDtls")
        		}
        		if (this.ds_list.getColumn(e.row, "errorDtls") != null && this.ds_list.getColumn(e.row, "errorDtls") != '')
        		{
        			var options = {};
        			this.gfn_openPopup('batPgmLogErrorDtls', "BA::SSP_BA_CO_06.xfdl", params,  "", options);
        		}
        	}
        };

        //실행일시 조회기간 콤보박스 변경
        this.cmb_inqPerdSprCd_onitemchanged = function(obj,e)
        {
        	this.fn_setFromToDate(this.Div00.form.cmb_inqPerdSprCd, this.Div00.form.cal_startDtm, this.Div00.form.cal_endDtm);
        };

        //다음실행일시 조회기간 콤보박스 변경
        this.cmb_inqPerdSprCd2_onitemchanged = function(obj,e)
        {
        	//this.fn_setFromToDate(this.Div00.form.cmb_inqPerdSprCd2, this.Div00.form.cal_nxtStartDtm, this.Div00.form.cal_nxtEndDtm);
        };

        //실행일시 날짜 비교
        this.fn_exceDate_oncloseup = function(obj,e)
        {
        	if(this.Div00.form.cal_startDtm.value > this.Div00.form.cal_endDtm.value){
        		alert(this.gfn_getMessage("ERRC000192")); //시작일이 종료일보다 클 수 없습니다.

         		this.Div00.form.cal_startDtm.set_value(this.ds_search2.getColumn(0, "strDtm"));
        		this.Div00.form.cal_endDtm.set_value(this.ds_search2.getColumn(0, "endDtm"));
        	}
        };

        //다음실행일시 날짜 비교
        this.fn_nxtExceDate_oncloseup = function(obj,e)
        {
        	if(this.Div00.form.cal_nxtStartDtm.value > this.Div00.form.cal_nxtEndDtm.value){
        		alert(this.gfn_getMessage("ERRC000192")); //시작일이 종료일보다 클 수 없습니다.

         		this.Div00.form.cal_nxtStartDtm.set_value(this.ds_search2.getColumn(0, "strDtm"));
        		this.Div00.form.cal_nxtEndDtm.set_value(this.ds_search2.getColumn(0, "endDtm"));
        	}
        };
        this.totalPageCount_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.addEventHandler("onkeydown",this.fn_onkeydown,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div00.form.btn_clear.addEventHandler("onclick",this.Div00_btn_clear_onclick,this);
            this.Div00.form.cal_startDtm.addEventHandler("oncloseup",this.fn_exceDate_oncloseup,this);
            this.Div00.form.cal_startDtm.addEventHandler("onchanged",this.fn_exceDate_oncloseup,this);
            this.Div00.form.cal_endDtm.addEventHandler("oncloseup",this.fn_exceDate_oncloseup,this);
            this.Div00.form.cal_endDtm.addEventHandler("onchanged",this.fn_exceDate_oncloseup,this);
            this.Div00.form.cmb_inqPerdSprCd.addEventHandler("onitemchanged",this.cmb_inqPerdSprCd_onitemchanged,this);
            this.btn_exceldown.addEventHandler("onclick",this.btn_exceldown_onclick,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.totalPageCount.addEventHandler("onclick",this.totalPageCount_onclick,this);
            this.grd_list_excel.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
        };
        this.loadIncludeScript("SSP_BA_CO_05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
