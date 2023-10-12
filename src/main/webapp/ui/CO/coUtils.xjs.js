//XJS=coUtils.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {


        /***********************************************************/
        /* 프 로 그 램 : coUtils
        /* 작 성 일 자 : 2022/02/14
        /* 작  성   자 : 이성민
        /* 설       명 : 오브젝트 ID와 데이터셋의 ID가 다를 경우 데이터셋 필수 여부를 체크한다. 테스트용임.
        /***********************************************************/
        this.fn_validationTest = function(divObj, objIds, dataSet) {
        	//오브젝트 별 바인드된 데이터셋을 내장함수로 가져오는게 가능하나.. 루프가 너무 많아질듯?
        	for( var i = 0; i < dataSet.rowcount; i++ ) {
        		for( var j = 0; j < this.binds.length; j++ ) {	//this.binds -> 바인딩 된 정보를 가져옴.

        			if( this.binds[j]._comp == null ) continue;

        			var bindObjId = this.binds[j]._comp.id; 	// 바인드된 아이템의 ID
        			var bindDataId = this.binds[j].columnid;	// 바인드된 데이터셋의 id
        			var type = this.binds[j]._comp.valueOf();	// 오브젝트 타입.

        			for( var idx in objIds ) {

        				var id = objIds[idx].id;
        				var name = objIds[idx].name;

        				if( bindObjId == id ) {
        					if( type == "[object CheckBox]") {
        						// do somthing..
        					} else {	// 그외는 값 가져와지는듯.
        						if( this.gfn_isNull(this.gfn_trim(dataSet.getColumn(i, bindDataId))) ) {
        							alert( name + "를(을) 입력해 주세요.");

        							if( type == "[object Combo]" ) {
        								divObj.form[id].dropdown();
        							} else {
        								divObj.form[id].setFocus();
        							}
        							return false;
        						}
        					}
        				}
        			}

        		}
        	}
        }

        /************************************************************************
         *  폼 필수값 체크
         *  obj : div 객체
         *  objIds : 필수값 체크할 id, name (  [{"name" : "분류코드", "id" : "COM_CLSF_CD"}] ) -> 데이터셋의 ID와도 맞춰야 함.
         *  dataset : 검증할 데이터셋
         ************************************************************************/
        this.fn_validationForm = function(obj, objIds, dataset) {
        	var object = obj.form.all;

        	for( var k = 0; k < dataset.rowcount; k++ ) {
        		for( var i = 0; i < object.length; i++ ){
        			var stype = object[i].valueOf();

        			for( var idx in objIds ) {
        				var id = objIds[idx].id;
        				var name = objIds[idx].name;

        				if( object[i].id == id ) {
        					if( stype != "[object CheckBox]" ) {
        						var value = this.gfn_trim(dataset.getColumn(k, id));
        						//var originValue = dataset.getOrgColumn(dataset.rowposition, id);

        						//console.log( id + "/" + name );
        						//console.log(dataset);
        						//console.log(dataset.getColumn(k, id));

        						if( this.gfn_isNull(value) ) {
        							alert( name + this.gfn_getMessage("COMS000010"));

        							if( stype == "[object Combo]" ) {
        								obj.form[id].dropdown();
        							} else {
        								obj.form[id].setFocus();
        							}

        							dataset.set_rowposition(k);
        							return false;
        						}
        					}
        				}
        			}
        		}
        	}
        	return true;
        }


        /************************************************************************
         * 그리드 필수값 체크
         * grid : 그리드 객체
         * 필수값 체크할 id, name (  [{"name" : "분류코드", "id" : "COM_CLSF_CD"}] ) -> 데이터셋의 ID와도 맞춰야 함.
         * dataset : 검증할 데이터셋
         ************************************************************************/
        this.fn_validationGrid = function(grid, objIds, dataset) {
        	if( dataset.rowcount <= 0 ) {
        		//alert("입력된 데이터가 없습니다.");
        		return true;
        	} else {
        		for( var k = 0; k < dataset.rowcount; k++ ) {
        			for( var idx in objIds ) {
        				var id = objIds[idx].id;
        				var name = objIds[idx].name;

        				if( dataset.getRowType(dataset.rowposition) != 0 ) {
        					if( this.gfn_isNull(this.gfn_trim(dataset.getColumn(k, id))) ) {
        						var cellIdx = grid.getBindCellIndex("body", id);

        						alert( name + this.gfn_getMessage("COMS000010"));

        						dataset.setColumn(k, id, "");
        						dataset.set_rowposition(k);
        						grid.setCellPos(cellIdx, k);
        						grid.showEditor(true);

        						/*
        						if( grid.getCellProperty("body", cellIdx, "displaytype") == "combotext" ) {
        							grid.dropdownCombo();
        						}
        						*/

        						return false;
        					}
        				}
        			}
        		}
        	}
        	return true;
        }


        /************************************************************************
         * 데이터셋 변경여부 체크
         * dataset : 데이터 셋
         ************************************************************************/
        this.fn_dataCheck = function(dataset) {
        	/*
        	getRowType = 2 : 데이터셋 추가/수정
        	*/


        	for(var i=0; i < dataset.rowcount; i++){
        		var sRowType = dataset.getRowType(i);

        		if( sRowType == 2 || sRowType == 4 ){
        			//if( dataset._rawRecords[i]._orgidx == undefined ) return false;
        			return true;
        		}
        	}

        	// 삭제된 데이터 셋
        	if(dataset.getDeletedRowCount() > 0){
        		return true;
        	}

        	return false;
        }


        /***********************************************************/
        /* 프 로 그 램 : fn_dataChangeCheck
        /* 작 성 일 자 : 2022/02/09
        /* 작  성   자 : lee
        /* 설       명 : 변경된 데이터 있는지 확인. : 체크박스 체크 시 로우타입이 바뀜...
        /***********************************************************/
        this.fn_dataChangeCheck = function(dataset){
        	var dataChk = false;
        	var arrayIds = dataset.colinfos._idArray;

        	if( dataset.rowcount <= 0 ) {
        		dataChk = false;
        	} else {
        		for(var i = 0; i < dataset.rowcount; i++){
        			var sRowType = dataset.getRowType(i);

        			if( sRowType == 2 || sRowType == 4 ){

        				var orgIdx = dataset._rawRecords[i]._orgidx;
        				for( var idx in arrayIds ){
        					var id = arrayIds[idx];
        					var value = dataset.getColumn(i, id);
        					var originValue = dataset.getOrgColumn(i, id);

        					// 값이 없을 시 undefined가 넘어옴.
        					if( originValue == undefined ) originValue = "";

        					//orgIdx 값이 없는 경우는 신규임.
        					if( orgIdx == undefined ) {
        						dataChk = true;
        					} else if( value != undefined ) {	// 존재할때
        						if( id.indexOf("CHK") == -1 && (value.toString() != originValue.toString()) ) {	// 체크박스 제외 및 값 비교
        							dataChk = true;
        						}
        					}
        				}
        			}
        		}
        	}

        	// 삭제된 로우가 존재하는가?
        	if(dataset.getDeletedRowCount() > 0){
        		dataChk = true;
        	}

        	return dataChk;
        }

        //기간 설정
        this.fn_setFromToDate = function(dateValueNm, fromDateNm, endDateNm) {

        	var term = dateValueNm.value;
        	var objDate = new Date();
        	var sToday = objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0');

        	/*
        	1	1일
        	2	1주일
        	3	2주일
        	4	1개월
        	5	3개월
        	6	6개월
        	7	1년
        	*/
        	if( term == undefined ) term = "2";

        	objDate.setDate(objDate.getDate()+1);

        	if( term == "1" ) {
        		objDate.setDate(objDate.getDate() -1);
        	} else if( term == "2" ) {
        		objDate.setDate(objDate.getDate() -7);
        	} else if( term == "3" ) {
        		objDate.setDate(objDate.getDate() -14);
        	} else if( term == "4" ) {
        		objDate.setMonth(objDate.getMonth() -1);
        	} else if( term == "5" ) {
        		objDate.setMonth(objDate.getMonth() -3);
        	} else if( term == "6" ) {
        		objDate.setMonth(objDate.getMonth() -6);
        	} else if( term == "7" ) {
        		objDate.setMonth(objDate.getMonth() -12);
        	}

            fromDateNm.set_value(objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0'));
        	endDateNm.set_value(sToday);
        };
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
