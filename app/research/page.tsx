import { getPageData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Microscope, FlaskConical, Dna, Sprout, ShieldCheck, Award } from "lucide-react";

export default function ResearchPage() {
  const pageData = getPageData('research');
  const paragraphs = pageData?.paragraphs || [];
  const mainText = paragraphs[0] || "";

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      {/* Header Section */}
      <section className="relative text-white py-24 md:py-32 overflow-hidden w-full">
        <div className="absolute inset-0">
          <img 
            src="/research.avif" 
            alt="Research & Development" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-emerald-900/80 to-emerald-900/90" />
        </div>
        <div className="container mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="mb-2 px-4 py-2 bg-white/10 text-white hover:bg-white/10 text-sm font-semibold backdrop-blur-sm border border-white/20">
              Innovation Hub
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
              Research & Development
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
              Driving agricultural prosperity through cutting-edge biotechnology and genetic innovation.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-16 space-y-20 w-full">

        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Biotechnology Leadership</h2>
              <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
                <p>{mainText}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="group p-5 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl border border-emerald-200 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Dna className="w-6 h-6 text-emerald-600" />
                  </div>
                  <span className="font-bold text-gray-900 text-lg">Genomics</span>
                </div>
                <p className="text-sm text-gray-700 font-medium">Advanced molecular marker labs</p>
              </div>
              <div className="group p-5 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Sprout className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="font-bold text-gray-900 text-lg">Breeding</span>
                </div>
                <p className="text-sm text-gray-700 font-medium">Conventional & modern approaches</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-2 border-gray-200 shadow-xl bg-white overflow-hidden hover:shadow-2xl hover:border-emerald-300 transition-all duration-300">
              <CardHeader className="bg-gray-50 border-b-2 border-gray-200">
                <CardTitle className="flex items-center gap-3 text-gray-900">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  Recognitions & Capabilities
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="group flex gap-4 p-4 rounded-xl hover:bg-emerald-50 transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-sm">
                    <ShieldCheck className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-emerald-700 transition-colors">DSIR Recognized</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Our R&D activities and research centres are recognized by the Department of Scientific and Industrial Research (DSIR), Govt. of India.
                    </p>
                  </div>
                </div>

                <div className="group flex gap-4 p-4 rounded-xl hover:bg-blue-50 transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-sm">
                    <FlaskConical className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-blue-700 transition-colors">Focus Crops</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Cotton, Paddy, Wheat, Soyabean, and other high-value field crops.
                    </p>
                  </div>
                </div>

                <div className="group flex gap-4 p-4 rounded-xl hover:bg-purple-50 transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-sm">
                    <Microscope className="w-6 h-6 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-purple-700 transition-colors">Expert Team</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Plant physiologists, breeders, molecular biologists, biotechnologists, entomologists, and geneticists.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
