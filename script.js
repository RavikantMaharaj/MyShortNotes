let addBtn = document.getElementById('add_btn');

addBtn.addEventListener('click',addNotes);

let ParentList = document.getElementById('parentList');
function addNotes(e){
    if(ParentList.children[0].className == 'list-group-item'){
        ParentList.children[0].remove();
    }
    let currentBtn = e.currentTarget;
    let currentInput = currentBtn.previousElementSibling;
    var currentdate = new Date();
    var datetime = currentdate.getDay() + "/" + currentdate.getMonth() 
    + "/" + currentdate.getFullYear() + " @ " 
    + currentdate.getHours() + ":" 
    + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    let currentNote = currentInput.value + "- " + datetime;

    let newLi = document.createElement('li');
    newLi.className = "list-group-item d-flex justify-content-between";

    newLi.innerHTML = ` <h5 class="flex-grow-1" >${currentNote}</h5>
    <button class="btn btn-warning mx-2" onclick="EditNote(this)">Edit</button>
    <button class="btn btn-danger " onclick="DeleteNote(this)">Delete</button>
    `
    ParentList.append(newLi);
}

function DeleteNote(currElement){
          currElement.parentElement.remove();
         
          if(ParentList.children.length <= 0){
            let EmptyMsg = document.createElement('h5');    
              EmptyMsg.textContent = 'Hurray! you don\'t have any task to do today!!!';
              EmptyMsg.classList.add('list-group-item');
              EmptyMsg.style.backgroundColor = 'cyan';
              EmptyMsg.style.textAlign = 'center';
              ParentList.appendChild(EmptyMsg);
          }
          
}

function EditNote(currElement){
  

    if(currElement.textContent == 'save'){
        currElement.textContent = 'Edit';
        let currNote = currElement.previousElementSibling.value;
        let currHeading = document.createElement('h5');
        currHeading.className = 'flex-grow-1';
        currHeading.textContent = currNote;
        currElement.parentElement.replaceChild(currHeading, currElement.previousElementSibling);    
    }
    else {
    currElement.textContent = 'save';
    let currNote = currElement.previousElementSibling.textContent;
    let currInput = document.createElement('input');
    currInput.type = 'text';
    currInput.placeholder = 'Add Task';
    currInput.className = 'form-control';
    currInput.value = currNote;
    currElement.parentElement.replaceChild(currInput, currElement.previousElementSibling);
    }
}