(function()
{
    return function()  
	{
        this.on_loadAppVariables = function()
        {		
            var obj = null;
			// global dataobject
		
            // global dataset
            obj = new Dataset("gds_openMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"WIN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MNU_LVL_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MNU_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MNU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MNU_LVL_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"MNU_LVL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"HRNK_MNU_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MNU_TP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"HGST_MNU_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"RMKS_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"FILTER_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_message", this);
            obj._setContents("<ColumnInfo><Column id=\"MSG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_CTS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_menu_back", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"UP_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_URL\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">M_1000000000</Col><Col id=\"MENU_NAME\">기준정보</Col><Col id=\"UP_MENU_ID\">M_0000000000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"SORT_SEQ\">1</Col><Col id=\"MENU_TYPE\">F</Col></Row><Row><Col id=\"MENU_ID\">M_1000000001</Col><Col id=\"MENU_NAME\">사용자 관리</Col><Col id=\"UP_MENU_ID\">M_1000000000</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SORT_SEQ\">1</Col><Col id=\"PGM_PATH\">sample</Col><Col id=\"PGM_ID\">P_1000000001</Col><Col id=\"PGM_URL\">samplePage01.xfdl</Col><Col id=\"MENU_TYPE\">P</Col></Row><Row><Col id=\"MENU_ID\">M_1000000002</Col><Col id=\"MENU_NAME\">프로그램 관리</Col><Col id=\"UP_MENU_ID\">M_1000000000</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SORT_SEQ\">2</Col><Col id=\"MENU_TYPE\">P</Col><Col id=\"PGM_PATH\">sample</Col><Col id=\"PGM_ID\">P_1000000002</Col><Col id=\"PGM_URL\">samplePage02.xfdl</Col></Row><Row><Col id=\"MENU_ID\">M_1000000003</Col><Col id=\"MENU_NAME\">메뉴관리</Col><Col id=\"UP_MENU_ID\">M_1000000000</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SORT_SEQ\">3</Col><Col id=\"MENU_TYPE\">P</Col><Col id=\"PGM_PATH\">sample</Col><Col id=\"PGM_ID\">P_1000000003</Col><Col id=\"PGM_URL\">sampleTab.xfdl</Col></Row><Row><Col id=\"MENU_ID\">M_1000000004</Col><Col id=\"MENU_NAME\">권한 관리</Col><Col id=\"UP_MENU_ID\">M_1000000000</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SORT_SEQ\">4</Col><Col id=\"MENU_TYPE\">P</Col></Row><Row><Col id=\"MENU_ID\">M_2000000000</Col><Col id=\"MENU_NAME\">업무 1</Col><Col id=\"UP_MENU_ID\">M_0000000000</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"SORT_SEQ\">2</Col><Col id=\"MENU_TYPE\">F</Col></Row><Row><Col id=\"MENU_ID\">M_2000000001</Col><Col id=\"MENU_NAME\">업무 상세 1</Col><Col id=\"UP_MENU_ID\">M_2000000000</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SORT_SEQ\">1</Col><Col id=\"MENU_TYPE\">P</Col></Row><Row><Col id=\"MENU_ID\">M_2000000002</Col><Col id=\"MENU_NAME\">업무 상세 2</Col><Col id=\"UP_MENU_ID\">M_2000000000</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SORT_SEQ\">2</Col><Col id=\"MENU_TYPE\">P</Col></Row><Row><Col id=\"MENU_ID\">M_2000000003</Col><Col id=\"MENU_NAME\">업무 상세3</Col><Col id=\"UP_MENU_ID\">M_2000000000</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"SORT_SEQ\">3</Col><Col id=\"MENU_TYPE\">P</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_bookMark", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MNU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNU_LVL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_CALL_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"UI_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MNU_NM\">메뉴관리</Col><Col id=\"MNU_LVL_SPR_CD\">9101000000</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_gridPopupMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ENABLE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">LOCK</Col><Col id=\"MENU_NM\">틀고정</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_ENABLE\">true</Col><Col id=\"_CHK\">0</Col></Row><Row><Col id=\"MENU_ID\">UNLOCK</Col><Col id=\"MENU_NM\">틀고정 해제</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_ENABLE\">true</Col><Col id=\"_CHK\">0</Col></Row><Row><Col id=\"MENU_ID\">COLUMN</Col><Col id=\"MENU_NM\">컬럼</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_ENABLE\">true</Col><Col id=\"_CHK\">0</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_personal", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MNU_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"GRID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FMT_TP\" type=\"STRING\" size=\"256\"/><Column id=\"GRID_FMT\" type=\"STRING\" size=\"256\"/><Column id=\"MNU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_personalSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MNU_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"GRID_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/><Col id=\"OPRTR_ID\"/></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_userInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"USR_STATS_CD\" type=\"string\" size=\"255\"/><Column id=\"UPDPSN_ID\" type=\"string\" size=\"255\"/><Column id=\"CO_CD\" type=\"string\" size=\"32\"/><Column id=\"TEL_NO\" type=\"string\" size=\"255\"/><Column id=\"HP_NO\" type=\"string\" size=\"255\"/><Column id=\"ORG_CD\" type=\"string\" size=\"32\"/><Column id=\"OPRTR_NM\" type=\"string\" size=\"32\"/><Column id=\"MSSGR_ADDR\" type=\"string\" size=\"255\"/><Column id=\"REGPSN_ID\" type=\"string\" size=\"255\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"JBPOS_NM\" type=\"string\" size=\"255\"/><Column id=\"JB_NM\" type=\"string\" size=\"255\"/><Column id=\"ACNT_CERT_AUTH_YN\" type=\"string\" size=\"255\"/><Column id=\"PSTN_NM\" type=\"string\" size=\"255\"/><Column id=\"UPD_DTM\" type=\"datetime\" size=\"17\"/><Column id=\"EMP_NO\" type=\"string\" size=\"32\"/><Column id=\"DIV_CD\" type=\"string\" size=\"32\"/><Column id=\"SALS_TEAM_CD\" type=\"string\" size=\"255\"/><Column id=\"REG_DTM\" type=\"datetime\" size=\"17\"/><Column id=\"USR_SPR_CD\" type=\"string\" size=\"255\"/><Column id=\"DTY_NM\" type=\"string\" size=\"255\"/><Column id=\"OPRTR_ID\" type=\"string\" size=\"32\"/><Column id=\"EMAIL_ADDR\" type=\"string\" size=\"32\"/><Column id=\"RTCO_DT\" type=\"string\" size=\"255\"/><Column id=\"SEX_SPR_CD\" type=\"string\" size=\"255\"/><Column id=\"PLNT_ID\" type=\"string\" size=\"255\"/><Column id=\"CHR_TASK_NM\" type=\"string\" size=\"255\"/><Column id=\"ORG_NM\" type=\"string\" size=\"32\"/><Column id=\"WPTAL_ID\" type=\"string\" size=\"32\"/><Column id=\"ENCRP_USR_INFO_DTLS\" type=\"string\" size=\"255\"/><Column id=\"ENT_DT\" type=\"string\" size=\"255\"/><Column id=\"JB_CD\" type=\"string\" size=\"32\"/><Column id=\"SALS_CHR_CD\" type=\"string\" size=\"255\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_systemdate", this);
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"YYYYMMDD\" type=\"STRING\" size=\"256\"/><Column id=\"KOR_YYYYMMDD\" type=\"STRING\" size=\"256\"/><Column id=\"YYYYMM\" type=\"STRING\" size=\"256\"/><Column id=\"MMDD\" type=\"STRING\" size=\"4\"/><Column id=\"MM\" type=\"STRING\" size=\"2\"/><Column id=\"DD\" type=\"STRING\" size=\"2\"/><Column id=\"MONTH_FIRST_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"MONTH_LAST_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_OF_WEEK\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_OF_KOR_WEEK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_sspHosts", this);
            obj._setContents("<ColumnInfo><Column id=\"HOST_SSP\" type=\"STRING\" size=\"256\"/><Column id=\"HOST_RND\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            
            // global variable
            this._addVariable("gv_pageViewCnt","50");
            
            obj = null;
        };
 
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("ssp_bo");
            this.set_screenid("Desktop_screen");

            if (this._is_attach_childframe)
            	return;
        
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1596","936",null,null,this);
            mainframe.set_openalign("center middle");
            mainframe.set_titlebarheight("30");
            mainframe.set_openstatus("maximize");
            mainframe.set_showcascadetitletext("false");
            mainframe.set_titletext("SSP BO");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;        
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new VFrameSet("VFrameSet",null,null,null,null,null,null,this);
            frame0.set_separatesize("50, *");
            this.addChild(frame0.name, frame0);
            this.frame=frame0;

            var frame1 = new ChildFrame("topFrame",null,null,null,null,null,null,"FRAME::topFrame.xfdl",frame0);
            frame1.set_showtitlebar("false");
            frame1.set_dragmovetype("none");
            frame0.addChild(frame1.name, frame1);
            frame1.set_formurl("FRAME::topFrame.xfdl");


            var frame2 = new HFrameSet("HFrameSet",null,null,null,null,null,null,frame0);
            frame2.set_separatesize("60,200, *");
            frame0.addChild(frame2.name, frame2);

            var frame3 = new ChildFrame("quickFrame",null,null,null,null,null,null,"FRAME::quickFrame.xfdl",frame2);
            frame3.set_showtitlebar("false");
            frame3.set_dragmovetype("none");
            frame2.addChild(frame3.name, frame3);
            frame3.set_formurl("FRAME::quickFrame.xfdl");


            var frame4 = new ChildFrame("leftFrame",null,null,null,null,null,null,"FRAME::leftFrame.xfdl",frame2);
            frame4.set_showtitlebar("false");
            frame4.set_dragmovetype("none");
            frame2.addChild(frame4.name, frame4);
            frame4.set_formurl("FRAME::leftFrame.xfdl");


            var frame5 = new VFrameSet("VWorkFrameSet",null,null,null,null,null,null,frame2);
            frame5.set_separatesize("40, 0,*");
            frame2.addChild(frame5.name, frame5);

            var frame6 = new ChildFrame("mdiFrame",null,null,null,null,null,null,"FRAME::mdiFrame.xfdl",frame5);
            frame6.set_showtitlebar("false");
            frame6.set_dragmovetype("none");
            frame5.addChild(frame6.name, frame6);
            frame6.set_formurl("FRAME::mdiFrame.xfdl");


            var frame7 = new FrameSet("WorkFrameSet",null,null,null,null,null,null,frame5);
            frame7.set_color("red");
            frame5.addChild(frame7.name, frame7);

            var frame8 = new ChildFrame("MainFrame",null,null,null,null,null,null,"FRAME::mainFrame.xfdl",frame5);
            frame8.set_showtitlebar("false");
            frame8.set_dragmovetype("none");
            frame8.set_showcascadetitletext("true");
            frame5.addChild(frame8.name, frame8);
            frame8.set_formurl("FRAME::mainFrame.xfdl");
        };
        
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Application_onload,this);
            this.addEventHandler("onloadforms",this.Application_onloadforms,this);
        };
        
        // script Compiler
        this.registerScript("Application_Desktop.xadl", function() {
        /************************************************************************************************
         * application 변수 선언 영역
        ************************************************************************************************/
        	this.agv_VFrameSet   	= "";
        	this.agv_TopFrame    	= "";
        	this.agv_HFrameSet   	= "";
        	this.agv_LeftFrame   	= "";
        	this.agv_VWorkFrameSet  = "";
        	this.agv_MdiFrame    	= "";
        	this.agv_WorkFrameSet  	= "";
        	this.agv_MainFrame   	= "";
        /***********************************************************************************************
        * Application EVENT 영역(onload, onbeforeclose)
        /***********************************************************************************************/
        this.Application_onload = function(obj,e)
        {
        	var oApp = nexacro.getApplication();				//application object

        	//서비스 URL정의
        	if(system.navigatorname != "nexacro") {
        		var sServiceUrl = nexacro.getProjectPath();
        		sServiceUrl = sServiceUrl.replace("ui/","");
        		nexacro.getEnvironment().services["svcUrl"].url = sServiceUrl;
        	}

        	// Frame 변수 저장
        	this.agv_VFrameSet		= oApp.mainframe.VFrameSet;                                			// VFrameSet
        	this.agv_TopFrame   	= oApp.mainframe.VFrameSet.topFrame;  								// Top Frame
        	this.agv_HFrameSet  	= oApp.mainframe.VFrameSet.HFrameSet;                      			// HFrame
        	this.agv_QuickFrame  	= oApp.mainframe.VFrameSet.HFrameSet.quickFrame;            		// Quick Frame
        	this.agv_LeftFrame  	= oApp.mainframe.VFrameSet.HFrameSet.leftFrame;            			// Left Frame
        	this.agv_VWorkFrameSet	= oApp.mainframe.VFrameSet.HFrameSet.VWorkFrameSet;        			// VFrameSet1
        	this.agv_MdiFrame     	= oApp.mainframe.VFrameSet.HFrameSet.VWorkFrameSet.mdiFrame; 		// Mdi Navi Frame
        	this.agv_WorkFrameSet   = oApp.mainframe.VFrameSet.HFrameSet.VWorkFrameSet.WorkFrameSet;    // Work Form
        	this.agv_MainFrame	    = oApp.mainframe.VFrameSet.HFrameSet.VWorkFrameSet.MainFrame;		// Main Form
        };
        this.Application_onloadforms = function(obj,e)
        {
            //  URL 파라미터로 전달받은 메뉴 아이디 값
            var rtnMenuId = this.getVariable("gv_menuId");
            // leftFrame에 메뉴 아이디 넘기기
        	this.agv_LeftFrame.form.fn_paramMenuId(rtnMenuId);
        };

        });
        this.checkLicense("");
        
        this.loadPreloadList();

        this.loadIncludeScript("Application_Desktop.xadl");
    };
}
)();
