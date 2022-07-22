$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "나를 모르는 나에게", size: 50 },
    headers: { Authorization: "KakaoAK 54daa4ad18674eec2660209261cfd146" }
})
    .done(function (msg) {
        $('.book_text').prepend("<h2>"+msg.documents[0].title+"</h2>");
        $('.stars').append("<span>"+msg.documents[0].authors+"</span>");
        $('.stars').append("<span>"+msg.documents[0].publisher+"</span>");
    });