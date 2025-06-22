import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "../../../../provider";
import axios from "axios";


export const registerByEmail = createAsyncThunk<any, any, ThunkConfig>(
    "auth/register", 
    async( useraData, thunkApi ) => {
        const { getState, rejectWithValue, dispatch, extra } = thunkApi;

        try {
            const res = await axios.post('http://localhost:5000/api/account', 
                useraData
            );

            console.log(res);
            return res.data
            
        } catch (err: any) {
            return rejectWithValue(err.response.data.message)
        }

        console.log(useraData);

    }
);
