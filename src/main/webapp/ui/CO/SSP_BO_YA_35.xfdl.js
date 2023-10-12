(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_YA_35");
            this.set_titletext("작업예약관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"REG_START_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_PERD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_INQ_PERD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WRK_RSRV_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WRK_RSRV_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WRK_EXCE_RSLT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RSRV_PGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXCE_START_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"EXCE_END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"RSRV_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WRK_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EXCE_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DOWNLOAD_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col><Col id=\"WRK_RSRV_NM\"/><Col id=\"RSRV_PGM_NM\"/><Col id=\"REGPSN_NM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inqPerdSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inqPerdSprCd2", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_wrkRsrvSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_wrkExceRsltCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rsrvPgmNm", this);
            obj._setContents("<ColumnInfo><Column id=\"RSRV_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RSRV_PGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_CLASS\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_METHOD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_wrkRsrvDtls", this);
            obj._setContents("<ColumnInfo><Column id=\"WRK_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RSRV_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WRK_RSRV_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WRK_RSRV_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RSRV_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"EXCE_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WRK_EXCE_RSLT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WRK_EXCE_RSLT\" type=\"STRING\" size=\"256\"/><Column id=\"RSRV_PGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WRK_RSRV_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WRK_EXCE_RSLT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pgmMetaDtls", this);
            obj._setContents("<ColumnInfo><Column id=\"RSRV_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RSRV_PGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_CLASS\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_METHOD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excel", this);
            obj._setContents("<ColumnInfo><Column id=\"WRK_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RSRV_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WRK_RSRV_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WRK_RSRV_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RSRV_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"EXCE_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WRK_EXCE_RSLT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WRK_EXCE_RSLT\" type=\"STRING\" size=\"256\"/><Column id=\"RSRV_PGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WRK_RSRV_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WRK_EXCE_RSLT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,"169","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","20",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_wrkRsrvSprCd","160","24","350","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_wrkRsrvSprCd");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","20","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("작업구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","521","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("프로그램");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"123","60","26","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"123","60","26","btn_search:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("초기화");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07","20","51",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","521","51","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("실행일시");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_regStartDate","160","55","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_00","20","51","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("등록일시");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07_00","20","81",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_00_00","20","81","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_text("상태");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_wrkExceRsltCd","160","86","350","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_wrkExceRsltCd");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_text("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static59_00","284","55","9","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_text("~");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_regEndDate","297","55","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_regInqPerdSprCd","421","55","89","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_inqPerdSprCd");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_text("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_rsrvPgmNm","661","24","200","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_pgmMetaDtls");
            obj.set_datacolumn("RSRV_PGM_NM");
            obj.set_codecolumn("RSRV_PGM_ID");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_exceStartDtm","661","55","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static59_00_00","785","55","9","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_text("~");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_exceEndDtm","798","55","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_inqPerdSprCd","922","55","90","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_inqPerdSprCd");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_text("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01","1022","51","130","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_text("등록자");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_regpsnNm","1162","54",null,"24","35",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00","1022","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_text("작업명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_wrkRsrvNm","1162","24",null,"24","35",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_layoutClear",null,"199","110","28","20",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"199","100","28","btn_layoutClear:4",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel",null,"199","110","28","btn_layoutSave:4",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_regist",null,"199","81","28","btn_excel:4",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("등록");
            obj.set_textPadding("0px");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20","211","200","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("(총 0건, 1 / 0)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","237",null,null,"20","66",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_wrkRsrvDtls");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_readonly("true");
            obj.set_positionstep("0");
            obj.set_showselection("false");
            obj.set_selectscrollmode("default");
            obj.set_cellmovingtype("col");
            obj.set_autosizebandtype("head");
            obj.set_autosizingtype("col");
            obj.set_autoenter("none");
            obj.set_cellsizingtype("none");
            obj.set_extendsizetype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"430\"/><Column size=\"74\"/><Column size=\"472\"/><Column size=\"131\"/><Column size=\"131\"/><Column size=\"131\"/><Column size=\"66\"/><Column size=\"91\"/><Column size=\"91\"/><Column size=\"128\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"작업구분\" autosizecol=\"default\" controlautosizingtype=\"none\"/><Cell col=\"1\" text=\"프로그램명\" autosizecol=\"none\" controlautosizingtype=\"none\"/><Cell col=\"2\" text=\"작업명\" autosizecol=\"default\" controlautosizingtype=\"none\"/><Cell col=\"3\" text=\"등록일시\" autosizecol=\"default\" controlautosizingtype=\"none\"/><Cell col=\"4\" text=\"예약일시\" autosizecol=\"default\" controlautosizingtype=\"none\"/><Cell col=\"5\" text=\"실행일시\" autosizecol=\"default\" controlautosizingtype=\"none\"/><Cell col=\"6\" text=\"상태\" autosizecol=\"default\" controlautosizingtype=\"none\"/><Cell col=\"7\" text=\"등록 담당자ID\" autosizecol=\"default\" controlautosizingtype=\"none\"/><Cell col=\"8\" text=\"등록 담당자\" autosizecol=\"default\" controlautosizingtype=\"none\"/><Cell col=\"9\" text=\"상세다운로드\" autosizecol=\"default\" controlautosizingtype=\"none\"/></Band><Band id=\"body\"><Cell text=\"bind:WRK_RSRV_SPR_NM\" textAlign=\"center\" displaytype=\"normal\" edittype=\"none\" controlautosizingtype=\"none\" autosizecol=\"default\"/><Cell col=\"1\" text=\"bind:RSRV_PGM_NM\" combodataset=\"ds_gUtClausSprCd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\" textAlign=\"center\" displaytype=\"normal\" edittype=\"none\" controlautosizingtype=\"none\" autosizecol=\"none\" autosizerow=\"none\"/><Cell col=\"2\" text=\"bind:WRK_RSRV_NM\" textDecoration=\"underline\" cssclass=\"grid_active\" cursor=\"pointer\" controlautosizingtype=\"none\"/><Cell col=\"3\" edittype=\"none\" calendardateformat=\"yyyy-MM-dd\" calendareditformat=\"yyyy-MM-dd\" text=\"bind:REG_DTM\" controlautosizingtype=\"none\"/><Cell col=\"4\" text=\"bind:RSRV_DTM\" textAlign=\"center\" edittype=\"none\" calendardateformat=\"yyyy-MM-dd\" calendareditformat=\"yyyy-MM-dd\" controlautosizingtype=\"none\"/><Cell col=\"5\" text=\"bind:EXCE_DTM\" controlautosizingtype=\"none\"/><Cell col=\"6\" text=\"bind:WRK_EXCE_RSLT_NM\" controlautosizingtype=\"none\"/><Cell col=\"7\" text=\"bind:REGPSN_ID\" textAlign=\"center\" controlautosizingtype=\"none\"/><Cell col=\"8\" text=\"bind:REGPSN_NM\" textAlign=\"center\" controlautosizingtype=\"none\"/><Cell col=\"9\" edittype=\"expr:WRK_EXCE_RSLT_NM !=&apos;성공&apos;?&apos;none&apos;:&apos;button&apos;\" cursor=\"pointer\" text=\"expr:WRK_EXCE_RSLT_NM==&apos;성공&apos;?&apos;상세다운로드&apos;:&apos;&apos;\" displaytype=\"expr:WRK_EXCE_RSLT_NM==&apos;성공&apos;?&apos;buttoncontrol&apos;:&apos;normal&apos;\" controlautosizingtype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","grd_list:30",null,"grd_list:36","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_excel","20","1030","1260","100",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_excel");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_readonly("true");
            obj.set_positionstep("0");
            obj.set_showselection("false");
            obj.set_selectscrollmode("default");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"97\"/><Column size=\"193\"/><Column size=\"244\"/><Column size=\"131\"/><Column size=\"131\"/><Column size=\"131\"/><Column size=\"66\"/><Column size=\"91\"/><Column size=\"91\"/><Column size=\"91\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"작업구분\"/><Cell col=\"1\" text=\"프로그램명\"/><Cell col=\"2\" text=\"작업명\"/><Cell col=\"3\" text=\"등록일시\"/><Cell col=\"4\" text=\"예약일시\"/><Cell col=\"5\" text=\"실행일시\"/><Cell col=\"6\" text=\"상태\"/><Cell col=\"7\" text=\"등록 담당자ID\"/><Cell col=\"8\" text=\"등록 담당자\"/><Cell col=\"9\" text=\"상세다운로드\"/></Band><Band id=\"body\"><Cell text=\"bind:WRK_RSRV_SPR_NM\" textAlign=\"center\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:RSRV_PGM_NM\" combodataset=\"ds_gUtClausSprCd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\" textAlign=\"center\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:WRK_RSRV_NM\" textDecoration=\"underline\" cssclass=\"grid_active\" cursor=\"pointer\"/><Cell col=\"3\" edittype=\"none\" calendardateformat=\"yyyy-MM-dd\" calendareditformat=\"yyyy-MM-dd\" text=\"bind:REG_DTM\"/><Cell col=\"4\" text=\"bind:RSRV_DTM\" textAlign=\"center\" edittype=\"none\" calendardateformat=\"yyyy-MM-dd\" calendareditformat=\"yyyy-MM-dd\"/><Cell col=\"5\" text=\"bind:EXCE_DTM\"/><Cell col=\"6\" text=\"bind:WRK_EXCE_RSLT_NM\"/><Cell col=\"7\" text=\"bind:REGPSN_ID\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:REGPSN_NM\" textAlign=\"center\"/><Cell col=\"9\" displaytype=\"buttoncontrol\" edittype=\"button\" cursor=\"pointer\" text=\"상세다운로드\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","Div00.form.cmb_wrkExceRsltCd","value","ds_search","WRK_EXCE_RSLT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div00.form.cmb_wrkRsrvSprCd","value","ds_search","WRK_RSRV_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.cmb_rsrvPgmNm","value","ds_search","RSRV_PGM_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.edt_regpsnNm","value","ds_search","REGPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.edt_wrkRsrvNm","value","ds_search","WRK_RSRV_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.cmb_regInqPerdSprCd","value","ds_search","REG_INQ_PERD_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.cmb_inqPerdSprCd","value","ds_search","INQ_PERD_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div00.form.cal_regStartDate","value","ds_search","REG_START_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div00.form.cal_regEndDate","value","ds_search","REG_END_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Div00.form.cal_exceStartDtm","value","ds_search","EXCE_START_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Div00.form.cal_exceEndDtm","value","ds_search","EXCE_END_DTM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_YA_35.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_YA_35.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_YA_35.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.fv_oApp = nexacro.getApplication();	//application object
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
        	this.gfn_formOnLoad(this);
        	this.fn_commonCodeSearch();
        	this.fn_setFromToDate(this.Div00.form.cmb_regInqPerdSprCd, this.Div00.form.cal_regStartDate, this.Div00.form.cal_regEndDate);
        	this.fn_setFromToDate(this.Div00.form.cmb_inqPerdSprCd, this.Div00.form.cal_exceStartDtm, this.Div00.form.cal_exceEndDtm);
        	this.fn_pgmMetaListSearch();
        	this.fn_search(true);
        };

        this.fn_onkeyup = function(obj,e){
        	var objType = obj.getFocus();
        	if( e.keycode == 13 && objType == "[object Edit]"){
        		this.fn_search(true);
        	}
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_search = function(bInit){
        	if(this.Div00.form.cal_regStartDate.value > this.Div00.form.cal_regEndDate.value){
        		alert("등록일시 종료일이 시작일보다 작습니다.");
        		this.Div00.form.cal_regEndDate.setFocus();
        		return;
        	}

        	if(this.Div00.form.cal_exceStartDtm.value > this.Div00.form.cal_exceEndDtm.value){
        		alert("실행일시 종료일이 시작일보다 작습니다.");
        		this.Div00.form.cal_exceEndDtm.setFocus();
        		return;
        	}

        	var sSvcId = "search";
        	var sUrl = "/co/select-wrk-rsrv-dtls-list.do";
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_wrkRsrvDtls=ds_output1";
        	var arg;

        	if(bInit) {
        		var oPaging = this.div_paging;
        		oPaging.uPage = 1;
        		oPaging.uPageNum = 0;
        		this.ds_search.setColumn(0,"START_NUM",0);
        		this.ds_search.setColumn(0,"ROW_COUNT",this.fv_oApp.gv_pageViewCnt);
        	}

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack", false);
        };

        //공통코드조회
        this.fn_commonCodeSearch = function(){
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_inqPerdSprCd=ds_output1 ds_inqPerdSprCd2=ds_output1 ds_wrkRsrvSprCd=ds_output2 ds_wrkExceRsltCd=ds_output3";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "INQ_PERD_SPR_CD,WRK_RSRV_SPR_CD,WRK_EXCE_RSLT_CD");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //작업예약프로그램메타내역 목록 조회
        this.fn_pgmMetaListSearch = function(){
        	var sSvcId = "pgmMetaSearch";
        	var sUrl = "/co/select-wrk-rsrv-pgm-meta-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_pgmMetaDtls=ds_output1";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //엑셀다운로드 데이터 조회
        this.fn_excelSearch = function(){
        	var sSvcId = "excelSearch";
        	var sUrl = "/co/select-wrk-rsrv-dtls-list.do";
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_excel=ds_output1";
        	var arg;

        	this.ds_search.setColumn(0,"START_NUM", null);
        	this.ds_search.setColumn(0,"ROW_COUNT", null);

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        this.fn_largeFileDown = function (){
        	var sSvcId = "largeFileDown";
        	var sUrl = "/pc/pc-xlsx-down/excel-prd-prc-batch.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(errorCode != 0 && errorCode != -100){
        		alert(errorMsg);
        	}

        	switch(svcID){
        	case "search":
        		this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.fv_oApp.gv_pageViewCnt,"fn_pageCallback");
        		break;
        	case "commonCodeSearch":
        		this.ds_wrkRsrvSprCd.insertRow(0);
        		this.ds_wrkRsrvSprCd.setColumn(0,"COM_DTL_CD_NM","전체");

        		this.ds_wrkExceRsltCd.insertRow(0);
        		this.ds_wrkExceRsltCd.setColumn(0,"COM_DTL_CD_NM","전체");
        		this.Div00.form.cmb_regInqPerdSprCd.set_index(1);
        		this.Div00.form.cmb_inqPerdSprCd.set_index(1);
        		break;
        	case "pgmMetaSearch":
        		this.ds_pgmMetaDtls.insertRow(0);
        		this.ds_pgmMetaDtls.setColumn(0,"RSRV_PGM_NM","전체");
        		break;
        	case "excelSearch":
        		this.ofn_exportExcel({form:this, grid:this.grd_excel, fileName:"작업예약관리"});
        		break;
        	default:
        		break;
        	}
        };

        //페이징 콜백
        this.fn_pageCallback = function(sFlag){
        	var oPaging = this.div_paging;

        	if(sFlag){
        		this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.fv_oApp.gv_pageViewCnt);
        		this.fn_search();
        	}

        	var sTotText = "(총 "+ this.gfn_appendComma(oPaging.uTotCount, 0)+"건, "+ this.gfn_appendComma(oPaging.uPage, 0) +" / "+ this.gfn_appendComma(oPaging.uPageCnt, 0) +")";
        	this.sta_totcnt.set_text(sTotText);
        };

        //정렬콜백
        this.fn_sortCallback = function(sGridId){
        	var oGrid = null;
        	if(sGridId == "grd_list"){
        		oSortInfo = this.grd_list.uaSortInfo;
        		this.ds_search.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
        		this.ds_search.setColumn(0,"SORT_TYPE",oSortInfo.status);
        		this.fn_search();
        	}
        };

        this.fn_popupCallback = function(sPopupId, sRetValue){
        	switch(sPopupId){
        		//등록,상세 팝업 콜백
        	case "SSP_BO_YA_36":
        	case "SSP_BO_YA_37":
        		if(sRetValue){
        			this.fn_search(true);
        		}

        		break;
        	default:
        		break;
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
        	this.grd_list.uDefaultFormat = "WRK_RSRV_SPR_NM,RSRV_PGM_NM,REG_DTM,RSRV_DTM,EXCE_DTM,WRK_EXCE_RSLT_NM,REGPSN_ID,REGPSN_NM";
        };

        this.cfn_personalPopupClose = function(sRet){
        	this.grd_list.set_formats(sRet);
        	this.pdiv_personal.closePopup();
        };
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //조회 click  이벤트
        this.btn_search_onclick = function(obj,e){
        	this.fn_search(true);
        };

        //실행일 조회기간 콤보박스 onitemchanged
        this.cmb_inqPerdSprCd_onitemchanged = function(obj,e)
        {
        	this.fn_setFromToDate(this.Div00.form.cmb_inqPerdSprCd, this.Div00.form.cal_exceStartDtm, this.Div00.form.cal_exceEndDtm);
        };

        //등록일 조회기간 콤보박스 onitemchanged
        this.cmb_regInqPerdSprCd_onitemchanged = function(obj,e)
        {
        	this.fn_setFromToDate(this.Div00.form.cmb_regInqPerdSprCd, this.Div00.form.cal_regStartDate, this.Div00.form.cal_regEndDate);
        };

        //등록화면 이동
        this.btn_regist_onclick = function(obj,e)
        {
        	this.gfn_openPopup("SSP_BO_YA_36", "CO_POP::SSP_BO_YA_36.xfdl");
        };

        //제목 클릭시 상세보기 팝업 호출
        this.grd_list_oncellclick = function(obj,e)
        {
        	if(e.cell == 2){
        		var objParam = {};
        		objParam.wrkSeq = this.ds_wrkRsrvDtls.getColumn(e.row, "WRK_SEQ");
        		objParam.rsrvPgmId = this.ds_wrkRsrvDtls.getColumn(e.row, "RSRV_PGM_ID");
        		this.gfn_openPopup("SSP_BO_YA_37", "CO_POP::SSP_BO_YA_37.xfdl", objParam);
        	}else if(e.cell == 9){
            var wrknm =	this.ds_wrkRsrvDtls.getColumn(e.row, "WRK_EXCE_RSLT_NM");
        		if(wrknm !='실패'){
        		var sReturn = this.confirm("다운로드 하시겠습니까?");
        		if(sReturn == true){
        			this.ds_search.setColumn(0,"WRK_SEQ",this.ds_wrkRsrvDtls.getColumn(e.row,"WRK_SEQ"));
        			this.ds_search.setColumn(0,"EXCE_DTM",this.ds_wrkRsrvDtls.getColumn(e.row,"EXCE_DTM"));
        			this.ds_search.setColumn(0,"DOWNLOAD_SPR_CD", this.ds_wrkRsrvDtls.getColumn(e.row,"WRK_RSRV_SPR_CD"));
        			this.fn_largeFileDown();
        			}
        		}
        	}
        };

        //레이아웃 저장 버튼 클릭
        this.btn_layoutSave_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grd_list", this.grd_list.getCurFormatString());
        };

        //레이아웃 초기화 버튼 클릭
        this.btn_layoutClear_onclick = function(obj,e)
        {
        	//suOrgFormat
        	this.gfn_personalSave("grd_list", this.grd_list.uOrgFormat);
        	this.grd_list.set_formats(this.grd_list.uOrgFormat);
        };

        //초기화
        this.btn_clear_onclick = function(obj,e)
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.fn_setFromToDate(this.Div00.form.cmb_regInqPerdSprCd, this.Div00.form.cal_regStartDate, this.Div00.form.cal_regEndDate);
        	this.fn_setFromToDate(this.Div00.form.cmb_inqPerdSprCd, this.Div00.form.cal_exceStartDtm, this.Div00.form.cal_exceEndDtm);
        	this.Div00.form.cmb_regInqPerdSprCd.set_index(1);
        	this.Div00.form.cmb_inqPerdSprCd.set_index(1);
        };

        //엑셀 다운로드
        this.btn_excel_onclick = function(obj,e)
        {
        	if(this.ds_search.getRowType(0) == Dataset.ROWTYPE_UPDATE) {
        		alert('조회 조건이 변경 되었습니다.\n다시 조회하시기 바랍니다.');
        		return;
        	}

        	this.fn_excelSearch();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div00.form.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.Div00.form.Static06.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.cal_regStartDate.addEventHandler("ondropdown",this.cal_regStartDate_ondropdown,this);
            this.Div00.form.Static06_00.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Static06_00_00.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.cmb_regInqPerdSprCd.addEventHandler("onitemchanged",this.cmb_regInqPerdSprCd_onitemchanged,this);
            this.Div00.form.cal_exceStartDtm.addEventHandler("ondropdown",this.cal_regStartDate_ondropdown,this);
            this.Div00.form.cmb_inqPerdSprCd.addEventHandler("onitemchanged",this.cmb_inqPerdSprCd_onitemchanged,this);
            this.Div00.form.Static06_01.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.btn_layoutClear.addEventHandler("onclick",this.btn_layoutClear_onclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_excel.addEventHandler("onclick",this.btn_excel_onclick,this);
            this.btn_regist.addEventHandler("onclick",this.btn_regist_onclick,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.grd_excel.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
        };
        this.loadIncludeScript("SSP_BO_YA_35.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
