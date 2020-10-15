import React from "react"

export const Card = ({ title, text, link1, link2, link3 }) => {
  return (
    <div className="p-10  border-solid border-2 border-grey rounded-xlarge  flex-shrink">
      <h1 className="text-6xl font-bold mb-10">{title}</h1>
      <p className="mb-10 w-10/12 text-xl opacity-50">{text}</p>
      <ul className="flex">
        <li>
          <a href="/" className="uppercase underline">
            {link1}
          </a>
        </li>
        <li className="ml-8">
          <a href="/" className="uppercase underline">
            {link2}
          </a>
        </li>
        <li className="ml-8">
          <a href="/" className="uppercase underline">
            {link3}
          </a>
        </li>
      </ul>
    </div>
  )
}
