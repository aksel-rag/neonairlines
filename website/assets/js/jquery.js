$(function() {
    let loading = $(".loading");
    loading.delay(loading.attr("delay-hide")).slideUp();
});

$(function () {
    $("#exploreButton").on("click", function () {
      $("html, body").animate(
        {
          scrollTop: $("#infoPage").offset().top
        },
        1000
      );
    });
  });