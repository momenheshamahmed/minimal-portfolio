import React from "react"
import Background from "./stars.svg"
import Star from "./Vector.svg"
export const Services = () => {
  var sectionStyle = {
    width: "100%",
    height: "100vh",
    paddingTop: " 64px",
    paddingBottom: "64px",
    backgroundImage: `url(${Background})`,
  }
  const Service = ({ text }) => {
    return (
      <li className="flex items-center">
        <span className="mr-6">
          <img src={Star} />
        </span>
        <span className="font-bold uppercase  text-6xl leading-10 tracking-wider ">
          {text}
        </span>
      </li>
    )
  }
  return (
    <div
      className="bg-no-repeat bg-right bg-primary flex flex-col  justify-center container m-auto"
      style={sectionStyle}
    >
      <ul className="w-11/12  h-full flex  flex-col justify-around py-16">
        <Service text="UX Design" />
        <Service text="UI & Interaction Design" />
        <Service text="Product Consultancy" />
      </ul>
    </div>
  )
}
