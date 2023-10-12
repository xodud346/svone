package com.ssp.bo.od.util;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

public class OdBoUtils {
    public static NexacroResult convExceptionToResult(Exception ex) {
        NexacroResult ret = new NexacroResult();
        ret.setErrorCode(-9999);
        ret.setErrorMsg(ex.getMessage());
        return ret;
    }
}
