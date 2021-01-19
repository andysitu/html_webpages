// Object that handles viewing shopcart that pops on right side
var shopcart_obj = {
  show() {
    var overall_ctn = document.getElementById("cart-overall-container"),
          overlay = document.getElementById("cart-overlay"),
          cart_ctn = document.getElementById("cart-container");
      // overall_ctn.classList.toggle("reveal");
      overlay.classList.toggle("reveal");
      cart_ctn.classList.toggle("reveal");
  },
  hide() {

  },
  load_handler: () => {
    var btn = document.getElementById("shopping-cart-container");
    btn.addEventListener("click", function() {
      shopcart_obj.show();
    });
    var overlay = document.getElementById("cart-overlay");
    overlay.addEventListener("click", function() {
      shopcart_obj.show();
    });
    var close_btn = document.getElementById("cart-close-container");
    close_btn.addEventListener("click", function() {
      shopcart_obj.show();
    });
  }
}
// Search navbar for mobile viewing
var search_obj = {
  load_handler() {
    var btn = document.getElementById("search-toggler");
    btn.addEventListener("click", function(e) {
      e.preventDefault();
      document.getElementById("searchbar-container").classList.toggle("reveal");
    });
  },
}

window.onload = function() {
  document.addEventListener('scroll', function(e) {
    if (document.body.scrollTop > 300) {
      document.getElementById("promo-nav-container").style.marginTop = "-42px";
    } else {
      document.getElementById("promo-nav-container").style.marginTop = "0px";
    }
  });

  shopcart_obj.load_handler();
  search_obj.load_handler();

  var docWidth = document.documentElement.offsetWidth;
};