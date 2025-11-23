import { getProducts } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Sprout, Timer, Scale, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";

// Function to create URL-safe slug from variety name
function createSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[()]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-');
}

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
        <div className="container mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 w-full">
          <Button asChild variant="ghost" className="mb-6 pl-0 hover:bg-transparent hover:text-green-700">
            <Link href="/products" className="flex items-center gap-2 text-muted-foreground">
              <ArrowLeft className="h-4 w-4" /> Back to Products
            </Link>
          </Button>
          <h1 className="text-4xl font-bold tracking-tight text-green-900 dark:text-green-50 sm:text-5xl capitalize mb-4">
            {productCategory.category} Seeds
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover our range of {productCategory.items.length} {productCategory.category.toLowerCase()} varieties designed for optimal performance.
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 w-full py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {productCategory.items.map((item, index) => {
            const varietySlug = createSlug(item.Variety || '');
            const varietyName = item.Variety || `${productCategory.category} Variety ${index + 1}`;
            
            // Get duration-like field (could be Duration, Duration (days), Plant height, or Days to Maturity for mustard)
            const durationField = item.Duration || item["Duration (days)"] || item["Days to Maturity"] || item["Plant height"] || item["Plant Height (cm.)"] || item["Plant height(cm)"] || item["Plant Height in CMS"];
            // Get yield-like field
            const yieldField = item.Yield || item["Yield per Hactor"] || item["Yield Potential"] || item["Yield t/ha"];
            // Get disease/pest resistance field
            const diseaseField = item["Disease Resistant"] || item["Reaction to Pest"] || item["Disease"];
            // Get adaptability or other special features (including mustard-specific fields)
            const adaptabilityField = item.Adaptability || item["Other"] || item["No. of Cuts"] || item["Grain quality"] || item.Features || item["Seed Colour"] || item["Recommanded Area"];
            
            return (
              <Link 
                key={index} 
                href={`/products/${category.toLowerCase()}/${varietySlug}`}
                className="group"
              >
                <Card className="flex flex-col h-full hover:border-green-300 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start gap-3">
                      <CardTitle className="text-xl text-green-800 group-hover:text-green-600 transition-colors flex-1">
                        {varietyName}
                      </CardTitle>
                      <ArrowRight className="h-5 w-5 text-green-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </div>
                    {durationField && (
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 w-fit">
                        {typeof durationField === 'string' ? durationField.split('|')[0] : durationField}
                      </Badge>
                    )}
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-4">
                      {/* Key Specs Grid - Always show this section */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        {durationField && (
                          <div className="flex flex-col gap-1 p-3 bg-slate-50 rounded-lg group-hover:bg-green-50 transition-colors">
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Timer className="h-3 w-3" /> {item["Duration (days)"] || item.Duration || item["Days to Maturity"] ? "Duration" : "Height"}
                            </div>
                            <span className="text-sm font-semibold text-gray-900 line-clamp-1">
                              {typeof durationField === 'string' ? durationField.split('|')[0] : durationField}
                            </span>
                          </div>
                        )}
                        {yieldField && (
                          <div className="flex flex-col gap-1 p-3 bg-slate-50 rounded-lg group-hover:bg-green-50 transition-colors">
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Scale className="h-3 w-3" /> Yield
                            </div>
                            <span className="text-sm font-semibold text-gray-900 line-clamp-1">
                              {yieldField}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Key Features */}
                      <div className="space-y-2 text-sm">
                        {adaptabilityField && (
                          <div className="flex gap-2">
                            <Sprout className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-medium text-gray-700">
                                {item.Adaptability ? "Adaptability" : item["No. of Cuts"] ? "Cuts" : item["Grain quality"] ? "Grain Quality" : item.Features ? "Features" : item["Seed Colour"] ? "Seed Color" : item["Recommanded Area"] ? "Recommended Area" : "Features"}:
                              </span>
                              <span className="text-gray-600 ml-1 line-clamp-2">{adaptabilityField}</span>
                            </div>
                          </div>
                        )}
                        {diseaseField && (
                          <div className="flex gap-2">
                            <ShieldCheck className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-medium text-gray-700">Protection:</span>
                              <span className="text-gray-600 ml-1 line-clamp-2">
                                {diseaseField}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* View Details Link */}
                      <div className="pt-4 border-t">
                        <span className="text-sm text-green-700 font-medium group-hover:underline">
                          View Full Details →
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
