import {createSlice} from '@reduxjs/toolkit';

const listSlice = createSlice({
  name: 'list',
  initialState: [
    {
      id: '12312dwqdf',
      title: 'Fabricio',
      bought: false,
    },
    {
      id: 'dsfkjnsadkjng2',
      title: 'Dani',
      bought: false,
    },
  ],
  reducers: {
    addItem(state, action) {},
    removeItem(state, action) {},
    toggleItem(state, action) {},
  },
});

export const {addItem, removeItem, toggleItem} = listSlice.actions;
export default listSlice.reducer;
