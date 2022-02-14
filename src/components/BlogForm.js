import React, { useState } from 'react'
import BlogService from '../services/blogs'

const BlogForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const addBlog = (event) => {
    event.preventDefault()

    const newBlog = {
      title: title,
      author: author,
      url: url,
    }

    BlogService.create(newBlog)

    setTitle('')
    setAuthor('')
    setUrl('')
  }

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value)
  }

  const handleUrlChange = (event) => {
    setUrl(event.target.value)
  }

  return (
    <div>
      <h2>Create New</h2>
      <form onSubmit={addBlog}>
        <div>
          {' '}
          Title:
          <input name='title' value={title} onChange={handleTitleChange} />
        </div>
        <div>
          Author:
          <input name='author' value={author} onChange={handleAuthorChange} />
        </div>
        <div>
          URL:
          <input name='url' value={url} onChange={handleUrlChange} />
        </div>
        <div>
          <button type='submit'>Save</button>
        </div>
      </form>
    </div>
  )
}

export default BlogForm
