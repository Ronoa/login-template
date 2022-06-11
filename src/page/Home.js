import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'

export default function Home({}) {
  const { user, signout, loading } = useAuth()
  const navigate = useNavigate()

  const signOutHandler = async () => {
    await signout()
    navigate('/login')
  }
  if (loading)
    return <div className='font-bold text-center text-5xl'>loading</div>

  return (
    <div className='flex flex-col items-center text-5xl font-bold text-center'>
      pagina de inicio / {user.email}
      <button
        onClick={signOutHandler}
        className='w-40 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg'
      >
        Desconectar
      </button>
    </div>
  )
}