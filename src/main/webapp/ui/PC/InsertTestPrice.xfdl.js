(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("intlLwstList");
            this.set_titletext("예외가격 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1340,990);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"codeList\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">20</Col><Col id=\"PRD_USE_YN\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_insert", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"prdText\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BZPLC_ID\">S000000782</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"공용전용\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PRD_ID\">000000000004728108</Col><Col id=\"PRD_NM\">전등타이머</Col><Col id=\"공용전용\">공용</Col></Row><Row><Col id=\"PRD_ID\">000000000004179784</Col><Col id=\"PRD_NM\">와이어로프</Col><Col id=\"공용전용\">공용</Col></Row><Row><Col id=\"PRD_ID\">000000000001857031</Col><Col id=\"PRD_NM\">유리창밀대</Col><Col id=\"공용전용\">공용</Col></Row><Row><Col id=\"PRD_ID\">000000000004362916</Col><Col id=\"PRD_NM\">벨로우즈</Col><Col id=\"공용전용\">공용</Col></Row><Row><Col id=\"PRD_ID\">000000000002683306</Col><Col id=\"PRD_NM\">FLEXIBLE HOSE(A/D)</Col><Col id=\"공용전용\">전용</Col></Row><Row><Col id=\"PRD_ID\">000000000000809279</Col><Col id=\"PRD_NM\">라벨</Col><Col id=\"공용전용\">공용</Col></Row><Row><Col id=\"PRD_ID\">000000000004867406</Col><Col id=\"PRD_NM\">기어드모터</Col><Col id=\"공용전용\">공용</Col></Row><Row><Col id=\"PRD_ID\">000000000000633800</Col><Col id=\"PRD_NM\">형광펜</Col><Col id=\"공용전용\">전용</Col></Row><Row><Col id=\"PRD_ID\">000000000004876552</Col><Col id=\"PRD_NM\">90도엘보</Col><Col id=\"공용전용\">공용</Col></Row><Row><Col id=\"PRD_ID\">000000000004059633</Col><Col id=\"PRD_NM\">솔레노이드밸브</Col><Col id=\"공용전용\">공용</Col></Row><Row><Col id=\"PRD_ID\">000000000002964463</Col><Col id=\"PRD_NM\">베어링하우징</Col><Col id=\"공용전용\">공용</Col></Row><Row><Col id=\"PRD_ID\">000000000004024636</Col><Col id=\"PRD_NM\">푸시버튼스위치</Col><Col id=\"공용전용\">전용</Col></Row><Row><Col id=\"PRD_ID\">000000000002874463</Col><Col id=\"PRD_NM\">엔코더케이블</Col><Col id=\"공용전용\">공용</Col></Row><Row><Col id=\"PRD_ID\">000000000004019964</Col><Col id=\"PRD_NM\">정보보안기</Col><Col id=\"공용전용\">전용</Col></Row><Row><Col id=\"PRD_ID\">000000000002583041</Col><Col id=\"PRD_NM\">감속기</Col><Col id=\"공용전용\">전용</Col></Row><Row><Col id=\"PRD_ID\">000000000003767196</Col><Col id=\"PRD_NM\">Lithium octanoate, 99%</Col><Col id=\"공용전용\">공용</Col></Row><Row><Col id=\"PRD_ID\">000000000003373080</Col><Col id=\"PRD_NM\">화이버센서</Col><Col id=\"공용전용\">전용</Col></Row><Row><Col id=\"PRD_ID\">000000000004019420</Col><Col id=\"PRD_NM\">매스플로우컨트롤러</Col><Col id=\"공용전용\">공용</Col></Row><Row><Col id=\"PRD_ID\">000000000004023473</Col><Col id=\"PRD_NM\">동관터미널</Col><Col id=\"공용전용\">전용</Col></Row><Row><Col id=\"PRD_ID\">000000000004044080</Col><Col id=\"PRD_NM\">테프론패킹</Col><Col id=\"공용전용\">공용</Col></Row><Row><Col id=\"PRD_ID\">000000000002326883</Col><Col id=\"PRD_NM\">AC절단화구</Col><Col id=\"공용전용\">전용</Col></Row><Row><Col id=\"PRD_ID\">000000000003374599</Col><Col id=\"PRD_NM\">전원공급장치</Col><Col id=\"공용전용\">공용</Col></Row><Row><Col id=\"PRD_ID\">000000000004044770</Col><Col id=\"PRD_NM\">에어실린더</Col><Col id=\"공용전용\">전용</Col></Row><Row><Col id=\"PRD_ID\">000000000000090422</Col><Col id=\"PRD_NM\">전공드라이버</Col><Col id=\"공용전용\">전용</Col></Row><Row><Col id=\"PRD_ID\">000000000002075003</Col><Col id=\"PRD_NM\">레벨스위치</Col><Col id=\"공용전용\">공용</Col></Row><Row><Col id=\"PRD_ID\">000000000004186686</Col><Col id=\"PRD_NM\">포토센서</Col><Col id=\"공용전용\">전용</Col></Row><Row><Col id=\"PRD_ID\">000000000000078196</Col><Col id=\"PRD_NM\">원터치피팅</Col><Col id=\"공용전용\">전용</Col></Row><Row><Col id=\"PRD_ID\">000000000002299448</Col><Col id=\"PRD_NM\">라디에이터</Col><Col id=\"공용전용\">공용</Col></Row><Row><Col id=\"PRD_ID\">000000000004208656</Col><Col id=\"PRD_NM\">실리콘패킹</Col><Col id=\"공용전용\">전용</Col></Row><Row><Col id=\"PRD_ID\">000000000001115415</Col><Col id=\"PRD_NM\">토너카트리지</Col><Col id=\"공용전용\">공용</Col></Row><Row><Col id=\"PRD_ID\">000000000003583411</Col><Col id=\"PRD_NM\">라벨</Col><Col id=\"공용전용\">전용</Col></Row><Row><Col id=\"PRD_ID\">000000000004065550</Col><Col id=\"PRD_NM\">잉크카트리지</Col><Col id=\"공용전용\">공용</Col></Row><Row><Col id=\"PRD_ID\">000000000000109041</Col><Col id=\"PRD_NM\">직자</Col><Col id=\"공용전용\">전용</Col></Row><Row><Col id=\"PRD_ID\">000000000001123782</Col><Col id=\"PRD_NM\">Sodium sulfite(아황산나트륨)</Col><Col id=\"공용전용\">공용</Col></Row><Row><Col id=\"PRD_ID\">000000000004175778</Col><Col id=\"PRD_NM\">피팅</Col><Col id=\"공용전용\">전용</Col></Row><Row><Col id=\"PRD_ID\">000000000003037743</Col><Col id=\"PRD_NM\">간격조절링</Col><Col id=\"공용전용\">공용</Col></Row><Row><Col id=\"PRD_ID\">000000000004540458</Col><Col id=\"PRD_NM\">SYRINGE ACCESSORY KIT</Col><Col id=\"공용전용\">전용</Col></Row><Row><Col id=\"PRD_ID\">000000000003128149</Col><Col id=\"PRD_NM\">플러그</Col><Col id=\"공용전용\">공용</Col></Row><Row><Col id=\"PRD_ID\">000000000000514844</Col><Col id=\"PRD_NM\">볼펜</Col><Col id=\"공용전용\">전용</Col></Row><Row><Col id=\"PRD_ID\">000000000002090981</Col><Col id=\"PRD_NM\">커플링</Col><Col id=\"공용전용\">공용</Col></Row><Row><Col id=\"PRD_ID\">000000000000768951</Col><Col id=\"PRD_NM\">조광형푸시버튼스위</Col><Col id=\"공용전용\">전용</Col></Row><Row><Col id=\"PRD_ID\">000000000004867218</Col><Col id=\"PRD_NM\">램밸브</Col><Col id=\"공용전용\">공용</Col></Row><Row><Col id=\"PRD_ID\">000000000004945569</Col><Col id=\"PRD_NM\">볼베어링</Col><Col id=\"공용전용\">전용</Col></Row><Row><Col id=\"PRD_ID\">000000000003012566</Col><Col id=\"PRD_NM\">푸시버튼스위치</Col><Col id=\"공용전용\">공용</Col></Row><Row><Col id=\"PRD_ID\">000000000004874424</Col><Col id=\"PRD_NM\">고출력중계기</Col><Col id=\"공용전용\">전용</Col></Row><Row><Col id=\"PRD_ID\">000000000000326070</Col><Col id=\"PRD_NM\">점보롤화장지</Col><Col id=\"공용전용\">공용</Col></Row><Row><Col id=\"PRD_ID\">000000000003020795</Col><Col id=\"PRD_NM\">필터</Col><Col id=\"공용전용\">공용</Col></Row><Row><Col id=\"PRD_ID\">000000000004702704</Col><Col id=\"PRD_NM\">서포트유니트</Col><Col id=\"공용전용\">공용</Col></Row><Row><Col id=\"PRD_ID\">000000000003765618</Col><Col id=\"PRD_NM\">Ethylenediaminetetraacetic acid, ACS, 99</Col><Col id=\"공용전용\">공용</Col></Row><Row><Col id=\"PRD_ID\">000000000006217683</Col><Col id=\"PRD_NM\">유량계</Col><Col id=\"공용전용\">공용</Col></Row><Row><Col id=\"PRD_ID\">000000000001743158</Col><Col id=\"PRD_NM\">매직테이프오피스팩</Col><Col id=\"공용전용\">공용</Col></Row><Row><Col id=\"PRD_ID\">000000000002838398</Col><Col id=\"PRD_NM\">카본브러쉬</Col><Col id=\"공용전용\">공용</Col></Row><Row><Col id=\"PRD_ID\">000000000004875045</Col><Col id=\"PRD_NM\">라벨</Col><Col id=\"공용전용\">공용</Col></Row><Row><Col id=\"PRD_ID\">000000000002072541</Col><Col id=\"PRD_NM\">컨버터</Col><Col id=\"공용전용\">공용</Col></Row><Row><Col id=\"PRD_ID\">000000000004023843</Col><Col id=\"PRD_NM\">조인트커넥터</Col><Col id=\"공용전용\">공용</Col></Row><Row><Col id=\"PRD_ID\">000000000004180627</Col><Col id=\"PRD_NM\">볼베어링</Col><Col id=\"공용전용\">공용</Col></Row><Row><Col id=\"PRD_ID\">000000000003015561</Col><Col id=\"PRD_NM\">매뉴얼</Col><Col id=\"공용전용\">공용</Col></Row><Row><Col id=\"PRD_ID\">000000000005223039</Col><Col id=\"PRD_NM\">실리카</Col><Col id=\"공용전용\">공용</Col></Row><Row><Col id=\"PRD_ID\">000000000000601258</Col><Col id=\"PRD_NM\">PC판</Col><Col id=\"공용전용\">공용</Col></Row><Row><Col id=\"PRD_ID\">000000000000770089</Col><Col id=\"PRD_NM\">PVC캡</Col><Col id=\"공용전용\">공용</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","65",null,"815","4",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","7","718",null,"38","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","58","28","382","737",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_list");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"132\"/><Column size=\"111\"/><Column size=\"111\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"PRD_ID\"/><Cell col=\"1\" text=\"PRD_NM\"/><Cell col=\"2\" text=\"공용전용\"/></Band><Band id=\"body\"><Cell text=\"bind:PRD_ID\" edittype=\"text\"/><Cell col=\"1\" text=\"bind:PRD_NM\"/><Cell col=\"2\" text=\"bind:공용전용\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00","0","15",null,"75","4",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색 영역");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","40","0",null,"32","20",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02","20","0","130","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("상품ID");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static04","532","0","130","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_text("사업장ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("btn_init",null,"38","65","26","86",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("3");
            obj.set_text("초기화");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button58",null,"38","60","26","22",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_select");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("edt_prd_id","159","4","295","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("5");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static04_00","945","0","130","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("6");
            obj.set_text("SSP상품상태");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("edt_prd_id00","672","5","253","23",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("7");
            this.Div00_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1340,990,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00_00.form.edt_prd_id","value","ds_insert","PRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00_00.form.edt_prd_id00","value","ds_insert","BZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.registerScript("InsertTestPrice.xfdl", function() {
        /*******************************************************
          PROJECT NAME : 상품군계획매익률
          CREATION DATES : 2022.01.25
        *******************************************************/

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.preSelectRowPosition = 0;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_doSearch = function(page)
        {
        	var sSvcId = "test";
        	var sUrl = "/pc/prd-prc/insert-init-prd-prc.do";
        	var inDs = "ds_insert=ds_insert";
        	var outDs = "";
        	var arg = "";


        	//전송
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/

        //조회 트랜잭션 콜백함수
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{

        	if( errorCode == -1 || errorCode == -100) { //사용자 지정 에러코드 -100
        			alert(errorMsg);
        		} else {
        			//alert("저장되었습니다.");
        			//this.fn_doSearch(0);
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

        this.Div00_00_Button58_onclick = function(obj,e)
        {
        	this.fn_doSearch(1);
        };


        this.Div00_TextArea00_onchanged = function(obj,e)
        {

        };

        this.Div00_Grid00_oncellclick = function(obj,e)
        {

        	//alert(11)

        	if(e.cell == 0){
        		//alert(this.ds_list.getColumn(e.row, "PRD_ID"));
        		this.ds_insert.setColumn(0,"PRD_ID",this.ds_list.getColumn(e.row, "PRD_ID"));
        		//this.ds_search.setColumn(0,"START_NUM",0);
        		this.fn_doSearch(1);
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.Div00.form.Grid00.addEventHandler("oncellclick",this.Div00_Grid00_oncellclick,this);
            this.Div00_00.form.btn_init.addEventHandler("onclick",this.Div00_00_btn_init_onclick,this);
            this.Div00_00.form.Button58.addEventHandler("onclick",this.Div00_00_Button58_onclick,this);
        };
        this.loadIncludeScript("InsertTestPrice.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
