package com.ssp.bo.pr.util;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.Reader;
import java.net.URLEncoder;
import java.sql.Clob;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ssp.bo.pr.service.PrProductNewService;
import com.ssp.core.common.property.SspPropertyService;

@Controller
public class PrdUtils extends javax.servlet.http.HttpServlet implements javax.servlet.Servlet {
	Logger logger = LoggerFactory.getLogger(this.getClass());
	@Autowired
    private PrProductNewService prProductNewService;

	protected static SspPropertyService propertiesService;
	@Autowired
	void setSspPropertyService(SspPropertyService propertiesService) {
		PrdUtils.propertiesService = propertiesService;
	}

    /**
     * <pre>
     * 1. MethodName : service
     * 2. ClassName  : PrdUtils
     * 3. Comment    : 상품 첨부파일 다운로드(신규상품요청)
     * 4. 작성자     : 김주화
     * 5. 작성일     : 2022.04.29
     * </pre>
     * @return NexacroResult
     */
    @RequestMapping("/pr-download-file.do")
    public void service(HttpServletRequest request, HttpServletResponse res)  throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        ServletOutputStream out = null;
        BufferedInputStream in  = null;

        try {
            Map<String, Object> searchMap = new HashMap<String, Object>();
            searchMap.put("DOC_REG_ID" , request.getParameter("DOC_REG_ID" ));
            searchMap.put("DOC_REG_SEQ", request.getParameter("DOC_REG_SEQ"));

            Map<String, Object> atfl   = this.prProductNewService.selectNewPrdReqFileList(searchMap).get(0);
            String              path   = propertiesService.getString("file.path.root") + atfl.get("ATFL_STOR_PATH") + atfl.get("ORI_ATFL_NM");
            String              name   = (String)atfl.get("ATFL_NM");
            File                file   = new File(path);
            byte[]              buffer = new byte[1024];

            if(file.exists()) {
                out = res.getOutputStream();
                res.setContentType("utf-8");
                res.setContentType("application/octet-stream");
                res.setHeader("Accept-Ranges", "bytes");
                res.setHeader("Content-Disposition", "attachment;filename=\"" + URLEncoder.encode(name,"UTF-8").replaceAll("\\+", "%20") + "\"");
                long len = file.length();
                res.setContentLength((int)len);
                in = new BufferedInputStream(new FileInputStream(file));
                int n = 0;

                while ((n = in.read(buffer, 0, 1024)) != -1) {
                    out.write(buffer, 0, n);
                }
            } else {
                logger.debug("해당파일이 없습니다.");
            }
        } catch (Exception e) {
            this.logger.error("신규상품요청 첨부파일 다운로드");
        } finally {
            if (in  != null) try { in.close(); } catch (Exception e) {}
            if (out != null) try { out.close(); } catch (Exception e) {}
        }
    }

	/**
	 * CLOB to String
	 * @param data
	 * @param key
	 * @return
	 */
	public static String clobToString(Map<String, Object> data, String key) {
    	Reader reader = null;
    	StringBuffer out = new StringBuffer();
		try {
			if(data.get(key) != null) {
				Clob clob = (Clob) data.get(key);
		        reader = clob.getCharacterStream();
				out = new StringBuffer();
		        char[] buff = new char[1024];
		        int nchars = 0;
		        
		        while((nchars = reader.read(buff))>0){
		        	out.append(buff,0,nchars);
		        }
		        reader.close();
			}
		} catch (Exception e) {
		} finally {
			if(reader != null) {
				try {
					reader.close();
				} catch (IOException e) {
				}
			}
		}
        return out.toString();
    }
	
	
}
