import { useEffect, useState } from "react"

const FloatingElements = () => {
  const [elements, setElements] = useState<
    Array<{
      id: number
      x: number
      y: number
      emoji: string
      size: number
      speed: number
      rotation: number
    }>
  >([])

  useEffect(() => {
    const emojis = ["🌱", "💻", "✨", "🚀", "🤖", "📚", "💡", "🎨", "⚡", "🔬"]

    const newElements = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      size: Math.random() * 0.5 + 0.8,
      speed: Math.random() * 0.5 + 0.2,
      rotation: Math.random() * 360,
    }))

    setElements(newElements)
  }, [])

  useEffect(() => {
    const animateElements = () => {
      setElements((prev) =>
        prev.map((element) => ({
          ...element,
          y: element.y > window.innerHeight + 100 ? -100 : element.y + element.speed,
          x: element.x + Math.sin(element.y * 0.01) * 0.3,
          rotation: element.rotation + 0.1,
        })),
      )
    }

    const interval = setInterval(animateElements, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {elements.map((element) => (
        <div
          key={element.id}
          className="floating-element absolute"
          style={{
            left: `${element.x}px`,
            top: `${element.y}px`,
            transform: `rotate(${element.rotation}deg) scale(${element.size})`,
            fontSize: "1.5rem",
          }}
        >
          {element.emoji}
        </div>
      ))}
    </div>
  )
}

export default FloatingElements
