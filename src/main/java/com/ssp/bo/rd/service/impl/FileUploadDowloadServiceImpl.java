/*------------------------------------------------------------------------------
 * NAME : FileUploadDowloadServiceImpl.java
 * DESC :
 * VER  : V1.0
 * PROJ : SSP Project
 * Copyright 2022 Ready Korea All rights reserved
 *------------------------------------------------------------------------------
 *                               MODIFICATION LOG
 *------------------------------------------------------------------------------
 *    DATE     AUTHOR                      DESCRIPTION
 * ----------  ------  ---------------------------------------------------------
 * 2022.04.20  오왕표
 *------------------------------------------------------------------------------*/
package com.ssp.bo.rd.service.impl;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.rd.dao.FileUploadDowloadDao;
import com.ssp.bo.rd.service.FileUploadDowloadService;
import com.ssp.bo.rd.util.FileUploadUtil;
import com.ssp.core.util.StringUtil;

/**
 * <pre>
 *
 * @title   FileUploadDowloadServiceImpl
 * @@desc    R&D파일업로드다운로드서비스 ServiceImpl
 * @package com.ssp.bo.rd.service.impl
 * <pre>
 * @author
 * @since 2022.04.20
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------ 
 * 2022.04.20			       최초작성
 */
@Service("fileUploadDowloadService")
public class FileUploadDowloadServiceImpl implements FileUploadDowloadService {

    @Resource(name = "fileUploadDowloadDao")
    private FileUploadDowloadDao fileUploadDowloadDao;

    /**
     * 첨부파일내역 리스트 조회(selectFileUploadDowload)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public NexacroResult selectAttcFileDtlsInq(Map<String, Object> searchMap) throws Exception {

        NexacroResult result = new NexacroResult();

        List<Map> records = fileUploadDowloadDao.selectAttcFileDtlsInq(searchMap);

        result.addDataSet("ds_master",  records);

        return result;
    }

    /**
     * 첨부파일내역 리스트 업로드(saveFileUploadDowload)
     * @param input
     * @return
     * @throws Exception
     */
    @Override
    public void saveFileUploadDowload(HttpServletRequest request, HttpServletResponse response) throws Exception {

    	ArrayList<Map<String, Object>> returnList = FileUploadUtil.fileUpload(request, response); // 파일업로드 호출

		FileUploadUtil.fileDataSet(returnList, response); // 데이터셋 파일업로드 리턴
    }

    /**
     * 전시요청 추가정보 파일 업로드 저장 (saveAddOptnFileUpload)
     *
     * @param request
     * @param response
     * @throws Exception
     */
    @Override
    public void saveAddOptnFileUpload(HttpServletRequest request, HttpServletResponse response) throws Exception {
    	ArrayList<Map<String, Object>> returnList = FileUploadUtil.fileUpload2(request, response); // 파일업로드 호출
		FileUploadUtil.fileDataSet(returnList, response); // 데이터셋 파일업로드 리턴
    }

    /**
     * 이미지&첨부파일 삭제&수정(saveMultiFileDelUpdate)
     * @param input
     * @return
     * @throws Exception
     */
    public void saveMultiFileDelUpdate(List<Map<String, Object>> fileMap, String contextRealPath) throws Exception 
    {
        for(int idx=0; idx<fileMap.size(); idx++)
        {
        	Map<String,Object> dataMap = fileMap.get(idx);

	        // 첨부파일 삭제 대상건 지우기
	        if("del".equals(StringUtil.getString(dataMap.get("ETC_FDS_2"))))
	        {
	        	// 첨부파일 등록된 디비 데이터 삭제
	        	fileUploadDowloadDao.deleteAttcFileDtls(dataMap);

                // 원청첨부파일 Copy 대상건 실물 파일 삭제 금지
                if(!"99".equals(StringUtil.getString(dataMap.get("ETC_FDS_1"))) && !"K".equals(StringUtil.getString(dataMap.get("ETC_FDS_5"))))
                {
                	String savePath = contextRealPath + StringUtil.getString(dataMap.get("ATFL_STOR_PATH")) + StringUtil.getString(dataMap.get("ORI_ATFL_NM"));

	                File file = new File(savePath);
	
					if(file.exists())
					{
						// 실제 나스서버에 등록된 첨부파일 삭제
						deleteFile(file);
					}
                }
	        }
	        else
	        {
	        	// 첨부파일 이미지 실제 사용여부로 전환 : ETC_FDS_1 = '1' 업데이트 처리
	        	fileUploadDowloadDao.updateAttcFileDtls(dataMap);
	        }
        }
    }
    
    private synchronized void deleteFile(File file) {
    	file.delete();
    }
}