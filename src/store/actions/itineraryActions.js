import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL_BASE = 'https://mytineraryback-2tzl.onrender.com'
export const get_itinerary_by_id = createAsyncThunk('get_itinerary_by_id', async (id) =>{
    try {
            const response = await axios.get(`${URL_BASE}/api/itineraries/${id}`)
        return {
            itinerary: response.data.itinerary
        }
    } catch (error) {
        return{ 
            itinerary: []
        }
    }
})