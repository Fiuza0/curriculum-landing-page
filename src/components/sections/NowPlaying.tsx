'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Music, Headphones } from 'lucide-react'

const tracks = [
  { title: 'Coding Flow', artist: 'Lo-fi Beats', duration: '3:42' },
  { title: 'Deep Focus', artist: 'Ambient Sounds', duration: '4:15' },
  { title: 'Algorithm', artist: 'Chillstep', duration: '2:58' },
]

export default function NowPlaying() {
  const [currentTrack, setCurrentTrack] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          setCurrentTrack((t) => (t + 1) % tracks.length)
          return 0
        }
        return p + 0.5
      })
    }, 100)
    return () => clearInterval(interval)
  }, [isPlaying])

  const track = tracks[currentTrack]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-6 left-6 z-40 hidden lg:block"
    >
      <div className="bg-card/90 backdrop-blur-xl border border-border/50 rounded-2xl p-4 shadow-lg hover:shadow-xl hover:border-emerald-500/15 transition-all duration-300 group max-w-[220px]">
        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
            <Headphones className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">Now Playing</span>
          <div className="ml-auto flex items-center gap-0.5">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={isPlaying ? { height: [4, 12, 4] } : { height: 4 }}
                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
                className="w-1 bg-emerald-500/60 rounded-full"
                style={{ height: 4 }}
              />
            ))}
          </div>
        </div>

        {/* Track info */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTrack}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-sm font-medium truncate">{track.title}</p>
            <p className="text-xs text-muted-foreground truncate">{track.artist}</p>
          </motion.div>
        </AnimatePresence>

        {/* Progress bar */}
        <div className="mt-3 space-y-1">
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-[9px] text-muted-foreground">
            <span>{Math.floor(progress * 0.024 * 60)}:{String(Math.floor((progress * 0.024 * 60) % 1 * 60)).padStart(2, '0')}</span>
            <span>{track.duration}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3 mt-2">
          <button
            onClick={() => {
              setCurrentTrack((t) => (t - 1 + tracks.length) % tracks.length)
              setProgress(0)
            }}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Music className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white flex items-center justify-center hover:shadow-md hover:shadow-emerald-500/20 transition-shadow"
          >
            {isPlaying ? (
              <div className="flex gap-0.5">
                <div className="w-1 h-2.5 bg-white rounded-sm" />
                <div className="w-1 h-2.5 bg-white rounded-sm" />
              </div>
            ) : (
              <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[7px] border-l-white ml-0.5" />
            )}
          </button>
          <button
            onClick={() => {
              setCurrentTrack((t) => (t + 1) % tracks.length)
              setProgress(0)
            }}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Music className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
