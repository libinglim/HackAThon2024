function drag(ev) {
    // Set the data to be transferred during the drag
    ev.dataTransfer.setData("text", ev.target.innerText);
}

function allowDrop(ev) {
    // Prevent the default behavior to allow dropping
    ev.preventDefault();
}

function drop(ev) {
    // Prevent the default behavior and get the data
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");

    // Create a new element and append it to the drop zone
    var newItem = document.createElement("div");

    newItem.className = "draggable-item";
    newItem.innerText = data;
    document.getElementById("right-container").appendChild(newItem);
    
    var existingItems = rightContainer.getElementsByClassName("draggable-item");
    
    for (var i = 0; i < existingItems.length; i++) {
        if (existingItems[i].innerText === data) {
        // Item already exists, don't duplicate
        return;
        }
    }
}