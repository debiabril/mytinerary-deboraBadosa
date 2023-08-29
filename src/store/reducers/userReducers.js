import { createReducer } from "@reduxjs/toolkit";
import {user_photo} from "../actions/userActions.js";


const initialState = {
    name: 'Random Name',
    photo: 'https://us.123rf.com/450wm/martialred/martialred1608/martialred160800018/61263271-cuenta-de-usuario-perfil-del-icono-del-c%C3%ADrculo-plana-para-aplicaciones-y-sitios-web.jpg'
}
const userReducer = createReducer (initialState, (builder)=>
    builder 
        .addCase(user_photo, (state, action) => {
            return {
                ...state,
                photo: action.payload.photo
            }
        })
)
export default userReducer