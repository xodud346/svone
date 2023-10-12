package com.ssp.bo.co.service;

import java.util.List;
import java.util.Map;

public interface CoSampleExcelService {
    boolean validation(List<Map<String, String>> data);
    
    boolean insert(List<Map<String, String>> data);
}
