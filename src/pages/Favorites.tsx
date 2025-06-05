import { useState } from "react"

const Resources = () => {
  const [activeTab, setActiveTab] = useState("youtube")

  const youtubeChannels = [
    {
      name: "3blue1brown",
      description:
        "he explains the core fundamentals of every topic, has great visualizations. he never lets me get away with learning the surface level.",
      url: "https://www.youtube.com/@3blue1brown",
      emoji: "🧮",
      thought: "carried me through lin alg and ml",
    },
    {
      name: "the organic chemistry tutor",
      description:
        "he explained practice problems for chemistry, physics, and math super well.",
      url: "https://www.youtube.com/@TheOrganicChemistryTutor",
      emoji: "🧪",
      thought: "carried me through intro chem and math 12x",
    },
    {
      name: "blackpenredpen",
      description:
        "went through practice problems really well in math",
      url: "https://www.youtube.com/@blackpenredpen",
      emoji: "🔏",
      thought: "carried me through calc 1-3 and differential equations",
    },
    {
      name: "khan academy",
      description: "the og of online learning. helped me through so many concepts, especially during sat/act prep days.",
      url: "https://www.youtube.com/@khanacademy",
      emoji: "🎓",
    },
    {
      name: "programming with mosh",
      description: "my go-to for learning new programming languages or frameworks",
      url: "https://www.youtube.com/@programmingwithmosh",
      emoji: "🧑‍💻",
    },
    {
      name: "andrej karpathy",
      description: "explained all the fundamentals of ml",
      url: "https://www.youtube.com/@AndrejKarpathy",
      emoji: "🤖",
    },
    {
      name: "neetcode",
      description: "the og of leetcode prep. the best thing I learned from him is that it's not cheating if you look at the solution to the problem when practicing",
      url: "https://www.youtube.com/@NeetCode",
      emoji: "🔑",
    },
    {
      name: "abdul bari",
      description: "explained all the algorithms in an intuitive way",
      url: "https://www.youtube.com/@abdul_bari",
      emoji: "🤔",
    },
    {
      name: "nick white",
      description: "explained all easy/medium leetcode problems in an intuitive way",
      url: "https://www.youtube.com/@NickWhite",
      emoji: "👔",
    },
    {
      name: "gate smashers",
      description: <span>i didn't watch this myself, but it was recommended by <a href="https://shashanksree.com" target="_blank" rel="noopener noreferrer" className="text-green-600 dark:text-green-400 hover:underline">shashank sreepathi</a>. apparently great for operating systems</span>,
      url: "https://www.youtube.com/@GateSmashers",
      emoji: "💻",
    },
    {
      name: "boris meinardus",
      description: "does awesome ai coding tutorials",
      url: "https://www.youtube.com/@borismeinardus",
      emoji: "🤖",
    },
  ]

  const websites = [
    {
      name: "freecodecamp",
      description: "great for intro to programming",
      url: "https://www.freecodecamp.org/",
      emoji: "🧑‍💻",
    },
    {
      name: "scrimba",
      description: "great frontend tutorials. they had a really unique tutorial where you can type code in the video itself",
      url: "https://scrimba.com/home",
      emoji: "🤩",
    },
    {
      name: "coursera stanford ml specialization w/ andrew ng",
      description: "great for learning basic and advanced ml concepts",
      url: "https://www.coursera.org/specializations/machine-learning-introduction#courses",
      emoji: "🤖",
    },
  ]

  const tools = [
    {
      name: "notion",
      description:
        "my second brain. everything from class notes to project planning lives here. it is both super aesthetic and super functional",
      url: "https://www.notion.com/",
      emoji: "📝",
    },
    {
      name: "cursor",
      description: "the best code editor i've used. it's like having a personal assistant that writes code for you",
      url: "https://www.cursor.com/",
      emoji: "👌",
      thought: "you'll never go back to vscode or copilot",
    },
    {
      name: "v0.dev",
      description:
        "makes really nice frontend. the only issue is you only get 10 free messages per day",
      url: "https://v0.dev",
      emoji: "🛠️",
    },
  ]

  const tabs = [
    { id: "youtube", label: "youtube", emoji: "📺" },
    { id: "tools", label: "tools", emoji: "🛠️" },
    { id: "websites", label: "websites", emoji: "🌐" },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-12">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-4xl font-light text-gray-900 dark:text-white mb-6">things i love</h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
            here's my curated collection of resources that have shaped my learning journey. these tools, channels, and
            websites have made me a better developer and thinker.
          </p>
        </div>

        <div className="flex gap-4 mb-12 border-b border-gray-200 dark:border-gray-700">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all duration-300 border-b-2 ${
                activeTab === tab.id
                  ? "text-green-600 dark:text-green-400 border-green-500"
                  : "text-gray-600 dark:text-gray-400 border-transparent hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              <span>{tab.emoji}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {activeTab === "youtube" && (
            <div className="space-y-6">
              {youtubeChannels.map((channel, index) => (
                <div
                  key={channel.name}
                  className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{channel.emoji}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-medium text-gray-900 dark:text-white">{channel.name}</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">{channel.description}</p>
                      {channel.thought && <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-4">"{channel.thought}"</p>}
                      <a
                        href={channel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors text-sm font-medium"
                      >
                        watch channel →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "tools" && (
            <div className="space-y-6">
              {tools.map((tool, index) => (
                <div
                  key={tool.name}
                  className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{tool.emoji}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-medium text-gray-900 dark:text-white">{tool.name}</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">{tool.description}</p>
                      {tool.thought && <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-4">"{tool.thought}"</p>}
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors text-sm font-medium"
                      >
                        try it out →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "websites" && (
            <div className="space-y-6">
              {websites.map((website, index) => (
                <div
                  key={website.name}
                  className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{website.emoji}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-medium text-gray-900 dark:text-white">{website.name}</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">{website.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Resources
