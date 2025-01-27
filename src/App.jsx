import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import userData from './component/user'
import Auth from'./component/Authorisation'
const Authorized=Auth(userData);
function App() {
  const user={name:"deepak"};
  const isAuth=true;

  return (
    <>
      <Authorized isAuth={isAuth} user={user}/>
    </>
  )
}

export default App