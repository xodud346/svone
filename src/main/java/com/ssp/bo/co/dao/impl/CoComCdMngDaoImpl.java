package com.ssp.bo.co.dao.impl;


import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Repository;

import com.ssp.bo.co.dao.CoComCdMngDao;
import com.ssp.core.co.dao.CommonDAO;

/**
 * <pre></pre>
 * @title
 * @desc
 * @package com.ssp.core.co.dao.impl
 * <pre>    CoComCdMngDaoImpl</pre>
 * @author lee
 * @since 2022-01-25
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2022. 01. 25.		lee	최초작성
 */
@Repository("coComCdMngDao")
public class CoComCdMngDaoImpl implements CoComCdMngDao {

    @Resource(name = "commonDAO")
    private CommonDAO commonDAO;

    /**
     * 분류코드 목록 카운트
     * @param searchMap Map
     * @return int
     */
    @Override
    public int selectComCdClsfSearchCount(Map<String, Object> searchMap) {
        return commonDAO.selectCount("coComCdMng.selectComCdClsfSearchCount", searchMap);
    }

    /**
     * 분류코드 목록
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectComCdClsfSearchList(Map<String, Object> searchMap) {
        return commonDAO.selectList("coComCdMng.selectComCdClsfSearchList", searchMap);
    }

    /**
     * 상세코드 목록
     * @param searchMap Map
     * @return List
     */
    @Override
    public List<Map<String, Object>> selectComCdClsfDtlSearchList(Map<String, Object> searchMap) {
        return commonDAO.selectList("coComCdMng.selectComCdClsfDtlSearchList", searchMap);
    }

    /**
     * 분류코드 등록
     * @param saveMap Map
     * @return int
     * @throws Exception sqlException
     */
    @Override
    public int insertComCdClsf(Map<String, Object> saveMap) throws Exception {
        return commonDAO.insert("coComCdMng.insertComCdClsf", saveMap);
    }

    /**
     * 분류코드 수정
     * @param saveMap Map
     * @return int
     * @throws Exception sqlException
     */
    @Override
    public int updateComCdClsf(Map<String, Object> saveMap) throws Exception {
        return commonDAO.update("coComCdMng.updateComCdClsf", saveMap);
    }

    /**
     * 분류코드 삭제
     * @param saveMap Map
     * @return int
     * @throws Exception sqlException
     */
    @Override
    public int deleteComCdClsf(Map<String, Object> saveMap) throws Exception {
        return commonDAO.update("coComCdMng.deleteComCdClsf", saveMap);
    }

    /**
     * 상세코드 등록
     * @param saveMap Map
     * @return int
     * @throws Exception sqlException
     */
    @Override
    public int insertComCdClsfDtl(Map<String, Object> saveMap) throws Exception {
        return commonDAO.update("coComCdMng.insertComCdClsfDtl", saveMap);
    }

    /**
     * 상세코드 수정
     * @param saveMap Map
     * @return int
     * @throws Exception sqlException
     */
    @Override
    public int updateComCdClsfDtl(Map<String, Object> saveMap) throws Exception {
        return commonDAO.update("coComCdMng.updateComCdClsfDtl", saveMap);
    }

    /**
     * 상세코드 삭제
     * @param saveMap Map
     * @return int
     * @throws Exception sqlException
     */
    @Override
    public int deleteComCdClsfDtl(Map<String, Object> saveMap) throws Exception {
        return commonDAO.update("coComCdMng.deleteComCdClsfDtl", saveMap);
    }

    /**
     * 상세코드가 존재하는지 확인한다.
     * @param saveMap Map
     * @return int
     */
    @Override
    public int selectComCdClsfDtlCount(Map<String, Object> saveMap) throws Exception {
        return commonDAO.selectCount("coComCdMng.selectComCdClsfDtlCount", saveMap);
    }

    /**
     * 분류코드가 존재하는지 확인
     * @param saveMap Map
     * @return int
     * @throws Exception exception
     */
    @Override
    public int selectComCdClsCount(Map<String, Object> saveMap) throws Exception {
        return commonDAO.selectCount("coComCdMng.selectComCdClsCount", saveMap);
    }

    /**
     * 공통코드 엑셀 다운로드
     * @param searchMap Map
     * @return
     * @throws Exception
     */
	@Override
	public List<Map<String, Object>> comCodeExcelList(Map<String, Object> searchMap) throws Exception {
        return commonDAO.selectList("coComCdMng.comCodeExcelList", searchMap);
	}
}
