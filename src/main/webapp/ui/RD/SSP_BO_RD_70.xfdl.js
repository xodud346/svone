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
            this.set_titletext("R&D 화학물질정보 상세");
            this.set_background("black");
            if (Form == this.constructor)
            {
                this._setFormPosition(1244,950);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_master", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CONT_CHG_DGRCNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"FILE1_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MSDS_FNL_CHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_NO\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"FILE1_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE2_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PHASE_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PHASE_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MTL_GRAVITY\" type=\"STRING\" size=\"256\"/><Column id=\"FILE2_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"RND_MSDS_URL\" type=\"STRING\" size=\"256\"/><Column id=\"FILE2_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE1_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"DOC_ID2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_PREQNO\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/><Col id=\"CPRTCP_ID\"/><Col id=\"CUST_PREQNO\"/><Col id=\"PRD_ID\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_phaseSprCdCombo", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chmMtlList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHM_MTL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CAS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TOXIC_MTL1\" type=\"STRING\" size=\"256\"/><Column id=\"LMT_MTL1\" type=\"STRING\" size=\"256\"/><Column id=\"ACCD_PSB_MTL1\" type=\"STRING\" size=\"256\"/><Column id=\"PHBT_MTL1\" type=\"STRING\" size=\"256\"/><Column id=\"PERMIT_MTL1\" type=\"STRING\" size=\"256\"/><Column id=\"MIN_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"AVG_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"CAS_RN\" type=\"STRING\" size=\"256\"/><Column id=\"CAS_RN_DUP_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"ENG_CHM_MTL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHM_MTL_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chmMtlAddList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PK_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"LAW2_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"A_LAW2_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"A_LAW2_NM\" type=\"STRING\" size=\"256\"/><Column id=\"B_LAW2_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"B_LAW2_NM\" type=\"STRING\" size=\"256\"/><Column id=\"C_LAW2_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"C_LAW2_NM\" type=\"STRING\" size=\"256\"/><Column id=\"D_LAW2_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"D_LAW2_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_saveFileList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_uploadResult", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_downLoad", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chmMtlListTemp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHM_MTL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CAS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TOXIC_MTL1\" type=\"STRING\" size=\"256\"/><Column id=\"LMT_MTL1\" type=\"STRING\" size=\"256\"/><Column id=\"ACCD_PSB_MTL1\" type=\"STRING\" size=\"256\"/><Column id=\"PHBT_MTL1\" type=\"STRING\" size=\"256\"/><Column id=\"PERMIT_MTL1\" type=\"STRING\" size=\"256\"/><Column id=\"MIN_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"AVG_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"CAS_RN\" type=\"STRING\" size=\"256\"/><Column id=\"CAS_RN_DUP_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"CHM_MTL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ENG_CHM_MTL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chmMtlAddListTemp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PK_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"LAW2_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"A_LAW2_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"A_LAW2_NM\" type=\"STRING\" size=\"256\"/><Column id=\"B_LAW2_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"B_LAW2_NM\" type=\"STRING\" size=\"256\"/><Column id=\"C_LAW2_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"C_LAW2_NM\" type=\"STRING\" size=\"256\"/><Column id=\"D_LAW2_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"D_LAW2_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_close",null,"0","20","20","0",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("X");
            obj.set_visible("true");
            obj.set_background("black");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("sta_bg","0","22",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_background("white");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00","20","147",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20","116",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","85",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_cprtcpId","20","85","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("협력사");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            obj.getSetter("uEssentiel").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","20","328","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("화학물질정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","20","61","155","16",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("MSDS정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_01","20","609","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("추가규제정보 (<fc v=\'red\'><b v=\'true\'>*</b></fc>는 체크 시 취급불가)");
            obj.set_cssclass("sta_WF_title02");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","617","897","67","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exit",null,"897","68","24","631",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cprtcpId","156","89","129","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01","0","304","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_chmMtlList","20","364",null,"199","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("grd_WF_list");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_nodatatext("화학물질 정보가 존재하지 않습니다.");
            obj.set_binddataset("ds_chmMtlList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\"/><Cell col=\"1\" rowspan=\"2\" text=\"화학물질명\"/><Cell col=\"2\" rowspan=\"2\" text=\"CAS No.\"/><Cell col=\"3\" colspan=\"5\" text=\"유해화학물질구분\"/><Cell col=\"8\" colspan=\"3\" text=\"함량\"/><Cell row=\"1\" col=\"3\" text=\"유독물질\"/><Cell row=\"1\" col=\"4\" text=\"제한물질\"/><Cell row=\"1\" col=\"5\" text=\"사고대비물질\"/><Cell row=\"1\" col=\"6\" text=\"금지물질\"/><Cell row=\"1\" col=\"7\" text=\"허가물질\"/><Cell row=\"1\" col=\"8\" text=\"FROM\"/><Cell row=\"1\" col=\"9\" text=\"TO\"/><Cell row=\"1\" col=\"10\" text=\"AVG\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:CHM_MTL_NM\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:CAS_NO\" displaytype=\"expr:dataset.getRowType(currow) == &quot;2&quot; ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:dataset.getRowType(currow) == &quot;2&quot; ? &quot;normal&quot; : &quot;none&quot;\" editautoselect=\"true\"/><Cell col=\"3\" text=\"bind:TOXIC_MTL1\"/><Cell col=\"4\" text=\"bind:LMT_MTL1\"/><Cell col=\"5\" text=\"bind:ACCD_PSB_MTL1\"/><Cell col=\"6\" text=\"bind:PHBT_MTL1\"/><Cell col=\"7\" text=\"bind:PERMIT_MTL1\"/><Cell col=\"8\" text=\"bind:MIN_CONTENT\" textAlign=\"right\" displaytype=\"maskeditcontrol\" edittype=\"mask\" editautoselect=\"true\" maskeditformat=\"!###,###,###,###,##0.###\" maskeditautoselect=\"true\" maskeditlimitbymask=\"both\"/><Cell col=\"9\" text=\"bind:MAX_CONTENT\" textAlign=\"right\" displaytype=\"maskeditcontrol\" edittype=\"mask\" editautoselect=\"true\" maskeditformat=\"!###,###,###,###,##0.###\" maskeditautoselect=\"true\" maskeditlimitbymask=\"both\"/><Cell col=\"10\" text=\"bind:AVG_CONTENT\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00","0","353","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"327","68","24","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("- 삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"327","67","24","btn_del:4",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("+ 추가");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01_00","0","599","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00_00","0","631","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","20","845",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_fileName","20","845","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("시약정보요약서");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_chmMtlAddList","20","641",null,"194","20",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("grd_WF_list");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_nodatatext("추가규제 정보가 존재하지 않습니다.");
            obj.set_binddataset("ds_chmMtlAddList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"15\"/><Column size=\"150\"/><Column size=\"15\"/><Column size=\"150\"/><Column size=\"15\"/><Column size=\"150\"/><Column size=\"15\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"화평/화관법\"/><Cell col=\"2\" colspan=\"2\" text=\"산업안전보건법\"/><Cell col=\"4\" colspan=\"2\" text=\"마약류관리법\"/><Cell col=\"6\" colspan=\"2\" text=\"위험물안전관리법\"/></Band><Band id=\"body\"><Cell text=\"bind:A_LAW2_VAL\" displaytype=\"expr:A_LAW2_NM != null ? &quot;checkboxcontrol&quot; : &quot;none&quot;\" border=\"1px solid #d4d4d4,0px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4\"/><Cell col=\"1\" text=\"bind:A_LAW2_NM\" textAlign=\"left\" displaytype=\"decoratetext\"/><Cell col=\"2\" text=\"bind:B_LAW2_VAL\" displaytype=\"expr:B_LAW2_NM != null ? &quot;checkboxcontrol&quot; : &quot;none&quot;\" border=\"1px solid #d4d4d4,0px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4\"/><Cell col=\"3\" text=\"bind:B_LAW2_NM\" textAlign=\"left\" displaytype=\"decoratetext\"/><Cell col=\"4\" text=\"bind:C_LAW2_VAL\" displaytype=\"expr:C_LAW2_NM != null ? &quot;checkboxcontrol&quot; : &quot;none&quot;\" border=\"1px solid #d4d4d4,0px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4\"/><Cell col=\"5\" text=\"bind:C_LAW2_NM\" textAlign=\"left\" displaytype=\"decoratetext\"/><Cell col=\"6\" text=\"bind:D_LAW2_VAL\" displaytype=\"expr:D_LAW2_NM != null ? &quot;checkboxcontrol&quot; : &quot;none&quot;\" border=\"1px solid #d4d4d4,0px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4\"/><Cell col=\"7\" text=\"bind:D_LAW2_NM\" textAlign=\"left\" displaytype=\"decoratetext\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01_00_00","0","835","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_rgntInfo",null,"849","86","24","611",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("시약정보 URL");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fileName2","153","849","315","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_color("royalblue");
            obj.set_textDecoration("underline");
            obj.set_text("파일명");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01_00_00_00","0","877","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_regulation",null,"574","100","24","20",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("규제정보 확인");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00_01","0","563","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file2","475","849",null,"24","btn_rgntInfo:4",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("파일 등록");
            this.addChild(obj.name, obj);

            obj = new Static("stc_title","20","3","155","16",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_title02");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUploadSingle","720","852","290","19",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload","1014","852","98","19",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("FileDownload");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00_02","20","20","300","36",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("화학물질정보 상세");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00_02","0","47","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01_01","0","221","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01","20","270",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdNm00","625","270","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("성상");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            obj.getSetter("uEssentiel").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_mtlGravity","20","270","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("물질비중");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            obj.getSetter("uEssentiel").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00_00","20","246","155","16",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("MSDS정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_mtlGravity","156","274",null,"24","837",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            obj.set_format("###.####");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_phaseSprCd","766","274","124","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_phaseSprCdCombo");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_autoselect("true");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cprtcpKorNm","290","89","319","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","20","178",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_fileAtflNm","20","116","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("MSDS 파일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fileName1","156","120","244","24",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_color("royalblue");
            obj.set_textDecoration("underline");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file1","408","120","67","24",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("파일 등록");
            this.addChild(obj.name, obj);

            obj = new Static("stc_rndMsdsUrl","20","178","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("MSDS 경로");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_rndMsdsUrl","156","182","319","24",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_autoselect("true");
            obj.set_maxlength("10");
            obj.getSetter("limitbymask").set("both");
            this.addChild(obj.name, obj);

            obj = new Static("stc_msdsFnlChgDtm","20","147","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("MSDS 최종개정일 <fc v=\'red\'><b v=\'true\'>* </b></fc>");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_msdsFnlChgDtm","156","151",null,"24","964",null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fileName3","616","120","220","24",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textDecoration("underline");
            obj.set_color("royalblue");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file3","840","121","67","23",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("파일 등록");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_locFnlChgDt","615","151","105","24",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_svronCertFnlChgDt","1049","151","104","24",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_locUpdDt","615","182","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_readonly("true");
            obj.set_value("2023-01-01 00:00:00");
            obj.set_text("2023-01-01 00:00:00");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_svronCertUpdDt","1049","182","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_svronCertYn","1049","122","144","22",null,null,null,null,null,null,this);
            obj.set_initvalueid("N");
            obj.set_taborder("56");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_columncount("0");
            var rdo_svronCertYn_innerdataset = new nexacro.NormalDataset("rdo_svronCertYn_innerdataset", obj);
            rdo_svronCertYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(rdo_svronCertYn_innerdataset);
            obj.set_text("미사용");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ltterFile","479","116","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("레터파일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_svronCertYn","913","116","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("자체증빙여부");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_lttrFnlChgDt","479","147","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("레터파일 최종개정일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_svronCertFnlChgDt","913","147","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("자체증빙일");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_svronCertUpdDtPsn","913","178","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("자체증빙 수정일시");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ltterUpdDtPsn","479","178","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("레터파일 수정일시");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00_00_00_00_00","480","209",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_svronCertUpdpsn","1049","213","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_svronCertUpdDtPsn00","913","209","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("자체증빙 수정자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ltterUpdDtPsn00","479","209","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("레터파일 수정자");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_locUpdpsn","615","213","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1244,950,this,function(p){});
            obj.set_description("R&D 화학물질정보 상세");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_cprtcpId","value","ds_master","CPRTCP_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_cprtcpKorNm","value","ds_master","CPRTCP_KOR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","msk_mtlGravity","value","ds_master","MTL_GRAVITY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cbo_phaseSprCd","value","ds_master","PHASE_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_rndMsdsUrl","value","ds_master","RND_MSDS_URL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cal_msdsFnlChgDtm","value","ds_master","MSDS_FNL_CHG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt_fileName3","value","ds_master","LOC_ATTC_FILENM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","cal_locFnlChgDt","value","ds_master","LOC_ATFL_FNL_CHG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","cal_svronCertFnlChgDt","value","ds_master","SRVON_CERT_FNL_CHG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt_locUpdDt","value","ds_master","LOC_ATFL_UPD_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edt_svronCertUpdDt","value","ds_master","SRVON_CERT_UPD_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","rdo_svronCertYn","value","ds_master","SRVON_CERT_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edt_svronCertUpdpsn","value","ds_master","SRVON_CERT_UPDPSN_IDNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edt_locUpdpsn","value","ds_master","LOC_ATTC_FILE_UPDPSN_IDNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edt_fileName3","tooltiptext","ds_master","LOC_ATTC_FILENM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","ds_master");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_RD_70.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_RD_70.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_RD_45.xfdl(화학물질정보등록수정팝업)
        * 작 성         일 명: 오왕표
        * 작 성         일 자: 2022/05/16
        * 변 경         일 자:
        * 변 경         자 명:
        * 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술
        */
        /**********************************************************************
                01. 전처리 공통 함수 선언
        ***********************************************************************/
        this.executeIncludeScript("RD::rdMain.xjs"); /*include "RD::rdMain.xjs"*/;
        /**********************************************************************
                02. 폼 변수 정의
        ***********************************************************************/
        this.fv_oApp        = nexacro.getApplication();			 // application object
        this.lv_coCd        = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"") == "" ? "1000" : this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"");
        this.lv_orgCd       = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"ORG_CD"),"");
        this.lv_btnChkYn    = "";
        this.sOptinoArg1    = "";
        this.sOptinoArg2    = "";
        this.sParamArg1     = "";
        this.sParamArg2     = "";
        this.sParamArg3     = "";
        this.sParamArg4     = "";

        this.imageViewerId  = "";								 // 이미지파일 뷰어 표시를 위한 변수 값
        this.fileIndex      = "";								 // 파일 index 값을 저장을 위한 변수 값
        this.lv_casNo       = "";
        this.lvchkColidDs   = "CAS_NO$MIN_CONTENT$MAX_CONTENT";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "CAS_NO$함량 FROM$함량 TO";

        this.atflTpCd = ['','95', 'S2', '9A'];  // 95: MSDS, S2: 시양정보요약서, 9A: LOC
        this.upldAuthExts = [
        	  'PPTX', 'PPT', 'DOCX', 'DOC', 'XLSX', 'XLS', 'PDF', 'HWP'  // Office
        	, 'GIF', 'PNG' , 'JPG', 'JPEG'                               // Image
        	, 'TEXT', 'TXT', 'ZIP'                                       // Normal
        ];
        /**********************************************************************
                03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.form_onload = function(obj,e)
        {
            // 폼에 공통으로 로드시 사용하는 함수.
            this.gfn_formOnLoad(this);

            // 사용자 화면  초기화 함수
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

            var strDs    = "ds_phaseSprCdCombo";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "PHASE_SPR_CD";                          // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "S";                                     // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

            // fn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
            // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.fn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);
        };

        this.fn_PostformInit = function()
        {
        	this.ds_master.setColumn(0,"PHASE_SPR_CD",null);

        	this.ds_search.setColumn(0,"CO_CD",      this.sParamArg1);
        	this.ds_search.setColumn(0,"CUST_PREQNO",this.sParamArg2);
        	this.ds_search.setColumn(0,"CPRTCP_ID",  this.sParamArg3);
        	this.ds_search.setColumn(0,"PRD_ID",     this.sParamArg4);

        	// 조회 호출
        	this.fn_Ret();
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
            if(nErrorCode != 0)
            {
                this.fn_alert(sErrorMsg,"에러정보","","error");
                return false;
            }
        	else
            {
                /*sSvcId (Transaction Id)*/
                switch(sSvcId)
                {
                    case "Init":
                            this.fn_PostformInit();
                        break;
                    case "Ret":
                            this.fn_PostRet();
                        break;
        			case "CasNoCnfYn":
        					this.fn_PostCasNoCnfYn();
        				break;
                    case "Save":
                            this.fn_PostSave();
                        break;
                    case "New":
                            this.fn_PostNew();
                        break;
                    case "Del":
                            this.fn_PostDel();
                        break;
                    default:
                        break;
                }
            }
        };

        this.fn_compontAllControl = function ()
        {
        	var btnEnableTreu   = {
        							btn_exit   : this.btn_exit
        						  , btn_close  : this.btn_close
        						  , btn_chgHst : this.btn_chgHst
        	                      };
        	var btnVisibleFalse = {
        							btn_save : this.btn_save
        	                      };

        	this.fn_componentInitViewControl(this,btnEnableTreu,btnVisibleFalse);
        };
        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function()
        {
            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function()
        {
            if(!this.fn_PreRet())
            {
                return false;
            }
            var strSvc      = "Ret";
            var strUrl      = "/rd/cprtcp-estm-req-mng/select-estm-req-chm-mtl-info-inq.do";
            var strInDs     = "ds_search=ds_search";
            var strOutDs    = "ds_master=ds_master"
        	                + " ds_chmMtlList=ds_chmMtlList"
        					+ " ds_chmMtlAddList=ds_chmMtlAddList"
        					+ " ds_saveFileList=ds_saveFileList";
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
         * 기능 : 조회 후 실행
         */
        this.fn_PostRet = function()
        {
        	// 수정 모드인 경우
        	if(this.sOptinoArg2 == "R")
        	{
        		this.fn_compontAllControl();
        	}

        	// MSDS첨부파일 or 시약요약정보 첨부파일 존재시
        	if(this.ds_saveFileList.getRowCount() > 0)
        	{
        		for(var idx=0; idx<this.ds_saveFileList.rowcount; idx++)
        		{
        			var filePath    = this.ds_saveFileList.getColumn(idx,"ATFL_STOR_PATH");
        			var fileName    = this.ds_saveFileList.getColumn(idx,"ORI_ATFL_NM");
        			var fileOrgName = this.ds_saveFileList.getColumn(idx,"ATFL_NM");
        			var strEtcFds2  = this.ds_saveFileList.getColumn(idx,"ETC_FDS_2");
        			var strAtflNm   = this.ds_saveFileList.getColumn(idx,"ATFL_NM");
        			var strCnt      = this.atflTpCd.indexOf(strEtcFds2);  // strEtcFds2 == "95" ? "1" : "2";

        			this["edt_fileName"+strCnt].set_value(fileOrgName);
        			this.edt_fileName_onchanged(this["edt_fileName"+strCnt],new nexacro.ChangeEventInfo());
        		}
        	}
        };

        /**
         * 규제정보 확인 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_regulation_onclick = function(obj,e)
        {
        	// 규제정보 확인 호출
        	this.fn_CasNoCnfYn();
        };

        /**
         * 기능 : 규제정보 조회 전 실행
         */
        this.fn_PreCasNoCnfYn = function()
        {
        	if(this.ds_chmMtlList.getRowCount() == 0)
        	{
        		this.fn_alert("화학물질 리스트 정보가 존재하지 않습니다.","규제정보","","warning"); // 선택된 값이 없습니다.
                return false;
        	}

        	for(var idx=0; idx<this.ds_chmMtlList.getRowCount(); idx++)
        	{
        		var strCasNo      = this.gfn_nvl(this.ds_chmMtlList.getColumn(idx,"CAS_NO"),     "");
        		var strMinContent = this.gfn_nvl(this.ds_chmMtlList.getColumn(idx,"MIN_CONTENT"),"");
        		var strMaxContent = this.gfn_nvl(this.ds_chmMtlList.getColumn(idx,"MAX_CONTENT"),"");

        		if(this.ds_chmMtlList.getCaseCount("CAS_NO == '" + strCasNo + "'") > 1)
        		{
        			this.fn_alert((idx+1) + "번째 화학물질 CAS_NO가 중복으로 존재 합니다.","규제정보","","question");
        			this.ds_chmMtlList.set_rowposition(idx);
        			this.grd_chmMtlList.setCellPos(this.grd_chmMtlList.getBindCellIndex("body","CAS_NO"));
        			this.grd_chmMtlList.showEditor();
        			return false;
        		}
        		else if(strCasNo == "")
        		{
        			this.fn_alert((idx+1) + "번째 화학물질 CAS_NO를 입력 하셔야 합니다.","규제정보","","question");
        			this.ds_chmMtlList.set_rowposition(idx);
        			this.grd_chmMtlList.setCellPos(this.grd_chmMtlList.getBindCellIndex("body","CAS_NO"));
        			this.grd_chmMtlList.showEditor();
        			return false;
        		}
        		else if(strMinContent == "")
        		{
        			this.fn_alert((idx+1) + "번째 화학물질 함량 FROM를 입력 하셔야 합니다.","규제정보","","question");
        			this.ds_chmMtlList.set_rowposition(idx);
        			this.grd_chmMtlList.setCellPos(this.grd_chmMtlList.getBindCellIndex("body","MIN_CONTENT"));
        			this.grd_chmMtlList.showEditor();
        			return false;
        		}
        		else if(strMaxContent == "")
        		{
        			this.fn_alert((idx+1) + "번째 화학물질 함량 TO를 입력 하셔야 합니다.","규제정보","","question");
        			this.ds_chmMtlList.set_rowposition(idx);
        			this.grd_chmMtlList.setCellPos(this.grd_chmMtlList.getBindCellIndex("body","MAX_CONTENT"));
        			this.grd_chmMtlList.showEditor();
        			return false;
        		}
        	}

        	this.ds_chmMtlListTemp.copyData(this.ds_chmMtlList);

            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 규제정보 조회 실행
         */
        this.fn_CasNoCnfYn = function()
        {
            if(!this.fn_PreCasNoCnfYn())
            {
                return false;
            }
            var strSvc      = "CasNoCnfYn";
            var strUrl      = "/rd/chm-mtl-info-mng/select-regulation-info-cnf-yn.do";
            var strInDs     = "ds_chmMtlList=ds_chmMtlListTemp:a";
            var strOutDs    = "ds_chmMtlListTemp=ds_chmMtlList"
        	                + " ds_chmMtlAddListTemp=ds_chmMtlAddList";
            var strArg      = "PRD_ID="       + nexacro.wrapQuote(this.ds_search.getColumn(this.ds_search.rowposition,"PRD_ID"))
        					+ " CO_CD="       + nexacro.wrapQuote(this.ds_search.getColumn(this.ds_search.rowposition,"CO_CD"))
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        }

        /**
         * 기능 : 규제정보 조회 후 실행
         */
        this.fn_PostCasNoCnfYn = function()
        {
        	if(this.gfn_nvl(this.lv_casNo,"") != "Y")
        	{
        		var findRow = this.ds_chmMtlList.findRow("CAS_NO",this.lv_casNo);
        		this.fn_alert((findRow+1) + "번째 화학물질 CAS_NO가 잘못 기재되었습니다.","규제정보","","question");
        		this.ds_chmMtlList.set_rowposition(findRow);
        		this.grd_chmMtlList.setCellPos(this.grd_chmMtlList.getBindCellIndex("body","CAS_NO"));
        		this.grd_chmMtlList.showEditor();
        		return false;
        	}
        	else
        	{
        		this.ds_chmMtlList.set_updatecontrol(false);
        		for(var idx=0; idx<this.ds_chmMtlListTemp.getRowCount(); idx++)
        		{
        			var strCasNo      = this.ds_chmMtlListTemp.getColumn(idx,"CAS_NO");
        			var strMinContent = this.ds_chmMtlListTemp.getColumn(idx,"MIN_CONTENT");
        			var strMaxContent = this.ds_chmMtlListTemp.getColumn(idx,"MAX_CONTENT");
        			var findRow       = this.ds_chmMtlList.findRowExpr("CAS_NO == '"+ strCasNo +"' && MIN_CONTENT == '" + strMinContent + "' && MAX_CONTENT == '" + strMaxContent + "'");

        			for(var jdx=0; jdx<this.ds_chmMtlListTemp.getColCount(); jdx++)
        			{
        				var colId  = this.ds_chmMtlListTemp.getColID(jdx);
        				var colVal = this.ds_chmMtlListTemp.getColumn(idx,colId);
        				this.ds_chmMtlList.setColumn(findRow,colId,colVal);
        			}
        		}
        		this.ds_chmMtlList.set_updatecontrol(true);
        		this.ds_chmMtlAddList.copyData(this.ds_chmMtlAddListTemp);
        		this.btn_rgntInfo.set_enable(true);
        		this.btn_save.set_enable(true);
        	}
        };
        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 버튼 클릭시
         */
        this.btn_add_onclick = function(obj,e)
        {
            this.fn_New();
        };

        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreNew = function()
        {
            return true;
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function()
        {
            if(!this.fn_PreNew())
            {
                return false;
            }
            var nRow = this.ds_chmMtlList.addRow();
            this.ds_chmMtlList.setColumn(nRow,"CHK","0");           // 업체코드
        };

        /**
         * 기능 : 처리 후 실행
         */
        this.fn_PostNew = function()
        {

        };

        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 클릭시
         */
        this.btn_del_onclick = function(obj,e)
        {
            this.fn_Del();
        };

        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreDel = function()
        {
            // 멀티삭제용도
            if(this.ds_chmMtlList.rowcount < 1 || this.ds_chmMtlList.findRow("CHK",1) == -1)
            {
                this.fn_alert("ERRR000011","삭제정보","","warning"); // 선택된 값이 없습니다.
                return false;
            }

            var result = this.fn_confirm("현재선택행을 삭제하시겠습니까?", "삭제정보","","question" ); // 현재선택행을 삭제하시겠습니까?

            if(result == 0)
            {
                return false;
            }

            // 멀티 삭제 처리
            for(var i = this.ds_chmMtlList.rowcount-1; 0 <= i; i--)
            {
                if(this.ds_chmMtlList.getColumn(i,"CHK") == 1)
                {
                    this.ds_chmMtlList.deleteRow(i);
                }
            }

            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_Del = function()
        {
            if(!this.fn_PreDel())
            {
                return false;
            }
        	this.btn_save.set_enable(true);
        };

        this.fn_PostDel = function()
        {

        };
        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 버튼 클릭시
         */
        this.btn_save_onclick = function(obj,e)
        {
            this.fn_Save();
        };

        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.fn_cmmnChkEssentialItem(this.ds_chmMtlList, this.lvchkColidDs, this.lvchkColNameDs, this.grd_chmMtlList, chkFocusFlg, this);

            if(result[0] != "success")
            {
                this.fn_alert(result[0],"저장정보","","question");
                this.ds_master.set_rowposition(result[1]); //데이터셋 변경
                return false;
            }

        	// MSDS첨부파일 혹은 MSDS경로 모두 미존재시
        	if(this.gfn_isNull(this.edt_fileName1.value) && this.gfn_isNull(this.edt_rndMsdsUrl.value))
        	{
        		this.fn_alert("ERRR000160","저장정보","","question");   // MSDS 파일등록 또는 MSDS 경로 입력을 해주세요
        		this.edt_rndMsdsUrl.setFocus();
        		return false;
        	}

        	var regex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

        	// MSDS URL 경로 정합성 체크
        	if(!this.gfn_isNull(this.edt_rndMsdsUrl.value) && !regex.test(this.edt_rndMsdsUrl.value))
        	{
                this.fn_alert("ERRR000231","저장","MSDS 경로","question");      // &1 URL 주소가 잘못 입력 되었습니다. 해당 URL 주소를 확인 해주세요.
                this.edt_rndMsdsUrl.setFocus();
                return false;
        	}

        	// MSDS최종개정일 필수 입력 체크
        	if(this.gfn_isNull(this.cal_msdsFnlChgDtm.value))
        	{
        		this.fn_alert("ERRS000144","저장정보","MSDS최종개정일","question");   // &1은(는) 필수입력사항입니다.
        		this.cal_msdsFnlChgDtm.setFocus();
        		return false;
        	}

        	// 2023.02.07 sg.park - AI-009 MSDS파일 2년경과 갱신처리
        	// 레터파일(첨부파일 + 최종변경일), 자체증빙(여부 + 최종변경일)
        	var lns={
        		  todayYmd : this.gfn_getDate()
        		, locFile  : { attcFl: this.ds_master.getColumn(0, 'LOC_ATTC_FILENM'), fnlChgDt: this.ds_master.getColumn(0, 'LOC_ATFL_FNL_CHG_DT'  ) }
        		, svronCert: { certYn: this.ds_master.getColumn(0, 'SRVON_CERT_YN'  ), fnlChgDt: this.ds_master.getColumn(0, 'SRVON_CERT_FNL_CHG_DT') }
        	};
        	// 레터(첨부파일 + 최종변경일)
        	if ( !this.gfn_isNull( lns.locFile.attcFl ) || !this.gfn_isNull( lns.locFile.fnlChgDt ) ) {

        		if (  this.gfn_isNull( lns.locFile.attcFl ) ) {
        			this.fn_alert('ERRS000144', '저장', '레터파일 ', 'question');
        			return false;
        		}
        		if (  this.gfn_isNull( lns.locFile.fnlChgDt ) ) {
        			this.fn_alert('ERRS000144', '저장', '레터파일 최종개정일 ', 'question');
        			return false;
        		}
        		if ( !this.gfn_isNull( lns.locFile.fnlChgDt ) && lns.todayYmd < lns.locFile.fnlChgDt ) {
        			alert('레터파일 최종개정일은 미래날짜 입력이 불가능 합니다.');
        			return false;
        		}
        	}

        	// 자체증빙(여부 + 최종변경일)
        	if ( (!this.gfn_isNull( lns.svronCert.certYn ) && 'Y' == lns.svronCert.certYn) || !this.gfn_isNull( lns.svronCert.fnlChgDt ) ) {

        		if (  this.gfn_isNull( lns.svronCert.certYn ) || 'Y' != lns.svronCert.certYn ) {
        			this.fn_alert('ERRS000144', '저장', '자체증빙여부 ', 'question');
        			return false;
        		}
        		if (  this.gfn_isNull( lns.svronCert.fnlChgDt ) ) {
        			this.fn_alert('ERRS000144', '저장', '자체증빙일 ', 'question');
        			return false;
        		}
        		if ( !this.gfn_isNull( lns.svronCert.fnlChgDt ) && lns.todayYmd < lns.svronCert.fnlChgDt ) {
        			alert('자체증빙일은 미래날짜 입력이 불가능 합니다.');
        			return false;
        		}
        	}
        	// /2023.02.07 sg.park - AI-009 MSDS파일 2년경과 갱신처리

        	// 유해화학물질 존재시 시약정보요약서 파일 필수 체크
        	if(this.ds_chmMtlList.getCaseCount("TOXIC_MTL1 == 'Y'")    > 0       /*유독물질*/
        	|| this.ds_chmMtlList.getCaseCount("LMT_MTL1 == 'Y'")      > 0       /*제한물질*/
        	|| this.ds_chmMtlList.getCaseCount("ACCD_PSB_MTL1 == 'Y'") > 0       /*사고대비물질*/
        	|| this.ds_chmMtlList.getCaseCount("PHBT_MTL1 == 'Y'")     > 0       /*금지물질*/
        	|| this.ds_chmMtlList.getCaseCount("PERMIT_MTL1 == 'Y'")   > 0)      /*허가물질*/
        	{
        		if(this.gfn_isNull(this.edt_fileName2.value))
        		{
        			this.fn_alert("ERRR000206","저장정보","","question");   // 유해화학물질이 존재하여 시약정보요약서 파일은 필수로 등록 하셔야 합니다.
        			this.edt_fileName2.setFocus();
        			return false;
        		}
        	}

        	// 30 * 1,024 * 1,024 = 31,457,280 size
        	// 1 * 1,024 * 1,024  =  1,048,576 size
        	if(this.ds_saveFileList.getRowCount() > 0)
        	{
        		for(var idx=0; idx<this.ds_saveFileList.getRowCount(); idx++)
        		{
        			if(this.ds_saveFileList.getColumn(idx,"ETC_FDS_2") == "del")
        			{
        				continue;
        			}

        			if(this.ds_saveFileList.getColumn(idx,"ATFL_LEN") > 31457280)
        			{
        				this.fn_alert("해당 파일 사이즈가 30M를 초과 합니다.","저장정보","","question"); // 해당 파일 사이즈가 {#1}를 초과 합니다.
        				return false;
        			}
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
            var strUrl      = "/rd/cprtcp-estm-req-mng/save-chm-mtl-info-cnf.do";
            var strInDs     = "ds_search=ds_search:a"
        	                + " ds_master=ds_master:a"
                            + " ds_chmMtlList=ds_chmMtlList:u"
        		            + " ds_saveFileList=ds_saveFileList:u";
            var strOutDs    = "ds_chmMtlListTemp=ds_chmMtlList"
        	                + " ds_chmMtlAddListTemp=ds_chmMtlAddList";
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
        this.fn_PostSave = function()
        {
        	this.fn_alert("ERRR000007","저장","","question"); // 정상적으로 저장되었습니다

        	this.close("SAVE");
        };
        /**********************************************************************
                09. 초기화
        ***********************************************************************/
        /**********************************************************************
                10. 출력 함수 선언
        ***********************************************************************/
        /**********************************************************************
                11. ExcelDnwn 엑셀로 출력
        ***********************************************************************/
        /**********************************************************************
                13. Get, Set Method
        ***********************************************************************/
        /**********************************************************************
                14. 기타 Control Event
        ***********************************************************************/
        /**
         * 상품정보 [상품ID & 물질비중 & 성상] 컬럼 값 변경시 oncolumnchanged 이벤트 발생 처리
         */
        this.ds_master_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "MTL_GRAVITY" || e.columnid == "PHASE_SPR_CD"
        	|| e.columnid == "RND_MSDS_URL")
        	{
        		this.btn_save.set_enable(true);
        	}
        };

        /**
         * 화학물질정보 데이터셋 값 변경시 oncolumnchanged 이벤트 발생 처리
         */
        this.ds_chmMtlList_oncolumnchanged = function(obj,e)
        {
        	// CAS_NO or MIN_CONTENT or MAX_CONTENT
        	if(e.columnid == "CAS_NO" || e.columnid == "MIN_CONTENT" || e.columnid == "MAX_CONTENT")
        	{
        		this.btn_rgntInfo.set_enable(false);
        		this.btn_save.set_enable(false);
        	}
        };

        /**
         * 파일등록 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_file_onclick = function(obj,e)
        {
        	var atflTrgtId=obj.id, atflTyIdx=atflTrgtId.substr(atflTrgtId.length-1), atflTyColId='DOC_ID'+atflTyIdx;
        	this.fileIndex     = this.atflTpCd[atflTyIdx];
        	this.imageViewerId = this["edt_fileName"+atflTyIdx];
        	this.imageFileYn   = false;

        	if(obj.text == "파일 등록")
        	{
        		this.FileUploadSingle.deleteItem(0);
        		this.FileUploadSingle.appendItem();
        		this.FileUploadSingle.filefindbuttons[0].click();
        	}
        	else
        	{
        		var result = this.fn_confirm( "ERRR000134", "파일 삭제","", "question" ); // 등록된 파일을 삭제하시겠습니까?
        		if(result)
        		{
        			var delRow = this.ds_saveFileList.findRow("ETC_FDS_2",this.fileIndex);
        			this.ds_saveFileList.setColumn(delRow,"ETC_FDS_2","del");
        			this.imageViewerId.set_value("");
        			this.edt_fileName_onchanged(this.imageViewerId,new nexacro.ChangeEventInfo());
        		}
        	}
        };

        /**
         * 이미지등록 아이템 값 변경시 onitemchanged 이벤트 발생 처리
         */
        this.FileUploadSingle_onitemchanged = function(obj,e)
        {
        	var sCompValue = this.FileUploadSingle.value; // 파일 업로드 로컬패스(전용브라우저 가능)
        	var start = sCompValue.lastIndexOf(".");	   						// [object Grid]

        	if( start > -1)
        	{
        		sCompValue = sCompValue.substr(start + 1, sCompValue.length);  // 확장자명
        	}

        // 	if(!(sCompValue.toUpperCase() == "PPTX" || sCompValue.toUpperCase() == "PPT"
        // 	  || sCompValue.toUpperCase() == "DOCX" || sCompValue.toUpperCase() == "DOC"
        // 	  || sCompValue.toUpperCase() == "XLS"  || sCompValue.toUpperCase() == "XLSX"
        // 	  || sCompValue.toUpperCase() == "TEXT" || sCompValue.toUpperCase() == "ZIP"
        // 	  || sCompValue.toUpperCase() == "TXT"  || sCompValue.toUpperCase() == "PDF"
        // 	  || sCompValue.toUpperCase() == "PNG"  || sCompValue.toUpperCase() == "JPG"
        // 	  || sCompValue.toUpperCase() == "GIF"  || sCompValue.toUpperCase() == "JPEG"
        // 	  || sCompValue.toUpperCase() == "HWP"))
        // 	{
        	if ( this.upldAuthExts.indexOf( sCompValue.toUpperCase() ) < 0 ) {
        		this.fn_alert("파일형식이 아닙니다.","파일 정보","","information");  // 파일형식이 아닙니다.
        		return false;
        	}

        	var sFilePath = this.FileUploadSingle.value; 						// 파이로 로컬풀패스
        	var dirExpt   = nexacro.toNumber(sFilePath.lastIndexOf("\\"))+1;    // 파일이름 시작위치
        	var sFileName = sFilePath.substr(dirExpt);                          // 파일명

        //	var docRegId  = this.fileIndex == "95" ? this.gfn_nvl(this.ds_master.getColumn(0,"DOC_ID1"),"") : this.gfn_nvl(this.ds_master.getColumn(0,"DOC_ID2"),"");
        	var atflTrgt  = this.imageViewerId, atflTyIdx = atflTrgt.id.substr(atflTrgt.id.length-1), atflTyColId = 'DOC_ID'+atflTyIdx;
        	var docRegId  = this.gfn_nvl(this.ds_msdsMaster.getColumn(0, ('3'==atflTyIdx ? 'DOC_ID1' : atflTyColId)), '');  // MSDS파일과 동일한 파일등록ID를 사용하게 변경

        	var objEnv  = nexacro.getEnvironment();
        	var svcUrl  = objEnv.services["svcUrl"].url;               			        	 // web서버 URL ex)http://localhost:8080/
        	var strUrl  = svcUrl + "rd/file-upload-dowload/save-file-upload-dowload.do?";    // BLOB변환 && 파일업로드 기능
        		strUrl += "&docRegId="+ docRegId;
        		strUrl += "&etcFds2=" + this.fileIndex;

        	var bSucc = this.FileUploadSingle.upload(strUrl);		 // 파일 업로드
        };

        /**
         * 이미지 첨부파일 업로드 성공후 onsuccess 이벤트 발생 처리
         */
        this.FileUploadSingle_onsuccess = function(obj,e)
        {
        	this.ds_uploadResult.assign(e.datasets[0]);
        	this.ds_uploadResult.clear();
        	this.ds_uploadResult.copyData(e.datasets[0]);

        	var delRow = this.ds_saveFileList.findRow("ETC_FDS_2", this.fileIndex);
        	this.ds_saveFileList.setColumn(delRow,"ETC_FDS_2","del");

        	var strAtflNm = this.ds_uploadResult.getColumn(0,"ATFL_NM");
        	var textArry  = "";

        	for(var idx=0; idx<strAtflNm.length; idx++)
        	{
        		if(strAtflNm.charCodeAt(idx) != "32")
        		{
        		    textArry += String.fromCharCode(strAtflNm.charCodeAt(idx));
        		}
        	}

        	if(!this.gfn_isNull(textArry))
        	{
        		this.ds_uploadResult.setColumn(0,"ATFL_NM",textArry);
        	}

        	var nRow = this.ds_saveFileList.addRow();
        	this.ds_saveFileList.copyRow(nRow,this.ds_uploadResult);         	// 싱글 파일 패스

        // 	if(this.fileIndex == "95")
        // 	{
        // 		// 최초 파일 등록시 상품문서등록ID Set
        // 		if(this.gfn_nvl(this.ds_master.getColumn(0,"DOC_ID1"),"") == "")
        // 		{
        // 			this.ds_master.setColumn(0,"DOC_ID1",this.ds_uploadResult.getColumn(0,"DOC_REG_ID"));
        // 		}
        // 	}
        // 	else
        // 	{
        // 		// 최초 파일 등록시 상품문서등록ID Set
        // 		if(this.gfn_nvl(this.ds_master.getColumn(0,"DOC_ID2"),"") == "")
        // 		{
        // 			this.ds_master.setColumn(0,"DOC_ID2",this.ds_uploadResult.getColumn(0,"DOC_REG_ID"));
        // 		}
        // 	}
        	var atflTrgt  = this.imageViewerId, atflTyIdx = atflTrgt.id.substr(atflTrgt.id.length-1), atflTyColId='DOC_ID'+atflTyIdx;

        	// 최초 파일 등록시 상품문서등록ID Set
        	var sDocRegId = this.ds_uploadResult.getColumn(0, 'DOC_REG_ID');
        	if (this.gfn_nvl(this.ds_master.getColumn(0, atflTyColId), '') == '') {
        		this.ds_master.setColumn(0, atflTyColId, this.ds_uploadResult.getColumn(0, "DOC_REG_ID"));
        	}
        	if ('3'==atflTyIdx) { this.ds_msdsMaster.setColumn(0, 'LOC_ATTC_FILEID', sDocRegId); }

        	this.btn_save.set_enable(true);
        	this.imageViewerId.set_value(this.ds_saveFileList.getColumn(nRow,"ATFL_NM"));
        	this.edt_fileName_onchanged(this.imageViewerId,new nexacro.ChangeEventInfo());
        };

        /**
         * 첨부파일 다운로드 클릭시 oneditclick  이벤트 발생 처리
         */
        this.edt_fileName_oneditclick = function(obj,e)
        {
        	var atflTrgtId=obj.id, atflTyIdx=atflTrgtId.substr(atflTrgtId.length-1), atflTyColId='DOC_ID'+atflTyIdx;
        	this.imageViewerId = this['edt_fileName'+ atflTyIdx];
        	this.fileIndex     = this.atflTpCd[atflTyIdx];
        	var findRow        = this.ds_saveFileList.findRow("ETC_FDS_2",this.fileIndex);

        	if(this.gfn_nvl(this.imageViewerId.value, '') != '') {
        		this.ds_uploadResult.clearData();
        		var nRow = this.ds_uploadResult.addRow();
        		this.ds_uploadResult.copyRow(nRow, this.ds_saveFileList, findRow);

        		this.fn_fileDownload(this.ds_uploadResult,this.ds_downLoad,this.FileDownload);
        	}
        };

        /**
         * 파일 첨부파일 변경시 onchanged 이벤트 발생 처리
         */
        this.edt_fileName_onchanged = function(obj,e)
        {
        	var atflTrgtId=obj.id, atflTyIdx = atflTrgtId.substr(atflTrgtId.length-1);
        	this['btn_file'+atflTyIdx].set_text('파일 등록');
        	obj.set_cursor('');

        	if (obj.value != undefined && obj.value != '') {
        		obj.set_cursor('pointer');
        		this['btn_file'+atflTyIdx].set_text('삭제');
        	}
        };

        /**
         * 시약정보URL 버튼 클릭시 onclick  이벤트 발생 처리
         */
        this.btn_rgntInfo_onclick = function(obj,e)
        {
        	var strCasNo = "";
        	var strTo    = "";

        	for(var idx=0; idx<this.ds_chmMtlList.getRowCount(); idx++)
        	{
        		if(strCasNo != "")
        		{
        			strCasNo += ",";
        			strTo    += ",";
        		}

        		strCasNo += this.ds_chmMtlList.getColumn(idx,"CAS_NO");
        		strTo    += this.ds_chmMtlList.getColumn(idx,"MAX_CONTENT");
        	}

        	var objApp = nexacro.getApplication();
            var appUrl      = objApp.xadl;
            var appUrlSplit = appUrl.split("/");
        	var objEnv 		= nexacro.getEnvironment();
         	var service     = objEnv.services["svcurl"];	// TypeDefinition 접근하기위한객체
        	var protocol 	= appUrlSplit[0];   			// 프로토콜이 : RUNTIME(file:),WEB(http)
        	var url         = "http://121.50.29.169:18080";

            if(appUrlSplit[2] == "adminssp.serveone.co.kr")
            {
                // 운영 시약정보 Site
        		url = "https://cms.serveone.co.kr:18081";
            }

        	// 시약정보 Site
        	system.execBrowser(url+"/nextMsds/business/interface/reagentView?reagent_key=copa&cas_no="+strCasNo+"&cas_ratio="+strTo);
        };

        /**
         * 닫기 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_close_onclick = function(obj,e)
        {
        	// ERRR000060 : 수정을 취소하고 목록으로 이동하시겠습니까?
        	// ERRC000087 : 취소하시겠습니까?
        	var strMsg = this.sOptinoArg2 == "U" ? "ERRR000060" : "ERRC000087";
        	var result = this.fn_confirm(strMsg, "취소","", "question" );

            if(result == 0)
            {
                return false;
            }

        	 this.fn_saveMultiFileDelUpdate("CLOSE");
        };

        /**
         * 취소 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_exit_onclick = function(obj,e)
        {
        	// ERRR000060 : 수정을 취소하고 목록으로 이동하시겠습니까?
        	// ERRC000087 : 취소하시겠습니까?
        	var strMsg = this.sOptinoArg2 == "U" ? "ERRR000060" : "ERRC000087";
        	var result = this.fn_confirm(strMsg, "취소","", "question" );

            if(result == 0)
            {
                return false;
            }

        	this.fn_saveMultiFileDelUpdate("EXIT");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_exit.addEventHandler("onclick",this.btn_exit_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_rgntInfo.addEventHandler("onclick",this.btn_rgntInfo_onclick,this);
            this.edt_fileName2.addEventHandler("onchanged",this.edt_fileName_onchanged,this);
            this.edt_fileName2.addEventHandler("oneditclick",this.edt_fileName_oneditclick,this);
            this.btn_regulation.addEventHandler("onclick",this.btn_regulation_onclick,this);
            this.btn_file2.addEventHandler("onclick",this.btn_file_onclick,this);
            this.FileUploadSingle.addEventHandler("onitemchanged",this.FileUploadSingle_onitemchanged,this);
            this.FileUploadSingle.addEventHandler("onsuccess",this.FileUploadSingle_onsuccess,this);
            this.FileDownload.addEventHandler("onerror",this.FileDownload_onerror,this);
            this.FileDownload.addEventHandler("onsuccess",this.FileDownload_onsuccess,this);
            this.edt_fileName1.addEventHandler("onchanged",this.edt_fileName_onchanged,this);
            this.edt_fileName1.addEventHandler("oneditclick",this.edt_fileName_oneditclick,this);
            this.btn_file1.addEventHandler("onclick",this.btn_file_onclick,this);
            this.edt_fileName3.addEventHandler("oneditclick",this.edt_fileName_oneditclick,this);
            this.edt_fileName3.addEventHandler("onchanged",this.edt_fileName_onchanged,this);
            this.btn_file3.addEventHandler("onclick",this.btn_file_onclick,this);
            this.rdo_svronCertYn.addEventHandler("onitemchanged",this.rdo_svronCertYn_onitemchanged,this);
            this.ds_master.addEventHandler("oncolumnchanged",this.ds_master_oncolumnchanged,this);
            this.ds_chmMtlList.addEventHandler("oncolumnchanged",this.ds_chmMtlList_oncolumnchanged,this);
        };
        this.loadIncludeScript("SSP_BO_RD_70.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
