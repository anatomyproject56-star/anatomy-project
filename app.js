document.addEventListener("DOMContentLoaded", () => {

  // Load menu into all pages
  fetch("/components/menu.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("menu-container").innerHTML = html;
      activateMenu();
    });

});

function activateMenu(){

  document.addEventListener("click", e => {

    // OPEN menu
    if(e.target.classList.contains("hamburger")){
      document.getElementById("sideMenu").classList.add("open");
    }

    // CLOSE menu
    if(e.target.classList.contains("close-menu")){
      document.getElementById("sideMenu").classList.remove("open");
    }

    // Level 1
    if(e.target.classList.contains("menu-head")){
      e.target.nextElementSibling.classList.toggle("open");
    }

    // Level 2
    if(e.target.classList.contains("submenu-head")){
      e.target.nextElementSibling.classList.toggle("open");
    }

    // Level 3
    if(e.target.classList.contains("submenu-head2")){
      e.target.nextElementSibling.classList.toggle("open");
    }

  });

}