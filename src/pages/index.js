import { Link, graphql } from "gatsby"
import React from "react"
import "../styles/index.sass"
import { Header } from "../components/Header"
export default function Home({ data }) {
  const { nodes } = data.allMarkdownRemark

  return (
    <div className="container ">
      <Header />
      <h1 className="">Thought</h1>
      <ul className="">
        {nodes.map(({ frontmatter }) => (
          <li className="">
            <Link to={frontmatter.slug} className="">
              <h2>{frontmatter.title}</h2>
            </Link>
            <p className="">{frontmatter.introduction}</p>
            <span className="">{frontmatter.date}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          slug
          title
          introduction
        }
      }
    }
  }
`
