import { getCompanyInfo, getProducts } from "@/lib/data";
import Hero from "@/components/home/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Leaf, Microscope, TrendingUp, Users2 } from "lucide-react";

export default function Home() {
  const { home } = getCompanyInfo();
  const products = getProducts().slice(0, 6); // Get first 6 categories

  const aboutText = home?.paragraphs[1] || "";

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* About / Welcome Section */}
      <section className="py-24 bg-white w-full overflow-x-hidden">
        <div className="container mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 w-full">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="mb-4 px-4 py-2 bg-green-100 text-green-700 hover:bg-green-100 text-sm font-semibold">
                  About Krishidhan
                </Badge>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
                  Pioneering Agricultural{" "}
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Biotechnology
                  </span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {aboutText}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Microscope, label: "Research Driven", color: "green" },
                  { icon: CheckCircle2, label: "ISO Certified", color: "emerald" },
                  { icon: TrendingUp, label: "High Quality Seeds", color: "green" },
                  { icon: Users2, label: "Pan-India Presence", color: "emerald" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-green-50/50 border border-green-100">
                    <div className={`p-2 rounded-xl bg-gradient-to-br from-${item.color}-400 to-${item.color}-600 text-white`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-gray-900 text-sm">{item.label}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg shadow-green-500/30 rounded-2xl px-8 h-12">
                <Link href="/about" className="inline-flex items-center gap-2">
                  Read Our Story
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-green-100 via-emerald-50 to-green-100 shadow-2xl">
                {/* Decorative elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-green-400/30 to-emerald-500/30 rounded-full blur-3xl" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Leaf className="w-48 h-48 text-green-600/20" />
                </div>
                {/* Floating stats */}
                <div className="absolute top-8 right-8 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="text-3xl font-bold text-green-600">93K+</div>
                  <div className="text-xs text-gray-600 font-medium">Acres Production</div>
                </div>
                <div className="absolute bottom-8 left-8 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="text-3xl font-bold text-emerald-600">600K+</div>
                  <div className="text-xs text-gray-600 font-medium">Happy Farmers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white w-full overflow-x-hidden">
        <div className="container mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 w-full">
          <div className="text-center mb-16 space-y-4">
            <Badge className="mb-2 px-4 py-2 bg-green-100 text-green-700 hover:bg-green-100 text-sm font-semibold">
              Our Products
            </Badge>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Premium Seed Varieties
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              High-yielding, disease-resistant seed varieties designed for modern farming needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-3xl bg-white">
                <div className="relative h-56 bg-gradient-to-br from-green-100 via-emerald-50 to-green-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                  <div className="absolute inset-0 bg-green-400/20 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute bottom-6 left-6 z-20">
                    <div className="inline-block px-4 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-bold text-green-700 mb-2">
                      {product.items?.length || 0}+ Varieties
                    </div>
                    <h3 className="text-3xl font-extrabold text-white">{product.category}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    Premium quality {product.category.toLowerCase()} seeds with high yield potential and disease resistance.
                  </p>
                  <Button asChild variant="ghost" className="p-0 h-auto text-green-700 font-bold hover:bg-transparent group/btn">
                    <Link href={`/products/${product.category.toLowerCase()}`} className="inline-flex items-center gap-2">
                      View Details
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button asChild size="lg" variant="outline" className="border-2 border-green-600 text-green-700 hover:bg-green-50 rounded-2xl px-8 h-12 font-semibold">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 text-white relative overflow-hidden w-full">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-300 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 text-center relative z-10 w-full">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to Grow with Us?
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-green-50 mb-10">
            Join thousands of farmers who trust Krishidhan for premium seeds and agricultural excellence.
          </p>
          <Button asChild size="lg" className="bg-white text-green-700 hover:bg-gray-100 shadow-2xl rounded-2xl px-10 h-14 text-base font-bold">
            <Link href="/contact" className="inline-flex items-center gap-2">
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
