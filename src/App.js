import * as React from 'react'
import { onAuthStateChanged } from 'firebase/auth';
 
import {auth} from './datalayer/connections/Firebase/fire'
// import { async } from '@firebase/util'; 
import Home from './page/Home';
import Authentication from './page/Autentication';

 
function App() {
  const [user, setUser] = React.useState()
  const [authState, setAuthState] = React.useState(null)
  
  React.useEffect(()=>{
    const unSubscribeAuth = onAuthStateChanged(auth,
      async authenticateUser =>{
        if(authenticateUser){
          setUser(authenticateUser.email)
          setAuthState('home')
        }else{
          setUser(null)
          setAuthState('login')
        }
      })
      return unSubscribeAuth
  },[user])

  if(!authState) return <div className='font-bold text-center text-5xl'>loading</div>
  if(authState === 'login' || authState === 'register') return <Authentication stateCurrent={authState} setAuthState={setAuthState} setUser={setUser}/>
  if(user) return <Home setAuthState={setAuthState} user={user} setUser={setUser}/>
   
}

export default App;
