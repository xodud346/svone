package com.ssp.bo.rd.util;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.VariableList;
import com.ssp.core.common.property.SspPropertyService;

@Controller
public class DownloadServlet extends javax.servlet.http.HttpServlet implements javax.servlet.Servlet {

	Logger logger = LoggerFactory.getLogger(this.getClass());
	protected static SspPropertyService propertiesService;

	@Autowired
	void setSspPropertyService(SspPropertyService propertiesService) {
		DownloadServlet.propertiesService = propertiesService;
	}
	
	/**
	 * file_path 한글로 받을 때 URIEncoding 해 줘야함
	 * 그냥 받으면 꺠짐
	 * 
	 * 되는거 예제:
	 * /DownloadServlet?file_path=/file_data/common/01_system/cs02/commFileMultiUpload00_1330655528822.uplo
adedFile&file_name=%EC%86%8C%EC%8A%A4%EC%95%94%ED%98%B8%ED%99%94.hwp
	 * 
	 * 안되는거 예제:
	 * /DownloadServlet?file_path=/file_data/common/01_system/cs02/commFileMultiUpload00_1330655528822.uploadedFile&file_name=한글파일.hwp
	 */
	
    @RequestMapping(value = "/DownloadServlet.do")
	public void service(HttpServletRequest request, HttpServletResponse res) throws ServletException, IOException {
		
		request.setCharacterEncoding("UTF-8");
		
		String contextRealPath = propertiesService.getString("file.path.root");//request.getSession().getServletContext().getRealPath("/");
		String savePath = contextRealPath + File.separator + request.getParameter("file_path");
		  
		logger.debug("파일업로드 경로 [savePath] ======> " + savePath);
		
		PlatformData resData = new PlatformData();
		VariableList resVarList = resData.getVariableList();
		
		if(request.getParameter("file_path") != null
				&& !"".equals(request.getParameter("file_path"))
				//&& request.getParameter("file_path").indexOf("file_data")>=0
				&& request.getParameter("file_path").indexOf("../")==-1
				&& request.getParameter("file_path").indexOf("..\\")==-1)
		{
		
			String name = request.getParameter("file_name");
//			String filename = new String(name.getBytes("iso8859-1"), "UTF-8");
			// 자바 I/O 를 이용하여 다운로드해 준다.
			byte[] buffer = new byte[1024];
			ServletOutputStream out = null;
			BufferedInputStream in = null;
			
			File file = null;
			
			try {
				
				logger.debug("파일명 ======> " + URLEncoder.encode(name,"UTF-8").replaceAll("\\+", "%20"));
				
				// 경로에서 파일명분리
				int lastIndex = savePath.lastIndexOf("/");
				String filePhysicalName = savePath.substring(lastIndex+1);

				// EgovSftpTool.download("/tomcat7/"+filePhysicalName, savePath);
				
				file = new File(savePath);
				if(file.exists()) {
					out = res.getOutputStream();
					res.setContentType("utf-8");
					res.setContentType("application/octet-stream");;
					res.setHeader("Accept-Ranges", "bytes");
					res.setHeader("Content-Disposition", "attachment;filename=\"" + URLEncoder.encode(name,"UTF-8").replaceAll("\\+", "%20") + "\"");
					long len = file.length();
					res.setContentLength((int)len);
					in = new BufferedInputStream(new FileInputStream(file));
					int n = 0;
					while ((n = in.read(buffer, 0, 1024)) != -1) {
						out.write(buffer, 0, n);
					}// while
				
				} else {
					logger.debug("해당파일이 없습니다.");
				}
			} catch (Exception e) {
				
			} finally {
				if (in != null)
					try {
						in.close();
					} catch (Exception e) {}
				if (out != null)
					try {
						out.close();
					} catch (Exception e) {}
				//file.delete();
			}// finally
		}
		else{
			System.out.println("허용 하지 않는 접근");
		}
		
	}// service
	

	private String toKor(String str) {
		String s = null;
		try {
			if(str == null)
			{
				s = str;
			}
			else{
				s = new String(str.getBytes(System.getProperty("file.encoding")), "EUC-KR");
			}
		} catch (UnsupportedEncodingException e) {
			s = new String(str);
		}
		return s;
	}
	
	private String toEng(String str) {
		String s = null;
		try {
			if(str == null)
			{
				s = str;
			}
			else{
				s = new String(str.getBytes("EUC-KR"), "ISO-8859-1");
			}
		} catch (UnsupportedEncodingException e) {
			s = new String(str);
		}
		return s;
	}
	
}
