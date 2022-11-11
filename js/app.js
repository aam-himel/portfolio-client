function readingTime() {
  const projects = document.getElementById("projects");
  const articles = projects.querySelectorAll(".article__content");
  const readings = projects.querySelectorAll(".article__reading");

  for (let i = 0; i < articles.length; i++) {
    const text = articles[i].innerText;
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    readings[i].getElementsByTagName("span")[0].innerText = time;
  }
}
readingTime();

const currentLocation = location.href;
const menuItem = document.querySelectorAll("nav ul li");
const menuLength = menuItem.length;
for (let i = 0; i < menuLength; i++) {
  if (menuItem[i].href == currentLocation) {
    menuItem[i].className = "active";
  }
}
