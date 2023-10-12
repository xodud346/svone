(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_MA_47");
            this.set_titletext("제어권한 설정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1070,680);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsParam", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCtlAuthInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComUSE_YN", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComCURR_DD", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComBGT_FW_SPR_CD", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComBGT_CLOS_DD_CD", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComGI_VERF_PROC_CD", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComGI_LVL_CD", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComAPRVL_PST_CD", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComCTL_AUTH_USE_SPR_CD", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComBLNG_DEPT_USE_SPR_CD", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComUSE_Y", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">Y</Col><Col id=\"NM\">사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_setYear", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_setMonth", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rptYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD\">Y</Col><Col id=\"COM_DTL_CD_NM\">매월반복</Col></Row><Row><Col id=\"COM_DTL_CD\">N</Col><Col id=\"COM_DTL_CD_NM\">특정월 반복</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static21_00_01","10","37",null,"32","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_00","702","37","138","32",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("신규 상품 요청");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoNEW_PRD_REQ_YN","Static21_00_00:10","44","146","19",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_columncount("3");
            obj.set_direction("horizontal");
            obj.set_rowcount("1");
            obj.set_innerdataset("dsComUSE_YN");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00","10","37","165","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("회원가입 지정 승인자");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoMBR_JOIN_DSGN_APPRR_USE_YN","Static21_00:10","44","145","19",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_columncount("3");
            obj.set_direction("horizontal");
            obj.set_rowcount("1");
            obj.set_innerdataset("dsComUSE_YN");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            this.addChild(obj.name, obj);

            obj = new Button("btnMbrJoinAuthMulti","625","41","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_multi");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnMbrJoinAuthText","652","41","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_document");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMBR_JOIN_APPRR_IDS","356","41","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMBR_JOIN_APPRR_NMS","490","41","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","9","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Mall 정보 관리");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00","10","104",null,"32","10",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_02","10","104","165","32",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("계정 사용");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoACCT_USE_YN","Static21_00_02:10","111","145","19",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_columncount("3");
            obj.set_direction("horizontal");
            obj.set_rowcount("1");
            obj.set_innerdataset("dsComUSE_YN");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","10","76","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("예산 관리");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_00","356","104","165","32",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("비용 부서 변경 가능");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoCOST_DEPT_CHG_PSB_YN","Static21_00_02_00:10","111","145","19",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_columncount("3");
            obj.set_direction("horizontal");
            obj.set_rowcount("1");
            obj.set_innerdataset("dsComUSE_YN");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00_00","10","135",null,"32","10",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_00_00_00","700","135","140","32",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("예산 이월 구분");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_01","10","135","165","32",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("예산 사용");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoBGT_AUTH_USE_YN","Static21_00_02_01:10","142","145","19",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_columncount("3");
            obj.set_direction("horizontal");
            obj.set_rowcount("1");
            obj.set_innerdataset("dsComUSE_YN");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_00_00","356","135","165","32",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("예산 초과 허용");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoBGT_OVER_AGD_YN","Static21_00_02_00_00:10","142","145","19",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_columncount("3");
            obj.set_direction("horizontal");
            obj.set_rowcount("1");
            obj.set_innerdataset("dsComUSE_YN");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00_00_00","10","166",null,"32","10",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_00_00_00_00","700","166","140","32",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("예산 마감일");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_01_00","10","166","165","32",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("상위 계정 예산 사용");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoHRNK_BGT_USE_YN","Static21_00_02_01_00:10","173","145","19",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_columncount("3");
            obj.set_direction("horizontal");
            obj.set_rowcount("1");
            obj.set_innerdataset("dsComUSE_YN");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_00_00_00","356","166","165","32",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("분기별 관리 사용");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoQRT_BGT_USE_YN","Static21_00_02_00_00_00:10","173","145","19",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_columncount("3");
            obj.set_direction("horizontal");
            obj.set_rowcount("1");
            obj.set_innerdataset("dsComUSE_YN");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00_00_00_00","10","197",null,"32","10",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_01_00_00","10","197","165","32",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("귀속 부서 사용");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00_01","10","264",null,"32","10",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_02","10","264","165","32",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("결재 사용");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoAPRV_AUTH_USE_YN","Static21_00_02_02:10","271","145","19",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_columncount("3");
            obj.set_direction("horizontal");
            obj.set_rowcount("1");
            obj.set_innerdataset("dsComUSE_YN");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","10","236","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("발주, 정산 및 세금계산서 발행 관리");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_00_02","356","264","165","32",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("기본 결재자 변경");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoBASIS_APRV_CHG_PSB_YN","Static21_00_02_00_02:10","271","145","19",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_columncount("3");
            obj.set_direction("horizontal");
            obj.set_rowcount("1");
            obj.set_innerdataset("dsComUSE_YN");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00_00_01","10","295",null,"32","10",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_01_01","10","295","165","32",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("발주 사용");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoORD_AUTH_USE_YN","Static21_00_02_01_01:10","302","145","19",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_columncount("3");
            obj.set_direction("horizontal");
            obj.set_rowcount("1");
            obj.set_innerdataset("dsComUSE_YN");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_00_00_01","356","295","165","32",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("기본 발주자 변경");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoBASIS_OPSN_CHG_YN","Static21_00_02_00_00_01:10","302","145","19",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_columncount("3");
            obj.set_direction("horizontal");
            obj.set_rowcount("1");
            obj.set_innerdataset("dsComUSE_YN");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00_01_00","10","362",null,"32","10",null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_02_00","10","362","165","32",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("자동 입고 검수");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","10","334","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("입고 및 재고 관리");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_00_02_00","356","362","165","32",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("입고 레벨");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00_01_00_00","10","434",null,"32","10",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_02_00_00","10","434","165","32",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("상품별 구매 사유 필수");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","10","406","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("카트 관리");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_00_02_00_00","356","434","165","32",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("장바구니 주문 대행자 사용");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoODR_DLGTE_USE_YN","Static21_00_02_00_02_00_00:10","441","145","19",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_columncount("3");
            obj.set_direction("horizontal");
            obj.set_rowcount("1");
            obj.set_innerdataset("dsComUSE_YN");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00_00_01_00_00","10","465",null,"32","10",null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCART_PURG_RSN_MAND_SPR_CD","10","465","165","32",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("장바구니 구매 사유 필수");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_00_01_00_00_00","700","434","140","32",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("장바구니 참조자 사용");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoREFPSN_USE_YN","Static21_00_02_00_01_00_00_00:10","442","145","19",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_columncount("3");
            obj.set_direction("horizontal");
            obj.set_rowcount("1");
            obj.set_innerdataset("dsComUSE_YN");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","10","504","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("카트 주문 불가 관리");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Button("btnCncl","462","624","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","537","624","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbBGT_FW_SPR_CD","Static21_00_00_00_00:10","141","145","21",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_innerdataset("dsComBGT_FW_SPR_CD");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            obj.set_text("Combo00");
            obj.set_value("bind:BGT_FW_SPR_CD");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbBGT_CLOS_DD_CD","Static21_00_00_00_00_00:10","171","145","21",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_innerdataset("dsComBGT_CLOS_DD_CD");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            obj.set_text("");
            obj.set_value("bind:BGT_CLOS_DD_CD");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbBLNG_DEPT_USE_SPR_CD","Static21_00_02_01_00_00:10","203","145","21",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_innerdataset("dsComCTL_AUTH_USE_SPR_CD");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            obj.set_text("Combo00");
            obj.set_value("bind:BGT_FW_SPR_CD");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbGI_VERF_PROC_CD","Static21_00_02_02_00:10","367","145","21",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_innerdataset("dsComGI_VERF_PROC_CD");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            obj.set_text("");
            obj.set_value("bind:GI_VERF_PROC_CD");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbGI_LVL_CD","Static21_00_02_00_02_00:10","368","145","21",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_innerdataset("dsComGI_LVL_CD");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            obj.set_text("Combo00");
            obj.set_value("bind:BGT_FW_SPR_CD");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btnTest","800","7","170","26",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("Test Data");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","466","510",null,"20","10",null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("※ 설정 당월에만 주문 불가 처리되며, 반복 여부를 체크 시 매월 동일 설정이 적용됩니다.");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00_01_00_01","10","532",null,"32","10",null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_02_00_00_00","143","532","125","32",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("구분");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00_00_01_00_02","143","563","125","32",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkCART_USE_DIS_DT_YN","153","569","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("기간");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkCART_USE_DIS_AMT_YN","213","569","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("금액");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00_00_01_00_02_00","267","563","176","32",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_02_00_00_00_00","267","532","176","32",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("반복여부");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_02_00_00_00_00_00","629","532","95","32",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("시작일");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00_00_01_00_02_00_00","629","563","95","32",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_02_00_00_00_00_00_00","11","532","134","32",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("사용여부");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00_00_01_00_02_00_00_00","11","563","134","32",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoCART_USE_DIS_USEYN","23","570","114","19",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_columncount("3");
            obj.set_direction("horizontal");
            obj.set_rowcount("1");
            obj.set_innerdataset("dsComUSE_YN");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbCART_USE_DIS_STR_DD","634","568","85","21",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_innerdataset("dsComCURR_DD");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            obj.set_text("");
            obj.set_value("bind:BGT_FW_SPR_CD");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_02_00_00_00_00_00_01","723","532","97","32",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("종료일");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00_00_01_00_02_00_00_01","723","563","97","32",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbCART_USE_DIS_END_DD","729","568","85","21",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_innerdataset("dsComCURR_DD");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            obj.set_text("Combo00");
            obj.set_value("bind:BGT_FW_SPR_CD");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_02_00_00_00_00_00_01_00","819","532","241","32",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("장바구니 주문불가 금액");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00_00_01_00_02_00_00_01_00","819","563","241","32",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCART_USE_DIS_STR_AMT","824","569","109","20",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCART_USE_DIS_END_AMT","946","569","109","20",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","923","569","34","20",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbCART_PURG_RSN_USE_SPR_CD","Static21_00_02_02_00_00:10","441","145","21",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_innerdataset("dsComCTL_AUTH_USE_SPR_CD");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            obj.set_value("bind:CART_PURG_RSN_USE_SPR_CD");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbCART_PURG_RSN_MAND_SPR_CD","staCART_PURG_RSN_MAND_SPR_CD:10","471","145","21",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_innerdataset("dsComCTL_AUTH_USE_SPR_CD");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            obj.set_value("bind:CART_PURG_RSN_USE_SPR_CD");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetGi","cmbGI_LVL_CD:4","368","95","20",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("상세설정");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_01_01_00_00_00","356","465","165","32",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("고객사 PO 사용\r\n(장바구니 등록)");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbCCO_PO_USE_SPR_CD00","Static21_00_02_01_01_00_00_00:10","471","145","21",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_innerdataset("dsComCTL_AUTH_USE_SPR_CD");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            obj.set_value("bind:CART_PURG_RSN_USE_SPR_CD");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_00_00_00_01","700","104","140","32",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("계정 변경 가능");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoACCT_CHG_PSB_YN","Static21_00_00_00_00_01:10","110","145","19",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_columncount("3");
            obj.set_direction("horizontal");
            obj.set_rowcount("1");
            obj.set_innerdataset("dsComUSE_YN");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NM");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_02_00_00_00_00_00_02","442","532","188","32",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("적용년월");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00_00_01_00_02_00_01","442","563","188","32",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_year","447","568","93","21",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_innerdataset("ds_setYear");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("");
            obj.set_value("bind:BGT_FW_SPR_CD");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_month","544","568","80","21",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_innerdataset("ds_setMonth");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("");
            obj.set_value("bind:BGT_FW_SPR_CD");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Radio("cbo_reptYn","273","567","165","24",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_innerdataset("ds_rptYn");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_direction("vertical");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1070,680,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","rdoNEW_PRD_REQ_YN","value","dsCtlAuthInfo","NEW_PRD_REQ_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_ctrl.form.rdoSRVON_OCAR_UT_YN00","value","dsOprunitDtl","HDV_DLV_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","rdoMBR_JOIN_DSGN_APPRR_USE_YN","value","dsCtlAuthInfo","MBR_JOIN_DSGN_APPRR_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtMBR_JOIN_APPRR_IDS","value","dsCtlAuthInfo","MBR_JOIN_APPRR_IDS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtMBR_JOIN_APPRR_NMS","value","dsCtlAuthInfo","MBR_JOIN_APPRR_NMS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","rdoACCT_USE_YN","value","dsCtlAuthInfo","ACCT_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","rdoCOST_DEPT_CHG_PSB_YN","value","dsCtlAuthInfo","COST_DEPT_CHG_PSB_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","rdoBGT_AUTH_USE_YN","value","dsCtlAuthInfo","BGT_AUTH_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","rdoBGT_OVER_AGD_YN","value","dsCtlAuthInfo","BGT_OVER_AGD_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","rdoHRNK_BGT_USE_YN","value","dsCtlAuthInfo","HRNK_BGT_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","rdoQRT_BGT_USE_YN","value","dsCtlAuthInfo","QRT_BGT_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","rdoAPRV_AUTH_USE_YN","value","dsCtlAuthInfo","APRV_AUTH_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","rdoBASIS_APRV_CHG_PSB_YN","value","dsCtlAuthInfo","BASIS_APRV_CHG_PSB_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","rdoORD_AUTH_USE_YN","value","dsCtlAuthInfo","ORD_AUTH_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","rdoBASIS_OPSN_CHG_YN","value","dsCtlAuthInfo","BASIS_OPSN_CHG_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","rdoREFPSN_USE_YN","value","dsCtlAuthInfo","REFPSN_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","cmbBGT_FW_SPR_CD","value","dsCtlAuthInfo","BGT_FW_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","cmbBGT_CLOS_DD_CD","value","dsCtlAuthInfo","BGT_CLOS_DD_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","cmbBLNG_DEPT_USE_SPR_CD","value","dsCtlAuthInfo","BLNG_DEPT_USE_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","cmbGI_VERF_PROC_CD","value","dsCtlAuthInfo","GI_VERF_PROC_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","cmbGI_LVL_CD","value","dsCtlAuthInfo","GI_LVL_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","rdoODR_DLGTE_USE_YN","value","dsCtlAuthInfo","ODR_DLGTE_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","rdoCART_USE_DIS_USEYN","value","dsCtlAuthInfo","CART_USE_DIS_USEYN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","cmbCART_USE_DIS_STR_DD","value","dsCtlAuthInfo","CART_USE_DIS_STR_DD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","cmbCART_USE_DIS_END_DD","value","dsCtlAuthInfo","CART_USE_DIS_END_DD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","chkCART_USE_DIS_DT_YN","value","dsCtlAuthInfo","CART_USE_DIS_DT_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","chkCART_USE_DIS_AMT_YN","value","dsCtlAuthInfo","CART_USE_DIS_AMT_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","edtCART_USE_DIS_STR_AMT","value","dsCtlAuthInfo","CART_USE_DIS_STR_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","edtCART_USE_DIS_END_AMT","value","dsCtlAuthInfo","CART_USE_DIS_END_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","cmbCART_PURG_RSN_USE_SPR_CD","value","dsCtlAuthInfo","CART_PURG_RSN_USE_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","cmbCART_PURG_RSN_MAND_SPR_CD","value","dsCtlAuthInfo","CART_PURG_RSN_MAND_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","edtMBR_JOIN_APPRR_IDS","tooltiptext","dsCtlAuthInfo","MBR_JOIN_APPRR_IDS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","edtMBR_JOIN_APPRR_NMS","tooltiptext","dsCtlAuthInfo","MBR_JOIN_APPRR_NMS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","cmbCCO_PO_USE_SPR_CD00","value","dsCtlAuthInfo","CCO_PO_USE_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","rdoACCT_CHG_PSB_YN","value","dsCtlAuthInfo","ACCT_CHG_PSB_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","cbo_year","value","dsCtlAuthInfo","CART_USE_DIS_REPT_BSS_YM_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","cbo_month","value","dsCtlAuthInfo","CART_USE_DIS_REPT_BSS_YM_MONTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","cbo_reptYn","value","dsCtlAuthInfo","CART_USE_DIS_REPT_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MA_47.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_47.xfdl","OD::odUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_47.xfdl","CC::CcUtils.xjs");
        this.registerScript("SSP_BO_MA_47.xfdl", function() {
        /*******************************************************
          PROJECT NAME : SSP
          CREATION DATES :
        *******************************************************/

        // 공통형 스크립트 인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e) {
        	this.gfn_formOnLoad(this);  //공통 함수 호출(필수)

        	// 단축키 등록
        	this.fn_regShortCutMethod();
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fnSelectCtlAuthInfo=function() {
        	trace('this.fnSelectCtlAuthInfo()');

        	var sSvc  = 'selectCtlAuthInfo';
        	var sUrl  = '/bo/cust/oprunit/ctl/auth/detail.do';
        	var inDs  = 'dsParam=dsParam';
        	var outDs = 'dsCtlAuthInfo=dsCtlAuthInfo'  ;
        	var arg   = '';

        	trace('[sUrl:'+ sUrl +']');
        	this.gfn_transaction(sSvc, sUrl, inDs, outDs, arg, 'fnSelectCtlAuthInfoClbk');
        }
        this.fnSaveCtlAuthInfo=function() {

        	var sSvc  = 'saveCtlAuthInfo';
        	var sUrl  = '/bo/cust/oprunit/ctl/auth/save.do';
        	var inDs  = 'dsCtlAuthInfo=dsCtlAuthInfo';
        	var outDs = '';
        	var arg   = '';

        	trace('[sUrl:'+ sUrl +']');
        	this.gfn_transaction(sSvc, sUrl, inDs, outDs, arg, 'fnSaveCtlAuthInfoClbk');
        }

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        // 공통코드 조회 콜백
        this.fnCcComCodesClbk=function(rCodes, rCode, rMesg) {
        	trace('this.fnCcComCodesClbk() >>' + rCodes);

         	trace('this.fnCcComCodesClbk[ this.dsParam:'+ this.dsParam +']');

         	var props = [ 'coCd', 'bzplcId', 'oprUnitId' ];
         	if (this.cnvtExtnlArgs2Dataset(this.parent, 'dsParam', props) == null) { return; }
        	this.fnSelectCtlAuthInfo();
        }

        // 제어권한 조회 콜백
        this.fnSelectCtlAuthInfoClbk=function(rCodes, rCode, rMesg) {
        	trace('this.fnSelectCtlAuthInfo() >>' + rCodes);
        	trace('this.dsCtlAuthInfo > [BGT_FW_SPR_CD:'+ this.dsCtlAuthInfo.getColumn(0, 'BGT_FW_SPR_CD') +']');
        	trace('this.fnSelectCtlAuthInfo[ this.dsParam:'+ this.dsParam +']');

        	this.uiCtl('1');

        	// 22.07.07 테스트 추가 : 구분/반복여부 등
        	this.fn_setReptYn('1');

        	// 22.07.22 테스트 추가 : 자동입고검수 자동인 경우 입고레벨 비활성화
        	this.fn_firstSettingGiVerf();
        }

        // 제어권한 저장 콜백
        this.fnSaveCtlAuthInfoClbk=function(rCodes, rCode, rMesg) {
        	if(rCode != -1){
        		trace('this.fnSaveCtlAuthInfoClbk()');
        		alert(this.fn_getMessage("ERRC000081"));
        		this.fn_search();
        	}
        }

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function() {
        	trace('this.cfn_formInit() > [refCdGrpNm:'+ this.parent['refCdGrpNm'] +']');

        	// 화면에서 사용하는 공통코드 호출
        	this.ccComCodes([
        		  '선택:CURR_DD'
        		, 'USE_YN'
        		, 'BGT_FW_SPR_CD'
        		, 'BGT_CLOS_DD_CD'
        		, '선택:GI_LVL_CD'
        		, 'APRVL_PST_CD'
        		, 'BLNG_DEPT_USE_SPR_CD'
        		, 'CTL_AUTH_USE_SPR_CD'
        		, 'GI_VERF_PROC_CD'
        	], 'fnCcComCodesClbk');

        	// 22.07.07 테스트 추가 : 적용연월
        	this.fn_setYearMonth();
        };

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.testCtlAuth=function() {
        	this.cnvtObject2Dataset('dsParam', { coCd: '1000', bzplcId: 'S000013507', oprUnitId: 'S000013644' });
        	this.fnSelectCtlAuthInfo();
        }

        this.uiCtl=function(type){
        	var ds=this.dsCtlAuthInfo,
        		bCtls={},
        		bFlds=[
        			[ 'MBR_JOIN_DSGN_APPRR_USE_YN', ',Y'    ],  // 회원가입 지정 승인자
        			[ 'GI_LVL_CD'                 , ',1,2'  ],  // 입고 레벨별 입고 책임자
        			[ 'ACCT_USE_YN'               , ',Y'    ],  // 계정 사용
        			[ 'COST_DEPT_CHG_PSB_YN'      , ',Y'    ],  // 비용 부서 변경 가능
        			[ 'BGT_AUTH_USE_YN'           , ',Y'    ],  // 예산 사용
        			[ 'APRV_AUTH_USE_YN'          , ',Y'    ],  // 결제 사용
        			[ 'ORD_AUTH_USE_YN'           , ',Y'    ],  // 발주 사용
        			[ 'CART_USE_DIS_USEYN'        , ',Y'    ],  // 카트 사용불가 - 사용여부
        			[ 'CART_USE_DIS_DT_YN'        , ',Y'    ],  // 카트 사용불가 - 기간
        			[ 'CART_USE_DIS_AMT_YN'       , ',Y'    ],  // 카트 사용불가 - 금액
        		]
        	;
        	for (var i in bFlds) {
        		var bKey=bFlds[i][0], bVal=ds.getColumn(0, bKey), bCnf=bFlds[i][1];
        		bCtls[bKey]=(bCnf.indexOf(','+bVal) > -1);
        	}

        	// 회원가입 지정 승인자
        	this.edtMBR_JOIN_APPRR_IDS   .set_visible(bCtls.MBR_JOIN_DSGN_APPRR_USE_YN);
        	this.edtMBR_JOIN_APPRR_NMS   .set_visible(bCtls.MBR_JOIN_DSGN_APPRR_USE_YN);
        	this.btnMbrJoinAuthMulti     .set_visible(bCtls.MBR_JOIN_DSGN_APPRR_USE_YN);
        	this.btnMbrJoinAuthText      .set_visible(bCtls.MBR_JOIN_DSGN_APPRR_USE_YN);
        	if (!bCtls.MBR_JOIN_DSGN_APPRR_USE_YN) {
        		this.edtMBR_JOIN_APPRR_IDS   .set_value(null);
        		this.edtMBR_JOIN_APPRR_NMS   .set_value(null);
        	}

        	// 입고 레벨별 입고 책임자
        	this.btnSetGi                .set_visible(bCtls.GI_LVL_CD                 );

        	// 계정 사용
        	this.rdoCOST_DEPT_CHG_PSB_YN .set_enable (bCtls.ACCT_USE_YN               );
        	this.rdoACCT_CHG_PSB_YN      .set_enable (bCtls.ACCT_USE_YN               );
        	this.rdoBGT_AUTH_USE_YN      .set_enable (bCtls.ACCT_USE_YN               );
        	this.rdoBGT_OVER_AGD_YN      .set_enable (bCtls.ACCT_USE_YN               );
        	this.cmbBGT_FW_SPR_CD        .set_enable (bCtls.ACCT_USE_YN               );
        	this.rdoHRNK_BGT_USE_YN      .set_enable (bCtls.ACCT_USE_YN               );
        	this.rdoQRT_BGT_USE_YN       .set_enable (bCtls.ACCT_USE_YN               );
        	this.cmbBGT_CLOS_DD_CD       .set_enable (bCtls.ACCT_USE_YN               );
        	if (!bCtls.ACCT_USE_YN) {
        		this.rdoBGT_AUTH_USE_YN      .set_value('N');

        		bCtls.COST_DEPT_CHG_PSB_YN=bCtls.ACCT_USE_YN;
        		bCtls.BGT_AUTH_USE_YN     =bCtls.ACCT_USE_YN;
        	}

        	// 비용 부서 변경 가능
        	this.rdoACCT_CHG_PSB_YN      .setInnerDataset(bCtls.COST_DEPT_CHG_PSB_YN ? this.dsComUSE_Y : this.dsComUSE_YN);
        	if (bCtls.COST_DEPT_CHG_PSB_YN) { this.rdoACCT_CHG_PSB_YN.set_value('Y'); }

        	// 예산 사용
        	this.rdoBGT_OVER_AGD_YN      .set_enable (bCtls.BGT_AUTH_USE_YN           );
        	this.cmbBGT_FW_SPR_CD        .set_enable (bCtls.BGT_AUTH_USE_YN           );
        	this.rdoHRNK_BGT_USE_YN      .set_enable (bCtls.BGT_AUTH_USE_YN           );
        	this.rdoQRT_BGT_USE_YN       .set_enable (bCtls.BGT_AUTH_USE_YN           );
        	this.cmbBGT_CLOS_DD_CD       .set_enable (bCtls.BGT_AUTH_USE_YN           );
        	if (!bCtls.BGT_AUTH_USE_YN) {
        		this.rdoBGT_OVER_AGD_YN      .set_value ('N');
        		//this.cmbBGT_FW_SPR_CD        .set_value('N');
        		this.rdoHRNK_BGT_USE_YN      .set_value ('N');
        		this.rdoQRT_BGT_USE_YN       .set_value ('N');
        	}

        	// 결제 사용
        	this.rdoBASIS_APRV_CHG_PSB_YN.set_enable (bCtls.APRV_AUTH_USE_YN          );

        	// 발주 사용
        	this.rdoBASIS_OPSN_CHG_YN    .set_enable (bCtls.ORD_AUTH_USE_YN           );

        	// 카트 사용불가 사용여부
        	this.chkCART_USE_DIS_DT_YN   .set_enable (bCtls.CART_USE_DIS_USEYN        );
        	this.chkCART_USE_DIS_AMT_YN  .set_enable (bCtls.CART_USE_DIS_USEYN        );
        	if (!bCtls.CART_USE_DIS_USEYN) {
        		this.chkCART_USE_DIS_DT_YN   .set_value(null);
        		this.chkCART_USE_DIS_AMT_YN  .set_value(null);
        		this.cbo_reptYn .set_value(null);

        		bCtls.CART_USE_DIS_DT_YN = bCtls.CART_USE_DIS_AMT_YN = false;
        	}

        	// 카트 사용불가 - 기간 체크박스
        	this.cmbCART_USE_DIS_STR_DD  .set_enable (bCtls.CART_USE_DIS_DT_YN        );
        	this.cmbCART_USE_DIS_END_DD  .set_enable (bCtls.CART_USE_DIS_DT_YN        );
        	this.cbo_reptYn 			 .set_enable (bCtls.CART_USE_DIS_DT_YN        );
        	if (!bCtls.CART_USE_DIS_DT_YN) {
        		this.cmbCART_USE_DIS_STR_DD  .set_value(null);
        		this.cmbCART_USE_DIS_END_DD  .set_value(null);
        		this.cbo_reptYn 			 .set_value('N');
        	}

        	// 카트 사용불가 - 금액 체크박스
        	this.edtCART_USE_DIS_STR_AMT .set_enable (bCtls.CART_USE_DIS_AMT_YN       );
        	this.edtCART_USE_DIS_END_AMT .set_enable (bCtls.CART_USE_DIS_AMT_YN       );
        	if (!bCtls.CART_USE_DIS_AMT_YN) {
        		this.edtCART_USE_DIS_STR_AMT .set_value(null);
        		this.edtCART_USE_DIS_END_AMT .set_value(null);
        	}

        	this.fn_setDateCombo();
        	this.fn_setReptYn(type);
        }

        // 적용연월 셋팅
        this.fn_setYearMonth = function() {
        	var objDate = new Date();

        	this.ds_setYear.clearData();
        	this.ds_setYear.insertRow(0);
        	this.ds_setYear.setColumn(0,"COM_DTL_CD", null);
        	this.ds_setYear.setColumn(0,"COM_DTL_CD_NM","선택");
        	for(var i=1; i<=3; i++){
        		this.ds_setYear.insertRow(i);
        		this.ds_setYear.setColumn(i,"COM_DTL_CD"	,objDate.getFullYear()+i-1		);
        		this.ds_setYear.setColumn(i,"COM_DTL_CD_NM" ,objDate.getFullYear()+i-1+"년" );
        	}

        	this.ds_setMonth.clearData();
        	this.ds_setMonth.insertRow(0);
        	this.ds_setMonth.setColumn(0,"COM_DTL_CD", null);
        	this.ds_setMonth.setColumn(0,"COM_DTL_CD_NM","선택");
        	for(var j=1; j<=12; j++){
        		this.ds_setMonth.insertRow(j);
        		this.ds_setMonth.setColumn(j,"COM_DTL_CD"	 ,j.toString().padLeft(2, '0') );
        		this.ds_setMonth.setColumn(j,"COM_DTL_CD_NM" ,j+"월" );
        	}
        }

        this.fn_setDateCombo = function() {
        	var year = this.cbo_year.value;
        	var month = this.cbo_month.value;

        	if(year != '' && year!=null && year!='undefinde' && month != '' && month!=null && month!='undefinde'){
        		this.cmbCART_USE_DIS_STR_DD.set_enable(true);
        		this.cmbCART_USE_DIS_END_DD.set_enable(true);

        		var ym = year.toString() + month.toString();
        		var strDate = this.gfn_getLastDate(ym);
        		var lastDate = parseInt(strDate.substr(6,2));

        		this.dsComCURR_DD.clearData();
        		this.dsComCURR_DD.insertRow(0);
        		this.dsComCURR_DD.setColumn(0,"NM","선택");
        		for(var i=1; i<=parseInt(lastDate); i++){
        			this.dsComCURR_DD.insertRow(i);
        			this.dsComCURR_DD.setColumn(i,"CD" ,i.toString().padLeft(2, '0') 		);
        			this.dsComCURR_DD.setColumn(i,"NM" ,i.toString().padLeft(2, '0')+" 일"  );
        		}
        	}
        }

        this.fn_setReptYn = function(type) {
        	var reptYn = this.cbo_reptYn.value;

        	if(reptYn=='Y'){
        		this.cbo_year .set_enable (false);
        		this.cbo_month.set_enable (false);
        		this.cbo_year .set_value(null);
        		this.cbo_month.set_value(null);

        		this.cmbCART_USE_DIS_STR_DD.set_enable(true);
        		this.cmbCART_USE_DIS_END_DD.set_enable(true);

        		var lastDate = 31;
        		this.dsComCURR_DD.clearData();
        		this.dsComCURR_DD.insertRow(0);
        		this.dsComCURR_DD.setColumn(0,"NM","선택");
        		for(var i=1; i<=parseInt(lastDate); i++){
        			this.dsComCURR_DD.insertRow(i);
        			this.dsComCURR_DD.setColumn(i,"CD" ,i.toString().padLeft(2, '0') 		);
        			this.dsComCURR_DD.setColumn(i,"NM" ,i.toString().padLeft(2, '0')+" 일"  );
        		}
        	}else if(reptYn=='N'){
        		if(this.dsCtlAuthInfo.getColumn(0, 'CART_USE_DIS_DT_YN') == 'Y' ){
        			this.cbo_year .set_enable (true);
        			this.cbo_month.set_enable (true);
        		}else{
        			this.cbo_year .set_enable (false);
        			this.cbo_month.set_enable (false);
        			this.cbo_year .set_value (null);
        			this.cbo_month.set_value (null);
        		}

        		if(type != '1' && this.dsCtlAuthInfo.getColumn(0, "CART_USE_DIS_DT_YN") != 'Y'){
        			// 첫 조회인 경우 특정월반복이면 시작일 종료일을 보여줘야함
        			this.cmbCART_USE_DIS_STR_DD.set_enable(false);
        			this.cmbCART_USE_DIS_END_DD.set_enable(false);
        			this.cmbCART_USE_DIS_STR_DD.set_value(null);
        			this.cmbCART_USE_DIS_END_DD.set_value(null);
        		}

        		if(this.dsCtlAuthInfo.getColumn(0, "CART_USE_DIS_USEYN") != 'Y'){
        			this.cbo_year .set_enable (false);
        			this.cbo_month.set_enable (false);
        			this.cbo_year .set_value(null);
        			this.cbo_month.set_value(null);
        		}
        	}else{
        		this.cbo_year .set_enable (false);
        		this.cbo_month.set_enable (false);
        		this.cbo_year .set_value(null);
        		this.cbo_month.set_value(null);
        		this.cmbCART_USE_DIS_STR_DD.set_enable(false);
        		this.cmbCART_USE_DIS_END_DD.set_enable(false);
        		this.cmbCART_USE_DIS_STR_DD .set_value(null);
        		this.cmbCART_USE_DIS_END_DD.set_value(null);
        	}
        }

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
        this.btnTest_onclick = function(obj,e)
        {
        	trace('this.btnTest_onclick()');
        	this.testCtlAuth();
        };


        // 회원가입 지정 승인자 팝업
        this.btnMbrJoinAuthMulti_onclick = function(obj,e) {
        	var sMbrJoinAUth = this.dsCtlAuthInfo.getColumn(0, 'MBR_JOIN_DSGN_APPRR_USE_YN');
        	if ('Y'!=sMbrJoinAUth) { return; }

        	var p = {
        		coCd     : this.dsParam.getColumn(0, 'coCd'     ),
        		bzplcId  : this.dsParam.getColumn(0, 'bzplcId'  )
        	};
        	this.$popup(this).mMbr(p, function(rID, rJson){
        		if (undefined==rJson) { return; }  trace("rJson: "+ rJson);
        		var oJson=JSON.parse(rJson), sIDs='', sNMs='';  trace('[oJson.length:'+ oJson.length +']');

        		for (var j in oJson) {  // trace('[typeof oJson[j]"'+ (typeof oJson[j]) +']'+ oJson[j]);
        			var sRow=oJson[j], oRow=JSON.parse(sRow);
        			sIDs += (sIDs==''?'':',')+oRow['MBR_ID'];
        			sNMs += (sNMs==''?'':',')+oRow['MBR_NM'];
        		}
        		var ds=this.dsCtlAuthInfo;  // trace('[sIDs:'+ sIDs +'][sNMs:'+ sNMs +'][ds:'+ ds.id +':'+ ds +':'+ ds.rowcount +']');
        		if (ds.rowcount < 1) { trace('addRow()'); ds.addRow(); }

        		ds.setColumn(0, 'MBR_JOIN_APPRR_IDS', sIDs);
        		ds.setColumn(0, 'MBR_JOIN_APPRR_NMS', sNMs);
        	});
        };
        this.btnMbrJoinAuthText_onclick = function(obj,e) {
        	var sMbrJoinAUth = this.dsCtlAuthInfo.getColumn(0, 'MBR_JOIN_DSGN_APPRR_USE_YN');
        	if ('Y'!=sMbrJoinAUth) { return; }
        /*
        	var p = {
        		coCd     : this.dsParam.getColumn(0, 'coCd'     ),
        		bzplcId  : this.dsParam.getColumn(0, 'bzplcId'  ),
        		oprUnitId: this.dsParam.getColumn(0, 'oprUnitId'),
        	};
        	this.$popup(this).mTexts({  }, function(rID, rJson){
        		if (undefined==rJson) { return; }  trace("rJson: "+ rJson);
        	});
        */
        	trace('btnMbrJoinAuthText_onclick');
        	var btnObj=this.btnMbrJoinAuthText;
        	this.fn_showTareaInput(this.name, 'MBR_ID', this.edtMBR_JOIN_APPRR_IDS.value, 'popupTareaClbk', 160, 300);
        };
        this.popupTareaClbk=function(sPopupId, sRetValue){
        	var resData = JSON.parse(sRetValue), rtnData = '', sIdList = '';
        	for(var i = 0; i < resData.length; i++) {
        		rtnData = JSON.parse(resData[i]);
        		sIdList += rtnData.VALUE +",";
        	}
        	this.edtMBR_JOIN_APPRR_IDS.set_value( sIdList );
        };

        // 입고레벨 입고책임자 설정
        this.btnSetGi_onclick = function(obj,e)
        {
        	var giLvlChrpsnPopup = { 1: { title: '운영단위 입고 책임자', url:'CC::SSP_BO_MA_69.xfdl' }, 2: { title: '부서 입고 책임자', url:'CC::SSP_BO_MA_68.xfdl' } };
        	// 입고레벨(GI_LVL_CD)에 따라 표시하는 화면이 다름. (1:운영단위,2:부서입고책임자)
        	var sGiLvlCd=this.dsCtlAuthInfo.getColumn(0, 'GI_LVL_CD'), sGiLvlPop=giLvlChrpsnPopup[sGiLvlCd];
        	if (sGiLvlPop == undefined) { return; }

        	var args = {
        		  coCd       : this.dsCtlAuthInfo.getColumn(0, 'CO_CD'      )
        		, bzplcId    : this.dsCtlAuthInfo.getColumn(0, 'BZPLC_ID'   ), bzplcNm    : this.dsCtlAuthInfo.getColumn(0, 'BZPLC_NM'   )
        		, oprUnitId  : this.dsCtlAuthInfo.getColumn(0, 'OPR_UNIT_ID'), oprUnitNm  : this.dsCtlAuthInfo.getColumn(0, 'OPR_UNIT_NM')
        	};

        	this.gfn_openPopup('bzplcSetDeptGiPop', sGiLvlPop.url, args, '', { titlebar: 'true', title: sGiLvlPop.title });
        };

        // 저장버튼 클릭
        this.btnSave_onclick = function(obj,e)
        {
        	// Validation
        	// S01. 회원가입 지정 승인자 사용시, 승인자 정보가 1인이상 지정확인
        	// S02. 화학물질결재자 사용시, 결재위치, 결재자1 은 필수 입력

        	// S03. 카트주문불가 관리 > 사용여부 사용시, 기간 또는 금액을 입력체크 필요.
        	var cDisIf={
        		USEYN  : this.dsCtlAuthInfo.getColumn(0, 'CART_USE_DIS_USEYN'  ),

        		// S03-01. 카트주문불가 > 기간 > 시작일 종료일 입력 및 값크기
        		DT_YN  : this.dsCtlAuthInfo.getColumn(0, 'CART_USE_DIS_DT_YN'  ),
        		STR_DD : this.dsCtlAuthInfo.getColumn(0, 'CART_USE_DIS_STR_DD' ),
        		END_DD : this.dsCtlAuthInfo.getColumn(0, 'CART_USE_DIS_END_DD' ),

        		// S03-02. 카트주문불가 > 금액 > 주문최소 금액, 주문 최대금액 입력 및 크기
        		AMT_YN : this.dsCtlAuthInfo.getColumn(0, 'CART_USE_DIS_AMT_YN' ),
        		STR_AMT: Number(this.dsCtlAuthInfo.getColumn(0, 'CART_USE_DIS_STR_AMT')),
        		END_AMT: Number(this.dsCtlAuthInfo.getColumn(0, 'CART_USE_DIS_END_AMT')),

        		// 22.07.07 반복여부, 적용년월 추가
        		REPT_YN: this.dsCtlAuthInfo.getColumn(0, 'CART_USE_DIS_REPT_YN'),
        		REPT_Y : this.dsCtlAuthInfo.getColumn(0, 'CART_USE_DIS_REPT_BSS_YM_YEAR'),
        		REPT_M : this.dsCtlAuthInfo.getColumn(0, 'CART_USE_DIS_REPT_BSS_YM_MONTH'),
        	};  trace('<cDisIf>'+ JSON.stringify( cDisIf ) +'</cDisIf>');

        	if ('Y'==cDisIf.USEYN && 'Y'==cDisIf.DT_YN) {
        		if ( (this.gfn_isNull(cDisIf.STR_DD) || 0 > this.dsComCURR_DD.findRow('CD', cDisIf.STR_DD))
        				|| (this.gfn_isNull(cDisIf.END_DD) || 0 > this.dsComCURR_DD.findRow('CD', cDisIf.END_DD)) ) {
        			alert(this.fn_getMessage("ERRC000258")); // 카트주문불가 관리에서 기간사용일 경우 시작일, 종료일 정보는 필수입력 입니다.
        			return;
        		} else if (cDisIf.STR_DD > cDisIf.END_DD) {
        			alert(this.fn_getMessage("ERRC000259")); // 카트주문불가 관리에서 기간 시작일은 종료일보다 작거나 같은 값이여야 합니다.
        			return;
        		} else if ("N"==cDisIf.REPT_YN && (this.gfn_isNull(cDisIf.REPT_Y) || this.gfn_isNull(cDisIf.REPT_M))){
        			alert(this.fn_getMessage("ERRC000260")); // 카트주문불가 관리에서 특정월 반복인 경우 적용년월은 필수입력 입니다.
        			return;
        		}
        	}
        	if ('Y'==cDisIf.USEYN && 'Y'==cDisIf.AMT_YN) {
        		if (this.gfn_isNull(this.edtCART_USE_DIS_STR_AMT.text) || this.gfn_isNull(this.edtCART_USE_DIS_END_AMT.text) || 0 > cDisIf.STR_AMT || 0 > cDisIf.END_AMT) {
        			alert(this.fn_getMessage("ERRC000261")); // 카트주문불가 관리에서 금액사용일 경우 최소금액, 최대금액 정보는 필수입력 입니다.
        			return;
        		} else if (cDisIf.STR_AMT > cDisIf.END_AMT) {
        			alert(this.fn_getMessage("ERRC000262")); // 카트주문불가 관리에서 금액 최소금액은 최대금액보다 작거나 같은 금액이여야 합니다.
        			return;
        		}
        	}

        	// 22.06.22 수정 : 회원가입 지정승인자가 Y인경우 사용자 필수입력체크
        	if('Y' == this.dsCtlAuthInfo.getColumn(0, "MBR_JOIN_DSGN_APPRR_USE_YN")){
        		if(this.dsCtlAuthInfo.getColumn(0, "MBR_JOIN_APPRR_IDS") == "" || this.dsCtlAuthInfo.getColumn(0, "MBR_JOIN_APPRR_IDS") == null){
        			alert(this.fn_getMessage("ERRC000263")); // 회원가입 지정 승인자가 사용인 경우 승인자는 필수 입력값 입니다.
        			return;
        		}
        	}

        	// 자동입고 검수가 '반자동' or '수신'인 경우 입고레벨 필수값
        	var giVerf = this.dsCtlAuthInfo.getColumn(0, "GI_VERF_PROC_CD");
        	if("2" == giVerf || "4" == giVerf){
        		if(this.gfn_isNull(this.dsCtlAuthInfo.getColumn(0, "GI_LVL_CD"))){
        			alert(this.fn_getMessage("ERRC000004", "자동입고 검수가 반자동 혹은 수신인 경우 입고레벨")); // 자동입고 검수가 반자동 혹은 수신인 경우 입고레벨은 필수입력값입니다.
        			return;
        		}
        	}

        	if(!this.confirm(this.fn_getMessage("ERRC000080"))){
        		// 저장하시겠습니까
        		return;
        	}
        	this.fnSaveCtlAuthInfo();
        };

        this.btnCncl_onclick = function(obj,e)
        {
        	this.close();
        };

        this.cbo_year_onitemchanged = function(obj,e)
        {
        	obj.dropdown();
        	this.fn_setDateCombo();
        };

        this.cbo_month_onitemchanged = function(obj,e)
        {
        	obj.dropdown();
        	this.fn_setDateCombo();
        };

        this.cbo_reptYn_onitemchanged = function(obj,e)
        {
        	this.fn_setReptYn();
        };

        this.cmbGI_VERF_PROC_CD_onitemchanged = function(obj,e)
        {
        	var giVerfCd = this.cmbGI_VERF_PROC_CD.value;
        	if("1" == giVerfCd || "3" == giVerfCd){
        		// 자동입고검수가 자동(배송완료=입고)로 지정된 경우 입고레벨 비활성화
        		this.cmbGI_LVL_CD.set_value(null);
        		this.cmbGI_LVL_CD.set_enable(false);
        	}else{
        		this.cmbGI_LVL_CD.set_enable(true);
        		this.cmbGI_LVL_CD.set_value('5');
        	}
        	this.btnSetGi.set_visible(false);
        };

        // 최초 조회시
        this.fn_firstSettingGiVerf = function(obj,e)
        {
        	var giVerfCd = this.cmbGI_VERF_PROC_CD.value;
        	if("1" == giVerfCd || "3" == giVerfCd){
        		// 자동입고검수가 자동(배송완료=입고)로 지정된 경우 입고레벨 비활성화
        		this.cmbGI_LVL_CD.set_value(null);
        		this.cmbGI_LVL_CD.set_enable(false);
        		this.btnSetGi.set_visible(false);
        	}
        };

        this.SSP_BO_MA_47_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.SSP_BO_MA_47_onkeyup,this);
            this.rdoMBR_JOIN_DSGN_APPRR_USE_YN.addEventHandler("onitemchanged",this.uiCtl,this);
            this.btnMbrJoinAuthMulti.addEventHandler("onclick",this.btnMbrJoinAuthMulti_onclick,this);
            this.btnMbrJoinAuthText.addEventHandler("onclick",this.btnMbrJoinAuthText_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.rdoACCT_USE_YN.addEventHandler("onitemchanged",this.uiCtl,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.rdoCOST_DEPT_CHG_PSB_YN.addEventHandler("onitemchanged",this.uiCtl,this);
            this.rdoBGT_AUTH_USE_YN.addEventHandler("onitemchanged",this.uiCtl,this);
            this.rdoAPRV_AUTH_USE_YN.addEventHandler("onitemchanged",this.uiCtl,this);
            this.Static00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.rdoORD_AUTH_USE_YN.addEventHandler("onitemchanged",this.uiCtl,this);
            this.Static00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.btnCncl.addEventHandler("ondblclick",this.btnCncl_ondblclick,this);
            this.btnCncl.addEventHandler("onclick",this.btnCncl_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.cmbBGT_FW_SPR_CD.addEventHandler("onitemchanged",this.cmbBGT_FW_SPR_CD_onitemchanged,this);
            this.cmbGI_VERF_PROC_CD.addEventHandler("onitemchanged",this.cmbGI_VERF_PROC_CD_onitemchanged,this);
            this.cmbGI_LVL_CD.addEventHandler("onitemchanged",this.uiCtl,this);
            this.btnTest.addEventHandler("onclick",this.btnTest_onclick,this);
            this.chkCART_USE_DIS_DT_YN.addEventHandler("onchanged",this.uiCtl,this);
            this.chkCART_USE_DIS_AMT_YN.addEventHandler("onchanged",this.uiCtl,this);
            this.rdoCART_USE_DIS_USEYN.addEventHandler("onitemchanged",this.uiCtl,this);
            this.btnSetGi.addEventHandler("onclick",this.btnSetGi_onclick,this);
            this.cbo_year.addEventHandler("onitemchanged",this.cbo_year_onitemchanged,this);
            this.cbo_month.addEventHandler("onitemchanged",this.cbo_month_onitemchanged,this);
            this.cbo_reptYn.addEventHandler("canitemchange",this.Div00_Radio00_00_canitemchange,this);
            this.cbo_reptYn.addEventHandler("onitemchanged",this.cbo_reptYn_onitemchanged,this);
        };
        this.loadIncludeScript("SSP_BO_MA_47.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
