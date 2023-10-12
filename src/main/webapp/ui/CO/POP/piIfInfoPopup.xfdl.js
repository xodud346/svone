(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PA_48");
            this.set_titletext("PI인터페이스관리");
            this.set_scrollbartype("none none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,590);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"PI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IF_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"THME_DOMN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RETRY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SYNC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SND_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RMKS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_themeDownCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sync_YN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">동기</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"NAME\">비동기</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_send_YN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">송신</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"NAME\">수신</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_list","20","90",null,null,"20","64",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_cellsizebandtype("allband");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_scrollbartype("auto fixed");
            obj.set_selecttype("cell");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"309\"/><Column size=\"104\"/><Column size=\"109\"/><Column size=\"76\"/><Column size=\"84\"/><Column size=\"84\"/><Column size=\"265\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"PI_ID\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"1\" text=\"IF_ID\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"2\" text=\"IF명\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"3\" text=\"주제영역\"/><Cell col=\"4\" text=\"재전송 가능여부\" tooltiptext=\"처리결과코드 에러, 메시지순번 1번인경우 재전송 가능\" tooltiptype=\"inplace\"/><Cell col=\"5\" text=\"사용여부\"/><Cell col=\"6\" text=\"동기화 여부\"/><Cell col=\"7\" text=\"송수신 구분\"/><Cell col=\"8\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:PI_ID\" edittype=\"expr:ROW_TYPE==&apos;I&apos;?&apos;text&apos;:&apos;none&apos;\" displaytype=\"expr:ROW_TYPE==&apos;I&apos;?&apos;editcontrol&apos;:&apos;normal&apos;\"/><Cell col=\"1\" text=\"bind:IF_ID\" displaytype=\"normal\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:IF_NM\" textAlign=\"left\" displaytype=\"normal\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:THME_DOMN_CD\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_themeDownCd\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\"/><Cell col=\"4\" text=\"bind:RETRY_YN\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_useYn\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\"/><Cell col=\"5\" text=\"bind:USE_YN\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_useYn\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\"/><Cell col=\"6\" text=\"bind:SYNC_YN\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_sync_YN\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"7\" text=\"bind:SND_YN\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_send_YN\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"8\" text=\"bind:RMKS\" textAlign=\"left\" displaytype=\"normal\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staticTitle","20","20","155","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("| PI정보관리");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","568",null,"65","30",null,"20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"58","65","26","84",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"58","60","26","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totalCount","20","70","200","14",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("(총 0건)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1200,590,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("piIfInfoPopup.xfdl","CO::coUtils.xjs");
        this.registerScript("piIfInfoPopup.xfdl", function() {
        /*******************************************************
        PROJECT NAME : ssp_bo
        CREATION DATES : 2023.01.16
        DESC : 공통 PI관리 인터페이스 관리 팝업 (PI로그 조인용)
        *************************************************/
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.coCd = "";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();
        this.fn_onLoad = function(obj,e)
        {
            this.gfn_formOnLoad(this);
        	this.fn_commonCodeSearch();
        	this.ds_search.setColumn(0, "CO_CD", this.parent.coCd);
        	this.coCd = this.parent.coCd;
            this.fn_search(true);

        	this.to
        };

        // 화면 단축키
        this.fn_onkeydown = function(obj,e)
        {
        	if (e.keycode == 27) {// ESC
        		this.close();// 팝업 화면 닫기
        		e.stopPropagation();
        	}

        	// CTRL + s
        	if (e.keycode == 83 && e.ctrlkey == true) {
        		// 저장
        		if(this.fn_dataCheck(this.ds_list)){
        			if(!this.fn_validation()){ return; }
        			if(this.confirm('저장하시겠습니까?')){
        				this.fn_save();
        			}
        		}else{
        			alert('변경된 내역이 없습니다.');
        		}
        		event.preventDefault();
        	}
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function (bInit)
        {
            var sSvcId = "search";
            var sUrl = "/co/select-pi-if-info-list.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_list=ds_output1";
            var arg = "";

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //공통코드조회
        this.fn_commonCodeSearch = function(){
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_themeDownCd=ds_output1 ds_useYn=ds_output2";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "THME_DOMN_CD,USE_YN");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        this.fn_save = function (bInit){
            var sSvcId = "save";
            var sUrl = "/co/save-pi-if-info.do";
            var inDs = "ds_list=ds_list:U";
            var outDs = "";
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
                case "search" :
        			this.sta_totalCount.set_text('총 '+ this.gfn_appendComma(this.totalCount) + '건');
                    break;

        		case "save" :
        			alert('저장되었습니다.');
        			this.reload();
        			break;

            }
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.fn_validation = function(){
        	var result = true;
        	for(var i=0; i<this.ds_list.rowcount; i++){
        		var sRowType = this.ds_list.getRowType(i);
        		if( sRowType == 2 || sRowType == 4 ){
        			var PI_ID = this.ds_list.getColumn(i, "PI_ID");
        			var IF_ID = this.ds_list.getColumn(i, "IF_ID");
        			var IF_NM = this.ds_list.getColumn(i, "IF_NM");
        			var RETRY_YN = this.ds_list.getColumn(i, "RETRY_YN");
        			var SYNC_YN = this.ds_list.getColumn(i, "SYNC_YN");

        			if(this.gfn_isNull(PI_ID) || this.gfn_isNull(IF_ID) || this.gfn_isNull(IF_NM)){
        				alert('필수값을 입력하세요.');
        				result = false;
        				break;
        			}

        			if(SYNC_YN == 'Y' && RETRY_YN == 'Y'){
        			    alert('동기식 PI인 경우 재전송 처리가 불가 합니다.');
        				result = false;
        				break;
        			}

        			if(!this.fn_lenChk(PI_ID, 7, "PI_ID")){ result = false; break; }
        			if(!this.fn_lenChk(IF_ID, 50, "IF_ID")){ result = false; break; }
        			if(!this.fn_lenChk(IF_NM, 200, "IF_NM")){ result = false; break; }
        		}
        	}
        	return result;
        }

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

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        this.Div00_btn_clear_onclick = function(obj,e)
        {
        	var nRow = this.ds_list.addRow();
        	this.ds_list.setColumn(nRow, "CO_CD", this.coCd);
        	this.ds_list.setColumn(nRow, "RETRY_YN", "Y");
        	this.ds_list.setColumn(nRow, "USE_YN", "Y");
        	this.ds_list.setColumn(nRow, "THME_DOMN_CD", "CO");
        	this.ds_list.setColumn(nRow, "ROW_TYPE", "I");
        };

        this.btn_search_onclick = function(obj,e)
        {
        	if(this.fn_dataCheck(this.ds_list)){
        		if(!this.fn_validation()){ return; }
        		if(this.confirm('저장하시겠습니까?')){
        			this.fn_save();
        		}
        	}else{
        		alert('변경된 내역이 없습니다.');
        	}
        };

        this.grd_list_oncellclick = function(obj,e)
        {
        	var bindText = this.grd_list.getCellProperty("body", e.col, "text");
        	if(bindText == "bind:THME_DOMN_CD" || bindText == "bind:RETRY_YN" || bindText == "bind:USE_YN"){
        		obj.dropdownCombo();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeydown",this.fn_onkeydown,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_add.addEventHandler("onclick",this.Div00_btn_clear_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_search_onclick,this);
        };
        this.loadIncludeScript("piIfInfoPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
