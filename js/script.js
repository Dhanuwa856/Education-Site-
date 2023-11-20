const counters = document.querySelectorAll(".value");
const acordion = document.getElementsByClassName("accordion");
const countNos = document.querySelectorAll(".count-no");
const headXs = document.querySelectorAll(".head-x");
const headYs = document.querySelectorAll(".head-y");
const headZs = document.querySelectorAll(".head-z");
const cardAs = document.querySelectorAll(".card-a");
const cardBs = document.querySelectorAll(".card-b");
const cardCs = document.querySelectorAll(".card-c");
const cardDs = document.querySelectorAll(".card-d");

// counter Animation
const speed = 1000;

counters.forEach((counter) => {
  const animate = () => {
    const value = +counter.getAttribute("akhi");
    const data = +counter.innerText;

    const time = value / speed;
    if (data < value) {
      counter.innerText = Math.ceil(data + time);
      setTimeout(animate, 1);
    } else {
      counter.innerText = value + "+";
    }
  };

  animate();
});
// ---second counter animation---
$(".count").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 10000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
});

// ---toggle-button effect---
let i;
let len = acordion.length;
for (i = 0; i < len; i++) {
  acordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panal = this.nextElementSibling;
    if (panal.style.maxHeight) {
      panal.style.maxHeight = null;
    } else {
      panal.style.maxHeight = panal.scrollHeight + "px";
    }
  });
}

const options = {
  threshold: 0.2,
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    const intersecting = entry.isIntersecting;
    if (intersecting) {
      entry.target.classList.add("translate0");
      entry.target.classList.add("see");

      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove("translate0");
      entry.target.classList.remove("see");
    }
  });
}, options);

countNos.forEach((countNo) => {
  observer.observe(countNo);
});
headXs.forEach((headX) => {
  observer.observe(headX);
});
headYs.forEach((headY) => {
  observer.observe(headY);
});
headZs.forEach((headZ) => {
  observer.observe(headZ);
});
cardAs.forEach((cardA) => {
  observer.observe(cardA);
});
cardBs.forEach((cardB) => {
  observer.observe(cardB);
});
cardCs.forEach((cardC) => {
  observer.observe(cardC);
});
cardDs.forEach((cardD) => {
  observer.observe(cardD);
});

function handleStickyNav() {
  const header = document.querySelector(".header-contact");
  const navbar = document.querySelector(".navbar");
  const navbarBrand = document.querySelector(".navbar-brand");
 

  const navLink = document.querySelectorAll(".nav-link");

  if (window.scrollY > header.offsetHeight) {
    navbar.classList.add("sticky");
    navbarBrand.classList.add("black");
    
    for (let i = 0; i < navLink.length; i++) {
      navLink[i].classList.add("black");
    }
  } else {
    navbar.classList.remove("sticky");
    navbarBrand.classList.remove("black");
    for (let i = 0; i < navLink.length; i++) {
      navLink[i].classList.remove("black");
    }
  }
}

// Add an event listener for scrolling
window.addEventListener("scroll", handleStickyNav);

// Initial setup
handleStickyNav();
