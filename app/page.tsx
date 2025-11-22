import { getCompanyInfo, getProducts } from "@/lib/data";
import Hero from "@/components/home/Hero";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  const { home } = getCompanyInfo();
  const products = getProducts().slice(0, 4); // Get first 4 categories for preview

  // Extract welcome text safely
  const welcomeText = home?.paragraphs[0] || "Welcome to Krishidhan Seeds";
  const aboutText = home?.paragraphs[1] || "";

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* About / Welcome Section */}
      <section className="py-20 bg-white dark:bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800 dark:bg-green-900 dark:text-green-300">
                Welcome to Krishidhan
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-950">
                Pioneering Agricultural Biotechnology
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {aboutText}
              </p>
              <div className="flex flex-col gap-2">
                {["Research Driven Organization", "High Quality Seeds", "Pan-India Presence"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild className="mt-4 bg-green-700 hover:bg-green-800">
                <Link href="/about">Read More About Us</Link>
              </Button>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-100 shadow-xl lg:aspect-square">
               {/* Placeholder for an image - using a gradient for now */}
               <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-yellow-100 flex items-center justify-center text-green-800/20 font-bold text-4xl">
                  Agri-Tech Image
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-950">Our Products</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover our wide range of high-yielding, disease-resistant seed varieties designed for the modern farmer.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-green-100 relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent z-10" />
                   <div className="absolute bottom-4 left-4 z-20 text-white font-bold text-2xl">
                      {product.category}
                   </div>
                   {/* Placeholder for product image */}
                   <div className="absolute inset-0 bg-green-200 group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardContent className="p-6">
                  <CardDescription className="line-clamp-3 mb-4">
                    High quality {product.category.toLowerCase()} seeds suitable for various climatic conditions.
                  </CardDescription>
                  <Button asChild variant="link" className="p-0 text-green-700 font-semibold group-hover:translate-x-1 transition-transform">
                    <Link href={`/products/${product.category.toLowerCase()}`}>
                      View Varieties <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-900 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
            Ready to grow with us?
          </h2>
          <p className="mx-auto max-w-[600px] text-green-100 md:text-xl mb-8">
            Contact us today to learn more about our products and partnership opportunities.
          </p>
          <Button asChild size="lg" className="bg-white text-green-900 hover:bg-gray-100">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
