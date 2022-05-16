// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var pageNum = 1;

var searchBox = document.getElementById("search");
var prev = document.getElementById("previous-his");
var next = document.getElementById("next-his");
var clickfun = function(){
    console.log("test");
    document.getElementById("resulthl").innerHTML = "";
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: $("#query").val(), page: pageNum, size: 50},
        headers: {Authorization: "KakaoAK 85c4c7575f630d79e19b26e2e830cdf9"} // ########부분에 본인의 REST API 키를 넣어주세요.

    })
    .done(function (msg) {
        console.log(msg);
        for(var lin = 0; lin < 5; lin++)
        {
            for (var i = 0; i < 10; i++){
                $("#resulthl").append("<a href='"+ msg.documents[lin * 10 + i].url+"'>" + 
                "<img src='" + msg.documents[lin * 10 + i].thumbnail + "'/></a>");
            }
            $("#result").append("<br>")
        }
    });
};
var go_next = function() {
    arguments.callee.pageNum = arguments.callee.pageNum || 1;
    arguments.callee.pageNum++;
    console.log(pageNum);
    document.getElementById("resulthl").innerHTML = "";
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: $("#query").val(), page: arguments.callee.pageNum, size: 50},
        headers: {Authorization: "KakaoAK 85c4c7575f630d79e19b26e2e830cdf9"} // ########부분에 본인의 REST API 키를 넣어주세요.

    })
    .done(function (msg) {
        console.log(msg);
        for(var lin = 0; lin < 5; lin++)
        {
            for (var i = 0; i < 10; i++){
                $("#resulthl").append("<a href='"+ msg.documents[lin * 10 + i].url+"'>" + 
                "<img src='" + msg.documents[lin * 10 + i].thumbnail + "'/></a>");
            }
            $("#result").append("<br>")
        }
    });
}
searchBox.addEventListener("click", clickfun);
next.addEventListener("click", go_next);


/*
$(document).ready(function () {
    var pageNum = 1;

    $("#search").click(function () {
        $("div").html("");

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: $("#query").val(), page: pageNum},
            headers: {Authorization: "KakaoAK 85c4c7575f630d79e19b26e2e830cdf9"} // ########부분에 본인의 REST API 키를 넣어주세요.

        })
        .done(function (msg) {
            console.log(msg);
            for (var i = 0; i < 10; i++){
                $("div").append("<h2><a href='"+ msg.documents[i].url +"'>" + msg.documents[i].title + "</a></h2>");
                $("div").append("<strong>저자:</strong> " + msg.documents[i].authors + "<br>");
                $("div").append("<strong>출판사:</strong> " + msg.documents[i].publisher + "<br>");
                $("div").append("<strong>요약:</strong> " + msg.documents[i].contents + "...<br>");
                $("div").append("<img src='" + msg.documents[i].thumbnail + "'/><br>");
            }
        });
    })

    $(window).scroll(function(){  

        if ( Math.ceil($(window).scrollTop()) + $(window).height() >= $(document).height() ){
            pageNum++;


            $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: $("#query").val(),  page: pageNum},
                headers: {Authorization: "KakaoAK 85c4c7575f630d79e19b26e2e830cdf9"} // ########부분에 본인의 REST API 키를 넣어주세요.

            })
            .done(function (msg) {
                console.log(msg);
                for (var i = 0; i < 10; i++){
                    $("div").append("<h2><a href='"+ msg.documents[i].url +"'>" + msg.documents[i].title + "</a></h2>");
                    $("div").append("<strong>저자:</strong> " + msg.documents[i].authors + "<br>");
                    $("div").append("<strong>출판사:</strong> " + msg.documents[i].publisher + "<br>");
                    $("div").append("<strong>요약:</strong> " + msg.documents[i].contents + "...<br>");
                    $("div").append("<img src='" + msg.documents[i].thumbnail + "'/><br>");
                }
            });

        }
        
    });
})
*/