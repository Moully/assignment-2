// Use window.addEventListener("scroll",) Event listener.
// then add callback function that includes when the window height scroll down to 100vh and add 'fixed-top' class on Navbar element.
// For your mind: object.classList.add('class') this method is add class on selected element
// e.target.scrollingElement.scrollTop use that method when track scrolling amount

// Add scrollDetect callback function on window.addEventlistener('scroll', callback) Listener

// Define Play button variable

// Create a modal with a single line of JavaScript: https://getbootstrap.com/docs/5.1/components/modal/#via-javascript
// Define finsetModal then use Bootstrap modal Object request

// Create Click Event Listener on Play button variable (you already created above)
// add finsetModal.show() on callback function
// Select '.modal-body' class from finsetModal variable then use innerHTML method and add Youtube embed code

// Create an XMLHttpRequest object
// Create a callback function
// Open a GET request and use data from ../data/company_intro.json
// Send the request

window.addEventListener("scroll", (e) => {
  const asd = document.querySelector(".navbar-container");
  const abs = parseInt(e.target.scrollingElement.scrollTop);
  if (abs > 600) {
    asd.setAttribute("class", "fixed-top");
  }
  if (abs < 600) {
    asd.classList.removeAttribute("fixed-top");
  }
});

class BLOG {
  constructor(id, title, thumbnail, content) {
    this.id = id;
    this.title = title;
    this.thumbnail = thumbnail;
    this.content = content;
  }
}

const companyIntroduction = "./data/company_intro.json";

function companyIntro(url) {
  return new Promise((resolve, reject) => {
    const res = new XMLHttpRequest();
    res.open("GET", url);
    res.onload = () => {
      if (res.status === 200) {
        const data = JSON.parse(res.responseText);
        resolve(data);
      } else {
        reject("error");
      }
    };
    res.send();
  });
}

function publishName(e) {
  console.log(e);
  let utga = e.data.map((e) => {
    return new BLOG(e.id, e.title, e.thumbnail, e.content);
  });
  generateHTML(utga);
}

function generateHTML(utga) {
  let sda = "";
  const testAjax = document.querySelector("#ajaxTest");
  utga.map((e) => {
    sda += `<div class="col-12 col-lg-4">
      <a class="blog-cards blog-upper" href="#">
                  <div class="video-img-container">
                      <img class="blogimg w-100" src="${e.thumbnail}" alt="">
                  </div>
              <div class="blog-cards-content">
                  <h3>${e.title}</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, quibusdam.</p>
                  <p class="blog-cards-a">Learn More &#8594;</p>
              </div>
      </a>
  </div>
      `;
  });
  testAjax.innerHTML = sda;
}

companyIntro(companyIntroduction).then(publishName);

/*  Add subscription email action. When subscription POST request is successful, 
    change the email element and subscribe button into "Your subscription is successful" Text. 
    POST request should be done by AJAX request. We need a POST request end point for subscription email. 
*/
// Define Subscribe by ID name

// Add CLICK Event Listener on the button
// Then using Fetch method POST input value to http://52.221.191.153/subscribe/subscription/create
