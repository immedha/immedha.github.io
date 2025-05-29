const About = () => {
  const skills = [
    { name: "Python", level: 90, emoji: "🐍", thought: "my first love in programming" },
    { name: "JavaScript/TypeScript", level: 85, emoji: "⚡", thought: "the language of the web" },
    { name: "React", level: 80, emoji: "⚛️", thought: "building beautiful interfaces" },
    { name: "Machine Learning", level: 75, emoji: "🤖", thought: "teaching computers to think" },
    { name: "Java", level: 70, emoji: "☕", thought: "solid and reliable" },
    { name: "C++", level: 65, emoji: "🔧", thought: "when performance matters" },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-16 animate-fade-in-up">
          <h1 className="text-4xl font-light text-gray-900 dark:text-white mb-6">about me</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              i'm a computer science student at the university of washington, and honestly, i can't imagine doing
              anything else. there's something magical about turning ideas into reality through code.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              my journey started with curiosity - how do apps work? how does ai actually "think"? how can we make
              technology more human? these questions keep me up at night (in the best way possible).
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              when i'm not coding, you'll find me curating playlists, discovering new youtube channels about ai
              research, or just enjoying the simple beauty of a well-designed interface. i believe technology should
              feel like magic, not a chore.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-8">what i work with</h2>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xl group-hover:scale-110 transition-transform">{skill.emoji}</span>
                    <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                  </div>
                  <span className="text-sm text-green-600 dark:text-green-400 font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                  <div
                    className="bg-green-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">{skill.thought}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-8">what drives me</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 transition-all duration-300">
              <div className="text-2xl mb-3">✨</div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">beautiful code</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                code should be elegant, readable, and purposeful. every line should tell a story.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 transition-all duration-300">
              <div className="text-2xl mb-3">🤝</div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">collaboration</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                the best solutions come from diverse minds working together towards a common goal.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 transition-all duration-300">
              <div className="text-2xl mb-3">🌱</div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">continuous growth</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                technology evolves fast, and so should we. always learning, always improving.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 transition-all duration-300">
              <div className="text-2xl mb-3">💡</div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">human-centered design</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                technology should enhance human experiences, not complicate them.
              </p>
            </div>
          </div>
        </div>

        {/* Fun facts */}
        <div>
          <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-8">random facts about me</h2>
          <div className="space-y-4">
            {[
              { emoji: "🌙", text: "i do my best coding between 10pm and 2am" },
              { emoji: "🎵", text: "my coding playlist is 80% lofi hip hop, 20% classical" },
              { emoji: "☕", text: "powered by matcha lattes and good vibes" },
              { emoji: "📱", text: "i have way too many productivity apps installed" },
              { emoji: "🦋", text: "i believe in the butterfly effect of small code changes" },
            ].map((fact, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
              >
                <span className="text-xl">{fact.emoji}</span>
                <span className="text-gray-600 dark:text-gray-300">{fact.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About 