'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Brain, Zap, BarChart3, Eye, MessageSquare, Cpu } from 'lucide-react'
import { ShaderGradient, ShaderGradientCanvas } from 'shadergradient'
import { Inter, Roboto_Mono } from 'next/font/google'
import BraiHeader from './header'

const inter = Inter({ subsets: ['latin'] })
const robotoMono = Roboto_Mono({ subsets: ['latin'] })

export default function BraiLandingPage() {
  return (
    <div className={`min-h-screen bg-black text-white ${inter.className}`}>
      <div className="fixed inset-0 z-0">
        <ShaderGradientCanvas
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <ShaderGradient
            cDistance={6}
            animate="on"
            grain="on"
            cameraZoom={1}
            color1="#2C3E50" //Azul
            color2="#007fcc" //Gris
            color3="#34495E" //Azul
          />
        </ShaderGradientCanvas>
      </div>
      <div className="relative z-10">
        <BraiHeader />
        <main>
          <section className="h-screen flex items-center overflow-hidden">
            <div className="container mx-auto px-4 text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-6xl font-bold mb-6 text-gray-100 tracking-tight"
              >
                Haz Más en Menos Tiempo con Automatización Inteligente
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-2xl mb-8 max-w-3xl mx-auto text-gray-300"
              >
                Potencia tus procesos con Inteligencia Artificial avanzada. Reduce costos hasta un 80% y mejora la eficiencia en más de 1000%.
              </motion.p>
              <motion.a 
                href="mailto:brai.chief@gmail.com?subject=Interesado en servicios de IA&body=Hola, estoy interesado en sus servicios. Quiero unir mi empresa a la ola de la inteligencia artificial."
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-100 text-gray-900 px-10 py-4 rounded-full font-bold text-lg transition-colors duration-300 hover:bg-gray-200 inline-block"
              >
                Comienza Ahora
              </motion.a>
            </div>
          </section>
          <section className="py-32 bg-black/30">
            <div className="container mx-auto px-4">
              <h3 className="text-4xl font-bold mb-16 text-center text-gray-100">Nuestras Soluciones de IA</h3>
              <div className="grid md:grid-cols-3 gap-12">
                <ServiceCard 
                  title="Agentes Autónomos" 
                  items={[
                    "Agentes que optimizan cadenas de suministro",
                    "Asistentes virtuales para atención al cliente 24/7",
                    "Sistemas autónomos para tareas repetitivas"
                  ]}
                  icon={<Brain className="w-14 h-14" strokeWidth={1.0}/>}
                />
                <ServiceCard 
                  title="Chatbots Avanzados" 
                  items={[
                    "Chatbots multilingües para soporte técnico",
                    "Asistentes de ventas virtuales con IA",
                    "Sistemas de reserva y consulta automatizados"
                  ]}
                  icon={<MessageSquare className="w-14 h-14" strokeWidth={1.0}/>}
                />
                <ServiceCard 
                  title="IA Personalizada y Visión Artificial" 
                  items={[
                    "Control de calidad en líneas de producción",
                    "Reconocimiento facial para seguridad",
                    "Análisis de imágenes para extraer información"
                  ]}
                  icon={<Eye className="w-14 h-14" strokeWidth={1.0}/>}
                />
              </div>
            </div>
          </section>

          <section className="container mx-auto px-4 py-32">
            <h3 className="text-4xl font-bold mb-16 text-center text-gray-100">Beneficios Incomparables</h3>
            <div className="grid md:grid-cols-2 gap-16">
              <BenefitCard 
                title="Reducción de Costos"
                description="Disminuye tus gastos operativos entre un 70% y 80%"
                icon={<BarChart3 className="w-14 h-14" />}
              />
              <BenefitCard 
                title="Eficiencia Máxima"
                description="Mejora la velocidad de tus procesos en más de 1000%"
                icon={<Zap className="w-14 h-14" />}
              />
            </div>
          </section>

          <section className="bg-black/30 py-32">
            <div className="container mx-auto px-4 text-center">
              <h3 className="text-4xl font-bold mb-8 text-gray-100">¿Listo para Revolucionar tu Negocio?</h3>
              <motion.a 
                href="mailto:brai.chief@gmail.com?subject=Interesado en revolucionar mi negocio&body=Hola, estoy listo para revolucionar mi negocio con sus soluciones de IA. Me gustaría obtener más información sobre sus servicios."
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-100 text-gray-900 px-10 py-4 rounded-full font-bold text-lg inline-flex items-center transition-colors duration-300 hover:bg-gray-200"
              >
                Contáctanos Ahora <ArrowRight className="ml-2" />
              </motion.a>
            </div>
          </section>
        </main>

        <footer className="py-8 border-t border-gray-800">
          <div className="container mx-auto px-4 text-center text-gray-500">
            2023 Brai. Todos los derechos reservados.
          </div>
        </footer>
      </div>
    </div>
  )
}

interface ServiceCardProps {
  title: string;
  items: string[];
  icon: React.ReactNode;
  description?: string
}

interface BenefitCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

function ServiceCard({ title, items, icon }: ServiceCardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-black/80 p-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-gray-700/50"
    >
      <div className="mb-6 text-gray-300">{icon}</div>
      <h4 className="text-2xl font-bold mb-4 text-gray-100">{title}</h4>
      <ul className="text-gray-400 list-disc list-inside">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </motion.div>
  )
}

function BenefitCard({ title, description, icon }: BenefitCardProps) {
  return (
    <div className="flex items-start">
      <div className="mr-8 text-gray-300">{icon}</div>
      <div>
        <h4 className="text-3xl font-bold mb-4 text-gray-100">{title}</h4>
        <p className="text-gray-400 text-lg">{description}</p>
      </div>
    </div>
  )
}