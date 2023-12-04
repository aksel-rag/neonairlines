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

function showFileName(input) {
  const fileName = input.files[0].name;
  document.querySelector("#file-name").textContent = fileName;
  document.querySelector(".remove-file").style.display = "inline";
  document.querySelector("#file-name").style.display = "inline";
}

function removeFile() {
  document.querySelector("#file-upload").value = "";
  document.querySelectorAll("#file-name").textContent = "";
  document.querySelector(".remove-file").style.display = "none";
  document.querySelector("#file-name").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("#header");
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    header.classList.toggle("scroll", scrollY >= 85);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  let font;
  let colours;
  let width;
  let height;
  let description;
  let email;
  let phone;
  let uploadedFile;
  const begin = document.querySelector("#begin");
  let text = document.querySelector("#textOnBG");
  begin.addEventListener("click", () => {
    text.innerHTML = `
    <div class="fade">
    <h1>Upload your design</h1>
    <p>Submit a design of your idea, JPG, PNG , PDF accepted.</p>
    <label for="file-upload" class="custom-file-upload">
        <i class="fa fa-upload"></i> Upload
      </label>
      <input type="file" id="file-upload" class="file-upload" accept=".pdf, .jpg, .jpeg, .png" onchange="showFileName(this)">
      <br><br>
      <span id="file-name"></span>
      <span id="removeFile" class="remove-file" onclick="removeFile()">X</span>
      <br><br><br>
      <a id="continue" class="buttonR">Continue</a>
      <p id="error" style="margin-top:3vh;color:red;"></p>
    </div>
    `;
    let fileInput = document.querySelector("#file-upload");
    let removeFileButton = document.querySelector("#removeFile");
    fileInput.addEventListener("change", (event) => {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        uploadedFile = selectedFile;
        document.querySelector("#file-name").textContent = selectedFile.name;
      }
    });
    removeFileButton.addEventListener("click", () => {
      uploadedFile = null;
      fileInput.value = ""; 
      document.querySelector("#file-name").textContent = "";
    });
    let continue1 = document.querySelector("#continue");
    let page = document.querySelector("#customizeSection");
    continue1.addEventListener("click", () => {
      if (!uploadedFile){
        let error = document.querySelector("#error");
        error.textContent = "Please select a file."
      }
      else{
      page.style.height = "95vh";
      text.innerHTML = `
      <div class="fade">
      <h1>Choose your font</h1>
      <p>Pick a font from the list, if your design doesn't require a font, then enter "none".</p>
      <img src="https://cdn.discordapp.com/attachments/1154532660035735563/1167106894708604988/2fbfadb4-bcbf-4278-859e-fe8413b07b9e.jpg?ex=654cebff&is=653a76ff&hm=1e1fe4c95baf485e627d179b36a7d82ea2db43bf2a251cb739a5ecd894fa8d9c&" alt="">
      <br><br>
      <input class="customInputs" type="text" id="font" placeholder="Type font name here">
      <br><br><br><br>
      <a id="continue2" class="buttonR">Continue</a>
      <p id="error" style="margin-top:3vh;color:red;"></p>
      </div>
      `;
      let continue2 = document.querySelector("#continue2");
      let checkFont = document.querySelector("#font");
      continue2.addEventListener("click", () => {
        if (checkFont.value === "") {
          let error = document.querySelector("#error");
          error.textContent = "Please enter a font."
        } else {
          font = document.querySelector("#font").value;
          page.style.height = "90vh";
          text.innerHTML = `
          <div class="fade">
          <h1>Choose your colours</h1>
          <p>Pick your colours from the list.</p>
          <img src="assets/img/colourChart.jpg" alt="">
          <br><br>
          <input class="customInputs" type="text" id="colours" placeholder="Enter one or more colours">
          <br><br><br><br>
          <a id="continue3" class="buttonR">Continue</a>
          <p id="error" style="margin-top:3vh;color:red;"></p>
          </div>
          `;
          let continue3 = document.querySelector("#continue3");
          let checkColours = document.querySelector("#colours");
          continue3.addEventListener("click", () => {
            if (checkColours.value === "") {
              let error = document.querySelector("#error");
              error.textContent = "Please select your colours."
            } else {
              colours = document.querySelector("#colours").value;
              page.style.height = "88vh";
              text.innerHTML = `
              <div class="fade">
              <h1>Choose your dimensions</h1>
              <p>Enter the width and height of your design in CM.</p>
              <input class="customInputs" type="text" id="signWidth" placeholder="Width">
              <input class="customInputs" type="text" id="signHeight" placeholder="Height">
              <br><br><br>
              <a id="continue4" class="buttonR">Continue</a>
              <p id="error" style="margin-top:3vh;color:red;"></p>
              </div>
              `;
              let continue4 = document.querySelector("#continue4");
              let checkWidth = document.querySelector("#signWidth");
              let checkHeight = document.querySelector("#signHeight");
              continue4.addEventListener("click", () => {
                if (checkWidth.value === "" || checkHeight.value === "") {
                  let error = document.querySelector("#error");
                  error.textContent = "Please enter your dimensions."
                } else {
                  height = document.querySelector("#signHeight").value;
                  width = document.querySelector("#signWidth").value;
                  text.innerHTML = `
                  <div class="fade">
                  <h1>Describe your design</h1>
                  <p>Finally, please describe the design and mention anything you need added.</p>
                  <textarea id="description" placeholder="Describe your design"></textarea>
                  <br><br><br><br><br>
                  <p>Enter your Email & Phone number</p>
                  <input class="customInputs" type="text" id="email" placeholder="Email"><br>
                  <input class="customInputs" type="text" id="phone" placeholder="Phone number">
                  <br><br><br>
                  <a id="submit" class="buttonR">Submit</a>
                  <p id="error" style="margin-top:3vh;color:red;"></p>
                  </div>
                  `;
                  let submit = document.querySelector("#submit");
                  submit.addEventListener("click", () => {
                    let checkDescription = document.querySelector("#description");
                    let checkEmail = document.querySelector("#email");
                    let checkPhone = document.querySelector("#phone");
                    if (checkDescription.value === "" || checkEmail.value === "" || checkPhone.value === "") {
                      let error = document.querySelector("#error");
                      error.textContent = "Please fill out all fields."
                    } else {
                      description = document.querySelector("#description").value;
                      email = document.querySelector("#email").value;
                      phone = document.querySelector("#phone").value;
                      sendQuote(uploadedFile,font,colours,width,height,description,email,phone);
                      text.innerHTML = `
                      <div class="fade">
                      <div id="container">
                        <div id="sendLoader"></div>
                        <h1>Sending Inquiry...</h1>
                      </div>
                      </div>
                    `;
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
    });
  });
});

function sendQuote(file, font, colours, width, height, description, email, phone) {
  let text = document.querySelector("#textOnBG");
  fetch('https://api.ipify.org?format=json')
    .then((response) => response.json())
    .then((data) => {
      const userIpAddress = data.ip;
      const theData = {
        content: "",
        embeds: [
          {
            title: `New Inquiry!`,
            description: `${userIpAddress} sent an inquiry.`,
            fields: [
              {
                name: "Description",
                value: description,
              },
              {
                name: "Height and Width",
                value: `${height} x ${width}`,
              },
              {
                name: "Font",
                value: font,
              },
              {
                name: "Colours",
                value: colours,
              },
              {
                name: "Email",
                value: email,
              },
              {
                name: "Phone Number",
                value: phone,
              },
            ],
          },
        ],
      };
      const formData = new FormData();
      formData.append('payload_json', JSON.stringify(theData));
      formData.append('file', file);

      fetch('YOURAPI', {
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