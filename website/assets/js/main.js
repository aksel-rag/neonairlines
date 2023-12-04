function loadCSSFile() {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 768) {
    document.querySelector('#dynamic-styles').href = 'assets/css/style.css';
  } else if (screenWidth <= 850) {
    document.querySelector('#dynamic-styles').href = 'assets/css/850.css';
  } else {
    document.querySelector('#dynamic-styles').href = 'assets/css/1250.css';
  }
}
window.addEventListener('load', loadCSSFile);
window.addEventListener('resize', loadCSSFile);

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

  let emailClick = document.querySelector("#submit-button");
  emailClick.addEventListener("click", () => {
    const userEmail = document.querySelector("#email-input").value.trim();
    const errorMessage = document.querySelector("#error-message");
  
    if (!validateEmail(userEmail)) {
      errorMessage.textContent = "Please enter a valid email address";
      errorMessage.style.color = "#750808";
      errorMessage.style.padding = "10px";
      errorMessage.style.opacity = "1";
      errorMessage.style.height = "auto";
      
      setTimeout(() => {
        errorMessage.style.opacity = "0";
        errorMessage.style.height = "0";
        
        setTimeout(() => {
          errorMessage.textContent = "";
        }, 500);
      }, 5000);
    } else {
      const thankYouMessage = document.querySelector("#error-message");
  
      thankYouMessage.textContent = "Thank you for Subscribing!";
      thankYouMessage.style.color = "#008000";
      thankYouMessage.style.padding = "10px";
  
      thankYouMessage.style.opacity = "1";
      thankYouMessage.style.height = "auto";
      
      setTimeout(() => {
        thankYouMessage.style.opacity = "0";
        thankYouMessage.style.height = "0";
        
        setTimeout(() => {
          thankYouMessage.textContent = "";
        }, 10000);
      }, 10000);
  
      subscribeToNews();
    }
  });
}

function validateEmail(email) {

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function subscribeToNews() {
  const userEmail = document.querySelector("#email-input").value.trim();

  const userAgent = window.navigator.userAgent;
  let device;
  if (userAgent.indexOf("Windows") !== -1) {
    device = "Windows";
  } else if (userAgent.indexOf("Mac") !== -1) {
    device = "Mac";
  } else if (userAgent.indexOf("Linux") !== -1) {
    device = "Linux";
  } else if (userAgent.indexOf("Android") !== -1) {
    device = "Android";
  } else if (userAgent.indexOf("iOS") !== -1) {
    device = "iOS";
  } else {
    device = "Unknown";
  }

  fetch('https://api.ipify.org?format=json')
    .then((response) => response.json())
    .then((data) => {
      const userIpAddress = data.ip;

      const params = {
        embeds: [
          {
            title: `New Subscription To Newsletter`,
            description: `A ${device} user Subscribed`,
            fields: [
              {
                name: "IP Address",
                value: userIpAddress,
              },
              {
                name: "User Agent",
                value: userAgent,
              },
              {
                name: "Email",
                value: userEmail,
              },
            ],
            thumbnail: {
              url: "https://neonairlines.myshopify.com/cdn/shop/files/Untitled_design.png",
            },
          },
        ],
        author: {
          name: "Neon Airlines Bot",
          icon_url: "https://neonairlines.myshopify.com/cdn/shop/files/Untitled_design.png",
        },
      };

      fetch('YOURAPI', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      })
        .then((response) => {
          if (response.ok) {
            console.log("Subscription data sent successfully");
          } else {
            console.error("Error sending subscription data");
          }
        })
        .catch(error => {
          console.error("Error:", error);
        });
    })
    .catch(error => {
      console.error("Error fetching IP address:", error);
    });
}

document.addEventListener("DOMContentLoaded", addOrRemoveMenuIcon);
window.addEventListener("resize", addOrRemoveMenuIcon);