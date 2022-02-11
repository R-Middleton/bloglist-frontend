import React, { useState, useEffect } from 'react'
import Blogs from './components/Blogs'
import LoginForm from './components/Login'
import BlogService from './services/blogs'

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      console.log('loggedUserJSON', loggedUserJSON)
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      BlogService.setToken(user.token)
    }
  }, [])

  const handleLogout = async (event) => {
    console.log('logout user', user)
    try {
      window.localStorage.removeItem('loggedBlogappUser')
      setUser(null)
      BlogService.setToken('null')
    } catch (exception) {
      console.log('exception', exception)
    }
  }

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
          <button onClick={handleLogout}>logout</button>
          <Blogs />
        </div>
      )}
    </div>
  )
}

export default App
