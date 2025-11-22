import { getProducts } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
      p.items.some(item => item.name.toLowerCase().includes(search.toLowerCase()))
    )
    : products;

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-green-50 dark:bg-green-950/30 py-16 md:py-24">
        <div className="container mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 w-full text-center">
          <h1 className="text-4xl font-bold tracking-tight text-green-900 dark:text-green-50 sm:text-5xl mb-4">
            {search ? `Search Results for "${search}"` : "Our Products"}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {search
              ? `Found ${filteredProducts.length} categories matching your search.`
              : "Explore our diverse portfolio of high-quality seeds, engineered for superior yield and resilience across various agro-climatic zones."
            }
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 w-full py-12">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-green-100 overflow-hidden">
                <div className="h-48 bg-green-100 flex items-center justify-center">
                  {/* Placeholder for category image */}
                  <span className="text-4xl font-bold text-green-800/20 uppercase tracking-widest">
                    {product.category}
                  </span>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-green-800">{product.category}</CardTitle>
                  <CardDescription>
                    {product.items.length} Varieties Available
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 line-clamp-2">
                    Premium quality {product.category.toLowerCase()} seeds with excellent germination rates and disease resistance.
                  </p>
                  <Button asChild className="w-full bg-green-700 hover:bg-green-800 group-hover:translate-y-[-2px] transition-transform">
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
