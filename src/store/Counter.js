import { create } from "zustand";
import {devtools } from 'zustand/middleware'

const useStore = create(devtools((set) =>({
    counter:0,
    increment:()=>set((state)=>({counter:state.counter +1})),
    decrease :()=>set((state)=>({counter:state.counter -1})),

   Username : 'amin',
   userUpdateName :(Username)=>set({Username})
})))

export default useStore