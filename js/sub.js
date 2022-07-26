$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "나를 모르는 나에게", size: 50 },
    headers: { Authorization: "KakaoAK 54daa4ad18674eec2660209261cfd146" }
})
    .done(function (msg) {
        $('.book_text').prepend("<h2>" + msg.documents[0].title + "</h2>");
        $('.stars').append("<span>" + msg.documents[0].authors + "</span>");
        $('.stars').append("<span>" + msg.documents[0].publisher + "</span>");
    });

$(function () {
    $.get("./txt/book_info.txt", function (data) {
        $(".contents1").html(data);
    })
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "나를 모르는 나에게", size: 50 },
    headers: { Authorization: "KakaoAK 54daa4ad18674eec2660209261cfd146" }
})
    .done(function (msg) {
        $('.datetime').append(msg.documents[0].datetime);
        $('.publisher').append(msg.documents[0].publisher);
        $('.isbn').append(msg.documents[0].isbn);
        $('.price').append(msg.documents[0].price + "원");
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "삶", size: 50 },
    headers: { Authorization: "KakaoAK 54daa4ad18674eec2660209261cfd146" }
})
    .done(function (msg) {
        var boxs = document.getElementsByClassName("list");
        for (var i = 0; i < boxs.length; i++) {
            $("ul > .list").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
            $("ul > .list").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
            $("ul > .list").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
            $("ul > .list").eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
        }
    });

$(function () {
    $('.tap1').click(function () {
        $(this).addClass("tap_on");
        $('.tap2').removeClass("tap_on");
        $('.tap3').removeClass("tap_on");
        $('.contents1').css("display", "block");
        $('.contents2, .contents3').css("display", "none");
    })
    $('.tap2').click(function () {
        $(this).addClass("tap_on");
        $('.tap1').removeClass("tap_on");
        $('.tap3').removeClass("tap_on");
        $('.contents2').css("display", "block");
        $('.contents1, .contents3').css("display", "none");
    })
    $('.tap3').click(function () {
        $(this).addClass("tap_on");
        $('.tap1').removeClass("tap_on");
        $('.tap2').removeClass("tap_on");
        $('.contents3').css("display", "block");
        $('.contents1, .contents2').css("display", "none");
    })
})

// scroll logo change
$(window).scroll(function () {
    var ws = $(this).scrollTop();
    var scroll_nav = $('.tap_menu').offset().top;
    if (ws > scroll_nav - 10) {
        $('nav img').attr("src", "img/index/simple-logo.png").css("width", "23px");
    } else {
        $('nav img').attr("src", "img/index/full-logo.png").css("width", "56px");;
    }
})

//footer_info
$('.footer_info button').click(function () {
    if ($(this).val() == 1) {
        $(this).html("사업자 정보 닫기");
        $(this).prop("value", 2);
    } else {
        $(this).html("사업자 정보 펼쳐보기");
        $(this).attr("value", 1);
    }
    $('.footer_info ul').toggleClass('info_onoff');
})

//slide
$(function () {
    var page = 0;
    $('.prev').click(function () {
        page--;
        if (page < 0) {
            page = 0;
            return;
        }
        $('.slide').stop().animate({ marginLeft: -200 * page }, 250);
    });
    $('.next').click(function () {
        page++;
        if (page > $('.slide .list').length - 6) {
            page = $('.slide .list').length - 6;
            return;
        }
        $('.slide').stop().animate({ marginLeft: -200 * page }, 250);
    })
})