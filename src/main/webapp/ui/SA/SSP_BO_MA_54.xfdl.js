(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_MA_54");
            this.set_titletext("쿠폰 - 목록 - 회원");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_EVT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_KND_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_STATE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/><Col id=\"CPN_EVT_NO\"/><Col id=\"CPN_KND_CD\"/><Col id=\"CPN_NM\"/><Col id=\"CPN_STATE_CD\"/><Col id=\"START_DATE\"/><Col id=\"END_DATE\"/><Col id=\"START_NUM\"/><Col id=\"ROW_COUNT\"/><Col id=\"SORT_COLUMN\"/><Col id=\"SORT_TYPE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchComCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comboCpnKndCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gridCpnInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_EVT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_KND_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NOTIC_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_DC_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DC_AMT_DCRT\" type=\"STRING\" size=\"256\"/><Column id=\"MIN_PURG_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_DC_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"PUBC_STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PUBC_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PUBC_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"UNLMT_PUBC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_PUBC_MTHD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPNBOX_EXPS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_USE_PERD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_USE_STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_USE_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_PSB_DCNT\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_GUDC\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_APLY_TGT_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_EXCPT_TGT_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_PUBC_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_USE_ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_USE_ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_ODR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_KND_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NOTIC_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_DC_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UNLMT_PUBC_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_PUBC_MTHD_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPNBOX_EXPS_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_USE_PERD_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_APLY_TGT_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_EXCPT_TGT_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_STATE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_STATE_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_PUBC_MBR_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cpnInfoMbrCount", this);
            obj._setContents("<ColumnInfo><Column id=\"CPN_CNT01\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_CNT02\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_CNT03\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inqPerdSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","0",null,"201","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo50","159","-73","150","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("Combo51","1021","-73","150","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03","20","82",null,"32","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static65_00","20","113",null,"32","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_02_01","0","145","1336","10",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("H10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static22","452","82","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("쿠폰 상태");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_searchCpnEvtNo","1024","86","281","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbx_searchTermType","371","117","71","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_inqPerdSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("1주일");
            obj.set_value("2");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_searchEndDate","272","117","95","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static59","259","117","9","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_searchStartDate","160","117","95","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_03_01","255","114","5","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_text("W5");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00","267","114","5","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_text("W5");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_searchCpnNm","1024","117","281","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_init",null,"155","60","26","84",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_text("초기화");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"155","60","26","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","20","82","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_text("쿠폰 종류");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","884","82","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_text("쿠폰 이벤트 번호");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static08","884","113","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("18");
            obj.set_text("쿠폰 명");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static10","20","113","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("19");
            obj.set_text("기간");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Radio("rdo_searchCpnKndCd","160","86","170","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("20");
            obj.set_innerdataset("ds_comboCpnKndCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_direction("vertical");
            obj.set_text("A");
            obj.set_value("1");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_02","582","83","301","3",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("21");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_03","582","83","10","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("22");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_02_02","582","110","301","3",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("23");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_03_00","874","83","10","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("24");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03_00","20","20",null,"32","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static24","452","20","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("26");
            obj.set_text("사용한 쿠폰");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_CpnCnt03","1024","24","281","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("27");
            obj.set_textAlign("right");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static23","20","20","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("28");
            obj.set_text("사용가능 쿠폰");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static25","884","20","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("29");
            obj.set_text("만료된 쿠폰");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_CpnCnt01","160","24","281","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("30");
            obj.set_textAlign("right");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_CpnCnt02","592","24","281","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("31");
            obj.set_textAlign("right");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01","0","52","1336","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("32");
            obj.set_text("H30");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Radio("rdo_searchCpnStateCd","592","86","240","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("33");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div_search_form_rdo_searchCpnStateCd_innerdataset = new nexacro.NormalDataset("div_search_form_rdo_searchCpnStateCd_innerdataset", obj);
            div_search_form_rdo_searchCpnStateCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col><Col id=\"codecolumn\"/></Row><Row><Col id=\"datacolumn\">사용</Col><Col id=\"codecolumn\">Y</Col></Row><Row><Col id=\"datacolumn\">미사용</Col><Col id=\"codecolumn\">N</Col></Row><Row><Col id=\"datacolumn\">만료</Col><Col id=\"codecolumn\">END</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_rdo_searchCpnStateCd_innerdataset);
            obj.set_text("A");
            obj.set_value("1");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_totalCount","20","241","121","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("(총 0건 0/0)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_cpnInfo","20","269",null,"471","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_gridCpnInfo");
            obj.set_autosizingtype("row");
            obj.set_cellsizingtype("col");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"370\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"60\"/></Columns><Rows><Row size=\"37\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"쿠폰 이벤트 번호\"/><Cell col=\"1\" text=\"쿠폰 상태\"/><Cell col=\"2\" text=\"쿠폰 종류\"/><Cell col=\"3\" text=\"쿠폰명\"/><Cell col=\"4\" text=\"할인 금액/율&#13;&#10;(최대 할인 금액)\"/><Cell col=\"5\" text=\"발행일\"/><Cell col=\"6\" text=\"사용시작일\"/><Cell col=\"7\" text=\"사용종료일\"/><Cell col=\"8\" text=\"사용일시\"/><Cell col=\"9\" text=\"주문번호\"/><Cell col=\"10\" text=\"품목번호\"/></Band><Band id=\"body\"><Cell text=\"bind:CPN_EVT_NO\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:CPN_STATE_CD_NM\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:CPN_KND_CD_NM\"/><Cell col=\"3\" text=\"bind:CPN_NM\" textAlign=\"left\" displaytype=\"normal\"/><Cell col=\"4\" textAlign=\"center\" expr=\"dataset.parent.fn_getAutoComma(DC_AMT_DCRT) + (CPN_DC_SPR_CD  == &apos;10&apos; ? &quot;원&quot; : &quot;%&quot;) + &quot;\\n(&quot; + dataset.parent.fn_getAutoComma(MAX_DC_AMT) + &quot;원)&quot;\" text=\"bind:DC_AMT_DCRT\" displaytype=\"decoratetext\" wordWrap=\"char\"/><Cell col=\"5\" text=\"bind:CPN_PUBC_DTM\"/><Cell col=\"6\" text=\"bind:CPN_USE_STR_DT\"/><Cell col=\"7\" text=\"bind:CPN_USE_END_DT\"/><Cell col=\"8\" text=\"bind:CPN_ODR_DTM\" textAlign=\"center\" displaytype=\"normal\"/><Cell col=\"9\" text=\"bind:CPN_USE_ODR_NO\" textAlign=\"center\" expr=\"CPN_USE_ODR_NO  == &apos;&apos; ? CPN_USE_ODR_NO : CPN_USE_ODR_NO  == undefined ? &apos;&apos; : CPN_USE_ODR_NO\" displaytype=\"normal\"/><Cell col=\"10\" text=\"bind:CPN_USE_ODR_ITM_NO\" textAlign=\"center\" expr=\"CPN_USE_ODR_ITM_NO == &apos;&apos; ? CPN_USE_ODR_ITM_NO : CPN_USE_ODR_ITM_NO  == undefined ? &apos;&apos; : &quot;&lt;u v=&apos;true&apos;&gt;&quot; + CPN_USE_ODR_ITM_NO + &quot;&lt;/u&gt;&quot;\" displaytype=\"decoratetext\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","0","20","846",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("W20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","1316","0","20","846",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("W20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","826","1336","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("H20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","0","201","1336","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("H30");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00","0","181","1336","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("H20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","1336","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("H20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_01","0","259","1336","10",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("H10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00","0","740","1336","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("H30");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","771",null,"38","20",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("auto auto");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.edt_searchCpnEvtNo","value","ds_search","CPN_EVT_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cal_searchEndDate","value","ds_search","END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cal_searchStartDate","value","ds_search","START_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.edt_searchCpnNm","value","ds_search","CPN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.rdo_searchCpnKndCd","value","ds_search","CPN_KND_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.edt_CpnCnt03","value","ds_cpnInfoMbrCount","CPN_CNT03");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_search.form.edt_CpnCnt01","value","ds_cpnInfoMbrCount","CPN_CNT02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_search.form.edt_CpnCnt02","value","ds_cpnInfoMbrCount","CPN_CNT01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_search.form.rdo_searchCpnStateCd","value","ds_search","CPN_STATE_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MA_54.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_54.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_MA_54.xfdl", function() {
        /*******************************************************
          PROJECT NAME : 쿠폰 - 목록
          CREATION DATES : 2022.03.17
        *******************************************************/

        /* 스크립트 인클루드 */
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /* ===============================================================
         * 0. Form Variable
         *  - Form 변수 영역
         * ===============================================================
         */
        //var fv_변수명;
        var fv_coCd = "";		// 선택한 회사코드
        var fv_mbrId = "";		// 선택한 회원아이디
        this.totalCount = 0;
        this.cpnCnt01 = 0;
        this.cpnCnt02 = 0;
        this.cpnCnt03 = 0;

        /* ===============================================================
         * 1. Form Load
         *  - Form 로드시 실행
         * ===============================================================
         */
        this.SSP_BO_MA_54_onload = function(obj, e)
        {
        	// 공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	// 단축키 등록
        	this.fn_regShortCutMethod();
        }

        this.fn_onkeyup = function(obj, e)
        {
        	this.fn_processKey(obj, e);
        }






        /* ===============================================================
         * 2. transaction
         *  - transaction 영역
         * ===============================================================
         */

        /**
         * 쿠폰 종류 radio, 기간 값 조회
         */
        this.fn_comCdList = function()
        {
        	this.ds_searchComCd.clearData();
        	var nRow = this.ds_searchComCd.addRow();

        	this.ds_searchComCd.setColumn(nRow, "CODE_LIST", "CPN_KND_CD,INQ_PERD_SPR_CD");
        	this.ds_searchComCd.setColumn(nRow, "LANG_CD", "KO");

        	var sSvcId = "comCdList";
        	var sUrl = "/co/select-common-code-list.do";
        	var sInData = "ds_search=ds_searchComCd"
        	var sOutData = "ds_comboCpnKndCd=ds_output1 ds_inqPerdSprCd=ds_output2";
        	var sArg = "";
        	var sCallback = "fn_callbackFunction";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        };

        /**
         * 쿠폰 grid 값 조회
         */
        this.fn_gridCpnInfoList = function (sPage)
        {
        	/*
        	if (this.div_search.form.cal_searchStartDate.value == "" || this.div_search.form.cal_searchStartDate.value == undefined)
        	{
        		alert(this.fn_getMessage("ERRN000001", "시작일은")); // 시작일은 필수 입력항목입니다.
        		return
        	}

        	if (this.div_search.form.cal_searchEndDate.value == "" || this.div_search.form.cal_searchEndDate.value == undefined)
        	{
        		alert(this.fn_getMessage("ERRN000001", "종료일은")); // 종료일은 필수 입력항목입니다.
        		return
        	}
        	*/

        	if (this.div_search.form.cal_searchStartDate.value != "" && this.div_search.form.cal_searchStartDate.value != undefined && (this.div_search.form.cal_searchEndDate.value == "" || this.div_search.form.cal_searchEndDate.value == undefined))
        	{
        		alert(this.fn_getMessage("ERRN000001", "시작일을 입력하면 종료일은")); // 시작일을 입력하면 종료일은 필수 입력항목입니다.
        		this.div_search.form.cal_searchEndDate.setFocus();
        		return
        	}

        	if ((this.div_search.form.cal_searchStartDate.value == "" || this.div_search.form.cal_searchStartDate.value == undefined) && this.div_search.form.cal_searchEndDate.value != "" && this.div_search.form.cal_searchEndDate.value != undefined)
        	{
        		alert(this.fn_getMessage("ERRN000001", "종료일을 입력하면 시작일은")); // 종료일을 입력하면 시작일은 필수 입력항목입니다.
        		this.div_search.form.cal_searchStartDate.setFocus();
        		return
        	}

        	if (this.div_search.form.cal_searchStartDate.value > this.div_search.form.cal_searchEndDate.value)
        	{
        		alert(this.fn_getMessage("ERRN000002", "종료일이 시작일보다")); // 종료일이 시작일보다 작습니다.
        		return
        	}

        	if (sPage == 0)
        	{
        		// 페이징 초기화
        		var oPaging = this.div_paging;
        		oPaging.uPage = 1;
        		oPaging.uPageNum = 0;

        		this.ds_search.setColumn(0, "START_NUM", 0);
        		this.ds_search.setColumn(0, "ROW_COUNT", this.div_paging.uPageRowCnt);
        	}

        	var sSvcId = "gridCpnInfoList";
        	var sUrl = "/sa/cpn/select-cpn-info-mbr-list.do";
        	var sInData = "ds_search=ds_search"
        	var sOutData = "ds_gridCpnInfo=ds_output1 ds_cpnInfoMbrCount=ds_output2";
        	var sArg = "";
        	var sCallback = "fn_callbackFunction";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        };











        /* ===============================================================
         * 3. CallBack
         *  - transaction 후 처리 영역
         * ===============================================================
         */

        /**
         * 공통 callback
         */
        this.fn_callbackFunction = function(svcID, errorCode, errorMsg)
        {
        	if(errorCode < 0)
        	{
        		alert(errorMsg);
        		return;
        	}

        	switch (svcID)
        	{
        		case "comCdList" :

        			var nRow = this.ds_comboCpnKndCd.insertRow(0);

        			this.ds_comboCpnKndCd.setColumn(nRow, "COM_DTL_CD", "");
        			this.ds_comboCpnKndCd.setColumn(nRow, "COM_DTL_CD_NM", "전체");

        			this.div_search.form.rdo_searchCpnKndCd.set_index(0);

        			this.div_search.form.cbx_searchTermType.set_index(1);
        			this.fn_searchDateSet("2");

        			// 쿠폰 조회
        			// this.fn_gridCpnInfoList(0);

        			break;

        		case "gridCpnInfoList" :

        			//paging 처리
        			this.div_paging.form.cfn_createPage(this.div_paging, this.totalCount, this.div_paging.uPageRowCnt, "fn_pageCallbackFunction");

        			break;

        		default :

        			break;
        	}
        }

        /**
         * 싱글/멀티 팝업 공통 callback
         */
        this.fn_popupCallbackFunction = function(sPopupId, sRetValue)
        {
        	if(this.gfn_isNull(sRetValue))
        	{
        		return;
        	}

        	var retObj = JSON.parse(sRetValue);

        	switch(sPopupId)
        	{
        		case "btn_cpnPubcUseDtls" :

        			break;

        		default :

        			break;
        	}
        }

        /**
         * 페이징 공통 callback
         */
        this.fn_pageCallbackFunction = function(sFlag)
        {
        	var oPaging = this.div_paging;

        	if(sFlag)
        	{
        		this.ds_search.setColumn(0, "START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0, "ROW_COUNT", this.div_paging.uPageRowCnt);
        		this.fn_gridCpnInfoList();
        	}

        	var sTotText = "(<b v='true'>총 " + oPaging.uTotCount + "건 </b><fc v='red'>" + oPaging.uPage + "</fc> / " + oPaging.uPageCnt + ")";

        	this.sta_totalCount.set_text(sTotText);
        };

        /**
         * 정렬 공통 callback
         */
        this.fn_sortCallbackFunction = function(sGridId)
        {
        	var oGrid = null;

        	if(sGridId == "grd_cpnInfo")
        	{
        		oSortInfo = this.grd_cpnInfo.uaSortInfo;

        		this.ds_search.setColumn(0, "SORT_COLUMN", oSortInfo.bindCol);
        		this.ds_search.setColumn(0, "SORT_TYPE", oSortInfo.status);

        		this.fn_gridCpnInfoList();
        	}
        };










        /* ===============================================================
         * 4. 외부 호출 FUNCTION 영역
         * ===============================================================
         */

        /**
         * 화면 설정 함수
         */
        this.cfn_formInit = function()
        {
        	// grid 초기 설정
        	this.grd_cpnInfo.uSortFlag = "false";
        	this.grd_cpnInfo.uServerSortFlag = "true";
        	this.grd_cpnInfo.uSortCallback = "fn_sortCallbackFunction";
        	this.grd_cpnInfo.uCellSizeType = "true";

        	// 페이징 초기 설정
        	this.div_paging.uPage = 1;
        	this.div_paging.uPageNum = 0;
        	this.div_paging.uPageRowCnt = 20;
        	this.div_paging.uPageCnt = 0;
        	this.div_paging.uTotCount = 0;

        	// 초기화
        	this.fn_init("VAL_INIT");
        	this.fn_init("FORM_INIT");
        	this.fn_init("SEARCH_INIT");
        	this.fn_init("CODE_INIT");
        	this.fn_init("GRID_INIT");
        }










        /* ===============================================================
         * 5. event action
         *  - dataset 및 component 이벤트 영역
         * ===============================================================
         */

        /**
         * 기간 유형의 combo 값을 변경 시
         */
        this.div_search_cbx_searchTermType_onitemchanged = function(obj,e)
        {
        	if (this.div_search.form.cbx_searchTermType.value == "")
        	{
        		this.div_search.form.cal_searchStartDate.set_value("");
        		this.div_search.form.cal_searchEndDate.set_value("");
        	}
        	else
        	{
        		// 검색기간 설정
        		this.fn_searchDateSet(this.div_search.form.cbx_searchTermType.value);
        	}
        };

        /**
         * 초기화 버튼 클릭 시
         */
        this.div_search_btn_init_onclick = function(obj,e)
        {
        	this.fn_init("SEARCH_INIT");
        };

        /**
         * 조회 버튼 클릭 시
         */
        this.div_search_btn_search_onclick = function(obj,e)
        {
        	this.fn_gridCpnInfoList(0);
        };

        /**
         * 그리드 cell 클릭 시
         */
        this.grd_cpnInfo_oncellclick = function(obj,e)
        {
        	if(e.col == this.grd_cpnInfo.getBindCellIndex("body", "CPN_USE_ODR_ITM_NO"))
        	{
        		// 주문 번호 컬럼 클릭 시

        		var objDs = obj.getBindDataset();
        		var nRow = objDs.rowposition;

        		var cpnUseOdrNo = objDs.getColumn(nRow, "CPN_USE_ODR_NO");
        		var cpnUseOdrItmNo = objDs.getColumn(nRow, "CPN_USE_ODR_ITM_NO");
        		var bzplcId = objDs.getColumn(nRow, "BZPLC_ID");
        		var cpnPubcMbrId = objDs.getColumn(nRow, "CPN_PUBC_MBR_ID");

        		// 주문 항목번호가 있을 경우에만 팝업
        		if(!this.gfn_isNull(cpnUseOdrItmNo)) {
        			var width = this.getOwnerFrame().width;
        			var height = this.getOwnerFrame().height;

        			var nLeft = 0;
        			var nTop = 0;
        			var sOpenStyle = "dragmovetype=all resizable=true showtitlebar=true showstatusbar=false";
        			var objParam = { param1 : cpnUseOdrNo
        						   , param2 : cpnUseOdrItmNo
        						   , param3 : bzplcId
        						   , param4 : cpnPubcMbrId
        					   };

        			nexacro.open(cpnUseOdrNo, "OD::SSP_BO_OA_02.xfdl", this.getOwnerFrame(), objParam, sOpenStyle, nLeft, nTop, width, height, this);
        		}
        	}
        };










        /* ===============================================================
         * 6. User Function
         *  - 사용자 구현 함수 영역
         * =============================================================== */

        /**
         * 검색영역의 기간 combo 선택 시 값이 변경되었을 경우 - 공통
         *	- 검색영역의 기간 값을 변경해 줌
         */
        this.fn_searchDateSet = function(sVal)
        {
        	var sNowDate;	// 날짜 object
        	var sYearSt;	// 시작 년
        	var sMonthSt;	// 시작 월
        	var sDaySt;		// 시작 일
        	var sYearEnd;	// 종료 년
        	var sMonthEnd;	// 종료 월
        	var sDayEnd;	// 종료 일

        	sNowDate = new Date();

        	//sNowDate.setYear( sNowDate.getFullYear());

        	if (sVal == "0")
        	{
        		// 당일

        		sNowDate.setMonth(sNowDate.getMonth());
        		sNowDate.setDate(sNowDate.getDate());
        	}
        	else if (sVal == "1")
        	{
        		// 어제

        		sNowDate.setMonth( sNowDate.getMonth());
        		sNowDate.setDate( sNowDate.getDate() - 1);
        	}
        	else if (sVal == "2")
        	{
        		// 1주일

        		sNowDate.setMonth( sNowDate.getMonth());
        		sNowDate.setDate( sNowDate.getDate() - 6);
        	}
        	else if (sVal == "3")
        	{
        		// 2주일

        		sNowDate.setMonth( sNowDate.getMonth());
        		sNowDate.setDate( sNowDate.getDate() - 13);
        	}
        	else if (sVal == "4")
        	{
        		// 1개월

        		sNowDate.setMonth( sNowDate.getMonth() - 1);
        		sNowDate.setDate( sNowDate.getDate() + 1);
        	}
        	else if (sVal == "5")
        	{
        		// 3개월

        		sNowDate.setMonth( sNowDate.getMonth() - 3);
        		sNowDate.setDate( sNowDate.getDate() + 1);
        	}
        	else if (sVal == "6")
        	{
        		// 6개월

        		sNowDate.setMonth( sNowDate.getMonth() - 6);
        		sNowDate.setDate( sNowDate.getDate() + 1);
        	}
        	else if (sVal == "7")
        	{
        		// 1년

        		sNowDate.setMonth( sNowDate.getMonth() - 12);
        		sNowDate.setDate( sNowDate.getDate() + 1);
        	}

        	sYearSt = sNowDate.getFullYear();
        	sMonthSt = sNowDate.getMonth()+1;
        	sDaySt = sNowDate.getDate();

        	if ( sMonthSt < 10 )
        	{
        		sMonthSt = "0" + sMonthSt;
        	}
        	if ( sDaySt < 10 )
        	{
        		sDaySt = "0" + sDaySt;
        	}

        	sNowDate = new Date();

        	sYearEnd = sNowDate.getFullYear();
        	sMonthEnd = sNowDate.getMonth()+1;
        	sDayEnd = sNowDate.getDate();

        	if ( sMonthEnd < 10 )
        	{
        		sMonthEnd = "0" + sMonthEnd;
        	}
        	if ( sDayEnd < 10 )
        	{
        		sDayEnd = "0" + sDayEnd;
        	}

        	// 검색의 기간
        	this.div_search.form.cal_searchStartDate.set_value(sYearSt + "-" + sMonthSt + "-" + sDaySt);
        	this.div_search.form.cal_searchEndDate.set_value(sYearEnd + "-" + sMonthEnd + "-" + sDayEnd);
        }

        /**
         * 자동콤마 찍기
         */
        this.fn_getAutoComma = function(sVal)
        {
        	var newValue;
        	var len;
        	var ch;
        	var j;
        	var formatValue;

        	if (sVal == "" || sVal == "undefined" || sVal == undefined)
        	{
        		return 0;
        	}

        	newValue = "" + sVal;
        	len = newValue.length;
        	ch = "";
        	j = 1;
        	formatValue = "";

        	//newValue = uf_getSelectNumber(newValue);
        	len = newValue.length;

        	for ( i=len; i>0; i-- )
        	{
        		ch = newValue.substring(i-1,i);

        		formatValue = ch + formatValue;

        		if ( (j%3) == 0 && i>1 )
        		{
        			formatValue = "," + formatValue
        		}

        		j++;
        	}

        	return formatValue;
        }

        /**
         * 화면 초기화 함수
         */
        this.fn_init = function(sVal)
        {
        	switch (sVal)
        	{
        		case "VAL_INIT" :

        			// 변수 초기화

        // 			this.fv_coCd = "1000";				// this.parent.coCd;	// 테스트 DATA
        // 			this.fv_mbrId = "PM00022138";		// this.parent.mbrId;	// 테스트 DATA
        			this.totalCount = 0;

        			break;

        		case "FORM_INIT" :

        			// 입력 항목 영역
        			this.div_search.form.edt_CpnCnt01.set_value("");
        			this.div_search.form.edt_CpnCnt02.set_value("");
        			this.div_search.form.edt_CpnCnt03.set_value("");

        			this.div_search.form.edt_CpnCnt01.set_readonly(true);
        			this.div_search.form.edt_CpnCnt02.set_readonly(true);
        			this.div_search.form.edt_CpnCnt03.set_readonly(true);

        			break;

        		case "SEARCH_INIT" :

        			// 검색 항목 초기화

        			// dataset 설정
        			//this.ds_search.clearData();
        			//var nRow = this.ds_search.addRow();

        			//this.ds_search.setColumn(0, "CO_CD", this.fv_coCd);
        			//this.ds_search.setColumn(0, "MBR_ID", this.fv_mbrId);
        			this.ds_search.setColumn(0, "SORT_COLUMN", "");
        			this.ds_search.setColumn(0, "SORT_TYPE", "");

        			// 입력 항목 영역
        			this.div_search.form.rdo_searchCpnKndCd.set_index(0);
        			this.div_search.form.rdo_searchCpnStateCd.set_index(0);
        			this.div_search.form.edt_searchCpnEvtNo.set_value("");
        			this.div_search.form.cal_searchStartDate.set_value("");
        			this.div_search.form.cal_searchEndDate.set_value("");
        			this.div_search.form.cbx_searchTermType.set_index(0);
        			this.div_search.form.edt_searchCpnNm.set_value("");

        			// 버튼 영역

        			// 초기화, 조회
        			this.div_search.form.btn_init.set_enable(true);
        			this.div_search.form.btn_search.set_enable(true);

        			// 검색기간 설정
        			this.div_search.form.cbx_searchTermType.set_index(1);
        			this.fn_searchDateSet("2");

        			// 페이징 초기화
        			this.ds_search.setColumn(0, "START_NUM", 0);
        			this.ds_search.setColumn(0, "ROW_COUNT", this.div_paging.uPageRowCnt);

        			break;

        		case "CODE_INIT" :

        			// 코드 초기화

        			// 쿠폰 종류 radio, 기간 값 조회
        			this.fn_comCdList();

        			break;

        		case "GRID_INIT" :

        			// grid 초기화

        			this.sta_totalCount.set_text("(<b v='true'>총 0건 </b><fc v='red'>0</fc> / 0)");

        			// dataset 영역
        			this.ds_gridCpnInfo.clearData();

        			this.grd_cpnInfo.clearSelect();

        			this.grd_cpnInfo.nodatatext = "조회된 결과가 없습니다.";

        			// 쿠폰 조회
        			//this.fn_gridCpnInfoList(0);

        			break;

        		default :

        			//alert("작업구분이 없습니다.");

        			break;
        	}
        }

        // 창닫기
        this.fn_closeForm = function() {
        	this.close();
        };

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodENTER("div_search_btn_search_onclick");
        	this.fn_regMethodESC("fn_closeForm");
        };








        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_MA_54_onload,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.div_search.form.cbx_searchTermType.addEventHandler("onitemchanged",this.div_search_cbx_searchTermType_onitemchanged,this);
            this.div_search.form.btn_init.addEventHandler("onclick",this.div_search_btn_init_onclick,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.div_search_btn_search_onclick,this);
            this.div_search.form.rdo_searchCpnKndCd.addEventHandler("onitemchanged",this.Div_top_info_Radio00_onitemchanged,this);
            this.div_search.form.rdo_searchCpnStateCd.addEventHandler("onitemchanged",this.Div_top_info_Radio00_onitemchanged,this);
            this.grd_cpnInfo.addEventHandler("oncellclick",this.grd_cpnInfo_oncellclick,this);
            this.Static00_02_00.addEventHandler("onclick",this.Static00_02_00_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_MA_54.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
