// スクロールするとヘッダーの色変更
$(function () {
  $(window).on("scroll", function () {
    const sliderHeight = $(".mv").height();
    if (sliderHeight - 30 < $(this).scrollTop()) {
      $(".js-header").addClass("headerColorScroll");
    } else {
      $(".js-header").removeClass("headerColorScroll");
    }
  });
});


// Topに戻るボタン
$(document).ready(function () {
  $("#topBtn").hide(); //ボタンを非表示にする
  $(window).on("scroll", function () {
    const sliderHeight = $(".mv").height();
      if (sliderHeight - 30 < $(this).scrollTop()) { 
          $("#topBtn").fadeIn("fast"); //ボタンがフェードインする
      } else {
          $("#topBtn").fadeOut("fast"); //ボタンがフェードアウトする
      }
  });


//スムーススクロール設定
  $('#topBtn').click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 800); //スムーススクロールの速度
      return false;
  });
});

// フッターの上でスクロールを止める
$(window).scroll(function () {
scrollHeight = $(document).height();  
      scrollPosition = $(window).height() + $(window).scrollTop();  
      footHeight = $("footer").innerHeight(); 
      if ( scrollHeight - scrollPosition  <= footHeight ) { 
          $(".pagetop-btn").css({
              "bottom": footHeight + 20
          });
      } else { 
          $(".pagetop-btn").css({
              "position":"fixed",
              "bottom": "30px"
          });
      }
});

