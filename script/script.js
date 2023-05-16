const home = document.querySelector(".home");
const about = document.querySelector(".about");
const portfolio = document.querySelector(".portfolio");
const service = document.querySelector(".service");
const contact = document.querySelector(".contact");
const homeLink = document.querySelector(".home-link");
const aboutLink = document.querySelector(".about-link");
const serviceLink = document.querySelector(".service-link");
const portfolioLink = document.querySelector(".portfolio-link");
const contactLink = document.querySelector(".contact-link");

const showScreen = function (window) {
  home.classList.add("hide");
  about.classList.add("hide");
  portfolio.classList.add("hide");
  service.classList.add("hide");
  contact.classList.add("hide");

  window.classList.remove("hide");
};

homeLink.addEventListener("click", function () {
  showScreen(home);
});
aboutLink.addEventListener("click", function () {
  showScreen(about);
});
serviceLink.addEventListener("click", function () {
  showScreen(service);
});
portfolioLink.addEventListener("click", function () {
  showScreen(portfolio);
});
contactLink.addEventListener("click", function () {
  showScreen(contact);
});

var typed = new Typed(".auto-input", {
  strings: [
    "Web Developer",
    "Web Designer",
    "Android Developer",
    "iOS Developer",
    "Game Developer",
    "Trader",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});
