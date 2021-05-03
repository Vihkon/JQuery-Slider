$(function () {
    var sliderotosure = 3000; // Slider otomatik olarak kaç saniyede bir ilerlesin (1saniye=1000).
    var toplamli = $("ul.slider li").length; // Slider içindeki eleman sayısını çeker.
    var liwidth = 500; // Slider genişliğinin pixel değerini belirtir.
    var toplamwidth = liwidth*toplamli; // Toplam genişliği bulmamızı sağlar.
    var lideger = 0; // Slider sırasını belirtir.
    
    /*Slider width*/
    $("ul.slider").css("width",toplamwidth);

    /*Slider next button */
    $("button#ssonr").click(function () {
        if (lideger < toplamli-1) {
            lideger++;
            lisira=lideger*liwidth;
            $("ul.slider").animate({"margin-left":"-"+lisira+"px"})
        }
        else if (lideger+1 == toplamli) {
            lideger= 0;
            $("ul.slider").animate({"margin-left":"0px"})
        }
    })
    /*Slider previous button */
    $("button#sonce").click(function () {
        if (lideger>0) {
            lideger--;
            lisira=lideger*liwidth;
            $("ul.slider").animate({"margin-left":"-"+lisira+"px"})
        }
        else if (lideger == 0) {
            lideger= toplamli-1;
            lisira=lideger*liwidth;
            $("ul.slider").animate({"margin-left":"-"+lisira+"px"})
        }
    })

    /*Slider oto */
    $.slider = function () {
        if (lideger < toplamli-1) {
            lideger++;
            lisira=lideger*liwidth;
            $("ul.slider").animate({"margin-left":"-"+lisira+"px"})
        }
        else{
            lideger= 0;
            $("ul.slider").animate({"margin-left":"0px"})
        }
    }
    var don = setInterval("$.slider()", sliderotosure);

    /*Slider if hover */
    $("div#slider").hover(function () {
        clearInterval(don);
    },function () {
        don = setInterval("$.slider()", sliderotosure);
    })
})