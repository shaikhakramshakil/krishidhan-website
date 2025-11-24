import { getPageData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, FlaskConical, Factory, Truck, CheckCircle2, ShieldCheck, Database, Microscope, Sprout, Warehouse, Users, Target, MapPin } from "lucide-react";

export default function InfrastructurePage() {
    const pageData = getPageData('infrastructure');
    const paragraphs = pageData?.paragraphs || [];

    // Helper to find paragraph by keyword
    const findPara = (keyword: string) => paragraphs.find(p => p.toLowerCase().includes(keyword.toLowerCase())) || "";

    const sections = [
        {
            title: "Research & Development",
            icon: FlaskConical,
            description: "Elite varieties and hybrids development with USPs",
            stats: { label: "Research Farms", value: "7", subtext: "202 acres across agro-climatic zones" },
            highlights: [
                "DSIR recognized R&D facilities",
                "23,000+ germplasm collection in gene bank",
                "8 crop-specific research teams",
                "Advanced Biotechnology Division since 2002"
            ],
            color: "green",
            borderColor: "bg-green-500",
            iconBg: "bg-green-100",
            iconColor: "text-green-600"
        },
        {
            title: "Production",
            icon: Factory,
            description: "Genetically pure and quality pedigree seed production",
            stats: { label: "Contract Farming", value: "93,600", subtext: "acres across 8 states" },
            highlights: [
                "SAP-assisted standardized production",
                "600,000+ farmers benefited annually",
                "Strict genetic purity maintenance",
                "Multi-state production network"
            ],
            color: "emerald",
            borderColor: "bg-emerald-500",
            iconBg: "bg-emerald-100",
            iconColor: "text-emerald-600"
        },
        {
            title: "Processing",
            icon: Building2,
            description: "Scientific seed processing with stringent quality norms",
            stats: { label: "Processing Steps", value: "10+", subtext: "from pre-conditioning to packaging" },
            highlights: [
                "Advanced colour-sorting technology",
                "Crop-specific processing modules",
                "Treatment, coating & pelleting facilities",
                "Moisture and quality control systems"
            ],
            color: "blue",
            borderColor: "bg-blue-500",
            iconBg: "bg-blue-100",
            iconColor: "text-blue-600"
        },
        {
            title: "Technology Centre",
            icon: Microscope,
            description: "State-of-the-art laboratories for advanced research",
            stats: { label: "Lab Facilities", value: "30,000", subtext: "sq.ft. biotechnology facility" },
            highlights: [
                "Biotech & Molecular Biology Labs",
                "Tissue Culture & Transformation Lab",
                "Seed Testing & Quality Analysis Lab",
                "09 scientists (04 Doctorates, 04 Post Grads)"
            ],
            color: "purple",
            borderColor: "bg-purple-500",
            iconBg: "bg-purple-100",
            iconColor: "text-purple-600"
        },
        {
            title: "Quality Management",
            icon: ShieldCheck,
            description: "End-to-end quality control from seed to harvest",
            stats: { label: "Annual Testing", value: "30,000", subtext: "samples in grow-out facilities" },
            highlights: [
                "ISTA-compliant seed testing procedures",
                "30 ha grow-out testing across 3 locations",
                "Pre & post-control genetic purity tests",
                "Exceeds IMSCS standards"
            ],
            color: "indigo",
            borderColor: "bg-indigo-500",
            iconBg: "bg-indigo-100",
            iconColor: "text-indigo-600"
        },
        {
            title: "Sales & Support",
            icon: Truck,
            description: "Widespread distribution network across India",
            stats: { label: "Market Reach", value: "15", subtext: "states with 130+ professionals" },
            highlights: [
                "1,193 dealers/distributors network",
                "25,000+ retailers across 30,000 villages",
                "22,000 sq.ft. warehousing capacity",
                "Professional C&F agent management"
            ],
            color: "orange",
            borderColor: "bg-orange-500",
            iconBg: "bg-orange-100",
            iconColor: "text-orange-600"
        },
        {
            title: "Information Technology",
            icon: Database,
            description: "Enterprise-grade SAP ERP with 24x7 operations",
            stats: { label: "System", value: "SAP ECC", subtext: "6.0 EHP 7 across all operations" },
            highlights: [
                "No Single Point of Failure (NSPOF) architecture",
                "VPN connectivity across all India locations",
                "Biometric attendance & smart card system",
                "Dual redundancy for power, servers & network"
            ],
            color: "cyan",
            borderColor: "bg-cyan-500",
            iconBg: "bg-cyan-100",
            iconColor: "text-cyan-600"
        }
    ];

    return (
        <div className="min-h-screen bg-white w-full overflow-x-hidden">
            {/* Header Section */}
            <section className="relative text-white py-24 md:py-32 overflow-hidden w-full">
                <div className="absolute inset-0">
                    <img 
                        src="/infra.avif" 
                        alt="Infrastructure" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/90" />
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
                        <Card key={idx} className="border-2 border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-white group overflow-hidden rounded-xl cursor-pointer">
                            <div className={`h-1.5 w-full ${section.borderColor}`} />
                            <CardHeader className="pb-4">
                                <div className="flex items-start gap-4 mb-3">
                                    <div className={`w-14 h-14 rounded-xl ${section.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-sm`}>
                                        <section.icon className={`h-7 w-7 ${section.iconColor}`} />
                                    </div>
                                    <div className="flex-1">
                                        <CardTitle className="text-xl font-bold text-gray-900 leading-tight mb-1">{section.title}</CardTitle>
                                        <p className="text-sm text-gray-600">{section.description}</p>
                                    </div>
                                </div>
                                
                                {/* Stats Card */}
                                <div className={`p-4 ${section.iconBg} rounded-lg border border-${section.color}-200`}>
                                    <div className="flex items-baseline gap-2 mb-1">
                                        <span className={`text-3xl font-bold ${section.iconColor}`}>{section.stats.value}</span>
                                        <span className="text-sm font-semibold text-gray-700">{section.stats.label}</span>
                                    </div>
                                    <p className="text-xs text-gray-600">{section.stats.subtext}</p>
                                </div>
                            </CardHeader>
                            
                            <CardContent className="pt-0 space-y-2">
                                {section.highlights.map((highlight, hIdx) => (
                                    <div key={hIdx} className="flex items-start gap-2.5">
                                        <div className={`w-1.5 h-1.5 rounded-full ${section.borderColor} mt-1.5 flex-shrink-0`}></div>
                                        <p className="text-sm text-gray-700 leading-relaxed">{highlight}</p>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
