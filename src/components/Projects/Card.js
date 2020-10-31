import React from "react"

export const Card = ({ title, text, link1, link2, link3, href1, href2, href3 }) => {
  return (
    <div className="p-10  border-solid border-2 border-grey rounded-xlarge  flex-shrink">
      <h1 className="text-6xl font-bold mb-10">{title}</h1>
      <p className="mb-10 w-10/12 text-xl opacity-50">{text}</p>
      {(link1 && href1) || (link2 && href2) || (link3 && href3) ? (
        <ul className="flex">
          {link1 && href1 ? (
            <li className="ml-8">
              <a href={href1} target="_blank" className="uppercase underline">
                {link1}
              </a>
            </li>
          ) : null}
          {link2 && href2 ? (
            <li className="ml-8">
              <a href={href2} target="_blank" className="uppercase underline">
                {link2}
              </a>
            </li>
          ) : null}
          {link3 && href3 ? (
            <li className="ml-8">
              <a href={href3} target="_blank" className="uppercase underline">
                {link3}
              </a>
            </li>
          ) : null}
        </ul>
      ) : null}
    </div>
  )
}
