import { createSlice } from "@reduxjs/toolkit";


export const appSlice = createSlice({
    name:"appSlice",
    initialState:{
        count:10,
        firstName:"Pam",
        lastName:"Josh",
        friends:["Emma", "Sam", "Morak", "Eunice", "Fisayo", "Dapss" ]
    },

    reducers:{
        incNum: (state)=>{
            state.count++
        },

        decNum:(state)=>{
            state.count--
        },

        incNumBydigit:(state, action)=>{
            state.count+=action.payload
            console.log(state);
            
        },

        decNumBydigit:(state, action)=>{
            state.count-=action.payload
            console.log(state);
            
        }
    }


})

export default appSlice.reducer

export const {incNum, decNum, incNumBydigit, decNumBydigit}= appSlice.actions

// const [first, setfirst] = useState("")