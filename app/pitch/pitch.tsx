'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Brain, Zap, BarChart3, Shield, Users, FileText } from 'lucide-react'
import { ShaderGradient, ShaderGradientCanvas } from 'shadergradient'
import { Inter, Roboto_Mono } from 'next/font/google'
import BraiHeader from '../header'

const inter = Inter({ subsets: ['latin'] })
const robotoMono = Roboto_Mono({ subsets: ['latin'] })

export default function PitchPresentation() {
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
            color1="#2C3E50"
            color2="#007fcc"
            color3="#34495E"
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
                Revoluciona la Creación de Documentos con IA
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-2xl mb-8 max-w-3xl mx-auto text-gray-300"
              >
                Las empresas y profesionales enfrentan una creciente necesidad de generar documentos personalizados de alta calidad de manera eficiente. Sin embargo, las soluciones actuales no permiten personalización sin procesos manuales extensos o carecen de automatización sofisticada.
              </motion.p>
            </div>
          </section>

          <section className="py-32 bg-black/30">
            <div className="container mx-auto px-4">
              <h3 className="text-4xl font-bold mb-16 text-center text-gray-100">El Problema</h3>
              <div className="grid md:grid-cols-2 gap-12">
                <ProblemCard 
                  title="Pérdida de Tiempo" 
                  description="Más del 70% de las empresas pierde tiempo valioso adaptando manualmente documentos. Esta falta de eficiencia impacta la productividad."
                  icon={<BarChart3 className="w-14 h-14" strokeWidth={1.0}/>}
                />
                <ProblemCard 
                  title="Falta de Soluciones Integrales" 
                  description="El mercado carece de una herramienta que combine personalización basada en datos y automatización eficiente para documentos críticos como contratos y reportes."
                  icon={<FileText className="w-14 h-14" strokeWidth={1.0}/>}
                />
              </div>
            </div>
          </section>

          <section className="py-32">
            <div className="container mx-auto px-4">
              <h3 className="text-4xl font-bold mb-16 text-center text-gray-100">Nuestra Solución: [Nombre de la SaaS]</h3>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-2xl mb-12 max-w-3xl mx-auto text-center text-gray-300"
              >
                Una plataforma de automatización documental impulsada por Inteligencia Artificial que permite generar documentos personalizados con solo subir un archivo o ingresar texto.
              </motion.p>
              <div className="grid md:grid-cols-3 gap-12">
                <FeatureCard 
                  title="Automatización basada en IA" 
                  description="Reduce el tiempo de edición significativamente"
                  icon={<Brain className="w-14 h-14" strokeWidth={1.0}/>}
                />
                <FeatureCard 
                  title="Personalización ilimitada" 
                  description="Mantén el control total sobre el contenido"
                  icon={<Zap className="w-14 h-14" strokeWidth={1.0}/>}
                />
                <FeatureCard 
                  title="Facilidad de uso" 
                  description="Plataforma intuitiva y accesible desde cualquier dispositivo"
                  icon={<Users className="w-14 h-14" strokeWidth={1.0}/>}
                />
              </div>
            </div>
          </section>

          <section className="py-32 bg-black/30">
            <div className="container mx-auto px-4">
              <h3 className="text-4xl font-bold mb-16 text-center text-gray-100">Modelo de Negocio</h3>
              <div className="grid md:grid-cols-2 gap-12">
                <BusinessModelCard 
                  title="Venta Directa" 
                  description="Los usuarios individuales pueden acceder a plantillas y pagar por documento o por suscripción mensual."
                />
                <BusinessModelCard 
                  title="Planes Empresariales" 
                  description="Soluciones personalizadas con un enfoque en necesidades específicas, optimizadas para grandes volúmenes y documentos críticos."
                />
              </div>
              <div className="mt-12 text-center">
                <p className="text-xl text-gray-300">Planes desde [X precio], con descuentos por volumen.</p>
                <p className="text-xl text-gray-300">Opción freemium para atraer nuevos usuarios.</p>
              </div>
            </div>
          </section>

          <section className="py-32">
            <div className="container mx-auto px-4">
              <h3 className="text-4xl font-bold mb-16 text-center text-gray-100">Diferenciadores Clave</h3>
              <div className="grid md:grid-cols-2 gap-12">
                <DifferentiatorCard 
                  title="IA avanzada para personalización en tiempo real" 
                  description="Capacidad de hacer modificaciones precisas sin intervención manual extensa."
                />
                <DifferentiatorCard 
                  title="Control total del usuario" 
                  description="Los documentos generados pueden ser editados manualmente en cualquier momento."
                />
                <DifferentiatorCard 
                  title="Seguridad en la nube" 
                  description="Los documentos están protegidos y disponibles desde cualquier dispositivo."
                />
                <DifferentiatorCard 
                  title="Ecosistema de expertos" 
                  description="Plantillas creadas por profesionales de cada sector, con actualizaciones continuas y participaciones en ingresos para ellos."
                />
              </div>
            </div>
          </section>

          <section className="py-32 bg-black/30">
            <div className="container mx-auto px-4 text-center">
              <h3 className="text-4xl font-bold mb-8 text-gray-100">¿Listo para Revolucionar tu Creación de Documentos?</h3>
              <motion.a 
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-100 text-gray-900 px-10 py-4 rounded-full font-bold text-lg inline-flex items-center transition-colors duration-300 hover:bg-gray-200"
              >
                Prueba [Nombre de la SaaS] Ahora <ArrowRight className="ml-2" />
              </motion.a>
            </div>
          </section>
        </main>

        <footer className="py-8 border-t border-gray-800">
          <div className="container mx-auto px-4 text-center text-gray-500">
            © 2023 [Nombre de la SaaS]. Todos los derechos reservados.
          </div>
        </footer>
      </div>
    </div>
  )
}

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

function ProblemCard({ title, description, icon }: CardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-black/80 p-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-gray-700/50"
    >
      <div className="mb-6 text-gray-300">{icon}</div>
      <h4 className="text-2xl font-bold mb-4 text-gray-100">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}

function FeatureCard({ title, description, icon }: CardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-black/80 p-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-gray-700/50"
    >
      <div className="mb-6 text-gray-300">{icon}</div>
      <h4 className="text-2xl font-bold mb-4 text-gray-100">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}

function BusinessModelCard({ title, description }: CardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-black/80 p-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-gray-700/50"
    >
      <h4 className="text-2xl font-bold mb-4 text-gray-100">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}

function DifferentiatorCard({ title, description }: CardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-black/80 p-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-gray-700/50"
    >
      <h4 className="text-2xl font-bold mb-4 text-gray-100">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}