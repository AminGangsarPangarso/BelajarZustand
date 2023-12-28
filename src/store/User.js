import { create } from "zustand";
import { devtools } from "zustand/middleware";
import axios from "axios";

const useUser = create(devtools((set)=>({
    users:[],
    fetchApi: async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        set({ users: response.data})
      },
      removeApi: ()=> set({users:[]}),
    
      pengguna : ({
        name :'mark',
      age : '27',
      negara:'indonesia',
      }),
      
      updateUser : (pengguna)=>set((state)=>({...state,...pengguna}))
    
})))

export default useUser

