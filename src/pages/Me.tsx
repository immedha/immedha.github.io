"use client"

import { useState, useEffect } from "react"

const Home = () => {
  const [currentThought, setCurrentThought] = useState(0)
  const thoughts = [
    "building the future with code",
    "exploring AI and machine learning",
    "creating beautiful user experiences",
    "solving problems through technology",
    "learning something new every day",
  ]


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentThought((prev) => (prev + 1) % thoughts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [thoughts.length])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-12">
      {/* Floating elements */}
      <div className="floating-element top-12 left-10 text-2xl">🌱</div>
      <div className="floating-element top-32 right-20 text-xl">💻</div>
      <div className="floating-element top-48 left-1/4 text-lg">✨</div>
      <div className="floating-element bottom-32 right-10 text-xl">🚀</div>
      <div className="floating-element bottom-48 left-20 text-lg">🤖</div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in-up flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-1 w-full">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-3">
              hey, i'm <span className="font-medium text-green-600 dark:text-green-400">medha</span> 👋
            </h1>
            <div className="h-6 mb-4">
              <p className="text-xl text-gray-600 dark:text-gray-300 font-light">
                {thoughts.map((thought, index) => (
                  <span
                    key={index}
                    className={`absolute transition-all duration-500 ${
                      index === currentThought ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                    }`}
                  >
                    {thought}
                  </span>
                ))}
              </p>
            </div>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
              welcome to my little corner of the internet. this is where i document my journey through computer science,
              share things i'm building, and collect resources that inspire me. think of it as my digital brain 🧠
            </p>
          </div>
          <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={"/medha_msft.jpg"}
                alt="Medha"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-100`}
              />
          </div>
        </div>

        {/* Skills */}
        <div className="mb-8">
          <h2 className="text-xl font-light text-gray-900 dark:text-white mb-4">what i work with</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { skill: "Python 🐍", tooltip: "my leetcode love" },
              { skill: "Java ☕", tooltip: "my first love" },
              { skill: "TypeScript ⚡", tooltip: "if you make me code in javascript, i will quit" },
              { skill: "React ⚛️", tooltip: "the goat" }
            ].map(({ skill, tooltip }) => (
              <span 
                key={skill}
                className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm relative group"
              >
                {skill}
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {tooltip}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-8">
          <h2 className="text-xl font-light text-gray-900 dark:text-white mb-4">what drives me</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { emoji: "✨", text: "beautiful code" },
              { emoji: "😩", text: "linkedin fomo" },
              { emoji: "🌱", text: "continuous growth" },
              { emoji: "🚀", text: "shipping fast" }
            ].map((value) => (
              <div key={value.text} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <span>{value.emoji}</span>
                <span>{value.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Fun facts */}
        <div>
          <h2 className="text-xl font-light text-gray-900 dark:text-white mb-4">random facts about me</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { emoji: "❄️", text: "love winter" },
              { emoji: "🎵", text: "bollywood coding playlist" },
              { emoji: "🫆", text: "love to bing crime shows" },
              { emoji: "🕵️", text: "wannabe fbi agent in another life" },
            ].map((fact) => (
              <div key={fact.text} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <span>{fact.emoji}</span>
                <span>{fact.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
