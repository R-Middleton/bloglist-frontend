import React, { useState } from 'react'
import Blogs from './components/Blogs'
import LoginForm from './components/Login'

const App = () => {
  const [user, setUser] = useState(null)

  return (
    <div>
      <h1>Blogs</h1>
      {user === null ? (
        <div>
          <LoginForm setUser={setUser} />
        </div>
      ) : (
        <div>
          <p>{user.name} logged in</p>
          <Blogs />
        </div>
      )}
    </div>
  )
}

export default App
