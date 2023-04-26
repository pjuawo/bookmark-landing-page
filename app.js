const navList = document.querySelector(".nav__lists");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const logo = document.querySelector(".logo");
const logoText = document.querySelector(".logo .logo-text");
const logoCircle = document.querySelector(".logo .circle-fill");
const logoPath = document.querySelector(".logo .path-fill");

const show = () => {
  navList.style.display = "flex";
  navList.style.top = "0";
  openMenu.style.visibility = "hidden";
  logoText.style.color = "white";
  logoCircle.style.color = "white";
};
const close = () => {
  navList.style.top = "-100%";
  openMenu.style.visibility = "visible";
  logoText.style.color = "hsl(229, 31%, 21%)";
  logoCircle.style.color = "hsl(231, 69%, 60%)";
};
openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

// Questions Section

const questions = document.querySelectorAll(".question");
questions.forEach((question) => {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", () => {
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});

// Tabs Section
const tabBtns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
const features = document.querySelector(".features");

features.addEventListener("click", (e) => {
  // console.log(e.target.dataset.id);
  const id = e.target.dataset.id;
  if (id) {
    //remove active class from other buttons
    tabBtns.forEach((tabBtn) => {
      tabBtn.classList.remove("active");
      e.target.classList.add("active");
    });
    //hide other articles
    articles.forEach((article) => {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
