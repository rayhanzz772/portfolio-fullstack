"use client"

import { motion, useTime, useTransform } from "framer-motion"

export default function AnimatedBackground() {
  const time = useTime()
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false })

  const tinyBox = {
    width: 40,
    height: 40,
    backgroundColor: "rgb(161, 255, 20)",
    borderRadius: 5,
    rotate: useTransform(() => rotate.get() * 2),
  }

  const smallBox = {
    width: 80,
    height: 80,
    backgroundColor: "#dd00ee",
    borderRadius: 5,
    rotate: useTransform(() => rotate.get() * 1.5),
  }

  const box = {
    width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: 5,
    rotate,
  }

  return (
    <>
      <div style={{ ...layerStyle, filter: "blur(2px)" }}>
        <div style={{ ...boxContainer, width: 500, gap: 80 }}>
          {Array.from({ length: 16 }).map((_, i) => (
            <motion.div key={i} style={tinyBox} />
          ))}
        </div>
      </div>

    </>
  )
}

const layerStyle = {
  position: "absolute",
  bottom: 0,
  right: 0,
  width: "100%",
  height: "25%",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  padding: "2rem",
  pointerEvents: "none",
  zIndex: 0,
}

const boxContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 50,
  flexWrap: "wrap",
}
