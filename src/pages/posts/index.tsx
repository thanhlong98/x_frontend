import matter from 'gray-matter'
import { GetStaticProps } from 'next'
import React from 'react'
import path from 'path'
import fs from 'fs'
import Link from 'next/link'

type Post = {
  title: string
  slug: string
}

type Props = {
  listPost: Post[]
}

const Posts: React.FC<Props> = ({ listPost }) => {
  return (
    <div className="posts-page">
      <div className="container">
        <div className="posts">
          {listPost.map((post, index) => (
            <div key={index} className="post">
              <Link href={`/posts/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync('posts')

  const listPost = files.map((fileName) => {
    const markdownWithMetadata = fs
      .readFileSync(path.join('posts', fileName))
      .toString()
    const parserMarkdown = matter(markdownWithMetadata)
    return {
      title: parserMarkdown.data.title,
      slug: fileName.replace('.md', '')
    }
  })

  return {
    props: {
      listPost
    }
  }
}

export default Posts
