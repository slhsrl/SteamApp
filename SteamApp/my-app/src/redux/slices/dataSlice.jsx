import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'


const initialState = {
  data: [],
  loading:false,
  error:'',
  filterdata: [],
  searcbar:{
    text: '',           
    },
};

export const datafunc=createAsyncThunk("datafunc",async()=>{
  const response=await axios.get('/db.json');
  return response.data; 
})


export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    // setfiltervalue: (state, action) => {
    //   state.searcbardata.value = action.payload;
    //   state.filterdata.games = state.data.games.filter(item => {
    //     const itemCategory = item.category ? item.category.toLowerCase() : '';
    //     const itemtext = item.name ? item.name.toLowerCase() : '';
    //     const filtertext = state.searcbardata.text === "" || itemtext.includes(state.searcbardata.text.toLowerCase());
    //     const filtervalue =state.searcbardata.value  === "" || itemCategory.includes(state.searcbardata.value.toLowerCase());
    //     return filtertext && filtervalue;
    //   });
    // },

    setfiltertext: (state, action) => {
      state.searcbar.text=action.payload; 
      state.filterdata.games = state.data.games.filter(item => {
        const itemtext = item.name ? item.name.toLowerCase() : '';
        const filtertext = state.searcbar.text === "" || itemtext.includes(state.searcbar.text.toLowerCase()); 
       
        return filtertext ;
      });
      }
  },
  extraReducers:(builder)=>{ 
        builder.addCase(datafunc.pending,(state)=>{
          state.loading=true
          state.error="";
        });
        builder.addCase(datafunc.fulfilled,(state,action)=>{
          state.data=action.payload;
          state.filterdata=action.payload;
          state.loading=false
        });
        builder.addCase(datafunc.rejected,(state)=>{
          state.loading=false
          state.error="error"
        })
  }
});

export const {setfiltertext} = dataSlice.actions;
export default dataSlice.reducer;