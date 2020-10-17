import React from "react"
import { useSpring, animated } from "react-spring"

import Frame from "./Frame 3.svg"
import Arrow from "./arrow.svg"
export const Header = () => {
  const Link = ({ text }) => {
    return (
      <a href="/" className=" font-bold uppercase flex items-center pb-5">
        <span className="mr-4 ">
          <img src={Arrow} />
        </span>
        {text}
      </a>
    )
  }
  const props = useSpring({
    from: { opacity: 0, marginRight: -1000 },
    to: {
      opacity: 1,
      marginRight: 0,
    },
    config: { delay: 2000, duration: 2000 },
  })

  return (
    <div className="container m-auto mt-8 mb-16">
      <div className="flex justify-end items-end">
        <Link text="résume" />
      </div>
      <animated.div style={props}>
        <div className="grid grid-cols-1 lg:grid-cols-2 my-48 ">
          <div>
            <h1 className="text-5xl mb-6 font-blod">I'm Momen.</h1>
            <p className="text-3xl mb-12 ">
              Always Curios, Always Questioning!
            </p>
            <button className="bg-primary uppercase font-bold rounded-xlarge py-5 px-10 ">
              let's connect
            </button>
          </div>
          <figure>
            <img src={Frame} className="h-full w-full" />
          </figure>
        </div>
      </animated.div>
      <div className="flex justify-between">
        <div className="w-11/12">
          <a
            href="/"
            className=" font-bold no-underline hover:underline uppercase"
          >
            About
          </a>
          <p className="mt-10 opacity-75 w-1/2">
            I’m an Egyptian designer based in Cairo, currently working as UX/UI
            Designer at
            <a href="/" className="underline">
              Elephats.tech
            </a>
            , where I’m building and desiging new products everyday in different
            such industries with enginners developing that products on such a
            good quality.
          </p>
        </div>
        <div>
          <ul>
            <Link text="résume" />
            <Link text="résume" />
            <Link text="résume" />
            <Link text="résume" />
          </ul>
        </div>
      </div>
    </div>
  )
}
