import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useRef } from 'react'
import { user_signin_google } from '../store/actions/userActions.js'

export const GoogleSignIn = () => {
    const googleButton = useRef()
    const store = useSelector(store => store.userReducer)
        console.log(store);
    const dispatch = useDispatch();
    const handleCredentialResponse= async(response)=> {
        /* console.log("JWT Google " + response.credential); */
        const data= {
            token_id : response.credential
        }
        try {
            dispatch(user_signin_google({
              data
            })) 
          } catch (error) {
            console.log(error);
          }
        /* const userResponse = await axios.post('http://localhost:3000/api/auth/google', data)
        console.log(userResponse); */
      }
    
    useEffect(()=>{
        window.onload = function () {
            google.accounts.id.initialize({
              client_id: "1042169502858-4qq0pse13h4n3trrqt2d60emg6o0meq0.apps.googleusercontent.com",
              callback: handleCredentialResponse
            });
            google.accounts.id.renderButton(
              googleButton.current,
              { 
                type : "standard",
                shape: "pill",
                theme: "filled_black", 
                text:"signin_with",
                size: "large",
                logo_alignment:"left" 
              }  
            )
          }
    }, [])

  return (
    <div ref = {googleButton}></div> 
  )
}
