import { getPageData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, Heart, Target, MessageCircle, Mail } from "lucide-react";

export default function CareerPage() {
    const pageData = getPageData('career');
    const paragraphs = pageData?.paragraphs || [];
    const headings = pageData?.headings || [];

    // The paragraphs are in order after the intro paragraph
    // Index 0: Intro
    // Index 1: Career Development
    // Index 2: Respect for Individual
    // Index 3: Empowerment
    // Index 4: Performance Appraisal
    // Index 5: We Care
    // Index 6: Job Satisfaction
    // Index 7: Open Communication
    // Index 8: Family Friendliness
    // Index 9: Careers (final CTA text)

    const benefits = [
        {
            title: "Career Development",
            icon: Target,
            content: paragraphs[1] || "",
            color: "blue"
        },
        {
            title: "Respect for Individual",
            icon: Users,
            content: paragraphs[2] || "",
            color: "green"
        },
        {
            title: "Empowerment",
            icon: Briefcase,
            content: paragraphs[3] || "",
            color: "purple"
        },
        {
            title: "Performance Appraisal",
            icon: Target,
            content: paragraphs[4] || "",
            color: "indigo"
        },
        {
            title: "We Care",
            icon: Heart,
            content: paragraphs[5] || "",
            color: "red"
        },
        {
            title: "Job Satisfaction",
            icon: Briefcase,
            content: paragraphs[6] || "",
            color: "yellow"
        },
        {
            title: "Open Communication",
            icon: MessageCircle,
            content: paragraphs[7] || "",
            color: "orange"
        },
        {
            title: "Family Friendliness",
            icon: Users,
            content: paragraphs[8] || "",
            color: "pink"
        }
    ];

    return (
        <div className="min-h-screen bg-white w-full overflow-x-hidden">
            {/* Header Section */}
            <section className="relative bg-blue-900 text-white py-24 md:py-32 overflow-hidden w-full">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=600&fit=crop')] bg-cover bg-center" />
                </div>
                <div className="absolute inset-0 bg-blue-900/80" />
                <div className="container mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 relative z-10 w-full">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <Badge className="mb-2 px-4 py-2 bg-white/20 text-white hover:bg-white/20 text-sm font-semibold backdrop-blur-sm border border-white/20">
                            Join Our Team
                        </Badge>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
                            Careers at Krishidhan
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                            Build a rewarding career with one of India's top seed companies.
                        </p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-16 space-y-20 w-full">

                {/* Intro */}
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <p className="text-xl text-gray-700 leading-relaxed">
                        {paragraphs[0]}
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {benefits.map((benefit, idx) => (
                        <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
                            <CardHeader>
                                <div className="flex items-center gap-4 mb-2">
                                    <div className={`w-12 h-12 rounded-xl bg-${benefit.color}-100 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                        <benefit.icon className={`h-6 w-6 text-${benefit.color}-700`} />
                                    </div>
                                    <CardTitle className="text-xl font-bold text-gray-900">{benefit.title}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 leading-relaxed">
                                    {benefit.content}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* CTA */}
                <div className="bg-gray-50 rounded-3xl p-8 md:p-16 text-center border border-gray-100">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Apply?</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                        We employ professionals from specialized areas of Agriculture, Bio-Technology, IT, Finance, and Marketing.
                    </p>
                    <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-green-500/30">
                        <a href="mailto:careers@krishidhanseeds.com" className="inline-flex items-center gap-2">
                            <Mail className="w-5 h-5" />
                            Email Your Resume
                        </a>
                    </Button>
                    <p className="mt-6 text-sm text-gray-500">
                        Send your resume to <span className="font-semibold text-green-700">careers@krishidhanseeds.com</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
