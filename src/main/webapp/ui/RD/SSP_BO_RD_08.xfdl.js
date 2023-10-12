(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("R&D 시리즈그룹 상품 관리 상세/수정");
            this.set_background("black");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_RSN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"codeList\" type=\"STRING\" size=\"256\"/><Column id=\"langCd\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_PRD_ATTR_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"BASS_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"CTRY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_RSN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CTRY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_save", this);
            obj.set_updatecontrol("false");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_PRD_ATTR_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_saveList", this);
            obj.set_updatecontrol("false");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_PRD_ATTR_INFO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_saveTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_PRD_ATTR_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"BASS_CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdGrpSprCdCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuth", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SALS_CHRPSN_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLSF_CHRPSN_TP_CD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rndPrdAuthCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_bg","0","20",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","20","48",null,null,"20","103",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("0px solid darkblue");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static29_00_00","125","6",null,"32","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_cm_box02L_tdt");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta_prd_grp_spr_cd","0","6","140","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("19");
            obj.set_text("그룹구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.getSetter("uEssentiel").set("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static07","100","37",null,"32","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta_prd_grp_nm","0","37","140","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("21");
            obj.set_text("그룹명");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("uEssentiel").set("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static07_00","100","130",null,"32","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","130","140","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("23");
            obj.set_text("그룹 상품 추가");
            obj.set_cssclass("sta_cm_box01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Radio("PRD_GRP_SPR_CD","150","10","470","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_prdGrpSprCdCombo");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_rowcount("1");
            obj.set_readonly("true");
            obj.set_text("시리즈-속성");
            obj.set_value("20");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("PRD_GRP_NM","150","41","469","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_maxlength("40");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtPrdId","251","134","125","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btn_prd","527","134","25","25",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_verticalAlign("");
            obj.set_cssclass("btn_WF_search02");
            this.divDetail.addChild(obj.name, obj);

            obj = new CheckBox("chkBssPrdYn","150","134","100","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_text("기준상품");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_enable("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","100","161",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","0","161","140",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("25");
            obj.set_text("그룹 상품 리스트");
            obj.set_cssclass("sta_cm_box01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static07_01","100","68",null,"32","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","0","68","140","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("27");
            obj.set_text("등록일");
            obj.set_cssclass("sta_cm_box01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("REG_DTM","150","72","469","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static07_01_00","100","99",null,"32","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00","0","99","140","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("29");
            obj.set_text("최종수정일");
            obj.set_cssclass("sta_cm_box01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("UPD_DTM","150","103","469","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static00_00","630","6","140","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("30");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static00_01_02","630","37","140","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("31");
            obj.set_text("그룹ID");
            obj.set_cssclass("sta_cm_box01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_01","630","68","140","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("32");
            obj.set_text("등록자");
            obj.set_cssclass("sta_cm_box01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00","630","99","140","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("33");
            obj.set_text("최종수정자");
            obj.set_cssclass("sta_cm_box01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("PRD_GRP_ID","779","41",null,"24","10",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("REGPSN_ID","779","72","140","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("UPDPSN_ID","779","103","140","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Radio("USE_YN","779","10","200","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            var divDetail_form_USE_YN_innerdataset = new nexacro.NormalDataset("divDetail_form_USE_YN_innerdataset", obj);
            divDetail_form_USE_YN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divDetail_form_USE_YN_innerdataset);
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("REGPSN_NM","923","72",null,"24","10",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("UPDPSN_NM","923","103",null,"24","10",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btn_add","562","134","72","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_text("추가");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btn_del","638","134","72","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_text("삭제");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtPrdNm","379","134","145","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btn_down","748","134","24","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            obj.set_text("▼");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btn_top","720","134","24","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            obj.set_text("▲");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grd_list","151","173",null,null,"10","10",null,null,null,null,this.divDetail.form);
            obj.set_taborder("34");
            obj.set_binddataset("ds_list");
            obj.set_cssclass("grd_WF_list");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_autoenter("select");
            obj.set_autosizingtype("row");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"180\"/><Column size=\"30\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"상품ID\"/><Cell col=\"3\" text=\"상품명\"/><Cell col=\"4\" colspan=\"2\" text=\"R&amp;D속성\"/><Cell col=\"6\" text=\"제조원\"/><Cell col=\"7\" text=\"주문단위\"/><Cell col=\"8\" text=\"원산지\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"expr:BSS_PRD_YN != &apos;Y&apos;?&apos;checkboxcontrol&apos;:&apos; normal&apos;\" edittype=\"expr:BSS_PRD_YN != &apos;Y&apos;?&apos;checkbox&apos;:&apos;none&apos;\" suppressalign=\"middle\" suppress=\"2\"/><Cell col=\"1\" text=\"bind:PRD_NUM\" suppress=\"2\" suppressalign=\"middle\"/><Cell col=\"2\" text=\"bind:PRD_ID\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"3\" text=\"bind:PRD_NM\" suppress=\"3\" textAlign=\"left\" suppressalign=\"middle\" wordWrap=\"char\"/><Cell col=\"4\" displaytype=\"expr:(BSS_PRD_YN == &apos;Y&apos; &amp;&amp; PRD_GRP_SPR_CD == &apos;20&apos;)?&apos;checkboxcontrol&apos;:&apos; normal&apos;\" text=\"bind:BASS_CHK\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\" edittype=\"expr:(BSS_PRD_YN == &apos;Y&apos; &amp;&amp; PRD_GRP_SPR_CD == &apos;20&apos;)?&apos;checkbox&apos;:&apos;none&apos;\"/><Cell col=\"5\" text=\"bind:SSP_PRD_ATTR_VAL\" textAlign=\"left\" wordWrap=\"char\"/><Cell col=\"6\" text=\"bind:MNFR_NM\" suppress=\"4\" suppressalign=\"middle\" wordWrap=\"char\"/><Cell col=\"7\" text=\"bind:SELL_UNIT\" suppress=\"4\" suppressalign=\"middle\"/><Cell col=\"8\" text=\"bind:CTRY_NM\" suppress=\"4\" suppressalign=\"middle\" wordWrap=\"char\"/></Band></Format><Format id=\"format00\"><Columns><Column size=\"30\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"220\"/><Column size=\"350\"/><Column size=\"120\"/><Column size=\"85\"/><Column size=\"85\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"상품ID\"/><Cell col=\"3\" text=\"상품명\"/><Cell col=\"4\" text=\"규격\"/><Cell col=\"5\" text=\"제조원\"/><Cell col=\"6\" text=\"주문단위\"/><Cell col=\"7\" text=\"원산지\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:PRD_SEQ\"/><Cell col=\"2\" text=\"bind:PRD_ID\"/><Cell col=\"3\" text=\"bind:PRD_NM\" textAlign=\"left\" wordWrap=\"char\"/><Cell col=\"4\" text=\"bind:PRD_ATTR_VAL\" textAlign=\"left\" wordWrap=\"char\"/><Cell col=\"5\" text=\"bind:MNFR_NM\" wordWrap=\"char\"/><Cell col=\"6\" text=\"bind:SELL_UNIT\"/><Cell col=\"7\" text=\"bind:CTRY_NM\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btn_cancel","547",null,"100","32",null,"20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("목록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert","651",null,"100","32",null,"20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","20","20","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("| 시리즈그룹상품 상세");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Button("btn_chgHist",null,"25","90","24","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("변경이력");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt00","20",null,null,"25","20","71",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("※ 시리즈상품의 경우 그룹상품리스트에 새로 추가된 상품의 R&D속성은 기준상품의 R&D속성으로 동기화 됩니다 (옵션속성, 주문단위는 제외)");
            obj.set_usedecorate("true");
            obj.set_color("#ff4242");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","1280","0","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("X");
            obj.set_visible("true");
            obj.set_background("black");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","3","155","16",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_title02");
            obj.set_color("white");
            obj.set_text("수정");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1300,752,this,function(p){});
            obj.set_stepindex("");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divDetail.form.PRD_GRP_NM","value","ds_detail","PRD_GRP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divDetail.form.PRD_GRP_SPR_CD","value","ds_detail","PRD_GRP_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divDetail.form.REG_DTM","value","ds_detail","REG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divDetail.form.UPD_DTM","value","ds_detail","UPD_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divDetail.form.PRD_GRP_ID","value","ds_detail","PRD_GRP_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divDetail.form.REGPSN_ID","value","ds_detail","REGPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divDetail.form.UPDPSN_ID","value","ds_detail","UPDPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divDetail.form.USE_YN","value","ds_detail","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divDetail.form.REGPSN_NM","value","ds_detail","REGPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divDetail.form.UPDPSN_NM","value","ds_detail","UPDPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_RD_08.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_RD_08.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_RD_08.xfdl(R&D 시리즈그룹 상품 관리 상세/수정)
        * 작 성			일 명: 나용철
        * 작 성	    	일 자: 2022/05/11
        * 변 경     	일 자:
        * 변 경			자 명:
        * 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술
        */
        /**********************************************************************
        	01. 전처리 공통 함수 선언
        ***********************************************************************/
        this.executeIncludeScript("RD::rdMain.xjs"); /*include "RD::rdMain.xjs"*/;
        /**********************************************************************
        	02. 폼 변수 정의
        ***********************************************************************/
        this.sOptinoArg1;
        this.sOptinoArg2;
        this.sParamArg1;
        this.sParamArg2;
        this.sParamArg3;
        this.sParamArg4;
        this.sParamArg5;

        this.fv_oApp        = nexacro.getApplication();
        this.lv_coCd        = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"") == "" ? "1000" : this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"");
        this.lv_orgCd       = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"ORG_CD"),"");
        this.lv_btnChkYn    = "";

        var rtnData 		= {};
        var prdSeq 			= 0;
        this.bassCnt        = 0;
        this.strKeyValue 	= "";
        /**********************************************************************
        	03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.form_onload = function(obj,e)
        {
        	//폼에 공통으로 로드시 사용하는 함수.
        	this.gfn_formOnLoad(this);
        	//사용자 초기화 함수
        	this.fn_formInit();

        };
        /**
         * 기능 : 폼언 로드(닫기전 셋팅)  Setting
         */
        this.form_onclose = function(obj,e)
        {

        };
        /**********************************************************************
        	04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
        	/******************* 기본셋팅 *********************/
        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sOp01))
        	{
        		 this.sOptinoArg1 = this.getOwnerFrame().pv_sOp01;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sOp02))
        	{
        		 this.sOptinoArg2 = this.getOwnerFrame().pv_sOp02;
        	}

        	/******************* 넘어온 인자값 *********************/
        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal01))
        	{
        		 this.sParamArg1 = this.getOwnerFrame().pv_sVal01;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal02))
        	{
        		 this.sParamArg2 = this.getOwnerFrame().pv_sVal02;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal03))
        	{
        		 this.sParamArg3 = this.getOwnerFrame().pv_sVal03;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal04))
        	{
        		 this.sParamArg4 = this.getOwnerFrame().pv_sVal04;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal05))
        	{
        		 this.sParamArg5 = this.getOwnerFrame().pv_sVal05;
        	}

        	var strDs   = "ds_prdGrpSprCdCombo|ds_rndPrdAuthCombo";		        // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
        	var strLgcd = "PRD_GRP_SPR_CD|CHRPSN_TEAM_SPR_CD";           		// 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
        	var strComb = "X|X";   												// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
        	var strOptn = "";													// 조건문 " AND COMM_IT02 = '" + vip + "'|||";
        	var svcId 	= "Init";

           // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
           // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.fn_CmmnMultiComboLoad(strDs
        							  , strLgcd
        							  , strComb
        							  , strOptn
        							  , svcId);

        };
        /*
         * 공통코드 후처리
         */
        this.fn_postformInit = function()
        {
        	// 초기화
        	this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();

        	this.ds_search.setColumn(nRow, "PRD_GRP_ID", 		this.sParamArg1);
        	this.ds_search.setColumn(nRow, "PRD_GRP_SPR_CD", 	this.sParamArg2);
        	this.ds_search.setColumn(nRow, "CO_CD", 			this.sParamArg4);
        	this.ds_search.setColumn(nRow, "MALL_SPR_CD", 		this.sParamArg5);

        	this.divDetail.form.PRD_GRP_NM.setFocus();
        	this.fn_Ret();                               // 조회처리
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
        	if(nErrorCode != 0)
        	{
        		this.fn_alert(nErrorCode+"\n"+sErrorMsg,"에러정보","","error");
        		return false;
        	}else
        	{
        		/*sSvcId (Transaction Id)*/
        		switch(sSvcId)
        		{
        			case "Init":
        					this.fn_postformInit();
        				break;
        			case "Ret" :
        					this.fn_postRet();
        				break;
        		    case "Save":
        					this.fn_postSave();
        				break;
        			case "RetTmp" :
        					this.fn_postRetTmp();
        				break;
        			default:
        				break;
        		}
        	}
        };

        //Popup callback영역
        this.fn_popupCallback = function(strId, strVal)
        {
        	rtnData = {};
            switch(strId)
            {
         		case "SSP_BO_PP_38":                                     // 상품·그룹ID 멀티입력팝업 후처리

        				if(!this.gfn_isNull(strVal))
        				{
        					resData = JSON.parse(strVal);
        					rtnData = resData;
        					this.divDetail.form.edtPrdId.set_value(resData.PRD_ID);
        					this.divDetail.form.edtPrdNm.set_value(resData.PRD_NM);
        				}else
        				{
        					// 닫기 버튼 처리
        				}
        		    break;
        		case "SSP_BO_NA_27":

        				if(!this.gfn_isNull(strVal))
        				{
        					resData = JSON.parse(strVal);
        					this.ds_detail.setColumn(0,"UPD_RSN",resData.UPD_RSN);
        					this.fn_Save();
        				}else
        				{
        					// 닫기 버튼 처리
        				}
        			break;
        		case "SSP_BO_PA_48":
        				if(!this.gfn_isNull(strVal))
        				{
        					resData = JSON.parse(strVal);
        				}else
        				{
        					// 닫기 버튼 처리
        				}
        			break;
        		case "SSP_BO_RD_56" :                         // 변경 이력 처리시
                    if(!this.gfn_isNull(strVal))
                    {
                        //일반
                        var sRtn = strVal.split(",");
        				if(sRtn[0] == "CLOSE")
                        {
                        }else if(sRtn[0] == "EXIT")
                        {
                        }else
        				{

        				}
                    }
        		    break;
                default:
                    break;
            }
        };

        /**********************************************************************
                05. 상세조회
        ***********************************************************************/
        /*
         * 시리즈 그룹상품 상세 메인 전처리
         */
        this.fn_preRet = function ()
        {
        	return true;
        };
        /*
         * 시리즈 그룹상품 상세 메인
         */
        this.fn_Ret = function()
        {
        	 if(!this.fn_preRet())
            {
                return false;
            }

        	var strSvc      = "Ret";
            var strUrl      = "/rd/srs-grp-prd-mng/select-product-series.do";
            var strInDs     = "ds_search=ds_search";
        	var strOutDs    = "ds_detail=ds_output1 "
        	    strOutDs   += "ds_list=ds_output2";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);

        };

        /*
         * 시리즈 그룹상품 상세 메인 후처리
         */
        this.fn_postRet = function ()
        {
        	if(this.sParamArg2 == '30')
        	{
        			this.divDetail.form.grd_list.set_formatid("format00");
        			this.divDetail.form.grd_list.set_autofittype("col");
        			this.sParamArg3 = null;
        	} else
        	{
        			this.divDetail.form.grd_list.set_formatid("default");
        			this.divDetail.form.grd_list.set_autofittype("none");

        			this.divDetail.form.btn_down.set_enable(false);
        			this.divDetail.form.btn_top.set_enable(false);
        			this.divDetail.form.btn_del.set_enable(false);
        	}
        	this.ds_list.set_rowposition(-1);

        	// RND화면권한제어
        	this.fn_setRndUiAuthCtl();
        };

        /**********************************************************************
                06. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 버튼 클릭시
         */
        this.insert_btn_onclick = function(obj,e)
        {
        	if(!this.gfn_dsIsUpdated(this.ds_detail) && !this.gfn_dsIsUpdated(this.ds_list))
        	 {
        		this.fn_alert("ERRC000035","저장","","question");      						//변경된 내용이 없습니다.
        		return false;
        	 }
        	var objParam = {};
        	this.gfn_openPopup("SSP_BO_NA_27"
        	                 , "PR_POP::SSP_BO_NA_27.xfdl"
        					 , objParam);
        };

        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {

        	 if(this.gfn_isNull(this.divDetail.form.PRD_GRP_SPR_CD.value))
        	 {
        		this.fn_alert("ERRS000144","저장","그룹구분","question");      // 그룹구분 (&1은(는) 필수입력사항입니다.)
        		this.divDetail.form.PRD_GRP_SPR_CD.setFocus();
        		return false;
        	 }

        	 if(this.gfn_isNull(this.divDetail.form.PRD_GRP_NM.value))
        	 {
        		this.fn_alert("ERRS000144","저장","그룹명 ","question");      // 그룹명 (&1은(는) 필수입력사항입니다.)
        		this.divDetail.form.PRD_GRP_NM.setFocus();
        		return false;
        	 }

        	this.ds_save.clearData();
        	this.ds_saveTemp.clearData();

        	for(var i=0; i<this.ds_list.rowcount; i++)
        	{
        		var row = this.ds_save.addRow();
        		this.ds_save.setColumn(row,"CO_CD",this.ds_list.getColumn(i,"CO_CD"));
        		this.ds_save.setColumn(row,"PRD_ID",this.ds_list.getColumn(i,"PRD_ID"));
        	}

        	// 중복데이터 제거
        	this.fn_distincDsFilter(this.ds_save,"CO_CD,PRD_ID");
        	this.ds_saveTemp.copyData(this.ds_save,true);
        	if(this.ds_saveTemp.rowcount < 2)
        	{
        		this.fn_alert("ERRR000080","저장"," ","question");      			//그룹 상품 리스트에 2개 이상의 상품을 구성해주세요
        		return false;
        	}

        	if(this.divDetail.form.PRD_GRP_SPR_CD.value == "20")
        	{
        		this.bassCnt = 0;
        		for(var i=0; i< this.ds_list.rowcount; i++)
        		{
        			if(this.ds_list.getColumn(i,"BSS_PRD_YN") == "Y" && this.ds_list.getColumn(i,"BASS_CHK") == "Y")
        			{
        				this.bassCnt++;
        			}
        		}

        		if(this.bassCnt == 0)
        		{
        			this.fn_alert("ERRR000093","저장"," ","question");                       //동기화가 필요한 기준상품의 R&D속성을 선택해 주세요.
        			return false;
        		}
        	}

        	var result = this.fn_confirm( "ERRR000098", "저장","", "question" ); // 저장 하시겠습니까?
        	if(result == 0)
        	{
        	 return false;
        	}
        	return true;

        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Save = function()
        {
            if(!this.fn_PreSave())
            {
                return false;
            }

        	var strSvc      = "Save";
        	var strUrl      = "/rd/srs-grp-prd-mng/save-product-series.do";
            var strInDs     = "ds_detail=ds_detail:A ";
        	    strInDs    += "ds_list=ds_list:A";
            var strOutDs    = "";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);

        };


        /**
         * 기능 : 저장시 후처리
         */
        this.fn_postSave = function()
        {
            //this.fn_alert("ERRR000007","저장"," ","question");      			//정상적으로 저장되었습니다
        	var objRtnArr = new Array(2);
        	objRtnArr[0] = "SUCCESS";
        	objRtnArr[1] = this.strKeyValue;
        	this.close(objRtnArr.toString());

        };
        /**********************************************************************
                07. 상품속성정보 함수 선언
        ***********************************************************************/
        /*
         * 상품속성정보 전처리
         */
        this.fn_preRetTmp = function ()
        {
        	return true;
        };

        /*
         * 상품속성정보 조회 메인조회
         */

        this.fn_RetTmp = function()
        {
        	 if(!this.fn_preRetTmp())
            {
                return false;
            }

        	var strSvc      = "RetTmp";
           	var strUrl      = "/rd/srs-grp-prd-mng/select-series-temp.do";
            var strInDs     = "ds_search=ds_search";
        	var strOutDs    = "ds_temp=ds_output";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };
        /*
         * 상품속성정보 후처리
         */
        this.fn_postRetTmp = function ()
        {
        	this.divDetail.form.grd_list.set_enableredraw(false);
        	this.divDetail.form.grd_list.set_enableevent(false);
        	this.ds_list.set_enableevent(false);

        	for(var i=0; i<this.ds_temp.rowcount; i++)
        	{
        		var nRow = this.ds_list.addRow();
        		this.ds_list.setColumn(nRow,"CO_CD",		this.ds_temp.getColumn(i,"CO_CD"));
        		this.ds_list.setColumn(nRow,"PRD_GRP_ID",	this.ds_detail.getColumn(0,"PRD_GRP_ID"));
        		this.ds_list.setColumn(nRow,"PRD_ID",		this.ds_temp.getColumn(i,"PRD_ID"));
        		this.ds_list.setColumn(nRow,"PRD_NM",		this.ds_temp.getColumn(i,"PRD_NM"));
        		this.ds_list.setColumn(nRow,"CTRY_NM",		this.ds_temp.getColumn(i,"CTRY_NM"));
        		this.ds_list.setColumn(nRow,"SELL_UNIT",	this.ds_temp.getColumn(i,"SELL_UNIT"));
        		this.ds_list.setColumn(nRow,"MNFR_NM",		this.ds_temp.getColumn(i,"MNFR_NM"));

        		var prdSeq = this.gfn_isNull(this.ds_list.getMax("PRD_SEQ"))?0:this.ds_list.getMax("PRD_SEQ");

        		if(this.divDetail.form.PRD_GRP_SPR_CD.value != "30")
        		{
        			this.ds_list.setColumn(nRow,"PRD_NUM",			prdSeq+1);
        			this.ds_list.setColumn(nRow,"PRD_SEQ",			prdSeq+1);
        			this.ds_list.setColumn(nRow,"SSP_PRD_ATTR_VAL",	this.ds_temp.getColumn(i,"SSP_PRD_ATTR_VAL"));
        			this.ds_list.setColumn(nRow,"PRD_ATTR_CD",		this.ds_temp.getColumn(i,"PRD_ATTR_CD"));

        		} else
        		{
        			this.ds_list.setColumn(nRow,"PRD_ATTR_VAL",		this.ds_temp.getColumn(i,"PRD_ATTR_VAL"));
        			this.ds_list.setColumn(nRow,"PRD_SEQ",			prdSeq+1);
        		}
        	}

        	// 상품추가 초기화
        	this.divDetail.form.edtPrdId.set_value("");
        	this.divDetail.form.edtPrdNm.set_value("");

        	this.divDetail.form.btn_down.set_enable(true);
        	this.divDetail.form.btn_top.set_enable(true);
        	this.divDetail.form.btn_del.set_enable(true);

        	rtnData = {};

        	this.divDetail.form.grd_list.set_enableredraw(true);
        	this.divDetail.form.grd_list.set_enableevent(true);
        	this.ds_list.set_enableevent(true);
        };
        /**********************************************************************
                08. 추가 함수 선언
        ***********************************************************************/
        this.divDetail_btn_add_onclick = function(obj,e)
        {
        	if(this.gfn_isNull(rtnData.PRD_ID))
        	{
        		this.fn_alert("ERRR000091","저장"," ","question");      			                                                              //상품을 선택해 주세요
        	}else
        	{
        		for(var i=0; i<this.ds_list.rowcount; i++)
        		{
        			if(rtnData.PRD_ID_VIEW == this.ds_list.getColumn(i,"PRD_ID"))
        			{
        				this.fn_alert("ERRR000081","저장"," ","question");      			//그룹 상품 리스트에 중복된 상품이 있습니다. 확인해 주세요.
        				return false;
        			}
        		}

        		this.ds_search.setColumn(0,"CO_CD", this.sParamArg4);
        		this.ds_search.setColumn(0,"PRD_ID", rtnData.PRD_ID);
        		this.ds_search.setColumn(0,"PRD_GRP_SPR_CD", this.divDetail.form.PRD_GRP_SPR_CD.value);

        		// 상품속성정보 조회
        		this.fn_RetTmp();
        	}
        };

        /**********************************************************************
                09. 삭제 함수 선언
        ***********************************************************************/
        this.divDetail_btn_del_onclick = function(obj,e)
        {
        	this.fn_multiDelete("CHK",this.ds_list);
        };

        //멀티 삭제
        this.fn_multiDelete = function(chkId, dataSet)
        {
        	if(this.gfn_isNull(chkId))
        	{
        		chkId = "CHK";
        	}
        	var chkCnt = dataSet.getCaseCount(chkId + "==1");

        	if( chkCnt == 0 )
        	{
        		this.fn_alert("ERRC000050","저장","행","question");      			//선택된 &1 이(가) 없습니다.
        		return false;
        	}

        	var delArr = [];
        	for(var i=0; i<dataSet.rowcount; i++)
        	{
        		var checkbox = dataSet.getColumn(i, chkId);
        		if(checkbox==1)
        		{
        			delArr.push(i);
        		}
        	}
        	dataSet.deleteMultiRows(delArr);
        }
        /**********************************************************************
        	10. 닫기버튼
        ***********************************************************************/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close("CLOSE");
        };

        this.btn_clear_onclick = function(obj,e)
        {
        	var result = this.fn_confirm( "수정을 취소하고 목록으로 이동하시겠습니까?", "저장","", "question" ); // 수정을 취소하고 목록으로 이동하시겠습니까?

        	if(result == 0)
            {
                 return false;
            }
        	this.close("EXIT");
        ;

        };
        /**********************************************************************
        	11.Get, Set Method
        ***********************************************************************/
        // 중복값 제거
        this.fn_distincDsFilter = function(objDs, sColID)
        {
        	var arrArgs			= this.gfn_trim(sColID).split(",");
        	var sFilterExpr		= "";
        	var sFindRowExpr	= "";

        	for (var i=0; i<arrArgs.length; i++)
        	{
        		if (objDs.getColumnInfo(arrArgs[i]) == null)
        		{
        			continue;
        		}
        		sFindRowExpr	+= (this.gfn_isNull(sFindRowExpr) == false) ? " && " : "";
        		sFindRowExpr	+= "" + arrArgs[i] + "=='\" + " + arrArgs[i] + " + \"'";
        	}

        	if (this.gfn_isNull(sFindRowExpr) == false)
        	{
        		sFilterExpr	= "rowidx==dataset.findRowExpr(\"" + sFindRowExpr + "\")";
        	}

        	objDs.filter(sFilterExpr);
        }


        /**********************************************************************
        	12.기타 Control Event
        ***********************************************************************/
        /**
         * RND화면권한제어
         */
        this.fn_setRndUiAuthCtl = function()
        {
        	var strRndPrdAuth = this.ds_rndPrdAuthCombo.findRowExpr("COM_DTL_CD == '" + this.lv_orgCd + "' && USE_YN == 'Y'");

        	// RND상품담당권한 슈퍼 조직인 경우
        	if(strRndPrdAuth != -1)
        	{
        		this.lv_btnChkYn = "P";
        	}

        	// 슈퍼권한 혹은 구매담당자 or 상품담당자가 아닐 경우 조회만 가능
        	if(this.gfn_isNull(this.lv_btnChkYn))
        	{
        		this.fn_compontAllControl();
        	}
        };

        this.fn_compontAllControl = function ()
        {
        	var btnEnableTreu   = {
        							btn_chgHist  : this.btn_chgHist
        						  , btn_cancel   : this.btn_cancel
        						  , btn_close    : this.btn_close
        	                      };
        	var btnVisibleFalse = {
        							btn_insert : this.btn_insert
        						// , btn_rjct : this.btn_rjct
        	                      };

        	this.fn_componentInitViewControl(this,btnEnableTreu,btnVisibleFalse);
        };

        /*
         * 상위 버튼을 쿨릭시 처리
         */
        this.divDetail_btn_top_onclick = function(obj,e)
        {
        	var nTRow 	= this.ds_list.rowposition;
        	var maxRow 	= this.ds_list.getCaseCount("BSS_PRD_YN=='Y'");

        	if(nTRow == maxRow)
        	{
        		this.fn_alert("ERRN000038","저장","","question");      			//더 이상 이동할 수 없습니다.
        		return false;
        	}
        	this.ds_list.moveRow(nTRow, (nTRow-1));

        	var seq = 1;
        	for(var i=maxRow; i<this.ds_list.rowcount; i++)
        	{
        		this.ds_list.setColumn(i, "PRD_SEQ" , seq);
        		seq++;
        	}
        };

        /*
         * 하위 버튼을 쿨릭시 처리
         */
        this.divDetail_btn_down_onclick = function(obj,e)
        {
        	var nTRow = this.ds_list.rowposition;
        	var minRow = this.ds_list.getCaseCount("BSS_PRD_YN=='Y'");

        	if(minRow <= nTRow)
        	{
        		if(nTRow == (this.ds_list.getRowCount()-1))
        		{
        			this.fn_alert("ERRN000038","저장","","question");      			                        //더 이상 이동할 수 없습니다.
        			return false;
        		}
        		this.ds_list.moveRow(nTRow, (nTRow+1));
        	}else
        	{
        		this.fn_alert("ERRR000177","저장","","question");      			                            //&1은 이동불가 입니다.

        		return false;
        	}

        	var seq = 1;
        	for(var i=minRow; i<this.ds_list.rowcount; i++)
        	{
        		this.ds_list.setColumn(i, "PRD_SEQ" , seq);
        		seq++;
        	}

        };
        /*
         * 그룹구분 레디오 버튼을 변경시 처리
         */
        this.div_01_PRD_GRP_SPR_CD_onitemchanged = function(obj,e)
        {
        	if(obj.value == '30')
        	{
        		this.divDetail.form.grd_list.set_formatid("format00");
        	}else
        	{
        		this.divDetail.form.grd_list.set_formatid("default");
        	}
        };

        /*
         * 그룹상품 추가 팝업 처리
         */
        this.divDetail_btn_prd_onclick = function(obj,e)
        {
        	var objParam = { coCd       :this.sParamArg4
        	               , prdClcd    :this.sParamArg3
        			       , mallSprCd 	:this.sParamArg5
        				   };
        	this.gfn_openPopup("SSP_BO_PP_38"
        	                 , "PR_POP::SSP_BO_PP_38.xfdl"
        					 , objParam);
        };
        /*
         * 변경이력버튼 클릭처리
         */
        this.btn_chgHist_onclick = function(obj,e)
        {
        	var lv_sFlag01 			= "FORMAT01";						                     // GRID(그리드)에 formatid:포멧ID
        	var lv_sFlag02			= "TB_PR_PRD_GRP_BASIS_HST";			                 // 로그테이블 이름(시리즈그룹상품)
        	var lv_sValue01 		= this.ds_detail.getColumn(0, "PRD_GRP_ID");	         // 살품그룹ID
        	var lv_sValue02 		= this.sParamArg5                                        // 몰구분 SSP:01,R&D상품:02
        	var lv_sValue03 		= "";                                                    //
        	var lv_sValue04 		= "";                                                    //
        	var lv_sValue05		    = "";  	                                                 //

        	var sPopId 			= "SSP_BO_RD_56";
        	var sUrl 			= "RD_POP::SSP_BO_RD_56.xfdl";
        	var oArg 			= { pv_sOp01:lv_sFlag01      	  // GRID(그리드)에 formatid:포멧ID
        						  , pv_sOp02:lv_sFlag02       	  // 로그테이블 이름
        						  , pv_sVal01:lv_sValue01         // 파라미터1
        						  , pv_sVal02:lv_sValue02         // 파라미터2
        						  , pv_sVal03:lv_sValue03         // 파라미터3
        						  , pv_sVal04:lv_sValue04         // 파라미터4
        						  , pv_sVal05:lv_sValue05};       // 파라미터5
        	var sPopupCallBack 	= "fn_popupCallback";
        	var oOption 		= {titlebar:"false"};

        	this.gfn_openPopup( sPopId
        					  , sUrl
        					  , oArg
        					  , sPopupCallBack
        					  , oOption);

        };
        /*
         * 그리드에 체크박스를 셀을 클릭시 처리
         */
        this.divDetail_grd_list_oncellclick = function(obj,e)
        {
        	if(this.ds_list.getColumn(e.row,"BSS_PRD_YN") == "Y")
        	{
        		this.divDetail.form.btn_down.set_enable(false);
        		this.divDetail.form.btn_top.set_enable(false);
        		this.divDetail.form.btn_del.set_enable(false);
        	} else
        	{
        		this.divDetail.form.btn_down.set_enable(true);
        		this.divDetail.form.btn_top.set_enable(true);
        		this.divDetail.form.btn_del.set_enable(true);
        	}

        	if(e.cell == this.divDetail.form.grd_list.getBindCellIndex("body","CHK"))
        	{
        		var checkbox 	= this.ds_list.getColumn(e.row, "CHK");
        		var prdid 		= this.ds_list.getColumn(e.row, "PRD_ID");

        		for(var j=0; j< this.ds_list.rowcount; j++)
        		{
        			if( checkbox == 1 && prdid == this.ds_list.getColumn(j,"PRD_ID"))
        			{
        				this.ds_list.setColumn(j,"CHK",1);

        			}else if( checkbox == 0 && prdid == this.ds_list.getColumn(j,"PRD_ID"))
        			{
        				this.ds_list.setColumn(j,"CHK",0);
        			}
        		}
        	} else if(e.cell == this.divDetail.form.grd_list.getBindCellIndex("body","BASS_CHK"))                                 // 기준상품 SSP속성  선택항목
        	{
        		var bssPrdAttrInfo = "";
        		for(var j=0; j<this.ds_list.rowcount; j++)
        		{
        			if(this.ds_list.getColumn(j,"BASS_CHK") == "Y")
        			{
        				bssPrdAttrInfo += this.ds_list.getColumn(j,"PRD_ATTR_CD") + ',';
        			}
        		}

        		for(var i=0; i<this.ds_list.rowcount; i++)
        		{
        			if(this.ds_list.getColumn(i,"BSS_PRD_YN") == "Y")
        			{
        				this.ds_list.setColumn(i,"BSS_PRD_ATTR_INFO", bssPrdAttrInfo.replace(/,\s*$/, ""));
        			}
        		}
        	}

        	// 슈퍼권한 혹은 구매담당자 or 상품담당자가 아닐 경우 조회만 가능
        	if(this.gfn_isNull(this.lv_btnChkYn))
        	{
        		this.fn_compontAllControl();
        	}
        };






        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.form_onclose,this);
            this.divDetail.form.Static29_00_00.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.divDetail.form.PRD_GRP_SPR_CD.addEventHandler("onitemchanged",this.div_01_PRD_GRP_SPR_CD_onitemchanged,this);
            this.divDetail.form.btn_prd.addEventHandler("onclick",this.divDetail_btn_prd_onclick,this);
            this.divDetail.form.btn_add.addEventHandler("onclick",this.divDetail_btn_add_onclick,this);
            this.divDetail.form.btn_del.addEventHandler("onclick",this.divDetail_btn_del_onclick,this);
            this.divDetail.form.btn_down.addEventHandler("onclick",this.divDetail_btn_down_onclick,this);
            this.divDetail.form.btn_top.addEventHandler("onclick",this.divDetail_btn_top_onclick,this);
            this.divDetail.form.grd_list.addEventHandler("oncellclick",this.divDetail_grd_list_oncellclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_insert.addEventHandler("onclick",this.insert_btn_onclick,this);
            this.btn_chgHist.addEventHandler("onclick",this.btn_chgHist_onclick,this);
            this.sta_totcnt00.addEventHandler("onclick",this.Div_top_info00_sta_totcnt00_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_RD_08.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
