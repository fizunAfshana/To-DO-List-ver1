// Enable the keyboard enter key
ItemText.onkeyup=function (event) {
	if (event.which == 13)
	var ItemText= document.getElementById("ItemText");
	var itemText = ItemText.value;

// If the input box is empty it will not add anything to the list
if(!itemText || itemText == ""|| itemText == ""){
     return false;
	}
}

// Making the add button responsive
var btn = document.getElementById("add");

// It will take the input from the user and add to the list
btn.onclick = function() {
	var ItemText= document.getElementById("ItemText");
  	var itemText = ItemText.value;

	// If the input box is empty it will not add anything to the list
	if(!itemText || itemText == ""|| itemText == ""){
		return false;
	}

	// This will add a new item on the list
	addItem(document.getElementById("todoList"), itemText);

	ItemText.select();
};

// On document load if item list is empty then disable delete key
document.addEventListener( 'DOMContentLoaded', function () {
    console.log(total)
    if(total == 0)
    	document.getElementById("deleteAcc").disabled = true;
}, false );

// This function will delete selected item from list (Multiple removal selected items from the list)
function delBoxes(){

	var list = document.getElementById('todoList'),
        items = Array.prototype.slice.call(list.childNodes),
        item;

    while (item = items.pop()) {
        if (item.firstChild && item.firstChild.checked) {
            list.removeChild(item);
        }
    }
}

// Pressing enter key from keyboard will add item into list
document.getElementById("ItemText")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("add").click();
    }
});

// This update the status of the items on the list
function Status(){

	var cId= this.id.replace("c_","");

  	var itemText=document.getElementById("im_"+cId);

	if (this.checked){
		itemText.className="checked";
	}else{
	 itemText.className="";
 	}
}

// This function is to connect the ul:to make it dynamic
function addItem(list, itemText){

	total++;

 	var listActivity=document.createElement("li");
 	listActivity.id="li_"+total;
 	listActivity.className="lis";

	// checkbox
	var checkBox= document.createElement("input");
	checkBox.type="checkbox";
	checkBox.id="c_"+total;
	checkBox.className="chk";
	checkBox.onclick= Status;

	// span element
	var span =document.createElement("span");
	span.id="im_"+total;
	span.className="txt";
	span.innerText= itemText;

// Edit list
	var edit = document.createElement("a");
	edit.id="Ed";
	 edit.href = "#";
	 edit.innerHTML = " Edit";
	 edit.addEventListener('click', editItem, false);

// Delete list item
	 var deleteBtn = document.createElement("a");
	  deleteBtn.id= "del";
    deleteBtn.href = "#";
    deleteBtn.innerHTML = " Delete|";
    deleteBtn.addEventListener('click', removeItem, false);


// appending to the HTML
	listActivity.appendChild(checkBox);
	listActivity.appendChild(span);
	listActivity.appendChild(edit);
  listActivity.appendChild(deleteBtn);

	list.appendChild(listActivity);

	document.getElementById("deleteAcc").disabled = false;
}

var total=0;
var updatedEdit = '';
function editItem() {
	btn.innerHTML = 'EDIT';
	var li = this.parentNode;
	var item = li.getElementsByTagName("*");
	ItemText.value = item[1].innerHTML;
	updatedEdit = item[1].id;
	console.log(item);
		 }
 function removeItem() {
	var li = this.parentNode;
	 li.remove();
		         }
