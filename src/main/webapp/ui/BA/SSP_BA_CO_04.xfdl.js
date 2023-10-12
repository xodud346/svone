(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BA_CO_04");
            this.set_titletext("배치서버 관리 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_bat_svr_list", this);
            obj._setContents("<ColumnInfo><Column id=\"chkVal\" type=\"STRING\" size=\"256\"/><Column id=\"batServerSeq\" type=\"INT\" size=\"256\"/><Column id=\"prtclCd\" type=\"STRING\" size=\"256\"/><Column id=\"serverNm\" type=\"STRING\" size=\"256\"/><Column id=\"ipAddr\" type=\"STRING\" size=\"256\"/><Column id=\"port\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"mainYn\" type=\"STRING\" size=\"256\"/><Column id=\"batServerStatsCd\" type=\"STRING\" size=\"256\"/><Column id=\"batServerStatsCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"rowTranType\" type=\"INT\" size=\"256\"/><Column id=\"chkCnt\" type=\"INT\" size=\"256\"/><Column id=\"statMsg\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prtclCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"svrChkYn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_output", this);
            obj._setContents("<ColumnInfo><Column id=\"batServerSeq\" type=\"INT\" size=\"256\"/><Column id=\"prtcl\" type=\"STRING\" size=\"256\"/><Column id=\"serverNm\" type=\"STRING\" size=\"256\"/><Column id=\"ipAddr\" type=\"STRING\" size=\"256\"/><Column id=\"port\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"mainYn\" type=\"STRING\" size=\"256\"/><Column id=\"batServerStatsCd\" type=\"STRING\" size=\"256\"/><Column id=\"statMsg\" type=\"STRING\" size=\"256\"/><Column id=\"tranCnt\" type=\"INT\" size=\"256\"/><Column id=\"rowCntType\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bat_svr_list_copy", this);
            obj._setContents("<ColumnInfo><Column id=\"chkVal\" type=\"INT\" size=\"256\"/><Column id=\"batServerSeq\" type=\"INT\" size=\"256\"/><Column id=\"prtclCd\" type=\"STRING\" size=\"256\"/><Column id=\"serverNm\" type=\"STRING\" size=\"256\"/><Column id=\"ipAddr\" type=\"STRING\" size=\"256\"/><Column id=\"port\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"mainYn\" type=\"STRING\" size=\"256\"/><Column id=\"batServerStatsCd\" type=\"STRING\" size=\"256\"/><Column id=\"rowTranType\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bat_svr", this);
            obj._setContents("<ColumnInfo><Column id=\"batServerSeq\" type=\"INT\" size=\"256\"/><Column id=\"serverNm\" type=\"STRING\" size=\"256\"/><Column id=\"prtclCd\" type=\"STRING\" size=\"256\"/><Column id=\"ipAddr\" type=\"STRING\" size=\"256\"/><Column id=\"port\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_cancel","298",null,"100","32",null,"49",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","401",null,"100","32",null,"49",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","28","60",null,null,"10","120",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_bat_svr_list");
            obj.set_autosizingtype("none");
            obj.set_autosizebandtype("body");
            obj.set_selecttype("area");
            obj.set_cellmovingtype("col");
            obj.set_cssclass("grd_WF_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"27\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"배치서버명\"/><Cell col=\"2\" text=\"프로토콜\"/><Cell col=\"3\" text=\"IP\"/><Cell col=\"4\" text=\"Port\"/><Cell col=\"5\" text=\"사용여부\"/><Cell col=\"6\" text=\"상태\"/></Band><Band id=\"body\"><Cell text=\"bind:chkVal\" displaytype=\"checkboxcontrol\" edittype=\"expr:chkCnt &gt; 0 ? &apos;none&apos; : &apos;checkbox&apos;\"/><Cell col=\"1\" text=\"bind:serverNm\" textAlign=\"center\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:prtclCd\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_prtclCd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\"/><Cell col=\"3\" text=\"bind:ipAddr\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:port\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:useYn\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_useYn\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\"/><Cell col=\"6\" text=\"bind:batServerStatsCdNm\" expr=\"batServerStatsCd  == &apos;20&apos; ? &quot;&lt;fc v=&apos;blue&apos;&gt;&lt;u v=&apos;true&apos;&gt;&quot;+batServerStatsCdNm+&quot;&lt;/u&gt;&lt;/fc&gt;&quot; : batServerStatsCdNm\" displaytype=\"decoratetext\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","20","20","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("| 배치서버 관리");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd","655",null,"60","26",null,"450",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel","719",null,"60","26",null,"450",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,500,this,function(p){});
            obj.set_stepindex("");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BA_CO_04.xfdl","CO::coUtils.xjs");
        this.registerScript("SSP_BA_CO_04.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP속성 생성 팝업
        CREATION DATES : 2021.01.19
        *******************************************************/
        // 공통형 스크립트 인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        //필수값 체크
        this.valiGridIds = [
        	  {"name" : "배치서버명", "id" : "serverNm"}
        	, {"name" : "IP", "id" : "ipAddr"}
        	, {"name" : "Port", "id" : "port"}
        ];

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();
        this.fn_onLoad = function(obj,e){
            //공통 함수 호출(필수)
            this.gfn_formOnLoad(this);
        	//공통코드 조회
        	this.fn_commonCodeSearch();
        	this.fn_batSvrSearch();
        	this._gfnHeadCheckSelectAll = function(){}; 					 // 그리드헤드클릭이벤트 내부함수 (헤드클릭시 체크) 무력화
        };

        // 화면 단축키
        this.fn_onkeydown = function(obj,e)
        {
        	// CTRL + s
        	if (e.keycode == 83 && e.ctrlkey == true) {
        		// 저장
        		this.insert_btn_onclick();
        		event.preventDefault();
        	}

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
        //공통코드조회
        this.fn_commonCodeSearch = function(){
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_prtclCd=ds_output1 ds_useYn=ds_output2";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "PRTCL_CD,USE_YN");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //실행서버조회
        this.fn_batSvrSearch = function(){
        	var sSvcId = "batSvrSearch";
            var sUrl = "/ba/bat-adm/bat-svr-list.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_bat_svr_list=ds_list";
            var arg = "";

        	//서버 keepAlive 체크여부
        	this.ds_search.setColumn(0,"svrChkYn","Y");

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //배치서버 static배치서버 리스트 갱신
        this.fn_batSvrBatSvrUpdt = function(){
        	var sSvcId = "batSvrBatSvrUpdt";
        	var sUrl = "/ba/bat-adm/batSvr-bat-svr-updt.do";
        	var inDs = "ds_bat_svr=ds_bat_svr";
        	var outDs = "ds_output=ds_output";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg) {
            switch(svcID) {
                case "commonCodeSearch" :

                    break;
        		case "batSvrSearch" :
        // 			for(i=0; i < this.grd_list.rowcount; i++){
        // 				if(this.grd_list.getCellText(i, "")){
        // 					this.grd_list.set_cssclass("grd_Txt_Blue_U");
        // 				}
        // 			}

        			if(this.ds_bat_svr_list.rowcount == 0){
        				this.ds_bat_svr_list.copyData(this.ds_bat_svr_list_copy);
        			}

                    break;
        		case "saveBatSvrList"  :
        			if( errorCode == 0 ) {

        				if(this.ds_output.getRowCount() > 0){
        					for(i=0; i < this.ds_output.getRowCount(); i++){
        						var rowTranType = this.ds_output.getColumn(i, "rowTranType");

        						if(rowTranType != 3){
        							console.log("서버내역 저장저장!!");
        							console.log("서버 이름 : ", this.ds_output.getColumn(i, "serverNm"));

        							this.ds_bat_svr.addRow();
        							this.ds_bat_svr.setColumn(0, "batServerSeq", this.ds_output.getColumn(i, "batServerSeq"));
        							this.ds_bat_svr.setColumn(0, "serverNm", this.ds_output.getColumn(i, "serverNm"));
        							this.ds_bat_svr.setColumn(0, "prtclCd", this.ds_output.getColumn(i, "prtclCd"));
        							this.ds_bat_svr.setColumn(0, "ipAddr", this.ds_output.getColumn(i, "ipAddr"));
        							this.ds_bat_svr.setColumn(0, "port", this.ds_output.getColumn(i, "port"));
        						}
        					}
        				}

        				console.log("this.ds_bat_svr.getRowCount() : ", this.ds_bat_svr.getRowCount());

        				if(this.ds_bat_svr.getRowCount() > 0){		//삭제 외에 항목이 있다면
        					//저장/수정시에 배치서버 static의 배치서버 리스트를 갱신 처리
        					this.fn_batSvrBatSvrUpdt();
        					this.ds_bat_svr.clear();
        				}
        				else{	//모두 다 삭제처리라면
        					alert(this.gfn_getMessage("ERRC000121")); //정상적으로 처리되었습니다.
        					//this.close(true);
        					this.reload();
        				}
        			}
        			else{
        				alert("오류발생");
        			}
        			break;

        		case "batSvrBatSvrUpdt"  :
        			var statCode = this.ds_output.getColumn(0, "statCode");
        			var statMsg = this.ds_output.getColumn(0, "statMsg");

        			if(statCode == "10"){
        				alert(this.gfn_getMessage("ERRC000121")); //정상적으로 처리되었습니다.
        				this.reload();
        			}
        			else{
        				alert(statMsg);
        			}
        			break;
            }
        };
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.fn_save = function(){
        	this.ds_bat_svr_list_copy.clearData();
        	this.ds_bat_svr_list_copy.copyData(this.ds_bat_svr_list, true);

        	var j = 0;
        	var rowcnt = this.ds_bat_svr_list.getRowCount() + this.ds_bat_svr_list.getDeletedRowCount();
        	for(var i=0; i<rowcnt; i++){
        		if(i<this.ds_bat_svr_list.getRowCount()){
        			var rowType = this.ds_bat_svr_list.getRowType(i);
        			var newtype = rowType==1?0:rowType==2?1:rowType==4?2:rowType==8?3:0;
        			this.ds_bat_svr_list_copy.setColumn(i, "rowTranType", newtype);
        		}else{
        			//삭제건 존재시 세팅
        			var batServerSeq = this.ds_bat_svr_list.getDeletedColumn(j, "batServerSeq");
        			var prtclCd = this.ds_bat_svr_list.getDeletedColumn(j, "prtclCd");
        			var serverNm = this.ds_bat_svr_list.getDeletedColumn(j, "serverNm");
        			var ipAddr = this.ds_bat_svr_list.getDeletedColumn(j, "ipAddr");
        			var port = this.ds_bat_svr_list.getDeletedColumn(j, "port");
        			var useYn = this.ds_bat_svr_list.getDeletedColumn(j, "useYn");
        			var mainYn = this.ds_bat_svr_list.getDeletedColumn(j, "mainYn");
        			var batServerStatsCd = this.ds_bat_svr_list.getDeletedColumn(j, "batServerStatsCd");

        			this.ds_bat_svr_list_copy.insertRow(i);
        			this.ds_bat_svr_list_copy.setColumn(i, "batServerSeq", batServerSeq);
        			this.ds_bat_svr_list_copy.setColumn(i, "prtclCd", prtclCd);
        			this.ds_bat_svr_list_copy.setColumn(i, "serverNm", serverNm);
        			this.ds_bat_svr_list_copy.setColumn(i, "ipAddr", ipAddr);
        			this.ds_bat_svr_list_copy.setColumn(i, "port", port);
        			this.ds_bat_svr_list_copy.setColumn(i, "useYn", useYn);
        			this.ds_bat_svr_list_copy.setColumn(i, "mainYn", mainYn);
        			this.ds_bat_svr_list_copy.setColumn(i, "batServerStatsCd", batServerStatsCd);
        			this.ds_bat_svr_list_copy.setColumn(i, "rowTranType", 3);

        			j = j+1;
        		}
        	}

        	var sSvcId = "saveBatSvrList";
        	var sUrl = "/ba/bat-adm/save-bat-svr-list.do";
        	var inDs = "ds_bat_svr_list=ds_bat_svr_list_copy:U"
        	var outDs = "ds_output=ds_output";
        	var arg;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //등록 버튼
        this.btnSave_onclick = function(obj,e)
        {
        	var chkDsChange = this.fn_dataChangeCheck(this.ds_bat_svr_list);
        	if( !chkDsChange ) {
        		alert(this.gfn_getMessage("COMS000008", ["수정", "내용"])); //선택된 행이 없습니다.
        		return false;
        	} else {
        		//그리드 필수값 체크
        		var validation = this.fn_validationGrid(this.grd_list, this.valiGridIds, this.ds_bat_svr_list);

        		if(validation){
        			var sReturn = this.confirm(this.gfn_getMessage("COMS000013", ["저장"])); //저장하시겠습니까
        			if(sReturn == true){
        				this.fn_save();
        			}
        		}
        	}
        };

        //닫기 버튼
        this.btn_cancel_onclick = function(obj,e)
        {
        	var chkDsChange = this.fn_dataChangeCheck(this.ds_bat_svr_list);
        	if( chkDsChange ) {
        		var sReturn = this.confirm(this.gfn_getMessage('ERRP000310'));		//변경사항을 저장하지 않았습니다. 화면을 닫겠습니까?
        		if(sReturn){
        			this.close(false);
        		}
        	}
        	else{
        		this.close(false);
        	}
        };

        //행추가 버튼
        this.btnAdd_onclick = function(obj,e)
        {
        	var idx = this.ds_bat_svr_list.insertRow(0);
        	this.ds_bat_svr_list.setColumn(idx, "prtclCd", "https");
         	this.ds_bat_svr_list.setColumn(idx, "useYn", "Y");
        	this.ds_bat_svr_list.setColumn(idx, "chkVal", "0");

         	this.ds_bat_svr_list.setCellPos(2);
         	this.ds_bat_svr_list.showEditor(true);
        };

        //삭제 버튼
        this.btnDel_onclick = function(obj,e)
        {
        // 	var sReturn = this.confirm(this.gfn_getMessage("ERRC000048")); //삭제하시겠습니까?
        // 	if(sReturn){
        // 	}

        	var chkCnt = this.ds_bat_svr_list.getCaseCount("chkVal==1");

        	if( chkCnt == 0 ) {
        		alert(this.gfn_getMessage("COMS000008", ["선택", "행"])); //선택된 행이 없습니다.
        		return false;
        	}

        	var delArr = [];
        	for(var i=0; i < this.ds_bat_svr_list.rowcount; i++){
        		var checkbox = this.ds_bat_svr_list.getColumn(i, "chkVal");
        		if( checkbox == 1 ) {
        			delArr.push(i);
        		}
        	}
        	this.ds_bat_svr_list.deleteMultiRows(delArr);
        };

        // 그리드 해드 클릭
        this.grd_list_onheadclick = function(obj,e)
        {
        	if(e.cell == obj.getBindCellIndex("body", "chkVal")) {
        		var val = obj.getCellProperty("head", e.cell, "text") == "0" ? "1" : "0";
        		obj.setCellProperty("head", e.cell, "text", val);

        		for(var i = 0; i < this.ds_bat_svr_list.rowcount; i++) {
        			if(obj.getCellPropertyValue(i, e.cell, "edittype") != "none") {
        			    this.ds_bat_svr_list.setColumn(i, "chkVal", val);
        			}
        		}
        	}
        };

        //상세화면팝업
        this.grd_list_oncellclick = function(obj,e)
        {
        	var bindText = this.grd_list.getCellProperty("body", e.col, "text");

        	if(e.col == 6){	//상태
        		var params = {
        			errorDtls:this.ds_bat_svr_list.getColumn(e.row, "statMsg")
        		}

        		if(this.ds_bat_svr_list.getColumn(e.row, "statMsg") && this.ds_bat_svr_list.getColumn(e.row, "batServerStatsCd") == "20"){
        			var options = {};
        			this.gfn_openPopup('batSvrMsg', "BA::SSP_BA_CO_06.xfdl", params,  "", options);
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeydown",this.fn_onkeydown,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
        };
        this.loadIncludeScript("SSP_BA_CO_04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
