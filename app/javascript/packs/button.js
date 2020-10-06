function sayHello() { 
  alert('Hello World!'); 
}

document.addEventListener('turbolinks:load', () => {  
  const clickButton = document.getElementById("button-click");  

  clickButton.addEventListener("click", sayHello); 
});