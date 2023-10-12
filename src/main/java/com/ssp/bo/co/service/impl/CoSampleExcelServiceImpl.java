package com.ssp.bo.co.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.ssp.bo.co.service.CoSampleExcelService;

@Service
public class CoSampleExcelServiceImpl implements CoSampleExcelService {
    @Override
    public boolean validation(List<Map<String, String>> data) {
        for (Map<String, String> map : data) {
            map.put("error_col", "col1|col2|col3|col4");
            map.put("error_msg", "err_msg1|err_msg1|err_msg3|err_msg4");
        }
        
        System.out.println("Validation!!");
        return false;
    }

    @Override
    public boolean insert(List<Map<String, String>> data) {
        System.out.println("Insert!!");
        return false;
    }

}
