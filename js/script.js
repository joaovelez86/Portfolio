/* ==== NAVBAR ==== */

const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menu = document.querySelector("nav .container ul");

//Mostra menu. Ao click do user no menuBtn, esconde o container ul da nav e mostra o closeBtn
menuBtn.addEventListener("click", () => {
  menu.style.display = "block";
  menuBtn.style.display = "none";
  closeBtn.style.display = "inline-block";
});

//esconde menu
closeBtn.addEventListener("click", () => {
  menu.style.display = "none";
  menuBtn.style.display = "inline-block";
  closeBtn.style.display = "none";
});

//Active class dos li da Navbar
const navItems = menu.querySelectorAll("li");

const changeActiveItem = () => {
  navItems.forEach((item) => {
    const link = item.querySelector("a");
    link.classList.remove("active");
  });
};

navItems.forEach((item) => {
  const link = item.querySelector("a");
  link.addEventListener("click", () => {
    changeActiveItem();
    link.classList.add("active");
  });
});

/* ==== SCROLL TO THE TOP BTN ==== */

//Get the button:
scrollbutton = document.querySelector("#scrollBtn");
scrollbutton.addEventListener("click",topFunction);

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollbutton.style.display = "block";
  } else {
    scrollbutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


/* ==== READ MORE function ABOUT ME SECTION ==== */
const readMoreBtn = document.querySelector(".read-more");
const readMoreContent = document.querySelector(".read-more-content");

readMoreBtn.addEventListener("click", () => {
  readMoreContent.classList.toggle("show-content");

  if (readMoreContent.classList.contains("show-content")) {
    readMoreBtn.textContent = "Show less";
  } else{
    readMoreBtn.textContent = "Show more";
  }
});

/* ==== show/hide SKILLS SECTION ==== */

const skillItems = document.querySelectorAll("section.skills .skill");

skillItems.forEach(skill =>{
  skill.querySelector(".head").addEventListener("click", ()=>{
    skill.querySelector(".items").classList.toggle("show-items");
  })
})

/* ==== add box shadow Navbar on scroll ==== */

window.addEventListener("scroll", ()=> {
  document.querySelector("nav").classList.toggle("show-box-shadow", window.scrollY > 0)
})

