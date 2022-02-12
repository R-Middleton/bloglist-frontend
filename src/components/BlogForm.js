import React from 'react'
import BlogService from '../services/blogs'

const BlogForm = () => {
  const addBlog = () => {}
  return (
    <div>
      <h2>Create New</h2>
      <form onSubmit={addBlog}>
        <div>
          {' '}
          Title:
          <input type='test' />
        </div>
        <div>
          Author:
          <input type='text' />
        </div>
        <div>
          URL:
          <input type='text' />
        </div>
        <div>
          <button>Save</button>
        </div>
      </form>
    </div>
  )
}

export default BlogForm
