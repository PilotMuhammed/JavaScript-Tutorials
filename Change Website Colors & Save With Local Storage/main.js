// Add Default Local Storage Class on Bady
document.body.classList.add(localStorage.getItem("pageColor") || "red");

const el = document.querySelectorAll(".color-switcher li");
const classesList = [];

for (let i = 0; i < el.length; i++) {
  classesList.push(el[i].getAttribute("data-color"));

  el[i].addEventListener(
    "click",
    function () {
      // Remove All Old Classes
      document.body.classList.remove(...classesList);
      // Add Current Class From Li Data Attribute
      document.body.classList.add(this.getAttribute("data-color"));

      //   Add Data To Local Storage
      localStorage.setItem("pageColor", this.getAttribute("data-color"));
    },
    false
  );
}

console.log(localStorage.getItem("pageColor"));

