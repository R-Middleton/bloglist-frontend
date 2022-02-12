import React, { useState, useEffect } from 'react'
import Blogs from './components/Blogs'
import LoginForm from './components/Login'
import BlogService from './services/blogs'
import BlogForm from './components/BlogForm'

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
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
          <BlogForm />
          <Blogs />
        </div>
      )}
    </div>
  )
}

export default App
