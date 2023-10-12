(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("workPage");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(963,872);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_master", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"MNU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OK_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"DELAY_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"SUM_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MNU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"MNU_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_MNU_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MNU_LVL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" type=\"STRING\" size=\"256\"/><Column id=\"MNU_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS2\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PERIOD\" type=\"STRING\" size=\"256\"/><Column id=\"INIT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_master2", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"MNU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OK_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"DELAY_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"SUM_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MNU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"MNU_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_MNU_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ARR_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" type=\"STRING\" size=\"256\"/><Column id=\"OK_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"DELAY_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"SUM_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_master3", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"MNU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OK_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"DELAY_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"SUM_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MNU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"MNU_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_MNU_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ARR_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM\" type=\"STRING\" size=\"256\"/><Column id=\"OK_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"DELAY_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"SUM_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"STSTUS2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_master4", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"PURG_CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"ESTM_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"RND_ESTM_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"SUM_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"STSTUS2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_auth", this);
            obj._setContents("<ColumnInfo><Column id=\"TEAM_LEADER_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RND_YN\" type=\"STRING\" size=\"256\"/><Column id=\"R_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_master5", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"MNU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"A_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"OK_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"B_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"DELAY_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"C_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"SUM_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"SUM_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"STSTUS2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new ImageViewer("mainLogo","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_MAIN_logo");
            obj.set_border("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_main","20","63",null,"267","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_master");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("collapse,all");
            obj.set_visible("false");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"217\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"항목\"/><Cell col=\"1\" text=\"정상\"/><Cell col=\"2\" text=\"지연\"/><Cell col=\"3\" text=\"합계\"/></Band><Band id=\"body\"><Cell text=\"bind:MNU_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MNU_LVL\" autosizecol=\"limitmax\" cssclass=\"cell_mark\"/><Cell col=\"1\" text=\"bind:OK_CNT\" color=\"blue\" cssclass=\"expr:MNU_TP_CD == &quot;02&quot; ? &apos;grd_Txt_Blue_U&apos; : &apos;&apos; \" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:DELAY_CNT\" color=\"red\" cssclass=\"expr:MNU_TP_CD == &quot;02&quot; ? &apos;grd_Txt_Blue_U&apos; : &apos;&apos; \" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:SUM_CNT\" textDecoration=\"expr:STATUS == &quot;&quot; ? : &quot;none&quot; : &quot;underline&quot;\" cssclass=\"expr:MNU_TP_CD == &quot;02&quot; ? &apos;grd_Txt_Blue_U&apos; : &apos;&apos; \" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","30","20","300","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("MY To-Do");
            obj.set_cssclass("sta_WF_title02");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_period",null,"20","138","24","109",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_visible("false");
            var rdo_period_innerdataset = new nexacro.NormalDataset("rdo_period_innerdataset", obj);
            rdo_period_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">3개월</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">전체</Col></Row></Rows>");
            obj.set_innerdataset(rdo_period_innerdataset);
            obj.set_text("3개월");
            obj.set_value("3");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"18","60","28","33",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_noRnd","20","372",null,null,"20","72",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_tabindex("0");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_noRnd);
            obj.set_text("항목별");
            this.tab_noRnd.addChild(obj.name, obj);

            obj = new Grid("grd_noRndItem","12","3",null,"206","33",null,null,null,null,null,this.tab_noRnd.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_master2");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("collapse,all");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"53\"/><Column size=\"53\"/><Column size=\"53\"/><Column size=\"53\"/><Column size=\"53\"/><Column size=\"53\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"항목\"/><Cell col=\"1\" colspan=\"2\" text=\"정상\"/><Cell col=\"3\" colspan=\"2\" text=\"지연\"/><Cell col=\"5\" colspan=\"2\" text=\"합계\"/><Cell row=\"1\" col=\"1\" text=\"건수\"/><Cell row=\"1\" col=\"2\" text=\"비율\"/><Cell row=\"1\" col=\"3\" text=\"건수\"/><Cell row=\"1\" col=\"4\" text=\"비율\"/><Cell row=\"1\" col=\"5\" text=\"건수\"/><Cell row=\"1\" col=\"6\" text=\"비율\"/></Band><Band id=\"body\"><Cell text=\"bind:MNU_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MNU_LVL\"/><Cell col=\"1\" text=\"bind:OK_CNT\" color=\"blue\"/><Cell col=\"2\" text=\"expr:OK_RATE+&quot;%&quot;\" color=\"blue\"/><Cell col=\"3\" text=\"bind:DELAY_CNT\" color=\"red\"/><Cell col=\"4\" text=\"expr:DELAY_RATE+&quot;%&quot;\" color=\"red\"/><Cell col=\"5\" text=\"bind:SUM_CNT\"/><Cell col=\"6\" text=\"expr:SUM_RATE+&quot;%&quot;\"/></Band></Format></Formats>");
            this.tab_noRnd.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_noRnd);
            obj.set_text("팀원별");
            this.tab_noRnd.addChild(obj.name, obj);

            obj = new Grid("grd_noRndTeam","12","3",null,"206","33",null,null,null,null,null,this.tab_noRnd.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_master3");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("collapse,all");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"53\"/><Column size=\"53\"/><Column size=\"53\"/><Column size=\"53\"/><Column size=\"53\"/><Column size=\"53\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"담당자\"/><Cell col=\"1\" colspan=\"2\" text=\"정상\"/><Cell col=\"3\" colspan=\"2\" text=\"지연\"/><Cell col=\"5\" colspan=\"2\" text=\"합계\"/><Cell row=\"1\" col=\"1\" text=\"건수\"/><Cell row=\"1\" col=\"2\" text=\"비율\"/><Cell row=\"1\" col=\"3\" text=\"건수\"/><Cell row=\"1\" col=\"4\" text=\"비율\"/><Cell row=\"1\" col=\"5\" text=\"건수\"/><Cell row=\"1\" col=\"6\" text=\"비율\"/></Band><Band id=\"body\"><Cell text=\"bind:MNU_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MNU_LVL\"/><Cell col=\"1\" text=\"bind:OK_CNT\" color=\"blue\"/><Cell col=\"2\" color=\"blue\" text=\"expr:OK_RATE+&quot;%&quot;\"/><Cell col=\"3\" text=\"bind:DELAY_CNT\" color=\"red\"/><Cell col=\"4\" color=\"red\" text=\"expr:DELAY_RATE+&quot;%&quot;\"/><Cell col=\"5\" text=\"bind:SUM_CNT\"/><Cell col=\"6\" text=\"expr:SUM_RATE+&quot;%&quot;\"/></Band></Format></Formats>");
            this.tab_noRnd.Tabpage2.addChild(obj.name, obj);

            obj = new Tab("tab_rnd","20","372",null,null,"20","62",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_tabindex("0");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_rnd);
            obj.set_text("신규상품등록현황");
            this.tab_rnd.addChild(obj.name, obj);

            obj = new Grid("grd_newItem","12","3",null,"346","33",null,null,null,null,null,this.tab_rnd.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_master4");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("collapse,all");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"111\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"담당자명\"/><Cell col=\"1\" text=\"견적\"/><Cell col=\"2\" text=\"신규상품등록\"/><Cell col=\"3\" text=\"전시상품견적\"/><Cell col=\"4\" text=\"합계\"/></Band><Band id=\"body\"><Cell text=\"bind:PURG_CHRPSN_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MNU_LVL\"/><Cell col=\"1\" text=\"bind:ESTM_CNT\"/><Cell col=\"2\" text=\"bind:NEW_PRD_CNT\"/><Cell col=\"3\" text=\"bind:RND_ESTM_CNT\"/><Cell col=\"4\" text=\"bind:SUM_CNT\"/></Band></Format></Formats>");
            this.tab_rnd.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_rnd);
            obj.set_text("구매정보현황");
            this.tab_rnd.addChild(obj.name, obj);

            obj = new Grid("grd_noRndTeam","12","3",null,"346","33",null,null,null,null,null,this.tab_rnd.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_master5");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("collapse,all");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"담당자명\"/><Cell col=\"1\" text=\"구매유효상품\"/><Cell col=\"2\" text=\"비율\"/><Cell col=\"3\" text=\"구매불가예정상품\"/><Cell col=\"4\" text=\"비율\"/><Cell col=\"5\" text=\"구매정보 미존재 상품\"/><Cell col=\"6\" text=\"비율\"/></Band><Band id=\"body\"><Cell text=\"bind:OPRTR_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MNU_LVL\"/><Cell col=\"1\" text=\"bind:A_CNT\" color=\"blue\"/><Cell col=\"2\" text=\"expr:OK_RATE+&quot;%&quot;\"/><Cell col=\"3\" text=\"bind:B_CNT\" color=\"blue\"/><Cell col=\"4\" text=\"expr:DELAY_RATE+&quot;%&quot;\"/><Cell col=\"5\" text=\"bind:C_CNT\" color=\"blue\"/><Cell col=\"6\" text=\"expr:SUM_RATE+&quot;%&quot;\"/></Band></Format></Formats>");
            this.tab_rnd.Tabpage2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",963,872,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","rdo_period","value","ds_search","PERIOD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","ds_master");
            this._addPreloadList("data","","ds_master2");
            this._addPreloadList("data","","ds_master3");
            this._addPreloadList("data","","ds_master4");
            this._addPreloadList("data","","ds_master5");
        };
        
        // User Script
        this.registerScript("mainFrame.xfdl", function() {
        /*******************************************************
          PROJECT NAME :
          CREATION DATES :
        *******************************************************/



        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.oApp = nexacro.getApplication();
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	this.rdo_period.set_index(0);
        	this.ds_search.setColumn(0,"INIT","Y");
        	this.fn_dashBoardSearch();
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_dashBoardSearch = function() {
        	var sSvcId = "BoardSearch";
        	var sUrl = "/da/dash/select-board.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_master=ds_master ds_master2=ds_master2 ds_master3=ds_master3 ds_master4=ds_master4 ds_auth=ds_auth ds_master5=ds_master5";
        	var arg = "";
        	trace(this.ds_search.saveXML());
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");

        }
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{

        	if(svcID == "BoardSearch"){

        		trace(this.ds_master.saveXML());
        		trace(this.ds_master2.saveXML());
        		trace(this.ds_master3.saveXML());
        		trace(this.ds_master4.saveXML());
        		trace(this.ds_auth.saveXML());
        		trace(this.ds_master5.saveXML());

        		if(this.ds_search.getColumn(0, "INIT") == "Y" && this.ds_auth.getColumn(0, "SEARCH_YN") == "Y") {
        			this.ds_search.setColumn(0,"INIT","N");
        			this.sta_title.set_visible(true);
        			this.rdo_period.set_visible(true);
        			this.btn_search.set_visible(true);
        		} else {
        			if(this.ds_auth.getColumn(0, "R_YN") == "Y"){  // 대시보드 실행
        				this.sta_title.set_visible(true);
        				this.rdo_period.set_visible(true);
        				this.btn_search.set_visible(true);
        				this.grd_main.set_visible(true);
        				if(this.ds_auth.getColumn(0, "TEAM_LEADER_YN") == "Y"){ // 팀장
        					if(this.ds_auth.getColumn(0, "RND_YN") == "Y"){		// RND 조직장
        						this.tab_rnd.set_visible(true);
        					} else {
        						this.tab_noRnd.set_visible(true);
        					}
        				}
        			} else {
        				this.sta_title.set_visible(false);
        				this.rdo_period.set_visible(false);
        				this.btn_search.set_visible(false);
        				this.grd_main.set_visible(false);
        				this.tab_noRnd.set_visible(false);
        				this.tab_rnd.set_visible(false);
        			}
        		}
        	}
        }
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        /*******************************
        * grd_main_oncellclick : 그리드 클릭이벤트
        *******************************/
        this.grd_main_oncellclick = function(obj,e)
        {
        	if(e.col == 1 || e.col == 2 || e.col == 3){
        		if(this.ds_master.getColumn(e.row,"SUM_CNT") > 0 ) {
        			var sMenuId = this.ds_master.getColumn(e.row,"MNU_LVL_SPR_CD");
        			var oArgs = this.ds_master.getColumn(e.row,"PARAM");  // 화면 파라미터 넘기기.
        			var sMenuType = this.ds_master.getColumn(e.row,"MNU_TP_CD");
        			var sParam = {
        				STATUS : this.ds_master.getColumn(e.row,"STATUS"),
        				STATUS2 : this.ds_master.getColumn(e.row,"STATUS2"),
        				ID : this.ds_auth.getColumn(0,"USER_ID"),
        				NM : this.ds_master.getColumn(e.row,"OPRTR_NM"),
        			//	OPR_UNIT_ID : this.ds_master.getColumn(e.row,"OPR_UNIT_ID"),
        				DTM : this.ds_search.getColumn(0,"PERIOD"),
        				TODO : "Y"
        			};

        			if(this.gfn_isNull(sMenuId) == false && sMenuType == "02") {
        				// 메뉴 화면 호출
        				this.gfn_menuOpen(sMenuId, sParam);
        			}
        		}
        	}
        };
        /*******************************
        * btn_search_onclick : 조회버튼 클릭이벤트
        *******************************/
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_dashBoardSearch();
        };


        // 테스트 코드
        this.ImageViewer00_onclick = function(obj,e)
        {
        	return;
        	var sUrl = "FRAME::DebugPop.xfdl";
        	var oArg = {};
        	var oOption = {popuptype:"modaless", title:"디버그", width:1080, height:703};

        	this.gfn_openPopup("DebugPopUp",sUrl,oArg,"gfn_debugPopUp",oOption);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.mainLogo.addEventHandler("onclick",this.ImageViewer00_onclick,this);
            this.grd_main.addEventHandler("oncellclick",this.grd_main_oncellclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.tab_noRnd.addEventHandler("onchanged",this.tab_noRnd_onchanged,this);
            this.tab_rnd.addEventHandler("onchanged",this.tab_rnd_onchanged,this);
            this.ds_master.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.ds_master2.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.ds_master3.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.ds_master4.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.ds_master5.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
        };
        this.loadIncludeScript("mainFrame.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
