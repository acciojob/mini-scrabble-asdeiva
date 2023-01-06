//your code here
let myText = document.getElementById("eveluatedText");
myText.addEventListener("input", () => {
    let count = (myText.value).length;
document.getElementById("letterCount").textContent = `${count}`;
});