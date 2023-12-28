import useUser from "../store/User"
import { useState } from "react"
import { useShallow } from 'zustand/react/shallow'


function Newuser() {
    const name = useUser(useShallow((state)=> state.name))
    const updateUser = useUser((state)=>state.updateUser)

    const [inputname ,setInputName] = useState(name)


    const handleChange = (e)=>{
        e.preventDefault()
        const value = (e.target.value)

        if(value.length===0){
            setInputName("")
        }else{
            setInputName(value)
        }
        
    }
  
    const handleUpdate = (e)=>{
        e.preventDefault()
        updateUser({name:inputname})
        console.log({name:inputname})
     
    }
   
  return (
    <>
       <div>name :{name}</div>
      
    <input className="outline" type="text" name="name" id="name" value={inputname} onChange={ handleChange}/>

    <button className="border  ml-5 bg-slate-400" onClick={handleUpdate}>Ganti</button>
    </>
 
  )
}

export default Newuser