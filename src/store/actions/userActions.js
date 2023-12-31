import { createAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

const URL_BASE = 'https://mytineraryback-2tzl.onrender.com'
export const user_photo = createAction('user_photo', (obj) => {
    console.log(obj)
    return {
        payload: {
            photo: obj.photo
        }
    }
})
export default user_photo
export const user_signin = createAsyncThunk('user_signin', async (obj) =>{
    try {
        const { data }= await axios.post(`${URL_BASE}/api/auth/signin`, obj.data)
        console.log(data)
        localStorage.setItem('token',data.response.token)
        localStorage.setItem('user',JSON.stringify(data.response.user)) 
        return {
            user:data.response.user,
            token: data.response.token
        }
    } catch (error) {
        console.log(error);
        return{
            user: null
        }
    }
})
export const user_signup = createAsyncThunk('user_signup', async (obj) =>{
    try {
        const { data }= await axios.post(`${URL_BASE}/api/auth/signup`, obj.data)
        console.log(data)
        localStorage.setItem('token',data.response.token)
        localStorage.setItem('user',JSON.stringify(data.response.user)) 
        Swal.fire({
            icon: 'success',
            title: 'Great!',
            text: 'User registered!',
            footer: '<a href="/signin">Please Sign In</a>'
        })
        return {
            user:data.response.user,
            token: data.response.token
        }
    } catch (error) {
        console.log(error);
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: error.response.data.message,
        })
        return{
            user: null
        }
    }
})
export const user_signin_google = createAsyncThunk('user_signin_google', async (obj) =>{
    try {
        const { data }= await axios.post(`${URL_BASE}/api/auth/google`, obj.data)
        localStorage.setItem('token', data.response.token)
        localStorage.setItem('user',JSON.stringify(data.response.user))
        window.location.reload() 
        return {
            user:data.data.response.user,
            token: data.data.response.token
        }
    } catch (error) {
        console.log(error);
        return{
            user: null
        }
    }
})
export const user_signout = createAction('user_signout', async (token) =>{
    try {
        localStorage.getItem('token')
        await axios.post(`${URL_BASE}/api/auth/signout`, {}, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        localStorage.removeItem('token');
        localStorage.removeItem('user');

        return {
            user: null,
            token: null
        }
    } catch (error) {
        console.log(error);
    }
})
export const get_user_by_id = createAsyncThunk('get_user_by_id', async (id) =>{
    try {
        const response = await axios.get(`${URL_BASE}/api/users/${id}`)
        return {
            user: response.data.user
        }
    } catch (error) {
        return{ 
            user: []
        }
    }
})
export const user_token = createAction('user_token', (user) => {
    return {
        payload: {
            user
        }
    }
})