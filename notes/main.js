const addButton = document.querySelector("#addButton");
const clearButton = document.querySelector("#clearButton");
const notesArea = document.querySelector("#notes");
const newNote = document.querySelector("#newNote");
let counter = 0;
// localStorage.clear();
showNotesList();

function showNotesList() {
        notesArea.innerHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
        notesArea.innerHTML += localStorage.getItem(`note${i}`);
        counter++;
    }
}

newNote.addEventListener("input", function() {
    if (!newNote.value) {
        addButton.setAttribute("disabled", true);
        addButton.classList.add("disabled");
    } else {
        addButton.removeAttribute("disabled");
        addButton.classList.remove("disabled");
    }
    // console.log(newNote.value);
});
// let notesArray = [];

addButton.addEventListener("click", function() {
    console.log(newNote.value);
    // if (localStorage.getItem("notesArray")==null) {
    //     notesArray = [];
    // } else notesArray = localStorage.getItem("notesArray");
    // //
    // notesArray.push(`${newNote.value}<br/><hr>`);
    // localStorage.setItem("notesArray", notesArray);
    // notesArea.innerHTML = notesArray.reduce( (a, b ) => {
    //     return a + b
    // }, "");

    notesArea.innerHTML = "";
    localStorage.setItem(`note${counter}`, `${newNote.value}<br/><hr/>`);
    counter++;
    //showNotesList();
    for (let i = 0; i < localStorage.length; i++) {
        notesArea.innerHTML += localStorage.getItem(`note${i}`);
    }
    
    newNote.value = "";
    addButton.setAttribute("disabled", true);
    addButton.classList.add("disabled");
});

clearButton.addEventListener("click", function() {
    localStorage.clear();
    notesArea.innerHTML = "";
});