<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko" class="no-js is-sm">
<head>
<%@ include file="/WEB-INF/jsp/am/include/head.jsp"%>
<style type="text/css">
<!--
-->
</style>
<script type="text/javascript">
$(function(){

	/*******************************
	 *  구현예정(목록)
	 *******************************/
	makeDevList = function(){
		var list = [];

		// 공통
		list.push({gubun:"공통",id:"-",type:"-",name:"클립보드 검색 팝업",desc:"AN_AN6_BO 화면설계서(팝업정) 참고",inParam:"",outParam:""});
		list.push({gubun:"공통",id:"SSP_BO_MA_43",type:"-",name:"첨부파일 미리보기",desc:"이미지 클릭시 미리보기 팝업",inParam:"",outParam:""});
		list.push({gubun:"공통",id:"SSP_BO_MA_82",type:"단일",name:"사업장 조회",desc:"사업장 조회 목록 화면",inParam:"사업장ID,사업장명,사업자번호",outParam:"사업장ID,사업장명,사업자번호"});
		list.push({gubun:"공통",id:"SSP_BO_MA_80",type:"단일",name:"운영 단위 조회",desc:"부서 조회 목록 화면",inParam:"운영단위ID,운영단위명",outParam:"운영단위ID,운영단위명,사용여부"});
		list.push({gubun:"공통",id:"SSP_BO_MA_44",type:"멀티",name:"운영 단위 조회",desc:"운영단위 조회 목록 화면<br>공지사항 목록",inParam:"운영단위ID,운영단위명",outParam:"운영단위ID,운영단위명,사용여부"});
		list.push({gubun:"공통",id:"SSP_BO_MA_81",type:"단일",name:"부서 조회",desc:"부서 조회 목록 화면",inParam:"부서ID,부서명,부서코드,사업장명,운영단위명",outParam:"부서ID,부서명,부서코드,사업장명,운영단위명"});
		list.push({gubun:"공통",id:"SSP_BO_MA_48",type:"멀티",name:"부서 조회",desc:"부서 조회 목록 화면",inParam:"부서ID,부서명,부서코드,사업장명,운영단위명",outParam:"부서ID,부서명,부서코드,사업장명,운영단위명"});
		list.push({gubun:"공통",id:"SSP_BO_CN_30",type:"멀티",name:"서비스 담당자 조회",desc:"VOC 현황 조회 목록",inParam:"사번,담당자명,조직코드,조직코드명,직무",outParam:"사번,담당자명,조직코드,조직코드명,직무"});
		list.push({gubun:"공통",id:"SSP_BO_CN_29",type:"단일",name:"상품ID 조회",desc:"VOC 현황 조회 목록",inParam:"상품ID,상품명,규격,제조사명",outParam:"상품ID,상품명,규격,제조사명"});
		list.push({gubun:"공통",id:"SSP_BO_OA_31",type:"멀티",name:"상품ID 조회",desc:"주문 관리 목록 화면",inParam:"상품ID,상품명,규격,제조사명",outParam:"상품ID,상품명,규격,제조사명"});


		list.push({gubun:"",id:"",type:"",name:"",desc:"",inParam:"",outParam:""});
		// 고객
		list.push({gubun:"고객",id:"SSP_BO_MA_40",type:"멀티",name:"사업장 조회",desc:"사업장 조회 목록 화면",inParam:"",outParam:""});
		list.push({gubun:"고객",id:"SSP_BO_MA_42",type:"멀티",name:"법인 조회",desc:"사업장 조회 목록 화면",inParam:"",outParam:""});
		list.push({gubun:"고객",id:"SSP_BO_MA_41",type:"멀티",name:"산업군 조회",desc:"사업장 조회 목록 화면",inParam:"",outParam:""});
		list.push({gubun:"고객",id:"SSP_BO_MA_67",type:"단일",name:"영업 담당자 조회",desc:"사업장 조회 목록 화면",inParam:"사번,담당자명,조직코드,조직코드명",outParam:"사번,담당자명,조직코드,조직코드명"});
		list.push({gubun:"고객->공통",id:"SSP_BO_MA_43",type:"-",name:"첨부파일 미리보기",desc:"이미지 클릭시 미리보기 팝업",inParam:"",outParam:""});
		list.push({gubun:"고객->공통",id:"SSP_BO_MA_44",type:"멀티",name:"운영 단위 조회",desc:"운영단위 조회 목록 화면",inParam:"운영단위ID,운영단위명",outParam:"운영단위ID,운영단위명,사용여부"});
		list.push({gubun:"고객->공통",id:"SSP_BO_MA_45",type:"단일",name:"영업팀 조회",desc:"운영단위 조회 목록 화면",inParam:"영업담당,영업팀코드,영업팀명",outParam:"영업담당,영업팀코드,영업팀명"});
		list.push({gubun:"고객->공통",id:"SSP_BO_MA_46",type:"단일",name:"서비스팀 조회",desc:"운영단위 조회 목록 화면",inParam:"서비스팀ID,서비스팀명,팀속성",outParam:"서비스팀ID,서비스팀명,팀속성(상품진열관리주체)"});
		list.push({gubun:"고객->공통",id:"SSP_BO_MA_79",type:"단일",name:"운영팀 조회",desc:"운영단위 조회 목록 화면",inParam:"운영팀ID,운영팀명,팀속성",outParam:"운영팀ID,운영팀명,팀속성(상품진열관리주체)"});
		list.push({gubun:"고객",id:"SSP_BO_MA_66",type:"상세관리",name:"참조코드 상세관리",desc:"운영단위 조회 상세/수정 화면 (운영단위 코드관리, 부서코드 관리)",inParam:"",outParam:""});
		list.push({gubun:"고객",id:"SSP_BO_MA_47",type:"상세관리",name:"제어 권한 설정",desc:"운영단위 조회 상세/수정 화면",inParam:"",outParam:""});
		list.push({gubun:"고객",id:"SSP_BO_MA_68",type:"상세관리",name:"부서 입고 책임자 설정",desc:"운영단위 조회 상세/수정 화면 > 제어 권한 설정 > 입고레벨",inParam:"",outParam:""});
		list.push({gubun:"고객",id:"SSP_BO_MA_69",type:"상세관리",name:"운영 단위 입고 책임자 설정",desc:"운영단위 조회 상세/수정 화면 > 제어 권한 설정 > 입고레벨",inParam:"",outParam:""});
		list.push({gubun:"고객->공통",id:"SSP_BO_MA_48",type:"멀티",name:"부서 조회",desc:"부서 조회 목록 화면",inParam:"부서ID,부서명,부서코드,사업장명,운영단위명",outParam:"부서ID,부서명,부서코드,사업장명,운영단위명"});
		list.push({gubun:"고객->공통",id:"SSP_BO_MA_82",type:"단일",name:"사업장 조회",desc:"부서 조회 목록 화면",inParam:"사업장ID,사업장명,사업자번호",outParam:"사업장ID,사업장명,사업자번호"});
		list.push({gubun:"고객->공통",id:"SSP_BO_MA_80",type:"단일",name:"운영 단위 조회",desc:"부서 조회 목록 화면",inParam:"운영단위ID,운영단위명",outParam:"운영단위ID,운영단위명,사용여부"});
		list.push({gubun:"고객->공통",id:"SSP_BO_MA_81",type:"단일",name:"부서 조회",desc:"부서 조회 목록 화면",inParam:"부서ID,부서명,부서코드,사업장명,운영단위명",outParam:"부서ID,부서명,부서코드,사업장명,운영단위명"});
		list.push({gubun:"고객",id:"SSP_BO_MA_49",type:"멀티",name:"입고 담당자 조회",desc:"부서 조회 목록 화면",inParam:"회원ID,회원명,부서ID,부서명",outParam:"회원ID,회원명,부서ID,부서명"});
		list.push({gubun:"고객",id:"SSP_BO_MA_50",type:"멀티",name:"회원 조회",desc:"회원 조회 목록 화면",inParam:"회원ID,회원명,로그인ID",outParam:"회원ID,회원명,로그인ID"});
		list.push({gubun:"고객",id:"SSP_BO_MA_82",type:"단일",name:"회원 조회",desc:"회원 조회 목록 화면",inParam:"회원ID,회원명,로그인ID",outParam:"회원ID,회원명,로그인ID"});
		list.push({gubun:"고객",id:"SSP_BO_MA_65",type:"멀티",name:"운영 단위 설정 조회",desc:"회원 조회 생성 화면 > 권한 별 운영 단위 설정 조회 팝업",inParam:"그룹ID,법인ID,사업장ID,운영단위ID,운영단위명",outParam:"그룹ID,법인ID,사업장ID,운영단위ID,운영단위명"});
		list.push({gubun:"고객",id:"SSP_BO_MA_51",type:"조회",name:"전체 이력 조회",desc:"회원 조회 상세/수정/복사 화면 > 회원정보Tab > 이력정보 > 전체 이력 조회",inParam:"",outParam:"상태, 수정일시, 수정자ID, 수정자"});
		list.push({gubun:"고객",id:"SSP_BO_MA_21",type:"상세관리",name:"배송지 관리",desc:"배송지 관리 목록 화면 > 배송지 생성 팝업",inParam:"",outParam:""});
		list.push({gubun:"고객",id:"SSP_BO_MA_71",type:"상세관리",name:"계정 관리",desc:"계정 관리 > 일괄 등록/수정",inParam:"",outParam:""});
		list.push({gubun:"고객",id:"SSP_BO_MA_75",type:"단일",name:"계정 조회",desc:"계정 관리 > 계정 생성 팝업",inParam:"계정ID,계정명,계정코드",outParam:"계정ID,계정명,계정코드"});
		list.push({gubun:"고객",id:"SSP_BO_MA_74",type:"상세관리",name:"계정 생성",desc:"계정 관리 > 계정 생성 팝업",inParam:"",outParam:""});
		list.push({gubun:"고객",id:"SSP_BO_MA_73",type:"멀티",name:"부서 추가",desc:"계정 관리 > 계정 생성 팝업<br>공통 부서조회와 유사함",inParam:"부서ID,부서명,부서코드",outParam:"부서ID,부서명,부서코드"});
		list.push({gubun:"고객",id:"SSP_BO_MA_76",type:"멀티",name:"계정 조회",desc:"부서/계정(부서 <- 계정을 관리) > 계정 조회 팝업",inParam:"계정ID,계정명,계정코드",outParam:"계정ID,계정명,계정코드"});

		list.push({gubun:"",id:"",type:"",name:"",desc:"",inParam:"",outParam:""});
		// SSP 상품
		list.push({gubun:"SSP상품",id:"SSP_BO_PA_15",type:"상세관리",name:"SSP카테고리 추가",desc:"상품관리 > 카테고리/속성관리 > 카테고리관리 > 생성<br>(SSP카테고리를 생성하는 팝업)",inParam:"",outParam:""});
		list.push({gubun:"SSP상품",id:"SSP_BO_PA_16",type:"상세관리",name:"상품군 SSP속성 관리",desc:"상품관리 > 카테고리/속성관리 > 카테고리관리 > 속성관리<br>(상품군에서 사용하는 SSP속성을 관리하는 팝업)",inParam:"",outParam:""});
		list.push({gubun:"SSP상품",id:"SSP_BO_PA_18",type:"상세관리",name:"SSP속성 추가",desc:"상품관리 > 카테고리/속성관리 > SSP속성관리 > 목록 > 생성<br>(SSP속성을 생성하는 팝업)",inParam:"",outParam:""});
		list.push({gubun:"SSP상품",id:"SSP_BO_PA_19",type:"상세관리",name:"SSP속성 상세",desc:"상품관리 > 카테고리/속성관리 > SSP속성관리 > 목록 > 상세/수정<br>(SSP속성을 수정하는 팝업)",inParam:"",outParam:""});
		list.push({gubun:"SSP상품",id:"SSP_BO_PA_23",type:"상세관리",name:"상품담당자 등록",desc:"상품관리 > 담당자관리 > 상품담당자관리 > 생성<br>(상품군에 상품담당자를 등록하는 팝업)",inParam:"",outParam:""});
		list.push({gubun:"SSP상품",id:"SSP_BO_PA_24",type:"상세관리",name:"상품담당자 상세",desc:"상품관리 > 담당자관리 > 상품담당자관리 > 상세/수정<br>(상품군에 등록된 상품담당자 정보확인 및 수정하는 팝업)",inParam:"",outParam:""});

		list.push({gubun:"",id:"",type:"",name:"",desc:"",inParam:"",outParam:""});
		// R&D 상품
		list.push({gubun:"R&D상품",id:"SSP_BO_RD_21",type:"상세관리",name:"등록불가 처리",desc:"R&D상품관리 > 상품등록 > 상품등록 > 생성 > 등록불가처리 팝업<br>(R&D상품을 등록불가 처리하는 팝업)",inParam:"",outParam:""});
		list.push({gubun:"R&D상품",id:"SSP_BO_RD_27",type:"상세관리",name:"R&D카테고리 추가",desc:"R&D상품관리 > 카테고리/속성관리 > 카테고리관리 > 생성<br>(R&D카테고리를 생성하는 팝업)",inParam:"",outParam:""});
		list.push({gubun:"R&D상품",id:"SSP_BO_RD_28",type:"상세관리",name:"상품군 R&D속성 관리",desc:"R&D상품관리 > 카테고리/속성관리 > 카테고리관리 > 속성관리<br>(상품군에서 사용하는 R&D속성을 관리하는 팝업)",inParam:"",outParam:""});
		list.push({gubun:"R&D상품",id:"SSP_BO_RD_30",type:"상세관리",name:"R&D속성 추가",desc:"R&D상품관리 > 카테고리/속성관리 > R&D속성관리 > 목록 > 생성<br>(R&D속성을 생성하는 팝업)",inParam:"",outParam:""});
		list.push({gubun:"R&D상품",id:"SSP_BO_RD_31",type:"상세관리",name:"R&D속성 상세",desc:"R&D상품관리 > 카테고리/속성관리 > R&D속성관리 > 목록 > 상세/수정<br>(R&D속성을 수정하는 팝업)",inParam:"",outParam:""});
		list.push({gubun:"R&D상품",id:"SSP_BO_RD_35",type:"상세관리",name:"R&D구매담당자 등록",desc:"",inParam:"",outParam:""});
		list.push({gubun:"R&D상품",id:"SSP_BO_RD_36",type:"상세관리",name:"R&D구매담당자 상세",desc:"",inParam:"",outParam:""});
		list.push({gubun:"R&D상품",id:"SSP_BO_RD_40",type:"상세관리",name:"R&D상품담당자 등록",desc:"",inParam:"",outParam:""});
		list.push({gubun:"R&D상품",id:"SSP_BO_RD_41",type:"상세관리",name:"R&D상품담당자 상세",desc:"",inParam:"",outParam:""});
		list.push({gubun:"R&D상품",id:"SSP_BO_RD_48",type:"상세관리",name:"MDSD 등록",desc:"",inParam:"",outParam:""});
		list.push({gubun:"R&D상품",id:"SSP_BO_RD_49",type:"상세관리",name:"MDSD 상세",desc:"",inParam:"",outParam:""});

		list.push({gubun:"",id:"",type:"",name:"",desc:"",inParam:"",outParam:""});
		// SSP 진역
		// R&D 진열
		// 전시상품 관리

		// 전시 관리
		list.push({gubun:"R&D상품",id:"SSP_BO_VA_02",type:"상세관리",name:"메인상품(PC) 상품선택",desc:"전시상품 생성 팝업",inParam:"",outParam:""});
		list.push({gubun:"R&D상품",id:"SSP_BO_CN_21",type:"단일",name:"메인상품(PC) 상품선택",desc:"BO 상품검색 공통 팝업",inParam:"상품ID",outParam:"상품ID,카테고리,상품명,대표규격,제조원,주문단위,SSP상품상태,공용/전용구분"});

		list.push({gubun:"",id:"",type:"",name:"",desc:"",inParam:"",outParam:""});
		// 주문
		list.push({gubun:"주문",id:"SSP_BO_OA_14",type:"-",name:"거래명세서 미리보기",desc:"주문 관리 목록 화면 > 거래명세서 출력 미리보기 팝업<br>(Reporing Tool 적용예정)",inParam:"",outParam:""});
		list.push({gubun:"주문",id:"SSP_BO_OA_28",type:"멀티",name:"주문 번호 조회",desc:"주문 관리 목록 화면",inParam:"사업장ID,주문번호",outParam:"사업장ID,주문번호"});
		list.push({gubun:"주문",id:"SSP_BO_OA_29",type:"멀티",name:"주문 상태 조회",desc:"주문 관리 목록 화면",inParam:"주문상태코드,주문상태명",outParam:"주문상태코드,주문상태명"});
		list.push({gubun:"주문",id:"SSP_BO_OA_30",type:"단일",name:"사업장 조회",desc:"주문 관리 목록 화면<br>(공통 사업장 조회와 유사)",inParam:"사업장ID,사업장명",outParam:"사업장ID,사업장명"});
		list.push({gubun:"주문->공통",id:"SSP_BO_OA_31",type:"멀티",name:"상품ID 조회",desc:"주문 관리 목록 화면",inParam:"상품ID,상품명,규격,제조사명",outParam:"상품ID,상품명,규격,제조사명"});
		list.push({gubun:"주문",id:"SSP_BO_OA_32",type:"단일",name:"주문 생성 유형 조회",desc:"주문 관리 목록 화면",inParam:"주문생성유형코드,주문생성유형명",outParam:"주문생성유형코드,주문생성유형명"});
		list.push({gubun:"주문",id:"SSP_BO_OA_33",type:"멀티",name:"주문자 조회",desc:"주문 관리 목록 화면",inParam:"운영단위ID,주문자ID,주문자명",outParam:"운영단위ID,주문자ID,주문자명"});
		list.push({gubun:"주문",id:"SSP_BO_OA_34",type:"단일",name:"플랜트 조회",desc:"주문 관리 목록 화면",inParam:"플랜트코드,플랜트명",outParam:"플랜트코드,플랜트명"});
		list.push({gubun:"주문",id:"SSP_BO_OA_35",type:"단일",name:"주문Block 조회",desc:"주문 관리 목록 화면",inParam:"주문Block코드,주문Block명",outParam:"주문Block코드,주문Block명"});
		list.push({gubun:"주문->협력사",id:"SSP_BO_OA_36",type:"단일",name:"협력사ID 조회",desc:"주문 관리 목록 화면",inParam:"협력사코드,협력사명,사업자번호,업종",outParam:"협력사코드,협력사명,사업자번호,업종"});
		list.push({gubun:"주문",id:"SSP_BO_OA_37",type:"멀티",name:"발주 번호 조회",desc:"주문 관리 목록 화면",inParam:"발주번호,상품명,주문번호,사업장ID,운영단위ID",outParam:"발주번호,상품명,주문번호,사업장ID,운영단위ID"});
		list.push({gubun:"주문",id:"SSP_BO_OA_38",type:"단일",name:"계정ID 조회",desc:"주문 관리 목록 화면",inParam:"사업장ID,사업장명,계정ID,계정코드,계정명",outParam:"사업장ID,사업장명,계정ID,계정코드,계정명"});
		list.push({gubun:"주문",id:"SSP_BO_OA_10",type:"상세관리",name:"배송 희망일 변경",desc:"주문 관리 상세 화면 > 고객정보(tab)",inParam:"",outParam:""});
		list.push({gubun:"주문",id:"SSP_BO_OA_11",type:"상세관리",name:"비용 이체 부서 변경",desc:"주문 관리 상세 화면 > 고객정보(tab)",inParam:"",outParam:""});
		list.push({gubun:"주문",id:"SSP_BO_OA_11",type:"조회",name:"이메일 발송 이력 조회",desc:"주문 관리 상세 화면 > 결재/발주(tabl)",inParam:"",outParam:""});
		list.push({gubun:"주문",id:"SSP_BO_OA_18",type:"상세관리",name:"유통 경로 변경",desc:"주문 관리 상세 화면 > 영업정보(tab)",inParam:"",outParam:""});
		list.push({gubun:"주문",id:"SSP_BO_OA_12",type:"단일",name:"부서/계정 조회",desc:"주문 관리 상세 화면 > 고객정보(tab)",inParam:"부서ID,부서명,계정ID,계정명",outParam:"부서ID,부서명,계정ID,계정명"});
		list.push({gubun:"주문",id:"SSP_BO_OA_13",type:"단일",name:"고객사 참조코드 조회",desc:"주문 관리 상세 화면 > 고객정보(tab)",inParam:"상세관리코드ID,상세코드,상세코드명,관리코드명",outParam:"상세관리코드ID,상세코드,상세코드명,관리코드명"});
		list.push({gubun:"주문",id:"SSP_BO_OA_21",type:"조회",name:"주문 배송 안내",desc:"주문 관리 상세 화면 > 배송정보(tab)",inParam:"",outParam:""});
		list.push({gubun:"주문",id:"SSP_BO_OA_40",type:"조회",name:"알림톡 발송 현황 조회",desc:"주문 관리 상세 화면 > 배송정보(tab)",inParam:"",outParam:""});
		list.push({gubun:"주문",id:"SSP_BO_OA_55",type:"단일",name:"주문 상태 조회",desc:"주문 변경 상세 화면 > 결재/발주 > 발주 완료 처리 > 주문상태코드 조회 팝업<br>(상위 주문상태조회 팝업과 동일)",inParam:"주문상태코드,주문상태명",outParam:"주문상태코드,주문상태명"});
		list.push({gubun:"주문",id:"SSP_BO_OA_57",type:"단일",name:"변경 항목 조회",desc:"주문 변경 이력 조회 목록 화면",inParam:"변경항목코드,변경항목명",outParam:"변경항목코드,변경항목명"});
		list.push({gubun:"주문",id:"SSP_BO_OA_05",type:"조회",name:"주문 변경 이력 조회",desc:"주문 변경 이력 조회 목록 > 상세 보기 팝업",inParam:"",outParam:""});

		list.push({gubun:"",id:"",type:"",name:"",desc:"",inParam:"",outParam:""});
		// 재고
		list.push({gubun:"재고",id:"SSP_BO_KA_03",type:"단일",name:"구매팀 조회",desc:"S-MRP 마스터 조회 목록 > 구매팀 조회 팝업<br>(S-MRO 인터페이스)",inParam:"구매팀코드,구매팀명",outParam:"구매팀코드,구매팀명"});
		list.push({gubun:"재고",id:"SSP_BO_KA_04",type:"단일",name:"구매 담당자 조회",desc:"S-MRP 마스터 조회 목록 > 구매팀 조회 팝업<br>(S-MRO 인터페이스)",inParam:"구매팀코드,구매팀명",outParam:"구매팀코드,구매팀명"});

		list.push({gubun:"",id:"",type:"",name:"",desc:"",inParam:"",outParam:""});
		// 정산
		list.push({gubun:"정산",id:"SSP_BO_SN_10",type:"조회",name:"이력 조회",desc:"고객 검수월 조회 목록 > 이력 조회 팝업<br>(S-MRO 인터페이스, 가로스크롤)",inParam:"",outParam:""});

		list.push({gubun:"",id:"",type:"",name:"",desc:"",inParam:"",outParam:""});
		// 프로모션
		list.push({gubun:"프로모션",id:"SSP_BO_NA_17",type:"단일",name:"쿠폰 조회",desc:"기획전 관리 > 생성 > 쿠폰 조회 팝업",inParam:"쿠폰종류,쿠폰번호,쿠폰명",outParam:"쿠폰종류,쿠폰번호,쿠폰명,할인금액/율(최대할인금액)"});
		list.push({gubun:"프로모션",id:"SSP_BO_NA_18",type:"상세관리",name:"참여자 조회(응모형)",desc:"이벤트 관리 > 상세/수정 > 응모형 참여자 조회 팝업",inParam:"",outParam:""});
		list.push({gubun:"프로모션",id:"SSP_BO_NA_19",type:"상세관리",name:"참여자 조회(스템프형)",desc:"이벤트 관리 > 상세/수정 > 스템프 참여자 조회 팝업",inParam:"",outParam:""});
		list.push({gubun:"프로모션",id:"SSP_BO_NA_10",type:"조회",name:"쿠폰 발행 내역 조회",desc:"쿠폰 관리 > 생성 > 쿠폰 발행 내역 조회 팝업",inParam:"",outParam:""});
		list.push({gubun:"프로모션",id:"SSP_BO_NA_20",type:"멀티",name:"발행 대상 조회",desc:"쿠폰 관리 > 생성 > 발행 대상 설정 팝업<br>input 필드 2열로 구성(ID / 명)",inParam:"사업장ID/명,운영단위ID/명,부서ID/명,회원ID/명",outParam:"사업장,운영단위,부서,회원"});

		list.push({gubun:"",id:"",type:"",name:"",desc:"",inParam:"",outParam:""});
		// 고객센터
		list.push({gubun:"고객센터",id:"SSP_BO_CN_26",type:"단일",name:"등록자 조회",desc:"공지사항 목록",inParam:"사번,이름",outParam:"사번,이름"});
		list.push({gubun:"고객센터->공통",id:"SSP_BO_MA_44",type:"멀티",name:"운영 단위 조회",desc:"공지사항 목록",inParam:"운영단위ID,운영단위명",outParam:"운영단위ID,운영단위명,사용여부"});
		list.push({gubun:"고객센터",id:"SSP_BO_CN_27",type:"상세관리",name:"FAQ유형 관리",desc:"자주하는질문 목록",inParam:"",outParam:""});
		list.push({gubun:"고객센터->공통",id:"SSP_BO_CN_30",type:"멀티",name:"서비스 담당자 조회",desc:"VOC 현황 조회 목록",inParam:"사번,담당자명,조직코드,조직코드명,직무",outParam:"사번,담당자명,조직코드,조직코드명,직무"});
		list.push({gubun:"고객센터->공통",id:"SSP_BO_CN_29",type:"단일",name:"상품ID 조회",desc:"VOC 현황 조회 목록<br>(주문목록 상품ID조회와 동일)",inParam:"상품ID,상품명,규격,제조사명",outParam:"상품ID,상품명,규격,제조사명"});

		list.push({gubun:"",id:"",type:"",name:"",desc:"",inParam:"",outParam:""});
		// 시스템
		list.push({gubun:"시스템",id:"SSP_BO_YA_05",type:"상세관리",name:"공통코드 등록",desc:"공통코드 신규 등록 화면",inParam:"",outParam:""});




		var po = '';
		$.each(list, function(idx,data){
			var style = '';
			if(data.gubun.indexOf("->") > 0){
				style += 'text-decoration-line: line-through;';
			}

			po += '<tr style="'+(data.gubun==""?"background-color: #eeeeee;":"")+'">';
			po += '	<td style="'+style+'">'+data.gubun+'</td>'; //업무구분
			po += '	<td style="'+style+'">'+data.id+'</td>'; // 화명 아이디
			po += '	<td style="'+style+'">'+data.type+'</td>'; // 팝업 종류
			po += '	<td style="'+style+'">'+data.name+'</td>'; // 팝업 명
			po += '	<td style="'+style+'">'+data.desc+'</td>'; // 설명
			po += '	<td style="'+style+'">'+data.inParam+'</td>'; // Input
			po += '	<td style="'+style+'">'+data.outParam+'</td>'; // Output
			po += '</tr>';
		});

		$("#devList").html(po);
	}

	splitString = function(str){
		var tmp = '';


		return res;
	}


	/*******************************
	 *  멀티텍스트검색 팝업 Start
	 *******************************/
	fnResultText = function(data) {
		console.log('data',data);
		if(data){
			// 초기화
			$("#"+data.id).val("");

			// 값 설정
			$("#"+data.id).val(data.data);
		}
	}
	/*******************************
	 *  멀티텍스트검색 팝업 End
	 *******************************/

	/*******************************
	 *  사업장(단일선택) SSP_BO_MA_82 팝업 Start
	 *******************************/
	fnOneBzplcResultCallback =  function(data) {
		console.log('data',data);
		// 초기화
		$("#bzplcSingleForm").find("input[name=bzplcId]").val("");
		$("#bzplcSingleForm").find("input[name=bzplcNm]").val("");

		// 값 설정
		if(data){
			$("#bzplcSingleForm").find("input[name=bzplcId]").val(data.BZPLC_ID);
			$("#bzplcSingleForm").find("input[name=bzplcNm]").val(data.BZPLC_NM);
		}
	}
	/*******************************
	 *  사업장(단일선택) 팝업 End
	 *******************************/

	/*******************************
	 *  사업장(다중선택) SSP_BO_MA_40 팝업 Start
	 *******************************/
	fnResultBzplc = function(data) {
		console.log('data',data);

		// 초기화
		$("#bzplcMultiForm").find("input[name=bzplcId]").val("");
		$("#bzplcMultiForm").find("input[name=bzplcNm]").val("");

		var id = ''
		,	nm = ''
		,	yn = '';

		$.each(data, function(idx, item){
			if(idx != 0){
				id += ',';
				nm += ',';
			}
			id += item.ID;
			nm += item.NM;
		});
		// 값 설정
		$("#bzplcMultiForm").find("input[name=bzplcId]").val(id);
		$("#bzplcMultiForm").find("input[name=bzplcNm]").val(nm);
	}
	/*******************************
	 *  사업장(다중선택) 팝업 End
	 *******************************/

	/*******************************
	 *  상품정보(단일선택) 팝업 Start
	 *******************************/

	fnProductSingleCallback = function(eleId,data) {
		// 초기화
		$("#productSingleForm").find("input[name=prdId]").val("");
		$("#productSingleForm").find("input[name=prdNm]").val("");

		if(data){
			// 값 설정
			$("#productSingleForm").find("input[name=prdId]").val(data.prdId);
			$("#productSingleForm").find("input[name=prdNm]").val(data.prdNm);
		}
	}

	/*******************************
	 *  상품정보(단일선택) 팝업 End
	 *******************************/

	/*******************************
	 *  상품정보(다중선택) 팝업 Start
	 *******************************/
	fnProductMultiCallback = function(eleId, data){
		// 초기화
		$("#productMultiForm").find("input[name=prdId]").val("");
		$("#productMultiForm").find("input[name=prdNm]").val("");

		var id = ''
		,	nm = '';

		$.each(data, function(idx, item){
			if(idx != 0){
				id += ',';
				nm += ',';
			}
			id += item.id;
			nm += item.nm;
		});
		// 값 설정
		$("#productMultiForm").find("input[name=prdId]").val(id);
		$("#productMultiForm").find("input[name=prdNm]").val(nm);
	}
	/*******************************
	 *  상품정보(다중선택) 팝업 End
	 *******************************/


	/*******************************
	 *  운영단위(단일선택) 팝업 Start
	 *******************************/

	fnOprUntSingleCallback = function(eleId,data) {
		console.log('fnOprUntSingleCallback',eleId,data);
		// 초기화
		$("#oprUntSingleForm").find("input[name=oprUntId]").val("");
		$("#oprUntSingleForm").find("input[name=oprUntNm]").val("");

		if(data){
			// 값 설정
			$("#oprUntSingleForm").find("input[name=oprUntId]").val(data.OPR_UNT_ID);
			$("#oprUntSingleForm").find("input[name=oprUntNm]").val(data.OPR_UNT_NM);
		}
	}

	/*******************************
	 *  운영단위(단일선택) 팝업 End
	 *******************************/

	/*******************************
	 *  운영단위(다중선택) 팝업 Start
	 *******************************/
	// 대상(운영단위) 라디오 버튼 클릭 이벤트
	$("#oprUntMultiForm").find("input:radio[name=searchOprUntYn]").click(function(){
		if($("#oprUntMultiForm").find("#searchOprUntYn2").is(":checked")) {
			$("#oprUntMultiForm").find(".searchOprUnt").show();
			$("#oprUntMultiForm").find(".oprUntPopup").show();
		} else {
			$("#oprUntMultiForm").find(".searchOprUnt").hide();
			$("#oprUntMultiForm").find(".oprUntPopup").hide();
			$("#oprUntMultiForm").find("[name=oprUntId]").val("");
			$("#oprUntMultiForm").find("[name=oprUntNm]").val("");
		}
	});

	fnOprUntMultiCallback = function(eleId, data){
		// 초기화
		$("#oprUntMultiForm").find("input[name=oprUntId]").val("");
		$("#oprUntMultiForm").find("input[name=oprUntNm]").val("");

		var id = ''
		,	nm = '';

		$.each(data, function(idx, item){
			if(idx != 0){
				id += ',';
				nm += ',';
			}
			id += item.id;
			nm += item.nm;
		});
		// 값 설정
		$("#oprUntMultiForm").find("input[name=oprUntId]").val(id);
		$("#oprUntMultiForm").find("input[name=oprUntNm]").val(nm);
	}
	/*******************************
	 *  운영단위(다중선택) 팝업 End
	 *******************************/

	/*******************************
	 *  담당자(단일선택) 팝업 Start
	 *******************************/
	fnServiceResultCallback = function(eleId, data) {
		console.log('fnServiceResultMultiCallback',eleId,data);
		// 초기화
		$("#memberSingleForm").find("input[name=chrCsId]").val("");
		$("#memberSingleForm").find("input[name=chrCsNm]").val("");

		// 값 설정
		$("#memberSingleForm").find("input[name=chrCsId]").val(data.EMP_NO);
		$("#memberSingleForm").find("input[name=chrCsNm]").val(data.OPRTR_NM);
	}
	/*******************************
	 *  담당자(멀티선택) 팝업 End
	 *******************************/
	/*******************************
	 *  담당자(멀티선택) 팝업 Start
	 *******************************/
	fnServiceResultMultiCallback = function(eleId, data) {
		console.log('fnServiceResultMultiCallback',eleId,data);
		var id = ''
		,	nm = '';
		$.each(data, function(idx, item){
			if(idx != 0){
				id += ',';
				nm += ',';
			}
			id += item.id;
			nm += item.nm;
		});
// 		// 값 설정 (동일팝업 1개만 사용할경우)
// 		$("#memberMultiForm").find("input[name=chrCsId]").val(id);
// 		$("#memberMultiForm").find("input[name=chrCsNm]").val(nm);

		// 값 설정 (동일팝업 여러개 사용할경우)
		if(eleId == "chrCsId") {
			$("#memberMultiForm").find("input[name=chrCsId]").val(id);
			$("#memberMultiForm").find("input[name=chrCsNm]").val(nm);
		} else if(eleId == "serviceMngId"){
			$("#memberMultiForm").find("input[name=serviceMngId]").val(id);
			$("#memberMultiForm").find("input[name=serviceMngNm]").val(nm);
		}
	}
	/*******************************
	 *  담당자(멀티선택) 팝업 End
	 *******************************/

	/*******************************
	 *  공통코드(멀티선택) 팝업 Start
	 *******************************/
	fnCommonCodeMultiCallback = function(eleId, data) {
		console.log('fnCommonCodeMultiCallback',eleId,data);
		var id = ''
		,	nm = '';
		$.each(data, function(idx, item){
			if(idx != 0){
				id += ',';
				nm += ',';
			}
			id += item.id;
			nm += item.nm;
		});
		// 값 설정
		$("#commonCodeMultiForm").find("input[name=dtlCd]").val(id);
		$("#commonCodeMultiForm").find("input[name=dtlCdNm]").val(nm);
	}

	/*******************************
	 *  공통코드(멀티선택) 팝업 End
	 *******************************/

	/*******************************
	 *  플랜트(단일선택) 팝업 Start
	 *
	 *  플랜트는 CO_CD, BZ_DOMN_CD 설정이 필요함!!
	 *  주문관리에서는 운영단위 팝업에서 관련 데이터 설정 이후, 플랜트 팝업 진행 가능
	 *******************************/
	fnPlantResultCallback = function(eleId,data) {
		console.log('fnPlantResultCallback',eleId,data);
		// 초기화
		$("#plantSingleForm").find("input[name=plntId]").val("");
		$("#plantSingleForm").find("input[name=plntNm]").val("");

		// 값 설정
		$("#plantSingleForm").find("input[name=plntId]").val(data.PLNT_ID);
		$("#plantSingleForm").find("input[name=plntNm]").val(data.PLNT_NM);
	}
	/*******************************
	 *  플랜트(단일선택) 팝업 End
	 *******************************/

	/*******************************
	 *  xx팀(단일선택) 팝업 Start
	 *******************************/
	fnMemOprtrOrgResultCallback = function(eleId,data) {
		console.log('fnMemOprtrOrgResultCallback',eleId,data);
		// 초기화
		$("#teamSingleForm").find("input[name=orgCd]").val("");
		$("#teamSingleForm").find("input[name=orgNm]").val("");

		// 값 설정
		$("#teamSingleForm").find("input[name=orgCd]").val(data.ORG_CD);
		$("#teamSingleForm").find("input[name=orgNm]").val(data.ORG_NM);
	}
	/*******************************
	 *  xx팀(단일선택) 팝업 End
	 *******************************/

	/*******************************
	 *  제조원(단일선택) 팝업 Start
	 *******************************/
	fnResultMnfrSingleCallback = function(eleId,data) {
		console.log('fnResultMnfrSingleCallback',eleId,data);
		// 초기화
		$("#manufacturerSingleForm").find("input[name=mnfrNo]").val("");
		$("#manufacturerSingleForm").find("input[name=mnfrNm]").val("");

		// 값 설정
		if(data){
			$("#manufacturerSingleForm").find("input[name=mnfrNo]").val(data.mnfrNo);
			$("#manufacturerSingleForm").find("input[name=mnfrNm]").val(data.mnfrNm);
		}
	}
	/*******************************
	 *  제조원(단일선택) 팝업 End
	 *******************************/

	/*******************************
	 *  원산지(단일선택) 팝업 Start
	 *******************************/
	fnResultCtryCdSingleCallback = function(eleId,data) {
		console.log('fnResultCtryCdSingleCallback',eleId,data);
		// 초기화
		$("#countryCodeSingleForm").find("input[name=ctrySprCd]").val("");
		$("#countryCodeSingleForm").find("input[name=ctryNm]").val("");

		// 값 설정
		if(data){
			$("#countryCodeSingleForm").find("input[name=ctrySprCd]").val(data.ctrySprCd);
			$("#countryCodeSingleForm").find("input[name=ctryNm]").val(data.ctryNm);
		}
	}
	/*******************************
	 *  원산지(단일선택) 팝업 End
	 *******************************/

	/*******************************
	 *  ssp카테고리(단일선택) 팝업 Start
	 *******************************/
	fnResultSspCateSingleCallback = function(eleId,data) {
		console.log('fnResultSspCateSingleCallback',eleId,data);
		// 초기화
		$("#sspCategorySingleForm").find("input[name=prdClsId]").val("");
		$("#sspCategorySingleForm").find("input[name=prdClsLvlNm]").val("");

		// 값 설정
		if(data){
			$("#sspCategorySingleForm").find("input[name=prdClsId]").val(data.prdClsId);
			$("#sspCategorySingleForm").find("input[name=prdClsLvlNm]").val(data.prdClsLvlNm);
		}
	}
	/*******************************
	 *  ssp카테고리(단일선택) 팝업 End
	 *******************************/

	/*******************************
	 *  상품군(단일선택) 팝업 Start
	 *******************************/
	fnResultPrdGroupSingleCallback = function(eleId,data) {
		console.log('fnResultPrdGroupSingleCallback',eleId,data);
		// 초기화
		$("#productGroupSingleForm").find("input[name=prdClsId]").val("");
		$("#productGroupSingleForm").find("input[name=prdClsLvlNm]").val("");

		// 값 설정
		if(data){
			$("#productGroupSingleForm").find("input[name=prdClsId]").val(data.prdClsId);
			$("#productGroupSingleForm").find("input[name=prdClsLvlNm]").val(data.prdClsLvlNm);
		}
	}
	/*******************************
	 *  상품군(단일선택) 팝업 End
	 *******************************/

	/*******************************
	 *  회원(다중선택) 팝업 Start
	 *******************************/
	fnClientMultiCallback = function(eleId, data){
		// 초기화
		$("#clientMultiForm").find("input[name=memId]").val("");
		$("#clientMultiForm").find("input[name=memNm]").val("");

		var id = ''
		,	nm = '';

		$.each(data, function(idx, item){
			if(idx != 0){
				id += ',';
				nm += ',';
			}
			id += item.MEM_ID;
			nm += item.MEM_NM;
		});
		// 값 설정
		$("#clientMultiForm").find("input[name=memId]").val(id);
		$("#clientMultiForm").find("input[name=memNm]").val(nm);
	}
	/*******************************
	 *  회원(다중선택) 팝업 End
	 *******************************/
	 
	/*******************************
	 *  주문단위(단일선택) 팝업 Start
	 *******************************/
	fnOdrUntResultCallback = function(data){
		// 초기화
		$("#unitSingleForm").find("input[name=untCd]").val("");
		$("#unitSingleForm").find("input[name=untNm]").val("");

		// 값 설정
		if(data){
			$("#unitSingleForm").find("input[name=untCd]").val(data.UNT_CD);
			$("#unitSingleForm").find("input[name=untNm]").val(data.UNT_NM);
		}
	}
	/*******************************
	 *  주문단위(단일선택) 팝업 End
	 *******************************/
	 
	 /*******************************
	 *  협력사(단일선택) 팝업 Start
	 *******************************/

	fnCprtcpSingleCallback = function(eleId,data) {
		// 초기화
		$("#cprtcpSingleForm").find("input[name=cprtcpNo]").val("");
		$("#cprtcpSingleForm").find("input[name=cprtcpNm]").val("");

		if(data){
			// 값 설정
			$("#cprtcpSingleForm").find("input[name=cprtcpNo]").val(data.cprtcpNo);
			$("#cprtcpSingleForm").find("input[name=cprtcpNm]").val(data.cprtcpNm);
		}
	}

	/*******************************
	 *  협력사(단일선택) 팝업 End
	 *******************************/

	/*******************************
	 *  쿠폰(단일선택) 팝업 Start
	 *******************************/
	fnResultCoupon = function(data){
		// 초기화
		$("#couponSingleForm").find("input[name=cpnMstTitle]").val("");
		$("#couponSingleForm").find("input[name=cpnMstIdx]").val("");

		// 값 설정
		if(data){
			$("#couponSingleForm").find("input[name=cpnMstTitle]").val(data.NM);
			$("#couponSingleForm").find("input[name=cpnMstIdx]").val(data.ID);
		}
	}
	/*******************************
	 *  쿠폰(단일선택) 팝업 End
	 *******************************/


	/******************
	 * 첨부파일 업로드 START
	 ******************/
	// 첨부파일 DB 저장
	saveFiles = function(frm){
		var $frm = $('#'+frm);
		$frm.attr({"action":"<c:out value="${serverDomain}" />/am/com/sample/upload.do", "target":"_self", "method":"post"}).submit();
	}

	/******************
	 * 첨부파일 업로드 END
	 ******************/

	/******************
	 * 첨부파일 불러오기
	 ******************/
	getAttachFileList = function(obj){
		var atflId = $(obj).prev().val();
		if(atflId){
			var pars = {};
			pars.atflId = atflId;
			console.log('pars',pars);

			$.ajax ({
			async : false,
			contentType: "application/json;charset=UTF-8",
			type : "POST",
			url : "<c:out value="${serverDomain}" />/am/com/sample/fileList.json",
			dataType: "json",
			data : JSON.stringify(pars),
			success : function (res) {
				console.log('res',res);
				if(res.result == "success"){
					var data = res.data;
					var po = '';
					data.forEach(function(file,index){
						console.log('file_'+index,file);

						po += '<li data-file-sn="">';
						po += '	<i class="icon-file"></i>';
						po += '	<span class="file-list-title">'+file.orignlFileNm;
						Object.keys(file).forEach(function(v){
							po += '	<input type="hidden" name="'+v+'" value="'+file[v]+'"/>';
						});
						po += '	</span>';
						po += '	<span class="pull-right">'+(file.fileSz / 1024).toFixed(2)+'KB <a href="javascript:void(0);" onclick="fileDelete(this);"><span class="warning">삭제</span></a></span>';
						po += '</li>';
					});
					$("#fileViewTst ul").html(po);
					// TEST
					filePrint("atflFrm", "fileView1", data);
				}
			},
			error : function () {
				alert("오류가 발생하였습니다.\n다시 시도 해 주십시오.");
			}
			});
		}
	};

	/******************
	 * 첨부파일 불러오기 END
	 ******************/
	/**********************
	 * 첨부파일 다운로드 START
	 **********************/
	// 파일 다운로드
	$(document).on("click", "#fileViewTst .file-list-title", function () {
		var newForm = $('<form></form>');

		var inputs = $(this).find("input:hidden");
		// 일반 파일의 경우 attachFileSavePath 만 전달되면 됨
		// 오픈텍스트는 별도로 sapDocId 필요
		for(var i = 0 ; i < inputs.length; i++){
			var po = '<input type="hidden" name="'+$(inputs[i]).attr("name")+'" value="'+$(inputs[i]).val()+'" />';
			newForm.append(po);
		}
		console.log("newForm",newForm);

		newForm.attr({"action":"<c:out value="${serverDomain}" />/am/common/commonFileDownload.do", "target":"_self", "method":"post"});
		newForm.appendTo('body');
		newForm.submit();
	});
	/**********************
	 * 첨부파일 다운로드 END
	 **********************/

	/*********************************
	 * 첨부파일(with 대체텍스트) START
	 ********************************/
	// 첨부파일 DB 저장
	saveFiles2 = function(frm){
		var $frm = $('#'+frm);

		$frm.attr({"action":"<c:out value="${serverDomain}" />/am/com/sample/upload.do", "target":"_self", "method":"post"}).submit();
	}

	// 첨부파일 삭제 는 위와동일
	/*********************************
	 * 첨부파일(with 대체텍스트) END
	*********************************/

	/*********************************
	* 엑셀 다운로드/업로드 START
	*********************************/
	excelDown = function() {
		var obj = {
				queryId: "Helper.selectHelperList",
				columnInfoFile: "helperListExcel",
				fileName: "고객도우미관리",
				sheetName: "고객도우미관리",
				param: $('#excelForm').serializeObject()
			}
		excelDownloadSvr(obj);
	}

	excelSampleDown = function() {
		var obj = {
				queryId: "Helper.selectHelperList",
				columnInfoFile: "helperListExcel",
				fileName: "고객도우미관리",
				sheetName: "고객도우미관리",
				sample: true,
				sampleWithData: false,
				param: $('#excelForm').serializeObject()
			}
		excelDownloadSvr(obj);
	}

	excelUpload = function() {
		// Get form
		var form = $('#excelForm')[0];
		// Create an FormData object
		var data = new FormData(form);
		callAjax({
			type: "POST",
			url: "/am/com/sample/excelUploadSample.json",
			enctype: "multipart/form-data",
			data: data,
			callback: function(res) {
				console.log("callback", res);
			},
			onError: function(err) {
				alert(err.message);
			}
		});
	}
	/*********************************
	* 엑셀 다운로드/업로드 END
	*********************************/

	/*********************************
	* 오픈텍스트 테스트 START
	*********************************/
	getOpt = function() {
		var $frm =$('#optFrm');
		$frm.attr({"action":"<c:out value="${serverDomain}" />/am/com/sample/getOptTest.do", "target":"_self", "method":"post"}).submit();
	}

	delOpt = function() {
		var $frm =$('#optFrm');
		$frm.attr({"action":"<c:out value="${serverDomain}" />/am/com/sample/delOptTest.do", "target":"_self", "method":"post"}).submit();
	}

	/*********************************
	* 오픈텍스트 테스트 END
	*********************************/

	/*********************************
	* Ajax 처리 샘플 START
	*********************************/

	saveSample = function() {
		if (confirm("<spring:message code='common.msg.alert.save' />")) {
			callAjax({
				type: "POST",
				url: "/am/com/sample/saveSample.json",
				contentType: "application/x-www-form-urlencoded",
				data: $('#ajaxForm').serializeObject(),
				callback: function(res) {
					console.log("callback", res);
					if (res.status == "0") {
						alert("<spring:message code='common.msg.alert.success' />");
					}
				},
				// onError를 사용하지 않아도 기본적으로 에러 메시지를 alert한다.
				// UI상에서 에러메시지 alert처리 외 로직이 있다면 사용하고, 없다면 제거
				onError: function(err) {
					alert(err.message);
				}
			});
		}
	}

	selectSample = function() {
		callAjax({
			type: "POST",
			url: "/am/com/sample/selectSample.json",
			contentType: "application/x-www-form-urlencoded",
			data: $('#ajaxForm').serializeObject(),
			callback: function(res) {
				console.log("callback", res);
			},
			// onError를 사용하지 않아도 기본적으로 에러 메시지를 alert한다.
			// UI상에서 에러메시지 alert처리 외 로직이 있다면 사용하고, 없다면 제거
			onError: function(err) {
				alert(err.message);
			}
		});
	}

	selectSampleList = function() {
		callAjax({
			type: "POST",
			url: "/am/com/sample/selectSampleList.json",
			contentType: "application/x-www-form-urlencoded",
			data: $('#ajaxForm').serializeObject(),
			callback: function(res) {
				console.log("callback", res);
			},
			// onError를 사용하지 않아도 기본적으로 에러 메시지를 alert한다.
			// UI상에서 에러메시지 alert처리 외 로직이 있다면 사용하고, 없다면 제거
			onError: function(err) {
				alert(err.message);
			}
		});
	}

	/*********************************
	* Ajax 처리 샘플 END
	*********************************/

	// PageStart
	makeDevList();
});
</script>
</head>
<body>
	<div id="header">
		<%@ include file="/WEB-INF/jsp/am/include/top.jsp"%>
	</div>
	<div id="container">
		<!-- container -->
		<div id="aside" class="aside left">
			<%@ include file="/WEB-INF/jsp/am/include/left.jsp"%>
		</div>
		<!-- wrapper -->
		<div id="wrapper">

			<div id="breadcrumb"></div>

			<div id="contents">
				<!-- container -->
				<div class="container">
					<h2 class="title"><span>샘플 리스트</span></h2>
					<h3 class="title"><span>기타 샘플</span></h3>
					<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;"><!-- table -->
						<colgroup>
								<col style="width: 7%;" />
								<col style="width: 10%;" />
								<col style="width: 13%;" />
								<col style="width: 40%;" />
								<col style="width: 40%;" />
						</colgroup>
						<thead>
							<tr>
								<th>업무구분</th>
								<th>화면아이디</th>
								<th>팝업 명칭</th>
								<th>구현</th>
								<th>설명</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>달력선택</td>
								<td>epass.datepickr</td>
								<td colspan="2">
									<div class="datepickerWrap">
										<a href="#none" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
										<input type="text" class="text" id="sampleStrDt" name="sampleStrDt" readonly="readonly" data-target-end="#sampleEndDt" placeholder="YYYY-MM-DD" />
										~
										<a href="#none" class="js-datepickr"><span class="icon datepickr"><em>날짜선택</em></span></a>
										<input type="text" class="text" id="sampleEndDt" name="sampleEndDt" readonly="readonly" data-target-start="#sampleStrDt" placeholder="YYYY-MM-DD"/>
										<select name="dateSet" id="dateSet" class="_inqTerm">
											<option value="">선택</option>
											<option value="7">1주일</option>
											<option value="15">15일</option>
											<option value="30">1개월</option>
										</select>
										<input type="checkbox" class="checkbox" name="sampleNotEnd" id="sampleNotEnd" data-not-end="Y" value="Y"/>
										<label for="sampleNotEnd">종료일 없음</label>
									</div>
								</td>
								<td>
									'data' attribute를 활용하여 From - To를 상호 연결 동작하도록 처리<br/>
									"종료일이 시작일보다 작습니다." 처리 등<br/><br/>
									<code>
									&lt;div class="datepickerWrap"&gt;<br />
									&lt;a href="#none" class="js-datepickr"&gt;&lt;span class="icon datepickr"&gt;&lt;em&gt;날짜선택&lt;/em&gt;&lt;/span&gt;&lt;/a&gt;<br/>
									&lt;input type="text" class="text" id="sampleStrDt" name="sampleStrDt" readonly="readonly" data-target-end="#sampleEndDt" placeholder="YYYY-MM-DD" /&gt;<br/>
									~<br/>
									&lt;a href="#none" class="js-datepickr"&gt;&lt;span class="icon datepickr"&gt;&lt;em&gt;날짜선택&lt;/em&gt;&lt;/span&gt;&lt;/a&gt;<br/>
									&lt;input type="text" class="text" id="sampleEndDt" name="sampleEndDt" readonly="readonly" data-target-start="#sampleStrDt" placeholder="YYYY-MM-DD"/&gt;<br/>
									&lt;/div&gt;<br />
									</code><br/>
									data-target-end="#sampleEndDt" : 연결된 endDt<br/>
									data-target-start="#sampleStrDt" : 연결된 startDt<br/>
									data-not-end="Y" : 종료일 없음 체크박스<br/>
									<script type="text/javascript">
										// change event
										$("#sampleEndDt").on('change',function(){
											console.log('change',$(this).val());
										});

										// 노출기간 옵션선택
										$("#dateSet").change(function(){
											var dateVal = $(this).val();

											if("7" == dateVal) {	// 1주일
												fnDateSet('sampleStrDt', 'sampleEndDt', 0, 0, 0, 0, 0, 7,  '-');
											} else if("15" == dateVal) {	// 15일
												fnDateSet('sampleStrDt', 'sampleEndDt', 0, 0, 0, 0, 0, 15,  '-');
											} else if("30" == dateVal) {	// 1개월
												fnDateSet('sampleStrDt', 'sampleEndDt', 0, 0, 0, 0, 1, 0,  '-');
											}
										});
										<%-- 종료일 없음 체크박스 클릭 시 --%>
										$('#sampleNotEnd').on('click', function(){
											$('#sampleEndDt').val("");
										});
									</script>
								</td>
							</tr>

							<tr>
								<td>Ajax Json</td>
								<td colspan="3">
									<form id="ajaxForm" name="ajaxForm">
										<input type="text" id="sampleId" name="sampleId" class="text" value="" placeholder="sampleId 입력" />
										<input type="text" id="sampleNm" name="sampleNm" class="text" value="" placeholder="sampleNm 입력" />

										<input type="checkbox" id="bizRuntimeException" name="bizRuntimeException" value="true" />
										<label for="bizRuntimeException">bizRuntimeException</label>
										<input type="checkbox" id="bizException" name="bizException" value="true" />
										<label for="bizException">bizException</label>
									</form>
									<br>
									<a href="javascript:;" onclick="saveSample()" class="button small primary"><span>Save Sample</span></a>
									<a href="javascript:;" onclick="selectSample()" class="button small primary"><span>Select Sample(단건)</span></a>
									<a href="javascript:;" onclick="selectSampleList()" class="button small primary"><span>Select Sample(List)</span></a>
								</td>
								<td></td>
							</tr>

							<tr>
								<td>Excel Download/upload</td>
								<td colspan="3">
									<form id="excelForm" name="excelForm" enctype="multipart/form-data">
										<ui:fileUpload formId="excelForm" view="excelFileView" typeCd="EXCEL" btnLabel="파일첨부"
											accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
											fileCountLimit="1" fileSizeLimit="10" fileAcceptLabel="EXCEL"  multiple="false" />
									</form>
									<a href="javascript:;" onclick="excelDown()" class="button small primary"><span>엑셀다운로드</span></a>
									<a href="javascript:;" onclick="excelSampleDown()" class="button small primary"><span>엑셀샘플다운로드</span></a>
									<a href="javascript:;" onclick="excelUpload()" class="button small primary"><span>엑셀업로드</span></a>
								</td>
								<td></td>
							</tr>

							<tr>
								<td>오픈텍스트 조회/삭제 테스트</td>
								<td colspan="3">
									<form id="optFrm" name="optFrm">
										<input type="text" class="" name="sapDocId" />
										<input type="text" class="" name="fileNm" />
									</form>
									<br>
									<a href="javascript:;" onclick="getOpt()" class="button small primary"><span>오픈텍스트 조회</span></a>
									<a href="javascript:;" onclick="delOpt()" class="button small primary"><span>오픈텍스트 삭제</span></a>
								</td>
								<td></td>
							</tr>

							<!-- 첨부파일 TEST -->
							<tr>
								<td>첨부파일</td>
								<td colspan="3">
									<form id="atflFrm" name="atflFrm" enctype="multipart/form-data">
										<!-- 일반파일 (typeCd: OPT제외 임의지정)-->
										<ui:fileUpload formId="atflFrm" view="fileView" typeCd="NOR" btnLabel="파일첨부(일반)" btnCss="primary"
											fileCountLimit="10" fileSizeLimit="10" fileAcceptLabel=""  multiple="true" />
										<!-- 오픈텍스트 (typeCd: OPT 로 시작) -->
										<ui:fileUpload formId="atflFrm" view="fileView1" typeCd="OPT_ZE_SD1012" btnLabel="파일첨부(오픈텍스트)" btnCss="primary"
											fileCountLimit="10" fileSizeLimit="10" fileAcceptLabel=""  multiple="true" />

										<!-- hidden Area -->
										<input type="hidden" name="delFileSeq" value="" />
									</form>

									<a href="#none" onclick="saveFiles('atflFrm');" class="button large primary"><span>첨부파일 저장</span></a>
								</td>
								<td>
									<input type="text" id="atflId" name="atflId" class="text" value="" placeholder="atflId 입력" />
									<a href="#none" onclick="getAttachFileList(this);" class="button small primary"><span>첨부파일 불러오기</span></a>
									<p>[ 파일 리스트 ]&nbsp<small class="desc">*파일명 클릭 시 다운로드</small></p>
									<div id="fileViewTst" class="mt10" style="border: solid 1px #d0d0d0; min-height: 100px;">
										<ul style="padding: 5px;">
											<c:choose>
												<c:when test="${not empty uploadFiles }">
													<c:forEach items="${uploadFiles }" var="fileRow" varStatus="status">
														<li data-file-sn="${fileRow.fileSeq }">
															<i class="icon-file"></i>
															<span class="file-list-title"><c:out value="${fileRow.orignlFileNm }" />
																<input type="hidden" name="fileSeq" value="${fileRow.fileSeq }"/>
																<input type="hidden" name="orignlFileNm" value="${fileRow.orignlFileNm }"/>
																<input type="hidden" name="attachFileSavePath" value="${fileRow.attachFileSavePath }"/>
<%-- 																<c:forEach var="i" items="${fileRow }" varStatus="status"> --%>
<%-- 																	<input type="hidden" name="${i.key}" value="${i.value}"/> --%>
<%-- 																</c:forEach> --%>
															</span>
															<span class="pull-right"><fmt:formatNumber value="${(fileRow.fileSz+0.01) div (1024+0.01)}" pattern=".00" />KB <a href="javascript:void(0);" onclick="fileDelete(this);"><span class="warning">삭제</span></a></span>
														</li>
													</c:forEach>
												</c:when>
												<c:otherwise></c:otherwise>
											</c:choose>
										</ul>
									</div>
								</td>
							</tr>
							<tr>
								<td>첨부파일<br>with 대체텍스트</td>
								<td colspan="3">
									<form id="atflFrm2" name="atflFrm2" enctype="multipart/form-data">
										<!-- 일반파일 (typeCd: OPT제외 임의지정)-->
										<ui:fileUpload formId="atflFrm2" view="fileViewt3" typeCd="EVT_PC_LIST" btnLabel="파일첨부(일반)"
											fileCountLimit="1" fileSizeLimit="10" fileAcceptLabel="Image(PNG, JPG) (최적 사이즈 : 0,000 * 0,000)"
											trgtFileCts="fileCts3" accept="image/png, image/jpeg" multiple="false" />
										<!-- 오픈텍스트 (typeCd: OPT 로 시작) -->
										<ui:fileUpload formId="atflFrm2" view="fileViewt4" typeCd="OPT_ZE_SD1012" btnLabel="파일첨부(오픈텍스트)"
											fileCountLimit="1" fileSizeLimit="10" fileAcceptLabel="Image (최적 사이즈 : 0,000 * 0,000)"
											trgtFileCts="fileCts4" accept="image/*" multiple="false" />

										<!-- hidden Area -->
										<input type="hidden" name="delFileSeq" value="" />
									</form>

									<a href="#none" onclick="saveFiles2('atflFrm2');" class="button large primary"><span>첨부파일 저장</span></a>
								</td>
								<td>파일첨부 및 대체텍스트는 필수값으로 각 화면상에서 validation처리 필요</td>
							</tr>
							<!-- 첨부파일 TEST -->
						</tbody>
					</table>

					<hr class="mt60 mb60">
					<h3 class="title"><span>팝업 구현 완료</span></h3>
					<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;"><!-- table -->
						<colgroup>
								<col style="width: 7%;" />
								<col style="width: 10%;" />
								<col style="width: 13%;" />
								<col style="width: 40%;" />
								<col style="width: 40%;" />
						</colgroup>
						<thead>
							<tr>
								<th>업무구분</th>
								<th>화면아이디</th>
								<th>팝업 명칭</th>
								<th>구현</th>
								<th>설명</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>공통</td>
								<td>-</td>
								<td>멀티텍스트검색</td>
								<td>
									<form id="textMultiForm" name="textMultiForm">
										<!-- show area -->
										<input type="text" id="textId" name="textId" class="text searchText" value="" />
										<a href="javascript:multiTextPopup('textId');" class="icon doc textPopup"></a>
									</form>
								</td>
								<td>멀티 텍스트(클립보드 검색) 팝업<br>(해당 input tag id 설정)</td>
							</tr>

							<tr>
								<td>공통</td>
								<td>SSP_BO_MA_82</td>
								<td>사업장</td>
								<td>
									<form id="bzplcSingleForm" name="bzplcSingleForm">
										<!-- show area -->
										<input type="text" name="bzplcNm" class="text searchBzplc" value="" readonly />
										<a href="javascript:fnOneBzplcResult('bzplcSingleForm');" class="icon search2 bzplcPopup"></a>
										<!-- hidden area -->
										<input type="hidden" name="bzplcId" value="" class="searchBzplc" />
									</form>
								</td>
								<td>사업장 단일선택 팝업</td>
							</tr>
							<tr>
								<td>공통</td>
								<td>SSP_BO_MA_40</td>
								<td>사업장</td>
								<td>
									<form id="bzplcMultiForm" name="bzplcMultiForm">
										<!-- show area -->
										<input type="text" name="bzplcNm" class="text searchBzplc" value="" readonly />
										<a href="javascript:bzplcPopup('bzplcMultiForm');" class="icon search2 bzplcPopup"></a>
										<!-- hidden area -->
										<input type="hidden" name="bzplcId" value="" class="searchBzplc" />
									</form>
								</td>
								<td>사업장 다중선택 팝업</td>
							</tr>

							<tr>
								<td>공통</td>
								<td>SSP_BO_MA_80</td>
								<td>운영단위</td>
								<td>
									<form id="oprUntSingleForm" name="oprUntSingleForm">
										<!-- show area -->
										<input type="text" name="oprUntNm" class="text searchOprUnt" value="" readonly />
										<a href="javascript:oprUntSinglePopup('oprUntSingleForm', 'oprUntId');" class="icon search2 oprUntPopup"></a>
										<!-- hidden area -->
										<input type="hidden" name="oprUntId" value="" class="searchOprUnt" />
									</form>
								</td>
								<td>운영단위 단일선택 팝업</td>
							</tr>

							<tr>
								<td>공통</td>
								<td>SSP_BO_MA_44</td>
								<td>운영단위</td>
								<td>
									<form id="oprUntMultiForm" name="oprUntMultiForm">
										<!-- show area -->
										<input type="text" name="oprUntNm" class="text searchOprUnt" value="" readonly />
										<a href="javascript:oprUntMultiPopup('oprUntMultiForm', 'oprUntId');" class="icon search2 oprUntPopup"></a>
										<!-- hidden area -->
										<input type="hidden" name="oprUntId" value="" class="searchOprUnt" />
									</form>
								</td>
								<td>운영단위 다중선택 팝업<br>(선택 후 다시 팝업 오픈시 선택사항 유지)</td>
							</tr>

							<tr>
								<td>공통</td>
								<td>-</td>
								<td>xxx담당자</td>
								<td>
									<form id="memberSingleForm" name="memberSingleForm">
										<!-- show area -->
										<input type="text" class="text" name="chrCsNm" value="" readonly />
										<a href="javascript:fnServiceResult('memberSingleForm', 'chrCsId');" class="icon search2"></a>
										<!-- hidden area -->
										<input type="hidden" name="chrCsId" value=""/>
									</form>
								</td>
								<td>담당자 단일선택 팝업<br>(서비스,운영자...등)</td>
							</tr>
							<tr>
								<td>공통</td>
								<td>-</td>
								<td>xxx담당자</td>
								<td>
									<form id="memberMultiForm" name="memberMultiForm">
										<!-- 담당CS 팝업 -->
										<!-- show area -->
										<input type="text" class="text" name="chrCsNm" value="" placeholder="담당CS" readonly />
										<a href="javascript:fnServiceResultMulti('memberMultiForm', 'chrCsId');" class="icon search2"></a>
										<!-- hidden area -->
										<input type="hidden" name="chrCsId" value=""/>
										<br><br>
										<!-- 서비스 담당자 팝업 -->
										<!-- show area -->
										<input type="text" class="text" name="serviceMngNm" value="" placeholder="서비스담당자" readonly />
										<a href="javascript:fnServiceResultMulti('memberMultiForm', 'serviceMngId');" class="icon search2"></a>
										<!-- hidden area -->
										<input type="hidden"  name="serviceMngId" value=""/>
									</form>
								</td>
								<td>담당자 다중선택 팝업<br>(서비스,운영자...등)</td>
							</tr>

							<tr>
								<td>공통</td>
								<td>-</td>
								<td>공통코드조회</td>
								<td>
									<form id="commonCodeMultiForm" name="commonCodeMultiForm">
										<!-- show area -->
										<input type="text" name="dtlCdNm" class="text searchCode" value="" readonly />
										<a href="javascript:commonCodeMultiPopup('commonCodeMultiForm','clsCd');" class="icon search2 codePopup"></a>
										<!-- hidden area -->
										<input type="hidden" name="langCd" value="KO" class="searchCode" />
										<input type="hidden" name="clsCd" value="ZDABGRU" class="searchCode" />
										<input type="hidden" name="dtlCd" value="" class="searchCode" />
									</form>
								</td>
								<td>
									공통코드 다중선택 팝업(언어코드 및 분류코드 필수)
									<br>주문상태 : ZSTATUS03 or ZDORD_STATUS 확인필요
									<br>주문유형 : ZDSOTYPE
									<br>주문Block : ZDABGRU
								</td>
							</tr>

							<tr>
								<td>상품</td>
								<td>-</td>
								<td>상품ID</td>
								<td>
									<form id="productForm" name="productForm">
										<!-- show area -->
										<input type="text" name="prdId" value="" />
										<a href="javascript:productPopup('productForm');" class="icon search2"></a>
										<!-- hidden area -->
									</form>
								</td>
								<td>상품ID 단일선택 팝업</td>
							</tr>
							<tr>
								<td>상품</td>
								<td>SSP_BO_CN_29</td>
								<td>상품정보 조회</td>
								<td>
									<form id="productSingleForm" name="productSingleForm">
										<!-- show area -->
										<input type="text" name="prdId" class="text searchCode" value="" readonly />
										<input type="text" name="prdNm" class="text searchCode" value="" readonly />
										<a href="javascript:productSinglePopup('productSingleForm', 'prdId');" class="icon search2"></a>
										<!-- hidden area -->
									</form>
								</td>
								<td>
									상품ID 단일선택 팝업<br>
									상품ID,상품명,규격,제조사명
								</td>
							</tr>
							<tr>
								<td>상품</td>
								<td>SSP_BO_OA_31</td>
								<td>상품정보 조회</td>
								<td>
									<form id="productMultiForm" name="productMultiForm">
										<!-- show area -->
										<input type="text" name="prdId" class="text searchCode" value="" readonly />
										<input type="text" name="prdNm" class="text searchCode" value="" readonly />
										<a href="javascript:productMultiPopup('productMultiForm', 'prdId');" class="icon search2"></a>
										<!-- hidden area -->
									</form>
								</td>
								<td>
									상품ID 다중선택 팝업<br>
									상품ID,상품명,규격,제조사명
								</td>
							</tr>

							<tr>
								<td>주문</td>
								<td>SSP_BO_OA_34</td>
								<td>플랜트</td>
								<td>
									<form id="plantSingleForm" name="plantSingleForm">
										<!-- show area -->
										<input type="text" name="plntNm" class="text searchCode" value="" readonly />
										<a href="javascript:plantSinglePopup('plantSingleForm','plntId');" class="icon search2 codePopup"></a>
										<!-- hidden area -->
										<input type="hidden" name="coCd" value="1000" class="searchCode" />
										<input type="hidden" name="bzDomnCd" value="1100" class="searchCode" />
										<input type="hidden" name="plntId" value="" class="searchCode" />
									</form>
								</td>
								<td>
									플랜트 단일선택 팝업
									<br>주문관리에서 사용시, 운영단위에서 CO_CD, BZ_DOMN_CD 값 획득 후, 사용
								</td>
							</tr>

							<tr>
								<td>공통</td>
								<td>SSP_BO_MA_45<br>SSP_BO_MA_46<br>SSP_BO_MA_79</td>
								<td>xx팀</td>
								<td>
									<form id="teamSingleForm" name="teamSingleForm">
										<!-- show area -->
										<input type="text" name="orgNm" class="text searchCode" value="" readonly />
										<a href="javascript:memOprtrOrgSinglePopup('teamSingleForm','orgCd');" class="icon search2 codePopup"></a>
										<!-- hidden area -->
										<!-- titleTxt value로 팝업 타이틀 설정(서비스, 운영...) // default: 부서/팀 -->
										<input type="hidden" name="titleTxt" value="서비스팀" class="searchCode" />
										<input type="hidden" name="coCd" value="1000" class="searchCode" />
										<input type="hidden" name="orgCd" value="" class="searchCode" />
									</form>
								</td>
								<td>
									xx팀 단일선택 팝업
									<br>(서비스, 운영...)
								</td>
							</tr>

							<tr>
								<td>상품</td>
								<td>SSP_BO_PP_08</td>
								<td>제조원</td>
								<td>
									<form id="manufacturerSingleForm" name="manufacturerSingleForm">
										<!-- show area -->
										<input type="text" name="mnfrNm" class="text searchCode" value="" readonly />
										<a href="javascript:manufacturerSinglePopup('manufacturerSingleForm','mnfrNo');" class="icon search2 codePopup"></a>
										<!-- hidden area -->
										<input type="hidden" name="coCd" value="1000" class="searchCode" />
										<input type="hidden" name="mnfrNo" value="" class="searchCode" />
									</form>
								</td>
								<td>
									제조원 단일선택 팝업
								</td>
							</tr>

							<tr>
								<td>상품</td>
								<td>SSP_BO_PP_09</td>
								<td>원산지</td>
								<td>
									<form id="countryCodeSingleForm" name="countryCodeSingleForm">
										<!-- show area -->
										<input type="text" name="ctryNm" class="text searchCode" value="" readonly />
										<a href="javascript:countryCodeSinglePopup('countryCodeSingleForm','ctrySprCd');" class="icon search2 codePopup"></a>
										<!-- hidden area 회사코드 및 국가코드는 세션 활용 -->
										<input type="hidden" name="coCd" value="1000" class="searchCode" />
										<input type="hidden" name="langSprCd" value="KO" class="searchCode" />
										<input type="hidden" name="ctrySprCd" value="" class="searchCode" />
									</form>
								</td>
								<td>
									제조원 단일선택 팝업
								</td>
							</tr>

							<tr>
								<td>상품</td>
								<td>SSP_BO_PP_07</td>
								<td>카테고리</td>
								<td>
									<form id="sspCategorySingleForm" name="sspCategorySingleForm">
										<!-- show area -->
										<input type="text" name="prdClsLvlNm" class="text searchCode" value="" readonly />
										<a href="javascript:sspCategorySinglePopup('sspCategorySingleForm','prdClsId');" class="icon search2 codePopup"></a>
										<!-- hidden area -->
										<input type="hidden" name="prdClsId" value="" class="searchCode" />
									</form>
								</td>
								<td>
									ssp카테고리 단일선택 팝업
								</td>
							</tr>

							<tr>
								<td>상품</td>
								<td>SSP_BO_PP_10</td>
								<td>상품군</td>
								<td>
									<form id="productGroupSingleForm" name="productGroupSingleForm">
										<!-- show area -->
										<input type="text" name="prdClsLvlNm" class="text searchCode" value="" readonly />
										<a href="javascript:productGroupSinglePopup('productGroupSingleForm','prdClsId');" class="icon search2 codePopup"></a>
										<!-- hidden area -->
										<input type="hidden" name="prdClsId" value="" class="searchCode" />
									</form>
								</td>
								<td>
									상품군 단일선택 팝업
								</td>
							</tr>

							<tr>
								<td>고객</td>
								<td>SSP_BO_MA_50</td>
								<td>회원</td>
								<td>
									<form id="clientMultiForm" name="clientMultiForm">
										<!-- show area -->
										<input type="text" name="memNm" class="text searchCode" value="" readonly />
										<a href="javascript:clientMultiPopup('clientMultiForm','memId');" class="icon search2 codePopup"></a>
										<!-- hidden area -->
										<input type="hidden" name="memId" value="" class="searchCode" />
									</form>
								</td>
								<td>
									회원 다중선택 팝업
								</td>
							</tr>
							
							<tr>
								<td>상품</td>
								<td>SSP_BO_PP_12</td>
								<td>주문단위</td>
								<td>
									<form id="unitSingleForm" name="unitSingleForm">
										<!-- show area -->
										<input type="text" name="untNm" class="text searchCode" value="" readonly />
										<a href="javascript:odrUntPopup('unitSingleForm');" class="icon search2 codePopup"></a>
										<!-- hidden area -->
										<input type="hidden" name="untCd" value="" class="searchCode" />
									</form>
								</td>
								<td>
									주문단위 단일 팝업
								</td>
							</tr>
							
							<tr>
								<td>협력사</td>
								<td>SSP_BO_OA_36</td>
								<td>협력사 조회</td>
								<td>
									<form id="cprtcpSingleForm" name="cprtcpSingleForm">
										<!-- show area -->
										<input type="text" name="cprtcpNo" class="text searchCode" value="" readonly />
										<input type="text" name="cprtcpNm" class="text searchCode" value="" readonly />
										<a href="javascript:cprtcpSinglePopup('cprtcpSingleForm', 'cprtcpNo');" class="icon search2"></a>
										<!-- hidden area -->
									</form>
								</td>
								<td>
									협력사코드 단일선택 팝업<br>
									협력사코드,협력사명,사업자번호,업종
								</td>
							</tr>
							
							
							<tr>
								<td>기타</td>
								<td>SSP_BO_NA_17</td>
								<td>쿠폰 조회</td>
								<td>
									<form id="couponSingleForm" name="couponSingleForm">
										<!-- show area -->
										<input type="text" name="cpnMstTitle" class="text searchCode" value="" readonly />
										<a href="javascript:couponPopup('couponSingleForm');" class="icon search2 codePopup"></a>
										<!-- hidden area -->
										<input type="hidden" name="cpnMstIdx" value="" class="searchCode" />
									</form>
								</td>
								<td>ㅋ
									주문단위 단일 팝업
								</td>
							</tr>
						</tbody>
					</table>
					<hr class="mt60 mb60">
					<h3 class="title"><span>구현 예정 [ (서브원) AN_AN6_BO 화면설계서(팝업정의)_210914_v0.1 ]</span></h3>
					<form id="searchForm1" name="searchForm1">
						<table cellspacing="0" class="table-row table-a" style="margin-bottom: 0;"><!-- table -->
							<colgroup>
									<col style="width: 8%;" />
									<col style="width: 9%;" />
									<col style="width: 7%;" />
									<col style="width: 15%;" />
									<col style="width: 35%;" />
									<col style="width: 8%;" />
									<col style="width: 8%;" />
							</colgroup>
							<thead>
								<tr>
									<th>업무구분</th>
									<th>화면아이디</th>
									<th>팝업종류</th>
									<th>팝업 명칭</th>
									<th>설명</th>
									<th>Input</th>
									<th>Output</th>
								</tr>
							</thead>
							<tbody id="devList">
								<tr>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
							</tbody>
						</table>
					</form>
				</div>
				<!-- // container -->
			</div>
		</div>
		<!-- // wrapper -->

		<div id="quickmenu" class="aside right">
			<%@ include file="/WEB-INF/jsp/am/include/quick.jsp"%>
		</div>
	</div>
	<!-- // container -->
	<div id="footer">
		<%@ include file="/WEB-INF/jsp/am/include/footer.jsp"%>
	</div>
	<%@ include file="/WEB-INF/jsp/am/include/script.jsp"%>
</body>
</html>