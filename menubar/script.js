window.onload = () => {
  var headers = document.getElementsByClassName("menu-header");
  
  for (var i=0; i<headers.length; i++) {
    headers[i].addEventListener("click", onClick_headers);
  }
}

function disable_headers() {
  let headers = document.getElementsByClassName("active");
  for (var i=0; i<headers.length; i++) {
    headers[i].classList.remove("active");
  }
}


const onClick_headers = (e) => {
  console.log("click");
  var activeStatus = e.target.classList.contains('active');
  disable_headers();
  if (!activeStatus) {
    e.target.classList.add("active");
  }
};