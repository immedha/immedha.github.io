const Education = () => {
  const courses = [
    {
      code: "CSE 421",
      name: "Intro to Algorithms",
      grade: "A",
      logo: "/logos/uw.png",
      thought: "this was the hardest cs class i've taken but worth it in retrospect. one of the only classes that made me appreciate theory, and was super helpful for interviewing and OAs",
    },
    {
      code: "CSE 403",
      name: "Software Engineering",
      grade: "A",
      logo: "/logos/uw.png",
      thought: "this class taught me so much about the SDLC and collaborating in a coding project. i ended up making the project @foodography-ai with my team",
    },
    {
      code: "ENTRE 432",
      name: "Software Entrepreneurship",
      grade: "A",
      logo: "/logos/uw.png",
      thought: "this was the best entrepreneurship class i've ever taken, and it taught me the vocabulary and frameworks to understand startups. i made a company @hobby-hub with my team",
    },
    {
      code: "CSE 312",
      name: "Foundations of Computing",
      grade: "A",
      logo: "/logos/uw.png",
      thought: "i never understood probability in middle school competition math, but this class made it all click. it made middle school me very proud",
    },
    
    {
      code: "CSE 451",
      name: "Operating Systems",
      grade: "A",
      logo: "/logos/uw.png",
      thought: <span>"i think it's sad if you graduate cs and don't know operating systems" (<a href="https://shashanksree.com" target="_blank" rel="noopener noreferrer" className="text-green-600 dark:text-green-400 hover:underline">shashank sreepathi</a>). this class answered all my childhood questions about how computers work and what it means for the computer to process 1s and 0s. i made an operating system, xk, in this class</span>,
    },
    {
      code: "CSE 391",
      name: "Software Tools",
      grade: "A",
      logo: "/logos/uw.png",
      thought: "i was so intimidated by the command line previously, but within 5 minutes of being in this class it all clicked. can't believe i ever found it confusing",
    },
    {
      code: "CSE 154",
      name: "Web Development",
      grade: "A",
      logo: "/logos/uw.png",
      thought: "this wasn't just another web dev tutorial - it actually taught me all the fundamentals like the dom, promises, and anonymous functions",
    },
    {
      code: "CSE 447",
      name: "Natural Language Processing",
      grade: "A",
      logo: "/logos/uw.png",
      thought: "helped me apply all my ml knowledge in a really interesting field",
    },
    {
      code: "CSE 455",
      name: "Computer Vision",
      grade: "A",
      logo: "/logos/uw.png",
      thought: "the professor's enthusiasm really made the class interesting. was able to apply so much of my cv knowledge in @foodography-ai",
    },
  ]

  const achievements = [
    
    { title: "cseed buildspace", description: "cohort 3 member, made verbalize", emoji: "👩‍💻" },
    { title: "6x TA", description: "cse 123, 331, 332, 403", emoji: "👩‍🏫" },
    { title: "undergraduate researcher", description: "neural systems lab", emoji: "🧠" },
    { title: "Robinson Center ", description: "eep student", emoji: "🏫" },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-12">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-4xl font-light text-gray-900 dark:text-white mb-6">uw</h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
            every class, every project, every late night debugging session has shaped how i think about technology.
            here are courses that have shaped me.
          </p>
        </div>

        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {courses.map((course, index) => (
              <div
                key={course.code}
                className="group p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium text-gray-900 dark:text-white text-base mb-2">{course.name}</h3>
                      <span className="font-mono text-sm text-green-600 dark:text-green-400">{course.code}</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic">{course.thought}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-light text-gray-900 dark:text-white mb-4">things i'm involved in at uw</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="grid grid-cols-1 gap-4">
              {achievements.slice(0, 2).map((achievement, index) => (
                <div
                  key={achievement.title}
                  className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{achievement.emoji}</span>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white text-sm">{achievement.title}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-4">
              {achievements.slice(2).map((achievement, index) => (
                <div
                  key={achievement.title}
                  className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 transition-all duration-300"
                  style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{achievement.emoji}</span>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white text-sm">{achievement.title}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 content-start">
              {[
                { name: "Women in Computing", emoji: "👩‍💻" },
                { name: "Husky Coding Project", emoji: "🐺" },
                { name: "Software Engineering Career Club", emoji: "💼" },
                { name: "DubHacks", emoji: "⚡" },
                { name: "Synaptech", emoji: "🧠" }
              ].map((club, index) => (
                <div
                  key={club.name}
                  className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1.5 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span>{club.emoji}</span>
                  <span>{club.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
