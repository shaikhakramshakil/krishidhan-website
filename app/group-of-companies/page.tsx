"use client"

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { getPageData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Target, Award, TrendingUp, Factory, Calendar } from "lucide-react";

const TimelineCard = ({ experience, index, timelineColor }: any) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, margin: "-100px" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const cardVariants = {
        hidden: {
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50,
            y: 20
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const Icon = experience.icon;

    return (
        <motion.div
            ref={cardRef}
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} mb-8`}
        >
            <div className="w-1/2 px-4">
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${experience.color}20` }}>
                            <Icon className="h-6 w-6" style={{ color: experience.color }} />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-xl font-semibold text-gray-900">{experience.title}</h3>
                            <div className="flex items-center text-gray-600">
                                <Calendar className="mr-2 h-4 w-4" />
                                <span>{experience.year}</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <p className="text-gray-700">{experience.description}</p>
                    </div>

                    {experience.highlight && (
                        <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-100">
                            <p className="text-green-800 font-semibold text-sm">{experience.highlight}</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="w-10 flex justify-center">
                <div
                    className="w-5 h-5 rounded-full border-4 border-white shadow transition-colors duration-1000 ease-in-out"
                    style={{ backgroundColor: timelineColor }}
                />
            </div>

            <div className="w-1/2" />
        </motion.div>
    );
};

export default function GroupOfCompaniesPage() {
    const pageData = getPageData('group-of-companies');
    const paragraphs = pageData?.paragraphs || [];
    const [color, setColor] = useState("rgb(22, 163, 74)"); // green-600

    useEffect(() => {
        const interval = setInterval(() => {
            const r = Math.floor(Math.random() * 100) + 20;
            const g = Math.floor(Math.random() * 200) + 50;
            const b = Math.floor(Math.random() * 100) + 20;
            setColor(`rgb(${r}, ${g}, ${b})`);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const experiences = [
        { id: 1, year: "1980", title: "Business Ventured", description: "Ventured by Mr. J.P. Karwa & (Late) Mr. S.P. Karwa", icon: Building2, color: "#3b82f6" },
        { id: 2, year: "1990-2000", title: "Research Centers & DSIR Recognition", description: "Established Research Centers & received DSIR Recognition from the Government of India", icon: Target, color: "#16a34a" },
        { id: 3, year: "2004", title: "Biotech Division", description: "Established Biotech Division to advance agricultural biotechnology research", icon: Factory, color: "#9333ea" },
        { id: 4, year: "2005", title: "Infrastructure Expansion", description: "Expanded Infrastructure to support growing operations and research activities", icon: Building2, color: "#f97316" },
        { id: 5, year: "2007", title: "Business Diversification", description: "Diversified in Vegetable & Plant Nutrition Business to expand product portfolio", icon: TrendingUp, color: "#059669" },
        { id: 6, year: "2008", title: "Technology Centre in Jalna", description: "Opened new Technology Centre in Jalna to enhance research capabilities", icon: Factory, color: "#06b6d4" },
        { id: 7, year: "2009", title: "Co-marketing Venture", description: "Ventured into Co-marketing Business of R & D Products", icon: Users, color: "#ec4899" },
        { id: 8, year: "2016-17", title: "Growth Milestone", description: "Achieved 10% market share in respective segments of Indian seed market", icon: Award, color: "#ef4444", highlight: "🏆 Recognized as one of the Top 10 Seed Companies in India" }
    ];

    return (
        <div className="min-h-screen bg-white w-full overflow-x-hidden">
            {/* Header Section */}
            <section className="relative text-white py-24 md:py-32 overflow-hidden w-full">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img 
                        src="/group company.avif" 
                        alt="Group of Companies" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-800/90 via-green-800/80 to-green-800/90" />
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

                {/* Timeline Section */}
                <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 -mx-6 md:-mx-12 lg:-mx-20">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                            Our Journey
                        </h2>

                        <div className="relative">
                            <div
                                className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full transition-colors duration-1000 ease-in-out"
                                style={{ backgroundColor: color }}
                            />

                            {experiences.map((experience, index) => (
                                <TimelineCard
                                    key={experience.id}
                                    experience={experience}
                                    index={index}
                                    timelineColor={color}
                                />
                            ))}
                        </div>
                    </div>
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
                        <CardContent className="space-y-6">
                            <p className="text-gray-600 leading-relaxed">
                                {paragraphs.find(p => p.includes('subsidiary of KSPL')) || "100% subsidiary of KSPL, engaged in the development of agribusiness opportunities and marketing of agri-input products."}
                            </p>
                            
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                                    <div className="text-3xl font-bold text-yellow-700 mb-1">500+</div>
                                    <div className="text-sm text-gray-600">Partner Farmers</div>
                                </div>
                                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                                    <div className="text-3xl font-bold text-yellow-700 mb-1">15+</div>
                                    <div className="text-sm text-gray-600">Product Lines</div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
                                    <p className="text-sm text-gray-600">Marketing and distribution of quality agri-input products</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
                                    <p className="text-sm text-gray-600">Supply chain management and logistics solutions</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
                                    <p className="text-sm text-gray-600">Farmer education and technical support programs</p>
                                </div>
                            </div>
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
