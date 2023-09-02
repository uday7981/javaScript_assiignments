import { useState } from 'react'
import './App.css'



function App() {
  const [todo, setTodo] = useState({
    title: "go to gym",
  description : "from 10 to 11",
  id : 1

  })

  setInterval(() => {
    setTodo({
       title: "go to film",
  description : "from 11 to 12",
  id : 1
    })
    
  }, 2000);
  
 
  return (
    <div>
     <h1>hey there</h1> 
    <span>{todo.title}</span>
      {todo.description}
       {todo.id}
       <PersonName></PersonName>
    </div>
  )
}


function PersonName(){
  return <div>
    uday kiran
  </div>
}
export default App


