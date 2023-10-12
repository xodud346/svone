(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PA_01");
            this.set_titletext("등록상품 목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,802);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_frtMdfr", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MDFR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_NM_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MDFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MDFR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MDFR_IPT_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MDFR_DATA\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_attr", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_NM_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"INTG_ATTR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"INTG_ATTR_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_addInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_NM_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BRND_EXPS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_EXPS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_UNIT_EXPS_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rearMdfr", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MDFR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_NM_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MDFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MDFR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MDFR_IPT_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MDFR_DATA\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mng", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_NM_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_DATA\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_NM_DLMTR_TP_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_clsfAttr", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_NM_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"INTG_ATTR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"INTG_ATTR_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"INTG_ATTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MAND_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sspPrdNmTpCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mdfrIptTpCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mdfrCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_del", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mngTmp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_NM_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_DATA\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_last", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sspPrdNmDlmtrTpCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_frt","20","25","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("■  Front 수식어");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_frtMdfr","20","55","500","64",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_frtMdfr");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"216\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"입력타입\"/><Cell col=\"1\" text=\"Front 수식어명\"/></Band><Band id=\"body\"><Cell text=\"bind:MDFR_IPT_TP_CD\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_mdfrIptTpCd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\"/><Cell col=\"1\" text=\"bind:MDFR_DATA\" displaytype=\"expr:MDFR_IPT_TP_CD==&apos;1&apos;?&apos;combocontrol&apos;:&apos;editcontrol&apos;\" edittype=\"expr:MDFR_IPT_TP_CD==&apos;1&apos;?&apos;combo&apos;:&apos;text&apos;\" combodataset=\"ds_mdfrCd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_frtCnt","379","20","141","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cmb_frtCnt_innerdataset = new nexacro.NormalDataset("cmb_frtCnt_innerdataset", obj);
            cmb_frtCnt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">0</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row></Rows>");
            obj.set_innerdataset(cmb_frtCnt_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("sta_attr","20","grd_frtMdfr:24","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("■  상품군 속성");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_attr","21","sta_attr:10","500","64",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_clsfAttr");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"154\"/><Column size=\"67\"/><Column size=\"51\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"속성코드\"/><Cell col=\"1\" text=\"속성명\"/><Cell col=\"2\" text=\"필수항목\"/><Cell col=\"3\" text=\"선택\"/></Band><Band id=\"body\"><Cell text=\"bind:INTG_ATTR_CD\"/><Cell col=\"1\" text=\"bind:INTG_ATTR_NM\"/><Cell col=\"2\" text=\"bind:MAND_YN\" displaytype=\"checkboxcontrol\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"3\" text=\"bind:EXPS_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_add","20","grd_attr:24","190","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("■  제조원/브랜드명");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Div("div_add","22","sta_add:10","498","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_mnfr","0","-6","68","28",null,null,null,null,null,null,this.div_add.form);
            obj.set_taborder("0");
            obj.set_text("제조원명");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.div_add.addChild(obj.name, obj);

            obj = new CheckBox("chk_brnd","chk_mnfr:30","-6","72","28",null,null,null,null,null,null,this.div_add.form);
            obj.set_taborder("1");
            obj.set_text("브랜드명");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.div_add.addChild(obj.name, obj);

            obj = new CheckBox("chk_odrUnit","chk_brnd:30","-6","72","28",null,null,null,null,null,null,this.div_add.form);
            obj.set_taborder("2");
            obj.set_text("주문단위");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.div_add.addChild(obj.name, obj);

            obj = new Static("sta_rear","20","div_add:24","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("■  Rear 수식어");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_rearMdfr","21","sta_rear:10","500","64",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_rearMdfr");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"216\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"입력타입\"/><Cell col=\"1\" text=\"Front 수식어명\"/></Band><Band id=\"body\"><Cell text=\"bind:MDFR_IPT_TP_CD\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_mdfrIptTpCd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\"/><Cell col=\"1\" text=\"bind:MDFR_DATA\" displaytype=\"expr:MDFR_IPT_TP_CD==&apos;1&apos;?&apos;combocontrol&apos;:&apos;editcontrol&apos;\" edittype=\"expr:MDFR_IPT_TP_CD==&apos;1&apos;?&apos;combo&apos;:&apos;text&apos;\" combodataset=\"ds_mdfrCd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_rearCnt","379","div_add:20","141","25",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cmb_rearCnt_innerdataset = new nexacro.NormalDataset("cmb_rearCnt_innerdataset", obj);
            cmb_rearCnt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">0</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row></Rows>");
            obj.set_innerdataset(cmb_rearCnt_innerdataset);
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mng",null,"25","130","20","626",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("■  SSP상품명");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mng",null,"55","730","64","26",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_binddataset("ds_mng");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"215\"/><Column size=\"326\"/><Column size=\"104\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"구분\" tooltiptext=\"드래그 가능\"/><Cell col=\"1\" text=\"값\"/><Cell col=\"2\" text=\"구분자\"/><Cell col=\"3\" text=\"삭제\"/></Band><Band id=\"body\"><Cell text=\"bind:ITM_NAME\"/><Cell col=\"1\" text=\"bind:ITM_DATA\" displaytype=\"expr:ITM_DATA==null?&apos;normal&apos;:&apos;editcontrol&apos;\"/><Cell col=\"2\" displaytype=\"expr:SSP_PRD_NM_TP_CD==&apos;6&apos;?&apos;none&apos;:&apos;combocontrol&apos;\" edittype=\"combo\" text=\"bind:SSP_PRD_NM_DLMTR_TP_CD\" combodataset=\"ds_sspPrdNmDlmtrTpCd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\" calendarautoselect=\"true\"/><Cell col=\"3\" displaytype=\"expr:SSP_PRD_NM_TP_CD==&apos;5&apos;?&apos;none&apos;:&apos;buttoncontrol&apos;\" edittype=\"expr:SSP_PRD_NM_TP_CD==&apos;5&apos;?&apos;none&apos;:&apos;button&apos;\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down",null,"27","24","24","26",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("▼");
            this.addChild(obj.name, obj);

            obj = new Button("btn_up",null,"27","24","24","btn_down:4",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("▲");
            this.addChild(obj.name, obj);

            obj = new Div("div_btn","20","grd_rearMdfr:60",null,"87","20",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","44.52%","10","70","30",null,null,null,null,null,null,this.div_btn.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.div_btn.addChild(obj.name, obj);

            obj = new Button("btn_save","btn_close:4","10","70","30",null,null,null,null,null,null,this.div_btn.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.div_btn.addChild(obj.name, obj);

            obj = new TextArea("txt_result",null,"grd_mng:20","730","64","26",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_background("whitesmoke");
            obj.set_readonly("true");
            obj.set_wordWrap("char");
            obj.set_font("normal bold 12pt/normal \"Arial\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_refresh","1090","txt_result:0",null,"25","26",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_color("gray");
            obj.set_cursor("pointer");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,802,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cmb_frtCnt","value","ds_mdfrCnt","value");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cmb_rearCnt","value","ds_mdfrCnt","value");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_add.form.chk_mnfr","value","ds_addInfo","MNFR_EXPS_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_add.form.chk_brnd","value","ds_addInfo","BRND_EXPS_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_add.form.chk_odrUnit","value","ds_addInfo","ODR_UNIT_EXPS_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_PA_28.xfdl","CO::coUtils.xjs");
        this.registerScript("SSP_BO_PA_28.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        SSP상품명
        CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.coCd = '';
        this.prdClcd = '';
        this.ondragrow = -1;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();
        this.fn_onLoad = function(obj,e){
            //공통 함수 호출(필수)
            this.gfn_formOnLoad(this);
        	this.coCd = this.parent.coCd;
        	this.prdClcd = this.parent.prdClcd;
        	if(this.gfn_isNull(this.prdClcd)){
        		alert('카테고리코드가 없습니다.');
        	}
        	this.ds_search.setColumn(0, "CO_CD", this.coCd);
        	this.ds_search.setColumn(0, "PRD_CLCD", this.prdClcd);
        	this.fn_commonCodeSearch();//공통코드조회
        	this.fn_sspPrdNmInfo();//기본정보조회

        };

        // 화면 단축키
        this.fn_onkeydown = function(obj,e)
        {
        	if (e.keycode == 83 && e.ctrlkey == true) {// CTRL + s // 저장
        		this.div_btn_btn_save_onclick();
        		event.preventDefault();
        	}
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //공통코드조회
        this.fn_commonCodeSearch = function(){
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_sspPrdNmTpCd=ds_output1 ds_mdfrIptTpCd=ds_output2 ds_mdfrCd=ds_output3 ds_sspPrdNmDlmtrTpCd=ds_output4";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "SSP_PRD_NM_TP_CD,MDFR_IPT_TP_CD,MDFR_CD,SSP_PRD_NM_DLMTR_TP_CD");
        	this.ds_search.setColumn(0, "LANG_CD", "KO");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //정보조회
        this.fn_sspPrdNmInfo = function(){
        	var sSvcId = "sspPrdNmInfo";
        	var sUrl = "/pr/ctg-mng/select-ssp-prd-nm-info.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_frtMdfr=ds_frtMdfr ds_attr=ds_attr ds_addInfo=ds_addInfo ds_rearMdfr=ds_rearMdfr ds_mng=ds_mng ds_clsfAttr=ds_clsfAttr";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //등록처리
        this.fn_save = function (bInit){
            var sSvcId = "save";
            var sUrl = "/pr/ctg-mng/save-ssp-prd-nm-info.do";
            var inDs = "ds_frtMdfr=ds_frtMdfr:U ds_rearMdfr=ds_rearMdfr:U ds_attr=ds_attr:U ds_addInfo=ds_addInfo:U ds_mng=ds_mng:U";
            var outDs = "";
            var arg = "";

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //배치라스트타임
        this.fn_refresh = function(){
        	var sSvcId = "refresh";
        	var sUrl = "/pr/ctg-mng/select-last-batch-time.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_last=ds_last";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg) {
        	if(errorCode != 0 && errorCode != -100){
        		trace(errorMsg);
        		return;
        	}
            switch(svcID) {
                case "commonCodeSearch" :
        			//this.ds_iptTypeCd.insertRow(0);
        			//this.ds_iptTypeCd.setColumn(0, "COM_DTL_CD", null);
        			//this.ds_iptTypeCd.setColumn(0, "COM_DTL_CD_NM", "선택");
                    break;

        		case "sspPrdNmInfo" :
        			this.cmb_frtCnt.set_value(this.ds_frtMdfr.rowcount);
        			this.cmb_rearCnt.set_value(this.ds_rearMdfr.rowcount);
        			this.fn_resize_grd(this.grd_frtMdfr);
        			this.fn_resize_grd(this.grd_rearMdfr);
        			this.fn_resize_grd(this.grd_attr);
        			this.fn_resize_grd(this.grd_mng);
        			this.fn_reloadResult();
                    break;

        		case "save" :
        			alert('저장되었습니다.');
        			this.reload();

        			break;

        		case "refresh" :
        			var last = this.ds_last.getColumn(0, "LAST_DATE")
        			this.sta_refresh.set_text('Batch : ' + last);

                    break;
            }
        };
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        //수식어 콤보박스 숫자선택 이벤트(e, 대상Dataset, 대상Grid)
        this.fn_mdfrCntOnchangeEvent = function(e, oDs1, oGrd1, type){
        	var oldValue = oDs1.rowcount;
        	var newValue = e.postvalue;
        	if(newValue > 0){
        		if(oldValue < newValue){	//늘었을때
        			for(var i=oldValue; i<newValue; i++){
        				var nRow = oDs1.addRow();
        				oDs1.setColumn(nRow, "SSP_PRD_NM_TP_CD", type);
        				oDs1.setColumn(nRow, "MDFR_ITM_NO", this.fn_getMaxNo(oDs1, "MDFR_ITM_NO"));
        				oDs1.setColumn(nRow, "ITM_NO", oDs1.getColumn(nRow, "MDFR_ITM_NO"));
        				oDs1.setColumn(nRow, "MDFR_IPT_TP_CD", "1");
        				oDs1.setColumn(nRow, "SRT_SO", this.fn_getMaxNo(oDs1, "SRT_SO"));

        				var nRow2 = this.ds_mng.addRow();
        				this.ds_mng.setColumn(nRow2, "SSP_PRD_NM_TP_CD", type);
        				this.ds_mng.setColumn(nRow2, "ITM_NO", oDs1.getColumn(nRow, "MDFR_ITM_NO"));

        				if(type == '1'){
        					var fRow = this.ds_mng.extractRows("SSP_PRD_NM_TP_CD==1");
        					this.ds_mng.moveRow(nRow2, (fRow.length-1));
        				}
        			}
        		}else{	//줄었을때
        			for(var i=oldValue; i>=newValue; i--){
        				var fRow = this.ds_mng.findRowExpr("SSP_PRD_NM_TP_CD=="+oDs1.getColumn(i, "SSP_PRD_NM_TP_CD")+" && ITM_NO=="+oDs1.getColumn(i, "MDFR_ITM_NO"));
        				this.ds_mng.deleteRow(fRow);
        				oDs1.deleteRow(i);
        			}
        		}
        	}else{	//전체삭제
        		for(var i=0; i<=oDs1.rowcount; i++){
        			var fRow = this.ds_mng.findRowExpr("SSP_PRD_NM_TP_CD=="+oDs1.getColumn(i, "SSP_PRD_NM_TP_CD")+" && ITM_NO=="+oDs1.getColumn(i, "MDFR_ITM_NO"));
        			this.ds_mng.deleteRow(fRow);
        		}
        		var fRows = oDs1.extractRows("SSP_PRD_NM_TP_CD=="+oDs1.getColumn(0, "SSP_PRD_NM_TP_CD"));
        		oDs1.deleteMultiRows(fRows);
        	}

        	this.fn_resize_grd(oGrd1);
        	this.fn_resize_grd(this.grd_mng);
        }

        //max순번 가져오기
        this.fn_getMaxNo = function(oDs1, itmNoNm){
        	var tmpCnt = 0;
        	for(var i=0; i<oDs1.rowcount; i++){
        		var ITM_NO = oDs1.getColumn(i, itmNoNm);
        		if(typeof ITM_NO != 'undefined' || !this.gfn_isNull(ITM_NO)){
        			if(ITM_NO > nexacro.toNumber(tmpCnt)){
        				tmpCnt = ITM_NO;
        			}
        		}else{
        			tmpCnt = nexacro.toNumber(tmpCnt)+1;
        		}
        	}
        	return tmpCnt;
        };

        //수식어 데이터셋 이벤트
        this.fn_onchangeDataset = function(obj, e, oDs1, type){
        	var typeName = (type=='1')?'Front':(type=='4')?'Rear':'';
        	if(e.columnid == 'MDFR_ITM_NO'){

        	}else if(e.columnid == 'MDFR_DATA'){
        		var MDFR_ITM_NO = oDs1.getColumn(e.row, "MDFR_ITM_NO");
        		var SSP_PRD_NM_TP_CD = oDs1.getColumn(e.row, "SSP_PRD_NM_TP_CD");
        		var MDFR_IPT_TP_CD = oDs1.getColumn(e.row, "MDFR_IPT_TP_CD");
        		var MDFR_DATA = oDs1.getColumn(e.row, "MDFR_DATA");
        		if(MDFR_IPT_TP_CD == '1' && typeof MDFR_DATA != 'undefined' && !this.gfn_isNull(MDFR_DATA)){
        			var ds_mdfrCd_fRow = this.ds_mdfrCd.findRowExpr("COM_DTL_CD=="+MDFR_DATA);
        			MDFR_DATA = this.ds_mdfrCd.getColumn(ds_mdfrCd_fRow, "COM_DTL_CD_NM");
        		}
        		var SRT_SO = oDs1.getColumn(e.row, "SRT_SO");
        		if(typeof SRT_SO == 'undefined'){SRT_SO = '';}
        		var fRow = this.ds_mng.findRowExpr("SSP_PRD_NM_TP_CD=="+SSP_PRD_NM_TP_CD+" && ITM_NO=="+MDFR_ITM_NO);
        		this.ds_mng.setColumn(fRow, "ITM_NAME", typeName+" 수식어"+SRT_SO);
        		this.ds_mng.setColumn(fRow, "ITM_DATA", MDFR_DATA);

        	}else if(e.columnid == 'MDFR_IPT_TP_CD'){
        		oDs1.setColumn(e.row, "MDFR_DATA", "");
        	}
        }

        //SSP명모양 갱신
        this.fn_reloadResult = function(){
        	var result = "";
        	for(var i=0; i<this.ds_mng.rowcount; i++){
        		var tmpStr = "";
        		var SSP_PRD_NM_TP_CD = this.ds_mng.getColumn(i, "SSP_PRD_NM_TP_CD");
        		var ITM_NAME = this.ds_mng.getColumn(i, "ITM_NAME");
        		var ITM_DATA = this.ds_mng.getColumn(i, "ITM_DATA");
        		var SSP_PRD_NM_DLMTR_TP_CD = this.ds_mng.getColumn(i, "SSP_PRD_NM_DLMTR_TP_CD");
        		var DLMTR_NM = this.ds_sspPrdNmDlmtrTpCd.getColumn(this.ds_sspPrdNmDlmtrTpCd.findRowExpr("COM_DTL_CD=="+SSP_PRD_NM_DLMTR_TP_CD), "COM_DTL_CD_NM");

        		if(typeof ITM_NAME == 'undefined'){ITM_NAME = '';}
        		if(typeof ITM_DATA == 'undefined'){ITM_DATA = '';}
        		if(typeof DLMTR_NM == 'undefined'){DLMTR_NM = ' ';}

        		if(SSP_PRD_NM_TP_CD == '1'){	//fr수식어
        			tmpStr = ITM_DATA;
        		}else if(SSP_PRD_NM_TP_CD == '2'){	//속성
        			tmpStr = ITM_DATA;
        		}else if(SSP_PRD_NM_TP_CD == '3'){	//브랜드
        			tmpStr = ITM_NAME;
        		}else if(SSP_PRD_NM_TP_CD == '4'){	//re수식어
        			tmpStr = ITM_DATA;
        		}else if(SSP_PRD_NM_TP_CD == '5'){	//상품명
        			tmpStr = ITM_NAME;
        		}
        		if(SSP_PRD_NM_DLMTR_TP_CD == '1'){ DLMTR_NM=' '; }	//공백일경우
        		if(SSP_PRD_NM_DLMTR_TP_CD == '2'){ DLMTR_NM= ' ' + DLMTR_NM + ' '; }	//줄바꿈일경우
        		tmpStr = tmpStr + DLMTR_NM;
        		result = result + tmpStr;
        	}
        	this.txt_result.set_value(result.substr(0, result.length-1));
        }

        //그리드 리사이징
        this.fn_resize_grd = function(grdId, pHeight){
        	var nH = grdId.getRealRowFullSize();
        	if(typeof pHeight == 'undefined'){ pHeight = 62; }
        	if(pHeight > nH){
        		nH = pHeight;
        	}
        	grdId.set_height(nH + 2);

        	this.resetScroll();
        }

        //저장 밸리데이션
        this.fn_validation = function(){
        	var result = true;
        	for(var i=0; i<this.ds_frtMdfr.rowcount; i++){
        		var MDFR_DATA = this.ds_frtMdfr.getColumn(i, "MDFR_DATA");
        		if(this.gfn_isNull(MDFR_DATA)){
        			alert('Front 수식어명을 입력/선택하세요.');
        			result = false;
        			break;
        		}else{
        			result = this.fn_lenChk(MDFR_DATA, 100, "프론트 수식어");
        		}
        	}

        	if(!result) { return result; }

        	for(var i=0; i<this.ds_rearMdfr.rowcount; i++){
        		var MDFR_DATA = this.ds_rearMdfr.getColumn(i, "MDFR_DATA");
        		if(this.gfn_isNull(MDFR_DATA)){
        			alert('Rear 수식어명을 입력/선택하세요.');
        			result = false;
        			break;
        		}else{
        			result = this.fn_lenChk(MDFR_DATA, 100, "리어 수식어");
        		}
        	}
        	return result;
        }

        //마우스 드래그시 정렬 체크
        this.fn_changeRowChk = function(asis, tobe){
        	var rs = false;
        	var row = asis;
        	var toRow = tobe;
        	var SSP_PRD_NM_TP_CD = this.ds_mng.getColumn(row, "SSP_PRD_NM_TP_CD");
        	var SSP_PRD_NM_TP_CD_TO = this.ds_mng.getColumn(toRow, "SSP_PRD_NM_TP_CD");
        	if(SSP_PRD_NM_TP_CD == '1' && SSP_PRD_NM_TP_CD_TO != '1'){
        		return false;
        	}else if(SSP_PRD_NM_TP_CD == '4' && SSP_PRD_NM_TP_CD_TO != '4'){
        		return false;
        	}else{
        		if(SSP_PRD_NM_TP_CD != '1' && SSP_PRD_NM_TP_CD != '4'){
        			if(SSP_PRD_NM_TP_CD_TO == '1' || SSP_PRD_NM_TP_CD_TO == '4'){
        				return false;
        			}
        		}
        	}
        	return true;
        }

        //자리수체크
        this.fn_lenChk = function(val, max, type){
        	var totalByte = 0;
        	var result = true;
        	for (var i = 0; i < val.length; i++) {
        		var oneChar = val.charAt(i);
        		if (escape(oneChar).length > 4) {
        			totalByte = totalByte + 3;
        		} else {
        			totalByte = totalByte + 1;
        		}
        	}

        	if(totalByte > max){
        		alert(type+' 자리수가 초과되었습니다.');
        		result = false;
        	}
        	return result;
        }
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //수식어 콤보박스 이벤트
        this.cmb_frtCnt_onitemchanged = function(obj,e)
        {
        	this.fn_mdfrCntOnchangeEvent(e, this.ds_frtMdfr, this.grd_frtMdfr, "1");
        };
        this.cmb_rearCnt_onitemchanged = function(obj,e)
        {
        	this.fn_mdfrCntOnchangeEvent(e, this.ds_rearMdfr, this.grd_rearMdfr, "4");
        };

        //프론트수식어 그린드 클릭이벤트
        this.grd_frtMdfr_oncellclick = function(obj,e)
        {
        	var bindText = this.grd_frtMdfr.getCellProperty("body", e.col, "text");
        	if(bindText == "bind:MDFR_IPT_TP_CD" || bindText == "bind:MDFR_DATA"){
        		obj.dropdownCombo();
        	}
        };

        //리어수식어 그린드 클릭이벤트
        this.grd_rearMdfr_oncellclick = function(obj,e)
        {
        	var bindText = this.grd_rearMdfr.getCellProperty("body", e.col, "text");
        	if(bindText == "bind:MDFR_IPT_TP_CD" || bindText == "bind:MDFR_DATA"){
        		obj.dropdownCombo();
        	}
        };

        //프론트수식어 이벤트
        this.ds_frtMdfr_oncolumnchanged = function(obj,e)
        {
        	this.fn_onchangeDataset(obj, e, this.ds_frtMdfr, "1");
        };

        //리어수식어 이벤트
        this.ds_rearMdfr_oncolumnchanged = function(obj,e)
        {
        	this.fn_onchangeDataset(obj, e, this.ds_rearMdfr, "4");
        };

        //속성 이벤트
        this.ds_attr_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == 'EXPS_YN'){
        		if(e.newvalue == 'Y'){
        			var nRow1 = this.ds_attr.addRow();
        			var SSP_PRD_NM_TP_CD = "2";
        			var ATTR_ITM_NO = this.fn_getMaxNo(this.ds_attr, "ATTR_ITM_NO");
        			var INTG_ATTR_CD = this.ds_clsfAttr.getColumn(e.row, "INTG_ATTR_CD");
        			var INTG_ATTR_SPR_CD = this.ds_clsfAttr.getColumn(e.row, "INTG_ATTR_SPR_CD");

        			this.ds_attr.setColumn(nRow1, "SSP_PRD_NM_TP_CD", SSP_PRD_NM_TP_CD);
        			this.ds_attr.setColumn(nRow1, "ATTR_ITM_NO", ATTR_ITM_NO);
        			this.ds_attr.setColumn(nRow1, "INTG_ATTR_CD", INTG_ATTR_CD);
        			this.ds_attr.setColumn(nRow1, "INTG_ATTR_SPR_CD", INTG_ATTR_SPR_CD);
        			this.ds_clsfAttr.setColumn(e.row, "ATTR_ITM_NO", ATTR_ITM_NO);
        			this.ds_clsfAttr.setColumn(e.row, "SSP_PRD_NM_TP_CD", SSP_PRD_NM_TP_CD);

        			//ssp세팅
        			var nRow2 = this.ds_mng.addRow();
        			this.ds_mng.setColumn(nRow2, "SSP_PRD_NM_TP_CD", SSP_PRD_NM_TP_CD);
        			this.ds_mng.setColumn(nRow2, "ITM_NO", ATTR_ITM_NO);
        			this.ds_mng.setColumn(nRow2, "ITM_NAME", "상품군 속성");

        			var ds_clsfAttr_fRow = this.ds_clsfAttr.findRowExpr("INTG_ATTR_CD=='"+INTG_ATTR_CD+"'");
        			var INTG_ATTR_NM = this.ds_clsfAttr.getColumn(ds_clsfAttr_fRow, "INTG_ATTR_NM");
        			this.ds_mng.setColumn(nRow2, "ITM_DATA", INTG_ATTR_NM);

        			var fRow = this.ds_mng.findRowExprNF("SSP_PRD_NM_TP_CD==4");
        			this.ds_mng.moveRow(nRow2, fRow);
        		}else if(e.newvalue == 'N'){
        			var fRow = this.ds_attr.findRowExpr("ATTR_ITM_NO=="+this.ds_clsfAttr.getColumn(e.row, "ATTR_ITM_NO"));
        			this.ds_attr.deleteRow(fRow);

        			var fRow2 = this.ds_mng.findRowExpr("SSP_PRD_NM_TP_CD==2 && ITM_NO=="+this.ds_clsfAttr.getColumn(e.row, "ATTR_ITM_NO"));
        			this.ds_mng.deleteRow(fRow2);
        		}
        		this.fn_resize_grd(this.grd_mng);
        	}

        };

        //부가정보 이벤트(브랜드)
        this.ds_addInfo_oncolumnchanged = function(obj,e)
        {
        	var SSP_PRD_NM_TP_CD = "3";
        	if(e.newvalue == 'Y'){
        		//todo 세팅로우
        		var nRow = this.ds_mng.addRow();
        		this.ds_mng.setColumn(nRow, "SSP_PRD_NM_TP_CD", SSP_PRD_NM_TP_CD);
        		this.ds_mng.setColumn(nRow, "ITM_NO", this.fn_getAddInfoNo(e.columnid)[0]);
        		this.ds_mng.setColumn(nRow, "ITM_NAME", this.fn_getAddInfoNo(e.columnid)[1]);

        		var fRow = this.ds_mng.findRowExprNF("SSP_PRD_NM_TP_CD==4");
        		this.ds_mng.moveRow(nRow, fRow);
        	}else if(e.newvalue == 'N'){
        		var fRow = this.ds_mng.findRowExpr("SSP_PRD_NM_TP_CD=="+SSP_PRD_NM_TP_CD+" && ITM_NO=="+this.fn_getAddInfoNo(e.columnid)[0]);
        		this.ds_mng.deleteRow(fRow);
        	}
        	this.fn_resize_grd(this.grd_mng);
        };

        /*
        부가정보 키고정
        desc) ssp상품명 구성순서를 위해 1,2,3 키값을 지정
        */
        this.fn_getAddInfoNo = function(col){
        	if("MNFR_EXPS_YN" == col){
        		return ["1", "제조원명"];
        	}else if("BRND_EXPS_YN" == col){
        		return ["2","브랜드명"];
        	}else if("ODR_UNIT_EXPS_YN" == col){
        		return ["3","주문단위"];
        	}
        }
        this.fn_getAddInfCol = function(no){
        	if("1" == no){
        		return 'MNFR_EXPS_YN';
        	}else if("2" == no){
        		return 'BRND_EXPS_YN';
        	}else if("3" == no){
        		return 'ODR_UNIT_EXPS_YN';
        	}
        }

        //저장
        this.div_btn_btn_save_onclick = function(obj,e)
        {
        	if(!this.fn_dataCheck(this.ds_frtMdfr) &&
        		!this.fn_dataCheck(this.ds_rearMdfr) &&
        		!this.fn_dataCheck(this.ds_attr) &&
        		!this.fn_dataCheck(this.ds_addInfo) &&
        		!this.fn_dataCheck(this.ds_mng)){
        		alert('변경된 내역이 없습니다.');
        		return;
        	}

        	if(!this.fn_validation()){ return; }

        	if(this.confirm('저장하시겠습니까?')){
        		for(var i=0; i<this.ds_frtMdfr.rowcount; i++){
        			this.ds_frtMdfr.setColumn(i, "CO_CD", this.coCd);
        			this.ds_frtMdfr.setColumn(i, "PRD_CLCD", this.prdClcd);
        		}
        		for(var i=0; i<this.ds_rearMdfr.rowcount; i++){
        			this.ds_rearMdfr.setColumn(i, "CO_CD", this.coCd);
        			this.ds_rearMdfr.setColumn(i, "PRD_CLCD", this.prdClcd);
        		}
        		for(var i=0; i<this.ds_attr.rowcount; i++){
        			this.ds_attr.setColumn(i, "CO_CD", this.coCd);
        			this.ds_attr.setColumn(i, "PRD_CLCD", this.prdClcd);
        		}
        		for(var i=0; i<this.ds_addInfo.rowcount; i++){
        			this.ds_addInfo.setColumn(i, "CO_CD", this.coCd);
        			this.ds_addInfo.setColumn(i, "PRD_CLCD", this.prdClcd);
        		}
        		for(var i=0; i<this.ds_mng.rowcount; i++){
        			this.ds_mng.setColumn(i, "CO_CD", this.coCd);
        			this.ds_mng.setColumn(i, "PRD_CLCD", this.prdClcd);
        		}
        		this.fn_save();
        	}
        };

        //오른쪽 그리드 삭제버튼 이벤트
        this.grd_mng_oncellclick = function(obj,e)
        {
        	var bindText = this.grd_mng.getCellProperty("body", e.col, "text");
        	if(bindText == "삭제"){
        		var SSP_PRD_NM_TP_CD = this.ds_mng.getColumn(e.row, "SSP_PRD_NM_TP_CD");
        		var ITM_NO = this.ds_mng.getColumn(e.row, "ITM_NO");
        		if(SSP_PRD_NM_TP_CD == '1'){
        			var fRow = this.ds_frtMdfr.findRowExpr("MDFR_ITM_NO=="+ITM_NO);
        			this.ds_frtMdfr.deleteRow(fRow);
        			this.ds_mng.deleteRow(e.row);
        			this.fn_resize_grd(this.grd_frtMdfr);
        		}else
        		if(SSP_PRD_NM_TP_CD == '4'){
        			var fRow = this.ds_rearMdfr.findRowExpr("MDFR_ITM_NO=="+ITM_NO);
        			this.ds_rearMdfr.deleteRow(fRow);
        			this.ds_mng.deleteRow(e.row);
        			this.fn_resize_grd(this.grd_rearMdfr);
        		}else
        		if(SSP_PRD_NM_TP_CD == '2'){
        			var fRow = this.ds_clsfAttr.findRowExpr("ATTR_ITM_NO=="+ITM_NO);
        			this.ds_clsfAttr.setColumn(fRow, "EXPS_YN", "N");
        		}else
        		if(SSP_PRD_NM_TP_CD == '3'){
        			this.ds_addInfo.setColumn(0, this.fn_getAddInfCol(ITM_NO), "N");
        		}else
        		if(SSP_PRD_NM_TP_CD == '6'){
        			this.ds_crlfInfo.setColumn(0, "CRLF_YN", "N");
        		}
        		this.fn_resize_grd(this.grd_mng);
        	}

        	obj.dropdownCombo();
        };

        //SSP상품명 구성 그리드 재정렬
        this.ds_mng_onvaluechanged = function(obj,e)
        {
        	for(var i=0; i<this.ds_mng.rowcount; i++){
        		this.ds_mng.setColumn(i, "SRT_SO", i+1);
        	}
        };

        //위로
        this.btn_up_onclick = function(obj,e)
        {
        	var row = this.ds_mng.rowposition;
        	var SSP_PRD_NM_TP_CD = this.ds_mng.getColumn(row, "SSP_PRD_NM_TP_CD");
        	var SSP_PRD_NM_TP_CD_TO = this.ds_mng.getColumn((row-1), "SSP_PRD_NM_TP_CD");
        	if(SSP_PRD_NM_TP_CD == '1'){
        		if(row == 0){
        			return false;
        		}
        	}else if(SSP_PRD_NM_TP_CD == '4'){
        		if(SSP_PRD_NM_TP_CD_TO != '4'){
        			return false;
        		}
        	}else{
        		if(SSP_PRD_NM_TP_CD_TO == '1'){
        			return false;
        		}
        	}
        	this.ds_mng.moveRow(row, (row-1));
        };

        //아래로
        this.btn_down_onclick = function(obj,e)
        {
        	var row = this.ds_mng.rowposition;
        	var SSP_PRD_NM_TP_CD = this.ds_mng.getColumn(row, "SSP_PRD_NM_TP_CD");
        	var SSP_PRD_NM_TP_CD_TO = this.ds_mng.getColumn((row+1), "SSP_PRD_NM_TP_CD");
        	if(SSP_PRD_NM_TP_CD == '1'){
        		if(SSP_PRD_NM_TP_CD_TO != '1'){
        			return false;
        		}
        	}else if(SSP_PRD_NM_TP_CD == '4'){

        		if(row == (this.ds_mng.getRowCount()-1)){
        			return false;
        		}
        	}else{
        		if(SSP_PRD_NM_TP_CD_TO == '4'){
        			return false;
        		}
        	}
        	this.ds_mng.moveRow(row, (row+1));
        };

        this.ds_frtMdfr_onrowsetchanged = function(obj,e)
        {
        	this.cmb_frtCnt.set_value(this.ds_frtMdfr.rowcount);
        };

        this.ds_rearMdfr_onrowsetchanged = function(obj,e)
        {
        	this.cmb_rearCnt.set_value(this.ds_rearMdfr.rowcount);
        };

        //SSP상품명 최종형태 갱신
        this.ds_mng_oncolumnchanged = function(obj,e)
        {
        	this.fn_reloadResult();
        };

        //드래그
        this.grd_mng_ondrag = function(obj,e)
        {
        	if(e.col == 0){
        		this.ondragrow = e.row;
        	}
        };

        //드래그업
        this.grd_mng_onlbuttonup = function(obj,e)
        {
        	if(e.col > 0){ return; }
        	if(this.ondragrow >= 0 && this.ondragrow != e.row){
        		if(!this.fn_changeRowChk(this.ondragrow, e.row)){ return; }
        		this.ds_mng.moveRow(this.ondragrow, e.row);
        		this.ondragrow = -1;
        	}
        };

        this.sta_refresh_onclick = function(obj,e)
        {
        	this.fn_refresh();
        };

        this.ds_crlf_oncolumnchanged = function(obj,e)
        {
        	var SSP_PRD_NM_TP_CD = "6";
        	if(e.newvalue == 'Y'){
        		var nRow = this.ds_mng.addRow();
        		this.ds_mng.setColumn(nRow, "SSP_PRD_NM_TP_CD", SSP_PRD_NM_TP_CD);
        		this.ds_mng.setColumn(nRow, "ITM_NO", "1");
        		this.ds_mng.setColumn(nRow, "ITM_NAME", "줄바꿈");

        		var fRow = this.ds_mng.findRowExprNF("SSP_PRD_NM_TP_CD==4");
        		this.ds_mng.moveRow(nRow, fRow);
        	}else if(e.newvalue == 'N'){
        		var fRow = this.ds_mng.findRowExpr("SSP_PRD_NM_TP_CD=="+SSP_PRD_NM_TP_CD+" && ITM_NO==1");
        		this.ds_mng.deleteRow(fRow);
        	}
        	this.fn_resize_grd(this.grd_mng);
        };

        this.div_btn_btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeydown",this.fn_onkeydown,this);
            this.sta_frt.addEventHandler("onclick",this.Static00_onclick,this);
            this.grd_frtMdfr.addEventHandler("oncellclick",this.grd_frtMdfr_oncellclick,this);
            this.cmb_frtCnt.addEventHandler("onitemchanged",this.cmb_frtCnt_onitemchanged,this);
            this.sta_attr.addEventHandler("onclick",this.Static00_onclick,this);
            this.grd_attr.addEventHandler("oncellclick",this.grd_attr_oncellclick,this);
            this.sta_add.addEventHandler("onclick",this.Static00_onclick,this);
            this.sta_rear.addEventHandler("onclick",this.Static00_onclick,this);
            this.grd_rearMdfr.addEventHandler("oncellclick",this.grd_rearMdfr_oncellclick,this);
            this.cmb_rearCnt.addEventHandler("onitemchanged",this.cmb_rearCnt_onitemchanged,this);
            this.sta_mng.addEventHandler("onclick",this.Static00_onclick,this);
            this.grd_mng.addEventHandler("oncellclick",this.grd_mng_oncellclick,this);
            this.grd_mng.addEventHandler("ondrag",this.grd_mng_ondrag,this);
            this.grd_mng.addEventHandler("onlbuttonup",this.grd_mng_onlbuttonup,this);
            this.btn_down.addEventHandler("onclick",this.btn_down_onclick,this);
            this.btn_up.addEventHandler("onclick",this.btn_up_onclick,this);
            this.div_btn.form.btn_close.addEventHandler("onclick",this.div_btn_btn_close_onclick,this);
            this.div_btn.form.btn_save.addEventHandler("onclick",this.div_btn_btn_save_onclick,this);
            this.sta_refresh.addEventHandler("onclick",this.sta_refresh_onclick,this);
            this.ds_frtMdfr.addEventHandler("oncolumnchanged",this.ds_frtMdfr_oncolumnchanged,this);
            this.ds_frtMdfr.addEventHandler("onrowsetchanged",this.ds_frtMdfr_onrowsetchanged,this);
            this.ds_attr.addEventHandler("oncolumnchanged",this.ds_attr_oncolumnchanged,this);
            this.ds_addInfo.addEventHandler("oncolumnchanged",this.ds_addInfo_oncolumnchanged,this);
            this.ds_rearMdfr.addEventHandler("oncolumnchanged",this.ds_rearMdfr_oncolumnchanged,this);
            this.ds_rearMdfr.addEventHandler("onrowsetchanged",this.ds_rearMdfr_onrowsetchanged,this);
            this.ds_mng.addEventHandler("onvaluechanged",this.ds_mng_onvaluechanged,this);
            this.ds_mng.addEventHandler("oncolumnchanged",this.ds_mng_oncolumnchanged,this);
            this.ds_clsfAttr.addEventHandler("oncolumnchanged",this.ds_attr_oncolumnchanged,this);
        };
        this.loadIncludeScript("SSP_BO_PA_28.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
