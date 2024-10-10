import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

interface Todo {
  text:string;
  completed:boolean;
}
function App():JSX.Element {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

const handleAddTodo = ():void => {
  if (newTodo.trim() !== '') {
      const newTodoItem : Todo = {text: newTodo, completed: false};
      setTodos([...todos,newTodoItem]);
      setNewTodo('');
  }
};

const handleToggleComplete = (index:number):void => {
  const updatedTodos = todos.map((todo , i)=>
    i===index? {...todo ,completed: !todo.completed } : todo
  )
  setTodos(updatedTodos);
};

const handleDeleteTodo = (index:number):void => {
  const updatedTodos = todos.filter((_, i) => i!== index)
  setTodos(updatedTodos);

};

  return (
      <div>
         <h1>Todo App</h1>
         <input
         type='text'
         value={newTodo}
         onChange={(e) => setNewTodo(e.target.value)}
         placeholder='Enter Todo'
         />
         <button className='add-btn' onClick={handleAddTodo}>Add Todo</button>

         <ul>
           {todos.map((todo, index) => (
               <li key={index}>
                  <span style={{
                      textDecoration: todo.completed? 'line-through' : 'none'
                  }}
                  onClick={() => handleToggleComplete(index)}
                  >
                       {todo.text}
                  </span>
                  <button className='delete-btn' onClick={() => handleDeleteTodo(index)}>Delete</button>
               </li>
           ))}
         </ul>
      </div>
  );
}

export default App;