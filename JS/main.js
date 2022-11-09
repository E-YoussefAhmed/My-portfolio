// Hide and Show navbar
let lastScroll = 0;
let navbar = document.querySelector("header");
window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;
  if (scrollTop > lastScroll) {
    navbar.style.top = "-80px";
  } else {
    navbar.style.top = "0px";
  }
  lastScroll = scrollTop;
});
//burger icon
let bIcon = document.getElementById("menu-icon");
let links = document.getElementById("links");
let lis = document.querySelectorAll("#links ul li");
bIcon.addEventListener("click", () => {
  bIcon.classList.toggle("active");
  links.classList.toggle("active");
});
lis.forEach((li) => {
  li.addEventListener("click", () => {
    bIcon.classList.toggle("active");
    links.classList.toggle("active");
  });
});

//landing auto type
let typed = new Typed(".auto-type", {
  strings: ["Programmer", "Web Developer", "Gamer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

//skills progress
let skills = document.getElementById("skills");
let cards = Array.from(document.querySelectorAll(".card"));
let nums = document.querySelectorAll(".skills .nums");
let started = false;

window.addEventListener("scroll", function () {
  if (window.scrollY >= skills.offsetTop - 200) {
    cards.forEach((el) => {
      el.classList.add("animate");
    });
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
});

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

//Gallary Filter
let switchers = document.querySelectorAll(".switcher li");
let boxes = Array.from(document.querySelectorAll(".portfolio .box"));

switchers.forEach((li) => {
  li.addEventListener("click", () => {
    switchers.forEach((li) => {
      li.classList.remove("active");
    });
    li.classList.add("active");
  });
  li.addEventListener("click", manageIags);
});

function manageIags() {
  boxes.forEach((box) => {
    box.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
  });
}

//Image slider in gallery
let slider = Array.from(document.querySelectorAll("#slider-container"));

slider.forEach(function (img) {
  img.addEventListener("mouseenter", () => {
    img.classList.toggle("active");
  });
  img.addEventListener("mouseleave", () => {
    img.classList.toggle("active");
  });
});

// Footer Date
let date = document.getElementById("date");
let dateNow = new Date();
date.textContent = dateNow.getFullYear();
