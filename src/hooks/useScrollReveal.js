import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    let observer

    const raf = requestAnimationFrame(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -32px 0px' }
      )

      document
        .querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
        .forEach((el) => observer.observe(el))
    })

    return () => {
      cancelAnimationFrame(raf)
      observer?.disconnect()
    }
  }, [])
}
