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
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MNU_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MNU_LVL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PGM_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"THME_DOMN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MDL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PGM_PATH\" type=\"STRING\" size=\"32\"/><Column id=\"MNU_LVL_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"HRNK_MNU_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_CALL_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"MNU_TP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"HGST_MNU_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"RMKS_CTS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MNU_SEQ\">1</Col><Col id=\"MNU_LVL\">1</Col><Col id=\"SRT_SO\">1</Col><Col id=\"MNU_NM\">상품관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1000000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">0</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col><Col id=\"PRODUCT_ID\">5218376</Col></Row><Row><Col id=\"MNU_SEQ\">2</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">2</Col><Col id=\"MNU_NM\">상품등록</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1001000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">1</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col><Col id=\"PRODUCT_ID\">5218376</Col></Row><Row><Col id=\"MNU_SEQ\">3</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">3</Col><Col id=\"MNU_NM\">신규상품요청처리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1001010000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">2</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">4</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">4</Col><Col id=\"MNU_NM\">상품추가</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1001020000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">2</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">5</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">5</Col><Col id=\"MNU_NM\">등록상품관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1002000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">1</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">6</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">6</Col><Col id=\"MNU_NM\">상품조회</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1002010000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">5</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">7</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">7</Col><Col id=\"MNU_NM\">시리즈그룹상품관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1002020000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">5</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">101</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">8</Col><Col id=\"PGM_TP_CD\">10</Col><Col id=\"THME_DOMN_CD\">CO</Col><Col id=\"MDL_NM\">CoMenuController.java</Col><Col id=\"MNU_NM\">제조원명관리</Col><Col id=\"PGM_PATH\">CO::coMnuAuthGrpMng.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">1002030000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">5</Col><Col id=\"PGM_ID\">SSP_BO_YA_02</Col><Col id=\"UI_ID\">coMnuAuthGrpMng.xfdl</Col><Col id=\"PGM_NM\">메뉴권한그룹관리</Col><Col id=\"PGM_CALL_PATH\">/co/Menu/selectMnuMngList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col><Col id=\"RMKS_CTS\">비고비고비고비고비고비고비고비고비고</Col></Row><Row><Col id=\"MNU_SEQ\">455</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">9</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">PR</Col><Col id=\"MDL_NM\">PrProductNoticeController</Col><Col id=\"MNU_NM\">상품고시정보관리</Col><Col id=\"PGM_PATH\">PR::SSP_BO_MF_28.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">1002040000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">5</Col><Col id=\"PGM_ID\">SSP_BO_MF_28</Col><Col id=\"UI_ID\">SSP_BO_MF_28.xfdl</Col><Col id=\"PGM_NM\">상품고시정보관리</Col><Col id=\"PGM_CALL_PATH\">/bo/pr/prdNtc/selectProductNoticeList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">8</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">10</Col><Col id=\"MNU_NM\">전시상품관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1003000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">1</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">9</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">11</Col><Col id=\"MNU_NM\">전시상품관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1003010000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">8</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">10</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">12</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">PR</Col><Col id=\"MDL_NM\">PrPropertyController</Col><Col id=\"MNU_NM\">견적요청관리</Col><Col id=\"PGM_PATH\">PR::SSP_BO_PA_17.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">1003020000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">8</Col><Col id=\"PGM_ID\">SSP_BO_PA_17</Col><Col id=\"UI_ID\">SSP_BO_PA_17.xfdl</Col><Col id=\"PGM_NM\">SSP속성 목록</Col><Col id=\"PGM_CALL_PATH\">/bo/pr/prd/selectPropertyList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">12</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">13</Col><Col id=\"MNU_NM\">카테고리/속성관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1004010000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">1</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">13</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">14</Col><Col id=\"MNU_NM\">카테고리관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1004020000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">12</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">457</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">15</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">PR</Col><Col id=\"MDL_NM\">PrPropertyController</Col><Col id=\"MNU_NM\">속성관리</Col><Col id=\"PGM_PATH\">PR::SSP_BO_PA_17.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">1004030000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">12</Col><Col id=\"PGM_ID\">SSP_BO_PA_17</Col><Col id=\"UI_ID\">SSP_BO_PA_17.xfdl</Col><Col id=\"PGM_NM\">SSP속성 목록</Col><Col id=\"PGM_CALL_PATH\">/bo/pr/prd/selectPropertyList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">460</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">16</Col><Col id=\"MNU_NM\">담당자관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1005000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">1</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">461</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">17</Col><Col id=\"MNU_NM\">상품담당자관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1005010000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">460</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">462</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">18</Col><Col id=\"MNU_NM\">MD담당자관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1005020000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">460</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">237</Col><Col id=\"MNU_LVL\">1</Col><Col id=\"SRT_SO\">19</Col><Col id=\"MNU_NM\">고객관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">5000000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">0</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">503</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">20</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">CC</Col><Col id=\"MDL_NM\">CustIddtController</Col><Col id=\"MNU_NM\">산업군조회</Col><Col id=\"PGM_PATH\">CC::SSP_BO_MA_52.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">5001000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">237</Col><Col id=\"PGM_ID\">SSP_BO_MA_52</Col><Col id=\"UI_ID\">SSP_BO_MA_52.xfdl</Col><Col id=\"PGM_NM\">산업군조회</Col><Col id=\"PGM_CALL_PATH\">/bo/cust/iddt/ssp_bo_ma_52.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">397</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">21</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">CC</Col><Col id=\"MDL_NM\">CustBgtController</Col><Col id=\"MNU_NM\">예산목록조회</Col><Col id=\"PGM_PATH\">CC::SSP_BO_MA_60.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">5003</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">237</Col><Col id=\"PGM_ID\">SSP_BO_MA_60</Col><Col id=\"UI_ID\">SSP_BO_MA_60.xfdl</Col><Col id=\"PGM_NM\">예산 목록 조회</Col><Col id=\"PGM_CALL_PATH\">/bo/cust/bgt/ssp_bo_ma_60.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">283</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">22</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">CC</Col><Col id=\"MDL_NM\">CustGradeController</Col><Col id=\"MNU_NM\">고객등급관리</Col><Col id=\"PGM_PATH\">CC::SSP_BO_MA_03.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">5003000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">237</Col><Col id=\"PGM_ID\">SSP_BO_MA_03</Col><Col id=\"UI_ID\">SSP_BO_MA_03.xfdl</Col><Col id=\"PGM_NM\">고객등급관리</Col><Col id=\"PGM_CALL_PATH\">/bo/cust/mbr/ssp_bo_ma_03.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">315</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">23</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">CC</Col><Col id=\"MDL_NM\">CustOprunitController</Col><Col id=\"MNU_NM\">운영단위조회</Col><Col id=\"PGM_PATH\">CC::SSP_BO_MA_05.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">5004000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">237</Col><Col id=\"PGM_ID\">SSP_BO_MA_05</Col><Col id=\"UI_ID\">SSP_BO_MA_05.xfdl</Col><Col id=\"PGM_NM\">운영단위조회</Col><Col id=\"PGM_CALL_PATH\">/bo/cust/oprunit/ssp_bo_ma_05.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">284</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">24</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">CC</Col><Col id=\"MDL_NM\">CustDeptController</Col><Col id=\"MNU_NM\">부서조회</Col><Col id=\"PGM_PATH\">CC::SSP_BO_MA_07.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">5005000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">237</Col><Col id=\"PGM_ID\">SSP_BO_MA_07</Col><Col id=\"UI_ID\">SSP_BO_MA_07.xfdl</Col><Col id=\"PGM_NM\">부서조회</Col><Col id=\"PGM_CALL_PATH\">/bo/cust/dept/ssp_bo_ma_07.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">238</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">25</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">CC</Col><Col id=\"MDL_NM\">CustMbrController</Col><Col id=\"MNU_NM\">회원관리</Col><Col id=\"PGM_PATH\">CC::ssp_bo_ma_12.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">5006000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">237</Col><Col id=\"PGM_ID\">SSP_BO_MA_12</Col><Col id=\"UI_ID\">ssp_bo_ma_12.xfdl</Col><Col id=\"PGM_NM\">회원목록</Col><Col id=\"PGM_CALL_PATH\">/bo/cust/mbr/ssp_bo_ma_12.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">326</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">26</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">CC</Col><Col id=\"MDL_NM\">CustDvlplcController</Col><Col id=\"MNU_NM\">배송지관리</Col><Col id=\"PGM_PATH\">CC::SSP_BO_MA_20.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">5007000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">237</Col><Col id=\"PGM_ID\">SSP_BO_MA_20</Col><Col id=\"UI_ID\">SSP_BO_MA_20.xfdl</Col><Col id=\"PGM_NM\">배송지관리 목록</Col><Col id=\"PGM_CALL_PATH\">/bo/cust/dvlplc/ssp_bo_ma_20.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">389</Col><Col id=\"MNU_LVL\">1</Col><Col id=\"SRT_SO\">27</Col><Col id=\"MNU_NM\">SSP가격/진열관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">8000000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">0</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">390</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">28</Col><Col id=\"MNU_NM\">사업장별 가격조회</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">8001000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">389</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">391</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">29</Col><Col id=\"MNU_NM\">가격기준정보관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">8005000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">389</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">392</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">30</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">PC</Col><Col id=\"MDL_NM\">PcDetrInfoController</Col><Col id=\"MNU_NM\">절사관리</Col><Col id=\"PGM_PATH\">PC::SSP_BO_CA_50.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">800500100</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">391</Col><Col id=\"PGM_ID\">SSP_BO_CA_50</Col><Col id=\"UI_ID\">SSP_BO_CA_50.xfdl</Col><Col id=\"PGM_NM\">절사관리</Col><Col id=\"PGM_CALL_PATH\">/pc/detrInfo/selectDetrInfoList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">417</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">31</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">PC</Col><Col id=\"MDL_NM\">PcPlnPrfrtController</Col><Col id=\"MNU_NM\">카테고리계획매익률</Col><Col id=\"PGM_PATH\">PC::SSP_BO_CA_51.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">800500200</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">391</Col><Col id=\"PGM_ID\">SSP_BO_CA_51</Col><Col id=\"UI_ID\">SSP_BO_CA_51.xfdl</Col><Col id=\"PGM_NM\">카테고리계획매익율</Col><Col id=\"PGM_CALL_PATH\">/pc/plnPrfrt/selectPlnPrfrtList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">14</Col><Col id=\"MNU_LVL\">1</Col><Col id=\"SRT_SO\">32</Col><Col id=\"MNU_NM\">Front관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9000000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">0</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">465</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">33</Col><Col id=\"MNU_NM\">고객센터관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9001000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">14</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">466</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">34</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">CO</Col><Col id=\"MDL_NM\">CoNoticeController</Col><Col id=\"MNU_NM\">공지사항관리</Col><Col id=\"PGM_PATH\">CO::SSP_BO_CN_01.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">9001010000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">465</Col><Col id=\"PGM_ID\">SSP_BO_CN_01</Col><Col id=\"UI_ID\">SSP_BO_CN_01.xfdl</Col><Col id=\"PGM_NM\">공지사항관리</Col><Col id=\"PGM_CALL_PATH\">/co/selectNoticeList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">467</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">35</Col><Col id=\"MNU_NM\">자주하는질문관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9001020000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">465</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">468</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">36</Col><Col id=\"MNU_NM\">약관관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9001030000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">465</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">20</Col><Col id=\"MNU_LVL\">1</Col><Col id=\"SRT_SO\">37</Col><Col id=\"MNU_NM\">시스템관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9100000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">0</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">21</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">38</Col><Col id=\"PGM_TP_CD\">10</Col><Col id=\"THME_DOMN_CD\">CO</Col><Col id=\"MDL_NM\">CoMenuController.java</Col><Col id=\"MNU_NM\">메뉴관리</Col><Col id=\"PGM_PATH\">CO::comMenuMng.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">9101000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"PGM_ID\">SSP_BO_YA_01</Col><Col id=\"UI_ID\">comMenuMng.xfdl</Col><Col id=\"PGM_NM\">메뉴관리</Col><Col id=\"PGM_CALL_PATH\">/co/Menu/selectMnuMngList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">22</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">39</Col><Col id=\"PGM_TP_CD\">10</Col><Col id=\"THME_DOMN_CD\">CO</Col><Col id=\"MDL_NM\">CoMenuController.java</Col><Col id=\"MNU_NM\">메뉴권한그룹관리</Col><Col id=\"PGM_PATH\">CO::coMnuAuthGrpMng.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">9102000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"PGM_ID\">SSP_BO_YA_02</Col><Col id=\"UI_ID\">coMnuAuthGrpMng.xfdl</Col><Col id=\"PGM_NM\">메뉴권한그룹관리</Col><Col id=\"PGM_CALL_PATH\">/co/Menu/selectMnuMngList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">23</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">40</Col><Col id=\"PGM_TP_CD\">10</Col><Col id=\"THME_DOMN_CD\">CO</Col><Col id=\"MDL_NM\">CoPgmMngController.java</Col><Col id=\"MNU_NM\">프로그램관리</Col><Col id=\"PGM_PATH\">CO::coPgmMng.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">9103000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"PGM_ID\">SSP_BO_YA_03</Col><Col id=\"UI_ID\">coPgmMng.xfdl</Col><Col id=\"PGM_NM\">프로그램관리</Col><Col id=\"PGM_CALL_PATH\">/co/pgm/selectPgmMngList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">24</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">41</Col><Col id=\"MNU_NM\">운영자 조회</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9104000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">469</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">42</Col><Col id=\"MNU_NM\">운영자이관등록</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9105000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">25</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">43</Col><Col id=\"MNU_NM\">운영자 조직 조회</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9106000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">470</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">44</Col><Col id=\"MNU_NM\">운영자권한그룹관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9107000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">26</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">45</Col><Col id=\"PGM_TP_CD\">10</Col><Col id=\"THME_DOMN_CD\">CO</Col><Col id=\"MDL_NM\">CoComCdMngController</Col><Col id=\"MNU_NM\">공통코드관리</Col><Col id=\"PGM_PATH\">CO::comCdMng.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">9108000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"PGM_ID\">SSP_BO_YA_06</Col><Col id=\"UI_ID\">comCdMng.xfdl</Col><Col id=\"PGM_NM\">공통코드관리</Col><Col id=\"PGM_CALL_PATH\">/co/com/comCdClsfSearchList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">471</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">46</Col><Col id=\"MNU_NM\">프론트프로그램그룹관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9109000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">472</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">47</Col><Col id=\"MNU_NM\">프론트프로그램관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9110000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">473</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">48</Col><Col id=\"MNU_NM\">프론트메뉴관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9111000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">474</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">49</Col><Col id=\"MNU_NM\">거래명세서관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9112000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">475</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">50</Col><Col id=\"MNU_NM\">로그인이력조회</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9113000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">216</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">51</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">CO</Col><Col id=\"MDL_NM\">CoCommonController</Col><Col id=\"MNU_NM\">에러로그조회</Col><Col id=\"PGM_PATH\">CO::errorLogList.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">9114000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"PGM_ID\">SSP_BP_YA_07</Col><Col id=\"UI_ID\">errorLogList.xfdl</Col><Col id=\"PGM_NM\">에러내용 조회</Col><Col id=\"PGM_CALL_PATH\">/co/selectExceptionInfoList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">476</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">52</Col><Col id=\"MNU_NM\">인터페이스 로그 조회</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9115000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">29</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">53</Col><Col id=\"MNU_NM\">sample</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9199000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">30</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">54</Col><Col id=\"PGM_TP_CD\">10</Col><Col id=\"THME_DOMN_CD\">CO</Col><Col id=\"MDL_NM\">CoMenuController.java</Col><Col id=\"MNU_NM\">sample1</Col><Col id=\"PGM_PATH\">CO::comMenuMng.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">9199010000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">29</Col><Col id=\"PGM_ID\">SSP_BO_YA_01</Col><Col id=\"UI_ID\">comMenuMng.xfdl</Col><Col id=\"PGM_NM\">메뉴관리</Col><Col id=\"PGM_CALL_PATH\">/co/Menu/selectMnuMngList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">31</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">55</Col><Col id=\"MNU_NM\">sample2</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9199020000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">29</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">205</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">56</Col><Col id=\"MNU_NM\">sample3</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9199030000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">29</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">Aa</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">Ba</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">Ca</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_menu00", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MNU_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MNU_LVL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PGM_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"THME_DOMN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MDL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PGM_PATH\" type=\"STRING\" size=\"32\"/><Column id=\"MNU_LVL_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"HRNK_MNU_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_CALL_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"MNU_TP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"HGST_MNU_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"RMKS_CTS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MNU_SEQ\">1</Col><Col id=\"MNU_LVL\">1</Col><Col id=\"SRT_SO\">1</Col><Col id=\"MNU_NM\">상품관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1000000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">0</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col><Col id=\"PRODUCT_ID\">5218376</Col></Row><Row><Col id=\"MNU_SEQ\">2</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">2</Col><Col id=\"MNU_NM\">상품등록</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1001000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">1</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col><Col id=\"PRODUCT_ID\">5218376</Col></Row><Row><Col id=\"MNU_SEQ\">3</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">3</Col><Col id=\"MNU_NM\">신규상품요청처리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1001010000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">2</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">4</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">4</Col><Col id=\"MNU_NM\">상품추가</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1001020000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">2</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">5</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">5</Col><Col id=\"MNU_NM\">등록상품관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1002000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">1</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">6</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">6</Col><Col id=\"MNU_NM\">상품조회</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1002010000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">5</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">7</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">7</Col><Col id=\"MNU_NM\">시리즈그룹상품관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1002020000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">5</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">101</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">8</Col><Col id=\"PGM_TP_CD\">10</Col><Col id=\"THME_DOMN_CD\">CO</Col><Col id=\"MDL_NM\">CoMenuController.java</Col><Col id=\"MNU_NM\">제조원명관리</Col><Col id=\"PGM_PATH\">CO::coMnuAuthGrpMng.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">1002030000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">5</Col><Col id=\"PGM_ID\">SSP_BO_YA_02</Col><Col id=\"UI_ID\">coMnuAuthGrpMng.xfdl</Col><Col id=\"PGM_NM\">메뉴권한그룹관리</Col><Col id=\"PGM_CALL_PATH\">/co/Menu/selectMnuMngList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col><Col id=\"RMKS_CTS\">비고비고비고비고비고비고비고비고비고</Col></Row><Row><Col id=\"MNU_SEQ\">455</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">9</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">PR</Col><Col id=\"MDL_NM\">PrProductNoticeController</Col><Col id=\"MNU_NM\">상품고시정보관리</Col><Col id=\"PGM_PATH\">PR::SSP_BO_MF_28.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">1002040000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">5</Col><Col id=\"PGM_ID\">SSP_BO_MF_28</Col><Col id=\"UI_ID\">SSP_BO_MF_28.xfdl</Col><Col id=\"PGM_NM\">상품고시정보관리</Col><Col id=\"PGM_CALL_PATH\">/bo/pr/prdNtc/selectProductNoticeList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">8</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">10</Col><Col id=\"MNU_NM\">전시상품관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1003000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">1</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">9</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">11</Col><Col id=\"MNU_NM\">전시상품관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1003010000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">8</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">10</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">12</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">PR</Col><Col id=\"MDL_NM\">PrPropertyController</Col><Col id=\"MNU_NM\">견적요청관리</Col><Col id=\"PGM_PATH\">PR::SSP_BO_PA_17.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">1003020000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">8</Col><Col id=\"PGM_ID\">SSP_BO_PA_17</Col><Col id=\"UI_ID\">SSP_BO_PA_17.xfdl</Col><Col id=\"PGM_NM\">SSP속성 목록</Col><Col id=\"PGM_CALL_PATH\">/bo/pr/prd/selectPropertyList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">12</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">13</Col><Col id=\"MNU_NM\">카테고리/속성관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1004010000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">1</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">13</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">14</Col><Col id=\"MNU_NM\">카테고리관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1004020000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">12</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">457</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">15</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">PR</Col><Col id=\"MDL_NM\">PrPropertyController</Col><Col id=\"MNU_NM\">속성관리</Col><Col id=\"PGM_PATH\">PR::SSP_BO_PA_17.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">1004030000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">12</Col><Col id=\"PGM_ID\">SSP_BO_PA_17</Col><Col id=\"UI_ID\">SSP_BO_PA_17.xfdl</Col><Col id=\"PGM_NM\">SSP속성 목록</Col><Col id=\"PGM_CALL_PATH\">/bo/pr/prd/selectPropertyList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">460</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">16</Col><Col id=\"MNU_NM\">담당자관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1005000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">1</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">461</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">17</Col><Col id=\"MNU_NM\">상품담당자관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1005010000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">460</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">462</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">18</Col><Col id=\"MNU_NM\">MD담당자관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1005020000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">460</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">237</Col><Col id=\"MNU_LVL\">1</Col><Col id=\"SRT_SO\">19</Col><Col id=\"MNU_NM\">고객관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">5000000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">0</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">503</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">20</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">CC</Col><Col id=\"MDL_NM\">CustIddtController</Col><Col id=\"MNU_NM\">산업군조회</Col><Col id=\"PGM_PATH\">CC::SSP_BO_MA_52.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">5001000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">237</Col><Col id=\"PGM_ID\">SSP_BO_MA_52</Col><Col id=\"UI_ID\">SSP_BO_MA_52.xfdl</Col><Col id=\"PGM_NM\">산업군조회</Col><Col id=\"PGM_CALL_PATH\">/bo/cust/iddt/ssp_bo_ma_52.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">397</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">21</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">CC</Col><Col id=\"MDL_NM\">CustBgtController</Col><Col id=\"MNU_NM\">예산목록조회</Col><Col id=\"PGM_PATH\">CC::SSP_BO_MA_60.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">5003</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">237</Col><Col id=\"PGM_ID\">SSP_BO_MA_60</Col><Col id=\"UI_ID\">SSP_BO_MA_60.xfdl</Col><Col id=\"PGM_NM\">예산 목록 조회</Col><Col id=\"PGM_CALL_PATH\">/bo/cust/bgt/ssp_bo_ma_60.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">283</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">22</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">CC</Col><Col id=\"MDL_NM\">CustGradeController</Col><Col id=\"MNU_NM\">고객등급관리</Col><Col id=\"PGM_PATH\">CC::SSP_BO_MA_03.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">5003000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">237</Col><Col id=\"PGM_ID\">SSP_BO_MA_03</Col><Col id=\"UI_ID\">SSP_BO_MA_03.xfdl</Col><Col id=\"PGM_NM\">고객등급관리</Col><Col id=\"PGM_CALL_PATH\">/bo/cust/mbr/ssp_bo_ma_03.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">315</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">23</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">CC</Col><Col id=\"MDL_NM\">CustOprunitController</Col><Col id=\"MNU_NM\">운영단위조회</Col><Col id=\"PGM_PATH\">CC::SSP_BO_MA_05.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">5004000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">237</Col><Col id=\"PGM_ID\">SSP_BO_MA_05</Col><Col id=\"UI_ID\">SSP_BO_MA_05.xfdl</Col><Col id=\"PGM_NM\">운영단위조회</Col><Col id=\"PGM_CALL_PATH\">/bo/cust/oprunit/ssp_bo_ma_05.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">284</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">24</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">CC</Col><Col id=\"MDL_NM\">CustDeptController</Col><Col id=\"MNU_NM\">부서조회</Col><Col id=\"PGM_PATH\">CC::SSP_BO_MA_07.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">5005000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">237</Col><Col id=\"PGM_ID\">SSP_BO_MA_07</Col><Col id=\"UI_ID\">SSP_BO_MA_07.xfdl</Col><Col id=\"PGM_NM\">부서조회</Col><Col id=\"PGM_CALL_PATH\">/bo/cust/dept/ssp_bo_ma_07.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">238</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">25</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">CC</Col><Col id=\"MDL_NM\">CustMbrController</Col><Col id=\"MNU_NM\">회원관리</Col><Col id=\"PGM_PATH\">CC::ssp_bo_ma_12.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">5006000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">237</Col><Col id=\"PGM_ID\">SSP_BO_MA_12</Col><Col id=\"UI_ID\">ssp_bo_ma_12.xfdl</Col><Col id=\"PGM_NM\">회원목록</Col><Col id=\"PGM_CALL_PATH\">/bo/cust/mbr/ssp_bo_ma_12.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">326</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">26</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">CC</Col><Col id=\"MDL_NM\">CustDvlplcController</Col><Col id=\"MNU_NM\">배송지관리</Col><Col id=\"PGM_PATH\">CC::SSP_BO_MA_20.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">5007000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">237</Col><Col id=\"PGM_ID\">SSP_BO_MA_20</Col><Col id=\"UI_ID\">SSP_BO_MA_20.xfdl</Col><Col id=\"PGM_NM\">배송지관리 목록</Col><Col id=\"PGM_CALL_PATH\">/bo/cust/dvlplc/ssp_bo_ma_20.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">389</Col><Col id=\"MNU_LVL\">1</Col><Col id=\"SRT_SO\">27</Col><Col id=\"MNU_NM\">SSP가격/진열관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">8000000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">0</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">390</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">28</Col><Col id=\"MNU_NM\">사업장별 가격조회</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">8001000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">389</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">391</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">29</Col><Col id=\"MNU_NM\">가격기준정보관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">8005000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">389</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">392</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">30</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">PC</Col><Col id=\"MDL_NM\">PcDetrInfoController</Col><Col id=\"MNU_NM\">절사관리</Col><Col id=\"PGM_PATH\">PC::SSP_BO_CA_50.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">800500100</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">391</Col><Col id=\"PGM_ID\">SSP_BO_CA_50</Col><Col id=\"UI_ID\">SSP_BO_CA_50.xfdl</Col><Col id=\"PGM_NM\">절사관리</Col><Col id=\"PGM_CALL_PATH\">/pc/detrInfo/selectDetrInfoList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">417</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">31</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">PC</Col><Col id=\"MDL_NM\">PcPlnPrfrtController</Col><Col id=\"MNU_NM\">카테고리계획매익률</Col><Col id=\"PGM_PATH\">PC::SSP_BO_CA_51.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">800500200</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">391</Col><Col id=\"PGM_ID\">SSP_BO_CA_51</Col><Col id=\"UI_ID\">SSP_BO_CA_51.xfdl</Col><Col id=\"PGM_NM\">카테고리계획매익율</Col><Col id=\"PGM_CALL_PATH\">/pc/plnPrfrt/selectPlnPrfrtList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">14</Col><Col id=\"MNU_LVL\">1</Col><Col id=\"SRT_SO\">32</Col><Col id=\"MNU_NM\">Front관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9000000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">0</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">465</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">33</Col><Col id=\"MNU_NM\">고객센터관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9001000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">14</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">466</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">34</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">CO</Col><Col id=\"MDL_NM\">CoNoticeController</Col><Col id=\"MNU_NM\">공지사항관리</Col><Col id=\"PGM_PATH\">CO::SSP_BO_CN_01.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">9001010000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">465</Col><Col id=\"PGM_ID\">SSP_BO_CN_01</Col><Col id=\"UI_ID\">SSP_BO_CN_01.xfdl</Col><Col id=\"PGM_NM\">공지사항관리</Col><Col id=\"PGM_CALL_PATH\">/co/selectNoticeList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">467</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">35</Col><Col id=\"MNU_NM\">자주하는질문관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9001020000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">465</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">468</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">36</Col><Col id=\"MNU_NM\">약관관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9001030000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">465</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">20</Col><Col id=\"MNU_LVL\">1</Col><Col id=\"SRT_SO\">37</Col><Col id=\"MNU_NM\">시스템관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9100000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">0</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">21</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">38</Col><Col id=\"PGM_TP_CD\">10</Col><Col id=\"THME_DOMN_CD\">CO</Col><Col id=\"MDL_NM\">CoMenuController.java</Col><Col id=\"MNU_NM\">메뉴관리</Col><Col id=\"PGM_PATH\">CO::comMenuMng.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">9101000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"PGM_ID\">SSP_BO_YA_01</Col><Col id=\"UI_ID\">comMenuMng.xfdl</Col><Col id=\"PGM_NM\">메뉴관리</Col><Col id=\"PGM_CALL_PATH\">/co/Menu/selectMnuMngList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">22</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">39</Col><Col id=\"PGM_TP_CD\">10</Col><Col id=\"THME_DOMN_CD\">CO</Col><Col id=\"MDL_NM\">CoMenuController.java</Col><Col id=\"MNU_NM\">메뉴권한그룹관리</Col><Col id=\"PGM_PATH\">CO::coMnuAuthGrpMng.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">9102000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"PGM_ID\">SSP_BO_YA_02</Col><Col id=\"UI_ID\">coMnuAuthGrpMng.xfdl</Col><Col id=\"PGM_NM\">메뉴권한그룹관리</Col><Col id=\"PGM_CALL_PATH\">/co/Menu/selectMnuMngList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">23</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">40</Col><Col id=\"PGM_TP_CD\">10</Col><Col id=\"THME_DOMN_CD\">CO</Col><Col id=\"MDL_NM\">CoPgmMngController.java</Col><Col id=\"MNU_NM\">프로그램관리</Col><Col id=\"PGM_PATH\">CO::coPgmMng.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">9103000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"PGM_ID\">SSP_BO_YA_03</Col><Col id=\"UI_ID\">coPgmMng.xfdl</Col><Col id=\"PGM_NM\">프로그램관리</Col><Col id=\"PGM_CALL_PATH\">/co/pgm/selectPgmMngList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">24</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">41</Col><Col id=\"MNU_NM\">운영자 조회</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9104000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">469</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">42</Col><Col id=\"MNU_NM\">운영자이관등록</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9105000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">25</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">43</Col><Col id=\"MNU_NM\">운영자 조직 조회</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9106000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">470</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">44</Col><Col id=\"MNU_NM\">운영자권한그룹관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9107000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">26</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">45</Col><Col id=\"PGM_TP_CD\">10</Col><Col id=\"THME_DOMN_CD\">CO</Col><Col id=\"MDL_NM\">CoComCdMngController</Col><Col id=\"MNU_NM\">공통코드관리</Col><Col id=\"PGM_PATH\">CO::comCdMng.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">9108000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"PGM_ID\">SSP_BO_YA_06</Col><Col id=\"UI_ID\">comCdMng.xfdl</Col><Col id=\"PGM_NM\">공통코드관리</Col><Col id=\"PGM_CALL_PATH\">/co/com/comCdClsfSearchList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">471</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">46</Col><Col id=\"MNU_NM\">프론트프로그램그룹관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9109000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">472</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">47</Col><Col id=\"MNU_NM\">프론트프로그램관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9110000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">473</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">48</Col><Col id=\"MNU_NM\">프론트메뉴관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9111000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">474</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">49</Col><Col id=\"MNU_NM\">거래명세서관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9112000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">475</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">50</Col><Col id=\"MNU_NM\">로그인이력조회</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9113000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">216</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">51</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">CO</Col><Col id=\"MDL_NM\">CoCommonController</Col><Col id=\"MNU_NM\">에러로그조회</Col><Col id=\"PGM_PATH\">CO::errorLogList.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">9114000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"PGM_ID\">SSP_BP_YA_07</Col><Col id=\"UI_ID\">errorLogList.xfdl</Col><Col id=\"PGM_NM\">에러내용 조회</Col><Col id=\"PGM_CALL_PATH\">/co/selectExceptionInfoList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">476</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">52</Col><Col id=\"MNU_NM\">인터페이스 로그 조회</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9115000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">29</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">53</Col><Col id=\"MNU_NM\">sample</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9199000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">30</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">54</Col><Col id=\"PGM_TP_CD\">10</Col><Col id=\"THME_DOMN_CD\">CO</Col><Col id=\"MDL_NM\">CoMenuController.java</Col><Col id=\"MNU_NM\">sample1</Col><Col id=\"PGM_PATH\">CO::comMenuMng.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">9199010000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">29</Col><Col id=\"PGM_ID\">SSP_BO_YA_01</Col><Col id=\"UI_ID\">comMenuMng.xfdl</Col><Col id=\"PGM_NM\">메뉴관리</Col><Col id=\"PGM_CALL_PATH\">/co/Menu/selectMnuMngList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">31</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">55</Col><Col id=\"MNU_NM\">sample2</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9199020000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">29</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">205</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">56</Col><Col id=\"MNU_NM\">sample3</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9199030000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">29</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div01","20","307",null,"485","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Div("div_page_wrap","0","441",null,"30","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_paging_first","33%","0","30","30",null,null,null,null,null,null,this.Div01.form.div_page_wrap.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_paging_first");
            this.Div01.form.div_page_wrap.addChild(obj.name, obj);

            obj = new Button("btn_paging_prev","btn_paging_first:4","0","30","30",null,null,null,null,null,null,this.Div01.form.div_page_wrap.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_paging_prev");
            this.Div01.form.div_page_wrap.addChild(obj.name, obj);

            obj = new Button("btn_paging_01","btn_paging_prev:4","0","30","30",null,null,null,null,null,null,this.Div01.form.div_page_wrap.form);
            obj.set_text("1");
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_paging");
            this.Div01.form.div_page_wrap.addChild(obj.name, obj);

            obj = new Button("btn_paging_02","btn_paging_01:4","0","30","30",null,null,null,null,null,null,this.Div01.form.div_page_wrap.form);
            obj.set_text("2");
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_paging");
            this.Div01.form.div_page_wrap.addChild(obj.name, obj);

            obj = new Button("btn_paging_03","btn_paging_02:4","0","30","30",null,null,null,null,null,null,this.Div01.form.div_page_wrap.form);
            obj.set_text("3");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_paging");
            this.Div01.form.div_page_wrap.addChild(obj.name, obj);

            obj = new Button("btn_paging_04","btn_paging_03:4","0","30","30",null,null,null,null,null,null,this.Div01.form.div_page_wrap.form);
            obj.set_text("4");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_paging");
            this.Div01.form.div_page_wrap.addChild(obj.name, obj);

            obj = new Button("btn_paging_05","btn_paging_04:4","0","30","30",null,null,null,null,null,null,this.Div01.form.div_page_wrap.form);
            obj.set_text("5");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_paging");
            this.Div01.form.div_page_wrap.addChild(obj.name, obj);

            obj = new Button("btn_paging_06","btn_paging_05:4","0","30","30",null,null,null,null,null,null,this.Div01.form.div_page_wrap.form);
            obj.set_text("6");
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_paging");
            this.Div01.form.div_page_wrap.addChild(obj.name, obj);

            obj = new Button("btn_paging_07","btn_paging_06:4","0","30","30",null,null,null,null,null,null,this.Div01.form.div_page_wrap.form);
            obj.set_text("7");
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_paging");
            this.Div01.form.div_page_wrap.addChild(obj.name, obj);

            obj = new Button("btn_paging_08","btn_paging_07:4","0","30","30",null,null,null,null,null,null,this.Div01.form.div_page_wrap.form);
            obj.set_text("8");
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_paging");
            this.Div01.form.div_page_wrap.addChild(obj.name, obj);

            obj = new Button("btn_paging_09","btn_paging_08:4","0","30","30",null,null,null,null,null,null,this.Div01.form.div_page_wrap.form);
            obj.set_text("9");
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_paging");
            this.Div01.form.div_page_wrap.addChild(obj.name, obj);

            obj = new Button("btn_paging_10","btn_paging_09:4","0","30","30",null,null,null,null,null,null,this.Div01.form.div_page_wrap.form);
            obj.set_text("1111");
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_paging");
            this.Div01.form.div_page_wrap.addChild(obj.name, obj);

            obj = new Button("btn_paging_next","btn_paging_10:4","0","30","30",null,null,null,null,null,null,this.Div01.form.div_page_wrap.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_paging_next");
            this.Div01.form.div_page_wrap.addChild(obj.name, obj);

            obj = new Button("btn_paging_last","btn_paging_next:4","0","30","30",null,null,null,null,null,null,this.Div01.form.div_page_wrap.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_paging_last");
            obj.set_text("");
            this.Div01.form.div_page_wrap.addChild(obj.name, obj);

            obj = new Button("Button62_00",null,"0","110","28","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("레이아웃 초기화");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button62_00_00",null,"0","100","28","Button62_00:4",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("레이아웃 저장");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button01",null,"0","110","28","Button62_00_00:4",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button62_01",null,"0","76","28","406",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("버튼");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button62","Button62_01:4","0","70","28",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("일괄수정");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static71","0","10","121","25",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("(총 0건 1/1)");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","0","38",null,"373","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_menu");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"74\"/><Column size=\"88\"/><Column size=\"138\"/><Column size=\"106\"/><Column size=\"78\"/><Column size=\"67\"/><Column size=\"71\"/><Column size=\"78\"/><Column size=\"86\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"108\"/><Column size=\"116\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"210\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\" band=\"head\"/><Row size=\"31\"/><Row size=\"31\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"상품ID\"/><Cell col=\"1\" rowspan=\"2\" text=\"시리즈그룹ID\"/><Cell col=\"2\" rowspan=\"2\" text=\"카테고리\"/><Cell col=\"3\" rowspan=\"2\" text=\"상품명\" cssclass=\"grd_WF_Header_stress\"/><Cell col=\"4\" rowspan=\"2\" text=\"SALARY\"/><Cell col=\"5\" colspan=\"3\" text=\"규격\"/><Cell col=\"8\" rowspan=\"2\" text=\"SSP상품상태\"/><Cell col=\"9\" rowspan=\"2\" text=\"대표상품그룹ID\"/><Cell col=\"10\" rowspan=\"2\" text=\"button\"/><Cell col=\"11\" rowspan=\"2\" text=\"calendar\"/><Cell col=\"12\" rowspan=\"2\" text=\"checkbox\"/><Cell col=\"13\" rowspan=\"2\" text=\"combo\"/><Cell col=\"14\" rowspan=\"2\" text=\"combo text\"/><Cell col=\"15\" rowspan=\"2\" text=\"mask edit\"/><Cell col=\"16\" rowspan=\"2\" text=\"textarea\"/><Cell col=\"17\" rowspan=\"2\" text=\"image\"/><Cell col=\"18\" rowspan=\"2\" text=\"spin\"/><Cell row=\"1\" col=\"5\" text=\"제목01\"/><Cell row=\"1\" col=\"6\" text=\"제목02\"/><Cell row=\"1\" col=\"7\" text=\"제목03\"/></Band><Band id=\"body\"><Cell text=\"bind:PRODUCT_ID\" cssclass=\"grd_WF_body_stress\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\" cssclass=\"grd_WF_left\"/><Cell col=\"4\" cssclass=\"grd_WF_right\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\" text=\"bind:MNU_SEQ\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"grd_WF_btn\"/><Cell col=\"11\" text=\"bind:MNU_LVL\" displaytype=\"calendarcontrol\" edittype=\"date\"/><Cell col=\"12\" text=\"bind:SRT_SO\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"13\" text=\"bind:SRT_SO\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell col=\"14\" text=\"bind:THME_DOMN_CD\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"15\" text=\"bind:MDL_NM\" displaytype=\"maskeditcontrol\" edittype=\"mask\"/><Cell col=\"16\" text=\"bind:MNU_NM\" displaytype=\"textareacontrol\" edittype=\"textarea\"/><Cell col=\"17\" text=\"bind:PGM_PATH\" displaytype=\"imagecontrol\" edittype=\"none\" controlautosizingtype=\"width\"/><Cell col=\"18\" text=\"bind:MNU_LVL_SPR_CD\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div00","0","0",null,"287","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","20",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07","20","51",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static65","20","82",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static13","20","113",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_cm_box02L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static17","20","144",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static21","20","175",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27","20","206",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","20","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("상품ㆍ그룹ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","882","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("상품명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","20","51","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("카테고리");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static08","882","51","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("규격");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10","20","82","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("일자");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static66","882","82","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_text("제조원");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static12","20","113","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("키워드");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static14","882","113","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_text("대표상품구분");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static16","20","144","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_text("담당자");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static18","882","144","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            obj.set_text("공용전용구분");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static20","20","175","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("38");
            obj.set_text("SSP상품상태");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static22","451","175","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("40");
            obj.set_text("S-MRO상품상태");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static24","882","175","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("42");
            obj.set_text("가격대상");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26","20","206","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("44");
            obj.set_text("상품배지");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static28","451","206","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("46");
            obj.set_text("전시상품구분");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static30","882","206","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("48");
            obj.set_text("");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit32","159","24","295","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button33","Edit32:4","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit34","1021","24","200","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox35","Edit34:10","24","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo36","159","55","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit37","Combo36:4","55","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit38","Edit37:4","55","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button39","Edit38:4","55","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_search02");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit40","1021","55","200","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo41","159","86","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar42","Combo41:4","86","100","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_editformat("yyyy.MM.dd");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static59","Calendar42:4","86","9","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_text("~");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar43","Calendar42:17","86","100","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_editformat("yyyy.MM.dd");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo44","Calendar43:4","86","130","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_innerdataset("ds_combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit45","1021","86","70","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit46","Edit45:4","86","125","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button47","Edit46:4","86","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_cssclass("btn_WF_search02");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo48","159","117","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo49","1021","117","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_text("대표상품구분");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit69","313","117","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit70","Edit69:4","117","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button71","Edit70:4","117","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_cssclass("btn_WF_search02");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo50","159","-73","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("58");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo51","1021","-73","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("59");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo52","159","179","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("39");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo53","590","179","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("41");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_innerdataset("ds_combo");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo54","1021","179","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("43");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo55","159","210","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("45");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo56","590","210","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("47");
            obj.set_readonly("true");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button33_00","Button33:4","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_multi");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button33_00_00","Button33_00:4","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_multi_off");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button33_00_00_00","Button33_00_00:4","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_document");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button33_00_00_00_00","Button33_00_00_00:4","24","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_addfile");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button57_00",null,"248","60","28","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("53");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button57",null,"248","60","28","Button57_00:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("52");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button58",null,"248","85","28","Button57:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("51");
            obj.set_text("대용량조회");
            obj.set_cssclass("btn_WF_default");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_Extend","20","237","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("50");
            obj.set_text("확장조회");
            obj.set_cssclass("btn_WF_extend");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","112","28","10","15",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("60");
            obj.set_cssclass("sta_cm_box01L_tdt_necessary2");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.Combo53","value","ds_combo","Column1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.Combo53","text","ds_combo","Column1");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("guideProductListDouble.xfdl", function() {

        this.div_page_wrap_btn_paging_03_onclick = function(obj,e)
        {

        };

        this.Div00_Static06_onclick = function(obj,e)
        {

        };

        this.Div00_Edit38_onchanged = function(obj,e)
        {

        };

        this.Div00_Button57_onclick = function(obj,e)
        {

        };

        this.Div00_Combo53_onitemchanged = function(obj,e)
        {

        };

        this.Div00_Calendar42_onchanged = function(obj,e)
        {

        };

        this.Div00_CheckBox35_onclick = function(obj,e)
        {

        };

        this.Div00_Edit34_onchanged = function(obj,e)
        {

        };

        this.div_page_wrap_btn_paging_next_onclick = function(obj,e)
        {

        };

        this.Div01_Button62_01_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div01.form.div_page_wrap.form.btn_paging_03.addEventHandler("onclick",this.div_page_wrap_btn_paging_03_onclick,this);
            this.Div01.form.div_page_wrap.form.btn_paging_next.addEventHandler("onclick",this.div_page_wrap_btn_paging_next_onclick,this);
            this.Div01.form.Button62_01.addEventHandler("onclick",this.Div01_Button62_01_onclick,this);
            this.Div00.form.Static06.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div00.form.Edit34.addEventHandler("onchanged",this.Div00_Edit34_onchanged,this);
            this.Div00.form.CheckBox35.addEventHandler("onclick",this.Div00_CheckBox35_onclick,this);
            this.Div00.form.Edit38.addEventHandler("onchanged",this.Div00_Edit38_onchanged,this);
            this.Div00.form.Calendar42.addEventHandler("onchanged",this.Div00_Calendar42_onchanged,this);
            this.Div00.form.Button57_00.addEventHandler("onclick",this.Div00_Button57_onclick,this);
            this.Div00.form.Button57.addEventHandler("onclick",this.Div00_Button57_onclick,this);
            this.Div00.form.Button58.addEventHandler("onclick",this.Button58_onclick,this);
            this.Div00.form.btn_Extend.addEventHandler("onclick",this.Div00_btn_Extend_onclick,this);
        };
        this.loadIncludeScript("guideProductListDouble.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
