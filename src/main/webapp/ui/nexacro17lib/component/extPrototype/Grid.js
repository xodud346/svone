
var pForm  = nexacro.Form.prototype;

/***********************************************************************************************
 * 변수 선언 영역
************************************************************************************************/
pForm.fv_sClipboardSeparator = "	";
pForm.fv_nCellIndex = -1;
pForm.fv_aMarker = ["▲", "▼"];
pForm.fv_sMarkerType = "text";

/***********************************************************************************************
* grid 설정 최조 함수
************************************************************************************************/
/**
 * @class Grid에 기능 추가
 * @param {Object} obj	- 대상그리드
 * @return N/A
 * @example
 * this.gfn_setGrid(this.grdMain);	
*/
pForm.gfn_setGrid = function(oGrid)
{
	//Grid의 binddataset설정
	var oBindDs = oGrid.getBindDataset();
	
	// grid에 바인드된 Dataset이 없는 경우 return;
	if (this.gfn_isNull(oBindDs)) {
		return;
	} 
	
	oGrid.uOrgFormat = oGrid.getCurFormatString();
	
	oGrid.set_enableevent(false);
	oGrid.set_enableredraw(false);	
	oBindDs.set_enableevent(false); 

	var oApp =  nexacro.getApplication();
	
	this.gfn_userPropertyInit(oGrid);
	if(oGrid.uPersonalFlag == "true"){
		this.gfn_personalSearch(oGrid);
	}
	/*********************************************** 이벤트추가 START ***********************************************/	
	oGrid.addEventHandler("onheadclick", 	 this.gfn_grid_onheadclick, 	 this); 	//헤드클릭이벤트추가
	oGrid.addEventHandler("onrbuttondown", 	 this.gfn_grid_onrbuttondown, 	 this); 	//헤드 마우스 오른쪽 버튼 이벤트
	oGrid.addEventHandler("onkeyup"		, 	this.gfn_grid_onkeyup_copy_paste, this);	//그리드 복사,붙여넣기 함수 추가
	
	/*********************************************** 이벤트추가 END *************************************************/
	
	oGrid.set_enableevent(true);
	oGrid.set_enableredraw(true);	
	oBindDs.set_enableevent(true);
};	

pForm.gfn_userPropertyInit = function(oGrid){
	if(oGrid.uCellSizeType=="true"){
		oGrid.set_cellsizingtype("col");
	}
	
	if(oGrid.uRightMouse=="true"){
		this.gfn_makeGridPopupMenu(oGrid);
	}
};

/*********************************************** 그리드헤드클릭 이벤트 [Sort, Checkbox] START ***********************************************/
/**
 * @class  그리드헤드클릭 이벤트 [Sort, Checkbox]
 * @param {Object} oGrid - 대상그리드
 * @param {Evnet}  e	   - 헤드클릭이벤트
 * @return  N/A
 * @example
 * oGrid.addEventHandler("onheadclick", 	 this.gfn_grid_onheadclick, 	 this);
 */
pForm.gfn_grid_onheadclick = function(oGrid, e)
{
	var bMultiple = false;
	var sType = oGrid.getCellProperty("head", e.cell, "displaytype");
	if (sType == "checkboxcontrol"){
		//head display type이 checkbox일 경우 all/none check기능추가
		this._gfnHeadCheckSelectAll(oGrid, e);
	}else{
		//sort
		if(oGrid.uSortFlag == "true"){
			// Shift 키
			if ( e.shiftkey ) bMultiple = true;
			// Ctrl 키
			if ( e.ctrlkey ) bMultiple = true;
			
			if ( this.gfn_setSortStatus(oGrid, e, bMultiple)){
				this.gfn_setSort(oGrid);
			}
		} else if(oGrid.uServerSortFlag == "true"){
			this.gfn_setServerSort(oGrid, e);
		}
	}
};
/***********************************************  그리드헤드클릭 이벤트 [Sort, Checkbox] END ************************************************/

/****************************************************************************************************
 * 전체 check 함수
*****************************************************************************************************/
// 그리드헤드클릭이벤트 내부함수 (헤드클릭시 체크)
pForm._gfnHeadCheckSelectAll = function (oGrid, e)
{
	if(oGrid.readonly == true) return;
	
	var sType;
	var sChk;
	var sVal;
	var sChkVal;
	var oBindDs = oGrid.getBindDataset();
	var nHeadCell  = e.cell;
	var nBodyCell;

	if(oBindDs.getRowCount() < 1) {
		return;
	}
	
	// Head셋팅
	sVal = oGrid.getCellProperty("head", nHeadCell, "text");

	if (sVal == "1" ){
		oGrid.setCellProperty("head", nHeadCell, "text", "0");
		sChk="0";
	} else {
		oGrid.setCellProperty("head", nHeadCell, "text", "1");
		sChk="1";
	}
	
	if(oGrid.getCellCount("body") != oGrid.getCellCount("head")) {
		nBodyCell = parseInt(oGrid.getCellProperty("head", nHeadCell, "col"));
	} else {
		nBodyCell = e.cell;
	}
	sChkVal = oGrid.getCellProperty("body", nBodyCell, "text");
	sChkVal = sChkVal.toString().replace("bind:", "");
	
	// Body셋팅
	var aUnCheckRow="";
	var bCheckFlag = true;
	if(!this.gfn_isNull(oGrid.uUnCheckRow)){
		aUnCheckRow = oGrid.uUnCheckRow.split(",");
	}
	oBindDs.set_enableevent(false);
	for(var i=0 ; i< oBindDs.getRowCount() ; i++) {
		for(var j = 0 ; j < aUnCheckRow.length ; j++){
			if(i == aUnCheckRow[j]){
				bCheckFlag = false;
				break;
			}
		}
		if(bCheckFlag){
			oBindDs.setColumn(i, sChkVal, sChk);
		}
		bCheckFlag = true;
	}
	oBindDs.set_enableevent(true);
};
	
/****************************************************************************************************
 * 정렬 함수
*****************************************************************************************************/
/**
 * 정렬 상태를 지정한다. (실제 소팅 처리는 gfn_setSort 에서 담당한다.)
 * @param  : oGrid				- [Grid]	 대상 Grid Component
 * @param  : nHeadCellIndex		- [number]	 	headCellIndex head cell index
 * @param  : bMultiple			- [boolean] 	bMultiple 다중선택여부
 * @param  : nSortStatus		- [number] 		nSortStatus 정렬상태 강제 지정 (미지정시 현재 상태 반전)
 * @return : {boolean} 상태 변경 여부
 */
pForm.gfn_setSortStatus = function(oGrid, e, bMultiple, nSortStatus)
{
	var nHeadCellIndex = e.cell;
	// Cell별 정렬정보	
	if ( this.gfn_isNull(oGrid.aCellInfos) ){
		oGrid.aCellInfos = {};
	}
	
	// 정렬대상컬럼 (순서중요)
	if ( this.gfn_isNull(oGrid.aSortItems) ){
		oGrid.aSortItems = [];
	}
	
	this.fv_nHeadColIdx = nHeadCellIndex;
	
	//TODO
	var nHeadRowCnt = 0;
	for(var i=0;i<oGrid.getFormatRowCount();i++)
	{
		var sBand = oGrid.getFormatRowProperty(i,"band");
		if(sBand == "head")
		{
			nHeadRowCnt++;
		}
	}
	
	if( (e.subrow + oGrid.getCellProperty("head", nHeadCellIndex, "rowspan") ) != nHeadRowCnt )
	{
		return false;
	}
	
	var nBodyCellIndex = e.col; 
	
	var sColumnName 		= this.gfn_getBindColumnNameByIndex(oGrid, nBodyCellIndex);
	
	var sSortExceptCol 	= "," + this.gfn_nvl(oGrid.uSortExceptCol) + ",";	
	
	if ( 0 <= sSortExceptCol.indexOf(","+sColumnName+",") ) return;
	
	var oCellInfo, 
		sSortItem,
		aCellInfos = oGrid.aCellInfos,
		aSortItems = oGrid.aSortItems,
		nStatus;

	if ( this.gfn_isNull(sColumnName) ){
		return false;
	}  

	if ( this.gfn_isNull(bMultiple) ) bMultiple = false;

	if ( this.gfn_isNull(nSortStatus) ) nSortStatus = -1;

	oCellInfo = aCellInfos[sColumnName];
	
	if ( this.gfn_isNull(oCellInfo) ){
		var sHeadText = oGrid.getCellText(-1, nHeadCellIndex);
		oCellInfo = aCellInfos[sColumnName] = { index: nHeadCellIndex, status: 0, text: sHeadText };
	}	
	// set sort status
	if ( bMultiple ) {		
		nStatus = oCellInfo.status;
		if ( nSortStatus == -1 ) {
			if ( nStatus == 0 ) {
				oCellInfo.status = 1;
			} else if ( nStatus == 1 ) {
				oCellInfo.status = 2;
			} else if ( nStatus == 2 ) {
				oCellInfo.status = 1;
			}
		} else {
			oCellInfo.status = nSortStatus;
		}
	} else {
		for (var p in aCellInfos) {
			if ( !aCellInfos.hasOwnProperty(p) ) return;
			
			oCellInfo = aCellInfos[p];
			
			if ( oCellInfo.index == nHeadCellIndex ) {
				nStatus = oCellInfo.status;
				if ( nSortStatus == -1 ) {
					if ( nStatus == 0 ) {
						oCellInfo.status = 1;
					} else if ( nStatus == 1 ) {
						oCellInfo.status = 2;
					} else if ( nStatus == 2) {
						oCellInfo.status = 1;
					}
				} else {
					oCellInfo.status = nSortStatus;
				}
			} else {
				oCellInfo.status = 0;
			}
			
			if ( oCellInfo.status == 0 ) {
				for (var j=0, nLen2=aSortItems.length; j<nLen2; j++) {
					if ( aSortItems[j] !== sColumnName ) {
						aSortItems.splice(j, 1);
						break;
					}
				}
			}
		}
	}

	var bHasItem = false;
	for (var i=0, nLen=aSortItems.length; i<nLen; i++) 
	{
		if ( aSortItems[i] == sColumnName ) 
		{
			bHasItem = true;
			break;
		}
	}	
	if ( !bHasItem )
	{
		aSortItems.push(sColumnName);
	}
	return true;
};

//정렬 적용
pForm.gfn_setSort = function(oGrid)
{
	var oCellInfo, 
		sSortItem,
		aCellInfos = oGrid.aCellInfos,
		aSortItems = oGrid.aSortItems,
		sColumnName,
		nHeadCellIndex,
		nStatus,
		sSortString = "";
		
	if ((!this.gfn_isNull(oGrid.uGridNotSort)) && (oGrid.uGridNotSort == "true")) return;
	
	if (this.gfn_isNull(aCellInfos) || this.gfn_isNull(aSortItems) ) return;
	
	// keystring 조합
	for (var i=0, nLen=aSortItems.length; i<nLen; i++) 
	{
		sColumnName = aSortItems[i];
		nStatus = aCellInfos[sColumnName].status;		
		
		if ( nStatus > 0 ) 
		{
			sSortString += (nStatus == 1 ? "+" : "-") + sColumnName;			
		}
	}
	
	var nBodyIndex = oGrid.getBindCellIndex("body", sColumnName);
	
	if(this.fv_sSortFlag == "-" &&  nBodyIndex == this.fv_nColIdxVal){
		this.fv_sSortFlag="";		
		this.gfn_clearSort(oGrid, nBodyIndex);
		return;
	}
	var oDs = oGrid.getBindDataset();
	
	// keystring 확인
	var sCurKeyString = oDs.keystring;
	var sGroupKeyString = "";
	
	if ( sCurKeyString.length > 0 && sCurKeyString.indexOf(",") < 0 )
	{
		var nSortIndex = sCurKeyString.indexOf("S:");
		var nGroupIndex = sCurKeyString.indexOf("G:");

		if ( nSortIndex > -1 )
		{
			sGroupKeyString = "";
		}
		else
		{
			if ( nGroupIndex < 0 )
			{
				sGroupKeyString = "G:"+sCurKeyString;
			}
			else
			{
				sGroupKeyString = sCurKeyString;
			}
		}
	}
	else
	{
		var sTemps = sCurKeyString.split(",");
		var sTemp;
		for (var i=0,nLen=sTemps.length; i<nLen; i++)
		{
			sTemp = sTemps[i];
			if ( sTemp.length > 0 && sTemp.indexOf("S:") < 0 )
			{
				if ( sTemp.indexOf("G:") < 0 )
				{
					sGroupKeyString = "G:"+sTemp;
				}
				else
				{
					sGroupKeyString = sTemp;
				}
			}
		}
	}
	
	if ( sSortString.length > 0 )
	{
		var sSortKeyString = "S:"+sSortString;
		
		if ( sGroupKeyString.length > 0 )
		{
			oDs.set_keystring(sSortKeyString + "," + sGroupKeyString);
		}
		else
		{
			oDs.set_keystring(sSortKeyString);
		}
		
		oGrid.sortKeyString = sSortKeyString;
	} 
	else
	{	
		oDs.set_keystring(sGroupKeyString);
		
		oGrid.sortKeyString = "";
	}

	this.fv_sSortFlag = oDs.keystring.substr(2, 1);	
	this.fv_nColIdxVal = oGrid.getBindCellIndex("body", sColumnName);
	// 정렬표시
	var nIndex, sText, sMarker, style;
	for (var p in aCellInfos) 
	{
		if ( !aCellInfos.hasOwnProperty(p) ) return;
		oCellInfo = aCellInfos[p];
		nStatus = oCellInfo.status;
		nIndex = oCellInfo.index;
		sText = oCellInfo.text;		
		sMarker = this.gfn_decode(nStatus, 1, this.fv_aMarker[0], 2, this.fv_aMarker[1], "");
		if ( this.fv_sMarkerType == "text" )
		{
			oGrid.setCellProperty( "head", nIndex, "text", sText + sMarker);
		}
	}
};
	
pForm.gfn_setServerSort = function(oGrid, e){
	var sHeadText = oGrid.getCellText(-1, e.cell);
	sHeadText = sHeadText.replace(this.fv_aMarker[0],"");
	sHeadText = sHeadText.replace(this.fv_aMarker[1],"");
	
	var sColumnName = this.gfn_getBindColumnNameByIndex(oGrid, e.col);	
	
	//sortInfo 정보가 없을시 setting
	if(this.gfn_isNull(oGrid.uaSortInfo)){
		var sHeadText   = oGrid.getCellText(-1, e.cell);
		oSortInfo = {nHeadIndex: e.cell, status: "", text: sHeadText, bindCol : sColumnName};
		oGrid.uaSortInfo = oSortInfo;
	}
	
	//head 정렬 표시 초기화
	oGrid.setCellProperty( "head", oSortInfo.nHeadIndex, "text", oSortInfo.text);
	
	//같은column을 눌렀는지 확인 정렬값 세팅
	var nStatus = oSortInfo.status;
	if(oSortInfo.nHeadIndex == e.cell){
		if(this.gfn_isNull(nStatus)){
			nStatus = "ASC";
		} else if(nStatus == "ASC"){
			nStatus = "DESC";
		} else {
			sColumnName ="";
			nStatus = "";
		}
	} else {
		nStatus = "ASC";
	}
	
	//head 정렬 표시
	sMarker = this.gfn_decode(nStatus, "ASC", this.fv_aMarker[0], "DESC", this.fv_aMarker[1], "");
	oGrid.setCellProperty( "head", e.cell, "text", sHeadText + sMarker);

	oSortInfo.status = nStatus;
	oSortInfo.nHeadIndex = e.cell;
	oSortInfo.text = sHeadText;
	oSortInfo.bindCol = sColumnName;

	this.lookupFunc(oGrid.uSortCallback).call(oGrid.id);
}
/*주어진 head cell에 해당하는 정렬 상태를 제거한다.
 * @param  : oGrid				- [Grid]	 대상 Grid Component
 * @param  : headCellIndex		- [number]	 headCellIndex head cell index
 */
pForm.gfn_clearSort = function(oGrid, nBodyCellIndex) 
{
	//var nBodyCellIndex = this.gfn_getBodyCellIndex(oGrid, this.fv_HeadColIdx);
	
	if ( nBodyCellIndex < 0 ) return;
	
	var sColumnName = this.gfn_getBindColumnNameByIndex(oGrid, nBodyCellIndex),
	aCellInfos = oGrid.aCellInfos,
	aSortItems = oGrid.aSortItems;
	
	if ( this.gfn_isNull(aCellInfos) || this.gfn_isNull(aSortItems) ) return;
	
	if ( this.gfn_isNull(sColumnName) || this.gfn_isNull(aCellInfos[sColumnName]) ) return;

	// 정렬상태를 변경
	aCellInfos[sColumnName].status = 0;

	// 정렬실행
	this.gfn_setSort(oGrid);
	
	// 컬럼정보제거
	for (var i=0, nLen=aSortItems.length; i<nLen; i++) 
	{
		if ( aSortItems[i] == sColumnName ) 
		{
			aSortItems.splice(i, 1);
			break;
		}
	}	
	
	// Cell 정보제거
	delete aCellInfos[sColumnName];
};
/****************************************************************************************************
 * grid 개인화 함수 시작
*****************************************************************************************************/
pForm.gfn_gridPersonalInit = function(oPersonalDs){
	var nMnuSeq = this.gfn_getMnuSeq(this.gfn_getPageInfo("menuId"));
	var findRowExpr = new Array(nMnuSeq);
	var oGrid = null;
	var aComponent = this.components;
	for(var j = 0 ; j < oPersonalDs.getRowCount() ; j++){
		var sMnuSeq = oPersonalDs.getColumn(j,"MNU_SEQ");
		if(!nMnuSeq.isEqual(sMnuSeq))	continue;
		var sGridId = oPersonalDs.getColumn(j,"GRID_NM");
		for(var i = 0 ; i < aComponent.length ; i++){
			if(sGridId == aComponent[i].name){
				oGrid = aComponent[i];
				findRowExpr.push(oGrid.name);
				break;
			}
		}
	}
	
	if(!this.gfn_isNull(oGrid))
	{
		var nFindRow = oPersonalDs.findRowExpr("MNU_SEQ.toString() == $0 && GRID_NM == $1", 0, -1, findRowExpr);
		var sFormat = "";
		if(nFindRow < 0){
			this.gfn_gridDefaultSet(oGrid);
		} else {
			sFormat = oPersonalDs.getColumn(nFindRow,"GRID_FMT");
			if(this.gfn_isNull(sFormat)){
				if(!this.gfn_isNull(oGrid.uDefaultFormat)){
					this.gfn_gridDefaultSet(oGrid);
				}
			} else {
				oGrid.set_formats(sFormat);
			}
		}
	}
};

pForm.gfn_gridDefaultSet = function(oGrid){
	//개인화 format이 존재하지 않을 때
	var aFormat = oGrid.uDefaultFormat.split(",");
	var bColFlag = false;
	var sBindId = "";
	var bDisplayFlag = true;
	var sDisplayType = "";
	var sBand = "body";
	for(var i = oGrid.getCellCount("body")-1 ; i >= 0 ; i--){
		sBindId = oGrid.getCellProperty("body",i,"text").replace("bind:","");
		if(this.gfn_isNull(sBindId)){
			bDisplayFlag = false;
		}
		sDisplayType= oGrid.getCellPropertyValue(0,i,"displaytype");
		if(!this.gfn_isNull(sDisplayType)){
			if(sDisplayType.indexOf("checkbox") >= 0){
				bDisplayFlag = false;
			}
		}
		if(bDisplayFlag == true){
			for(var j = aFormat.length -1 ; j >= 0 ; j--){
				if(aFormat[j] == sBindId){
					bColFlag = true;
					break;
				}
			}
			if(bColFlag == false){
				sBand = oGrid.getFormatColProperty(i,"band");
				oGrid.deleteContentsCol(sBand,i);
			}
			bColFlag = false;
		}
	}
};

pForm.gfn_getMnuSeq = function(sMeunId){
	var oApp 		 = nexacro.getApplication();
	var nFindRow = oApp.gds_menu.findRow("MNU_LVL_SPR_CD",sMeunId);
	var sReturn = oApp.gds_menu.getColumn(nFindRow,"MNU_SEQ");
	return sReturn;
}
/****************************************************************************************************
 * grid 개인화 함수 끝
*****************************************************************************************************/
/****************************************************************************************************
 * 마우스 오른쪽 버튼 이벤트 함수 시작
*****************************************************************************************************/
/**
 * @class  마우스우클릭시 표현될 팝업메뉴생성
 * @param  {Object} oGrid	- 대상그리드
 * @return  N/A
 * @example
 * this._gfnGetHeadBodyIndex(this.grdMain, this.dsMain);	
 */
pForm.gfn_makeGridPopupMenu = function (oGrid)
{
	var oApp 		 = nexacro.getApplication();
	var oMenuDs 	 = oApp.gds_gridPopupMenu;
	var oParentForm  = oGrid.parent;
	
	var sPopupDsMenu = "ds_popupMenu_"+oGrid.name+"_"+this.name;
	var oPopupDs 	 = new Dataset(sPopupDsMenu);
	oParentForm.addChild(sPopupDsMenu, oPopupDs); 
	oPopupDs.copyData(oMenuDs);
	
	var sPopMenu = "popMenu_"+oGrid.name+"_"+this.name;
	var oPopMenu = new PopupMenu(sPopMenu, 0, 0, 100, 100);
	
	var oEnvLang = nexacro.getEnvironmentVariable("evLanguage");
	oParentForm.addChild(oPopMenu.name, oPopMenu);

	oPopMenu.set_innerdataset(oPopupDs);
	oPopMenu.set_checkboxcolumn("_CHK");
	oPopMenu.set_enablecolumn("MENU_ENABLE");
	oPopMenu.set_captioncolumn("MENU_NM");
	oPopMenu.set_idcolumn("MENU_ID");
	oPopMenu.set_levelcolumn("MENU_LVL");
 	oPopMenu.addEventHandler("onmenuclick", this.gfn_popupmenu_onmenuclick, oParentForm);
	oPopMenu.show();
	
	oPopMenu.set_itemheight(29);
	
	oPopMenu.grid = oGrid;
	oGrid.uOpopupMenu = oPopMenu;
};
/**
 * @class  마우스 우클릭 이벤트
 * @param  {Object} oGrid	- 대상그리드
 * @param  {Event}  e		- 우클릭이벤트 
 * @return  N/A
 * @example
 * this._gfnGetHeadBodyIndex(this.grdMain, this.dsMain);	
 */
pForm.gfn_grid_onrbuttondown = function (oGrid, e)
{

	if(e.row == -1){
		if(oGrid.uPersonalFlag == "true"){
			// 대상 그리드와 셀 정보를 추가
			oGrid.uOpopupMenu.grid = oGrid;
			oGrid.uOpopupMenu.cellindex = e.cell;
			oGrid.uOpopupMenu.rowindex = e.row;

			// trackPopupByComponent 이용 : 하단에서 위치 오류 발생, 패치 2018년 9월 예정
			var x = nexacro.toNumber(system.getCursorX()) - nexacro.toNumber(system.clientToScreenX(oGrid, 0));
			var y = nexacro.toNumber(system.getCursorY()) - nexacro.toNumber(system.clientToScreenY(oGrid, 0));
			
			// 스튜디오 사용시 팝업메뉴 위치 조정
			var sRunMode = nexacro.getEnvironmentVariable("evRunMode");
			if (sRunMode == "S") {
				y += 83;
			}	
			oGrid.uOpopupMenu.trackPopupByComponent(oGrid, x, y);
		}
	}
};

/**
 * @class  gfnCreatePopupMenu 내부함수로 팝업메뉴 클릭 시 발생하는 이벤트
 * @param {Object} oGrid	- 대상그리드
 * @param {Evnet}  e 		- 팝업메뉴클릭이벤트
 * @return N/A
 * @example
 * this.gfnPopupmenu_onmenuclick(this.grdMain, nexacro.MenuClickEventInfo);	
 */
pForm.gfn_popupmenu_onmenuclick = function (oMenu, e)
{
	var selectId   = e.id;
	var oGrid 	   = oMenu.grid;
	var nCellIndex = oMenu.cellindex;	
	var nRowIndex  = oMenu.rowindex;

	switch(selectId) {
		case "LOCK"://틀고정 열
			this.fv_CellIndex = nCellIndex;
			this.gfn_gridCellFix(oGrid, this.fv_CellIndex, nRowIndex);
			break;
		case "UNLOCK"://틀고정 열 해제
			this.gfn_gridCellUnFix(oGrid);
			break;
		case "COLUMN" : //개인화
			this.gfn_gridPersonalize(oGrid);
			break;
		default: break;
	}
};

pForm.gfn_gridPersonalize = function(oGrid){
	var oPopupDiv = this["pdiv_personal"];
	if(!this.gfn_isNull(oPopupDiv)){
		oPopupDiv = this.removeChild("pdiv_personal");
		oPopupDiv.destroy();
	}
	
	oPopupDiv = new PopupDiv();	
	oPopupDiv.init( "pdiv_personal", 0, 0, 200,400);
	this.addChild("pdiv_personal",oPopupDiv);
	oPopupDiv.uoGrid = oGrid;
	oPopupDiv.show();
	
	oPopupDiv.set_url("COMM::cmmGridPersonal.xfdl");
	var x = nexacro.toNumber(system.getCursorX()) - nexacro.toNumber(system.clientToScreenX(oGrid, 0));
	var y = nexacro.toNumber(system.getCursorY()) - nexacro.toNumber(system.clientToScreenY(oGrid, 0));
	oPopupDiv.trackPopupByComponent(oGrid, 0, oGrid.getRealRowSize(-1,-1,true));
}
/**
 * @class 그리드 우클릭 POPUPMENU 내부함수<br>
		  셀고정(colfix)
 * @param {Object} oGrid  - 대상그리드
 * @param {Number} nCellIdx - 셀고정 셀인덱스
 * @param {Number} nRowIdx  - 셀고정 로우 인덱스
 * @return N/A
 * @example
 * this._gfnGridcellFix(this.grdMain, 1, 2);	
 */
pForm.gfn_gridCellFix = function (oGrid, nCellIdx, nRowIdx)
{
	var nCol 	 = nexacro.toNumber(oGrid.getCellProperty("Head", nCellIdx, "col"));
	var nColSpan = nexacro.toNumber(oGrid.getCellProperty("Head", nCellIdx, "colspan"));
	var nRowSpan = nexacro.toNumber(oGrid.getCellProperty("Head", nCellIdx, "rowspan"));
	var nVal = oGrid.getCellpos
	var nMaxCol = 0;
	var i;
	var nRealCol;
	var nRealColSpan;
	var nRealCol_end;
	
	oGrid.set_enableredraw(false);
	
	oGrid.setFormatColProperty(0, "band", "body");	
	oGrid.setFormatColProperty(nCol, "band", "left");	
	oGrid.set_enableredraw(true);
};

/**
 * @class 그리드 우클릭 POPUPMENU 내부함수<br>
		  셀고정해제(colfree)
 * @param {Object} oGrid - 대상그리드
 * @return N/A
 * @example
 * this.gfn_gridCellUnFix(this.grdMain);	
 */
pForm.gfn_gridCellUnFix = function(oGrid) {
	for(i=0; i< oGrid.getFormatColCount(); i++) {		
		oGrid.setFormatColProperty(i, "band", "body");	
	}
		
	for (i=0; i<oGrid.getCellCount("Body"); i++) {
		oGrid.setCellProperty("Body", i, "border", "");
	}	
	
	this.gv_CellIndex = -1;
};

/****************************************************************************************************
 * 마우스 오른쪽 버튼 이벤트 함수 끝
*****************************************************************************************************/


/****************************************************************************************************
 * 기타 그리드 함수
*****************************************************************************************************/
/**
 * body cell index로 binding 된 컬럼명을 얻어온다.
 * @param  : oGrid		- [oGrid]	 대상 Grid Component
 * @param  : index		- [number]	 body cell index
 * @return : N/A
 * @example : 
 */
pForm.gfn_getBindColumnNameByIndex = function(oGrid, nIndex) 
{
	var sText = "";
	var sColumnid = "";
	var nSubCell = oGrid.getCellProperty("body", nIndex, "subcell");
	if ( nSubCell > 0 )
	{
		sText = oGrid.getSubCellProperty("body", nIndex, 0, "text");
	}
	else
	{
		sText = oGrid.getCellProperty("body", nIndex, "text");
	}
	
	if ( !this.gfn_isNull(sText) )
	{
		if ( sText.search(/^BIND\(/) > -1 ) 
		{	
			sColumnid = sText.replace(/^BIND\(/, "");
			sColumnid = sColumnid.substr(0, sColumnid.length-1);
		} 
		else if ( sText.search(/^bind:/) > -1 ) 
		{
			sColumnid = sText.replace(/^bind:/, "");
		}
	}
	
	return sColumnid;
};

/***********************************************  기타 그리드 함수 END ************************************************/

/****************************************************************************************************
 * 그리드 트리 함수
*****************************************************************************************************/

/*********************************************************************************************
★ 설명
Grid로 Treeview처리 시 0 ~ (nCurRow-1)의 Record중 최상위 부모 Record를 찾는다.
★ parameter
1. grd: 그리드
2. obj:Dataset : Dataset Object 
3. sLevelCol   : Level값이 들어있는 Column명 
4. nCurrow     : 현재 Record 
★ return
- 성공 = Start Record
- 실패 = -1
*********************************************************************************************/
pForm.treeGetParentStart = function(grd, obj, sLevelCol, nCurRow)
{
	var i, nLevel, nChkLevel, nStartRow = -1;
	
	if( this.gfn_isNull(obj) || this.gfn_isNull(sLevelCol) || this.gfn_isNull(nCurRow)){
		return -1;
	}
	
	//현재 ROW 위에서부터 레벨 1인 데이터를 찾아서 GRID ROW를 추출
	for( i = (nCurRow-1) ; i >= 0 ; i-- )
	{
		nLevel = parseInt(obj.getColumn(i, sLevelCol));
		
		if( nLevel == 1 )
		{
			var grdRow = grd.getTreeRow(i);
			nStartRow = grdRow;
			break;
		}
	}
	return nStartRow;
};

/********************************************************************************************
★ 설명
Grid로 Treeview처리 시 nCurRow+1 ~ 끝 Record중
nCurRow의 Level이하의 Child Level이 끝나는 Record를 찾는다.
즉, 자식이 끝나는 Record를 찾는다.
★ parameter
1. obj:Dataset : Dataset Object ( 예 : Dataset00 )
2. sLevelCol   : Level값이 들어있는 Column명 ( 예 : "level" )    
3. nCurrow     : 현재 Record ( 예 : 10 )
★ return
- 성공 = End Record
- 실패 = -1
*********************************************************************************************/
pForm.treeGetChildEnd = function(obj, sLevelCol, nCurRow)
{
	var i, nLevel, nChkLevel, nEndRow = (obj.rowcount - 1);
	
	if( this.gfn_isNull(obj) || this.gfn_isNull(sLevelCol) || this.gfn_isNull(nCurRow)){
		return -1;
	}
	
	nChkLevel = parseInt(obj.getColumn(nCurRow, sLevelCol));
	
	for( i = (nCurRow+1) ; i < obj.rowcount ; i++ )
	{
		nLevel = parseInt(obj.getColumn(i, sLevelCol));
		if( nLevel <= nChkLevel )
		{
			nEndRow = i-1;
			break;
		}
	}
	return nEndRow;
};

/***********************************************  그리드 트리 함수 END ************************************************/

/***********************************************  그리드 복사/붙여넣기 함수 START ************************************************/
/****************************************************************************************************
 *복사/붙여넣기 함수
*****************************************************************************************************/
// 그리드 onkeyup 이벤트 핸들러 (복사 붙여넣기용)
pForm.gfn_grid_onkeyup_copy_paste = function(oGrid, e)
{
	var sBrowser = system.navigatorname;
	if (e.ctrlkey) {
		if(e.keycode == 67){
			//copy
			if( sBrowser == "nexacro" || sBrowser == "IE"){
				this.gfn_gridCopyEventForRuntime(oGrid, e);
			}else {
				this.gfn_gridCopyEventForChrome(oGrid, e);
			}
		}else if(e.keycode == 86){
			//paste
			this.gfn_gridPasteEvent(oGrid, e);
		}
	}
};

/**
 * @class copy event(nexacro, ie)
 * @param {Object} obj- 대상그리드
 * @param {Event}  e - key down event
 * @return N/A
 * @example
 * this.gfn_gridCopyEventForRuntime(obj, e);	
*/
pForm.gfn_gridCopyEventForRuntime = function (obj, e) {
	var startrow = nexacro.toNumber(obj.selectstartrow);
	if( startrow == -9) {
		return;
	}

	var endrow   = nexacro.toNumber(obj.selectendrow);
	if( endrow == -9) {
		return;
	}
	
	var startcol = 0;
	var endcol = 0;
	
	if( obj.selecttype == "row" || obj.selecttype == "multirow"){
		startcol = 0;
		endcol = obj.getCellCount("body")-1;
	}else{
		startcol = nexacro.toNumber(obj.selectstartcol);
		endcol   = nexacro.toNumber(obj.selectendcol);
	}
	
	var colSeperator = "\t";
	var copyData = "";
	var checkIndex = {};
	
	for (var i = startrow; i <= endrow; i++) {
		for (var j = startcol; j <= endcol; j++) {
			var value = obj.getCellValue(i,j);
			if(!this.gfn_isNull(value)) {
				if (j < endcol) {
					copyData += obj.getCellValue(i,j) + colSeperator;
				} else {
					copyData += obj.getCellValue(i,j);
				}
			}
		}
		if (i < obj.selectendrow) {
				copyData += "\r\n";
		}
	}

	copyData += "\r\n";
	//system.clearClipboard();
	system.setClipboard("CF_TEXT",copyData);


	var areaInfo = {"startrow": startrow, "startcol": startcol, "endrow": endrow, "endcol": endcol};
};

/**
 * @class paste데이터생성
 * @param {String} browser - 브라우저
 * @return paste데이터 
 * @example
 * this._gfn_girdGetPasteData("nexacro");	
*/
pForm._gfn_girdGetPasteData = function (browser)
{
	var copyData = "";
	if( browser == "nexacro" || browser == "IE"){
		copyData = system.getClipboard("CF_TEXT");
		copyData = new String(copyData);
	}else{
		var ta = this.tragetGrid["ta"];

		if(!ta) return;
		
		copyData = ta.value;
		document.body.removeChild(ta);
		
		this.tragetGrid["ta"] = undefined;		
	}
	return copyData;
	
};

/**
 * @class paste event
 * @param {Object} obj- 대상그리드
 * @param {Event}  e - key down event
 * @return N/A
 * @example
 * this._gfnGridPasteEvent(obj, e);	
*/
pForm.gfn_gridPasteEvent = function (obj, e)
{
	var browser = system.navigatorname;
	var copyData = this._gfn_girdGetPasteData(browser);
		
	if( this.gfn_isNull(copyData)){
		var copyData ="";
		var ta = this._createTextarea("");
		
		nexacro._OnceCallbackTimer.callonce(this, function() {
		
			var colSeperator = "\t";
			var rowData ="";
			if( browser == "nexacro" || browser =="IE"){
				rowData = copyData.split("\r\n");
				if(rowDataCount < 1) {
					e.stopPropagation();
					return;
				}
			}else{
				copyData = ta.value;
				rowData = copyData.split(/[\n\f\r]/); 
			}
			var rowDataCount = rowData.length - 1;					
			
			obj.set_enableevent(false);
			obj.set_enableredraw(false); 

			var datasetName = obj.binddataset;
			var ds = obj.getBindDataset();

			ds.set_enableevent(false); 

			var grdCellCount = obj.getCellCount("body");
			var rowCount = ds.getRowCount();
			
			var startrow = nexacro.toNumber(obj.selectstartrow);
			if( startrow == -9) return;

			var endrow   = nexacro.toNumber(obj.selectendrow);
			if( endrow == -9) return;
			
			var startcol = 0;
			var endcol = 0;
			
			if( obj.selecttype == "row" || obj.selecttype == "multirow"){
				startcol = 0;
				endcol = obj.getCellCount("body")-1;
			}else{
				startcol = nexacro.toNumber(obj.selectstartcol);
				endcol   = nexacro.toNumber(obj.selectendcol);
			}

			var currRow = startrow;
			var cellIndex = startcol;
			var maxColumnCount = 0;
			var checkIndex = {};	

			for (var i = 0; i < rowDataCount; i++)
			{
				if(rowCount <= currRow)
				{
					ds.addRow();
				}

				var columnData = rowData[i].split(colSeperator);
				var columnLoopCount = cellIndex + columnData.length;

				if(columnLoopCount > grdCellCount) {
					columnLoopCount = grdCellCount;
				}

				if(maxColumnCount < columnLoopCount) {
					maxColumnCount = columnLoopCount;
				}

				var k = 0;
				for(var j = cellIndex; j < columnLoopCount; j++) 
				{
					var colTemp = obj.getCellProperty("body", j, "text");
					var colid;
					if( this.gfn_isNull(colTemp) )
					{
						colid = obj.getCellProperty("body", j, "text");
					}
					else
					{
						colid = obj.getCellProperty("body", j, "text").substr(5);
					}
					
					var tempValue = columnData[k];
					if(!this.gfn_isNull(tempValue))
					{
						ds.setColumn(currRow, colid, tempValue);
					}
					k++;
				}
				currRow++;
			}

			ds.rowposition = currRow;	

			endrow = endrow + rowDataCount - 1;
			endcol = maxColumnCount - 1;
			
			//system.clearClipboard();

			obj.set_enableredraw(true);
			obj.set_enableevent(true);
			ds.set_enableevent(true); 

			obj.selectArea(startrow, startcol, endrow, endcol);
			
			var areaInfo = {"startrow": startrow, "startcol": startcol, "endrow": endrow, "endcol": endcol};
			e.stopPropagation();				
			
		}, 100);		
		
	
	}else{
	
		var colSeperator = "\t";
		var rowData ="";
		if( browser == "nexacro" || browser =="IE"){
			rowData = copyData.split("\r\n");
			if(rowDataCount < 1) {
				e.stopPropagation();
				return;
			}
		}else{
			rowData = copyData.split(/[\n\f\r]/); 
		}
		var rowDataCount = rowData.length - 1;

				
		
		obj.set_enableevent(false);
		obj.set_enableredraw(false); 

		var datasetName = obj.binddataset;
		var ds = obj.getBindDataset();

		ds.set_enableevent(false); 

		var grdCellCount = obj.getCellCount("body");
		var rowCount = ds.getRowCount();
		
		var startrow = nexacro.toNumber(obj.selectstartrow);
		if( startrow == -9) return;

		var endrow   = nexacro.toNumber(obj.selectendrow);
		if( endrow == -9) return;
		
		var startcol = 0;
		var endcol = 0;
		
		if( obj.selecttype == "row" || obj.selecttype == "multirow"){
			startcol = 0;
			endcol = obj.getCellCount("body")-1;
		}else{
			startcol = nexacro.toNumber(obj.selectstartcol);
			endcol   = nexacro.toNumber(obj.selectendcol);
		}

		var currRow = startrow;
		var cellIndex = startcol;
		var maxColumnCount = 0;
		var checkIndex = {};	

		for (var i = 0; i < rowDataCount; i++)
		{
			if(rowCount <= currRow)
			{
				ds.addRow();
			}

			var columnData = rowData[i].split(colSeperator);
			var columnLoopCount = cellIndex + columnData.length;

			if(columnLoopCount > grdCellCount) {
				columnLoopCount = grdCellCount;
			}

			if(maxColumnCount < columnLoopCount) {
				maxColumnCount = columnLoopCount;
			}

			var k = 0;
			for(var j = cellIndex; j < columnLoopCount; j++) 
			{
				var colTemp = obj.getCellProperty("body", j, "text");
				var colid;
				if( this.gfn_isNull(colTemp) )
				{
					colid = obj.getCellProperty("body", j, "text");
				}
				else
				{
					colid = obj.getCellProperty("body", j, "text").substr(5);
				}
				
				var tempValue = columnData[k];
				if(!this.gfn_isNull(tempValue))
				{
					ds.setColumn(currRow, colid, tempValue);
				}
				k++;
			}
			currRow++;
		}

		ds.rowposition = currRow;	

		endrow = endrow + rowDataCount - 1;
		endcol = maxColumnCount - 1;
		
		//system.clearClipboard();

		obj.set_enableredraw(true);
		obj.set_enableevent(true);
		ds.set_enableevent(true); 

		obj.selectArea(startrow, startcol, endrow, endcol);
		
		var areaInfo = {"startrow": startrow, "startcol": startcol, "endrow": endrow, "endcol": endcol};
		e.stopPropagation();	
	}	
};

/**
 * @class copy event(chrome)
 * @param {Object} obj- 대상그리드
 * @param {Event}  e - key down event
 * @return N/A
 * @example
 * this._gfnGridCopyEventForChrome(obj, e);	
*/
pForm.gfn_gridCopyEventForChrome = function (obj, e)
{
	var startrow = nexacro.toNumber(obj.selectstartrow);
	if( startrow == -9) return;

	var endrow   = nexacro.toNumber(obj.selectendrow);
	if( endrow == -9) return;
	
	var startcol = 0;
	var endcol = 0;
	
	if( obj.selecttype == "row" || obj.selecttype == "multirow"){
		startcol = 0;
		endcol = obj.getCellCount("body")-1;
	}else{
		startcol = nexacro.toNumber(obj.selectstartcol);
		endcol   = nexacro.toNumber(obj.selectendcol);
	}

	var colSeperator = "\t";
	var copyData = "";
	
	for (var i = startrow; i <= endrow; i++) {
		for (var j = startcol; j <= endcol; j++) {
			var value = obj.getCellValue(i,j);
			if(!this.gfn_isNull(value)) {
				if (j < endcol) {
					copyData += obj.getCellValue(i,j) + colSeperator;
				} else {
					copyData += obj.getCellValue(i,j);
				}
			}
		}
		if (i < obj.selectendrow) {
				copyData += "\r\n";
		}
	}

	copyData += "\r\n";
	
	var ta = this._createTextarea(copyData);
	this.tragetGrid = obj;
	this.tragetGrid["ta"] = ta;
	var areaInfo = {"startrow": startrow, "startcol": startcol, "endrow": endrow, "endcol": endcol};
	e.stopPropagation();
};

/**
 * @class cell copy and paste (크롬용 텍스트에어리어생성)
 * @param {String} innerText- value
 * @return{Object} 텍스트에어리어 오브젝트
 * @example
 * this._createTextarea("꼬부기");	
*/
pForm._createTextarea = function(innerText)
{
	var ta = document.createElement('textarea');
	ta.id = "textAreabyCopyAndPaste";
	ta.style.position = 'absolute';
	ta.style.left = '-1000px';
	ta.style.top = document.body.scrollTop + 'px';
	ta.value = innerText;
	
	document.body.appendChild(ta);
	ta.select();
	document.execCommand("copy"); 
	return ta;
};

/***********************************************  복사/붙여넣기 함수 END ************************************************/
