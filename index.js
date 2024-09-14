const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// Initial loading of notes from localStorage
function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes") || "";
}
showNotes();

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

// Create a new note
createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "dlt.png";
  inputBox.appendChild(img);
  notesContainer.appendChild(inputBox);
  updateStorage();
});

// Handle click events 
notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.classList.contains("input-box")) {

    notesContainer.querySelectorAll(".input-box").forEach(nt => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});
document.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
