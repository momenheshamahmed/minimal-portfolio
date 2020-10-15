import React from "react"
import Background from "./stars.svg"
import Star from "./Vector.svg"
export const SectionTwo = () => {
  var sectionStyle = {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${Background})`,
  }
  const Link = ({ text }) => {
    return (
      <li className="flex items-center mb-24">
        <span className="mr-6">
          <img src={Star} />
        </span>
        <a
          href="/"
          className="font-bold uppercase  text-6xl leading-10 tracking-wider hover:underline"
        >
          {text}
        </a>
      </li>
    )
  }
  return (
    <div
      className="bg-no-repeat bg-right bg-primary flex flex-col  justify-center h-full"
      style={sectionStyle}
    >
      <div className="container ">
        <ul className="w-11/12 m-auto h-full flex  flex-col justify-around">
          <Link text="UX Design" />
          <Link text="UI & Interaction Design" />
          <Link text="Product Consultancy" />
        </ul>
      </div>
    </div>
  )
}
