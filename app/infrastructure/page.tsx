import { getPageData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, FlaskConical, Factory, Truck, CheckCircle2, ShieldCheck, Database } from "lucide-react";

export default function InfrastructurePage() {
    const pageData = getPageData('infrastructure');
    const paragraphs = pageData?.paragraphs || [];

    // Helper to find paragraph by keyword
    const findPara = (keyword: string) => paragraphs.find(p => p.toLowerCase().includes(keyword.toLowerCase())) || "";

    const sections = [
        {
            title: "Research & Development",
            icon: FlaskConical,
            content: findPara("main focus of Krishidhan"),
            color: "green"
        },
        {
            title: "Production",
            icon: Factory,
            content: findPara("Production of genetically pure"),
            color: "emerald"
        },
        {
            title: "Processing",
            icon: Building2,
            content: findPara("Seeds received from the production"),
            color: "blue"
        },
        {
            title: "Technology Centre",
            icon: FlaskConical,
            content: findPara("wide range of laboratories"),
            color: "purple"
        },
        {
            title: "Quality Management",
            icon: ShieldCheck,
            content: findPara("Seed is the most vital input"),
            color: "indigo"
        },
        {
            title: "Sales & Support",
            icon: Truck,
            content: findPara("Sales and Distribution network"),
            color: "orange"
        },
        {
            title: "Information Technology",
            icon: Database,
            content: findPara("state of art Information technology"),
            color: "cyan"
        }
    ];

    return (
        <div className="min-h-screen bg-white w-full overflow-x-hidden">
            {/* Header Section */}
            <section className="relative bg-slate-900 text-white py-24 md:py-32 overflow-hidden w-full">
                <div className="absolute inset-0 opacity-20">
                    {/* Abstract background pattern */}
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                </div>
                <div className="container mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 relative z-10 w-full">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <Badge className="mb-2 px-4 py-2 bg-white/10 text-white hover:bg-white/10 text-sm font-semibold backdrop-blur-sm border border-white/20">
                            World-Class Facilities
                        </Badge>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
                            Our Infrastructure
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
                            State-of-the-art facilities powering innovation and quality.
                        </p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-16 space-y-20 w-full">

                {/* Intro */}
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-xl text-gray-700 leading-relaxed">
                        {paragraphs[0]}
                    </p>
                </div>

                {/* Sections Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {sections.map((section, idx) => (
                        <Card key={idx} className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white group overflow-hidden`}>
                            <div className={`h-1.5 w-full bg-${section.color}-500`} />
                            <CardHeader>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className={`w-10 h-10 rounded-lg bg-${section.color}-100 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                        <section.icon className={`h-5 w-5 text-${section.color}-700`} />
                                    </div>
                                    <CardTitle className="text-xl font-bold text-gray-900">{section.title}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 text-sm leading-relaxed line-clamp-6 hover:line-clamp-none transition-all">
                                    {section.content}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
