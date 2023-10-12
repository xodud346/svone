package com.ssp.bo.co.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.co.dao.CoMnuMngDao;
import com.ssp.bo.co.service.CoMnuMngService;
import com.ssp.core.co.service.CoCommonService;
import com.ssp.core.co.util.CommonUtil;
import com.ssp.core.co.util.SessionsAdmin;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 * @title  공통 서비스
 * @package com.ssp.core.co.service.impl
 * </pre>
 * @author lee
 * @since 2022. 01. 18.
 * @version 1.0
 * @see CoMnuMngServiceImpl
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2017. 11. 8.		lee	최초작성
 */
@Service("coMnuMngService")
public class CoMnuMngServiceImpl implements CoMnuMngService {

    @Autowired
    private CoMnuMngDao coMnuMngDao;
    
    @Resource(name="coCommonService")
    private CoCommonService coCommonService;

    /**
     *
     * <pre>
     * 1. MethodName : selectExceptionInfoList
     * 2. ClassName : CoCommonServiceImpl
     * 3. Comment : 메뉴조회
     * 4. 작성자 : lee
     * 5. 작성일 : 2022-01-18
     * </pre>
     *
     * @param searchMap Map
     * @return List
     * @throws Exception exception
     */
	public List<Map<String,Object>> selectMnuMngList(Map<String,Object> searchMap) throws Exception{
        return coMnuMngDao.selectMnuMngList(searchMap);
    }
	
	 /**
    *
    * <pre>
    * 1. MethodName : selectExceptionInfoList
    * 2. ClassName : CoCommonServiceImpl
    * 3. Comment : 메뉴관리 목록 조회
    * 4. 작성자 : lee
    * 5. 작성일 : 2022-01-18
    * </pre>
    *
    * @param searchMap Map
    * @return List
    * @throws Exception exception
    */
	public List<Map<String,Object>> selectMnuList(Map<String,Object> searchMap) throws Exception{
       return coMnuMngDao.selectMnuList(searchMap);
   }
	public List<Map<String, Object>> selectMenuFileList(Map<String, Object> searchMap)  throws Exception{
		 
		  return coMnuMngDao.selectMenuFileList(searchMap);
	}
    /**
     * 메뉴 저장
     * @param commandMapList List<Map<String, Object>>
     * @return NexacroResult
     * @throws Exception exception
     */
    @Override
    public void comMenuSave(List<Map<String, Object>> commandMapList, List<Map<String, Object>> fileMapList ) throws Exception {
        // 메뉴 저장
    	Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
		
        for( Map<String, Object> data : commandMapList ) {
        	  
            int saveType = StringUtil.getInt(data.get("DataSetRowType"));
            int rtn = 0;
            String msg = "";
            Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);
            saveMap.put("oprtrId", admin.get("OPRTR_ID"));
            
            if( saveType == 1 ) {   // 신규
                rtn = coMnuMngDao.insertComMenu(saveMap);
                msg = "등록";
            } else if( saveType == 2 ) {    //  수정
                rtn = coMnuMngDao.updateComMenu(saveMap);
                msg = "수정";
            } else if( saveType == 3 ) {    //  삭제
                rtn = coMnuMngDao.deleteComMenu(saveMap);
                msg = "삭제";
            } 

          //첨부파일 처리
            if( fileMapList != null && fileMapList.size() > 0 ) {
               rtn = coCommonService.fileDelete(fileMapList);
           }
            
            if( rtn < 0 ) throw new Exception("메인코드 " + msg + " 실패");
        	 }
     
    }

   /**
    *
    * <pre>
    * 1. MethodName : selectMenuSeq
    * 2. ClassName : CoMnuMngServiceImpl
    * 3. Comment : 키 채번
    * 4. 작성자 : lee
    * 5. 작성일 : 2022-02-25
    * </pre>
    *
     * +
     * @param searchMap Map
     * @return int
     * @throws Exception Exception
     */
    @Override
    public int selectMenuSeq(Map<String, Object> searchMap) throws Exception {
        return coMnuMngDao.selectMenuSeq(searchMap);
    }

    /**
     *
     * <pre>
     * 1. MethodName : selectExceptionInfoList
     * 2. ClassName : CoCommonServiceImpl
     * 3. Comment : 즐겨찾기 조회
     * 4. 작성자 : ksy
     * 5. 작성일 : 2022-02-17
     * </pre>
     *
     * @param searchMap Map
     * @return List
     * @throws Exception exception
     */
	public List<Map<String,Object>> selectMnuFvrtsList(Map<String,String> searchMap) throws Exception{
        return coMnuMngDao.selectMnuFvrtsList(searchMap);
    }

    /**
     * 즐겨찾기 저장
     * @param commandMapList List<Map<String, Object>>
     * @return NexacroResult
     * @throws Exception exception
     */
    @Override
    public void saveMnuFvrts(List<Map<String, Object>> commandMapList) throws Exception {
        NexacroResult result = new NexacroResult();

        // 즐겨찾기 저장
        for( Map<String, Object> data : commandMapList ) {
            int saveType = StringUtil.getInt(data.get("DataSetRowType"));
            int rtn      = 0;
            
            String msg = "";
            
            Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);

            int menuSeq = coMnuMngDao.selectMnuFvrtsCnt(saveMap);
            
            if( saveType == 1 ) {           // 신규
            	if(menuSeq > 1) return;
            	Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
    			
    			saveMap.put("coCd", admin.get("CO_CD"));
    			saveMap.put("oprtrId", admin.get("OPRTR_ID"));
                rtn = coMnuMngDao.insertMnuFvrts(saveMap);
                msg = "등록";
            } 
            
            if( rtn <= 0 ) throw new Exception("메인코드 " + msg + " 실패");
        }
    }
    

    /**
     * 즐겨찾기 저장
     * @param commandMapList List<Map<String, Object>>
     * @return NexacroResult
     * @throws Exception exception
     */
    @Override
    public void delMnuFvrts(List<Map<String, Object>> commandMapList) throws Exception {
        NexacroResult result = new NexacroResult();

        // 즐겨찾기 저장
        for( Map<String, Object> data : commandMapList ) {
           // int saveType = StringUtil.getInt(data.get("DataSetRowType"));
            int rtn      = 0;
            
            String msg = "";
            Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);
            Map<String, Object> admin = SessionsAdmin.getSessionAdmn();
			
			saveMap.put("coCd", admin.get("CO_CD"));
			saveMap.put("oprtrId", admin.get("OPRTR_ID"));
           // if( saveType == 3 ) {    //  삭제
                rtn = coMnuMngDao.deleteMnuFvrts(saveMap);
                msg = "삭제";
           // }
            
            if( rtn <= 0 ) throw new Exception("메인코드 " + msg + " 실패");
        }
    }

    /**
     * 메뉴관리 메뉴 목록
     * @param searchMap  Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectMenuMngList(Map<String, Object> searchMap) throws Exception {
        return coMnuMngDao.selectMenuMngList(searchMap);
    }
}
