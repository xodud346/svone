(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comCdMng");
            this.set_titletext("공통코드 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1110,640);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("UseYnDs", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USE_YN\"/><Col id=\"USE_YN_NAME\">전체</Col></Row><Row><Col id=\"USE_YN\">Y</Col><Col id=\"USE_YN_NAME\">사용</Col></Row><Row><Col id=\"USE_YN\">N</Col><Col id=\"USE_YN_NAME\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCdList", this);
            obj.getSetter("objDs").set("");
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"2\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"30\"/><Column id=\"COM_CLSF_CD_NM\" type=\"STRING\" size=\"100\"/><Column id=\"COM_USR_DEFN_NM_TTL_1\" type=\"STRING\" size=\"100\"/><Column id=\"COM_USR_DEFN_NM_TTL_2\" type=\"STRING\" size=\"100\"/><Column id=\"COM_USR_DEFN_NM_TTL_3\" type=\"STRING\" size=\"100\"/><Column id=\"COM_USR_DEFN_NM_TTL_4\" type=\"STRING\" size=\"100\"/><Column id=\"COM_USR_DEFN_NM_TTL_5\" type=\"STRING\" size=\"100\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"EXST_CLCD\" type=\"STRING\" size=\"30\"/><Column id=\"COL_CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("search_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"comClsfCd\" type=\"STRING\" size=\"256\"/><Column id=\"comClsfCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCdDtlList", this);
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"2\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"30\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"30\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"300\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"100\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"100\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"100\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"100\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"100\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"5\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COL_CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("UseYnDtlDs", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USE_YN\">Y</Col><Col id=\"USE_YN_NAME\">사용</Col></Row><Row><Col id=\"USE_YN\">N</Col><Col id=\"USE_YN_NAME\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("search_dtl_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCdDtlListCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"2\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"30\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"30\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"300\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"100\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"100\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"100\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"100\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"100\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"5\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_page", this);
            obj._setContents("<ColumnInfo><Column id=\"COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COUNT\">10</Col></Row><Row><Col id=\"COUNT\">20</Col></Row><Row><Col id=\"COUNT\">30</Col></Row><Row><Col id=\"COUNT\">40</Col></Row><Row><Col id=\"COUNT\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCdListCopy", this);
            obj.getSetter("objDs").set("");
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"2\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"30\"/><Column id=\"COM_CLSF_CD_NM\" type=\"STRING\" size=\"100\"/><Column id=\"COM_USR_DEFN_NM_TTL_1\" type=\"STRING\" size=\"100\"/><Column id=\"COM_USR_DEFN_NM_TTL_2\" type=\"STRING\" size=\"100\"/><Column id=\"COM_USR_DEFN_NM_TTL_3\" type=\"STRING\" size=\"100\"/><Column id=\"COM_USR_DEFN_NM_TTL_4\" type=\"STRING\" size=\"100\"/><Column id=\"COM_USR_DEFN_NM_TTL_5\" type=\"STRING\" size=\"100\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"EXST_CLCD\" type=\"STRING\" size=\"30\"/><Column id=\"COL_CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSearch","18","24","102","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Div("searchDiv","18","51",null,"40","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","63","32",null,null,null,null,null,null,this.searchDiv.form);
            obj.set_taborder("3");
            obj.set_text("분류코드");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.searchDiv.addChild(obj.name, obj);

            obj = new Static("Static00_01","62","0",null,"32","0",null,null,null,null,null,this.searchDiv.form);
            obj.set_taborder("4");
            obj.set_text("Static00");
            obj.set_cssclass("sta_cm_box02L_tdt");
            this.searchDiv.addChild(obj.name, obj);

            obj = new Edit("comClsfCd","Static00:4","4","31.98%","24",null,null,null,null,null,null,this.searchDiv.form);
            obj.set_taborder("0");
            this.searchDiv.addChild(obj.name, obj);

            obj = new Static("Static00_00","comClsfCd:3","0","63","32",null,null,null,null,null,null,this.searchDiv.form);
            obj.set_taborder("5");
            obj.set_text("분류명");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.searchDiv.addChild(obj.name, obj);

            obj = new Edit("comClsfCdNm","Static00_00:3","4","292","24",null,null,null,null,null,null,this.searchDiv.form);
            obj.set_taborder("1");
            this.searchDiv.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","comClsfCdNm:3","0","79","32",null,null,null,null,null,null,this.searchDiv.form);
            obj.set_taborder("6");
            obj.set_text("사용 여부");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.searchDiv.addChild(obj.name, obj);

            obj = new Combo("useYn","Static00_00_00:4","4",null,"24","7",null,null,null,null,null,this.searchDiv.form);
            obj.set_taborder("2");
            obj.set_innerdataset("UseYnDs");
            obj.set_codecolumn("USE_YN");
            obj.set_datacolumn("USE_YN_NAME");
            obj.set_text("Combo00");
            this.searchDiv.addChild(obj.name, obj);

            obj = new Button("btnAdd","18","95","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel","btnAdd:5","95","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_delete01");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","btnDel:5","95","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel","btnSave:5","95","107","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_comCdClsf","18","122",null,"266","570",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_comCdList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"분류코드\"/><Cell col=\"2\" text=\"분류코드명\"/><Cell col=\"3\" text=\"기본분류코드\"/></Band><Band id=\"body\"><Cell edittype=\"expr:EXST_CLCD == null ? &apos;checkbox&apos; : &apos;none&apos; \" displaytype=\"checkboxcontrol\" text=\"bind:COL_CHK\"/><Cell col=\"1\" text=\"bind:COM_CLSF_CD\"/><Cell col=\"2\" text=\"bind:COM_CLSF_CD_NM\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:EXST_CLCD\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_detail","grd_comCdClsf:10","95","550","310",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.getSetter("leftbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","0","93","140","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("9");
            obj.set_text("사용자 정의명 제목 1");
            obj.set_padding("0px 18px 0px 0px");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("right");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static10","0","27","140","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("10");
            obj.set_text("분류코드");
            obj.set_padding("0px 18px 0px 0px");
            obj.set_cssclass("sta_cm_box01L_tdt_necessary");
            obj.set_textAlign("right");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static00","0","60","140","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("11");
            obj.set_text("분류코드 명");
            obj.set_padding("0px 18px 0px 0px");
            obj.set_cssclass("sta_cm_box01L_necessary");
            obj.set_textAlign("right");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static02_00","Static10:-1","27",null,"34","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("12");
            obj.set_text("");
            obj.set_padding("");
            obj.set_cssclass("sta_cm_box02L_tdt");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("COM_CLSF_CD","146","32","144","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","Static00:-1","60",null,"34","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("13");
            obj.set_text("");
            obj.set_padding("");
            obj.set_cssclass("sta_cm_box02L");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static02_00_01","Static08:-1","93",null,"34","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("14");
            obj.set_text("");
            obj.set_padding("");
            obj.set_cssclass("sta_cm_box02L");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("COM_CLSF_CD_NM","146","65",null,"24","4",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("2");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("COM_USR_DEFN_NM_TTL_1","146","98",null,"24","4",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("3");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static10_00","294","27","98","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("15");
            obj.set_text("기본분류코드");
            obj.set_padding("0px 5px 0px 0px");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("right");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static08_00","0","126","140","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("16");
            obj.set_text("사용자 정의명 제목 2");
            obj.set_padding("0px 18px 0px 0px");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("right");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00","Static08_00:-1","126",null,"34","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("17");
            obj.set_text("");
            obj.set_padding("");
            obj.set_cssclass("sta_cm_box02L");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("COM_USR_DEFN_NM_TTL_2","146","131",null,"24","4",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("4");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static08_00_00","0","159","140","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("18");
            obj.set_text("사용자 정의명 제목 3");
            obj.set_padding("0px 18px 0px 0px");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("right");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00","Static08_00_00:-1","159",null,"34","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("19");
            obj.set_text("");
            obj.set_padding("");
            obj.set_cssclass("sta_cm_box02L");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("COM_USR_DEFN_NM_TTL_3","146","164",null,"24","4",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("5");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static08_00_00_00","0","192","140","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("20");
            obj.set_text("사용자 정의명 제목 4");
            obj.set_padding("0px 18px 0px 0px");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("right");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_00","Static08_00_00_00:-1","192",null,"34","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("21");
            obj.set_text("");
            obj.set_padding("");
            obj.set_cssclass("sta_cm_box02L");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("COM_USR_DEFN_NM_TTL_4","146","197",null,"24","4",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("6");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static08_00_00_01","0","225","140","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("22");
            obj.set_text("사용자 정의명 제목 5");
            obj.set_padding("0px 18px 0px 0px");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("right");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01","Static08_00_00_01:-1","225",null,"34","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("23");
            obj.set_text("");
            obj.set_padding("");
            obj.set_cssclass("sta_cm_box02L");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("COM_USR_DEFN_NM_TTL_5","146","230",null,"24","4",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("7");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static08_00_00_01_00","0","258","140","34",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("24");
            obj.set_text("사용 여부");
            obj.set_padding("0px 18px 0px 0px");
            obj.set_cssclass("sta_cm_box01L_necessary");
            obj.set_textAlign("right");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00","Static08_00_00_01_00:-1","258",null,"34","0",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("25");
            obj.set_text("");
            obj.set_padding("");
            obj.set_cssclass("sta_cm_box02L");
            this.div_detail.addChild(obj.name, obj);

            obj = new Combo("USE_YN","146","263","154","24",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_detail_form_USE_YN_innerdataset = new nexacro.NormalDataset("div_detail_form_USE_YN_innerdataset", obj);
            div_detail_form_USE_YN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(div_detail_form_USE_YN_innerdataset);
            obj.set_text("");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("EXST_CLCD","396","32",null,"24","4",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("1");
            this.div_detail.addChild(obj.name, obj);

            obj = new Button("btnDtlAdd","18","430","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("행추가");
            this.addChild(obj.name, obj);

            obj = new Button("btnDtlDel","btnDtlAdd:5","430","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_comCdClsfDtl","18","460",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_comCdDtlList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"31\"/><Column size=\"112\"/><Column size=\"155\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상세코드\" color=\"red\"/><Cell col=\"2\" text=\"상세코드 명\" color=\"red\"/><Cell col=\"3\" text=\"정렬순서\"/><Cell col=\"4\" text=\"사용여부\" color=\"red\"/><Cell col=\"5\" text=\"사용자정의명1\"/><Cell col=\"6\" text=\"사용자정의명2\"/><Cell col=\"7\" text=\"사용자정의명3\"/><Cell col=\"8\" text=\"사용자정의명4\" tooltiptext=\"bind:COM_USR_DEFN_NM_4\"/><Cell col=\"9\" text=\"사용자정의명5\"/></Band><Band id=\"body\"><Cell text=\"bind:COL_CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:COM_DTL_CD\" edittype=\"expr:dataset.getRowType(currow) == 2 ? &quot;text&quot; : &quot;none&quot;\"/><Cell col=\"2\" text=\"bind:COM_DTL_CD_NM\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:SRT_SO\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:USE_YN\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"USE_YN\" combodataset=\"UseYnDtlDs\" combodatacol=\"USE_YN_NAME\"/><Cell col=\"5\" text=\"bind:COM_USR_DEFN_NM_1\" edittype=\"text\" cursor=\"pointer\"/><Cell col=\"6\" text=\"bind:COM_USR_DEFN_NM_2\" edittype=\"text\"/><Cell col=\"7\" text=\"bind:COM_USR_DEFN_NM_3\" edittype=\"text\"/><Cell col=\"8\" text=\"bind:COM_USR_DEFN_NM_4\" edittype=\"text\"/><Cell col=\"9\" text=\"bind:COM_USR_DEFN_NM_5\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","18","grd_comCdClsf:0",null,"38","570",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1110,640,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","div_detail.form.COM_CLSF_CD","value","ds_comCdList","COM_CLSF_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_detail.form.COM_CLSF_CD_NM","value","ds_comCdList","COM_CLSF_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_detail.form.COM_USR_DEFN_NM_TTL_1","value","ds_comCdList","COM_USR_DEFN_NM_TTL_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_detail.form.COM_USR_DEFN_NM_TTL_2","value","ds_comCdList","COM_USR_DEFN_NM_TTL_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_detail.form.COM_USR_DEFN_NM_TTL_3","value","ds_comCdList","COM_USR_DEFN_NM_TTL_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_detail.form.COM_USR_DEFN_NM_TTL_4","value","ds_comCdList","COM_USR_DEFN_NM_TTL_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_detail.form.COM_USR_DEFN_NM_TTL_5","value","ds_comCdList","COM_USR_DEFN_NM_TTL_5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_detail.form.USE_YN","value","ds_comCdList","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_detail.form.EXST_CLCD","value","ds_comCdList","EXST_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","searchDiv.form.comClsfCd","value","search_ds","comClsfCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","searchDiv.form.comClsfCdNm","value","search_ds","comClsfCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","searchDiv.form.useYn","value","search_ds","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("comCdMng.xfdl","CO::coUtils.xjs");
        this.registerScript("comCdMng.xfdl", function() {
        /*******************************************************
          PROJECT NAME : 공통코드 관리
          CREATION DATES : 2022.01.25
        *******************************************************/

        /* 스크립트 인클루드 */
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.preSelectRowPosition = 0;
        this.addRow = 0;

        this.fv_oApp = nexacro.getApplication();	//application object

        this.valiFormIds = [
        	  {"name" : "분류코드", "id" : "COM_CLSF_CD"}
        	, {"name" : "분류코드 명", "id" : "COM_CLSF_CD_NM"}
        	, {"name" : "사용여부", "id" : "USE_YN"}
        ];

        this.valiGridIds = [
        	  {"name" : "상세코드", "id" : "COM_DTL_CD"}
        	, {"name" : "상세코드 명", "id" : "COM_DTL_CD_NM"}
        	, {"name" : "사용여부", "id" : "USE_YN"}
        ];


        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//콤보박스 기본값 초기화
        	this.searchDiv.form.useYn.set_index(0);

        	this.fn_doSearch(0);
        };


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_doSearch = function(page)	{
        	 var sSvcId = "comCdClsfSearch";
             var sUrl = "/co/com/com_cd_clsf_search_list.do";
        	 var inDs = "ds_search=search_ds"
             var outDs = "ds_comCdList=ds_output1";
             var arg;
             var callback = "fn_received";

        	 this.div_detail.form.COM_CLSF_CD.set_enable(true);

        	 // 조회버튼 클릭시 페이징 초기화 시킨다.
        	 if( page == 0 ) {
        		this.div_paging.uPage=1;
        		this.div_paging.uPageNum=0;
        		this.search_ds.setColumn(0,"START_NUM", 0);
        		this.search_ds.setColumn(0,"ROW_COUNT",this.fv_oApp.gv_pageViewCnt);
        	 }

        	 this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        };

        // 코드 상세조회
        this.fn_dtlSearch = function() {

        	var sSvcId = "comCdClsfDtlSearch";
            var sUrl = "/co/com/com_cd_clsf_dtl_search_list.do";
        	var inDs = "ds_search=search_dtl_ds"
            var outDs = "ds_comCdDtlList=ds_output1";
            var arg;
            var callback = "fn_received";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }

        // 저장
        this.fn_save = function() {
        	var sSvcId = "comCdClsfSave";
            var sUrl = "/co/com/com_cd_clsf_save.do";
        	var inDs = "ds_save=ds_comCdList:U ds_save2=ds_comCdDtlList:U"
            var outDs = "";
            var arg;
            var callback = "fn_received";

        	if( this.confirm("저장 하시겠습니까?") ){
        		// 이전 선택한 row 위치
        		this.preSelectRowPosition = this.ds_comCdList.rowposition;
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        	}
        }

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_received = function(svcID, errorCode, errorMsg)	{
        	if(svcID == "comCdClsfSearch"){

        		this.preSelectRowPosition = 0;

        		// 조회 카운트가 없으면 데이터셋이 날라감으로 강제 설정
        		if( this.ds_comCdList.rowcount == 0 ) {
        			this.ds_comCdList.copyData(this.ds_comCdListCopy);
        		}

        		// 선택했던 row
        		this.ds_comCdList.set_rowposition(this.preSelectRowPosition);
        		this.fn_setDataSet(this.search_dtl_ds, this.ds_comCdList);

        		//paging 처리
        		this.div_paging.form.cfn_createPage(this.div_paging, this.totalCount, this.fv_oApp.gv_pageViewCnt, "fn_pageCallback");

        		//상세조회
        		this.fn_dtlSearch();

        	} else if(svcID == "comCdClsfDtlSearch"){
        		//this.ds_comCdDtlList.addColumn("COL_CHK","String");	//체크박스 데이터셋 생성

        		/*
        		상세 데이터가 존재하면 분류코드 수정을 막는다.
        		EXST_CLCD 값이 존재하는 분류코드 수정을 막는다.
        		*/
        		if( this.ds_comCdDtlList.rowcount > 0 ) {
        			this.div_detail.form.COM_CLSF_CD.set_enable(false);
        		} else {
        			this.ds_comCdDtlList.copyData(this.ds_comCdDtlListCopy);

        			if( !this.gfn_isNull(this.ds_comCdList.getColumn(this.ds_comCdList.rowposition, "EXST_CLCD")) ) {
        				this.div_detail.form.COM_CLSF_CD.set_enable(false);
        			} else {
        				this.div_detail.form.COM_CLSF_CD.set_enable(true);
        			}
        		}
        	} else if(svcID == "comCdClsfSave") {
        		if( errorCode == -1 || errorCode == -100) { //사용자 지정 에러코드 -100
        			alert(errorMsg);
        			this.fn_datasetReset(this.ds_comCdList);
        			this.fn_datasetReset(this.ds_comCdDtlList);
        		} else {
        			alert("저장되었습니다.");
        			this.fn_doSearch(0);
        		}
            }
        }

        //페이징 콜백
        this.fn_pageCallback = function(sFlag){
        	var oPaging = this.div_paging;

        	if(sFlag){
        		this.search_ds.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.search_ds.setColumn(0,"ROW_COUNT", this.fv_oApp.gv_pageViewCnt);
        		this.fn_doSearch();
        	}

        	//var sTotText = "(<b v='true'>총 "+ oPaging.uTotCount+"건 </b><fc v='red'>"+ oPaging.uPage +"</fc> / "+ oPaging.uPageCnt +")";
        	//this.sta_totCount.set_text(sTotText);
        }

        //정렬 콜백
        this.fn_sortCallback = function(sGridId){
        	var oGrid=null;
        	if(sGridId == "grd_comCdClsf"){
        		oSortInfo = this.grd_comCdClsf.uaSortInfo;
        		this.search_ds.setColumn(0,"SORT_COLUMN", oSortInfo.bindCol);
        		this.search_ds.setColumn(0,"SORT_TYPE", oSortInfo.status);

        		this.fn_doSearch();
        	}
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){

        	//grid 초기 설정
        	this.grd_comCdClsf.uSortFlag = "false";
        	this.grd_comCdClsf.uServerSortFlag = "true";
        	this.grd_comCdClsf.uSortCallback = "fn_sortCallback";

        	this.grd_comCdClsf.uCellSizeType = "true";


        	//페이징 초기 설정
        	this.div_paging.uPage = 1;
        	this.div_paging.uPageNum = 0;
        	this.div_paging.uPageRowCnt = 10;
        	this.div_paging.uPageCnt = 0;
        	this.div_paging.uTotCount = 0;
        }


        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        // 데이터셋 리셋
        this.fn_datasetReset = function(dataset) {
        	dataset.reset();
        }


        // 그리드 클릭시 체크박스 체크되도록
        this.autoGridCheck = function(obj,e) {

        	var dataSet = obj.getBindDataset();
        	var chkValue = obj.getCellText(e.row, 0);

        	if( e.col != 0 ) {
        		chkValue = (chkValue == "1" ? "0" : "1");
        	}

        	dataSet.setColumn(e.row, "COL_CHK", chkValue);
        }

        //빈 데이터셋 에 파라메터 세팅.
        this.fn_setDataSet = function(pData, sData) {
        	pData.setColumn(0, "COM_CLSF_CD", sData.getColumn(sData.rowposition, "COM_CLSF_CD"));
        }


        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        // 조회
        this.btnSearch_onclick = function(obj,e)
        {
        	this.fn_doSearch(0);
        };

        // 상세코드 그리드 클릭 이벤트
        this.grd_comCdClsfDtl_oncellclick = function(obj,e)
        {
        	//강제 드롭다운 이벤트
        	if(e.cell == 4){
        		//this.div_detail.form.USE_YN.dropdown();
        		obj.dropdownCombo();
        	}

        	//임시 테스트 링크 주소일 경우 처리??
        	/*
        	if( this.ds_comCdDtlList.getRowType(this.ds_comCdDtlList.rowposition) == 1 || this.ds_comCdDtlList.getRowType(this.ds_comCdDtlList.rowposition) == 4 ) {
        		if( this.ds_comCdDtlList.getColumn(this.ds_comCdDtlList.rowposition, "COL_CHK") == 1 ) {
        			this.grd_comCdClsfDtl.setCellProperty( "body", 5, "edittype", "text" );
        		} else {
        			this.grd_comCdClsfDtl.setCellProperty( "body", 5, "edittype", "none" );
        			if(e.cell == 5){
        				system.execBrowser(this.ds_comCdDtlList.getColumn(this.ds_comCdDtlList.rowposition, "COM_USR_DEFN_NM_1"));
        			}
        		}
        	}
        	*/



        };

        //메인코드 추가버튼
        this.btnAdd_onclick = function(obj,e)
        {
        	//추가시 체크.
        	var chkDsChange = this.fn_dataCheck(this.ds_comCdList);
        	if( chkDsChange != false ) {
        		return false;
        	}

        	//행 추가
        	this.addRow = this.ds_comCdList.addRow();

        	//this.ds_comCdList.setColumn(row, "LANG_CD", "KO");

        	//이전 row 위치 저장
        	this.preSelectRowPosition = this.addRow;

        	// 상세코드 초기화
        	this.ds_comCdDtlList.clearData();

        	//입력 활성화
        	this.div_detail.form.COM_CLSF_CD.set_enable(true);
        	this.div_detail.form.COM_CLSF_CD.setFocus();

        };

        //메인코드 삭제 버튼
        this.btnDel_onclick = function(obj,e)
        {
        	var chkCnt = this.ds_comCdList.getCaseCount("COL_CHK==1");

        	if( chkCnt == 0 ) {
        		alert("선택된 행이 없습니다.");
        		return false;
        	}

        	if( this.ds_comCdDtlList.rowcount > 0 ) {
        		alert("상세코드가 존재하면 삭제할 수 없습니다.");
        		//this.ds_comCdDtlList.clearData();
        		return false;
        	}

        	//기본분류코드 존재 시 삭제 불가능
        	var delArr = [];
        	for(var i=0; i<this.ds_comCdList.rowcount; i++){
        		var checkbox = this.ds_comCdList.getColumn(i, "COL_CHK");
        		if( checkbox == 1 ) {
        			if( this.ds_comCdList.getColumn(i, "EXST_CLCD") != null ) {
        				alert("기본분류코드가 존재하면 삭제할 수 없습니다.");
        				//this.ds_comCdList.reset();
        				return false;
        			}
        			delArr.push(i);
        			//this.ds_comCdList.deleteRow(i);
        		}
        	}

        	this.ds_comCdList.deleteMultiRows(delArr);

        	//head 체크박스 해제
        	this.grd_comCdClsf.setCellProperty("head",0,"text","0");
        };

        //메인코드 저장버튼
        this.btnSave_onclick = function(obj,e)
        {
        	var chkDsChange = this.fn_dataChangeCheck(this.ds_comCdList); //this.fn_dataCheck(this.ds_comCdList);
        	var chkDsChangeDtl = this.fn_dataChangeCheck(this.ds_comCdDtlList); //this.fn_dataCheck(this.ds_comCdDtlList);


        	//this.fn_validationTest(this.div_detail, this.valiFormIds, this.ds_comCdList);


        	if( !chkDsChange && !chkDsChangeDtl ) {
        		alert("수정된 내용이 없습니다.");
        		return false;
        	} else {

        		//메인코드 필수값 체크
        		var validation = this.fn_validationForm(this.div_detail, this.valiFormIds, this.ds_comCdList);

        		//그리드 필수값 체크
        		if( validation ) validation = this.fn_validationGrid(this.grd_comCdClsfDtl, this.valiGridIds, this.ds_comCdDtlList);

        		if( validation ) this.fn_save();
        	}



        };

        //메인코드 엑셀 다운로드 버튼
        this.btnExcel_onclick = function(obj,e)
        {

        };

        //상세코드 행추가 버튼
        this.btnDtlAdd_onclick = function(obj,e)
        {
        	var code = this.ds_comCdList.getColumn(this.ds_comCdList.rowposition, "COM_CLSF_CD");

        	if( this.gfn_isNull(code) || code == undefined ) {
        		alert("분류코드를 입력해 주십시오");
        		this.div_detail.form.COM_CLSF_CD.setFocus();
        		return false;
        		//this.gfn_alert("MSG0000000001", "C", "확인하세요");
        	}

        	var idx = this.ds_comCdDtlList.addRow();
        	this.ds_comCdDtlList.setColumn(this.ds_comCdDtlList.rowposition, "LANG_CD", "KO");
        	this.ds_comCdDtlList.setColumn(this.ds_comCdDtlList.rowposition, "COM_CLSF_CD", this.ds_comCdList.getColumn(this.ds_comCdList.rowposition, "COM_CLSF_CD"));
        	this.ds_comCdDtlList.setColumn(this.ds_comCdDtlList.rowposition, "USE_YN", "Y");

        	// 임시
        	//this.grd_comCdClsfDtl.setCellProperty("body", 5, "edittype", "text");
        };

        //상세코드 행 삭제 버튼
        this.btnDtlDel_onclick = function(obj,e)
        {
        	var chkCnt = this.ds_comCdDtlList.getCaseCount("COL_CHK==1");

        	if( chkCnt == 0 ) {
        		alert("선택된 행이 없습니다.");
        		return false;
        	}

        	var delArr = [];
        	for(var i=0; i < this.ds_comCdDtlList.rowcount; i++){
        		var checkbox = this.ds_comCdDtlList.getColumn(i, "COL_CHK");
        		if( checkbox == 1 ) {
        			delArr.push(i);
        			//this.ds_comCdList.deleteRow(i);
        		}
        	}
        	this.ds_comCdDtlList.deleteMultiRows(delArr);

        	//head 체크박스 해제
        	this.grd_comCdClsfDtl.setCellProperty("head",0,"text","0");
        };

        // 데이터셋 변경 시
        this.ds_comCdList_oncolumnchanged = function(obj,e)
        {
        	/* 이벤트 값.
        	col: 8
        	colidx: -1
        	columnid: "COM_CLSF_CD"
        	eventid: "onvaluechanged"
        	fromobject: nexacro.NormalDataset {name: 'ds_comCdList', id: 'ds_comCdList', parent: n…o.Form, colinfos: n…o.DSColumnInfoList, _constVars: n…o.VariableList, …}
        	fromreferenceobject: nexacro.NormalDataset {name: 'ds_comCdList', id: 'ds_comCdList', parent: n…o.Form, colinfos: n…o.DSColumnInfoList, _constVars: n…o.VariableList, …}
        	id: "cancolumnchange"
        	newvalue: "THME_DOMN_CD345"
        	oldvalue: "THME_DOMN_CD"
        	row: 0
        	*/
        //
        // 	if( e.columnid == "COM_CLSF_CD" ) {
        // 		if( this.ds_comCdDtlList.rowcount > 0 ) {
        // 			for( var i = 0; i < this.ds_comCdDtlList.rowcount; i++ ) {
        // 				this.ds_comCdDtlList.setColumn(i, "COM_CLSF_CD", e.newvalue);
        // 			}
        // 		}
        // 	}
        //
        };

        // 그리드 변경시 이벤트
        this.grd_comCdClsf_onchanged = function(obj,e)
        {
        	//if( e.col == 0 ) return false;

        	var chkDsChange = this.fn_dataCheck(this.ds_comCdList);
        	var chkValue = obj.getCellText(e.row, 0);
        	var varProperty = obj.getCellProperty( "head", e.col, "displaytype" );

        	if( chkDsChange != false ) {
        		if( varProperty != "checkboxcontrol") {
        			var rtn = this.confirm("수정된 내용이 있습니다. 저장 하시겠습니까?", "확인", "warning");
        			if( rtn ) {
        				//this.btnSave_onclick();
        				this.btnSave.click();
        				return false;
        			} else {
        				if( typeof chkDsChange == "number" ) {
        					obj.setCellPos(0, chkDsChange);
        				} else {
        					obj.setCellPos(0, this.preSelectRowPosition);
        				}
        				//this.fn_datasetReset(this.ds_comCdList);
        				return false;
        			}
        		}
        	}

        	//이전 로우
        	this.preSelectRowPosition = e.row;

        	// 상세조회
        	if( this.ds_comCdList.rowcount > 0 ) {
        		//데이터셋 param set
        		this.fn_setDataSet(this.search_dtl_ds, this.ds_comCdList);
        		this.fn_dtlSearch();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.searchDiv.form.useYn.addEventHandler("onitemchanged",this.searchDiv_useYn_onitemchanged,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnExcel.addEventHandler("onclick",this.btnExcel_onclick,this);
            this.grd_comCdClsf.addEventHandler("onkeyup",this.grd_comCdClsf_onchanged,this);
            this.grd_comCdClsf.addEventHandler("oncellclick",this.grd_comCdClsf_onchanged,this);
            this.div_detail.form.Static10.addEventHandler("onclick",this.div_detail_Static10_onclick,this);
            this.div_detail.form.Static02_00.addEventHandler("onclick",this.div_detail_Static02_00_onclick,this);
            this.div_detail.form.Static02_00_00.addEventHandler("onclick",this.div_detail_Static02_00_onclick,this);
            this.div_detail.form.Static02_00_01.addEventHandler("onclick",this.div_detail_Static02_00_onclick,this);
            this.div_detail.form.COM_CLSF_CD_NM.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);
            this.div_detail.form.COM_USR_DEFN_NM_TTL_1.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);
            this.div_detail.form.Static10_00.addEventHandler("onclick",this.div_detail_Static10_onclick,this);
            this.div_detail.form.Static02_00_01_00.addEventHandler("onclick",this.div_detail_Static02_00_onclick,this);
            this.div_detail.form.COM_USR_DEFN_NM_TTL_2.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);
            this.div_detail.form.Static02_00_01_00_00.addEventHandler("onclick",this.div_detail_Static02_00_onclick,this);
            this.div_detail.form.COM_USR_DEFN_NM_TTL_3.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);
            this.div_detail.form.Static02_00_01_00_00_00.addEventHandler("onclick",this.div_detail_Static02_00_onclick,this);
            this.div_detail.form.COM_USR_DEFN_NM_TTL_4.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);
            this.div_detail.form.Static02_00_01_00_00_01.addEventHandler("onclick",this.div_detail_Static02_00_onclick,this);
            this.div_detail.form.COM_USR_DEFN_NM_TTL_5.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);
            this.div_detail.form.Static02_00_01_00_00_01_00.addEventHandler("onclick",this.div_detail_Static02_00_onclick,this);
            this.btnDtlAdd.addEventHandler("onclick",this.btnDtlAdd_onclick,this);
            this.btnDtlDel.addEventHandler("onclick",this.btnDtlDel_onclick,this);
            this.grd_comCdClsfDtl.addEventHandler("oncellclick",this.grd_comCdClsfDtl_oncellclick,this);
            this.ds_comCdList.addEventHandler("oncolumnchanged",this.ds_comCdList_oncolumnchanged,this);
            this.ds_comCdListCopy.addEventHandler("oncolumnchanged",this.ds_comCdList_oncolumnchanged,this);
        };
        this.loadIncludeScript("comCdMng.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
