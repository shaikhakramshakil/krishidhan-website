"use client"

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Phone, Mail, Printer, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const offices = [
    {
      id: "indore",
      title: "Registered Office",
      location: "Indore",
      address: "Krishidhan Seeds Pvt. Ltd., 302, Royal House, 11/3 Usha Ganj, Indore - 452001, Madhya Pradesh, India.",
      phone: "+91 731 2352093",
      fax: "+91 731 2703212",
      color: "blue",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.0!2d75.878006!3d22.710283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd6c0000000f%3A0xf0e6e6e6e6e6e6e3!2sKrishidhan%20Seeds!5e0!3m2!1sen!2sin!4v1234567890"
    },
    {
      id: "jalna",
      title: "Head Office",
      location: "Jalna",
      address: 'Krishidhan Seeds Pvt. Ltd. "Krishidhan Bhawan", D3-D6, Additional MIDC, Aurangabad Road, Jalna - 431 203, Maharashtra, India.',
      phone: "+91 2482 222600",
      fax: "+91 2482 222611",
      color: "green",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5!2d75.855067!3d19.851631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDUxJzA1LjkiTiA3NcKwNTEnMTguMiJF!5e1!3m2!1sen!2sin!4v1234567890"
    },
    {
      id: "pune1",
      title: "Corporate Office",
      location: "Pune Corporate office",
      address: "Krishidhan Seeds Pvt. Ltd. 9th Floor, Sai Capital, Opp. Hotel J.W. Marriott, Senapati Bapat Road, Shivajinagar, Pune - 411 016, Maharashtra, India.",
      phone: "020-49040000",
      color: "purple",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.0!2d73.829911!3d18.528984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf0000000001%3A0xb54e54e54e54e542!2sSai%20Capital!5e0!3m2!1sen!2sin!4v1234567890"
    },
    {
      id: "pune2",
      title: "Corporate Office Operations",
      location: "Pune office operations",
      address: "Krishidhan Seeds Pvt. Ltd. 401 & 402, 4th Floor, Corporate Plaza, Near Chaturshringi Temple, Senapati Bapat Road, Shivajinagar, Pune - 411 016, Maharashtra, India.",
      phone: "020-49040100",
      color: "orange",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.9!2d73.830329!3d18.531872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf0000000001%3A0x3054e54e54e54e5d!2sCorporate%20Plaza!5e0!3m2!1sen!2sin!4v1234567890"
    }
  ];

  const colorClasses = {
    blue: { bg: "bg-blue-100", icon: "text-blue-700", hover: "group-hover:bg-blue-600", border: "border-blue-200" },
    green: { bg: "bg-green-100", icon: "text-green-700", hover: "group-hover:bg-green-600", border: "border-green-200" },
    purple: { bg: "bg-purple-100", icon: "text-purple-700", hover: "group-hover:bg-purple-600", border: "border-purple-200" },
    orange: { bg: "bg-orange-100", icon: "text-orange-700", hover: "group-hover:bg-orange-600", border: "border-orange-200" }
  };

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      {/* Header Section */}
      <section className="relative bg-green-700 text-white py-24 md:py-32 overflow-hidden w-full">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-yellow-300 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="mb-2 px-4 py-2 bg-white/20 text-white hover:bg-white/20 text-sm font-semibold backdrop-blur-sm">
              Get in Touch
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-green-50 max-w-3xl mx-auto">
              We are here to assist you. Reach out to our offices across India.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-16 space-y-20 w-full">

        {/* Office Locations with Maps */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">Our Offices</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visit us at any of our locations across India
            </p>
          </div>

          <Tabs defaultValue="jalna" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto gap-3 bg-gray-100 p-2 rounded-xl border-2 border-gray-200">
              {offices.map((office) => (
                <TabsTrigger
                  key={office.id}
                  value={office.id}
                  className="data-[state=active]:bg-green-600 data-[state=active]:text-white data-[state=active]:shadow-lg py-3 px-4 text-sm font-semibold rounded-lg border-2 border-transparent data-[state=active]:border-green-600 transition-all duration-200 hover:bg-gray-200 data-[state=inactive]:text-gray-700"
                >
                  {office.location}
                </TabsTrigger>
              ))}
            </TabsList>

            {offices.map((office) => {
              const colors = colorClasses[office.color as keyof typeof colorClasses];
              return (
                <TabsContent key={office.id} value={office.id} className="mt-8 space-y-6">
                  <div className="grid md:grid-cols-2 gap-8 p-6 bg-gray-50 rounded-2xl border-2 border-gray-200">
                    {/* Office Details Card */}
                    <Card className={`border-2 ${colors.border} shadow-xl bg-white`}>
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center border-2 ${colors.border}`}>
                            <MapPin className={`w-7 h-7 ${colors.icon}`} />
                          </div>
                          <div>
                            <CardTitle className="text-2xl font-bold text-gray-900">{office.title}</CardTitle>
                            <p className="text-sm text-gray-500 font-semibold">{office.location}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-semibold text-gray-500 mb-2">ADDRESS</h4>
                            <p className="text-gray-700 leading-relaxed">
                              {office.address}
                            </p>
                          </div>

                          <div className="pt-4 border-t space-y-3">
                            <div className="flex items-center gap-3">
                              <Phone className="w-5 h-5 text-green-600 flex-shrink-0" />
                              <div>
                                <p className="text-xs text-gray-500 font-semibold">PHONE</p>
                                <a href={`tel:${office.phone}`} className="text-gray-900 font-medium hover:text-green-700 transition-colors">
                                  {office.phone}
                                </a>
                              </div>
                            </div>

                            {office.fax && (
                              <div className="flex items-center gap-3">
                                <Printer className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                <div>
                                  <p className="text-xs text-gray-500 font-semibold">FAX</p>
                                  <span className="text-gray-700">{office.fax}</span>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Google Map */}
                    <div className="rounded-xl overflow-hidden shadow-xl border-4 border-green-200 h-[400px]">
                      <iframe
                        src={office.mapEmbed}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>

        {/* Contact Form & Email Section */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Email Cards */}
            <div className="space-y-6">
              <Card className="border-2 border-green-200 shadow-xl bg-gradient-to-br from-green-50 to-white hover:shadow-2xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">General Inquiries</h3>
                      <p className="text-xs text-gray-500">For all general questions</p>
                    </div>
                  </div>
                  <a
                    href="mailto:info@krishidhanseeds.com"
                    className="block text-green-700 hover:text-green-800 font-semibold transition-colors text-sm break-all"
                  >
                    info@krishidhanseeds.com
                  </a>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200 shadow-xl bg-gradient-to-br from-blue-50 to-white hover:shadow-2xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Customer Care</h3>
                      <p className="text-xs text-gray-500">For support & assistance</p>
                    </div>
                  </div>
                  <a
                    href="mailto:customercare@krishidhanseeds.com"
                    className="block text-blue-700 hover:text-blue-800 font-semibold transition-colors text-sm break-all"
                  >
                    customercare@krishidhanseeds.com
                  </a>
                </CardContent >
              </Card >
            </div >

            {/* Contact Form */}
            < Card className="md:col-span-2 border-2 border-gray-200 shadow-2xl" >
              <CardHeader className="bg-white border-b-2 border-gray-100">
                <CardTitle className="text-2xl font-bold text-gray-900">Send Us a Message</CardTitle>
                <p className="text-gray-600 text-sm">Fill out the form below and we'll get back to you shortly</p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-gray-700">Name *</label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-12 border-2 border-gray-200 focus:border-green-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email *</label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="h-12 border-2 border-gray-200 focus:border-green-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-semibold text-gray-700">Subject *</label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="h-12 border-2 border-gray-200 focus:border-green-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message *</label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="resize-none border-2 border-gray-200 focus:border-green-500"
                    />
                  </div>

                  <Button type="submit" className="w-full h-12 text-lg bg-green-700 hover:bg-green-800 shadow-lg hover:shadow-xl transition-all">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card >
          </div >
        </div >
      </div >
    </div >
  );
}
