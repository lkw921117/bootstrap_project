function menuClickBrigade(topMenu, LeftMenu) {
  var topMenuNm = "";
  switch (topMenu) {
    case 1:
      switch (LeftMenu) {
        case 1:
          topMenuNm = "main";
          $('#_selectTitle').html('Dashboard');
          $('#_selectHistory').html('<a href="/dashboard">메인</a> > Dashboard');
          console.log('메인-대시보드 --> 컨텐츠표시');
          break;
      }
      break;
    case 2:
      topMenuNm = "member";
      switch (LeftMenu) {
        case 1:
          $('#_selectTitle').html('회원조회');
          $('#_selectHistory').html('<a href="/member">회원관리</a> > 회원조회');
          console.log('회원관리-회원조회-회원조회 --> 컨텐츠표시');
          break;
        case 2:
          $('#_selectTitle').html('문의조회');
          $('#_selectHistory').html('<a href="/member">회원관리</a> > 문의조회');
          console.log('회원관리-문의관리-문의조회 --> 컨텐츠표시');
          break;
        case 3:
          $('#_selectTitle').html('자주쓰는답변');
          $('#_selectHistory').html('<a href="/member">회원관리</a> > 자주쓰는답변');
          console.log('회원관리-문의관리-자주쓰는답변 --> 컨텐츠표시');
          break;
        case 4:
          $('#_selectTitle').html('회원메모조회');
          $('#_selectHistory').html('<a href="/member">회원관리</a> > 회원메모조회');
          console.log('회원관리-회원메모조회-회원메모조회 --> 컨텐츠표시');
          break;
      }
      break;
    case 3:
      topMenuNm = "request";
      switch (LeftMenu) {
        case 1:
          $('#_selectTitle').html('서비스 신청현황조회');
          $('#_selectHistory').html('<a href="/request">신청관리</a> > 서비스 신청현황조회');
          console.log('신청관리-신청관리-서비스신청현황조회 --> 컨텐츠표시');
          break;
        case 2:
          $('#_selectTitle').html('견적서 신청현황조회');
          $('#_selectHistory').html('<a href="/request">신청관리</a> > 견적서 신청현황조회');
          console.log('신청관리-신청관리-견적서신청현황조회 --> 컨텐츠표시');
          break;
      }
      break;
    case 4:
      topMenuNm = "pay";
      switch (LeftMenu) {
        case 1:
          $('#_selectTitle').html('결제내역조회');
          $('#_selectHistory').html('<a href="/pay">결제관리</a> > 결제내역조회');
          console.log('결제관리-결제관리-결제내역조회 --> 컨텐츠표시');
          break;
        case 2:
          $('#_selectTitle').html('결제수동등록');
          $('#_selectHistory').html('<a href="/pay">결제관리</a> > 결제수동등록');
          console.log('결제관리-결제관리-결제수동등록 --> 컨텐츠표시');
          break;
        case 3:
          $('#_selectTitle').html('증빙서류 신청내역');
          $('#_selectHistory').html('<a href="/pay">결제관리</a> > 증빙서류신청내역');
          console.log('결제관리-결제관리-증빙서류신청내역 --> 컨텐츠표시');
          break;
      }
      break;
    case 5:
      topMenuNm = "board";
      switch (LeftMenu) {
        case 1:
          $('#_selectTitle').html('FAQ 관리');
          $('#_selectHistory').html('<a href="/board">게시판관리</a> > FAQ 관리');
          console.log('게시판관리-게시판관리-FAQ관리 --> 컨텐츠표시');
          break;
        case 2:
          $('#_selectTitle').html('이용약관관리');
          $('#_selectHistory').html('<a href="/board">게시판관리</a> > 이용약관관리');
          console.log('게시판관리-게시판관리-이용약관관리 --> 컨텐츠표시');
          break;
        case 3:
          $('#_selectTitle').html('공지사항관리');
          $('#_selectHistory').html('<a href="/board">게시판관리</a> > 공지사항관리');
          console.log('게시판관리-게시판관리-공지사항관리 --> 컨텐츠표시');
          break;
        case 4:
          $('#_selectTitle').html('블로그관리');
          $('#_selectHistory').html('<a href="/board">게시판관리</a> > 블로그관리');
          console.log('게시판관리-게시판관리-블로그관리 --> 컨텐츠표시');
          break;
      }
      break;
    case 6:
      topMenuNm = "promotion";
      switch (LeftMenu) {
        case 1:
          $('#_selectTitle').html('할인관리');
          $('#_selectHistory').html('<a href="/promotion">프로모션</a> > 할인관리');
          console.log('프로모션-프로모션-할인관리 --> 컨텐츠표시');
          break;
      }
      break;
    case 7:
      topMenuNm = "product";
      switch (LeftMenu) {
        case 1:
          $('#_selectTitle').html('상품조회');
          $('#_selectHistory').html('<a href="/product">상품관리</a> > 상품조회');
          console.log('상품관리-메인서비스관리-상품조회 --> 컨텐츠표시');
          break;
        case 2:
          $('#_selectTitle').html('상품등록');
          $('#_selectHistory').html('<a href="/product">상품관리</a> > 상품등록');
          console.log('상품관리-메인서비스관리-상품등록 --> 컨텐츠표시');
          break;
        case 3:
          $('#_selectTitle').html('이용기간설정');
          $('#_selectHistory').html('<a href="/product">상품관리</a> > 이용기간설정');
          console.log('상품관리-상품옵션관리-이용기간설정 --> 컨텐츠표시');
          break;
        case 4:
          $('#_selectTitle').html('용량증설');
          $('#_selectHistory').html('<a href="/product">상품관리</a> > 용량증설');
          console.log('상품관리-상품옵션관리-부가서비스설정-용량증설 --> 컨텐츠표시');
          break;
        case 5:
          $('#_selectTitle').html('법인카드연동');
          $('#_selectHistory').html('<a href="/product">상품관리</a> > 법인카드연동');
          console.log('상품관리-상품옵션관리-부가서비스설정-법인카드연동 --> 컨텐츠표시');
          break;
        case 6:
          $('#_selectTitle').html('메신져');
          $('#_selectHistory').html('<a href="/product">상품관리</a> > 메신져');
          console.log('상품관리-상품옵션관리-부가서비스설정-메신져 --> 컨텐츠표시');
          break;
      }
      break;
    case 8:
      topMenuNm = "setting";
      switch (LeftMenu) {
        case 1:
          $('#_selectTitle').html('관리자조회');
          $('#_selectHistory').html('<a href="/setting">환경설정</a> > 관리자조회');
          console.log('환경설정-고객센터관리-관리자조회 --> 컨텐츠표시');
          break;
        case 2:
          $('#_selectTitle').html('관리자등록');
          $('#_selectHistory').html('<a href="/setting">환경설정</a> > 관리자등록');
          console.log('환경설정-고객센터관리-관리자등록 --> 컨텐츠표시');
          break;
      }
      break;
  }
  
  $("[name="+topMenuNm+"]").addClass("top-menu-selected");
}
