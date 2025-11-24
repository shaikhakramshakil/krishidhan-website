import { getProducts } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Scale, Shield, Leaf, Sprout, MapPin } from "lucide-react";
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
export default async function VarietyPage({ 
  params 
}: { 
  params: Promise<{ category: string; variety: string }> 
}) {
  const { category, variety } = await params;
  const allProducts = getProducts();
  const productCategory = allProducts.find(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );

  if (!productCategory) {
    notFound();
  }

  // Find the specific variety by matching the slug
  const varietyItem = productCategory.items.find(
    (item) => createSlug(item.Variety || '') === variety
  );

  if (!varietyItem) {
    notFound();
  }

  const varietyName = varietyItem.Variety || `${productCategory.category} Variety`;

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 py-12 md:py-16">
        <div className="container mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 w-full">
          <Button asChild variant="ghost" className="mb-6 pl-0 hover:bg-transparent hover:text-green-700">
            <Link href={`/products/${category.toLowerCase()}`} className="flex items-center gap-2 text-muted-foreground">
              <ArrowLeft className="h-4 w-4" /> Back to {productCategory.category} Varieties
            </Link>
          </Button>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <Badge variant="outline" className="bg-green-100 text-green-700 border-green-300 mb-3">
                {productCategory.category}
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight text-green-900 dark:text-green-50 sm:text-5xl mb-2">
                {varietyName}
              </h1>
              {(varietyItem as any).Duration && (
                <p className="text-lg text-muted-foreground flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  {(varietyItem as any).Duration}
                </p>
              )}
            </div>
            
            {(varietyItem as any).Yield && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-2 border-green-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Scale className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Expected Yield</div>
                    <div className="text-2xl font-bold text-green-800">{(varietyItem as any).Yield}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 w-full py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Information Card */}
          <div className="lg:col-span-2 space-y-6">
            {/* Key Characteristics */}
            <Card className="border-green-100">
              <CardHeader>
                <CardTitle className="text-2xl text-green-800 flex items-center gap-2">
                  <Sprout className="h-6 w-6" />
                  Key Characteristics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  {Object.entries(varietyItem).map(([key, value]) => {
                    if (key === "Variety") return null;
                    
                    let icon;
                    switch(key) {
                      case "Duration":
                        icon = <Calendar className="h-5 w-5 text-green-600" />;
                        break;
                      case "Yield":
                      case "Yield per Hactor":
                        icon = <Scale className="h-5 w-5 text-green-600" />;
                        break;
                      case "Disease Resistant":
                      case "Reaction to Pest":
                        icon = <Shield className="h-5 w-5 text-green-600" />;
                        break;
                      case "Recommended For":
                        icon = <MapPin className="h-5 w-5 text-green-600" />;
                        break;
                      default:
                        icon = <Leaf className="h-5 w-5 text-green-600" />;
                    }
                    
                    return (
                      <div key={key} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 hover:bg-slate-100 transition-colors">
                        <div className="flex gap-3">
                          <div className="flex-shrink-0 mt-1">{icon}</div>
                          <div className="flex-1">
                            <dt className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                              {key}
                            </dt>
                            <dd className="text-gray-700 dark:text-gray-300 leading-relaxed">
                              {value}
                            </dd>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info Card */}
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-lg text-green-800">Quick Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {(varietyItem as Record<string, string>).Duration && (
                  <div className="flex justify-between items-center py-2 border-b border-green-200">
                    <span className="text-sm text-gray-600">Maturity</span>
                    <span className="font-semibold text-gray-900">{(varietyItem as Record<string, string>).Duration.split('|')[0]}</span>
                  </div>
                )}
                {(varietyItem as Record<string, string>)["Boll Size"] && (
                  <div className="flex justify-between items-center py-2 border-b border-green-200">
                    <span className="text-sm text-gray-600">Boll Size</span>
                    <span className="font-semibold text-gray-900">{(varietyItem as Record<string, string>)["Boll Size"]}</span>
                  </div>
                )}
                {(varietyItem as Record<string, string>)["Plant Height (cm.)"] && (
                  <div className="flex justify-between items-center py-2 border-b border-green-200">
                    <span className="text-sm text-gray-600">Plant Height</span>
                    <span className="font-semibold text-gray-900">{(varietyItem as Record<string, string>)["Plant Height (cm.)"]}</span>
                  </div>
                )}
                {(varietyItem as Record<string, string>).Adaptability && (
                  <div className="py-2">
                    <span className="text-sm text-gray-600">Adaptability</span>
                    <p className="font-semibold text-gray-900 mt-1">{(varietyItem as Record<string, string>).Adaptability}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Related Varieties */}
            <Card className="border-green-100">
              <CardHeader>
                <CardTitle className="text-lg text-green-800">Other Varieties</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {productCategory.items
                    .filter(item => item.Variety !== varietyName)
                    .slice(0, 5)
                    .map((item, index) => (
                      <Link
                        key={index}
                        href={`/products/${category.toLowerCase()}/${createSlug(item.Variety || '')}`}
                        className="block p-3 rounded-lg hover:bg-green-50 transition-colors border border-transparent hover:border-green-200"
                      >
                        <div className="font-medium text-sm text-gray-900">{item.Variety}</div>
                        {(item as Record<string, string>).Duration && (
                          <div className="text-xs text-gray-500 mt-1">{(item as Record<string, string>).Duration.split('|')[0]}</div>
                        )}
                      </Link>
                    ))}
                  
                  <Link href={`/products/${category.toLowerCase()}`}>
                    <Button variant="outline" className="w-full mt-4 border-green-300 text-green-700 hover:bg-green-50">
                      View All {productCategory.category} Varieties
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
