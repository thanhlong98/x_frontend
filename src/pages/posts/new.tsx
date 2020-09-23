import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

const NewPostPage = () => {
  const [content, setContent] = useState('')

  return (
    <div
      className="newPost"
      style={{ display: 'flex', justifyContent: 'space-between' }}
    >
      <div className="post-editor">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ resize: 'none', width: '400px', height: '500px' }}
        />
      </div>
      <div className="post-review">
        <ReactMarkdown source={content} />
      </div>
    </div>
  )
}

export default NewPostPage
