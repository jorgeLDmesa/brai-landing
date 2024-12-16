"use client";

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import BraiHeader from '../header'

interface Project {
  title: string;
  description: string;
  images: string[];
}

const projects: Project[] = [
  {
    title: "Automatización de Procesos Bancarios",
    description: "Implementamos un sistema de IA que redujo el tiempo de procesamiento de préstamos en un 75%.",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    title: "Sistema de Visión Artificial para Control de Calidad",
    description: "Desarrollamos un sistema que aumentó la precisión de detección de defectos en un 95% para una fábrica de electrónicos.",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    title: "Asistente Virtual para Atención al Cliente",
    description: "Creamos un agente de IA que maneja el 80% de las consultas de clientes sin intervención humana.",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    title: "Optimización de Cadena de Suministro",
    description: "Implementamos un sistema de IA que redujo los costos de logística en un 30% y mejoró la eficiencia de entrega en un 40%.",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
]

export default function Brai3DPortfolioSliders() {
  return (
    <div>
      <BraiHeader />
    <section className="py-32 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-16 text-center text-gray-100">Nuestro Portafolio</h2>
        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectSlider key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

function ProjectSlider({ project }: { project: Project }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % project.images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length)
  }

  return (
    <div className="relative h-[600px]">
      <AnimatePresence initial={false}>
        {project.images.map((image, index) => (
          <motion.div
            key={index}
            className="absolute top-0 left-0 w-full h-full"
            initial={{ scale: 0.8, rotateY: -90, opacity: 0 }}
            animate={{
              scale: index === currentIndex ? 1 : 0.8,
              rotateY: index === currentIndex ? 0 : index > currentIndex ? 90 : -90,
              opacity: index === currentIndex ? 1 : 0,
              z: index === currentIndex ? 1 : 0,
            }}
            exit={{ scale: 0.8, rotateY: 90, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl h-full flex flex-col">
              <div className="relative flex-grow">
                <div className="w-full h-full" style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  width: '800px',
                  height: '600px',
                }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              </div>
              <div className="p-8 absolute bottom-0 left-0 right-0">
                <h3 className="text-3xl font-bold mb-4 text-gray-100">{project.title}</h3>
                <p className="text-xl text-gray-300">{project.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full z-10 hover:bg-opacity-75 transition-all"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full z-10 hover:bg-opacity-75 transition-all"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  )
}