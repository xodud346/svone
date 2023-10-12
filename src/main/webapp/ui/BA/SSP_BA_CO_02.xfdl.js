(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BA_CO_02");
            this.set_titletext("배치프로그램 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,450);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_bat_pgm", this);
            obj._setContents("<ColumnInfo><Column id=\"thmeDomnCd\" type=\"STRING\" size=\"256\"/><Column id=\"batServerSeq\" type=\"INT\" size=\"256\"/><Column id=\"batPgmSeq\" type=\"INT\" size=\"256\"/><Column id=\"batPgmId\" type=\"STRING\" size=\"256\"/><Column id=\"batPgmNm\" type=\"STRING\" size=\"256\"/><Column id=\"rsrvSprCd\" type=\"STRING\" size=\"256\"/><Column id=\"rsrvSch\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"remark\" type=\"STRING\" size=\"256\"/><Column id=\"classMethodNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_thmeDomnCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rsrvSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD\">cron</Col><Col id=\"COM_DTL_CD_NM\">cron</Col></Row><Row><Col id=\"COM_DTL_CD\">fixedDelay</Col><Col id=\"COM_DTL_CD_NM\">fixedDelay</Col></Row><Row><Col id=\"COM_DTL_CD\">fixedRate</Col><Col id=\"COM_DTL_CD_NM\">fixedRate</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD\">Y</Col><Col id=\"COM_DTL_CD_NM\">사용</Col></Row><Row><Col id=\"COM_DTL_CD\">N</Col><Col id=\"COM_DTL_CD_NM\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"thmeDomnCd\" type=\"STRING\" size=\"256\"/><Column id=\"batServerSeq\" type=\"INT\" size=\"256\"/><Column id=\"serverNm\" type=\"STRING\" size=\"256\"/><Column id=\"ipAddr\" type=\"STRING\" size=\"256\"/><Column id=\"batPgmId\" type=\"STRING\" size=\"256\"/><Column id=\"batPgmNm\" type=\"STRING\" size=\"256\"/><Column id=\"batStat\" type=\"STRING\" size=\"256\"/><Column id=\"rsrvSprCd\" type=\"STRING\" size=\"256\"/><Column id=\"rsrvSch\" type=\"STRING\" size=\"256\"/><Column id=\"strDtm\" type=\"STRING\" size=\"256\"/><Column id=\"endDtm\" type=\"STRING\" size=\"256\"/><Column id=\"exceStatsCd\" type=\"STRING\" size=\"256\"/><Column id=\"nxtEndDtm\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"nxtStartDtm\" type=\"STRING\" size=\"256\"/><Column id=\"logLvl\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"svrChkYn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"thmeDomnCd\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_batSvrType", this);
            obj._setContents("<ColumnInfo><Column id=\"batServerSeq\" type=\"STRING\" size=\"256\"/><Column id=\"serverNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dupInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"batPgmId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_output", this);
            obj._setContents("<ColumnInfo><Column id=\"transBatPgmCnt\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div","20","43",null,"316","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("");
            obj.set_background("#ffffff");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","-1","7",null,"32","1",null,null,null,null,null,this.div.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00","0","8","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("1");
            obj.set_text("주제영역");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03_00_01","-1","38",null,"32","1",null,null,null,null,null,this.div.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cmb_batSvrType","618","11","130","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_batSvrType");
            obj.set_codecolumn("batServerSeq");
            obj.set_datacolumn("serverNm");
            obj.set_text("");
            obj.set_value("0");
            obj.set_index("0");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","38","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("3");
            obj.set_text("배치프로그램 ID");
            obj.set_cssclass("sta_cm_box01L_necessary");
            obj.set_enable("true");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03_00","-1","69",null,"32","1",null,null,null,null,null,this.div.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","69","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("6");
            obj.set_text("예약구분");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_02","480","8","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("7");
            obj.set_text("실행서버");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","480","38","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("9");
            obj.set_text("배치프로그램명");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","480","69","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("10");
            obj.set_text("예약일정");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cmb_thmeDomnCd","139","11","130","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("11");
            obj.set_innerdataset("ds_thmeDomnCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cmb_rsrvSprCd","139","73","130","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("12");
            obj.set_innerdataset("ds_rsrvSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","-1","100",null,"32","1",null,null,null,null,null,this.div.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","0","100","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("14");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L_necessary");
            obj.set_enable("true");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","480","100","130","32",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("15");
            obj.set_text("클래스_메소드명");
            obj.set_cssclass("sta_cm_box01L");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00","-1","131",null,"156","1",null,null,null,null,null,this.div.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_batPgmId","139","42","200","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cmb_useYn","139","104","130","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("17");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_innerdataset("ds_useYn");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.div.addChild(obj.name, obj);

            obj = new TextArea("edt_remark","139","138","812","142",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("18");
            this.div.addChild(obj.name, obj);

            obj = new Static("edt_chkIdDup","424","41","30","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("19");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.getSetter("readonly").set("true");
            obj.set_font("bold 16px/normal \"Malgun Gothic\",\"맑은고딕\",\"Apple SD Gothic Neo\",\"dotum\",\"돋움\",\"arial\",\"sans-serif\"");
            this.div.addChild(obj.name, obj);

            obj = new Static("edt_nxtExceDtm","824","73","135","24",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("20");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.getSetter("readonly").set("true");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_cancel","398",null,"100","32",null,"30",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert","501",null,"100","32",null,"30",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_select");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_batPgmNm","638","85","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_rsrvSch","638","116","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_chkIdDup",null,"85","60","23","575",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("중복확인");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","20","20","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("| 배치프로그램 등록 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("sta_prd_grp_nm","20","174","130","156",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("비고");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_classMethodNm","638","147","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_enable("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,450,this,function(p){});
            obj.set_stepindex("");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div.form.cmb_thmeDomnCd","value","ds_bat_pgm","thmeDomnCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_batPgmId","value","ds_bat_pgm","batPgmId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_batPgmNm","value","ds_bat_pgm","batPgmNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div.form.cmb_rsrvSprCd","value","ds_bat_pgm","rsrvSprCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt_rsrvSch","value","ds_bat_pgm","rsrvSch");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div.form.cmb_useYn","value","ds_bat_pgm","useYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div.form.edt_remark","value","ds_bat_pgm","remark");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div.form.edt_batPgmId","value","ds_bat_pgm","batPgmId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div.form.cmb_batSvrType","value","ds_bat_pgm","batServerSeq");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_classMethodNm","value","ds_bat_pgm","classMethodNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BA_CO_02.xfdl","CO::coUtils.xjs");
        this.registerScript("SSP_BA_CO_02.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP속성 생성 팝업
        CREATION DATES : 2021.01.19
        *******************************************************/
        // 공통형 스크립트 인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.sprCd = "";
        this.sPrdClcd = "";
        this.psnDupChk = "";
        this.sEmpNo = "";
        this.sOprtrNm = "";
        this.chrpsnTpCd = '';
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();
        this.fn_onLoad = function(obj,e){
            //공통 함수 호출(필수)
            this.gfn_formOnLoad(this);
        	this.fn_commonCodeSearch();
        	this.fn_batSvrSearch();
        };

        // 화면 단축키
        this.fn_onkeydown = function(obj,e)
        {
        	// CTRL + s
        	if (e.keycode == 83 && e.ctrlkey == true) {
        		// 저장
        		this.insert_btn_onclick();
        		event.preventDefault();
        	}

        		// ESC
        	if (e.keycode == 27) {
        		// 팝업 화면 닫기
        		//this.btn_clear_onclick();
        		this.close();
        	}
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //공통코드조회
        this.fn_commonCodeSearch = function(){
            var sSvcId = "commonCodeSearch";
            var sUrl = "/co/select-common-code-list.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_thmeDomnCd=ds_output1";
            var arg = "";

            this.ds_search.setColumn(0, "CODE_LIST", "THME_DOMN_CD");
            this.ds_search.setColumn(0, "LANG_CD", "KO");
            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //실행서버조회
        this.fn_batSvrSearch = function(){
        	var sSvcId = "batSvrSearch";
            var sUrl = "/ba/bat-adm/bat-svr-list.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_batSvrType=ds_list";
            var arg = "";

        	this.ds_search.setColumn(0,"useYn","Y");
        	//서버 keepAlive 체크여부
        	this.ds_search.setColumn(0,"svrChkYn","N");

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //배치프로그램ID 중복확인
        this.fn_chkIdDup = function(){
        	var sSvcId = "chkIdDup";
            var sUrl = "/ba/bat-adm/chk-id-dup.do";
            var inDs = "ds_bat_pgm=ds_bat_pgm";
            var outDs = "ds_dupInfo=ds_dupInfo";
            var arg = "";

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        //문자열 특정 위치 치환 처리
        this.fn_replaceAt = function(input, index, character){
             return input.substr(0, index) + character + input.substr(index+character.length);
        }

        this.fn_batSvrBatPgmUpdt = function(batPgmSeq){
        	this.ds_bat_pgm.setColumn(0, "batPgmSeq", batPgmSeq);

        	var sSvcId = "batSvrBatPgmUpdt";
        	var sUrl = "/ba/bat-adm/batSvr-bat-pgm-updt.do";
        	var inDs = "ds_bat_pgm=ds_bat_pgm";
        	var outDs = "ds_output=ds_output";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        //배치프로그램 예약일정에 따른 시간 계산
        this.fn_batPgmTimeCalc = function(){
        	//숫자, 에스터리스크(*), ?(퀘스천), 공백만 입력 가능
        	//let rsrvSchChk = /^[0-9|*|?|\s|]+$/
        	let rsrvSchChk = /[0-9|L|?*\,\/\s]/g;
        	let rsrvSch = this.ds_bat_pgm.getColumn(0,"rsrvSch");
        	let rsrvSprCd = this.ds_bat_pgm.getColumn(0, "rsrvSprCd");

        	if(!rsrvSchChk.test(rsrvSch)){
        		alert("예약일정 형식에 맞는 문자를 입력해 주세요.");
        		return false;
        	}


        	if(rsrvSprCd == "cron") {	//cron 형식일때
        		const rsrvSchArray = rsrvSch.split(" ");

        		if(rsrvSchArray[3] == "*" && rsrvSchArray[5] == "*") {	//'일' 항목과 '요일' 항목이 전부 *이면 마지막 *를 ?로 변경 처리
        			rsrvSch = this.fn_replaceAt(rsrvSch, rsrvSch.lastIndexOf("*"), "?");
        			this.ds_bat_pgm.setColumn(0,"rsrvSch", rsrvSch);
        		}
        	}

        	var sSvcId = "batPgmTimeCalc";
            var sUrl = "/ba/bat-adm/bat-pgm-time-calc.do";
            var inDs = "ds_bat_pgm=ds_bat_pgm";
            var outDs = "ds_output=ds_output";
            var arg = "";

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg) {
            switch(svcID) {
        		case "commonCodeSearch" :
        			 this.ds_thmeDomnCd.insertRow(0);
                     this.ds_thmeDomnCd.setColumn(0, "COM_DTL_CD", "");
                     this.ds_thmeDomnCd.setColumn(0, "COM_DTL_CD_NM", "선택");
        			 this.div.form.cmb_thmeDomnCd.set_index(0);
        			 this.div.form.cmb_rsrvSprCd.set_index(0);
        			 this.div.form.cmb_useYn.set_index(0);
                    break;

        		case "batSvrSearch" :
        			 this.ds_batSvrType.insertRow(0);
                     this.ds_batSvrType.setColumn(0, "batServerSeq", "");
                     this.ds_batSvrType.setColumn(0, "serverNm", "선택");
        			 this.div.form.cmb_batSvrType.set_index(0);
                    break;

                case "registBatPgm" :
          			var transBatPgmCnt = this.ds_output.getColumn(0, "transBatPgmCnt");
        			var batPgmSeq = this.ds_output.getColumn(0, "batPgmSeq");

          			if(transBatPgmCnt > 0 && batPgmSeq > 0){
        				//배치서버 배치프로그램목록(static) 갱신
        				this.fn_batSvrBatPgmUpdt(batPgmSeq);
          			}
          			else{
        				//console.log("저장 후 ds_output : ", this.ds_output.getColumn(0, "statCode"));
        				var statCode = this.ds_output.getColumn(0, "statCode");
        				if(statCode == "10"){
        					alert("오류가 발생하였습니다.");
        				}
        				else{
        					alert(this.ds_output.getColumn(0, "statMsg"));
        				}
          			}

                    break;
        		case "batSvrBatPgmUpdt" :
        			var statCode = this.ds_output.getColumn(0, "statCode");
        			var statMsg = this.ds_output.getColumn(0, "statMsg");
        			if(statCode == "10"){
          				alert('등록 되었습니다.');
          				this.close(true);
        				this.opener.fn_search(true);
        			}
        			else{
        				alert(statMsg);
        			}

        			break;
        		case "chkIdDup" :
        			var batPgmId = this.ds_dupInfo.getColumn(0,"batPgmId");
        			if(!this.gfn_isNull(batPgmId)){
        				this.div.form.edt_chkIdDup.set_color("#ff0000");
        				this.div.form.edt_chkIdDup.set_text("X");
        				this.btn_insert.set_enable(false);
        			}
        			if(this.gfn_isNull(batPgmId)){
        				this.div.form.edt_chkIdDup.set_color("#0000ff");
        				this.div.form.edt_chkIdDup.set_text("O");
        				this.btn_insert.set_enable(true);
        			}

                    break;

        		case "batPgmTimeCalc" :
        			 if(this.gfn_isNull()){
        				//this.div.form.edt_nxtExceDtm.set_color("#ff0000");
        				var nxtExceDtm = "";

        				if(this.ds_output.getColumn(0, "nxtExceDtm") == undefined){
        					nxtExceDtm = "예약일정 형식에 맞지 않습니다.";
        					this.btn_insert.set_enable(false);
        				}
        				else{
        					nxtExceDtm = this.ds_output.getColumn(0, "nxtExceDtm");
        					this.btn_insert.set_enable(true);
        				}

        				this.div.form.edt_nxtExceDtm.set_text("("+nxtExceDtm+")");
        			 }

                    break;
            }
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.fn_regist = function(){

        	let thmeDomnCd = this.ds_bat_pgm.getColumn(0,"thmeDomnCd");
        	let batServerSeq = this.ds_bat_pgm.getColumn(0,"batServerSeq");
        	let batPgmId = this.ds_bat_pgm.getColumn(0,"batPgmId");
        	let batPgmNm = this.ds_bat_pgm.getColumn(0,"batPgmNm");
        	let rsrvSprCd = this.ds_bat_pgm.getColumn(0,"rsrvSprCd");
        	let rsrvSch = this.ds_bat_pgm.getColumn(0,"rsrvSch");
        	let useYn = this.ds_bat_pgm.getColumn(0,"useYn");
        	let remark = this.ds_bat_pgm.getColumn(0,"remark");
        	let chkIdDup = this.div.form.edt_chkIdDup.text;

        	if(this.gfn_isNull(thmeDomnCd)){
        		alert(this.gfn_getMessage("ERRR000176", ["주제영역"]));
        		return false;
        	}

        	if(this.gfn_isNull(batServerSeq)){
        		alert(this.gfn_getMessage("ERRR000176", ["실행서버"]));
        		return false;
        	}

        	if(this.gfn_isNull(batPgmId)){
        		alert(this.gfn_getMessage("ERRC000004", ["배치프로그램ID"]));
        		return false;
        	}

        	//영문, 숫자, 언더바(_)만 입력 가능
        	let batPgmIdChk = /^[a-z|A-Z|0-9|_|]+$/

        	if(!batPgmIdChk.test(batPgmId)){
        		alert("배치프로그램ID는 영문, 숫자, 언더바(_)만 입력 가능합니다.");
        		return false;
        	}

        	if(this.gfn_isNull(chkIdDup)){
        		alert("배치프로그램ID 중복확인해 주세요");
        		return false;
        	}

        	if(chkIdDup == "X"){
        		alert("중복되지 않는 배치프로그램ID를 입력해 주세요");
        		return false;
        	}

        	if(this.gfn_isNull(batPgmNm)){
        		alert(this.gfn_getMessage("ERRC000004", ["배치프로그램명"]));
        		return false;
        	}

        	if(this.gfn_isNull(rsrvSprCd)){
        		alert(this.gfn_getMessage("ERRR000176", ["예약구분"]));
        		return false;
        	}

        	if(this.gfn_isNull(rsrvSch)){
        		alert(this.gfn_getMessage("ERRC000004", ["예약일정"]));
        		return false;
        	}

        	//숫자, 에스터리스크(*), ?(퀘스천), 공백만 입력 가능
        	//let rsrvSchChk = /^[0-9|*|?|\s|]+$/
        	let rsrvSchChk = /[0-9|L|?*\,\/\s]/g;

        	if(!rsrvSchChk.test(rsrvSch)){
        		alert("예약일정 형식에 맞는 문자를 입력해 주세요.");
        		return false;
        	}

        	if(this.gfn_isNull(useYn)){
        		alert(this.gfn_getMessage("ERRR000176", ["사용여부"]));
        		return false;
        	}

        	//AM-BO-032 입력된 정보로 등록처리 하시겠습니까?
         	var sResult = this.confirm('입력된 정보로 등록처리 하시겠습니까?');
         	if(sResult){
         		var sSvcId = "registBatPgm";
        		var sUrl = "/ba/bat-adm/reg-bat-pgm.do";
        		var inDs = "ds_bat_pgm=ds_bat_pgm";
        		var outDs = "ds_output=ds_output";
        		var arg = "";

        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
         	}
        }
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //등록 버튼
        this.insert_btn_onclick = function(obj,e)
        {
        	this.fn_regist();
        };

        //취소 버튼
        this.btn_clear_onclick = function(obj,e)
        {
        	//var bResult = this.confirm("AM-BO-013 등록을 취소하시겠습니까?");
        	var bResult = this.confirm(this.gfn_getMessage('ERRP000013'));
        	if(bResult){
        		this.close(false);
        	}
        };

        //배치프로그램 ID 중복확인
        this.btn_chkIdDup_onclick = function(obj,e)
        {
        	let batPgmId = this.ds_bat_pgm.getColumn(0,"batPgmId");
        	if(this.gfn_isNull(batPgmId) || nexacro.trim(batPgmId).length==0) {
        		//"배치프로그램ID가 빈값일 경우" 메세지 추가 후 아래 메세지코드 수정
        		//alert(this.fn_getMessage("ERRC000279"));
        		alert("배치프로그램ID를 입력해 주세요.");
        		return;
        	}

        	// 중복확인 서비스 호출
        	this.div.form.edt_batPgmId.set_value(nexacro.trim(this.ds_bat_pgm.getColumn(0,"batPgmId")));
        	this.fn_chkIdDup();
        };

        //배치프로그램ID 텍스트박스 값 입력시 중복확인 초기화
        this.edt_batPgmId_onkeyup = function(obj,e)
        {
        	this.div.form.edt_chkIdDup.set_text("");
        };

        //예약일정 입력 시 다음 실행일정 예상날짜 출력
        this.edt_rsrvSch_onchanged = function(obj,e)
        {
        	this.fn_batPgmTimeCalc();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeydown",this.fn_onkeydown,this);
            this.div.form.edt_batPgmId.addEventHandler("onkeyup",this.edt_batPgmId_onkeyup,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_insert.addEventHandler("onclick",this.insert_btn_onclick,this);
            this.edt_rsrvSch.addEventHandler("onchanged",this.edt_rsrvSch_onchanged,this);
            this.btn_chkIdDup.addEventHandler("onclick",this.btn_chkIdDup_onclick,this);
            this.sta_prd_grp_nm.addEventHandler("onclick",this.sta_prd_grp_nm_onclick,this);
        };
        this.loadIncludeScript("SSP_BA_CO_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
