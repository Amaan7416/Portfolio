
console.log("My portfolio website is working!");


const name = "Mohd Amaan Khan";
const typingElement = document.getElementById("typing-name");

let index = 0;

function typeName() {
  if (index < name.length) {
    typingElement.textContent += name.charAt(index);
    index++;
    setTimeout(typeName, 180);
  }
}

typeName();