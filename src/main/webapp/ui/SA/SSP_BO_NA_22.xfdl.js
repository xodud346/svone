(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_NA_22");
            this.set_titletext("프리패키지 - 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchPrdIdCheckList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdInfoList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prePkgInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_PKG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_PKG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_PKG_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IDDT_DSGN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_INC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DOC_REG_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DOC_REG_ID_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DOC_REG_ID_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DOC_REG_ID_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DOC_REG_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DOC_REG_ID_REG_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"MBL_DOC_REG_ID_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DOC_REG_ID_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prePkgIddtDtlList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_PKG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"IDDT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IDDT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gridPrePkgPrdDtl01", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_PKG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_ROW\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gridPrePkgPrdDtl02", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_PKG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_ROW\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_file", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("fileUpTrans", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00","0","0","20","1168",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("W20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","1000","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("H20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","980","0","20","1168",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("W20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","20","1188","960","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("white");
            obj.set_visible("true");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01","0","1148","1000","10",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("H10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00","582","368","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01","384","337","5","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("W5");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00","396","337","5","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("W5");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","43","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20","74","960","102",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static65","20","175","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static61","19","12","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("프리패키지 등록");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00","0","33","1000","10",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("H10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00","20","206","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_prePkgNm","20","206","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("패키지 명");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_00","20","237","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pcImage","20","237","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("[PC] 이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","641","241","328","24",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("용량 : 10M 미만 / 형식 : PNG, JPG (최적 사이즈 : 608*558)");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00","20","268","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mblImage","20","268","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("[Mobile] 이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","150","300","302","3",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_02","150","300","10","46",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","641","272","328","24",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("용량 : 10M 미만 / 형식 : PNG, JPG (최적 사이즈 : 1,080*480)");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_00_00","150","403","302","3",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_01_01","1100","323","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_01","20","299","960","108",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_prePkgDesc","20","299","130","108",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("패키지 설명");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_prePkgDesc","160","303","809","77",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prePkgNm","160","210","711","24",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_allIncYn","160","179","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdo_allIncYn_innerdataset = new nexacro.NormalDataset("rdo_allIncYn_innerdataset", obj);
            rdo_allIncYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">포함</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미포함</Col></Row></Rows>");
            obj.set_innerdataset(rdo_allIncYn_innerdataset);
            obj.set_text("포함");
            obj.set_value("Y");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_iddtDsgnYn","160","79","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdo_iddtDsgnYn_innerdataset = new nexacro.NormalDataset("rdo_iddtDsgnYn_innerdataset", obj);
            rdo_iddtDsgnYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">없음</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">산업군</Col></Row></Rows>");
            obj.set_innerdataset(rdo_iddtDsgnYn_innerdataset);
            obj.set_text("없음");
            obj.set_value("N");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchIddt","945","78","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_cssclass("btn_WF_multi");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prePkgSeq","160","47","810","24",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00_00_00","0","407","1000","30",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("H30");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static71","141","448","121","25",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("※ 6개 필수 등록");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchPrd01","814","437","81","28",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("상품검색");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_01","0","465","1000","10",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("H10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_prePkgPrd01","20","475","960","220",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_autofittype("none");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_gridPrePkgPrdDtl01");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"55\"/><Column size=\"140\"/><Column size=\"240\"/><Column size=\"260\"/><Column size=\"260\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"삭제\"/><Cell col=\"1\" text=\"상품ID\"/><Cell col=\"2\" text=\"상품명\"/><Cell col=\"3\" text=\"대표규격\"/><Cell col=\"4\" text=\"제조원\"/><Cell col=\"5\" text=\"공용전용구분\"/><Cell col=\"6\" text=\"대표상품구분\"/><Cell col=\"7\" text=\"SSP상품상태\"/><Cell col=\"8\" text=\"SSP진열상태\"/></Band><Band id=\"body\"><Cell text=\"bind:DELETE_ROW\" textAlign=\"center\" displaytype=\"decoratetext\" expr=\"&quot;&lt;u v=&apos;true&apos;&gt;삭제&lt;/u&gt;&quot;\"/><Cell col=\"1\" text=\"bind:PRD_ID_VIEW\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:PRD_NM\" textAlign=\"left\"/><Cell col=\"3\" textAlign=\"left\" displaytype=\"normal\" text=\"bind:ATTR_VAL\"/><Cell col=\"4\" textAlign=\"left\" text=\"bind:MNFR\"/><Cell col=\"5\" text=\"bind:PUB_ONLY_SPR_NM\"/><Cell col=\"6\" text=\"bind:REPR_PRD_SPR_NM\"/><Cell col=\"7\" text=\"bind:PRD_USE_YN_NM\"/><Cell col=\"8\" text=\"bind:DISP_STATS_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static63","19","732","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("상세상품 등록");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00_00_01","0","1106","1000","10",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("H10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00_00_00_00","0","695","1000","30",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("H30");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_deletePrd","729","725","81","28",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("선택 삭제");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_01_00","0","753","1000","10",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("H10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_prePkgPrd02","20","763","960","300",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_autofittype("none");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_gridPrePkgPrdDtl02");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"55\"/><Column size=\"140\"/><Column size=\"230\"/><Column size=\"235\"/><Column size=\"235\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"삭제\"/><Cell col=\"2\" text=\"상품ID\"/><Cell col=\"3\" text=\"상품명\"/><Cell col=\"4\" text=\"대표규격\"/><Cell col=\"5\" text=\"제조원\"/><Cell col=\"6\" text=\"공용전용구분\"/><Cell col=\"7\" text=\"대표상품구분\"/><Cell col=\"8\" text=\"SSP상품상태\"/><Cell col=\"9\" text=\"SSP진열상태\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:DELETE_ROW\" textAlign=\"center\" displaytype=\"decoratetext\" expr=\"&quot;&lt;u v=&apos;true&apos;&gt;삭제&lt;/u&gt;&quot;\"/><Cell col=\"2\" text=\"bind:PRD_ID_VIEW\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:PRD_NM\" textAlign=\"left\"/><Cell col=\"4\" textAlign=\"left\" displaytype=\"normal\" text=\"bind:ATTR_VAL\"/><Cell col=\"5\" textAlign=\"left\" text=\"bind:MNFR\"/><Cell col=\"6\" text=\"bind:PUB_ONLY_SPR_NM\"/><Cell col=\"7\" text=\"bind:REPR_PRD_SPR_NM\"/><Cell col=\"8\" text=\"bind:PRD_USE_YN_NM\"/><Cell col=\"9\" text=\"bind:DISP_STATS_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","20","1116","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_useYn","20","1116","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("사용 여부");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static64","19","1085","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("사용 여부");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_03","150","1117","302","3",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_03","150","1117","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_01_00","150","1144","302","3",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_01_00_00_00","969","1117","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00_00_00_00_00","0","1063","1000","30",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("H30");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_useYn","160","1120","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdo_useYn_innerdataset = new nexacro.NormalDataset("rdo_useYn_innerdataset", obj);
            rdo_useYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(rdo_useYn_innerdataset);
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","428","1158","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_write","502","1158","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","1208","1000","20",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("H20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchPrd02","814","725","81","28",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("상품검색");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_01_00_00","969","376","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_prePkgSeq","20","43","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("패키지순번");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_iddtDsgn","20","74","130","102",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("산업군");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_allInc","20","175","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("전체 탭 포함");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_01_00","969","238","10","57",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_00","666","403","302","3",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_prePkgDescSize","866","379","103","24",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("(2000 / 2000 Byte)");
            obj.set_textAlign("right");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_prePkgNmSize","881","210","88","24",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("(100 / 100 Byte)");
            obj.set_textAlign("right");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_02","280","75","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_01_01_00","290","172","302","3",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_iddt","290","78","651","94",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_binddataset("ds_prePkgIddtDtlList");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"290\"/><Column size=\"290\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"산업군ID\"/><Cell col=\"1\" text=\"산업군명\"/><Cell col=\"2\"/></Band><Band id=\"body\"><Cell text=\"bind:IDDT_ID\"/><Cell col=\"1\" text=\"bind:IDDT_NM\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_01","871","207","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03","150","44","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_01_01","290","75","302","3",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","150","44","302","3",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00","631","238","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_01","160","296","302","3",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchPrdMulText01","899","437","81","28",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("멀티텍스트");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchPrdMulText02","899","725","81","28",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("멀티텍스트");
            this.addChild(obj.name, obj);

            obj = new Static("Static62","19","444","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("대표상품 등록");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pcDocRegIdNm","160","241","359","24",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pcDocRegId","523","241","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("파일첨부");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mblDocRegIdNm","160","272","359","24",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mblDocRegId","523","272","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("파일첨부");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pcDocRegIdClear","607","241","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("X");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mblDocRegIdClear","607","272","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("X");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totalCount","141","735","121","25",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("(총 0건)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1020,700,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_prePkgSeq","value","ds_prePkgInfo","PRE_PKG_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","rdo_iddtDsgnYn","value","ds_prePkgInfo","IDDT_DSGN_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","rdo_allIncYn","value","ds_prePkgInfo","ALL_INC_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt_prePkgNm","value","ds_prePkgInfo","PRE_PKG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","txt_prePkgDesc","value","ds_prePkgInfo","PRE_PKG_DESC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","rdo_useYn","value","ds_prePkgInfo","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_pcDocRegIdNm","value","ds_prePkgInfo","PC_DOC_REG_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_mblDocRegIdNm","value","ds_prePkgInfo","MBL_DOC_REG_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SSP_BO_NA_22.xfdl", function() {

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_NA_22_onload,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.txt_prePkgDesc.addEventHandler("onkeyup",this.txt_prePkgDesc_onkeyup,this);
            this.edt_prePkgNm.addEventHandler("onkeyup",this.edt_prePkgNm_onkeyup,this);
            this.rdo_iddtDsgnYn.addEventHandler("onitemchanged",this.rdo_iddtDsgnYn_onitemchanged,this);
            this.btn_searchIddt.addEventHandler("onclick",this.btn_searchIddt_onclick,this);
            this.btn_searchPrd01.addEventHandler("onclick",this.btn_searchPrd01_onclick,this);
            this.grd_prePkgPrd01.addEventHandler("oncellclick",this.grd_prePkgPrd01_oncellclick,this);
            this.btn_deletePrd.addEventHandler("onclick",this.btn_deletePrd_onclick,this);
            this.grd_prePkgPrd02.addEventHandler("oncellclick",this.grd_prePkgPrd02_oncellclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_write.addEventHandler("onclick",this.btn_write_onclick,this);
            this.btn_searchPrd02.addEventHandler("onclick",this.btn_searchPrd02_onclick,this);
            this.grd_iddt.addEventHandler("oncellclick",this.grd_iddt_oncellclick,this);
            this.btn_searchPrdMulText01.addEventHandler("onclick",this.btn_searchPrdMulText01_onclick,this);
            this.btn_searchPrdMulText02.addEventHandler("onclick",this.btn_searchPrdMulText02_onclick,this);
            this.btn_pcDocRegId.addEventHandler("onclick",this.btn_pcDocRegId_onclick,this);
            this.btn_mblDocRegId.addEventHandler("onclick",this.btn_mblDocRegId_onclick,this);
            this.btn_pcDocRegIdClear.addEventHandler("onclick",this.btn_pcDocRegIdClear_onclick,this);
            this.btn_mblDocRegIdClear.addEventHandler("onclick",this.btn_mblDocRegIdClear_onclick,this);
            this.fileDialog.addEventHandler("onclose",this.fileDialog_onclose,this);
            this.fileUpTrans.addEventHandler("onerror",this.fileUpTrans_onerror,this);
            this.fileUpTrans.addEventHandler("onprogress",this.fileUpTrans_onprogress,this);
            this.fileUpTrans.addEventHandler("onsuccess",this.fileUpTrans_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onsuccess",this.FileDownTransfer_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onerror",this.FileDownTransfer_onerror,this);
        };
        this.loadIncludeScript("SSP_BO_NA_22.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
