import React from "react"
import Background from "./stars.svg"
import Star from "./Vector.svg"
export const SectionTwo = () => {
  var sectionStyle = {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${Background})`,
  }

  return (
    <div>
      <div
        className="bg-no-repeat bg-right bg-primary flex flex-col  justify-center"
        style={sectionStyle}
      >
        <div className="container ">
          <ul className="w-11/12 m-auto h-full flex  flex-col ">
            <li className="flex items-center mb-48">
              <span className="mr-6">
                <img src={Star} />
              </span>
              <a
                href="/"
                className="font-bold uppercase  text-6xl leading-10 tracking-wider hover:underline"
              >
                UX Design
              </a>
            </li>
            <li className="flex items-center mb-48">
              <span className="mr-6">
                <img src={Star} />
              </span>
              <a
                href="/"
                className="font-bold uppercase  text-6xl leading-10 tracking-wider hover:underline"
              >
                UI & Interaction Design
              </a>
            </li>
            <li className="flex items-center">
              <span className="mr-6">
                <img src={Star} />
              </span>
              <a
                href="/"
                className="font-bold uppercase  text-6xl leading-10 tracking-wider hover:underline"
              >
                Product Consultancy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
