import React, { useEffect, useRef } from 'react'

export const GoogleSignIn = () => {
    const googleButton = useRef()
    const handleCredentialResponse= (response)=> {
        console.log("JWT Google " + response.credential);
      }
    useEffect(()=>{
        window.onload = function () {
            google.accounts.id.initialize({
              client_id: "1042169502858-4qq0pse13h4n3trrqt2d60emg6o0meq0.apps.googleusercontent.com",
              callback: handleCredentialResponse
            });
            google.accounts.id.renderButton(
              googleButton.current,
              { theme: "outline", size: "large" }  
            )
          }
    }, [])

  return (
    <div ref = {googleButton}></div> 
  )
}
