(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BA_CO_07");
            this.set_titletext("배치프로그램 변경이력");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"thmeDomnCd\" type=\"STRING\" size=\"256\"/><Column id=\"batServerSeq\" type=\"INT\" size=\"256\"/><Column id=\"serverNm\" type=\"STRING\" size=\"256\"/><Column id=\"prtclCd\" type=\"STRING\" size=\"256\"/><Column id=\"ipAddr\" type=\"STRING\" size=\"256\"/><Column id=\"port\" type=\"STRING\" size=\"256\"/><Column id=\"batPgmId\" type=\"STRING\" size=\"256\"/><Column id=\"batPgmNm\" type=\"STRING\" size=\"256\"/><Column id=\"batStat\" type=\"STRING\" size=\"256\"/><Column id=\"rsrvSprCd\" type=\"STRING\" size=\"256\"/><Column id=\"rsrvSch\" type=\"STRING\" size=\"256\"/><Column id=\"exceStatsCd\" type=\"STRING\" size=\"256\"/><Column id=\"nxtEndDtm\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"nxtStartDtm\" type=\"STRING\" size=\"256\"/><Column id=\"logLvl\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"classMethodNm\" type=\"STRING\" size=\"256\"/><Column id=\"sortColumn\" type=\"STRING\" size=\"256\"/><Column id=\"sortType\" type=\"STRING\" size=\"256\"/><Column id=\"svrChkYn\" type=\"STRING\" size=\"256\"/><Column id=\"strUpdDtm\" type=\"STRING\" size=\"256\"/><Column id=\"endUpdDtm\" type=\"STRING\" size=\"256\"/><Column id=\"startNum\" type=\"STRING\" size=\"256\"/><Column id=\"rowCount\" type=\"STRING\" size=\"256\"/><Column id=\"updpsnNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"thmeDomnCd\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"thmeDomnCd\" type=\"STRING\" size=\"256\"/><Column id=\"batPgmSeq\" type=\"INT\" size=\"256\"/><Column id=\"batServerSeq\" type=\"INT\" size=\"256\"/><Column id=\"serverNm\" type=\"STRING\" size=\"256\"/><Column id=\"prtclCd\" type=\"STRING\" size=\"256\"/><Column id=\"ipAddr\" type=\"STRING\" size=\"256\"/><Column id=\"port\" type=\"STRING\" size=\"256\"/><Column id=\"batPgmId\" type=\"STRING\" size=\"256\"/><Column id=\"batPgmNm\" type=\"STRING\" size=\"256\"/><Column id=\"batStat\" type=\"STRING\" size=\"256\"/><Column id=\"rsrvSprCd\" type=\"STRING\" size=\"256\"/><Column id=\"rsrvSch\" type=\"STRING\" size=\"256\"/><Column id=\"useYnTxt\" type=\"STRING\" size=\"256\"/><Column id=\"classMethodNm\" type=\"STRING\" size=\"256\"/><Column id=\"remark\" type=\"STRING\" size=\"256\"/><Column id=\"exceStatsCdTxt\" type=\"STRING\" size=\"256\"/><Column id=\"updDtm\" type=\"STRING\" size=\"256\"/><Column id=\"updpsnNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_dateUnit", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD\">0</Col><Col id=\"COM_DTL_CD_NM\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detailSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdClsfChrpsnSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search2", this);
            obj._setContents("<ColumnInfo><Column id=\"thmeDomnCd\" type=\"STRING\" size=\"256\"/><Column id=\"batServerSeq\" type=\"INT\" size=\"256\"/><Column id=\"serverNm\" type=\"STRING\" size=\"256\"/><Column id=\"ipAddr\" type=\"STRING\" size=\"256\"/><Column id=\"batPgmId\" type=\"STRING\" size=\"256\"/><Column id=\"batPgmNm\" type=\"STRING\" size=\"256\"/><Column id=\"batStat\" type=\"STRING\" size=\"256\"/><Column id=\"rsrvSprCd\" type=\"STRING\" size=\"256\"/><Column id=\"rsrvSch\" type=\"STRING\" size=\"256\"/><Column id=\"strDtm\" type=\"STRING\" size=\"256\"/><Column id=\"endDtm\" type=\"STRING\" size=\"256\"/><Column id=\"exceStatsCd\" type=\"STRING\" size=\"256\"/><Column id=\"nxtEndDtm\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"nxtStartDtm\" type=\"STRING\" size=\"256\"/><Column id=\"logLvl\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"thmeDomnCd\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_exceStatsCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_output", this);
            obj._setContents("<ColumnInfo><Column id=\"statCode\" type=\"STRING\" size=\"256\"/><Column id=\"statMsg\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bat_pgm", this);
            obj._setContents("<ColumnInfo><Column id=\"serverNm\" type=\"STRING\" size=\"256\"/><Column id=\"prtclCd\" type=\"STRING\" size=\"256\"/><Column id=\"ipAddr\" type=\"STRING\" size=\"256\"/><Column id=\"port\" type=\"STRING\" size=\"256\"/><Column id=\"batPgmId\" type=\"STRING\" size=\"256\"/><Column id=\"batPgmNm\" type=\"STRING\" size=\"256\"/><Column id=\"batPgmSeq\" type=\"INT\" size=\"256\"/><Column id=\"batServerSeq\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bat_pgm_ids", this);
            obj._setContents("<ColumnInfo><Column id=\"batPgmId\" type=\"STRING\" size=\"256\"/><Column id=\"batPgmIdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search3", this);
            obj._setContents("");
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

            obj = new Static("Static02","20","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("주제영역");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_thmeDomnCd","159","24","130","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_innerdataset("ds_thmeDomnCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","622","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("배치프로그램명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10","20","51","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("변경자");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static66","622","51","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("변경실행일시");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo50","159","-93","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo51","1021","-93","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"124","60","26","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"124","60","26","84",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("초기화");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static65_00","20","82",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static66_00","622","82","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("클래스_메소드명");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10_01","20","82","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("배치프로그램ID");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_batPgmId","159","86","200","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_innerdataset("ds_bat_pgm_ids");
            obj.set_codecolumn("batPgmId");
            obj.set_datacolumn("batPgmIdNm");
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00","314","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("실행서버");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_batSvrType","451","24","130","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_batSvrType");
            obj.set_codecolumn("batServerSeq");
            obj.set_datacolumn("serverNm");
            obj.set_text("");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_batPgmNm","763","24","200","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_enable("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static59_00","908","55","9","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_text("~");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_strUptDtm","764","55","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_endUptDtm","920","55","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_inqPerdSprCd","1064","55","100","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_innerdataset("ds_inqPerdSprCd");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_text("");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_classMethodNm","763","86","200","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_enable("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_updpsnNm","159","55","200","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_enable("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","222",null,null,"20","110",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("none");
            obj.set_cssclass("grd_WF_list");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list");
            obj.set_autosizingtype("none");
            obj.set_autosizebandtype("body");
            obj.set_selecttype("multiarea");
            obj.set_cellmovingtype("col");
            obj.set_selectscrollmode("default");
            obj.set_nodatatext("조회 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"240\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"125\"/><Column size=\"125\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"주제영역\"/><Cell col=\"1\" text=\"실행서버명\"/><Cell col=\"2\" text=\"실행서버IP\"/><Cell col=\"3\" text=\"배치프로그램 ID\"/><Cell col=\"4\" text=\"배치프로그램명\"/><Cell col=\"5\" text=\"예약구분\"/><Cell col=\"6\" text=\"예약일정\"/><Cell col=\"7\" text=\"사용여부\"/><Cell col=\"8\" text=\"클래스_메소드\"/><Cell col=\"9\" text=\"비고\"/><Cell col=\"10\" text=\"변경일시\"/><Cell col=\"11\" text=\"변경자\"/></Band><Band id=\"body\"><Cell text=\"bind:thmeDomnCd\" autosizecol=\"default\" wordWrap=\"none\" autosizerow=\"default\" controlautosizingtype=\"none\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:serverNm\" autosizecol=\"default\" wordWrap=\"none\" autosizerow=\"default\" controlautosizingtype=\"none\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:ipAddr\" autosizerow=\"default\" wordWrap=\"none\"/><Cell col=\"3\" text=\"bind:batPgmId\" autosizerow=\"default\" wordWrap=\"none\" color=\"#000000\"/><Cell col=\"4\" text=\"bind:batPgmNm\" autosizerow=\"default\" wordWrap=\"none\"/><Cell col=\"5\" text=\"bind:rsrvSprCd\" autosizerow=\"default\" wordWrap=\"none\"/><Cell col=\"6\" text=\"bind:rsrvSch\" autosizerow=\"default\" wordWrap=\"none\"/><Cell col=\"7\" text=\"bind:useYnTxt\"/><Cell col=\"8\" text=\"bind:classMethodNm\" calendardateformat=\"yyyy-MM-dd hh:mm:ss\" autosizerow=\"default\" wordWrap=\"none\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" text=\"bind:remark\"/><Cell col=\"10\" text=\"bind:updDtm\" calendardateformat=\"yyyy-MM-dd hh:mm:ss\" autosizerow=\"default\" wordWrap=\"none\" calendardisplaynulltype=\"none\"/><Cell col=\"11\" text=\"bind:updpsnNm\" autosizerow=\"default\" wordWrap=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20","197","300","14",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("(총 0건 0 / 0)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list_excel","19","950",null,null,"21","-204",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list");
            obj.set_autosizingtype("none");
            obj.set_autosizebandtype("body");
            obj.set_selecttype("row");
            obj.set_cellmovingtype("none");
            obj.set_selectscrollmode("default");
            obj.set_cellsizingtype("both");
            obj.set_nodatatext("조회 결과가 없습니다.");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"200\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"135\"/><Column size=\"135\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"주제영역\"/><Cell col=\"1\" text=\"실행서버명\"/><Cell col=\"2\" text=\"실행서버IP\"/><Cell col=\"3\" text=\"배치프로그램 ID\"/><Cell col=\"4\" text=\"배치프로그램명\"/><Cell col=\"5\" text=\"예약구분\"/><Cell col=\"6\" text=\"예약일정\"/><Cell col=\"7\" text=\"사용여부\"/><Cell col=\"8\" text=\"클래스_메소드\"/><Cell col=\"9\" text=\"비고\"/><Cell col=\"10\" text=\"변경일시\"/><Cell col=\"11\" text=\"변경자\"/></Band><Band id=\"body\"><Cell text=\"bind:thmeDomnCd\" autosizecol=\"default\" wordWrap=\"char\" autosizerow=\"default\" controlautosizingtype=\"none\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:serverNm\" autosizecol=\"default\" wordWrap=\"char\" autosizerow=\"default\" controlautosizingtype=\"none\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:ipAddr\" autosizerow=\"default\" wordWrap=\"char\"/><Cell col=\"3\" text=\"bind:batPgmId\" autosizerow=\"default\" wordWrap=\"char\" color=\"#000000\"/><Cell col=\"4\" text=\"bind:batPgmNm\" autosizerow=\"default\" wordWrap=\"char\"/><Cell col=\"5\" text=\"bind:rsrvSprCd\" autosizerow=\"default\" wordWrap=\"char\"/><Cell col=\"6\" text=\"bind:rsrvSch\" autosizerow=\"default\" wordWrap=\"char\"/><Cell col=\"7\" text=\"bind:useYnTxt\"/><Cell col=\"8\" text=\"bind:classMethodNm\"/><Cell col=\"9\" text=\"bind:remark\"/><Cell col=\"10\" text=\"bind:updDtm\" calendardateformat=\"yyyy-MM-dd hh:mm:ss\" autosizerow=\"default\" wordWrap=\"char\" calendardisplaynulltype=\"none\"/><Cell col=\"11\" text=\"bind:updpsnNm\" calendardateformat=\"yyyy-MM-dd hh:mm:ss\" autosizerow=\"default\" wordWrap=\"char\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","766",null,"30","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exceldown",null,"184","110","28","132",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_viewCount",null,"184","104","28","22",null,null,null,null,null,this);
            obj.set_taborder("6");
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
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item6","Div00.form.cmb_batPgmId","value","ds_search","batPgmId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cmb_inqPerdSprCd","value","ds_search","INQ_PERD_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cal_nxtStartDtm","value","ds_search","nxtStartDtm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cal_nxtEndDtm","value","ds_search","nxtEndDtm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","cmb_inqPerdSprCd2","value","ds_search","REG_INQ_PERD_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.cmb_thmeDomnCd","value","ds_search","thmeDomnCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div00.form.cmb_batSvrType","value","ds_search","batServerSeq");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Div00.form.edt_batPgmNm","value","ds_search","batPgmNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","Div00.form.cal_strUptDtm","value","ds_search","strUpdDtm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","Div00.form.cal_endUptDtm","value","ds_search","endUpdDtm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div00.form.edt_classMethodNm","value","ds_search","classMethodNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.edt_updpsnNm","value","ds_search","updpsnNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BA_CO_07.xfdl","CO::coUtils.xjs");
        this.registerScript("SSP_BA_CO_07.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();
        this.fn_onLoad = function(obj,e){
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	//this.fn_search(true);
        	console.log("시작!!");
        	this.fn_commonCodeSearch();
        	this.Div00.form.cmb_inqPerdSprCd.value = "7";		//기간 설정 1년으로 지정
        	this.fn_setFromToDate(this.Div00.form.cmb_inqPerdSprCd, this.Div00.form.cal_strUptDtm, this.Div00.form.cal_endUptDtm);
        	this.fn_batSvrSearch();
        	this.fn_batPgmIds();
        };

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
            var sUrl = "/ba/bat-adm/bat-pgm-chg-hst-list.do";
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

        //공통코드조회
        this.fn_commonCodeSearch = function(){

            var sSvcId = "commonCodeSearch";
            var sUrl = "/co/select-common-code-list.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_thmeDomnCd=ds_output1 ds_inqPerdSprCd=ds_output2";
            var arg = "";

            this.ds_search.setColumn(0, "CODE_LIST", "THME_DOMN_CD,INQ_PERD_SPR_CD,EXCE_STATS_CD");
            this.ds_search.setColumn(0, "LANG_CD", "KO");
            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //배치 프로그램ID combo box DataSet
        this.fn_batPgmIds = function(){
        	var sSvcId = "ds_bat_pgm_ids";
            var sUrl = "/ba/bat-adm/bat-pgm-list.do";
            var inDs = "ds_search=ds_search3";
            var outDs = "ds_bat_pgm_ids=ds_list";
            var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }


        //배치프로그램 실행
        this.fn_runBatPgm = function(rowNum){
        	var sSvcId = "runBatPgm";
            var sUrl = "/ba/bat-adm/run-bat-pgm.do";
            var inDs = "ds_bat_pgm=ds_bat_pgm";
            var outDs = "ds_output=ds_output";
            var arg = "";

        	var prtclCd = this.ds_list.getColumn(rowNum, "prtclCd");
        	var ipAddr = this.ds_list.getColumn(rowNum, "ipAddr");
        	var port = this.ds_list.getColumn(rowNum, "port");
        	var serverNm = this.ds_list.getColumn(rowNum, "serverNm");
        	var batPgmId = this.ds_list.getColumn(rowNum, "batPgmId");
        	var batPgmNm = this.ds_list.getColumn(rowNum, "batPgmNm");
        	var batPgmSeq = this.ds_list.getColumn(rowNum, "batPgmSeq");
        	var batServerSeq = this.ds_list.getColumn(rowNum, "batServerSeq");

        	this.ds_bat_pgm.setColumn(0, "prtclCd", prtclCd);
        	this.ds_bat_pgm.setColumn(0, "ipAddr", ipAddr);
        	this.ds_bat_pgm.setColumn(0, "port", port);
        	this.ds_bat_pgm.setColumn(0, "serverNm", serverNm);
        	this.ds_bat_pgm.setColumn(0, "batPgmId", batPgmId);
        	this.ds_bat_pgm.setColumn(0, "batPgmNm", batPgmNm);
        	this.ds_bat_pgm.setColumn(0, "batPgmSeq", batPgmSeq);
        	this.ds_bat_pgm.setColumn(0, "batServerSeq", batServerSeq);


            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        //배치프로그램 강제종료
        this.fn_endBatPgm = function(rowNum){
        	var sSvcId = "endBatPgm";
            var sUrl = "/ba/bat-adm/end-bat-pgm.do";
            var inDs = "ds_bat_pgm=ds_bat_pgm";
            var outDs = "ds_output=ds_output";
            var arg = "";

        	var prtclCd = this.ds_list.getColumn(rowNum, "prtclCd");
        	var ipAddr = this.ds_list.getColumn(rowNum, "ipAddr");
        	var port = this.ds_list.getColumn(rowNum, "port");
        	var serverNm = this.ds_list.getColumn(rowNum, "serverNm");
        	var batPgmId = this.ds_list.getColumn(rowNum, "batPgmId");
        	var batPgmNm = this.ds_list.getColumn(rowNum, "batPgmNm");
        	var batPgmSeq = this.ds_list.getColumn(rowNum, "batPgmSeq");
        	var batServerSeq = this.ds_list.getColumn(rowNum, "batServerSeq");

        	this.ds_bat_pgm.setColumn(0, "prtclCd", prtclCd);
        	this.ds_bat_pgm.setColumn(0, "ipAddr", ipAddr);
        	this.ds_bat_pgm.setColumn(0, "port", port);
        	this.ds_bat_pgm.setColumn(0, "serverNm", serverNm);
        	this.ds_bat_pgm.setColumn(0, "batPgmId", batPgmId);
        	this.ds_bat_pgm.setColumn(0, "batPgmNm", batPgmNm);
        	this.ds_bat_pgm.setColumn(0, "batPgmSeq", batPgmSeq);
        	this.ds_bat_pgm.setColumn(0, "batServerSeq", batServerSeq);


            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg) {
            switch(svcID) {
                case "search" :
                    this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.fv_oApp.gv_pageViewCnt,"fn_pageCallback");
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
        			 this.Div00.form.cmb_batPgmId.set_index(0);

                    break;

        		case "batSvrSearch" :
        			 this.ds_batSvrType.insertRow(0);
                     this.ds_batSvrType.setColumn(0, "batServerSeq", "");
                     this.ds_batSvrType.setColumn(0, "serverNm", "선택");
        			 this.Div00.form.cmb_batSvrType.set_index(0);

                    break;

        		case "runBatPgm" :
        			var statCode = this.ds_output.getColumn(0, "statCode");
        			var statMsg = this.ds_output.getColumn(0, "statMsg");
        			if(statCode == "10"){
        				alert(statMsg);
        				this.fn_search(true);
        			}
        			else{
        				alert(statMsg);
        			}

                    break;

        		case "endBatPgm" :
        			var statCode = this.ds_output.getColumn(0, "statCode");
        			var statMsg = this.ds_output.getColumn(0, "statMsg");
        			if(statCode == "10"){
        				alert(statMsg);
        				this.fn_search(true);
        			}
        			else{
        				alert(statMsg);
        			}

                    break;
        		case "ds_bat_pgm_ids" :
        			this.ds_bat_pgm_ids.insertRow(0);
        			this.ds_bat_pgm_ids.setColumn(0, "batPgmId", "");
        			this.ds_bat_pgm_ids.setColumn(0, "batPgmIdNm", "선택");
        			this.Div00.form.cmb_batPgmId.set_index(0);

        			break;
            }
        };

        this.fn_pageCallback = function(sFlag){
            var oPaging = this.div_paging;

            if(sFlag){
                this.ds_search.setColumn(0,"startNunm", oPaging.uPageNum);
                this.ds_search.setColumn(0,"rowCount", this.fv_oApp.gv_pageViewCnt);
                this.fn_search();
            }

        	var sTotText = "(총 "+ this.gfn_appendComma(oPaging.uTotCount, 0) +"건 </b>"+ this.gfn_appendComma(oPaging.uPage) +" / "+ this.gfn_appendComma(oPaging.uPageCnt) +")";
            this.totalPageCount.set_text(sTotText);
        };

        //팝업콜백
        this.fn_popupCallback = function(svcID, args){
            switch(svcID) {
                case "btn_categoryPopup" :
        			if(typeof args != 'undefined'){
        				var jsonData = JSON.parse(args);
        				this.Div00.form.edt_prdClcd.set_value(jsonData.PRD_CLCD);
        				this.Div00.form.edt_prdClsfNm.set_value(jsonData.PRD_CLSF_NM);
        			}

                    break;

                case "btn_psnPopup" :
        			if(typeof args != 'undefined'){
        				var jsonData = JSON.parse(args);
        				this.Div00.form.edt_psnId.set_value(jsonData.EMP_NO);
        				this.Div00.form.edt_psnNm.set_value(jsonData.OPRTR_NM);
        			}

                    break;

                case "btn_create" :
                    if(args){
                        this.fn_search(false);
                    }

                    break;

                case "prdOprtrDetail" :
                    if(args){
                        this.fn_search(false);
                    }

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
        //화면 설정 함수
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

        	this.uGridList="grd_list";
        	this.grd_list.uRightMouse="true";
        	this.grd_list.uPersonalFlag="true";
        	this.grd_list.uDefaultFormat="PRD_CLCD|PRD_CLSF_NM|ORG_NM|EMP_NO|OPRTR_NM|PRD_CLSF_CHRPSN_SPR_CD|PRD_CLSF_CHRPSN_USEYN|REG_DTM|REGPSN_ID|UPD_DTM|UPDPSN_ID";
        }
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

        //초기화
        this.fn_init = function() {
            this.ds_search.clearData();
            this.ds_search.insertRow();
        	this.Div00.form.cmb_inqPerdSprCd.value = "7";		//기간 설정 1년으로 지정
        	this.fn_setFromToDate(this.Div00.form.cmb_inqPerdSprCd, this.Div00.form.cal_strUptDtm, this.Div00.form.cal_endUptDtm);
        	this.Div00.form.cmb_inqPerdSprCd.set_index(6);
        	this.Div00.form.cmb_batPgmId.set_index(0);
        	this.Div00.form.cmb_thmeDomnCd.set_index(0);
        	this.Div00.form.cmb_batSvrType.set_index(0);
        }

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
        //달력콤보선택
        this.cmb_dateUnit_onitemchanged = function(obj,e)
        {
            this.fn_setSearchDate();
        };

        //조회버튼
        this.btn_search_onclick = function(obj,e)
        {
        	//this.ds_search.copyData(this.ds_search2, true);
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
        		this.gfn_excelExport(this.grd_list_excel, "배치프로그램 변경이력", "배치프로그램 변경이력", null, ["CHK"]);
        	}else{
        		alert('엑셀 파일로 다운로드 할 수 있는 자료가 없습니다.');
        	}
        };

        //그리드 cell 클릭시
        this.grd_list_oncellclick = function(obj,e)
        {
        	var bindText = this.grd_list.getCellProperty("body", e.col, "text");
            if(bindText == "bind:batPgmId"){	//상세화면 팝업
                if(this.gfn_isNull(this.ds_list.getColumn(e.row, "batPgmSeq"))){
                    return false;
                }

                var params = {
                    batPgmSeq:this.ds_list.getColumn(e.row, "batPgmSeq")
                };

                var options = {};
                this.gfn_openPopup('uptBatPgm', "BA::SSP_BA_CO_03.xfdl", params,  "fn_popupCallback", options);
            }

        	if(e.col == 12){	//조회
        		var param = {batPgmSeq:this.ds_list.getColumn(e.row, "batPgmSeq")};
        		//this.fn_tabOnClose(obj.tabpages[e.index].name);
        		this.fn_tabOnClose("win9122000000");
        		this.gfn_menuOpen("9122000000", param);
        	}

        	if(e.col == 13){	//실행
        		if(this.ds_list.getColumn(e.row, "exceStatsCd") != "30"){
        			var sReturn = this.confirm(this.gfn_getMessage("COMS000013", ["배치프로그램을 실행 "])); //저장하시겠습니까
        			//var sReturn = this.confirm(this.gfn_getMessage("BACF000001"));

        			if(sReturn == true){
        				this.fn_runBatPgm(e.row);
        			}
        		}
        	}

        	if(e.col == 14){	//강제종료
        		if(this.ds_list.getColumn(e.row, "exceStatsCd") == "30"){
        			//var sReturn = this.confirm(this.gfn_getMessage("COMS000013", ["실행 중인 배치프로그램을 강제로 종료"])); //저장하시겠습니까
        			var sReturn = this.confirm(this.gfn_getMessage("BACF000002"));

        			if(sReturn == true){
        				this.fn_endBatPgm(e.row);
        			}
        		}
        	}
        };

        //다음실행일시 조회기간 콤보박스 변경
        this.cmb_inqPerdSprCd_onitemchanged = function(obj,e)
        {
        	this.fn_setFromToDate(this.Div00.form.cmb_inqPerdSprCd, this.Div00.form.cal_strUptDtm, this.Div00.form.cal_endUptDtm);
        };

        //다음실행일시 날짜 비교
        this.fn_nxtExceDate_oncloseup = function(obj,e)
        {
        	if(this.Div00.form.cal_strUptDtm.value > this.Div00.form.cal_endUptDtm.value){
        		alert(this.gfn_getMessage("ERRC000192")); //시작일이 종료일보다 클 수 없습니다.

         		this.Div00.form.cal_strUptDtm.set_value(this.ds_search2.getColumn(0, "nxtStartDtm"));
        		this.Div00.form.cal_endUptDtm.set_value(this.ds_search2.getColumn(0, "nxtEndDtm"));
        	}
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
            this.Div00.form.cal_strUptDtm.addEventHandler("onchanged",this.fn_nxtExceDate_oncloseup,this);
            this.Div00.form.cal_strUptDtm.addEventHandler("oncloseup",this.fn_nxtExceDate_oncloseup,this);
            this.Div00.form.cal_endUptDtm.addEventHandler("oncloseup",this.fn_nxtExceDate_oncloseup,this);
            this.Div00.form.cal_endUptDtm.addEventHandler("onchanged",this.fn_nxtExceDate_oncloseup,this);
            this.Div00.form.cmb_inqPerdSprCd.addEventHandler("onitemchanged",this.cmb_inqPerdSprCd_onitemchanged,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.grd_list_excel.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.btn_exceldown.addEventHandler("onclick",this.btn_exceldown_onclick,this);
        };
        this.loadIncludeScript("SSP_BA_CO_07.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
