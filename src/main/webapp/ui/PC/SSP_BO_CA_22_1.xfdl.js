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
            this.set_titletext("가격정보");
            this.set_scrolltype("both");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,415);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_purcInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"VLD_END_DT\" type=\"STRING\" size=\"32\"/><Column id=\"SPL_PSB_YN\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CURR_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MIN_ODR_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"VLD_STR_DT\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_PRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"VLD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"INTG_CPRTCP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SPL_PSB_YN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><ColumnInfo><Column id=\"VLD_END_DT\" type=\"STRING\" size=\"32\"/><Column id=\"SPL_PSB_YN\" type=\"STRING\" size=\"32\"/><Column id=\"DATE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"INTG_CPRTCP_YN\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_KOR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CURR_UNIT_CD\" type=\"STRING\" size=\"32\"/><Column id=\"VLD_STR_DT\" type=\"STRING\" size=\"32\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MIN_ODR_QTY\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_PRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_page", this);
            obj._setContents("<ColumnInfo><Column id=\"COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COUNT\">10</Col></Row><Row><Col id=\"COUNT\">20</Col></Row><Row><Col id=\"COUNT\">30</Col></Row><Row><Col id=\"COUNT\">40</Col></Row><Row><Col id=\"COUNT\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_GB\" type=\"STRING\" size=\"256\"/><Column id=\"IS_NEW\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pcPrdPrcDtl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GB\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_PCPRC\" type=\"STRING\" size=\"256\"/><Column id=\"PLN_PRFRT\" type=\"STRING\" size=\"256\"/><Column id=\"STPRC\" type=\"STRING\" size=\"256\"/><Column id=\"DSTRB_STD_PRC\" type=\"STRING\" size=\"256\"/><Column id=\"MRK_LWST_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"INTL_LWST_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_DSGN_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_CURR_BSS_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_SALSPRC_CURR_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXCHRT_APLY_YM\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_BSS_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_SALSPRC_STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_SALSPRC_END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"SALSPRC_CAL_BSS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALSPRC_CAL_BSS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IS_NEW\" type=\"STRING\" size=\"256\"/><Column id=\"FST_HST_YN\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LWST_BUY_CPRTCP_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_forServerPrdPrcDtl", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GB\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_PCPRC\" type=\"STRING\" size=\"256\"/><Column id=\"PLN_PRFRT\" type=\"STRING\" size=\"256\"/><Column id=\"STPRC\" type=\"STRING\" size=\"256\"/><Column id=\"DSTRB_STD_PRC\" type=\"STRING\" size=\"256\"/><Column id=\"MRK_LWST_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"INTL_LWST_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_DSGN_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_CURR_BSS_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_SALSPRC_CURR_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXCHRT_APLY_YM\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_BSS_SALSPRC\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_SALSPRC_STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_SALSPRC_END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"SALSPRC_CAL_BSS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALSPRC_CAL_BSS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IUD_GB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00_00_00","0","253","212","16",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("■ 현재 적용 기준가격(VAT 제외)");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_price","0","286",null,"97","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_pcPrdPrcDtl");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"46\"/><Column size=\"76\"/><Column size=\"61\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"96\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"20\"/><Column size=\"130\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"CO_CD\"/><Cell col=\"1\" text=\"PRD_ID\"/><Cell col=\"2\" text=\"BZPLC_ID\"/><Cell col=\"3\" text=\"구분\"/><Cell col=\"4\" text=\"기준매입가\"/><Cell col=\"5\" text=\"매입통화\"/><Cell col=\"6\" text=\"계획매익율\"/><Cell col=\"7\" text=\"SSP기준가\"/><Cell col=\"8\" text=\"MD지정판매가\"/><Cell col=\"9\" text=\"ListPrice\"/><Cell col=\"10\" text=\"시장최저판매가\"/><Cell col=\"11\" text=\"내부최저판매가\"/><Cell col=\"12\" text=\"SSP기준판매가\"/><Cell col=\"13\" text=\"기준판매가산출기준\"/><Cell col=\"14\" colspan=\"3\" text=\"유효기간\"/></Band><Band id=\"body\"><Cell text=\"bind:CO_CD\"/><Cell col=\"1\" text=\"bind:PRD_ID\"/><Cell col=\"2\" text=\"bind:BZPLC_ID\"/><Cell col=\"3\" text=\"단가\"/><Cell col=\"4\" text=\"bind:BSS_PCPRC\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:BSS_SALSPRC_CURR_UNIT_CD\"/><Cell col=\"6\" text=\"bind:PLN_PRFRT\" displaytype=\"mask\" maskeditformat=\"#,0.00\" maskeditpostfixtext=\"%\" textAlign=\"right\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"none\" maskeditformat=\"#,###\" text=\"bind:STPRC\" textAlign=\"right\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"none\" text=\"expr:PURG_DSGN_SALSPRC==&quot;0&quot;?&quot;&quot;:PURG_DSGN_SALSPRC\" textAlign=\"right\"/><Cell col=\"9\" text=\"expr:DSTRB_STD_PRC==&quot;0&quot;?&quot;&quot;:DSTRB_STD_PRC\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"10\" text=\"expr:MRK_LWST_SALSPRC==&quot;0&quot;?&quot;&quot;:MRK_LWST_SALSPRC\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"11\" text=\"expr:INTL_LWST_SALSPRC==&quot;0&quot;?&quot;&quot;:INTL_LWST_SALSPRC\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"12\" text=\"expr:SSP_BSS_SALSPRC==&quot;0&quot;?&quot;&quot;:SSP_BSS_SALSPRC\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"13\" text=\"bind:SALSPRC_CAL_BSS_NM\" displaytype=\"text\"/><Cell col=\"14\" displaytype=\"date\" edittype=\"none\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" text=\"bind:BSS_SALSPRC_STR_DTM\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" border=\"0px none, 0px solid, 1px solid #cbcbcb, 0px none\"/><Cell col=\"15\" text=\"~\" border=\"0px none, 0px solid, 1px solid #cbcbcb, 0px none\"/><Cell col=\"16\" displaytype=\"date\" edittype=\"none\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" text=\"bind:BSS_SALSPRC_END_DTM\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","312","29","160","14",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("(총 0건 1/1)");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prcCalc",null,"249","120","28","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("기준판매가재계산");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","63",null,"157","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_purcInfo");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"90\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"협력사ID\"/><Cell col=\"1\" text=\"협력사\"/><Cell col=\"2\" text=\"매입가\"/><Cell col=\"3\" text=\"매입통화\"/><Cell col=\"4\" text=\"공급가능여부\"/><Cell col=\"5\" text=\"통합협력사\"/><Cell col=\"6\" text=\"가격유효기간(From)\"/><Cell col=\"7\" text=\"가격유효기간(To)\"/><Cell col=\"8\" text=\"최소주문수량\"/><Cell col=\"9\" text=\"condition\"/><Cell col=\"10\" text=\"배송가능지역\"/></Band><Band id=\"body\"><Cell text=\"bind:CPRTCP_ID_VIEW\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:CPRTCP_KOR_NM\"/><Cell col=\"2\" text=\"bind:PRD_PRC\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:CURR_UNIT_CD\"/><Cell col=\"4\" text=\"bind:SPL_PSB_YN_NM\"/><Cell col=\"5\" text=\"bind:INTG_CPRTCP_YN\"/><Cell col=\"6\" text=\"bind:VLD_STR_DT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"7\" text=\"bind:VLD_END_DT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"8\" text=\"bind:MIN_ODR_QTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"9\" displaytype=\"imagecontrol\" text=\"expr:&quot;theme::default/images/btn_WF_Grdexpand.png&quot;\"/><Cell col=\"10\" text=\"expr:&quot;theme::default/images/btn_WF_Grdexpand.png&quot;\" displaytype=\"imagecontrol\" expandshow=\"hide\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_page","400","21","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_displayrowcount("5");
            obj.set_innerdataset("ds_page");
            obj.set_codecolumn("COUNT");
            obj.set_datacolumn("COUNT");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00","0","0","100%","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_00_00","0","219","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_01","0","229","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_00_01","0","52","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_02_00_00_00_00_00_00","0","276","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_bssSalsprc","Static00_00_00_00:21","255","203","14",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("적용일 : ");
            this.addChild(obj.name, obj);

            obj = new Button("btn_listUpdate",null,"24","120","28","0",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("구매정보 업데이트");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prcInsert",null,"249","120","28","btn_prcCalc:4",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("참조가격입력");
            this.addChild(obj.name, obj);

            obj = new Button("btn_changeInfo",null,"249","120","28","btn_prcInsert:4",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("기준판매가변동현황");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sellInfo",null,"249","120","28","btn_changeInfo:4",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("내부최저가판매상세");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","30","80","16",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("■ 구매 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ltsRenDtm","101","24","232","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("최근 갱신일시 : 2021-08-25 14:20");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,415,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CA_22_1.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_CA_22_1.xfdl", function() {
        /******************************************************************************
        PROJECT NAME : C:\Users\spaa\git\ssp-bo\src\main\ui\RD\SSP_BO_LA_04_1.xfdl
        CREATION DATES : 2022/03/11
        CREATER : 이택우
        *******************************************************************************/

        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        this.totalCount = 0;
        this.localPrdId = "";
        this.localPrdNm = "";
        this.localBzplcId = "";
        this.localBzplcNm = "";
        this.isNew = "N";

        this.localUserId = "";
        this.localRdoDispStats = "";
        this.fromDate = "";
        this.toDate = "";

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
        	//trace("현재 선택된 객체 : "+this.prdId.value);
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.resetScroll();
        };

        // 사용자 초기화
        this.fn_userInit = function(prdId, prdNm, bzplcId, bzplcNm, strNew) {
        	this.totalCount = 0;
        	this.fromDate = "";
        	this.toDate = "";

        	this.localPrdId = prdId;
        	this.localPrdNm = prdNm;
        	this.localBzplcId = bzplcId;
        	this.localBzplcNm = bzplcNm;
        	if(strNew != undefined)
        		this.isNew = strNew;

        	this.ds_search.setColumn(0,"CO_CD", this.fv_coCd);//회사코드
        	//this.ds_search.setColumn(0,"PRD_ID", this.prdId.value);//PRD_ID
        	this.ds_search.setColumn(0,"PRD_ID", this.localPrdId);//PRD_ID
        	this.ds_search.setColumn(0,"MALL_SPR_CD","10");//RND
        	this.ds_search.setColumn(0,"PUB_ONLY_SPR_CD","");//공용전용구분
        	this.ds_search.setColumn(0,"BZPLC_ID", "*");
        	this.ds_search.setColumn(0,"IS_NEW", this.isNew);
        };

        this.fn_setDisplay = function(bNotReadOnly)	{

        	if(bNotReadOnly == false)
        	{
        		//this.btn_listUpdate.set_enable(false);
        		this.btn_prcInsert.set_enable(false);
        		this.btn_prcCalc.set_enable(false);
        		this.grid_price.set_readonly(true);
        	}
        	else {
        		//this.btn_listUpdate.set_enable(true);
        		this.btn_prcInsert.set_enable(true);
        		this.btn_prcCalc.set_enable(true);
        		this.grid_price.set_readonly(false);
        	}
        	this.btn_listUpdate.set_enable(true);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function(strGb){
        	var sSvcId = "searchCalcPcPrdPrc";
        	var sUrl = "/pc/pc-prc-mng/prc-details.do";
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_pcPrdPrcDtl=ds_output1 ds_purcInfo=ds_output2";
        	var arg;
        	var callback  ="fn_callBack";

        	this.ds_search.setColumn(0,"CO_CD", this.fv_coCd);//회사코드
        	if(strGb == undefined)
        		this.ds_search.setColumn(0,"SEARCH_GB", "1");
        	else
        		this.ds_search.setColumn(0,"SEARCH_GB", strGb);
        	this.ds_search.setColumn(0,"PRD_ID", this.localPrdId);
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        	trace("### searchCalcPcPrdPrc ###");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_toDate = function(){
        	var date = this.fn_todayTime();

        	var returnData = date.substr(0, 4)  + "-" + date.substr(4, 2) + "-" + date.substr(6,2) + " " + date.substr(8,2) +":"+ date.substr(10,2) +":"+ date.substr(12,2);
        	return returnData;
        }
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if (errorCode != 0 && errorCode != -100) {
        		alert(errorMsg);
        	}

        	switch (svcID) {
        		//구매정보 조회
        		case "searchCalcPcPrdPrc" :
        			var sDateText = "최근 갱신일시 : " + this.fn_toDate();
        			this.stc_ltsRenDtm.set_text(sDateText);
        			var strGb = this.ds_search.getColumn(0,"SEARCH_GB");

        			if(this.ds_pcPrdPrcDtl != null && this.ds_pcPrdPrcDtl.rowcount > 0){
        				if(typeof(this.ds_pcPrdPrcDtl.getColumn(0,"UPD_DTM")) == 'undefined'){
        					var uDateText = "";
        					this.stc_bssSalsprc.set_text(uDateText);
        				}else{
        					var uDateText = "적용일 : " + this.ds_pcPrdPrcDtl.getColumn(0,"UPD_DTM");
        					this.stc_bssSalsprc.set_text(uDateText);
        				}
        			}



        			if(strGb != undefined && strGb == "2")
        			{
        				if(this.ds_pcPrdPrcDtl != null && this.ds_pcPrdPrcDtl.rowcount == 1){
        					//기준판매가 재계산시
        					this.ds_pcPrdPrcDtl.set_updatecontrol(false);
        					this.ds_pcPrdPrcDtl.setColumn(0,"FST_HST_YN","Y");
        					this.ds_pcPrdPrcDtl.set_updatecontrol(true);

        				}else{
        					this.ds_pcPrdPrcDtl.set_updatecontrol(false);
        					this.ds_pcPrdPrcDtl.setColumn(1,"FST_HST_YN","N");
        					this.ds_pcPrdPrcDtl.set_updatecontrol(true);
        				}

        				//서버에서 구매정보가 있는지를 확인해서 dataset으로 가져와야 함
        				//오류처리 추가해야됨.
        				var nRow = this.ds_pcPrdPrcDtl.findRow("GB","2");
        				if( nRow == -1 )	//alert("해당 상품은 기준가 산출을 할 수 없습니다.");
        					this.alert(this.fn_getMessage("ERRP000228"));
        				else	{
        					this.ds_pcPrdPrcDtl.set_updatecontrol(false);
        					this.ds_pcPrdPrcDtl.setRowType(nRow,Dataset.ROWTYPE_INSERT);
        					this.ds_pcPrdPrcDtl.set_updatecontrol(true);
        				}
        			}
        			else if(strGb != undefined && strGb == "1" )
        			{
        				var nRow = this.ds_pcPrdPrcDtl.findRow("IS_NEW","Y");
        				if( nRow != -1 )	{
        					this.ds_pcPrdPrcDtl.set_updatecontrol(false);
        					this.ds_pcPrdPrcDtl.setRowType(0,Dataset.ROWTYPE_INSERT);
        					this.ds_pcPrdPrcDtl.set_updatecontrol(true);
        				}
        			}
        			break;
        		default:
        			break;
        	}
        };

        this.fn_popupCallback = function(sPopupId, args){
        }

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        // Dataset 리셋
        /*this.fn_clearData = function() {
        	this.ds_pcPrdPrcDtl.clearData();
        };
        */
        // 저장여부 조회
        this.fn_shouldSave = function() {
        	//변경해야함
        	var deletedCount = this.ds_pcPrdPrcDtl.getDeletedRowCount();
        	if (deletedCount > 0)	return true;

        	var rowType = "";

        	for (var i = 0; i < this.ds_pcPrdPrcDtl.rowcount; i++) {
        		rowType = this.ds_pcPrdPrcDtl.getRowType(i);
        		if (rowType == Dataset.ROWTYPE_NORMAL)	continue;

        		if (rowType == Dataset.ROWTYPE_INSERT ||
        			rowType == Dataset.ROWTYPE_UPDATE)
        			return true;
        	}
        	return false;
        };

        this.fn_getSaveDataset01 = function() {
        	if (!this.fn_didChange(this.ds_pcPrdPrcDtl)) {
        		return null;
        	}
        	return this.fn_getSaveDataset(this.ds_pcPrdPrcDtl, this.ds_forServerPrdPrcDtl);
        };

        this.fn_getExpPrfrt = function(salsprc, IsBssSalsprcUse) {
        	//퍼센트 계산

        	var salsprcVal = salsprc;
        	var bssPcprcVal = this.ds_pcPrdPrcDtl.getColumn(0,"BSS_PCPRC");
        	var sspBssSalsprcVal = this.ds_pcPrdPrcDtl.getColumn(0,"SSP_BSS_SALSPRC");
        	var expPrfrt = 0;
        	if(IsBssSalsprcUse){

        		if(typeof(sspBssSalsprcVal) != "undefined" && typeof(bssPcprcVal) != "undefined"){
        			//expPrfrt = (1-(bssPcprcVal/sspBssSalsprcVal)) * 100;
        			expPrfrt = 0;
        		}

        	}else{

        		if(typeof(salsprcVal) != "undefined" && typeof(bssPcprcVal) != "undefined"){
        			expPrfrt = (1-(bssPcprcVal/salsprcVal))*100;
        			//expPrfrt = 0;
        		}
        	}
        	trace("리턴 : " + expPrfrt);
        	return expPrfrt;

        };

        /***********************************************************************************************
        *  컴포넌트 함수 영역
        ************************************************************************************************/
        this.grd_list_oncellclick = function(obj,e)
        {
        	if(e.col == 9){
        		var objParam = {
        			prdId : this.ds_purcInfo.getColumn(this.ds_purcInfo.rowposition, "PRD_ID"),
        			cprtcpId : this.ds_purcInfo.getColumn(this.ds_purcInfo.rowposition, "CPRTCP_ID"),
        		};
        		this.gfn_openPopup(e.fromobject.id, "PC::SSP_BO_CA_25.xfdl", objParam);
        	}
        	if(e.col == 10){
        		var objParam = {
        			cprtcpId : this.ds_purcInfo.getColumn(this.ds_purcInfo.rowposition, "CPRTCP_ID"),
        			cprtcpNm : this.ds_purcInfo.getColumn(this.ds_purcInfo.rowposition, "CPRTCP_KOR_NM")
        		};
        		this.gfn_openPopup(e.fromobject.id, "PC::SSP_BO_CA_26.xfdl", objParam);
        	}
        };

        //내부최저가 판매상세 버튼 팝업
        this.btn_sellInfo_onclick = function(obj,e)
        {
        	var objParam = {prdId:this.localPrdId};
        	this.gfn_openPopup(e.fromobject.id, "PC::SSP_BO_CA_42_1.xfdl", objParam);
        };

        //기준판매가 변동현황 버튼 팝업
        this.btn_bssSalsprcCurst_onclick = function(obj,e)
        {
        	var objParam = {coCd:this.fv_coCd, prdId:this.localPrdId, bzplcYn: 'Y'};
        	this.gfn_openPopup(e.fromobject.id, "PC::SSP_BO_CA_27.xfdl", objParam);
        };

        //예외가격 입력 팝업
        this.btn_prcInsert_onclick = function(obj,e)
        {
        	var objParam = {prdId:this.localPrdId, prdNm:this.localPrdNm};
        	this.gfn_openPopup(e.fromobject.id, "PC::SSP_BO_CA_30.xfdl", objParam, "fn_popupCallback");
        };

        //기준판매가 재계산 버튼
        this.btn_prcCalc_onclick = function(obj,e)
        {
        	this.fn_search("2");
        };

        //구매정보 업데이트
        this.btn_listUpdate_onclick = function(obj,e)
        {
        	this.fn_search("3");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.btn_prcCalc.addEventHandler("onclick",this.btn_prcCalc_onclick,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.btn_listUpdate.addEventHandler("onclick",this.btn_listUpdate_onclick,this);
            this.btn_prcInsert.addEventHandler("onclick",this.btn_prcInsert_onclick,this);
            this.btn_changeInfo.addEventHandler("onclick",this.btn_bssSalsprcCurst_onclick,this);
            this.btn_sellInfo.addEventHandler("onclick",this.btn_sellInfo_onclick,this);
            this.ds_pcPrdPrcDtl.addEventHandler("oncolumnchanged",this.ds_pcPrdPrcDtl_oncolumnchanged,this);
            this.ds_forServerPrdPrcDtl.addEventHandler("oncolumnchanged",this.ds_pcPrdPrcDtl_oncolumnchanged,this);
        };
        this.loadIncludeScript("SSP_BO_CA_22_1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
