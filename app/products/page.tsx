import { getProducts } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

// Map category names to local image files
const getCategoryImage = (category: string): string => {
  // Normalize category name to Title Case (e.g. "BAJRA" -> "Bajra")
  const normalizedCategory = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

  const imageMap: Record<string, string> = {
    'Cotton': '/cotton.avif',
    'Paddy': '/paddy.avif',
    'Sorghum': '/sorghum.avif',
    'Bajra': '/bajra.jpg',
    'Maize': '/corn.avif',
    'Wheat': '/wheat.avif',
    'Mustard': '/msutard.avif',
    'Soybean': '/soyabean.avif',
    'Soyabean': '/soyabean.avif', // Handle alternate spelling
  };
  return imageMap[normalizedCategory] || '/wheat.avif';
};

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const products = getProducts();
  const search = typeof searchParams?.search === 'string' ? searchParams.search : undefined;

  const filteredProducts = search
    ? products.filter(p =>
      p.category.toLowerCase().includes(search.toLowerCase()) ||
      p.items.some(item => (item as Record<string, string>).Variety?.toLowerCase().includes(search.toLowerCase()))
    )
    : products;

  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-green-50 dark:bg-green-950/30 py-16 md:py-24 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-65 blur-sm"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop&q=80)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-50/60 via-green-50/50 to-green-50/60 dark:from-green-950/80 dark:via-green-950/70 dark:to-green-950/80" />
        
        <div className="container mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 w-full text-center relative z-10">
          <h1 className="text-4xl font-bold tracking-tight text-green-900 dark:text-green-50 sm:text-5xl mb-4 drop-shadow-md">
            {search ? `Search Results for "${search}"` : "Our Products"}
          </h1>
          <p className="text-lg text-gray-900 dark:text-white max-w-2xl mx-auto font-bold drop-shadow-sm">
            {search
              ? `Found ${filteredProducts.length} categories matching your search.`
              : "Explore our diverse portfolio of high-quality seeds, engineered for superior yield and resilience across various agro-climatic zones."}
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 w-full py-12">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-green-100 overflow-hidden pt-0 gap-0 pb-0">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={getCategoryImage(product.category)}
                    alt={`${product.category} seeds`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 z-10">
                    <div className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-bold text-green-700">
                      {product.items.length}+ Varieties
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-green-800">{product.category}</CardTitle>
                  <CardDescription>
                    {product.items.length} Varieties Available
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-6 line-clamp-2">
                    Premium quality {product.category.toLowerCase()} seeds with excellent germination rates and disease resistance.
                  </p>
                  <Button asChild className="w-full bg-green-700 hover:bg-green-800 group-hover:translate-y-[-2px] transition-transform mt-4">
                    <Link href={`/products/${product.category.toLowerCase()}`}>
                      View Varieties <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No products found matching your search.</p>
            <Button asChild className="mt-4 bg-green-700 hover:bg-green-800">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
