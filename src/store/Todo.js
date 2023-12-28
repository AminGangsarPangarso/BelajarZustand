import { create } from "zustand";
import { produce } from "immer";
import { devtools } from "zustand/middleware";
export const useTodo = create(devtools((set)=>({
    kdrmas :[
        {
            id:Math.floor(Math.random() * 100),
            name: 'wow ini sangat menyenangkat',
        },
        {
            id:Math.floor(Math.random() * 100),
            name: 'jos mantap',
        },
    ],

    addTodo : (payload) =>
    set(produce((state)=>{
       state.kdrmas.push({
        id:Math.floor(Math.random() * 100),
        name:payload
       }) 
    })),

    hapusTodo: (payload)=>set(produce((state)=>{
        const cariIndex = state.kdrmas.findIndex((el)=>el.id===payload)
        state.kdrmas.splice(cariIndex,1)
    })),

    editTodo : (payload) => set(produce((state)=>{

        const edit = state.kdrmas.find((el)=>el.id===payload.id)
        edit.name = payload.name
    }))


})))

