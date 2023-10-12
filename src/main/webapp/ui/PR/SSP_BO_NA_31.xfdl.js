(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_NA_31");
            this.set_titletext("SSP상품추가 상세");
            this.set_scrollbartype("auto");
            this.set_scrolltype("vertical");
            this.set_color("transparent");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,870);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLNM\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_REQDT\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_REQ_PROC_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_op", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_addOp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_files", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_LEN\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_LEN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SAP_DOC_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popupSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popupList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_filedown", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_history", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_stat", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_basicInfo","20","20","1296","280",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("0px solid darkblue");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static65","0","105",null,"32","0",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static07","0","74",null,"32","0",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static03","0","43",null,"32","0",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta01","0","43","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("0");
            obj.set_text("견적요청번호");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta02","430","43","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("1");
            obj.set_text("고객견적 요청일");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta03","862","43","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("2");
            obj.set_text("처리상태");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta04","0","74","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("3");
            obj.set_text("요청 사업장");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta06","862","74","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("4");
            obj.set_text("요청 고객");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta07","0","105","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("5");
            obj.set_text("담당팀");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_tit01","0","18","155","16",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("9");
            obj.set_text("요청 기본 정보");
            obj.set_cssclass("sta_WF_title02");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta05","430","74","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("10");
            obj.set_text("요청 운영단위");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta08","430","105","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("11");
            obj.set_text("담당자");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static65_00","0","234",null,"32","0",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_box02L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","203",null,"32","0",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static03_00","0","172",null,"32","0",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta09","0","172","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("15");
            obj.set_text("카테고리");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta10","0","203","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("16");
            obj.set_text("상품명");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta11","700","203","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("17");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta12","0","234","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("18");
            obj.set_text("원산지");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_tit02","0","147","155","16",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("19");
            obj.set_text("요청 상품 정보");
            obj.set_cssclass("sta_WF_title02");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta13","700","234","130","32",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("20");
            obj.set_text("주문단위");
            obj.set_cssclass("sta_cm_box01L");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_estiNo","135","47",null,"24","1043",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("21");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_reqDt","565","47",null,"24","613",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("22");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_status","996","47",null,"24","182",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("23");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcCd","135","78",null,"24","1043",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("24");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcNm","257","78",null,"24","921",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("25");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_oprUnitCd","565","78",null,"24","613",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("26");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_oprUnitNm","688","78",null,"24","490",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("27");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_reqUsrId","996","78",null,"24","182",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("28");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_reqUsrNm","1118","78",null,"24","60",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("29");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_teamCd","134","109",null,"24","1044",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("30");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_teamNm","257","109",null,"24","921",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("31");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_oprtrCd","565","109",null,"24","613",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("32");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_oprtrNm","688","109",null,"24","490",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("33");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_cateCd","134","176",null,"24","1044",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("34");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_cateNm","257","176",null,"24","211",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("35");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm","134","207",null,"24","634",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("36");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_ctry","134","238",null,"24","634",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("37");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_mnfr","834","207",null,"24","34",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("38");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_unit","834","238",null,"24","34",null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("39");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Button("btn_esting","1110","0","90","30",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("40");
            obj.set_text("견적중 처리");
            obj.set_visible("false");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Button("btn_receipt","1205","0","90","30",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("41");
            obj.set_text("접수");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Button("btn_exClose","1205","0","90","30",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("42");
            obj.set_text("예외종료");
            obj.set_visible("false");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Button("btn_estiComp","1110","0","90","30",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("43");
            obj.set_text("견적완료 처리");
            obj.set_visible("false");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Button("btn_reReq","1110","0","90","30",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("44");
            obj.set_text("상품등록재요청");
            obj.set_visible("false");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Button("btn_list","1015","0","90","30",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("45");
            obj.set_text("목록");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Div("div_opInfo","20","288","1296","342",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_tit03","0","8","155","16",null,null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("3");
            obj.set_text("옵션정보");
            obj.set_cssclass("sta_WF_title02");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Static("sta_bot_op14","0","33",null,"32","0",null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Static("sta14","0","33","130","32",null,null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Static("sta15","700","33","130","32",null,null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Static("sta_bot_op16","0","63",null,"32","0",null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Static("sta16","0","63","130","32",null,null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box01L");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Static("sta17","700","63","130","32",null,null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box01L");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Static("sta_bot_op18","0","93",null,"32","0",null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Static("sta18","0","93","130","32",null,null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box01L");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Static("sta19","700","93","130","32",null,null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box01L");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Static("sta_bot_op20","0","123",null,"32","0",null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Static("sta20","0","123","130","32",null,null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box01L");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Static("sta21","700","123","130","32",null,null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_box01L");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Static("sta_bot_op22","0","153",null,"32","0",null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box02L");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Static("sta22","0","153","130","32",null,null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_cm_box01L");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Static("sta23","700","153","130","32",null,null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_cm_box01L");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Static("sta_bot_op24","0","183",null,"32","0",null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_cm_box02L");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Static("sta24","0","183","130","32",null,null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_cm_box01L");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Static("sta25","700","183","130","32",null,null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_cm_box01L");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Static("sta_bot_op26","0","213",null,"32","0",null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_cm_box02L");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Static("sta26","0","213","130","32",null,null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_cm_box01L");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Static("sta27","700","213","130","32",null,null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_cm_box01L");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Static("sta_bot_op28","0","242",null,"32","0",null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_cm_box02L");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Static("sta28","0","242","130","32",null,null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_cm_box01L");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Static("sta29","700","242","130","32",null,null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_cm_box01L");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Static("sta_bot_op30","0","272",null,"32","0",null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_cm_box02L");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Static("sta30","0","272","130","32",null,null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_cm_box01L");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Static("sta31","700","272","130","32",null,null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_cm_box01L");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Static("sta_bot_op32","0","303",null,"32","0",null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_cm_box02L");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Static("sta32","0","303","130","32",null,null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_cm_box01L");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Static("sta33","700","303","130","32",null,null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_cm_box01L");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Edit("edt_op1","134","37",null,"24","634",null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("31");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Edit("edt_op3","134","67",null,"24","634",null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("32");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Edit("edt_op5","134","97",null,"24","634",null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("33");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Edit("edt_op7","134","127",null,"24","634",null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("34");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Edit("edt_op9","134","157",null,"24","634",null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("35");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Edit("edt_op11","134","187",null,"24","634",null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("36");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Edit("edt_op13","134","216",null,"24","634",null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("37");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Edit("edt_op15","134","246",null,"24","634",null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("38");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Edit("edt_op17","134","276",null,"24","634",null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("39");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Edit("edt_op19","134","307",null,"24","634",null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("40");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Edit("edt_op2","834","37",null,"24","34",null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("41");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Edit("edt_op4","834","67",null,"24","34",null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("42");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Edit("edt_op6","834","97",null,"24","34",null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("43");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Edit("edt_op8","834","127",null,"24","34",null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("44");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Edit("edt_op10","834","157",null,"24","34",null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("45");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Edit("edt_op12","834","187",null,"24","34",null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("46");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Edit("edt_op14","834","216",null,"24","34",null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("47");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Edit("edt_op16","834","246",null,"24","34",null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("48");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Edit("edt_op18","834","276",null,"24","34",null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("49");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Edit("edt_op20","834","307",null,"24","34",null,null,null,null,null,this.div_opInfo.form);
            obj.set_taborder("50");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_opInfo.addChild(obj.name, obj);

            obj = new Div("div_addInfo","20","388","1296","345",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_bot_add34","0","33",null,"32","0",null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta34","0","33","130","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta_add1","130","33","570","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta_tit04","0","8","155","16",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("3");
            obj.set_text("요청 추가 정보");
            obj.set_cssclass("sta_WF_title02");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta35","700","33","130","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta_add2","830","33","460","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L_txt");
            obj.set_text("");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta_bot_add36","0","64",null,"32","0",null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta36","0","64","130","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box01L");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta_add3","130","64","570","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta37","700","64","130","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box01L");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta_add4","830","64","460","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L_txt");
            obj.set_text("");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta_bot_add38","0","94",null,"32","0",null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta38","0","94","130","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_box01L");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta_add5","130","94","570","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta39","700","94","130","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_cm_box01L");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta_add6","830","94","460","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta_bot_add40","0","124",null,"32","0",null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_cm_box02L");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta40","0","124","130","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_cm_box01L");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta_add7","130","124","570","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta41","700","124","130","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_cm_box01L");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta_add8","830","124","460","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta_bot_add42","0","154",null,"32","0",null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_cm_box02L");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta42","0","154","130","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_cm_box01L");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta_add9","130","154","570","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta43","700","154","130","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_cm_box01L");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta_add10","830","154","460","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta_bot_add44","0","184",null,"32","0",null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_cm_box02L");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta44","0","184","130","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_cm_box01L");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta_add11","130","184","570","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta45","700","184","130","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_cm_box01L");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta_add12","830","184","460","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta_bot_add46","0","213",null,"32","0",null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_cm_box02L");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta46","0","213","130","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_cm_box01L");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta_add13","130","213","570","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta47","700","213","130","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_cm_box01L");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta_add14","830","213","460","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta_bot_add48","0","244",null,"32","0",null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_cm_box02L");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta48","0","244","130","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_cm_box01L");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta_add15","130","244","570","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta49","700","244","130","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_cm_box01L");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta_add16","830","244","460","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta_bot_add50","0","272",null,"32","0",null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_cm_box02L");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta50","0","272","130","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_cm_box01L");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta_add17","130","272","570","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta51","700","272","130","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_cm_box01L");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta_add18","830","272","460","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta_bot_add52","0","302",null,"32","0",null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_cm_box02L");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta52","0","302","130","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_cm_box01L");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta_add19","130","302","570","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta53","700","302","130","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_cm_box01L");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Static("sta_add20","830","302","460","32",null,null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Edit("edt_add1","134","37",null,"24","634",null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("51");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Edit("edt_add3","134","68",null,"24","634",null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("52");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Edit("edt_add5","134","98",null,"24","634",null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("53");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Edit("edt_add7","134","128",null,"24","634",null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("54");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Edit("edt_add9","134","157",null,"24","634",null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("55");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Edit("edt_add11","134","187",null,"24","634",null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("56");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Edit("edt_add13","134","217",null,"24","634",null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("57");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Edit("edt_add15","134","247",null,"24","634",null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("58");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Edit("edt_add17","134","276",null,"24","634",null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("59");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Edit("edt_add19","134","306",null,"24","634",null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("60");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Edit("edt_add20","834","306",null,"24","34",null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("61");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Edit("edt_add18","834","276",null,"24","34",null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("62");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Edit("edt_add16","834","247",null,"24","34",null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("63");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Edit("edt_add14","834","217",null,"24","34",null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("64");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Edit("edt_add12","834","187",null,"24","34",null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("65");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Edit("edt_add10","834","157",null,"24","34",null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("66");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Edit("edt_add8","834","128",null,"24","34",null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("67");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Edit("edt_add6","834","98",null,"24","34",null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("68");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Edit("edt_add4","834","68",null,"24","34",null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("69");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Edit("edt_add2","834","37",null,"24","34",null,null,null,null,null,this.div_addInfo.form);
            obj.set_taborder("70");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_addInfo.addChild(obj.name, obj);

            obj = new Div("div_info","20","488","1296","835",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00","0","30",null,"32","0",null,null,null,null,null,this.div_info.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("sta54","0","30","130","32",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_expr("\"견적 협력사\"");
            obj.set_usedecorate("true");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("sta_tit05","0","5","155","16",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("12");
            obj.set_text("견적 처리 정보");
            obj.set_cssclass("sta_WF_title02");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("sta55","862","30","130","32",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_expr("\"견적요청일\"");
            obj.set_usedecorate("true");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("Static07_01","0","61",null,"32","0",null,null,null,null,null,this.div_info.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("sta56","0","61","130","32",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_expr("\"배송 L/T\"");
            obj.set_usedecorate("true");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("sta58","862","61","130","32",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("16");
            obj.set_text("배수주문단위");
            obj.set_cssclass("sta_cm_box01L");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("sta57","431","61","130","32",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("17");
            obj.set_text("MOQ");
            obj.set_cssclass("sta_cm_box01L");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("Static07_01_00","0","92",null,"64","0",null,null,null,null,null,this.div_info.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("sta59","0","92","130","64",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("19");
            obj.set_text("견적 메모");
            obj.set_cssclass("sta_cm_box01L");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("Static65_00_01","0","155",null,"32","0",null,null,null,null,null,this.div_info.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_cm_box02L");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("sta60","0","155","130","32",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_expr("\"협력사 견적가\"");
            obj.set_usedecorate("true");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("sta61","702","155","130","32",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_expr("\"견적 제출가\"");
            obj.set_usedecorate("true");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("Static65_00_01_00","0","186",null,"32","0",null,null,null,null,null,this.div_info.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_cm_box02L");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("sta62","0","186","130","32",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_expr("\"견적 완료일\"");
            obj.set_usedecorate("true");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("sta63","702","186","130","32",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_expr("\"견적 유효기간\"");
            obj.set_usedecorate("true");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("Static65_00_01_00_00","0","217",null,"32","0",null,null,null,null,null,this.div_info.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_cm_box02L");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("sta64","0","217","130","32",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_expr("\"견적 증빙 첨부\"");
            obj.set_usedecorate("true");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00_00","0","286",null,"32","0",null,null,null,null,null,this.div_info.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("sta65","0","286","130","32",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("29");
            obj.set_text("신규상품요청번호");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("sta_newReqNo","130","287","567","31",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("sta_tit06","0","261","155","16",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("31");
            obj.set_text("상품 등록 정보");
            obj.set_cssclass("sta_WF_title02");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("sta66","703","286","130","32",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("32");
            obj.set_text("S-MRO 요청번호");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("Static07_01_01","0","317",null,"32","0",null,null,null,null,null,this.div_info.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("sta67","0","317","130","32",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("34");
            obj.set_text("상품 등록 요청일");
            obj.set_cssclass("sta_cm_box01L");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("sta68","703","317","130","32",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("35");
            obj.set_text("상품 등록 완료일");
            obj.set_cssclass("sta_cm_box01L");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("sta_newStDt","130","317","567","31",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_cm_box02L_txt");
            obj.set_text("");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("sta_mroReqNo","839","287","448","31",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("sta_newEnDt","838","317","449","31",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_info.addChild(obj.name, obj);

            obj = new Edit("edt_collabNm","135","35","290","24",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_info.addChild(obj.name, obj);

            obj = new Edit("edt_LT","135","65","118","24",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            obj.set_inputtype("number");
            obj.set_maxlength("5");
            obj.set_inputfilter("alpha,comma,dot,sign,space,symbol");
            this.div_info.addChild(obj.name, obj);

            obj = new Edit("edt_MOQ","566","65","118","24",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            obj.set_inputtype("number");
            obj.set_maxlength("15");
            obj.set_inputfilter("alpha,comma,sign,space,symbol");
            this.div_info.addChild(obj.name, obj);

            obj = new Calendar("cal_reqDt","996","35","118","24",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("2");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_info.addChild(obj.name, obj);

            obj = new Edit("edt_unit","996","65","118","24",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            obj.set_maxlength("30");
            this.div_info.addChild(obj.name, obj);

            obj = new Calendar("cal_comAmt","135","190","118","24",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("7");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("sta21","259","69","12","14",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("39");
            obj.set_text("일");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("sta26","258","163","12","14",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("40");
            obj.set_text("원");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("sta28","959","163","12","14",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("41");
            obj.set_text("원");
            this.div_info.addChild(obj.name, obj);

            obj = new Button("btn_esting","1110","793","90","30",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("42");
            obj.set_text("견적중 처리");
            obj.set_visible("false");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("sta_newPrdId_back","0","348",null,"32","0",null,null,null,null,null,this.div_info.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("sta69","0","348","130","32",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("44");
            obj.set_text("상품ID");
            obj.set_cssclass("sta_cm_box01L");
            this.div_info.addChild(obj.name, obj);

            obj = new Button("btn_receipt","1205","793","90","30",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("45");
            obj.set_text("접수");
            this.div_info.addChild(obj.name, obj);

            obj = new Button("btn_exClose","1205","793","90","30",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("46");
            obj.set_text("예외종료");
            obj.set_visible("false");
            this.div_info.addChild(obj.name, obj);

            obj = new Button("btn_estiComp","1110","793","90","30",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("47");
            obj.set_text("견적완료 처리");
            obj.set_visible("false");
            this.div_info.addChild(obj.name, obj);

            obj = new Button("btn_reReq","1110","793","90","30",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("48");
            obj.set_text("상품등록재요청");
            obj.set_visible("false");
            this.div_info.addChild(obj.name, obj);

            obj = new Button("btn_list","1015","793","90","30",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("49");
            obj.set_text("목록");
            this.div_info.addChild(obj.name, obj);

            obj = new TextArea("txt_memo","135","97","1155","54",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_maxlength("600");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_00","0","410",null,"32","0",null,null,null,null,null,this.div_info.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("sta73","0","410","130","32",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("51");
            obj.set_text("예외사유");
            obj.set_cssclass("sta_cm_box01L");
            this.div_info.addChild(obj.name, obj);

            obj = new Edit("edt_exRemark","135","414","1155","24",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("52");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_info.addChild(obj.name, obj);

            obj = new Button("btn_collab","431","35","25","24",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.div_info.addChild(obj.name, obj);

            obj = new Calendar("cal_estiValDt","836","190","118","24",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("8");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_info.addChild(obj.name, obj);

            obj = new Edit("edt_collabCd","461","35","119","24",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("53");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.div_info.addChild(obj.name, obj);

            obj = new Button("btn_file","369","221","80","24",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("9");
            obj.set_text("파일첨부");
            obj.set_enable("false");
            this.div_info.addChild(obj.name, obj);

            obj = new Edit("edt_file","135","221","230","24",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("54");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("sta_newPrdId","130","348","567","31",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("sta70","703","348","130","32",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("56");
            obj.set_text("처리상태");
            obj.set_cssclass("sta_cm_box01L");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("sta_newPrdId_back2","0","379",null,"32","0",null,null,null,null,null,this.div_info.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("sta72","703","379","130","32",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("58");
            obj.set_text("진열상태");
            obj.set_cssclass("sta_cm_box01L");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("sta71","0","379","130","32",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("59");
            obj.set_text("신규상품 요청상태");
            obj.set_cssclass("sta_cm_box01L");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("sta_newStat","838","348","449","31",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("60");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("sta_newDisStat","838","379","449","31",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("sta_newReqStat","130","379","567","31",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("62");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("sta_tit07","0","455","155","16",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("63");
            obj.set_text("요청 처리 내역");
            obj.set_cssclass("sta_WF_title02");
            this.div_info.addChild(obj.name, obj);

            obj = new Edit("edt_newReqNo","135","290",null,"24","1043",null,null,null,null,null,this.div_info.form);
            obj.set_taborder("64");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_info.addChild(obj.name, obj);

            obj = new Edit("edt_newStDt","135","321",null,"24","1043",null,null,null,null,null,this.div_info.form);
            obj.set_taborder("65");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_info.addChild(obj.name, obj);

            obj = new Edit("edt_newReqStat","135","383",null,"24","1043",null,null,null,null,null,this.div_info.form);
            obj.set_taborder("66");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_info.addChild(obj.name, obj);

            obj = new Edit("edt_newPrdId","135","352",null,"24","1043",null,null,null,null,null,this.div_info.form);
            obj.set_taborder("67");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_info.addChild(obj.name, obj);

            obj = new Edit("edt_newDisStat","836","383",null,"24","342",null,null,null,null,null,this.div_info.form);
            obj.set_taborder("68");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_info.addChild(obj.name, obj);

            obj = new Edit("edt_newStat","836","352",null,"24","342",null,null,null,null,null,this.div_info.form);
            obj.set_taborder("69");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_info.addChild(obj.name, obj);

            obj = new Edit("edt_newEnDt","836","321",null,"24","342",null,null,null,null,null,this.div_info.form);
            obj.set_taborder("70");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_info.addChild(obj.name, obj);

            obj = new Edit("edt_mroReqNo","836","290",null,"24","342",null,null,null,null,null,this.div_info.form);
            obj.set_taborder("71");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.div_info.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","486",null,"290","0",null,null,null,null,null,this.div_info.form);
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_history");
            obj.set_nodatatext("조회 조건 입력 후 조회 버튼을 눌러주세요.");
            obj.set_font("normal 12px/normal \"Arial\",\"맑은 고딕\"");
            obj.set_taborder("72");
            obj.set_cellmovingtype("col");
            obj.set_selecttype("area");
            obj.set_autosizebandtype("allband");
            obj.set_autosizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"처리상태\"/><Cell col=\"1\" text=\"일자\"/><Cell col=\"2\" text=\"처리자 ID\"/><Cell col=\"3\" text=\"처리자명\"/></Band><Band id=\"body\"><Cell text=\"bind:ESTM_REQ_PROC_STATS_NM\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:REG_DTM\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:REGPSN_ID\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:REGPSN_NM\" displaytype=\"text\"/></Band></Format></Formats>");
            this.div_info.addChild(obj.name, obj);

            obj = new MaskEdit("msk_estiAmt","135","159","118","24",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("7");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_format("###,###,###,###,###");
            obj.set_limitbymask("both");
            obj.set_enable("true");
            this.div_info.addChild(obj.name, obj);

            obj = new MaskEdit("msk_subAmt","836","159","118","24",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("8");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            obj.set_format("###,###,###,###,###");
            obj.set_limitbymask("both");
            obj.set_enable("true");
            this.div_info.addChild(obj.name, obj);

            obj = new Static("sta_file","130","217","570","32",null,null,null,null,null,null,this.div_info.form);
            obj.set_taborder("75");
            obj.set_cssclass("sta_cm_box02L_txt");
            obj.set_visible("false");
            obj.set_cursor("pointer");
            obj.set_usedecorate("true");
            this.div_info.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,870,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_basicInfo.form.edt_estiNo","value","ds_detail","ESTM_REQ_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_basicInfo.form.edt_reqDt","value","ds_detail","REG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_basicInfo.form.edt_status","value","ds_detail","ESTM_REQ_PROC_STATS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_basicInfo.form.edt_bzplcNm","value","ds_detail","BZPLC_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_basicInfo.form.edt_reqUsrNm","value","ds_detail","MBR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_basicInfo.form.edt_teamNm","value","ds_detail","ORG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","div_basicInfo.form.edt_oprUnitNm","value","ds_detail","OPR_UNIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","div_basicInfo.form.edt_oprtrNm","value","ds_detail","OPRTR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_basicInfo.form.edt_bzplcCd","value","ds_detail","BZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div_basicInfo.form.edt_oprUnitCd","value","ds_detail","OPR_UNIT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div_basicInfo.form.edt_reqUsrId","value","ds_detail","MBR_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","div_basicInfo.form.edt_teamCd","value","ds_detail","ORG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","div_basicInfo.form.edt_oprtrCd","value","ds_detail","OPRTR_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_basicInfo.form.edt_cateCd","value","ds_detail","PRD_CLCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_basicInfo.form.edt_cateNm","value","ds_detail","PRD_CLNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_basicInfo.form.edt_prdNm","value","ds_detail","DISP_PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_basicInfo.form.edt_ctry","value","ds_detail","CTRY_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_basicInfo.form.edt_mnfr","value","ds_detail","MNFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_basicInfo.form.edt_unit","value","ds_detail","SELL_UNIT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_info.form.edt_collabNm","value","ds_detail","CPRTCP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_info.form.cal_reqDt","value","ds_detail","ESTM_REQDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_info.form.edt_LT","value","ds_detail","DLV_LT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_info.form.edt_MOQ","value","ds_detail","MIN_ORD_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_info.form.edt_unit","value","ds_detail","MULT_ODR_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_info.form.txt_memo","value","ds_detail","ESTM_MEMO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_info.form.cal_comAmt","value","ds_detail","ESTM_CMPL_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_info.form.cal_estiValDt","value","ds_detail","ESTM_VLD_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_info.form.edt_collabCd","value","ds_detail","CPRTCP_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_info.form.edt_file","value","ds_detail","FILE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_info.form.edt_exRemark","value","ds_detail","EXCEPT_END_RSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_info.form.edt_newReqNo","value","ds_detail","NEW_PRD_REQ_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_info.form.edt_newStDt","value","ds_detail","NEW_REG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_info.form.edt_newReqStat","value","ds_detail","NEW_PRD_REQ_STATS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_info.form.edt_newPrdId","value","ds_detail","NEW_PRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_info.form.edt_newDisStat","value","ds_detail","DISP_STATS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_info.form.edt_newStat","value","ds_detail","MRO_PROC_STATS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_info.form.edt_newEnDt","value","ds_detail","NEW_END_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_info.form.edt_mroReqNo","value","ds_detail","MRO_REQ_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_info.form.msk_estiAmt","value","ds_detail","CPRTCP_EPRC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_info.form.msk_subAmt","value","ds_detail","ESTM_SBM_AMT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_NA_31.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_NA_31.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/

        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        this.return = {isProcessed : false};  // 데이터 처리 여부

        // 첨부파일
        this.fileType = ".pptx, .ppt, .docx, .doc, .xls, .xlsx, image/*, text/*, .zip"; //첨부파일 종류
        this.maxFileSize = 10; //MB단위
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();
        this.fn_onLoad = function(obj,e){
            //공통 함수 호출(필수)
            this.gfn_formOnLoad(this);
        	this.fn_init();
        };

        this.fn_onkeyup = function(obj,e){
        	if( e.keycode == 13) {
        		var value = this.gfn_allTrim(e.fromobject.value);
        		if(value != -1 && this.gfn_lengthByte(value) > 0) {
        		    // 카테고리
        			if(e.fromobject.id == this.div_info.form.edt_collabNm.id) {
        			    this.ds_search.setColumn(0, "CPRTCP_KOR_NM", this.div_info.form.edt_collabNm.value);
         				this.fn_popupSearch(e.fromobject.id, "/pp/ppcprtcpInqPopup/selectPpcprtcpInqPopuplst.do");
        			}
        		}
        	}
        }

        this.SSP_BO_NA_31_onkeyup = function(obj,e)
        {
        		// ESC
        	if (e.keycode == 27) {
        		// 팝업 화면 닫기
        		//this.btn_clear_onclick();
        		this.close();
        	}
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        // 조회
        this.fn_search = function (pgNo){
            var sSvcId = this.id;
            var sUrl   = "/pr/prdMng/select-product-estimate-detail.do";
            var inDs   = "ds_search=ds_search";
            var outDs  = "ds_detail=ds_detail ds_op=ds_op ds_addOp=ds_addOp ds_history=ds_history";
            var arg    = "";

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 상태변경
        this.fn_estiReq = function (statCd) {
        	this.ds_detail.setColumn(0, "ESTM_REQ_PROC_STATS_CD", statCd);

            var sSvcId = "updateEstimateStatus";
            var sUrl   = "/pr/prdMng/pr-product-estimate-status.do";
            var inDs   = "ds_detail=ds_detail";
            var outDs  = "ds_stat=ds_stat";
            var arg    = "";

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //폼 엔터처리용
        this.fn_popupSearch = function (svcId, url){
        	var sSvcId = svcId;
        	var sUrl   = url;
        	//var inDs   = "ds_popupSearch=ds_search";
        	var inDs   = "ds_search=ds_search";
        	var outDs  = "ds_popupList=manufacturerList";
        	var arg    = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        // 서비스 콜백
        this.fn_callBack = function(svcID, errorCode, errorMsg) {
            switch(svcID) {
        	    // 조회
                case this.id :
        			this.fn_setDetail();

                    break;

        		case "btn_receipt" :
        			if(errorCode){
        				this.fn_estiReq("20");						// 접수
        			}

                    break;

        		case "btn_esting" :
        			if(errorCode){
        				this.fn_estiReq("30");						// 견적중
        			}

                    break;

        		case "btn_estiComp" :
        			if(errorCode){
        				this.FileUpTransfer.setPostData("pgmId", "SSP_BO_NA_31");
        				this.FileUpTransfer.setPostData("mnuSeq", "1");
        				this.FileUpTransfer.upload("/co/file-upload.do");
        			}

                    break;

        		case "btn_reReq" :
        			if(errorCode){
        				this.fn_estiReq("50");						// 재요청
        			}

                    break;

                // 상태변경
                case "updateEstimateStatus" :
        			this.return.isProcessed = true;

        			if(this.ds_detail.getColumn(0, "ESTM_REQ_PROC_STATS_CD") == "50"){
        				if(this.ds_stat.getColumn(0, "RST_CD") != "E"){
        					this.gfn_popMessage("ERRP000131");
        					this.reload();
        				}else{
        					alert(this.ds_stat.getColumn(0, "RST_MSG"));
        				}
        			}else{
        				this.reload();
        			}

                    break;

        		// 협력사
        		case this.div_info.form.edt_collabNm.id :
        			if(this.ds_popupList.getRowCount() == 1) {
        				this.div_info.form.edt_collabCd.set_value(this.ds_popupList.getColumn(0, "CPRTCP_ID"));
        				this.div_info.form.edt_collabNm.set_value(this.ds_popupList.getColumn(0, "CPRTCP_KOR_NM"));
        			} else if(this.ds_popupList.getRowCount() > 1) {
        				this.div_info.form.btn_collab.click();
        			}

                    break;
            }
        };

        // 팝업 콜백
        this.fn_popupCallback = function(svcID, args){
            if(!args) {
        		return;
        	}

        	var jsonData = JSON.parse(args);

            switch(svcID) {
        		// 카테고리 팝업 버튼
        		case this.div_info.form.btn_collab.id :
        			this.div_info.form.edt_collabCd.set_value(jsonData["CPRTCP_ID"]   );
        			this.div_info.form.edt_collabNm.set_value(jsonData["CPRTCP_KOR_NM"]);

                    break;
            }
        }

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        // 초기화
        this.fn_init = function() {
        	if(this.parent && this.parent.args) {
        		this.ds_search.setColumn(0, "CO_CD", this.parent.args.CO_CD);
        		this.ds_search.setColumn(0, "ESTM_REQ_NO", this.parent.args.ESTM_REQ_NO);
        		this.ds_search.setColumn(0, "PRD_CLCD", this.parent.args.PRD_CLCD);

        		// 조회실행
        		this.fn_search();
        	}
        }

        // 화면설정
        this.fn_setDetail = function() {
        	var baseBottom = 288;

        	// 옵션
        	if(this.ds_op.rowcount == 0){
        		this.div_opInfo.form.set_visible(false);
        	}else{
        		for(var i = 0; i < this.ds_op.rowcount; i++){
        			var titCnt = 14 + i;
        			var opCnt = 1 + i;

        			this.div_opInfo.form["sta" + titCnt].set_text(this.ds_op.getColumn(i, "OPTN_NM"));
        			this.div_opInfo.form["edt_op"+ opCnt].set_value(this.ds_op.getColumn(i, "OPTN_ITM_SLT_CTS"));
        		}

        		var opBottom = 0;
        		var tmpCnt = 1;

        		for(var i = 14; i < 34; i++){
        			var txt = this.div_opInfo.form["sta" + i].text;

        			if(txt == ""){
        				this.div_opInfo.form["sta" + i].set_visible(false);
        				this.div_opInfo.form["edt_op" + tmpCnt].set_visible(false);

        				if(i % 2 == 0){
        					this.div_opInfo.form["sta_bot_op" + i].set_visible(false);
        				}
        			}else{
        				opBottom = Number(this.div_opInfo.form["sta" + i].top) + Number(this.div_opInfo.form["sta" + i].height);
        			}

        			tmpCnt++;
        		}

        		baseBottom = baseBottom + opBottom;// + 25;
        	}

        	this.div_addInfo.set_top(baseBottom);

        	// 추가옵션
        	if(this.ds_addOp.rowcount == 0){
        		this.div_addInfo.form.set_visible(false);
        	}else{
        		for(var i = 0; i < this.ds_addOp.rowcount; i++){
        			var titCnt = 34 + i;
        			var addCnt = 1 + i;

        			if(this.ds_addOp.getColumn(i, "IPT_TYPE_CD") == undefined){
        				this.div_addInfo.form["edt_add"+ addCnt].set_visible(false);

        				this.div_addInfo.form["sta_add" + addCnt].addEventHandler("onclick", this.addfileDown , this);
        				this.div_addInfo.form["sta_add" + addCnt].set_cursor("pointer");
        				this.div_addInfo.form["sta_add" + addCnt].set_usedecorate(true);
        				this.div_addInfo.form["sta_add"+ addCnt].set_expr("\"<fc v='blue'>" + this.ds_addOp.getColumn(i, "ADD_OPTN_ITM_SLT_CTS") + "</fc>\"");
        				this.ds_filedown.setColumn(0, "DOC_REG_ID", this.ds_addOp.getColumn(i, "DOC_REG_ID"));
        				this.ds_filedown.setColumn(0, "DOC_REG_SEQ", this.ds_addOp.getColumn(i, "DOC_REG_SEQ"));
        			}else{
        				this.div_addInfo.form["sta_add"+ addCnt].set_visible(false);
        				this.div_addInfo.form["edt_add"+ addCnt].set_value(this.ds_addOp.getColumn(i, "ADD_OPTN_ITM_SLT_CTS"));
        			}

        			this.div_addInfo.form["sta" + titCnt].set_text(this.ds_addOp.getColumn(i, "ADD_OPTN_NM"));
        		}

        		var addBottom = 0;
        		var tmpCnt = 1;

        		for(var i = 34; i < 54; i++){
        			var txt = this.div_addInfo.form["sta" + i].text;

        			if(txt == ""){
        				this.div_addInfo.form["sta" + i].set_visible(false);
        				this.div_addInfo.form["edt_add" + tmpCnt].set_visible(false);

        				if(i % 2 == 0){
        					this.div_addInfo.form["sta_bot_add" + i].set_visible(false);
        				}
        			}else{
        				addBottom = Number(this.div_addInfo.form["sta" + i].top) + Number(this.div_addInfo.form["sta" + i].height);
        			}

        			tmpCnt++;
        		}

        		baseBottom = baseBottom + addBottom + 5;
        	}

        	this.div_info.set_top(baseBottom);
        	this.fn_compCont();

        	this.resetScroll();
        }

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        // 목록
        this.div_info_btn_list_onclick = function(obj,e)
        {
        	this.close(JSON.stringify(this.return));
        };

        // 접수
        this.div_info_btn_receipt_onclick = function(obj,e)
        {
        	this.gfn_popMessage("COMS000013", ["접수"], obj.id, "fn_callBack");
        };

        // 견적중 처리
        this.div_info_btn_esting_onclick = function(obj,e)
        {
        	if(this.div_info.form.edt_collabNm.text == ""){
        		this.gfn_popMessage("ERRC000009", ["견적 협력사"]);
        		this.div_info.form.edt_collabNm.setFocus();
        		return;
        	}

        	if(this.div_info.form.cal_reqDt.value == undefined){
        		this.gfn_popMessage("ERRC000009", ["견적 요청일"]);
        		this.div_info.form.cal_reqDt.setFocus();
        		return;
        	}

        	this.gfn_popMessage("COMS000013", ["견적 진행"], obj.id, "fn_callBack");
        };

        // 견적완료
        this.div_info_btn_estiComp_onclick = function(obj,e)
        {

        	if(this.div_info.form.edt_LT.text == ""){
        		this.gfn_popMessage("ERRC000009", ["배송 L/T"]);
        		this.div_info.form.edt_LT.setFocus();
        		return;
        	}

        	if(this.div_info.form.msk_estiAmt.text == ""){
        		this.gfn_popMessage("ERRC000009", ["협력사 견적가"]);
        		this.div_info.form.msk_estiAmt.setFocus();
        		return;
        	}

        	if(this.div_info.form.cal_comAmt.value == undefined){
        		this.gfn_popMessage("ERRC000009", ["견적 완료일"]);
        		this.div_info.form.cal_comAmt.setFocus();
        		return;
        	}

        	var reqDt = Number(this.ds_detail.getColumn(0, "ESTM_REQDT"));
        	var comDt = Number(this.div_info.form.cal_comAmt.value);

        	if(reqDt > comDt){
        		this.gfn_popMessage("ERRP000132");
        		this.div_info.form.cal_comAmt.setFocus();
        		return;
        	}

        	if(this.div_info.form.edt_file.text == ""){
         		this.gfn_popMessage("견적증빙파일을 첨부해주세요");
         		this.div_info.form.edt_unit.setFocus();
         		return;
         	}

        	this.gfn_popMessage("COMS000013", ["견적 완료"], obj.id, "fn_callBack");
        };

        // 상품등록재요청
        this.div_info_btn_reReq_onclick = function(obj,e)
        {
        	var today = Number(this.fn_today());
        	var valDt = Number(nexacro.replaceAll(this.ds_detail.getColumn(0, "ESTM_VLD_DT"), "-", ""));

        	if(today > valDt){
        		this.gfn_popMessage("ERRP000133");
        		return;
        	}

        	this.gfn_popMessage("COMS000013", ["상품등록 재요청"], obj.id, "fn_callBack");
        };

        // 예외종료
        this.div_info_btn_exClose_onclick = function(obj,e)
        {
        	if(this.div_info.form.edt_exRemark.text == ""){
        		this.gfn_popMessage("ERRC000009", ["예외사유"]);
        		return;
        	}

        	this.fn_estiReq("70");
        };

        // 컴포넌트 컨트롤
        this.fn_compCont = function() {
        	this.fn_false();

        	var statusCd = this.ds_detail.getColumn(0, "ESTM_REQ_PROC_STATS_CD");
        	var mroStatusCd = this.ds_detail.getColumn(0, "MRO_PROC_STATS_CD");
        	var objDate = new nexacro.Date();

        	if(statusCd == "10"){			// 요청
        		this.div_basicInfo.form.btn_receipt.set_visible(true);
        		this.div_info.form.btn_receipt.set_visible(true);
        		this.div_basicInfo.form.btn_list.set_left(1110);
        		this.div_info.form.btn_list.set_left(1110);
        	}else if(statusCd == "20"){		// 접수
        		this.div_basicInfo.form.btn_esting.set_visible(true);
        		this.div_basicInfo.form.btn_exClose.set_visible(true);
        		this.div_info.form.btn_esting.set_visible(true);
        		this.div_info.form.btn_exClose.set_visible(true);
        		this.div_basicInfo.form.btn_list.set_left(1015);
        		this.div_info.form.btn_list.set_left(1015);

        		this.div_info.form.btn_collab.set_enable(true);
        		this.div_info.form.edt_collabNm.set_readonly(false);
        		this.div_info.form.cal_reqDt.set_readonly(false);

        		this.div_info.form.sta54.set_expr("\"견적 협력사 <fc v='red'> *</fc>\"");
        		this.div_info.form.sta55.set_expr("\"견적요청일 <fc v='red'> *</fc>\"");
        	}else if(statusCd == "30"){		// 견적중
        		this.div_basicInfo.form.btn_exClose.set_visible(true);
        		this.div_basicInfo.form.btn_estiComp.set_visible(true);
        		this.div_info.form.btn_exClose.set_visible(true);
        		this.div_info.form.btn_estiComp.set_visible(true);
        		this.div_basicInfo.form.btn_list.set_left(1015);
        		this.div_info.form.btn_list.set_left(1015);

        		this.div_info.form.edt_LT.set_readonly(false);
        		this.div_info.form.edt_MOQ.set_readonly(false);
        		this.div_info.form.edt_unit.set_readonly(false);
        		this.div_info.form.txt_memo.set_readonly(false);
        		this.div_info.form.msk_estiAmt.set_readonly(false);
        		this.div_info.form.cal_comAmt.set_readonly(false);
        		this.div_info.form.edt_file.set_readonly(false);
        		this.div_info.form.btn_file.set_enable(true);

        		this.div_info.form.sta56.set_expr("\"배송 L/T <fc v='red'> *</fc>\"");
        		this.div_info.form.sta60.set_expr("\"협력사 견적가 <fc v='red'> *</fc>\"");
        		this.div_info.form.sta61.set_expr("\"견적 제출가 <fc v='red'> *</fc>\"");
        		this.div_info.form.sta62.set_expr("\"견적 완료일 <fc v='red'> *</fc>\"");
        		this.div_info.form.sta63.set_expr("\"견적 유효기간 <fc v='red'> *</fc>\"");
        		this.div_info.form.sta64.set_expr("\"견적 증빙 첨부 <fc v='red'> *</fc>\"");
        	}else if(statusCd == "40" || statusCd == "60" || statusCd == "70"){		// 견적완료 || 상품등록완료 || 예외종료
        		this.div_basicInfo.form.btn_list.set_left(1205);
        		this.div_info.form.btn_list.set_left(1205);

        		this.div_info.form.sta_file.set_visible(true);
        		this.div_info.form.btn_file.set_visible(false);
        		this.div_info.form.edt_file.set_visible(false);
        		this.div_info.form.sta_file.set_expr("\"<fc v='blue'>" + this.div_info.form.edt_file.text + "</fc>\"");
        	}else if(statusCd == "50"){		// 상품등록요청
        		this.div_info.form.sta_file.set_visible(true);
        		this.div_info.form.btn_file.set_visible(false);
        		this.div_info.form.edt_file.set_visible(false);

        		this.div_info.form.sta_file.set_expr("\"<fc v='blue'>" + this.div_info.form.edt_file.text + "</fc>\"");
        		if(mroStatusCd == "20" || mroStatusCd == "30"){
        			this.div_basicInfo.form.btn_exClose.set_visible(true);
        			this.div_basicInfo.form.btn_reReq.set_visible(true);
        			this.div_info.form.btn_exClose.set_visible(true);
        			this.div_info.form.btn_reReq.set_visible(true);
        			this.div_basicInfo.form.btn_list.set_left(1015);
        			this.div_info.form.btn_list.set_left(1015);
         		}else{
         			this.div_basicInfo.form.btn_list.set_left(1205);
        			this.div_info.form.btn_list.set_left(1205);
         		}
        	}

        	if(statusCd == "20" || statusCd == "30"){	//  || statusCd == "50"
        		this.div_info.form.edt_exRemark.set_readonly(false);
        	}
        }

        // button, edit disable
        this.fn_false = function() {
        	// button
        	this.div_basicInfo.form.btn_receipt.set_visible(false);
        	this.div_basicInfo.form.btn_esting.set_visible(false);
        	this.div_basicInfo.form.btn_exClose.set_visible(false);
        	this.div_basicInfo.form.btn_estiComp.set_visible(false);
        	this.div_basicInfo.form.btn_reReq.set_visible(false);
        	this.div_info.form.btn_receipt.set_visible(false);
        	this.div_info.form.btn_esting.set_visible(false);
        	this.div_info.form.btn_exClose.set_visible(false);
        	this.div_info.form.btn_estiComp.set_visible(false);
        	this.div_info.form.btn_reReq.set_visible(false);
        	this.div_info.form.btn_file.set_enable(false);

        	// edit
        	this.div_info.form.btn_collab.set_enable(false);
        	this.div_info.form.edt_collabNm.set_readonly(true);
        	this.div_info.form.cal_reqDt.set_readonly(true);
        	this.div_info.form.edt_LT.set_readonly(true);
        	this.div_info.form.edt_MOQ.set_readonly(true);
        	this.div_info.form.edt_unit.set_readonly(true);
        	this.div_info.form.txt_memo.set_readonly(true);
        	this.div_info.form.msk_estiAmt.set_readonly(true);
        	this.div_info.form.msk_subAmt.set_readonly(true);
        	this.div_info.form.cal_comAmt.set_readonly(true);
        	this.div_info.form.cal_estiValDt.set_readonly(true);
        	this.div_info.form.edt_exRemark.set_readonly(true);
        	this.div_info.form.edt_file.set_readonly(true);

        	// static
        	this.div_info.form.sta_file.set_visible(false);
        }

        // 협력사 팝업
        this.div_info_btn_collab_onclick = function(obj,e)
        {
        	var params  = { cprtcpId : this.div_info.form.edt_collabCd.value
         				  , cprtcpKorNm : this.div_info.form.edt_collabNm.value
         				  };
         	var options = { };

        	this.gfn_openPopup(e.fromobject.id, "PP_POP::SSP_BO_PP_41.xfdl", params,  "fn_popupCallback", options);
        };

        // 파일첨부 버튼
        this.div_info_btn_file_onclick = function(obj,e)
        {
        	this.fileDialog.set_accept(this.fileType);
        	this.fileDialog.open('nexacro17', FileDialog.LOAD);
        };

        // 파일선택
        this.FileDialog_onclose = function(obj,e)
        {
        	this.addFileList(e.virtualfiles[0]);
        };

        // 파일 이벤트 생성
        this.addFileList = function(file)
        {
        	file.addEventHandler("onsuccess", this.FileList_onsuccess, this);
        	file.open(null, 1);
        }

        // 파일 확장자 검증
        this.fn_fileCheck = function(obj, fileSize) {
        	var fileName = obj.filename;
        	var extNm  = fileName.substr(fileName.lastIndexOf(".") + 1).toLowerCase(); // 맨 뒤 확장자만 자르기
        	var fileGbn = ".pptx, .ppt, .docx, .doc, .xls, .xlsx, .jpg, .png, .txt, .zip";

        	//10485760 - 10메가
        	//메가바이트 변환
        	var mbSize = fileSize / 1024 / 1024;

        	if( this.maxFileSize < mbSize ) {
        		this.gfn_popMessage("ERRS000255");
        		return false;
        	}

        	if( fileGbn.indexOf(extNm) == -1 ) {
        		this.gfn_popMessage("ERRN000040", [extNm]);
        		return false;
        	}

        	return true;
        }

        // 파일 추가 성공
        this.FileList_onsuccess = function(obj, e)
        {
        	switch (e.reason){
        		case 1:
        			obj.getFileSize();
        			break;
        		case 9:
        			//파일 검증
        			if(!this.fn_fileCheck(obj, e.filesize)){
        				return false;
        			}
        			this.ds_detail.setColumn(0, "FILE_NM", obj.filename);
        			this.ds_files.setColumn(0, "ATFL_NM", obj.filename);
        			this.ds_files.setColumn(0, "ATFL_LEN_NM", this.cutFileSize(e.filesize));
        			this.ds_files.set_rowposition(0);

        			this.FileUpTransfer.clearFileList();
        			this.FileUpTransfer.addFile(obj.filename, obj);
        			break;
        	}
        }

        // 파일 사이즈 가져오기
        this.cutFileSize = function(filesize)
        {
        	var sOutput = filesize + " bytes";
        	var fileSizeType = "";
        	var size = 0;
        	for (var aMultiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], nMultiple = 0, nApprox = filesize / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) {
        		sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple];
        		fileSizeType = aMultiples[nMultiple];
        		size = nApprox;
        	}

        	return sOutput;
        };

        this.FileUpTransfer_onprogress = function(obj,e)
        {
        	var rtnPercent = this.fnGetPercent(e.loaded, e.total);
        	this.ProgressBar.set_pos(rtnPercent);
        };

        //퍼센트 계산
        this.fnGetPercent = function(nload, nTotal)
        {
        	var nCurPercent = (nload / nTotal) * 100;	//일부값 ÷ 전체값 X 100
        	return nCurPercent;
        };

        // 파일 전송 성공
        this.FileUpTransfer_onsuccess = function(obj,e)
        {
        	this.FileUpTransfer.clearFileList();
        	var objCallDs = e.datasets[0];

        	if(objCallDs != undefined && objCallDs.getColumn(0, "result") == "success") {
        		this.ds_detail.setColumn(0, "DOC_REG_ID", objCallDs.getColumn(0, "docRegId"))

        		this.fn_estiReq("40"); // 견적완료 처리
        	}

        };

        // 파일전송 실패
        this.FileUpTransfer_onerror = function(obj,e)
        {
        	this.gfn_popMessage("ERRN000041");
        };

        // 닫기
        this.SSP_BO_NA_31_onclose = function(obj,e)
        {
        	this.close(JSON.stringify(this.return));
        };

        // 견적 완료일 변경시
        this.div_info_cal_comAmt_onchanged = function(obj,e)
        {
        	var yy = Number(this.div_info.form.cal_comAmt.value.substr(0, 4));
        	var mm = Number(this.div_info.form.cal_comAmt.value.substr(4, 2)) - 1;
        	var dd = Number(this.div_info.form.cal_comAmt.value.substr(6, 2));

        	var objDate = new nexacro.Date(yy, mm, dd);
        	objDate.addDate(14);

        	yy = objDate.getFullYear() + "";
        	mm = this.fn_conDt(objDate.getMonth() + 1);
        	dd = this.fn_conDt(objDate.getDate());

        	this.ds_detail.setColumn(0, "ESTM_VLD_DT", yy + mm + dd);
        };

        // 날짜 형식 변경
        this.fn_conDt = function(day) {
        	if(Number(day) < 10){
        		return "0" + day;
        	}

        	return day + "";
        };

        // 견적 증빙 파일 다운
        this.fileDown = function(obj, e)
        {
        	var docRegId = this.ds_detail.getColumn(0, "DOC_REG_ID");
        	var docRegSeq = this.ds_detail.getColumn(0, "DOC_REG_SEQ");

        	this.FileDownTransfer.clearPostDataList();
        	this.FileDownTransfer.setPostData("docRegId", docRegId);
        	this.FileDownTransfer.setPostData("docRegSeq", docRegSeq);
        	this.FileDownTransfer.download('/co/file-download.do');
        };

        // 추가정보 파일 다운
        this.addfileDown = function(obj, e)
        {
        	var docRegId = this.ds_filedown.getColumn(0, "DOC_REG_ID");
        	var docRegSeq = this.ds_filedown.getColumn(0, "DOC_REG_SEQ");

        	this.FileDownTransfer.clearPostDataList();
        	this.FileDownTransfer.setPostData("docRegId", docRegId);
        	this.FileDownTransfer.setPostData("docRegSeq", docRegSeq);
        	this.FileDownTransfer.download('/co/file-download.do');
        };

        // 견적가 변경
        this.div_info_msk_estiAmt_onchanged = function(obj,e)
        {
        	var amt = nexacro.toNumber(this.div_info.form.msk_estiAmt.value) + (nexacro.toNumber(this.div_info.form.msk_estiAmt.value) * nexacro.toNumber(this.ds_detail.getColumn(0, "PRFRT")) / 100);
        	this.ds_detail.setColumn(0, "ESTM_SBM_AMT", amt);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onclose",this.SSP_BO_NA_31_onclose,this);
            this.addEventHandler("onkeyup",this.SSP_BO_NA_31_onkeyup,this);
            this.div_basicInfo.form.btn_esting.addEventHandler("onclick",this.div_info_btn_esting_onclick,this);
            this.div_basicInfo.form.btn_receipt.addEventHandler("onclick",this.div_info_btn_receipt_onclick,this);
            this.div_basicInfo.form.btn_exClose.addEventHandler("onclick",this.div_info_btn_exClose_onclick,this);
            this.div_basicInfo.form.btn_estiComp.addEventHandler("onclick",this.div_info_btn_estiComp_onclick,this);
            this.div_basicInfo.form.btn_reReq.addEventHandler("onclick",this.div_info_btn_reReq_onclick,this);
            this.div_basicInfo.form.btn_list.addEventHandler("onclick",this.div_info_btn_list_onclick,this);
            this.div_info.form.edt_collabNm.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.div_info.form.cal_comAmt.addEventHandler("onchanged",this.div_info_cal_comAmt_onchanged,this);
            this.div_info.form.btn_esting.addEventHandler("onclick",this.div_info_btn_esting_onclick,this);
            this.div_info.form.btn_receipt.addEventHandler("onclick",this.div_info_btn_receipt_onclick,this);
            this.div_info.form.btn_exClose.addEventHandler("onclick",this.div_info_btn_exClose_onclick,this);
            this.div_info.form.btn_estiComp.addEventHandler("onclick",this.div_info_btn_estiComp_onclick,this);
            this.div_info.form.btn_reReq.addEventHandler("onclick",this.div_info_btn_reReq_onclick,this);
            this.div_info.form.btn_list.addEventHandler("onclick",this.div_info_btn_list_onclick,this);
            this.div_info.form.btn_collab.addEventHandler("onclick",this.div_info_btn_collab_onclick,this);
            this.div_info.form.btn_file.addEventHandler("onclick",this.div_info_btn_file_onclick,this);
            this.div_info.form.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.div_info.form.msk_estiAmt.addEventHandler("onchanged",this.div_info_msk_estiAmt_onchanged,this);
            this.div_info.form.msk_subAmt.addEventHandler("onchanged",this.div_info_msk_estiAmt_onchanged,this);
            this.div_info.form.sta_file.addEventHandler("onclick",this.fileDown,this);
            this.fileDialog.addEventHandler("onclose",this.FileDialog_onclose,this);
            this.FileUpTransfer.addEventHandler("onprogress",this.FileUpTransfer_onprogress,this);
            this.FileUpTransfer.addEventHandler("onsuccess",this.FileUpTransfer_onsuccess,this);
            this.FileUpTransfer.addEventHandler("onerror",this.FileUpTransfer_onerror,this);
            this.FileDownTransfer.addEventHandler("onsuccess",this.FileDownTransfer_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onerror",this.FileDownTransfer_onerror,this);
        };
        this.loadIncludeScript("SSP_BO_NA_31.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
