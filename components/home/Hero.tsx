"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Leaf, Sprout, Microscope, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-green-200/20 blur-3xl" />
        <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-yellow-200/20 blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-green-900 dark:text-green-50 mb-6">
            Cultivating the Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-500">
              Indian Agriculture
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Leading technology-driven agri-input company delivering high-quality seeds 
            and innovative solutions for the socio-economic growth of farmers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild size="lg" className="bg-green-700 hover:bg-green-800 text-white rounded-full px-8">
            <Link href="/products">
              Explore Products <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-green-200 hover:bg-green-50 text-green-800">
            <Link href="/about">
              Our Story
            </Link>
          </Button>
        </motion.div>

        {/* Stats / Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { icon: Sprout, label: "Est. 1996", sub: "Years of Excellence" },
            { icon: Microscope, label: "DSIR Recognized", sub: "R&D Centers" },
            { icon: Globe, label: "Global", sub: "Presence" },
            { icon: Leaf, label: "Premium", sub: "Quality Seeds" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div className="p-3 bg-white dark:bg-green-900/30 rounded-full shadow-sm text-green-600">
                <item.icon className="h-6 w-6" />
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-gray-900 dark:text-gray-100">{item.label}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{item.sub}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
