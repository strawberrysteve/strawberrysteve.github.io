// Wait for the DOM + any theme scripts to finish
document.addEventListener("DOMContentLoaded", function() {
  // Find the sidebar element (the theme usually uses class="sidebar sticky")
  var sb = document.querySelector(".sidebar.sticky");
  if (sb) {
    // Remove any inline position/left/top that the theme JS applied:
    sb.style.position = "static";
    sb.style.left = "0";
    sb.style.top = "auto";
    sb.style.width = "200px"; // keep its normal width
    // Also remove the "sticky" class so future theme code won’t re-fix it
    sb.classList.remove("sticky");
  }

  // Next, find the main content container (in this theme it’s ".archive")
  var archive = document.querySelector(".archive");
  if (archive) {
    // Push it over by 200px (the sidebar width)
    archive.style.marginLeft = "200px";
  }

  // Sometimes the header is outside .archive, so push that too
  var pageHeader = document.querySelector(".page__content #main .page-header");
  if (pageHeader) {
    pageHeader.style.marginLeft = "200px";
  }
  var pageMain = document.querySelector(".page__content #main .page-main");
  if (pageMain) {
    pageMain.style.marginLeft = "200px";
  }
});

