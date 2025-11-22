import { getCompanyInfo } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Building2, Users, Target } from "lucide-react";

export default function AboutPage() {
  const { about } = getCompanyInfo();
  
  // Fallback content if data is missing
  const paragraphs = about?.paragraphs || [];
  const vision = about?.headings.find(h => h.toLowerCase().includes('vision')) ? 
                 paragraphs[2] : "To emerge as one of the leading technology driven Indian agri input company.";

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-green-50 dark:bg-green-950/30 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-green-900 dark:text-green-50 sm:text-5xl">
              About Krishidhan
            </h1>
            <p className="text-lg text-muted-foreground">
              Cultivating prosperity for farmers through innovation and excellence since 1996.
            </p>
          </div>
        </div>
      </section>

      <div className="container px-4 md:px-6 py-12 space-y-16">
        {/* Main Content Grid */}
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left Column: Main Story */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-green-800 mb-4">Our Journey</h2>
              <div className="prose dark:prose-invert max-w-none text-muted-foreground space-y-4">
                <p>{paragraphs[0]}</p>
                <p>{paragraphs[1]}</p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
               <Card className="bg-green-50 border-green-100">
                 <CardHeader>
                   <CardTitle className="flex items-center gap-2 text-green-800">
                     <Target className="h-5 w-5" /> Our Vision
                   </CardTitle>
                 </CardHeader>
                 <CardContent>
                   <p className="text-sm text-green-900/80 leading-relaxed">
                     {vision}
                   </p>
                 </CardContent>
               </Card>
               
               <Card className="bg-yellow-50 border-yellow-100">
                 <CardHeader>
                   <CardTitle className="flex items-center gap-2 text-yellow-800">
                     <Users className="h-5 w-5" /> Our Mission
                   </CardTitle>
                 </CardHeader>
                 <CardContent>
                   <p className="text-sm text-yellow-900/80 leading-relaxed">
                     To provide access to latest technologies and all required quality agri inputs for the social economic growth of farmers.
                   </p>
                 </CardContent>
               </Card>
            </div>
          </div>

          {/* Right Column: Quick Facts / Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Key Highlights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Established in 1996",
                  "DSIR Recognized R&D",
                  "Top 10 Seed Company in India",
                  "Global Presence",
                  "ISO Certified Processes"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Infrastructure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Building2 className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Corporate Office</p>
                    <p className="text-xs text-muted-foreground">Pune, Maharashtra</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <Building2 className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Registered Office</p>
                    <p className="text-xs text-muted-foreground">Indore, Madhya Pradesh</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <Building2 className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Seed Capital</p>
                    <p className="text-xs text-muted-foreground">Jalna, Maharashtra (16 acres)</p>
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
