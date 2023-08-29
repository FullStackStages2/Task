
document.addEventListener('DOMContentLoaded', () => {
  const div = document.querySelector('div');
  const input = document.querySelector('input');
  const button = document.querySelector('button');
  const span = document.querySelector('span');

  
  input.addEventListener('keydown', () => {
     localStorage.setItem('key', input.value);
  });

  const key = localStorage.getItem('key');
  if (key !== null) {
     span.textContent = `Last value from previous run: ${key}`;
  }

  
});

  const addTodo = () => {
    if(input.value !== ''){
      const div =document.createElement('div')
      document.body.appendChild(div);
      const checkbox = document.createElement('input')
        checkbox.type='checkbox'
        checkbox.addEventListener('change', () => {
        if(checkbox.checked){
          div.style.textDecoration = 'line-through' ;
        } else{
          div.style.textDecoration= '';
        }
      } )  
        div.appendChild(checkbox);
      
        const span =document.createElement('span')
        span.textContent=input.value
        input.value= '';
        div.appendChild(span);
        
        const deleteButton = document.createElement('button')
        deleteButton.textContent ='Del'
        deleteButton.addEventListener('click', () => {
         div.parentNode.removeChild(div)
        }) 
         div.appendChild(deleteButton);

         const editButton = document.createElement('button')
         editButton.textContent = 'Edit';
         editButton.addEventListener('click', () => {
           span.contentEditable =true;
           span.focus();

         })
         div.appendChild(editButton);

         const todoInputField = document.getElementById('todoInput');
         const addTodoButton = document.getElementById('addButton');
         addButton.addEventListener('click',addTodo);
       
         

  }}

 
  
  const h1 = document.createElement('h1');
  h1.textContent = 'Todos 앱';
  document.body.appendChild(h1);

  

  const input = document.createElement('input');
  input.addEventListener('keydown', (event) =>{
    if(event.keyCode === 13){
        addTodo();
        
    }
  });
  document.body.appendChild(input);

  const addButton = document.createElement('button');
  addButton.textContent = 'Add';
  document.body.appendChild(addButton);

    addButton.addEventListener('click', () => {
      addTodo();
  })

  const p = document.querySelector('p');
  const button = document.querySelector('button');
  const inputfield =document.querySelector('input');

  
  
  input.addEventListener('keyup', () => {
    localStorage.setItem('user', input.value)
  })



  





