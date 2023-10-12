(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("samplePage01");
            this.set_titletext("부서조회 상세/수정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,528);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_deptInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC\" type=\"STRING\" size=\"32\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"32\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"32\"/><Column id=\"OPR_UNIT\" type=\"STRING\" size=\"32\"/><Column id=\"CUST_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"32\"/><Column id=\"LVL\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_SRT_SEQ\" type=\"STRING\" size=\"32\"/><Column id=\"HRNK_DEPT_NM\" type=\"STRING\" size=\"32\"/><Column id=\"HRNK_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HGST_DEPT\" type=\"STRING\" size=\"32\"/><Column id=\"GI_CHRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CCO_DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"ZPCD\" type=\"STRING\" size=\"32\"/><Column id=\"REPR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DTL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_OVER_AGD_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BGT_TRNSF_AGD_YN\" type=\"STRING\" size=\"1\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SUCCESS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RETURN_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_DEPT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/><Col id=\"BZPLC_ID\"/><Col id=\"DEPT_ID\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_page", this);
            obj._setContents("<ColumnInfo><Column id=\"COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COUNT\">10</Col></Row><Row><Col id=\"COUNT\">20</Col></Row><Row><Col id=\"COUNT\">30</Col></Row><Row><Col id=\"COUNT\">40</Col></Row><Row><Col id=\"COUNT\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COL_VALUE\">Y</Col><Col id=\"COL_NM\">사용</Col></Row><Row><Col id=\"COL_VALUE\">N</Col><Col id=\"COL_NM\">미 사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_deptInfoTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"32\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"32\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CUST_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"32\"/><Column id=\"LVL\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_SRT_SEQ\" type=\"STRING\" size=\"32\"/><Column id=\"HRNK_DEPT_NM\" type=\"STRING\" size=\"32\"/><Column id=\"HRNK_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HGST_DEPT\" type=\"STRING\" size=\"32\"/><Column id=\"GI_CHRPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CCO_DEPT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"ZPCD\" type=\"STRING\" size=\"32\"/><Column id=\"REPR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DTL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"BGT_OVER_AGD_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BGT_TRNSF_AGD_YN\" type=\"STRING\" size=\"1\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_custSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCodeSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"codeList\" type=\"STRING\" size=\"32\"/><Column id=\"langCd\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_auth", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title1","20","27","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("상위 정보");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","sta_title1:4",null,"70","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색 영역");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","40","0",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static31","40","31",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("StaticStar1","20","0","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","20","31","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("상태");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","885","0","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("고객 구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("StaticStar2","449","0","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("rdo_useYn","Static06:10","35","200","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_innerdataset("ds_useYn");
            obj.set_datacolumn("COL_NM");
            obj.set_codecolumn("COL_VALUE");
            obj.set_taborder("6");
            obj.set_direction("vertical");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_custSprCd","Static04:10","4","220","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_innerdataset("ds_custSprCd");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_oprUnitNm","688","4","155","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_popOprUnit","edt_oprUnitNm:4","4","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_search02");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_oprUnitId","StaticStar2:10","4","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcNm","256","4","152","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcId","160","4","92","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_title2","20","Div00:17","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("기본 정보");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","sta_title2:5",null,"100","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","40","0",null,"32","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static31","40","31",null,"32","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static31_00","40","62",null,"32","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("StaticStar3","20","0","130","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("부서명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06","20","31","130","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("상위 부서");
            obj.set_cssclass("sta_cm_box01L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static10","20","62","130","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("고객사 부서 코드");
            obj.set_cssclass("sta_cm_box01L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static08","885","31","130","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("입고 담당자");
            obj.set_cssclass("sta_cm_box01L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static04","885","0","130","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("부서 레벨");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_giChrpsn","Static08:10","35","220","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static08_00","449","31","130","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("최상위 부서");
            obj.set_cssclass("sta_cm_box01L");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static04_00","449","0","130","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("부서 코드");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_deptId","Static04_00:10","4","260","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_hgstDept","Static08_00:10","35","260","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_hrnkDeptId","Static06:10","35","92","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_hrnkDeptNm","edt_hrnkDeptId:4","35","152","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("17");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_popHrnkDept","edt_hrnkDeptNm:4","35","24","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_search02");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_deptNm","StaticStar3:10","4","248","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_ccoDeptCd","Static10:10","66","248","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_deptSrtSeq","Static04:10","4","160","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("18");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_edt_hrnkDeptIdReset","edt_deptSrtSeq:5","5","55","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("19");
            obj.set_text("초기화");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_title2_00","20","Div01:19","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("주소 정보");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","0","sta_title2_00:4",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","40","0",null,"32","20",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("StaticStar5","449","0","130","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("주소");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_reprAddr","StaticStar5:10","4","260","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("StaticStar6","885","0","130","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_text("상세 주소");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("StaticStar4","20","0","130","32",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_zpcd","StaticStar4:10","4","248","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("edt_dtlAddr","StaticStar6:10","4","220","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            obj.set_enable("true");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("btn_popZpcd","edt_zpcd:4","4","24","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_search02");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("sta_title2_00_00","20","Div02:18","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("제어 권한");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","0","sta_title2_00_00:4",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div03");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","40","0",null,"32","20",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02","20","0","130","32",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_text("예산 초과 허용");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div03.addChild(obj.name, obj);

            obj = new Radio("rdo_bgtOverAgdYn","Static02:10","4","200","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_innerdataset("ds_useYn");
            obj.set_datacolumn("COL_NM");
            obj.set_codecolumn("COL_VALUE");
            obj.set_taborder("2");
            obj.set_direction("vertical");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","449","0","130","32",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("3");
            obj.set_text("예산 이체 허용");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div03.addChild(obj.name, obj);

            obj = new Radio("rdo_bgtTransfAgdYn","Static04_00_00:10","4","200","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_innerdataset("ds_useYn");
            obj.set_datacolumn("COL_NM");
            obj.set_codecolumn("COL_VALUE");
            obj.set_taborder("4");
            obj.set_direction("vertical");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("btn_cancel","570","Div03:21","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","btn_cancel:4","Div03:21","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,528,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","Div00.form.cbo_custSprCd","value","ds_deptInfo","CUST_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.rdo_useYn","value","ds_deptInfo","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div01.form.edt_deptNm","value","ds_deptInfo","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div01.form.edt_deptId","value","ds_deptInfo","DEPT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div01.form.edt_hgstDept","value","ds_deptInfo","HGST_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Div01.form.edt_giChrpsn","value","ds_deptInfo","GI_CHRPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Div01.form.edt_ccoDeptCd","value","ds_deptInfo","CCO_DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","Div02.form.edt_zpcd","value","ds_deptInfo","ZPCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","Div02.form.edt_reprAddr","value","ds_deptInfo","REPR_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","Div02.form.edt_dtlAddr","value","ds_deptInfo","DTL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","Div03.form.rdo_bgtOverAgdYn","value","ds_deptInfo","BGT_OVER_AGD_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","Div03.form.rdo_bgtTransfAgdYn","value","ds_deptInfo","BGT_TRNSF_AGD_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div01.form.edt_hrnkDeptId","value","ds_deptInfo","HRNK_DEPT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div01.form.edt_hrnkDeptNm","value","ds_deptInfo","HRNK_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","Div00.form.edt_oprUnitId","value","ds_deptInfo","OPR_UNIT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","Div00.form.edt_oprUnitNm","value","ds_deptInfo","OPR_UNIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","Div01.form.edt_deptSrtSeq","value","ds_deptInfo","LVL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div00.form.edt_bzplcNm","value","ds_deptInfo","BZPLC_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.edt_bzplcId","value","ds_deptInfo","BZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MA_10.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_10.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_MA_10.xfdl", function() {
        /*******************************************************
          PROJECT NAME : SSP-BO
          CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        var coCd = "";
        var bzplcId = "";
        var deptId = "";
        var oprUnitId = "";

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	//검색 영역 최소size 적용
        	this.Div00.set_height(this.Div00.uMinSize);
        	this.resetScroll();

        	//공통코드 조회
        	this.fn_commonCodeSearch();

        	// 파라미터 값 ds setcolumn
        	this.ds_search.setColumn(0, "CO_CD", this.parent.coCd);
        	this.ds_search.setColumn(0, "BZPLC_ID", this.parent.bzplcId);
        	this.ds_search.setColumn(0, "DEPT_ID", this.parent.deptId);
        	this.ds_search.setColumn(0, "OPR_UNIT_ID", this.parent.oprUnitId);

        	this.fn_search();
        };


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        	//공통코드 조회
        	this.fn_commonCodeSearch = function(){
        		this.ds_comCodeSearch.setColumn(0, "codeList", "CUST_SPR_CD");
        		this.ds_comCodeSearch.setColumn(0, "langCd", "KO");
        		var sSvcId = "commonCodeSearch";
        		var sUrl = "/co/select-common-code-list.do";
        		var inDs = "ds_search=ds_comCodeSearch";
        		var outDs = "ds_custSprCd=ds_output1";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}

        	//조회
        	this.fn_search = function()	{
        		var sSvcId = "selectCustDeptDetailInfo";
        		var sUrl = "/bo/cust/dept/select-cust-dept-detail-info.do";
        		var inDs = "ds_search=ds_search";
        		var outDs = "ds_deptInfo=ds_output1";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	};

        	//고객구분조회
        	this.fn_selectCustSpr = function()	{
        		var sSvcId = "selectCustSpr";
        		var sUrl = "/bo/cust/dept/select-cust-spr.do";
        		var inDs = "ds_search=ds_search";
        		var outDs = "ds_deptInfoTemp=ds_output1";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	};

        	//저장
        	this.fn_save = function()	{
        		var sSvcId = "saveCustDeptDetailInfo";
        		var sUrl = "/bo/cust/dept/save-cust-dept-detail-info.do";
        		var inDs = "ds_save=ds_deptInfo";
        		var outDs = "";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}

        	// 최상위부서, 입고담당자 조회
        	this.fn_searchHgstDept = function()	{
        		var sSvcId = "selectHgstDept";
        		var sUrl = "/bo/cust/dept/select-hgst-dept.do";
        		var inDs = "ds_search=ds_search";
        		var outDs = "ds_deptInfoTemp=ds_output1";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	};

        	// 해당운영단위의 제어권한 조회
        	this.fn_selectAuth  = function()	{
        		var sSvcId = "selectAuth";
        		var sUrl = "/bo/cust/dept/select-auth-by-opr-unit.do";
        		var inDs = "ds_search=ds_search";
        		var outDs = "ds_auth=ds_output1";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        	this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        		if(svcID == "commonCodeSearch"){
        		}else if(svcID == "saveCustDeptDetailInfo"){
        			if(errorCode == -1 || errorCode == -100){
        				//alert(this.fn_getMessageOnServer(errorMsg));
        			}else{
        				//alert("저장되었습니다.");
        				alert(this.fn_getMessage("ERRC000081"));
        				this.fn_search();
        			}
        		}else if(svcID == "selectHgstDept"){
        			if(this.ds_deptInfo.getColumn(0, "SUCCESS_YN") == 'N'){
        				alert(this.ds_deptInfo.getColumn(0, "RETURN_MSG"));
        			}else{
        				this.ds_deptInfo.setColumn(0, "HGST_DEPT", this.ds_deptInfoTemp.getColumn(0,"HGST_DEPT"));
        				//this.ds_deptInfo.setColumn(0, "GI_CHRPSN_ID", this.ds_deptInfoTemp.getColumn(0,"GI_CHRPSN_ID"));
        				this.ds_deptInfo.setColumn(0, "LVL", this.ds_deptInfoTemp.getColumn(0,"LVL"));
        			}
        		}else if(svcID == "selectCustDeptDetailInfo"){
        			this.fn_selectAuth();
        		}else if(svcID == "selectAuth"){
        			if(this.ds_auth.getRowCount() > 0){
        				if(this.ds_auth.getColumn(0, "BGT_OVER_AGD_YN") == "N"){
        					// 예산초과허용여부
        					this.ds_deptInfo.setColumn(0, "BGT_OVER_AGD_YN", "N");
        					this.Div03.form.rdo_bgtOverAgdYn.set_enable(false);
        				}else{
        					this.Div03.form.rdo_bgtOverAgdYn.set_enable(true);
        				}

        				if(this.ds_auth.getColumn(0, "COST_DEPT_CHG_PSB_YN") == "N"){
        					// 비용부서변경가능여부 = 예산 이체 허용 BGT_TRNSF_AGD_YN
        					this.ds_deptInfo.setColumn(0, "BGT_TRNSF_AGD_YN", "N");
        					this.Div03.form.rdo_bgtTransfAgdYn.set_enable(false);
        				}else{
        					this.Div03.form.rdo_bgtTransfAgdYn.set_enable(true);
        				}
        			}
        		}else if(svcID == "selectCustSpr"){
        			if(this.ds_deptInfo.getColumn(0, "SUCCESS_YN") == 'N'){
        				alert(this.ds_deptInfo.getColumn(0, "RETURN_MSG"));
        			}else{
        				this.ds_deptInfo.setColumn(0, "CUST_SPR_CD", this.ds_deptInfoTemp.getColumn(0,"CUST_SPR_CD"));

        				// 해당운영단위의 제어권한 조회
        				this.fn_selectAuth();
        			}
        		}
        	};

        	// 팝업버튼 클릭 콜백
        	this.fn_popupCallback = function(sPopupId, sRetValue){
        		switch(sPopupId){
        			case "oprUntSinglePop":
        				const oprUnitObj = JSON.parse(sRetValue);

        				this.oprUnitRegStatsCd = oprUnitObj.OPR_UNIT_REG_STATS_CD;
        				if(Number(this.oprUnitRegStatsCd) >= 70){
        					alert(this.fn_getMessage("ERRC000239")); // 종결진행중인 운영단위입니다. 부서등록 할수없습니다.
        					break;
        				}
        				/* [2023-03-01] sg.park AI-015 일반고객의 여신거래 가능 프로세스 추가 */
        				if (['50', '55', '60'].indexOf(this.oprUnitRegStatsCd) < 0) {  // 50: 등록​, 55: 변경 정보 저장​, 60: 변경 품의 상신​
        					alert('선택하신 운영단위 등록 상태 확인 후 진행해주세요.');
        					break;
        				}
        				/* /[2023-03-01] sg.park AI-015 일반고객의 여신거래 가능 프로세스 추가 */

        				// 운영단위 변경 시 상위부서 값 초기화
        				this.ds_deptInfo.setColumn(0, "HRNK_DEPT_ID", "");
        				this.ds_deptInfo.setColumn(0, "HRNK_DEPT_NM", "");
        				this.ds_deptInfo.setColumn(0, "HGST_DEPT", "");
        				this.ds_deptInfo.setColumn(0, "GI_CHRPSN_ID", "");
        				this.ds_deptInfo.setColumn(0, "LVL", "");

        				this.ds_deptInfo.setColumn(0,"CO_CD", oprUnitObj.CO_CD);
        				this.ds_deptInfo.setColumn(0,"OPR_UNIT_ID", oprUnitObj.OPR_UNIT_ID);
        				this.ds_deptInfo.setColumn(0,"OPR_UNIT_NM", oprUnitObj.OPR_UNIT_NM);

        				this.ds_search.setColumn(0,"CO_CD", oprUnitObj.CO_CD);
        				this.ds_search.setColumn(0,"OPR_UNIT_ID", oprUnitObj.OPR_UNIT_ID);

        				this.fn_selectCustSpr();

        				break;

        			case "btn_popHrnkDept":
        				const deptObj = JSON.parse(sRetValue);

        				this.ds_deptInfo.setColumn(0,"CO_CD", deptObj.CO_CD);
        				this.ds_deptInfo.setColumn(0,"HRNK_DEPT_ID", deptObj.ORG_CD);
        				this.Div01.form.edt_hrnkDeptNm.set_value(deptObj.ORG_NM);
        				this.Div01.form.edt_hgstDept.set_value("");

        				break;

        			case "btn_popZpcd" :
        				const zpcdObj = JSON.parse(sRetValue);

        				this.ds_deptInfo.setColumn(0,"ZPCD", zpcdObj.ZIP_NO);
        				this.ds_deptInfo.setColumn(0,"REPR_ADDR", zpcdObj.ADDR);

        				break;
        		}
        	}
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        	//화면 설정 함수
        	this.cfn_formInit = function(){
        		//search static 초기 설정
        		this.Div00.form.StaticStar1.uEssentiel = "true";
        		this.Div00.form.StaticStar2.uEssentiel = "true";
        		this.Div01.form.StaticStar3.uEssentiel = "true";
        		this.Div02.form.StaticStar4.uEssentiel = "true";
        		this.Div02.form.StaticStar5.uEssentiel = "true";
        		this.Div02.form.StaticStar6.uEssentiel = "true";
        	};
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        	//조회 버튼 click  이벤트
        	this.btn_search_onclick = function(obj,e)
        	{
        		this.fn_search();
        	};

        	// 취소버튼 클릭 시
        	this.btn_cancel_onclick = function(obj,e)
        	{
        		this.close();
        	};

        	this.popOpen_onclick = function(obj,e)
        	{
        		var oArg = { coCd : this.ds_deptInfo.getColumn(0, "CO_CD") };
        		var oOption = {};

        		if(e.fromobject.id == 'btn_popOprUnit'){
        			oArg.bzplcId = this.ds_deptInfo.getColumn(0, "BZPLC_ID");
        			oArg.oprUnitId = this.ds_deptInfo.getColumn(0, "OPR_UNIT_ID");
        			oOption.title = '운영단위 조회';

        			this.gfn_openPopup("oprUntSinglePop", "CO_POP::SSP_BO_PP_15.xfdl", oArg, "fn_popupCallback", oOption);
        		}
        		if(e.fromobject.id == 'btn_popHrnkDept'){
        			if(this.ds_deptInfo.getColumn(0,"OPR_UNIT_ID") == "" || this.ds_deptInfo.getColumn(0,"OPR_UNIT_ID") == null){
        				alert(this.fn_getMessage("ERRC000007", "운영단위")); // 운영단위 먼저 조회하세요.
        				return;
        			}
        			oArg.oprUnitId = this.ds_deptInfo.getColumn(0, "OPR_UNIT_ID");
        			oArg.bzplcId = this.ds_deptInfo.getColumn(0, "BZPLC_ID");
        			oArg.deptId = this.ds_deptInfo.getColumn(0, "HRNK_DEPT_ID");
        			this.gfn_openPopup("deptPop", "CC::SSP_BO_PP_39.xfdl", oArg, function(sPopupId, sRetValue) {
        				var retObj = JSON.parse(sRetValue);
        				if(this.ds_deptInfo.getColumn(0, "DEPT_ID") == retObj.DEPT_ID){
        					alert(this.fn_getMessage("ERRC000123")); // 부서와 상위부서를 동일하게 지정할수 없습니다.
        					return;
        				}
        				this.ds_deptInfo.setColumn(0,"HRNK_DEPT_ID", retObj.DEPT_ID);
        				this.ds_deptInfo.setColumn(0,"HRNK_DEPT_NM", retObj.DEPT_NM);
        				this.ds_search.setColumn(0,"CO_CD", retObj.CO_CD);
        				this.ds_search.setColumn(0,"HRNK_DEPT_ID", retObj.DEPT_ID);
        				this.fn_searchHgstDept();
        			}, {title:"상위부서 조회", titlebar:"true"});
        		}
        		if(e.fromobject.id == 'btn_popZpcd'){
        			oOption.title = '우편번호 조회';
        			this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_28.xfdl", oArg, "fn_popupCallback", oOption);
        		}
        	};

        	this.btn_save_onclick = function(obj,e)
        	{
        		// 필수 입력값 체크
        		if(this.ds_deptInfo.getColumn(0,"OPR_UNIT_ID") == "" || this.ds_deptInfo.getColumn(0,"OPR_UNIT_ID") == null){
        			alert(this.fn_getMessage("ERRC000004", "운영단위")); // 운영단위는 필수 입력값 입니다.
        			this.Div00.form.btn_popOprUnit.setFocus();
        			return;
        		}
        		if(this.ds_deptInfo.getColumn(0,"DEPT_NM") == "" || this.ds_deptInfo.getColumn(0,"DEPT_NM") == null){
        			alert(this.fn_getMessage("ERRC000004", "부서명")); // 부서명은 필수 입력값 입니다.
        			this.Div01.form.edt_deptNm.setFocus();
        			return;
        		}
        		if(this.ds_deptInfo.getColumn(0,"ZPCD") == "" || this.ds_deptInfo.getColumn(0,"ZPCD") == null){
        			alert(this.fn_getMessage("ERRC000004", "우편번호")); // 우편번호는 필수 입력값 입니다.
        			this.Div02.form.edt_zpcd.setFocus();
        			return;
        		}
        		if(this.ds_deptInfo.getColumn(0,"REPR_ADDR") == "" || this.ds_deptInfo.getColumn(0,"REPR_ADDR") == null){
        			alert(this.fn_getMessage("ERRC000004", "주소")); // 주소는 필수 입력값 입니다.
        			return;
        		}
        		if(this.ds_deptInfo.getColumn(0,"DTL_ADDR") == "" || this.ds_deptInfo.getColumn(0,"DTL_ADDR") == null){
        			alert(this.fn_getMessage("ERRC000004", "상세 주소")); // 상세 주소는 필수 입력값 입니다.
        			this.Div02.form.edt_dtlAddr.setFocus();
        			return;
        		}

        		this.fn_save();
        	};

        	this.samplePage01_onkeyup = function(obj,e)
        	{
        		if(e.keycode == 27){
        			this.close();
        		}
        	};

        	//초기화 버튼
        	this.btn_hrnkDeptIdReset = function(obj,e)
        	{
        		this.ds_deptInfo.setColumn(0, "HRNK_DEPT_NM", "");
        		this.ds_deptInfo.setColumn(0, "GI_CHRPSN_ID", "");
        		this.ds_deptInfo.setColumn(0, "LVL", "1");
        		this.ds_deptInfo.setColumn(0, "HRNK_DEPT_ID", null);
        		this.Div01.form.edt_hrnkDeptNm.set_value("");
        		this.Div01.form.edt_hgstDept.set_value("");
        	};

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.samplePage01_onkeyup,this);
            this.sta_title1.addEventHandler("onclick",this.Static00_onclick,this);
            this.Div00.form.rdo_useYn.addEventHandler("onitemchanged",this.Div00_Radio00_onitemchanged,this);
            this.Div00.form.btn_popOprUnit.addEventHandler("onclick",this.popOpen_onclick,this);
            this.sta_title2.addEventHandler("onclick",this.Static00_onclick,this);
            this.Div01.form.btn_popHrnkDept.addEventHandler("onclick",this.popOpen_onclick,this);
            this.Div01.form.btn_edt_hrnkDeptIdReset.addEventHandler("onclick",this.btn_hrnkDeptIdReset,this);
            this.sta_title2_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Div02.form.btn_popZpcd.addEventHandler("onclick",this.popOpen_onclick,this);
            this.sta_title2_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_MA_10.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
