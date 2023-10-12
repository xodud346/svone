(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_LA_04");
            this.set_titletext("등록상품정보");
            this.set_scrolltype("both");
            if (Form == this.constructor)
            {
                this._setFormPosition(1120,1004);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"AUTO_LOGIC_EM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"AUTO_LOGIC_EM_YN\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_basicInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGPLC_CTRY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MULT_SELL_UNIT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_REG_REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"QCK_DLV_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_DTL_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mroAttr", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_MRO_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_ATTR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRNM\" type=\"STRING\" size=\"256\"/><Column id=\"PRVL\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sspAttr", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRNM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRVL\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_category", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_addInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CAS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HUB_HNL_PSB_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_LT\" type=\"STRING\" size=\"256\"/><Column id=\"HRM_CHM_MTL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RGNT_SELL_PSB_YN\" type=\"STRING\" size=\"256\"/><Column id=\"IF_TOXIC_MTL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"IF_RESTRICTED_MTL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"IF_ACCIDENT_MTL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"IF_BAN_MTL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PERMIT_MTL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TXTN_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"INVN_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sspAddInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BRND_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HASH_TAG\" type=\"STRING\" size=\"256\"/><Column id=\"BG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BG_APLY_STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BG_APLY_END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BG_IMG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bgList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_exhbnInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"EXHBN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_basicInfoInit", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGPLC_CTRY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MULT_SELL_UNIT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_REG_REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"QCK_DLV_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_DTL_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mroAttrInit", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_MRO_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_ATTR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRNM\" type=\"STRING\" size=\"256\"/><Column id=\"PRVL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sspAttrInit", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRNM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRVL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_categoryInit", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_addInfoInit", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CAS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HUB_HNL_PSB_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_LT\" type=\"STRING\" size=\"256\"/><Column id=\"HRM_CHM_MTL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RGNT_SELL_PSB_YN\" type=\"STRING\" size=\"256\"/><Column id=\"IF_TOXIC_MTL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"IF_RESTRICTED_MTL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"IF_ACCIDENT_MTL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"IF_BAN_MTL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"IF_PERMIT_MTL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TXTN_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"INVN_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sspAddInfoInit", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BRND_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HASH_TAG\" type=\"STRING\" size=\"256\"/><Column id=\"BG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BG_APLY_STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BG_APLY_END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BG_IMG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bgListInit", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_exhbnInfoInit", this);
            obj._setContents("<ColumnInfo><Column id=\"EXHBN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdNuseRsnCd", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdNuseRsnCdInit", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01_00_01_02_00_00_00_00","0","36","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_03_00","0","46","1120","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_03_07","0","77","1120","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_03_06","0","139","1120","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_03_05","0","170","1120","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_03_04","0","201","1120","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_03_03","0","232","1120","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdNmwww","370","46","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("대표상품ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("stc_orgplc","745","77","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("S-MRO 상품상태");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("stc_hpeUprc","745","139","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("공용전용구분");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("stc_hpeQty","745","170","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("원산지");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00","0","0","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdIdsss","0","46","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("상품ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_03_01","0","77","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("상품명");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("stc_reprSpec","0","139","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("대표규격");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdClcd","0","170","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("주문단위");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("stc_hrmChmYn","0","201","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("배수주문수량");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_03_01_00_02","370","232","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("대표상품그룹등록일");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_01","0","296","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_prdNm00","745","46","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("대표상품그룹ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("stc_hpeQty00","370","170","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("stc_pubOnlySpr00","0","232","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("몰구분");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("stc_pubOnlySpr00_00","745","232","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("SSP등록일");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_00_00","0","377","555","240",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00","0","346","555","32",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00","0","346","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("카테고리");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_00_00","0","377","130","240",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("속성");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mroAttr","140","388","404","219",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_mroAttr");
            obj.set_autofittype("col");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"150\"/><Column size=\"170\"/><Column size=\"0\"/><Column size=\"68\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"MRO_ATTR_CD\"/><Cell col=\"1\" text=\"속성명\"/><Cell col=\"2\" text=\"속성값\"/><Cell col=\"3\" text=\"ATTR_SEQ\"/><Cell col=\"4\" text=\"노출여부\"/></Band><Band id=\"body\"><Cell text=\"bind:MRO_ATTR_CD\"/><Cell col=\"1\" text=\"expr:MAND_YN==&quot;Y&quot;?PRNM+&quot;&lt;fc v=&apos;red&apos;&gt; *&lt;/fc&gt;&quot;:PRNM\" displaytype=\"decoratetext\"/><Cell col=\"2\" text=\"bind:PRVL\"/><Cell col=\"3\" text=\"bind:ATTR_SEQ\"/><Cell col=\"4\" text=\"bind:EXPS_YN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","315","215","30",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("■ S-MRO 카테고리/속성 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_01_00","555","316","10","302",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_00_00_00","565","377","555","240",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_00","565","346","555","32",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","565","346","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("카테고리");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00","565","377","130","240",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("속성");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mroAttr00","705","388","405","219",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_sspAttr");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_nodatatext("카테고리를 선택하세요");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"150\"/><Column size=\"170\"/><Column size=\"0\"/><Column size=\"56\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"PRD_ATTR_CD\"/><Cell col=\"1\" text=\"속성명\"/><Cell col=\"2\" text=\"속성값\"/><Cell col=\"3\" text=\"SRT_SO\"/><Cell col=\"4\" text=\"노출여부\"/></Band><Band id=\"body\"><Cell text=\"bind:PRD_ATTR_CD\"/><Cell col=\"1\" text=\"expr:MAND_YN==&quot;Y&quot;?PRNM+&quot;&lt;fc v=&apos;red&apos;&gt; *&lt;/fc&gt;&quot;:PRNM\" cssclass=\"grd_WF_bg_image\" displaytype=\"decoratetext\"/><Cell col=\"2\" text=\"bind:PRVL\" displaytype=\"editcontrol\" edittype=\"readonly\"/><Cell col=\"3\" text=\"bind:SRT_SO\"/><Cell col=\"4\" text=\"bind:EXPS_YN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00_00","565","315","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("■ SSP 카테고리/속성 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_category","810","350","300","24",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_innerdataset("ds_category");
            obj.set_codecolumn("PRD_CLCD");
            obj.set_datacolumn("FULL_PRD_CLSF_NM");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_01_01","0","617","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_00_00_01","0","720","554","32",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_01","0","689","554","32",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_01","0","658","554","32",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00_01","0","658","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("Hub취급가능여부");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01","0","720","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("과면세구분");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00_01","0","627","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("■ S-MRO 부가정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","-1130","630","110","110",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("image");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00_00_00","0","689","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("화학물질여부");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_01_00","0","751","554","62",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00_00_00_00","0","751","130","62",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("유해화학물질여부");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00_01_00","277","658","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("평균배송일");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00_00_01","277","689","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("자사허가여부");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_00","277","720","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("재고여부");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_hrmChmYn","140","757","67","23",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("유독물질");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("N");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_hrmChmYn00","140","784","67","23",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("금지물질");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("N");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_hrmChmYn01","250","757","67","23",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("제한물질");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("N");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_hrmChmYn01_00","350","757","91","23",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("사고대비물질");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("N");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_hrmChmYn00_00","250","784","67","23",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("허가물질");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("N");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_01_00_00","555","627","10","192",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_00_00_02","565","781","555","32",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_01_01","565","689","555","32",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_02","565","658","555","32",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00_02","565","658","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("브랜드명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_02","565","781","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("전시상품구분");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00_02","565","627","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("■ SSP 부가정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00","-624","630","110","110",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("image");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00_00_02","565","689","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("해시Tag");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_01_00_00","565","720","555","62",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00_00_00_01","565","720","130","62",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("배지적용");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_dispPrdSprCd","705","782",null,"31","40",null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_cssclass("sta_cm_box02L_txt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_brndNm","705","662","375","24",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_maxlength("10");
            obj.set_readonly("true");
            obj.set_text("edt_brndNm");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_hashTag","705","693","375","24",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_readonly("true");
            obj.set_text("edt_hashTag");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_bg","705","724","54","54",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_cssclass("productImage");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_bg","968","725","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_codecolumn("BG_SEQ");
            obj.set_datacolumn("BG_NM");
            obj.set_innerdataset("ds_bgList");
            obj.set_readonly("true");
            obj.set_visible("false");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_bgAplyStrDtm","769","753","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static59","876","753","9","24",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_bgAplyEndDtm","890","753","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_noLimit","997","753","67","24",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("제한없음");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_01_02","0","813","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","856","1120","128",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_binddataset("ds_exhbnInfo");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_scrollbartype("none default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"450\"/><Column size=\"100\"/><Column size=\"15\"/><Column size=\"100\"/><Column size=\"450\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"기획전명\"/><Cell col=\"1\" colspan=\"3\" text=\"기획전 기간\"/><Cell col=\"4\" text=\"적용 쿠폰\"/></Band><Band id=\"body\"><Cell text=\"bind:EXHBN_NM\"/><Cell col=\"1\" text=\"bind:DISP_STR_DT\" border=\"0px none, 0px solid, 1px solid #cbcbcb, 0px none\"/><Cell col=\"2\" text=\"~\" border=\"0px none, 0px solid, 1px solid #cbcbcb, 0px none\"/><Cell col=\"3\" text=\"bind:DISP_END_DT\"/><Cell col=\"4\" text=\"bind:CPN_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_00_00_00","0","846","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_pubOnlySpr01","370","201","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("SSP 상품상태");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_01_02_00","0","984","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00_01_00","0","824","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("■ 기획전 대상 여부");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","140","50","220","24",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm","140","81","595","24",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_attrVal","140","143","595","24",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_repPrdId","510","50","225","24",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_sellUnitCd","140","174","220","24",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_order","140","205","220","24",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_reprRegDtm","510","236","225","24",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrNm","600","174","135","24",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mallSprCd","140","236","220","24",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_regDtm","883","236","227","24",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_reprPrdGrpId","883","50","227","24",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mroPrdStatsNm","883","81","227","24",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pubOnlySprCd","883","143","227","24",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_orgplcCtryNm","973","174","137","24",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mnfrCd","510","174","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_orgplcCtryCd","883","174","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","16","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("■ 상품 기본 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mroPrdClcd","140","350","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mroPrdClsfNm","270","350","275","24",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdClcd","705","350","95","24",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_readonly("true");
            obj.set_text("C0100005");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dlvLt","417","662","127","24",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_hubHnlPsbYn","140","662","127","24",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_hrmChmMtlYn","140","693","127","24",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_txClcd","140","724","127","24",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_invnYn","417","724","127","24",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dlvLt00","417","693","127","24",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bgNm","769","725","191","24",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_03_03_00","0","263","1120","32",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_03_01_00_02_00","0","263","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_text("SSP최종수정일");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("stc_pubOnlySpr","370","263","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("빠른배송여부");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_qckDlvYn","510","269","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_sspUpdDtm","140","267","220","24",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_pubOnlySpr00_00_00","745","263","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_prdUseYn","510","205","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("false");
            obj.set_enableevent("false");
            obj.set_readonly("true");
            var rdo_prdUseYn_innerdataset = new nexacro.NormalDataset("rdo_prdUseYn_innerdataset", obj);
            rdo_prdUseYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(rdo_prdUseYn_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_prdNuseRsnCd","660","205","450","24",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_innerdataset("ds_prdNuseRsnCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_03_07_00","0","108","1120","32",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_sspPrdNm","140","112","970","24",null,null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_03_01_00","0","108","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_text("SSP상품명");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1120,1004,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","chk_hrmChmYn","value","ds_addInfo","TOXIC_MTL1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","chk_hrmChmYn01","value","ds_addInfo","LMT_MTL1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","chk_hrmChmYn01_00","value","ds_addInfo","ACCD_PSB_MTL1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","chk_hrmChmYn00","value","ds_addInfo","PHBT_MTL2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","chk_hrmChmYn00_00","value","ds_addInfo","PERMIT_MTL2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","sta_dispPrdSprCd","text","ds_sspAddInfo","DISP_PRD_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edt_brndNm","value","ds_sspAddInfo","BRND_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","edt_hashTag","value","ds_sspAddInfo","HASH_TAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","img_bg","tooltiptext","ds_sspAddInfo","BG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","cmb_bg","value","ds_sspAddInfo","BG_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","cal_bgAplyStrDtm","value","ds_sspAddInfo","BG_APLY_STR_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","cal_bgAplyEndDtm","value","ds_sspAddInfo","BG_APLY_END_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","edt_prdId","value","ds_basicInfo","PRD_ID_VIEW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt_prdNm","value","ds_basicInfo","PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","edt_attrVal","value","ds_basicInfo","ATTR_VAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","edt_repPrdId","value","ds_basicInfo","REPR_PRD_ID_VIEW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","edt_sellUnitCd","value","ds_basicInfo","SELL_UNIT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edt_order","value","ds_basicInfo","MULT_SELL_UNIT_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edt_reprRegDtm","value","ds_basicInfo","REPR_REG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edt_mallSprCd","value","ds_basicInfo","MALL_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edt_regDtm","value","ds_basicInfo","SSP_REG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","edt_reprPrdGrpId","value","ds_basicInfo","REPR_PRD_GRP_ID_VIEW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","edt_mroPrdStatsNm","value","ds_basicInfo","MRO_PRD_STATS_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","edt_pubOnlySprCd","value","ds_basicInfo","PUB_ONLY_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","chk_qckDlvYn","value","ds_basicInfo","MROPRD_QCK_DLV_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edt_mnfrCd","value","ds_basicInfo","MNFR_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","edt_mnfrNm","value","ds_basicInfo","MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","edt_orgplcCtryCd","value","ds_basicInfo","ORGPLC_CTRY_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","edt_orgplcCtryNm","value","ds_basicInfo","ORGPLC_CTRY_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","edt_mroPrdClcd","value","ds_mroAttr","MRO_PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_mroPrdClsfNm","value","ds_mroAttr","FULL_MRO_PRD_CLSF_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","edt_dlvLt","value","ds_addInfo","DLV_LT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","edt_dlvLt00","value","ds_addInfo","RGNT_SELL_PSB_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","edt_hubHnlPsbYn","value","ds_addInfo","HUB_HNL_PSB_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","edt_hrmChmMtlYn","value","ds_addInfo","CHM_MTL_PRD_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","edt_txClcd","value","ds_addInfo","TX_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","edt_invnYn","value","ds_addInfo","INVN_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_bgNm","value","ds_sspAddInfo","BG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt_sspUpdDtm","value","ds_basicInfo","SSP_UPD_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","rdo_prdUseYn","value","ds_basicInfo","PRD_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","cmb_prdNuseRsnCd","value","ds_basicInfo","PRD_NUSE_RSN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","edt_sspPrdNm","value","ds_basicInfo","SSP_PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CA_22_3.xfdl","OD::odUtils.xjs");
        this.addIncludeScript("SSP_BO_CA_22_3.xfdl","RD::rdUtils.xjs");
        this.registerScript("SSP_BO_CA_22_3.xfdl", function() {
        /******************************************************************************
        PROJECT NAME : C:\Users\spaa\git\ssp-bo\src\main\ui\RD\SSP_BO_LA_04_3.xfdl
        CREATION DATES : 2022/03/21
        CREATER : 이택우
        *******************************************************************************/

        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        this.executeIncludeScript("RD::rdUtils.xjs"); /*include "RD::rdUtils.xjs"*/;
        this.fv_oApp = nexacro.getApplication();	//application object

        this.totalCount = 0;
        this.prdClcd = "";
        this.mallSprCd = "10";

        this.localPrdId = "";
        this.localPrdNm = "";
        this.localPrdIdView = "";
        this.localBzplcId = "";
        this.localBzplcNm = "";
        this.localOprUnitId = "";
        this.localOprUnitNm = "";

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){

        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.fn_odCommLoading();
        	this.totalCount = 0;
        	this.prdClcd = "";
        };

        this.fn_userInit = function(prdId, prdNm, bzplcId, bzplcNm) {
        	this.localPrdId = prdId;
        	this.localPrdNm = prdNm;
        	this.localBzplcId = bzplcId;
        	this.localBzplcNm = bzplcNm;
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        // //공통코드조회
        this.fn_commonCodeSearch = function(){
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_prdNuseRsnCd=ds_output1";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "PRD_NUSE_RSN_CD");
        	this.ds_search.setColumn(0, "LANG_CD", "KO");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };


        //조회
        this.fn_getBasicInfo = function(bInit)	{
        	this.ds_search.setColumn(0, "CO_CD", this.fv_coCd);
        	this.ds_search.setColumn(0, "PRD_ID", this.fn_lpad(this.localPrdId,18,"0"));
        	this.ds_search.setColumn(0, "MALL_SPR_CD", this.mallSprCd);
        	this.fn_commonCodeSearch();
        	var sSvcId = "getBasicInfo";
        	var sUrl = "/pc/pc-prc-mng/get-basic-info.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_basicInfo=basicInfo ds_mroAttr=categoryAttrInfo ds_category=categoryInfo ds_sspAttr=attrInfo ds_addInfo=addInfo ds_sspAddInfo=sspAddInfo ds_bgList=bgList ds_exhbnInfo=exhbnInfo";
        	var arg = "";
        	var callback = "fn_callBack";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        };

        //
        //해당카테고리 내용 조회
        this.fn_attrInfo = function(){
        	var sSvcId = "attrInfo";
        	var sUrl = "/pr/prd-mng/select-ssp-attr-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_sspAttr=attrInfo";
        	var arg;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack", false);
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(errorCode != 0 && errorCode != -100){
        		alert(errorMsg);
        	}

        	switch(svcID){
        		case "commonCodeSearch":
        			this.ds_prdNuseRsnCd.insertRow(0);
        			this.ds_prdNuseRsnCd.setColumn(0, "COM_DTL_CD", "");
        			this.ds_prdNuseRsnCd.setColumn(0, "COM_DTL_CD_NM", "선택");

        			this.cmb_prdNuseRsnCd.set_index(0);

        			this.fn_setUseYnInit();//사용여부 컨트롤

        			break;

        		case "getBasicInfo" :


        			this.cmb_prdNuseRsnCd.set_index(0);
        			this.fn_setUseYnInit();//사용여부 컨트롤
        			this.ds_search.setColumn(0, "PRD_CLCD", this.ds_basicInfo.getColumn(0,"PRD_CLCD"));
        			this.ds_search.setColumn(0, "MRO_PRD_CLCD", this.ds_basicInfo.getColumn(0,"MRO_PRD_CLCD"));
        			this.prdClcd = this.ds_basicInfo.getColumn(0,"PRD_CLCD");

        			//SSP 카테고리 / 속성정보
        			this.ds_category.insertRow(0);
        			this.ds_category.setColumn(0, "CO_CD", "");
                    this.ds_category.setColumn(0, "PRD_CLCD", "");
                    this.ds_category.setColumn(0, "PRD_CLSF_NM", "선택");

        			if(!this.gfn_isNull(this.prdClcd)){
        				this.edt_prdClcd.set_value(this.prdClcd);
        				this.cmb_category.set_value(this.prdClcd);
        				this.ds_search.setColumn(0, "PRD_CLCD", this.prdClcd);
        				//this.fn_attrInfo();

        				//부모창에 고시품목 전달
        				//this.fn_callParentNotiItmId(this.prdClcd);
        				var delArr = this.ds_sspAttr.extractRowsNF("DEL_YN=='Y'");
        				this.ds_sspAttr.deleteMultiRows(delArr);
        			}
        			else if (this.ds_category.rowcount==1) {
        				this.cmb_category.set_index(0);
        			}



        			var ATFL_STOR_PATH = this.ds_sspAddInfo.getColumn(0, "ATFL_STOR_PATH");
        			var ORI_ATFL_NM = this.ds_sspAddInfo.getColumn(0, "ORI_ATFL_NM");
        			var ATFL_NM = this.ds_sspAddInfo.getColumn(0, "ATFL_NM");
        			var newPath = this.fn_imageViewerUrl(ATFL_STOR_PATH, ATFL_NM, ORI_ATFL_NM);
        			this.img_bg.set_image(newPath);

        			if(String(this.ds_sspAddInfo.getColumn(0, "BG_APLY_END_DTM")).substring(0, 8)=='99991231'){
        					this.chk_noLimit.set_value("Y");
        			}

        			break;
        		case "attrInfo" :

        			var delArr = this.ds_sspAttr.extractRowsNF("DEL_YN=='Y'");
        			this.ds_sspAttr.deleteMultiRows(delArr);


        			break;
        		default:
        			break;
        	}
        };


        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        this.cmb_category_onitemchanged = function(obj,e)
        {
        // 	this.ds_search.setColumn(0, "PRD_CLCD", obj.value);
        // 	this.fn_attrInfo();
        // 	this.edt_prdClcd.set_value(obj.value);
        //
        	//카테고리 상품군 변경 시
        };
        //데이터셋 초기화
        this.fn_dsInit=function(){
        	this.ds_basicInfo.copyData(this.ds_basicInfoInit,true);
        	this.ds_mroAttr.copyData(this.ds_mroAttrInit,true);
        	this.ds_sspAttr.copyData(this.ds_sspAttrInit,true);
        	this.ds_category.copyData(this.ds_categoryInit,true);
        	this.ds_addInfo.copyData(this.ds_addInfoInit,true);
        	this.ds_sspAddInfo.copyData(this.ds_sspAddInfoInit,true);
        	this.ds_bgList.copyData(this.ds_bgListInit,true);
        	this.ds_exhbnInfo.copyData(this.ds_exhbnInfoInit,true);
        	this.ds_prdNuseRsnCd.copyData(this.ds_prdNuseRsnCdInit,true);
        	this.sta_orgplcCtryCd.set_text("");
        	this.edt_mnfrNm.set_value("");
        }


        this.fn_setUseYnInit = function() {
        	if(this.ds_prdNuseRsnCd.rowcount>0 && this.ds_basicInfo.rowcount>0){
        		var PRD_USE_YN = this.ds_basicInfo.getColumn(0, "PRD_USE_YN");	//사용여부
        		var MRO_PRD_STATS_CD = this.ds_basicInfo.getColumn(0, "MRO_PRD_STATS_CD");	//MRO상태
        		var REPR_PRD_GRP_USEYN = this.ds_basicInfo.getColumn(0, "REPR_PRD_GRP_USEYN");	//대표상품그룹사용여부
        		var PRD_NUSE_RSN_CD = this.ds_basicInfo.getColumn(0, "PRD_NUSE_RSN_CD");	//미사용사유

        		if(PRD_USE_YN=='N' && PRD_NUSE_RSN_CD=='10'){	//S-MRO에서 OGG로 미사용으로 연동처리시 비활성화
        			this.rdo_prdUseYn.set_enable(false);
        			this.cmb_prdNuseRsnCd.set_enable(false);
        		}else{
        			var bNotExists = true;
        			for(var i=0; i<this.ds_prdNuseRsnCd.rowcount; i++){
        				var nuseCd = this.ds_prdNuseRsnCd.getColumn(i, "COM_DTL_CD");
        				if(nuseCd == PRD_NUSE_RSN_CD && nuseCd == '10'){
        					bNotExists = false;
        				}
        			}
        			if(bNotExists){
        				this.ds_prdNuseRsnCd.set_filterstr("COM_DTL_CD!='10'");
        			}

        			//MRO_PRD_STATS_CD
        			//0		S-MRO 사용
        			//10	S-MRO 휴면화
        			//20	S-MRO 종결
        			//MRO상태코드가 사용이면서 그룹사용여부가 Y일때만 사용여부 활성화
        			if(MRO_PRD_STATS_CD == '00' && REPR_PRD_GRP_USEYN == 'Y'){
        				//this.rdo_prdUseYn.set_enable(true);
        				this.rdo_prdUseYn.set_enable(false);
        			}else{
        				this.rdo_prdUseYn.set_enable(false);
        			}
        		}

        	}
        }
        this.div_basicInfo_rdo_prdUseYn_onitemchanged = function(obj,e)
        {
        	if(e.postvalue == 'Y'){
        		this.cmb_prdNuseRsnCd.set_readonly(true);
        	}else{
        		var DISP_PRD_YN = this.ds_basicInfo.getColumn(0, "DISP_PRD_YN");
        		var DISP_PRD_CON_YN = this.ds_basicInfo.getColumn(0, "DISP_PRD_CON_YN");
        		var GRP_PRD_YN = this.ds_basicInfo.getColumn(0, "GRP_PRD_YN");
        		if(DISP_PRD_YN == 'Y' || DISP_PRD_CON_YN == 'Y'){
        			//alert('전시상품으로 매핑된 상품입니다.');
        			this.ds_basicInfo.setColumn(0, "PRD_USE_YN", e.prevalue);
        			return;
        		}
        		if(GRP_PRD_YN == 'Y'){
        			//alert('시리즈그룹상품으로 매핑된 상품입니다.');
        			this.ds_basicInfo.setColumn(0, "PRD_USE_YN", e.prevalue);
        			return;
        		}

        		this.ds_prdNuseRsnCd.set_filterstr("COM_USR_DEFN_NM_1 != 'X'"); //미사용 체크 시 X인 row filter 처리
        		this.cmb_prdNuseRsnCd.set_readonly(false);
        	}
        };

        this.div_basicInfo_cmb_prdNuseRsnCd_oninnerdatachanged = function(obj,e)
        {
        	var PRD_USE_YN = this.ds_basicInfo.getColumn(0, "PRD_USE_YN");
        	if(PRD_USE_YN != 'Y'){
        		//obj.set_readonly(false); 강제 readonly
        		obj.set_readonly(true);
        	}else{
        		obj.set_readonly(true);
        	}
        };
        this.div_basicInfo_cmb_prdNuseRsnCd_onitemchanged = function(obj,e)
        {
        	if(e.postvalue == '10'){
        		//alert('해당항목은 선택 불가능합니다.');
        		this.alert(this.fn_getMessage("ERRP000240"));
        		this.cmb_prdNuseRsnCd.set_value(e.prevalue);
        		return false;
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.cmb_category.addEventHandler("onitemchanged",this.cmb_category_onitemchanged,this);
            this.sta_dispPrdSprCd.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.Static60_00_01_00.addEventHandler("onclick",this.Static60_00_01_00_onclick,this);
            this.edt_bgNm.addEventHandler("onchanged",this.edt_bgNm_onchanged,this);
            this.rdo_prdUseYn.addEventHandler("onitemchanged",this.div_basicInfo_rdo_prdUseYn_onitemchanged,this);
            this.cmb_prdNuseRsnCd.addEventHandler("oninnerdatachanged",this.div_basicInfo_cmb_prdNuseRsnCd_oninnerdatachanged,this);
            this.cmb_prdNuseRsnCd.addEventHandler("onitemchanged",this.div_basicInfo_cmb_prdNuseRsnCd_onitemchanged,this);
        };
        this.loadIncludeScript("SSP_BO_CA_22_3.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
