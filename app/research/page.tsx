import { getPageData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FlaskConical, Dna, Microscope, Award } from "lucide-react";

export default function ResearchPage() {
  const researchData = getPageData("research.php");
  const paragraphs = researchData?.paragraphs || [];

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-green-50 dark:bg-green-950/30 py-16 md:py-24">
        <div className="container mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 w-full text-center">
          <h1 className="text-4xl font-bold tracking-tight text-green-900 dark:text-green-50 sm:text-5xl mb-6">
            Research & Development
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Innovation is at the heart of Krishidhan. Our cutting-edge biotechnology research ensures superior crop varieties for the future.
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 w-full py-12">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-green-800">Biotechnology Excellence</h2>
            <div className="prose dark:prose-invert text-muted-foreground">
              <p className="leading-relaxed">
                {paragraphs[0] || "The Krishidhan Group has a great belief that application of biotechnology can give quantum jump also to productivity and quality of various field and Fodder crops."}
              </p>
            </div>
            
            <div className="grid gap-4 sm:grid-cols-2 mt-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Dna className="h-5 w-5 text-green-600" />
                    Genetic Purity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Advanced molecular biology techniques to ensure high genetic purity in all our seed lots.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <FlaskConical className="h-5 w-5 text-green-600" />
                    Trait Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Developing antiviral, antibacterial, and multi-stress resistance traits for robust crops.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
             <Card className="bg-slate-50 border-none shadow-md">
               <CardHeader>
                 <CardTitle className="flex items-center gap-2">
                   <Microscope className="h-6 w-6 text-green-700" />
                   R&D Infrastructure
                 </CardTitle>
               </CardHeader>
               <CardContent className="space-y-4">
                 <ul className="space-y-3">
                   {[
                     "Biotech Lab",
                     "Plant Molecular Biology Lab",
                     "Tissue Culture / Transformation Lab",
                     "Entomology Lab",
                     "Seed Testing & Quality Analysis Lab",
                     "23,000+ Germplasm Collection"
                   ].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 p-2 bg-white rounded-md shadow-sm">
                       <div className="h-2 w-2 rounded-full bg-green-500" />
                       <span className="text-sm font-medium">{item}</span>
                     </li>
                   ))}
                 </ul>
               </CardContent>
             </Card>

             <Card className="bg-yellow-50 border-yellow-100">
               <CardHeader>
                 <CardTitle className="flex items-center gap-2 text-yellow-800">
                   <Award className="h-5 w-5" /> Recognition
                 </CardTitle>
               </CardHeader>
               <CardContent>
                 <p className="text-sm text-yellow-900/80">
                   Our R&D activities and research centers are recognized by the Department of Scientific and Industrial Research (DSIR), Govt. of India.
                 </p>
               </CardContent>
             </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
