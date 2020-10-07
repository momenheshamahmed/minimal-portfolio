import React from "react"
import Frame from "./Frame 3.svg"
import Arrow from "./arrow.svg"
export const Header = () => {
  return (
    <div className="w-10/12 m-auto">
      <div className="flex justify-end items-end">
        <a href="/" className="flex items-center font-bold uppercase">
          <span className="mr-4">
            <img src={Arrow} />
          </span>
          résume
        </a>
      </div>
      <div className="flex justify-center my-48 ">
        <div className="w-1/2">
          <h1 className="text-5xl mb-6 font-blod">I'm Momen.</h1>
          <p className="text-3xl mb-12 ">Always Curios, Always Questioning!</p>

          <button className="bg-primary uppercase font-bold rounded-xlarge py-5 px-10 ">
            let's connect
          </button>
        </div>
        <div className="w-1/2">
          <img src={Frame} alt="" />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-1/2">
          <a
            href="/"
            className=" font-bold no-underline hover:underline uppercase"
          >
            About
          </a>
          <p className="mt-10 opacity-75">
            I’m an Egyptian designer based in Cairo, currently working as UX/UI
            Designer at{" "}
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
            <li>
              <a
                href="/"
                className="flex items-center font-bold uppercase mb-6"
              >
                <span className="mr-4">
                  <img src={Arrow} />
                </span>
                résume
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center font-bold uppercase mb-6"
              >
                <span className="mr-4">
                  <img src={Arrow} />
                </span>
                résume
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center font-bold uppercase mb-6"
              >
                <span className="mr-4">
                  <img src={Arrow} />
                </span>
                résume
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center font-bold uppercase mb-6"
              >
                <span className="mr-4">
                  <img src={Arrow} />
                </span>
                résume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
