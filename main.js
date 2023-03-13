let colorInputs = document.querySelectorAll("input[type=color]");
let boardColor = document.querySelector(".container .board-color");
let option = document.querySelector(".option .select");
let output = document.querySelector("textarea");
let btn = document.querySelector("button");
colorInputs.forEach((color) => {
  color.addEventListener("input", showGradient);
});

option.addEventListener("change", showGradient);

function showGradient() {
  let gradient = `linear-gradient(${option.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`;
  boardColor.style.background = gradient;
  output.textContent = gradient;
}

btn.addEventListener("click", copyCode);

function copyCode() {
  navigator.clipboard.writeText(output.textContent);
  btn.textContent = "Copied";
  setTimeout(() => {
    btn.textContent = "Copy Code";
  }, 1500);
}
