import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as LinkRouter } from 'react-router-dom'
import { user_signout } from '../store/actions/userActions';


export default function BtnAvatar() {
  const user = useSelector(store => store.userReducer.user);
  console.log(user);
  const dispatch = useDispatch();

    const handleSignout = async () => {
        try {
            const token = localStorage.getItem('token');
            dispatch(user_signout(token, user));
        } catch (error) {
            console.log(error);
        }
    };
  const defaultImage = 'https://us.123rf.com/450wm/martialred/martialred1608/martialred160800018/61263271-cuenta-de-usuario-perfil-del-icono-del-c%C3%ADrculo-plana-para-aplicaciones-y-sitios-web.jpg'
  
  return (
    <>
      {user? 
      <button onClick={handleSignout} className='flex rounded-full border-white border-1 m-1 bg-cyan-300 hover:bg-cyan-800 py-2 px-4  text-white drop-shadow-darkShadow hover:drop-shadow-lightShadow lg:flex '>SignOut</button>
      :
      <LinkRouter to = '/signin' className='flex rounded-full border-white border-1 m-1 bg-cyan-300 hover:bg-cyan-800 py-2 px-4  text-white drop-shadow-darkShadow hover:drop-shadow-lightShadow lg:flex '> 
        SignIn
      </LinkRouter>
      }
      <img className="w-10 h-10 fill-black stroke-cyan-500 ml-2 mr-1 rounded-full" src={user? user.image : defaultImage} />
    </>
  )
}
