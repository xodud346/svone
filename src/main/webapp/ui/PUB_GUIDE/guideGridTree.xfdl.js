(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("guideGridTree");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MNU_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MNU_LVL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PGM_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"THME_DOMN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MDL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PGM_PATH\" type=\"STRING\" size=\"32\"/><Column id=\"MNU_LVL_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"HRNK_MNU_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_CALL_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"MNU_TP_CD\" type=\"STRING\" size=\"32\"/><Column id=\"HGST_MNU_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"RMKS_CTS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MNU_SEQ\">1</Col><Col id=\"MNU_LVL\">1</Col><Col id=\"SRT_SO\">1</Col><Col id=\"MNU_NM\">상품관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1000000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">0</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">2</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">2</Col><Col id=\"MNU_NM\">상품등록</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1001000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">1</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">3</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">3</Col><Col id=\"MNU_NM\">신규상품요청처리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1001010000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">2</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">4</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">4</Col><Col id=\"MNU_NM\">상품추가</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1001020000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">2</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">5</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">5</Col><Col id=\"MNU_NM\">등록상품관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1002000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">1</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">6</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">6</Col><Col id=\"MNU_NM\">상품조회</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1002010000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">5</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">7</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">7</Col><Col id=\"MNU_NM\">시리즈그룹상품관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1002020000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">5</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">101</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">8</Col><Col id=\"PGM_TP_CD\">10</Col><Col id=\"THME_DOMN_CD\">CO</Col><Col id=\"MDL_NM\">CoMenuController.java</Col><Col id=\"MNU_NM\">제조원명관리</Col><Col id=\"PGM_PATH\">CO::coMnuAuthGrpMng.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">1002030000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">5</Col><Col id=\"PGM_ID\">SSP_BO_YA_02</Col><Col id=\"UI_ID\">coMnuAuthGrpMng.xfdl</Col><Col id=\"PGM_NM\">메뉴권한그룹관리</Col><Col id=\"PGM_CALL_PATH\">/co/Menu/selectMnuMngList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col><Col id=\"RMKS_CTS\">비고비고비고비고비고비고비고비고비고</Col></Row><Row><Col id=\"MNU_SEQ\">455</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">9</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">PR</Col><Col id=\"MDL_NM\">PrProductNoticeController</Col><Col id=\"MNU_NM\">상품고시정보관리</Col><Col id=\"PGM_PATH\">PR::SSP_BO_MF_28.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">1002040000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">5</Col><Col id=\"PGM_ID\">SSP_BO_MF_28</Col><Col id=\"UI_ID\">SSP_BO_MF_28.xfdl</Col><Col id=\"PGM_NM\">상품고시정보관리</Col><Col id=\"PGM_CALL_PATH\">/bo/pr/prdNtc/selectProductNoticeList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">8</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">10</Col><Col id=\"MNU_NM\">전시상품관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1003000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">1</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">9</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">11</Col><Col id=\"MNU_NM\">전시상품관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1003010000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">8</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">10</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">12</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">PR</Col><Col id=\"MDL_NM\">PrPropertyController</Col><Col id=\"MNU_NM\">견적요청관리</Col><Col id=\"PGM_PATH\">PR::SSP_BO_PA_17.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">1003020000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">8</Col><Col id=\"PGM_ID\">SSP_BO_PA_17</Col><Col id=\"UI_ID\">SSP_BO_PA_17.xfdl</Col><Col id=\"PGM_NM\">SSP속성 목록</Col><Col id=\"PGM_CALL_PATH\">/bo/pr/prd/selectPropertyList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">12</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">13</Col><Col id=\"MNU_NM\">카테고리/속성관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1004010000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">1</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">13</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">14</Col><Col id=\"MNU_NM\">카테고리관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1004020000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">12</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">457</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">15</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">PR</Col><Col id=\"MDL_NM\">PrPropertyController</Col><Col id=\"MNU_NM\">속성관리</Col><Col id=\"PGM_PATH\">PR::SSP_BO_PA_17.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">1004030000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">12</Col><Col id=\"PGM_ID\">SSP_BO_PA_17</Col><Col id=\"UI_ID\">SSP_BO_PA_17.xfdl</Col><Col id=\"PGM_NM\">SSP속성 목록</Col><Col id=\"PGM_CALL_PATH\">/bo/pr/prd/selectPropertyList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">460</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">16</Col><Col id=\"MNU_NM\">담당자관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1005000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">1</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">461</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">17</Col><Col id=\"MNU_NM\">상품담당자관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1005010000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">460</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">462</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">18</Col><Col id=\"MNU_NM\">MD담당자관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">1005020000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">460</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">237</Col><Col id=\"MNU_LVL\">1</Col><Col id=\"SRT_SO\">19</Col><Col id=\"MNU_NM\">고객관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">5000000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">0</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">503</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">20</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">CC</Col><Col id=\"MDL_NM\">CustIddtController</Col><Col id=\"MNU_NM\">산업군조회</Col><Col id=\"PGM_PATH\">CC::SSP_BO_MA_52.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">5001000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">237</Col><Col id=\"PGM_ID\">SSP_BO_MA_52</Col><Col id=\"UI_ID\">SSP_BO_MA_52.xfdl</Col><Col id=\"PGM_NM\">산업군조회</Col><Col id=\"PGM_CALL_PATH\">/bo/cust/iddt/ssp_bo_ma_52.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">397</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">21</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">CC</Col><Col id=\"MDL_NM\">CustBgtController</Col><Col id=\"MNU_NM\">예산목록조회</Col><Col id=\"PGM_PATH\">CC::SSP_BO_MA_60.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">5003</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">237</Col><Col id=\"PGM_ID\">SSP_BO_MA_60</Col><Col id=\"UI_ID\">SSP_BO_MA_60.xfdl</Col><Col id=\"PGM_NM\">예산 목록 조회</Col><Col id=\"PGM_CALL_PATH\">/bo/cust/bgt/ssp_bo_ma_60.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">283</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">22</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">CC</Col><Col id=\"MDL_NM\">CustGradeController</Col><Col id=\"MNU_NM\">고객등급관리</Col><Col id=\"PGM_PATH\">CC::SSP_BO_MA_03.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">5003000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">237</Col><Col id=\"PGM_ID\">SSP_BO_MA_03</Col><Col id=\"UI_ID\">SSP_BO_MA_03.xfdl</Col><Col id=\"PGM_NM\">고객등급관리</Col><Col id=\"PGM_CALL_PATH\">/bo/cust/mbr/ssp_bo_ma_03.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">315</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">23</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">CC</Col><Col id=\"MDL_NM\">CustOprunitController</Col><Col id=\"MNU_NM\">운영단위조회</Col><Col id=\"PGM_PATH\">CC::SSP_BO_MA_05.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">5004000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">237</Col><Col id=\"PGM_ID\">SSP_BO_MA_05</Col><Col id=\"UI_ID\">SSP_BO_MA_05.xfdl</Col><Col id=\"PGM_NM\">운영단위조회</Col><Col id=\"PGM_CALL_PATH\">/bo/cust/oprunit/ssp_bo_ma_05.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">284</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">24</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">CC</Col><Col id=\"MDL_NM\">CustDeptController</Col><Col id=\"MNU_NM\">부서조회</Col><Col id=\"PGM_PATH\">CC::SSP_BO_MA_07.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">5005000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">237</Col><Col id=\"PGM_ID\">SSP_BO_MA_07</Col><Col id=\"UI_ID\">SSP_BO_MA_07.xfdl</Col><Col id=\"PGM_NM\">부서조회</Col><Col id=\"PGM_CALL_PATH\">/bo/cust/dept/ssp_bo_ma_07.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">238</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">25</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">CC</Col><Col id=\"MDL_NM\">CustMbrController</Col><Col id=\"MNU_NM\">회원관리</Col><Col id=\"PGM_PATH\">CC::ssp_bo_ma_12.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">5006000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">237</Col><Col id=\"PGM_ID\">SSP_BO_MA_12</Col><Col id=\"UI_ID\">ssp_bo_ma_12.xfdl</Col><Col id=\"PGM_NM\">회원목록</Col><Col id=\"PGM_CALL_PATH\">/bo/cust/mbr/ssp_bo_ma_12.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">326</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">26</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">CC</Col><Col id=\"MDL_NM\">CustDvlplcController</Col><Col id=\"MNU_NM\">배송지관리</Col><Col id=\"PGM_PATH\">CC::SSP_BO_MA_20.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">5007000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">237</Col><Col id=\"PGM_ID\">SSP_BO_MA_20</Col><Col id=\"UI_ID\">SSP_BO_MA_20.xfdl</Col><Col id=\"PGM_NM\">배송지관리 목록</Col><Col id=\"PGM_CALL_PATH\">/bo/cust/dvlplc/ssp_bo_ma_20.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">389</Col><Col id=\"MNU_LVL\">1</Col><Col id=\"SRT_SO\">27</Col><Col id=\"MNU_NM\">SSP가격/진열관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">8000000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">0</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">390</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">28</Col><Col id=\"MNU_NM\">사업장별 가격조회</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">8001000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">389</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">391</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">29</Col><Col id=\"MNU_NM\">가격기준정보관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">8005000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">389</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">392</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">30</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">PC</Col><Col id=\"MDL_NM\">PcDetrInfoController</Col><Col id=\"MNU_NM\">절사관리</Col><Col id=\"PGM_PATH\">PC::SSP_BO_CA_50.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">800500100</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">391</Col><Col id=\"PGM_ID\">SSP_BO_CA_50</Col><Col id=\"UI_ID\">SSP_BO_CA_50.xfdl</Col><Col id=\"PGM_NM\">절사관리</Col><Col id=\"PGM_CALL_PATH\">/pc/detrInfo/selectDetrInfoList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">417</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">31</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">PC</Col><Col id=\"MDL_NM\">PcPlnPrfrtController</Col><Col id=\"MNU_NM\">카테고리계획매익률</Col><Col id=\"PGM_PATH\">PC::SSP_BO_CA_51.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">800500200</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">391</Col><Col id=\"PGM_ID\">SSP_BO_CA_51</Col><Col id=\"UI_ID\">SSP_BO_CA_51.xfdl</Col><Col id=\"PGM_NM\">카테고리계획매익율</Col><Col id=\"PGM_CALL_PATH\">/pc/plnPrfrt/selectPlnPrfrtList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">14</Col><Col id=\"MNU_LVL\">1</Col><Col id=\"SRT_SO\">32</Col><Col id=\"MNU_NM\">Front관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9000000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">0</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">465</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">33</Col><Col id=\"MNU_NM\">고객센터관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9001000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">14</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">466</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">34</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">CO</Col><Col id=\"MDL_NM\">CoNoticeController</Col><Col id=\"MNU_NM\">공지사항관리</Col><Col id=\"PGM_PATH\">CO::SSP_BO_CN_01.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">9001010000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">465</Col><Col id=\"PGM_ID\">SSP_BO_CN_01</Col><Col id=\"UI_ID\">SSP_BO_CN_01.xfdl</Col><Col id=\"PGM_NM\">공지사항관리</Col><Col id=\"PGM_CALL_PATH\">/co/selectNoticeList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">467</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">35</Col><Col id=\"MNU_NM\">자주하는질문관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9001020000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">465</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">468</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">36</Col><Col id=\"MNU_NM\">약관관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9001030000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">465</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">20</Col><Col id=\"MNU_LVL\">1</Col><Col id=\"SRT_SO\">37</Col><Col id=\"MNU_NM\">시스템관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9100000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">0</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">21</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">38</Col><Col id=\"PGM_TP_CD\">10</Col><Col id=\"THME_DOMN_CD\">CO</Col><Col id=\"MDL_NM\">CoMenuController.java</Col><Col id=\"MNU_NM\">메뉴관리</Col><Col id=\"PGM_PATH\">CO::comMenuMng.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">9101000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"PGM_ID\">SSP_BO_YA_01</Col><Col id=\"UI_ID\">comMenuMng.xfdl</Col><Col id=\"PGM_NM\">메뉴관리</Col><Col id=\"PGM_CALL_PATH\">/co/Menu/selectMnuMngList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">22</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">39</Col><Col id=\"PGM_TP_CD\">10</Col><Col id=\"THME_DOMN_CD\">CO</Col><Col id=\"MDL_NM\">CoMenuController.java</Col><Col id=\"MNU_NM\">메뉴권한그룹관리</Col><Col id=\"PGM_PATH\">CO::coMnuAuthGrpMng.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">9102000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"PGM_ID\">SSP_BO_YA_02</Col><Col id=\"UI_ID\">coMnuAuthGrpMng.xfdl</Col><Col id=\"PGM_NM\">메뉴권한그룹관리</Col><Col id=\"PGM_CALL_PATH\">/co/Menu/selectMnuMngList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">23</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">40</Col><Col id=\"PGM_TP_CD\">10</Col><Col id=\"THME_DOMN_CD\">CO</Col><Col id=\"MDL_NM\">CoPgmMngController.java</Col><Col id=\"MNU_NM\">프로그램관리</Col><Col id=\"PGM_PATH\">CO::coPgmMng.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">9103000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"PGM_ID\">SSP_BO_YA_03</Col><Col id=\"UI_ID\">coPgmMng.xfdl</Col><Col id=\"PGM_NM\">프로그램관리</Col><Col id=\"PGM_CALL_PATH\">/co/pgm/selectPgmMngList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">24</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">41</Col><Col id=\"MNU_NM\">운영자 조회</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9104000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">469</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">42</Col><Col id=\"MNU_NM\">운영자이관등록</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9105000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">25</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">43</Col><Col id=\"MNU_NM\">운영자 조직 조회</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9106000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">470</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">44</Col><Col id=\"MNU_NM\">운영자권한그룹관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9107000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">26</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">45</Col><Col id=\"PGM_TP_CD\">10</Col><Col id=\"THME_DOMN_CD\">CO</Col><Col id=\"MDL_NM\">CoComCdMngController</Col><Col id=\"MNU_NM\">공통코드관리</Col><Col id=\"PGM_PATH\">CO::comCdMng.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">9108000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"PGM_ID\">SSP_BO_YA_06</Col><Col id=\"UI_ID\">comCdMng.xfdl</Col><Col id=\"PGM_NM\">공통코드관리</Col><Col id=\"PGM_CALL_PATH\">/co/com/comCdClsfSearchList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">471</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">46</Col><Col id=\"MNU_NM\">프론트프로그램그룹관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9109000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">472</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">47</Col><Col id=\"MNU_NM\">프론트프로그램관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9110000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">473</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">48</Col><Col id=\"MNU_NM\">프론트메뉴관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9111000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">474</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">49</Col><Col id=\"MNU_NM\">거래명세서관리</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9112000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">475</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">50</Col><Col id=\"MNU_NM\">로그인이력조회</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9113000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">216</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">51</Col><Col id=\"PGM_TP_CD\">01</Col><Col id=\"THME_DOMN_CD\">CO</Col><Col id=\"MDL_NM\">CoCommonController</Col><Col id=\"MNU_NM\">에러로그조회</Col><Col id=\"PGM_PATH\">CO::errorLogList.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">9114000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"PGM_ID\">SSP_BP_YA_07</Col><Col id=\"UI_ID\">errorLogList.xfdl</Col><Col id=\"PGM_NM\">에러내용 조회</Col><Col id=\"PGM_CALL_PATH\">/co/selectExceptionInfoList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">476</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">52</Col><Col id=\"MNU_NM\">인터페이스 로그 조회</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9115000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">29</Col><Col id=\"MNU_LVL\">2</Col><Col id=\"SRT_SO\">53</Col><Col id=\"MNU_NM\">sample</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9199000000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">20</Col><Col id=\"MNU_TP_CD\">01</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">30</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">54</Col><Col id=\"PGM_TP_CD\">10</Col><Col id=\"THME_DOMN_CD\">CO</Col><Col id=\"MDL_NM\">CoMenuController.java</Col><Col id=\"MNU_NM\">sample1</Col><Col id=\"PGM_PATH\">CO::comMenuMng.xfdl</Col><Col id=\"MNU_LVL_SPR_CD\">9199010000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">29</Col><Col id=\"PGM_ID\">SSP_BO_YA_01</Col><Col id=\"UI_ID\">comMenuMng.xfdl</Col><Col id=\"PGM_NM\">메뉴관리</Col><Col id=\"PGM_CALL_PATH\">/co/Menu/selectMnuMngList.do</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">31</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">55</Col><Col id=\"MNU_NM\">sample2</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9199020000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">29</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row><Row><Col id=\"MNU_SEQ\">205</Col><Col id=\"MNU_LVL\">3</Col><Col id=\"SRT_SO\">56</Col><Col id=\"MNU_NM\">sample3</Col><Col id=\"PGM_PATH\">::</Col><Col id=\"MNU_LVL_SPR_CD\">9199030000</Col><Col id=\"USE_YN\">Y</Col><Col id=\"HRNK_MNU_SEQ\">29</Col><Col id=\"MNU_TP_CD\">02</Col><Col id=\"HGST_MNU_SEQ\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">Aa</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">Ba</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">Ca</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","20","20",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_tree","0","0","200",null,null,"0",null,null,null,null,this.Div00.form);
            obj.set_treeinitstatus("expand,all");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_cellsizingtype("col");
            obj.set_binddataset("ds_menu");
            obj.set_taborder("0");
            obj.set_cssclass("tre_WF_tree");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"220\"/></Columns><Rows><Row size=\"35\"/></Rows><Band id=\"body\"><Cell edittype=\"tree\" text=\"bind:MNU_NM\" treestartlevel=\"1\" treelevel=\"bind:MNU_LVL\" tooltiptext=\"bind:MNU_NM\" textAlign=\"left\" displaytype=\"treeitemcontrol\" border=\"0px solid #e2e0df\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","200","0","64",null,null,"0",null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button03_00","20","40%","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_shuttleR");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button03_00_00","20","Button03_00:4","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_shuttleL");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button03_00_01","20","Button03_00_00:4","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_shuttleRall");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button03_00_02","20","Button03_00_01:4","24","24",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_shuttleLall");
            obj.set_text("");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","264","0",null,null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_menu");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseexpandkey("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"222\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"93\"/><Column size=\"80\"/><Column size=\"214\"/><Column size=\"138\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"Tree\"/><Cell col=\"1\" text=\"Button\"/><Cell col=\"2\" text=\"Calendar\"/><Cell col=\"3\" text=\"Checkbox\"/><Cell col=\"4\" text=\"Combo\"/><Cell col=\"5\" text=\"ComboEdit\"/><Cell col=\"6\" text=\"Edit\"/><Cell col=\"7\" text=\"Textarea\"/><Cell col=\"8\" text=\"Text\"/><Cell col=\"9\" text=\"MNU_LVL_SPR_CD\"/><Cell col=\"10\" text=\"USE_YN\"/><Cell col=\"11\" text=\"HRNK_MNU_SEQ\"/><Cell col=\"12\" text=\"PGM_ID\"/><Cell col=\"13\" text=\"UI_ID\"/></Band><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MNU_LVL\" text=\"bind:MNU_NM\" tooltiptext=\"bind:MNU_NM\" expandshow=\"hide\"/><Cell col=\"1\" text=\"bind:MNU_SEQ\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell col=\"2\" text=\"bind:MNU_LVL\" displaytype=\"calendarcontrol\" edittype=\"date\"/><Cell col=\"3\" text=\"bind:SRT_SO\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"4\" text=\"bind:PGM_TP_CD\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_combo\" combocodecol=\"Column0\" combodatacol=\"Column1\"/><Cell col=\"5\" text=\"bind:THME_DOMN_CD\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_combo\" combocodecol=\"Column0\" combodatacol=\"Column1\"/><Cell col=\"6\" text=\"bind:MDL_NM\" displaytype=\"maskeditcontrol\" edittype=\"mask\" expandshow=\"show\"/><Cell col=\"7\" text=\"bind:MNU_NM\" displaytype=\"textareacontrol\" edittype=\"textarea\"/><Cell col=\"8\" text=\"bind:PGM_PATH\"/><Cell col=\"9\" text=\"bind:MNU_LVL_SPR_CD\"/><Cell col=\"10\" text=\"bind:USE_YN\"/><Cell col=\"11\" text=\"bind:HRNK_MNU_SEQ\"/><Cell col=\"12\" text=\"bind:PGM_ID\"/><Cell col=\"13\" text=\"bind:UI_ID\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","20","0","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("20");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","20","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("20");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01",null,"20","20","20","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("20");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20",null,"20","20",null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("20");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_02","220","344","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("20");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","242","366","20","4",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_02_00","264","344","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("div_WF_guide");
            obj.set_visible("false");
            obj.set_text("20");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_01","1349","0","450",null,null,"-209",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static63","0","0",null,"21","0",null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("0");
            obj.set_text("< 변경이력 >");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_font("bold 12px/normal \"Malgun Gothic\",\"맑은고딕\",\"Apple SD Gothic Neo\",\"dotum\",\"돋움\",\"arial\",\"sans-serif\"");
            obj.set_textAlign("center");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Static("Static63_00","0","30",null,"21","0",null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("1");
            obj.set_text("220308   변경이력 작성");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_font("12px/normal \"Malgun Gothic\",\"맑은고딕\",\"Apple SD Gothic Neo\",\"dotum\",\"돋움\",\"arial\",\"sans-serif\"");
            this.Div00_01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.grd_tree.addEventHandler("oncellclick",this.grd_tree_oncellclick,this);
            this.Div00_01.form.Static63_00.addEventHandler("onclick",this.Div00_Static63_00_onclick,this);
        };
        this.loadIncludeScript("guideGridTree.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
