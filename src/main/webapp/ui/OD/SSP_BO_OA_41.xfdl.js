(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_OA_41");
            this.set_titletext("주문일괄변경");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_ITM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UPLD_PGM_IDT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list01", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_ITM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UPLD_PGM_IDT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_ROW_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ERR_OCUR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ERR_OCUR_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_TRANS_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_RSLT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_RSLT_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_MEMO_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_ADJ_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_ADJ_STATS_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_STATS_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_SPEC\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_DATA_VAL_01\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_DATA_VAL_02\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_DATA_VAL_03\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_DATA_VAL_04\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_DATA_VAL_05\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_DATA_VAL_06\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_DATA_VAL_07\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_DATA_VAL_08\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_DATA_VAL_09\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_DATA_VAL_10\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_DATA_VAL_11\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_DATA_VAL_12\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_DATA_VAL_13\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_DATA_VAL_14\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_DATA_VAL_15\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_DATA_VAL_16\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_DATA_VAL_17\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_DATA_VAL_18\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_DATA_VAL_19\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_DATA_VAL_20\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_DATA_VAL_21\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_DATA_VAL_22\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_DATA_VAL_23\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_DATA_VAL_24\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_DATA_VAL_25\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_DATA_VAL_26\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_DATA_VAL_27\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_DATA_VAL_28\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_DATA_VAL_29\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_DATA_VAL_30\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_ODR_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_SALE_ADJ_STATS_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cdList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHG_ITM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_ITM_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IS_SUPPER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list02", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ITM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"loginId\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IUD_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CHN_GB\" type=\"STRING\" size=\"256\"/><Column id=\"RTN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RTN_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_ADJ_STATS_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div01","0","151",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Static("sta_stlInfo","10","0","200","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("■ 목록");
            obj.set_cssclass("sta_WF_title01");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00",null,"28","30","10","16",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("grid_list01","10","38",null,null,"10","10",null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_autofittype("none");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_binddataset("ds_list01");
            obj.set_cellsizingtype("col");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"format_G27\"><Columns><Column size=\"30\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"160\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"행번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"에러코드\"/><Cell col=\"3\" rowspan=\"2\" text=\"에러메세지\"/><Cell col=\"4\" rowspan=\"2\" text=\"MRO 전송일시\"/><Cell col=\"5\" rowspan=\"2\" text=\"MRO 결과코드\"/><Cell col=\"6\" rowspan=\"2\" text=\"MRO 결과메세지\"/><Cell col=\"7\" rowspan=\"2\" text=\"주문번호\" background=\"aliceblue\"/><Cell col=\"8\" rowspan=\"2\" text=\"변경사유\" background=\"aliceblue\"/><Cell col=\"9\" text=\"변경후\"/><Cell col=\"10\" text=\"변경전\"/><Cell col=\"11\" rowspan=\"2\" text=\"매출정산상태\"/><Cell col=\"12\" rowspan=\"2\" text=\"주문상태\"/><Cell col=\"13\" rowspan=\"2\" text=\"운영단위 ID\"/><Cell col=\"14\" rowspan=\"2\" text=\"운영단위명\"/><Cell col=\"15\" rowspan=\"2\" text=\"상품 ID\"/><Cell col=\"16\" rowspan=\"2\" text=\"상품명\"/><Cell col=\"17\" rowspan=\"2\" text=\"대표규격\"/><Cell row=\"1\" col=\"9\" text=\"배송메모\" background=\"aliceblue\"/><Cell row=\"1\" col=\"10\" text=\"배송메모\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:EXCEL_ROW_NO\"/><Cell col=\"2\" text=\"bind:ERR_OCUR_CD\"/><Cell col=\"3\" text=\"bind:ERR_OCUR_CTS\" textAlign=\"left\" tooltiptext=\"bind:ERR_OCUR_CTS\"/><Cell col=\"4\" text=\"bind:MRO_TRANS_DTM\"/><Cell col=\"5\" text=\"bind:MRO_RSLT_CD\"/><Cell col=\"6\" text=\"bind:MRO_RSLT_MSG\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:ODR_NO_ITM_NO\"/><Cell col=\"8\" text=\"bind:CHG_MEMO_CTS\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:EXCEL_DATA_VAL_01\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:EXCEL_DATA_VAL_21\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:SALE_ADJ_STATS_CD\"/><Cell col=\"12\" text=\"bind:ODR_STATS_CD\"/><Cell col=\"13\" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"14\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"15\" text=\"bind:PRD_ID\"/><Cell col=\"16\" text=\"bind:PRD_NM\"/><Cell col=\"17\" text=\"bind:REPR_SPEC\"/></Band></Format><Format id=\"format_S14\"><Columns><Column size=\"30\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"160\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"행번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"에러코드\"/><Cell col=\"3\" rowspan=\"2\" text=\"에러메세지\"/><Cell col=\"4\" rowspan=\"2\" text=\"MRO 전송일시\"/><Cell col=\"5\" rowspan=\"2\" text=\"MRO 결과코드\"/><Cell col=\"6\" rowspan=\"2\" text=\"MRO 결과메세지\"/><Cell col=\"7\" rowspan=\"2\" text=\"주문번호\" background=\"aliceblue\"/><Cell col=\"8\" rowspan=\"2\" text=\"변경사유\" background=\"aliceblue\"/><Cell col=\"9\" text=\"변경후\"/><Cell col=\"10\" text=\"변경전\"/><Cell col=\"11\" rowspan=\"2\" text=\"매출정산상태\"/><Cell col=\"12\" rowspan=\"2\" text=\"주문상태\"/><Cell col=\"13\" rowspan=\"2\" text=\"운영단위 ID\"/><Cell col=\"14\" rowspan=\"2\" text=\"운영단위명\"/><Cell col=\"15\" rowspan=\"2\" text=\"상품 ID\"/><Cell col=\"16\" rowspan=\"2\" text=\"상품명\"/><Cell col=\"17\" rowspan=\"2\" text=\"대표규격\"/><Cell row=\"1\" col=\"9\" text=\"상품별구매사유\" background=\"aliceblue\"/><Cell row=\"1\" col=\"10\" text=\"상품별구매사유\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:EXCEL_ROW_NO\"/><Cell col=\"2\" text=\"bind:ERR_OCUR_CD\"/><Cell col=\"3\" text=\"bind:ERR_OCUR_CTS\" tooltiptext=\"bind:ERR_OCUR_CTS\" tooltiptype=\"hover\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:MRO_TRANS_DTM\"/><Cell col=\"5\" text=\"bind:MRO_RSLT_CD\"/><Cell col=\"6\" text=\"bind:MRO_RSLT_MSG\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:ODR_NO_ITM_NO\"/><Cell col=\"8\" text=\"bind:CHG_MEMO_CTS\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:EXCEL_DATA_VAL_01\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:EXCEL_DATA_VAL_21\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:SALE_ADJ_STATS_CD\"/><Cell col=\"12\" text=\"bind:ODR_STATS_CD\"/><Cell col=\"13\" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"14\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"15\" text=\"bind:PRD_ID\"/><Cell col=\"16\" text=\"bind:PRD_NM\"/><Cell col=\"17\" text=\"bind:REPR_SPEC\"/></Band></Format><Format id=\"format_S15\"><Columns><Column size=\"30\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"122\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"160\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"행번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"에러코드\"/><Cell col=\"3\" rowspan=\"2\" text=\"에러메세지\"/><Cell col=\"4\" rowspan=\"2\" text=\"MRO 전송일시\"/><Cell col=\"5\" rowspan=\"2\" text=\"MRO 결과코드\"/><Cell col=\"6\" rowspan=\"2\" text=\"MRO 결과메세지\"/><Cell col=\"7\" rowspan=\"2\" text=\"주문번호\" background=\"aliceblue\"/><Cell col=\"8\" rowspan=\"2\" text=\"변경사유\" background=\"aliceblue\"/><Cell col=\"9\" text=\"변경후\"/><Cell col=\"10\" text=\"변경전\"/><Cell col=\"11\" rowspan=\"2\" text=\"매출정산상태\"/><Cell col=\"12\" rowspan=\"2\" text=\"주문상태\"/><Cell col=\"13\" rowspan=\"2\" text=\"운영단위 ID\"/><Cell col=\"14\" rowspan=\"2\" text=\"운영단위명\"/><Cell col=\"15\" rowspan=\"2\" text=\"상품 ID\"/><Cell col=\"16\" rowspan=\"2\" text=\"상품명\"/><Cell col=\"17\" rowspan=\"2\" text=\"대표규격\"/><Cell row=\"1\" col=\"9\" text=\"구매사유\" background=\"aliceblue\"/><Cell row=\"1\" col=\"10\" text=\"구매사유\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:EXCEL_ROW_NO\"/><Cell col=\"2\" text=\"bind:ERR_OCUR_CD\"/><Cell col=\"3\" text=\"bind:ERR_OCUR_CTS\" tooltiptext=\"bind:ERR_OCUR_CTS\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:MRO_TRANS_DTM\"/><Cell col=\"5\" text=\"bind:MRO_RSLT_CD\"/><Cell col=\"6\" text=\"bind:MRO_RSLT_MSG\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:ODR_NO_ITM_NO\"/><Cell col=\"8\" text=\"bind:CHG_MEMO_CTS\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:EXCEL_DATA_VAL_01\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:EXCEL_DATA_VAL_21\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:SALE_ADJ_STATS_CD\"/><Cell col=\"12\" text=\"bind:ODR_STATS_CD\"/><Cell col=\"13\" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"14\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"15\" text=\"bind:PRD_ID\"/><Cell col=\"16\" text=\"bind:PRD_NM\"/><Cell col=\"17\" text=\"bind:REPR_SPEC\"/></Band></Format><Format id=\"format_G29\"><Columns><Column size=\"30\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"113\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"160\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"행번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"에러코드\"/><Cell col=\"3\" rowspan=\"2\" text=\"에러메세지\"/><Cell col=\"4\" rowspan=\"2\" text=\"MRO 전송일시\"/><Cell col=\"5\" rowspan=\"2\" text=\"MRO 결과코드\"/><Cell col=\"6\" rowspan=\"2\" text=\"MRO 결과메세지\"/><Cell col=\"7\" rowspan=\"2\" text=\"주문번호\" background=\"aliceblue\"/><Cell col=\"8\" rowspan=\"2\" text=\"변경사유\" background=\"aliceblue\"/><Cell col=\"9\" text=\"변경후\"/><Cell col=\"10\" text=\"변경전\"/><Cell col=\"11\" rowspan=\"2\" text=\"매출정산상태\"/><Cell col=\"12\" rowspan=\"2\" text=\"주문상태\"/><Cell col=\"13\" rowspan=\"2\" text=\"운영단위 ID\"/><Cell col=\"14\" rowspan=\"2\" text=\"운영단위명\"/><Cell col=\"15\" rowspan=\"2\" text=\"상품 ID\"/><Cell col=\"16\" rowspan=\"2\" text=\"상품명\"/><Cell col=\"17\" rowspan=\"2\" text=\"대표규격\"/><Cell row=\"1\" col=\"9\" text=\"고객 P/O 번호\" background=\"aliceblue\"/><Cell row=\"1\" col=\"10\" text=\"고객 P/O 번호\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:EXCEL_ROW_NO\"/><Cell col=\"2\" text=\"bind:ERR_OCUR_CD\"/><Cell col=\"3\" text=\"bind:ERR_OCUR_CTS\" tooltiptext=\"bind:ERR_OCUR_CTS\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:MRO_TRANS_DTM\"/><Cell col=\"5\" text=\"bind:MRO_RSLT_CD\"/><Cell col=\"6\" text=\"bind:MRO_RSLT_MSG\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:ODR_NO_ITM_NO\"/><Cell col=\"8\" text=\"bind:CHG_MEMO_CTS\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:EXCEL_DATA_VAL_01\"/><Cell col=\"10\" text=\"bind:EXCEL_DATA_VAL_21\"/><Cell col=\"11\" text=\"bind:SALE_ADJ_STATS_CD\"/><Cell col=\"12\" text=\"bind:ODR_STATS_CD\"/><Cell col=\"13\" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"14\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"15\" text=\"bind:PRD_ID\"/><Cell col=\"16\" text=\"bind:PRD_NM\"/><Cell col=\"17\" text=\"bind:REPR_SPEC\"/></Band></Format><Format id=\"format_G30\"><Columns><Column size=\"30\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"104\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"160\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"행번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"에러코드\"/><Cell col=\"3\" rowspan=\"2\" text=\"에러메세지\"/><Cell col=\"4\" rowspan=\"2\" text=\"MRO 전송일시\"/><Cell col=\"5\" rowspan=\"2\" text=\"MRO 결과코드\"/><Cell col=\"6\" rowspan=\"2\" text=\"MRO 결과메세지\"/><Cell col=\"7\" rowspan=\"2\" text=\"주문번호\" background=\"aliceblue\"/><Cell col=\"8\" rowspan=\"2\" text=\"변경 사유\" background=\"aliceblue\"/><Cell col=\"9\" text=\"변경후\"/><Cell col=\"10\" text=\"변경전\"/><Cell col=\"11\" rowspan=\"2\" text=\"매출정산상태\"/><Cell col=\"12\" rowspan=\"2\" text=\"주문상태\"/><Cell col=\"13\" rowspan=\"2\" text=\"운영단위 ID\"/><Cell col=\"14\" rowspan=\"2\" text=\"운영단위명\"/><Cell col=\"15\" rowspan=\"2\" text=\"상품 ID\"/><Cell col=\"16\" rowspan=\"2\" text=\"상품명\"/><Cell col=\"17\" rowspan=\"2\" text=\"대표규격\"/><Cell row=\"1\" col=\"9\" text=\"고객 StockNo\" background=\"aliceblue\"/><Cell row=\"1\" col=\"10\" text=\"고객 StockNo\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:EXCEL_ROW_NO\"/><Cell col=\"2\" text=\"bind:ERR_OCUR_CD\"/><Cell col=\"3\" text=\"bind:ERR_OCUR_CTS\" tooltiptext=\"bind:ERR_OCUR_CTS\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:MRO_TRANS_DTM\"/><Cell col=\"5\" text=\"bind:MRO_RSLT_CD\"/><Cell col=\"6\" text=\"bind:MRO_RSLT_MSG\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:ODR_NO_ITM_NO\"/><Cell col=\"8\" text=\"bind:CHG_MEMO_CTS\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:EXCEL_DATA_VAL_01\"/><Cell col=\"10\" text=\"bind:EXCEL_DATA_VAL_21\"/><Cell col=\"11\" text=\"bind:SALE_ADJ_STATS_CD\"/><Cell col=\"12\" text=\"bind:ODR_STATS_CD\"/><Cell col=\"13\" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"14\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"15\" text=\"bind:PRD_ID\"/><Cell col=\"16\" text=\"bind:PRD_NM\"/><Cell col=\"17\" text=\"bind:REPR_SPEC\"/></Band></Format><Format id=\"format_G19\"><Columns><Column size=\"30\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"115\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"160\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"행번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"에러코드\"/><Cell col=\"3\" rowspan=\"2\" text=\"에러메세지\"/><Cell col=\"4\" rowspan=\"2\" text=\"MRO 전송일시\"/><Cell col=\"5\" rowspan=\"2\" text=\"MRO 결과코드\"/><Cell col=\"6\" rowspan=\"2\" text=\"MRO 결과메세지\"/><Cell col=\"7\" rowspan=\"2\" text=\"주문번호\" background=\"aliceblue\"/><Cell col=\"8\" rowspan=\"2\" text=\"변경사유\" background=\"aliceblue\"/><Cell col=\"9\" colspan=\"2\" text=\"변경후\"/><Cell col=\"11\" colspan=\"2\" text=\"변경전\"/><Cell col=\"13\" rowspan=\"2\" text=\"매출정산상태\"/><Cell col=\"14\" rowspan=\"2\" text=\"주문상태\"/><Cell col=\"15\" rowspan=\"2\" text=\"운영단위 ID\"/><Cell col=\"16\" rowspan=\"2\" text=\"운영단위명\"/><Cell col=\"17\" rowspan=\"2\" text=\"상품 ID\"/><Cell col=\"18\" rowspan=\"2\" text=\"상품명\"/><Cell col=\"19\" rowspan=\"2\" text=\"대표규격\"/><Cell row=\"1\" col=\"9\" text=\"주문상태코드\" background=\"#ebebee\"/><Cell row=\"1\" col=\"10\" text=\"주문상태코드명\"/><Cell row=\"1\" col=\"11\" text=\"주문상태코드\"/><Cell row=\"1\" col=\"12\" text=\"주문상태코드명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:EXCEL_ROW_NO\"/><Cell col=\"2\" text=\"bind:ERR_OCUR_CD\"/><Cell col=\"3\" text=\"bind:ERR_OCUR_CTS\" tooltiptext=\"bind:ERR_OCUR_CTS\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:MRO_TRANS_DTM\"/><Cell col=\"5\" text=\"bind:MRO_RSLT_CD\"/><Cell col=\"6\" text=\"bind:MRO_RSLT_MSG\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:ODR_NO_ITM_NO\"/><Cell col=\"8\" text=\"bind:CHG_MEMO_CTS\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:EXCEL_DATA_VAL_01\"/><Cell col=\"10\" text=\"bind:EXCEL_DATA_VAL_02\"/><Cell col=\"11\" text=\"bind:EXCEL_DATA_VAL_21\"/><Cell col=\"12\" text=\"bind:EXCEL_DATA_VAL_22\"/><Cell col=\"13\" text=\"bind:SALE_ADJ_STATS_CD\"/><Cell col=\"14\" text=\"bind:ODR_STATS_CD\"/><Cell col=\"15\" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"16\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"17\" text=\"bind:PRD_ID\"/><Cell col=\"18\" text=\"bind:PRD_NM\"/><Cell col=\"19\" text=\"bind:REPR_SPEC\"/></Band></Format><Format id=\"format_G57\"><Columns><Column size=\"30\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"108\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"160\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"행번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"에러코드\"/><Cell col=\"3\" rowspan=\"2\" text=\"에러메세지\"/><Cell col=\"4\" rowspan=\"2\" text=\"MRO 전송일시\"/><Cell col=\"5\" rowspan=\"2\" text=\"MRO 결과코드\"/><Cell col=\"6\" rowspan=\"2\" text=\"MRO 결과메세지\"/><Cell col=\"7\" rowspan=\"2\" text=\"주문번호\" background=\"aliceblue\"/><Cell col=\"8\" rowspan=\"2\" text=\"변경사유\" background=\"aliceblue\"/><Cell col=\"9\" colspan=\"2\" text=\"변경후\"/><Cell col=\"11\" colspan=\"2\" text=\"변경전\"/><Cell col=\"13\" rowspan=\"2\" text=\"매출정산상태\"/><Cell col=\"14\" rowspan=\"2\" text=\"주문상태\"/><Cell col=\"15\" rowspan=\"2\" text=\"운영단위 ID\"/><Cell col=\"16\" rowspan=\"2\" text=\"운영단위명\"/><Cell col=\"17\" rowspan=\"2\" text=\"상품 ID\"/><Cell col=\"18\" rowspan=\"2\" text=\"상품명\"/><Cell col=\"19\" rowspan=\"2\" text=\"대표규격\"/><Cell row=\"1\" col=\"9\" text=\"주문상태코드\" background=\"#ebebee\"/><Cell row=\"1\" col=\"10\" text=\"주문상태코드명\"/><Cell row=\"1\" col=\"11\" text=\"주문상태코드\"/><Cell row=\"1\" col=\"12\" text=\"주문상태코드명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:EXCEL_ROW_NO\"/><Cell col=\"2\" text=\"bind:ERR_OCUR_CD\"/><Cell col=\"3\" text=\"bind:ERR_OCUR_CTS\" tooltiptext=\"bind:ERR_OCUR_CTS\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:MRO_TRANS_DTM\"/><Cell col=\"5\" text=\"bind:MRO_RSLT_CD\"/><Cell col=\"6\" text=\"bind:MRO_RSLT_MSG\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:ODR_NO_ITM_NO\"/><Cell col=\"8\" text=\"bind:CHG_MEMO_CTS\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:EXCEL_DATA_VAL_01\"/><Cell col=\"10\" text=\"bind:EXCEL_DATA_VAL_02\"/><Cell col=\"11\" text=\"bind:EXCEL_DATA_VAL_21\"/><Cell col=\"12\" text=\"bind:EXCEL_DATA_VAL_22\"/><Cell col=\"13\" text=\"bind:SALE_ADJ_STATS_CD\"/><Cell col=\"14\" text=\"bind:ODR_STATS_CD\"/><Cell col=\"15\" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"16\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"17\" text=\"bind:PRD_ID\"/><Cell col=\"18\" text=\"bind:PRD_NM\"/><Cell col=\"19\" text=\"bind:REPR_SPEC\"/></Band></Format><Format id=\"format_S16\"><Columns><Column size=\"30\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"125\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"160\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"행번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"에러코드\"/><Cell col=\"3\" rowspan=\"2\" text=\"에러메세지\"/><Cell col=\"4\" rowspan=\"2\" text=\"MRO 전송일시\"/><Cell col=\"5\" rowspan=\"2\" text=\"MRO 결과코드\"/><Cell col=\"6\" rowspan=\"2\" text=\"MRO 결과메세지\"/><Cell col=\"7\" rowspan=\"2\" text=\"주문번호\" background=\"aliceblue\"/><Cell col=\"8\" rowspan=\"2\" text=\"변경사유\" background=\"aliceblue\"/><Cell col=\"9\" colspan=\"2\" text=\"변경후\"/><Cell col=\"11\" colspan=\"2\" text=\"변경전\"/><Cell col=\"13\" rowspan=\"2\" text=\"매출정산상태\"/><Cell col=\"14\" rowspan=\"2\" text=\"주문상태\"/><Cell col=\"15\" rowspan=\"2\" text=\"운영단위 ID\"/><Cell col=\"16\" rowspan=\"2\" text=\"운영단위명\"/><Cell col=\"17\" rowspan=\"2\" text=\"상품 ID\"/><Cell col=\"18\" rowspan=\"2\" text=\"상품명\"/><Cell col=\"19\" rowspan=\"2\" text=\"대표규격\"/><Cell row=\"1\" col=\"9\" text=\"주문상태코드\" background=\"#ebebee\"/><Cell row=\"1\" col=\"10\" text=\"주문상태코드명\"/><Cell row=\"1\" col=\"11\" text=\"주문상태코드\"/><Cell row=\"1\" col=\"12\" text=\"주문상태코드명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:EXCEL_ROW_NO\"/><Cell col=\"2\" text=\"bind:ERR_OCUR_CD\"/><Cell col=\"3\" text=\"bind:ERR_OCUR_CTS\" tooltiptext=\"bind:ERR_OCUR_CTS\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:MRO_TRANS_DTM\"/><Cell col=\"5\" text=\"bind:MRO_RSLT_CD\"/><Cell col=\"6\" text=\"bind:MRO_RSLT_MSG\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:ODR_NO_ITM_NO\"/><Cell col=\"8\" text=\"bind:CHG_MEMO_CTS\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:EXCEL_DATA_VAL_01\"/><Cell col=\"10\" text=\"bind:EXCEL_DATA_VAL_02\"/><Cell col=\"11\" text=\"bind:EXCEL_DATA_VAL_21\"/><Cell col=\"12\" text=\"bind:EXCEL_DATA_VAL_22\"/><Cell col=\"13\" text=\"bind:SALE_ADJ_STATS_CD\"/><Cell col=\"14\" text=\"bind:ODR_STATS_CD\"/><Cell col=\"15\" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"16\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"17\" text=\"bind:PRD_ID\"/><Cell col=\"18\" text=\"bind:PRD_NM\"/><Cell col=\"19\" text=\"bind:REPR_SPEC\"/></Band></Format><Format id=\"format_G42\"><Columns><Column size=\"30\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"113\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"160\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"행번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"에러코드\"/><Cell col=\"3\" rowspan=\"2\" text=\"에러메세지\"/><Cell col=\"4\" rowspan=\"2\" text=\"MRO 전송일시\"/><Cell col=\"5\" rowspan=\"2\" text=\"MRO 결과코드\"/><Cell col=\"6\" rowspan=\"2\" text=\"MRO 결과메세지\"/><Cell col=\"7\" rowspan=\"2\" text=\"주문번호\" background=\"aliceblue\"/><Cell col=\"8\" rowspan=\"2\" text=\"변경사유\" background=\"aliceblue\"/><Cell col=\"9\" colspan=\"2\" text=\"변경후\"/><Cell col=\"11\" colspan=\"2\" text=\"변경전\"/><Cell col=\"13\" rowspan=\"2\" text=\"매출정산상태\"/><Cell col=\"14\" rowspan=\"2\" text=\"주문상태\"/><Cell col=\"15\" rowspan=\"2\" text=\"운영단위 ID\"/><Cell col=\"16\" rowspan=\"2\" text=\"운영단위명\"/><Cell col=\"17\" rowspan=\"2\" text=\"상품 ID\"/><Cell col=\"18\" rowspan=\"2\" text=\"상품명\"/><Cell col=\"19\" rowspan=\"2\" text=\"대표규격\"/><Cell row=\"1\" col=\"9\" text=\"귀속부서 ID\" background=\"aliceblue\"/><Cell row=\"1\" col=\"10\" text=\"귀속부서명\"/><Cell row=\"1\" col=\"11\" text=\"귀속부서 ID\"/><Cell row=\"1\" col=\"12\" text=\"귀속부서명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:EXCEL_ROW_NO\"/><Cell col=\"2\" text=\"bind:ERR_OCUR_CD\"/><Cell col=\"3\" text=\"bind:ERR_OCUR_CTS\" tooltiptext=\"bind:ERR_OCUR_CTS\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:MRO_TRANS_DTM\"/><Cell col=\"5\" text=\"bind:MRO_RSLT_CD\"/><Cell col=\"6\" text=\"bind:MRO_RSLT_MSG\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:ODR_NO_ITM_NO\"/><Cell col=\"8\" text=\"bind:CHG_MEMO_CTS\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:EXCEL_DATA_VAL_01\"/><Cell col=\"10\" text=\"bind:EXCEL_DATA_VAL_02\"/><Cell col=\"11\" text=\"bind:EXCEL_DATA_VAL_21\"/><Cell col=\"12\" text=\"bind:EXCEL_DATA_VAL_22\"/><Cell col=\"13\" text=\"bind:SALE_ADJ_STATS_CD\"/><Cell col=\"14\" text=\"bind:ODR_STATS_CD\"/><Cell col=\"15\" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"16\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"17\" text=\"bind:PRD_ID\"/><Cell col=\"18\" text=\"bind:PRD_NM\"/><Cell col=\"19\" text=\"bind:REPR_SPEC\"/></Band></Format><Format id=\"format_G41\"><Columns><Column size=\"30\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"124\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"160\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"행번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"에러코드\"/><Cell col=\"3\" rowspan=\"2\" text=\"에러메세지\"/><Cell col=\"4\" rowspan=\"2\" text=\"MRO 전송일시\"/><Cell col=\"5\" rowspan=\"2\" text=\"MRO 결과코드\"/><Cell col=\"6\" rowspan=\"2\" text=\"MRO 결과메세지\"/><Cell col=\"7\" rowspan=\"2\" text=\"주문번호\" background=\"aliceblue\"/><Cell col=\"8\" rowspan=\"2\" text=\"변경사유\" background=\"aliceblue\"/><Cell col=\"9\" colspan=\"5\" text=\"변경후\"/><Cell col=\"14\" colspan=\"5\" text=\"변경전\"/><Cell col=\"19\" rowspan=\"2\" text=\"매출정산상태\"/><Cell col=\"20\" rowspan=\"2\" text=\"주문상태\"/><Cell col=\"21\" rowspan=\"2\" text=\"운영단위 ID\"/><Cell col=\"22\" rowspan=\"2\" text=\"운영단위명\"/><Cell col=\"23\" rowspan=\"2\" text=\"상품 ID\"/><Cell col=\"24\" rowspan=\"2\" text=\"상품명\"/><Cell col=\"25\" rowspan=\"2\" text=\"대표규격\"/><Cell row=\"1\" col=\"9\" text=\"비용이체부서\" background=\"aliceblue\"/><Cell row=\"1\" col=\"10\" text=\"계정 ID\" background=\"aliceblue\"/><Cell row=\"1\" col=\"11\" text=\"비용이체부서명\"/><Cell row=\"1\" col=\"12\" text=\"계정명\"/><Cell row=\"1\" col=\"13\" text=\"고객사계정코드\"/><Cell row=\"1\" col=\"14\" text=\"비용이체부서\"/><Cell row=\"1\" col=\"15\" text=\"비용이체부서명\"/><Cell row=\"1\" col=\"16\" text=\"계정 ID\"/><Cell row=\"1\" col=\"17\" text=\"계정명\"/><Cell row=\"1\" col=\"18\" text=\"고객사계정코드\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:EXCEL_ROW_NO\"/><Cell col=\"2\" text=\"bind:ERR_OCUR_CD\"/><Cell col=\"3\" text=\"bind:ERR_OCUR_CTS\" tooltiptext=\"bind:ERR_OCUR_CTS\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:MRO_TRANS_DTM\"/><Cell col=\"5\" text=\"bind:MRO_RSLT_CD\"/><Cell col=\"6\" text=\"bind:MRO_RSLT_MSG\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:ODR_NO_ITM_NO\"/><Cell col=\"8\" text=\"bind:CHG_MEMO_CTS\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:EXCEL_DATA_VAL_01\"/><Cell col=\"10\" text=\"bind:EXCEL_DATA_VAL_02\"/><Cell col=\"11\" text=\"bind:EXCEL_DATA_VAL_03\"/><Cell col=\"12\" text=\"bind:EXCEL_DATA_VAL_04\"/><Cell col=\"13\" text=\"bind:EXCEL_DATA_VAL_05\"/><Cell col=\"14\" text=\"bind:EXCEL_DATA_VAL_21\"/><Cell col=\"15\" text=\"bind:EXCEL_DATA_VAL_23\"/><Cell col=\"16\" text=\"bind:EXCEL_DATA_VAL_22\"/><Cell col=\"17\" text=\"bind:EXCEL_DATA_VAL_24\"/><Cell col=\"18\" text=\"bind:EXCEL_DATA_VAL_25\"/><Cell col=\"19\" text=\"bind:SALE_ADJ_STATS_CD\"/><Cell col=\"20\" text=\"bind:ODR_STATS_CD\"/><Cell col=\"21\" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"22\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"23\" text=\"bind:PRD_ID\"/><Cell col=\"24\" text=\"bind:PRD_NM\"/><Cell col=\"25\" text=\"bind:REPR_SPEC\"/></Band></Format><Format id=\"format_G62\"><Columns><Column size=\"30\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"124\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"160\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"행번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"에러코드\"/><Cell col=\"3\" rowspan=\"2\" text=\"에러메세지\"/><Cell col=\"4\" rowspan=\"2\" text=\"MRO 전송일시\"/><Cell col=\"5\" rowspan=\"2\" text=\"MRO 결과코드\"/><Cell col=\"6\" rowspan=\"2\" text=\"MRO 결과메세지\"/><Cell col=\"7\" rowspan=\"2\" text=\"주문번호\" background=\"aliceblue\"/><Cell col=\"8\" rowspan=\"2\" text=\"변경사유\" background=\"aliceblue\"/><Cell col=\"9\" colspan=\"7\" text=\"변경후\"/><Cell col=\"16\" colspan=\"7\" text=\"변경전\"/><Cell col=\"23\" rowspan=\"2\" text=\"매출정산상태\"/><Cell col=\"24\" rowspan=\"2\" text=\"주문상태\"/><Cell col=\"25\" rowspan=\"2\" text=\"운영단위 ID\"/><Cell col=\"26\" rowspan=\"2\" text=\"운영단위명\"/><Cell col=\"27\" rowspan=\"2\" text=\"상품 ID\"/><Cell col=\"28\" rowspan=\"2\" text=\"상품명\"/><Cell col=\"29\" rowspan=\"2\" text=\"대표규격\"/><Cell row=\"1\" col=\"9\" text=\"배송지 ID\" background=\"aliceblue\"/><Cell row=\"1\" col=\"10\" text=\"수령인명\"/><Cell row=\"1\" col=\"11\" text=\"우편번호\"/><Cell row=\"1\" col=\"12\" text=\"대표주소\"/><Cell row=\"1\" col=\"13\" text=\"상세주소\"/><Cell row=\"1\" col=\"14\" text=\"전화번호\"/><Cell row=\"1\" col=\"15\" text=\"휴대폰번호\"/><Cell row=\"1\" col=\"16\" text=\"배송지 ID\"/><Cell row=\"1\" col=\"17\" text=\"수령인명\"/><Cell row=\"1\" col=\"18\" text=\"우편번호\"/><Cell row=\"1\" col=\"19\" text=\"대표주소\"/><Cell row=\"1\" col=\"20\" text=\"상세주소\"/><Cell row=\"1\" col=\"21\" text=\"전화번호\"/><Cell row=\"1\" col=\"22\" text=\"휴대폰번호\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:EXCEL_ROW_NO\"/><Cell col=\"2\" text=\"bind:ERR_OCUR_CD\"/><Cell col=\"3\" text=\"bind:ERR_OCUR_CTS\" tooltiptext=\"bind:ERR_OCUR_CTS\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:MRO_TRANS_DTM\"/><Cell col=\"5\" text=\"bind:MRO_RSLT_CD\"/><Cell col=\"6\" text=\"bind:MRO_RSLT_MSG\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:ODR_NO_ITM_NO\"/><Cell col=\"8\" text=\"bind:CHG_MEMO_CTS\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:EXCEL_DATA_VAL_01\"/><Cell col=\"10\" text=\"bind:EXCEL_DATA_VAL_02\"/><Cell col=\"11\" text=\"bind:EXCEL_DATA_VAL_03\"/><Cell col=\"12\" text=\"bind:EXCEL_DATA_VAL_04\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:EXCEL_DATA_VAL_05\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:EXCEL_DATA_VAL_06\"/><Cell col=\"15\" text=\"bind:EXCEL_DATA_VAL_07\"/><Cell col=\"16\" text=\"bind:EXCEL_DATA_VAL_21\"/><Cell col=\"17\" text=\"bind:EXCEL_DATA_VAL_22\"/><Cell col=\"18\" text=\"bind:EXCEL_DATA_VAL_23\"/><Cell col=\"19\" text=\"bind:EXCEL_DATA_VAL_24\" textAlign=\"left\"/><Cell col=\"20\" text=\"bind:EXCEL_DATA_VAL_25\" textAlign=\"left\"/><Cell col=\"21\" text=\"bind:EXCEL_DATA_VAL_26\"/><Cell col=\"22\" text=\"bind:EXCEL_DATA_VAL_27\"/><Cell col=\"23\" text=\"bind:SALE_ADJ_STATS_CD\"/><Cell col=\"24\" text=\"bind:ODR_STATS_CD\"/><Cell col=\"25\" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"26\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"27\" text=\"bind:PRD_ID\"/><Cell col=\"28\" text=\"bind:PRD_NM\"/><Cell col=\"29\" text=\"bind:REPR_SPEC\"/></Band></Format><Format id=\"format_G23\"><Columns><Column size=\"30\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"121\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"160\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"행번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"에러코드\"/><Cell col=\"3\" rowspan=\"2\" text=\"에러메세지\"/><Cell col=\"4\" rowspan=\"2\" text=\"MRO 전송일시\"/><Cell col=\"5\" rowspan=\"2\" text=\"MRO 결과코드\"/><Cell col=\"6\" rowspan=\"2\" text=\"MRO 결과메세지\"/><Cell col=\"7\" rowspan=\"2\" text=\"주문번호\" background=\"aliceblue\"/><Cell col=\"8\" rowspan=\"2\" text=\"변경사유\" background=\"aliceblue\"/><Cell col=\"9\" colspan=\"10\" text=\"변경후\"/><Cell col=\"19\" colspan=\"10\" text=\"변경전\"/><Cell col=\"29\" rowspan=\"2\" text=\"매출정산상태\"/><Cell col=\"30\" rowspan=\"2\" text=\"주문상태\"/><Cell col=\"31\" rowspan=\"2\" text=\"운영단위 ID\"/><Cell col=\"32\" rowspan=\"2\" text=\"운영단위명\"/><Cell col=\"33\" rowspan=\"2\" text=\"상품 ID\"/><Cell col=\"34\" rowspan=\"2\" text=\"상품명\"/><Cell col=\"35\" rowspan=\"2\" text=\"대표규격\"/><Cell row=\"1\" col=\"9\" text=\"참조코드1\" background=\"aliceblue\"/><Cell row=\"1\" col=\"10\" text=\"참조코드2\" background=\"aliceblue\"/><Cell row=\"1\" col=\"11\" text=\"참조코드3\" background=\"aliceblue\"/><Cell row=\"1\" col=\"12\" text=\"참조코드4\" background=\"aliceblue\"/><Cell row=\"1\" col=\"13\" text=\"참조코드5\" background=\"aliceblue\"/><Cell row=\"1\" col=\"14\" text=\"참조코드1명\"/><Cell row=\"1\" col=\"15\" text=\"참조코드2명\"/><Cell row=\"1\" col=\"16\" text=\"참조코드3명\"/><Cell row=\"1\" col=\"17\" text=\"참조코드4명\"/><Cell row=\"1\" col=\"18\" text=\"참조코드5명\"/><Cell row=\"1\" col=\"19\" text=\"참조코드1\"/><Cell row=\"1\" col=\"20\" text=\"참조코드1명\"/><Cell row=\"1\" col=\"21\" text=\"참조코드2\"/><Cell row=\"1\" col=\"22\" text=\"참조코드2명\"/><Cell row=\"1\" col=\"23\" text=\"참조코드3\"/><Cell row=\"1\" col=\"24\" text=\"참조코드3명\"/><Cell row=\"1\" col=\"25\" text=\"참조코드4\"/><Cell row=\"1\" col=\"26\" text=\"참조코드4명\"/><Cell row=\"1\" col=\"27\" text=\"참조코드5\"/><Cell row=\"1\" col=\"28\" text=\"참조코드5명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:EXCEL_ROW_NO\"/><Cell col=\"2\" text=\"bind:ERR_OCUR_CD\"/><Cell col=\"3\" text=\"bind:ERR_OCUR_CTS\" tooltiptext=\"bind:ERR_OCUR_CTS\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:MRO_TRANS_DTM\"/><Cell col=\"5\" text=\"bind:MRO_RSLT_CD\"/><Cell col=\"6\" text=\"bind:MRO_RSLT_MSG\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:ODR_NO_ITM_NO\"/><Cell col=\"8\" text=\"bind:CHG_MEMO_CTS\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:EXCEL_DATA_VAL_01\"/><Cell col=\"10\" text=\"bind:EXCEL_DATA_VAL_02\"/><Cell col=\"11\" text=\"bind:EXCEL_DATA_VAL_03\"/><Cell col=\"12\" text=\"bind:EXCEL_DATA_VAL_04\"/><Cell col=\"13\" text=\"bind:EXCEL_DATA_VAL_05\"/><Cell col=\"14\" text=\"bind:EXCEL_DATA_VAL_06\"/><Cell col=\"15\" text=\"bind:EXCEL_DATA_VAL_07\"/><Cell col=\"16\" text=\"bind:EXCEL_DATA_VAL_08\"/><Cell col=\"17\" text=\"bind:EXCEL_DATA_VAL_09\"/><Cell col=\"18\" text=\"bind:EXCEL_DATA_VAL_10\"/><Cell col=\"19\" text=\"bind:EXCEL_DATA_VAL_21\"/><Cell col=\"20\" text=\"bind:EXCEL_DATA_VAL_22\"/><Cell col=\"21\" text=\"bind:EXCEL_DATA_VAL_23\"/><Cell col=\"22\" text=\"bind:EXCEL_DATA_VAL_24\"/><Cell col=\"23\" text=\"bind:EXCEL_DATA_VAL_25\"/><Cell col=\"24\" text=\"bind:EXCEL_DATA_VAL_26\"/><Cell col=\"25\" text=\"bind:EXCEL_DATA_VAL_27\"/><Cell col=\"26\" text=\"bind:EXCEL_DATA_VAL_28\"/><Cell col=\"27\" text=\"bind:EXCEL_DATA_VAL_29\"/><Cell col=\"28\" text=\"bind:EXCEL_DATA_VAL_30\"/><Cell col=\"29\" text=\"bind:SALE_ADJ_STATS_CD\"/><Cell col=\"30\" text=\"bind:ODR_STATS_CD\"/><Cell col=\"31\" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"32\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"33\" text=\"bind:PRD_ID\"/><Cell col=\"34\" text=\"bind:PRD_NM\"/><Cell col=\"35\" text=\"bind:REPR_SPEC\"/></Band></Format><Format id=\"format_G80\"><Columns><Column size=\"30\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"126\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"160\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"행번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"에러코드\"/><Cell col=\"3\" rowspan=\"2\" text=\"에러메세지\"/><Cell col=\"4\" rowspan=\"2\" text=\"MRO 전송일시\"/><Cell col=\"5\" rowspan=\"2\" text=\"MRO 결과코드\"/><Cell col=\"6\" rowspan=\"2\" text=\"MRO 결과메세지\"/><Cell col=\"7\" rowspan=\"2\" text=\"주문번호\" background=\"aliceblue\"/><Cell col=\"8\" rowspan=\"2\" text=\"변경사유\" background=\"aliceblue\"/><Cell col=\"9\" colspan=\"5\" text=\"변경후\"/><Cell col=\"14\" colspan=\"5\" text=\"변경전\"/><Cell col=\"19\" rowspan=\"2\" text=\"매출정산상태\"/><Cell col=\"20\" rowspan=\"2\" text=\"주문상태\"/><Cell col=\"21\" rowspan=\"2\" text=\"운영단위 ID\"/><Cell col=\"22\" rowspan=\"2\" text=\"운영단위명\"/><Cell col=\"23\" rowspan=\"2\" text=\"상품 ID\"/><Cell col=\"24\" rowspan=\"2\" text=\"상품명\"/><Cell col=\"25\" rowspan=\"2\" text=\"대표규격\"/><Cell row=\"1\" col=\"9\" text=\"일회성코드1\" background=\"aliceblue\"/><Cell row=\"1\" col=\"10\" text=\"일회성코드2\" background=\"aliceblue\"/><Cell row=\"1\" col=\"11\" text=\"일회성코드3\" background=\"aliceblue\"/><Cell row=\"1\" col=\"12\" text=\"일회성코드4\" background=\"aliceblue\"/><Cell row=\"1\" col=\"13\" text=\"일회성코드5\" background=\"aliceblue\"/><Cell row=\"1\" col=\"14\" text=\"일회성코드1\"/><Cell row=\"1\" col=\"15\" text=\"일회성코드2\"/><Cell row=\"1\" col=\"16\" text=\"일회성코드3\"/><Cell row=\"1\" col=\"17\" text=\"일회성코드4\"/><Cell row=\"1\" col=\"18\" text=\"일회성코드5\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:EXCEL_ROW_NO\"/><Cell col=\"2\" text=\"bind:ERR_OCUR_CD\"/><Cell col=\"3\" text=\"bind:ERR_OCUR_CTS\" tooltiptext=\"bind:ERR_OCUR_CTS\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:MRO_TRANS_DTM\"/><Cell col=\"5\" text=\"bind:MRO_RSLT_CD\"/><Cell col=\"6\" text=\"bind:MRO_RSLT_MSG\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:ODR_NO_ITM_NO\"/><Cell col=\"8\" text=\"bind:CHG_MEMO_CTS\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:EXCEL_DATA_VAL_01\"/><Cell col=\"10\" text=\"bind:EXCEL_DATA_VAL_02\"/><Cell col=\"11\" text=\"bind:EXCEL_DATA_VAL_03\"/><Cell col=\"12\" text=\"bind:EXCEL_DATA_VAL_04\"/><Cell col=\"13\" text=\"bind:EXCEL_DATA_VAL_05\"/><Cell col=\"14\" text=\"bind:EXCEL_DATA_VAL_21\"/><Cell col=\"15\" text=\"bind:EXCEL_DATA_VAL_22\"/><Cell col=\"16\" text=\"bind:EXCEL_DATA_VAL_23\"/><Cell col=\"17\" text=\"bind:EXCEL_DATA_VAL_24\"/><Cell col=\"18\" text=\"bind:EXCEL_DATA_VAL_25\"/><Cell col=\"19\" text=\"bind:SALE_ADJ_STATS_CD\"/><Cell col=\"20\" text=\"bind:ODR_STATS_CD\"/><Cell col=\"21\" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"22\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"23\" text=\"bind:PRD_ID\"/><Cell col=\"24\" text=\"bind:PRD_NM\"/><Cell col=\"25\" text=\"bind:REPR_SPEC\"/></Band></Format><Format id=\"format_G03\"><Columns><Column size=\"30\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"127\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"160\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"행번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"에러코드\"/><Cell col=\"3\" rowspan=\"2\" text=\"에러메세지\"/><Cell col=\"4\" rowspan=\"2\" text=\"MRO 전송일시\"/><Cell col=\"5\" rowspan=\"2\" text=\"MRO 결과코드\"/><Cell col=\"6\" rowspan=\"2\" text=\"MRO 결과메세지\"/><Cell col=\"7\" rowspan=\"2\" text=\"주문번호\" background=\"aliceblue\"/><Cell col=\"8\" rowspan=\"2\" text=\"변경사유\" background=\"aliceblue\"/><Cell col=\"9\" colspan=\"10\" text=\"변경후\"/><Cell col=\"19\" colspan=\"10\" text=\"변경전\"/><Cell col=\"29\" rowspan=\"2\" text=\"매출정산상태\"/><Cell col=\"30\" rowspan=\"2\" text=\"주문상태\"/><Cell col=\"31\" rowspan=\"2\" text=\"운영단위 ID\"/><Cell col=\"32\" rowspan=\"2\" text=\"운영단위명\"/><Cell col=\"33\" rowspan=\"2\" text=\"상품 ID\"/><Cell col=\"34\" rowspan=\"2\" text=\"상품명\"/><Cell col=\"35\" rowspan=\"2\" text=\"대표규격\"/><Cell row=\"1\" col=\"9\" text=\"유통경로코드\" background=\"aliceblue\"/><Cell row=\"1\" col=\"10\" text=\"유통경로코드명\"/><Cell row=\"1\" col=\"11\" text=\"판매단가\"/><Cell row=\"1\" col=\"12\" text=\"판매금액\"/><Cell row=\"1\" col=\"13\" text=\"부가세액\"/><Cell row=\"1\" col=\"14\" text=\"과세유형코드\"/><Cell row=\"1\" col=\"15\" text=\"과세유형코드명\"/><Cell row=\"1\" col=\"16\" text=\"과세구분코드\"/><Cell row=\"1\" col=\"17\" text=\"과세구분코드명\"/><Cell row=\"1\" col=\"18\" text=\"매출환율\"/><Cell row=\"1\" col=\"19\" text=\"유통경로코드\"/><Cell row=\"1\" col=\"20\" text=\"유통경로코드명\"/><Cell row=\"1\" col=\"21\" text=\"판매단가\"/><Cell row=\"1\" col=\"22\" text=\"판매금액\"/><Cell row=\"1\" col=\"23\" text=\"부가세액\"/><Cell row=\"1\" col=\"24\" text=\"과세유형코드\"/><Cell row=\"1\" col=\"25\" text=\"과세유형코드명\"/><Cell row=\"1\" col=\"26\" text=\"과세구분코드\"/><Cell row=\"1\" col=\"27\" text=\"과세구분코드명\"/><Cell row=\"1\" col=\"28\" text=\"매출환율\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:EXCEL_ROW_NO\"/><Cell col=\"2\" text=\"bind:ERR_OCUR_CD\"/><Cell col=\"3\" text=\"bind:ERR_OCUR_CTS\" tooltiptext=\"bind:ERR_OCUR_CTS\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:MRO_TRANS_DTM\"/><Cell col=\"5\" text=\"bind:MRO_RSLT_CD\"/><Cell col=\"6\" text=\"bind:MRO_RSLT_MSG\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:ODR_NO_ITM_NO\"/><Cell col=\"8\" text=\"bind:CHG_MEMO_CTS\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:EXCEL_DATA_VAL_01\"/><Cell col=\"10\" text=\"bind:EXCEL_DATA_VAL_02\"/><Cell col=\"11\" text=\"bind:EXCEL_DATA_VAL_03\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:EXCEL_DATA_VAL_04\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"13\" text=\"bind:EXCEL_DATA_VAL_05\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"14\" text=\"bind:EXCEL_DATA_VAL_06\"/><Cell col=\"15\" text=\"bind:EXCEL_DATA_VAL_07\"/><Cell col=\"16\" text=\"bind:EXCEL_DATA_VAL_08\"/><Cell col=\"17\" text=\"bind:EXCEL_DATA_VAL_09\"/><Cell col=\"18\" text=\"bind:EXCEL_DATA_VAL_10\"/><Cell col=\"19\" text=\"bind:EXCEL_DATA_VAL_21\"/><Cell col=\"20\" text=\"bind:EXCEL_DATA_VAL_22\"/><Cell col=\"21\" text=\"bind:EXCEL_DATA_VAL_23\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"22\" text=\"bind:EXCEL_DATA_VAL_24\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"23\" text=\"bind:EXCEL_DATA_VAL_25\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"24\" text=\"bind:EXCEL_DATA_VAL_26\"/><Cell col=\"25\" text=\"bind:EXCEL_DATA_VAL_27\"/><Cell col=\"26\" text=\"bind:EXCEL_DATA_VAL_28\"/><Cell col=\"27\" text=\"bind:EXCEL_DATA_VAL_29\"/><Cell col=\"28\" text=\"bind:EXCEL_DATA_VAL_30\"/><Cell col=\"29\" text=\"bind:SALE_ADJ_STATS_CD\"/><Cell col=\"30\" text=\"bind:ODR_STATS_CD\"/><Cell col=\"31\" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"32\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"33\" text=\"bind:PRD_ID\"/><Cell col=\"34\" text=\"bind:PRD_NM\"/><Cell col=\"35\" text=\"bind:REPR_SPEC\"/></Band></Format><Format id=\"format_G04\"><Columns><Column size=\"30\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"121\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"160\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"행번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"에러코드\"/><Cell col=\"3\" rowspan=\"2\" text=\"에러메세지\"/><Cell col=\"4\" rowspan=\"2\" text=\"MRO 전송일시\"/><Cell col=\"5\" rowspan=\"2\" text=\"MRO 결과코드\"/><Cell col=\"6\" rowspan=\"2\" text=\"MRO 결과메세지\"/><Cell col=\"7\" rowspan=\"2\" text=\"주문번호\" background=\"aliceblue\"/><Cell col=\"8\" rowspan=\"2\" text=\"변경사유\" background=\"aliceblue\"/><Cell col=\"9\" colspan=\"9\" text=\"변경후\"/><Cell col=\"18\" colspan=\"9\" text=\"변경전\"/><Cell col=\"27\" rowspan=\"2\" text=\"매출정산상태\"/><Cell col=\"28\" rowspan=\"2\" text=\"주문상태\"/><Cell col=\"29\" rowspan=\"2\" text=\"운영단위 ID\"/><Cell col=\"30\" rowspan=\"2\" text=\"운영단위명\"/><Cell col=\"31\" rowspan=\"2\" text=\"상품 ID\"/><Cell col=\"32\" rowspan=\"2\" text=\"상품명\"/><Cell col=\"33\" rowspan=\"2\" text=\"대표규격\"/><Cell row=\"1\" col=\"9\" text=\"판매단가\"/><Cell row=\"1\" col=\"10\" text=\"판매금액\"/><Cell row=\"1\" col=\"11\" text=\"부가세액\"/><Cell row=\"1\" col=\"12\" text=\"과세유형코드\"/><Cell row=\"1\" col=\"13\" text=\"과세유형코드명\"/><Cell row=\"1\" col=\"14\" text=\"과세구분코드\"/><Cell row=\"1\" col=\"15\" text=\"과세구분코드명\"/><Cell row=\"1\" col=\"16\" text=\"가격결정일\"/><Cell row=\"1\" col=\"17\" text=\"가격결정일 기본판매가\"/><Cell row=\"1\" col=\"18\" text=\"판매단가\"/><Cell row=\"1\" col=\"19\" text=\"판매금액\"/><Cell row=\"1\" col=\"20\" text=\"부가세액\"/><Cell row=\"1\" col=\"21\" text=\"과세유형코드\"/><Cell row=\"1\" col=\"22\" text=\"과세유형코드명\"/><Cell row=\"1\" col=\"23\" text=\"과세구분코드\"/><Cell row=\"1\" col=\"24\" text=\"과세구분코드명\"/><Cell row=\"1\" col=\"25\" text=\"가격결정일\"/><Cell row=\"1\" col=\"26\" text=\"가격결정일 기본판매가\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:EXCEL_ROW_NO\"/><Cell col=\"2\" text=\"bind:ERR_OCUR_CD\"/><Cell col=\"3\" text=\"bind:ERR_OCUR_CTS\" tooltiptext=\"bind:ERR_OCUR_CTS\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:MRO_TRANS_DTM\"/><Cell col=\"5\" text=\"bind:MRO_RSLT_CD\"/><Cell col=\"6\" text=\"bind:MRO_RSLT_MSG\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:ODR_NO_ITM_NO\"/><Cell col=\"8\" text=\"bind:CHG_MEMO_CTS\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:EXCEL_DATA_VAL_01\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:EXCEL_DATA_VAL_02\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:EXCEL_DATA_VAL_03\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:EXCEL_DATA_VAL_04\"/><Cell col=\"13\" text=\"bind:EXCEL_DATA_VAL_05\"/><Cell col=\"14\" text=\"bind:EXCEL_DATA_VAL_06\"/><Cell col=\"15\" text=\"bind:EXCEL_DATA_VAL_07\"/><Cell col=\"16\" text=\"bind:EXCEL_DATA_VAL_08\"/><Cell col=\"17\" text=\"bind:EXCEL_DATA_VAL_09\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"18\" text=\"bind:EXCEL_DATA_VAL_21\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"19\" text=\"bind:EXCEL_DATA_VAL_22\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"20\" text=\"bind:EXCEL_DATA_VAL_23\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"21\" text=\"bind:EXCEL_DATA_VAL_24\"/><Cell col=\"22\" text=\"bind:EXCEL_DATA_VAL_25\"/><Cell col=\"23\" text=\"bind:EXCEL_DATA_VAL_26\"/><Cell col=\"24\" text=\"bind:EXCEL_DATA_VAL_27\"/><Cell col=\"25\" text=\"bind:EXCEL_DATA_VAL_28\"/><Cell col=\"26\" text=\"bind:EXCEL_DATA_VAL_29\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"27\" text=\"bind:SALE_ADJ_STATS_CD\"/><Cell col=\"28\" text=\"bind:ODR_STATS_CD\"/><Cell col=\"29\" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"30\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"31\" text=\"bind:PRD_ID\"/><Cell col=\"32\" text=\"bind:PRD_NM\"/><Cell col=\"33\" text=\"bind:REPR_SPEC\"/></Band></Format><Format id=\"format_G54\"><Columns><Column size=\"30\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"113\"/><Column size=\"120\"/><Column size=\"117\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"117\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"160\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"행번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"에러코드\"/><Cell col=\"3\" rowspan=\"2\" text=\"에러메세지\"/><Cell col=\"4\" rowspan=\"2\" text=\"MRO 전송일시\"/><Cell col=\"5\" rowspan=\"2\" text=\"MRO 결과코드\"/><Cell col=\"6\" rowspan=\"2\" text=\"MRO 결과메세지\"/><Cell col=\"7\" rowspan=\"2\" text=\"주문번호\" background=\"aliceblue\"/><Cell col=\"8\" rowspan=\"2\" text=\"변경사유\" background=\"aliceblue\"/><Cell col=\"9\" colspan=\"4\" text=\"변경후\"/><Cell col=\"13\" colspan=\"4\" text=\"변경전\"/><Cell col=\"17\" rowspan=\"2\" text=\"매출정산상태\"/><Cell col=\"18\" rowspan=\"2\" text=\"주문상태\"/><Cell col=\"19\" rowspan=\"2\" text=\"운영단위 ID\"/><Cell col=\"20\" rowspan=\"2\" text=\"운영단위명\"/><Cell col=\"21\" rowspan=\"2\" text=\"상품 ID\"/><Cell col=\"22\" rowspan=\"2\" text=\"상품명\"/><Cell row=\"1\" col=\"9\" text=\"가격결정일시\" background=\"aliceblue\"/><Cell row=\"1\" col=\"10\" text=\"판매단가\"/><Cell row=\"1\" col=\"11\" text=\"판매금액\"/><Cell row=\"1\" col=\"12\" text=\"부가세액\"/><Cell row=\"1\" col=\"13\" text=\"가격결정일시\"/><Cell row=\"1\" col=\"14\" text=\"판매단가\"/><Cell row=\"1\" col=\"15\" text=\"판매금액\"/><Cell row=\"1\" col=\"16\" text=\"부가세액\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:EXCEL_ROW_NO\"/><Cell col=\"2\" text=\"bind:ERR_OCUR_CD\"/><Cell col=\"3\" text=\"bind:ERR_OCUR_CTS\" tooltiptext=\"bind:ERR_OCUR_CTS\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:MRO_TRANS_DTM\"/><Cell col=\"5\" text=\"bind:MRO_RSLT_CD\"/><Cell col=\"6\" text=\"bind:MRO_RSLT_MSG\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:ODR_NO_ITM_NO\"/><Cell col=\"8\" text=\"bind:CHG_MEMO_CTS\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:EXCEL_DATA_VAL_01\"/><Cell col=\"10\" text=\"bind:EXCEL_DATA_VAL_02\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:EXCEL_DATA_VAL_03\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:EXCEL_DATA_VAL_04\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"13\" text=\"bind:EXCEL_DATA_VAL_21\"/><Cell col=\"14\" text=\"bind:EXCEL_DATA_VAL_22\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"15\" text=\"bind:EXCEL_DATA_VAL_23\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"16\" text=\"bind:EXCEL_DATA_VAL_24\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"17\" text=\"bind:SALE_ADJ_STATS_CD\"/><Cell col=\"18\" text=\"bind:ODR_STATS_CD\"/><Cell col=\"19\" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"20\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"21\" text=\"bind:PRD_ID\"/><Cell col=\"22\" text=\"bind:PRD_NM\"/></Band></Format><Format id=\"format_S11\"><Columns><Column size=\"30\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"115\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"160\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"행번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"에러코드\"/><Cell col=\"3\" rowspan=\"2\" text=\"에러메세지\"/><Cell col=\"4\" rowspan=\"2\" text=\"MRO 전송일시\"/><Cell col=\"5\" rowspan=\"2\" text=\"MRO 결과코드\"/><Cell col=\"6\" rowspan=\"2\" text=\"MRO 결과메세지\"/><Cell col=\"7\" rowspan=\"2\" text=\"주문번호\" background=\"aliceblue\"/><Cell col=\"8\" rowspan=\"2\" text=\"변경사유\" background=\"aliceblue\"/><Cell col=\"9\" colspan=\"6\" text=\"변경후\"/><Cell col=\"15\" colspan=\"6\" text=\"변경전\"/><Cell col=\"21\" rowspan=\"2\" text=\"매출정산상태\"/><Cell col=\"22\" rowspan=\"2\" text=\"주문상태\"/><Cell col=\"23\" rowspan=\"2\" text=\"운영단위 ID\"/><Cell col=\"24\" rowspan=\"2\" text=\"운영단위명\"/><Cell col=\"25\" rowspan=\"2\" text=\"상품 ID\"/><Cell col=\"26\" rowspan=\"2\" text=\"상품명\"/><Cell col=\"27\" rowspan=\"2\" text=\"대표규격\"/><Cell row=\"1\" col=\"9\" text=\"판매금액\" background=\"aliceblue\"/><Cell row=\"1\" col=\"10\" text=\"부가세액\"/><Cell row=\"1\" col=\"11\" text=\"과세유형코드\"/><Cell row=\"1\" col=\"12\" text=\"과세유형코드명\"/><Cell row=\"1\" col=\"13\" text=\"과세구분코드\"/><Cell row=\"1\" col=\"14\" text=\"과세구분코드명\"/><Cell row=\"1\" col=\"15\" text=\"판매금액\"/><Cell row=\"1\" col=\"16\" text=\"부가세액\"/><Cell row=\"1\" col=\"17\" text=\"과세유형코드\"/><Cell row=\"1\" col=\"18\" text=\"과세유형코드명\"/><Cell row=\"1\" col=\"19\" text=\"과세구분코드\"/><Cell row=\"1\" col=\"20\" text=\"과세구분코드명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:EXCEL_ROW_NO\"/><Cell col=\"2\" text=\"bind:ERR_OCUR_CD\"/><Cell col=\"3\" text=\"bind:ERR_OCUR_CTS\" tooltiptext=\"bind:ERR_OCUR_CTS\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:MRO_TRANS_DTM\"/><Cell col=\"5\" text=\"bind:MRO_RSLT_CD\"/><Cell col=\"6\" text=\"bind:MRO_RSLT_MSG\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:ODR_NO_ITM_NO\"/><Cell col=\"8\" text=\"bind:CHG_MEMO_CTS\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:EXCEL_DATA_VAL_01\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:EXCEL_DATA_VAL_02\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:EXCEL_DATA_VAL_03\"/><Cell col=\"12\" text=\"bind:EXCEL_DATA_VAL_04\"/><Cell col=\"13\" text=\"bind:EXCEL_DATA_VAL_05\"/><Cell col=\"14\" text=\"bind:EXCEL_DATA_VAL_06\"/><Cell col=\"15\" text=\"bind:EXCEL_DATA_VAL_21\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"16\" text=\"bind:EXCEL_DATA_VAL_22\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"17\" text=\"bind:EXCEL_DATA_VAL_23\"/><Cell col=\"18\" text=\"bind:EXCEL_DATA_VAL_24\"/><Cell col=\"19\" text=\"bind:EXCEL_DATA_VAL_25\"/><Cell col=\"20\" text=\"bind:EXCEL_DATA_VAL_26\"/><Cell col=\"21\" text=\"bind:SALE_ADJ_STATS_CD\"/><Cell col=\"22\" text=\"bind:ODR_STATS_CD\"/><Cell col=\"23\" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"24\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"25\" text=\"bind:PRD_ID\"/><Cell col=\"26\" text=\"bind:PRD_NM\"/><Cell col=\"27\" text=\"bind:REPR_SPEC\"/></Band></Format><Format id=\"format_S13\"><Columns><Column size=\"30\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"129\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"160\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"행번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"에러코드\"/><Cell col=\"3\" rowspan=\"2\" text=\"에러메세지\"/><Cell col=\"4\" rowspan=\"2\" text=\"MRO 전송일시\"/><Cell col=\"5\" rowspan=\"2\" text=\"MRO 결과코드\"/><Cell col=\"6\" rowspan=\"2\" text=\"MRO 결과메세지\"/><Cell col=\"7\" rowspan=\"2\" text=\"주문번호\" background=\"aliceblue\"/><Cell col=\"8\" rowspan=\"2\" text=\"변경사유\" background=\"aliceblue\"/><Cell col=\"9\" colspan=\"8\" text=\"변경후\"/><Cell col=\"17\" colspan=\"8\" text=\"변경전\"/><Cell col=\"25\" rowspan=\"2\" text=\"매출정산상태\"/><Cell col=\"26\" rowspan=\"2\" text=\"주문상태\"/><Cell col=\"27\" rowspan=\"2\" text=\"운영단위 ID\"/><Cell col=\"28\" rowspan=\"2\" text=\"운영단위명\"/><Cell col=\"29\" rowspan=\"2\" text=\"상품 ID\"/><Cell col=\"30\" rowspan=\"2\" text=\"상품명\"/><Cell col=\"31\" rowspan=\"2\" text=\"대표규격\"/><Cell row=\"1\" col=\"9\" text=\"상품별배송비\"/><Cell row=\"1\" col=\"10\" text=\"판매단가\"/><Cell row=\"1\" col=\"11\" text=\"판매금액\"/><Cell row=\"1\" col=\"12\" text=\"부가세액\"/><Cell row=\"1\" col=\"13\" text=\"과세유형코드\"/><Cell row=\"1\" col=\"14\" text=\"과세유형코드명\"/><Cell row=\"1\" col=\"15\" text=\"과세구분코드\"/><Cell row=\"1\" col=\"16\" text=\"과세구분코드명\"/><Cell row=\"1\" col=\"17\" text=\"상품별배송비\"/><Cell row=\"1\" col=\"18\" text=\"판매단가\"/><Cell row=\"1\" col=\"19\" text=\"판매금액\"/><Cell row=\"1\" col=\"20\" text=\"부가세액\"/><Cell row=\"1\" col=\"21\" text=\"과세유형코드\"/><Cell row=\"1\" col=\"22\" text=\"과세유형코드명\"/><Cell row=\"1\" col=\"23\" text=\"과세구분코드\"/><Cell row=\"1\" col=\"24\" text=\"과세구분코드명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:EXCEL_ROW_NO\"/><Cell col=\"2\" text=\"bind:ERR_OCUR_CD\"/><Cell col=\"3\" text=\"bind:ERR_OCUR_CTS\" tooltiptext=\"bind:ERR_OCUR_CTS\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:MRO_TRANS_DTM\"/><Cell col=\"5\" text=\"bind:MRO_RSLT_CD\"/><Cell col=\"6\" text=\"bind:MRO_RSLT_MSG\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:ODR_NO_ITM_NO\"/><Cell col=\"8\" text=\"bind:CHG_MEMO_CTS\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:EXCEL_DATA_VAL_01\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:EXCEL_DATA_VAL_02\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:EXCEL_DATA_VAL_03\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:EXCEL_DATA_VAL_04\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"13\" text=\"bind:EXCEL_DATA_VAL_05\"/><Cell col=\"14\" text=\"bind:EXCEL_DATA_VAL_06\"/><Cell col=\"15\" text=\"bind:EXCEL_DATA_VAL_07\"/><Cell col=\"16\" text=\"bind:EXCEL_DATA_VAL_08\"/><Cell col=\"17\" text=\"bind:EXCEL_DATA_VAL_21\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"18\" text=\"bind:EXCEL_DATA_VAL_22\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"19\" text=\"bind:EXCEL_DATA_VAL_23\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"20\" text=\"bind:EXCEL_DATA_VAL_24\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"21\" text=\"bind:EXCEL_DATA_VAL_25\"/><Cell col=\"22\" text=\"bind:EXCEL_DATA_VAL_26\"/><Cell col=\"23\" text=\"bind:EXCEL_DATA_VAL_27\"/><Cell col=\"24\" text=\"bind:EXCEL_DATA_VAL_28\"/><Cell col=\"25\" text=\"bind:SALE_ADJ_STATS_CD\"/><Cell col=\"26\" text=\"bind:ODR_STATS_CD\"/><Cell col=\"27\" text=\"bind:OPR_UNIT_ID\"/><Cell col=\"28\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"29\" text=\"bind:PRD_ID\"/><Cell col=\"30\" text=\"bind:PRD_NM\"/><Cell col=\"31\" text=\"bind:REPR_SPEC\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_excelDownload",null,"0","110","28","10",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","10","19","240","14",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("(총 0건)");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_selectError",null,"0","85","28","345",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("오류선택");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_deleteSelectedList",null,"0","85","28","255",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("선택목록삭제");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_upload",null,"0","85","28","435",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("업로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_addRow",null,"0","85","28","525",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("행추가");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"0","60","28","190",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"1","60","28","125",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("초기화");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_layoutSave",null,"0","100","28","720",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("레이아웃 저장");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_layoutInit",null,"0","100","28","616",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_text("레이아웃 초기화");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00","650","121","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("30");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","10",null,"111","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta_stlInfo","10","0","200","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("■ 조회");
            obj.set_cssclass("sta_WF_title01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","10","30",null,"32","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","10","30","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("변경 항목");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static22","649","30","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01","140","30","10","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00","0","20","30","10",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_01","639","30","10","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_chgItm","150","34","360","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_cdList");
            obj.set_codecolumn("CHG_ITM_GRP_CD");
            obj.set_datacolumn("CHG_ITM_GRP_NM");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","0","62",null,"48","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_SearchArea");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"10","86","28","10",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("이력조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.form.Div01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div01.form.sta_prdIdNm","text","ds_list01","PRD_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div01.form.sta_mnfIdNm","text","ds_list01","MNFR_NO_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div01.form.sta_orgplcCdNm","text","ds_list01","ORGPLC_CTRY_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div01.form.sta_spec","text","ds_list01","REPR_SPEC_ATTR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div01.form.sta_stockNo","text","ds_list01","STOCK_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div01.form.sta_catKiller","text","ds_list01","CATG_KILR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div01.form.chk_hubYn","value","ds_list01","HUB_HNL_PSB_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div01.form.chk_fastDlvYn","value","ds_list01","QCK_DLV_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div01.form.chk_bzCrdPrd","value","ds_list01","BZCRD_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_OA_41.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_OA_41.xfdl", function() {
        // 주문일괄변경

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        this.fv_oApp = nexacro.getApplication();	//application object
        this.fromDay = "";
        this.toDay = "";
        /***********************************************************************************************
        * FORM EVENT 영역
        ************************************************************************************************/
        this.SSP_BO_OA_41_onload = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.fn_odCommLoading("fn_itmGrpsearch");
        	this.resetScroll();
        	this.copyPaste.addGrid(this.Div01.form.grid_list01, this, true);
        	this.fromDay = this.fn_today();
        	this.toDay = this.fn_today();

        	this.fn_regShortCutMethod();
        };

        this.SSP_BO_OA_41_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_itmGrpsearch = function() {
        	var sSvcId = "selectExcelUpldItmGrp";
        	var sUrl = "/od/orderChange/selectExcelUpldItmGrp.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_cdList=ds_output1";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };


        this.fn_uploadExcelData = function() {
        	var sSvcId = "uploadExcelUpldDtls";
        	var sUrl = "/od/orderChange/uploadExcelUpldDtls.do";
        	var inDs = "ds_update1=ds_list01 ds_update2=ds_search";
        	var outDs = "ds_list01=ds_output1";
        	//var outDs = "";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");

        	// 그리드 붙여넣기 기능 막음
        	this.copyPaste.allowPaste(false, this.fn_stopCopyToGrid);
        };

        this.fn_search = function() {
        	var sSvcId = "selectExcelUpldDtls";
        	var sUrl = "/od/orderChange/selectExcelUpldDtls.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_list01=ds_output1";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if (svcID == "uploadExcelUpldDtls") {
        		this.fn_showCountText();
        	}
        	else if (svcID == "selectExcelUpldDtls") {
        		this.fn_showCountText();
        	}
        	else if (svcID == "selectExcelUpldItmGrp") {
        		this.fn_setHardCodingItmGrpCd("S14");
        	}
        	else if (svcID == "saveExcelUpldDtls") {
        		if (errorCode == "0") {
        			alert(this.fn_getMessage("ERRS000156"));
        		}
        	}
        };

        /***********************************************************************************************
        * POPUP CALLBACK 영역
        ************************************************************************************************/
        this.fn_popupCallback = function(sPopupId, sRetValue) {
            var resData = "";
            var sIdList = "";
            var sNmList = "";

            if (sRetValue == undefined) {
                return;
            }
            else {
                resData = JSON.parse(sRetValue);
            }

            switch (sPopupId) {
                case "uploadExcelHstPopup":
        			this.ds_search.setColumn(0, "CO_CD", resData.CO_CD);
        			this.ds_search.setColumn(0, "USR_ID", resData.USR_ID);
        			this.ds_search.setColumn(0, "UPLD_PGM_IDT_NM", resData.UPLD_PGM_IDT_NM);
        			this.ds_search.setColumn(0, "CHG_ITM_GRP_CD", resData.CHG_ITM_GRP_CD);
        			this.ds_search.setColumn(0, "REGPSN_ID", resData.REGPSN_ID);
        			//trace("### from : " + resData.FROM_DAY + ", to : " + resData.TO_DAY);
        			this.fromDay = resData.FROM_DAY;
        			this.toDay = resData.TO_DAY;

        			this.Div00.form.cmb_chgItm.set_value(resData.CHG_ITM_GRP_CD);
        			this.Div01.form.grid_list01.set_formatid("format_"+this.ds_cdList.getColumn(this.Div00.form.cmb_chgItm.index, "CHG_ITM_GRP_CD"));
        			this.fn_search();
        			break;
        	}
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){
        	trace("this.cfn_formInit");

        	this.uGridList = "grid_list01";

        	this.Div01.form.grid_list01.uRightMouse = "true";
        	this.Div01.form.grid_list01.uPersonalFlag = "true";
        }

        this.cfn_personalPopupClose = function(sRet) {
        	this.Div01.form.grid_list01.set_formats(sRet);
        	this.pdiv_personal.closePopup();
        };

        /***********************************************************************************************
        * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_setChgItmGrpCd = function() {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "CO_CD", this.fv_coCd);
        	this.ds_search.setColumn(0, "CHG_ITM_GRP_CD", this.fn_getChgItmGrpCdFromGridFormat());
        	this.ds_search.setColumn(0, "UPLD_PGM_IDT_NM", "SSP_BO_OA_41" + "-" + this.fn_getChgItmGrpCdFromGridFormat());
        };

        this.fn_getChgItmGrpCdFromGridFormat = function() {
        	var formatId = this.Div01.form.grid_list01.formatid;
        	var formats = formatId.split("_");

        	if (formats.length == 2) {
        		return formats[1];
        	}

        	return "";
        };

        this.fn_setHardCodingItmGrpCd = function(itmGrpCd) {
        	this.Div00.form.cmb_chgItm.set_value(itmGrpCd);
        	this.Div01.form.grid_list01.set_formatid("format_" + itmGrpCd);
        	this.ds_list01.addRow();
        };

        this.fn_isAdded = function() {
        	return true;
        };

        this.fn_showCountText = function() {
        	if (this.fn_isUploaded()) {
        		var errSet = this.ds_list01.extractRows("ERR_OCUR_CD=='E'");
        		var sucSet = this.ds_list01.extractRows("ERR_OCUR_CD=='S'");
        		this.Div01.form.sta_totcnt.set_text("(<b v='true'>총" + this.ds_list01.rowcount + "건, S:" + sucSet.length + ", E:<fc v='red'>" + errSet.length + "</fc>)");
        	}
        	else {
        		this.Div01.form.sta_totcnt.set_text("(<b v='true'>총" + this.ds_list01.rowcount + "건)");
        	}
        };

        // 에러선택 버튼의 토글 역할. 이전에 에러목록을 선택했는지 판단
        this.fn_isSelectedError = function() {
        	var chkDatasets = this.ds_list01.extractRows("CHK==1");

        	if (chkDatasets.length > 0) {
        		if (chkDatasets.length == this.ds_list01.rowcount)	return true;
        	}

        	return false;
        };

        // 현재 화면에 보이는 데이터가 이미 업로드 된것인지 판단하는 함수
        this.fn_isUploaded = function() {
        	if (this.ds_list01.rowcount <= 0)	return false;

        	if (this.gfn_isNull(this.ds_list01.getColumn(0, "USR_ID")))	return false;

        	return true;
        };

        this.check_order_number = function()
        {
        	for(var i=0;i < this.ds_list01.rowcount; i++)
        	{
        		var odrNo = this.ds_list01.getColumn(i,"ODR_NO_ITM_NO");
        		var nRow =this.ds_list01.findRowExpr("ODR_NO_ITM_NO=='"+odrNo + "'",i+1);
        		if( nRow != -1 )
        		{
        			//alert((i+1) + "번째 행과 " + (nRow+1) + "번째 행의 주문번호가 동일합니다. 주문번호 : " + odrNo );
        			alert(this.fn_getMessage("ERRS000349", ((i+1)  + ""), ((nRow+1) + ""), odrNo));
        			return false;
        		}
        	}
        	return true;
        };

        // 에러코드(ERR_OCUR_CD)가 선택되어있는지 검사
        this.fn_checkErrorData = function() {
        	var retValue = false;
        	this.Div01.form.grid_list01.set_binddataset();

        	this.ds_list01.filter("ERR_OCUR_CD=='E' && CHK=='1'");

        	if (this.ds_list01.rowcount > 0)	retValue = false;
        	else	retValue = true;

        	this.ds_list01.filter("");
        	this.Div01.form.grid_list01.set_binddataset(this.ds_list01);
        	return retValue;
        };

        // ds_list01 데이터셋이 비어있는지 검사
        this.fn_isEmpty = function() {
        	if (this.ds_list01.rowcount > 2) {
        		return false;
        	}

        	var colCount = this.ds_list01.getColCount();
        	var colData = "";
        	for (var row = 0; row < this.ds_list01.rowcount; row++) {
        		for (var i = 1; i < colCount; i++) {
        			colData = this.ds_list01.getColumn(row, i);

        			if (this.gfn_isNull(colData) == false) {
        				return false;
        			}
        		}
        	}

        	return true;
        };

        this.fn_stopCopyToGrid = function() {
        	alert(this.fn_getMessage("ERRS000416"));
        };

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	//this.fn_regMethodCtrlENTER("btn_search_onclick");
        	this.fn_regMethodSave("btn_save_onclick");
        };

        /***********************************************************************************************
        * BUTTON EVENT 영역
        ************************************************************************************************/
        // 저장
        this.btn_save_onclick = function(obj,e)
        {
        	// 오류가 선택되었는지 체크
        	if (this.fn_checkErrorData() == false) {
        		alert(this.fn_getMessage("ERRS000403"));
        		return;
        	}

        	// 체크되어있는 데이터가 있는지 검사
        	if (this.ds_list01.getCaseCount("CHK=='1'") <= 0) {
        		alert(this.fn_getMessage("ERRS000137"));
        		return;
        	}

        	if (!this.fn_isUploaded()) {
        		// 업로드 작업을 먼저 수행하여 주십시오.
        		alert(this.fn_getMessage("ERRS000400"));
        		return;
        	}

        	var sSvcId = "saveExcelUpldDtls";
        	var sUrl = "/od/orderChange/saveExcelUpldDtls.do";
        	var inDs = "ds_update1=ds_list01";
        	var outDs = "ds_list01=ds_output1";
        	//var outDs = "";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        // 조회
        this.btn_search_onclick = function(obj,e)
        {
        	var objParam = {pv1:this.fv_coCd,
        					pv2:this.fv_oApp.gds_userInfo.getColumn(0, "OPRTR_ID"),
        					pv3:this.fv_oApp.gds_userInfo.getColumn(0, "OPRTR_NM"),
        					pv4:this.Div00.form.cmb_chgItm.value,
        					pv5:this.fromDay,
        					pv6:this.toDay};
        	this.gfn_openPopup("uploadExcelHstPopup", "OD::SSP_BO_OA_05.xfdl", objParam);
        	//trace("### pv5 : " + this.fromDay + ", pv6 : " + this.toDay);
        };
        // 초기화
        this.btn_clear_onclick = function(obj,e)
        {
        	this.ds_list01.clearData();
        	this.ds_list01.addRow();
        	this.fn_showCountText();

        	this.copyPaste.allowPaste(true);
        };
        // 엑셀 다운로드
        this.btn_excelDownload_onclick = function(obj,e)
        {
        	this.ofn_exportExcel({form:this, grid:this.Div01.form.grid_list01, fileName:"주문일괄변경"});
        };
        // 선택목록 삭제
        this.btn_deleteSelectedList_onclick = function(obj,e)
        {
        	var selectedRows = this.ds_list01.extractRows("CHK==1");

        	if (selectedRows <= 0) {
        		alert(this.fn_getMessage("ERRS000137"));
        		return;
        	}
        	//this.ds_list01.deleteMultiRows(this.Div01.form.grid_list01.getSelectedDatasetRows());
        	this.ds_list01.deleteMultiRows(this.ds_list01.extractRows("CHK==1"));
        	this.ds_list01.filter("");
        };

        // 오류 선택
        this.btn_selectError_onclick = function(obj,e)
        {
        	this.Div01.form.grid_list01.setBindDataset();
        	this.ds_list01.filter("ERR_OCUR_CD=='E'");

        	if (this.fn_isSelectedError()) {
        		for (var i = 0; i < this.ds_list01.rowcount; i++) {
        			this.ds_list01.setColumn(i, "CHK", "0");
        		}
        		this.Div01.form.btn_selectError.set_text("오류선택");
        	}
        	else {
        		if (this.ds_list01.rowcount <= 0) {
        			alert(this.fn_getMessage("ERRS000291"));
        		}
        		else {
        			for (var i = 0; i < this.ds_list01.rowcount; i++) {
        				this.ds_list01.setColumn(i, "CHK", "1");
        			}
        			this.Div01.form.btn_selectError.set_text("오류선택해제");
        		}
        	}

        	this.ds_list01.filter("");
        	this.Div01.form.grid_list01.setBindDataset(this.ds_list01);
        };

        // 업로드 버튼
        this.btn_upload_onclick = function(obj,e)
        {
        	if (this.fn_isEmpty()) {
        		alert(this.fn_getMessage("ERRS000406"));
        		return;
        	}

        	if (this.fn_isUploaded()) {
        		//alert("이미 업로드한 데이터 입니다. 업로드할 수 없습니다.");
        		alert(this.fn_getMessage("ERRS000289"));
        		return;
        	}

        	if( this.check_order_number() == false)	return;
        	this.fn_setChgItmGrpCd();
        	this.fn_uploadExcelData();
        };

        // 행추가
        this.btn_addRow_onclick = function(obj,e)
        {
        	if (this.fn_isUploaded()) {
        		//alert("이미 업로드한 데이터 입니다. 추가 작업을 수행할 수 없습니다.");
        		alert(this.fn_getMessage("ERRS000290"));
        		return;
        	}

        	this.ds_list01.addRow();
        };

        this.Div00_cmb_chgItm_onitemchanged = function(obj,e)
        {
        	trace("### preindex : " + e.preindex + ", postindex : " + e.postindex);
        	this.ds_list01.clearData();
        	this.Div01.form.grid_list01.set_formatid("format_"+this.ds_cdList.getColumn(this.Div00.form.cmb_chgItm.index, "CHG_ITM_GRP_CD"));
        	this.ds_list01.addRow();
        	this.Div01.form.sta_totcnt.set_text("(<b v='true'>총 0건)");

        	this.copyPaste.allowPaste(true);
        };
        // 레이아웃 저장
        this.btn_layoutSave_onclick = function(obj,e)
        {
        	this.gfn_personalSave("grid_list01", this.Div01.form.grid_list01.getCurFormatString());
        };
        // 레이아웃 초기화
        this.btn_layoutInit_onclick = function(obj,e)
        {
        	this.gfn_personalReset("grid_list01");
        	this.Div01.form.grid_list01.set_formats(this.Div01.form.grid_list01.uOrgFormat);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_OA_41_onload,this);
            this.addEventHandler("onkeyup",this.SSP_BO_OA_41_onkeyup,this);
            this.Div01.form.btn_excelDownload.addEventHandler("onclick",this.btn_excelDownload_onclick,this);
            this.Div01.form.btn_selectError.addEventHandler("onclick",this.btn_selectError_onclick,this);
            this.Div01.form.btn_deleteSelectedList.addEventHandler("onclick",this.btn_deleteSelectedList_onclick,this);
            this.Div01.form.btn_upload.addEventHandler("onclick",this.btn_upload_onclick,this);
            this.Div01.form.btn_addRow.addEventHandler("onclick",this.btn_addRow_onclick,this);
            this.Div01.form.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.Div01.form.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.Div01.form.btn_layoutSave.addEventHandler("onclick",this.btn_layoutSave_onclick,this);
            this.Div01.form.btn_layoutInit.addEventHandler("onclick",this.btn_layoutInit_onclick,this);
            this.Div00.form.cmb_chgItm.addEventHandler("onitemchanged",this.Div00_cmb_chgItm_onitemchanged,this);
            this.Div00.form.Div01.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_OA_41.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
