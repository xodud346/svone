(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("coMnuAuthGrpMng");
            this.set_titletext("메뉴권한그룹관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1340,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MNU_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MNU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MNU_LVL_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"MNU_LVL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"HRNK_MNU_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MNU_TP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"HGST_MNU_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_CLSF_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_authClsfCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_CLSF_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_authGrpMng", this);
            obj._setContents("<ColumnInfo><Column id=\"MNU_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MNU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MNU_LVL_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"MNU_LVL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"HRNK_MNU_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MNU_TP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"HGST_MNU_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_authGrpMngCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"MNU_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MNU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MNU_LVL_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"MNU_LVL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"HRNK_MNU_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MNU_TP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"HGST_MNU_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_menuCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"MNU_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MNU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MNU_LVL_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"MNU_LVL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"HRNK_MNU_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MNU_TP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"HGST_MNU_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_CLSF_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_list01","13","80","452","551",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_menu");
            obj.set_scrollbartype("auto auto");
            obj.set_treeusecheckbox("true");
            obj.set_autofittype("col");
            obj.set_treeasynctoggle("false");
            obj.set_treeinitstatus("expand,all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"377\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:MNU_NM\" edittype=\"tree\" displaytype=\"treeitemcontrol\" treelevel=\"bind:MNU_LVL\" tooltiptext=\"bind:MNU_NM\" controlautosizingtype=\"both\" treecheck=\"bind:CHK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","13","49","79","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("메뉴 목록");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","553","49","147","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("권한별 메뉴 목록");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_bottomRight","480","285","59","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text(">");
            this.addChild(obj.name, obj);

            obj = new Button("btn_bottomLeft","480","325","59","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("<");
            this.addChild(obj.name, obj);

            obj = new Button("btn_allRight","480","365","59","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text(">>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_allLeft","480","405","59","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("<<");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","946","51","59","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list02","553","80","452","551",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("ds_authGrpMng");
            obj.set_scrollbartype("auto auto");
            obj.set_treeusecheckbox("true");
            obj.set_autofittype("col");
            obj.set_treeasynctoggle("false");
            obj.set_treeinitstatus("expand,all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"377\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:MNU_NM\" edittype=\"tree\" displaytype=\"treeitemcontrol\" treelevel=\"bind:MNU_LVL\" tooltiptext=\"bind:MNU_NM\" controlautosizingtype=\"both\" treecheck=\"bind:CHK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","10","10","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("권한 분류 코드");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","139","10","866","32",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_authClsfCd","150","14","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_authClsfCd");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_index("-1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1340,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cmb_authClsfCd","value","ds_search","AUTH_CLSF_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("coMnuAuthGrpMng.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES : 2022.01.26
        *******************************************************
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.levelColumn = "MNU_LVL";
        this.orgCheck = "CHK";
        this.seqKey = "MNU_SEQ";
        this.fv_stateCheckRow;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
        	this.gfn_formOnLoad(this);
        	this.fn_commonCodeSearch();
        	this.ds_authGrpMngCopy.copyData(this.ds_authGrpMng);
        	this.ds_menuCopy.copyData(this.ds_menu);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //공통코드 조회
        this.fn_commonCodeSearch = function(){
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/selectCommonCodeList.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_authClsfCd=ds_output1";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "AUTH_CLSF_CD");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //메뉴 조회
        this.fn_menuSearch = function() {

        	if(this.gfn_isNull(this.ds_search.getColumn(0, "AUTH_CLSF_CD"))){
        		alert("권한분류코드를 확인하세요.");
        		return;
        	}

        	var sSvcId = "menuSearch";
        	var sUrl = "/co/mnuAuth/selectMnuMngList.do";
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_menu=ds_output1 ds_authGrpMng=ds_output2";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //저장
        this.fn_save = function(){
        	var sSvcId = "save";
        	var sUrl = "/co/mnuAuth/saveAuthGrpMngList.do";
        	var inDs = "ds_search=ds_search ds_save=ds_authGrpMng:U"
        	var outDs = "";
        	var arg;

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(errorCode != 0){
        		this.alert(errorCode+"\n"+errorMsg);
        		return;
        	}

        	switch(svcID){
        	case "search":
        		break;
        	case "menuSearch":
        		if(this.ds_authGrpMng.rowcount < 1){
        			this.ds_authGrpMng.copyData(this.ds_authGrpMngCopy);
        			this.ds_authGrpMng.addColumn("CHK","String");
        		}

        		if(this.ds_menu.rowcount < 1){
        			this.ds_menu.copyData(this.ds_menuCopy);
        			this.ds_menu.addColumn("CHK","String");
        		}

        		break;
        	case "save":
        		alert("저장되었습니다.");
        		this.fn_menuSearch();
        		break;
        	case "commonCodeSearch":
        		this.cmb_authClsfCd.set_index(0);
        		this.fn_menuSearch();
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
        /********************************************************************************************
        ★ 트리 이동 함수
        orgGrid : 원본 grid
        targetGrid : 옮길 grid
        orgDs : 원본 dataset
        targetDs : 옮길 dataset
        row : dataset 상 index
        *********************************************************************************************/
        this.fnCopyTree= function(orgGrid, targetGrid, orgDs, targetDs, row){
        	var aParentArr = new Array();
        	var dsOrg	  = orgDs;
        	var dsTarget  = targetDs;
        	var grdTree	  = orgGrid;
        	var grdTarget = targetGrid;
        	var grdRow = grdTree.getTreeRow(row); //선택한 dataset row의 그리드 상 row값
        	var aChildArr = new Array();
        	var nEnd = 0;
        	var nStart = 0;
        	var nRow = 0;
        	var nTopIndex = 0;
        	var lastIndex = 0;
        	var aDelArr =  new Array();

        	//선택한 row의 현재 level 조회
        	var nLvl = dsOrg.getColumn(row , this.levelColumn);

        	//start, end에 현재 row 값 세팅
        	nStart = nEnd = row;

        	//현재 row에 자식 데이터가 있는지 확인. 있으면 마지막 자식 index를 nEnd에 setting
        	var nChildCount = grdTree.getTreeChildCount(grdRow);
        	if (nChildCount > 0){
        		lastIndex = this.treeGetChildEnd(dsOrg, this.levelColumn, grdRow);
        		nEnd = lastIndex;
        	}

        	//현재 row의 상위 row 데이터 확인(선택한 row의 상위 row에 해당하는 row 리턴)
        	var nParentRow = grdTree.getTreeParentRow(row);

        	//상위 row가 존재하면 aParentArr(상위 부모 배열)에 PUSH
        	if (nParentRow > -1){
        		aParentArr.push(nParentRow);

        		//해당 row의 상위 row가 더 존재할 수도 있으므로
        		//0부터 nParentRow까지 돌면서 체크해서 배열에 row값 PUSH
        		var nRowFindRow = nParentRow;
        		for(var i=0; i<=nParentRow; i++){
        			nRow = orgGrid.getTreeParentRow(nRowFindRow);
        			if (nRow > -1){
        				nRowFindRow = nRow;
        				aParentArr.push(nRow);
        			}else{
        				break;
        			}
        		}
        	}

        	//현재 row부터 마지막 자식 row까지 옮길 그리드에 추가
        	dsTarget.set_enableevent(false);
        	for (i = nStart; i <= nEnd; i++){
        		//옮길트리에서 seqKey에 해당하는 값 찾아서 중복제거
        		var findRow = dsTarget.findRowExpr(this.seqKey + " == "+ dsOrg.getColumn(i, this.seqKey));
        		if(findRow < 0){
        			nRow = dsTarget.addRow();
        			dsTarget.copyRow(nRow, dsOrg, i);
        			dsTarget.setColumn(nRow, this.orgCheck, 0);
        		}
        		//삭제할 배열 row 추가
        		aDelArr.push(i);
        	}

        	// aParentArr(상위 부모 배열)에 데이터가 존재하는 경우 그리드에 추가
        	if(aParentArr.length != 0){
        		for(var i=0; i<=aParentArr.length-1; i++){
        			//옮길트리에서 seqKey에 해당하는 값 찾아서 중복제거
        			var findRow = dsTarget.findRowExpr(this.seqKey + " == "+ dsOrg.getColumn(aParentArr[i], this.seqKey));
        			if(findRow < 0){
        				var nRow= dsTarget.addRow();
        				dsTarget.copyRow(nRow, dsOrg, aParentArr[i]);
        				dsTarget.setColumn(nRow, this.orgCheck, 0);
        			}
        		}
        	}

        	dsTarget.set_enableevent(true);

        	//옮길 트리에 추가한 후 삭제시작
        	//1.선택한 현재~자식 row 삭제
        	dsOrg.deleteMultiRows(aDelArr);

        	//2.부모노드가 있는 경우
        	if(aParentArr.length != 0){
        		//aParentArr(상위 부모 배열)이 있으면 자식노드가 있는지 확인하고 삭제 진행.
        		//트리에서 자식이 존재하지 않으면 그때 해당 값 삭제
        		for(var i=0;i<=aParentArr.length-1;i++){
        			var nChildCount = grdTree.getTreeChildCount(aParentArr[i]);
        			if(nChildCount <= 0){
        				dsOrg.deleteRow(aParentArr[i]);
        			}
        		}
        	}
        };

        /********************************************************************************************
        ★ 선택값 전체 이동 함수
        orgGrid : 원본 grid
        targetGrid : 옮길 grid
        orgDs : 원본 dataset
        targetDs : 옮길 dataset
        arrayRow : 선택한 dataset row의 MNU_SEQ 배열
        *********************************************************************************************/
        this.fnAllCopyTree= function(orgGrid, targetGrid, orgDs, targetDs, arrayRow){
        	var dsOrg	  = orgDs;
        	var dsTarget  = targetDs;
        	var grdTree	  = orgGrid;
        	var grdTarget = targetGrid;
        	var nEnd = 0;
        	var nStart = 0;
        	var nRow = 0;
        	var nTopIndex = 0;
        	var lastIndex = 0;

        	for(var i=0; i<=arrayRow.length-1; i++){
        		var aParentArr = new Array();
        		var aChildArr = new Array();
        		var aDelArr =  new Array();
        		var row = orgDs.findRow(this.seqKey, arrayRow[i]);
        		var grdRow =  grdTree.getTreeRow(row);

        		if( row >= 0){

        			//선택한 row의 현재 level 조회
        			var nLvl = dsOrg.getColumn(row , this.levelColumn);

        			//start, end에 현재 row 값 세팅
        			nStart = nEnd = row;

        			//현재 row에 자식 데이터가 있는지 확인. 있으면 마지막 자식 index를 nEnd에 setting
        			var nChildCount = grdTree.getTreeChildCount(grdRow);
        			if (nChildCount > 0){
        				lastIndex = this.treeGetChildEnd(dsOrg, this.levelColumn, grdRow);
        				nEnd = lastIndex;
        			}

        			//현재 row의 상위 row 데이터 확인(선택한 row의 상위 row에 해당하는 row 리턴)
        			var nParentRow = grdTree.getTreeParentRow(row);

        			//상위 row가 존재하면 aParentArr(상위 부모 배열)에 PUSH
        			if (nParentRow > -1){
        				aParentArr.push(nParentRow);

        				//해당 row의 상위 row가 더 존재할 수도 있으므로
        				//0부터 nParentRow까지 돌면서 체크해서 배열에 row값 PUSH
        				var nRowFindRow = nParentRow;
        				for(var j=0; j<=nParentRow; j++){
        					nRow = orgGrid.getTreeParentRow(nRowFindRow);
        					if (nRow > -1){
        						nRowFindRow = nRow;
        						aParentArr.push(nRow);
        					}else{
        						break;
        					}
        				}
        			}

        			//현재 row부터 마지막 자식 row까지 옮길 그리드에 추가
        			dsTarget.set_enableevent(false);
        			for (var j = nStart; j <= nEnd; j++){
        				//옮길트리에서 seqKey에 해당하는 값 찾아서 중복제거
        				var findRow = dsTarget.findRowExpr(this.seqKey + " == "+ dsOrg.getColumn(j, this.seqKey));
        				if(findRow < 0){
        					nRow = dsTarget.addRow();
        					dsTarget.copyRow(nRow, dsOrg, j);
        					dsTarget.setColumn(nRow, this.orgCheck, 0);
        				}
        				//삭제할 배열 row 추가
        				aDelArr.push(j);
        			}

        			// aParentArr(상위 부모 배열)에 데이터가 존재하는 경우 그리드에 추가
        			if(aParentArr.length != 0){
        				for(var j=0; j<=aParentArr.length-1; j++){
        					//옮길트리에서 seqKey에 해당하는 값 찾아서 중복제거
        					var findRow = dsTarget.findRowExpr(this.seqKey + " == "+ dsOrg.getColumn(aParentArr[j], this.seqKey));
        					if(findRow < 0){
        						var nRow= dsTarget.addRow();
        						dsTarget.copyRow(nRow, dsOrg, aParentArr[j]);
        						dsTarget.setColumn(nRow, this.orgCheck, 0);
        					}
        				}
        			}
        			dsTarget.set_enableevent(true);

        			//옮길 트리에 추가한 후 삭제시작
        			//1.선택한 현재~자식 row 삭제
        			dsOrg.deleteMultiRows(aDelArr);

        			//2.부모노드가 있는 경우
        			if(aParentArr.length != 0){
        				//aParentArr(상위 부모 배열)이 있으면 자식노드가 있는지 확인하고 삭제 진행.
        				//트리에서 자식이 존재하지 않으면 그때 해당 값 삭제
        				for(var j=0;j<=aParentArr.length-1;j++){
        					var nChildCount = grdTree.getTreeChildCount(aParentArr[j]);
        					if(nChildCount <= 0){
        						dsOrg.deleteRow(aParentArr[j]);
        					}
        				}
        			}
        		}

        		nEnd = 0;
        		nStart = 0;
        		nRow = 0;
        		nTopIndex = 0;
        		lastIndex = 0;
        	}
        };

        //선택값 중 최하위 메뉴 이동 호출 함수
        this.fn_moveDataSet= function(orgGrid, targetGrid, orgDs, targetDs){
        	var nAddIndex = 0 ;
        	var aChkArr = new Array();

        	for(var i=0; i< orgDs.rowcount; i++){
        		if(orgDs.getColumn(i, "CHK") == 1){
        			aChkArr.push(i);
        		}
        	}

        	//체크한 값이 1개 이상이면 최하위 한건만 이동
        	if(aChkArr.length > 1){
        		nAddIndex = aChkArr[aChkArr.length - 1];
        	}else{
        		nAddIndex = aChkArr;
        	}

        	this.fnCopyTree(orgGrid, targetGrid, orgDs, targetDs,  nAddIndex);
        };

        //전체 메뉴 이동 호출 함수
        this.fn_allMoveDataSet= function(orgGrid, targetGrid, orgDs, targetDs){
        	var aChkArr = new Array();

        	for(var i=0; i<orgDs.rowcount; i++){
        		if(orgDs.getColumn(i, "CHK") == 1){
        			aChkArr.push(orgDs.getColumn(i, this.seqKey));
        		}
        	}

        	this.fnAllCopyTree(orgGrid, targetGrid, orgDs, targetDs,  aChkArr);
        };

        //저장 유효성 체크
        this.fn_validationCheck = function(){
        	if(!this.gfn_dsIsUpdated(this.ds_authGrpMng)){
        		alert("저장할 내용이 없습니다.");
        		return false;
        	}

        	return true;
        };
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //저장버튼
        this.btn_save_onclick = function(obj,e){
        	//저장 조건 체크
        	if(this.fn_validationCheck()){
        		var sReturn = this.confirm("저장하시겠습니까?");
        		if(sReturn == true){
        			this.fn_save();
        		}
        	}
        };

        //권한별 메뉴목록 트리 이동 이벤트
        this.btn_bottomRight_onclick = function(obj,e){
        	var chkCnt = this.ds_menu.getCaseCount("CHK == 1");
        	if(chkCnt == 0){
        		alert("추가할 메뉴를 선택해주세요.");
        		return;
        	}

        	this.fn_moveDataSet(this.grd_list01, this.grd_list02, this.ds_menu, this.ds_authGrpMng);
        	this.ds_authGrpMng.set_keystring("S:+SRT_SO");
        };

        //메뉴목록 트리 이동 이벤트
        this.btn_bottomLeft_onclick = function(obj,e){
        	var chkCnt = this.ds_authGrpMng.getCaseCount("CHK == 1");
        	if(chkCnt == 0){
        		alert("선택한 데이터가 없습니다.");
        		return;
        	}

        	this.fn_moveDataSet(this.grd_list02, this.grd_list01, this.ds_authGrpMng, this.ds_menu);
        	this.ds_menu.set_keystring("S:+SRT_SO");
        };

        //선택한 값 전체 권한별메뉴목록 트리 이동 이벤트
        this.btn_allRight_onclick = function(obj,e){
        	var chkCnt = this.ds_menu.getCaseCount("CHK == 1");
        	if(chkCnt == 0){
        		alert("추가할 메뉴를 선택해주세요.");
        		return;
        	}

        	this.fn_allMoveDataSet(this.grd_list01, this.grd_list02, this.ds_menu, this.ds_authGrpMng);
        	this.ds_authGrpMng.set_keystring("S:+SRT_SO");
        };

        //선택한 값 전체 메뉴목록 트리 이동 이벤트
        this.btn_allLeft_onclick = function(obj,e){
        	var chkCnt = this.ds_authGrpMng.getCaseCount("CHK == 1");
        	if(chkCnt == 0){
        		alert("선택한 데이터가 없습니다.");
        		return;
        	}

        	this.fn_allMoveDataSet(this.grd_list02, this.grd_list01, this.ds_authGrpMng,  this.ds_menu);
        	this.ds_menu.set_keystring("S:+SRT_SO");
        };

        //권한분류코드 클릭이벤트
        this.cmb_authClsfCd_onitemchanged = function(obj,e){
        	var bReturn  = true;

        	if(this.gfn_dsIsUpdated(this.ds_authGrpMng)){
        		bReturn = this.confirm("변경된 내역이 존재합니다. 조회하시겠습니까?");
        	}

        	if(bReturn == true){
        		this.ds_menu.clearData();
        		this.ds_authGrpMng.clearData();
        		this.fn_menuSearch();
        	}else{
        		this.cmb_authClsfCd.set_value(e.prevalue);
        	}
        };


        //DATASET 체크박스 컬럼 변경 전 ROWTYPE을 보존할 변수 SETTING
        this.ds_authGrpMng_cancolumnchange = function(obj,e){
        	if(e.columnid == "CHK"){
        		this.fv_stateCheckRow = obj.getRowType(e.row);
        	}
        };

        //DATASET 체크박스 컬럼 변경 시 ROWTYPE을 NORMAL로 유지하기 위해 추가
        this.ds_authGrpMng_oncolumnchanged = function(obj,e){
        	if (e.columnid == "CHK" && this.fv_stateCheckRow == Dataset.ROWTYPE_NORMAL) {
                obj.set_updatecontrol(false);
                obj.setRowType(e.row, Dataset.ROWTYPE_NORMAL);
        		obj.set_updatecontrol(true);
            }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_bottomRight.addEventHandler("onclick",this.btn_bottomRight_onclick,this);
            this.btn_bottomLeft.addEventHandler("onclick",this.btn_bottomLeft_onclick,this);
            this.btn_allRight.addEventHandler("onclick",this.btn_allRight_onclick,this);
            this.btn_allLeft.addEventHandler("onclick",this.btn_allLeft_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.grd_list02.addEventHandler("oncellclick",this.grd_list01_oncellclick,this);
            this.cmb_authClsfCd.addEventHandler("onitemchanged",this.cmb_authClsfCd_onitemchanged,this);
            this.ds_authGrpMng.addEventHandler("cancolumnchange",this.ds_authGrpMng_cancolumnchange,this);
            this.ds_authGrpMng.addEventHandler("oncolumnchanged",this.ds_authGrpMng_oncolumnchanged,this);
        };
        this.loadIncludeScript("coMnuAuthGrpMng.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
