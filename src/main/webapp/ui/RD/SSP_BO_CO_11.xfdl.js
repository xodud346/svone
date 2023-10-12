(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("각종 날짜처리 샘풀");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CURR_MONTH\" type=\"STRING\" size=\"32\"/><Column id=\"STD_YM\" type=\"STRING\" size=\"32\"/><Column id=\"PAY_WAY_10\" type=\"STRING\" size=\"32\"/><Column id=\"SALE_AMT_10\" type=\"STRING\" size=\"32\"/><Column id=\"PAY_WAY_20\" type=\"STRING\" size=\"32\"/><Column id=\"SALE_AMT_20\" type=\"STRING\" size=\"32\"/><Column id=\"PAY_WAY_30\" type=\"STRING\" size=\"32\"/><Column id=\"SALE_AMT_30\" type=\"STRING\" size=\"32\"/><Column id=\"PAY_WAY_40\" type=\"STRING\" size=\"32\"/><Column id=\"SALE_AMT_40\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"CURR_MONTH\">MONTH</Col><Col id=\"STD_YM\">201803</Col><Col id=\"PAY_WAY_10\">직승인 신용</Col><Col id=\"SALE_AMT_10\">            1272</Col><Col id=\"PAY_WAY_20\">VAN 신용</Col><Col id=\"SALE_AMT_20\">             105</Col><Col id=\"PAY_WAY_30\">현금</Col><Col id=\"SALE_AMT_30\">            1346</Col><Col id=\"PAY_WAY_40\">상품</Col><Col id=\"SALE_AMT_40\">             111</Col></Row><Row><Col id=\"CURR_MONTH\">MONTH</Col><Col id=\"STD_YM\">201804</Col><Col id=\"PAY_WAY_10\">직승인 신용</Col><Col id=\"SALE_AMT_10\">            1284</Col><Col id=\"PAY_WAY_20\">VAN 신용</Col><Col id=\"SALE_AMT_20\">             106</Col><Col id=\"PAY_WAY_30\">현금</Col><Col id=\"SALE_AMT_30\">             111</Col><Col id=\"PAY_WAY_40\">상품</Col><Col id=\"SALE_AMT_40\">            1358</Col></Row><Row><Col id=\"CURR_MONTH\">MONTH</Col><Col id=\"STD_YM\">201805</Col><Col id=\"PAY_WAY_10\">직승인 신용</Col><Col id=\"SALE_AMT_10\">            1296</Col><Col id=\"PAY_WAY_20\">VAN 신용</Col><Col id=\"SALE_AMT_20\">             107</Col><Col id=\"PAY_WAY_30\">현금</Col><Col id=\"SALE_AMT_30\">            1358</Col><Col id=\"PAY_WAY_40\">상품</Col><Col id=\"SALE_AMT_40\">             112</Col></Row><Row><Col id=\"CURR_MONTH\">MONTH</Col><Col id=\"STD_YM\">201806</Col><Col id=\"PAY_WAY_10\">직승인 신용</Col><Col id=\"SALE_AMT_10\">            1309</Col><Col id=\"PAY_WAY_20\">VAN 신용</Col><Col id=\"SALE_AMT_20\">             108</Col><Col id=\"PAY_WAY_30\">현금</Col><Col id=\"SALE_AMT_30\">             112</Col><Col id=\"PAY_WAY_40\">상품</Col><Col id=\"SALE_AMT_40\">            1370</Col></Row><Row><Col id=\"CURR_MONTH\">MONTH</Col><Col id=\"STD_YM\">201807</Col><Col id=\"PAY_WAY_10\">직승인 신용</Col><Col id=\"SALE_AMT_10\">            1321</Col><Col id=\"PAY_WAY_20\">VAN 신용</Col><Col id=\"SALE_AMT_20\">             109</Col><Col id=\"PAY_WAY_30\">현금</Col><Col id=\"SALE_AMT_30\">            1370</Col><Col id=\"PAY_WAY_40\">상품</Col><Col id=\"SALE_AMT_40\">             113</Col></Row><Row><Col id=\"CURR_MONTH\">MONTH</Col><Col id=\"STD_YM\">201808</Col><Col id=\"PAY_WAY_10\">직승인 신용</Col><Col id=\"SALE_AMT_10\">            1333</Col><Col id=\"PAY_WAY_20\">VAN 신용</Col><Col id=\"SALE_AMT_20\">             110</Col><Col id=\"PAY_WAY_30\">현금</Col><Col id=\"SALE_AMT_30\">             113</Col><Col id=\"PAY_WAY_40\">상품</Col><Col id=\"SALE_AMT_40\">            1383</Col></Row><Row><Col id=\"CURR_MONTH\">MONTH</Col><Col id=\"STD_YM\">201809</Col><Col id=\"PAY_WAY_10\">직승인 신용</Col><Col id=\"SALE_AMT_10\">            1346</Col><Col id=\"PAY_WAY_20\">VAN 신용</Col><Col id=\"SALE_AMT_20\">             111</Col><Col id=\"PAY_WAY_30\">현금</Col><Col id=\"SALE_AMT_30\">            1383</Col><Col id=\"PAY_WAY_40\">상품</Col><Col id=\"SALE_AMT_40\">             114</Col></Row><Row><Col id=\"CURR_MONTH\">MONTH</Col><Col id=\"STD_YM\">201810</Col><Col id=\"PAY_WAY_10\">직승인 신용</Col><Col id=\"SALE_AMT_10\">            1358</Col><Col id=\"PAY_WAY_20\">VAN 신용</Col><Col id=\"SALE_AMT_20\">             112</Col><Col id=\"PAY_WAY_30\">현금</Col><Col id=\"SALE_AMT_30\">             114</Col><Col id=\"PAY_WAY_40\">상품</Col><Col id=\"SALE_AMT_40\">            1235</Col></Row><Row><Col id=\"CURR_MONTH\">MONTH</Col><Col id=\"STD_YM\">201811</Col><Col id=\"PAY_WAY_10\">직승인 신용</Col><Col id=\"SALE_AMT_10\">            1370</Col><Col id=\"PAY_WAY_20\">VAN 신용</Col><Col id=\"SALE_AMT_20\">             113</Col><Col id=\"PAY_WAY_30\">현금</Col><Col id=\"SALE_AMT_30\">            1235</Col><Col id=\"PAY_WAY_40\">상품</Col><Col id=\"SALE_AMT_40\">             102</Col></Row><Row><Col id=\"CURR_MONTH\">MONTH</Col><Col id=\"STD_YM\">201812</Col><Col id=\"PAY_WAY_10\">직승인 신용</Col><Col id=\"SALE_AMT_10\">            1383</Col><Col id=\"PAY_WAY_20\">VAN 신용</Col><Col id=\"SALE_AMT_20\">             114</Col><Col id=\"PAY_WAY_30\">현금</Col><Col id=\"SALE_AMT_30\">             102</Col><Col id=\"PAY_WAY_40\">상품</Col><Col id=\"SALE_AMT_40\">            1333</Col></Row><Row><Col id=\"CURR_MONTH\">MONTH</Col><Col id=\"STD_YM\">201901</Col><Col id=\"PAY_WAY_10\">직승인 신용</Col><Col id=\"SALE_AMT_10\">            1235</Col><Col id=\"PAY_WAY_20\">VAN 신용</Col><Col id=\"SALE_AMT_20\">             102</Col><Col id=\"PAY_WAY_30\">현금</Col><Col id=\"SALE_AMT_30\">            1333</Col><Col id=\"PAY_WAY_40\">상품</Col><Col id=\"SALE_AMT_40\">             110</Col></Row><Row><Col id=\"CURR_MONTH\">MONTH</Col><Col id=\"STD_YM\">201902</Col><Col id=\"PAY_WAY_10\">직승인 신용</Col><Col id=\"SALE_AMT_10\">               0</Col><Col id=\"PAY_WAY_20\">VAN 신용</Col><Col id=\"SALE_AMT_20\">               0</Col><Col id=\"PAY_WAY_30\">현금</Col><Col id=\"SALE_AMT_30\">               0</Col><Col id=\"PAY_WAY_40\">상품</Col><Col id=\"SALE_AMT_40\">               0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CMP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"STD_YM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMP_CD\"/><Col id=\"STD_YM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPayWayCd", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"PAY_WAY_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PAY_WAY_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"PAY_WAY_CD\">10</Col><Col id=\"PAY_WAY_NM\">직승인 신용</Col></Row><Row><Col id=\"PAY_WAY_CD\">20</Col><Col id=\"PAY_WAY_NM\">VAN 신용</Col></Row><Row><Col id=\"PAY_WAY_CD\">30</Col><Col id=\"PAY_WAY_NM\">현금</Col></Row><Row><Col id=\"PAY_WAY_CD\">40</Col><Col id=\"PAY_WAY_NM\">상품</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMstCmp", this);
            obj._setContents("<ColumnInfo><Column id=\"CMP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CMP_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cond", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"FR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ED_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"FR_DATE\"/><Col id=\"TO_DATE\"/><Col id=\"ST_DATE\"/><Col id=\"ED_DATE\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_currBg03_00_00_00_00","887","98","222","33",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_currBg03_00_00_00","1106","99","228","33",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_currBg03_00_00","1109","134","225","28",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_24","13","95","227","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","0","4",null,"33","2",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("각종 날짜 처리 샘풀(날짜함수는 실시간 처리 함수 사용 : this.fn_getSvrDate())");
            obj.set_textAlign("center");
            obj.set_background("#f80626");
            obj.set_font("normal 700 14px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("stc_25","13","95","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("현재일자");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Calendar("calGetDate","138","97","97","23",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("stc_24_00","13","230","217","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_25_00","13","230","109","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("현재월의시작일자");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Calendar("calGetFirstDate","128","232","97","23",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("stc_24_00_00","13","264","217","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_25_00_00","13","264","109","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("현재월의종료일자");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Calendar("calGetLastDate","128","266","97","23",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("stc_24_00_01","13","130","227","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_25_00_01","13","130","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("현재월의시작일자");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Calendar("calGetFirstDate1","138","132","97","23",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("stc_24_00_00_00","13","164","227","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_25_00_00_00","13","164","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("현재월의종료일자");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Calendar("calGetLastDate1","138","166","97","23",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","12","197","1322","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("※ 포멧에 따라 서버 날짜를 실시간으로 처리");
            obj.set_textAlign("left");
            obj.set_background("cadetblue");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","12","41","1322","49",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("※현재일자 기준으로 날짜함수를 처리(로그인시 DB기준으로 데이터를 가지고옮) => this.fn_getSvrDate(strFormat)   포멧에 맞는 날짜를 실시간으로가기고오는 함수 \r\n- 포멧이 없을시 \"YYYYMMDD\" this.fn_getSvrDate()  현재일자를 가지고 온다.\r\n                 \n\t\t\t\t ");
            obj.set_textAlign("left");
            obj.set_background("cadetblue");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","235","230","279","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("this.fn_getSvrDate(\"MONTH_FIRST_DAY\")");
            obj.set_textAlign("left");
            obj.set_background("cadetblue");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","235","262","279","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("his.fn_getSvrDate(\"MONTH_LAST_DAY\")");
            obj.set_textAlign("left");
            obj.set_background("cadetblue");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","245","131","213","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("※ this.fn_getFirstDate(현재일자)");
            obj.set_textAlign("left");
            obj.set_background("cadetblue");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","245","163","213","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("※ this.fn_getLastDate(현재일자)");
            obj.set_textAlign("left");
            obj.set_background("cadetblue");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_01_00","245","98","213","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("※this.fn_getSvrDate() 로그인시");
            obj.set_textAlign("left");
            obj.set_background("cadetblue");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("stc_currBg03","463","95","157","28",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_subTitl03","463","95","50","28",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("당일");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Calendar("calNowDay","518","97","97","23",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            this.addChild(obj.name, obj);

            obj = new Static("stc_currBg02","463","130","157","28",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_subTitl02","463","130","50","28",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("당월");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Calendar("calNowMonth","518","132","97","23",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            this.addChild(obj.name, obj);

            obj = new Static("stc_currBg01","463","164","157","28",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_subTitl01","463","164","50","28",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("전월");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Calendar("calPreMonth","518","166","97","23",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_01_01","625","130","261","30",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("※ this.fn_addMonth(현재일자,0)");
            obj.set_textAlign("left");
            obj.set_background("cadetblue");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","625","164","261","30",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("※ this.fn_addMonth(현재일자,-1);");
            obj.set_textAlign("left");
            obj.set_background("cadetblue");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_01_00_00","625","95","261","30",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("※ this.fn_getSvrDate() 로그인시");
            obj.set_textAlign("left");
            obj.set_background("cadetblue");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_NowDay","838","97","41","26",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("당일");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_NowMonth","838","131","41","26",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("당월");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PreMonth","838","166","41","26",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("전월");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskDay","960","102","41","27",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_currBg03_00","889","134","217","28",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_subTitl03_00","889","134","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("현재일자 -1/+1일");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Calendar("calNowDayAdd","1004","136","97","23",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_01_00_00_00","890","166","218","30",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("※ this.gfn_addDate(설정일자, 40)");
            obj.set_textAlign("left");
            obj.set_background("cadetblue");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_AddDay","1004","101","101","28",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("일단위-1/+1");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskMonth","1170","101","51","27",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_subTitl03_00_00","1109","134","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("현재일자 -1/+1월");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Calendar("calNowMonthAdd","1224","136","97","23",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_01_00_00_00_00","1110","166","224","30",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("※ this.gfn_addMonth(설정일자,-1);");
            obj.set_textAlign("left");
            obj.set_background("cadetblue");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_AddMonth","1224","101","101","28",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("월단위 -1/+1");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("stc_subTitl07","1109","101","58","28",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("입력월");
            this.addChild(obj.name, obj);

            obj = new Static("stc_subTitl07_00","889","102","68","28",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("입력일자");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00","14","300","383","248",null,null,null,null,null,null,this);
            obj.set_text(" 설명 ");
            obj.set_taborder("52");
            obj.set_cssclass("_gb_sample");
            obj.set_enableevent("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02","517","231","817","30",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("※ 버튼을 누를때 날짜(Validation )를 체크하는 방법(this.fn_getDefaultDateChk(frDate,toDate))  ");
            obj.set_textAlign("left");
            obj.set_background("cadetblue");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Div("divSetDate01","527","264","376","44",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_cssclass("div_WF_SearchArea");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","308","11","60","22",null,null,null,null,null,null,this.divSetDate01.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSetDate01.addChild(obj.name, obj);

            obj = new Calendar("calFrDate","82","10","100","22",null,null,null,null,null,null,this.divSetDate01.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.divSetDate01.addChild(obj.name, obj);

            obj = new Calendar("calToDate","200","10","100","22",null,null,null,null,null,null,this.divSetDate01.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.divSetDate01.addChild(obj.name, obj);

            obj = new Static("stc_03","186","10","18","22",null,null,null,null,null,null,this.divSetDate01.form);
            obj.set_taborder("3");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_SearchLbl_L");
            this.divSetDate01.addChild(obj.name, obj);

            obj = new Static("stc_04","9","8","68","26",null,null,null,null,null,null,this.divSetDate01.form);
            obj.set_taborder("4");
            obj.set_text("기간설정");
            obj.set_cssclass("sta_cm_box01L");
            this.divSetDate01.addChild(obj.name, obj);

            obj = new Div("divSetDate02","397","458","302","44",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_cssclass("div_WF_SearchArea");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("calStDate","75","10","100","22",null,null,null,null,null,null,this.divSetDate02.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.divSetDate02.addChild(obj.name, obj);

            obj = new Calendar("calEdDate","193","10","100","22",null,null,null,null,null,null,this.divSetDate02.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.divSetDate02.addChild(obj.name, obj);

            obj = new Static("stc_03","179","10","18","22",null,null,null,null,null,null,this.divSetDate02.form);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_SearchLbl_L");
            this.divSetDate02.addChild(obj.name, obj);

            obj = new Static("stc_04","8","10","62","22",null,null,null,null,null,null,this.divSetDate02.form);
            obj.set_taborder("3");
            obj.set_text("기간설정");
            obj.set_cssclass("sta_cm_box01L");
            this.divSetDate02.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","397","425","937","30",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("※ 데이타셋을 이용한 날짜(Validation )를 포커스가 나갈때 실시간으로 체크하는 방식");
            obj.set_textAlign("left");
            obj.set_background("cadetblue");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","15","318","375","223",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text(" /************************************************************************\r\n * Function Name  : this.fn_getSvrDate(strFormat)                         \r\n * Description    : 포멧에 맞는 날짜를 실시간으로가기고오는 함수                 \r\n * Arguments      : String => strFormat                                          \r\n                  , \"YYYY\"                            2020                                     \r\n                  , \"YYYYMMDD\"               20200624                                 \r\n                  , \"KOR_YYYYMMDD\"      2020.06.24 수요일                        \r\n                  , \"YYYYMM\"                     202006                                   \r\n                  , \"MMDD\"                         0624                                     \r\n                  , \"MM\"                              06                                       \r\n                  , \"DD\"                                24                                       \r\n                  , \"MONTH_FIRST_DAY\"   20200601                                 \r\n                  , \"MONTH_LAST_DAY\"    20200630                                 \r\n                  , \"DAY_OF_WEEK\"       4                                        \r\n                  , \"DAY_OF_KOR_WEEK\"   수요일                                   \r\n * Return(String) : String => ret 날짜에 맞는 포멧을 가지고 리턴함.              \r\n ***********************************************************************/\r\n");
            obj.set_cssclass("_SS_Text");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01","710","457","624","46",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("this.gfn_isYMD(strDate) 날짜형식에 맞는지  -  this.gfn_isDate(strFrDate)에 포함. YYYYMMDD\r\nthis.gfn_getDiffDate(sStartDate, sEndDate) 시작일자가 종료일자보다 큰지를 체크하는 함수");
            obj.set_textAlign("left");
            obj.set_background("cadetblue");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00","397","313","937","106",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("var diffNo = this.fn_getDiffDate (frDate, toDate );     // 30일을 제한하는 방법\nif (diffNo > 30) \n{\n        this.gfn_alert(\"&1일자가 &2일자를 &3넘을수 없습니다\",\"날짜체크\",\"시작일자,종료일자,30일\",\"information\");   \r\n        return false;\n}");
            obj.set_textAlign("left");
            obj.set_background("cadetblue");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","397","538","367","44",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_cssclass("div_WF_SearchArea");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_04","9","10","62","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("기간설정");
            obj.set_cssclass("sta_cm_box01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divStMonth","75","10","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("COMM::cmmCalMM.xfdl");
            obj.getSetter("callbackfunc").set("fn_afterStCall");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_03","179","12","18","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_SearchLbl_L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divEdMonth","193","10","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("COMM::cmmCalMM.xfdl");
            obj.getSetter("callbackfunc").set("fn_afterEdCall");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch","298","11","60","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_02","398","505","936","30",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("※ 버튼을 누를때 얼달력(Validation )를 체크하는 방법");
            obj.set_textAlign("left");
            obj.set_background("cadetblue");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","775","536","559","46",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("this.gfn_isYM(strMonth) 날짜형식에 맞는지 - this.gfn_isDate(strEdMonth)에 포함 YYYYMM \r\nthis.gfn_getDiffMonth(sStartDate, sEndDate) 시작월(이)가 종료월보다 큰지를 체크하는 함수");
            obj.set_textAlign("left");
            obj.set_background("cadetblue");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00","397","592","937","150",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("var strStM =  strStMonth+\"01\";\nvar strEdM =  strEdMonth+\"01\";\nvar diffMonth = this.gfn_getDiffMonth (strStM, strEdM);     // 기간을 제한하는 함수\nif (diffMonth > 5) \n{\n\tthis.gfn_alert(\"MSG00020\",\"월체크\",\"시작월,종료월,5개월\",\"information\"); \t\n\treturn false;\n}");
            obj.set_textAlign("left");
            obj.set_background("cadetblue");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","50","762","516","42",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_cssclass("div_WF_SearchArea");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_allCheck","17","2","57","33",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("전체");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chk_01","91","3","62","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("체크1");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chk_02","163","3","62","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("체크2");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chk_03","235","3","62","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("체크3");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chk_04","307","3","62","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("체크4");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chk_05","379","3","62","28",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("체크5");
            this.div_search.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSetDate01.form.calToDate","value","ds_cond","TO_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSetDate01.form.calFrDate","value","ds_cond","FR_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSetDate02.form.calStDate","value","ds_cond","ST_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSetDate02.form.calEdDate","value","ds_cond","ED_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmCalMM.xfdl");
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsPayWayCd");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CO_11.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_CO_11.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): TOT014DrApprCardSaleM01xfdl(싱글다중처리)
        * 작 성         일 명: 홍길동
        * 작 성         일 자: 2019/4/9
        * 변 경         일 자:
        * 변 경         자 명:
        * 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술
        */
        /**********************************************************************
                01. 전처리 공통 함수 선언
        ***********************************************************************/
        this.executeIncludeScript("RD::rdMain.xjs"); /*include "RD::rdMain.xjs"*/;
        /**********************************************************************
                02. 폼 변수 정의
        ***********************************************************************/
        this.lvGetDate      = "";
        this.cmpCd 			= "";
        this.sToday         = "";
        this.sCurrStdYmd    = "";
        this.lvGetDate      = "";
        /**********************************************************************
                03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.form_onload = function(obj,e)
        {
            //폼에 공통으로 로드시 사용하는 함수.
        	this.gfn_formOnLoad(this);
        	this.fn_formInit();
        };

        /**
         * 기능 : 폼언 로드(닫기전 셋팅)  Setting
         */
        this.form_onclose = function(obj,e)
        {

        };
        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {

        	this.lvGetDate = this.fn_getSvrDate();   // 현재일자 셋팅
        	/*******************************************************************************
        	 * Function Name  : this.gfn_getSvrDate(strFormat,dsObj)
        	 * Description    : 포멧에 맞는 날짜를 실시간으로가기고오는 함수
        	 * Arguments      : String => strFormat
        					  , "YYYY"              2020
        					  ,	"YYYYMMDD"          20200624
        					  ,	"KOR_YYYYMMDD"      2020.06.24 수요일
        					  ,	"YYYYMM"            202006
        					  ,	"MMDD"              0624
        					  ,	"MM"                06
        					  ,	"DD"                24
        					  ,	"MONTH_FIRST_DAY"   20200601
        					  , "MONTH_LAST_DAY"    20200630
        					  ,	"DAY_OF_WEEK"       4
        					  ,	"DAY_OF_KOR_WEEK"   수요일
        					  , obj    => dataset Obj
        	 * Return(String) : String => ret 날짜에 맞는 포멧을 가지고 리턴함.
        	 *******************************************************************************/

        	this.calGetDate.set_value(this.lvGetDate);
        	var sFirstDate 			= this.gfn_getFirstDate(this.lvGetDate);    // 현재일자 기준으로 함수로 시작일자
        	var sLastDate 			= this.gfn_getLastDate(this.lvGetDate);     // 현재일자 기준으로 함수로 종료일자
        	this.calGetFirstDate1.set_value(sFirstDate);
        	this.calGetLastDate1.set_value(sLastDate);

        	var strDate40 =  this.gfn_addDate(this.lvGetDate, 40);              // 현재일자보다 + 40일

        	this.calNowDay.set_value(strDate40);								// 현재일자보다 + 40일
        	this.calNowMonth.set_value(strDate40);                              // 현재일자보다 + 40일
        	this.calPreMonth.set_value(strDate40);                              // 현재일자보다 + 40일

        	this.calNowDayAdd.set_value(this.lvGetDate);
        	this.calNowMonthAdd.set_value(this.lvGetDate);

        	if(this.gfn_isNull(this.mskDay.value))
        	{
        		this.mskDay.set_value(0);
        	}

        	if(this.gfn_isNull(this.mskMonth.value))
        	{
        		this.mskMonth.set_value(0);
        	}

        	this.ds_cond.clearData();
        	var nRow = this.ds_cond.addRow();

        	this.ds_cond.setColumn(nRow,"FR_DATE",this.lvGetDate);
        	this.ds_cond.setColumn(nRow,"TO_DATE",this.lvGetDate);

        	this.ds_cond.set_enableevent(false);
        	this.ds_cond.setColumn(nRow,"ST_DATE",this.lvGetDate);
        	this.ds_cond.setColumn(nRow,"ED_DATE",this.lvGetDate);
        	this.ds_cond.set_enableevent(true);



        	this.divSearch.form.divStMonth.form.cfn_setValue(this.gfn_addMonth(this.lvGetDate,-5).substr(0, 6));
        	this.divSearch.form.divStMonth.form.cfn_setValue(this.lvGetDate.substr(0, 6));

        	var strMonthFirstDay 	= this.fn_getSvrDate("MONTH_FIRST_DAY");	// 각각 실시간으로 시스템의 현재월에 시작일자
        	this.calGetFirstDate.set_value(strMonthFirstDay);
        	var strMonthLastDay 	= this.fn_getSvrDate("MONTH_LAST_DAY");	// 각각 실시간으로 시스템의 현재월에 종료일자
        	this.calGetLastDate.set_value(strMonthLastDay);

        };
        /**
          * 달력에 당일을 셋팅
         **/

        this.btn_NowDay_onclick = function(obj,e)
        {

        	this.calNowDay.set_value(this.lvGetDate);

        };
        /**
          * 달력에 당월을 셋팅
         **/

        this.btn_NowMonth_onclick = function(obj,e)
        {

        	var strNowDate = this.gfn_addMonth(this.lvGetDate,0);
        	this.calNowMonth.set_value(strNowDate);
        };

        /**
          * 달력에 전월을 셋팅
         **/

        this.btn_PreMonth_onclick = function(obj,e)
        {

        	var strPreDate = this.gfn_addMonth(this.lvGetDate,-1);
        	this.calPreMonth.set_value(strPreDate);
        };

        /**
          * 달력에 일자별 일자별로 셋팅 을한다. this.gfn_addDate(this.calNowDayAdd.value, this.mskDay.value)
         **/
        this.btn_AddDay_onclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.mskDay.value))
        	{
        		this.mskDay.set_value(0);
        	}

        	if(this.gfn_isNull(this.calNowDayAdd.value))
        	{
        		this.calNowDayAdd.set_value(this.lvGetDate);
        	}

        	var strGetDate =  this.gfn_addDate(this.calNowDayAdd.value, nexacro.toNumber(this.mskDay.value));

        	this.calNowDayAdd.set_value(strGetDate);
        };

        /**
          * 달력에 월별로 셋팅 을한다. this.calNowMonthAdd.value, nexacro.toNumber(this.mskMonth.value)
         **/

        this.btn_AddMonth_onclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.mskMonth.value))
        	{
        		this.mskMonth.set_value(0);
        	}

        	if(this.gfn_isNull(this.calNowMonthAdd.value))
        	{
        		this.calNowMonthAdd.set_value(this.lvGetDate);
        	}

        	var strGetDate =  this.gfn_addMonth(this.calNowMonthAdd.value, nexacro.toNumber(this.mskMonth.value));
        	this.calNowMonthAdd.set_value(strGetDate);
        };


        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {

        };
        /*
         * 버튼을 누를시 날짜를 체크하는함수
         */
        this.divSetDate01_btnSearch_onclick = function(obj,e)
        {

            var frDate = this.ds_cond.getColumn(0, "FR_DATE");
        	var toDate = this.ds_cond.getColumn(0, "TO_DATE");


        	var chkFlag = this.fn_getDefaultDateChk(frDate,toDate);  // 시작일자 및 종료일자
        	if(!chkFlag)
        	{
        		return false;
        	}

        	var diffNo = this.gfn_getDiffDate (frDate, toDate );     // 기간을 제한하는 함수
        	if (diffNo > 30)
        	{
        		this.fn_alert("&1일자가 &2일자를 &3넘을수 없습니다.","날짜체크","시작일자,종료일자,30일","information");
        		return false;
        	}

        };


        /*
         * 데이타셋에 컬럼이 체인지시 체크하는 방식
         */
        this.ds_cond_cancolumnchange = function(obj,e)
        {
        	if(e.columnid == "ST_DATE")
        	{
        		var frDate = e.newvalue;
        		var toDate = this.ds_cond.getColumn(0, "ED_DATE");

        		var chkFlag = this.fn_getDefaultDateChk(frDate,toDate);  // 시작일자 및 종료일자
        		if(!chkFlag)
        		{
        			return false;
        		}
        	}else if(e.columnid == "ED_DATE")
        	{
        		var frDate = this.ds_cond.getColumn(0, "ST_DATE");
        		var toDate = e.newvalue;

        		var chkFlag = this.fn_getDefaultDateChk(frDate,toDate);  // 시작일자 및 종료일자
        		if(!chkFlag)
        		{
        			return false;
        		}
        	}
        };

        //월선택시 콜백함수. callbackfunc user property생성후 정의
        this.fn_afterStCall = function (sVal)
        {
        	trace("sStVal >> "+sVal);
        }

        //월선택시 콜백함수. callbackfunc user property생성후 정의
        this.fn_afterEdCall = function (sVal)
        {
        	trace("sEdVal >> "+sVal);
        }

        this.divSearch_btnSearch_onclick = function(obj,e)
        {

        	var strStMonth = this.divSearch.form.divStMonth.form.cfn_getValue();
        	var strEdMonth = this.divSearch.form.divEdMonth.form.cfn_getValue();

        	// 시작일자 오류
        	if (!this.gfn_isNull(strStMonth))
        	{
        		if (!this.gfn_isDate(strStMonth))
        		{
        			this.fn_alert("&1이 월형식에 맞지 았습니다.","날짜체크","시작월","information"); 				// {0} 형식이 아닙니다
        			this.divSearch.form.divStMonth.form.calYM.setFocus();
        			return false;
        		}
        	} else
        	{
        		this.fn_alert("&1이 월형식에 맞지 았습니다.","날짜체크","시작월","information");						// {0} 형식이 아닙니다
        		this.divSearch.form.divStMonth.form.calYM.setFocus();
        		return false;
        	}

        	// 종료일자 오류
        	if (!this.gfn_isNull(strEdMonth))
        	{
        		if (!this.gfn_isDate(strEdMonth))
        		{
        			this.fn_alert("&1이 월형식에 맞지 았습니다.","날짜체크","종료월","information"); 	            // {0} 형식이 아닙니다
        			this.divSearch.form.divEdMonth.form.calYM.setFocus();
        			return false;
        		}
        	}else
        	{
        		this.fn_alert("&1이 월형식에 맞지 았습니다.","날짜체크","종료월","information"); 	    			// {0} 형식이 아닙니다
        		this.divSearch.form.divEdMonth.form.calYM.setFocus();
        		return false;
        	}

            // 월체크 체크
            if ((!this.gfn_isNull(strStMonth)) && (!this.gfn_isNull(strEdMonth)))
        	{
        		if (nexacro.toNumber(strStMonth) > nexacro.toNumber(strEdMonth) )
        		{
        			this.fn_alert("&1는(은) &2보다 작거나 같아야 합니다.","날짜체크","시작월,종료월","information"); 	//	{0}는(은) {1}보다 작거나 같아야 합니다.

        			return false;
        		}
        	}
        	var strStM =  strStMonth+"01";
        	var strEdM =  strEdMonth+"01";
        	var diffMonth = this.gfn_getDiffMonth (strStM, strEdM);     // 기간을 제한하는 함수
        	if (diffMonth > 5)
        	{
        		this.fn_alert("조회기간이 &1이 &2일 &3개월입니다.","날짜체크","시작월,종료월,5개월","information");
        		return false;
        	}

        	return true;

        };


        this.div_search_btn_allCheck_onclick = function(obj,e)
        {
        	var chkBoxAll = {
        					   chk_01 		: this.div_search.form.chk_01			                // 체크박스1
        					 , chk_02       : this.div_search.form.chk_02	    					// 체크박스2
        					 , chk_03 		: this.div_search.form.chk_03				            // 체크박스3
        					 , chk_04       : this.div_search.form.chk_04	 						// 체크박스4
        					 , chk_05 		: this.div_search.form.chk_05				            // 체크박스5

        	               }

        	this.fn_chkBoxAllChkeck(chkBoxAll);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Static01_00.addEventHandler("onclick",this.Static01_00_onclick,this);
            this.Static01_01_00.addEventHandler("onclick",this.Static01_01_00_onclick,this);
            this.btn_NowDay.addEventHandler("onclick",this.btn_NowDay_onclick,this);
            this.btn_NowMonth.addEventHandler("onclick",this.btn_NowMonth_onclick,this);
            this.btn_PreMonth.addEventHandler("onclick",this.btn_PreMonth_onclick,this);
            this.btn_AddDay.addEventHandler("onclick",this.btn_AddDay_onclick,this);
            this.btn_AddMonth.addEventHandler("onclick",this.btn_AddMonth_onclick,this);
            this.divSetDate01.form.btnSearch.addEventHandler("onclick",this.divSetDate01_btnSearch_onclick,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.div_search.form.btn_allCheck.addEventHandler("onclick",this.div_search_btn_allCheck_onclick,this);
            this.div_search.form.chk_01.addEventHandler("canchange",this.div_search_chk_01_canchange,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.ds_cond.addEventHandler("cancolumnchange",this.ds_cond_cancolumnchange,this);
        };
        this.loadIncludeScript("SSP_BO_CO_11.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
