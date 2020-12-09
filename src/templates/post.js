import React from "react"
import { graphql } from "gatsby"

import "../styles/index.sass"

export default function Post({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <div className="min-h-screen font-sans text-xl border-box">
      <div className="w-2/5 m-auto mt-12 border-box rounded-lg">
        <h1 className="text-center border-box text-4xl font-bold">
          {frontmatter.title}
        </h1>
        <span className="mt-4 block font-light text-base text-center">
          {frontmatter.date}
        </span>
        <section dangerouslySetInnerHTML={{ __html: html }} className="mt-12" />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        introduction
      }
    }
  }
`
