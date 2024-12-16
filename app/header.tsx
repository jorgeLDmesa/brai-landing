import { motion } from 'framer-motion'
import Link from 'next/link'

export default function BraiHeader() {
  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center relative z-10">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/" className="text-2xl font-bold text-gray-200">
          Brai
        </Link>
      </motion.div>
      <nav>
        <Link href="/portafolio" className="text-gray-200 hover:text-gray-400">
          Portafolio
        </Link>
      </nav>
    </header>
  )
}