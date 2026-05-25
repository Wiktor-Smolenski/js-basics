const characters = document.getElementById("text-input");

const print = document.getElementById("char-count");

characters.addEventListener("input", insertLength);

function insertLength() {

  if (characters.value.length > 50) {
    characters.value = characters.value.substring(0, 50);
  }

  const len = characters.value.length;
  print.textContent = `Character Count: ${len}/50`;
  print.classList.toggle("over-limit", len >= 50);
}

console.log("yes");