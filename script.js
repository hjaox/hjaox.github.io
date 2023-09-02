const flashlight = document.getElementById("flashlight");

const mainEle = document.getElementById("main");

const aboutEle = document.getElementById("about");
const projectsEle = document.getElementById("projects");
const experienceEle = document.getElementById("experience");

const aboutBulletEle = document.getElementById("list-bullet-about");
const projectsBulletEle = document.getElementById("list-bullet-projects");
const experienceBulletEle = document.getElementById("list-bullet-experience");

const aboutList = document.getElementById('li-about')
const projectsList = document.getElementById('li-projects')
const experienceList = document.getElementById('li-experience')

const htmlTest = document.getElementById('skills-list-html')

eleTopListen();
handleNavOpacity();

for (const bullet of document.querySelectorAll(".list-nav-a")) {
  bullet.addEventListener("mouseover", (event) => handleBulletMouseOverEvent(bullet));
  bullet.addEventListener("mouseout", () => eleTopListen());
}

function handleBulletMouseOverEvent(bullet) {
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
  handleNavOpacity()
  flashlight.style.setProperty("--x", `${xLoc}px`);
  flashlight.style.setProperty("--y", `${yLoc}px`);
});

function eleTopListen() {
  let aboutTop = aboutEle.getBoundingClientRect().top;
  let projectsTop = projectsEle.getBoundingClientRect().top;
  let experienceTop = experienceEle.getBoundingClientRect().top;

  !(projectsTop <= 35) && aboutTop <= 100
    ? aboutBulletEle.style.setProperty("width", "4rem")
    : aboutBulletEle.style.setProperty("width", "2rem");

  !(experienceTop <= 35) && projectsTop <= 35
    ? projectsBulletEle.style.setProperty("width", "4rem")
    : projectsBulletEle.style.setProperty("width", "2rem");

  experienceTop <= 35
    ? experienceBulletEle.style.setProperty("width", "4rem")
    : experienceBulletEle.style.setProperty("width", "2rem");
}

function handleNavOpacity() {
  let aboutBulletEleWidth = aboutBulletEle.attributes.style.value.split(' ')[1];
  let projectsBulletEleWidth = projectsBulletEle.attributes.style.value.split(' ')[1];
  let experienceBulletEleWidth = experienceBulletEle.attributes.style.value.split(' ')[1];

  if(aboutBulletEleWidth === '4rem;') {
    aboutList.style.setProperty("opacity", "1")
  } else {
    aboutList.style.setProperty("opacity", "0.3")
  }

  if(projectsBulletEleWidth === '4rem;') {
    projectsList.style.setProperty("opacity", "1")
  } else {
    projectsList.style.setProperty("opacity", "0.3")
  }

  if(experienceBulletEleWidth === '4rem;') {
    experienceList.style.setProperty("opacity", "1")
  } else {
    experienceList.style.setProperty("opacity", "0.3")
  }
}