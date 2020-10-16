import React from "react"
import Like from "./Like.svg"
export const Footer = () => {
  var sectionStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${Like})`,
  }
  const Input = ({ type, placeholder }) => {
    return (
      <div className="w-full block">
        <input
          className="appearance-none block w-full text-black text-opacity-50 rounded-lg bg-thirdGrey py-4 px-4 mb-5  focus:outline-none "
          type={type}
          placeholder={placeholder}
        />
      </div>
    )
  }
  const submitHandler = e => {
    e.preventDefault()
  }
  return (
    <footer
      className="bg-no-repeat bg-right   h-full container"
      style={sectionStyle}
    >
      <div className="my-16">
        <h1 className="uppercase text-6xl font-bold mb-8">let’s connect</h1>
        <p className="opacity-75 w-1/2">
          All I want is to be a monkey of moderate intelligence who wears a
          suit… that's why I'm transferring to business school! Michelle, I
          don't regret th is, but I both rue and lament it.
        </p>
      </div>
      <form className="w-7/12 mb-32">
        <div className="flex flex-col">
          <Input type="text" placeholder="Your Name" />
          <Input type="email" placeholder="Email@Exampl.Com" />
          <Input type="text" placeholder="Phone Number" />
          <div>
            <button
              type="submit"
              onClick={submitHandler}
              className="appearance-none block w-full text-black text-opacity-50 rounded-lg bg-fourGrey font-bold py-4 px-4 mb-5  focus:outline-none "
            >
              Send Now
            </button>
          </div>
        </div>
      </form>
      <div className="py-12">
        <span className="font-bold">&#169; 2020 Momen Hesham</span>
      </div>
    </footer>
  )
}
