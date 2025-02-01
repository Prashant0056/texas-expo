"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const items = [1, 2, 3, 4, 5]

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-full rounded-2xl bg-violet-500 overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          className="absolute w-full rounded-lg h-full flex items-center justify-center text-4xl font-bold text-white"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            duration: 0.9,
          }}
          style={{ backgroundColor: `hsl(${currentIndex * 60}, 70%, 50%)` }}
        >
          {items[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
