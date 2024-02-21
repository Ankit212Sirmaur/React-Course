import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchData = createAsyncThunk('products/fetch', async () => {
    const res = await fetch('https://api.escuelajs.co/api/v1/products');
    return await res.json();
})
const productSlice = createSlice({
    name: 'productSlice',
    initialState: {
        products: [],
        status: 'idle',
        error: null
    },
    extraReducers: function (builder) {
        builder.addCase(fetchData.pending, (state, action) => {
            state.status = 'loading'
        }).addCase(fetchData.fulfilled, (state, action) => {
            state.products = action.payload;
            state.status = 'fulfilled'
        }).addCase(fetchData.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        })  
    }
})

// export const { loadProducts } = productSlice.actions;
export default productSlice.reducer