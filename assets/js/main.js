let bum = document.querySelector("#header");
let active2 = document.querySelector("#tag2");
let active1 = document.querySelector("#tag1");


window.addEventListener("scroll", () =>{
    if (window.scrollY >= 85) {
        document.querySelector("#header").classList.add("scroll");
    } 
    else {
        document.querySelector("#header").classList.remove("scroll");
    }
});

window.addEventListener("scroll", () => {
    if (this.scrollY > document.body.scrollHeight / 3.25) {
        document.querySelector("#tag1").classList.remove("active");
        document.querySelector("#tag2").classList.add("active");
    } 
    else {
        document.querySelector("#tag1").classList.add("active");
        document.querySelector("#tag2").classList.remove("active");
    }
 });