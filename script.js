

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    var delButton = document.createElement("button");
    delButton.setAttribute("class", "btn");
    delButton.appendChild(document.createTextNode("Delete"));
    li.appendChild(delButton).addEventListener("click", removeItem);
     ul.appendChild(li);
    input.value = "";
}



function addToListAfterClick() {
        if(inputLength() > 0) {
          createListElement()
        }
}
function addToListAfterKeyPress(event) {
    if(inputLength() > 0 && event.which === 13) {
        createListElement()
    }
}

   function removeItem() {
       this.parentNode.remove();
   }


button.addEventListener("click", addToListAfterClick);
input.addEventListener("keypress", addToListAfterKeyPress);