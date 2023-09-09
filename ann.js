function saveNote(){
    var noteText = document.getElementById("textArea").value.trim();
    if(noteText){
        var existingNotes = JSON.parse(localStorage.getItem("notes")) || [];
        existingNotes.push(noteText);
        localStorage.setItem("notes", JSON.stringify(existingNotes));
        displayNotes();
    }
}

function displayNotes() {
    var notesList = document.getElementById("notesList");
    notesList.innerHTML = ""; // Clear the current list

    var existingNotes = JSON.parse(localStorage.getItem("notes")) || [];
    for (var i = 0; i < existingNotes.length; i++) {
        var noteItem = document.createElement("p");
        noteItem.textContent = existingNotes[i];
        notesList.appendChild(noteItem);
    }
}

window.onload = displayNotes

function back(){
    window.location.href = '/index.html';
}