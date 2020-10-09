function sayHello() {
  var h = document.createElement("H1");
  var t = document.createTextNode("Hello World");
  h.appendChild(t);
  document.body.appendChild(h);
}

document.addEventListener('turbolinks:load', () => {
    const clickButton = document.getElementById("button-click");
    clickButton.addEventListener('click', (event) => {
        sayHello('JavaScript')
    });
});