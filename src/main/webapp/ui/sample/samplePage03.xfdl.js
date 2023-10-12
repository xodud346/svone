(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("samplePage03");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_USR_DEFN_NM_TTL_5\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_TTL_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_TTL_3\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_TTL_2\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_TTL_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"32\"/><Column id=\"EXST_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COL_CHK\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo><Rows><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">PRD_STD_YN</Col><Col id=\"COM_CLSF_CD_NM\">상품 표준 여부</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">DETR_BSS_CD</Col><Col id=\"COM_CLSF_CD_NM\">절사기준코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">DETR_MTHD_CD</Col><Col id=\"COM_CLSF_CD_NM\">절사방식코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">RFI_TP_CD</Col><Col id=\"COM_CLSF_CD_NM\">문의유형코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">UT_CLAUS_SPR_CD</Col><Col id=\"COM_CLSF_CD_NM\">이용약관구분코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">INQ_PERD_SPR_CD</Col><Col id=\"COM_CLSF_CD_NM\">조회기간구분코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">DISP_STATS_CD</Col><Col id=\"COM_CLSF_CD_NM\">진열상태코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">N</Col><Col id=\"COM_CLSF_CD\">TEST1111</Col><Col id=\"COM_CLSF_CD_NM\">TEst1111</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_USR_DEFN_NM_TTL_1\">일괄변경사용여부</Col><Col id=\"COM_CLSF_CD\">MBR_USE_CD</Col><Col id=\"COM_CLSF_CD_NM\">회원사용코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">ADJ_LOCK_CD</Col><Col id=\"EXST_CLCD\">ZMBLK_CD</Col><Col id=\"COM_CLSF_CD_NM\">정산잠금코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">QTY_DISP_UNIT_CD</Col><Col id=\"COM_CLSF_CD_NM\">수량표시단위코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">BIL_SPR_CD</Col><Col id=\"EXST_CLCD\">ZINF_INVOICE_FLAG</Col><Col id=\"COM_CLSF_CD_NM\">계산서구분코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">ADJ_BIL_SPR_CD</Col><Col id=\"COM_CLSF_CD_NM\">정산계산서구분코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">ADJ_FW_SPR_CD</Col><Col id=\"COM_CLSF_CD_NM\">정산이월구분코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">INVN_STATS_CD</Col><Col id=\"COM_CLSF_CD_NM\">재고상태코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">CHG_STATS_CD</Col><Col id=\"EXST_CLCD\">ZDCHG_STATS_CD</Col><Col id=\"COM_CLSF_CD_NM\">변경상태코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">TXTN_SPR_CD</Col><Col id=\"EXST_CLCD\">ZMM017</Col><Col id=\"COM_CLSF_CD_NM\">과세구분코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">APRV_STATS_CD</Col><Col id=\"COM_CLSF_CD_NM\">결재상태코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">ORD_CRT_SPR_CD</Col><Col id=\"EXST_CLCD\">ZMM002</Col><Col id=\"COM_CLSF_CD_NM\">발주생성구분코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">ADJ_DCN_SPR_CD</Col><Col id=\"COM_CLSF_CD_NM\">정산확정구분코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">DLV_DUE_DT_CHGRSN_CD</Col><Col id=\"EXST_CLCD\">DLV_SCH_DT_CHG_RSN_CD</Col><Col id=\"COM_CLSF_CD_NM\">배송예정일자변경사유코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">CH_SPR_CD</Col><Col id=\"EXST_CLCD\">ZSYSID</Col><Col id=\"COM_CLSF_CD_NM\">채널구분코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">DLV_FORM_CD</Col><Col id=\"EXST_CLCD\">ZFV002</Col><Col id=\"COM_CLSF_CD_NM\">배송형태코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">DVDPAY_HDR_PROC_CD</Col><Col id=\"EXST_CLCD\">ZDDIV_PROC_TYPE</Col><Col id=\"COM_CLSF_CD_NM\">분납처리코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">MEMO_CD</Col><Col id=\"EXST_CLCD\">ZMEMOCD</Col><Col id=\"COM_CLSF_CD_NM\">메모코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">ORD_ITM_STATS_CD</Col><Col id=\"EXST_CLCD\">ZFV001</Col><Col id=\"COM_CLSF_CD_NM\">발주품목상태코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">DVDPAY_REQ_RSN_CD</Col><Col id=\"EXST_CLCD\">ZDCHG_STATS_CD</Col><Col id=\"COM_CLSF_CD_NM\">분납요청사유코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">SALE_ADJ_STATS_CD</Col><Col id=\"EXST_CLCD\">ZSALE_ADJ_STATS_CD</Col><Col id=\"COM_CLSF_CD_NM\">매출정산상태코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">REQR_SPR_CD</Col><Col id=\"EXST_CLCD\">ZDDIV_USR_TYPE</Col><Col id=\"COM_CLSF_CD_NM\">요청자구분코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">INVN_TP_CD</Col><Col id=\"COM_CLSF_CD_NM\">재고유형코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">INVN_TRANS_SPR_CD</Col><Col id=\"COM_CLSF_CD_NM\">재고전송구분코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">APRVR_SPR_CD</Col><Col id=\"EXST_CLCD\">ZAPPRGB</Col><Col id=\"COM_CLSF_CD_NM\">결재자구분코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">ODR_CRT_TP_CD</Col><Col id=\"EXST_CLCD\">ZDSOTYPE</Col><Col id=\"COM_CLSF_CD_NM\">주문생성유형코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">DLV_DELAY_RSN_CD</Col><Col id=\"EXST_CLCD\">ZDLVDELAYCD</Col><Col id=\"COM_CLSF_CD_NM\">배송지연사유코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">ODR_STATS_CD</Col><Col id=\"EXST_CLCD\">ZSTATUS03</Col><Col id=\"COM_CLSF_CD_NM\">주문상태코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">SALE_CLOS_CD</Col><Col id=\"EXST_CLCD\">ZCLOS_CD</Col><Col id=\"COM_CLSF_CD_NM\">매출마감코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">APRVL_SPR_CD</Col><Col id=\"COM_CLSF_CD_NM\">결재선구분코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">ORD_REQ_STATS_CD</Col><Col id=\"EXST_CLCD\">ZMM001</Col><Col id=\"COM_CLSF_CD_NM\">발주요청상태코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">ACP_DELAY_RSN_CD</Col><Col id=\"COM_CLSF_CD_NM\">접수지연사유코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">ADJ_MM_CHG_RSN_CD</Col><Col id=\"EXST_CLCD\">ZADJ_MM_CHG_RSN_CD</Col><Col id=\"COM_CLSF_CD_NM\">정산월변경사유코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">PRDDS_CD</Col><Col id=\"EXST_CLCD\">SPART</Col><Col id=\"COM_CLSF_CD_NM\">제품군코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">GO_DELAY_RSN_CD</Col><Col id=\"EXST_CLCD\">ZGIDELAYCD</Col><Col id=\"COM_CLSF_CD_NM\">출고지연사유코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">NRML_RTNGDS_SPR_CD</Col><Col id=\"EXST_CLCD\">ZNRGUBN</Col><Col id=\"COM_CLSF_CD_NM\">정상반품구분코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">ODR_TRMN_CD</Col><Col id=\"EXST_CLCD\">ZCLOS_CD</Col><Col id=\"COM_CLSF_CD_NM\">주문종결코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">ADJ_STATS_CD</Col><Col id=\"EXST_CLCD\">ZADJ_STATS_CD</Col><Col id=\"COM_CLSF_CD_NM\">정산상태코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">DLV_RJT_RSN_CD</Col><Col id=\"EXST_CLCD\">ZDLVREJECTCD</Col><Col id=\"COM_CLSF_CD_NM\">배송거부사유코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">DLV_FORM_SPR_CD</Col><Col id=\"EXST_CLCD\">ZTRANSID</Col><Col id=\"COM_CLSF_CD_NM\">배송형태구분코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">TXTN_TP_CD</Col><Col id=\"EXST_CLCD\">ZTXTN_TP_CD</Col><Col id=\"COM_CLSF_CD_NM\">과세유형코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">CART_DLCST_SPR_CD</Col><Col id=\"COM_CLSF_CD_NM\">카트배송비구분코드</Col><Col id=\"COL_CHK\">0</Col></Row><Row><Col id=\"LANG_CD\">KO</Col><Col id=\"USE_YN\">Y</Col><Col id=\"COM_CLSF_CD\">PLNT_TP_CD</Col><Col id=\"COM_CLSF_CD_NM\">플랜트유형코드</Col><Col id=\"COL_CHK\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_target", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_USR_DEFN_NM_TTL_5\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_TTL_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_TTL_3\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_TTL_2\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_TTL_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"32\"/><Column id=\"EXST_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COL_CHK\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_targetGrd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_USR_DEFN_NM_TTL_5\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_TTL_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_TTL_3\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_TTL_2\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_TTL_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"32\"/><Column id=\"EXST_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COL_CHK\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","10","50","490","200",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("선택된 리스트가 없습니다.");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","300","490",null,null,"10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"COL_CHK\"/><Cell col=\"1\" text=\"COM_CLSF_CD\"/><Cell col=\"2\" text=\"COM_CLSF_CD_NM\"/></Band><Band id=\"body\"><Cell text=\"bind:COL_CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"1\" text=\"bind:COM_CLSF_CD\"/><Cell col=\"2\" text=\"bind:COM_CLSF_CD_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_select","402","262","98","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("선택");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","775","300","490",null,null,"10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"COL_CHK\"/><Cell col=\"1\" text=\"COM_CLSF_CD\"/><Cell col=\"2\" text=\"COM_CLSF_CD_NM\"/></Band><Band id=\"body\"><Cell text=\"bind:COL_CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"1\" text=\"bind:COM_CLSF_CD\"/><Cell col=\"2\" text=\"bind:COM_CLSF_CD_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_select00","1167","262","98","34",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("선택");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00","785","50","490",null,null,"470",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_targetGrd");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"COL_CHK\"/><Cell col=\"1\" text=\"COM_CLSF_CD\"/><Cell col=\"2\" text=\"COM_CLSF_CD_NM\"/><Cell col=\"3\"/></Band><Band id=\"body\"><Cell text=\"bind:COL_CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"1\" text=\"bind:COM_CLSF_CD\"/><Cell col=\"2\" text=\"bind:COM_CLSF_CD_NM\"/><Cell col=\"3\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
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
        this.registerScript("samplePage03.xfdl", function() {
        //====================================================================================================
        // 왼쪽 화면 script start
        //====================================================================================================
        this.btn_select_onclick = function(obj,e)
        {
        	this.ds_list.set_enableevent(false);
        	this.ds_list.filter("COL_CHK=='1'");
        	var bUseFlag = false;
        	for(var i = 0 ; i < this.ds_list.getRowCount() ; i++){
        		for(var j = 0 ; j < this.ds_target.getRowCount() ; j++){
        			if(this.ds_list.getColumn(i,"COM_CLSF_CD") == this.ds_target.getColumn(j,"COM_CLSF_CD")){
        				bUseFlag = true;
        				break ;
        			}
        		}
        		if(bUseFlag == false){
        			nNewRow = this.ds_target.addRow();
        			this.ds_target.copyRow(nNewRow, this.ds_list, i);
        		}

        		bUseFlag = false;
        	}
        	this.ds_list.filter("");
        	this.ds_list.set_enableevent(true);
        	this.fn_createView();
        };


        this.fn_createView = function(){
        	var oDiv = null;
        	var aComponent = this.Div00.form.components;

        	for(var i = (aComponent.length-1) ; i >= 0  ; i--){
        		oDiv = this.Div00.form.removeChild(aComponent[i].id);
        		oDiv.destroy();
        	}

        	var nLeft = 10;
        	var nTop = 10;
        	var nWidth = 150;
        	var nHeight =30 ;
        	var nCreateX = 0;
        	var nCreateY = 0;
        	var nDiv_width = this.Div00.getOffsetWidth();

        	for(var i = 0 ; i < this.ds_target.getRowCount() ; i++){
        		oDiv = new Div();
        		nLeft = 10 + (nWidth*nCreateX) + (10*nCreateX);
        		if((nLeft + nWidth+10) > nDiv_width){
        			nCreateX = 0;
        			nCreateY++;
        			nLeft = 10 + (nWidth*nCreateX) + (10*nCreateX);
        		}

        		nTop = 10 +  (nHeight*nCreateY) + (10*nCreateY);
        		oDiv.init("sta_"+i, nLeft, nTop, nWidth, nHeight);
        		this.Div00.form.addChild("div_"+i, oDiv);
        		oDiv.set_url("sample::samplePage03_P01.xfdl");
        		oDiv.set_border("1px  solid #000000");
        		oDiv.uValue = this.ds_target.getColumn(i,"COM_CLSF_CD_NM");
        		oDiv.show();
        		nCreateX++;
        	}
        }

        //개별 div에서 삭제 버튼 누를때 호출되는 함수
        this.cfn_delItem = function(sDivId){
        	var aDivId = sDivId.split("_");
        	this.ds_target.deleteRow(aDivId[1]);
        	this.fn_createView();
        }

        //====================================================================================================
        // 왼쪽 화면 script End
        //====================================================================================================
        this.btn_select00_onclick = function(obj,e)
        {
        	this.ds_list.set_enableevent(false);
        	this.ds_list.filter("COL_CHK=='1'");
        	var bUseFlag = false;
        	for(var i = 0 ; i < this.ds_list.getRowCount() ; i++){
        		for(var j = 0 ; j < this.ds_targetGrd.getRowCount() ; j++){
        			if(this.ds_list.getColumn(i,"COM_CLSF_CD") == this.ds_targetGrd.getColumn(j,"COM_CLSF_CD")){
        				bUseFlag = true;
        				break ;
        			}
        		}
        		if(bUseFlag == false){
        			nNewRow = this.ds_targetGrd.addRow();
        			this.ds_targetGrd.copyRow(nNewRow, this.ds_list, i);
        		}

        		bUseFlag = false;
        	}
        	this.ds_list.filter("");
        	this.ds_list.set_enableevent(true);
        };

        this.Grid00_00_00_oncellclick = function(obj,e)
        {
        	var sEditType = obj.getCellProperty("body",e.cell,"edittype");
        	if(sEditType == "button"){
        		this.ds_targetGrd.deleteRow(e.row);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_select.addEventHandler("onclick",this.btn_select_onclick,this);
            this.btn_select00.addEventHandler("onclick",this.btn_select00_onclick,this);
            this.Grid00_00_00.addEventHandler("oncellclick",this.Grid00_00_00_oncellclick,this);
        };
        this.loadIncludeScript("samplePage03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
