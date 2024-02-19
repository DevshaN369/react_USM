import { createSlice } from "@reduxjs/toolkit"

const initialState=({
    Users:[]
})

 export const userReducer=createSlice({
    name:'users',
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.Users=[...state.Users,action.payload]
        },
        removeUser:(state,action)=>{
         var tempArr=state.Users.filter((user,index)=>user.username !==action.payload)
         state.Users=tempArr
        },
        
    }
})
export const {addUser,removeUser}=userReducer.actions
// export const add=userReducer.actions.addUser
// export const remove=userReducer.actions.removeUser
export default userReducer.reducer