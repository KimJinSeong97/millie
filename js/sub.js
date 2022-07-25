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
