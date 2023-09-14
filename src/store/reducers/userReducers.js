import { createReducer } from "@reduxjs/toolkit";
import {get_user_by_id, user_signin, user_token} from "../actions/userActions.js";



const initialState = {
    user: null,
    token: null
   /*  name: 'Random Name',
    photo: 'https://us.123rf.com/450wm/martialred/martialred1608/martialred160800018/61263271-cuenta-de-usuario-perfil-del-icono-del-c%C3%ADrculo-plana-para-aplicaciones-y-sitios-web.jpg' */
}
const userReducer = createReducer (initialState, (builder)=>
    builder 
        /* .addCase(user_photo, (state, action) => {
            return {
                ...state,
                photo: action.payload.photo
            }
        }) */
        .addCase(get_user_by_id.fulfilled, (state, action)=>{
            return{
                ...state,
                user: action.payload.user
            }
        })
        .addCase(user_signin.fulfilled, (state, action)=>{
            return{
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
        })
        .addCase(user_token, (state, action) => {

            return {
                ...state,
                user: action.payload.user,
            }
        })
)
export default userReducer
