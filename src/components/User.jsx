
import useUser from "../store/User"

function User() {
    const {users,fetchApi,removeApi} =useUser((state)=>state)
   
  return (
    <>
    <button className="border px-4 py-2 bg-green-400" onClick={()=>fetchApi(users)}> call api</button>
    <button className="border px-4 py-2 ml-8 bg-red-500" onClick={()=>removeApi(users)}> remove api</button>
    <div >
       {users.map(val=>{
        return <div className="" key={val.id}>
            <ul >
                <li>
                    {val.name}
                </li>
            </ul>
        </div>
       })}
    </div>
    
    </>
  )
}

export default User