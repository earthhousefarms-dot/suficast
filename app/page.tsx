'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
  const [currentEpisode, setCurrentEpisode] = useState(null)

  const episodes = [
    {
      id: 1,
      title: "The Whirling Dervishes of Konya",
      description: "Exploring the mystical practice of Sema and its connection to divine love through Rumi's teachings",
      duration: "45:32",
      date: "Dec 15, 2024",
      category: "Practices",
      tradition: "Islamic Sufism"
    },
    {
      id: 2,
      title: "Christian Mystics and the Interior Castle",
      description: "Teresa of Ávila's journey through the seven mansions of the soul and parallels in Sufi thought",
      duration: "38:17",
      date: "Dec 8, 2024",
      category: "Mystical Texts",
      tradition: "Christian Mysticism"
    },
    {
      id: 3,
      title: "The Heart Sutra and Emptiness",
      description: "Buddhist concepts of śūnyatā and their resonance with fanā' in Sufi tradition",
      duration: "52:41",
      date: "Dec 1, 2024",
      category: "Philosophy",
      tradition: "Buddhist-Sufi Dialogue"
    }
  ]

  const themes = [
    { name: "Divine Love", count: 12, color: "bg-rose-100 text-rose-800" },
    { name: "Mystical Union", count: 8, color: "bg-purple-100 text-purple-800" },
    { name: "Sacred Texts", count: 15, color: "bg-blue-100 text-blue-800" },
    { name: "Contemplative Practices", count: 9, color: "bg-green-100 text-green-800" },
    { name: "Interfaith Dialogue", count: 6, color: "bg-amber-100 text-amber-800" }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-40"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <motion.h1
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl font-light text-slate-800"
              >
                SufiCast
              </motion.h1>
              <nav className="hidden md:flex space-x-6 text-sm">
                {['Episodes', 'Themes', 'Books', 'Notes', 'About'].map((item, i) => (
                  <motion.a
                    key={item}
                    href="#"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
                    whileHover={{ y: -2 }}
                    className="text-slate-600 hover:text-slate-900 transition"
                  >
                    {item}
                  </motion.a>
                ))}
              </nav>
            </div>
            <motion.button
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-slate-800 text-white rounded-lg text-sm hover:bg-slate-700 transition"
            >
              Subscribe
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative py-20 px-6 min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/suficastbg.jpg"
            alt="SufiCast Background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl font-light text-white mb-6 leading-tight"
          >
            Exploring the
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="italic text-white/90"
            >
              {' '}Mystical Heart{' '}
            </motion.span>
            Across Traditions
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-xl text-white/90 mb-8 leading-relaxed"
          >
            A podcast journey through Sufism, Christian mysticism, Buddhist contemplation, 
            and the universal quest for divine connection throughout history.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-white text-slate-800 rounded-lg hover:bg-slate-100 transition shadow-lg hover:shadow-xl font-medium"
            >
              ▶ Listen Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-slate-800 transition hover:shadow-lg font-medium"
            >
              View All Episodes
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Featured Episode */}
      <section className="py-16 px-6 bg-slate-100/50">
        <div className="max-w-6xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-light text-slate-800 mb-8 text-center"
          >
            Latest Episode
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8"
          >
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full mb-4"
                >
                  {episodes[0].category}
                </motion.span>
                <motion.h4
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-2xl font-light text-slate-800 mb-3"
                >
                  {episodes[0].title}
                </motion.h4>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-slate-600 mb-4 leading-relaxed"
                >
                  {episodes[0].description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center text-sm text-slate-500 space-x-4"
                >
                  <span>{episodes[0].date}</span>
                  <span>•</span>
                  <span>{episodes[0].duration}</span>
                  <span>•</span>
                  <span>{episodes[0].tradition}</span>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-32 h-32 bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl mb-6 flex items-center justify-center cursor-pointer"
                >
                  <span className="text-4xl">🎧</span>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="px-6 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition"
                >
                  ▶ Play Episode
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Episodes List */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-light text-slate-800 mb-8"
          >
            Recent Episodes
          </motion.h3>
          <div className="space-y-6">
            {episodes.slice(1).map((episode, index) => (
              <motion.div
                key={episode.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 mb-2"
                    >
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        className={`px-2 py-1 text-xs rounded-full ${
                          episode.category === 'Mystical Texts' ? 'bg-purple-100 text-purple-800' :
                          episode.category === 'Philosophy' ? 'bg-green-100 text-green-800' :
                          'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {episode.category}
                      </motion.span>
                      <span className="text-slate-500 text-sm">{episode.tradition}</span>
                    </motion.div>
                    <motion.h4
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-lg font-medium text-slate-800 mb-2"
                    >
                      {episode.title}
                    </motion.h4>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-slate-600 text-sm mb-3"
                    >
                      {episode.description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center text-xs text-slate-500 space-x-3"
                    >
                      <span>{episode.date}</span>
                      <span>•</span>
                      <span>{episode.duration}</span>
                    </motion.div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.2, x: 2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="ml-4 p-2 text-slate-400 hover:text-slate-600 transition"
                  >
                    ▶
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Themes */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-light text-slate-800 mb-8 text-center"
          >
            Explore by Theme
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {themes.map((theme, index) => (
              <motion.div
                key={theme.name}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400 }
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border border-slate-200 rounded-xl p-4 text-center hover:shadow-lg transition-shadow cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className={`inline-block px-3 py-1 rounded-full text-sm mb-2 ${theme.color}`}
                >
                  {theme.count}
                </motion.div>
                <motion.h4
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-slate-800 font-medium text-sm"
                >
                  {theme.name}
                </motion.h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Books & Notes */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-2xl font-light text-slate-800 mb-6"
              >
                Featured Books
              </motion.h3>
              <div className="space-y-4">
                {[
                  { title: "The Essential Rumi", author: "Translations by Coleman Barks", color: "border-rose-300" },
                  { title: "Dark Night of the Soul", author: "St. John of the Cross", color: "border-purple-300" },
                  { title: "The Tao of Physics", author: "Fritjof Capra", color: "border-blue-300" }
                ].map((book, index) => (
                  <motion.div
                    key={book.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 4, transition: { type: "spring", stiffness: 400 } }}
                    className={`border-l-4 ${book.color} pl-4 cursor-pointer`}
                  >
                    <motion.h4 
                      whileHover={{ scale: 1.02 }}
                      className="font-medium text-slate-800"
                    >
                      {book.title}
                    </motion.h4>
                    <p className="text-sm text-slate-600">{book.author}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-2xl font-light text-slate-800 mb-6"
              >
                Study Notes
              </motion.h3>
              <div className="space-y-4">
                {[
                  { 
                    title: "The Seven Valleys", 
                    desc: "Bahá'u'lláh's mystical journey through spiritual development",
                    bgColor: "bg-amber-50",
                    borderColor: "border-amber-300"
                  },
                  { 
                    title: "Contemplatio", 
                    desc: "Medieval Christian contemplative practices and their Sufi parallels",
                    bgColor: "bg-green-50",
                    borderColor: "border-green-300"
                  }
                ].map((note, index) => (
                  <motion.div
                    key={note.title}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.4 + index * 0.1,
                      type: "spring",
                      stiffness: 300
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -4, 
                      scale: 1.02,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                    className={`${note.bgColor} border-l-4 ${note.borderColor} p-4 rounded-r-lg cursor-pointer`}
                  >
                    <motion.h4 
                      whileHover={{ x: 2 }}
                      className="font-medium text-slate-800 mb-1"
                    >
                      {note.title}
                    </motion.h4>
                    <p className="text-sm text-slate-600">{note.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-light text-slate-800 mb-4"
          >
            SufiCast
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-slate-600 mb-6"
          >
            Contemplating the mystical traditions across cultures and centuries
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6 text-sm text-slate-500"
          >
            {['Apple Podcasts', 'Spotify', 'RSS', 'Contact'].map((link, index) => (
              <motion.a
                key={link}
                href="#"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -2, scale: 1.05 }}
                className="hover:text-slate-800 transition"
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </footer>
    </main>
  )
}
