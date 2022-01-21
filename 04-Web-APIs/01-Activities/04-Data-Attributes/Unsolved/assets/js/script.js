var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  // TODO: Complete function

  // this also works to retrieve the data number
  var btnSelected = element.dataset.number;
  // var btnSelected = element.getAttribute("data-number");

  // these function the same
  // var dataState = element.getAttribute("data-state");
  var dataState = element.dataset.state;

  if (dataState === "hidden") {
    element.textContent = btnSelected;
    element.setAttribute("data-state", "visible");
  }

  else {
    element.textContent = "";
    element.setAttribute("data-state", "hidden");
  }

  console.log(element);
  console.log(dataState);

  console.log(btnSelected);
});
