(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_NA_15");
            this.set_titletext("테마 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,340);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pnbStoryInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TTL\" type=\"STRING\" size=\"256\"/><Column id=\"PC_EXPS_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_EXPS_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PC_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DOC_REG_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"PC_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PC_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DOC_REG_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"MBL_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj = new Static("Static01","10","47",null,"32","10",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","203",null,"32","10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_useYn","10","203","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_useYn","150","207","150","24",null,null,null,null,null,null,this);
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            obj.set_taborder("6");
            obj.set_direction("vertical");
            var rdo_useYn_innerdataset = new nexacro.NormalDataset("rdo_useYn_innerdataset", obj);
            rdo_useYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(rdo_useYn_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","174",null,"70","30",null,"41",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","248",null,"70","30",null,"41",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","78",null,"32","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_expsCnt","10","78","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("노출 개수 설정");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_pcExpsCnt","180","82","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cbo_pcExpsCnt_innerdataset = new nexacro.NormalDataset("cbo_pcExpsCnt_innerdataset", obj);
            cbo_pcExpsCnt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">6</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">9</Col></Row><Row><Col id=\"codecolumn\">12</Col><Col id=\"datacolumn\">12</Col></Row><Row><Col id=\"codecolumn\">24</Col><Col id=\"datacolumn\">24</Col></Row></Rows>");
            obj.set_innerdataset(cbo_pcExpsCnt_innerdataset);
            obj.set_text("1주일");
            obj.set_value("2");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_ttl","10","47","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("제목");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ttl","150","51",null,"24","95",null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","10","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("테마 추가");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_mblExpsCnt","360","82","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cbo_mblExpsCnt_innerdataset = new nexacro.NormalDataset("cbo_mblExpsCnt_innerdataset", obj);
            cbo_mblExpsCnt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">6</Col></Row><Row><Col id=\"codecolumn\">12</Col><Col id=\"datacolumn\">12</Col></Row><Row><Col id=\"codecolumn\">24</Col><Col id=\"datacolumn\">24</Col></Row></Rows>");
            obj.set_innerdataset(cbo_mblExpsCnt_innerdataset);
            obj.set_text("1주일");
            obj.set_value("2");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","10","109",null,"48","10",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pcImg","10","109","130","48",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("PC 공통\r\n표지 이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pcAtflNm","150","113","240","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pcImgAdd","396","113","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("파일첨부");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pcImgDelete","460","113","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("X");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","10","156",null,"48","10",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mblImg","10","156","130","48",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("모바일 공통\r\n표지 이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mblAtflNm","150","160","240","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mblImgAdd","396","160","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("파일첨부");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mblImgDelete","460","160","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("X");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pcImgSizeRef","150","135","334","24",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("용량 : 10M 미만 / 형식 : PNG, JPG(최적 사이즈 : 60*420)");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mblImgSizeRef","150","181","334","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("용량 : 10M 미만 / 형식 : PNG, JPG(최적 사이즈 : 25*175)");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pcExpsCnt","154","81","33","24",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("PC");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mblExpsCnt","316","81","49","24",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("Mobile");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("sta_ttlSize","edt_ttl:-3","51","88","24",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("(0 / 300 Byte)");
            obj.set_textAlign("right");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",500,340,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cbo_pcExpsCnt","value","ds_pnbStoryInfo","PC_EXPS_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","rdo_useYn","value","ds_pnbStoryInfo","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_ttl","value","ds_pnbStoryInfo","TTL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cbo_mblExpsCnt","value","ds_pnbStoryInfo","MBL_EXPS_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_pcAtflNm","value","ds_pnbStoryInfo","PC_ATFL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt_mblAtflNm","value","ds_pnbStoryInfo","MBL_ATFL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_NA_15.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_NA_15.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_NA_15.xfdl", function() {
        /*******************************************************
        PROJECT NAME : 테마 등록
        CREATION DATES : 2023.02.17.
        CREATER        : 87minho
        *******************************************************/
        //인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();
        this.fv_coCd = this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD");
        var curImgBtnName = "";
        this.maxFileSize = "10";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	this.cbo_pcExpsCnt.set_index(0);
        	this.cbo_mblExpsCnt.set_index(0);
        	this.rdo_useYn.set_index(1);
        };

        this.fn_onkeyup = function(obj,e)
        {
        	//ESC : 닫기기능
        	if(e.keycode == 27){
        		this.close();
        	}
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //저장
        this.fn_save = function()
        {
        	var sSvcId = "saveThmInfo";
        	var sUrl = "/sa/pnb-story/save-thm-info.do";
        	var inDs = "ds_save=ds_pnbStoryInfo:A"
        	var outDs = "";
        	var arg = "";
        	var callback = "fn_callBack";

        	this.ds_pnbStoryInfo.setColumn(0, "CO_CD", this.fv_coCd) ;

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg) {

        	switch(svcID) {

        		case "saveThmInfo" :
        			if(errorCode == ""){
        				alert(this.fn_getMessage("ERRN000030")); // 저장되었습니다.
        				this.opener.fn_grdPnbStoryThmList();
        				this.close();
        			}else{
        				alert(errorMsg);
        			}
        			break;

        		default :

        			break;
        	}
        }


        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){
        	// static 초기 설정
        	this.sta_ttl.uEssentiel = "true";
        	this.sta_expsCnt.uEssentiel = "true";
        	this.sta_pcImg.uEssentiel = "true";
        	this.sta_mblImg.uEssentiel = "true";
        	this.sta_useYn.uEssentiel = "true";
        }
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        // 글자 byte 체크 함수
        this.fn_setLenByte = function(sVal, maxByte, sGubun)
        {
        	if(this.gfn_isNull(sVal)) {
        		return;
        	}
        	var count = nexacro._getUtf8Length(sVal);
        	var expsText = "";

        	if (count < 0) {
        		count = 0;
        	}

        	if(count <= maxByte) {
        		expsText = "(<fc v='red'>" + count + "</fc> / " + maxByte + " Byte)";

        		if (sGubun == "ttl") {
        			this.sta_ttlSize.set_text(expsText);
        		}
        		return;
        	}

        	var tempVal = "";

        	tempVal = nexacro._substrByUtf8(sVal, 0, maxByte);
        	count = nexacro._getUtf8Length(tempVal);

        	expsText = "(<fc v='red'>" + count + "</fc> / " + maxByte + " Byte)";

        	if (sGubun == "ttl") {
        		this.edt_ttl.set_value("");
        		this.edt_ttl.set_value(tempVal);
        		this.sta_ttlSize.set_text(expsText);
        	}
        };

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        // 저장 버튼
        this.btn_save_onclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.edt_ttl.value)) {
        		alert(this.fn_getMessage("COMS000011", "테마 명")); // 테마 명을(를) 입력해 주십시오
        		this.edt_ttl.setFocus();
        		return;
        	}
        	if(this.gfn_isNull(this.edt_pcAtflNm.value)) {
        		alert(this.fn_getMessage("ERRN000001", "PC 공통 표지 이미지는")); // PC 공통 표지 이미지는 필수 입력항목입니다.
        		this.edt_pcAtflNm.setFocus();
        		return;
        	}
        	if(this.gfn_isNull(this.edt_mblAtflNm.value)) {
        		alert(this.fn_getMessage("ERRN000001", "Mobile 공통 표지 이미지는")); // Mobile 공통 표지 이미지는 필수 입력항목입니다.
        		this.edt_mblAtflNm.setFocus();
        		return;
        	}
        	if(!confirm(this.fn_getMessage("ERRP000032"))) { // 입력된 정보로 등록처리 하시겠습니까?
        		return;
        	}

        	// 파일업로드
        	if( this.ds_file.rowcount > 0 ) {
        		if(this.fn_dataCheck(this.ds_file) ) {
        			var jsonArray = new Array();
        			for(var i=0; i<this.ds_file.rowcount; i++){
        				var imgType = this.ds_file.getColumn(i, "IMG_TYPE") == undefined ? "" : this.ds_file.getColumn(i, "IMG_TYPE");

        				if(this.ds_file.getColumn(i, "IMG_TYPE") == "pc") {
        					var jsonObj		= new Object();
        					jsonObj.IMG_TYPE = imgType;
        					jsonObj.DOC_REG_SEQ = this.ds_pnbStoryInfo.getColumn(0, "PC_DOC_REG_SEQ") == undefined ? 1 :this.ds_pnbStoryInfo.getColumn(0, "PC_DOC_REG_SEQ").toString();
        					jsonObj.DOC_REG_ID = this.ds_pnbStoryInfo.getColumn(0, "PC_DOC_REG_ID") == undefined ? "" : this.ds_pnbStoryInfo.getColumn(0, "PC_DOC_REG_ID");
        					jsonObj.ATFL_STOR_PATH = this.ds_pnbStoryInfo.getColumn(0, "PC_ATFL_STOR_PATH") == undefined ? "" :this.ds_pnbStoryInfo.getColumn(0, "PC_ATFL_STOR_PATH");
        					jsonObj.ORI_ATFL_NM = this.ds_pnbStoryInfo.getColumn(0, "PC_ORI_ATFL_NM") == undefined ? "" : this.ds_pnbStoryInfo.getColumn(0, "PC_ORI_ATFL_NM");
        					jsonObj.ATFL_NM = this.ds_pnbStoryInfo.getColumn(0, "PC_ATFL_NM") == undefined ? "" : this.ds_pnbStoryInfo.getColumn(0, "PC_ATFL_NM");
        					jsonArray.push(jsonObj);
        				} else if(this.ds_file.getColumn(i, "IMG_TYPE") == "mbl") {
        					var jsonObj		= new Object();
        					jsonObj.IMG_TYPE = imgType;
        					jsonObj.DOC_REG_SEQ = this.ds_pnbStoryInfo.getColumn(0, "MBL_DOC_REG_SEQ") == undefined ? 1 :this.ds_pnbStoryInfo.getColumn(0, "MBL_DOC_REG_SEQ").toString();
        					jsonObj.DOC_REG_ID = this.ds_pnbStoryInfo.getColumn(0, "MBL_DOC_REG_ID") == undefined ? "" : this.ds_pnbStoryInfo.getColumn(0, "MBL_DOC_REG_ID");
        					jsonObj.ATFL_STOR_PATH = this.ds_pnbStoryInfo.getColumn(0, "MBL_ATFL_STOR_PATH") == undefined ? "" :this.ds_pnbStoryInfo.getColumn(0, "MBL_ATFL_STOR_PATH");
        					jsonObj.ORI_ATFL_NM = this.ds_pnbStoryInfo.getColumn(0, "MBL_ORI_ATFL_NM") == undefined ? "" : this.ds_pnbStoryInfo.getColumn(0, "MBL_ORI_ATFL_NM");
        					jsonObj.ATFL_NM = this.ds_pnbStoryInfo.getColumn(0, "MBL_ATFL_NM") == undefined ? "" : this.ds_pnbStoryInfo.getColumn(0, "MBL_ATFL_NM");
        					jsonArray.push(jsonObj);
        				}
        			}
        			this.fileUpTrans.setPostData("resList", JSON.stringify(jsonArray));
        			this.fileUpTrans.upload('/sa/com/file-upload.do');
        		} else {
        			this.fn_save();
        		}
        	} else {
        		this.fn_save();
        	}
        };

        //  제목 keyup
        this.edt_ttl_onkeyup = function(obj,e)
        {
        	this.fn_setLenByte(obj.value, 300, "ttl");
        };
        this.btn_cancel_onclick = function(obj,e)
        {
        	if(confirm(this.fn_getMessage("ERRP000013"))) { // 등록을 취소하시겠습니까?
        		this.close();
        	}
        };

        this.btn_imgDelete_onclick = function(obj,e)
        {
        	var findRow = -1;
        	if(e.fromobject.id == "btn_pcImgDelete") {
        		this.ds_pnbStoryInfo.setColumn(0,"PC_ATFL_NM", "");
        		this.fileUpTrans.removeFile("pc");
        		findRow = this.ds_file.findRowExpr("IMG_TYPE == 'pc'");
        	} else if(e.fromobject.id == "btn_mblImgDelete") {
        		this.ds_pnbStoryInfo.setColumn(0,"MBL_ATFL_NM", "");
        		this.fileUpTrans.removeFile("mbl");
        		findRow = this.ds_file.findRowExpr("IMG_TYPE == 'mbl'");
        	}

        	if (findRow >= 0) {
        		this.ds_file.deleteRow(findRow);
        	}
        };

        this.btn_imgAdd_onclick = function(obj,e)
        {
        	curImgBtnName = e.fromobject.id;
        	this.fileDialog.set_accept(this.fileType);
        	this.fileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };


        /***********************************************************************************************
        *  파일 관련 영역
        ************************************************************************************************/

        //해당 row에 파일 추가
        this.addFileList = function(filelists)
        {
        	var vFile= filelists[0];
        	vFile.addEventHandler("onsuccess", this.fileList_onsuccess, this);
        	vFile.addEventHandler("onerror", this.fileList_onerror, this);
        	vFile.open(null, VirtualFile.openRead);
        	vFile.getFileSize();	//return file size
        	vFile.close();
        };

        //업로드용 Virtual 파일 onsuccess 이벤트
        this.fileList_onsuccess = function(obj, e)
        {
        	if (e.reason == 1){
        		//파일사이즈 체크
        		obj.getFileSize();
        	}

        	if (e.reason == 9) {
        		if( !this.fn_fileSizeCheck(obj, e.filesize) ) return false;


        		// 같은 이름의 파일을 업로드했을 경우 대비
        // 		this.ds_pnbStoryInfo.set_updatecontrol(false);
        // 		this.ds_pnbStoryInfo.setRowType(0, Dataset.ROWTYPE_UPDATE);
        // 		this.ds_pnbStoryInfo.set_updatecontrol(true);

        		if(curImgBtnName == "btn_pcImgAdd") {
        			this.fileUpTrans.removeFile("pc");
        			var findRow = this.ds_file.findRowExpr("IMG_TYPE == 'pc'");
        			if (findRow >= 0) {
        				this.ds_file.deleteRow(findRow);
        			}

        			// 수정 후 다시 저장 시에 기존 파일 데이터도 같이 전송하여 삭제 처리.
        			var nRowIdx = this.ds_file.addRow();
        			this.ds_file.setColumn(nRowIdx, "ATFL_NM", obj.filename);
        			this.ds_file.setColumn(nRowIdx, "IMG_TYPE", "pc");
        			this.ds_pnbStoryInfo.setColumn(0, "PC_ATFL_NM", obj.filename);
        			this.fileUpTrans.addFile("pc", obj)
        		} else if(curImgBtnName == "btn_mblImgAdd") {
        			this.fileUpTrans.removeFile("mbl");
        			var findRow = this.ds_file.findRowExpr("IMG_TYPE == 'mbl'");
        			if (findRow >= 0) {
        				this.ds_file.deleteRow(findRow);
        			}

        			var nRowIdx = this.ds_file.addRow();
        			this.ds_file.setColumn(nRowIdx, "ATFL_NM", obj.filename);
        			this.ds_file.setColumn(nRowIdx, "IMG_TYPE", "mbl");
        			this.ds_pnbStoryInfo.setColumn(0, "MBL_ATFL_NM", obj.filename);
        			this.fileUpTrans.addFile("mbl", obj)
        		}
        	}
        };

        //업로드용 Virtual 파일 oneroor 이벤트
        this.fileList_onerror = function(obj, e)
        {
        	var msg = ">>>>>>>>> VirtualFile event ERROR >>>>>>>>\n";
        	msg += "errortype : "+e.errortype+"\n";
        	msg += "errormsg : "+e.errormsg+"\n";
        	msg += "statuscode : "+e.statuscode;
        	this.nRow = -1;
        	alert(msg);
        };

        // 파일 다운로드
        this.downloadfile = function(imgType) {
        	tthis.FileDownTransfer.clearPostDataList();
        	if(imgType == "pc") {
        		this.FileDownTransfer.set_downloadfilename(this.ds_pnbStoryInfo.getColumn(0, "PC_ATFL_NM"));	//runtime 전용 프로퍼티
        		this.FileDownTransfer.setPostData("docRegId",this.ds_pnbStoryInfo.getColumn(0, "PC_DOC_REG_ID"));
        		this.FileDownTransfer.setPostData("docRegSeq",this.ds_pnbStoryInfo.getColumn(0, "PC_DOC_REG_SEQ"));
        	} else {
        		this.FileDownTransfer.set_downloadfilename(this.ds_pnbStoryInfo.getColumn(0, "MBL_ATFL_NM"));	//runtime 전용 프로퍼티
        		this.FileDownTransfer.setPostData("docRegId",this.ds_pnbStoryInfo.getColumn(0, "MBL_DOC_REG_ID"));
        		this.FileDownTransfer.setPostData("docRegSeq",this.ds_pnbStoryInfo.getColumn(0, "MBL_DOC_REG_SEQ"));
        	}
        	this.FileDownTransfer.download('/co/file-download.do');
        };

        //파일 확장자 검증
        this.fn_fileSizeCheck = function(obj, fileSize) {
        	var fileName = obj.filename;
        	var extNm  = fileName.substr(fileName.lastIndexOf(".") + 1); // 맨 뒤 확장자만 자르기
        	var fileGbn = ".jpg, .png";

        	extNm = extNm.toLowerCase();

        	//10485760 - 10메가
        	//메가바이트 변환
        	var mbSize = fileSize / 1024 / 1024;

        	if( this.maxFileSize < mbSize ) {
        		alert(this.fn_getMessage("ERRN000039", extNm)); // &1 파일은 10MB 이상으로 첨부하실 수 없습니다.
        		return false;
        	}

        	if( fileGbn.indexOf(extNm) == -1 ) {
        		alert(this.fn_getMessage("ERRN000040", extNm)); // &1 파일은 허용되지 않는 파일 타입입니다.
        		return false;
        	}

        	return true;
        };

        //파일 DIALOG CLOSE 이벤트
        this.fileDialog_onclose = function(obj,e)
        {
        	if(this.gfn_isNull(e.virtualfiles)){
        		return;
        	}

        	var vFile = e.virtualfiles[0];
        	//VirtualFile 이벤트 생성
        	vFile.addEventHandler("onsuccess", this.fileList_onsuccess, this);
        	vFile.addEventHandler("onerror", this.fileList_onerror, this);
        	vFile.open(null, 1);
        };

        //다운 완료
        this.FileDownTransfer_onsuccess = function(obj,e)
        {
        	console.log(e);
        	console.log(obj);
        };

        //다운 실패
        this.FileDownTransfer_onerror = function(obj,e)
        {
        	console.log(e);
        	console.log(obj);
        };

        //저장 -> 파일 업로드 성공 시
        this.fileUpTrans_onsuccess = function(obj,e)
        {
        	var objCallDs = e.datasets[0];
        	if(objCallDs.rowcount  == 0 ){
        		alert(this.fn_getMessage("ERRN000041")); // 파일 업로드 오류입니다.
        	}

        	for(var i = 0 ; i < objCallDs.rowcount ; i++){
        // 		if(objCallDs.getColumn(i, "result") == "none") {
        // 			alert("파일이 없습니다.");
        // 			return;
        // 		}
        		if(objCallDs.getColumn(i, "imgType") == "pc") {
        			this.ds_pnbStoryInfo.setColumn(0, "PC_DOC_REG_ID", objCallDs.getColumn(i, "docRegId"));
        		} else if(objCallDs.getColumn(i, "imgType") == "mbl") {
        			this.ds_pnbStoryInfo.setColumn(0, "MBL_DOC_REG_ID", objCallDs.getColumn(i, "docRegId"));
        		}
        	}
        	this.ds_file.clearData(); // 업로드 완료 후 ds_file 클리어
        	this.fileUpTrans.clearFileList();

        	this.fn_save();

        };

        // 파일전송 실패
        this.fileUpTrans_onerror = function(obj,e)
        {
        	alert(e.errormsg);
        };
        this.cbo_pcExpsCnt_onitemchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.edt_ttl.addEventHandler("onkeyup",this.edt_ttl_onkeyup,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.edt_pcAtflNm.addEventHandler("oneditclick",this.edt_atflNm_onclick,this);
            this.edt_pcAtflNm.addEventHandler("onmouseenter",this.edt_atflNm_onmouseenter,this);
            this.edt_pcAtflNm.addEventHandler("onmouseleave",this.edt_atflNm_onmouseleave,this);
            this.btn_pcImgAdd.addEventHandler("onclick",this.btn_imgAdd_onclick,this);
            this.btn_pcImgDelete.addEventHandler("onclick",this.btn_imgDelete_onclick,this);
            this.edt_mblAtflNm.addEventHandler("oneditclick",this.edt_atflNm_onclick,this);
            this.edt_mblAtflNm.addEventHandler("onmouseenter",this.edt_atflNm_onmouseenter,this);
            this.edt_mblAtflNm.addEventHandler("onmouseleave",this.edt_atflNm_onmouseleave,this);
            this.btn_mblImgAdd.addEventHandler("onclick",this.btn_imgAdd_onclick,this);
            this.btn_mblImgDelete.addEventHandler("onclick",this.btn_imgDelete_onclick,this);
            this.fileDialog.addEventHandler("onclose",this.fileDialog_onclose,this);
            this.fileUpTrans.addEventHandler("onerror",this.fileUpTrans_onerror,this);
            this.fileUpTrans.addEventHandler("onprogress",this.fileUpTrans_onprogress,this);
            this.fileUpTrans.addEventHandler("onsuccess",this.fileUpTrans_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onsuccess",this.FileDownTransfer_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onerror",this.FileDownTransfer_onerror,this);
        };
        this.loadIncludeScript("SSP_BO_NA_15.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
