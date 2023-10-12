(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("work04");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,2762);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_radio", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">aaa</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">bbb</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">ccc</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">Aa</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">Ba</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">Ca</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MNU_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MNU_LVL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PGM_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"THME_DOMN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MDL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PGM_PATH\" type=\"STRING\" size=\"32\"/><Column id=\"MNU_LVL_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"HRNK_MNU_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_CALL_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"MNU_TP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"HGST_MNU_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"RMKS_CTS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MNU_SEQ\">1</Col><Col id=\"MNU_LVL\">1</Col><Col id=\"SRT_SO\">1</Col><Col id=\"MNU_NM\">상품관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1000000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">0</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col><Col id=\"PRODUCT_ID\">5218376</Col></Row><Row><Col id=\"MNU_SEQ\">2</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">2</Col><Col id=\"MNU_NM\">상품등록</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1001000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">1</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col><Col id=\"PRODUCT_ID\">5218376</Col></Row><Row><Col id=\"MNU_SEQ\">3</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">3</Col><Col id=\"MNU_NM\">신규상품요청처리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1001010000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">2</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">4</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">4</Col><Col id=\"MNU_NM\">상품추가</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1001020000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">2</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">5</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">5</Col><Col id=\"MNU_NM\">등록상품관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1002000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">1</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">6</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">6</Col><Col id=\"MNU_NM\">상품조회</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1002010000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">5</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">7</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">7</Col><Col id=\"MNU_NM\">시리즈그룹상품관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1002020000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">5</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">101</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">8</Col><Col id=\"PGM_TP_CD\">10</Col><Col id=\"THME_DOMN_CD\">CO</Col><Col id=\"MDL_NM\">CoMenuController.java</Col><Col id=\"MNU_NM\">제조원명관리</Col><Col id=\"PGM_PATH\">CO::coMnuAuthGrpMng.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">1002030000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">5</Col><Col id=\"PGM_ID\">SSP_BO_YA_02</Col><Col id=\"UI_ID\">coMnuAuthGrpMng.xfdl</Col><Col id=\"PGM_NM\">메뉴권한그룹관리</Col><Col id=\"PGM_CALL_PATH\">/co/Menu/selectMnuMngList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col><Col id=\"RMKS_CTS\">비고비고비고비고비고비고비고비고비고</Col></Row><Row><Col id=\"MNU_SEQ\">455</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">9</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">PR</Col><Col id=\"MDL_NM\">PrProductNoticeController</Col><Col id=\"MNU_NM\">상품고시정보관리</Col><Col id=\"PGM_PATH\">PR::SSP_BO_MF_28.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">1002040000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">5</Col><Col id=\"PGM_ID\">SSP_BO_MF_28</Col><Col id=\"UI_ID\">SSP_BO_MF_28.xfdl</Col><Col id=\"PGM_NM\">상품고시정보관리</Col><Col id=\"PGM_CALL_PATH\">/bo/pr/prdNtc/selectProductNoticeList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">8</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">10</Col><Col id=\"MNU_NM\">전시상품관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1003000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">1</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">9</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">11</Col><Col id=\"MNU_NM\">전시상품관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1003010000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">8</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">10</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">12</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">PR</Col><Col id=\"MDL_NM\">PrPropertyController</Col><Col id=\"MNU_NM\">견적요청관리</Col><Col id=\"PGM_PATH\">PR::SSP_BO_PA_17.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">1003020000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">8</Col><Col id=\"PGM_ID\">SSP_BO_PA_17</Col><Col id=\"UI_ID\">SSP_BO_PA_17.xfdl</Col><Col id=\"PGM_NM\">SSP속성 목록</Col><Col id=\"PGM_CALL_PATH\">/bo/pr/prd/selectPropertyList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">12</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">13</Col><Col id=\"MNU_NM\">카테고리/속성관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1004010000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">1</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">13</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">14</Col><Col id=\"MNU_NM\">카테고리관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1004020000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">12</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">457</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">15</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">PR</Col><Col id=\"MDL_NM\">PrPropertyController</Col><Col id=\"MNU_NM\">속성관리</Col><Col id=\"PGM_PATH\">PR::SSP_BO_PA_17.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">1004030000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">12</Col><Col id=\"PGM_ID\">SSP_BO_PA_17</Col><Col id=\"UI_ID\">SSP_BO_PA_17.xfdl</Col><Col id=\"PGM_NM\">SSP속성 목록</Col><Col id=\"PGM_CALL_PATH\">/bo/pr/prd/selectPropertyList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">460</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">16</Col><Col id=\"MNU_NM\">담당자관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1005000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">1</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">461</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">17</Col><Col id=\"MNU_NM\">상품담당자관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1005010000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">460</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">462</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">18</Col><Col id=\"MNU_NM\">MD담당자관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1005020000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">460</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">237</Col><Col id=\"MNU_LVL\">1</Col><Col id=\"SRT_SO\">19</Col><Col id=\"MNU_NM\">고객관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">5000000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">0</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">503</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">20</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">CC</Col><Col id=\"MDL_NM\">CustIddtController</Col><Col id=\"MNU_NM\">산업군조회</Col><Col id=\"PGM_PATH\">CC::SSP_BO_MA_52.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">5001000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">237</Col><Col id=\"PGM_ID\">SSP_BO_MA_52</Col><Col id=\"UI_ID\">SSP_BO_MA_52.xfdl</Col><Col id=\"PGM_NM\">산업군조회</Col><Col id=\"PGM_CALL_PATH\">/bo/cust/iddt/ssp_bo_ma_52.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">397</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">21</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">CC</Col><Col id=\"MDL_NM\">CustBgtController</Col><Col id=\"MNU_NM\">예산목록조회</Col><Col id=\"PGM_PATH\">CC::SSP_BO_MA_60.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">5003</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">237</Col><Col id=\"PGM_ID\">SSP_BO_MA_60</Col><Col id=\"UI_ID\">SSP_BO_MA_60.xfdl</Col><Col id=\"PGM_NM\">예산 목록 조회</Col><Col id=\"PGM_CALL_PATH\">/bo/cust/bgt/ssp_bo_ma_60.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">283</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">22</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">CC</Col><Col id=\"MDL_NM\">CustGradeController</Col><Col id=\"MNU_NM\">고객등급관리</Col><Col id=\"PGM_PATH\">CC::SSP_BO_MA_03.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">5003000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">237</Col><Col id=\"PGM_ID\">SSP_BO_MA_03</Col><Col id=\"UI_ID\">SSP_BO_MA_03.xfdl</Col><Col id=\"PGM_NM\">고객등급관리</Col><Col id=\"PGM_CALL_PATH\">/bo/cust/mbr/ssp_bo_ma_03.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">315</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">23</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">CC</Col><Col id=\"MDL_NM\">CustOprunitController</Col><Col id=\"MNU_NM\">운영단위조회</Col><Col id=\"PGM_PATH\">CC::SSP_BO_MA_05.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">5004000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">237</Col><Col id=\"PGM_ID\">SSP_BO_MA_05</Col><Col id=\"UI_ID\">SSP_BO_MA_05.xfdl</Col><Col id=\"PGM_NM\">운영단위조회</Col><Col id=\"PGM_CALL_PATH\">/bo/cust/oprunit/ssp_bo_ma_05.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">284</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">24</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">CC</Col><Col id=\"MDL_NM\">CustDeptController</Col><Col id=\"MNU_NM\">부서조회</Col><Col id=\"PGM_PATH\">CC::SSP_BO_MA_07.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">5005000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">237</Col><Col id=\"PGM_ID\">SSP_BO_MA_07</Col><Col id=\"UI_ID\">SSP_BO_MA_07.xfdl</Col><Col id=\"PGM_NM\">부서조회</Col><Col id=\"PGM_CALL_PATH\">/bo/cust/dept/ssp_bo_ma_07.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">238</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">25</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">CC</Col><Col id=\"MDL_NM\">CustMbrController</Col><Col id=\"MNU_NM\">회원관리</Col><Col id=\"PGM_PATH\">CC::ssp_bo_ma_12.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">5006000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">237</Col><Col id=\"PGM_ID\">SSP_BO_MA_12</Col><Col id=\"UI_ID\">ssp_bo_ma_12.xfdl</Col><Col id=\"PGM_NM\">회원목록</Col><Col id=\"PGM_CALL_PATH\">/bo/cust/mbr/ssp_bo_ma_12.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">326</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">26</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">CC</Col><Col id=\"MDL_NM\">CustDvlplcController</Col><Col id=\"MNU_NM\">배송지관리</Col><Col id=\"PGM_PATH\">CC::SSP_BO_MA_20.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">5007000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">237</Col><Col id=\"PGM_ID\">SSP_BO_MA_20</Col><Col id=\"UI_ID\">SSP_BO_MA_20.xfdl</Col><Col id=\"PGM_NM\">배송지관리 목록</Col><Col id=\"PGM_CALL_PATH\">/bo/cust/dvlplc/ssp_bo_ma_20.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">389</Col><Col id=\"MNU_LVL\">1</Col><Col id=\"SRT_SO\">27</Col><Col id=\"MNU_NM\">SSP가격/진열관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">8000000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">0</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">390</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">28</Col><Col id=\"MNU_NM\">사업장별 가격조회</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">8001000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">389</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">391</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">29</Col><Col id=\"MNU_NM\">가격기준정보관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">8005000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">389</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">392</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">30</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">PC</Col><Col id=\"MDL_NM\">PcDetrInfoController</Col><Col id=\"MNU_NM\">절사관리</Col><Col id=\"PGM_PATH\">PC::SSP_BO_CA_50.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">800500100</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">391</Col><Col id=\"PGM_ID\">SSP_BO_CA_50</Col><Col id=\"UI_ID\">SSP_BO_CA_50.xfdl</Col><Col id=\"PGM_NM\">절사관리</Col><Col id=\"PGM_CALL_PATH\">/pc/detrInfo/selectDetrInfoList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">417</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">31</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">PC</Col><Col id=\"MDL_NM\">PcPlnPrfrtController</Col><Col id=\"MNU_NM\">카테고리계획매익률</Col><Col id=\"PGM_PATH\">PC::SSP_BO_CA_51.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">800500200</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">391</Col><Col id=\"PGM_ID\">SSP_BO_CA_51</Col><Col id=\"UI_ID\">SSP_BO_CA_51.xfdl</Col><Col id=\"PGM_NM\">카테고리계획매익율</Col><Col id=\"PGM_CALL_PATH\">/pc/plnPrfrt/selectPlnPrfrtList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">14</Col><Col id=\"MNU_LVL\">1</Col><Col id=\"SRT_SO\">32</Col><Col id=\"MNU_NM\">Front관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9000000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">0</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">465</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">33</Col><Col id=\"MNU_NM\">고객센터관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9001000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">14</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">466</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">34</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">CO</Col><Col id=\"MDL_NM\">CoNoticeController</Col><Col id=\"MNU_NM\">공지사항관리</Col><Col id=\"PGM_PATH\">CO::SSP_BO_CN_01.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">9001010000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">465</Col><Col id=\"PGM_ID\">SSP_BO_CN_01</Col><Col id=\"UI_ID\">SSP_BO_CN_01.xfdl</Col><Col id=\"PGM_NM\">공지사항관리</Col><Col id=\"PGM_CALL_PATH\">/co/selectNoticeList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">467</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">35</Col><Col id=\"MNU_NM\">자주하는질문관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9001020000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">465</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">468</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">36</Col><Col id=\"MNU_NM\">약관관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9001030000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">465</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">20</Col><Col id=\"MNU_LVL\">1</Col><Col id=\"SRT_SO\">37</Col><Col id=\"MNU_NM\">시스템관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9100000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">0</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">21</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">38</Col><Col id=\"PGM_TP_CD\">10</Col><Col id=\"THME_DOMN_CD\">CO</Col><Col id=\"MDL_NM\">CoMenuController.java</Col><Col id=\"MNU_NM\">메뉴관리</Col><Col id=\"PGM_PATH\">CO::comMenuMng.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">9101000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"PGM_ID\">SSP_BO_YA_01</Col><Col id=\"UI_ID\">comMenuMng.xfdl</Col><Col id=\"PGM_NM\">메뉴관리</Col><Col id=\"PGM_CALL_PATH\">/co/Menu/selectMnuMngList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">22</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">39</Col><Col id=\"PGM_TP_CD\">10</Col><Col id=\"THME_DOMN_CD\">CO</Col><Col id=\"MDL_NM\">CoMenuController.java</Col><Col id=\"MNU_NM\">메뉴권한그룹관리</Col><Col id=\"PGM_PATH\">CO::coMnuAuthGrpMng.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">9102000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"PGM_ID\">SSP_BO_YA_02</Col><Col id=\"UI_ID\">coMnuAuthGrpMng.xfdl</Col><Col id=\"PGM_NM\">메뉴권한그룹관리</Col><Col id=\"PGM_CALL_PATH\">/co/Menu/selectMnuMngList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">23</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">40</Col><Col id=\"PGM_TP_CD\">10</Col><Col id=\"THME_DOMN_CD\">CO</Col><Col id=\"MDL_NM\">CoPgmMngController.java</Col><Col id=\"MNU_NM\">프로그램관리</Col><Col id=\"PGM_PATH\">CO::coPgmMng.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">9103000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"PGM_ID\">SSP_BO_YA_03</Col><Col id=\"UI_ID\">coPgmMng.xfdl</Col><Col id=\"PGM_NM\">프로그램관리</Col><Col id=\"PGM_CALL_PATH\">/co/pgm/selectPgmMngList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">24</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">41</Col><Col id=\"MNU_NM\">운영자 조회</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9104000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">469</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">42</Col><Col id=\"MNU_NM\">운영자이관등록</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9105000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">25</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">43</Col><Col id=\"MNU_NM\">운영자 조직 조회</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9106000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">470</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">44</Col><Col id=\"MNU_NM\">운영자권한그룹관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9107000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">26</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">45</Col><Col id=\"PGM_TP_CD\">10</Col><Col id=\"THME_DOMN_CD\">CO</Col><Col id=\"MDL_NM\">CoComCdMngController</Col><Col id=\"MNU_NM\">공통코드관리</Col><Col id=\"PGM_PATH\">CO::comCdMng.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">9108000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"PGM_ID\">SSP_BO_YA_06</Col><Col id=\"UI_ID\">comCdMng.xfdl</Col><Col id=\"PGM_NM\">공통코드관리</Col><Col id=\"PGM_CALL_PATH\">/co/com/comCdClsfSearchList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">471</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">46</Col><Col id=\"MNU_NM\">프론트프로그램그룹관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9109000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">472</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">47</Col><Col id=\"MNU_NM\">프론트프로그램관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9110000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">473</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">48</Col><Col id=\"MNU_NM\">프론트메뉴관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9111000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">474</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">49</Col><Col id=\"MNU_NM\">거래명세서관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9112000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">475</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">50</Col><Col id=\"MNU_NM\">로그인이력조회</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9113000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">216</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">51</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">CO</Col><Col id=\"MDL_NM\">CoCommonController</Col><Col id=\"MNU_NM\">에러로그조회</Col><Col id=\"PGM_PATH\">CO::errorLogList.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">9114000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"PGM_ID\">SSP_BP_YA_07</Col><Col id=\"UI_ID\">errorLogList.xfdl</Col><Col id=\"PGM_NM\">에러내용 조회</Col><Col id=\"PGM_CALL_PATH\">/co/selectExceptionInfoList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">476</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">52</Col><Col id=\"MNU_NM\">인터페이스 로그 조회</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9115000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">29</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">53</Col><Col id=\"MNU_NM\">sample</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9199000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">30</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">54</Col><Col id=\"PGM_TP_CD\">10</Col><Col id=\"THME_DOMN_CD\">CO</Col><Col id=\"MDL_NM\">CoMenuController.java</Col><Col id=\"MNU_NM\">sample1</Col><Col id=\"PGM_PATH\">CO::comMenuMng.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">9199010000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">29</Col><Col id=\"PGM_ID\">SSP_BO_YA_01</Col><Col id=\"UI_ID\">comMenuMng.xfdl</Col><Col id=\"PGM_NM\">메뉴관리</Col><Col id=\"PGM_CALL_PATH\">/co/Menu/selectMnuMngList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">31</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">55</Col><Col id=\"MNU_NM\">sample2</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9199020000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">29</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">205</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">56</Col><Col id=\"MNU_NM\">sample3</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9199030000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">29</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div_top_info","20","17",null,"290","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_border("0px solid darkblue");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_00","0","251",null,"32","0",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("72");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("(019364)박등록");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static27","0","220",null,"32","0",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("재고");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static21","0","189",null,"32","0",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("66");
            obj.set_cssclass("sta_cm_box02L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static17_00","0","158",null,"32","0",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("71");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static17","0","127",null,"32","0",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_cm_box02L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static23_01","0","96",null,"32","0",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static65","0","65",null,"32","0",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("70");
            obj.set_cssclass("sta_cm_box02L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static07","0","34",null,"32","0",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("63");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static03","0","3",null,"32","0",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("62");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static02","0","3","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("0");
            obj.set_text("상품ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static22_00","431","3","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("2");
            obj.set_text("대표상품ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static04","862","3","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("4");
            obj.set_text("전시상품구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static06","0","34","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("6");
            obj.set_text("전시상품구분");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static08","862","34","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("8");
            obj.set_text("브랜드명");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static10","0","65","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("10");
            obj.set_text("해시Tag");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static66","862","65","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("12");
            obj.set_text("R&D 상품상태");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static12","0","96","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("13");
            obj.set_text("주문단위");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static22_01","431","96","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("21");
            obj.set_text("주문단위");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static14","862","96","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("25");
            obj.set_text("원산지");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static16","0","127","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("29");
            obj.set_text("대표규격");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static18","862","127","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("31");
            obj.set_text("대표규격");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static19","991","127",null,"32","0",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static16_00","0","158","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("33");
            obj.set_text("Hub취급가능여부");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static18_00","862","158","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("37");
            obj.set_text("화학물질여부");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_usedecorate("false");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static20","0","189","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("39");
            obj.set_text("배수주문수량");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static22","431","189","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("42");
            obj.set_text("요청번호");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static24","862","189","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("44");
            obj.set_text("요청구분");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static25","991","189",null,"32","0",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_cm_box02L_txt");
            obj.set_text("자사");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static26","0","220","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("46");
            obj.set_text("재고여부");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static28","431","220","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("50");
            obj.set_text("카테고리킬러구분");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static29","560","220","303","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_cm_box02L_txt");
            obj.set_text("R&D");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static30","862","220","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("52");
            obj.set_text("등록일");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static31","991","220",null,"32","0",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_cm_box02L_txt");
            obj.set_text("2021-04-29 13:54:04");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static26_00","0","251","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("54");
            obj.set_text("등록자");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static28_00","431","251","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("56");
            obj.set_text("최종수정일");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static29_00","560","251","303","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_cm_box02L_txt");
            obj.set_text("2021-04-29 13:54:04");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static30_00","862","251","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("58");
            obj.set_text("최종수정자");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static31_00","991","251",null,"32","0",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_cm_box02L_txt");
            obj.set_text("(019364)박수정");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Radio("Radio00","570","8","285","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Div_top_info_form_Radio00_innerdataset = new nexacro.NormalDataset("Div_top_info_form_Radio00_innerdataset", obj);
            Div_top_info_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">Aa</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">Bb</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">Cc</Col></Row></Rows>");
            obj.set_innerdataset(Div_top_info_form_Radio00_innerdataset);
            obj.set_text("A");
            obj.set_value("1");
            obj.set_index("0");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Radio("rdo_sangpum","1002","7","285","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Div_top_info_form_rdo_sangpum_innerdataset = new nexacro.NormalDataset("Div_top_info_form_rdo_sangpum_innerdataset", obj);
            Div_top_info_form_rdo_sangpum_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">A</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">B</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">C</Col></Row></Rows>");
            obj.set_innerdataset(Div_top_info_form_rdo_sangpum_innerdataset);
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("Edit01","140","38","712","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("7");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("Edit02","1002","38","283","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("9");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("Edit03","140","69","712","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("11");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Radio("Radio02","1002","69","200","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("60");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("Edit04","140","100","80","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("Edit05","Edit04:4","100","50","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("16");
            obj.set_readonly("true");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("Button01","Edit05:4","100","24","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_search02");
            obj.set_enable("true");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static59_00","307","100","9","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("18");
            obj.set_text("/");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("Edit06","317","100","50","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("Button02","Edit06:4","100","24","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("Edit07","570","100","120","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("22");
            obj.set_readonly("true");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("Button03","828","100","24","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("Edit08","Edit07:4","100",null,"24","Button03:4",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("23");
            obj.set_readonly("true");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("Edit09","1002","100","120","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("26");
            obj.set_readonly("true");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("btn_searchWon","1260","100","24","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_search02");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("Edit10","Edit09:4","100",null,"24","btn_searchWon:4",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("27");
            obj.set_readonly("true");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Radio("Radio04","140","162","140","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("34");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static32","431","158","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("35");
            obj.set_text("불가사유");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Combo("Combo36_00","570","162","150","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("36");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div_top_info_form_Combo36_00_innerdataset = new nexacro.NormalDataset("Div_top_info_form_Combo36_00_innerdataset", obj);
            Div_top_info_form_Combo36_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">AA</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">BA</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">CA</Col></Row></Rows>");
            obj.set_innerdataset(Div_top_info_form_Combo36_00_innerdataset);
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Radio("Radio03","1002","131","140","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("32");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Radio("Radio05","1002","162","140","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("38");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("btn_image_add","361","193","60","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("41");
            obj.set_text("정보보기");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("Edit11","140","193",null,"24","btn_image_add:4",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("40");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Combo("Combo50","159","-115","150","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("68");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Combo("Combo51","1021","-115","150","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("69");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Radio("Radio04_00","140","131","140","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("30");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static29_00_00","129","4","303","31",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_txt");
            obj.set_text("0000000000");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("btn_image_add00","280","224","38","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("49");
            obj.set_text("조회");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("Edit11_00","140","224",null,"24","btn_image_add00:4",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("48");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("Edit11_00_00","140","255","135","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("55");
            obj.set_cssclass("edi_WF_error");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Spin("Spin00","570","194","60","23",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("43");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("Button02_00","725","162","24","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("73");
            obj.set_cssclass("btn_WF_multiCombo");
            obj.set_text("");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("Button03_00","100","224","24","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("47");
            obj.set_cssclass("btn_WF_help");
            obj.set_text("");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static00","56","11","10","15",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("74");
            obj.set_cssclass("sta_cm_box01L_tdt_necessary2");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static00_00","92","42","10","15",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("75");
            obj.set_cssclass("sta_cm_box01L_tdt_necessary2");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("btn_image_add01","570","224","72","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("51");
            obj.set_text("용어표준화");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Div("Div00","20","322","640","360",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_00_00","0","93","640","261",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static21_00","0","31","640","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static20_00","0","31","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("S-MRO카테고리");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static21_00_00","129","32","511","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L_txt");
            obj.set_text("(000200030000000102)실험/측정>시약>비표준시약>합성시약");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01","0","62","640","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01","0","62","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("R&D카테고리");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00","0","93","130","261",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("속성");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit37","140","66","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit38","Edit37:4","66","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button39","Edit38:4","66","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_search02");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","140","104","489","239",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_menu");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"176\"/><Column size=\"179\"/><Column size=\"179\"/><Column size=\"118\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"속성명\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"1\" text=\"속성값\"/><Cell col=\"2\" text=\"부서코드\"/><Cell col=\"3\" text=\"부서명\"/><Cell col=\"4\" text=\"상품명\"/><Cell col=\"5\"/><Cell col=\"6\" text=\"MDL_NM\"/><Cell col=\"7\" text=\"MNU_NM\"/><Cell col=\"8\" text=\"PGM_PATH\"/><Cell col=\"9\" text=\"MNU_LVL_SPR_CD\"/><Cell col=\"10\" text=\"USE_YN\"/><Cell col=\"11\" text=\"HRNK_MNU_SEQ\"/><Cell col=\"12\" text=\"PGM_ID\"/><Cell col=\"13\" text=\"UI_ID\"/><Cell col=\"14\" text=\"PGM_NM\"/><Cell col=\"15\" text=\"PGM_CALL_PATH\"/><Cell col=\"16\" text=\"MNU_TP_CD\"/><Cell col=\"17\" text=\"HGST_MNU_SEQ\"/><Cell col=\"18\" text=\"RMKS_CTS\"/></Band><Band id=\"body\"><Cell text=\"bind:PRODUCT_ID\"/><Cell col=\"1\" text=\"bind:MNU_SEQ\"/><Cell col=\"2\" text=\"bind:MNU_LVL\"/><Cell col=\"3\" text=\"bind:SRT_SO\"/><Cell col=\"4\" text=\"bind:PGM_TP_CD\"/><Cell col=\"5\" text=\"bind:THME_DOMN_CD\"/><Cell col=\"6\" text=\"bind:MDL_NM\"/><Cell col=\"7\" text=\"bind:MNU_NM\"/><Cell col=\"8\" text=\"bind:PGM_PATH\"/><Cell col=\"9\" text=\"bind:MNU_LVL_SPR_CD\"/><Cell col=\"10\" text=\"bind:USE_YN\"/><Cell col=\"11\" text=\"bind:HRNK_MNU_SEQ\"/><Cell col=\"12\" text=\"bind:PGM_ID\"/><Cell col=\"13\" text=\"bind:UI_ID\"/><Cell col=\"14\" text=\"bind:PGM_NM\"/><Cell col=\"15\" text=\"bind:PGM_CALL_PATH\"/><Cell col=\"16\" text=\"bind:MNU_TP_CD\"/><Cell col=\"17\" text=\"bind:HGST_MNU_SEQ\"/><Cell col=\"18\" text=\"bind:RMKS_CTS\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0","300","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("R&D카테고리/속성 정보");
            obj.set_cssclass("sta_WF_title02");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00","680","322",null,"342","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_00_00","0","181",null,"32","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01","0","62",null,"120","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static21_00","0","31",null,"32","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static20_00","0","31","130","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("배지명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_01","0","62","130","120",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("3");
            obj.set_text("배지 이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00","0","181","130","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("5");
            obj.set_text("적용기간");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0","300","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("배지 적용");
            obj.set_cssclass("sta_WF_title02");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar42","139","185","100","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("6");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static59","Calendar42:5","185","9","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("7");
            obj.set_text("~");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar43","Calendar42:19","185","100","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("8");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo44","140","35","140","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_innerdataset("ds_combo");
            obj.set_text("Combo00");
            this.Div00_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","Calendar43:10","185","109","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("9");
            obj.set_text("제한없음");
            this.Div00_00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","-1129","66","110","110",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("12");
            obj.set_text("image");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Div("Div00_01","20","695",null,"600","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_001","0","347",null,"240","0",null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Static("Static21_00_01","0","35",null,"32","0",null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("RS125485");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Static("Static21_00_00","0","66",null,"240","0",null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_01","0","316",null,"32","0",null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("RS125485");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Static("Static20_00","0","35","130","271",null,null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("1");
            obj.set_text("시리즈상품");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Static("Static21_00","129","35","130","32",null,null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("그룹ID");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","3",null,"30","0",null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("0");
            obj.set_text("R&D카테고리/속성 정보");
            obj.set_cssclass("sta_WF_title02");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Grid("Grid00","140","77",null,"218","11",null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("8");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"80\"/><Column size=\"250\"/><Column size=\"400\"/><Column size=\"60\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"상품 ID\"/><Cell col=\"2\" text=\"상품명\"/><Cell col=\"3\" text=\"규격\"/><Cell col=\"4\" text=\"주문단위\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Static("Static21_00_02","517","35","130","32",null,null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("그룹명");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00","646","35","260","31",null,null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L_tdt_txt");
            obj.set_text("스크류드바이알세트");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00_00","1035","35",null,"31","1",null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L_tdt_txt");
            obj.set_text("2021-05-26 09:14:57");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_00","905","35","130","32",null,null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("그룹생성일");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Static("Static21_00_03","129","316","130","32",null,null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("그룹ID");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_01","517","316","130","32",null,null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("그룹명");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00_01","647","316","260","31",null,null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box02L_tdt_txt");
            obj.set_text("스크류드바이알세트");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_00_00_00","1034","316",null,"32","0",null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("2021-05-26 09:14:57");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_00_00","905","316","130","32",null,null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("그룹생성일");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Static("Static20_001","0","316","130","271",null,null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("9");
            obj.set_text("연관상품");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Grid("Grid001","140","358",null,"218","11",null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("16");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"80\"/><Column size=\"250\"/><Column size=\"400\"/><Column size=\"60\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"상품 ID\"/><Cell col=\"2\" text=\"상품명\"/><Cell col=\"3\" text=\"규격\"/><Cell col=\"4\" text=\"주문단위\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Div("Div_prd_imgbox","20","1303",null,"450","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("image box");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","1",null,"30","0",null,null,null,null,null,this.Div_prd_imgbox.form);
            obj.set_taborder("0");
            obj.set_text("이미지 정보");
            obj.set_cssclass("sta_WF_title02");
            this.Div_prd_imgbox.addChild(obj.name, obj);

            obj = new Static("Static20_001","0","32","100.00%","410",null,null,null,null,null,null,this.Div_prd_imgbox.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_image_bg");
            obj.set_text("");
            this.Div_prd_imgbox.addChild(obj.name, obj);

            obj = new Div("img_box01","42","52","170","225",null,null,null,null,null,null,this.Div_prd_imgbox.form);
            obj.set_taborder("2");
            obj.set_text("imgBox");
            this.Div_prd_imgbox.addChild(obj.name, obj);

            obj = new Static("Static00","0","-1","100.00%","20",null,null,null,null,null,null,this.Div_prd_imgbox.form.img_box01.form);
            obj.set_taborder("0");
            obj.set_text("상품이미지");
            obj.set_textAlign("center");
            this.Div_prd_imgbox.form.img_box01.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","0","27","170","170",null,null,null,null,null,null,this.Div_prd_imgbox.form.img_box01.form);
            obj.set_taborder("1");
            obj.set_cssclass("productImage");
            obj.set_text("");
            this.Div_prd_imgbox.form.img_box01.addChild(obj.name, obj);

            obj = new Button("btn_image_add","0","201","144","24",null,null,null,null,null,null,this.Div_prd_imgbox.form.img_box01.form);
            obj.set_taborder("2");
            obj.set_text("이미지 등록");
            this.Div_prd_imgbox.form.img_box01.addChild(obj.name, obj);

            obj = new Button("btn_image_add00","146","201","24","24",null,null,null,null,null,null,this.Div_prd_imgbox.form.img_box01.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_close_small_red");
            this.Div_prd_imgbox.form.img_box01.addChild(obj.name, obj);

            obj = new Div("img_box01_00","282","52","170","225",null,null,null,null,null,null,this.Div_prd_imgbox.form);
            obj.set_taborder("3");
            obj.set_text("imgBox");
            this.Div_prd_imgbox.addChild(obj.name, obj);

            obj = new Static("Static00","0","-1","100.00%","20",null,null,null,null,null,null,this.Div_prd_imgbox.form.img_box01_00.form);
            obj.set_taborder("0");
            obj.set_text("상품이미지");
            obj.set_textAlign("center");
            this.Div_prd_imgbox.form.img_box01_00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","0","27","170","170",null,null,null,null,null,null,this.Div_prd_imgbox.form.img_box01_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("productImage");
            this.Div_prd_imgbox.form.img_box01_00.addChild(obj.name, obj);

            obj = new Button("btn_image_add","0","201","144","24",null,null,null,null,null,null,this.Div_prd_imgbox.form.img_box01_00.form);
            obj.set_taborder("2");
            obj.set_text("이미지 등록");
            this.Div_prd_imgbox.form.img_box01_00.addChild(obj.name, obj);

            obj = new Button("btn_image_add00","146","201","24","24",null,null,null,null,null,null,this.Div_prd_imgbox.form.img_box01_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_close_small_red");
            this.Div_prd_imgbox.form.img_box01_00.addChild(obj.name, obj);

            obj = new Div("img_box01_00_00","522","52","170","225",null,null,null,null,null,null,this.Div_prd_imgbox.form);
            obj.set_taborder("4");
            obj.set_text("imgBox");
            this.Div_prd_imgbox.addChild(obj.name, obj);

            obj = new Static("Static00","0","-1","100.00%","20",null,null,null,null,null,null,this.Div_prd_imgbox.form.img_box01_00_00.form);
            obj.set_taborder("0");
            obj.set_text("상품이미지");
            obj.set_textAlign("center");
            this.Div_prd_imgbox.form.img_box01_00_00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","0","27","170","170",null,null,null,null,null,null,this.Div_prd_imgbox.form.img_box01_00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("productImage");
            this.Div_prd_imgbox.form.img_box01_00_00.addChild(obj.name, obj);

            obj = new Button("btn_image_add","0","201","144","24",null,null,null,null,null,null,this.Div_prd_imgbox.form.img_box01_00_00.form);
            obj.set_taborder("2");
            obj.set_text("이미지 등록");
            this.Div_prd_imgbox.form.img_box01_00_00.addChild(obj.name, obj);

            obj = new Button("btn_image_add00","146","201","24","24",null,null,null,null,null,null,this.Div_prd_imgbox.form.img_box01_00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_close_small_red");
            this.Div_prd_imgbox.form.img_box01_00_00.addChild(obj.name, obj);

            obj = new Div("img_box01_00_00_00","762","52","170","225",null,null,null,null,null,null,this.Div_prd_imgbox.form);
            obj.set_taborder("5");
            obj.set_text("imgBox");
            this.Div_prd_imgbox.addChild(obj.name, obj);

            obj = new Static("Static00","0","-1","100.00%","20",null,null,null,null,null,null,this.Div_prd_imgbox.form.img_box01_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("상품이미지");
            obj.set_textAlign("center");
            this.Div_prd_imgbox.form.img_box01_00_00_00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","0","27","170","170",null,null,null,null,null,null,this.Div_prd_imgbox.form.img_box01_00_00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("productImage");
            this.Div_prd_imgbox.form.img_box01_00_00_00.addChild(obj.name, obj);

            obj = new Button("btn_image_add","0","201","144","24",null,null,null,null,null,null,this.Div_prd_imgbox.form.img_box01_00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("이미지 등록");
            this.Div_prd_imgbox.form.img_box01_00_00_00.addChild(obj.name, obj);

            obj = new Button("btn_image_add00","-1121","201","24","24",null,null,null,null,null,null,this.Div_prd_imgbox.form.img_box01_00_00_00.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_close_small_red");
            this.Div_prd_imgbox.form.img_box01_00_00_00.addChild(obj.name, obj);

            obj = new Button("btn_image_add00_00","146","201","24","24",null,null,null,null,null,null,this.Div_prd_imgbox.form.img_box01_00_00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_close_small_red");
            this.Div_prd_imgbox.form.img_box01_00_00_00.addChild(obj.name, obj);

            obj = new Div("img_box01_00_00_00_00","1072","52","170","225",null,null,null,null,null,null,this.Div_prd_imgbox.form);
            obj.set_taborder("6");
            obj.set_text("imgBox");
            this.Div_prd_imgbox.addChild(obj.name, obj);

            obj = new Static("Static00","0","-1","90.00%","20",null,null,null,null,null,null,this.Div_prd_imgbox.form.img_box01_00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("상세이미지");
            obj.set_textAlign("center");
            this.Div_prd_imgbox.form.img_box01_00_00_00_00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","0","27","170","170",null,null,null,null,null,null,this.Div_prd_imgbox.form.img_box01_00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("productImage");
            this.Div_prd_imgbox.form.img_box01_00_00_00_00.addChild(obj.name, obj);

            obj = new Button("btn_image_add","0","201","144","24",null,null,null,null,null,null,this.Div_prd_imgbox.form.img_box01_00_00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("이미지 등록");
            this.Div_prd_imgbox.form.img_box01_00_00_00_00.addChild(obj.name, obj);

            obj = new Button("btn_image_add00","146","201","24","24",null,null,null,null,null,null,this.Div_prd_imgbox.form.img_box01_00_00_00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_close_small_red");
            this.Div_prd_imgbox.form.img_box01_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00","42","301","600","117",null,null,null,null,null,null,this.Div_prd_imgbox.form);
            obj.set_taborder("7");
            obj.set_text("- 상품이미지 최소 사이즈 (1000px * 1000px)\r\n- 상품이미지 등록 시 PC와 Mobile에 상세, 목록, 축소 이미지에 자동 리사이징이 적용됩니다.\r\n- 비율이 맞지 않는 이미지를 등록하면, 이미지가 일부 잘리거나 왜곡될 수 있습니다.\r\n- 등록 가능 이미지: 용량 1M 이하 / 확장자: gif, png. jpg(jpeg)\r\n- 새로운 이미지를 등록할 경우 기존에 등록된 이미지는 자동 삭제됩니다.");
            obj.set_cssclass("sta_WF_help_list");
            this.Div_prd_imgbox.addChild(obj.name, obj);

            obj = new Div("Div_prd_imgbox00","20","1768",null,"360","19",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("image box");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","-1","300","30",null,null,null,null,null,null,this.Div_prd_imgbox00.form);
            obj.set_taborder("0");
            obj.set_text("구매 정보");
            obj.set_cssclass("sta_WF_title02");
            this.Div_prd_imgbox00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","30","100%","330",null,null,null,null,null,null,this.Div_prd_imgbox00.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"350\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"선택\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"협력사\"/><Cell col=\"3\" text=\"매입가\"/><Cell col=\"4\" text=\"최소발주수량\"/><Cell col=\"5\" text=\"배송비\"/><Cell col=\"6\" text=\"배송L/T\"/><Cell col=\"7\" text=\"공급가능\"/><Cell col=\"8\" text=\"가격유효기간\"/><Cell col=\"9\" text=\"KC인증대상\"/><Cell col=\"10\" text=\"MSDS\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/></Band></Format></Formats>");
            this.Div_prd_imgbox00.addChild(obj.name, obj);

            obj = new Div("Div00_01_00","20","2149",null,"67","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_01","0","32",null,"32","0",null,null,null,null,null,this.Div00_01_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("(19045)이상품");
            this.Div00_01_00.addChild(obj.name, obj);

            obj = new Static("Static21_00","1","32","170","32",null,null,null,null,null,null,this.Div00_01_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("상품정보담당자");
            this.Div00_01_00.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","1","300","30",null,null,null,null,null,null,this.Div00_01_00.form);
            obj.set_taborder("0");
            obj.set_text("담당자 정보");
            obj.set_cssclass("sta_WF_title02");
            this.Div00_01_00.addChild(obj.name, obj);

            obj = new Static("Static21_00_02","650","32","170","32",null,null,null,null,null,null,this.Div00_01_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("구매담당자");
            this.Div00_01_00.addChild(obj.name, obj);

            obj = new Static("Static29_00_00","170","32","469","31",null,null,null,null,null,null,this.Div00_01_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L_txt");
            obj.set_text("0000000000");
            this.Div00_01_00.addChild(obj.name, obj);

            obj = new Static("Static29_00_00_00","819","32",null,"31","10",null,null,null,null,null,this.Div00_01_00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L_txt");
            obj.set_text("0000000000");
            this.Div00_01_00.addChild(obj.name, obj);

            obj = new Div("Div00_01_00_00","20","2235",null,"190","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_01_00_00_00","0","155",null,"32","0",null,null,null,null,null,this.Div00_01_00_00.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00_01_00_00.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_01_00_00","0","124",null,"32","0",null,null,null,null,null,this.Div00_01_00_00.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00_01_00_00.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_01_00","0","93",null,"32","0",null,null,null,null,null,this.Div00_01_00_00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00_01_00_00.addChild(obj.name, obj);

            obj = new Static("Static21_00_01_01","0","62",null,"32","0",null,null,null,null,null,this.Div00_01_00_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00_01_00_00.addChild(obj.name, obj);

            obj = new Static("Static21_00_01","0","31",null,"32","0",null,null,null,null,null,this.Div00_01_00_00.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00_01_00_00.addChild(obj.name, obj);

            obj = new Static("Static21_00","1","31","170","32",null,null,null,null,null,null,this.Div00_01_00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("LOC");
            this.Div00_01_00_00.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0",null,"30","0",null,null,null,null,null,this.Div00_01_00_00.form);
            obj.set_taborder("0");
            obj.set_text("파일 첨부");
            obj.set_cssclass("sta_WF_title02");
            this.Div00_01_00_00.addChild(obj.name, obj);

            obj = new Static("Static21_00_02","650","31","170","32",null,null,null,null,null,null,this.Div00_01_00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("비공개물질확인서");
            this.Div00_01_00_00.addChild(obj.name, obj);

            obj = new Static("Static21_00_00","1","62","170","32",null,null,null,null,null,null,this.Div00_01_00_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("COA");
            this.Div00_01_00_00.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_00","650","62","170","32",null,null,null,null,null,null,this.Div00_01_00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("비공개물질체크시트");
            this.Div00_01_00_00.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_00_00","650","93","170","32",null,null,null,null,null,null,this.Div00_01_00_00.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("등록결정통지서");
            this.Div00_01_00_00.addChild(obj.name, obj);

            obj = new Static("Static21_00_00_00","1","93","170","32",null,null,null,null,null,null,this.Div00_01_00_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("화학물질확인명세서");
            this.Div00_01_00_00.addChild(obj.name, obj);

            obj = new Static("Static21_00_02_00_00_00","650","124","170","32",null,null,null,null,null,null,this.Div00_01_00_00.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("신규/등록대상물질 정보시트");
            this.Div00_01_00_00.addChild(obj.name, obj);

            obj = new Static("Static21_00_00_00_00","1","124","170","32",null,null,null,null,null,null,this.Div00_01_00_00.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("등록결과(면제확인)통지서");
            this.Div00_01_00_00.addChild(obj.name, obj);

            obj = new Static("Static21_00_00_00_00_00","1","155","170","32",null,null,null,null,null,null,this.Div00_01_00_00.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("시약정보요약서");
            this.Div00_01_00_00.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload00","181","35","459","24",null,null,null,null,null,null,this.Div00_01_00_00.form);
            obj.set_taborder("2");
            obj.set_itemheight("24");
            obj.set_multiselect("false");
            obj.set_buttontext("파일선택");
            obj.set_buttonsize("70");
            this.Div00_01_00_00.addChild(obj.name, obj);

            obj = new Static("Static00","820","35",null,"24","46",null,null,null,null,null,this.Div00_01_00_00.form);
            obj.set_taborder("4");
            obj.set_text("COA파일이름.pdf");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.Div00_01_00_00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"35","24","24","11",null,null,null,null,null,this.Div00_01_00_00.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_close_small");
            this.Div00_01_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","170","66",null,"24","696",null,null,null,null,null,this.Div00_01_00_00.form);
            obj.set_taborder("6");
            obj.set_text("COA파일이름.pdf");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.Div00_01_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00","616","66","24","24",null,null,null,null,null,null,this.Div00_01_00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_close_small");
            this.Div00_01_00_00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","181","97","459","24",null,null,null,null,null,null,this.Div00_01_00_00.form);
            obj.set_taborder("11");
            this.Div00_01_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","170","159",null,"24","10",null,null,null,null,null,this.Div00_01_00_00.form);
            obj.set_taborder("18");
            obj.set_text("시약정보2_염산 (Hydrogen chloride) 7647-01-0.xlx");
            obj.set_cssclass("sta_cm_box02L_txt");
            this.Div00_01_00_00.addChild(obj.name, obj);

            obj = new Button("btn_image_add01_00","830","97","86","24",null,null,null,null,null,null,this.Div00_01_00_00.form);
            obj.set_taborder("22");
            obj.set_text("표준상품명등");
            this.Div00_01_00_00.addChild(obj.name, obj);

            obj = new Button("btn_image_add01_00_00","btn_image_add01_00:4","97","95","24",null,null,null,null,null,null,this.Div00_01_00_00.form);
            obj.set_taborder("23");
            obj.set_text("표준상품명등록");
            this.Div00_01_00_00.addChild(obj.name, obj);

            obj = new Button("btn_image_add01_00_00_00","btn_image_add01_00_00:4","97","107","24",null,null,null,null,null,null,this.Div00_01_00_00.form);
            obj.set_taborder("24");
            obj.set_text("취급불가상품목록");
            this.Div00_01_00_00.addChild(obj.name, obj);

            obj = new Button("btn_image_add01_00_00_00_00","btn_image_add01_00_00_00:4","97","122","24",null,null,null,null,null,null,this.Div00_01_00_00.form);
            obj.set_taborder("25");
            obj.set_text("단계별 상세상품정보");
            this.Div00_01_00_00.addChild(obj.name, obj);

            obj = new Tab("Tab00","20","2452",null,"200","20",null,null,null,"200","3000",this);
            obj.set_taborder("8");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_WF_basic");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("가격정보");
            this.Tab00.addChild(obj.name, obj);

            obj = new Button("Button00","832","47","124","84",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("Button00");
            obj.set_enable("false");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("화학물질정보");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("상품인증정보");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Tab00);
            obj.set_text("상품인증정보");
            this.Tab00.addChild(obj.name, obj);

            obj = new Button("Button00","45%","2682","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("목록");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","Button00:4","2682","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_00_01_00_00_00_00_01",null,"1556","2","24","1128",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","20","0","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("20");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","20","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("20");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_00","21","52","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00","102","52","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01","150","21","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_02","161","56","10","22",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("24");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_02_01_01","240","114","4","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("4");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_02_01","294","114","4","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("4");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_02","322","114","5","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("5");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_02_00","332","114","5","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("5");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_02_01_00","387","114","4","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("4");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00","669","114","20","3",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("3");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_00","669","141","20","3",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("3");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01","710","114","4","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("4");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_00","844","114","4","30",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("4");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_00_01","139","238","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_00_01_00",null,"300","30","30","1220",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00",null,"343","30","10","1220",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_00_01",null,"354","30","30","1187",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_00_00_00",null,"385","30","30","1187",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01_01_01","1222","21","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("10");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01",null,"20","20","20","0",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("20");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_02",null,"416","30","10","1030",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_00",null,"427","30","30","1105",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("31");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_00_00",null,"457","30","30","1105",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("31");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_02_00",null,"665","30","10","1030",null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_00_01_00_00",null,"676","30","30","1220",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_01",null,"720","30","10","1220",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_00_01_00_00_00",null,"1282","30","30","1220",null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_01_00",null,"1325","30","10","1220",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_00_01_00_00_00_02",null,"1336","30","23","1180",null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("23");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_01_00_01",null,"1370","30","12","1180",null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("12");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_00_01_00_00_00_01",null,"1382","42","30","1274",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("42");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_00_01_00_00_00_01_00",null,"1382","70","30","1034",null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("70");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_00_01_00_00_00_01_00_00",null,"1382","70","30","794",null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("70");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_00_01_00_00_00_01_00_00_00",null,"1382","70","30","554",null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("70");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_00_01_00_00_00_01_00_00_00_00",null,"1382","140","30","244",null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("140");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_00_01_00_00_00_01_00_00_00_00_00",null,"1382","54","30","20",null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("54");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_00_01_00_00_00_00_01_00_00",null,"1580","30","30","1168",null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_00_01_00_00_00_00_01_00",null,"1552","30","4","1168",null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_00_01_00_00_00_00_02",null,"1715","30","30","1168",null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_00_01_00_00_00_00",null,"1745","30","30","1220",null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_01_00_00",null,"1788","30","10","1220",null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_00_01_00_00_00_00_00",null,"2128","30","30","1220",null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_01_00_00_00",null,"2171","30","10","1220",null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_00_01_00_00_00_00_00_00",null,"2213","30","30","1220",null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_01_00_00_00_00",null,"2256","30","10","1220",null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_00_01_00_00_00_00_00_00_00",null,"2422","30","30","1220",null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_00_01_00_00_00_00_00_00_00_00",null,"2330","10","30","486",null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_00_01_00_00_00_00_00_00_00_00_00",null,"2330","4","30","396",null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_00_01_00_00_00_00_00_00_00_00_01",null,"2267","10","30","21",null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_00_00",null,"2652","30","30","601",null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_00",null,"2682","30","30","561",null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_00_01",null,"2712","30","50","601",null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00_00_01_00_00_01_01",null,"384","20","20","656",null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("20");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_01_01","1349","0","450",null,null,"1707",null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static63","0","0",null,"21","0",null,null,null,null,null,this.Div00_01_01.form);
            obj.set_taborder("0");
            obj.set_text("< 변경이력 >");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_font("bold 12px/normal \"Malgun Gothic\",\"맑은고딕\",\"Apple SD Gothic Neo\",\"dotum\",\"돋움\",\"arial\",\"sans-serif\"");
            obj.set_textAlign("center");
            this.Div00_01_01.addChild(obj.name, obj);

            obj = new Static("Static63_00","0","30",null,"21","0",null,null,null,null,null,this.Div00_01_01.form);
            obj.set_taborder("1");
            obj.set_text("220308   변경이력 작성");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_font("12px/normal \"Malgun Gothic\",\"맑은고딕\",\"Apple SD Gothic Neo\",\"dotum\",\"돋움\",\"arial\",\"sans-serif\"");
            this.Div00_01_01.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","Button00:161","2682","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("select 버튼 disable");
            obj.set_cssclass("btn_WF_select");
            obj.set_enable("false");
            obj.set_enableevent("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,2762,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("guideProductDetail.xfdl", function() {

        this.Div_top_info_Static02_onclick = function(obj,e)
        {

        };

        this.Div_top_info_Edit06_onchanged = function(obj,e)
        {

        };

        this.Div_top_info_Static29_00_00_onclick = function(obj,e)
        {

        };

        this.Div_prd_imgbox_img_box01_ImageViewer00_onclick = function(obj,e)
        {

        };

        this.Div_prd_imgbox_Static00_onclick = function(obj,e)
        {

        };

        this.Div_top_info_Radio00_00_onitemchanged = function(obj,e)
        {

        };

        this.Div_top_info_Radio00_onitemchanged = function(obj,e)
        {

        };

        this.Div00_Edit37_onchanged = function(obj,e)
        {

        };

        this.Div00_01_00_00_FileUpload00_onitemchanged = function(obj,e)
        {

        };

        this.Div_top_info_Edit01_onchanged = function(obj,e)
        {

        };

        this.Tab00_onchanged = function(obj,e)
        {

        };

        this.Div_top_info_btn_image_add01_00_onclick = function(obj,e)
        {

        };

        this.Button00_00_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div_top_info.form.Static02.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.Div_top_info.form.Radio00.addEventHandler("onitemchanged",this.Div_top_info_Radio00_onitemchanged,this);
            this.Div_top_info.form.Edit01.addEventHandler("onchanged",this.Div_top_info_Edit01_onchanged,this);
            this.Div_top_info.form.Edit06.addEventHandler("onchanged",this.Div_top_info_Edit06_onchanged,this);
            this.Div_top_info.form.Static29_00_00.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.Div00.form.Edit37.addEventHandler("onchanged",this.Div00_Edit37_onchanged,this);
            this.Div_prd_imgbox.form.img_box01.form.ImageViewer00.addEventHandler("onclick",this.Div_prd_imgbox_img_box01_ImageViewer00_onclick,this);
            this.Div_prd_imgbox.form.Static00.addEventHandler("onclick",this.Div_prd_imgbox_Static00_onclick,this);
            this.Div00_01_00.form.Static29_00_00.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.Div00_01_00.form.Static29_00_00_00.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.Div00_01_00_00.form.Static21_00_01_01.addEventHandler("onclick",this.Div00_01_00_00_Static21_00_01_01_onclick,this);
            this.Div00_01_00_00.form.FileUpload00.addEventHandler("onitemchanged",this.Div00_01_00_00_FileUpload00_onitemchanged,this);
            this.Div00_01_00_00.form.btn_image_add01_00.addEventHandler("onclick",this.Div_top_info_btn_image_add01_00_onclick,this);
            this.Div00_01_00_00.form.btn_image_add01_00_00.addEventHandler("onclick",this.Div_top_info_btn_image_add01_00_onclick,this);
            this.Div00_01_00_00.form.btn_image_add01_00_00_00.addEventHandler("onclick",this.Div_top_info_btn_image_add01_00_onclick,this);
            this.Div00_01_00_00.form.btn_image_add01_00_00_00_00.addEventHandler("onclick",this.Div_top_info_btn_image_add01_00_onclick,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.Div00_01_01.form.Static63_00.addEventHandler("onclick",this.Div00_Static63_00_onclick,this);
            this.Button00_00_00.addEventHandler("onclick",this.Button00_00_00_onclick,this);
        };
        this.loadIncludeScript("guideProductDetail.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
