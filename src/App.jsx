
import useStore from './store/Counter'
import Navbar from './components/Navbar'
import User from './components/User'
import Newuser from './components/Newuser'
import TodoList from './components/TodoList'
function App() {
 const {counter,increment,decrease,Username,userUpdateName} = useStore((state)=>state)
//  const increment = useStore((state)=>state.increment)
//  const decrease = useStore((state)=>state.decrease)

  return (
    <>
    <Navbar/>
     <center>
     <p>{counter}</p>
     <h2>ganti nama : {Username}</h2>
     <input className='outline' type="text" value={Username} onChange={(e)=>userUpdateName(e.target.value)} />
     <div className="gap-20 px-7 ml-10">
     <button className='gap-4 border ' onClick={increment}>+</button>
     <button  className='border ml-10' onClick={decrease}>-</button>
     </div>
          <ul>
            <li>
                <User/>
            </li>
          </ul>

          <Newuser/>

          <TodoList/>
     </center>
    </>
  )
}

export default App
