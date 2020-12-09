import React from "react"

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
export const Articles = () => {
  return (
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
        <Card
          date="12.9.2020"
          title="All I want is to be a monkey of moderate intelligence who wears a suit… that's why I'm transferring to business school! Michelle."
          text="All I want is to be a monkey of moderate intelligence who wears a suit… that's why I'm transferring to business school! Michelle, I don't regret this, but I both rue and lament it..."
          catagory="User Research"
        />
        <Card
          date="12.9.2020"
          title="All I want is to be a monkey of moderate intelligence who wears a suit… that's why I'm transferring to business school! Michelle."
          text="All I want is to be a monkey of moderate intelligence who wears a suit… that's why I'm transferring to business school! Michelle, I don't regret this, but I both rue and lament it..."
          catagory="User Research"
        />
        <Card
          date="12.9.2020"
          title="All I want is to be a monkey of moderate intelligence who wears a suit… that's why I'm transferring to business school! Michelle."
          text="All I want is to be a monkey of moderate intelligence who wears a suit… that's why I'm transferring to business school! Michelle, I don't regret this, but I both rue and lament it..."
          catagory="User Research"
        />
        <Card
          date="12.9.2020"
          title="All I want is to be a monkey of moderate intelligence who wears a suit… that's why I'm transferring to business school! Michelle."
          text="All I want is to be a monkey of moderate intelligence who wears a suit… that's why I'm transferring to business school! Michelle, I don't regret this, but I both rue and lament it..."
          catagory="User Research"
        />
        <Card
          date="12.9.2020"
          title="All I want is to be a monkey of moderate intelligence who wears a suit… that's why I'm transferring to business school! Michelle."
          text="All I want is to be a monkey of moderate intelligence who wears a suit… that's why I'm transferring to business school! Michelle, I don't regret this, but I both rue and lament it..."
          catagory="User Research"
        />
        <Card
          date="12.9.2020"
          title="All I want is to be a monkey of moderate intelligence who wears a suit… that's why I'm transferring to business school! Michelle."
          text="All I want is to be a monkey of moderate intelligence who wears a suit… that's why I'm transferring to business school! Michelle, I don't regret this, but I both rue and lament it..."
          catagory="User Research"
        />
      </div>
    </section>
  )
}
