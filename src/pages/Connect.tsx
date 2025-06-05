import type React from "react"
import { useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Message from ${formData.name}`
    const body = `From: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    const mailtoUrl = `mailto:immedha@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoUrl
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const socialLinks = [
    { name: "Email", url: "mailto:immedha@outlook.com", emoji: "💌", handle: "immedha@outlook.com" },
    { name: "LinkedIn", url: "https://linkedin.com/in/immedha", emoji: "💼", handle: "/in/immedha" },
    { name: "GitHub", url: "https://github.com/immedha", emoji: "🐙", handle: "@immedha" },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-12">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-4xl font-light text-gray-900 dark:text-white mb-6">let's connect</h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
            i love meeting new people and talking about technology, projects, or just life in general. feel free to
            reach out - i promise i'm friendlier than my code comments suggest 😄
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-6">find me online</h2>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform">{link.emoji}</span>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">{link.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{link.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h3 className="font-medium text-gray-900 dark:text-white mb-4">my resume</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                want to see my full background and experience?
              </p>
              <a
                href="/MedhaGupta_Resume_New.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm font-medium"
              >
                <span>📄</span>
                download resume
              </a>
            </div>
          </div>

          <div className="p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-600 transition-all duration-300">
            <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-6">send me a message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="what's your name?"
                  required
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="tell me what's on your mind! i'd love to hear about your projects, ideas, or just say hi 👋"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                send message ✨
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
