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
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      {/* Header Section */}
      <section className="relative bg-green-700 text-white py-24 md:py-32 overflow-hidden w-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/agri.jpg" 
            alt="Agricultural Background" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-700/90 via-green-700/80 to-green-700/90" />
        </div>
        
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
                <div className="w-1 h-12 bg-green-600 rounded-full" />
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Journey</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-6 leading-relaxed">
                <p className="text-lg">{paragraphs[0]}</p>
                <p className="text-lg">{paragraphs[1]}</p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="group border-2 border-green-200 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-green-50 to-green-100 overflow-hidden relative cursor-pointer">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-300/20 rounded-full blur-2xl" />
                <CardHeader className="relative">
                  <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <Target className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-green-900">Our Vision</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-base text-gray-700 leading-relaxed font-medium">
                    {vision}
                  </p>
                </CardContent>
              </Card>

              <Card className="group border-2 border-yellow-200 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-yellow-50 to-yellow-100 overflow-hidden relative cursor-pointer">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-300/20 rounded-full blur-2xl" />
                <CardHeader className="relative">
                  <div className="w-14 h-14 bg-yellow-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <Users className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-yellow-900">Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-base text-gray-700 leading-relaxed font-medium">
                    To provide access to latest technologies and all required quality agri inputs for the social economic growth of farmers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column: Highlights */}
          <div className="space-y-6">
            <Card className="border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center shadow-sm">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">Key Highlights</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { text: "Established in 1996", icon: CheckCircle2, color: "green" },
                  { text: "DSIR Recognized R&D", icon: Sparkles, color: "purple" },
                  { text: "Top 10 Seed Company in India", icon: Award, color: "yellow" },
                  { text: "Global Presence", icon: Building2, color: "blue" },
                  { text: "ISO Certified Processes", icon: CheckCircle2, color: "emerald" }
                ].map((item, i) => {
                  const colorClasses = {
                    green: { bg: "bg-green-100", icon: "text-green-600", hover: "hover:bg-green-50" },
                    purple: { bg: "bg-purple-100", icon: "text-purple-600", hover: "hover:bg-purple-50" },
                    yellow: { bg: "bg-yellow-100", icon: "text-yellow-600", hover: "hover:bg-yellow-50" },
                    blue: { bg: "bg-blue-100", icon: "text-blue-600", hover: "hover:bg-blue-50" },
                    emerald: { bg: "bg-emerald-100", icon: "text-emerald-600", hover: "hover:bg-emerald-50" }
                  };
                  const colors = colorClasses[item.color as keyof typeof colorClasses];
                  
                  return (
                    <div key={i} className={`flex items-center gap-3 p-3 rounded-xl ${colors.hover} transition-all duration-300 cursor-pointer group`}>
                      <div className={`w-10 h-10 ${colors.bg} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm`}>
                        <item.icon className={`h-5 w-5 ${colors.icon}`} />
                      </div>
                      <span className="text-sm font-semibold text-gray-900">{item.text}</span>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gray-900 text-white overflow-hidden relative">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-2xl" />
              </div>
              <CardHeader className="relative">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-sm">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">Infrastructure</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 relative">
                <div className="space-y-2 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/15 transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-green-400 rounded-full group-hover:scale-125 transition-transform" />
                    <p className="font-bold text-sm">Corporate Office</p>
                  </div>
                  <p className="text-xs text-gray-300 ml-4">Pune, Maharashtra</p>
                </div>

                <div className="space-y-2 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/15 transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full group-hover:scale-125 transition-transform" />
                    <p className="font-bold text-sm">Registered Office</p>
                  </div>
                  <p className="text-xs text-gray-300 ml-4">Indore, Madhya Pradesh</p>
                </div>

                <div className="space-y-2 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/15 transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full group-hover:scale-125 transition-transform" />
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
