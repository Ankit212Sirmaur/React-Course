import {configureStore} from "@reduxjs/toolkit"
// import messageReducer from "./Slice/messageSlice"
// import notesSlice from "./Slice/notesSlice"
import productReducer  from "./Slice/productSlice"
import cartReducer from './Slice/cartSlice'
export default configureStore({
    reducer:{
        // messageReducer,
        // noteReducer :notesSlice,
        productReducer,
        cartReducer
    }
});