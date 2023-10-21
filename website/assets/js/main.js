document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("#header");
  const tag1 = document.querySelector("#tag1");
  const tag2 = document.querySelector("#tag2");
  const tag3 = document.querySelector("#tag3");
  const windowHeight = window.innerHeight;
  const halfWindowHeight = windowHeight / 2;
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    header.classList.toggle("scroll", scrollY >= 85);
    if (scrollY <= halfWindowHeight) {
      tag1.classList.add("active");
      tag2.classList.remove("active");
      tag3.classList.remove("active");
    } else if (scrollY <= windowHeight) {
      tag1.classList.remove("active");
      tag2.classList.add("active");
      tag3.classList.remove("active");
    } else {
      tag1.classList.remove("active");
      tag2.classList.remove("active");
      tag3.classList.add("active");
    }
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