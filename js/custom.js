$(function () {
  /*setInterval:일정한 시간 간격마다 지정한 함수를 반복 실행 */
  let stop;
  start();
  function start() {
    stop = setInterval(function () {
      $(".panel").animate({ "margin-left": "-300px" }, function () {
        $(".panel li:first-child").appendTo(".panel"); /*appendTo:뒤로 보내기*/
        $(".panel").css({ "margin-left": "0px" });
        /*제자리로 */
      });
    }, 2000);
  }

  $(".next").on("click", function () {
    clearInterval(stop);
    /*자동으로 움직이는 것을 멈춤 */
    $(".panel");
    $(".panel").animate({ "margin-left": "-300px" }, function () {
      $(".panel li:first-child").appendTo(".panel"); /*appendTo:뒤로 보내기*/
      $(".panel").css({ "margin-left": "0px" });
    });
    start();
  });
  $(".prev").on("click", function () {
    clearInterval(stop);
    $(".panel li:last-child").prependTo(".panel");
    $(".panel").css({ "margin-left": "-300px" });
    $(".panel").animate({ "margin-left": "0px" });
  });
});
