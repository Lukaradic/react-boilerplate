import { createSlice } from '@reduxjs/toolkit'
import Input from '../../components-ui/InputText';

const initialState = {
    books: [],
    isLoading: false,
  }
  

  export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchByName: (state) => {
            console.log('Stareted the search');
        } 
    }
  })


  export const {searchByName} = searchSlice.actions;
  export default searchSlice.reducer;