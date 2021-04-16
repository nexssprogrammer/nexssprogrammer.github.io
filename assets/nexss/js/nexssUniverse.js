function ajaxAction(url, e) {
  e = e || window.event;
  var target = e.target || e.srcElement;

  var action = $(target).attr("act");
  var id = $(target).attr("data-id");
  var dd = $(target).attr("dd");
  var dw = $(target).attr("dw");

  $.ajax({
    type: "POST",
    url: "action",
    data: { action: action },
    success: function(data) {
      if (!data.includes("<script>")) {
        switch (action) {
          case "mecz-start":
          case "mecz-koniec":
            $("#akcja" + id).html(data);
            break;
          default:
            $("#mecz" + id).html(data);
        }
      } else {
        $(document.body).append(data);
      }
    }
  });
}
