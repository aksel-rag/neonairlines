function addOrRemoveMenuIcon() {
    const navbar = document.querySelector("nav");
    const windowWidth = window.innerWidth;
    
    if (windowWidth <= 850) {
      let triple = document.querySelector(".menu-icon");
      if (!triple) {
        triple = document.createElement("div");
        triple.setAttribute("class", "menu-icon");
        navbar.appendChild(triple);
  
        triple.addEventListener("click", () =>{
          let mobileNav = document.querySelector("#mobileNav");
          triple.style.opacity = "0";
          document.body.classList.add('menu-visible');
          let closeMenu = document.querySelector("#closeMobile");
          closeMenu.addEventListener("click", () =>{
            document.body.classList.remove('menu-visible');
            triple.style.opacity = "1";
          })
        });
      }
    } else {
      const triple = document.querySelector(".menu-icon");
      if (triple) {
        navbar.removeChild(triple);
      }
    }
}

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("#header");
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    header.classList.toggle("scroll", scrollY >= 85);

  });
});

document.addEventListener("DOMContentLoaded", addOrRemoveMenuIcon);
window.addEventListener("resize", addOrRemoveMenuIcon);