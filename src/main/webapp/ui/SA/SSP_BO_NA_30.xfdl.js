(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_NA_30");
            this.set_titletext("프로모션 팝업 등록/상세/수정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,760);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PMT_POPUP_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_expsNoticSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pmtPopupInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PMT_POPUP_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PMT_POPUP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_NOTIC_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"URL_CNSOL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"URL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_EVT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_EVT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_SO\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STR_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_END_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STR_HR\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_STR_MN\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_END_HR\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_END_MN\" type=\"STRING\" size=\"256\"/><Column id=\"TOP_PST\" type=\"STRING\" size=\"256\"/><Column id=\"LEFT_PST\" type=\"STRING\" size=\"256\"/><Column id=\"FLTG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NLOOK_SET_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_SET_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PMT_POPUP_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_PAGE_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXCPT_PAGE_SET_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRM_SET_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PMT_POPUP_STATS\" type=\"STRING\" size=\"256\"/><Column id=\"UNLMT_PUBC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NOTLOGN_INC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"YTUBE_URL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"WDT_LEN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_oprUnitList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PMT_POPUP_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_urlCnsolSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USE_YN\">Y</Col><Col id=\"USE_YN_NM\">사용</Col></Row><Row><Col id=\"USE_YN_NM\">미 사용</Col><Col id=\"USE_YN\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_file", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchOprUnitCheckList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rtnOprUnitCheckList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_aplyDtlList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COL_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PMT_POPUP_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PMT_POPUP_APLY_DTL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PMT_POPUP_PROC_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PMT_POPUP_PROC_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_oprUnitList_copy", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PMT_POPUP_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pmtPopupExpsPageSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excptDtlList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COL_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PMT_POPUP_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PMT_POPUP_APLY_DTL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PMT_POPUP_PROC_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PMT_POPUP_PROC_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prmDtlList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COL_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PMT_POPUP_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PMT_POPUP_APLY_DTL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PMT_POPUP_PROC_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PMT_POPUP_PROC_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dispHr", this);
            obj._setContents("<ColumnInfo><Column id=\"HR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"HR_CD\"/><Col id=\"HR_NM\">시</Col></Row><Row><Col id=\"HR_NM\">0</Col><Col id=\"HR_CD\">00</Col></Row><Row><Col id=\"HR_CD\">01</Col><Col id=\"HR_NM\">1</Col></Row><Row><Col id=\"HR_CD\">02</Col><Col id=\"HR_NM\">2</Col></Row><Row><Col id=\"HR_CD\">03</Col><Col id=\"HR_NM\">3</Col></Row><Row><Col id=\"HR_CD\">04</Col><Col id=\"HR_NM\">4</Col></Row><Row><Col id=\"HR_CD\">05</Col><Col id=\"HR_NM\">5</Col></Row><Row><Col id=\"HR_CD\">06</Col><Col id=\"HR_NM\">6</Col></Row><Row><Col id=\"HR_CD\">07</Col><Col id=\"HR_NM\">7</Col></Row><Row><Col id=\"HR_CD\">08</Col><Col id=\"HR_NM\">8</Col></Row><Row><Col id=\"HR_CD\">09</Col><Col id=\"HR_NM\">9</Col></Row><Row><Col id=\"HR_CD\">10</Col><Col id=\"HR_NM\">10</Col></Row><Row><Col id=\"HR_CD\">11</Col><Col id=\"HR_NM\">11</Col></Row><Row><Col id=\"HR_CD\">12</Col><Col id=\"HR_NM\">12</Col></Row><Row><Col id=\"HR_CD\">13</Col><Col id=\"HR_NM\">13</Col></Row><Row><Col id=\"HR_CD\">14</Col><Col id=\"HR_NM\">14</Col></Row><Row><Col id=\"HR_CD\">15</Col><Col id=\"HR_NM\">15</Col></Row><Row><Col id=\"HR_CD\">16</Col><Col id=\"HR_NM\">16</Col></Row><Row><Col id=\"HR_CD\">17</Col><Col id=\"HR_NM\">17</Col></Row><Row><Col id=\"HR_CD\">18</Col><Col id=\"HR_NM\">18</Col></Row><Row><Col id=\"HR_CD\">19</Col><Col id=\"HR_NM\">19</Col></Row><Row><Col id=\"HR_CD\">20</Col><Col id=\"HR_NM\">20</Col></Row><Row><Col id=\"HR_CD\">21</Col><Col id=\"HR_NM\">21</Col></Row><Row><Col id=\"HR_CD\">22</Col><Col id=\"HR_NM\">22</Col></Row><Row><Col id=\"HR_CD\">23</Col><Col id=\"HR_NM\">23</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dispMn", this);
            obj._setContents("<ColumnInfo><Column id=\"MN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MN_CD\"/><Col id=\"MN_NM\">분</Col></Row><Row><Col id=\"MN_NM\">0</Col><Col id=\"MN_CD\">00</Col></Row><Row><Col id=\"MN_CD\">01</Col><Col id=\"MN_NM\">1</Col></Row><Row><Col id=\"MN_CD\">02</Col><Col id=\"MN_NM\">2</Col></Row><Row><Col id=\"MN_CD\">03</Col><Col id=\"MN_NM\">3</Col></Row><Row><Col id=\"MN_CD\">04</Col><Col id=\"MN_NM\">4</Col></Row><Row><Col id=\"MN_CD\">05</Col><Col id=\"MN_NM\">5</Col></Row><Row><Col id=\"MN_CD\">06</Col><Col id=\"MN_NM\">6</Col></Row><Row><Col id=\"MN_CD\">07</Col><Col id=\"MN_NM\">7</Col></Row><Row><Col id=\"MN_CD\">08</Col><Col id=\"MN_NM\">8</Col></Row><Row><Col id=\"MN_CD\">09</Col><Col id=\"MN_NM\">9</Col></Row><Row><Col id=\"MN_CD\">10</Col><Col id=\"MN_NM\">10</Col></Row><Row><Col id=\"MN_CD\">11</Col><Col id=\"MN_NM\">11</Col></Row><Row><Col id=\"MN_CD\">12</Col><Col id=\"MN_NM\">12</Col></Row><Row><Col id=\"MN_CD\">13</Col><Col id=\"MN_NM\">13</Col></Row><Row><Col id=\"MN_CD\">14</Col><Col id=\"MN_NM\">14</Col></Row><Row><Col id=\"MN_CD\">15</Col><Col id=\"MN_NM\">15</Col></Row><Row><Col id=\"MN_CD\">16</Col><Col id=\"MN_NM\">16</Col></Row><Row><Col id=\"MN_CD\">17</Col><Col id=\"MN_NM\">17</Col></Row><Row><Col id=\"MN_CD\">18</Col><Col id=\"MN_NM\">18</Col></Row><Row><Col id=\"MN_CD\">19</Col><Col id=\"MN_NM\">19</Col></Row><Row><Col id=\"MN_CD\">20</Col><Col id=\"MN_NM\">20</Col></Row><Row><Col id=\"MN_CD\">21</Col><Col id=\"MN_NM\">21</Col></Row><Row><Col id=\"MN_CD\">22</Col><Col id=\"MN_NM\">22</Col></Row><Row><Col id=\"MN_CD\">23</Col><Col id=\"MN_NM\">23</Col></Row><Row><Col id=\"MN_CD\">24</Col><Col id=\"MN_NM\">24</Col></Row><Row><Col id=\"MN_CD\">25</Col><Col id=\"MN_NM\">25</Col></Row><Row><Col id=\"MN_CD\">26</Col><Col id=\"MN_NM\">26</Col></Row><Row><Col id=\"MN_CD\">27</Col><Col id=\"MN_NM\">27</Col></Row><Row><Col id=\"MN_CD\">28</Col><Col id=\"MN_NM\">28</Col></Row><Row><Col id=\"MN_CD\">29</Col><Col id=\"MN_NM\">29</Col></Row><Row><Col id=\"MN_CD\">30</Col><Col id=\"MN_NM\">30</Col></Row><Row><Col id=\"MN_CD\">31</Col><Col id=\"MN_NM\">31</Col></Row><Row><Col id=\"MN_CD\">32</Col><Col id=\"MN_NM\">32</Col></Row><Row><Col id=\"MN_CD\">33</Col><Col id=\"MN_NM\">33</Col></Row><Row><Col id=\"MN_CD\">34</Col><Col id=\"MN_NM\">34</Col></Row><Row><Col id=\"MN_CD\">35</Col><Col id=\"MN_NM\">35</Col></Row><Row><Col id=\"MN_CD\">36</Col><Col id=\"MN_NM\">36</Col></Row><Row><Col id=\"MN_CD\">37</Col><Col id=\"MN_NM\">37</Col></Row><Row><Col id=\"MN_CD\">38</Col><Col id=\"MN_NM\">38</Col></Row><Row><Col id=\"MN_CD\">39</Col><Col id=\"MN_NM\">39</Col></Row><Row><Col id=\"MN_CD\">40</Col><Col id=\"MN_NM\">40</Col></Row><Row><Col id=\"MN_CD\">41</Col><Col id=\"MN_NM\">41</Col></Row><Row><Col id=\"MN_CD\">42</Col><Col id=\"MN_NM\">42</Col></Row><Row><Col id=\"MN_CD\">43</Col><Col id=\"MN_NM\">43</Col></Row><Row><Col id=\"MN_CD\">44</Col><Col id=\"MN_NM\">44</Col></Row><Row><Col id=\"MN_CD\">45</Col><Col id=\"MN_NM\">45</Col></Row><Row><Col id=\"MN_CD\">46</Col><Col id=\"MN_NM\">46</Col></Row><Row><Col id=\"MN_CD\">47</Col><Col id=\"MN_NM\">47</Col></Row><Row><Col id=\"MN_CD\">48</Col><Col id=\"MN_NM\">48</Col></Row><Row><Col id=\"MN_CD\">49</Col><Col id=\"MN_NM\">49</Col></Row><Row><Col id=\"MN_CD\">50</Col><Col id=\"MN_NM\">50</Col></Row><Row><Col id=\"MN_CD\">51</Col><Col id=\"MN_NM\">51</Col></Row><Row><Col id=\"MN_CD\">52</Col><Col id=\"MN_NM\">52</Col></Row><Row><Col id=\"MN_CD\">53</Col><Col id=\"MN_NM\">53</Col></Row><Row><Col id=\"MN_CD\">54</Col><Col id=\"MN_NM\">54</Col></Row><Row><Col id=\"MN_CD\">55</Col><Col id=\"MN_NM\">55</Col></Row><Row><Col id=\"MN_CD\">56</Col><Col id=\"MN_NM\">56</Col></Row><Row><Col id=\"MN_CD\">57</Col><Col id=\"MN_NM\">57</Col></Row><Row><Col id=\"MN_CD\">58</Col><Col id=\"MN_NM\">58</Col></Row><Row><Col id=\"MN_CD\">59</Col><Col id=\"MN_NM\">59</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("fileUpTrans", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static09","20","478",null,"108","20",null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","465",null,"70","30",null,"-661",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,null,"70","30","btn_cancel:4","-661",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","btn_cancel:4",null,"70","30",null,"-661",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20","585",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","230",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","51",null,"180","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","447",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_expsNoticSprCd","20","51","130","180",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("게시 구분");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_expsNoticSprCd","158","65","152","134",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_expsNoticSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_direction("horizontal");
            obj.set_taborder("10");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_oprUnitList","320","61","590","159",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_binddataset("ds_oprUnitList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"126\"/><Column size=\"200\"/><Column size=\"48\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"운영단위ID\"/><Cell col=\"1\" text=\"운영단위명\"/><Cell col=\"2\"/></Band><Band id=\"body\"><Cell text=\"bind:OPR_UNIT_ID\"/><Cell col=\"1\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_oprUnitMulti","grd_oprUnitList:4","60","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_multi");
            this.addChild(obj.name, obj);

            obj = new Button("btn_oprUnitMultiText","btn_oprUnitMulti:2","60","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_dispPeriod","20","230","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("전시 기간");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_dispStrDt","160","234","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_dispEndDt","407","234","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","394","234","9","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","20","323",null,"64","20",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_url","20","323","130","64",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Link URL");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_urlCnsolSprCd","160","327","300","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_urlCnsolSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_urdAddr","160","358",null,"24","30",null,null,null,null,null,this);
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new Static("sta_useYn","20","585","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_useYn","160","589","150","24",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_useYn");
            obj.set_datacolumn("USE_YN_NM");
            obj.set_codecolumn("USE_YN");
            obj.set_taborder("24");
            obj.set_direction("vertical");
            this.addChild(obj.name, obj);

            obj = new Static("sta_nlookSet","20","447","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("다시보지않기설정");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totalCountOprUnit","250","62","56","25",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("(총 0건)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","20","416",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pstSet","20","416","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("위치설정");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_topPst","321","420","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_inputtype("number");
            obj.set_maxlength("5");
            this.addChild(obj.name, obj);

            obj = new Static("sta_topPst","edt_topPst:3","417","20","30",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("px");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_leftPst","192","420","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_inputtype("number");
            obj.set_maxlength("5");
            this.addChild(obj.name, obj);

            obj = new Static("sta_dispSo","678","230","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("전시순서");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dispSo","814","234","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_inputtype("number");
            obj.set_maxlength("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","20","20",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_cssclass("sta_cm_box02L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pmtPopupNm","20","20","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("프로모션명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pmtPopupNm","160","24",null,"24","120",null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pmtPopupNmSize","edt_pmtPopupNm:4","24","88","24",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("(0 / 300 Byte)");
            obj.set_textAlign("right");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pmtPopupDesc","20","478","130","108",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("프로모션 설명");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new TextArea("edt_pmtPopupDesc","160","482",null,"77","30",null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pmtPopupDescSize","830","559",null,"24","40",null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("(0 / 2000 Byte)");
            obj.set_textAlign("right");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_leftPst","edt_leftPst:4","417","20","30",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("px");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_fltgYn","427","420","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("플로팅");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("N");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","20","678",null,"176","20",null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_expsPageUrl","20","678","130","176",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("노출 페이지 URL");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","20","647",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_expsPageSprCd","20","647","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("구분");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_expsPageSprCd","160","650","180","24",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_direction("vertical");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_innerdataset("ds_pmtPopupExpsPageSprCd");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","20","616","126","30",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("노출페이지 설정");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_aplyDtlList","160","717","81.10%","128",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_nodatatext("등록된 노출페이지가 없습니다.");
            obj.set_binddataset("ds_aplyDtlList");
            obj.set_selecttype("row");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"730\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"URL\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" textAlign=\"center\" cssclass=\"cell_Icon_Asending\" edittype=\"checkbox\" text=\"bind:COL_CHK\"/><Cell col=\"1\" text=\"bind:PMT_POPUP_PROC_TXT\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_aplyAdd",null,"684","81","28","115",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_aplyMultiText",null,"686","24","24","btn_aplyAdd:4",null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_aplyDelete",null,"684","81","28","30",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","20","933",null,"176","20",null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_excptPageUrl","20","933","130","176",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("제외 페이지 URL");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","20","902",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_excptPageSetYn","20","902","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("구분");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_excptPageSetYn","160","905","180","24",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var rdo_excptPageSetYn_innerdataset = new nexacro.NormalDataset("rdo_excptPageSetYn_innerdataset", obj);
            rdo_excptPageSetYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">제외없음</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">제외페이지</Col></Row></Rows>");
            obj.set_innerdataset(rdo_excptPageSetYn_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("Static14","20","871","126","30",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("제외페이지 설정");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_excptDtlList","160","972","81.10%","128",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_nodatatext("등록된 제외페이지가 없습니다.");
            obj.set_binddataset("ds_excptDtlList");
            obj.set_selecttype("row");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"730\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"URL\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" textAlign=\"center\" cssclass=\"cell_Icon_Asending\" edittype=\"checkbox\" text=\"bind:COL_CHK\"/><Cell col=\"1\" text=\"bind:PMT_POPUP_PROC_TXT\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excptAdd",null,"939","81","28","115",null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excptMultiText",null,"941","24","24","200",null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_cssclass("btn_WF_document");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excptDelete",null,"939","81","28","30",null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","20","1185",null,"176","20",null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_param","20","1185","130","176",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("파라미터");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","20","1154",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_prmSetYn","20","1154","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("구분");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_prmSetYn","160","1157","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var rdo_prmSetYn_innerdataset = new nexacro.NormalDataset("rdo_prmSetYn_innerdataset", obj);
            rdo_prmSetYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">없음</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">파라미터 설정</Col></Row></Rows>");
            obj.set_innerdataset(rdo_prmSetYn_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("Static17","20","1123","126","30",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("외부 인입 설정");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_prmDtlList","160","1224","81.10%","128",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_nodatatext("등록된 파라미터가 없습니다.");
            obj.set_binddataset("ds_prmDtlList");
            obj.set_selecttype("row");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"730\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"파라미터\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" textAlign=\"center\" cssclass=\"cell_Icon_Asending\" edittype=\"checkbox\" text=\"bind:COL_CHK\"/><Cell col=\"1\" text=\"bind:PMT_POPUP_PROC_TXT\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prmAdd",null,"1191","81","28","115",null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prmMultiText",null,"1193","24","24","200",null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_cssclass("btn_WF_document");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prmDelete",null,"1191","81","28","30",null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","20","1421","960","20",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_background("white");
            obj.set_visible("true");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","20","385",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static51","20","385","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("쿠폰 선택");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cpnEvtNm","160","389","420","24",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cpnEvtNo","125","389","20","24",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cpnEvtNo","584","389","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cpnEvtNoDelete","612","389","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("X");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_top","280","417","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("/  TOP");
            this.addChild(obj.name, obj);

            obj = new Static("sta_top00","162","417","35","30",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("LEFT");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prev","504","420","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("미리보기");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_nlookSetYn","160","451","295","24",null,null,null,null,null,null,this);
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            obj.set_taborder("87");
            obj.set_direction("vertical");
            var rdo_nlookSetYn_innerdataset = new nexacro.NormalDataset("rdo_nlookSetYn_innerdataset", obj);
            rdo_nlookSetYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">오늘 다시 보지 않기</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">사용안함</Col></Row></Rows>");
            obj.set_innerdataset(rdo_nlookSetYn_innerdataset);
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_closeSetYn","407","451","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("닫기 버튼");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("N");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_dispStrHr","264","234","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_codecolumn("HR_CD");
            obj.set_datacolumn("HR_NM");
            obj.set_innerdataset("ds_dispHr");
            obj.set_text("1주일");
            obj.set_value("2");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_dispStrMn","328","234","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_innerdataset("ds_dispMn");
            obj.set_codecolumn("MN_CD");
            obj.set_datacolumn("MN_NM");
            obj.set_text("1주일");
            obj.set_value("2");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_dispEndHr","514","234","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_innerdataset("ds_dispHr");
            obj.set_codecolumn("HR_CD");
            obj.set_datacolumn("HR_NM");
            obj.set_text("1주일");
            obj.set_value("2");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_dispEndMn","578","234","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_innerdataset("ds_dispMn");
            obj.set_codecolumn("MN_CD");
            obj.set_datacolumn("MN_NM");
            obj.set_text("1주일");
            obj.set_value("2");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dispStrDtm","105","234","20","24",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dispEndDtm","126","234","20","24",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view","1040","0","100","100",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_imagealign("center middle");
            obj.set_padding("0px");
            obj.set_stretch("fixaspectratio");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_notLogn_Inc_Yn","160","204","134","20",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_text("미로그인 포함");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00","20","261",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_popupSprCD","20","261","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("소재");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_popupSprCD","160","265","150","24",null,null,null,null,null,null,this);
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            obj.set_taborder("99");
            obj.set_direction("vertical");
            var rdo_popupSprCD_innerdataset = new nexacro.NormalDataset("rdo_popupSprCD_innerdataset", obj);
            rdo_popupSprCD_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">이미지</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">유튜브</Col></Row></Rows>");
            obj.set_innerdataset(rdo_popupSprCD_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("Static05_1","20","292",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_yTube","20","292","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("유튜브");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_yTubeUrlAddr","471","296","239","24",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_text("화면에 노출할 유튜브 주소를 입력해주세요.");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_yTubeUrlAddr","160","296",null,"24","535",null,null,null,null,null,this);
            obj.set_taborder("103");
            this.addChild(obj.name, obj);

            obj = new Static("sta_wdtLen","750","296","104","24",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_text("사이즈 : Width = ");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_wdtLen","850","296",null,"24","48",null,null,null,null,null,this);
            obj.set_taborder("105");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20","292",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_img","20","292","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_atflNm","160","296","420","24",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_readonly("true");
            obj.set_text("11111");
            this.addChild(obj.name, obj);

            obj = new Button("btn_imgAdd","584","296","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("파일찾기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_imgDelete","648","296","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("X");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_imgSize","677","296","328","24",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_text("용량 : 10M미만 / 형식 : PNG, JPG");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,760,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_pmtPopupNm","value","ds_pmtPopupInfo","PMT_POPUP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","rdo_expsNoticSprCd","value","ds_pmtPopupInfo","EXPS_NOTIC_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cal_dispStrDt","value","ds_pmtPopupInfo","DISP_STR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cal_dispEndDt","value","ds_pmtPopupInfo","DISP_END_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","rdo_urlCnsolSprCd","value","ds_pmtPopupInfo","URL_CNSOL_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt_urdAddr","value","ds_pmtPopupInfo","URL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","rdo_useYn","value","ds_pmtPopupInfo","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_atflNm","value","ds_pmtPopupInfo","ATFL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt_topPst","value","ds_pmtPopupInfo","TOP_PST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edt_leftPst","value","ds_pmtPopupInfo","LEFT_PST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt_dispSo","value","ds_pmtPopupInfo","DISP_SO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edt_pmtPopupDesc","value","ds_pmtPopupInfo","PMT_POPUP_DESC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","chk_fltgYn","value","ds_pmtPopupInfo","FLTG_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","rdo_expsPageSprCd","value","ds_pmtPopupInfo","EXPS_PAGE_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","rdo_excptPageSetYn","value","ds_pmtPopupInfo","EXCPT_PAGE_SET_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","rdo_prmSetYn","value","ds_pmtPopupInfo","PRM_SET_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","edt_cpnEvtNm","value","ds_pmtPopupInfo","CPN_EVT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","edt_cpnEvtNo","value","ds_pmtPopupInfo","CPN_EVT_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","rdo_nlookSetYn","value","ds_pmtPopupInfo","NLOOK_SET_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","chk_closeSetYn","value","ds_pmtPopupInfo","CLOSE_SET_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edt_dispStrDtm","value","ds_pmtPopupInfo","DISP_STR_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edt_dispEndDtm","value","ds_pmtPopupInfo","DISP_END_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","cbo_dispStrHr","value","ds_pmtPopupInfo","DISP_STR_HR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","cbo_dispStrMn","value","ds_pmtPopupInfo","DISP_STR_MN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","cbo_dispEndHr","value","ds_pmtPopupInfo","DISP_END_HR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","cbo_dispEndMn","value","ds_pmtPopupInfo","DISP_END_MN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","chk_notLogn_Inc_Yn","value","ds_pmtPopupInfo","NOTLOGN_INC_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","rdo_popupSprCD","value","ds_pmtPopupInfo","POPUP_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","edt_yTubeUrlAddr","value","ds_pmtPopupInfo","YTUBE_URL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","edt_wdtLen","value","ds_pmtPopupInfo","WDT_LEN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_NA_30.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_NA_30.xfdl","OD::odUtils.xjs");
        this.addIncludeScript("SSP_BO_NA_30.xfdl","SA::saUtils.xjs");
        this.registerScript("SSP_BO_NA_30.xfdl", function() {
        /*******************************************************
        PROJECT NAME : 프로모션 팝업
        CREATION DATES : 2023.01.26
        CREATER        : 이민호
        *******************************************************/
        //인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        this.executeIncludeScript("SA::saUtils.xjs"); /*include "SA::saUtils.xjs"*/;
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.fv_oApp = nexacro.getApplication();
        this.fv_coCd = this.parent.coCd;
        this.pmtPopupSeq = this.parent.pmtPopupSeq;
        this.maxFileSize = "10";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//공통코드 조회
        	this.fn_commonCodeSearch();
        };

        this.fn_onkeydown = function(obj,e)
        {
        	//ESC : 닫기기능
        	if(e.keycode == 27){
        		this.close();
        	}
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //공통코드 조회
        this.fn_commonCodeSearch = function()
        {
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_expsNoticSprCd=ds_output1 ds_urlCnsolSprCd=ds_output2 ds_pmtPopupExpsPageSprCd=ds_output3";
        	var arg = "";

        	//조회 값 담기
        	this.ds_search.setColumn(0, "CODE_LIST", "EXPS_NOTIC_SPR_CD,URL_CNSOL_SPR_CD,PMT_POPUP_EXPS_PAGE_SPR_CD,PMT_POPUP_PST_SPR_CD");
        	this.ds_search.setColumn(0, "LANG_CD", "KO");
        	//전송
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        //조회
        this.fn_search = function() {
        	var sSvcId = "selectPmtPopupInfo";
        	var sUrl = "/sa/pmtPopup/select-pmt-popup-info.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_pmtPopupInfo=ds_output1 ds_oprUnitList=ds_output2 ds_aplyDtlList=ds_output3 ds_excptDtlList=ds_output4 ds_prmDtlList=ds_output5";
        	var arg = "";

        	// 파라미터 값 ds setcolumn
        	this.ds_search.setColumn(0, "CO_CD", this.fv_coCd);
        	this.ds_search.setColumn(0, "PMT_POPUP_SEQ", this.pmtPopupSeq);

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //저장
        this.fn_save = function()
        {
        	var sSvcId = "savePmtPopupInfo";
        	var sUrl = "/sa/pmtPopup/save-pmt-popup-info.do";
        	var inDs = "ds_save=ds_pmtPopupInfo:A ds_oprUnitList=ds_oprUnitList:A ds_aplyDtlList=ds_aplyDtlList:U ds_excptDtlList=ds_excptDtlList:U ds_prmDtlList=ds_prmDtlList:U"
        	var outDs = "";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        // 삭제
        this.fn_delete = function() {
        	var sSvcId = "deletePmtPopupInfo";
        	var sUrl = "/sa/pmtPopup/delete-pmt-popup-info.do";
        	var inDs = "ds_delete=ds_pmtPopupInfo"
        	var outDs = "";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        // 운영단위ID 유효성 검사
        this.fn_oprUnitCheck = function() {
        	var sSvcId = "oprUnitCheck";
        	var sUrl = "/sa/com/select-opr-unit-check-list.do";
        	var inDs = "ds_searchOprUnitCheckList=ds_searchOprUnitCheckList:A"
        	var outDs = "ds_rtnOprUnitCheckList=ds_output1";
        	var arg = "";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg) {

        	switch(svcID) {
        		case "commonCodeSearch" :

        			if(!this.gfn_isNull(this.pmtPopupSeq)) {

        				this.fn_search();

        			} else {
        				this.btn_prev.set_visible(false); // 미리보기 버튼 미노출

        				// 등록 위한 화면 세팅
        				this.ds_pmtPopupInfo.addRow();
        				this.ds_pmtPopupInfo.setColumn(0, "CO_CD", this.fv_coCd);
        				this.ds_pmtPopupInfo.setColumn(0, "PMT_POPUP_SEQ", this.pmtPopupSeq);

        				this.rdo_expsNoticSprCd.set_index(0);
        				this.rdo_urlCnsolSprCd.set_index(0);
        				this.rdo_nlookSetYn.set_index(0);
        				this.rdo_useYn.set_index(0);
        				this.rdo_expsPageSprCd.set_index(0);
        				this.rdo_excptPageSetYn.set_index(0);
        				this.rdo_prmSetYn.set_index(0);
        				this.rdo_popupSprCD.set_index(0); // 초기값은 이미지

        				this.edt_wdtLen.set_value("560"); // width 초기값 560세팅

        				this.cbo_dispStrHr.set_index(0);
        				this.cbo_dispStrMn.set_index(0);
        				this.cbo_dispEndHr.set_index(0);
        				this.cbo_dispEndMn.set_index(0);

        				this.ds_pmtPopupInfo.setColumn(0, "FLTG_YN", "N")
        				this.ds_pmtPopupInfo.setColumn(0, "CLOSE_SET_YN", "N")
        				this.ds_pmtPopupInfo.setColumn(0, "NOTLOGN_INC_YN", "N");

        				this.chk_notLogn_Inc_Yn.set_enable(true);
        			    this.chk_notLogn_Inc_Yn.set_value(false);

        				this.fn_setPopupSprCd();
        				this.fn_chgExpsNoticSprCd();
        				this.fn_urlCnsolSprCd();
        				this.fn_setExpsSprCd();
        				this.fn_setExcptPageSetYn();
        				this.fn_setPrmSetYn();



        			}

        			break;

        		case "selectPmtPopupInfo" :
        			this.fn_setLenByte(this.edt_pmtPopupNm.value, 300, "pmtPopupNm");
        			this.fn_setLenByte(this.edt_pmtPopupDesc.value, 2000, "pmtPopupDesc");
        			if( this.ds_oprUnitList.rowcount == 0 ) {
        				this.ds_oprUnitList.copyData(this.ds_oprUnitList_copy);
        			}

        			this.fn_urlCnsolSprCd(); // URL구분코드 상태별 세팅
        			this.fn_chgExpsNoticSprCd(); // 게시구분 disable 세팅

        			var sTotText = "(<b v='true'>총 " + this.ds_oprUnitList.getRowCount() + "건 </b>)";
        			this.sta_totalCountOprUnit.set_text(sTotText);

        			this.fn_setExpsSprCd(); // 적용페이지
        			this.fn_setExcptPageSetYn(); // 제외페이지
        			this.fn_setPrmSetYn(); // 파라미터
        			this.fn_setPopupSprCd(); // 소재구분

        			break;

        		case "savePmtPopupInfo" :
        			if(errorCode == ""){
        				alert(this.fn_getMessage("ERRN000030")); // 저장되었습니다.
        				this.opener.fn_search(0);
        				this.close();
        			}else{
        				alert(errorMsg);
        			}
        			break;
        		case "deletePmtPopupInfo" :
        			if(errorCode == ""){
        				alert(this.fn_getMessage("ERRN000031")); // 삭제되었습니다.
        				this.opener.fn_search(0);
        				this.close();
        			} else {
        				alert(this.fn_getMessage("ERRN000032")); // 삭제에 실패하였습니다.
        			}
        			break;

        		case "oprUnitCheck" :

        			var tempOprUnitId = "";

        			for (var x = 0; x < this.ds_rtnOprUnitCheckList.getRowCount(); x++) {
        				var sBzplcId = this.ds_rtnOprUnitCheckList.getColumn(x, "BZPLC_ID");
        				var sOprUnitId = this.ds_rtnOprUnitCheckList.getColumn(x, "OPR_UNIT_ID");
        				var sOprUnitNm = this.ds_rtnOprUnitCheckList.getColumn(x, "OPR_UNIT_NM");

        				if (sOprUnitNm == "" || sOprUnitNm == undefined) {
        					tempOprUnitId = tempOprUnitId + "사업장ID : " + sBzplcId + " / 운영단위ID : " + sOprUnitId + "\n";
        				}
        			}

        			if (tempOprUnitId != "") {
        				this.fn_textCopy(this.fn_getMessage("ERRN000023", tempOprUnitId));
        				alert(this.fn_getMessage("ERRN000023", tempOprUnitId)); // 없는 운영단위ID를 입력하였습니다. 운영단위ID를 확인해주세요.\n&1
        			}

        			var totalCount2 = 0;
        			tempOprUnitId = "";

        			for (var x = 0; x < this.ds_rtnOprUnitCheckList.getRowCount(); x++) {
        				var sBzplcId = this.ds_rtnOprUnitCheckList.getColumn(x, "BZPLC_ID");
        				var sOprUnitId = this.ds_rtnOprUnitCheckList.getColumn(x, "OPR_UNIT_ID");
        				var sOprUnitNm = this.ds_rtnOprUnitCheckList.getColumn(x, "OPR_UNIT_NM");

        				if (sOprUnitNm != "" && sOprUnitNm != undefined) {
        					var findRow = this.ds_oprUnitList.findRowExpr("BZPLC_ID == '" + sBzplcId + "' && OPR_UNIT_ID == '" + sOprUnitId + "'");

        					if(findRow < 0) {
        						var nRow = this.ds_oprUnitList.addRow();

        						this.ds_oprUnitList.setColumn(nRow, "CO_CD", this.fv_coCd);
        						this.ds_oprUnitList.setColumn(nRow, "PMT_POPUP_SEQ", "");
        						this.ds_oprUnitList.setColumn(nRow, "BZPLC_ID", sBzplcId);
        						this.ds_oprUnitList.setColumn(nRow, "OPR_UNIT_ID", sOprUnitId);
        						this.ds_oprUnitList.setColumn(nRow, "OPR_UNIT_NM", sOprUnitNm);
        					} else {
        						totalCount2 = totalCount2 + 1;

        						tempOprUnitId = tempOprUnitId + "사업장ID : " + sBzplcId + " / 운영단위ID : " + sOprUnitId + "\n";
        					}
        				}
        			}

        			if (totalCount2 > 0) {
        				this.fn_textCopy(this.fn_getMessage("ERRN000024", tempOprUnitId));
        				alert(this.fn_getMessage("ERRN000024", tempOprUnitId)); // 운영단위ID가 중복되었습니다. 운영단위ID를 확인해주세요.\n&1
        			}

        			var sTotText = "(<b v='true'>총 " + this.ds_oprUnitList.getRowCount() + "건 </b>)";
        			this.sta_totalCountOprUnit.set_text(sTotText);

        			break;

        		default :

        			break;
        	}
        }

        this.fn_popupCallback = function(sPopupId, sRetValue)
        {
        	if(this.gfn_isNull(sRetValue)) {
        		return;
        	}
        	var retObj = JSON.parse(sRetValue);

        	switch(sPopupId) {
        		case "btn_oprUnitMulti" :
        			var totalCount2 = 0;
        			var tempOprUnitId = "";

        			for(var i=0; i < retObj.length; i++) {
        				var rowData = JSON.parse(retObj[i]);
        				var findRow = this.ds_oprUnitList.findRowExpr("BZPLC_ID == '" + rowData.OPR_BZPLC_ID + "' && OPR_UNIT_ID == '" + rowData.OPR_UNIT_ID + "'");
        				if(findRow < 0) {
        					var nRow = this.ds_oprUnitList.addRow();
        					this.ds_oprUnitList.setColumn(nRow, "CO_CD", this.fv_coCd);
        					this.ds_oprUnitList.setColumn(nRow, "PMT_POPUP_SEQ", "");
        					this.ds_oprUnitList.setColumn(nRow, "BZPLC_ID", rowData.OPR_BZPLC_ID);
        					this.ds_oprUnitList.setColumn(nRow, "OPR_UNIT_ID", rowData.OPR_UNIT_ID);
        					this.ds_oprUnitList.setColumn(nRow, "OPR_UNIT_NM", rowData.OPR_UNIT_NM);
        				} else {
        					totalCount2 = totalCount2 + 1;
        					tempOprUnitId = tempOprUnitId + "사업장ID : " + rowData.OPR_BZPLC_ID + " / 운영단위ID : " + rowData.OPR_UNIT_ID + "\n";
        				}
        			}

        			if (totalCount2 > 0) {
        				this.fn_textCopy(this.fn_getMessage("ERRN000024", tempOprUnitId));
        				alert(this.fn_getMessage("ERRN000024", tempOprUnitId)); // 운영단위ID가 중복되었습니다. 운영단위ID를 확인해주세요.\n&1
        			}

        			var sTotText = "(<b v='true'>총 " + this.ds_oprUnitList.getRowCount() + "건 </b>)";
        			this.sta_totalCountOprUnit.set_text(sTotText);

        			break;

        		case "btn_oprUnitMultiText" :

        			var retValue = retObj.textValue;

        			if (retValue != "") {
        				this.ds_searchOprUnitCheckList.clearData();

        				var sTempValue = retValue.split(",");

        				for (var x = 0; x < sTempValue.length; x++) {
        					var sTempValueSplit = sTempValue[x].split("	");

        					var sBzplcId = sTempValueSplit[0];
        					var sOprUnitId = sTempValueSplit[1];

        					if (sBzplcId != "" && sBzplcId != undefined && sOprUnitId != "" && sOprUnitId != undefined) {
        						var nRow = this.ds_searchOprUnitCheckList.addRow();

        						this.ds_searchOprUnitCheckList.setColumn(nRow, "CO_CD", this.fv_coCd);
        						this.ds_searchOprUnitCheckList.setColumn(nRow, "BZPLC_ID", sBzplcId);
        						this.ds_searchOprUnitCheckList.setColumn(nRow, "OPR_UNIT_ID", sOprUnitId);
        					}
        				}

        				this.fn_oprUnitCheck();
        			}

        			break;

        		case "btn_cpnEvtNo" :
        			var rowData = JSON.parse(sRetValue);

        			this.edt_cpnEvtNo.set_value(rowData.CPN_EVT_NO);
        			this.edt_cpnEvtNm.set_value(rowData.CPN_NM);

        			break;
        		case "btn_aplyMultiText" :
        		case "btn_excptMultiText" :
        		case "btn_prmMultiText" :

        			var retValue = retObj.textValue;
        			var selDs = "";
        			var sPmtPopupProcTypeCd = "";
        			var sProcType = "";
        			if (retValue != "") {
        				if(sPopupId == "btn_aplyMultiText") {
        					selDs = this.ds_aplyDtlList;
        					sPmtPopupProcTypeCd = "10";
        					sProcType = "적용페이지 URL";
        				} else if(sPopupId == "btn_excptMultiText") {
        					selDs = this.ds_excptDtlList;
        					sPmtPopupProcTypeCd = "20";
        					sProcType = "제외페이지 URL";
        				} else if(sPopupId == "btn_prmMultiText") {
        					selDs = this.ds_prmDtlList;
        					sPmtPopupProcTypeCd = "30";
        					sProcType = "파라미터";
        				}

         				var sTempValue = retValue.split(",");
        				var duplCnt = 0;
        				var sDuplTxt = "";
        				for(var i = 0; i < sTempValue.length; i++) {
        					var sDtlTxt = sTempValue[i];
        					if(!this.gfn_isNull(sDtlTxt)) {
        						var findRow = selDs.findRowExpr("PMT_POPUP_PROC_TXT == '" + sDtlTxt + "'");
        						if(findRow < 0) {
        							var nRow = selDs.addRow();
        							selDs.setColumn(nRow, "COL_CHK", "0");
        							selDs.setColumn(nRow, "CO_CD", this.fv_coCd);
        							selDs.setColumn(nRow, "PMT_POPUP_SEQ", this.pmtPopupSeq);
        							selDs.setColumn(nRow, "PMT_POPUP_PROC_TYPE_CD", sPmtPopupProcTypeCd);
        							selDs.setColumn(nRow, "PMT_POPUP_PROC_TXT", sDtlTxt);
        						} else {
        							duplCnt = duplCnt + 1;
        							sDuplTxt = sDuplTxt + "\n";
        						}
        					}
        				}
        				if (duplCnt > 0) {
        					//alert(this.fn_getMessage("ERRR000169", sProcType)); // &1이(가) 중복됩니다.
        				}
        			}
        			break;

        		default :

        			break;
        	}
        }
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){
        	//search static 초기 설정
        	this.sta_expsNoticSprCd.uEssentiel = "true";
        	this.sta_pmtPopupNm.uEssentiel = "true";
        	this.sta_dispPeriod.uEssentiel = "true";
        	this.sta_dispSo.uEssentiel = "true";
        	this.sta_img.uEssentiel = "true";
        	this.sta_url.uEssentiel = "true";
        	this.sta_pstSet.uEssentiel = "true";
        	this.sta_nlookSet.uEssentiel = "true";
        	this.sta_useYn.uEssentiel = "true";
        	this.sta_expsPageSprCd.uEssentiel = "true";
        	this.sta_excptPageSetYn.uEssentiel = "true";
        	this.sta_prmSetYn.uEssentiel = "true";
        	this.sta_yTube.uEssentiel = "true";
        	this.sta_popupSprCD.uEssentiel = "true";




        	// grid 초기 설정
        	this.grd_oprUnitList.uSortFlag = "true";
        	this.grd_oprUnitList.uServerSortFlag = "false";
        	this.grd_oprUnitList.uCellSizeType = "true";
        }
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        // 글자 byte 체크 함수
        this.fn_setLenByte = function(sVal, maxByte, sGubun)
        {
        	var expsText = "";

        	var count = 0;
        	if(!this.gfn_isNull(sVal)) {
        		count = nexacro._getUtf8Length(sVal);
        	}

        	if (count < 0) {
        		count = 0;
        	}

        	if(count <= maxByte) {
        		expsText = "(<fc v='red'>" + count + "</fc> / " + maxByte + " Byte)";

        		if(sGubun == "pmtPopupNm") {
        			this.sta_pmtPopupNmSize.set_text(expsText);
        		} else if(sGubun == "pmtPopupDesc") {
        			this.sta_pmtPopupDescSize.set_text(expsText);
        		}
        		return;
        	}

        	var tempVal = "";

        	tempVal = nexacro._substrByUtf8(sVal, 0, maxByte);
        	count = nexacro._getUtf8Length(tempVal);

        	expsText = "(<fc v='red'>" + count + "</fc> / " + maxByte + " Byte)";

        	if(sGubun == "pmtPopupNm") {
        		this.edt_pmtPopupNm.set_value("");
        		this.edt_pmtPopupNm.set_value(tempVal);
        		this.sta_pmtPopupNmSize.set_text(expsText);
        	} else if(sGubun == "pmtPopupDesc") {
        		this.edt_pmtPopupDesc.set_value("");
        		this.edt_pmtPopupDesc.set_value(tempVal);
        		this.sta_pmtPopupDescSize.set_text(expsText);
        	}
        };

        // 게시구분코드 변경
        this.fn_chgExpsNoticSprCd = function() {
        	// SSP-2971
        	if(this.rdo_expsNoticSprCd.value == "30" || this.rdo_expsNoticSprCd.value == "50"
        		|| this.rdo_expsNoticSprCd.value == "60" || this.rdo_expsNoticSprCd.value == "70") {
        		this.grd_oprUnitList.set_enable(true);

        		this.btn_oprUnitMulti.set_enable(true);
        		this.btn_oprUnitMultiText.set_enable(true);

        		this.chk_notLogn_Inc_Yn.set_enable(true);
        	} else {
        		this.grd_oprUnitList.set_enable(false);

        		this.btn_oprUnitMulti.set_enable(false);
        		this.btn_oprUnitMultiText.set_enable(false);

        		this.chk_notLogn_Inc_Yn.set_value(false);
        		this.chk_notLogn_Inc_Yn.set_enable(false);
        		this.ds_pmtPopupInfo.setColumn(0, "NOTLOGN_INC_YN", "N");
        	}
        }

        // URL 연결여부구분 수정 시
        this.fn_urlCnsolSprCd = function() {
        	if(this.rdo_urlCnsolSprCd.value == "10") {
        		this.edt_urdAddr.set_enable(false);
        		this.btn_cpnEvtNo.set_enable(true);
        	} else {
        		this.edt_urdAddr.set_enable(true);
        		this.btn_cpnEvtNo.set_enable(false);
        	}
        }

        // 적용페이지 구분값 변경
        this.fn_setExpsSprCd = function() {
        	if(this.rdo_expsPageSprCd.value == "20") { // 특정페이지
        		// 적용페이지 set
        		this.grd_aplyDtlList.set_enable(true);
        		this.btn_aplyAdd.set_enable(true);
        		this.btn_aplyDelete.set_enable(true);
        		this.btn_aplyMultiText.set_enable(true);
        		// 제외페이지 set (특정페이지로 할 경우 제외페이지는 설정 못함)
        		this.rdo_excptPageSetYn.set_value("N");
        		this.rdo_excptPageSetYn.set_enable(false);
        		this.fn_setExcptPageSetYn();
        	} else { // 전체페이지
        		// 적용페이지 set
        		this.grd_aplyDtlList.set_enable(false);
        		this.btn_aplyAdd.set_enable(false);
        		this.btn_aplyDelete.set_enable(false);
        		this.btn_aplyMultiText.set_enable(false);
        		// 제외페이지 set
        		this.rdo_excptPageSetYn.set_enable(true);
        		this.fn_setExcptPageSetYn();
        	}
        }

        // 제외페이지 설정여부 구분값 변경
        this.fn_setExcptPageSetYn = function() {
        	if(this.rdo_excptPageSetYn.value == "Y") {
        		this.grd_excptDtlList.set_enable(true);
        		this.btn_excptAdd.set_enable(true);
        		this.btn_excptDelete.set_enable(true);
        		this.btn_excptMultiText.set_enable(true);
        	} else {
        		this.grd_excptDtlList.set_enable(false);
        		this.btn_excptAdd.set_enable(false);
        		this.btn_excptDelete.set_enable(false);
        		this.btn_excptMultiText.set_enable(false);
        	}
        }

        // 파라미터 설정여부 구분값 변경
        this.fn_setPrmSetYn = function() {
        	if(this.rdo_prmSetYn.value == "Y") {
        		this.grd_prmDtlList.set_enable(true);
        		this.btn_prmAdd.set_enable(true);
        		this.btn_prmDelete.set_enable(true);
        		this.btn_prmMultiText.set_enable(true);
        	} else {
        		this.grd_prmDtlList.set_enable(false);
        		this.btn_prmAdd.set_enable(false);
        		this.btn_prmDelete.set_enable(false);
        		this.btn_prmMultiText.set_enable(false);
        	}
        }

        // 소재 구분값 변경
        this.fn_setPopupSprCd = function() {

        	// 이미지
        	if(this.rdo_popupSprCD.value == "10"){

        		// 이미지 관련요소 노출
        		this.Static05.set_visible(true);
        		this.sta_img.set_visible(true);
        		this.edt_atflNm.set_visible(true);
        		this.btn_imgAdd.set_visible(true);
        		this.btn_imgDelete.set_visible(true);
        		this.sta_imgSize.set_visible(true);
        		this.edt_atflNm.set_enable(true);

        		// 유튜브관련 요소 숨김처리
        		this.Static05_1.set_visible(false);
        		this.sta_yTube.set_visible(false);
        		this.sta_yTubeUrlAddr.set_visible(false);
        		this.sta_wdtLen.set_visible(false);
        		this.edt_yTubeUrlAddr.set_visible(false);
        		this.edt_wdtLen.set_visible(false);
        		this.edt_yTubeUrlAddr.set_enable(false);
        		this.edt_wdtLen.set_enable(false);

        		// 이미지 링크 URL, 쿠폰영역 활성화
        		this.rdo_urlCnsolSprCd.set_enable(true);
        // 		if(this.rdo_urlCnsolSprCd.value == "10"){
        // 			this.edt_urdAddr.set_enable(false);
        // 		} else {
        // 			this.edt_urdAddr.set_enable(true);
        // 		}


        		this.edt_cpnEvtNm.set_enable(true);
        		this.btn_cpnEvtNo.set_enable(true);
        		this.btn_cpnEvtNoDelete.set_enable(true);

        	} else {
        		// 유튜브 관련요소 노출처리
        		this.Static05_1.set_visible(true);
        		this.sta_yTube.set_visible(true);
        		this.edt_yTubeUrlAddr.set_visible(true);
        		this.sta_yTubeUrlAddr.set_visible(true);
        		this.sta_wdtLen.set_visible(true);
        		this.edt_wdtLen.set_visible(true);
        		this.edt_yTubeUrlAddr.set_enable(true);
        		this.edt_wdtLen.set_enable(true);

        		// 이미지 관련요소 숨김처리
        		this.Static05.set_visible(false);
        		this.sta_img.set_visible(false);
        		this.edt_atflNm.set_visible(false);
        		this.btn_imgAdd.set_visible(false);
        		this.btn_imgDelete.set_visible(false);
        		this.sta_imgSize.set_visible(false);
        		this.edt_atflNm.set_enable(false);

        		// 이미지 링크 URL, 쿠폰영역 비활성화
        		this.rdo_urlCnsolSprCd.set_index(0);
        		this.rdo_urlCnsolSprCd.set_enable(false);
        		this.edt_urdAddr.set_value("");
        		this.edt_urdAddr.set_enable(false);

        		this.edt_cpnEvtNm.set_value("");
        		this.edt_cpnEvtNm.set_enable(false);
        		this.btn_cpnEvtNo.set_enable(false);
        		this.btn_cpnEvtNoDelete.set_enable(false);

        	}
        }

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //운영단위 멀티 검색 버튼
        this.btn_oprUnitMulti_onclick = function(obj,e)
        {
        	var oArg = {coCd:this.fv_coCd
        			   };

        	var oOption = { top : "-1"
        				  , left : "-1"
        				  , width : "-1"
        				  , height : "-1"
        				  , popuptype : "modal"	// modal:showModal, modeless:application.open, modalsync:showModalSync, modalwindow:showModalWindow
        				  , layered : "false"
        				  , opacity : "100"
        				  , autosize : "true"
        				  , titlebar : "true"
        				  , title : "운영단위 조회"
        				  };

        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_23.xfdl", oArg, "fn_popupCallback", oOption);
        };

        //운영단위 멀티텍스트 검색 버튼
        this.btn_oprUnitMultiText_onclick = function(obj,e)
        {
        	var params = { textId : this.btn_oprUnitMultiText };
        	var options = {};
        	options.title = "멀티 텍스트 팝업";

        	this.gfn_openPopup(e.fromobject.id, "SA::SSP_BO_SA_MSEARCH.xfdl", params,  "fn_popupCallback", options);
        };

        //게시구분 변경 이벤트
        this.rdo_expsNoticSprCd_onitemchanged = function(obj,e)
        {
        	this.fn_chgExpsNoticSprCd();
        };

        // 쿠폰 조회
        this.btn_cpnEvtNo_onclick = function(obj,e)
        {
        	var oArg = { coCd : this.fv_coCd
        	           };

        	var oOption = { top : "-1"
        	              , left : "-1"
        	              , width : "-1"
        	              , height : "-1"
        	              , popuptype : "modal"	// modal:showModal, modeless:application.open, modalsync:showModalSync, modalwindow:showModalWindow
        	              , layered : "false"
        	              , opacity : "100"
        	              , autosize : "true"
        	              , titlebar : "true"
        	              , title : "쿠폰 조회"
        	              };

        	this.gfn_openPopup(e.fromobject.id, "SA::SSP_BO_PP_29.xfdl", oArg, "fn_popupCallback", oOption);
        };

        // 쿠폰 삭제
        this.btn_cpnEvtNoDelete_onclick = function(obj,e)
        {
        	this.edt_cpnEvtNo.set_value("");
        	this.edt_cpnEvtNm.set_value("");
        };

        // 미리보기
        this.btn_prev_onclick = function(obj,e)
        {
        	var foDomain = this.fv_oApp.gds_sspHosts.getColumn(0, "HOST_SSP");
        	var paramStart = "?";
        	var param = "pmtPopupSeq=" + this.pmtPopupSeq + "&topPst=" + this.edt_topPst.value + "&leftPst=" + this.edt_leftPst.value + "&fltgYn=" + this.chk_fltgYn.value;
        	var prevUrl = foDomain + "/";
        	var foUrl = "";
        	if(this.rdo_expsPageSprCd.value == "10" && this.gfn_isNull(this.ds_aplyDtlList.getColumn(0, "PMT_POPUP_PROC_TXT"))) {
        		foUrl = "/ssp/main/index.do";
        	} else {
        		foUrl = this.ds_aplyDtlList.getColumn(0, "PMT_POPUP_PROC_TXT");
        		if(this.ds_aplyDtlList.getColumn(0, "PMT_POPUP_PROC_TXT").indexOf("?") >= 0) {
        			paramStart = "&";
        		}
        	}
        	prevUrl = foDomain + foUrl + paramStart + param;
        	system.execBrowser(prevUrl);
        };

        // 취소 버튼
        this.btn_cancel_onclick = function(obj,e)
        {
        	if(confirm(this.fn_getMessage("ERRN000053"))) { // 취소하시겠습니까?
        		this.close();
        	}
        };

        // 저장 버튼
        this.btn_save_onclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.edt_pmtPopupNm.value)) {
        		alert(this.fn_getMessage("ERRN000001", "프로모션 명은")); // 프로모션 명은 필수 입력항목입니다.
        		this.edt_pmtPopupNm.setFocus();
        		return;
        	}
        	if(this.gfn_isNull(this.rdo_expsNoticSprCd.value)) {
        		alert(this.fn_getMessage("ERRN000001", "게시구분은")); // 게시구분은 필수 입력항목입니다.
        		this.rdo_expsNoticSprCd.setFocus();
        		return;
        	}
        	if(this.rdo_expsNoticSprCd.value == "30") {
        		if (this.ds_oprUnitList.getRowCount() <= 0) {
        			alert(this.fn_getMessage("ERRN000001", "로그인 운영단위를 선택하시면, 최소 1개의 운영단위는")); // 로그인 운영단위를 선택하시면, 최소 1개의 운영단위는 필수 입력항목입니다.
        			return;
        		}
        	}
        	if(this.gfn_isNull(this.cal_dispStrDt.value) || this.gfn_isNull(this.cbo_dispStrHr.value) || this.gfn_isNull(this.cbo_dispStrMn.value)) {
        		alert(this.fn_getMessage("ERRN000001", "전시 시작일은")); // 전시 시작일은 필수 입력항목입니다.
        		this.cal_dispStrDt.setFocus();
        		return;
        	}
        	if(this.gfn_isNull(this.cal_dispEndDt.value) || this.gfn_isNull(this.cbo_dispEndHr.value) || this.gfn_isNull(this.cbo_dispEndMn.value)) {
        		alert(this.fn_getMessage("ERRN000001", "전시 종료일은")); // 전시 종료일은 필수 입력항목입니다.
        		this.cal_dispEndDt.setFocus();
        		return;
        	}
        	if(this.cal_dispStrDt.value > this.cal_dispEndDt.value) {
        		alert(this.fn_getMessage("ERRN000002", "전시 종료일이 전시 시작일보다")); // 전시 종료일이 전시 시작일보다 작습니다.
        		return;
        	} else if(this.cal_dispStrDt.value == this.cal_dispEndDt.value) {
        		var strHrmn = this.cbo_dispStrHr.value + "" + this.cbo_dispStrMn.value;
        		var endHrmn = this.cbo_dispEndHr.value + "" + this.cbo_dispEndMn.value;
        		if(strHrmn > endHrmn) {
        			alert(this.fn_getMessage("ERRN000002", "전시 종료 시간이 전시 시작 시간보다")); // 전시 종료 시간이 전시 시작 시간보다 작습니다.
        			return;
        		}
        	}
        	if(this.gfn_isNull(this.edt_dispSo.value)) {
        		alert(this.fn_getMessage("ERRN000001", "전시순서는")); // 전시순서는 필수 입력항목입니다.
        		this.rdo_expsNoticSprCd.setFocus();
        		return;
        	}
        	// 팝업구분코드가 이미지일경우
        	if(this.rdo_popupSprCD.value == "10") {

        		if(this.gfn_isNull(this.edt_atflNm.value)) {
        		alert(this.fn_getMessage("ERRN000001", "이미지는")); // 이미지는 필수 입력항목입니다.
        		this.edt_atflNm.setFocus();
        		return;
        		}
        		if(this.gfn_isNull(this.rdo_urlCnsolSprCd.value)) {
        			alert(this.fn_getMessage("ERRN000001", "URL은")); // URL은 필수 입력항목입니다.
        			this.rdo_urlCnsolSprCd.setFocus();
        			return;
        		}
        		if(this.rdo_urlCnsolSprCd.value != 10) {
        			if(this.gfn_isNull(this.edt_urdAddr.value)) {
        				alert(this.fn_getMessage("ERRN000001", "링크없음이 아니면 URL은")); // 링크없음이 아니면 URL은 필수 입력항목입니다.
        				this.edt_urdAddr.setFocus();
        				return;
        			}
        		}
        	// 유튜브일경우
        	} else {
        		var url = this.edt_yTubeUrlAddr.value;

        		if(this.gfn_isNull(url)) {
        		    alert(this.fn_getMessage("ERRN000001", "유튜브 주소는")); // 유튜브주소는 필수 입력항목입니다.
        			this.edt_yTubeUrlAddr.setFocus();
        			return;
        		}

        		if(url.indexOf("youtube.com") < 0 && url.indexOf("youtu.be") < 0) {
        			alert(this.fn_getMessage("ERRN000124")); // 유효한 유튜브 주소를 입력해주세요.
        			this.edt_yTubeUrlAddr.setFocus();
        			return;
        		}
        		if(this.gfn_isNull(this.edt_wdtLen.value)) {
        		    alert(this.fn_getMessage("ERRN000001", "Width는")); // Width는 필수 입력항목입니다.
        			this.edt_wdtLen.setForcus();
        			return;
        		}
        		// 등록한 이미지 삭제 처리
        		this.ds_pmtPopupInfo.setColumn(0,"ATFL_NM", "");
        		this.fileUpTrans.clearFileList();
        		this.ds_file.clearData();

        		// 이미지문서ID는 0으로 세팅(컬럼속성이 not null이므로)
        		this.ds_pmtPopupInfo.setColumn(0, "DOC_REG_ID", "0");
        	}

        	if(this.gfn_isNull(this.edt_topPst.value)) {
        		alert(this.fn_getMessage("ERRN000001", "TOP위치 설정은")); // TOP위치 설정은 필수 입력항목입니다.
        		this.edt_topPst.setFocus();
        		return;
        	}
        	if(this.gfn_isNull(this.edt_leftPst.value)) {
        		alert(this.fn_getMessage("ERRN000001", "LEFT위치 설정은")); // LEFT위치설정은 필수 입력항목입니다.
        		this.edt_leftPst.setFocus();
        		return;
        	}
        	if(this.gfn_isNull(this.rdo_nlookSetYn.value)) {
        		alert(this.fn_getMessage("ERRN000001", "다시보지않기설정은")); // 다시보지않기설정은 필수 입력항목입니다.
        		this.rdo_nlookSetYn.setFocus();
        		return;
        	}
        	if(this.gfn_isNull(this.rdo_useYn.value)) {
        		alert(this.fn_getMessage("ERRN000001", "사용여부는")); // 사용여부는 필수 입력항목입니다.
        		this.rdo_useYn.setFocus();
        		return;
        	}

        	for(var i = 0; i< this.ds_aplyDtlList.rowcount; i++) {
        		if(this.gfn_isNull(this.ds_aplyDtlList.getColumn(i, "PMT_POPUP_PROC_TXT"))) {
        			alert(this.fn_getMessage("ERRR000199", "노출페이지 URL")); // 노출페이지URL을(를) 입력해 주세요.
        			return;
        		}
        	}
        	for(var i = 0; i< this.ds_excptDtlList.rowcount; i++) {
        		if(this.gfn_isNull(this.ds_excptDtlList.getColumn(i, "PMT_POPUP_PROC_TXT"))) {
        			alert(this.fn_getMessage("ERRR000199", "제외페이지 URL")); // 제외페이지URL을(를) 입력해 주세요.
        			return;
        		}
        	}
        	for(var i = 0; i< this.ds_prmDtlList.rowcount; i++) {
        		if(this.gfn_isNull(this.ds_prmDtlList.getColumn(i, "PMT_POPUP_PROC_TXT"))) {
        			alert(this.fn_getMessage("ERRR000199", "외부 인입 설정 파라미터")); // 외부 인입 설정 파라미터을(를) 입력해 주세요.
        			return;
        		}
        	}

        	if(this.rdo_expsPageSprCd.value == "20" && this.ds_aplyDtlList.rowcount == 0) {
        		alert(this.fn_getMessage("ERRR000199", "노출페이지 설정 구분 값이 '특정페이지' 일 경우 노출페이지 URL")); // 노출페이지 설정 구분 값이 특정페이지일 경우 노출페이지 URL을(를) 입력해 주세요.
        		return;
        	}

        	if(this.rdo_excptPageSetYn.value == "Y" && this.ds_excptDtlList.rowcount == 0) {
        		alert(this.fn_getMessage("ERRR000199", "제외페이지 설정 구분 값이 '제외페이지' 일 경우 제외페이지 URL")); // 제외페이지 설정 구분 값이 제외페이지일 경우 제외페이지 URL을(를) 입력해 주세요.
        		return;
        	}

        	if(this.rdo_prmSetYn.value == "Y" && this.ds_prmDtlList.rowcount == 0) {
        		alert(this.fn_getMessage("ERRR000199", "외부 인입 설정 구분 값이 '파라미터 설정' 일 경우 파라미터 값")); // 외부 인입 설정 구분 값이 파라미터 설정 일 경우 파라미터 값을(를) 입력해 주세요.
        		return;
        	}

        	for(var i = 0; i< this.ds_aplyDtlList.rowcount; i++) {
        		var sDtlTxt = this.ds_aplyDtlList.getColumn(i, "PMT_POPUP_PROC_TXT");
        		var chkCnt = this.ds_aplyDtlList.getCaseCount("PMT_POPUP_PROC_TXT == '" + sDtlTxt +"'");
        		if(chkCnt > 1) {
        			alert(this.fn_getMessage("ERRR000169", "노출페이지 URL")); // &1이(가) 중복됩니다.
        			return;
        		}
        	}

        	for(var i = 0; i< this.ds_excptDtlList.rowcount; i++) {
        		var sDtlTxt = this.ds_excptDtlList.getColumn(i, "PMT_POPUP_PROC_TXT");
        		var chkCnt = this.ds_excptDtlList.getCaseCount("PMT_POPUP_PROC_TXT == '" + sDtlTxt +"'");
        		if(chkCnt > 1) {
        			alert(this.fn_getMessage("ERRR000169", "제외페이지 URL")); // &1이(가) 중복됩니다.
        			return;
        		}
        	}

        	for(var i = 0; i< this.ds_prmDtlList.rowcount; i++) {
        		var sDtlTxt = this.ds_prmDtlList.getColumn(i, "PMT_POPUP_PROC_TXT");
        		var chkCnt = this.ds_prmDtlList.getCaseCount("PMT_POPUP_PROC_TXT == '" + sDtlTxt +"'");
        		if(chkCnt > 1) {
        			alert(this.fn_getMessage("ERRR000169", "파라미터")); // &1이(가) 중복됩니다.
        			return;
        		}
        	}

        	// 게시구분코드가 운영단위가 아니면 아니면 작성된 운영단위 정보 삭제
        	if(this.rdo_expsNoticSprCd.value != "30" && this.rdo_expsNoticSprCd.value != "50"
        		&& this.rdo_expsNoticSprCd.value != "60" && this.rdo_expsNoticSprCd.value != "70") {
        		var aDelArr = new Array();
        		for(var i = 0; i< this.ds_oprUnitList.rowcount; i++) {
        			aDelArr.push(i);
        		}
        		this.ds_oprUnitList.deleteMultiRows(aDelArr);
        	}

        	// 노출페이지가 전체페이지면 작성된 정보 삭제
        	if(this.rdo_expsPageSprCd.value == "10") {
        		var aDelArr = new Array();
        		for(var i = 0; i< this.ds_aplyDtlList.rowcount; i++) {
        			aDelArr.push(i);
        		}
        		this.ds_aplyDtlList.deleteMultiRows(aDelArr);
        	}

        	// 제외페이지 설정여부 구분값이 제외없음이면 작성된 정보 삭제
        	if(this.rdo_excptPageSetYn.value == "N") {
        		var aDelArr = new Array();
        		for(var i = 0; i< this.ds_excptDtlList.rowcount; i++) {
        			aDelArr.push(i);
        		}
        		this.ds_excptDtlList.deleteMultiRows(aDelArr);
        	}

        	// 외부인입 설정여부 구분값이 없음이면 작성된 정보 삭제
        	if(this.rdo_prmSetYn.value == "N") {
        		var aDelArr = new Array();
        		for(var i = 0; i< this.ds_prmDtlList.rowcount; i++) {
        			aDelArr.push(i);
        		}
        		this.ds_prmDtlList.deleteMultiRows(aDelArr);
        	}

        	//this.ds_pmtPopupInfo.setColumn(0, "DISP_STR_DTM", this.cal_dispStrDt.value + this.cbo_dispStrHr.value + this.cbo_dispStrMn.value);
        	//this.ds_pmtPopupInfo.setColumn(0, "DISP_END_DTM", this.cal_dispEndDt.value + this.cbo_dispEndHr.value + this.cbo_dispEndMn.value);
        	this.edt_dispStrDtm.set_value(this.cal_dispStrDt.value + this.cbo_dispStrHr.value + this.cbo_dispStrMn.value);
        	this.edt_dispEndDtm.set_value(this.cal_dispEndDt.value + this.cbo_dispEndHr.value + this.cbo_dispEndMn.value);

        	// URL 구분코드가 링크없음이 아니면 쿠폰 값 초기화
        	if(this.rdo_urlCnsolSprCd.value != "10") {
        		this.edt_cpnEvtNo.set_value("");
        		this.edt_cpnEvtNm.set_value("");
        	}

        	// 파일업로드
        	if( this.ds_file.rowcount > 0 ) {
        		if(this.fn_dataCheck(this.ds_file) ) {
        			var jsonObj		= new Object();
        			var oriAtflNm = this.ds_pmtPopupInfo.getColumn(0, "ORI_ATFL_NM") == undefined ? "" :this.ds_pmtPopupInfo.getColumn(0, "ORI_ATFL_NM");
        			var atflStorPath = this.ds_pmtPopupInfo.getColumn(0, "ATFL_STOR_PATH") == undefined ? "" :this.ds_pmtPopupInfo.getColumn(0, "ATFL_STOR_PATH");
        			var docRegId = this.ds_pmtPopupInfo.getColumn(0, "DOC_REG_ID") == undefined ? "" :this.ds_pmtPopupInfo.getColumn(0, "DOC_REG_ID");
        			var docRegSeq = this.ds_pmtPopupInfo.getColumn(0, "DOC_REG_SEQ") == undefined ? "1" :this.ds_pmtPopupInfo.getColumn(0, "DOC_REG_SEQ").toString();

        			// 파일삭제 및 첨부파일테이블에 insert 위하여 값 세팅.
        			this.fileUpTrans.setPostData("oriAtflNm", oriAtflNm);
        			this.fileUpTrans.setPostData("atflStorPath", atflStorPath);
        			this.fileUpTrans.setPostData("docRegId", docRegId);
        			this.fileUpTrans.setPostData("docRegSeq",  docRegSeq);
        			this.fileUpTrans.upload('/sa/com/singlec-file-upload.do')
        		} else {
        			this.fn_save();
        		}
        	} else {
        		this.fn_save();
        	}
        };

        // 운영단위 삭제
        this.grd_oprUnitList_oncellclick = function(obj,e)
        {
        	var sEditType = obj.getCellProperty("body", e.cell, "edittype");

        	if(sEditType == "button") {
        		if(confirm(this.fn_getMessage("ERRN000048"))) { // 삭제하시겠습니까?
        			this.ds_oprUnitList.deleteRow(e.row);

        			var sTotText = "(<b v='true'>총 " + this.ds_oprUnitList.getRowCount() + "건 </b>)";
        			this.sta_totalCountOprUnit.set_text(sTotText);
        		}
        	}
        };

        // 배너 삭제
        this.btn_delete_onclick = function(obj,e)
        {
        	if(confirm(this.fn_getMessage("ERRN000048"))) { // 삭제하시겠습니까?
        		this.fn_delete();
        	}
        };

        //  제목 keyup
        this.edt_pmtPopupNm_onkeyup = function(obj,e)
        {
        	this.fn_setLenByte(obj.value, 300, "pmtPopupNm");
        };

        //  프로모션 팝업 설명 keyup
        this.edt_pmtPopupDesc_onkeyup = function(obj,e)
        {
        	this.fn_setLenByte(obj.value, 2000, "pmtPopupDesc");
        };

        // URL 연결 구분코드
        this.rdo_urlCnsolSprCd_onitemchanged = function(obj,e)
        {
        	this.fn_urlCnsolSprCd();
        };

        // 이미지 업로드
        this.btn_imgAdd_onclick = function(obj,e)
        {
        	curImgBtnName = e.fromobject.id;
        	this.fileDialog.set_accept(this.fileType);
        	this.fileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };

        // 이미지 삭제
        this.btn_imgDelete_onclick = function(obj,e)
        {
        	this.ds_pmtPopupInfo.setColumn(0,"ATFL_NM", "");

        	this.fileUpTrans.clearFileList();
        	this.ds_file.clearData();

        };

        // 첨부파일 클릭
        this.edt_atflNm_onclick = function(obj,e)
        {
        // 	if(e.fromobject.id == "edt_atflNm") {
        // 		if(!this.gfn_isNull(this.edt_atflNm.value)) {
        // 			if(this.confirm(this.edt_atflNm.value + " 파일을 저장 하시겠습니까?")) {
        // 				this.downloadfile("main");
        // 			}
        // 		}
        // 	} else if(e.fromobject.id == "edt_subAtflNm") {
        // 		if(!this.gfn_isNull(this.edt_subAtflNm.value)) {
        // 			if(this.confirm(this.edt_subAtflNm.value + " 파일을 저장 하시겠습니까?")) {
        // 				this.downloadfile("sub");
        // 			}
        // 		}
        // 	}
        };

        // 이미지 노출 처리
        this.edt_atflNm_onmouseenter = function(obj,e)
        {
        	var docRegId = this.ds_pmtPopupInfo.getColumn(0, "DOC_REG_ID");
        	var docRegSeq = this.ds_pmtPopupInfo.getColumn(0, "DOC_REG_SEQ");

        	this.img_view.set_width(300);
        	this.img_view.set_height(300);

        	if(!this.gfn_isNull(docRegId)) {
        		this.fn_imgView(this.img_view, obj, docRegId, docRegSeq);
        	}
        };
        this.edt_atflNm_onmouseleave = function(obj,e)
        {
        	this.img_view.set_visible(false);
        };

        this.btn_dtlAdd_onclick = function(obj,e)
        {
         	if(e.fromobject.id == "btn_aplyAdd") {
        		var nRow = this.ds_aplyDtlList.addRow();
        		this.ds_aplyDtlList.setColumn(nRow, "COL_CHK", "0");
        		this.ds_aplyDtlList.setColumn(nRow, "CO_CD", this.fv_coCd);
        		this.ds_aplyDtlList.setColumn(nRow, "PMT_POPUP_SEQ", this.pmtPopupSeq);
        		this.ds_aplyDtlList.setColumn(nRow, "PMT_POPUP_PROC_TYPE_CD", "10");
         	} else if(e.fromobject.id == "btn_excptAdd") {
        		var nRow = this.ds_excptDtlList.addRow();
        		this.ds_excptDtlList.setColumn(nRow, "COL_CHK", "0");
        		this.ds_excptDtlList.setColumn(nRow, "CO_CD", this.fv_coCd);
        		this.ds_excptDtlList.setColumn(nRow, "PMT_POPUP_SEQ", this.pmtPopupSeq);
        		this.ds_excptDtlList.setColumn(nRow, "PMT_POPUP_PROC_TYPE_CD", "20");
        	} else if(e.fromobject.id == "btn_prmAdd") {
        		var nRow = this.ds_prmDtlList.addRow();
        		this.ds_prmDtlList.setColumn(nRow, "COL_CHK", "0");
        		this.ds_prmDtlList.setColumn(nRow, "CO_CD", this.fv_coCd);
        		this.ds_prmDtlList.setColumn(nRow, "PMT_POPUP_SEQ", this.pmtPopupSeq);
        		this.ds_prmDtlList.setColumn(nRow, "PMT_POPUP_PROC_TYPE_CD", "30");
        	}
        };

        // 상세상품 선택 삭제 버튼 클릭 시
        this.btn_dtlDelete_onclick = function(obj,e)
        {
        	var selDelDs = "";
        	if(e.fromobject.id == "btn_aplyDelete") {
        		selDelDs = this.ds_aplyDtlList;
        	} else if(e.fromobject.id == "btn_excptDelete") {
        		selDelDs = this.ds_excptDtlList;
        	} else if(e.fromobject.id == "btn_prmDelete") {
        		selDelDs = this.ds_prmDtlList;
        	}

        	var chkCnt = selDelDs.getCaseCount("COL_CHK == 1");

        	if(chkCnt == 0) {
        		alert(this.fn_getMessage("ERRN000033")); // 선택된 항목이 없습니다.
        		return;
        	}

        	if (confirm(this.fn_getMessage("ERRN000048"))) { // 삭제하시겠습니까?
        		var aDelArr = new Array();

        		for(var i = 0; i< selDelDs.rowcount; i++) {
        			if(selDelDs.getColumn(i, "COL_CHK") == 1) {
        				aDelArr.push(i);
        			}
        		}

        		selDelDs.deleteMultiRows(aDelArr);
        	}
        };

        this.btn_dtlMultiText_onclick = function(obj,e)
        {
        	var params = { textId : e.fromobject.id };
        	var options = {};
        	options.title = "멀티 텍스트 팝업";

        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_13.xfdl", params,  "fn_popupCallback", options);
        };

        // 적용 페이지 구분값 변경
        this.rdo_expsPageSprCd_onitemchanged = function(obj,e)
        {
        	this.fn_setExpsSprCd();
        };

        // 제외페이지 설정여부 구분값 변경
        this.rdo_excptPageSetYn_onitemchanged = function(obj,e)
        {
        	this.fn_setExcptPageSetYn();
        };

        // 파라미터 설정여부 구분값 변경
        this.rdo_prmSetYn_onitemchanged = function(obj,e)
        {
        	this.fn_setPrmSetYn();
        };

        // 소재 버튼 클릭시
        this.rdo_popupSprCD_onitemchanged = function(obj,e)
        {
        	this.fn_setPopupSprCd();
        };




        /***********************************************************************************************
        *  파일 관련 영역
        ************************************************************************************************/

        //해당 row에 파일 추가
        this.addFileList = function(filelists)
        {
        	var vFile= filelists[0];
        	vFile.addEventHandler("onsuccess", this.fileList_onsuccess, this);
        	vFile.addEventHandler("onerror", this.fileList_onerror, this);
        	vFile.open(null, VirtualFile.openRead);
        	vFile.getFileSize();	//return file size
        	vFile.close();
        };

        //업로드용 Virtual 파일 onsuccess 이벤트
        this.fileList_onsuccess = function(obj, e)
        {
        	if (e.reason == 1){
        		//파일사이즈 체크
        		obj.getFileSize();
        	}

        	if (e.reason == 9) {
        		if( !this.fn_fileSizeCheck(obj, e.filesize) ) return false;


        		// 같은 이름의 파일을 업로드했을 경우 대비
        // 		this.ds_pmtPopupInfo.set_updatecontrol(false);
        // 		this.ds_pmtPopupInfo.setRowType(0, Dataset.ROWTYPE_UPDATE);
        // 		this.ds_pmtPopupInfo.set_updatecontrol(true);

        		this.fileUpTrans.removeFile(this.ds_pmtPopupInfo.getColumn(0, "ATFL_NM"));
        		this.ds_file.clearData();

        		// 수정 후 다시 저장 시에 기존 파일 데이터도 같이 전송하여 삭제 처리.
        		var nRowIdx = this.ds_file.addRow();
        		this.ds_file.setColumn(nRowIdx, "ATFL_NM", obj.filename);
        		this.ds_pmtPopupInfo.setColumn(0, "ATFL_NM", obj.filename);
        		this.fileUpTrans.addFile(obj.filename, obj)

        	}
        };

        //업로드용 Virtual 파일 oneroor 이벤트
        this.fileList_onerror = function(obj, e)
        {
        	var msg = ">>>>>>>>> VirtualFile event ERROR >>>>>>>>\n";
        	msg += "errortype : "+e.errortype+"\n";
        	msg += "errormsg : "+e.errormsg+"\n";
        	msg += "statuscode : "+e.statuscode;
        	this.nRow = -1;
        	alert(msg);
        };

        // 파일 다운로드
        this.downloadfile = function() {
        	this.FileDownTransfer.clearPostDataList();
        	this.FileDownTransfer.set_downloadfilename(this.ds_pmtPopupInfo.getColumn(0, "ATFL_NM"));	//runtime 전용 프로퍼티
        	this.FileDownTransfer.setPostData("docRegId",this.ds_pmtPopupInfo.getColumn(0, "DOC_REG_ID"));
        	this.FileDownTransfer.setPostData("docRegSeq",this.ds_pmtPopupInfo.getColumn(0, "DOC_REG_SEQ"));
        	this.FileDownTransfer.download('/co/file-download.do');
        };

        //파일 확장자 검증
        this.fn_fileSizeCheck = function(obj, fileSize) {
        	var fileName = obj.filename;
        	var extNm  = fileName.substr(fileName.lastIndexOf(".") + 1); // 맨 뒤 확장자만 자르기
        	var fileGbn = ".jpg, .png";

        	extNm = extNm.toLowerCase();

        	//10485760 - 10메가
        	//메가바이트 변환
        	var mbSize = fileSize / 1024 / 1024;

        	if( this.maxFileSize < mbSize ) {
        		alert(this.fn_getMessage("ERRN000039", extNm)); // &1 파일은 10MB 이상으로 첨부하실 수 없습니다.
        		return false;
        	}

        	if( fileGbn.indexOf(extNm) == -1 ) {
        		alert(this.fn_getMessage("ERRN000040", extNm)); // &1 파일은 허용되지 않는 파일 타입입니다.
        		return false;
        	}

        	return true;
        };

        //파일 DIALOG CLOSE 이벤트
        this.fileDialog_onclose = function(obj,e)
        {
        	if(this.gfn_isNull(e.virtualfiles)){
        		return;
        	}

        	var vFile = e.virtualfiles[0];
        	//VirtualFile 이벤트 생성
        	vFile.addEventHandler("onsuccess", this.fileList_onsuccess, this);
        	vFile.addEventHandler("onerror", this.fileList_onerror, this);
        	vFile.open(null, 1);
        };

        //다운 완료
        this.FileDownTransfer_onsuccess = function(obj,e)
        {
        	console.log(e);
        	console.log(obj);
        };

        //다운 실패
        this.FileDownTransfer_onerror = function(obj,e)
        {
        	console.log(e);
        	console.log(obj);
        };

        //저장 -> 파일 업로드 성공 시
        this.fileUpTrans_onsuccess = function(obj,e)
        {
        	var objCallDs = e.datasets[0];
        	if(objCallDs.rowcount  == 0 ){
        		alert(this.fn_getMessage("ERRN000041")); // 파일 업로드 오류입니다.
        	}

        	for(var i = 0 ; i < objCallDs.rowcount ; i++){
        // 		if(objCallDs.getColumn(i, "result") == "none") {
        // 			alert("파일이 없습니다.");
        // 			return;
        // 		}
        		this.ds_pmtPopupInfo.setColumn(0, "DOC_REG_ID", objCallDs.getColumn(i, "docRegId"));
        	}
        	this.ds_file.clearData(); // 업로드 완료 후 ds_file 클리어
        	this.fileUpTrans.clearFileList();

        	this.fn_save();

        };

        // 파일전송 실패
        this.fileUpTrans_onerror = function(obj,e)
        {
        	alert(e.errormsg);
        };





        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeydown",this.fn_onkeydown,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.rdo_expsNoticSprCd.addEventHandler("onitemchanged",this.rdo_expsNoticSprCd_onitemchanged,this);
            this.grd_oprUnitList.addEventHandler("oncellclick",this.grd_oprUnitList_oncellclick,this);
            this.btn_oprUnitMulti.addEventHandler("onclick",this.btn_oprUnitMulti_onclick,this);
            this.btn_oprUnitMultiText.addEventHandler("onclick",this.btn_oprUnitMultiText_onclick,this);
            this.rdo_urlCnsolSprCd.addEventHandler("onitemchanged",this.rdo_urlCnsolSprCd_onitemchanged,this);
            this.edt_pmtPopupNm.addEventHandler("onkeyup",this.edt_pmtPopupNm_onkeyup,this);
            this.edt_pmtPopupDesc.addEventHandler("onkeyup",this.edt_pmtPopupDesc_onkeyup,this);
            this.rdo_expsPageSprCd.addEventHandler("onitemchanged",this.rdo_expsPageSprCd_onitemchanged,this);
            this.btn_aplyAdd.addEventHandler("onclick",this.btn_dtlAdd_onclick,this);
            this.btn_aplyMultiText.addEventHandler("onclick",this.btn_dtlMultiText_onclick,this);
            this.btn_aplyDelete.addEventHandler("onclick",this.btn_dtlDelete_onclick,this);
            this.rdo_excptPageSetYn.addEventHandler("onitemchanged",this.rdo_excptPageSetYn_onitemchanged,this);
            this.btn_excptAdd.addEventHandler("onclick",this.btn_dtlAdd_onclick,this);
            this.btn_excptMultiText.addEventHandler("onclick",this.btn_dtlMultiText_onclick,this);
            this.btn_excptDelete.addEventHandler("onclick",this.btn_dtlDelete_onclick,this);
            this.rdo_prmSetYn.addEventHandler("onitemchanged",this.rdo_prmSetYn_onitemchanged,this);
            this.btn_prmAdd.addEventHandler("onclick",this.btn_dtlAdd_onclick,this);
            this.btn_prmMultiText.addEventHandler("onclick",this.btn_dtlMultiText_onclick,this);
            this.btn_prmDelete.addEventHandler("onclick",this.btn_dtlDelete_onclick,this);
            this.btn_cpnEvtNo.addEventHandler("onclick",this.btn_cpnEvtNo_onclick,this);
            this.btn_cpnEvtNoDelete.addEventHandler("onclick",this.btn_cpnEvtNoDelete_onclick,this);
            this.btn_prev.addEventHandler("onclick",this.btn_prev_onclick,this);
            this.sta_popupSprCD.addEventHandler("onclick",this.sta_useYn00_onclick,this);
            this.rdo_popupSprCD.addEventHandler("onitemchanged",this.rdo_popupSprCD_onitemchanged,this);
            this.sta_yTube.addEventHandler("onclick",this.sta_img00_onclick,this);
            this.edt_atflNm.addEventHandler("oneditclick",this.edt_atflNm_onclick,this);
            this.edt_atflNm.addEventHandler("onmouseenter",this.edt_atflNm_onmouseenter,this);
            this.edt_atflNm.addEventHandler("onmouseleave",this.edt_atflNm_onmouseleave,this);
            this.btn_imgAdd.addEventHandler("onclick",this.btn_imgAdd_onclick,this);
            this.btn_imgDelete.addEventHandler("onclick",this.btn_imgDelete_onclick,this);
            this.fileDialog.addEventHandler("onclose",this.fileDialog_onclose,this);
            this.fileUpTrans.addEventHandler("onerror",this.fileUpTrans_onerror,this);
            this.fileUpTrans.addEventHandler("onprogress",this.fileUpTrans_onprogress,this);
            this.fileUpTrans.addEventHandler("onsuccess",this.fileUpTrans_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onsuccess",this.FileDownTransfer_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onerror",this.FileDownTransfer_onerror,this);
        };
        this.loadIncludeScript("SSP_BO_NA_30.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
