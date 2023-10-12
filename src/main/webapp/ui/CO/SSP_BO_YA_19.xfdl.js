(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_YA_19");
            this.set_titletext("엑셀메타관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1202,722);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_META_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_META_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"IPT_PST_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IPT_PST_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DOWN_LMT_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"BVAL_DOWN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COL_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ATTR_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"COL_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_COL\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_INQ_CLASS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_INQ_METHOD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYnGrd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_dtl", this);
            obj._setContents("<ColumnInfo><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_META_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COL_TTL_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_COL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ipt_pst_type", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search_dtl", this);
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_META_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excel", this);
            obj._setContents("<ColumnInfo><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_META_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"IPT_PST_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DOWN_LMT_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"BVAL_DOWN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COL_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ATTR_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"COL_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_INQ_CLASS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_INQ_METHOD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COL_TTL_INFO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,"108","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","20","20",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static20","20","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("프로그램");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static22_00","765","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("USE_YN","Static22_00:10","24","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_useYn");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("ALL");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("PGM_NM","160","24","595","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"Static21:10","60","26","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnClear",null,"Static21:10","60","26","84",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("초기화");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_metaMstlist","20","176","500",null,null,"54",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"28\"/><Column size=\"318\"/><Column size=\"88\"/><Column size=\"62\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"프로그램명\"/><Cell col=\"2\" text=\"엑셀메타 순번\"/><Cell col=\"3\" text=\"입력위치\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK_COL\"/><Cell col=\"1\" text=\"bind:PGM_NM\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:EXCEL_META_SEQ\"/><Cell col=\"3\" text=\"bind:IPT_PST_TYPE_CD\" displaytype=\"combotext\" combodataset=\"ds_ipt_pst_type\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20",null,"270","25",null,"grd_metaMstlist:3",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("(총 0건, 1 / 1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20",null,"500","24",null,"20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btnDtlDel",null,"966","81","28","-10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnDtlRegist",null,"966","81","28","btnDtlDel:4",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("등록");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list_dtl","grd_metaMstlist:50","btnDtlRegist:10",null,null,"-10","-461",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_list_dtl");
            obj.set_autofittype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"31\"/><Column size=\"131\"/><Column size=\"555\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"언어코드\"/><Cell col=\"2\" text=\"컬럼타이틀정보\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK_COL\"/><Cell col=\"1\" text=\"bind:LANG_CD\"/><Cell col=\"2\" text=\"bind:COL_TTL_INFO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_mst","540","Div00:30",null,"412","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"0","110","28","0",null,null,null,null,null,this.div_mst.form);
            obj.set_taborder("12");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.div_mst.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"0","81","28","btnExcel:4",null,null,null,null,null,this.div_mst.form);
            obj.set_taborder("11");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.div_mst.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"0","81","28","btnSave:91",null,null,null,null,null,this.div_mst.form);
            obj.set_taborder("9");
            obj.set_text("삭제");
            obj.set_visible("false");
            this.div_mst.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","81","28","btnDel:-166",null,null,null,null,null,this.div_mst.form);
            obj.set_taborder("10");
            obj.set_text("추가");
            this.div_mst.addChild(obj.name, obj);

            obj = new Static("Static21_00","0","38",null,"32","0",null,null,null,null,null,this.div_mst.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_mst.addChild(obj.name, obj);

            obj = new Static("sta_pgm","0","38","130","32",null,null,null,null,null,null,this.div_mst.form);
            obj.set_taborder("14");
            obj.set_text("프로그램");
            obj.set_cssclass("sta_cm_box01L_tdt_necessary");
            this.div_mst.addChild(obj.name, obj);

            obj = new Static("Static27_01","0","69",null,"32","0",null,null,null,null,null,this.div_mst.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_cm_box02L");
            this.div_mst.addChild(obj.name, obj);

            obj = new Static("sta_meta","0","69","130","32",null,null,null,null,null,null,this.div_mst.form);
            obj.set_taborder("16");
            obj.set_text("엑셀메타순번");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.div_mst.addChild(obj.name, obj);

            obj = new Static("Static20_00_00_00","374","69","145","32",null,null,null,null,null,null,this.div_mst.form);
            obj.set_taborder("17");
            obj.set_text("입력위치");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.div_mst.addChild(obj.name, obj);

            obj = new Static("Static27_01_00","0","100",null,"32","0",null,null,null,null,null,this.div_mst.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_cm_box02L");
            this.div_mst.addChild(obj.name, obj);

            obj = new Static("Static27_01_00_01","0","131",null,"81","0",null,null,null,null,null,this.div_mst.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_cm_box02L");
            this.div_mst.addChild(obj.name, obj);

            obj = new Static("Static27_01_00_03","0","372",null,"40","0",null,null,null,null,null,this.div_mst.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_mst.addChild(obj.name, obj);

            obj = new Static("Static27_01_00_01_00","0","211",null,"61","0",null,null,null,null,null,this.div_mst.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_mst.addChild(obj.name, obj);

            obj = new Static("Static27_01_00_01_00_00","0","291",null,"81","0",null,null,null,null,null,this.div_mst.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_cm_box02L");
            this.div_mst.addChild(obj.name, obj);

            obj = new Static("Static20_00_01_00","0","100","130","32",null,null,null,null,null,null,this.div_mst.form);
            obj.set_taborder("23");
            obj.set_text("다운로드제한건수");
            obj.set_cssclass("sta_cm_box01L");
            this.div_mst.addChild(obj.name, obj);

            obj = new Static("Static20_00_00_00_00","374","100","145","32",null,null,null,null,null,null,this.div_mst.form);
            obj.set_taborder("24");
            obj.set_text("대용량다운로드 여부");
            obj.set_cssclass("sta_cm_box01L");
            this.div_mst.addChild(obj.name, obj);

            obj = new Static("Static20_00_01_00_00","0","131","130","81",null,null,null,null,null,null,this.div_mst.form);
            obj.set_taborder("25");
            obj.set_text("컬럼정보");
            obj.set_cssclass("sta_cm_box01L");
            this.div_mst.addChild(obj.name, obj);

            obj = new Static("Static20_00_01_00_00_00","0","211","130","81",null,null,null,null,null,null,this.div_mst.form);
            obj.set_taborder("26");
            obj.set_text("컬럼속성정보\r\n(문자,숫자만)");
            obj.set_cssclass("sta_cm_box01L");
            this.div_mst.addChild(obj.name, obj);

            obj = new Static("Static20_00_01_00_00_00_00","0","291","130","81",null,null,null,null,null,null,this.div_mst.form);
            obj.set_taborder("27");
            obj.set_text("셀너비값");
            obj.set_cssclass("sta_cm_box01L");
            this.div_mst.addChild(obj.name, obj);

            obj = new Static("sta_dataInqClassNm","0","372","130","40",null,null,null,null,null,null,this.div_mst.form);
            obj.set_taborder("28");
            obj.set_text("자료조회클래스명");
            obj.set_cssclass("sta_cm_box01L");
            this.div_mst.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","140","310",null,"54","10",null,null,null,null,null,this.div_mst.form);
            obj.set_taborder("7");
            this.div_mst.addChild(obj.name, obj);

            obj = new TextArea("COL_ATTR_INFO","140","217",null,"49","10",null,null,null,null,null,this.div_mst.form);
            obj.set_taborder("6");
            this.div_mst.addChild(obj.name, obj);

            obj = new TextArea("COL_INFO","140","137",null,"69","10",null,null,null,null,null,this.div_mst.form);
            obj.set_taborder("5");
            this.div_mst.addChild(obj.name, obj);

            obj = new Edit("PGM_ID","140","42","201","24",null,null,null,null,null,null,this.div_mst.form);
            obj.set_taborder("29");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.div_mst.addChild(obj.name, obj);

            obj = new Button("btn_dept","345","42","25","24",null,null,null,null,null,null,this.div_mst.form);
            obj.set_taborder("0");
            obj.set_verticalAlign("");
            obj.set_cssclass("btn_WF_search02");
            this.div_mst.addChild(obj.name, obj);

            obj = new Edit("PGM_NM","374","42",null,"24","10",null,null,null,null,null,this.div_mst.form);
            obj.set_taborder("30");
            obj.set_readonly("true");
            this.div_mst.addChild(obj.name, obj);

            obj = new Edit("EXCEL_META_SEQ","140","73","224","24",null,null,null,null,null,null,this.div_mst.form);
            obj.set_taborder("1");
            obj.set_inputtype("number");
            obj.set_readonly("true");
            this.div_mst.addChild(obj.name, obj);

            obj = new Edit("DOWN_LMT_CNT","140","104","224","24",null,null,null,null,null,null,this.div_mst.form);
            obj.set_taborder("3");
            obj.set_inputtype("number");
            this.div_mst.addChild(obj.name, obj);

            obj = new Combo("BVAL_DOWN_YN","529","104",null,"24","10",null,null,null,null,null,this.div_mst.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_mst_form_BVAL_DOWN_YN_innerdataset = new nexacro.NormalDataset("div_mst_form_BVAL_DOWN_YN_innerdataset", obj);
            div_mst_form_BVAL_DOWN_YN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">부</Col></Row></Rows>");
            obj.set_innerdataset(div_mst_form_BVAL_DOWN_YN_innerdataset);
            obj.set_text("Combo01");
            this.div_mst.addChild(obj.name, obj);

            obj = new Combo("IPT_PST_TYPE_CD","529","73",null,"24","10",null,null,null,null,null,this.div_mst.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_ipt_pst_type");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("Combo00");
            this.div_mst.addChild(obj.name, obj);

            obj = new Static("Static27_01_00_03_00","0","272",null,"32","0",null,null,null,null,null,this.div_mst.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_cm_box02L");
            this.div_mst.addChild(obj.name, obj);

            obj = new Static("sta_dataInqMethodNm","305","374","145","38",null,null,null,null,null,null,this.div_mst.form);
            obj.set_taborder("32");
            obj.set_text("자료조회메소드명");
            obj.set_cssclass("sta_cm_box01L");
            this.div_mst.addChild(obj.name, obj);

            obj = new Static("sta_useyn00","0","272","130","32",null,null,null,null,null,null,this.div_mst.form);
            obj.set_taborder("33");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.div_mst.addChild(obj.name, obj);

            obj = new Combo("USE_YN","140","276","224","24",null,null,null,null,null,null,this.div_mst.form);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_useYnGrd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("Combo00");
            this.div_mst.addChild(obj.name, obj);

            obj = new Edit("DATA_INQ_CLASS_NM","140","379","161","26",null,null,null,null,null,null,this.div_mst.form);
            obj.set_taborder("34");
            this.div_mst.addChild(obj.name, obj);

            obj = new Edit("DATA_INQ_METHOD_NM","455","381","177","24",null,null,null,null,null,null,this.div_mst.form);
            obj.set_taborder("35");
            obj.set_inputtype("normal");
            this.div_mst.addChild(obj.name, obj);

            obj = new Grid("grid_excel","0","902",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_visible("false");
            obj.set_binddataset("ds_excel");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"124\"/><Column size=\"81\"/><Column size=\"61\"/><Column size=\"106\"/><Column size=\"131\"/><Column size=\"218\"/><Column size=\"194\"/><Column size=\"80\"/><Column size=\"159\"/><Column size=\"172\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"245\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"프로그램명\"/><Cell col=\"1\" text=\"엑셀메타 순번\"/><Cell col=\"2\" text=\"입력위치\"/><Cell col=\"3\" text=\"다운로드제한건수\"/><Cell col=\"4\" text=\"대용량다운로드여부\"/><Cell col=\"5\" text=\"컬럼정보\"/><Cell col=\"6\" text=\"컬럼속성정보\"/><Cell col=\"7\" text=\"셀너비값\"/><Cell col=\"8\" text=\"자료조회클래스명\"/><Cell col=\"9\" text=\"자료조회메소드명\"/><Cell col=\"10\" text=\"사용여부\"/><Cell col=\"11\" text=\"언어코드\"/><Cell col=\"12\" text=\"컬럼타이틀정보\"/></Band><Band id=\"body\"><Cell text=\"bind:PGM_NM\"/><Cell col=\"1\" text=\"bind:EXCEL_META_SEQ\"/><Cell col=\"2\" text=\"bind:IPT_PST_TYPE_NM\"/><Cell col=\"3\" text=\"bind:DOWN_LMT_CNT\"/><Cell col=\"4\" text=\"bind:BVAL_DOWN_YN\"/><Cell col=\"5\" text=\"bind:COL_INFO\"/><Cell col=\"6\" text=\"bind:COL_ATTR_INFO\"/><Cell col=\"7\" text=\"bind:COL_SIZE\"/><Cell col=\"8\" text=\"bind:DATA_INQ_CLASS_NM\"/><Cell col=\"9\" text=\"bind:DATA_INQ_METHOD_NM\"/><Cell col=\"10\" text=\"bind:USE_YN\"/><Cell col=\"11\" text=\"bind:LANG_CD\"/><Cell col=\"12\" text=\"bind:COL_TTL_INFO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1202,722,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.USE_YN","value","ds_search","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_mst.form.COL_ATTR_INFO","value","ds_list","COL_ATTR_INFO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_mst.form.COL_INFO","value","ds_list","COL_INFO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_mst.form.USE_YN","value","ds_list","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_mst.form.PGM_ID","value","ds_list","PGM_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_mst.form.PGM_NM","value","ds_list","PGM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_mst.form.EXCEL_META_SEQ","value","ds_list","EXCEL_META_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_mst.form.DOWN_LMT_CNT","value","ds_list","DOWN_LMT_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_mst.form.BVAL_DOWN_YN","value","ds_list","BVAL_DOWN_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_mst.form.TextArea00","value","ds_list","COL_SIZE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_mst.form.IPT_PST_TYPE_CD","value","ds_list","IPT_PST_TYPE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_mst.form.DATA_INQ_CLASS_NM","value","ds_list","DATA_INQ_CLASS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_mst.form.DATA_INQ_METHOD_NM","value","ds_list","DATA_INQ_METHOD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","Div00.form.PGM_NM","value","ds_search","PGM_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_YA_19.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_YA_19.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_YA_19.xfdl", function() {
        /***********************************************************/
        /* 프 로 그 램 : SSP_BO_YA_19
        /* 작 성 일 자 : 2022/03/14
        /* 작  성   자 : 이성민
        /* 설       명 : 시스템관리 > 엑셀메타관리
        /***********************************************************/


        /* 스크립트 인클루드 */
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;


        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object
        this.totalCount = 0;	//전체 카운트
        this.pageViewCnt = 20;

        //필수값 검증용 파라메터
        this.valiFormIds = [
        	  {"name" : "프로그램ID", "id" : "PGM_ID"}
        	, {"name" : "프로그램ID 명", "id" : "PGM_NM"}
        	, {"name" : "엑셀메타순번", "id" : "EXCEL_META_SEQ"}
        	, {"name" : "입력위치", "id" : "IPT_PST_TYPE_CD"}
        	, {"name" : "사용여부", "id" : "USE_YN"}
        ];

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onload = function(obj,e)
        {
        	//공통 필수
        	this.gfn_formOnLoad(this);

        	//공통코드
        	this.fn_commonCodeSearch();

        	// 단축키
        	this.gfn_initFormHotKey({
        		ENTER : "",
        		ESC : "",
        		CTRL_ENTER : "Div00_btnSearch_onclick",
        		SHIFT_ENTER : "",
        		SHIFT_S : "btnSave_onclick",
        		SHIFT_A : "",
        		SHIFT_D : "",
        	});
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //공통코드조회
        this.fn_commonCodeSearch = function(){
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_useYn=ds_output1 ds_ipt_pst_type=ds_output2";
        	var arg = "";

        	//ds_authClsfCd 권한 분류코드
        	this.ds_search.setColumn(0, "CODE_LIST", "USE_YN,IPT_PST_TYPE_CD");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //조회
        this.fn_search = function(sSvcId, page) {
            var sUrl = "";
        	var inDs = "";
            var outDs = "";
            var arg;
            var callback = "fn_callBack";

        	if( sSvcId == "selectExcelMetaMstList" ) {

        		// 엑셀 메타 마스터 조회
        		sUrl = "/co/select-excel-meta-mst-list.do";
        		inDs = "ds_search=ds_search";
        		outDs = "ds_list=ds_output";

        		if( page == 0 ) {
        			// 조회버튼 클릭시 페이징 초기화 시킨다.
        			this.div_paging.uPage=1;
        			this.div_paging.uPageNum=0;
        			this.ds_search.setColumn(0,"START_NUM", 0);
        			this.ds_search.setColumn(0,"ROW_COUNT", this.pageViewCnt);
        		}


        	} else if( sSvcId = "selectExcelMetaDtlList" ) {
        		// 엑셀 메타 상세 조회
        		sUrl = "/co/select-excel-meta-dtl-list.do";
        		inDs = "ds_search=ds_search_dtl";
        		outDs = "ds_list_dtl=ds_output";
        	}

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }

        this.fn_save = function() {
        	var sSvcId = "saveExcelMetaMst";
            var sUrl = "/co/save-excel-meta-mst.do";
        	var inDs = "ds_save=ds_list:U"
            var outDs = "";
            var arg;
            var callback = "fn_callBack";

        	//if( this.confirm("저장 하시겠습니까?") ){
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        	//}
        }

        //엑셀 다운로드
        this.fn_excel = function() {
        	var sSvcId = "selectSaveExcelMetaList";
            var sUrl = "/co/select-save-excel-meta-list.do";
        	var inDs = "ds_search=ds_search"
            var outDs = "ds_excel=ds_output";
            var arg;
            var callback = "fn_callBack";

        	if( this.confirm("엑셀다운로드를 하시겠습니까?") ){
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        	}
        }

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        //조회 콜백
        this.fn_callBack = function(svcID, errorCode, errorMsg) {
        	if(errorCode != 0){
        		this.alert(errorMsg);
        		this.fn_search("selectExcelMetaMstList", 0);
        		return false;
        	}

        	if( svcID == "commonCodeSearch" ) { //공통코드 콜백
        		//전체값 제외한 콤보
        		this.ds_useYnGrd.copyData(this.ds_useYn);

        		//사용여부 전체값 추가
        		this.ds_useYn.insertRow(0);
        		this.ds_useYn.setColumn(0, "COM_DTL_CD", "");
        		this.ds_useYn.setColumn(0, "COM_DTL_CD_NM", "전체");
        		this.Div00.form.USE_YN.set_index(0);

        	} else if( svcID == "selectExcelMetaMstList" ) { //엑셀 메타 마스터 조회 콜백
        		// 페이징 생성
        		this.div_paging.form.cfn_createPage(this.div_paging, this.totalCount,this.pageViewCnt, "fn_pageCallback");

        	} else if( svcID == "saveExcelMetaMst" ) {
        		alert(this.gfn_getMessage("ERRC000079")); //저장되었습니다
        		if( this.ds_list.rowposition == -1 ) {
        			this.fn_search("selectExcelMetaMstList", 0);
        		} else {
        			this.searchExcelMetaDtlList();
        		}

        	} else if( svcID == "saveExcelMetaDtl" ) {
        		alert(this.gfn_getMessage("ERRC000079")); //저장되었습니다
        		this.searchExcelMetaDtlList();

        	} else if( svcID == "selectSaveExcelMetaList" ) {
        		this.ofn_exportExcel({ form:this, grid:this.grid_excel, fileName:"엑셀메타관리" });
        	}

        	this.div_mst.form.EXCEL_META_SEQ.set_readonly(true);
        }


        //팝업 콜백
        this.fn_popupCallback = function(sPopupId, sRetValue) {
        	var resData = "";
        	var sIdList = "";
        	var sNmList = "";

        	if(sRetValue == undefined){
        		return;
        	}else{
        		resData = JSON.parse(sRetValue);
        	}

        	if( sPopupId == "SSP_BO_YA_25" ) {
        		var row = this.ds_list.rowposition;
        		// 프로그램 명 리턴
        		this.ds_list.setColumn( row, "PGM_ID", resData.PGM_ID );
        		this.ds_list.setColumn( row, "PGM_NM", resData.PGM_NM );
        	}
        };


        //페이징 콜백
        this.fn_pageCallback = function(sFlag){
        	var oPaging = this.div_paging;

        	if(sFlag){
        		//this.ds_search.setColumn(0,"START_NUM", (oPaging.uPageNum == 0 || oPaging.uPageNum == 1 ? 0 : ( oPaging.uPageNum -1 ) * 10));
        		this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT", this.pageViewCnt);
        		this.fn_search("selectExcelMetaMstList");
        	}

        	//var sTotText = "(<b v='true'>총 "+ oPaging.uTotCount+"건 </b><fc v='red'>"+ oPaging.uPage +"</fc> / "+ oPaging.uPageCnt +")";
        	var sTotText = "(총 "+ this.gfn_appendComma(oPaging.uTotCount, 0)+"건, "+ oPaging.uPage +" / "+ oPaging.uPageCnt +")";
            this.totalPageCount.set_text(sTotText);
        }



        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){
        	//grid cell size 변경
        	this.grd_metaMstlist.uCellSizeType = "true";

        	//static 필수값 표시 초기 설정
        	//this.div_mst.form.sta_pgm.uEssentiel = "true";
        	//this.div_mst.form.sta_meta.uEssentiel = "true";
        	//this.div_mst.form.sta_useyn.uEssentiel = "true";

        	//페이징 초기 설정
        	this.div_paging.uPage = 1;
        	this.div_paging.uPageNum = 0;
        	this.div_paging.uPageRowCnt = 10;
        	this.div_paging.uPageCnt = 0;
        	this.div_paging.uTotCount = 0;

        	//grid 개인화(전제조건 : grid Head가 무조건 1Row인 경우)
        	this.uGridList = "grd_metaMstlist";
        	this.grd_metaMstlist.uRightMouse = "false";
        	this.grd_metaMstlist.uPersonalFlag = "false";
        	this.grd_metaMstlist.uDefaultFormat = "PGM_ID,EXCEL_META_SEQ,IPT_PST_TYPE_CD,DOWN_LMT_CNT,BVAL_DOWN_YN,COL_INFO,COL_ATTR_INFO,USE_YN,CHK_COL";

        };

        this.cfn_personalPopupClose = function(sRet){
        	this.grd_metaMstlist.set_formats(sRet);
        	this.pdiv_personal.closePopup();
        }

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        //팝업 호출 함수
        this.fn_popup = function(popupId) {
        	var objParam = {};
        	var row = this.ds_list.rowposition;

        	if( popupId == "SSP_BO_YA_25" ){
        		// 조직명 조회 팝업
        		objParam.pgmId = this.ds_list.getColumn( row, "PGM_ID" );
        		objParam.pgmNm = this.ds_list.getColumn( row, "PGM_NM" );
        	} else if( popupId == "SSP_BO_YA_26" ) {
        		objParam.pgmId = this.ds_list.getColumn( row, "PGM_ID" );
        		objParam.pgmNm = this.ds_list.getColumn( row, "PGM_NM" );
        		objParam.excelMetaSeq = this.ds_list.getColumn( row, "EXCEL_META_SEQ" );
        	}

        	this.gfn_openPopup(popupId, "CO_POP::" + popupId + ".xfdl", objParam, "fn_popupCallback");
        };

        //팝업창 닫기 이벤트
        this.fn_popupClose = function(type) {
        	if( type == "save" ) {
        		alert(this.gfn_getMessage("ERRC000079")); //저장되었습니다
        		this.fn_search("selectExcelMetaDtlList");
        	}
        }

        // 상세조회
        this.searchExcelMetaDtlList = function() {
        	var row = this.ds_list.rowposition;

        	if( this.ds_list.getColumn(row, "PGM_ID") != undefined ) {
        		this.ds_search_dtl.setColumn(0, "PGM_ID", this.ds_list.getColumn(row, "PGM_ID"));
        		this.ds_search_dtl.setColumn(0, "EXCEL_META_SEQ", this.ds_list.getColumn(row, "EXCEL_META_SEQ"));

        		this.fn_search("selectExcelMetaDtlList");
        	}
        }

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //프로그램 조회 팝업
        this.btn_dept_onclick = function(obj,e)
        {
        	if( this.ds_list.rowcount == 0 ) {
        		alert(this.gfn_getMessage("ERRS000137")); //선택된 데이터가 없습니다.
        		return false;
        	}

        	this.fn_popup("SSP_BO_YA_25");	//프로그램 조회 팝업
        };


        //조회버튼 이벤트
        this.Div00_btnSearch_onclick = function(obj,e)
        {
        	this.fn_search("selectExcelMetaMstList", 0);	//프로그램 조회 팝업
        };

        //추가버튼
        this.btnAdd_onclick = function(obj,e)
        {
        	var idx = this.ds_list.addRow();

        	//콤보 기본값
        	this.ds_list.setColumn(idx, "BVAL_DOWN_YN", "Y");
        	this.ds_list.setColumn(idx, "USE_YN", "Y");

        	//상세 그리드 초기화
        	this.ds_list_dtl.clearData();

        	this.div_mst.form.EXCEL_META_SEQ.set_readonly(false);
        };

        this.btnSave_onclick = function(obj,e)
                {
                	var chkDsChange = this.gfn_dsIsUpdated(this.ds_list);
                	if( !chkDsChange ) {
                		alert(this.gfn_getMessage("COMS000008", ["수정", "내용"])); //수정된 내용이 없습니다
                		return false;
                	} else {
                		//그리드 필수값 체크
                		var validation = this.fn_validationGrid(this.grd_list, this.valiGridIds, this.ds_list);

                		if(validation){
                			var sReturn = this.confirm(this.gfn_getMessage("COMS000013", ["저장"])); //저장 하시겠습니까?
                			if(sReturn == true){
                				this.fn_save();
                			}
                		}
                	}
                	/*if(!this.gfn_dsIsUpdated(this.ds_list)) {
                		alert(this.gfn_getMessage("COMS000008", ["변경", "내용"])); //변경된 내용이 없습니다.
                		return;
                	}

                	//필수값 체크
                	var validation = this.fn_validationForm(this.div_mst, this.valiFormIds, this.ds_list);

                	if( validation ) {
                		this.fn_save();
                	}*/
                };

        // 마스터 그리드 포지션 이동
        this.grd_metaMstlist_oncellposchanged = function(obj,e)
        {
        	this.searchExcelMetaDtlList();
        };

         //마스터코드 삭제
                this.div_mst_btnDel_onclick = function(obj,e)
                {
        			var chkCnt = this.ds_list.getCaseCount("CHK_COL==1");

                	if( chkCnt == 0 ) {
                		alert(this.gfn_getMessage("COMS000008", ["선택", "행"])); //선택된 행이 없습니다.
                		return false;
                	}

                	var delArr = [];
                	for(var i=0; i < this.ds_list.rowcount; i++){
                		var checkbox = this.ds_list.getColumn(i, "CHK_COL");
                		if( checkbox == 1 ) {
                			delArr.push(i);
                			//this.ds_comCdList.deleteRow(i);
                		}
                	}
                	this.ds_list.deleteMultiRows(delArr);

                	var sReturn = this.confirm("삭제하시겠습니까?");
                	if(sReturn == true){
                		//this.fn_save();
                	}
                };

        //메타 상세등록 팝업
        this.btnDtlRegist_onclick = function(obj,e)
        {
        	this.fn_popup("SSP_BO_YA_26");
        };

        this.div_search_btnClear_onclick = function(obj,e)
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.Div00.form.USE_YN.set_index(0);
        };

        this.btnDtlDel_onclick = function(obj,e)
        {
        	var chkCnt = this.ds_list_dtl.getCaseCount("CHK_COL==1");

        	if( chkCnt == 0 ) {
        		alert(this.gfn_getMessage("COMS000008", ["선택", "행"])); //선택된 행이 없습니다.
        		return false;
        	}

        	var sReturn = this.gfn_getMessage("COMS000001",  ["선택한 데이터", "삭제"]); //선택한 데이터를 삭제하시겠습니까?
        	if( !sReturn ) return false;

        	var delArr = [];
        	for(var i=0; i < this.ds_list_dtl.rowcount; i++){
        		var checkbox = this.ds_list_dtl.getColumn(i, "CHK_COL");
        		if( checkbox == 1 ) {
        			delArr.push(i);
        			//this.ds_comCdList.deleteRow(i);
        		}
        	}
        	this.ds_list_dtl.deleteMultiRows(delArr);

        	//head 체크박스 해제
        	this.grd_list_dtl.setCellProperty("head",0,"text","0");

        	var sSvcId = "saveExcelMetaDtl";
            var sUrl = "/co/save-excel-meta-dtl.do";
        	var inDs = "ds_save=ds_list_dtl:U"
            var outDs = "";
            var arg;
            var callback = "fn_callBack";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        };

        this.div_mst_btnExcel_onclick = function(obj,e)
        {
        	if(this.ds_search.getRowType(0) == Dataset.ROWTYPE_UPDATE) {
        		alert(this.gfn_getMessage("COMS000007")); //조회 조건이 변경 되었습니다.\n다시 조회하시기 바랍니다.
        		return false;
        	}
        	this.fn_excel();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onload,this);
            this.Div00.form.btnSearch.addEventHandler("onclick",this.Div00_btnSearch_onclick,this);
            this.Div00.form.btnClear.addEventHandler("onclick",this.div_search_btnClear_onclick,this);
            this.grd_metaMstlist.addEventHandler("oncellposchanged",this.grd_metaMstlist_oncellposchanged,this);
            this.btnDtlDel.addEventHandler("onclick",this.btnDtlDel_onclick,this);
            this.btnDtlRegist.addEventHandler("onclick",this.btnDtlRegist_onclick,this);
            this.div_mst.form.btnExcel.addEventHandler("onclick",this.div_mst_btnExcel_onclick,this);
            this.div_mst.form.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.div_mst.form.btnDel.addEventHandler("onclick",this.div_mst_btnDel_onclick,this);
            this.div_mst.form.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.div_mst.form.sta_pgm.addEventHandler("onclick",this.Static20_00_onclick,this);
            this.div_mst.form.btn_dept.addEventHandler("onclick",this.btn_dept_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_YA_19.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
