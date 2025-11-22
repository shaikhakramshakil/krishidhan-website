import { getCompanyInfo } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Building2, Users, Target, Award, Sparkles } from "lucide-react";

export default function AboutPage() {
  const { about } = getCompanyInfo();
  
  const paragraphs = about?.paragraphs || [];
  const vision = about?.headings.find(h => h.toLowerCase().includes('vision')) ? 
                 paragraphs[2] : "To emerge as one of the leading technology driven Indian agri input company.";

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50/30 to-white w-full overflow-x-hidden">
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 text-white py-24 md:py-32 overflow-hidden w-full">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-yellow-300 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="mb-2 px-4 py-2 bg-white/20 text-white hover:bg-white/20 text-sm font-semibold backdrop-blur-sm">
              About Us
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
              Cultivating Excellence Since 1996
            </h1>
            <p className="text-xl md:text-2xl text-green-50 max-w-3xl mx-auto">
              Pioneering agricultural innovation and empowering farmers across India with premium seed solutions.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-16 space-y-20 w-full">
        {/* Main Content Grid */}
        <div className="grid gap-16 lg:grid-cols-3">
          {/* Left Column: Main Story */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-12 bg-gradient-to-b from-green-600 to-emerald-600 rounded-full" />
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Journey</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-6 leading-relaxed">
                <p className="text-lg">{paragraphs[0]}</p>
                <p className="text-lg">{paragraphs[1]}</p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
               <Card className="card-hover border-0 shadow-xl bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden relative">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/30 rounded-full blur-2xl" />
                 <CardHeader className="relative">
                   <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                     <Target className="h-6 w-6 text-white" />
                   </div>
                   <CardTitle className="text-2xl font-bold text-green-900">Our Vision</CardTitle>
                 </CardHeader>
                 <CardContent className="relative">
                   <p className="text-base text-gray-700 leading-relaxed">
                     {vision}
                   </p>
                 </CardContent>
               </Card>
               
               <Card className="card-hover border-0 shadow-xl bg-gradient-to-br from-yellow-50 to-orange-50 overflow-hidden relative">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200/30 rounded-full blur-2xl" />
                 <CardHeader className="relative">
                   <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                     <Users className="h-6 w-6 text-white" />
                   </div>
                   <CardTitle className="text-2xl font-bold text-yellow-900">Our Mission</CardTitle>
                 </CardHeader>
                 <CardContent className="relative">
                   <p className="text-base text-gray-700 leading-relaxed">
                     To provide access to latest technologies and all required quality agri inputs for the social economic growth of farmers.
                   </p>
                 </CardContent>
               </Card>
            </div>
          </div>

          {/* Right Column: Highlights */}
          <div className="space-y-6">
            <Card className="border-0 shadow-xl bg-white">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">Key Highlights</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { text: "Established in 1996", icon: CheckCircle2 },
                  { text: "DSIR Recognized R&D", icon: Sparkles },
                  { text: "Top 10 Seed Company in India", icon: Award },
                  { text: "Global Presence", icon: Building2 },
                  { text: "ISO Certified Processes", icon: CheckCircle2 }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 transition-colors">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-sm font-semibold text-gray-900">{item.text}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden relative">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-2xl" />
              </div>
              <CardHeader className="relative">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">Infrastructure</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-5 relative">
                <div className="space-y-2 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <p className="font-bold text-sm">Corporate Office</p>
                  </div>
                  <p className="text-xs text-gray-300 ml-4">Pune, Maharashtra</p>
                </div>
                
                <div className="space-y-2 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                    <p className="font-bold text-sm">Registered Office</p>
                  </div>
                  <p className="text-xs text-gray-300 ml-4">Indore, Madhya Pradesh</p>
                </div>
                
                <div className="space-y-2 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    <p className="font-bold text-sm">Seed Capital</p>
                  </div>
                  <p className="text-xs text-gray-300 ml-4">Jalna, Maharashtra (16 acres)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
