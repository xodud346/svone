(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_OG_02");
            this.set_titletext("메타태그 - 등록/상세/수정");
            if (Form == this.constructor)
            {
                this._setFormPosition(890,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"META_TAG_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_metaTagInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"META_TAG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CHN_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_PAGE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TGT_URL\" type=\"STRING\" size=\"256\"/><Column id=\"OG_TTL\" type=\"STRING\" size=\"256\"/><Column id=\"OG_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"OG_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"OG_URL\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEFAULT_SORT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_save","475","325","70","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"325","70","32","420",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","30","23","830","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00","30","128","830","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("static_device_type","30","23","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("디바이스 구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("static_og_title","30","128","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("og:title");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_chn_tp_cd","141","34","269","16",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdo_chn_tp_cd_innerdataset = new nexacro.NormalDataset("rdo_chn_tp_cd_innerdataset", obj);
            rdo_chn_tp_cd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">P</Col><Col id=\"datacolumn\">PC</Col></Row><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">Mobile</Col></Row><Row><Col id=\"codecolumn\">C</Col><Col id=\"datacolumn\">공통</Col></Row></Rows>");
            obj.set_innerdataset(rdo_chn_tp_cd_innerdataset);
            obj.set_text("E-Mail");
            obj.set_value("E");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_evtId","140","132","711","27",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00_00","30","163","830","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("static_og_description","30","163","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("og:description");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_evtId00","140","167","711","27",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00_01","30","198","830","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("static_og_image","30","198","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("og:image");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_evtId01","140","202","711","27",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00_02","30","232","830","35",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("static_og_url","30","232","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("og:url");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_evtId02","140","237","711","27",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00_03","30","93","830","35",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("static_target_url","30","93","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("대상 URL");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_evtId03","140","97","711","27",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00_04","30","58","830","35",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("static_exps_pageNm","30","58","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("노출 페이지명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_exps_pageNm","140","62","711","27",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","30","267","830","35",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("static_use_yn","30","267","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"325","70","32","495",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_use_yn","140","278","199","16",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdo_use_yn_innerdataset = new nexacro.NormalDataset("rdo_use_yn_innerdataset", obj);
            rdo_use_yn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(rdo_use_yn_innerdataset);
            obj.set_text("E-Mail");
            obj.set_value("E");
            obj.set_index("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",890,400,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","edt_evtId","value","ds_metaTagInfo","OG_TTL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","rdo_chn_tp_cd","value","ds_metaTagInfo","CHN_TP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_evtId00","value","ds_metaTagInfo","OG_DESC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt_evtId01","value","ds_metaTagInfo","OG_IMG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt_evtId02","value","ds_metaTagInfo","OG_URL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_evtId03","value","ds_metaTagInfo","TGT_URL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_exps_pageNm","value","ds_metaTagInfo","EXPS_PAGE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","rdo_use_yn","value","ds_metaTagInfo","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_OG_02.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_OG_02.xfdl","OD::odUtils.xjs");
        this.addIncludeScript("SSP_BO_OG_02.xfdl","CC::CcUtils.xjs");
        this.registerScript("SSP_BO_OG_02.xfdl", function() {
        /*******************************************************
        PROJECT NAME : 메타태그 관리 등록/상세/수정
        CREATION DATES : 2023.05.23
        CREATER        : YHK
        *******************************************************/
        /* 스크립트 인클루드 */
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;
        /***********************************************************************************************
         * 0.Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.fv_oApp = nexacro.getApplication();
        this.fv_coCd = this.parent.coCd;
        this.metaTagSeq = this.parent.metaTagSeq;
        /***********************************************************************************************
        * 1.FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	// 파라미터 값 ds setcolumn
        	this.ds_search.setColumn(0, "CO_CD", this.fv_coCd);
        	this.ds_search.setColumn(0, "META_TAG_SEQ", this.metaTagSeq);

        	//초기화
        	this.fn_init();

        };

        this.fn_onkeyup = function(obj,e)
        {
        	//ESC : 닫기기능
        	if(e.keycode == 27){
        		this.close();
        	}
        };

        /***********************************************************************************************
        * 2.Transaction 서비스 호출 영역
        ************************************************************************************************/

        //조회
        this.fn_search = function() {

        	var sSvcId = "selectMetaTagInfo";
        	var sUrl = "/sa/meta-tag/select-meta-tag-info.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_metaTagInfo=ds_output";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        //저장
        this.fn_save = function() {

        	var sSvcId = "saveMetaTagInfo";
        	var sUrl = "/sa/meta-tag/save-meta-tag-info.do";
        	var inDs = "ds_save=ds_metaTagInfo";
        	var outDs = "";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        // 삭제
        this.fn_delete = function() {

        	var sSvcId = "deleteMetaTagInfo";
        	var sUrl = "/sa/meta-tag/delete-meta-tag-info.do";
        	var inDs = "ds_delete=ds_metaTagInfo"
        	var outDs = "";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        /***********************************************************************************************
        * 3.Callback 처리 영역
        ************************************************************************************************/

        //콜백
        this.fn_callBack = function(svcID, errorCode, errorMsg) {

        	switch (svcID)
        	{
        		case "saveMetaTagInfo" :
        			if(errorCode == ""){
        				alert(this.fn_getMessage("ERRN000030")); // 저장되었습니다.
        				this.opener.fn_search(0);
        				this.close();
        			}else{
        				alert(errorMsg);
        			}
        			break;

        		case "selectMetaTagInfo" :
        			if(this.ds_metaTagInfo.getColumn(0, "DEFAULT_SORT") == 1){
        				this.edt_exps_pageNm.set_enable(false);
        				this.rdo_use_yn.set_enable(false);
        			}
        			break;

        		case "deleteMetaTagInfo" :
        			if(errorCode == ""){
        				alert(this.fn_getMessage("ERRN000031")); // 삭제되었습니다.
        				this.opener.fn_search();
        				this.close();
        			} else {
        				alert(this.fn_getMessage("ERRN000032")); // 삭제에 실패하였습니다.
        			}
        			break;

        		default :

        			break;
        	}

        };

        //팝업 콜백
        this.fn_popupCallback = function(sPopupId, sRetValue){

        	var resData = "";
        	var sIdList = "";
        	var sNmList = "";

        	if(sRetValue == undefined){
        		return;
        	}else{
        		resData = JSON.parse(sRetValue);
        	}

        	switch(sPopupId){

        		case "mbrMultiPop":
        			for(var i=0; i<resData.length; i++){
        				var rtnData = JSON.parse(resData[i]);
        				sIdList += rtnData.MBR_ID + ",";

        			}
        			this.ds_edmInfo.setColumn(0,"MBR_ID",sIdList.replace(/,\s*$/, ""));


        			break;

        		default :
        			break;
        	}
        };

        //조건 멀티 텍스트 팝업 콜백
        this.fn_multiTextPopupCallback = function(objID, rtnValue) {

        	var resParam = JSON.parse(rtnValue);
        	var splitedStringArr = resParam.textValue.split(",");

        	switch(objID){

        		case "mbrMultiTextPopup":
        			this.ds_edmInfo.setColumn(0,"MBR_ID",this.gfn_allTrim(resParam.textValue).replace(/,\s*$/, ""));
        			break;

        		default :
        			break;
        	}
        }

        /***********************************************************************************************
        * 4.외부 호출 FUNCTION 영역
        ************************************************************************************************/
        this.cfn_formInit = function()
        {
        	// 필수 값 표시
        	this.static_device_type.uEssentiel = "true";
        	this.static_exps_pageNm.uEssentiel = "true";
        	this.static_use_yn.uEssentiel = "true";

        }


        /***********************************************************************************************
        *  5.개발자(사용자) 함수 영역
        ************************************************************************************************/

        //화면 초기화 함수
        this.fn_init = function() {

        	// 수정
        	if(!this.gfn_isNull(this.metaTagSeq)) {

        		this.fn_search();

        		this.btn_save.set_text("저장");

        	} else {

        		// 등록
        		this.ds_metaTagInfo.addRow();
        		this.ds_metaTagInfo.setColumn(0, "CO_CD", this.fv_coCd);
        		this.ds_metaTagInfo.setColumn(0, "META_TAG_SEQ", this.metaTagSeq);

        		this.rdo_chn_tp_cd.set_index(0);
        		this.rdo_use_yn.set_index(0);

        		this.btn_delete.set_visible(false); // 삭제버튼 미노출
        		this.btn_save.set_left(this.btn_save.getOffsetLeft() - 37);
        		this.btn_cancel.set_left(this.btn_cancel.getOffsetLeft() - 37);

        		this.btn_save.set_text("등록");
        	}
        }



        /***********************************************************************************************
        * 6. 각 Component 별 이벤트 영역
        ************************************************************************************************/

        // 취소
        this.btn_cancel_onclick = function(obj,e)
        {
        	if(confirm(this.fn_getMessage("ERRN000053"))) { // 취소하시겠습니까?
        		this.close();
        	}
        };

        // 삭제
        this.btn_delete_onclick = function(obj,e)
        {
        	if(this.ds_metaTagInfo.getColumn(0, "DEFAULT_SORT") == 1){
        		alert("Default 데이터는 삭제가 불가능합니다");
        		return;
        	}

        	if(confirm(this.fn_getMessage("ERRN000048"))) { // 삭제하시겠습니까?
        		this.fn_delete();
        	}
        };

        // 저장
        this.btn_save_onclick = function(obj,e)
        {
        	// 필수 입력값 체크
        	if(this.gfn_isNull(this.rdo_chn_tp_cd.value)) {
        		alert(this.fn_getMessage("ERRN000001", "디바이스구분은")); // 디바이스구분은 필수 입력항목입니다.
        		this.rdo_chn_tp_cd.setFocus();
        		return;
        	}

        	if(this.gfn_isNull(this.edt_exps_pageNm.value)) {
        		alert(this.fn_getMessage("ERRN000001", "노출 페이지명은")); // 노출 페이지명은 필수 입력항목입니다.
        		this.edt_exps_pageNm.setFocus();
        		return;
        	}

        	if(this.gfn_isNull(this.rdo_use_yn.value)) {
        		alert(this.fn_getMessage("ERRN000001", "사용여부는")); // 사용여부는 필수 입력항목입니다.
        		this.rdo_use_yn.setFocus();
        		return;
        	}

        	var saveMsg = "";
        	if(this.gfn_isNull(this.metaTagSeq)) { // 등록일 경우
        		saveMsg = this.fn_getMessage("ERRN000043"); // 등록하시겠습니까?
        	} else { // 수정일 경우
        		saveMsg = this.fn_getMessage("ERRN000044"); // 저장하시겠습니까?
        	}
        	if(!confirm(saveMsg)) {
        		return;
        	}
        	this.fn_save();
        };




        /***********************************************************************************************
        *  7.팝업 관련 영역
        ************************************************************************************************/


        //회원 조건 팝업
        this.btn_mbrMltPop_onclick = function(obj,e)
        {
        	this.fn_trimDatasetRow(this.ds_search); //데이터셋 일괄 공백제거

        	var objParam = {
        		coCd : this.fv_coCd,
        		mbrId: this.edt_mbr.value,
        		mbrNm: ""
        	};
        	this.gfn_openPopup("mbrMultiPop", "CO_POP::SSP_BO_PP_25.xfdl", objParam);
        };

        //회원 조건 텍스트 입력 팝업
        this.btn_mbrTxt_onclick = function(obj,e)
        {
        	var params = {
        		textId : this.edt_mbr
        	};

        	var options = {};
        	options.title = "회원";

        	this.gfn_openPopup("mbrMultiTextPopup", "CO_POP::SSP_BO_PP_13.xfdl", params,  "fn_multiTextPopupCallback", options);
        };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.rdo_chn_tp_cd.addEventHandler("onitemchanged",this.rdo_chn_tp_cd_onitemchanged,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_OG_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
