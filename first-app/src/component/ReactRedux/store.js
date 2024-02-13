import {configureStore} from "@reduxjs/toolkit"
import messageReducer from "./Slice/messageSlice"

export default configureStore({
    reducer:{
        messageReducer  
    }
})