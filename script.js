const mainEle = document.getElementById("main");
const flashlight = document.getElementById("flashlight");
const aboutEle = document.getElementById("about");
const projectsEle = document.getElementById("projects");
const experienceEle = document.getElementById("experience");
const aboutBulletEle = document.getElementById("list-bullet-about");
const projectsBulletEle = document.getElementById("list-bullet-projects");
const experienceBulletEle = document.getElementById("list-bullet-experience");

eleTopListen();

for (const bullet of document.querySelectorAll(".list-nav-a")) {
  bullet.addEventListener("mouseover", (event) => handleMouseOverEvent(bullet));
}

for (const bullet of document.querySelectorAll(".list-nav-a")) {
  bullet.addEventListener("mouseout", () => eleTopListen());
}

function handleMouseOverEvent(bullet) {
  if (bullet.classList.contains("nav-about")) {
    aboutBulletEle.style.setProperty("width", "4rem");
  }
  if (bullet.classList.contains("nav-projects")) {
    projectsBulletEle.style.setProperty("width", "4rem");
  }
  if (bullet.classList.contains("nav-experience")) {
    experienceBulletEle.style.setProperty("width", "4rem");
  }
}

mainEle.addEventListener("scroll", (event) => {
  eleTopListen();
});

mainEle.addEventListener("mousemove", (event) => {
  let xLoc = event.clientX;
  let yLoc = event.clientY;
  flashlight.style.setProperty("--x", `${xLoc}px`);
  flashlight.style.setProperty("--y", `${yLoc}px`);
});

function eleTopListen() {
  let aboutTop = aboutEle.getBoundingClientRect().top;
  let projectsTop = projectsEle.getBoundingClientRect().top;
  let experienceTop = experienceEle.getBoundingClientRect().top;

  aboutTop > -175 && aboutTop <= 38
    ? aboutBulletEle.style.setProperty("width", "4rem")
    : aboutBulletEle.style.setProperty("width", "2rem");

  projectsTop > -983 && projectsTop <= 35
    ? projectsBulletEle.style.setProperty("width", "4rem")
    : projectsBulletEle.style.setProperty("width", "2rem");

  experienceTop >= -500 && experienceTop <= 35
    ? experienceBulletEle.style.setProperty("width", "4rem")
    : experienceBulletEle.style.setProperty("width", "2rem");
}
