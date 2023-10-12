(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("fileUpload");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1092,293);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_files", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_LEN\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_LEN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SAP_DOC_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_files_copy", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_LEN\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_LEN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SAP_DOC_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00","2","28",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Drop Files Here");
            obj.set_visible("true");
            obj.set_background("aliceblue");
            obj.set_color("dodgerblue");
            obj.set_font("normal 30pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_file","1","28",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_files");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"459\"/><Column size=\"125\"/><Column size=\"28\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"파일명\"/><Cell col=\"1\" text=\"크기\"/><Cell col=\"2\" autosizecol=\"none\" text=\"삭제\"/></Band><Band id=\"body\"><Cell text=\"bind:ATFL_NM\"/><Cell col=\"1\" text=\"bind:ATFL_LEN_NM\" textAlign=\"right\"/><Cell col=\"2\" displaytype=\"imagecontrol\" edittype=\"none\" text=\"삭제\" background=\"url(&apos;theme://images/btn_WF_close_small.png&apos;) no-repeat center center #B61539\" autosizecol=\"limitmin\" cursor=\"pointer\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","1","109",null,null,"grd_file:3",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("파일 첨부");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","119","0","33","23",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("500MB");
            obj.set_color("red");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","162","0","388","23",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("미만의 파일최대         까지 등록 할 수 있습니다.");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","256","0","33","23",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10개");
            obj.set_color("red");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_01",null,"1","109",null,"204","grd_file:3",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("upload");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar","Button01_01:4",null,null,"24","0","grd_file:3",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_visible("false");
            obj.set_min("0");
            obj.set_max("100");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1092,293,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("fileUpload.xfdl", function() {

        /***********************************************************/
        /* 프 로 그 램 : fileUpload
        /* 작 성 일 자 : 2022/02/28
        /* 작  성   자 : 이성민
        /* 설       명 : 파일업로드 공통
        /***********************************************************/

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        //첨부파일 타입
        this.fileType = ".pptx, .ppt, .docx, .doc, .xls, .xlsx, image/*, text/*, .zip"; //첨부파일 종류
        this.maxFileSize = 500; //MB단위

        //파일 경로
        this.filePath = "";
        //부모 폼
        this.parentForm = "";
        //전달받은 문서번호
        this.docRegId = "";

        this.docRegId = "";
        this.pgmId = "";
        this.mnuSeq = "";


        /***********************************************************************************************
        *  파일첨부 관련  이벤트 영역
        ************************************************************************************************/
        this.cfn_fileUpload_init = function(docRegId, pgmId, mnuSeq) {
        	//오픈텍스트 테스트용
        	this.docRegId = docRegId;
        	this.pgmId = pgmId;
        	this.mnuSeq = mnuSeq;
        }


        this.fileUpload = function() {

        	this.FileUpTransfer.setPostData("docRegId", this.docRegId);
        	this.FileUpTransfer.setPostData("pgmId", this.pgmId);
        	this.FileUpTransfer.setPostData("mnuSeq", this.mnuSeq);

        	this.FileUpTransfer.upload('/co/file-upload.do');
        }

        // 파일 전송 성공
        this.FileUpTransfer_onsuccess = function(obj,e)
        {
        	var objCallDs = e.datasets[0];

        	if( objCallDs!= undefined ) {
        		var docRegId = objCallDs.getColumn(0, "docRegId");
        		var result = objCallDs.getColumn(0, "result");
        		var result = {"docRegId" : docRegId, "code" : result};

        		//최상위
        		this.parentForm.fn_fileUploadCallback(result);
        	}
        };

        // 파일전송 실패
        this.fileUpTrans_onerror = function(obj,e)
        {
        	trace(e.errormsg);
        };

        //파일 추가 성공
        this.FileList_onsuccess = function(obj, e)
        {
        	switch (e.reason)
        	{
        		case 1:
        			obj.getFileSize();
        			break;
        		case 9:
        			var nRowIdx = this.ds_files.addRow();
        			this.ds_files.setColumn(nRowIdx, "ATFL_NM", obj.filename);
        			this.ds_files.setColumn(nRowIdx, "ATFL_LEN_NM", this.cutFileSize(e.filesize));
        			this.ds_files.set_rowposition(nRowIdx);
        			this.FileUpTransfer.addFile(obj.filename, obj);
        			break;
        	}
        }

        // 파일추가 실패
        this.FileList_onerror = function(obj, e)
        {
        	trace("errortype: "+e.errortype);
        	trace("errormsg: "+e.errormsg);
        	trace("statuscode: "+e.statuscode);
        }

        //파일첨부 버튼 이벤트
        this.Button00_onclick = function(obj,e)
        {
        	this.FileDialog.set_accept(this.fileType);
        	this.FileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };


        this.FileDialog_onclose = function(obj,e)
        {
        	this.addFileList(e.virtualfiles);
        };


        this.grd_file_ondragenter = function(obj,e)
        {
        	if(e.datatype == "file") {
        		this.grd_file.set_opacity(0.5);
        	}
        };

        this.grd_file_ondragleave = function(obj,e)
        {
        	this.grd_file.set_opacity(1);
        };

        this.grd_file_ondrop = function(obj,e)
        {
        	this.grd_file.set_opacity(1);
        	if(e.datatype == "file") {
        		this.addFileList(e.filelist);
        	}
        };

        this.FileUpTransfer_onprogress = function(obj,e)
        {
        	var rtnPercent = this.fnGetPercent(e.loaded, e.total);
        	this.ProgressBar.set_pos(rtnPercent);
        };


        this.Button01_onclick = function(obj,e)
        {
        	this.FileUpTransfer.upload('/co/file-upload.do');
        };

        //그리드 클릭
        this.grd_file_oncellclick = function(obj,e)
        {
        	if( this.ds_files.getRowType(e.row) != 1) {
        		if( obj.getCellPos() == 2 ) {
        			this.ds_files.deleteRow(e.row);
        		}
        	} else {
        		if( obj.getCellPos() == 2 ) {
        			if(this.confirm("첨부파일을 삭제 하시겠습니까?")) {
        				//this.parentForm.fn_fileDeleteCallback(this.ds_files.getDeletedRowset());
        				this.ds_files.deleteRow(e.row);
        				this.parentForm.fn_fileDeleteCallback(this.ds_files);
        			}
        		} else {
        			if(this.confirm(this.ds_files.getColumn(0, "ATFL_NM") + " 파일을 저장 하시겠습니까?")) {
        				this.downloadfile(e.row);
        			}
        		}
        	}

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



        //파일 사이즈.
        this.cutFileSize = function(filesize)
        {
        	var sOutput = filesize + " bytes";
        	var fileSizeType = "";
        	var size = 0;
        	for (var aMultiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], nMultiple = 0, nApprox = filesize / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) {
        		sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple];
        		fileSizeType = aMultiples[nMultiple];
        		size = nApprox;
        	}

        	return sOutput;
        };


        //퍼센트 계산
        this.fnGetPercent = function(nload,nTotal)
        {
        	//일부값 ÷ 전체값 X 100
        	var nCurPercent = (nload / nTotal) * 100;
        	return nCurPercent;
        };

        //파일 확장자 검증
        this.fn_fileSizeCheck = function(obj, fileSize) {
        	var fileName = obj.filename;
        	var extNm  = fileName.substr(fileName.lastIndexOf(".") + 1); // 맨 뒤 확장자만 자르기
        	var fileGbn = ".pptx, .ppt, .docx, .doc, .xls, .xlsx, .jpg, .png, .txt, .zip";

        	extNm = extNm.toLowerCase();

        	if( this.ds_files.rowcount >= 10 ) {
        		alert("최대 첨부 개수는 10개 입니다.");
        		return false;
        	}

        	//10485760 - 10메가
        	//메가바이트 변환
        	var mbSize = fileSize / 1024 / 1024;

        	if( this.maxFileSize < mbSize ) {
        		alert(extNm + " 파일은 10MB 이상으로 첨부하실 수 없습니다.");
        		return false;
        	}

        	if( fileGbn.indexOf(extNm) == -1 ) {
        		alert(extNm + " 파일은 허용되지 않는 파일 타입입니다.");
        		return false;
        	}

        	return true;
        }

        //파일 이벤트 생성
        this.addFileList = function(filelist)
        {
        	for (var i = 0, len = filelist.length, vFile; i < len; i++)
        	{
        		vFile = filelist[i];

        		//파일 개수 및 확장자 검증
        		if(!this.fn_fileSizeCheck(vFile, vFile._handle.size)) {
        			return false;
        		}

        		vFile.addEventHandler("onsuccess", this.FileList_onsuccess, this);
        		vFile.addEventHandler("onerror", this.FileList_onerror , this);

        		vFile.open(null, 1);
        	}
        }

        //파일 사이즈 가져오기
        this.cutFileSize = function(filesize)
        {
        	var sOutput = filesize + " bytes";
        	var fileSizeType = "";
        	var size = 0;
        	for (var aMultiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], nMultiple = 0, nApprox = filesize / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) {
        		sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple];
        		fileSizeType = aMultiples[nMultiple];
        		size = nApprox;
        	}

        	return sOutput;
        };


        // 파일 다운로드
        this.downloadfile = function(i) {
        	this.FileDownTransfer.clearPostDataList();

        	this.FileDownTransfer.setPostData("docRegId",this.ds_files.getColumn(i, "DOC_REG_ID"));
        	this.FileDownTransfer.setPostData("docRegSeq",this.ds_files.getColumn(i, "DOC_REG_SEQ"));

        	/*
        	this.FileDownTransfer.set_downloadfilename(this.ds_files.getColumn(i, "ATFL_NM"));
        	this.FileDownTransfer.setPostData("filePath",this.ds_files.getColumn(i, "ATFL_STOR_PATH"));
        	this.FileDownTransfer.setPostData("fileOrgName",this.ds_files.getColumn(i, "ORI_ATFL_NM"));
        	this.FileDownTransfer.setPostData("fileName",this.ds_files.getColumn(i, "ATFL_NM"));
        	this.FileDownTransfer.setPostData("sapDocId",this.ds_files.getColumn(i, "SAP_DOC_ID"));
        	*/

        	this.FileDownTransfer.download('/co/file-download.do');

        	//this.FileDownTransfer.download(this.saveUrl + "fileDownload_postdatatest.jsp");
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static00_00.addEventHandler("onclick",this.div_top_info_Static00_00_onclick,this);
            this.grd_file.addEventHandler("ondrop",this.grd_file_ondrop,this);
            this.grd_file.addEventHandler("ondragleave",this.grd_file_ondragleave,this);
            this.grd_file.addEventHandler("ondragenter",this.grd_file_ondragenter,this);
            this.grd_file.addEventHandler("oncellclick",this.grd_file_oncellclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Static01_00.addEventHandler("onclick",this.div_top_info_Static01_00_onclick,this);
            this.Static01.addEventHandler("onclick",this.div_top_info_Static01_onclick,this);
            this.Static01_00_00.addEventHandler("onclick",this.div_top_info_Static01_00_onclick,this);
            this.Button01_01.addEventHandler("onclick",this.Button01_onclick,this);
            this.FileDialog.addEventHandler("onclose",this.FileDialog_onclose,this);
            this.FileUpTransfer.addEventHandler("onprogress",this.FileUpTransfer_onprogress,this);
            this.FileUpTransfer.addEventHandler("onsuccess",this.FileUpTransfer_onsuccess,this);
            this.FileUpTransfer.addEventHandler("onerror",this.FileUpTransfer_onerror,this);
            this.FileDownTransfer.addEventHandler("onsuccess",this.FileDownTransfer_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onerror",this.FileDownTransfer_onerror,this);
        };
        this.loadIncludeScript("fileUpload.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
