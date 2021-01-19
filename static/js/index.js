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

window.onload = function() {
  document.addEventListener('scroll', function(e) {
    if (document.body.scrollTop > 300) {
      document.getElementById("promo-nav-container").style.marginTop = "-42px";
    } else {
      document.getElementById("promo-nav-container").style.marginTop = "0px";
    }
  });

  shopcart_obj.load_handler();

  var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);
};