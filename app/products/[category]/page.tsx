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

// Map category names to local image files
const getCategoryImage = (category: string): string => {
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
    'Soyabean': '/soyabean.avif',
  };
  return imageMap[normalizedCategory] || '/wheat.avif';
};

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
  
  const categoryImage = getCategoryImage(productCategory.category);

  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-green-40 dark:bg-green-950/30 py-12 md:py-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100 blur-sm"
          style={{ backgroundImage: `url(${categoryImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-50/60 via-green-50/50 to-green-50/60 dark:from-green-950/80 dark:via-green-950/70 dark:to-green-950/80" />
        
        <div className="container mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 w-full relative z-10">
          <Link 
            href="/products" 
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/90 hover:bg-white text-green-700 hover:text-green-800 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-sm border border-green-200"
          >
            <ArrowLeft className="h-4 w-4" /> 
            Back to Products
          </Link>
          <h1 className="text-4xl font-bold tracking-tight text-green-900 dark:text-green-50 sm:text-5xl capitalize mb-4 drop-shadow-md">
            {productCategory.category} Seeds
          </h1>
          <p className="text-lg text-gray-900 dark:text-white font-bold drop-shadow-sm max-w-3xl">
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
                <Card className="flex flex-col overflow-hidden hover:border-green-300 hover:shadow-xl transition-all duration-300 cursor-pointer bg-white rounded-2xl border-2">
                  {/* Image Section */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-white flex items-center justify-center p-6">
                    {item.image ? (
                      <div className="bg-white rounded-2xl p-6 w-full h-full flex items-center justify-center shadow-sm">
                        <img 
                          src={item.image} 
                          alt={varietyName}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Sprout className="w-24 h-24 text-green-300" />
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <CardContent className="p-6 space-y-4 bg-gradient-to-b from-green-50/30 to-white">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-green-800 group-hover:text-green-600 transition-colors">
                      {varietyName}
                    </h3>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2">
                      {durationField && (
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 font-medium">
                          {typeof durationField === 'string' ? durationField.split('|')[0] : durationField}
                        </Badge>
                      )}
                      {yieldField && (
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 font-medium">
                          {yieldField}
                        </Badge>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 line-clamp-3 min-h-[3.5rem]">
                      {adaptabilityField || diseaseField || "Premium quality seeds designed for optimal yield and performance."}
                    </p>

                    {/* Action Button */}
                    <Button 
                      className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold rounded-xl py-6 transition-colors"
                    >
                      View Details
                    </Button>
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
