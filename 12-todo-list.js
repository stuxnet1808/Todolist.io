let todoList = [{
  name: 'make dinner',  
  dueDate: '2024-06-19'
},{
  name: 'wash dishes',
  dueDate: '2024-06-20'
}];

randerTodoList();

function randerTodoList(){
  let todoListHTML='';

  // todoList.forEach(function(todoObject, index){
  todoList.forEach((todoObject, index)=>{  
    const{name, dueDate} = todoObject;

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div> 
      <button  
        class="delete-button js-delete-button">Delete</button>`;

    todoListHTML+= html;
  });

  // for(let i=0; i<todoList.length; i++){
  //   const todoObject = todoList[i];
  //   // const name = todoObject.name;
  //   // const dueDate = todoObject.dueDate;

  //   const{name, dueDate} = todoObject;

  //   const html = 
  //   `
  //     <div>${name}</div>
  //     <div>${dueDate}</div> 
  //     <button onclick="
  //       todoList.splice(${i}, 1);
  //       randerTodoList();
  //     " class="delete-button">Delete</button>
  //   `;
  //   todoListHTML+= html;
  // }
  //console.log(todoListHTML);

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  
  document.querySelectorAll('.js-delete-button').forEach((deleteElement, index)=>{
    deleteElement.addEventListener('click', ()=>{
      todoList.splice(index, 1);
      randerTodoList();
    })
  })

}

document.querySelector('.js-add-button').addEventListener('click', ()=>{
  addTodo();
});

// document.querySelector('.js-add-button').addEventListener('keydown', (event)=>{
//   if(event.key === 'enter'){
//     addTodo();
//   }
// });

function addTodo(){
   const inputElement = document.querySelector('.js-name-input');
   let name = inputElement.value;

   const dateElement = document.querySelector('.js-date-input');
   const dueDate = dateElement.value;

  //  console.log(name);
   todoList.push({
    // name: name,
    // dueDate: dueDate
    name,
    dueDate
   });
   //console.log(todoList);

   inputElement.value = '';
   dateElement.value = '';

   randerTodoList();
}