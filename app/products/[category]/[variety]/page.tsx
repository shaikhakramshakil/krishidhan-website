import { getProducts } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Scale, Shield, Leaf, Sprout, MapPin, Droplets, Sun, ThermometerSun, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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
  const varietyImage = (varietyItem as Record<string, string>).image;

  // Get category default image as fallback
  const categoryImages: Record<string, string> = {
    'Cotton': '/cotton.avif',
    'Paddy': '/paddy.avif',
    'Sorghum': '/sorghum.avif',
    'Bajra': '/bajra.jpg',
    'Maize': '/corn.avif',
    'Wheat': '/wheat.avif',
    'Mustard': '/msutard.avif',
    'Soyabean': '/soyabean.avif',
  };

  const displayImage = varietyImage || categoryImages[productCategory.category] || '/crop-pattern.svg';

  // Category colors
  const categoryColors: Record<string, { bg: string; text: string; accent: string }> = {
    'Cotton': { bg: 'bg-blue-50', text: 'text-blue-700', accent: 'border-blue-200' },
    'Paddy': { bg: 'bg-emerald-50', text: 'text-emerald-700', accent: 'border-emerald-200' },
    'Sorghum': { bg: 'bg-orange-50', text: 'text-orange-700', accent: 'border-orange-200' },
    'Bajra': { bg: 'bg-amber-50', text: 'text-amber-700', accent: 'border-amber-200' },
    'Maize': { bg: 'bg-yellow-50', text: 'text-yellow-700', accent: 'border-yellow-200' },
  };

  const colors = categoryColors[productCategory.category] || { bg: 'bg-green-50', text: 'text-green-700', accent: 'border-green-200' };

  // Icon mapping
  const getIcon = (key: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      'Duration': <Calendar className="h-5 w-5" />,
      'Yield': <Scale className="h-5 w-5" />,
      'Yield per Hactor': <Scale className="h-5 w-5" />,
      'Disease Resistant': <Shield className="h-5 w-5" />,
      'Reaction to Pest': <Shield className="h-5 w-5" />,
      'Recommended For': <MapPin className="h-5 w-5" />,
      'Adaptability': <Sun className="h-5 w-5" />,
      'Irrigation': <Droplets className="h-5 w-5" />,
      'Season': <ThermometerSun className="h-5 w-5" />,
    };
    return iconMap[key] || <Leaf className="h-5 w-5" />;
  };

  // Filter out image and variety from display
  const displayProperties = Object.entries(varietyItem).filter(
    ([key]) => key !== 'Variety' && key !== 'image'
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/products" className="hover:text-green-600 transition-colors">Products</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href={`/products/${category.toLowerCase()}`} className="hover:text-green-600 transition-colors">{productCategory.category}</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900 font-medium">{varietyName}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-700 to-emerald-800" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("/seed-pattern.svg")', backgroundSize: '200px' }} />
        </div>
        
        <div className="relative container mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-12 md:py-20">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* Product Image */}
            <div className="w-full lg:w-[400px] flex-shrink-0">
              <div className="relative group">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-white/10 rounded-3xl blur-xl group-hover:bg-white/20 transition-all duration-500" />
                <div className="absolute -inset-1 bg-gradient-to-br from-white/30 to-transparent rounded-2xl" />
                
                {/* Main Image Container */}
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
                  <div className="aspect-square relative">
                    <Image
                      src={displayImage}
                      alt={varietyName}
                      fill
                      className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className={`${colors.bg} ${colors.text} border ${colors.accent} shadow-lg`}>
                      {productCategory.category}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="flex-1 text-white">
              <Link 
                href={`/products/${category.toLowerCase()}`}
                className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors group"
              >
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                <span>Back to {productCategory.category} Varieties</span>
              </Link>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                {varietyName}
              </h1>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap gap-4 mb-8">
                {(varietyItem as Record<string, string>).Duration && (
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-3 border border-white/20">
                    <Calendar className="h-5 w-5 text-green-300" />
                    <span className="font-medium">{(varietyItem as Record<string, string>).Duration}</span>
                  </div>
                )}
                
                {(varietyItem as Record<string, string>).Yield && (
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-3 border border-white/20">
                    <Scale className="h-5 w-5 text-green-300" />
                    <span className="font-medium">{(varietyItem as Record<string, string>).Yield}</span>
                  </div>
                )}
              </div>

              {/* Disease Resistance Highlight */}
              {(varietyItem as Record<string, string>)["Disease Resistant"] && (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 max-w-xl">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-green-400/20 rounded-lg">
                      <Shield className="h-6 w-6 text-green-300" />
                    </div>
                    <div>
                      <div className="font-semibold text-green-200 mb-1">Disease Resistance</div>
                      <div className="text-white/90">{(varietyItem as Record<string, string>)["Disease Resistant"]}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" className="fill-slate-50"/>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Information */}
          <div className="lg:col-span-2">
            {/* Section Title */}
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-green-100 rounded-xl">
                <Sprout className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Product Specifications</h2>
            </div>

            {/* Specifications Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {displayProperties.map(([key, value]) => (
                <Card 
                  key={key} 
                  className="group hover:shadow-lg transition-all duration-300 border-gray-100 hover:border-green-200 overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4 p-5">
                      <div className="p-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl text-green-600 group-hover:from-green-100 group-hover:to-emerald-100 transition-colors">
                        {getIcon(key)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <dt className="text-sm font-medium text-gray-500 mb-1">
                          {key}
                        </dt>
                        <dd className="text-gray-900 font-semibold leading-relaxed">
                          {value}
                        </dd>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Other Varieties Card */}
            <Card className="overflow-hidden border-0 shadow-xl">
              <div className="bg-gradient-to-br from-green-600 to-emerald-700 p-5">
                <h3 className="text-lg font-bold text-white">Other {productCategory.category} Varieties</h3>
                <p className="text-green-100 text-sm mt-1">Explore more options</p>
              </div>
              <CardContent className="p-4">
                <div className="space-y-2">
                  {productCategory.items
                    .filter(item => item.Variety !== varietyName)
                    .slice(0, 5)
                    .map((item, index) => {
                      const itemImage = (item as Record<string, string>).image;
                      return (
                        <Link
                          key={index}
                          href={`/products/${category.toLowerCase()}/${createSlug(item.Variety || '')}`}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 transition-all group"
                        >
                          {/* Mini Image */}
                          <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                            <Image
                              src={itemImage || displayImage}
                              alt={item.Variety || ''}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-gray-900 truncate group-hover:text-green-700 transition-colors">
                              {item.Variety}
                            </div>
                            {(item as Record<string, string>).Duration && (
                              <div className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                                <Calendar className="h-3 w-3" />
                                {(item as Record<string, string>).Duration.split('|')[0]}
                              </div>
                            )}
                          </div>
                          <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
                        </Link>
                      );
                    })}
                </div>
                
                <Link href={`/products/${category.toLowerCase()}`}>
                  <Button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white">
                    View All Varieties
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Contact CTA */}
            <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌾</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Need Help Choosing?</h3>
                <p className="text-sm text-gray-600 mb-4">Our experts can help you select the best variety for your farm.</p>
                <Link href="/contact">
                  <Button variant="outline" className="w-full border-amber-300 text-amber-700 hover:bg-amber-100">
                    Contact Us
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
