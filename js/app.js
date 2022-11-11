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

(function () {
  var toggle = document.querySelector(".nav-toggle");

  toggle.addEventListener("click", function (e) {
    this.classList.toggle("opened");
  });
})();
