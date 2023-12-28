import useStore from "../store/Counter"

function Navbar() {
    const counter =useStore((state) => state.counter)
  return (
    <div className="bg-red-500 text-2xl container mx-auto px-6 flex justify-end">
        <div className="">{counter}</div>
       
    </div>
  )
}

export default Navbar