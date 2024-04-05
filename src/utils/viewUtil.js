const toggleElementById = (id) => {
  var element = document.getElementById(id);
  if (element.style.display == "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}

const showSideMenu = () => {
  var element = document.getElementById("side-menu");
  if (element.classList.contains("shown")) {
    element.classList.remove("shown");
  } else {
    element.classList.add("shown");
  }
}

export { toggleElementById, showSideMenu }
