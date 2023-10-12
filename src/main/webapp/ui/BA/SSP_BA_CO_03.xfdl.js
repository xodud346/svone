(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BA_CO_03");
            this.set_titletext("배치프로그램 상세/수정");
            this.set_visible("true");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,840);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"batPgmSeq\" type=\"INT\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"pageMode\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"startNum\" type=\"STRING\" size=\"256\"/><Column id=\"rowCount\" type=\"STRING\" size=\"256\"/><Column id=\"svrChkYn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"strDtm\" type=\"DATE\" size=\"256\"/><Column id=\"endDtm\" type=\"DATE\" size=\"256\"/><Column id=\"batServerSeq\" type=\"INT\" size=\"256\"/><Column id=\"serverNm\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"exceStatsCdTxt\" type=\"STRING\" size=\"256\"/><Column id=\"batPgmSeq\" type=\"INT\" size=\"256\"/><Column id=\"batPgmId\" type=\"STRING\" size=\"256\"/><Column id=\"batPgmNm\" type=\"STRING\" size=\"256\"/><Column id=\"tgtCnt\" type=\"INT\" size=\"256\"/><Column id=\"succCnt\" type=\"INT\" size=\"256\"/><Column id=\"logLvl\" type=\"INT\" size=\"256\"/><Column id=\"msg\" type=\"STRING\" size=\"256\"/><Column id=\"errorDtls\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_insertData", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_USEYN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_RSN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdClsfChrpsnSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bat_pgm", this);
            obj._setContents("<ColumnInfo><Column id=\"thmeDomnCd\" type=\"STRING\" size=\"256\"/><Column id=\"batPgmSeq\" type=\"INT\" size=\"256\"/><Column id=\"serverNm\" type=\"STRING\" size=\"256\"/><Column id=\"prtclCd\" type=\"STRING\" size=\"256\"/><Column id=\"ipAddr\" type=\"STRING\" size=\"256\"/><Column id=\"port\" type=\"STRING\" size=\"256\"/><Column id=\"batPgmId\" type=\"STRING\" size=\"256\"/><Column id=\"batPgmNm\" type=\"STRING\" size=\"256\"/><Column id=\"batStat\" type=\"STRING\" size=\"256\"/><Column id=\"rsrvSprCd\" type=\"STRING\" size=\"256\"/><Column id=\"rsrvSch\" type=\"STRING\" size=\"256\"/><Column id=\"strDtm\" type=\"STRING\" size=\"256\"/><Column id=\"endDtm\" type=\"STRING\" size=\"256\"/><Column id=\"exceStatsCdTxt\" type=\"STRING\" size=\"256\"/><Column id=\"nxtExceDtm\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"batServerSeq\" type=\"INT\" size=\"256\"/><Column id=\"classMethodNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_thmeDomnCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rsrvSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD\">cron</Col><Col id=\"COM_DTL_CD_NM\">cron</Col></Row><Row><Col id=\"COM_DTL_CD\">fixedDelay</Col><Col id=\"COM_DTL_CD_NM\">fixedDelay</Col></Row><Row><Col id=\"COM_DTL_CD\">fixedRate</Col><Col id=\"COM_DTL_CD_NM\">fixedRate</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_batSvrType", this);
            obj._setContents("<ColumnInfo><Column id=\"batServerSeq\" type=\"STRING\" size=\"256\"/><Column id=\"serverNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD\">Y</Col><Col id=\"COM_DTL_CD_NM\">사용</Col></Row><Row><Col id=\"COM_DTL_CD\">N</Col><Col id=\"COM_DTL_CD_NM\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_output", this);
            obj._setContents("<ColumnInfo><Column id=\"transBatPgmCnt\" type=\"INT\" size=\"256\"/><Column id=\"statMsg\" type=\"STRING\" size=\"256\"/><Column id=\"statCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div","20","44",null,"370","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("");
            obj.set_background("#ffffff");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00_00","0","161",null,"32","0",null,null,null,null,null,this.div.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03","0","6",null,"32","0",null,null,null,null,null,this.div.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00","0","7","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("1");
            obj.set_text("주제영역");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03_00_01","0","37",null,"32","0",null,null,null,null,null,this.div.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","37","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("3");
            obj.set_text("배치프로그램 ID");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_enable("true");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03_00","0","68",null,"32","0",null,null,null,null,null,this.div.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","68","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("5");
            obj.set_text("예약구분");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_02","480","7","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("6");
            obj.set_text("실행서버");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","480","37","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("7");
            obj.set_text("배치프로그램명");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","480","68","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("8");
            obj.set_text("예약일정");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.div.addChild(obj.name, obj);

            obj = new Static("edt_nxtExceDtm","824","72","135","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.getSetter("readonly").set("true");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cmb_thmeDomnCd","139","10","130","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_thmeDomnCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cmb_batSvrType","618","10","130","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_batSvrType");
            obj.set_codecolumn("batServerSeq");
            obj.set_datacolumn("serverNm");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cmb_rsrvSprCd","139","72","130","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("11");
            obj.set_innerdataset("ds_rsrvSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("");
            obj.set_value("0");
            obj.set_index("0");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","0","99",null,"32","0",null,null,null,null,null,this.div.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00","0","130",null,"32","0",null,null,null,null,null,this.div.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","0","130","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("15");
            obj.set_text("최근 실행상태");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00","0","161","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("16");
            obj.set_text("최근실행일시");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00","480","161","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("17");
            obj.set_text("다음 실행일시");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_01","0","99","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("19");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_01","480","99","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("20");
            obj.set_text("클래스_메소드명");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00_00_00","0","192",null,"156","0",null,null,null,null,null,this.div.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cmb_useYn","139","103","130","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("22");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_innerdataset("ds_useYn");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div.addChild(obj.name, obj);

            obj = new Static("edt_batPgmId","143","42","315","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("23");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.getSetter("readonly").set("true");
            this.div.addChild(obj.name, obj);

            obj = new Static("edt_batStat","141","134","328","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("24");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.getSetter("readonly").set("true");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Static("edt_strDtm","139","165","111","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("25");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.getSetter("readonly").set("true");
            this.div.addChild(obj.name, obj);

            obj = new Static("edt_nxtEndDtm","618","164","328","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("26");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.getSetter("readonly").set("true");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Static("edt_rctDtm00","259","165","11","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("27");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.getSetter("readonly").set("true");
            obj.set_text("~");
            this.div.addChild(obj.name, obj);

            obj = new Static("edt_endDtm","279","165","130","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("28");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.getSetter("readonly").set("true");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_cancel","248",null,"100","32",null,"39",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_update","351",null,"100","32",null,"39",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_batPgmNm","638","85","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_rsrvSch","638","116","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","18","467",null,null,"20","100",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list");
            obj.set_autosizingtype("col");
            obj.set_autosizebandtype("body");
            obj.set_selecttype("multiarea");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"시작일시\"/><Cell col=\"1\" text=\"종료일시\"/><Cell col=\"2\" text=\"배치서버\"/><Cell col=\"3\" text=\"상태\"/><Cell col=\"4\" text=\"대상건수\"/><Cell col=\"5\" text=\"성공건수\"/><Cell col=\"6\" text=\"메세지\"/><Cell col=\"7\" text=\"Exception\"/></Band><Band id=\"body\"><Cell text=\"bind:strDtm\" autosizecol=\"default\" wordWrap=\"char\" autosizerow=\"default\" controlautosizingtype=\"none\"/><Cell col=\"1\" text=\"bind:endDtm\" autosizecol=\"default\" wordWrap=\"char\" autosizerow=\"default\" controlautosizingtype=\"none\"/><Cell col=\"2\" text=\"bind:serverNm\" autosizerow=\"default\" wordWrap=\"char\"/><Cell col=\"3\" text=\"bind:exceStatsCdTxt\" autosizerow=\"default\" wordWrap=\"char\"/><Cell col=\"4\" text=\"bind:tgtCnt\" autosizerow=\"default\" wordWrap=\"char\" textAlign=\"center\"/><Cell col=\"5\" autosizerow=\"default\" wordWrap=\"char\" displaytype=\"normal\" edittype=\"none\" text=\"bind:succCnt\" textAlign=\"center\"/><Cell col=\"6\" displaytype=\"expr:msg!=null?&apos;buttoncontrol&apos;:&apos;none&apos;\" edittype=\"expr:msg!=null?&apos;button&apos;:&apos;none&apos;\" controlautosizingtype=\"both\" text=\"expr:msg!=null?&apos;상세보기&apos;:&apos;&apos;\"/><Cell col=\"7\" displaytype=\"expr:errorDtls == null ? &apos;none&apos; : errorDtls == &apos;&apos; ? &apos;none&apos; : errorDtls == undefined ? &apos;none&apos; : &apos;buttoncontrol&apos;\" edittype=\"expr:errorDtls == null ? &apos;none&apos; : errorDtls == &apos;&apos; ? &apos;none&apos; : errorDtls == undefined ? &apos;none&apos; : &apos;buttoncontrol&apos;\" text=\"expr:errorDtls == null ? &apos;&apos; : errorDtls == &apos;&apos; ? &apos;&apos; : errorDtls == undefined ? &apos;&apos; : &apos;상세보기&apos;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel00","880",null,"100","26",null,"383",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("더보기");
            this.addChild(obj.name, obj);

            obj = new Static("sta_prd_grp_nm","20","236","130","156",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("비고");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new TextArea("edt_remark","158","242","812","142",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete","454",null,"100","32",null,"39",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_run","557",null,"100","32",null,"39",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Button("btn_end","660",null,"100","32",null,"39",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("강제종료");
            obj.set_visible("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","20","20","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("| 배치프로그램 등록 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","769",null,"30","760",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_classMethodNm","638","147","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_enable("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,840,this,function(p){});
            obj.set_stepindex("");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","edt_remark","value","ds_bat_pgm","remark");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div.form.edt_batPgmId","text","ds_bat_pgm","batPgmId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_batPgmNm","value","ds_bat_pgm","batPgmNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div.form.edt_batStat","text","ds_bat_pgm","exceStatsCdTxt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div.form.edt_strDtm","text","ds_bat_pgm","strDtm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div.form.edt_nxtEndDtm","text","ds_bat_pgm","nxtExceDtm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt_rsrvSch","value","ds_bat_pgm","rsrvSch");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div.form.cmb_thmeDomnCd","value","ds_bat_pgm","thmeDomnCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div.form.cmb_batSvrType","value","ds_bat_pgm","batServerSeq");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div.form.cmb_rsrvSprCd","value","ds_bat_pgm","rsrvSprCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div.form.cmb_useYn","value","ds_bat_pgm","useYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div.form.edt_endDtm","text","ds_bat_pgm","endDtm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div.form.edt_nxtExceDtm","text","ds_bat_pgm","nxtExceDtm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edt_classMethodNm","value","ds_bat_pgm","classMethodNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BA_CO_03.xfdl","CO::coUtils.xjs");
        this.registerScript("SSP_BA_CO_03.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP속성 생성 팝업
        CREATION DATES : 2021.01.19
        *******************************************************/
        // 공통형 스크립트 인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.sprCd = "";
        this.sPrdClcd = "";
        this.psnDupChk = "";
        this.sEmpNo = "";
        this.sOprtrNm = "";
        this.chrpsnTpCd = '';
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();
        this.fn_onLoad = function(obj,e){
            //공통 함수 호출(필수)
            this.gfn_formOnLoad(this);
        	this.ds_search.setColumn(0, "batPgmSeq", this.parent.batPgmSeq);

        	this.fn_commonCodeSearch();
        	this.fn_batSvrSearch();

        	this.ds_search.setColumn(0, "pageMode", "detail");
        	this.fn_search(true);
        };

        // 화면 단축키
        this.fn_onkeydown = function(obj,e)
        {
        	// CTRL + s
        	if (e.keycode == 83 && e.ctrlkey == true) {
        		// 저장
        		this.insert_btn_onclick();
        		event.preventDefault();
        	}

        		// ESC
        	if (e.keycode == 27) {
        		// 팝업 화면 닫기
        		//this.btn_clear_onclick();
        		this.close();
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
                this.ds_search.setColumn(0,"rowCount",5);
            }

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //공통코드조회
        this.fn_commonCodeSearch = function(){
            var sSvcId = "commonCodeSearch";
            var sUrl = "/co/select-common-code-list.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_thmeDomnCd=ds_output1";
            var arg = "";

            this.ds_search.setColumn(0, "CODE_LIST", "THME_DOMN_CD");
            this.ds_search.setColumn(0, "LANG_CD", "KO");
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

        //배치프로그램 상세내역
        this.fn_batPgmInfo = function(){
        	var sSvcId = "batPgmInfo";
        	var sUrl = "/ba/bat-adm/bat-pgm.do";
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_bat_pgm=ds_bat_pgm";
        	var arg;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack", false);
        }

        //문자열 특정 위치 치환 처리
        this.fn_replaceAt = function(input, index, character){
             return input.substr(0, index) + character + input.substr(index+character.length);
        }

        //배치프로그램 예약일정에 따른 시간 계산
        this.fn_batPgmTimeCalc = function(){
        	//숫자, 에스터리스크(*), ?(퀘스천), 공백만 입력 가능
        	//let rsrvSchChk = /^[0-9|*|?|\s|]+$/
        	let rsrvSchChk = /[0-9|L|?*\,\/\s]/g;
        	let rsrvSch = this.ds_bat_pgm.getColumn(0,"rsrvSch");
        	let rsrvSprCd = this.ds_bat_pgm.getColumn(0, "rsrvSprCd");

        	if(!rsrvSchChk.test(rsrvSch)){
        		alert("예약일정 형식에 맞는 문자를 입력해 주세요.");
        		return false;
        	}

        	if(rsrvSprCd == "cron") {	//cron 형식일때
        		const rsrvSchArray = rsrvSch.split(" ");

        		if(rsrvSchArray[3] == "*" && rsrvSchArray[5] == "*") {	//'일' 항목과 '요일' 항목이 전부 *이면 마지막 *를 ?로 변경 처리
        			rsrvSch = this.fn_replaceAt(rsrvSch, rsrvSch.lastIndexOf("*"), "?");
        			this.ds_bat_pgm.setColumn(0,"rsrvSch", rsrvSch);
        		}
        	}

        	var sSvcId = "batPgmTimeCalc";
            var sUrl = "/ba/bat-adm/bat-pgm-time-calc.do";
            var inDs = "ds_bat_pgm=ds_bat_pgm";
            var outDs = "ds_output=ds_output";
            var arg = "";

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        //static 배치프로그램 정보 업데이트
        this.fn_batSvrBatPgmUpdt = function(batPgmSeq){
        	this.ds_bat_pgm.setColumn(0, "batPgmSeq", batPgmSeq);

        	var sSvcId = "batSvrBatPgmUpdt";
        	var sUrl = "/ba/bat-adm/batSvr-bat-pgm-updt.do";
        	var inDs = "ds_bat_pgm=ds_bat_pgm";
        	var outDs = "ds_output=ds_output";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        //배치프로그램 실행
        this.fn_runBatPgm = function(){
        	var sSvcId = "runBatPgm";
            var sUrl = "/ba/bat-adm/run-bat-pgm.do";
            var inDs = "ds_bat_pgm=ds_bat_pgm";
            var outDs = "ds_output=ds_output";
            var arg = "";

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        //배치프로그램 강제종료
        this.fn_endBatPgm = function(){
        	var sSvcId = "endBatPgm";
            var sUrl = "/ba/bat-adm/end-bat-pgm.do";
            var inDs = "ds_bat_pgm=ds_bat_pgm";
            var outDs = "ds_output=ds_output";
            var arg = "";

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg) {
            switch(svcID) {
        		case "search" :
        			if(this.ds_list.rowcount > 0){
        				this.btn_delete.set_enable(false);
        			}
        			this.fn_batPgmInfo();

        			var exceStatsCd = "";
        			var exceStatsCdTxt = "";

        			if(this.ds_list.getRowCount() > 0){
        				exceStatsCd = this.ds_list.getColumn(0, "exceStatsCd");
        				exceStatsCdTxt = this.ds_list.getColumn(0, "exceStatsCdTxt");
        			}
        			if(exceStatsCd != "30"){
        				this.btn_run.set_enable(true);
        				this.btn_end.set_enable(false);
        			}
        			else{
        				this.btn_run.set_enable(false);
        				this.btn_end.set_enable(true);
        			}
        			this.div.form.edt_batStat.set_text(exceStatsCdTxt);

        			break;
        		case "commonCodeSearch" :
        			 this.ds_thmeDomnCd.insertRow(0);
                     this.ds_thmeDomnCd.setColumn(0, "COM_DTL_CD", "");
                     this.ds_thmeDomnCd.setColumn(0, "COM_DTL_CD_NM", "선택");
        // 			 this.div.form.cmb_thmeDomnCd.set_index(0);
        // 			 this.div.form.cmb_rsrvSprCd.set_index(0);
        // 			 this.div.form.cmb_useYn.set_index(0);
                    break;

        		case "batSvrSearch" :
        			 this.ds_batSvrType.insertRow(0);
                     this.ds_batSvrType.setColumn(0, "batServerSeq", "");
                     this.ds_batSvrType.setColumn(0, "serverNm", "선택");
        //			 this.div.form.cmb_batSvrType.set_index(0);
                    break;

                case "registBatPgm" :
          			var transBatPgmCnt = this.ds_output.getColumn(0, "transBatPgmCnt");
        			var batPgmSeq = this.ds_output.getColumn(0, "batPgmSeq");

          			if(transBatPgmCnt > 0 && batPgmSeq > 0){
        				//배치서버 배치프로그램목록(static) 갱신
        				this.fn_batSvrBatPgmUpdt(batPgmSeq);
          			}
          			else{
        				alert(this.ds_output.getColumn(0, "statMsg"));
          			}

                    break;
        		case "batSvrBatPgmUpdt" :
        			var statCode = this.ds_output.getColumn(0, "statCode");
        			var statMsg = this.ds_output.getColumn(0, "statMsg");

        			if(statCode == "10"){
        				console.log("배치서버 batpgmlist 갱신 처리 callBack!!");
          				alert(statMsg);
          				this.close(true);
        				this.opener.fn_search(true);
        			}
        			else{
        				alert('DB등록 되었으나, 배치 서버가 종료되어 있거나 반응이 없습니다. 확인해 주세요.');
        				//alert('정상처리');
          				this.close(true);
        				this.opener.fn_search(true);
        				//alert(statMsg);
        			}

        			break;
        		case "batPgmTimeCalc" :
        			 if(this.gfn_isNull()){
        				//this.div.form.edt_nxtExceDtm.set_color("#ff0000");
        				var nxtExceDtm = "";

        				if(this.ds_output.getColumn(0, "nxtExceDtm") == undefined){
        					nxtExceDtm = "예약일정 형식에 맞지 않습니다.";
        				}
        				else{
        					nxtExceDtm = this.ds_output.getColumn(0, "nxtExceDtm");
        				}

        				this.div.form.edt_nxtExceDtm.set_text("("+nxtExceDtm+")");
        			 }

                    break;
        		case "deleteBatPgm" :
        			var statMsg = this.ds_output.getColumn(0, "statMsg");

        			if(statMsg != null && statMsg != ""){
        				alert(statMsg);
        			}
        			else{
        				alert(this.gfn_getMessage('ERRN000031'));
        				this.close(true);
        				this.opener.fn_search(true);
        			}

        			break;
        		case "runBatPgm" :
        			var statCode = this.ds_output.getColumn(0, "statCode");
        			var statMsg = this.ds_output.getColumn(0, "statMsg");

        			if(statCode == "10"){
        				alert('실행 되었습니다.');
        				this.fn_search(true);
        			}
        			else{
        				alert(statMsg);
        			}

                    break;

        		case "endBatPgm" :
        			var statCode = this.ds_output.getColumn(0, "statCode");
        			var statMsg = this.ds_output.getColumn(0, "statMsg");

        			if(statCode == "40"){
        				alert(statMsg);
        				this.fn_search(true);
        			}
        			else{
        				alert(statMsg);
        				//배치가 실행중이 아닐때 이므로, 실행버튼 활성화
        				this.btn_run.set_enable(true);
        				this.btn_end.set_enable(false);
        			}

                    break;

        		case "batPgmInfo" :
        			var exceStatsCd = this.ds_bat_pgm.getColumn(0, "exceStatsCd");

        			if(exceStatsCd == "30"){
        				this.btn_run.set_enable(false);
        				this.btn_end.set_enable(true);
        			}
        			else{
        				this.btn_run.set_enable(true);
        				this.btn_end.set_enable(false);
        			}
        // 			if(this.ds_list.rowcount > 1){
        // 				//console.log("exceStatsCdTxt : ", this.ds_list.getColumn(1, "exceStatsCdTxt"));
        // 				this.edt_exceStatsCdTxt.set_text(this.ds_list.getColumn(1, "exceStatsCdTxt"));
        // 			}
        // 			else if(this.ds_list.rowcount > 0){
        // 				this.edt_exceStatsCdTxt.set_text(this.ds_list.getColumn(1, "exceStatsCdTxt"));
        // 			}

        			break;
            }
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.fn_regist = function(){

        	let thmeDomnCd = this.ds_bat_pgm.getColumn(0,"thmeDomnCd");
        	let batServerSeq = this.ds_bat_pgm.getColumn(0,"batServerSeq");
        	/*let batPgmId = this.ds_bat_pgm.getColumn(0,"batPgmId");*/
        	let batPgmNm = this.ds_bat_pgm.getColumn(0,"batPgmNm");
        	let rsrvSprCd = this.ds_bat_pgm.getColumn(0,"rsrvSprCd");
        	let rsrvSch = this.ds_bat_pgm.getColumn(0,"rsrvSch");
        	let useYn = this.ds_bat_pgm.getColumn(0,"useYn");
        	let remark = this.ds_bat_pgm.getColumn(0,"remark");

        	if(this.gfn_isNull(thmeDomnCd)){
        		alert("주제영역을 선택해 주세요");
        		//alert(this.gfn_getMessage('ERRP000023'));
        		return false;
        	}

        	if(this.gfn_isNull(batServerSeq)){
        		alert("실행서버를 선택해 주세요");
        		return false;
        	}

        // 	if(this.gfn_isNull(batPgmId)){
        // 		alert("배치프로그램ID를 입력해 주세요");
        // 		return false;
        // 	}
        //
        // 	if(this.gfn_isNull(chkIdDup)){
        // 		alert("배치프로그램ID 중복확인해 주세요");
        // 		return false;
        // 	}
        //
        // 	if(chkIdDup == "X"){
        // 		alert("중복되지 않는 배치프로그램ID를 입력해 주세요");
        // 		return false;
        // 	}

        	if(this.gfn_isNull(batPgmNm)){
        		alert("배치프로그램명을 입력해 주세요");
        		return false;
        	}

        	if(this.gfn_isNull(rsrvSprCd)){
        		alert("예약구분코드를 선택해 주세요");
        		return false;
        	}

        	if(this.gfn_isNull(rsrvSch)){
        		alert("예약일정을 선택해 주세요");
        		return false;
        	}

        	//숫자, 에스터리스크(*), ?(퀘스천), 공백만 입력 가능
        	//let rsrvSchChk = /^[0-9|*|?|\s|]+$/
        	let rsrvSchChk = /[0-9|L|?*\,\/\s]/g;

        	if(!rsrvSchChk.test(rsrvSch)){
        		alert("예약일정 형식에 맞는 문자를 입력해 주세요.");
        		return false;
        	}

        	if(this.gfn_isNull(useYn)){
        		alert("사용여부를 선택해 주세요");
        		return false;
        	}

        	//AM-BO-032 입력된 정보로 등록처리 하시겠습니까?
         	var sResult = this.confirm("입력된 정보로 등록처리 하시겠습니까?");
         	if(sResult){
         		var sSvcId = "registBatPgm";
        		var sUrl = "/ba/bat-adm/updt-bat-pgm.do";
        		var inDs = "ds_bat_pgm=ds_bat_pgm";
        		var outDs = "ds_output=ds_output";
        		var arg = "";

        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
         	}
        }

        //배치프로그램 삭제
        this.fn_delete = function(){
        	var sSvcId = "deleteBatPgm";
        	var sUrl = "/ba/bat-adm/dlt-bat-pgm.do";
        	var inDs = "ds_bat_pgm=ds_bat_pgm";
        	var outDs = "ds_output=ds_output";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        //탭 닫기
        this.fn_tabOnClose = function (sWinId) {
        	var oFrame = this.fv_oApp.agv_WorkFrameSet.frames;
        	var oOpenMenuDs = this.fv_oApp.gds_openMenu;

        	//gdsOpenMenu에서 삭제
        	var nRow = oOpenMenuDs.findRow("WIN_ID", sWinId);
        	var nCloseIdx = nRow;
        	var bSucc  = oOpenMenuDs.deleteRow(nRow);

        	// MDI 탭버튼 삭제
        	if(!this.gfn_isNull(oFrame[sWinId]) && nRow > -1) {
        		var oReturn = this.fv_oApp.agv_WorkFrameSet.removeChild(sWinId);
        		oReturn.destroy();
        		oReturn = null;
        		//this.tab_mdi.removeTabpage(nCloseIdx);
        	}
        }
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //저장 버튼
        this.regist_btn_onclick = function(obj,e)
        {
        	this.fn_regist();
        };

        //삭제 버튼
        this.delete_btn_onclick = function(obj,e)
        {
        	//삭제하시겠습니까?
         	var bResult = this.confirm(this.gfn_getMessage('ERRN000048'));
         	if(bResult){
        		this.fn_delete();
        	}
        };

        //취소 버튼
        this.btn_clear_onclick = function(obj,e)
        {
        	//var bResult = this.confirm("AM-BO-013 등록을 취소하시겠습니까?");
        	var bResult = this.confirm(this.gfn_getMessage('ERRP000013'));
        	if(bResult){
        		this.close(false);
        	}
        };

        //더보기 버튼
        this.btn_detail_onclick = function(obj,e)
        {
        	var param = {batPgmSeq:this.ds_bat_pgm.getColumn(0, "batPgmSeq")};
        	//this.fn_tabOnClose(obj.tabpages[e.index].name);
        	this.fn_tabOnClose("win9122000000");
        	this.gfn_menuOpen("9122000000", param);
        	this.close(true);
        };

        //배치프로그램 ID 중복확인
        this.btn_chkIdDup_onclick = function(obj,e)
        {
        	let batPgmId = this.ds_bat_pgm.getColumn(0,"batPgmId");
        	if(this.gfn_isNull(batPgmId) || nexacro.trim(batPgmId).length==0) {
        		//"배치프로그램ID가 빈값일 경우" 메세지 추가 후 아래 메세지코드 수정
        		//alert(this.fn_getMessage("ERRC000279"));
        		alert("배치프로그램ID를 입력해 주세요.");
        		return;
        	}

        	// 중복확인 서비스 호출
        	this.div.form.edt_batPgmId.set_value(nexacro.trim(this.ds_bat_pgm.getColumn(0,"batPgmId")));
        	this.fn_chkIdDup();
        };

        //예약일정 입력 시 다음 실행일정 예상날짜 출력
        this.edt_rsrvSch_onchanged = function(obj,e)
        {
        	this.fn_batPgmTimeCalc();
        };

        //실행 버튼
        this.btn_run_onclick = function(obj,e)
        {
        	//배치프로그램을 실행 하시겠습니까?
        	var bResult = this.confirm(this.gfn_getMessage('BACF000001'));
        	if(bResult){
        		//console.log("prtclCd : ", this.ds_bat_pgm.getColumn(0, "prtclCd"));

        		this.fn_runBatPgm();
        	}
        };

        //강제종료 버튼
        this.btn_end_onclick = function(obj,e)
        {
        	//실행 중인 배치프로그램을 강제로 종료하시겠습니까?
        	var bResult = this.confirm(this.gfn_getMessage('BACF000002'));
        	if(bResult){
        		this.fn_endBatPgm();
        	}
        };

        this.grd_list_oncellclick = function(obj,e)
        {
        // 	var bindText = this.grd_list.getCellProperty("body", e.col, "text");
        //     if(bindText == "bind:batPgmId"){	//상세화면 팝업
        //         if(this.gfn_isNull(this.ds_list.getColumn(e.row, "batPgmSeq"))){
        //             return false;
        //         }
        //
        //         var params = {
        //             batPgmSeq:this.ds_list.getColumn(e.row, "batPgmSeq")
        //         };
        //
        //         var options = {};
        //         this.gfn_openPopup('uptBatPgm', "BA::SSP_BA_CO_03.xfdl", params,  "fn_popupCallback", options);
        //     }

        	if(e.col == 6){	//메세지
        		var params = {
        			errorDtls:this.ds_list.getColumn(e.row, "msg")
        		}
        		if(this.ds_list.getColumn(e.row, "msg")){
        			var options = {};
        			this.gfn_openPopup('batPgmLogMsg', "BA::SSP_BA_CO_06.xfdl", params,  "", options);
        		}
        	}

        	if(e.col == 7){	//Exception
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeydown",this.fn_onkeydown,this);
            this.div.form.Static00_01_01.addEventHandler("onclick",this.div_Static00_01_01_onclick,this);
            this.div.form.Static00_01_00_00_00.addEventHandler("onclick",this.div_Static00_01_00_00_00_onclick,this);
            this.div.form.Static00_01_01_01.addEventHandler("onclick",this.div_Static00_01_01_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_update.addEventHandler("onclick",this.regist_btn_onclick,this);
            this.edt_rsrvSch.addEventHandler("onchanged",this.edt_rsrvSch_onchanged,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.btn_cancel00.addEventHandler("onclick",this.btn_detail_onclick,this);
            this.sta_prd_grp_nm.addEventHandler("onclick",this.sta_prd_grp_nm_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.delete_btn_onclick,this);
            this.btn_run.addEventHandler("onclick",this.btn_run_onclick,this);
            this.btn_end.addEventHandler("onclick",this.btn_end_onclick,this);
        };
        this.loadIncludeScript("SSP_BA_CO_03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
