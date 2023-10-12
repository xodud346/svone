package com.ssp.bo.co.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.ssp.bo.co.dao.CoMbrSysCnctLogDao;
import com.ssp.bo.co.service.CoMbrSysCnctLogService;

/**
 * <pre>
 * @title  회원 접속 로그 정보
 * @package com.ssp.bo.co.service.impl
 * <pre>    CoMbrSyscnctLogServiceImpl
 * @author 박성진
 * @since 2022-03-18
 * @version 1.0
 * @see CoMbrSyscnctLogServiceImpl
 * =================== 변경 내역 ==================`
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022-03-18	박성진	최초작성
 */
@Service("coMbrSysCnctLogService")
public class CoMbrSysCnctLogServiceImpl implements CoMbrSysCnctLogService {

    @Resource(name="coMbrSysCnctLogDao")
    private CoMbrSysCnctLogDao coMbrSysCnctLogDao;
	
    /**
    * 1. MethodName : selectCoMbrSysCnctLogCount
    * 2. ClassName : CoMbrSysCnctLogServiceImpl
    * 3. Comment : 로그 접속 목록 카운트 조회
    *
    * @param searchMap Map
    * @return NexacroResult
    */
	@Override
	public int selectCoMbrSysCnctLogListCount(Map<String, Object> searchMap) throws Exception {
		// TODO Auto-generated method stub
		return coMbrSysCnctLogDao.selectCoMbrSysCnctLogListCount(searchMap);
	}

	
    /**
    *
    * 1. MethodName : selectCoMbrSysCnctLogList
    * 2. ClassName : CoMbrSysCnctLogServiceImpl
    * 3. Comment : 접속 로그 목록 조회
    *
    * @param commandMap Map
    * @return NexacroResult
    */
	@Override
	public List<Map<String, Object>> selectCoMbrSysCnctLogList(Map<String, Object> searchMap) {
		// TODO Auto-generated method stub
		return coMbrSysCnctLogDao.selectCoMbrSysCnctLogList(searchMap);
	}


	
    /**
    *
    * 1. MethodName : getExceptionInfoList
    * 2. ClassName : CoMbrSysCnctLogServiceImpl
    * 3. Comment : 접속 로그 저장
    *
    * @param commandMap Map
    * @return NexacroResult
    * @throws Exception Exception
    */
	@Override
	public NexacroResult saveLog(List<Map<String, Object>> commandMapList) throws Exception {
		
        NexacroResult result = new NexacroResult();

//        // 저장
//        for( Map<String, Object> data : commandMapList ) {
//            int saveType = StringUtil.getInt(data.get("DataSetRowType"));
//            int rtn      = 0;
//            
//            String msg = "";
//            
//            Map<String, Object> saveMap = CommonUtil.toCamelCaseMap(data);
//
//            if( saveType == 1 ) {           // 신규
//                rtn = coMbrSysCnctLogDao.insertScrnPrsn(saveMap);
//                msg = "등록";
//            } else if( saveType == 2 ) {    //  수정
//                rtn = coMbrSysCnctLogDao.updateScrnPrsn(saveMap);
//                msg = "수정";
//            } else if( saveType == 3 ) {    //  삭제
//                rtn = coMbrSysCnctLogDao.deleteScrnPrsn(saveMap);
//                msg = "삭제";
//            }
//            
//            if( rtn <= 0 ) throw new Exception("메인코드 " + msg + " 실패");
//        }

        return result;
	}
}
