import * as React from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { Routes, Route } from 'react-router-dom'

import { auth } from './datalayer/connections/Firebase/fire'
// import { async } from '@firebase/util'
import Home from './page/Home'
import Authentication from './page/Autentication'
import { AuthProvider } from './context/authContext'
import { ProtectedRoute } from './components/ProtectedRoute'


function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path='/login'
          element={
            <ProtectedRoute>
              <Authentication stateCurrent={'login'} />
            </ProtectedRoute>
          }
        />
        <Route
          path='/register'
          element={<Authentication stateCurrent={'register'} />}
        />
      </Routes>
    </AuthProvider>
  )
}

export default App
