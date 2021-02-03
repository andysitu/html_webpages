(function(){
  window.addEventListener("resize", function(event) {
    const width = window.innerWidth;
    if ((width > 767 && !desktopStatus) || (width <= 767 && desktopStatus)) {
      change_screen_size();
    }
  });

  window.onload = function() {
    var nav_buttons = document.getElementsByClassName("nav-buttons");
    for (let i=0; i<nav_buttons.length; i++) {
      nav_buttons[i].addEventListener("click", onClick_nav_button);
    }
    change_screen_size();
  }

  function remove_active_classes() { 
    let j;
    let active_buttons = document.getElementsByClassName("active-button");
    for (j=0; j<active_buttons.length; j++) {
      active_buttons[j].classList.remove("active-button");
    }
    let active_container = document.getElementsByClassName("active-container");
    for (j=0; j<active_container.length; j++) {
      active_container[j].style.maxHeight = null;
      active_container[j].classList.remove("active-container");
    }
  }

  // Removes old active class & sets new ones for button & text
  function onClick_nav_button(event) {
    var active = event.target.classList.contains("active-button")
    remove_active_classes();

    var toggle_container_id = event.target.getAttribute("toggler");
    var container = document.getElementById(toggle_container_id);
    
    // Show active class if it was hidden previously
    if (!active) {
      event.target.classList.add("active-button");
      
      container.classList.add("active-container");

      // Set max height for CSS transition
      container.style.maxHeight = container.scrollHeight + "px";
    } 
  }

  var desktopStatus;

  // Moves children from mobile to desktop container or vice versa
  function change_screen_size() {
    const width = window.innerWidth;
    var fit_mobile = document.getElementById("content1-mobile-container"),
        care_mobile = document.getElementById("care-mobile-container"),
        materials_mobile = document.getElementById("materials-mobile-container"),
        fit_desktop = document.getElementById("content1-desktop-container"),
        care_desktop = document.getElementById("content2-desktop-container"),
        materials_desktop = document.getElementById("content3-desktop-container");
    console.log(fit_desktop, fit_desktop.hasChildNodes(), fit_desktop.firstChild);
    if (width > 767) {
      desktopStatus = true;
      while (fit_mobile.hasChildNodes())
        fit_desktop.appendChild(fit_mobile.removeChild(fit_mobile.firstChild))
      while (care_mobile.hasChildNodes())
        care_desktop.appendChild(care_mobile.removeChild(care_mobile.firstChild))
      while (materials_mobile.hasChildNodes())
        materials_desktop.appendChild(materials_mobile.removeChild(materials_mobile.firstChild))
    } else {
      desktopStatus = false;
      while (fit_desktop.hasChildNodes())
        fit_mobile.appendChild(fit_desktop.removeChild(fit_desktop.firstChild))
      while (care_desktop.hasChildNodes())
        care_mobile.appendChild(care_desktop.removeChild(care_desktop.firstChild))
      while (materials_desktop.hasChildNodes())
        materials_mobile.appendChild(materials_desktop.removeChild(materials_desktop.firstChild))
    }
  }
})();