/*------------------------------------------------------------------------------
 * NAME : FileUploadDowloadDaoImpl.java
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
package com.ssp.bo.rd.dao.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.ssp.bo.rd.dao.FileUploadDowloadDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre>
 *
 * @title   FileUploadDowloadDaoImpl
 * @@desc   R&D파일업로드다운로드서비스 DaoImpl
 * @package com.ssp.bo.rd.dao.Impl
 * <pre>
 * @author
 * @since 2022.04.20
 * @version 1.0
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022.04.20			       최초작성
 */

@SuppressWarnings("unchecked")
@Repository("fileUploadDowloadDao")
public class FileUploadDowloadDaoImpl implements FileUploadDowloadDao {

    @Resource(name="commonDAO")
    private CommonDAO commonDAO;

    @Override
    public List<Map> selectAttcFileDtlsInq(Map<String, Object> map) throws Exception {
     	return commonDAO.selectList("FileUploadDowload.selectAttcFileDtlsInq", map);
    }

    @Override
    public int selectAttcFileDtlsPKey(String map) throws Exception {
     	return commonDAO.selectCount("FileUploadDowload.selectAttcFileDtlsPKey", map);
    }

    @Override
    public int insertFileUploadDowload(List<HashMap<String, Object>> map) throws Exception {
     	return commonDAO.insert("FileUploadDowload.insertFileUploadDowload", map);
    }

    @Override
    public int updateAttcFileDtls(Map<String, Object> map) throws Exception {
     	return commonDAO.update("FileUploadDowload.updateAttcFileDtls", map);
    }

    @Override
    public int deleteAttcFileDtls(Map<String, Object> map) throws Exception {
     	return commonDAO.delete("FileUploadDowload.deleteAttcFileDtls", map);
    }
}