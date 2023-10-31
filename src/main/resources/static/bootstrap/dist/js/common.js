var resizeHandle = null;
var resizeCount = 0;

function resizeContents() {
    try {
        var asideHeight = parseInt($('#aside').css('height'),10);
        var clientHeight = document.documentElement.clientHeight;
        //console.log(asideHeight, clientHeight);
        if (asideHeight > clientHeight) {
            $('#aside').css('height', clientHeight + 'px');
        }
        var contentHeight = clientHeight - 160;
        $('#contents').css('height', contentHeight + 'px');
    } catch (e) {
    }
};

function resizePosition(isLoad) {
    resizeCount++;
    if (resizeCount > 19) {
        if (!resizeHandle) {
            clearInterval(resizeHandle);
            resizeHandle = null;
        }
        return;
    }
    resizeContents();
};

$(document).ready(function(){
    resizeCount = 0;
    resizePosition(true);
    resizeHandle = setInterval(function(){
        resizePosition(true);
    },50);
    leftMenuListeners();
});

$(window).on('resize', function () {
    if (!resizeHandle) {
        clearInterval(resizeHandle);
        resizeHandle = null;
    }
    resizeCount = 0;
    resizePosition(false);
    resizeHandle = setInterval(function(){
        resizePosition(false);
    },50);
});

function leftMenuListeners() {
  for (var i=0; i<9; i++) {
    for (var j=0; j<10; j++) {
      if ($('#menu-' + i + j)) {
        menuLink(i,j);
      }
    }
  }
  var leftMenuId = $('.nav-link.left-menu-padding').eq(0).attr('id');
  $('#'+leftMenuId).click();
}

function menuLink(i,j) {
  $('#menu-' + i + j).click(function() {
    $("[id^='menu-']").removeClass('active left-menu-selected');
    $(this).addClass('active left-menu-selected');
    menuClickBrigade(i, j);
  });
}

function pageMove(page){
  location.href = "/"+ page;
}