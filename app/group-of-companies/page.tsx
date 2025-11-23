import { getPageData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Target, Award, ArrowRight } from "lucide-react";

export default function GroupOfCompaniesPage() {
    const pageData = getPageData('group-of-companies');
    const paragraphs = pageData?.paragraphs || [];

    return (
        <div className="min-h-screen bg-white w-full overflow-x-hidden">
            {/* Header Section */}
            <section className="relative bg-green-800 text-white py-24 md:py-32 overflow-hidden w-full">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-yellow-300 rounded-full blur-3xl" />
                </div>
                <div className="container mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 relative z-10 w-full">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <Badge className="mb-2 px-4 py-2 bg-white/20 text-white hover:bg-white/20 text-sm font-semibold backdrop-blur-sm">
                            Our Group
                        </Badge>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
                            Group of Companies
                        </h1>
                        <p className="text-xl md:text-2xl text-green-50 max-w-3xl mx-auto">
                            Synergizing strengths to deliver agricultural excellence.
                        </p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-16 space-y-20 w-full">
                {/* Introduction */}
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <p className="text-xl text-gray-700 leading-relaxed">
                        {paragraphs[0]}
                    </p>
                    {paragraphs[1] && (
                        <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
                            <p className="text-lg text-gray-800 font-medium">
                                {paragraphs[1]}
                            </p>
                        </div>
                    )}
                </div>

                {/* Subsidiaries Grid */}
                <div className="grid gap-8 md:grid-cols-2">
                    {/* KRFPL */}
                    <Card className="border-0 shadow-xl bg-white overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                        <div className="h-2 bg-green-600 w-full" />
                        <CardHeader>
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                    <MicroscopeIcon className="h-6 w-6 text-green-700" />
                                </div>
                                <CardTitle className="text-2xl font-bold text-gray-900">KRFPL</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-gray-600 leading-relaxed">
                                {paragraphs.find(p => p.includes('KRFPL')) || "Krishidhan Research Foundation Pvt. Ltd. focuses on R&D activities."}
                            </p>
                        </CardContent>
                    </Card>

                    {/* Other Subsidiary */}
                    <Card className="border-0 shadow-xl bg-white overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                        <div className="h-2 bg-yellow-500 w-full" />
                        <CardHeader>
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                                    <Building2 className="h-6 w-6 text-yellow-700" />
                                </div>
                                <CardTitle className="text-2xl font-bold text-gray-900">Agribusiness Subsidiary</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-gray-600 leading-relaxed">
                                {paragraphs.find(p => p.includes('subsidiary of KSPL')) || "Engaged in development of agribusiness opportunities."}
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

function MicroscopeIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 18h8" />
            <path d="M3 22h18" />
            <path d="M14 22a7 7 0 1 0 0-14h-1" />
            <path d="M9 14h2" />
            <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
            <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
        </svg>
    )
}
