import React, {useEffect} from 'react';
import TodoList from './components/TodoList'
import Context from './contex';
import Loader from './Loader'


const Add = React.lazy(()=>
//for looking loading
// new Promise(resolve=>{
//   setTimeout(()=>{
//     resolve(import('./components/Add'))
//   },3000)
// })

//normal code
import('./components/Add')
)

function App (){
  let [todos,setTodos] = React.useState([]);
  let [loading,setLoading] = React.useState(true);


  //Dom ready
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(response => response.json())
    .then(todos => {
      setTimeout(()=>{
        setTodos(todos)
        setLoading(false)
      },2000)
     
    })
  },[])


  let Delete=(id)=>{
    setTodos(
      todos.filter(todo=>id!==todo.id)
    )
  }

  let AddTodo=(title)=>{
   setTodos(
    todos.concat([{
      id:Date.now(),
      title:title,
      completed:false
    }])
   )
  }

  let ToggleTodo=(id)=>{
    setTodos(
    todos.map(todo=>{
        if(todo.id===id){
          todo.completed=!todo.completed;
        }
        return todo;
   })
    )
  }

  return (
    <Context.Provider value={{Delete:Delete}}>
    <div className="App">
      
      <h1>Todo App</h1>
      <hr/>
      <React.Suspense fallback={<p>Loading...</p>}>
      <Add todoAdd={AddTodo}/>
      </React.Suspense>
      {loading && <Loader/>}
      {todos.length? <TodoList onToggle={ToggleTodo} todos={todos}/> :(loading?null:<p>No Todos</p>)}
     
    </div>
    </Context.Provider>
  )
};


export default App;
