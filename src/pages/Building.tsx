const Projects = () => {

  const projects = [
    {
      id: 1,
      title: "verbalize",
      description:
        "an ai-powered multiplayer game for behavioral interview prep. players compete in live sessions, answer questions out loud, and get instant ai feedback. includes leaderboards and personalized feedback based on your resume.",
      category: "web",
      technologies: ["React", "Redux", "Firebase", "OpenAI", "Web Speech APIs"],
      github: "https://github.com/immedha/behavioral-game",
      demo: "https://verbalizeprep.com",
      date: "April 2025"
    },
    {
      id: 2,
      title: "moments",
      description:
        "a personal career journal to help you remember your career moments for when recruiting time comes. automatically tags your experiences by leadership principles and generates behavioral questions based on your moments.",
      category: "web",
      technologies: ["React", "Whisper", "OpenAI", "TypeScript", "Vite", "TailwindCSS"],
      github: "https://github.com/immedha/moments",
      demo: "https://moments.verbalizeprep.com",
      date: "May 2025"
    },
    {
      id: 3,
      title: "foodography ai",
      description:
        "an app for local restaurants to plan their marketing and promotional content. automatically enhances food photos, generates instagram content, and creates engaging captions and menus.",
      category: "web",
      technologies: ["React", "Redux", "Firebase", "Cloudinary AI", "OpenAI", "OpenCV"],
      github: "https://github.com/immedha/foodography-ai",
      demo: "https://foodai-b9912.web.app/",
      date: "Feb 2025"
    },
    {
      id: 4,
      title: "daily ai challenge",
      description:
        "learn generative ai through daily coding challenges. build your portfolio while solving real problems. includes templates, solutions, and automatic feedback on your submissions.",
      category: "web",
      technologies: ["React", "Redux", "Firebase"],
      github: "https://github.com/immedha/daily-ai-challenge",
      demo: "https://dailyaichallenge.com/",
      date: "Jan 2025"
    },
    {
      id: 5,
      title: "ai autocompleter",
      description:
        "an inline writing assistant that suggests completions as you type. works like github copilot but for general writing. triggers automatically or with cmd-i.",
      category: "web",
      technologies: ["React", "TypeScript", "OpenAI"],
      github: "https://github.com/immedha/ai_auto_complete",
      demo: "https://ai-auto-complete-a3a36.web.app/",
      date: "Nov 2024"
    },
    {
      id: 6,
      title: "carpool schedule",
      description:
        "a scheduling app for families to coordinate carpool pickups and dropoffs. handles schedule generation, role swapping, and holiday management with secure authentication.",
      category: "web",
      technologies: ["React", "Redux", "Firebase"],
      github: "https://github.com/navneet-g/carpoolschedule",
      demo: "https://carpoolschedule.com",
      date: "Oct 2024"
    },
    {
      id: 7,
      title: "battleship bot",
      description:
        "play battleship against an ai opponent that uses probability and strategy to make optimal moves.",
      category: "web",
      technologies: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/immedha/Battleship",
      date: "June 2023"
    },
  ].sort((a, b) => {
    const months = {
      'Jan': 0, 'Feb': 1, 'Mar': 2, 'April': 3, 'May': 4, 'June': 5,
      'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    };
    const [monthA, yearA] = a.date.split(' ');
    const [monthB, yearB] = b.date.split(' ');
    const dateA = new Date(parseInt(yearA), months[monthA as keyof typeof months]);
    const dateB = new Date(parseInt(yearB), months[monthB as keyof typeof months]);
    return dateB.getTime() - dateA.getTime();
  });

  const filteredProjects = projects;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-12">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-4xl font-light text-gray-900 dark:text-white mb-4">things i'm building</h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
            here are some projects that keep me excited about coding. each one taught me something new and pushed me to
            think differently about problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{project.date}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-2 text-sm">{project.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                >
                  view code →
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors text-sm font-medium"
                  >
                    try it out →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
