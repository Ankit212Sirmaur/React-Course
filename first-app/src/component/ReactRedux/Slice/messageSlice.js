import {createSlice} from '@reduxjs/toolkit'

const message = createSlice({
    name: 'message',
    initialState: {
        message: ""
    },
    reducers : {
        setMessage: (state, action) =>{
            state.message = action.payload;
        },
        resetMessage: (state, action) =>{
            state.message = ""
        }
    }
})

export default message.reducer;  // reducers 
export const {setMessage, resetMessage} = message.actions; 
 