<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<form name="inform" action="/co/st-trans-le.do" method="post">
<input type="text" id=co_cd name="co_cd" value="${co_cd }">
<input type="text" id="gdocNo" name="gdocNo" value="${gdocNo }">
<input type="text" id="print" name="print" value="y">
<input type="submit" value="송신">
</form>