import React from "react"
import "../styles/index.sass"
import { Header } from "../components/Header"
import { Services } from "../components/Services"
import { Projects } from "../components/Projects"
import { Footer } from "../components/Footer"

const Card = ({ date, title, text, catagory }) => {
  return (
    <div className="w-11/12">
      <time datetime="2020-09-12" className="font-bold opacity-50">
        {date}
      </time>
      <h2 className="font-bold text-2xl leading-10 mt-2 mb-4">
        <a href="/" className="hover:underline">
          {title}
        </a>
      </h2>
      <p className="text-xl opacity-50 mb-4">{text}</p>
      <a href="/" className=" opacity-25 font-bold text-xl ">
        {catagory}
      </a>
    </div>
  )
}

export default function Home({ data }) {
  const { nodes } = data.allMarkdownRemark

  return (
    <div>
      <div className="container ">
        <Header />
        {/* <h1 className="">Thought</h1>
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
        </ul> */}
      </div>
      <Services />
      <Projects />
      {/* <Articles /> */}
      {/* Articles Section */}
      {
        <section className="container m-auto bg-secGrey ">
          <div className="my-12 pt-24">
            <h1 className="uppercase text-6xl font-bold mb-8">Blog</h1>
            <p className="opacity-75 w-1/2">
              All I want is to be a monkey of moderate intelligence who wears a
              suit… that's why I'm transferring to business school! Michelle, I
              don't regret th is, but I both rue and lament it.
            </p>
          </div>
          <div className="grid grid-col1 sm:grid-cols-2 md:grid-cols-3 gap-5 gap-y-10 pb-24">
            {nodes.map(({ frontmatter }) => (
              <Card
                date={frontmatter.date}
                title={frontmatter.title}
                text={frontmatter.introduction}
                to={frontmatter.slug}
                category={frontmatter.category}
              />
            ))}
          </div>
        </section>
      }
      <Footer />
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
          category
        }
      }
    }
  }
`
