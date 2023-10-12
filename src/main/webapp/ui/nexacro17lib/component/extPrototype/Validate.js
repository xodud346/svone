var pForm  = nexacro.Form.prototype;
/*
 ● gfn_isDsUpdate        	: Dataset이 Insert/Modify/Delete 되었는지 체크
 ● gfn_isDsUpdateForDel	: 삭제처리시 Dataset이 Insert/Modify/Delete 되었는지 체크
 ● gfn_isDsRowUpdate      	: Dataset의 지정 row가 변경 되었는지 체크
 ● gfn_isUniqueInDs       	: 주어진 값이 데이터셋에서 유일한 값인지 여부 체크 
 ● gfn_isUniqueInGrd      	: 주어진 값이 Grid의 데이터셋에서 유일한 값인지 여부 체크
 ● gfn_isNullInGrd			: 그리드 필수값 채크 함수
*/
/**
 * Dataset이 Insert/Modify/Delete 되었는지 체크
 * arg[0] : 채크 대상 데이터셋
 */
pForm.gfn_isDsUpdate = function (oDs) 
{
    var sColInfo, sColId;
    var nPos, nStart, nColCnt;    
    
	if (oDs.getDeletedRowCount() > 0 || oDs.findRowExpr("dataset.getRowType(rowidx)==2||dataset.getRowType(rowidx)==8") > -1) {
		return true;
	}
	
	var sExceptColCsv = oDs.updateCheckExceptCol;
	
    if ( this.gfn_isNull(sExceptColCsv) ) {
		sExceptColCsv = "CHK";
    }
    
	var aCol = sExceptColCsv.split(",");
	
	for (var i=0; i<aCol.length; ++i) {
		aCol[i] = nexacro.trim(aCol[i]);
		sColInfo = oDs.colinfos[aCol[i]];
	}	

	nColCnt = oDs.getColCount();
	for (var i=0; i<oDs.rowcount; ++i) {
		if ( oDs.getRowType(i) != Dataset.ROWTYPE_UPDATE ) continue;
		for (var j=0; j<nColCnt; ++j) {		
			sColId = oDs.getColID(j);
			if ( oDs.getColumn(i, sColId) == oDs.getOrgColumn(i, sColId) ) continue;			
			if (aCol.indexOf(sColId) < 0) return true;
		}
	}
	
	return false;
};

/**
 * 삭제처리시 Dataset이 Insert/Modify/Delete 되었는지 체크
 * arg[0] : 채크 대상 데이터셋
 */
this.gfn_isDsUpdateForDel = function (oDs) 
{
    var sColInfo, sColId;
    var nPos, nStart, nColCnt;    
    
	if (oDs.getDeletedRowCount() > 0 || oDs.findRowExpr("CHK=='0' && dataset.getRowType(rowidx)==2") > -1) {
		
		return true;
	}

	nColCnt = oDs.getColCount();
	for (var i=0; i<oDs.rowcount; ++i) {
		if ( oDs.getRowType(i) != Dataset.ROWTYPE_UPDATE ) continue;
		if ("1" == oDs.getColumn(i, "CHK")) continue;
		for (var j=0; j<nColCnt; ++j) {		
			sColId = oDs.getColID(j);
			if ( oDs.getColumn(i, sColId) == oDs.getOrgColumn(i, sColId) ) continue;
			return true;
		}
	}
	
	return false;
};

/**
 * Dataset의 지정 row가 변경 되었는지 체크
 * arg[0] : 채크 대상 데이터셋
 * arg[1] : 채크 대상 Row
 * arg[2] : 채크 제외할 컬럼 , 로 구분
 */
pForm.gfn_isDsRowUpdate = function (oDs, nRow, sExceptColCsv) 
{
	var aCol = sExceptColCsv.split(",");
	for (var i=0; i<aCol.length; i++) {
		aCol[i] = nexacro.trim(aCol[i]);
	}	
	var nColCnt = oDs.getColCount();
	var sColId = "";
	for (var j=0; j<nColCnt; ++j) {		
		sColId = oDs.getColID(j);
		if (oDs.getColumn(nRow, sColId) == oDs.getOrgColumn(nRow, sColId)) continue;			
		if (aCol.indexOf(sColId) < 0) return true;
	}
	
	return false;
}

/**
 * 주어진 값이 데이터셋에서 유일한 값인지 여부 체크 
 * arg[0] : 채크 대상 데이터셋
 * arg[1] : 채크 대상 컬럼
 * arg[2] : 채크 대상 값
 * 1,2 이후 컬럼으로 컬럼/값 컬럼/값 형태로 다중 채크 가능
 */
pForm.gfn_isUniqueInDs = function(oDs, sColNm, sColValue) 
{
	var sColId, sVal, nTrueCnt, nDupCnt;
	var sColInfo;
	var sCond;
	var aColId = [];
	var aColVal = [];
	var aColType = [];	

	if ( arguments.length < 3 ) {
		alert("함수 호출 오류");
		return false;
	}

	for (var i=1; i<arguments.length; i=i+2) {
		sColId = arguments[i];
		sVal = arguments[i+1];
		sColInfo = oDs.getColumnInfo(sColId);
		aColVal.push(sVal);
		aColType.push(sColInfo.type);
		aColId.push(sColId);
	}
	
	dupCnt = 0;
	for (var i=0; i<oDs.rowcount; ++i) 
	{
		nTrueCnt = 0;
		for (var j=0; j<aColId.length; ++j) 
		{
		    if ((!this.gfn_isNull(aColVal[j]))) {
				if ( "Int" == sColInfo.type || "Float" == sColInfo.type || "BigDecimal" == sColInfo.type ) {
					if ( aColVal[j] == oDs.getColumn(i, aColId[j]) ) {
						nTrueCnt++;
					}
				} 
				else {
				     
					if (((!this.gfn_isNull(aColVal[j])) && (!this.gfn_isNull(oDs.getColumn(i, aColId[j])))) &&
					    (aColVal[j].toUpperCase() == oDs.getColumn(i, aColId[j]).toUpperCase())) {
						nTrueCnt++;
					}
				}
			}
		}
		
		if ( nTrueCnt >= aColId.length ) {
			dupCnt++;
			if (dupCnt > 1) {
				return false;
			}
		}
	}
	
	return true;
};

/**
 * 주어진 값이 그리드의 데이터셋에서 유일한 값인지 여부 체크
 * arg[0] : 채크 대상 그리드
 * arg[1] : 메세지 사용 컬럼명
 * arg[2] : 채크 대상 컬럼
 * arg[3] : 채크 대상 값
 * 2,3 이후 컬럼으로 컬럼/값 컬럼/값 형태로 다중 채크 가능
 */
pForm.gfn_isUniqueInGrd = function(oGrid, sLabelText) {
	
	var aColId = [], aCellIndex = [];
	var nPos;
	var sColId, sVal;
	var sColInfo;
	var aCond = new Array();
	var nRowCnt = 0;
	var sCond;
	var oDs = oGrid.getBindDataset();	

	if ( arguments.length < 4 ) {
		alert("함수 호출 오류");
		return false;
	}
	
	for (var i=2; i<arguments.length; i=i+2) {
	    sVal = arguments[i+1];
	    if (this.gfn_isNull(sVal)) continue;
		sColId = arguments[i];
		aColId.push(sColId);
		
		sColInfo = oDs.getColumnInfo(sColId);
		if ( "Int" == sColInfo.type || "Float" == sColInfo.type || "BigDecimal" == sColInfo.type ) {
			aCond.push(sColId + " == " + sVal + "");
		} else {
			aCond.push(sColId + " == '" + sVal + "'");
		}
	}

	sCond = aCond.join(" && ");		
	nRowCnt = oDs.getCaseCount(sCond);	
	
	if ( nRowCnt < 2 ) {
		return true;
	}
	
	this.gfn_msgAlert("MSG0000025", [sLabelText]);
		
	var aCmp = this.components;			
	for (var i=0; i<aCmp.length; ++i) 
	{
		if (aCmp[i] instanceof Tab) 
		{
			var aPage = aCmp[i].tabpages;
			for( var j=0; j<aPage.length; j++)
			{
				var sTabpageId = aPage[j].id;
				var sGridName = this.gfn_componentFullPath(oGrid, "");
				if(sGridName.indexOf(sTabpageId) >= 0)
				{
					aCmp[i].setFocus();
					aCmp[i].set_tabindex(j);
					oGrid.setFocus();
					break;
				}
			}
		}
	}	
	
	nPos = oDs.findRowExpr(sCond);
	var nBodyCellIdx = -1;
	var sBindColId = "";
	var nFocusCellIdx = -1;
	if ( nPos >= 0 ) {
		nPos = oDs.findRowExpr(sCond, nPos+1);
		nFocusCellIdx = oGrid.getBindCellIndex("body", aColId[aColId.length-1]);
		if ( nFocusCellIdx >= 0 ) {
			oGrid.setCellPos(nFocusCellIdx);
			oDs.set_rowposition(nPos);
			oGrid.showEditor(); 		
		}
	}
	return false;
};

/**
 * 그리드 필수값 채크 함수
 */
pForm.gfn_isNullInGrd = function(oGrid, sLabelText, sColumn, nRow, sMsgCd) {
	
	var oDs = oGrid.getBindDataset();	

	if ( arguments.length < 4 ) {
		alert("함수 호출 오류");
		return false;
	}
	
	if (this.gfn_isNull(oDs.getColumn(nRow, sColumn))) {
	    
	    if (this.gfn_isNull(sMsgCd)) 
	    {	    
			this.gfn_msgAlert("MSG0000023", [sLabelText]);
		} else {	
			this.gfn_msgAlert(sMsgCd, [sLabelText]);
		}
		
		var aCmp = this.components;			
		for (var i=0; i<aCmp.length; ++i) 
		{
			if (aCmp[i] instanceof Tab) 
			{
				var aPage = aCmp[i].tabpages;
				for( var j=0; j<aPage.length; j++)
				{
					var sTabpageId = aPage[j].id;
					var sGridName = this.gfn_componentFullPath(oGrid, "");
					if(sGridName.indexOf(sTabpageId) >= 0)
					{
						aCmp[i].setFocus();
						aCmp[i].set_tabindex(j);
						oGrid.setFocus();
						break;
					}
				}
			}
		}		
		
	    var nIdxColumn = oGrid.getBindCellIndex("body",sColumn);
	    if (nIdxColumn != -1) {
			oGrid.setFocus();
			oDs.set_rowposition(nRow);
			oGrid.setCellPos(nIdxColumn);
			oGrid.showEditor(true);
		}	
		return false;
	}
	
	return true;
};