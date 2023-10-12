(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_NA_27");
            this.set_titletext("변경 이력 등록 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,150);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"UPD_RSN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static03_00_01_00","20","20",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","20","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("변경 사유");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","315","Static03_00_01_00:20","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancle","btn_save:10","Static03_00_01_00:20","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_auto","Static02:4","24","600","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,150,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_auto","value","ds_list","UPD_RSN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_NA_27.xfdl","CO::coUtils.xjs");
        this.registerScript("SSP_BO_NA_27.xfdl", function() {
        /*******************************************************
          PROJECT NAME : 변경 사유 입력 창
          CREATION DATES : 2022.05.03
        *******************************************************/

        /* 스크립트 인클루드 */
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;

        /* ===============================================================
         * 0. Form Variable
         *  - Form 변수 영역
         * ===============================================================
         */


        /* ===============================================================
         * 1. Form Load
         *  - Form 로드시 실행
         * ===============================================================
         */

        this.SSP_BO_NA_27_onload = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	this.ds_list.addRow();
        	this.ds_search.addRow();

        	var prdClcd = this.parent.prdClcd;
        	this.ds_search.setColumn(0, "PRD_CLCD", prdClcd);
        };

        /* ===============================================================
         * 2. transaction
         *  - transaction 영역
         * ===============================================================
         */

        //변경 사유
        this.fn_updRsn = function()
        {
        	var sSvcId = "updRsn";
        	var sUrl = "/pr/ctg-mng/save-prd-spr-rsn.do";
        	var inDs = "ds_list=ds_list ds_search=ds_search";
        	var outDs = "";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callback");
        };

        /* ===============================================================
         * 3. CallBack
         *  - transaction 후 처리 영역
         * ===============================================================
         */

        this.fn_callback = function(svcID, errorCode, errorMsg) {
        	if(svcID == "save"){
        		this.alert("저장 되었습니다.");
        		this.close();
        	}
        }


        /* ===============================================================
         * 4. 외부 호출 FUNCTION 영역
         * ===============================================================
         */




        /* ===============================================================
         * 5. event action
         *  - dataset 및 component 이벤트 영역
         * ===============================================================
         */

         //취소 버튼
        this.btn_list_onclick = function(obj,e)
        {
        	if ( confirm("저장하지 않은 내용은 삭제됩니다. 목록으로 돌아가시겠습니까?"))
        	{
        		var resData = {};
        		var resString = "";

        		resData.RETURN_YN = "N";

        		// json string 변경
        		resString = JSON.stringify(resData);

        		// return
        		this.close(resString);
        	}
        };

        //저장
        this.btn_save_onclick = function(obj,e)
        {
        	var check = this.ds_list.getColumn(0, "UPD_RSN");

        	if(check == "" || check == undefined){
        		this.alert("변경 사유를 입력해주세요.");
        		return;
        	} else{
        		this.fn_save();
        	}
        };

        /* ===============================================================
         * 6. User Function
         *  - 사용자 구현 함수 영역
         * =============================================================== */

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_NA_27_onload,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_cancle.addEventHandler("onclick",this.btn_list_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_NA_27.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
