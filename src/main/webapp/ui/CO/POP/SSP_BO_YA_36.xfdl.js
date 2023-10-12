(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_YA_36");
            this.set_titletext("작업예약관리 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,264);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_hours", this);
            obj._setContents("<ColumnInfo><Column id=\"HOURS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_minutes", this);
            obj._setContents("<ColumnInfo><Column id=\"MINUTES\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_wrkRsrvDtls", this);
            obj._setContents("<ColumnInfo><Column id=\"WRK_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RSRV_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WRK_RSRV_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WRK_RSRV_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RSRV_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"EXCE_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WRK_EXCE_RSLT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WRK_EXCE_RSLT\" type=\"STRING\" size=\"256\"/><Column id=\"RSRV_PGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RSRV_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"RSRV_MINUTE\" type=\"STRING\" size=\"256\"/><Column id=\"RSRV_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"WRK_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RSRV_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"vaildCount\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_wrkRsrvSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pgmMetaDtls", this);
            obj._setContents("<ColumnInfo><Column id=\"RSRV_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RSRV_PGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_CLASS\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_METHOD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_wrkVaild", this);
            obj._setContents("<ColumnInfo><Column id=\"VAILD_CNT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchWrkRsrvDtls", this);
            obj._setContents("<ColumnInfo><Column id=\"WRK_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RSRV_PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WRK_RSRV_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WRK_RSRV_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RSRV_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"EXCE_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WRK_EXCE_RSLT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WRK_EXCE_RSLT\" type=\"STRING\" size=\"256\"/><Column id=\"RSRV_PGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RSRV_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"RSRV_MINUTE\" type=\"STRING\" size=\"256\"/><Column id=\"RSRV_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static60_00","20","20","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("| 작업예약관리 등록");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","60",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","Static60_00:10","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("실행예약일시");
            obj.set_cssclass("sta_cm_box01L_tdt_necessary");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","20","91",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","20","91","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("프로그램");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","20","122",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","20","122","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("작업구분");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","395","214","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","321","214",null,"30","btn_save:4",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_01","20","152",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","20","152","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("작업명");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_rsrvDtm","160","64","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_rsrvHour","cal_rsrvDtm:4","64","55","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_codecolumn("HOURS");
            obj.set_datacolumn("HOURS");
            obj.set_innerdataset("ds_hours");
            obj.set_displayrowcount("20");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_rsrvMinute","cmb_rsrvHour:4","64","55","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_codecolumn("MINUTES");
            obj.set_datacolumn("MINUTES");
            obj.set_innerdataset("ds_minutes");
            obj.set_scrollindicatorsize("");
            obj.set_displayrowcount("20");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_rsrvPgmNm","160","95","238","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_codecolumn("RSRV_PGM_ID");
            obj.set_datacolumn("RSRV_PGM_NM");
            obj.set_innerdataset("ds_pgmMetaDtls");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_wrkRsrvSprCd","160","126","238","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_innerdataset("ds_wrkRsrvSprCd");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_wrkRsrvNm","160","157",null,"24","30",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_maxlength("40");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,264,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cmb_rsrvHour","value","ds_wrkRsrvDtls","RSRV_HOUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cmb_rsrvMinute","value","ds_wrkRsrvDtls","RSRV_MINUTE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cmb_rsrvPgmNm","value","ds_wrkRsrvDtls","RSRV_PGM_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cmb_wrkRsrvSprCd","value","ds_wrkRsrvDtls","WRK_RSRV_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_wrkRsrvNm","value","ds_wrkRsrvDtls","WRK_RSRV_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cal_rsrvDtm","value","ds_wrkRsrvDtls","RSRV_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SSP_BO_YA_36.xfdl", function() {
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object
        this.wrkSeq = "";
        this.rsrvPgmId = "";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onload = function(obj,e)
        {
        	//공통 필수
        	this.gfn_formOnLoad(this);

        	//시간, 분 SETTING
        	this.fn_setTimes();

        	//공통코드
        	this.fn_commonCodeSearch();
        	this.fn_pgmMetaListSearch();
        	this.ds_wrkRsrvDtls.addRow();

        	this.cmb_rsrvHour.set_index(0);
        	this.cmb_rsrvMinute.set_index(0);
        };


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //공통코드조회
        this.fn_commonCodeSearch = function(){
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_wrkRsrvSprCd=ds_output1";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "WRK_RSRV_SPR_CD");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };


        //조회
        this.fn_search = function(){
        	var sSvcId = "search";
        	var sUrl = "/co/select-wrk-rsrv-dtls-detail.do";
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_wrkRsrvDtls=ds_output1";
        	var arg;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack", false);
        };

        // 저장
        this.fn_save = function() {
        	var sSvcId = "save";
        	var sUrl = "/co/save-select-wrk-rsrv-dtls.do";
        	var inDs = "ds_save=ds_wrkRsrvDtls:U"
        	var outDs = "";
        	var arg;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //작업예약프로그램메타내역 목록 조회
        this.fn_pgmMetaListSearch = function(){
        	var sSvcId = "pgmMetaSearch";
        	var sUrl = "/co/select-wrk-rsrv-pgm-meta-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_pgmMetaDtls=ds_output1";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //
        this.fn_vaild = function(){
        	var sSvcId = "pgmMetaVaild";
        	var sUrl = "/co/select-wrk-rsrv-dtls-vaild.do";
        	var inDs = "ds_search=ds_searchWrkRsrvDtls";
        	var outDs = "ds_wrkVaild=ds_output1";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        //조회 콜백
        this.fn_callBack = function(svcID, errorCode, errorMsg) {
        	if(errorCode != 0 && errorCode != -100){
        		alert(errorMsg);
        	}

        	switch(svcID){
        	case "search":
        		break;
        	case "commonCodeSearch":
        		this.ds_wrkRsrvSprCd.insertRow(0);
        		this.ds_wrkRsrvSprCd.setColumn(0,"COM_DTL_CD_NM","선택");
        		break;
        	case "pgmMetaSearch":
        		this.ds_pgmMetaDtls.insertRow(0);
        		this.ds_pgmMetaDtls.setColumn(0,"RSRV_PGM_NM","선택");
        		break;
        	case "pgmMetaVaild":

        		if(this.ds_wrkVaild.getColumn(0, "VAILD_CNT") > 0){
        			alert("1시간 이내에 중복된 배치를 등록할수 없습니다.");
        		}else{
        			this.fn_saveVaild();
        		}

        		break;
        	case "save":
        		if(errorCode == -100){
        			alert(errorMsg);
        		}else{
        			if(!this.gfn_isNull(this.wrkSeq)){
        				this.ds_search.setColumn(0, "WRK_SEQ", this.wrkSeq);
        				this.ds_search.setColumn(0, "RSRV_PGM_ID", this.rsrvPgmId);
        			}
        			this.fn_search();
        			this.close(true);
        		}
        		break;
        	case "delete":
        		if(errorCode == -100){
        			alert(errorMsg);
        		}else{
        			this.close(true);
        		}
        		break;
        	default:
        		break;
        	}
        }

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.fn_setTimes  = function(){
        	var hours = "";
        	var minutes = "";

        	for(var i = 0; i < 24; i++){
        		this.ds_hours.addRow();
        		if(i < 10){
        			hours = "0" + i;
        		}else{
        			hours = i;
        		}

        		this.ds_hours.setColumn(i, "HOURS", hours);
        	}

         	for(var i = 0; i < 2; i++){
         		this.ds_minutes.addRow();
         		if(i == 0){
         			minutes = "0" + i;
         		}else{
         			minutes = i*30;
         		}

         		this.ds_minutes.setColumn(i, "MINUTES", minutes);
         	}
        };

        //저장 유효성 체크
        this.fn_validationCheck = function(){
        	var ndate = new nexacro.Date();
        	var year = parseInt(this.cal_rsrvDtm.value.substr(0, 4));
        	var month = parseInt(this.cal_rsrvDtm.value.substr(4, 2)) - 1;
        	var day = parseInt(this.cal_rsrvDtm.value.substr(6, 2));
        	var inpdate = new Date(year, month, day, parseInt(this.cmb_rsrvHour.value), parseInt(this.cmb_rsrvMinute.value));
        	var dchk = inpdate - ndate.date;



        	if(this.gfn_isNull(this.cal_rsrvDtm.value) || this.gfn_isNull(this.cmb_rsrvHour.value) || this.gfn_isNull(this.cmb_rsrvMinute.value)) {
        		alert("실행예약일시는 필수 입력항목입니다.");
        		return false;
        	}

        	if (dchk <= 0) {
        		alert("실행예약일시는 현재보다 이후의 시간을 입력하세요");
        		return false;
        	}

        	if(this.gfn_isNull(this.cmb_rsrvPgmNm.value)) {
        		alert("프로그램은 필수 입력항목입니다.");
        		return false;
        	}

        	if(this.gfn_isNull(this.cmb_wrkRsrvSprCd.value)) {
        		alert("작업구분은 필수 입력항목입니다.");
        		return false;
        	}

        	if(this.gfn_isNull(this.edt_wrkRsrvNm.value)) {
        		alert("작업명은 필수 입력항목입니다.");
        		return false;
        	}

        	return true;
        };

        this.fn_saveVaild  = function(){

        	var sReturn = this.confirm("저장하시겠습니까?");
        	if(sReturn == true){

        		var rsrvDate = this.cal_rsrvDtm.text;
        		var rsrvHour = this.ds_wrkRsrvDtls.getColumn(0, "RSRV_HOUR");
        		var rsrvMinute = this.ds_wrkRsrvDtls.getColumn(0, "RSRV_MINUTE");
        		var rsrvDtm = rsrvDate.concat(" ", rsrvHour, ":", rsrvMinute, ":", "00");
        		this.ds_wrkRsrvDtls.setColumn(0, "RSRV_DTM", rsrvDtm);
        		this.fn_save();
        	}

        }
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //취소버튼
        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        };

        //저장
        this.btn_save_onclick = function(obj,e)
        {
        	if(this.fn_validationCheck()){
        		var rsrvDate = this.cal_rsrvDtm.text;
        		var rsrvHour = this.ds_wrkRsrvDtls.getColumn(0, "RSRV_HOUR");
        		var rsrvMinute = this.ds_wrkRsrvDtls.getColumn(0, "RSRV_MINUTE");
        		var rsrvDtm = rsrvDate.concat(" ", rsrvHour, ":", rsrvMinute, ":", "00");
        		this.ds_wrkRsrvDtls.setColumn(0, "RSRV_DTM", rsrvDtm);

        		this.ds_searchWrkRsrvDtls.copyData(this.ds_wrkRsrvDtls,true);
        		this.fn_vaild();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onload,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_YA_36.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
