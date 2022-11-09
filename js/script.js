let addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", addNew);
addBtn.classList = "add-btn";

function addNew()  {
    //get input value
    let itemValue = document.querySelector("#inputItem").value;
   
    //get parent node
    let itemList = document.querySelector("#toDoItems");

    //create elements
    let itemDiv = document.createElement("div");


    let item = document.createElement("input");
    item.type = "text";
    item.setAttribute("disabled", "");
    item.value = itemValue;
    item.defaultValue = itemValue;
    item.classList = "input-item";


        //checkbox
        let checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.classList = "check-box";
        checkBox.addEventListener("change", tickbox);

        function tickbox() {
            if(this.checked) 
            {
                item.style.color = "red";
            
            }
            else {
                item.style.color = "black";
            }
        }
        


    let editBtn = document.createElement("button");
    editBtn.innerHTML = "<span class='material-symbols-outlined'>edit_note</span>";
    editBtn.classList = "edit-btn";
    editBtn.addEventListener("click", editValue);
    



    let remBtn = document.createElement("button");
    remBtn.textContent = "Remove";
    remBtn.innerHTML = "<span class='material-symbols-outlined'>delete</span>";
    remBtn.addEventListener("click", remItem);
    remBtn.classList = "remove-btn"

    //append elements
    itemList.appendChild(itemDiv);
      itemDiv.appendChild(item);
      itemDiv.appendChild(checkBox);
       itemDiv.appendChild(remBtn);
   
       itemDiv.appendChild(editBtn);

   let count = itemList.childElementCount;
   console.log(count);

   if (count === 5) {
    addBtn.setAttribute("disabled", "");
    alert("Limit")
   }

   function remItem() {
    itemDiv.remove();
    addBtn.removeAttribute("disabled","")

   }


//EDIT SAVE
   function editValue() {
    //remove disabled attribute
    item.removeAttribute("disabled", "");

    //disable edit button to avoid multiple save buttons
    editBtn.setAttribute("disabled","");

    //create save btn
    let saveBtn = document.createElement("button");
    saveBtn.textContent = "Save";
    saveBtn.classList = "saveBtn";
    saveBtn.addEventListener("click", saveValue);

    //append save btn
    itemDiv.appendChild(saveBtn);

    function saveValue() {
        let text = "Save changes?";

        if (confirm(text) == true)  {
           //enable edit button again line 34
            editBtn.removeAttribute("disabled","");

           //get new value
           let newValue = item.value;
           item.defaultValue = newValue;
             console.log(newValue);

             //disable input type
              item.setAttribute("disabled", "");

            //hide save button
            //saveBtn.setAttribute("display", "none");
             itemDiv.removeChild(saveBtn);

             //add text to alert
             text = "Saved successfully";
          } else {
            text = "Cancelled";
             //enable edit button again line 34
             editBtn.removeAttribute("disabled","");

               //disable input type
                itemDiv.setAttribute("disabled", "");

              //hide save button
              //saveBtn.setAttribute("display", "none");
               itemDiv.removeChild(saveBtn);


            item.value = item.defaultValue;

          }
          alert(text);

    }
}

}