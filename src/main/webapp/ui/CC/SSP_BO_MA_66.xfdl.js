(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_MA_66");
            this.set_titletext("참조코드 설정");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,610);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsParam", this);
            obj._setContents("<ColumnInfo><Column id=\"coCd\" type=\"STRING\" size=\"256\"/><Column id=\"bzplcId\" type=\"STRING\" size=\"256\"/><Column id=\"oprUnitId\" type=\"STRING\" size=\"256\"/><Column id=\"refCdGrpSeq\" type=\"STRING\" size=\"256\"/><Column id=\"refCdGrpNm\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"DeptOprUnitSprCd\" type=\"STRING\" size=\"256\"/><Column id=\"DeptId\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"rowCount\" type=\"STRING\" size=\"256\"/><Column id=\"startNum\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"useYn\"/><Col id=\"DeptOprUnitSprCd\"/><Col id=\"DeptId\"/><Col id=\"startNum\">0</Col><Col id=\"rowCount\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsParam4Opru", this);
            obj._setContents("<ColumnInfo><Column id=\"coCd\" type=\"STRING\" size=\"256\"/><Column id=\"bzplcId\" type=\"STRING\" size=\"256\"/><Column id=\"oprUnitId\" type=\"STRING\" size=\"256\"/><Column id=\"refCdGrpSeq\" type=\"STRING\" size=\"256\"/><Column id=\"refCdGrpNm\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"deptOprUnitSprCd\" type=\"STRING\" size=\"256\"/><Column id=\"deptId\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"rowCount\" type=\"STRING\" size=\"256\"/><Column id=\"startNum\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"useYn\"/><Col id=\"deptOprUnitSprCd\">OPU</Col><Col id=\"deptId\"/><Col id=\"startNum\">0</Col><Col id=\"rowCount\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsParam4Dept", this);
            obj._setContents("<ColumnInfo><Column id=\"coCd\" type=\"STRING\" size=\"256\"/><Column id=\"bzplcId\" type=\"STRING\" size=\"256\"/><Column id=\"oprUnitId\" type=\"STRING\" size=\"256\"/><Column id=\"refCdGrpSeq\" type=\"STRING\" size=\"256\"/><Column id=\"refCdGrpNm\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"deptOprUnitSprCd\" type=\"STRING\" size=\"256\"/><Column id=\"deptId\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"rowCount\" type=\"STRING\" size=\"256\"/><Column id=\"startNum\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"useYn\"/><Col id=\"deptOprUnitSprCd\">DEP</Col><Col id=\"deptId\"/><Col id=\"startNum\">0</Col><Col id=\"rowCount\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComUSE_YN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\"/><Col id=\"NM\">전체</Col></Row><Row><Col id=\"CD\">Y</Col><Col id=\"NM\">사용</Col></Row><Row><Col id=\"CD\">N</Col><Col id=\"NM\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRefCd4Opru", this);
            obj._setContents("<ColumnInfo><Column id=\"TOT_CUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ROWN\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD_GRP_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_OPR_UNIT_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_OPR_UNIT_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRefCd4Dept", this);
            obj._setContents("<ColumnInfo><Column id=\"TOT_CUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ROWN\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD_GRP_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_OPR_UNIT_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_OPR_UNIT_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBzplcOprunitDept", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUSE_YN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">Y</Col><Col id=\"NM\">사용</Col></Row><Row><Col id=\"CD\">N</Col><Col id=\"NM\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRefCd4Copy", this);
            obj._setContents("<ColumnInfo><Column id=\"TOT_CUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ROWN\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD_GRP_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_OPR_UNIT_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_OPR_UNIT_SPR_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRate", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">20</Col><Col id=\"NM\">20개씩</Col></Row><Row><Col id=\"CD\">50</Col><Col id=\"NM\">50개씩</Col></Row><Row><Col id=\"CD\">100</Col><Col id=\"NM\">100개씩</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tabRefCd","20","70",null,"530","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabOprunitRefCd",this.tabRefCd);
            obj.set_text("운영단위 참조코드");
            this.tabRefCd.addChild(obj.name, obj);

            obj = new Static("Static21_00","0","12","130","32",null,null,null,null,null,null,this.tabRefCd.tabOprunitRefCd.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("사용여부");
            this.tabRefCd.tabOprunitRefCd.addChild(obj.name, obj);

            obj = new Radio("rdoOPR_UNIT_MALL_SPR_CD","149","21","146","19",null,null,null,null,null,null,this.tabRefCd.tabOprunitRefCd.form);
            obj.set_taborder("1");
            obj.set_columncount("3");
            obj.set_direction("horizontal");
            obj.set_rowcount("1");
            obj.set_innerdataset("dsComMALL_SPR_CD");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            obj.set_text("");
            obj.set_value("bind:OPR_UNIT_MALL_SPR_CD");
            obj.set_index("-1");
            this.tabRefCd.tabOprunitRefCd.addChild(obj.name, obj);

            obj = new Static("Static21_00_01","Static21_00:0","12",null,"32","0",null,null,null,null,null,this.tabRefCd.tabOprunitRefCd.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.tabRefCd.tabOprunitRefCd.addChild(obj.name, obj);

            obj = new Radio("rdoUSE_YN","143","20","232","19",null,null,null,null,null,null,this.tabRefCd.tabOprunitRefCd.form);
            obj.set_taborder("3");
            obj.set_columncount("3");
            obj.set_direction("horizontal");
            obj.set_rowcount("1");
            obj.set_innerdataset("dsComUSE_YN");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.tabRefCd.tabOprunitRefCd.addChild(obj.name, obj);

            obj = new Button("btnReset4Opru","694","55","90","24",null,null,null,null,null,null,this.tabRefCd.tabOprunitRefCd.form);
            obj.set_taborder("4");
            obj.set_text("초기화");
            obj.set_visible("true");
            this.tabRefCd.tabOprunitRefCd.addChild(obj.name, obj);

            obj = new Button("btnSrch4Opru",null,"55","90","24","0",null,null,null,null,null,this.tabRefCd.tabOprunitRefCd.form);
            obj.set_taborder("5");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_select");
            this.tabRefCd.tabOprunitRefCd.addChild(obj.name, obj);

            obj = new Grid("grdRefCd4Opru","0","132",null,"259","0",null,null,null,null,null,this.tabRefCd.tabOprunitRefCd.form);
            obj.set_taborder("6");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_binddataset("dsRefCd4Opru");
            obj.set_autoenter("select");
            obj.set_selecttype("area");
            obj.set_font("12px/normal \"Arial\",\"맑은고딕\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"120\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"90\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"참조코드 ID\"/><Cell col=\"2\" text=\"참조코드\"/><Cell col=\"3\" text=\"참조코드명\"/><Cell col=\"4\" text=\"상태\"/></Band><Band id=\"body\"><Cell text=\"bind:ROWN\"/><Cell col=\"1\" text=\"bind:REF_CD_SEQ\"/><Cell col=\"2\" text=\"bind:REF_CD\" edittype=\"text\" displaytype=\"editcontrol\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:REF_CD_NM\" displaytype=\"editcontrol\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:USE_YN\" edittype=\"combo\" displaytype=\"combocontrol\" combocodecol=\"CD\" combodatacol=\"NM\" combodataset=\"dsUSE_YN\"/></Band></Format></Formats>");
            this.tabRefCd.tabOprunitRefCd.addChild(obj.name, obj);

            obj = new Combo("cmbPageSz",null,"100","90","24","0",null,null,null,null,null,this.tabRefCd.tabOprunitRefCd.form);
            obj.set_taborder("11");
            obj.set_codecolumn("cd");
            obj.set_datacolumn("nm");
            var tabRefCd_tabOprunitRefCd_form_cmbPageSz_innerdataset = new nexacro.NormalDataset("tabRefCd_tabOprunitRefCd_form_cmbPageSz_innerdataset", obj);
            tabRefCd_tabOprunitRefCd_form_cmbPageSz_innerdataset._setContents("<ColumnInfo><Column id=\"cd\" size=\"256\"/><Column id=\"nm\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cd\">20</Col><Col id=\"nm\">20개씩</Col></Row><Row><Col id=\"cd\">50</Col><Col id=\"nm\">50개씩</Col></Row><Row><Col id=\"cd\">100</Col><Col id=\"nm\">100개씩</Col></Row></Rows>");
            obj.set_innerdataset(tabRefCd_tabOprunitRefCd_form_cmbPageSz_innerdataset);
            obj.set_text("20개씩");
            obj.set_value("20");
            obj.set_index("1");
            this.tabRefCd.tabOprunitRefCd.addChild(obj.name, obj);

            obj = new Button("btnAdd4Opru","695","100",null,"24","cmbPageSz:4",null,null,null,null,null,this.tabRefCd.tabOprunitRefCd.form);
            obj.set_taborder("9");
            obj.set_text("추가");
            obj.set_visible("true");
            this.tabRefCd.tabOprunitRefCd.addChild(obj.name, obj);

            obj = new Button("btnMUpdate4Opru","600","100",null,"24","btnAdd4Opru:4",null,null,null,null,null,this.tabRefCd.tabOprunitRefCd.form);
            obj.set_taborder("8");
            obj.set_text("일괄등록");
            obj.set_visible("true");
            this.tabRefCd.tabOprunitRefCd.addChild(obj.name, obj);

            obj = new Button("btnXlsx4Opru",null,"100","110","24","btnMUpdate4Opru:4",null,null,null,null,null,this.tabRefCd.tabOprunitRefCd.form);
            obj.set_taborder("7");
            obj.set_text("엑셀다운로드");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_excel");
            this.tabRefCd.tabOprunitRefCd.addChild(obj.name, obj);

            obj = new Div("divPaging","0","400",null,"30","0",null,null,null,null,null,this.tabRefCd.tabOprunitRefCd.form);
            obj.set_taborder("10");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.tabRefCd.tabOprunitRefCd.addChild(obj.name, obj);

            obj = new Static("lblPageInfo","0","100","120","24",null,null,null,null,null,null,this.tabRefCd.tabOprunitRefCd.form);
            obj.set_taborder("12");
            obj.set_text("(총 0건 1/1)");
            this.tabRefCd.tabOprunitRefCd.addChild(obj.name, obj);

            obj = new Button("btnCncl4Opru","370","453","70","30",null,null,null,null,null,null,this.tabRefCd.tabOprunitRefCd.form);
            obj.set_taborder("13");
            obj.set_text("취소");
            this.tabRefCd.tabOprunitRefCd.addChild(obj.name, obj);

            obj = new Button("btnSave4Opru","445","453","70","30",null,null,null,null,null,null,this.tabRefCd.tabOprunitRefCd.form);
            obj.set_taborder("14");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.tabRefCd.tabOprunitRefCd.addChild(obj.name, obj);

            obj = new Tabpage("tabDeptRefCd",this.tabRefCd);
            obj.set_text("부서 참조코드");
            this.tabRefCd.addChild(obj.name, obj);

            obj = new Static("lbl","0","12","130","32",null,null,null,null,null,null,this.tabRefCd.tabDeptRefCd.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("부서");
            this.tabRefCd.tabDeptRefCd.addChild(obj.name, obj);

            obj = new Static("Static21_00_01","130","12",null,"32","0",null,null,null,null,null,this.tabRefCd.tabDeptRefCd.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.tabRefCd.tabDeptRefCd.addChild(obj.name, obj);

            obj = new Static("Static21_00_00","0","43","130","32",null,null,null,null,null,null,this.tabRefCd.tabDeptRefCd.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("사용여부");
            this.tabRefCd.tabDeptRefCd.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00","130","43",null,"32","0",null,null,null,null,null,this.tabRefCd.tabDeptRefCd.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.tabRefCd.tabDeptRefCd.addChild(obj.name, obj);

            obj = new Radio("rdoUSE_YN00","143","51","232","19",null,null,null,null,null,null,this.tabRefCd.tabDeptRefCd.form);
            obj.set_taborder("4");
            obj.set_columncount("3");
            obj.set_direction("horizontal");
            obj.set_rowcount("1");
            obj.set_innerdataset("dsComUSE_YN");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.tabRefCd.tabDeptRefCd.addChild(obj.name, obj);

            obj = new Combo("cboDept","135","16","292","24",null,null,null,null,null,null,this.tabRefCd.tabDeptRefCd.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsBzplcOprunitDept");
            obj.set_codecolumn("DEPT_ID");
            obj.set_datacolumn("DEPT_INFO");
            obj.set_text("부서선택");
            obj.set_value("");
            obj.set_index("-1");
            this.tabRefCd.tabDeptRefCd.addChild(obj.name, obj);

            obj = new Button("btnReset4Dept","694","85","90","24",null,null,null,null,null,null,this.tabRefCd.tabDeptRefCd.form);
            obj.set_taborder("6");
            obj.set_text("초기화");
            obj.set_visible("true");
            this.tabRefCd.tabDeptRefCd.addChild(obj.name, obj);

            obj = new Button("btnSrch4Dept",null,"85","90","24","0",null,null,null,null,null,this.tabRefCd.tabDeptRefCd.form);
            obj.set_taborder("7");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_select");
            this.tabRefCd.tabDeptRefCd.addChild(obj.name, obj);

            obj = new Grid("grdRefCd4Dept","0","161",null,"230","0",null,null,null,null,null,this.tabRefCd.tabDeptRefCd.form);
            obj.set_taborder("8");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_binddataset("dsRefCd4Dept");
            obj.set_autoenter("select");
            obj.set_selecttype("area");
            obj.set_font("12px/normal \"Arial\",\"맑은고딕\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"100\"/><Column size=\"180\"/><Column size=\"100\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"90\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"부서 ID\"/><Cell col=\"2\" text=\"부서 명\"/><Cell col=\"3\" text=\"참조코드 ID\"/><Cell col=\"4\" text=\"참조코드\"/><Cell col=\"5\" text=\"참조코드명\"/><Cell col=\"6\" text=\"상태\"/></Band><Band id=\"body\"><Cell text=\"bind:ROWN\"/><Cell col=\"1\" text=\"bind:DEPT_ID\"/><Cell col=\"2\" text=\"bind:DEPT_NM\"/><Cell col=\"3\" text=\"bind:REF_CD_SEQ\"/><Cell col=\"4\" text=\"bind:REF_CD\" edittype=\"text\" textAlign=\"left\" displaytype=\"editcontrol\"/><Cell col=\"5\" text=\"bind:REF_CD_NM\" displaytype=\"editcontrol\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:USE_YN\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsUSE_YN\" combocodecol=\"CD\" combodatacol=\"NM\"/></Band></Format></Formats>");
            this.tabRefCd.tabDeptRefCd.addChild(obj.name, obj);

            obj = new Combo("cmbPageSz",null,"131","90","24","0",null,null,null,null,null,this.tabRefCd.tabDeptRefCd.form);
            obj.set_taborder("13");
            obj.set_innerdataset("dsRate");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            obj.set_text("20개씩");
            obj.set_value("20");
            obj.set_index("1");
            this.tabRefCd.tabDeptRefCd.addChild(obj.name, obj);

            obj = new Button("btnAdd4Dept","695","131",null,"24","cmbPageSz:4",null,null,null,null,null,this.tabRefCd.tabDeptRefCd.form);
            obj.set_taborder("11");
            obj.set_text("추가");
            obj.set_visible("true");
            this.tabRefCd.tabDeptRefCd.addChild(obj.name, obj);

            obj = new Button("btnMUpdate4Dept","600","131",null,"24","btnAdd4Dept:4",null,null,null,null,null,this.tabRefCd.tabDeptRefCd.form);
            obj.set_taborder("10");
            obj.set_text("일괄등록");
            obj.set_visible("true");
            this.tabRefCd.tabDeptRefCd.addChild(obj.name, obj);

            obj = new Button("btnXlsx4Dept",null,"131","110","24","btnMUpdate4Dept:4",null,null,null,null,null,this.tabRefCd.tabDeptRefCd.form);
            obj.set_taborder("9");
            obj.set_text("엑셀다운로드");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_excel");
            this.tabRefCd.tabDeptRefCd.addChild(obj.name, obj);

            obj = new Div("divPaging","0","400",null,"30","0",null,null,null,null,null,this.tabRefCd.tabDeptRefCd.form);
            obj.set_taborder("12");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.tabRefCd.tabDeptRefCd.addChild(obj.name, obj);

            obj = new Static("lblPageInfo","0","131","120","24",null,null,null,null,null,null,this.tabRefCd.tabDeptRefCd.form);
            obj.set_taborder("14");
            obj.set_text("(총 0건 1/1)");
            this.tabRefCd.tabDeptRefCd.addChild(obj.name, obj);

            obj = new Button("btnCncl4Dept","370","453","70","30",null,null,null,null,null,null,this.tabRefCd.tabDeptRefCd.form);
            obj.set_taborder("15");
            obj.set_text("취소");
            this.tabRefCd.tabDeptRefCd.addChild(obj.name, obj);

            obj = new Button("btnSave4Dept","445","453","70","30",null,null,null,null,null,null,this.tabRefCd.tabDeptRefCd.form);
            obj.set_taborder("16");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.tabRefCd.tabDeptRefCd.addChild(obj.name, obj);

            obj = new Static("lblRefCdNm","18","16","682","37",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("$참조코드명$");
            obj.set_font("bold 14pt \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,610,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tabRefCd.tabOprunitRefCd.form.rdoOPR_UNIT_MALL_SPR_CD","value","dsOprunitDtl","OPR_UNIT_MALL_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tabRefCd.tabOprunitRefCd.form.rdoUSE_YN","value","dsParam4Opru","useYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tabRefCd.tabOprunitRefCd.form.cmbPageSz","value","dsParam4Opru","rowCount");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tabRefCd.tabDeptRefCd.form.cmbPageSz","value","dsParam4Dept","rowCount");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tabRefCd.tabDeptRefCd.form.cboDept","value","dsParam4Dept","deptId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tabRefCd.tabDeptRefCd.form.rdoUSE_YN00","value","dsParam4Dept","useYn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MA_66.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_66.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_66.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_MA_66.xfdl", function() {
        /*******************************************************
          PROJECT NAME : SSP
          CREATION DATES :
        *******************************************************/

        // 공통형 스크립트 인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object
        this.createYn = true;

        this.pParamKeys = { coCd: 'CO_CD', bzplcId: 'BZPLC_ID', oprUnitId: 'OPR_UNIT_ID', refCdGrpSeq: 'REF_CD_GRP_SEQ', refCdGrpNm: 'REF_CD_GRP_NM' };
        this.pParam={};
        this.defTypes = {
        	OPU: {
        		uParam : this.dsParam4Opru,
        		uDs    : this.dsRefCd4Opru,
        		uGrid  : this.tabRefCd.tabOprunitRefCd.form.grdRefCd4Opru,
        		uPaging: this.tabRefCd.tabOprunitRefCd.form.divPaging,
        		uPageSz: this.tabRefCd.tabOprunitRefCd.form.cmbPageSz,
        		uPageIf: this.tabRefCd.tabOprunitRefCd.form.lblPageInfo,
        	},
        	DEP: {
        		uParam : this.dsParam4Dept,
        		uDs    : this.dsRefCd4Dept,
        		uGrid  : this.tabRefCd.tabDeptRefCd.form.grdRefCd4Dept,
        		uPaging: this.tabRefCd.tabDeptRefCd.form.divPaging,
        		uPageSz: this.tabRefCd.tabDeptRefCd.form.cmbPageSz,
        		uPageIf: this.tabRefCd.tabDeptRefCd.form.lblPageInfo,
        	},
        };

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e) {
        	this.gfn_formOnLoad(this);  //공통 함수 호출(필수)

        	// Opener Parameter 확인
        	var props = [ 'coCd', 'bzplcId', 'oprUnitId', 'refCdGrpSeq', 'refCdGrpNm', 'deptOprUnitSprCd', 'useYn' ];
        	if (this.cnvtExtnlArgs2Dataset(this.parent, 'dsParam', props) == null) { return; }
        	if (this.parent != undefined && this.parent['refCdGrpNm'] != undefined) {
        		this.lblRefCdNm.set_text  ( this.parent['refCdGrpNm'] );
        	}

        	props = [ 'coCd', 'bzplcId', 'oprUnitId', 'refCdGrpSeq', 'refCdGrpNm'];
        	for (var i in props) {
        		var k=props[i], v=this.dsParam.getColumn(0, [k]);  trace('['+k+':'+v+']');
        		this.dsParam4Opru.setColumn(0, k, v);
        		this.dsParam4Dept.setColumn(0, k, v);
        	}

        	//this.fnListBzplcOprunitDept();
        	if(this.parent.createYn == 'N'){
        		this.createYn = false;
        	}

        	this.copyPaste.addGrid(this.tabRefCd.tabDeptRefCd.form.grdRefCd4Dept, this, false);
        	this.copyPaste.addGrid(this.tabRefCd.tabOprunitRefCd.form.grdRefCd4Opru, this, false);

        	// 단축키 등록
        	this.fn_regShortCutMethod();
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fnListBzplcOprunitDept=function() {
        	var sSvc  = 'dsBzplcOprunitDept';
        	var sUrl  = '/bo/cust/oprunit/list-bzplc-oprunit-dept.do';
        	var inDs  = 'dsParam=dsParam';
        	var outDs = 'dsBzplcOprunitDept=dsBzplcOprunitDept';
        	var arg   = '';
        	this.gfn_transaction(sSvc, sUrl, inDs, outDs, arg, 'fnListBzplcOprunitDeptClbk');
        }
        this.fnListBzplcOprunitDeptClbk=function(rCodes, rCode, rMesg) {
        	this.fnOprunitRefCd();
        	this.fnDeptRefCd();
        }

        this.fnOprunitRefCd=function(sPage) {
        	this.fnRefCd('OPU', sPage, 'fnOprunitRefCdClbk');
        }
        this.fnDeptRefCd=function(sPage) {
        	this.fnRefCd('DEP', sPage, 'fnDeptRefCdClbk');
        }

        this.fnRefCd=function(sRefTyp, sPage, sClbk) {
        	var u = this.defTypes[sRefTyp];

        	// Paging
        	if( sPage == 0 || sPage == undefined ) {
        		u.uPaging.uPage    = 1;
        		u.uPaging.uPageNum = 0 ;
        		u.uDs.setColumn(0, "startNum", 0				 );
        		u.uDs.setColumn(0, "rowCount", u.uPageSz.value   );

        		this.dsParam4Dept.setColumn(0, "startNum", 0);
        		this.dsParam4Opru.setColumn(0, "startNum", 0);
        	}

        	var sSvc  = 'refCd:'+ sRefTyp;
        	var sUrl  = '/bo/cust/oprunit/ref-cd/list.do';
        	var inDs  = 'dsParam='+ u.uParam.id;  //'dsParam='+ u.uDs.id; // 'dsParams=dsParams';  // + dsParams.id;
        	var outDs = 'dsRefCd=dsRefCd'  ;
        	var arg   = '';

        	u.uParam.setColumn(0, 'deptOprUnitSprCd', 'DEP'!=sRefTyp? 'OPU' : sRefTyp);
        	outDs = 'DEP'!=sRefTyp ? 'dsRefCd4Opru=dsRefCd4Opru' : 'dsRefCd4Dept=dsRefCd4Dept';

        	this.gfn_transaction(sSvc, sUrl, inDs, outDs, arg, sClbk);
        }

        this.fnSaveRefCd = function(sRefTyp, tDS) {
        	var sDSKey = 'dsSaveRefCd';

        	var typeByInDs = '';
        	if ('OPU'==sRefTyp) {
        		typeByInDs = 'dsParam=dsParam4Opru dsSaveRefCd='+ sDSKey
        	} else {
        		typeByInDs = 'dsParam=dsParam4Dept dsSaveRefCd='+ sDSKey
        	}

        	var sSvc  = 'saveRefCd:'+ sRefTyp;
        	var sUrl  = '/bo/cust/oprunit/ref-cd/save.do';
        	var inDs  = typeByInDs; // sDSKey +'='+ sDSKey; // 'dsParams=dsParams';  // + dsParams.id;
        	var outDs = '';
        	var arg   = '';

        	this[sDSKey] = tDS;
        	this.gfn_transaction(sSvc, sUrl, inDs, outDs, arg, 'fnSaveRefCdClbk');
        }
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        // 공통코드 조회 콜백
        this.fnCcComCodesClbk=function(rCodes, rCode, rMesg) {
        	trace('this.fnCcComCodesClbk >>' + rCodes);

        // 	var props = [ 'coCd', 'bzplcId', 'oprUnitId', 'refCdGrpSeq', 'refCdGrpNm', 'deptOprUnitSprCd', 'useYn' ];
        // 	if (this.cnvtExtnlArgs2Dataset(this.parent, 'dsParam', props) == null) { return; }

        	this.dsParam4Opru.setColumn(0, 'useYn' , undefined);
        	this.dsParam4Dept.setColumn(0, 'useYn' , undefined);
        	this.dsParam4Dept.setColumn(0, 'deptId', undefined);
        	this.fnListBzplcOprunitDept();

        	trace('this.fnCcComCodesClbk[ this.dsParam:'+ this.dsParam +']');
        }

        // 참조코드 저장 콜백
        this.fnSaveRefCdClbk=function(rCodes, rCode, rMesg) {
        	trace('this.fnSaveRefCdClbk()');

        	if (rCode!=0){ return; }

        	this.fnOprunitRefCd();
        	this.fnDeptRefCd   ();
        	alert(this.fn_getMessage("ERRC000081")); // 저장되었습니다.
        }


        // 운영단위 참조코드 상세 조회 콜백
        this.fnOprunitRefCdClbk=function(rCodes, rCode, rMesg) {
        	var u = this.defTypes['OPU'];

        	var ds=u.uDs, dsId=ds.id;  trace('[ds.id:'+ ds.id +':'+ ds.rowcount +']');
        	if (undefined==ds) {
        		trace('newDataset');
        		this.newDataset(dsId, [ 'CO_CD', 'BZPLC_ID', 'OPR_UNIT_ID', 'DEPT_OPR_UNIT_SPR_CD', 'DEPT_OPR_UNIT_ID', 'USE_YN' ]);
        		u.uGrid.set_dataset(this[dsId]);
        	}
        	var totCunt = u.uDs.getColumn(0, 'TOT_CUNT');
        	u.uPaging.uTotCunt = undefined==totCunt ? 0 : totCunt;  //this.uPaging.uTotCount = this.dsBzplc.getColumn(0, "TOT_CUNT");
        	trace('[totCunt:'+ totCunt +']');

        	u.uPaging.form.cfn_createPage(u.uPaging, u.uPaging.uTotCunt, u.uPageSz.value, "fnOprunitRefCdPageClbk");
        }
        // 운영단위 참조코드 상세 Page Callback
        this.fnOprunitRefCdPageClbk = function(flg){
        	var u = this.defTypes['OPU'];   // var uDs=this.dsRefCdDtl4Opru, uPaging = this.tabRefCd.tabOprunitRefCd.form.divPaging, uPageSz = this.tabRefCd.tabOprunitRefCd.form.cmbPageSz, uPageIf = this.tabRefCd.tabOprunitRefCd.form.lblPageInfo;
        	trace('fnOprunitRefCdPageClbk <flg:'+ flg +'/><pageNum:'+ u.uPaging.uPageNum +'>');

        	if (flg) {
        		u.uParam.setColumn(0, 'startNum', u.uPaging.uPageNum);
        		u.uParam.setColumn(0, 'rowCount', u.uPageSz.value   );

        		this.fnOprunitRefCd(u.uPaging.uPageNum);
        	}

        	u.uPageIf.set_text("(총 "+ u.uPaging.uTotCunt +"건, "+ u.uPaging.uPage +" / "+ u.uPaging.uPageCnt +")");
        }

        // 부서 참조코드 상세 조회 콜백
        this.fnDeptRefCdClbk=function(rCodes, rCode, rMesg) {
        	var u = this.defTypes['DEP'];  // var uDs=this.dsRefCdDtl4Dept, uPaging = this.tabRefCd.tabDeptRefCd.form.divPaging, uPageSz = this.tabRefCd.tabDeptRefCd.form.cmbPageSz, uPageIf = this.tabRefCd.tabDeptRefCd.form.lblPageInfo;

        	var totCunt = u.uDs.getColumn(0, 'TOT_CUNT');
        	u.uPaging.uTotCunt = totCunt == undefined ? 0 : totCunt;

        	u.uPaging.form.cfn_createPage(u.uPaging, u.uPaging.uTotCunt, u.uPageSz.value, 'fnDeptRefCdPageClbk');
        }
        // 부서 참조코드 상세 Page Callback
        this.fnDeptRefCdPageClbk = function(flg){
        	var u = this.defTypes['DEP'];  // var uDs=this.dsRefCdDtl4Dept, uPaging = this.tabRefCd.tabDeptRefCd.form.divPaging, uPageSz = this.tabRefCd.tabDeptRefCd.form.cmbPageSz, uPageIf = this.tabRefCd.tabDeptRefCd.form.lblPageInfo;
        	trace('fnDeptRefCdPageClbk <flg:'+ flg +'/><pageNum:'+ u.uPaging.uPageNum +'>');

        	if (flg) {
        		u.uParam.setColumn(0, 'startNum', u.uPaging.uPageNum);
        		u.uParam.setColumn(0, 'rowCount', u.uPageSz.value   );

        		this.fnDeptRefCd(u.uPaging.uPageNum);
        	}

        	u.uPageIf.set_text("(총 "+ u.uPaging.uTotCunt +"건, "+ u.uPaging.uPage +" / "+ u.uPaging.uPageCnt +")");
        }

        this.fn_popupCallback = function(sPopupId, sRetValue){
        	this.fnOprunitRefCd();
        	this.fnDeptRefCd();
        }

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function() {
        	trace('this.cfn_formInit() > [refCdGrpNm:'+ this.parent['refCdGrpNm'] +']');

        	this.ccComCodes([ '전체:USE_YN' ], 'fnCcComCodesClbk');

        };

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.btnAdd=function(sprCd) {
        	var u=this.defTypes[sprCd];

        	if ('DEP'==sprCd) {
        		var deptId=u.uParam.getColumn(0, 'deptId');
        		if (undefined==deptId) {
        			alert(this.fn_getMessage("ERRC000265")); // 부서 참조코드 추가시에는 부서가 선택되어 있어야 합니다.
        			return;
        		}
        	}

        	if (u.uDs.rowcount < 1) { u.uDs.copyData(this.dsRefCd4Copy); }
        	u.uDs.insertRow(0); trace('insertRow:'+ u.uDs.rowcount);
        	if ('DEP'==sprCd) {
        		var cboUI=this.tabRefCd.tabDeptRefCd.form.cboDept,
        			cboDS=cboUI.getInnerDataset(); trace('[cboDS:'+ cboDS.saveXML() +']')
        			deptId=u.uParam.getColumn(0, 'deptId'), // cboDS.getColumn(cboDS.rowposition, 'DEPT_ID'),
        			deptNm=this.dsGetColumn4Expr(cboDS, 'DEPT_ID=="'+deptId+'"', 'DEPT_NM')
        		;
        		trace('[cboDS:'+ cboDS +', position:'+ cboDS.rowposition +'][deptId:'+ deptId +'][deptNm:'+ deptNm +']');

        		u.uDs.setColumn(u.uDs.rowposition, 'DEPT_ID', deptId);
        		u.uDs.setColumn(u.uDs.rowposition, 'DEPT_NM', deptNm);
        	}

        	var pProps = Object.keys( this.pParamKeys );
        	for(var i in pProps) {
        		var k=pProps[i], c=this.pParamKeys[k], v=u.uParam.getColumn(0, k);
        		u.uDs.setColumn(u.uDs.rowposition, this.pParamKeys[k], v);
        	}

        	u.uDs.setColumn(u.uDs.rowposition, 'USE_YN'              , 'Y'  );
        	u.uDs.setColumn(u.uDs.rowposition, 'DEPT_OPR_UNIT_SPR_CD', sprCd);
        	u.uDs.setColumn(u.uDs.rowposition, 'DEPT_OPR_UNIT_ID'    , u.uParam.getColumn(0, sprCd=='OPU'? 'oprUnitId' : 'deptId'));

        	u.uGrid.getBindDataset().set_rowposition(0);  // u.uDs.set_rowposition(0);
        	u.uGrid.setCellPos(2);
        	u.uGrid.showEditor(true);
        };
        this.dsGetColumn4Expr=function(objDs, strFindExpr, sColid ){
            var nFindRow = objDs.findRowExpr(strFindExpr);
            if (nFindRow < 0) return '';

            return objDs.getColumn(nFindRow, sColid);
        }

        this.btnSave=function(sprCd) {
        	var u=this.defTypes[sprCd];
        	trace('this.btnSave4Opru_onclick()');

        	var chgdDS = this.getChgdRowsDataset(u.uDs);  // trace('[chgdDS:'+ chgdDS +']' + (chgdDS==undefined?'':'[chgdDataset.rowcount:'+ chgdDS.rowcount +']'));
        	if (chgdDS == null || chgdDS.rowcount < 1) {
        		alert(this.fn_getMessage("ERRC000035")); // 변경된 내용이 없습니다.
        		return;
        	}
        	var isEmpty=true;
        	for (var i=0; i < chgdDS.rowcount; i++) {
        		var eMesg='', REF_CD=chgdDS.getColumn(i, 'REF_CD'), REF_CD_NM=chgdDS.getColumn(i, 'REF_CD_NM');
        		if (REF_CD   ==undefined || REF_CD   =='') { eMesg += (eMesg==''?'':', ')+'참조코드'  ; }
        		if (REF_CD_NM==undefined || REF_CD_NM=='') { eMesg += (eMesg==''?'':', ')+'참조코드명'; }

        		if (eMesg!='') { eMesg+=' 항목을 입력하셔야 합니다.'; alert(eMesg); return; }

        		//
        		if(!this.createYn){
        			if(chgdDS.getColumn(i, 'USE_YN') == 'Y'){
        				alert("참조코드 그룹이 미사용인경우 참조코드를 사용상태로 수정할 수 없습니다.");
        				return;
        			}
        		}
        	}

        	if(!this.confirm(this.fn_getMessage("ERRC000080"))){
        		// 저장하시겠습니까
        		return;
        	}

        	this.fnSaveRefCd(sprCd, chgdDS);
        };

        // 창닫기
        this.fn_closeForm = function() {
        	this.close();
        };

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodESC("fn_closeForm");
        };
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        // Tab Navi Click
        this.tabRefCd_onchanged = function(obj,e) {

        };

        this.divSrch_btnInitSrchForm_onclick = function(obj,e) {
        	var u = undefined;
        	switch (e.fromobject.id) {
        		case 'btnReset4Opru' :
        			u = this.defTypes['OPU'];
        			u.uParam.setColumn(0, 'useYn' , null);
        			break;

        		case 'btnReset4Dept' :
        			u = this.defTypes['DEP'];
        			u.uParam.setColumn(0, 'useYn' , null);
        			u.uParam.setColumn(0, 'deptId', null);
        			break;
        	}

        	if (undefined!=u && undefined!=u.uParam) {
        		u.uParam.setColumn(0, 'useYn' , null);
        	}
        };

        // 운영단위 참조코드 조회버튼
        this.tabRefCd_tabOprunitRefCd_btnSrch4Opru_onclick = function(obj,e) {
        	this.fnOprunitRefCd();
        };

        // 운영단위 참조코드 추가버튼
        this.btnAdd4Opru_onclick = function(obj,e) {
        	if(!this.createYn){
        		alert("참조코드 그룹이 미사용인경우 참조코드를 추가할 수 없습니다.");
        		return;
        	}
        	this.btnAdd('OPU');
        };

        this.btnSave4Opru_onclick = function(obj,e) {
        	this.btnSave('OPU');
        };
        this.btnCncl4Opru_onclick = function(obj,e) {
        	this.close();
        };

        // 부서 참조코드 조회
        this.tabRefCd_tabDeptRefCd_btnSrch4Dept_onclick = function(obj,e) {
        	this.fnDeptRefCd();
        };
        // 부서 참조코드 추가
        this.btnAdd4Dept_onclick = function(obj,e) { trace('btnAdd4Dept_onclick');
        	if(!this.createYn){
        		alert("참조코드 그룹이 미사용인경우 참조코드를 추가할 수 없습니다.");
        		return;
        	}
        	this.btnAdd('DEP');
        };
        // 부서 참조코드 저장
        this.btnSave4Dept_onclick = function(obj,e) {
        	this.btnSave('DEP');
        };
        // 부서 참조코드 취소
        this.btnCncl4Dept_onclick = function(obj,e) {
        	this.close();
        };

        // 일괄등록
        this.btn_add_onclick = function(obj,e)
        {
        	var param = {
        		  pgmId : "SSP_BO_MA_05"
        	};

        	if(this.dsParam4Opru.getRowCount() > 0){
        		param.coCd = this.dsParam4Opru.getColumn(0,"coCd");
        		param.bzplcId = this.dsParam4Opru.getColumn(0,"bzplcId");
        		param.oprUnitId = this.dsParam4Opru.getColumn(0,"oprUnitId");
        	}

        	this.gfn_openPopup("SSP_BO_PP_34", "CO_POP::SSP_BO_PP_34.xfdl", param, "fn_popupCallback");
        };


        this.btn_excelDownload = function(obj,e)
        {
        	this.ofn_exportExcel({form:this, grid:this.tabRefCd.tabOprunitRefCd.form.grdRefCd4Opru, fileName:"운영단위 참조고드"});
        };

        this.btn_excelDownload1 = function(obj,e)
        {
        	this.ofn_exportExcel({form:this, grid:this.tabRefCd.tabDeptRefCd.form.grdRefCd4Dept, fileName:"부서 참조고드"});
        };


        this.tabRefCd_tabDeptRefCd_cmbPageSz_onitemchanged = function(obj,e)
        {
        	this.fnDeptRefCd();
        };

        this.tabRefCd_tabOprunitRefCd_cmbPageSz_onitemchanged = function(obj,e)
        {
        	this.fnOprunitRefCd(0);
        };

        this.SSP_BO_MA_66_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.SSP_BO_MA_66_onkeyup,this);
            this.tabRefCd.addEventHandler("onchanged",this.tabRefCd_onchanged,this);
            this.tabRefCd.tabOprunitRefCd.form.btnReset4Opru.addEventHandler("onclick",this.divSrch_btnInitSrchForm_onclick,this);
            this.tabRefCd.tabOprunitRefCd.form.btnSrch4Opru.addEventHandler("onclick",this.tabRefCd_tabOprunitRefCd_btnSrch4Opru_onclick,this);
            this.tabRefCd.tabOprunitRefCd.form.cmbPageSz.addEventHandler("onitemchanged",this.tabRefCd_tabOprunitRefCd_cmbPageSz_onitemchanged,this);
            this.tabRefCd.tabOprunitRefCd.form.btnAdd4Opru.addEventHandler("onclick",this.btnAdd4Opru_onclick,this);
            this.tabRefCd.tabOprunitRefCd.form.btnMUpdate4Opru.addEventHandler("onclick",this.btn_add_onclick,this);
            this.tabRefCd.tabOprunitRefCd.form.btnXlsx4Opru.addEventHandler("onclick",this.btn_excelDownload,this);
            this.tabRefCd.tabOprunitRefCd.form.btnCncl4Opru.addEventHandler("onclick",this.btnCncl4Opru_onclick,this);
            this.tabRefCd.tabOprunitRefCd.form.btnSave4Opru.addEventHandler("onclick",this.btnSave4Opru_onclick,this);
            this.tabRefCd.tabDeptRefCd.form.btnReset4Dept.addEventHandler("onclick",this.divSrch_btnInitSrchForm_onclick,this);
            this.tabRefCd.tabDeptRefCd.form.btnSrch4Dept.addEventHandler("onclick",this.tabRefCd_tabDeptRefCd_btnSrch4Dept_onclick,this);
            this.tabRefCd.tabDeptRefCd.form.cmbPageSz.addEventHandler("onitemchanged",this.tabRefCd_tabDeptRefCd_cmbPageSz_onitemchanged,this);
            this.tabRefCd.tabDeptRefCd.form.btnAdd4Dept.addEventHandler("onclick",this.btnAdd4Dept_onclick,this);
            this.tabRefCd.tabDeptRefCd.form.btnMUpdate4Dept.addEventHandler("onclick",this.btn_add_onclick,this);
            this.tabRefCd.tabDeptRefCd.form.btnXlsx4Dept.addEventHandler("onclick",this.btn_excelDownload1,this);
            this.tabRefCd.tabDeptRefCd.form.btnCncl4Dept.addEventHandler("onclick",this.btnCncl4Dept_onclick,this);
            this.tabRefCd.tabDeptRefCd.form.btnSave4Dept.addEventHandler("onclick",this.btnSave4Dept_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_MA_66.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
