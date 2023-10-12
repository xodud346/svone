(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_MF_28");
            this.set_titletext("상품고시정보관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_noticeList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"NOTI_ITM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_noticeDetail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"NOTI_ITM_ID\" type=\"STRING\" size=\"5\"/><Column id=\"NOTI_ITM_DTL_NO\" type=\"INT\" size=\"6\"/><Column id=\"NOTI_ITM_DTL_NM\" type=\"STRING\" size=\"180\"/><Column id=\"NOTI_ITM_DTL_CTS\" type=\"STRING\" size=\"2000\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"CHK\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_deleteRow", this);
            obj._setContents("<ColumnInfo><Column id=\"NOTI_ITM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_DTL_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"NOTI_ITM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NO\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_changeRow", this);
            obj._setContents("<ColumnInfo><Column id=\"NOTI_ITM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_DTL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_DTL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_DTL_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_noticeInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NO\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("static_noticeList","20","10","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("상품고시정보 관리");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_new","260","42","112","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("신규품목 추가");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_noticeList","21","80","352","51",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_noticeList");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none auto");
            obj.set_selecttype("multiarea");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"218\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"No\" controlautosizingtype=\"none\" autosizecol=\"limitmax\"/><Cell col=\"1\" text=\"품목\" controlautosizingtype=\"both\" autosizecol=\"default\" autosizerow=\"default\"/><Cell col=\"2\" text=\"사용여부\" controlautosizingtype=\"both\" autosizecol=\"default\" autosizerow=\"default\"/><Cell col=\"3\" text=\"ID\" displaytype=\"none\"/><Cell col=\"4\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:NOTI_ITM_NM\" autosizecol=\"default\" controlautosizingtype=\"both\" autosizerow=\"default\" color=\"blue\" textDecoration=\"underline\"/><Cell col=\"2\" edittype=\"none\" displaytype=\"normal\" autosizecol=\"default\" controlautosizingtype=\"both\" autosizerow=\"default\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\" textAlign=\"center\" expr=\"USE_YN==&quot;Y&quot;?&quot;사용&quot;:&quot;미사용&quot;\"/><Cell col=\"3\" text=\"bind:NOTI_ITM_ID\" displaytype=\"none\"/><Cell col=\"4\" text=\"bind:USE_YN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_detail","380","5",null,null,"0","30",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("transparent");
            obj.set_visible("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"37","60","28","148",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_visible("true");
            this.div_detail.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"37","60","28","84",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_visible("true");
            this.div_detail.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"37","60","28","20",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_select");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("static_noticeDetail","11","5","300","30",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("3");
            obj.set_text("품목정보 (   필수 항목)");
            obj.set_cssclass("sta_WF_title01");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static26","12","75","130","32",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("4");
            obj.set_text("품목명");
            obj.set_cssclass("sta_cm_box01L_tdt_necessary");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static27","141","75",null,"32","20",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static26_00","12","106","130","32",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("6");
            obj.set_text("품목ID");
            obj.set_cssclass("sta_cm_box01L");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("sta_notiItmId","141","106",null,"32","20",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("edit_notiItmNm","152","79",null,"24","330",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("8");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static26_00_00","12","136","130","86",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("9");
            obj.set_text("상세항목");
            obj.set_cssclass("sta_cm_box01L");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static27_00_00","141","136",null,"86","20",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_detail.addChild(obj.name, obj);

            obj = new Grid("grd_noticeDetail","152","147",null,"53","30",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("11");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none auto");
            obj.set_binddataset("ds_noticeDetail");
            obj.set_autoenter("select");
            obj.set_autosizingtype("none");
            obj.set_extendsizetype("none");
            obj.set_cssclass("grd_WF_list");
            obj.set_selecttype("multiarea");
            obj.set_enableevent("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"31\"/><Column size=\"28\"/><Column size=\"0\"/><Column size=\"113\"/><Column size=\"182\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"ID\"/><Cell col=\"3\" text=\"항목\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"4\" text=\"항목상세\"/></Band><Band id=\"body\"><Cell edittype=\"none\" displaytype=\"normal\" expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"1\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:NOTI_ITM_DTL_NO\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:NOTI_ITM_DTL_NM\" edittype=\"text\" wordWrap=\"char\"/><Cell col=\"4\" text=\"bind:NOTI_ITM_DTL_CTS\" displaytype=\"normal\" edittype=\"text\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static26_01",null,"75","130","32","190",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("12");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L_tdt_necessary");
            this.div_detail.addChild(obj.name, obj);

            obj = new Radio("rdo_useYn",null,"79","166","24","14",null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div_detail_form_rdo_useYn_innerdataset = new nexacro.NormalDataset("div_detail_form_rdo_useYn_innerdataset", obj);
            div_detail_form_rdo_useYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(div_detail_form_rdo_useYn_innerdataset);
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static00","static_noticeDetail:-228","static_noticeDetail:-21","static_noticeDetail:3.33%","static_noticeDetail:40.00%",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("14");
            obj.set_text("*");
            obj.set_color("red");
            this.div_detail.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_detail.form.rdo_useYn","value","ds_noticeInfo","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MF_28.xfdl","CO::coUtils.xjs");
        this.registerScript("SSP_BO_MF_28.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.checkedRow = new Array();

        this.valiGridIds = [
        	  {"name" : "고시항목", "id" : "NOTI_ITM_DTL_NM"}
        ];

        this.selectedRow = 0;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
            //공통 함수 호출(필수)
            this.gfn_formOnLoad(this);

            this.fn_list(true);
        };

        // 화면 단축키
        this.fn_onkeydown = function(obj,e)
        {
        	// CTRL + s
        	if (e.keycode == 83 && e.ctrlkey == true) {
        		// 저장
        		this.div_detail_btn_save_onclick();
        		event.preventDefault();
        	}
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_list = function (bInit){

            var sSvcId = "list";
            var sUrl = "/pr/prd-ntc/select-product-notice-list.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_noticeList=noticeList";
            var arg = "";
            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");

        };

        this.fn_detail = function (bInit){

            var sSvcId = "detail";
            var sUrl = "/pr/prd-ntc/select-product-notice-detail.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_noticeDetail=noticeDetail";
            var arg = "";
            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");

        };

        this.fn_save = function (bInit){

            var sSvcId = "save";
            var sUrl = "/pr/prd-ntc/save-product-notice.do";
            var inDs = "ds_noticeInfo=ds_noticeInfo ds_changeRow=ds_changeRow ds_deleteRow=ds_deleteRow";
            var outDs = "";
            var arg = "";
            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");

        };


        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg) {
            switch(svcID) {
                case "list" :
                    this.refreshGridScroll();
                    break;

                case "detail" :
                    this.refreshDetailGridScroll();
                    break;

                case "save" :
                    this.fn_list(true);
                    this.fn_detail();
                    this.ds_deleteRow.clearData();
                    break;

            }
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.refreshGridScroll = function() {   //그리드 사이즈 새로고침
            var nH = this.grd_noticeList.getRealRowFullSize();
            var divH = this.div_detail.getOffsetHeight()-190;
            if(nH <= divH){
                this.grd_noticeList.set_height(nH + 2);
            }else{
        		this.grd_noticeList.set_height(divH);
        	}
        }
        this.refreshDetailGridScroll = function() { //그리드 사이즈 새로고침
            var nH = this.div_detail.form.grd_noticeDetail.getRealRowFullSize();
            var divH = this.div_detail.getOffsetHeight()-276;
            if(nH <= divH){
                this.div_detail.form.grd_noticeDetail.set_height(nH + 2);
                this.div_detail.form.Static26_00_00.set_height(nH+25);
                this.div_detail.form.Static27_00_00.set_height(nH+25);
            }else{
                this.div_detail.form.grd_noticeDetail.set_height(divH);
        		this.div_detail.form.Static26_00_00.set_height(divH+25);
                this.div_detail.form.Static27_00_00.set_height(divH+25);
        	}

        }
        this.checkChanged = function() {    //변경사항 체크
            var check = false;
            var nRowCntDetail = this.ds_noticeDetail.getRowCount();
            for(var i = 0; i<nRowCntDetail; i++){
                if(this.ds_noticeDetail.getRowType(i) == 2 || this.ds_noticeDetail.getRowType(i) == 4){
                    check = true;
                }
            }
            if(this.ds_deleteRow.getRowCount() > 0){
                check = true;
            }
        	return check;
        }
        //필수값 체크
        this.fn_validation = function(){
        	var result = true;
        	var obj = this.div_detail.form.edit_notiItmNm;
        	if(this.gfn_isNull(obj.value)){
        		result = false;
        		alert('품목명을 입력하세요');
        		obj.setFocus();
        	}
        	return result;
        }

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //신규품목추가 버튼
        this.btn_new_onclick = function(obj,e)
        {
            if(this.checkChanged()){
                var sReturn = this.confirm("변경된 내용이 저장되지 않습니다.");
                if(!sReturn){
                    return false;
                }
            }

            this.div_detail.set_visible(true);
            this.div_detail.form.edit_notiItmNm.set_value("");
            this.div_detail.form.sta_notiItmId.set_text("");
        	this.div_detail.form.rdo_useYn.set_value("Y");
            this.ds_noticeDetail.clearData();
            this.refreshDetailGridScroll();

            this.ds_noticeInfo.setColumn(0, "NOTI_ITM_ID", "");
            this.ds_noticeInfo.setColumn(0, "NOTI_ITM_NM", "");
        };

        //추가 버튼
        this.btn_add_onclick = function(obj,e)
        {
            this.ds_noticeDetail.addRow();
            this.refreshDetailGridScroll();
        };

        //삭제 버튼
        this.btn_del_onclick = function(obj,e)
        {
            this.checkedRow = new Array();
            for(var i=0; i<this.ds_noticeDetail.rowcount; i++)
            {
                if(this.ds_noticeDetail.getColumn(i, "CHK") == "1"){
                    this.checkedRow.push(i);
                    if(this.ds_noticeDetail.getColumn(i, "NOTI_ITM_DTL_NO") != null){//삭제항목
                        var nRow = this.ds_deleteRow.addRow();
                        this.ds_deleteRow.copyRow(nRow, this.ds_noticeDetail, i);
                    }
                }
            }
            if(this.checkedRow.length==0){
                alert("항목을 선택하세요");
                return;
            }
            this.ds_noticeDetail.deleteMultiRows(this.checkedRow);
            this.refreshDetailGridScroll();
        };

        //품목클릭
        this.grd_noticeList_oncellclick = function(obj,e)
        {
            if(obj.getCellPos() == 1){
                if(this.checkChanged()){
                    var sReturn = this.confirm("변경된 내용이 저장되지 않았습니다.");
                    if(!sReturn){
                        return false;
                    }
                }
                this.div_detail.set_visible(true);
                this.ds_search.setColumn(0, "NOTI_ITM_ID", obj.getCellValue(e.row, 3));
                this.div_detail.form.edit_notiItmNm.set_value(obj.getCellValue(e.row, 1));
                this.div_detail.form.rdo_useYn.set_value(obj.getCellValue(e.row, 4));
                this.div_detail.form.sta_notiItmId.set_text(obj.getCellValue(e.row, 3));
                this.fn_detail();

                this.ds_noticeInfo.setColumn(0, "NOTI_ITM_NM", obj.getCellValue(e.row, 1));
                this.ds_noticeInfo.setColumn(0, "USE_YN", obj.getCellValue(e.row, 4));
                this.ds_noticeInfo.setColumn(0, "NOTI_ITM_ID", obj.getCellValue(e.row, 3));

        		this.selectedRow = e.row;
            }
        };

        //저장 버튼
        this.div_detail_btn_save_onclick = function(obj,e)
        {
        	var NOTI_ITM_NM = this.div_detail.form.edit_notiItmNm.value;
        	for(var i=0; i<this.ds_noticeList.rowcount; i++){
        		var NOTI_ITM_NMS = this.ds_noticeList.getColumn(i, "NOTI_ITM_NM");
        		if(NOTI_ITM_NMS == NOTI_ITM_NM && this.selectedRow!=i){
        			alert('중복되는 품목명입니다.');
        			return;
        		}
        	}

        	//필수값 체크
        	if(!this.fn_validation()){
        		return;
        	}
        	var validation = this.fn_validationGrid(this.div_detail.form.grd_noticeDetail, this.valiGridIds, this.ds_noticeDetail);
        	if(!validation){
        		return;
        	}

        	this.ds_changeRow.clearData();
        	this.ds_noticeInfo.setColumn(0, "NOTI_ITM_NM", NOTI_ITM_NM);
        	var nRowCntDetail = this.ds_noticeDetail.getRowCount();
        	for(var i = 0; i<nRowCntDetail; i++){
        		if(this.ds_noticeDetail.getRowType(i) == 2 || this.ds_noticeDetail.getRowType(i) == 4){//생성
        			var nRow = this.ds_changeRow.addRow();
        			this.ds_changeRow.copyRow(nRow, this.ds_noticeDetail, i);
        		}
        	}

        	var bReturn = this.confirm("변경된 내용을 적용합니다.");
        	if(bReturn){
        		this.fn_save();
        	}
        };

        this.work04_onbeforeclose = function(obj,e)
        {
            trace('beforeclose');
        };

        this.div_detail_rdo_useYn_onitemchanged = function(obj,e)
        {
            this.ds_noticeInfo.setColumn(0, "USE_YN", obj.value);
        };

        this.work04_onsize = function(obj,e)
        {
            //var nH = this.div_detail.form.grd_noticeDetail.getRealRowFullSize();
            //var h = obj.getOffsetHeight();
            //if(nH >= (h-190)){
            //    this.div_detail.form.grd_noticeDetail.set_height(h-230);
            //    this.div_detail.form.Static26_00_00.set_height(h-203);
            //    this.div_detail.form.Static27_00_00.set_height(h-203);
            //}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onbeforeclose",this.work04_onbeforeclose,this);
            this.addEventHandler("onclose",this.work04_onclose,this);
            this.addEventHandler("ondeactivate",this.work04_ondeactivate,this);
            this.addEventHandler("onsize",this.work04_onsize,this);
            this.static_noticeList.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_new.addEventHandler("onclick",this.btn_new_onclick,this);
            this.grd_noticeList.addEventHandler("oncellclick",this.grd_noticeList_oncellclick,this);
            this.div_detail.addEventHandler("onkeydown",this.fn_onkeydown,this);
            this.div_detail.form.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.div_detail.form.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.div_detail.form.btn_save.addEventHandler("onclick",this.div_detail_btn_save_onclick,this);
            this.div_detail.form.Static26.addEventHandler("onclick",this.div_detail_Static26_onclick,this);
            this.div_detail.form.Static27.addEventHandler("onclick",this.div_detail_Static27_onclick,this);
            this.div_detail.form.grd_noticeDetail.addEventHandler("oncellclick",this.grd_noticeDetail_oncellclick,this);
            this.div_detail.form.Static26_01.addEventHandler("onclick",this.div_detail_Static26_onclick,this);
            this.div_detail.form.rdo_useYn.addEventHandler("onitemchanged",this.div_detail_rdo_useYn_onitemchanged,this);
        };
        this.loadIncludeScript("SSP_BO_MF_28.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
