package com.ssp.bo.pr.util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.diquest.ir.client.command.CommandSearchRequest;
import com.diquest.ir.common.exception.IRException;
import com.diquest.ir.common.msg.protocol.Protocol;
import com.diquest.ir.common.msg.protocol.query.Query;
import com.diquest.ir.common.msg.protocol.query.QuerySet;
import com.diquest.ir.common.msg.protocol.result.Result;
import com.diquest.ir.common.msg.protocol.result.ResultSet;
import com.ssp.core.util.StringUtil;

public class DiquestAPI {

    /**
     * @param args
     * @throws IRException
     * @author SeongHyeokShin
     */
    // public static void main(String args[])throws IRException{
    public static List<Map<String, Object>> diquestRequest(Map<String, Object> param) {
        List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
        HashMap<String, Object> data = new HashMap<String, Object>();

        data.put("collectionID", StringUtil.getString(param.get("COLLECTION"))); // 컬렉션명(SSP,RND)
        data.put("categoryFieldID", "CATE_PRD_NM"); // 1. CATE_PRD_NM (상품명) / 2.CATE_ATTR (상품명,대표규격) / 3. CATE_TOT(상품명,제조사명,상품분류명)
        data.put("resultSize", StringUtil.getString(param.get("RESULTSIZE"))); // 추천 카테고리 결과 갯수
        data.put("keywords", StringUtil.getString(param.get("PRNM"))); // 검색 키워드
        data.put("option", "1"); // 분류요청 옵션. SVM의 경우 1이면 score가 ,2이면 probability(정확도 %)가 리턴됨
        data.put("querySize", Integer.parseInt(StringUtil.getString(param.get("QUERYSIZE")))); // 쿼리 갯수 (컬랙션 명 갯수와 일치해야함.)
        data.put("ip", StringUtil.getString(param.get("IP")));
        data.put("port", StringUtil.getString(param.get("PORT")));

        try {
            HashMap<String, Object> resultMap;
            resultMap = getQuery(data);

            ArrayList<HashMap<String, Object>> SSP = (ArrayList<HashMap<String, Object>>) resultMap.get("SSP");// SSP
            ArrayList<HashMap<String, Object>> RND = (ArrayList<HashMap<String, Object>>) resultMap.get("RND");// RND

            for (int i = 0; i < SSP.size(); i++) {
                Map<String, Object> map = new HashMap<>();
                map.put("PRD_CLCD", SSP.get(i).get("cateCode"));
                map.put("PRD_CLSF_NM", SSP.get(i).get("cateNm"));
                map.put("SCORE", SSP.get(i).get("cateScore"));
                map.put("MALL_SPR_CD", "10");
                map.put("CO_CD", "1000");
                list.add(map);
            }

            for (int i = 0; i < RND.size(); i++) {
                Map<String, Object> map = new HashMap<>();
                map.put("PRD_CLCD", RND.get(i).get("cateCode"));
                map.put("PRD_CLSF_NM", RND.get(i).get("cateNm"));
                map.put("SCORE", RND.get(i).get("cateScore"));
                map.put("MALL_SPR_CD", "20");
                map.put("CO_CD", "1000");
                list.add(map);
            }
        } catch (IRException e) {
            // TODO Auto-generated catch block
        } catch (Exception e) {
            // TODO Auto-generated catch block
        }

        return list;
    }

    /* 실제 호출 하셔야 하는 함수 */
    public static HashMap< String,Object> getQuery(HashMap< String,Object> data) throws IRException{
        //해당 IP는 개발 및 품질 검색서버에 맞게 IP 설정 하셔야 합니다. 
        //
        String ip = (String) data.get("ip"); // 개발 ip : 10.59.132.131, 품질 ip : 10.59.132.4
        int port = Integer.parseInt((String) data.get("port"));  // 개발 port : 5555, 품질 port : 5555
        
        //전달받은 필요 변수 정리
        String collectionsID = (String) data.get("collectionID");
        String keywords = (String) data.get("keywords");
        int querySize = (int) data.get("querySize");
        
        HashMap< String,Object> resultMap = new HashMap< String,Object>();
        ArrayList< HashMap< String,Object>> SSP = new ArrayList< HashMap< String,Object>>();
        ArrayList< HashMap< String,Object>> RND = new ArrayList< HashMap< String,Object>>();
        
        QuerySet querySet = new QuerySet((int) data.get("querySize"));
        String [] collectionId= collectionsID.split(",");
        
        for(int a=0;a< querySize;a++){
            querySet.addQuery(makeQuery(data,collectionId[a]));
        }
        
        CommandSearchRequest command = new CommandSearchRequest(ip, port);

        if (!keywords.equals("")) {
            int rval = command.request(querySet);
            ResultSet result = command.getResultSet();
            Result[] resultList = result.getResultList();
            if(querySize< 2){
                if(collectionId[0].equals("SSP")) {
                    SSP = getResultList(resultList[0]);
                }else {
                    RND = getResultList(resultList[0]);
                    
                }
            }else{
                for(int i=0;i< querySize;i++){
                    if(i==0){
                        SSP = getResultList(resultList[i]);
                        
                    }else{
                        RND = getResultList(resultList[i]);
                        
                    }
                }
            }
        }
        
        resultMap.put("SSP", SSP); 
        resultMap.put("RND", RND); 
               
        return resultMap;
    }

    public static Query makeQuery(HashMap< String,Object> data, String collectionId){
        //전달받은 변수 정리
        String categoryFieldID = (String) data.get("categoryFieldID");
        String resultSize = (String) data.get("resultSize");
        String keywords = (String) data.get("keywords");
        String option = (String) data.get("option");


        Query query = new Query();
        // 컬렉션 설정
        query.setFrom(collectionId);
        // 부가옵션 설정
        query.setSearch(false);
        query.setDebug(false);
        query.setResultModifier("category");

        // 카테고리 필드 설정
        query.setValue(Protocol.CategoryOption.OP_CATEGORY_FIELD,categoryFieldID );
        // 분류요청 키워드 설정
        query.setValue(Protocol.CategoryOption.OP_CATEGORY_KEYWORD, keywords);
        // 분류요청 옵션
        query.setValue(Protocol.CategoryOption.OP_CATEGORY_OPTION, option);
        // 분류결과 개수 (default : 5)
        query.setValue(Protocol.CategoryOption.OP_CATEGORY_RESULT_SIZE, resultSize);

        // 지식사전 setting
        // 카테고리 불용어사전
        query.setValue(Protocol.CategoryOption.OP_CATEGORY_STOPWORD, "false");
        // 카테고리 추천사전
        query.setValue(Protocol.CategoryOption.OP_CATEGORY_RECOMMEND, "false");
        
     
        return query;
         
    }

    public static ArrayList< HashMap< String,Object>> getResultList(Result result){
        ArrayList< HashMap< String, Object>> returnList = new ArrayList< HashMap< String, Object>>();
        // category result
        String categoryResult = result.getValue(Protocol.CategoryOption.OP_RESULT_CATEGORY);
        // category prob. SVM의 경우 option=1이면 score가, option=2이면 probability가 리턴됨
        String catPR = result.getValue(Protocol.CategoryOption.OP_RESULT_PROB);
        
        if(categoryResult == null) {
			return returnList;
		}
         
        // 결과 split
        String[] splitResult = categoryResult.split("\n");
        String[] splitResultPR = catPR.split("\n");
        
        for (int i = 0; i <  splitResult.length; i++) {
            HashMap< String, Object> resultMap = new HashMap< String, Object>();
            
            String [] temp = splitResult[i].split("_"); // 카테고리 코드와 명칭을 분리
            if(temp.length<2) {
                continue;
            }
            resultMap.put("cateCode", temp[0]);
            resultMap.put("cateNm", temp[1]);
            resultMap.put("cateScore", splitResultPR[i]);
            returnList.add(resultMap);
        }
        return returnList;
    }
}
