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
      <section className="relative bg-emerald-900 text-white py-24 md:py-32 overflow-hidden w-full">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-400 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-green-400 rounded-full blur-3xl" />
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
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                <div className="flex items-center gap-3 mb-2">
                  <Dna className="w-6 h-6 text-emerald-600" />
                  <span className="font-bold text-gray-900">Genomics</span>
                </div>
                <p className="text-sm text-gray-600">Advanced molecular marker labs</p>
              </div>
              <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                <div className="flex items-center gap-3 mb-2">
                  <Sprout className="w-6 h-6 text-green-600" />
                  <span className="font-bold text-gray-900">Breeding</span>
                </div>
                <p className="text-sm text-gray-600">Conventional & modern approaches</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-xl bg-white overflow-hidden">
              <CardHeader className="bg-gray-50 border-b border-gray-100">
                <CardTitle className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-emerald-600" />
                  Recognitions & Capabilities
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">DSIR Recognized</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Our R&D activities and research centres are recognized by the Department of Scientific and Industrial Research (DSIR), Govt. of India.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <FlaskConical className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Focus Crops</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Cotton, Paddy, Wheat, Soyabean, and other high-value field crops.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Microscope className="w-5 h-5 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Expert Team</h3>
                    <p className="text-gray-600 text-sm mt-1">
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
