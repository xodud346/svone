(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_NA_07");
            this.set_titletext("쿠폰 - 목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_EVT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_KND_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_PUBC_MTHD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_STATS\" type=\"STRING\" size=\"256\"/><Column id=\"TERM_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_DOWNLOAD_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchComCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comboCpnKndCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comboCpnPubcMthdCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gridCpnInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_EVT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_KND_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NOTIC_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_DC_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DC_AMT_DCRT\" type=\"STRING\" size=\"256\"/><Column id=\"MIN_PURG_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_DC_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"PUBC_STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PUBC_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PUBC_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"UNLMT_PUBC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_PUBC_MTHD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPNBOX_EXPS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_USE_PERD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_USE_STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_USE_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_PSB_DCNT\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_GUDC\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_APLY_TGT_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_EXCPT_TGT_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_KND_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NOTIC_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_DC_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UNLMT_PUBC_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_PUBC_MTHD_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPNBOX_EXPS_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_USE_PERD_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_APLY_TGT_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_EXCPT_TGT_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"READ_COL\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_STATS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gridCpnInfoExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_EVT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_KND_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NOTIC_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_DC_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DC_AMT_DCRT\" type=\"STRING\" size=\"256\"/><Column id=\"MIN_PURG_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_DC_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"PUBC_STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PUBC_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PUBC_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"UNLMT_PUBC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_PUBC_MTHD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPNBOX_EXPS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_USE_PERD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_USE_STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_USE_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_PSB_DCNT\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_GUDC\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_APLY_TGT_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_EXCPT_TGT_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_KND_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NOTIC_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_DC_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UNLMT_PUBC_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_PUBC_MTHD_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPNBOX_EXPS_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_USE_PERD_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_APLY_TGT_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_EXCPT_TGT_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_STATS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inqPerdSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_totalCount","20","210","121","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("(총 0건 0/0)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_write",null,"200","81","28","342",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDownload",null,"200","110","28","228",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_cpnInfo","24","235",null,"502","16",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_gridCpnInfo");
            obj.set_autosizingtype("row");
            obj.set_cellsizingtype("col");
            obj.set_extendsizetype("row");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"60\"/><Column size=\"170\"/><Column size=\"100\"/><Column size=\"95\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"70\"/><Column size=\"75\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"50\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"쿠폰 이벤트&#13;&#10;번호\"/><Cell col=\"1\" text=\"사용&#13;&#10;여부\"/><Cell col=\"2\" text=\"쿠폰&#13;&#10;상태\"/><Cell col=\"3\" text=\"쿠폰 종류\"/><Cell col=\"4\" text=\"쿠폰명\"/><Cell col=\"5\" text=\"할인 금액/율&#13;&#10;(최대 할인 금액)\"/><Cell col=\"6\" text=\"사용 기간/일수\"/><Cell col=\"7\" text=\"발행시작일\"/><Cell col=\"8\" text=\"발행종료일\"/><Cell col=\"9\" text=\"사용시작일\"/><Cell col=\"10\" text=\"사용종료일\"/><Cell col=\"11\" text=\"사용&#13;&#10;수량\"/><Cell col=\"12\" text=\"발행&#13;&#10;수량\"/><Cell col=\"13\" text=\"발행&#13;&#10;방식\"/><Cell col=\"14\" text=\"등록자사번\"/><Cell col=\"15\" text=\"등록자\"/><Cell col=\"16\" text=\"등록일\"/><Cell col=\"17\" text=\"발행&#13;&#10;내역\"/></Band><Band id=\"body\"><Cell text=\"bind:CPN_EVT_NO\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:USE_YN_NM\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:CPN_STATS\" textAlign=\"center\" expr=\"CPN_STATS == &apos;READY&apos; ? &apos;대기&apos; : CPN_STATS == &apos;ING&apos; ? &apos;진행중&apos; : &apos;종료&apos;\"/><Cell col=\"3\" text=\"bind:CPN_KND_CD_NM\"/><Cell col=\"4\" text=\"bind:CPN_NM\" textAlign=\"left\" expr=\"CPN_NM  == &apos;&apos; ? CPN_NM : &quot;&lt;u v=&apos;true&apos;&gt;&quot; + CPN_NM + &quot;&lt;/u&gt;&quot;\" displaytype=\"decoratetext\"/><Cell col=\"5\" textAlign=\"center\" expr=\"CPN_KND_CD == &apos;20&apos; ? &apos;-&apos; : dataset.parent.fn_getAutoComma(DC_AMT_DCRT) + (CPN_DC_SPR_CD  == &apos;10&apos; ? &quot;원&quot; : &quot;%&quot;) + (CPN_DC_SPR_CD  == &apos;10&apos; ? &quot;&quot; : &quot;\\n(&quot; + dataset.parent.fn_getAutoComma(MAX_DC_AMT) + &quot;원)&quot;)\" text=\"bind:DC_AMT_DCRT\" displaytype=\"decoratetext\" wordWrap=\"char\"/><Cell col=\"6\" textAlign=\"center\" expr=\"CPN_USE_PERD_CD == &quot;20&quot; ? CPN_USE_PERD_CD_NM + &quot;\\n(&quot; + USE_PSB_DCNT + &quot;일)&quot; : CPN_USE_PERD_CD_NM\" text=\"bind:CPN_USE_PERD_CD\" displaytype=\"decoratetext\" wordWrap=\"char\"/><Cell col=\"7\" text=\"bind:PUBC_STR_DT\"/><Cell col=\"8\" text=\"bind:PUBC_END_DT\"/><Cell col=\"9\" text=\"bind:CPN_USE_STR_DT\"/><Cell col=\"10\" text=\"bind:CPN_USE_END_DT\"/><Cell col=\"11\" text=\"bind:USE_QTY\" textAlign=\"right\" expr=\"dataset.parent.fn_getAutoComma(USE_QTY)\" displaytype=\"decoratetext\"/><Cell col=\"12\" text=\"bind:PUBC_QTY\" textAlign=\"right\" expr=\"dataset.parent.fn_getAutoComma(PUBC_QTY)\" displaytype=\"decoratetext\"/><Cell col=\"13\" text=\"bind:CPN_PUBC_MTHD_CD_NM\"/><Cell col=\"14\" text=\"bind:REGPSN_ID\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:REGPSN_ID_NM\" textAlign=\"center\"/><Cell col=\"16\" text=\"bind:REG_DTM\" textAlign=\"center\"/><Cell col=\"17\" text=\"bind:READ_COL\" textAlign=\"center\" expr=\"&quot;&lt;u v=&apos;true&apos;&gt;조회&lt;/u&gt;&quot;\" displaytype=\"decoratetext\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","0","20","846",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("W20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","1316","0","20","846",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("W20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","826","1336","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("H20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","0","170","1336","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("H30");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00","0","740","1336","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("H30");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","771",null,"38","20",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"200","100","28","124",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("레이아웃 저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_layoutInit",null,"200","100","28","20",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("레이아웃 초기화");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_cpnInfoExcel","20","980",null,"100","20",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_autofittype("none");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_gridCpnInfoExcel");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"170\"/><Column size=\"110\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"쿠폰 이벤트&#13;&#10;번호\"/><Cell col=\"1\" text=\"쿠폰 상태\"/><Cell col=\"2\" text=\"쿠폰 종류\"/><Cell col=\"3\" text=\"쿠폰명\"/><Cell col=\"4\" text=\"할인 금액/율&#13;&#10;(최대 할인 금액)\"/><Cell col=\"5\" text=\"발행시작일\"/><Cell col=\"6\" text=\"발행종료일\"/><Cell col=\"7\" text=\"사용시작일\"/><Cell col=\"8\" text=\"사용종료일\"/><Cell col=\"9\" text=\"사용&#13;&#10;수량\"/><Cell col=\"10\" text=\"발행&#13;&#10;수량\"/><Cell col=\"11\" text=\"발행&#13;&#10;방식\"/><Cell col=\"12\" text=\"등록자사번\"/><Cell col=\"13\" text=\"등록자\"/><Cell col=\"14\" text=\"등록일\"/><Cell col=\"15\" text=\"발행&#13;&#10;내역\"/></Band><Band id=\"body\"><Cell text=\"bind:CPN_EVT_NO\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:USE_YN_NM\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:CPN_KND_CD_NM\"/><Cell col=\"3\" text=\"bind:CPN_NM\" textAlign=\"left\" expr=\"CPN_NM  == &apos;&apos; ? CPN_NM : &quot;&lt;u v=&apos;true&apos;&gt;&quot; + CPN_NM + &quot;&lt;/u&gt;&quot;\" displaytype=\"decoratetext\"/><Cell col=\"4\" text=\"bind:DC_AMT_DCRT\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:PUBC_STR_DT\"/><Cell col=\"6\" text=\"bind:PUBC_END_DT\"/><Cell col=\"7\" text=\"bind:CPN_USE_STR_DT\"/><Cell col=\"8\" text=\"bind:CPN_USE_END_DT\"/><Cell col=\"9\" text=\"bind:USE_QTY\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:PUBC_QTY\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:CPN_PUBC_MTHD_CD_NM\"/><Cell col=\"12\" text=\"bind:REGPSN_ID\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:REGPSN_ID_NM\" textAlign=\"center\"/><Cell col=\"14\" text=\"bind:REG_DTM\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:READ_COL\" textAlign=\"center\" expr=\"&quot;&lt;u v=&apos;true&apos;&gt;조회&lt;/u&gt;&quot;\" displaytype=\"decoratetext\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","0","0",null,"170","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Static("Static31_00","20","82",null,"32","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static31","20","51",null,"32","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_cm_box02L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static30","20","20",null,"32","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_cm_box02L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static22","452","20","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("사용 여부");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbx_searchCpnPubcMthdCd","1024","55","281","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_comboCpnPubcMthdCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_searchCpnEvtNo","160","55","282","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbx_searchTermType","475","86","100","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_inqPerdSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("1주일");
            obj.set_value("2");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_searchEndDate","376","86","95","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static59","363","86","9","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_searchStartDate","264","86","95","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_03_01","359","83","5","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("W5");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00","371","83","5","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("W5");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_searchCpnNm","592","55","282","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbx_searchTermSpr","160","86","100","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_cbx_searchTermSpr_innerdataset = new nexacro.NormalDataset("div_search_form_cbx_searchTermSpr_innerdataset", obj);
            div_search_form_cbx_searchTermSpr_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">REG_DTM</Col><Col id=\"datacolumn\">등록일</Col></Row><Row><Col id=\"codecolumn\">PUBC_DT</Col><Col id=\"datacolumn\">발행일</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cbx_searchTermSpr_innerdataset);
            obj.set_text("등록일");
            obj.set_value("REG_DTM");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","20","20","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_text("쿠폰 종류");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","20","51","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_text("쿠폰 이벤트 번호");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static08","452","51","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_text("쿠폰 명");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static10","20","82","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_text("기간");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbx_searchUseYn","592","24","282","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_cbx_searchUseYn_innerdataset = new nexacro.NormalDataset("div_search_form_cbx_searchUseYn_innerdataset", obj);
            div_search_form_cbx_searchUseYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cbx_searchUseYn_innerdataset);
            obj.set_text("");
            obj.set_value("2");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static09","884","51","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_text("발행 방식");
            obj.set_cssclass("sta_cm_box01L");
            this.div_search.addChild(obj.name, obj);

            obj = new Radio("rdo_searchCpnKndCd","160","24","170","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_innerdataset("ds_comboCpnKndCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_direction("vertical");
            obj.set_text("A");
            obj.set_value("1");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_02","150","52","302","3",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("18");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_03","150","52","10","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("19");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_02_02","150","79","302","3",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("20");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_03_00","442","21","10","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("21");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static12","884","20","130","32",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("22");
            obj.set_text("쿠폰 상태");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_search.addChild(obj.name, obj);

            obj = new Radio("cbo_searchCpnStats","1028","24","265","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("23");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div_search_form_cbo_searchCpnStats_innerdataset = new nexacro.NormalDataset("div_search_form_cbo_searchCpnStats_innerdataset", obj);
            div_search_form_cbo_searchCpnStats_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"datacolumn\">대기</Col><Col id=\"codecolumn\">READY</Col></Row><Row><Col id=\"codecolumn\">ING</Col><Col id=\"datacolumn\">진행중</Col></Row><Row><Col id=\"codecolumn\">END</Col><Col id=\"datacolumn\">종료</Col></Row></Rows>");
            obj.set_innerdataset(div_search_form_cbo_searchCpnStats_innerdataset);
            obj.set_text("A");
            obj.set_value("1");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"124","60","26","20",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("24");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_init",null,"124","60","26","84",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("25");
            obj.set_text("초기화");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","1336","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("H20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_01","0","228","1336","10",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("H10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00","0","150","1336","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("H20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01","0","114","1336","10",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("H10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.cbx_searchCpnPubcMthdCd","value","ds_search","CPN_PUBC_MTHD_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.edt_searchCpnEvtNo","value","ds_search","CPN_EVT_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cal_searchEndDate","value","ds_search","END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.cal_searchStartDate","value","ds_search","START_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.edt_searchCpnNm","value","ds_search","CPN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.cbx_searchTermSpr","value","ds_search","TERM_SPR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_search.form.cbx_searchUseYn","value","ds_search","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_search.form.rdo_searchCpnKndCd","value","ds_search","CPN_KND_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_search.form.cbo_searchCpnStats","value","ds_search","CPN_STATS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_NA_07.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_NA_07.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_NA_07.xfdl", function() {
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

        this.totalCount = 0;
        this.fv_oApp = nexacro.getApplication();

        /* ===============================================================
         * 1. Form Load
         *  - Form 로드시 실행
         * ===============================================================
         */
        this.SSP_BO_NA_07_onload = function(obj, e)
        {
        	// 공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	// 초기화
        	this.fn_init("VAL_INIT");
        	this.fn_init("SEARCH_INIT");
        	this.fn_init("CODE_INIT");
        	this.fn_init("GRID_INIT");
        }

        this.fn_onkeyup = function(obj,e)
        {
        	// CTRL+ENTER KEY
        	if(e.keycode == 13 && e.ctrlkey){
        		this.btn_search_onclick();
        	}
        };









        /* ===============================================================
         * 2. transaction
         *  - transaction 영역
         * ===============================================================
         */

        /**
         * 공통코드 조회
         */
        this.fn_commonCodeSearch = function()
        {
        	this.ds_searchComCd.clearData();
        	var nRow = this.ds_searchComCd.addRow();

        	this.ds_searchComCd.setColumn(nRow, "CODE_LIST", "CPN_KND_CD,CPN_PUBC_MTHD_CD,INQ_PERD_SPR_CD");
        	this.ds_searchComCd.setColumn(nRow, "LANG_CD", "KO");

        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_searchComCd";
        	var outDs = "ds_comboCpnKndCd=ds_output1 ds_comboCpnPubcMthdCd=ds_output2 ds_inqPerdSprCd=ds_output3";
        	var arg = "";
        	var sCallback = "fn_callbackFunction";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, sCallback);
        }

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

        	this.ds_search.setColumn(0,"CO_CD", this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD"));

        	var sSvcId = "gridCpnInfoList";
        	var sUrl = "/sa/cpn/select-cpn-info-list.do";
        	var sInData = "ds_search=ds_search"
        	var sOutData = "ds_gridCpnInfo=ds_output1";
        	var sArg = "";
        	var sCallback = "fn_callbackFunction";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        };

        /**
         * 쿠폰 엑셀 grid 값 조회
         */
        this.fn_gridCpnInfoListExcel = function ()
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

        	this.ds_search.setColumn(0,"CO_CD", this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD"));

        	var sSvcId = "gridCpnInfoListExcel";
        	var sUrl = "/sa/cpn/select-cpn-info-list.do";
        	var sInData = "ds_search=ds_search"
        	var sOutData = "ds_gridCpnInfoExcel=ds_output1";
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
        		case "commonCodeSearch" :

        			var nRow = this.ds_comboCpnKndCd.insertRow(0);

        			this.ds_comboCpnKndCd.setColumn(nRow, "COM_DTL_CD", "");
        			this.ds_comboCpnKndCd.setColumn(nRow, "COM_DTL_CD_NM", "전체");

        			this.div_search.form.rdo_searchCpnKndCd.set_index(0);

        			var nRow2 = this.ds_comboCpnPubcMthdCd.insertRow(0);

        			this.ds_comboCpnPubcMthdCd.setColumn(nRow2, "COM_DTL_CD", "");
        			this.ds_comboCpnPubcMthdCd.setColumn(nRow2, "COM_DTL_CD_NM", "전체");

        			this.div_search.form.cbx_searchCpnPubcMthdCd.set_index(0);

        			this.div_search.form.cbx_searchTermType.set_index(1);
        			this.fn_searchDateSet("2");

        			break;

        		case "gridCpnInfoList" :

        			//paging 처리
        			this.div_paging.form.cfn_createPage(this.div_paging, this.totalCount, this.div_paging.uPageRowCnt, "fn_pageCallbackFunction");

        			break;

        		case "gridCpnInfoListExcel" :

        			//trace(this.ds_gridCpnInfoExcel.saveXML());

        			var sFileName = "EXCEPL_EXPORT";			// file Name
        			var aGrid = [this.grd_cpnInfo];
        			var aSht  = ["쿠폰"];

        			var oParam = {form:this, grid:aGrid, fileName:sFileName, sheetName:aSht};
        			this.gfn_exportExcel(oParam);

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
        		case "btn_write" :

        			if (retObj.RETURN_YN.replace(/,\s*$/, "") == "Y")
        			{
        				this.fn_gridCpnInfoList(0);
        			}

        			break;

        		case "btn_edit" :

        			if (retObj.RETURN_YN.replace(/,\s*$/, "") == "Y")
        			{
        				this.fn_gridCpnInfoList();
        			}

        			break;

        		case "btn_cpnPubcDtls" :

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

        		if (oSortInfo.bindCol != "READ_COL")
        		{
        			this.ds_search.setColumn(0, "SORT_COLUMN", oSortInfo.bindCol);
        			this.ds_search.setColumn(0, "SORT_TYPE", oSortInfo.status);

        			this.fn_gridCpnInfoList();
        		}
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

        	//grid 개인화(전제조건 : grid Head가 무조건 1Row인 경우)
        	this.uGridList = "grd_cpnInfo";
        	this.grd_cpnInfo.uRightMouse = "true";
        	this.grd_cpnInfo.uPersonalFlag = "true";
        	this.grd_cpnInfo.uDefaultFormat = "CPN_EVT_NO,USE_YN_NM,CPN_STATS,CPN_KND_CD_NM,CPN_NM,DC_AMT_DCRT,CPN_USE_PERD_CD,PUBC_STR_DT,PUBC_END_DT,CPN_USE_STR_DT,CPN_USE_END_DT,USE_QTY,PUBC_QTY,CPN_PUBC_MTHD_CD_NM,REGPSN_ID,REGPSN_ID_NM,REG_DTM,READ_COL";
        }

        this.cfn_personalPopupClose = function(sRet)
        {
        	this.grd_cpnInfo.set_formats(sRet);
        	this.pdiv_personal.closePopup();
        }










        /* ===============================================================
         * 5. event action
         *  - dataset 및 component 이벤트 영역
         * ===============================================================
         */

        /**
         * 기간 유형의 combo 값을 변경 시
         */
        this.cbx_searchTermType_onitemchanged = function(obj,e)
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
        this.btn_init_onclick = function(obj,e)
        {
        	this.fn_init("SEARCH_INIT");
        };

        /**
         * 조회 버튼 클릭 시
         */
        this.btn_search_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0, "EXCEL_DOWNLOAD_YN", "N");

        	this.fn_gridCpnInfoList(0);
        };

        /**
         * 등록 버튼 클릭 시
         */
        this.btn_write_onclick = function(obj,e)
        {
        	var oArg = {
        	           };

        	var oOption = { top : "-1"
        	              , left : "-1"
        	              , width : "-1"
        	              , height : "-1"
        	              , popuptype : "modal"	// modal:showModal, modeless:application.open, modalsync:showModalSync, modalwindow:showModalWindow
        	              , layered : "false"
        	              , opacity : "100"
        	              , autosize : "true"
        	              , titlebar : "true"
        	              , title : "쿠폰 등록"
        	              };

        	this.gfn_openPopup(e.fromobject.id, "SA::SSP_BO_NA_08.xfdl", oArg, "fn_popupCallbackFunction", oOption);
        };

        /**
         * 엑셀다운로드 버튼 클릭 시
         */
        this.btn_excelDownload_onclick = function(obj,e)
        {
        // 	this.ds_search.setColumn(0, "EXCEL_DOWNLOAD_YN", "Y");
        //
        // 	this.fn_gridCpnInfoListExcel();

        	var sFileName = "COUPON";			// file Name
        	var aGrid = [this.grd_cpnInfo];
        	var aSht  = ["쿠폰"];

        	var oParam = {form:this, grid:aGrid, fileName:sFileName, sheetName:aSht};
        	this.gfn_exportExcel(oParam);
        };

        /**
         * 레이아웃 저장 버튼 클릭 시
         */
        this.btn_layoutSave_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grd_cpnInfo", this.grd_cpnInfo.getCurFormatString());
        };

        /**
         * 레이아웃 초기화 버튼 클릭 시
         */
        this.btn_layoutInit_onclick = function(obj,e)
        {
        	this.gfn_personalReset("grd_cpnInfo");
        	this.grd_cpnInfo.set_formats(this.grd_cpnInfo.uOrgFormat);
        };

        /**
         * 그리드 cell 클릭 시
         */
        this.grd_cpnInfo_oncellclick = function(obj,e)
        {
        	if(e.col == this.grd_cpnInfo.getBindCellIndex("body", "CPN_NM"))
        	{
        		// 쿠폰 명 컬럼 클릭 시

        		var objDs = obj.getBindDataset();
        		var nRow = objDs.rowposition;

        		var oArg = { sCoCd : objDs.getColumn(nRow, "CO_CD")
        				   , sCpnEvtNo : objDs.getColumn(nRow, "CPN_EVT_NO")
        			       , sPageNum : this.div_paging.uPage
        				   };

        		var oOption = { top : "-1"
        					  , left : "-1"
        					  , width : "-1"
        					  , height : "-1"
        					  , popuptype : "modal"	// modal:showModal, modeless:application.open, modalsync:showModalSync, modalwindow:showModalWindow
        					  , layered : "false"
        					  , opacity : "100"
        					  , autosize : "true"
        					  , titlebar : "true"
        					  , title : "쿠폰 상세/수정"
        					  };

        		this.gfn_openPopup("btn_edit", "SA::SSP_BO_NA_09.xfdl", oArg, "fn_popupCallbackFunction", oOption);
        	}
        	else if(e.col == this.grd_cpnInfo.getBindCellIndex("body", "READ_COL"))
        	{
        		// 발행 내역 컬럼 클릭 시

        		var objDs = obj.getBindDataset();
        		var nRow = objDs.rowposition;

        		var oArg = { sCoCd : objDs.getColumn(nRow, "CO_CD")
        				   , sCpnEvtNo : objDs.getColumn(nRow, "CPN_EVT_NO")
        			       , sPageNum : this.div_paging.uPage
        				   };

        		var oOption = { top : "-1"
        					  , left : "-1"
        					  , width : "-1"
        					  , height : "-1"
        					  , popuptype : "modal"	// modal:showModal, modeless:application.open, modalsync:showModalSync, modalwindow:showModalWindow
        					  , layered : "false"
        					  , opacity : "100"
        					  , autosize : "true"
        					  , titlebar : "true"
        					  , title : "쿠폰 발행 내역 조회"
        					  };

        		this.gfn_openPopup("btn_cpnPubcDtls", "SA::SSP_BO_NA_10.xfdl", oArg, "fn_popupCallbackFunction", oOption);
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

        	if (sVal == "1")
        	{
        		// 당일

        		sNowDate.setMonth(sNowDate.getMonth());
        		sNowDate.setDate(sNowDate.getDate());
        	}
        // 	else if (sVal == "1")
        // 	{
        // 		// 어제
        //
        // 		sNowDate.setMonth( sNowDate.getMonth());
        // 		sNowDate.setDate( sNowDate.getDate() - 1);
        // 	}
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

        			this.totalCount = 0;

        			break;

        		case "SEARCH_INIT" :

        			// 검색 항목 초기화

        			// dataset 설정
        			this.ds_search.clearData();
        			var nRow = this.ds_search.addRow();

        			this.ds_search.setColumn(nRow, "SORT_COLUMN", "");
        			this.ds_search.setColumn(nRow, "SORT_TYPE", "");
        			this.ds_search.setColumn(nRow, "EXCEL_DOWNLOAD_YN", "N");

        			// 입력 항목 영역
        			this.div_search.form.rdo_searchCpnKndCd.set_index(0);
        			this.div_search.form.cbx_searchUseYn.set_index(0);
        			this.div_search.form.cbo_searchCpnStats.set_index(0);
        			this.div_search.form.cbx_searchCpnPubcMthdCd.set_index(0);
        			this.div_search.form.edt_searchCpnEvtNo.set_value("");
        			this.div_search.form.edt_searchCpnNm.set_value("");
        			this.div_search.form.cbx_searchTermSpr.set_index(0);
        			this.div_search.form.cal_searchStartDate.set_value("");
        			this.div_search.form.cal_searchEndDate.set_value("");
        			//this.div_search.form.cbx_searchTermType.set_index(0);

        			// 버튼 영역

        			// 초기화, 조회
        			this.div_search.form.btn_init.set_enable(true);
        			this.div_search.form.btn_search.set_enable(true);

        			// 등록, 엑셀다운로드, 레이아웃 저장, 레이아웃 초기화
        			this.btn_write.set_enable(true);
        			this.btn_excelDownload.set_enable(true);
        			this.btn_layoutSave.set_enable(true);
        			this.btn_layoutInit.set_enable(true);

        			// 검색기간 설정
        			this.div_search.form.cbx_searchTermType.set_index(1);
        			this.fn_searchDateSet("2");

        			// 페이징 초기화
        			this.ds_search.setColumn(0, "START_NUM", 0);
        			this.ds_search.setColumn(0, "ROW_COUNT", this.div_paging.uPageRowCnt);

        			break;

        		case "CODE_INIT" :

        			// 코드 초기화

        			// 공통코드 조회
        			this.fn_commonCodeSearch();

        			break;

        		case "GRID_INIT" :

        			// grid 초기화

        			this.sta_totalCount.set_text("(<b v='true'>총 0건 </b><fc v='red'>0</fc> / 0)");

        			// dataset 영역
        			this.ds_gridCpnInfo.clearData();
        			this.ds_gridCpnInfoExcel.clearData();

        			this.grd_cpnInfo.clearSelect();
        			this.grd_cpnInfoExcel.clearSelect();

        			this.grd_cpnInfo.set_nodatatext("조회된 결과가 없습니다.");
        			this.grd_cpnInfoExcel.set_nodatatext("조회된 결과가 없습니다.");

        			// 쿠폰 조회
        			// this.fn_gridCpnInfoList(0);

        			break;

        		default :

        			//alert("작업구분이 없습니다.");

        			break;
        	}
        }










        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_NA_07_onload,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.btn_write.addEventHandler("onclick",this.btn_write_onclick,this);
            this.btn_excelDownload.addEventHandler("onclick",this.btn_excelDownload_onclick,this);
            this.grd_cpnInfo.addEventHandler("oncellclick",this.grd_cpnInfo_oncellclick,this);
            this.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.btn_layoutInit.addEventHandler("onclick",this.btn_layoutInit_onclick,this);
            this.grd_cpnInfoExcel.addEventHandler("oncellclick",this.grd_cpnInfo_oncellclick,this);
            this.div_search.form.Static22.addEventHandler("onclick",this.Static22_onclick,this);
            this.div_search.form.cbx_searchTermType.addEventHandler("onitemchanged",this.cbx_searchTermType_onitemchanged,this);
            this.div_search.form.rdo_searchCpnKndCd.addEventHandler("onitemchanged",this.Div_top_info_Radio00_onitemchanged,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.div_search.form.btn_init.addEventHandler("onclick",this.btn_init_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_NA_07.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
