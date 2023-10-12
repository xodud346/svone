(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("kdownlaod");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new RaonkUpload("RaonkUpload01","74","140","862","272",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_Mode("view");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","84","44","150","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("kdownlaod.xfdl", function() {
        function fn_addFile() {


        	// 실제 서버상의 파일을 작성합니다.
        	this.RAONKUPLOAD.AddUploadedFile('1', '전경\\전경사진.jpg', 'http://10.59.132.132:5730/raonkupload/sdk/sample/images/Panorama/ViewPhotos.jpg', '87325', '');
        	this.RAONKUPLOAD.AddUploadedFile('2', '전경\\전경사진1.jpg', 'http://10.59.132.132:5730/raonkupload/sdk/sample/images/Panorama/ViewPhotos.jpg', '87325', '');
            this.RAONKUPLOAD.AddUploadedFile('3', '풍경\\이미지\\풍경이미지.bmp','http://10.59.132.132:5730/raonkupload/sdk/sample/images/Scenery/image/CreativeImages.bmp', '2359350', '');
        	this.RAONKUPLOAD.AddUploadedFile('4', '계절\\봄\\느낌\\봄을느껴봅시다.gif', 'http://10.59.132.132:5730/raonkupload/sdk/sample/images/season/spring/feeling/Lets_feel_the_spring.gif', '192866', '');
        }


        this.Button00_onclick = function(obj,e)
        {
        fn_addFile();
        };

        this.RaonkUpload01_RAONKUPLOAD_OnError = function(obj, paramObj)
        {
        	console.log('Error : ' + paramObj.userdata.strCode + ', ' + paramObj.userdata.strMessage);

            if (paramObj.userdata.arrUploadedFileList != null && paramObj.userdata.arrUploadedFileList != '') {
        			console.log('다운로드 된 파일 리스트');

        			var uploadedFileLen = paramObj.userdata.arrUploadedFileList.length;

        			for (var i = 0; i < uploadedFileLen; i++) {
        				console.log(paramObj.userdata.arrUploadedFileList[i].uploadName + ', ' + paramObj.userdata.arrUploadedFileList[i].uploadPath);

        				// originName: paramObj.arrUploadedFileList[i].originName
        				// fileSize: paramObj.arrUploadedFileList[i].fileSize
        				// uploadName: paramObj.arrUploadedFileList[i].uploadName
        				// uploadPath: paramObj.arrUploadedFileList[i].uploadPath
        				// logicalPath: paramObj.arrUploadedFileList[i].logicalPath
        				// order: paramObj.arrUploadedFileList[i].order
        				// status: paramObj.arrUploadedFileList[i].status
        				// customValue: paramObj.arrUploadedFileList[i].customValue
        				// responseCustomValue: paramObj.arrUploadedFileList[i].responseCustomValue
                    }
            }
        };

        this.RaonkUpload01_RAONKUPLOAD_CreationComplete = function(obj,  paramObj)
        {
              console.log('다운로드 생성 완료 : ' + obj.id);
        };

        this.RaonkUpload01_RAONKUPLOAD_AfterAddAllFile = function(obj, paramObj)
        {
        	console.log("다운로드 추가 완료");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.RaonkUpload01.addEventHandler("RAONKUPLOAD_OnError",this.RaonkUpload01_RAONKUPLOAD_OnError,this);
            this.RaonkUpload01.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload01_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUpload01.addEventHandler("RAONKUPLOAD_AfterAddAllFile",this.RaonkUpload01_RAONKUPLOAD_AfterAddAllFile,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("kdownlaod.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
