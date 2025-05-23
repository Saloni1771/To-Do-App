let todoList1 = localStorage.getItem("todoList");
let todoList;
resetScore(todoList1);
function resetScore(todoList1) {
  //if todo list in localstorage then continue else []
  todoList = todoList1? JSON.parse(todoList1):[];
  
}
displayitem();
function addTodo(){
  let inputElement=document.querySelector('#task-todo');
  let todoItem=inputElement.value;
  let inputDate=document.querySelector('#todo-date');
  let errorElement = document.querySelector('#task-error');
  let todoDate=inputDate.value;
  if ((!todoItem && !todoDate) ||(!todoItem && todoDate)){
     inputDate.value='';
      errorElement.style.display='block';
      return;
  }
  errorElement.style.display = 'none';
  todoList.push({item:todoItem,dueDate:todoDate});
  //empty the text after adding
  localStorage.setItem("todoList", JSON.stringify(todoList));
  inputElement.value='';
  inputDate.value='';
  displayitem();
}
function displayitem(){
  let containerElement=document.querySelector('.todo-container');
  let newHTML='';

  for (let i=0; i<todoList.length;i++){
    let {item,dueDate}=todoList[i];
    newHTML+=`
    <span>${item}</span>
    <span>${dueDate}</span>
    <button class="delete-button" onclick="deleteTodo(${i}); "> Delete</button>`;
  }
  containerElement.innerHTML=newHTML;
}

function deleteTodo(index) {
   todoList.splice(index, 1);
localStorage.setItem("todoList", JSON.stringify(todoList));
   displayitem();
}
displayitem();

