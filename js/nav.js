let currentLocation = location.pathname;
const menuItem = document.querySelectorAll("nav ul li a");

const menuLength = menuItem.length;
for (let i = 0; i < menuLength; i++) {
  let link = menuItem[i].href;

  link = link.split("/");
  let index = link.length;
  console.log(link[index - 1]);
  console.log(currentLocation.split("/")[1]);
  if (link[index - 1] == currentLocation.split("/")[1]) {
    menuItem[i].className = " active";
    console.log(menuItem[i]);
  }
}
