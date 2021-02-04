window.onload = () => {
  create_links();

  set_menu_height();

  var headers = document.getElementsByClassName("menu-header");
  
  for (var i=0; i<headers.length; i++) {
    headers[i].addEventListener("click", onClick_headers);
  }

  document.getElementById("hideAllButton").addEventListener("click", hide_all);
}

function hide_all() {
  var elements = document.getElementsByClassName("active");
  for (let i=0; i<elements.length; i++) {
    elements[i].classList.remove("active");
  }
}

function set_menu_height() {
  let menu = document.getElementById("menu-container");
  let height = window.innerHeight - 120;
  menu.style.height = height + "px";
  
}

function create_links () {
  let menu = document.getElementById("menu-container");

  let element = create_link(data);
  menu.appendChild(element);

}

function create_link(dataObj) {
  var div = document.createElement("div");

  let container, header, subheader, subcontainer, 
      sublinkList, i;

  for (let name in dataObj) {
    container = document.createElement("div");

    header = document.createElement("div");
    header.classList.add("menu-header");
    header.textContent = name;

    container.appendChild(header);

    sublinkList = dataObj[name];
    if (sublinkList && sublinkList.length > 0) {
      header.classList.add("menu-link");
      
      subcontainer = document.createElement("div");
      subcontainer.classList.add("menu-subheader-container");
      for(let i=0; i< sublinkList.length; i++) {
        if (typeof sublinkList[i] == "string") {
          subheader = document.createElement("div");
          subheader.textContent = sublinkList[i];
          subheader.classList.add("menu-subheader");
        } else {
          subheader = create_link(sublinkList[i]);
        }
        subcontainer.appendChild(subheader);
      }
      container.append(subcontainer);
    }
    div.appendChild(container);
  }
  return div;
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
  // disable_headers();
  if (!activeStatus) {
    e.target.classList.add("active");
  } else {
    e.target.classList.remove("active");
  }
};