(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("work04");
            this.set_titletext("절사관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1340,990);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"codeList\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"DETR_UNIT_SEQ\" type=\"INT\" size=\"16\"/><Column id=\"DETR_UNIT_NM\" type=\"string\" size=\"32\"/><Column id=\"DETR_BSS_CD\" type=\"string\" size=\"0\"/><Column id=\"DETR_MTHD_CD\" type=\"string\" size=\"0\"/><Column id=\"UPD_DTM\" type=\"datetime\" size=\"17\"/><Column id=\"UPDPSN_ID\" type=\"string\" size=\"32\"/><Column id=\"MAX_PRC_LENGTH\" type=\"INT\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detrBssCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detrMthdCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_detr","20","20",null,"437","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_list");
            obj.set_scrollbartype("auto auto");
            obj.set_treeusecheckbox("false");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_cellmovingtype("none");
            obj.set_scrolltype("both");
            obj.set_selecttype("row");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"DETR_UNIT_SEQ\"/><Cell col=\"1\" text=\"가격구간\"/><Cell col=\"2\" text=\"절사기준\"/><Cell col=\"3\" text=\"절사방식\"/><Cell col=\"4\" text=\"최근수정일\"/><Cell col=\"5\" text=\"수정자\"/></Band><Band id=\"body\"><Cell text=\"bind:DETR_UNIT_SEQ\"/><Cell col=\"1\" text=\"bind:DETR_UNIT_NM\"/><Cell col=\"2\" text=\"bind:DETR_BSS_CD\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_detrBssCd\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\"/><Cell col=\"3\" text=\"bind:DETR_MTHD_CD\" combodataset=\"ds_detrMthdCd\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell col=\"4\" text=\"bind:UPD_DTM\"/><Cell col=\"5\" text=\"bind:UPDPSN_ID\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","47.99%","grd_detr:20","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1340,990,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CA_50.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_CA_50.xfdl", function() {
        /*******************************************************
        PROJECT NAME : 메뉴관리
        CREATION DATES : 2022.01.26
        *******************************************************
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//공통코드 조회
        	this.fn_commonCodeSearch();

        	//절사관리 조회
        	this.fn_search();
        };


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_search = function()	{

        	var sSvcId = "detrSelect";
        	var sUrl = "/pc/detrInfo/select-detr-info-list.do";
        	var inDs = "";
        	var outDs = "ds_list=ds_output";
        	var arg = "";


        	//전송
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	//trace(this.ds_list.saveXML());
        };

        //공통코드조회
        this.fn_commonCodeSearch = function()
        {
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_detrBssCd=ds_output1 ds_detrMthdCd=ds_output2";
        	var arg = "";

        	this.ds_search.setColumn(0, "codeList", "DETR_BSS_CD,DETR_MTHD_CD");
        	this.ds_search.setColumn(0, "langCd", "KO");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //저장
        this.fn_save = function()	{

        	var sSvcId = "detrInfoUpdate";
        	var sUrl = "/pc/detrInfo/detr-info-update.do";
        	var inDs = "ds_search=ds_search ds_list=ds_list:U";
        	var outDs = "ds_list=ds_output";
        	var arg = "";


        	//전송
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(errorCode != 0)
        	{
        		this.alert(errorCode+"\n"+errorMsg);
        		return;
        	}

        	switch(svcID)
        	{
        	case "detrSelect":
        		break;
        	case "detrInfoUpdate":
        		alert(this.fn_getMessage("ERRS000156"));
        		this.fn_search();
        		break;

        	default:
        		break;
        	}
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/


        this.btn_save_onclick = function(obj,e)
        {

        	if(!this.gfn_dsIsUpdated(this.ds_list)) {
        		//alert("수정한 절사 정보가 없습니다.");
        		this.alert(this.fn_getMessage("ERRP000264"));
        		return;
        	}

        	var sReturn = this.confirm(this.fn_getMessage("ERRC000080"));
        	if(sReturn == true){
        		this.fn_save();
        	}
        };

        this.grd_detr_onselectchanged = function(obj,e)
        {
        	var sFilter = "COM_DTL_CD < "+ this.ds_list.getColumn(this.ds_list.rowposition,"MAX_PRC_LENGTH");

        	this.ds_detrBssCd.filter(sFilter);
        };


        this.grd_detr_oncellclick = function(obj,e)
        {
        	//trace("111" + obj.dropdownCombo());
        	obj.dropdownCombo();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.grd_detr.addEventHandler("oncellclick",this.grd_detr_oncellclick,this);
            this.grd_detr.addEventHandler("onselectchanged",this.grd_detr_onselectchanged,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_CA_50.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
