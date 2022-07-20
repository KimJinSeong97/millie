//section ajax
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "경제", size: 50 },
    headers: { Authorization: "KakaoAK 54daa4ad18674eec2660209261cfd146" }
})
    .done(function (msg) {
        var boxs = document.getElementsByClassName("box1");
        for (var i = 0; i < boxs.length; i++) {
            $("ul > .box1").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
            $("ul > .box1").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
            $("ul > .box1").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
            $("ul > .box1").eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "멘탈", size: 50 },
    headers: { Authorization: "KakaoAK 54daa4ad18674eec2660209261cfd146" }
})
    .done(function (msg) {
        var boxs = document.getElementsByClassName("box2");
        for (var i = 0; i < boxs.length; i++) {
            $("ul > .box2").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
            $("ul > .box2").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
            $("ul > .box2").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
            $("ul > .box2").eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "인생", size: 50 },
    headers: { Authorization: "KakaoAK 54daa4ad18674eec2660209261cfd146" }
})
    .done(function (msg) {
        var boxs = document.getElementsByClassName("box3");
        for (var i = 0; i < boxs.length; i++) {
            $("ul > .box3").eq(i).prepend("<img src='" + msg.documents[i].thumbnail + "'/>");
            $("ul > .box3").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
            $("ul > .box3").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
            $("ul > .box3").eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "친구", size: 50 },
    headers: { Authorization: "KakaoAK 54daa4ad18674eec2660209261cfd146" }
})
    .done(function (msg) {
        var boxs = document.getElementsByClassName("box4");
        for (var i = 0; i < boxs.length; i++) {
            $("ul > .box4").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
            $("ul > .box4").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
            $("ul > .box4").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
            $("ul > .box4").eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
        }
    });

//category ajax
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "주식", size: 50 },
    headers: { Authorization: "KakaoAK 54daa4ad18674eec2660209261cfd146" }
})
    .done(function (msg) {
        var genres = document.getElementsByClassName("genre1");
        for (var i = 0; i < genres.length; i++) {
            $("ul > .genre1").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
            $("ul > .genre1").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
            $("ul > .genre1").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
            $("ul > .genre1").eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "영어", size: 50 },
    headers: { Authorization: "KakaoAK 54daa4ad18674eec2660209261cfd146" }
})
    .done(function (msg) {
        var genres = document.getElementsByClassName("genre2");
        for (var i = 0; i < genres.length; i++) {
            $("ul > .genre2").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
            $("ul > .genre2").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
            $("ul > .genre2").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
            $("ul > .genre2").eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "고전", size: 50 },
    headers: { Authorization: "KakaoAK 54daa4ad18674eec2660209261cfd146" }
})
    .done(function (msg) {
        var genres = document.getElementsByClassName("genre3");
        for (var i = 0; i < genres.length; i++) {
            $("ul > .genre3").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
            $("ul > .genre3").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
            $("ul > .genre3").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
            $("ul > .genre3").eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "인테리어", size: 50 },
    headers: { Authorization: "KakaoAK 54daa4ad18674eec2660209261cfd146" }
})
    .done(function (msg) {
        var genres = document.getElementsByClassName("genre4");
        for (var i = 0; i < genres.length; i++) {
            $("ul > .genre4").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
            $("ul > .genre4").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
            $("ul > .genre4").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
            $("ul > .genre4").eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "다이어트", size: 50 },
    headers: { Authorization: "KakaoAK 54daa4ad18674eec2660209261cfd146" }
})
    .done(function (msg) {
        var genres = document.getElementsByClassName("genre5");
        for (var i = 0; i < genres.length; i++) {
            $("ul > .genre5").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
            $("ul > .genre5").eq(i).append("<h4>" + msg.documents[i].title + "</h4>");
            $("ul > .genre5").eq(i).append("<h5>" + msg.documents[i].authors + "</h5>");
            $("ul > .genre5").eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
        }
    });

$(function () {
    //genre
    $(".genre>button:nth-of-type(1)").click(function () {
        $(this).addClass("btn_on");
        $(".genre>button:nth-of-type(2), .genre>button:nth-of-type(3), .genre>button:nth-of-type(4), .genre>button:nth-of-type(5)").removeClass("btn_on");
        $(".genre1").fadeIn(250).css("zIndex", "1");
        $(".genre2, .genre3, .genre4, .genre5").fadeOut(250);
    })
    $(".genre>button:nth-of-type(2)").click(function () {
        $(this).addClass("btn_on");
        $(".genre>button:nth-of-type(1), .genre>button:nth-of-type(3), .genre>button:nth-of-type(4), .genre>button:nth-of-type(5)").removeClass("btn_on");
        $(".genre2").fadeIn(250).css("zIndex", "1");
        $(".genre1, .genre3, .genre4, .genre5").fadeOut(250);
    })
    $(".genre>button:nth-of-type(3)").click(function () {
        $(this).addClass("btn_on");
        $(".genre>button:nth-of-type(1), .genre>button:nth-of-type(2), .genre>button:nth-of-type(4), .genre>button:nth-of-type(5)").removeClass("btn_on");
        $(".genre3").fadeIn(250).css("zIndex", "1");
        $(".genre1, .genre2, .genre4, .genre5").fadeOut(250);
    })
    $(".genre>button:nth-of-type(4)").click(function () {
        $(this).addClass("btn_on");
        $(".genre>button:nth-of-type(1), .genre>button:nth-of-type(2), .genre>button:nth-of-type(3), .genre>button:nth-of-type(5)").removeClass("btn_on");
        $(".genre4").fadeIn(250).css("zIndex", "1");
        $(".genre1, .genre2, .genre3, .genre5").fadeOut(250);
    })
    $(".genre>button:nth-of-type(5)").click(function () {
        $(this).addClass("btn_on");
        $(".genre>button:nth-of-type(1), .genre>button:nth-of-type(2), .genre>button:nth-of-type(3), .genre>button:nth-of-type(4)").removeClass("btn_on");
        $(".genre5").fadeIn(250).css("zIndex", "1");
        $(".genre1, .genre2, .genre3, .genre4").fadeOut(250);
    })
    //qna
    $('.qna1').click(function () {
        $('.q1').toggleClass('q_on');
        $('.a1').slideToggle(250);
    })
    $('.qna2').click(function () {
        $('.q2').toggleClass('q_on');
        $('.a2').slideToggle(250);
    })
    $('.qna3').click(function () {
        $('.q3').toggleClass('q_on');
        $('.a3').slideToggle(250);
    })
    $('.qna4').click(function () {
        $('.q4').toggleClass('q_on');
        $('.a4').slideToggle(250);
    })
    //footer_info
    $('.footer_info button').click(function () {
        $(this).prop('value', 1)
        $('.footer_info ul').toggleClass('info_onoff');
    })
});

// if
// value = 1;
// button text = 펼쳐보기,
// else
// value = 2;
// button text = 닫기.
