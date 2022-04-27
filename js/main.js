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

$(function () {
  $('.js-btn').on('click', function () {        // js-btnクラスをクリックすると、
    $('.menu , .btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
  })
});

// $(function(){
//   $(".btn-gnavi").on("click", function(){
//       // ハンバーガーメニューの位置を設定
//       var rightVal = 0;
//       if($(this).hasClass("open")) {
//           // 位置を移動させメニューを開いた状態にする
//           rightVal = -300;
//           // メニューを開いたら次回クリック時は閉じた状態になるよう設定
//           $(this).removeClass("open");
//       } else {
//           // メニューを開いたら次回クリック時は閉じた状態になるよう設定
//           $(this).addClass("open");
//       }
//       $("#global-navi").stop().animate({
//           right: rightVal
//       }, 200);
//   });
// });


$(document).ready(function () {
  $("#topBtn, #menu-sp").hide(); //ボタンを非表示にする
  $(window).on("scroll", function () {
    const sliderHeight = $(".mv").height();
      if (sliderHeight - 30 < $(this).scrollTop()) { 
          $("#topBtn, #menu-sp").fadeIn("fast"); //ボタンがフェードインする
      } else {
          $("#topBtn, #menu-sp").fadeOut("fast"); //ボタンがフェードアウトする
      }
      // scrollHeight = $(document).height(); ドキュメントの高さ 
      // scrollPosition = $(window).height() + $(window).scrollTop(); 現在地 
      // footHeight = $("footer").innerHeight(); 止めたい位置の高さ(footer)
      // if (scrollHeight - scrollPosition <= footHeight) { ドキュメントの高さと現在地の差がfooterの高さ以下の時
      //     $("#topBtn, #menu-sp").css({
      //         "position": "absolute", pisitionをabsoluteに変更
      //     });
      // } else { //それ以外の場合は
      //     $("#topBtn, #menu-sp").css({
      //         "position": "fixed", 固定表示
      //     });
      // }
  });

  //フッターの手前でボタンを止める
  // $(window).on('load scroll', function(){
  //   var height = $(document).height(), //ドキュメントの高さ 
  //       position = window.innerHeight + $(window).scrollTop(), //ページトップから現在地までの高さ
  //       footer = $('footer').height(); //フッターの高さ
  //   if ( height - position  < footer ){ 
  //     btn.addClass('absolute');
  //   } else { 
  //     btn.removeClass('absolute');
  //   }
  // });

// $(document).ready(function () {
//   $("#topBtn menu-sp").hide(); //ボタンを非表示にする
//   $(window).on("scroll", function () {
//       if ($(this).scrollTop() > 100) { //ページの上から100pxスクロールした時
//           $("#topBtn menu-sp").fadeIn("fast"); //ボタンがフェードインする
//       } else {
//           $("#topBtn menu-sp").fadeOut("fast"); //ボタンがフェードアウトする
//       }
//       scrollHeight = $(document).height(); //ドキュメントの高さ 
//       scrollPosition = $(window).height() + $(window).scrollTop(); //現在地 
//       footHeight = $("footer").innerHeight(); //止めたい位置の高さ(footer)
//       if (scrollHeight - scrollPosition <= footHeight) { //ドキュメントの高さと現在地の差がfooterの高さ以下の時
//           $("#topBtn menu-sp").css({
//               "position": "absolute", //pisitionをabsoluteに変更
//           });
//       } else { //それ以外の場合は
//           $("#topBtn menu-sp").css({
//               "position": "fixed", //固定表示
//           });
//       }
//   });


//スムーススクロール設定
  $('#topBtn').click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 800); //スムーススクロールの速度
      return false;
  });
});