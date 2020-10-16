import React from "react"
import { Card } from "./Card"
export const Projects = () => {
  return (
    <section className="container m-auto">
      <div className="pb-16 pt-8">
        <h1 className="uppercase text-6xl font-bold mb-8">Projects</h1>
        <p className="opacity-75 w-6/12">
          All I want is to be a monkey of moderate intelligence who wears a
          suit… that's why I'm transferring to business school! Michelle, I
          don't regret th is, but I both rue and lament it.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5  gap-y-24 pb-24 ">
        <Card
          title="Title"
          text="All I want is to be a monkey of moderate intelligence who wears a suit…
        that's why I'm transferring to business school! Michelle, I don't regret
        this, but I both rue and lament it."
          link1="app store"
          link2="app store"
          link3="app store"
        />
        <Card
          title="Title"
          text="All I want is to be a monkey of moderate intelligence who wears a suit…
        that's why I'm transferring to business school! Michelle, I don't regret
        this, but I both rue and lament it."
          link1="app store"
          link2="app store"
          link3="app store"
        />
        <Card
          title="Title"
          text="All I want is to be a monkey of moderate intelligence who wears a suit…
        that's why I'm transferring to business school! Michelle, I don't regret
        this, but I both rue and lament it."
          link1="app store"
          link2="app store"
          link3="app store"
        />
        <Card
          title="Title"
          text="All I want is to be a monkey of moderate intelligence who wears a suit…
        that's why I'm transferring to business school! Michelle, I don't regret
        this, but I both rue and lament it."
          link1="app store"
          link2="app store"
          link3="app store"
        />
      </div>
    </section>
  )
}
