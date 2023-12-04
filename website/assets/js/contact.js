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

document.addEventListener("DOMContentLoaded", addOrRemoveMenuIcon);
window.addEventListener("resize", addOrRemoveMenuIcon);


document.addEventListener("DOMContentLoaded", () =>{
  let button = document.querySelector("#sendMess");
  let email;
  let phone;
  let message;
  let text = document.querySelector("#textOnBG");
  let checkEmail = document.querySelector("#email");
  let checkPhone = document.querySelector("#phone");
  let checkMessage = document.querySelector("#description");
  button.addEventListener("click", () =>{
    if (checkMessage.value === "" || checkEmail.value === "" || checkPhone.value === ""){
      let error = document.querySelector("#error");
      error.textContent = "Please fill out all fields."
    }
    else{
      email = checkEmail.value;
      phone = checkPhone.value;
      message = checkMessage.value;
      text.innerHTML = `
      <div class="fade">
      <div id="container">
        <div id="sendLoader"></div>
        <h1>Sending Message...</h1>
      </div>
      </div>
    `;
    sendMessage(message,email,phone);
    }
  });
});
function sendMessage(description, email, phone) {
  let text = document.querySelector("#textOnBG");
  fetch('https://api.ipify.org?format=json')
    .then((response) => response.json())
    .then((data) => {
      const userIpAddress = data.ip;
      const theData = {
        content: "",
        embeds: [
          {
            title: `New Support Inquiry!`,
            description: `${userIpAddress} needs help.`,
            fields: [
              {
                name: "Email",
                value: email,
              },
              {
                name: "Phone Number",
                value: phone,
              },
              {
                name: "Message",
                value: description,
              },
            ],
          },
        ],
      };
      const formData = new FormData();
      formData.append('payload_json', JSON.stringify(theData));

      fetch('', {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            console.log("Data sent successfully");
            text.innerHTML = `
              <div class="fade">
                <h1>Thank you!</h1>
                <p>We hope to respond to your inquiry within 24 hours.</p>
              </div>
            `;
          } else {
            console.error("Error sending data");
            text.innerHTML = `
              <div class="fade">
                <h1 style="color: red; font-size: 7vh;">X</h1>
                <p>Sorry, an error encountered. Please try again.</p>
                <br>
                <p>Data Error</p>
              </div>
            `;
          }
        })
        .catch(error => {
          console.error("Error:", error);
          text.innerHTML = `
            <div class="fade">
              <h1 style="color: red; font-size: 7vh;">X</h1>
              <p>Sorry, an error encountered. Please try again.</p>
              <br>
              <p>Request Error</p>
            </div>
          `;
        });
    })
    .catch(error => {
      console.error("Error fetching IP address:", error);
      text.innerHTML = `
        <div class="fade">
          <h1 style="color: red; font-size: 7vh;">X</h1>
          <p>Sorry, an error encountered. Please try again.</p>
          <br>
          <p>IP Address Error</p>
          <br>
          <br>
          <p style="color:#383838;font-size: 2vh;">Try Disabling Content Blocker</p>
        </div>
      `;
    });
}