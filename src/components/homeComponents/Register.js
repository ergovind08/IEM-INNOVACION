onmousemove = function (event) {
  collection = document.getElementsByClassName("card");
  elements = Array.from(collection);
  elements.forEach((element) => {
    offsetX = element.getBoundingClientRect().left;
    offsetY = element.getBoundingClientRect().top;
    element.style.setProperty("--mouseX", event.clientX - offsetX + "px");
    element.style.setProperty("--mouseY", event.clientY - offsetY + "px");
  });
};
