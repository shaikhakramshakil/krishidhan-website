"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Sparkles, Sprout, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-green-50 w-full">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-green-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-yellow-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-300/20 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto max-w-[1400px] relative z-10 px-6 md:px-12 lg:px-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Leading Agri-Tech Innovation Since 1996</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 bg-clip-text text-transparent">
                Seeds for
              </span>
              <br />
              <span className="text-gray-900">Tomorrow's Harvest</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              Empowering Indian farmers with premium quality seeds, cutting-edge research, and sustainable agricultural solutions for a prosperous future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg shadow-green-500/30 rounded-2xl px-8 h-14 text-base font-semibold">
                <Link href="/products" className="inline-flex items-center gap-2">
                  Explore Products 
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-green-600 text-green-700 hover:bg-green-50 rounded-2xl px-8 h-14 text-base font-semibold">
                <Link href="/about">
                  Our Story
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {[
                { value: "29+", label: "Years Legacy", icon: Award },
                { value: "600K+", label: "Farmers Trust", icon: Users },
                { value: "DSIR", label: "Recognized", icon: Sprout },
              ].map((stat, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <stat.icon className="w-5 h-5 text-green-600" />
                    <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</div>
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              {/* Main Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-[3rem] shadow-2xl shadow-green-500/40 transform rotate-3">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-[3rem] p-12 flex flex-col justify-center items-center text-white">
                  <div className="w-32 h-32 mb-6 bg-white/20 rounded-full flex items-center justify-center">
                    <Sprout className="w-16 h-16" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Premium Quality</h3>
                  <p className="text-center text-green-50">High-Yielding Varieties</p>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-8 -right-8 w-48 h-48 bg-white rounded-3xl shadow-xl p-6 flex flex-col justify-center items-center border border-green-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl mb-3 flex items-center justify-center text-white font-bold text-2xl">
                  <Award className="w-8 h-8" />
                </div>
                <div className="text-center">
                  <div className="font-bold text-gray-900 text-lg">Top 10</div>
                  <div className="text-sm text-gray-600">Seed Company</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-8 -left-8 w-56 h-40 bg-white rounded-3xl shadow-xl p-6 border border-green-100"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Sprout className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">93K+</div>
                    <div className="text-xs text-gray-600">Acres Production</div>
                  </div>
                </div>
                <div className="flex gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex-1 h-2 bg-green-200 rounded-full">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: `${100 - i * 15}%` }} />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
