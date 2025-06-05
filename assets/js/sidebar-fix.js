// Wait for the DOM + theme scripts to finish
document.addEventListener("DOMContentLoaded", function() {
  // Find the sidebar element (the theme uses class="sidebar sticky")
  var sb = document.querySelector(".sidebar.sticky");
  if (sb) {
    // Undo any inline “sticky” positioning:
    sb.style.position = "static";
    sb.style.left = "0";
    sb.style.top = "auto";
    sb.style.width = "200px"; // normal sidebar width
    // Remove the “sticky” class so future theme code won’t re-fix it
    sb.classList.remove("sticky");
  }

  // Push the main .archive/content over by 200px
  var archive = document.querySelector(".archive");
  if (archive) {
    archive.style.marginLeft = "200px";
  }

  // Also shift any page header outside .archive
  var ph = document.querySelector(".page__content #main .page-header");
  if (ph) {
    ph.style.marginLeft = "200px";
  }
  var pm = document.querySelector(".page__content #main .page-main");
  if (pm) {
    pm.style.marginLeft = "200px";
  }
});

