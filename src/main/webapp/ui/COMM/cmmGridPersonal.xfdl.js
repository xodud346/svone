(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmGridPersonal");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(200,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_column", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"ROWS_INFO\" type=\"STRING\" size=\"30\"/><Column id=\"_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"HEAD_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"BODY_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"SUMMARY_INFO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chkColumn", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"ROWS_INFO\" type=\"STRING\" size=\"30\"/><Column id=\"_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"HEAD_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"BODY_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"SUMMARY_INFO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_column","0","0",null,null,"0","40",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_column");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"180\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:_CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:COL_NM\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_temp","210","50","135","177",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_apply","135","365","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("적용");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",200,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmGridPersonal.xfdl", function() {
        /*******************************************************
          PROJECT NAME : MarketA
          CREATION DATES :
        *******************************************************/



        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        	this.fv_oApp = nexacro.getApplication();	//application object
        	this.fv_oGrid = null;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        	this.fn_onLoad = function(obj,e)
        	{
        		this.fv_oGrid = this.parent.uoGrid;

        		var sFormat ="";

        		//오리지날 format 기준으로 List 생성
        		sFormat = this.fv_oGrid.uOrgFormat;
        		this.fn_getColumnList(sFormat,this.ds_column);


        		//현제 format 기준으로 List 생성
        		sFormat = this.fv_oGrid.getCurFormatString();
        		this.fn_getColumnList(sFormat, this.ds_chkColumn);

        		//두 format 간 check
        		this.fn_setCheckColumn();
        	};


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        	//조회
        	this.fn_search = function()	{
        // 			var sSvcId = "sampleSelect";
        // 			var sUrl = "/sampleSelectMap.do";
        // 			var inDs = "ds_search=ds_search";
        // 			var outDs = "ds_sampleList=ds_output1";
        // 			var arg = "";
        // 			this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	};
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        	this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        // 		if(svcID == "sampleSelect"){
        // 			this.ds_sampleList.addColumn("_CHK","String");
        //
        // //			trace(this.ds_sampleList.getRowCount());
        // 			//paging 처리
        // 			this.div_paging.form.cfn_createPage(this.div_paging,1912,this.fv_oApp.gv_pageViewCnt,"fn_pageCallback");
        // 		}
        	};
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        	//format에서 column정보를 Grid view dataset으로 만드는 함수
        	this.fn_getColumnList = function(sFormat, oDs){

        		this.grd_temp.set_formats(sFormat);

        		oDs.clearData();

        		var nNewRow;
        		var sBind = "";
        		var sTitle = "";
         		for(var i = 0 ; i < this.grd_temp.getCellCount("body"); i++){
         			nNewRow = oDs.addRow();

        			sTitle = this.grd_temp.getCellProperty("head",i,"text");
        			if(this.gfn_isNull(sTitle)) sTitle= "";
        			oDs.setColumn(nNewRow,"COL_NM",sTitle);

        			sBind = this.gfn_trim(this.grd_temp.getCellProperty("body",i,"text")).replace("bind:","");
        			oDs.setColumn(nNewRow,"COL_ID",sBind);
        		}
        		this.grd_temp.set_formats("");
        		this.fn_setFormatDs(sFormat, oDs);
        	};


        	//dataset에 format 정보를 담는 함수
        	this.fn_setFormatDs = function(sFormat, oDs){
        		var arrFormat = sFormat.split("<Columns>");
        		var arrColumn = arrFormat[1].split("</Columns>");
        		//COLUMN INFO
        		var sColumn = arrColumn[0];
        		var arrCol = sColumn.split("/>");
        		for(var i = 0 ; i < arrCol.length-1 ; i++){
        			oDs.setColumn(i,"COL_SEQ",i);
        			oDs.setColumn(i,"COLUMN_INFO",arrCol[i]+"/>");
        		}

        		var arrRow = arrColumn[1].split("</Rows>");
        		//ROWS INFO
        		var sRows = arrRow[0];
        		    sRows = sRows.replace("<Rows>","");
        		oDs.setConstColumn("ROWS_INFO",sRows)

        		var arrBand = arrRow[1].split("</Band>");
        		//HEAD INFO
        		var sHead = arrBand[0];
        			sHead = sHead.replace('<Band id="head">',"");
        		var arrHead = sHead.split("/>");
        		for(var i = 0 ; i < arrHead.length-1 ; i++){
        			oDs.setColumn(i,"HEAD_INFO",arrHead[i]+"/>");
        		}

        		//BODY INFO
        		var sHead = arrBand[1];
        			sHead = sHead.replace('<Band id="body">',"");
        		var arrHead = sHead.split("/>");
        		for(var i = 0 ; i < arrHead.length-1 ; i++){
        			oDs.setColumn(i,"BODY_INFO",arrHead[i]+"/>");
        		}

        		if(!this.gfn_isNull(arrBand[2])){
        			var sHead = arrBand[2];
        				sHead = sHead.replace('<Band id="summary">',"");
        			var arrHead = sHead.split("/>");
        			for(var i = 0 ; i < arrHead.length-1 ; i++){
        				oDs.setColumn(i,"SUMMARY_INFO",arrHead[i]+"/>");
        			}
        		}
        	};


        	//두개의 format을 통해 view column check
        	this.fn_setCheckColumn = function(sFormat){
         		var nFindRow;
         		var nNewRow;
        		for(var i = 0 ; i < this.ds_chkColumn.getRowCount() ; i++){
        			nFindRow = this.ds_column.findRow("COL_ID",this.ds_chkColumn.getColumn(i,"COL_ID"));
        			if(nFindRow >= 0){
         				 this.ds_column.setColumn(nFindRow,"_CHK",1);
        				 this.ds_column.setColumn(nFindRow,"COLUMN_INFO", this.ds_chkColumn.getColumn(i,"COLUMN_INFO"));

         				 this.ds_column.moveRow(nFindRow, i);
         			}
        		}
        		this.ds_column.set_rowposition(0);
        	};

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        	this.btn_apply_onclick = function(obj,e)
        	{
        		var sFormats = '<Formats><Format id="default">';
        		var sColumn = '<Columns>';
        		var sRows = '<Rows>';
        		var sHead = '<Band id="head">';
        		var sBody = '<Band id="body">';
        		var sSummary = '';

        		sRows = this.ds_column.getConstColumn("ROWS_INFO");
        		var sHeadCell = "";
        		var sBodyCell = "";
        		this.ds_column.filter("_CHK=='1'");
        		for(var i = 0 ; i < this.ds_column.getRowCount() ; i++){
        			sColumn = sColumn + this.ds_column.getColumn(i,"COLUMN_INFO");
        			sHeadCell = this.ds_column.getColumn(i,"HEAD_INFO");
        			sHead = sHead + sHeadCell.replace('col="'+this.ds_column.getColumn(i,"COL_SEQ")+'"','col="'+i+'"');

        			sBodyCell = this.ds_column.getColumn(i,"BODY_INFO");
        			sBody = sBody + sBodyCell.replace('col="'+this.ds_column.getColumn(i,"COL_SEQ")+'"','col="'+i+'"');
        			if(!this.gfn_isNull(this.ds_column.getColumn(i,"SUMMARY_INFO"))){
        				sSummary = sSummary + this.ds_column.getColumn(i,"SUMMARY_INFO");
        			}
        		}
        		this.ds_column.filter("");
        		sColumn = sColumn + '</Columns>';
        		sRows = '<Rows>'+ sRows + '</Rows>';
        		sHead = sHead + '</Band>'
        		sBody = sBody + '</Band>'
        		if(!this.gfn_isNull(sSummary)){
        			sSummary = '<Band id="summary">' + sSummary + '</Band>';
        		}
        		sFormats = sFormats + sColumn + sRows + sHead + sBody + sSummary + '</Format></Formats>';
        		var oDivWork = this.gfn_getDivWork(this);
        		if(!this.gfn_isNull(oDivWork)){
        			//탭으로 구성되어 url 걸린 화면의 경우 에러남. 분기처리
        			if( typeof oDivWork.form.cfn_personalPopupClose == "function") {
        				oDivWork.form.cfn_personalPopupClose(sFormats);
        			} else {
        				var object = oDivWork.form.all;
        				for( var idx in object ) {
        					var stype = object[idx].valueOf();
        					if( stype == "[object Tab]" ) {
        						oDivWork = object[idx]._focusobj;
        						break;
        					}
        				}
        				//탭 오브젝트 가져오기
        				oDivWork.form.cfn_personalPopupClose(sFormats);
        			}
        			//oDivWork.form.cfn_personalPopupClose(sFormats);
        		}
        	};

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.btn_apply.addEventHandler("onclick",this.btn_apply_onclick,this);
        };
        this.loadIncludeScript("cmmGridPersonal.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
