$(function() {
  setTimeout(function() {
    var windowHeight = $(window).innerHeight();
    var st_scrollOffsetTop = $(".st-scroll").offset().top;
    if (st_scrollOffsetTop < 0) {
      $(".st-scroll").css('margin-top', -st_scrollOffsetTop / windowHeight + '00vh');
    }
  }, 500);
  document.body.onmousewheel = function(event) {
    event = event || window.event;
    var direction = event.wheelDelta && (event.wheelDelta > 0 ? "mouseup" : "mousedown");
    var windowHeight = $(window).innerHeight();
    var st_scrollOffsetTop = $(".st-scroll").offset().top;
    var i = (-st_scrollOffsetTop) / windowHeight;
    var j = Math.floor(i);
    if (i-j === 0) {
      if (direction == "mousedown") {
        $("[id^=st-control]")[j + 1].click();
      } else {
        $("[id^=st-control]")[j - 1].click();
      }
    }
  };
});
