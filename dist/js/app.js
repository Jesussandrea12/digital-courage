$(function() {
  $.scrollify({
		section:".panel",
    scrollbars:false,
    before: function(i,panels) {
      var ref = panels[i].attr("data-section-name");
      $(".pagination a.active").removeClass("active");
      $(".pagination a[href=#" + ref + "]").addClass("active");
    },

    after:function(i,panels) {
      var ref = panels[i].attr("data-section-name");
      for(var j = 0;j < panels.length;j++) {
        if(j>i) {
        }
      }
    },
	});

  $(".pagination a").on("click",function() {
    $.scrollify.move($(this).attr("href"));
  });
});
