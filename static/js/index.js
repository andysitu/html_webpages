window.onload = function() {
  document.addEventListener('scroll', function(e) {
    if (document.body.scrollTop > 300) {
      document.getElementById("promo-nav-container").style.marginTop = "-42px";
    } else {
      document.getElementById("promo-nav-container").style.marginTop = "0px";
    }
  });
};