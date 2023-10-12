/**
 *                                           _
 *   ___  ____  ____ ____________________  (_)
 *  / _ \/ __ \/ __ `/ ___/ ___/ ___/ __ \/ /
 * /  __/ /_/ / /_/ (__  |__  ) /__/ / / / /
 * \___/ .___/\__,_/____/____/\___/_/ /_/_/
 *    /_/
 * Json Data for Worklist
 * author: riix@epasscni.com
 */

$.json = (typeof $.json !== 'undefined') ? $.json : []; // 전역 변수 선언 

// 메뉴 구조
$.json.pc = {
    "name": null,
    "src": null,
    "child": [{
        "code": "MAIN",
        "name": "메인",
        "src": "./index.html",
        "percent": 100,
        "start": '03-16',
        "end": '03-22',
        "day": 24,
        "nwax": 0,
        "kwah": 0
    }, {
        "code": "a01",
        "name": "전시",
        "src": "",
        "percent": null,
        "day": 24,
        "nwax": 0,
        "kwah": 0,
        "child": [{
            "code": "a01",
            "name": "대분류",
            "src": "./a01.대분류.html",
            "percent": 100,
            "start": '03-14',
            "end": '03-14',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "a02",
            "name": "중분류목록 - 이미지형",
            "src": "./a02.중분류.이미지형.html",
            "percent": 100,
            "start": '03-14',
            "end": '03-14',
            "nwax": 0,
            "kwah": 0
        // }, {
        //     "code": "a02",
        //     "name": "중분류목록 - 목록형",
        //     "src": "./a02.중분류.목록형.html",
        //     "percent": 0,
        //     "start": '03-14',
        //     "end": '03-14',
        //     "nwax": 0,
        //     "kwah": 0
        }, {
            "code": "a03",
            "name": "상품상세",
            "src": "./a03.상품상세.html",
            "percent": 100,
            "start": '03-15',
            "end": '03-17',
            "nwax": 0,
            "kwah": 0
        }]
    }, {
        "code": "b00",
        "name": "기획전",
        "src": "",
        "percent": null,
        "start": '',
        "end": '',
        "nwax": 0,
        "kwah": 0,
        "child": [{
            "code": "b00",
            "name": "기획전 - 목록",
            "src": "b01.기획전.목록.html",
            "percent": 100,
            "start": '03-13',
            "end": '03-13',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "b01",
            "name": "기획전 - 상세",
            "src": "b01.기획전.상세.html",
            "percent": 100,
            "start": '03-13',
            "end": '03-13',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "b02",
            "name": "베스트",
            "src": "b02.베스트.html",
            "percent": 100,
            "start": '03-13',
            "end": '03-13',
            "nwax": 0,
            "kwah": 0
        }]
    }, {
        "code": "g00",
        "name": "EVENT",
        "src": "",
        "percent": null,
        "start": '',
        "end": '',
        "nwax": 0,
        "kwah": 0,
        "child": [{
            "code": "g01",
            "name": "진행중인 이벤트 - 메인",
            "src": "g01.진행중인이벤트.메인.html",
            "percent": 100,
            "start": '03-09',
            "end": '03-09',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "g01",
            "name": "진행중인 이벤트 - 목록",
            "src": "g01.진행중인이벤트.목록.html",
            "percent": 100,
            "start": '03-09',
            "end": '03-09',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "g01",
            "name": "진행중인 이벤트 - 상세.일반형",
            "src": "g01.진행중인이벤트.상세.일반형.html",
            "percent": 100,
            "start": '03-09',
            "end": '03-09',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "g01",
            "name": "진행중인 이벤트 - 상세.댓글형",
            "src": "g01.진행중인이벤트.상세.댓글형.html",
            "percent": 100,
            "start": '03-09',
            "end": '03-09',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "g02",
            "name": "종료 이벤트 - 목록",
            "src": "g02.종료이벤트.목록.html",
            "percent": 100,
            "start": '03-09',
            "end": '03-09',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "g02",
            "name": "쿠폰",
            "src": "g02.쿠폰.목록.html",
            "percent": 100,
            "start": '03-10',
            "end": '03-10',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "g03",
            "name": "카드혜택",
            "src": "g03.카드혜택.목록.html",
            "percent": 100,
            "start": '03-10',
            "end": '03-10',
            "nwax": 0,
            "kwah": 0
        }]
    }, {
        "code": "f00",
        "name": "고객체험단",
        "src": "",
        "percent": null,
        "start": '',
        "end": '',
        "nwax": 0,
        "kwah": 0,
        "child": [{
            "code": "f01",
            "name": "고객체험단 - 목록",
            "src": "f01.고객체험단.목록.html",
            "percent": 100,
            "start": '03-07',
            "end": '03-07',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "f01",
            "name": "고객체험단 - 쓰기",
            "src": "f01.고객체험단.쓰기.html",
            "percent": 100,
            "start": '03-07',
            "end": '03-07',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "f01",
            "name": "고객체험단 - 상세",
            "src": "f01.고객체험단.리뷰.목록.html",
            "percent": 100,
            "start": '03-07',
            "end": '03-07',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "f01",
            "name": "고객체험단 - 상세",
            "src": "f01.고객체험단.리뷰.상세.html",
            "percent": 100,
            "start": '03-07',
            "end": '03-07',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "f02",
            "name": "당첨자 발표 - 목록",
            "src": "f02.당첨자발표.목록.html",
            "percent": 100,
            "start": '03-07',
            "end": '03-07',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "f02",
            "name": "당첨자발표 - 상세",
            "src": "f02.당첨자발표.상세.html",
            "percent": 100,
            "start": '03-08',
            "end": '03-08',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "f03",
            "name": "수행미션확인",
            "src": "f03.수행미션확인.html",
            "percent": 100,
            "start": '03-08',
            "end": '03-08',
            "nwax": 0,
            "kwah": 0
        }]
    },
    //  {
    //     "code": "c00",
    //     "name": "고객센터",
    //     "src": "",
    //     "percent": null,
    //     "start": '',
    //     "end": '',
    //     "nwax": 0,
    //     "kwah": 0,
    //     "child": [{
    //         "code": "c01",
    //         "name": "공지사항 - 목록",
    //         "src": "e01.공지사항.목록.html",
    //         "percent": 0,
    //         "start": '',
    //         "end": '',
    //         "nwax": 0,
    //         "kwah": 0
    //     }]
    // }, {
    //     "code": "d00",
    //     "name": "회원가입",
    //     "src": "",
    //     "percent": null,
    //     "start": '',
    //     "end": '',
    //     "nwax": 0,
    //     "kwah": 0,
    //     "child": [{
    //         "code": "d01",
    //         "name": "회원가입",
    //         "src": "e01.회원가입.html",
    //         "percent": 0,
    //         "start": '',
    //         "end": '',
    //         "nwax": 0,
    //         "kwah": 0
    //     }]
    // }, 
    {
        "code": "e00",
        "name": "로그인",
        "src": "",
        "percent": null,
        "start": '',
        "end": '',
        "nwax": 0,
        "kwah": 0,
        "child": [{
            "code": "e01",
            "name": "로그인",
            "src": "e01.로그인.html",
            "percent": 100,
            "start": '02-13',
            "end": '02-13',
            "nwax": 0,
            "kwah": 0
        }]
    }, {
        "code": "g00",
        "name": "마이페이지",
        "src": "",
        "percent": null,
        "start": '',
        "end": '',
        "nwax": 0,
        "kwah": 0,
        "child": [{
            "code": "g01",
            "name": "메인",
            "src": "g01.마이페이지.메인.html",
            "percent": 100,
            "start": '03-06',
            "end": '03-06',
            "nwax": 0,
            "kwah": 0
        }]
    }, {
        "code": "h00",
        "name": "기타",
        "src": "",
        "percent": null,
        "start": '',
        "end": '',
        "nwax": 0,
        "kwah": 0,
        "child": [{
            "code": "h01",
            "name": "기타 - 에러 404",
            "src": "h01.에러.404.html",
            "percent": 0,
            "start": '',
            "end": '',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "h02",
            "name": "맞춤견적 - 장바구니 상품 담기",
            "src": "h02.맞춤견적.장바구니.html",
            "percent": 100,
            "start": '03-17',
            "end": '03-17',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "h02",
            "name": "맞춤견적 - 카테고리 검색",
            "src": "h02.맞춤견적.카테고리검색.html",
            "percent": 100,
            "start": '03-17',
            "end": '03-17',
            "nwax": 0,
            "kwah": 0
        }]
    }, {
        "code": "popup",
        "name": "팝업",
        "src": "",
        "percent": null,
        "day": 0,
        "nwax": 0,
        "kwah": 0,
        "child": [{
            "code": "popup",
            "name": "회원로그인",
            "src": "pop.회원로그인.html",
            "percent": 100,
            "start": '02-13',
            "end": '02-13',
            "nwax": 0,
            "kwah": 0,
            "size": "800x980"
        }, {
            "code": "popup",
            "name": "체험단활동동의서",
            "src": "pop.체험단활동동의서.html",
            "percent": 100,
            "start": '03-07',
            "end": '03-07',
            "nwax": 0,
            "kwah": 0,
            "size": "850x510"
        }, {
            "code": "popup",
            "name": "상품간편보기",
            "src": "pop.상품간편보기.html",
            "percent": 100,
            "start": '03-07',
            "end": '03-07',
            "nwax": 0,
            "kwah": 0,
            "size": "850x780"
        }, {
            "code": "popup",
            "name": "리뷰등록",
            "src": "pop.리뷰등록.html",
            "percent": 100,
            "start": '03-07',
            "end": '03-07',
            "nwax": 0,
            "kwah": 0,
            "size": "850x805"
        }]
    }]
}

// 메뉴 구조
$.json.mobile = {
    "name": null,
    "src": null,
    "child": [{
        "code": "MAIN",
        "name": "메인",
        "src": "./index.html",
        "percent": 0,
        "day": 24,
        "nwax": 0,
        "kwah": 0
    }, {
        "code": "a01",
        "name": "전시",
        "src": "",
        "percent": null,
        "day": 24,
        "nwax": 0,
        "kwah": 0,
        "child": [{
            "code": "a01",
            "name": "대분류메인 - 웨딩홀 썸네일형",
            "src": "./a01.대분류메인.웨딩홀.A.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "a01",
            "name": "대분류메인 - 웨딩홀 리스트형",
            "src": "./a02.대분류메인.웨딩홀.B.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "a01",
            "name": "대분류메인 - 썸네일형",
            "src": "./a03.대분류메인.공통.A.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "a01",
            "name": "대분류메인 - 리스트형",
            "src": "./a04.대분류메인.공통.B.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "a02",
            "name": "중분류목록 - 웨딩홀 썸네일형",
            "src": "./a05.중분류목록.웨딩홀.A.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "a02",
            "name": "중분류목록 - 웨딩홀 리스트형",
            "src": "./a06.중분류목록.웨딩홀.B.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "a02",
            "name": "중분류목록 - 썸네일형",
            "src": "./a07.중분류목록.A.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "a02",
            "name": "중분류목록 - 리스트형",
            "src": "./a08.중분류목록.B.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "a03",
            "name": "상품상세",
            "src": "./a09.상품상세.종합.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "a03",
            "name": "상품상세 - 웨딩홀",
            "src": "./a09.상품상세.웨딩홀.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "a03",
            "name": "상품상세 - 스튜디오",
            "src": "./a09.상품상세.스튜디오.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "a03",
            "name": "상품상세 - 드레스",
            "src": "./a09.상품상세.드레스.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "a03",
            "name": "상품상세 - 메이크업/혼수",
            "src": "./a09.상품상세.메이크업혼수.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }]
    }, {
        "code": "b01",
        "name": "웨딩가이드",
        "src": "",
        "percent": null,
        "start": '02-15',
        "end": '02-15',
        "nwax": 0,
        "kwah": 0,
        "child": [{
            "code": "b01",
            "name": "웨딩가이드 메인",
            "src": "b01.웨딩가이드메인.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "b02",
            "name": "웨딩준비 - 목록",
            "src": "b02.웨딩준비.목록.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "b02",
            "name": "웨딩준비 - 보기",
            "src": "b02.웨딩준비.보기.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "b03",
            "name": "전문가 컬럼 - 목록",
            "src": "b03.전문가컬럼.목록.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "b03",
            "name": "전문가 컬럼 - 보기",
            "src": "b03.전문가컬럼.보기.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }]
    }, {
        "code": "c00",
        "name": "이벤트",
        "src": "",
        "percent": null,
        "start": '02-15',
        "end": '02-15',
        "nwax": 0,
        "kwah": 0,
        "child": [{
            "code": "c00",
            "name": "이벤트 - 목록",
            "src": "c00.이벤트.목록.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "c00",
            "name": "이벤트 - 보기",
            "src": "c00.이벤트.보기.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }]
    }, {
        "code": "c01",
        "name": "웨딩 멤버십",
        "src": "",
        "percent": null,
        "start": '02-15',
        "end": '02-15',
        "nwax": 0,
        "kwah": 0,
        "child": [{
            "code": "c01",
            "name": "멤버십메인",
            "src": "c01.멤버십메인.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "c01",
            "name": "멤버십메인 - 종합",
            "src": "c01.멤버십메인.종합.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "c02",
            "name": "멤버십 혜택",
            "src": "c02.멤버십혜택.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "c03",
            "name": "멤버십 가입 안내",
            "src": "c03.멤버십가입.안내.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "c03",
            "name": "멤버십 가입 - 신용카드",
            "src": "c03.멤버십가입.신용카드.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "c03",
            "name": "멤버십 가입 - 실시간 계좌이체",
            "src": "c03.멤버십가입.실시간계좌이체.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "c03",
            "name": "멤버십 가입 - 휴대폰",
            "src": "c03.멤버십가입.휴대폰.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "c03",
            "name": "멤버십 가입 완료",
            "src": "c03.멤버십가입.완료.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "c04",
            "name": "결제",
            "src": "",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "c05",
            "name": "계약내역 조회 - 가계약",
            "src": "c05.계약내역조회.가계약.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "c05",
            "name": "계약내역 조회 - 확정계약",
            "src": "c05.계약내역조회.확정계약.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "c05",
            "name": "계약내역 조회 - 상세 웨딩홀",
            "src": "c05.계약내역조회.상세.웨딩홀.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "c05",
            "name": "계약내역 조회 - 상세 기타",
            "src": "c05.계약내역조회.상세.기타.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "c06",
            "name": "포인트/투어포인트 - 적립내역",
            "src": "c06.포인트.적립내역.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "c06",
            "name": "포인트/투어포인트 - 사용내역",
            "src": "c06.포인트.사용내역.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "c07",
            "name": "웨딩캘린더",
            "src": "c07.웨딩캘린더.html",
            "percent": 0,
            "day": 2,
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "c07",
            "name": "캘린더항목관리",
            "src": "pop.캘린더항목관리.html",
            "percent": 0,
            "day": 2,
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "c08",
            "name": "모바일 청첩장 - 스킨선택",
            "src": "c08.모바일청첩장.STEP1.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "c08",
            "name": "모바일 청첩장 - 사진등록&amp;문구선택",
            "src": "c08.모바일청첩장.STEP2.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "c08",
            "name": "모바일 청첩장 - 보내기",
            "src": "c08.모바일청첩장.STEP3.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "c09",
            "name": "찜목록",
            "src": "c09.찜목록.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "c10",
            "name": "내 견적",
            "src": "c10.내견적.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "c11",
            "name": "상품문의 - 목록",
            "src": "c11.상품문의.목록.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "c11",
            "name": "상품문의 - 보기",
            "src": "c11.상품문의.보기.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "c11",
            "name": "상품문의 - 수정",
            "src": "c11.상품문의.수정.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "c12",
            "name": "1:1 고객문의 - 목록",
            "src": "c12.1대1고객문의.목록.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "c12",
            "name": "1:1 고객문의 - 신청",
            "src": "c12.1대1고객문의.신청.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "c12",
            "name": "1:1 고객문의 - 보기",
            "src": "c12.1대1고객문의.보기.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "c13",
            "name": "정보변경",
            "src": "c13.정보변경.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }]

    }, {
        "code": "d01",
        "name": "고객서비스",
        "src": "",
        "percent": null,
        "start": '02-15',
        "end": '02-15',
        "nwax": 0,
        "kwah": 0,
        "child": [{
            "code": "d01",
            "name": "1:1 문의 - 로그인전",
            "src": "d01.1대1문의.로그인전.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "d01",
            "name": "1:1 문의 - 신청",
            "src": "d01.1대1문의.신청.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "d01",
            "name": "1:1 문의 - 완료",
            "src": "d01.1대1문의.완료.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "d02",
            "name": "공지사항 - 목록",
            "src": "d02.공지사항.목록.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "d02",
            "name": "공지사항 - 보기",
            "src": "d02.공지사항.보기.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "d03",
            "name": "FAQ",
            "src": "d03.FAQ.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "d04",
            "name": "입점안내 - 신청",
            "src": "d04.입점안내.신청.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "d04",
            "name": "입점안내 - 완료",
            "src": "d04.입점안내.완료.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }]
    }, {
        "code": "e01",
        "name": "통합검색",
        "src": "",
        "percent": null,
        "start": '02-15',
        "end": '02-15',
        "nwax": 0,
        "kwah": 0,
        "child": [{
            "code": "d01",
            "name": "웨딩홀맞춤검색",
            "src": "e01.검색.웨딩홀맞춤검색.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "d01",
            "name": "통합검색",
            "src": "e01.검색.통합검색.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "d01",
            "name": "결과없음",
            "src": "e01.검색.결과없음.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }]
    }, {
        "code": "f01",
        "name": "퀵메뉴",
        "src": "",
        "percent": 0,
        "start": '02-15',
        "end": '02-15',
        "nwax": 0,
        "kwah": 0
    }, {
        "code": "g01",
        "name": "유틸리티",
        "src": "",
        "percent": null,
        "start": '02-15',
        "end": '02-15',
        "nwax": 0,
        "kwah": 0,
        "child": [{
            "code": "g01",
            "name": "Footer",
            "src": "",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "g02",
            "name": "기타(에러) - 페이지에러",
            "src": "g02.기타(에러).페이지에러.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "g02",
            "name": "기타(에러) - 사용권한에러",
            "src": "g02.기타(에러).사용권한에러.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "g02",
            "name": "기타(에러) - 장애에러",
            "src": "g02.기타(에러).장애에러.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "g03",
            "name": "이메일템플릿",
            "src": "",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }]
    }, {
        "code": "h01",
        "name": "웨딩박람회",
        "src": "",
        "percent": null,
        "start": '02-15',
        "end": '02-15',
        "nwax": 0,
        "kwah": 0,
        "child": [{
            "code": "h01",
            "name": "웨딩박람회 - 신청중",
            "src": "h01.웨딩박람회.신청중.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }, {
            "code": "h01",
            "name": "웨딩박람회 - 신청마감",
            "src": "h01.웨딩박람회.신청마감.html",
            "percent": 0,
            "start": '02-15',
            "end": '02-15',
            "nwax": 0,
            "kwah": 0
        }]
    }, {
        "code": "popup",
        "name": "팝업",
        "src": "",
        "percent": null,
        "day": 0,
        "nwax": 0,
        "kwah": 0,
        "child": [{
                "code": "popup",
                "name": "견적비교",
                "src": "pop.견적비교.html",
                "percent": 0,
                "day": 0.3,
                "nwax": 0,
                "kwah": 0,
                "size": "970x530"
            }, {
                "code": "popup",
                "name": "합계견적",
                "src": "pop.합계견적.html",
                "percent": 0,
                "day": 0.3,
                "nwax": 0,
                "kwah": 0,
                "size": "840x950"
            }
        ]
    }]
}

// 메뉴 구조
$.json.module = {
    "name": null,
    "src": null,
    "child": [{
        "code": "modalr",
        "name": "Overlay Pop-Up",
        "src": "../html_module/epass.modalr.html",
        "percent": 0,
        "day": 3,
        "nwax": 0,
        "kwah": 0
    }, {
        "code": "notifiy",
        "name": "Notifier",
        "src": "../html_module/epass.notify.html",
        "percent": 0,
        "day": 3,
        "nwax": 0,
        "kwah": 0
    }, {
        "code": "tooltip",
        "name": "Tooltip",
        "src": "../html_module/epass.tooltip.html",
        "percent": 0,
        "day": 3,
        "nwax": 0,
        "kwah": 0
    }]
}
