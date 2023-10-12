package com.ssp.bo.pc.util;

public class PrcUtils {
	
	/**
	 * 현재 진열상태, 바뀔진열상태 와 자동로직여부를 비교하여 진열상태 업데이트여부결정
	 * @param data
	 * @param key
	 * @return
	 */
	public static Boolean dispLogicCheck(String curDispStatsCd, String calDispStatsCd, String autoLogicEmYn) {
		Boolean isUpdate = false;
		
		if("10".equals(curDispStatsCd)) {
			if("20".equals(calDispStatsCd)) {
				isUpdate = true;
			}else if("30".equals(calDispStatsCd)) {
				isUpdate = true;
			}
		}else if("20".equals(curDispStatsCd)) {
			if("10".equals(calDispStatsCd)) {
				if("Y".equals(autoLogicEmYn)) {
					isUpdate = true;
				}
			}else if("30".equals(calDispStatsCd)) {
				isUpdate = true;
			}
		}else if("30".equals(curDispStatsCd)) {
			if("10".equals(calDispStatsCd)) {
				if("Y".equals(autoLogicEmYn)) {
					isUpdate = true;
				}
			}else if("20".equals(calDispStatsCd)) {
				if("Y".equals(autoLogicEmYn)) {
					isUpdate = true;
				}
			}
		}
		
        return isUpdate;
    }
	
	
}
