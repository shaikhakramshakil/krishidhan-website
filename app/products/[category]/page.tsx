import { getProducts } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, Sprout, Timer, Scale, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";

// This is a server component
export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const allProducts = getProducts();
  const productCategory = allProducts.find(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );

  if (!productCategory) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-green-50 dark:bg-green-950/30 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <Button asChild variant="ghost" className="mb-6 pl-0 hover:bg-transparent hover:text-green-700">
            <Link href="/products" className="flex items-center gap-2 text-muted-foreground">
              <ArrowLeft className="h-4 w-4" /> Back to Products
            </Link>
          </Button>
          <h1 className="text-4xl font-bold tracking-tight text-green-900 dark:text-green-50 sm:text-5xl capitalize mb-4">
            {productCategory.category} Seeds
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover our range of {productCategory.category.toLowerCase()} hybrids designed for optimal performance.
          </p>
        </div>
      </section>

      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {productCategory.items.map((item, index) => (
            <Card key={index} className="flex flex-col h-full hover:border-green-300 transition-colors">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                   <CardTitle className="text-xl text-green-800">
                     {/* Try to find a name, otherwise use generic */}
                     {item["Variety"] || item["Hybrid"] || `${productCategory.category} Variety ${index + 1}`}
                   </CardTitle>
                   <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      {item["Duration"] ? item["Duration"].split('|')[0] : "High Yield"}
                   </Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                  {/* Key Specs Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {item["Duration"] && (
                      <div className="flex flex-col gap-1 p-2 bg-slate-50 rounded-md">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Timer className="h-3 w-3" /> Duration
                        </div>
                        <span className="text-sm font-medium">{item["Duration"]}</span>
                      </div>
                    )}
                    {item["Yield"] && (
                      <div className="flex flex-col gap-1 p-2 bg-slate-50 rounded-md">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Scale className="h-3 w-3" /> Yield
                        </div>
                        <span className="text-sm font-medium">{item["Yield"]}</span>
                      </div>
                    )}
                  </div>

                  {/* Detailed List */}
                  <div className="space-y-2 text-sm">
                    {Object.entries(item).map(([key, value]) => {
                      if (key === "Duration" || key === "Yield" || key === "Variety" || key === "Description") return null;
                      return (
                        <div key={key} className="grid grid-cols-[1fr_2fr] gap-2 border-b border-dashed pb-2 last:border-0">
                          <span className="font-medium text-muted-foreground">{key}:</span>
                          <span className="text-foreground">{value}</span>
                        </div>
                      );
                    })}
                    {item["Description"] && (
                       <p className="text-sm text-muted-foreground mt-2 pt-2 border-t">
                         {item["Description"]}
                       </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
