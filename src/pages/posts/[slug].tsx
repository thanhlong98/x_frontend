import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'

const Post = ({ contents, data }) => {
  return (
    <div className="container">
      <div>
        <Head>
          <title>{data.title}</title>
        </Head>
        <div>Hello World</div>
        <ReactMarkdown source={contents} />
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync('posts')
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', '')
    }
  }))
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const markdownWithMetadata = fs
    .readFileSync(path.join('posts', slug + '.md'))
    .toString()

  const parserMarkdown = matter(markdownWithMetadata)

  return {
    props: {
      contents: parserMarkdown.content,
      data: parserMarkdown.data
    }
  }
}

export default Post
