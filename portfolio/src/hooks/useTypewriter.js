import { useEffect, useState } from 'react'

/**
 * Cycles through an array of strings with a typewriter effect.
 */
export default function useTypewriter(words = [], { typingSpeed = 70, deletingSpeed = 35, pause = 1600 } = {}) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [text, setText] = useState('')

  useEffect(() => {
    if (!words.length) return

    if (!deleting && subIndex === words[index].length) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }

    if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
      return
    }

    const t = setTimeout(() => {
      setSubIndex((s) => s + (deleting ? -1 : 1))
    }, deleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(t)
  }, [subIndex, deleting, index, words, typingSpeed, deletingSpeed, pause])

  useEffect(() => {
    if (!words.length) return
    setText(words[index].substring(0, subIndex))
  }, [subIndex, index, words])

  return text
}
