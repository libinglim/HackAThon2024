function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.innerText);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");

    var newItem = document.createElement("div");

    newItem.className = "draggable-item";
    newItem.innerHTML = document.getElementById("event").value;
    document.getElementById("right-container").appendChild(newItem);
    
    var existingItems = rightContainer.getElementsByClassName("draggable-item");
    
}