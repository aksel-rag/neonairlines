
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("#header");
  const tag1 = document.querySelector("#tag1");
  const tag2 = document.querySelector("#tag2");    
  window.addEventListener("scroll", () => {
    header.classList.toggle("scroll", window.scrollY >= 85);
    const isScrolledPastThird = this.scrollY > document.body.scrollHeight / 3.25;
    tag1.classList.toggle("active", !isScrolledPastThird);
    tag2.classList.toggle("active", isScrolledPastThird);
  });
});


 function addOrRemoveMenuIcon() {
  const navbar = document.querySelector("nav");
  const windowWidth = window.innerWidth;
  
  if (windowWidth <= 850) {
    let triple = document.querySelector(".menu-icon");
    if (!triple) {
      triple = document.createElement("div");
      triple.setAttribute("class", "menu-icon");
      navbar.appendChild(triple);
    }
  } else {
    const triple = document.querySelector(".menu-icon");
    if (triple) {
      navbar.removeChild(triple);
    }
  }
}

document.addEventListener("DOMContentLoaded", addOrRemoveMenuIcon);
window.addEventListener("resize", addOrRemoveMenuIcon);