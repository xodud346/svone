package com.ssp.bo.rd.util;

import java.util.ArrayList;
import java.util.List;

public class StringUtils {

	public static List<String> makeList(String strParam, String strDelimiter)
	{
		List<String> arrParam = new ArrayList<String>();
	
		String params[] = strParam.split(strDelimiter);
	
		for(int i = 0 ; i < params.length ; i++)
		{
			arrParam.add(params[i].trim());
		}

		return arrParam;
	}
}