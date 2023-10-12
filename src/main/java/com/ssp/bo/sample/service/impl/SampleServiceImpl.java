package com.ssp.bo.sample.service.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssp.bo.sample.service.SampleService;

/**
 * 
 * <pre>
 * @desc    제공된 예제는 샘플용으로 작성된 코드로 참고용으로만
 *          사용하시기 바랍니다.
 * @package com.nexacro.sample.service.impl
 * <pre>
 * 
 * @author  TOBESOFT
 * @since   2018. 1. 18.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2018. 1. 18.		TOBESOFT	최초작성
 */
@Service
public class SampleServiceImpl implements SampleService {
    @Autowired
    private SqlSession sqlSession;
    
    @Override
	public List<Map<String,Object>> selectSampleListMap(Map<String,String> searchInfo) {
    	return sqlSession.selectList("Sample.selectSampleListMap", searchInfo);
	}

}