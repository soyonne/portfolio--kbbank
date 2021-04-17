$(window).on('load', function() {
    
    $moQuick = $('#m-quick a');
    $moQuick.click(function() {
        $(this).siblings().removeClass('on');
        $(this).addClass('on');
    });

    // visual slick
    $visual = $('#visual');
    $visualSlider = $('#visual .slider');

    $visualSlider.slick({
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        arrows: true,
        appendArrows: $visual.find('.slider-control'),
        dots: true,
        appendDots: $visual.find('.slick-dots-wrap'),
        pauseOnFocus: false,
        pauseOnHover: false,
    });

    $visual.find('.slick-play').click(function() {
        $visualSlider.slick('slickPlay');
        $(this).parent().removeClass('paused');
        $(this).parent().addClass('playing');
    });

    $visual.find('.slick-pause').click(function() {
        $visualSlider.slick('slickPause');
        $(this).parent().removeClass('playing');
        $(this).parent().addClass('paused');
    });

    
    $visualSlider.on('beforeChange', function(e, s, currIdx, nextIdx){
        // 슬라이드 배경색 바꾸기
        var num = nextIdx + 1;

        $visual.removeClass();
        $visual.addClass('active0' + num);

        // 슬라이드 텍스트 애니메이션 추가
        var $_slides = s.$slides;

        $_slides.removeClass('effect');
        $_slides.eq(nextIdx).addClass('effect');
    });
    


    // cont02 slick
    $cont02 = $('#cont02');
    $cont02Slider = $('#cont02 .slider');

    $cont02Slider.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        appendArrows: $cont02.find('.slider-control'),
        dots: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    $cont02.find('.slick-play').click(function() {
        $cont02Slider.slick('slickPlay');
        $(this).parent().removeClass('paused');
        $(this).parent().addClass('playing');
    });

    $cont02.find('.slick-pause').click(function() {
        $cont02Slider.slick('slickPause');
        $(this).parent().removeClass('playing');
        $(this).parent().addClass('paused');
    });

    // 오늘의 환율 - 현재 시각
    var today = new Date();
    var y = today.getFullYear();
    var m = today.getMonth() > 9 ? today.getMonth() : '0' + today.getMonth();
    var d = today.getDate() > 9 ? today.getDate() : '0' + today.getDate();
    var hours = today.getHours() > 9 ? today.getHours() : '0' + today.getHours();
    var min = today.getMinutes() > 9 ? today.getMinutes() : '0' + today.getMinutes();
    var sec = today.getSeconds() > 9 ? today.getSeconds() : '0' + today.getSeconds();

    $('#currencyDate').text(y + '.' + m + '.' + d + ' ' + hours + ':' + min + ':' + sec);


    function init() {
        $('.slider-control').addClass('playing');// 모든 슬라이더 컨트롤 - playing 상태로 설정
        $visualSlider.find('.slider-item').first().addClass('effect');// visual 첫 슬라이더 텍스트 효과 설정
        $moQuick.first().addClass('on');// 모바일 퀵 메뉴의 첫번째 메뉴 on 상태로 설정
    }

    init();
});