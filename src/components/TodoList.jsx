import { useState } from "react"
import { useTodo } from "../store/Todo"

function TodoList() {

    const {kdrmas,addTodo} = useTodo((state)=>state)
    const hapusTodo = useTodo((state)=>state.hapusTodo)
    const editTodo = useTodo ((state)=>state.editTodo)

    

    const [input,setInput]= useState('')
    const [isEdit,setEdit]=useState(false)
    const [update,setUpdate]=useState({
        id:null,
        name:""
    })

  
    const handleAdd = (e)=>{
        e.preventDefault()
        addTodo(input)
        setInput('')
        console.log(input)
    }

    const handleEdit = (drama) =>{
      setEdit(true)
        setUpdate({
            id:drama.id,
            name:drama.name,
        })
    }

    const pathDramaHandler = (e) =>{
        e.preventDefault()
        editTodo(update)
        setUpdate({
            id:null,
            name:""
        })
        setEdit(false)
    }
  return (
    <div>
        <h2>TODO LIST </h2>
        <div className="">
        
           
            <input className="outline" type="text" id="" name="" value={input} onChange={(e)=>setInput(e.target.value)}  placeholder="add new"/>
            <button className=" outline" onClick={handleAdd}>add</button>

            <p>{kdrmas.map(val=>(
            <ul key={val.id}>
                <li>
                    {val.name}
                    <button className="outline ml-6 bg-red-500" onClick={()=>hapusTodo(val.id)}>hapus </button>
                    <button className="outline bg-green-300 ml-5" onClick={()=>handleEdit(val)}> edit</button>
                </li>
            </ul>
        ))}</p>

        <br />
        {isEdit && (
            <div className="">
                <span> edit todo</span>
                <input type="text" value={update.name} onChange={(e)=>setUpdate({...update,name :e.target.value})} />
                <button className="outline bg-green-500 ml-6 " onClick={pathDramaHandler}>Edit</button>
            </div>
        )}
        </div>
    </div>
  )
}

export default TodoList