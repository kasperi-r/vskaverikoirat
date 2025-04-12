"use client"

import { useEffect, useState } from "react"

export function useScrollEffect() {
  const [scrollY, setScrollY] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if we're on a mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    // Add event listeners
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", checkMobile, { passive: true })

    // Call handlers right away to update initial state
    handleScroll()
    checkMobile()

    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  return { scrollY, isMobile }
}
