"use strict";

// $(document).ready(function () {
//   $("body").autoPadding({
//     source: $(".js-header"),
//   });
//   //removeIf(production)
//   // console.log("document ready");
//   //endRemoveIf(production)
// });

$(document).ready(function () {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
  
});
