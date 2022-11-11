function readingTime() {
  let text = "";
  const content = document
    .querySelectorAll(".article__content")
    .forEach((article) => {
      text += article.innerHTML;
      console.log(text);
    });
  const reading = document.querySelector(".article__reading");
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  reading.getElementsByTagName("span")[0].innerText = time;
}
readingTime();
