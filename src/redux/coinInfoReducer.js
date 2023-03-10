import { createSlice } from "@reduxjs/toolkit";

export const coinSlice = createSlice({
    name: "coinInformation",
    initialState:{
        coinInfo: []
    },
    reducers:{
        setCoinInfo: (state, action) => {
            state.coinInfo = action.payload
        },
    }
});

const {  setCoinInfo } = coinSlice.actions;

export const setCoinInfomration = (coinInfo) => (dispatch) => {

    try {
        dispatch(setCoinInfo(coinInfo))
    } catch (error) {
        throw new Error(error);
    }
}

//selectors
export const selectCoinInfo = (state) => state.coinInfoState.coinInfo;

export default coinSlice.reducer;