$(window).on('load', function() {
    $menu = $('#gnb > ul > li');

    $menu.has('.drop-menu').mouseenter(function() {
        $(this).find('.drop-menu').show();
    });

    $menu.has('.drop-menu').mouseleave(function() {
        $(this).find('.drop-menu').hide();
    });

    $('.btn-fm').click(function() {
        $(this).parent().toggleClass('on');
    });



    var $btnMoGnb = $('.btn-mo-gnb');
    var $btnMoClose = $('.btn-mo-close');
    var $menuTab = $('.menu-tab li');
    var $menuItem = $('.menu-item');
    var $moDrop = $('.mo-drop-menu');

    $btnMoGnb.click(function() {
        $('html').addClass('mo-open');

        // init - 메뉴 열리면 첫번째 메뉴 선택
        $menuTab.first().addClass('on');
        $menuItem.first().addClass('on');
        $moDrop.removeClass('open');
    });

    $btnMoClose.click(function() {
        $('html').removeClass('mo-open');
        $('.mo-gnb').removeClass('open');
        
        // init - 선택된 메뉴 해제
        $menuTab.removeClass('on');
        $menuItem.removeClass('on');
    });

    $menuTab.click(function() { // 클릭하면 모바일 메뉴 열기
        var idx = $(this).index();
        var $target = $menuItem.eq(idx);

        $(this).siblings().removeClass('on');
        $(this).addClass('on');
        $target.siblings().removeClass('on');
        $target.addClass('on');
        $moDrop.removeClass('open');
    });

    $moDrop.click(function() { // 클릭하면 모바일 메뉴 열기
        $(this).siblings().removeClass('open');
        $(this).toggleClass('open');
    });

    $('.btn-search').click(function() { // 통합검색 열기
        $('html').addClass('mo-open');
        $('#search').slideDown();
    });

    $('.btn-close').click(function() { // 통합검색 닫기
        $('html').removeClass('mo-open');
        $('#search').slideUp();
    });

});



/*--------- resize ---------*/
$(window).on('resize', function(){
    console.log('resize');
	var $winW = $(window).width();
	if($winW > 980){ // 윈도우 창이 980px보다 크면
        console.log('ok');
		$('html').removeClass('mo-open');// 모바일 메뉴 닫기
        
        // init - 모바일 메뉴에서 선택된 메뉴 닫기
        $('.menu-tab li').removeClass('on');
        $('.menu-item').removeClass('on');
	};
});