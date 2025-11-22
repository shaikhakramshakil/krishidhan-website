"use client"

import { getCompanyInfo } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function ContactPage() {
  const { contact } = getCompanyInfo();
  const paragraphs = contact?.paragraphs || [];

  // Helper to parse address strings
  const parseAddress = (text: string) => {
    // Simple heuristic to split phone/fax from address
    const parts = text.split(/Phone:|Fax:/);
    return {
      address: parts[0],
      phone: parts.length > 1 ? parts[1].split('Fax:')[0].trim() : null
    };
  };

  const offices = [
    { title: "Registered Office", ...parseAddress(paragraphs[0] || "") },
    { title: "Operational Office", ...parseAddress(paragraphs[1] || "") },
    { title: "Corporate Office", ...parseAddress(paragraphs[2] || "") },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-green-50 dark:bg-green-950/30 py-16 md:py-24">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-green-900 dark:text-green-50 sm:text-5xl mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our products or want to partner with us? Reach out to our team.
          </p>
        </div>
      </section>

      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-green-800 mb-2">Send us a Message</h2>
              <p className="text-muted-foreground">Fill out the form below and we'll get back to you shortly.</p>
            </div>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input id="subject" placeholder="Inquiry about..." />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px]" />
              </div>
              <Button type="submit" className="w-full bg-green-700 hover:bg-green-800">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-green-800 mb-6">Our Offices</h2>
              <div className="grid gap-6">
                {offices.map((office, index) => (
                  <Card key={index} className="border-l-4 border-l-green-600">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-semibold">{office.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 text-muted-foreground mt-1 shrink-0" />
                        <p className="text-muted-foreground">{office.address}</p>
                      </div>
                      {office.phone && (
                        <div className="flex items-center gap-3">
                          <Phone className="h-4 w-4 text-muted-foreground shrink-0" />
                          <p className="text-muted-foreground">{office.phone}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="p-6 bg-green-50 rounded-lg border border-green-100">
              <h3 className="font-semibold text-green-900 mb-4 flex items-center gap-2">
                <Mail className="h-5 w-5" /> Direct Email
              </h3>
              <div className="space-y-2 text-sm">
                <p className="flex justify-between">
                  <span className="text-muted-foreground">General Inquiry:</span>
                  <a href="mailto:info@krishidhanseeds.com" className="font-medium text-green-700 hover:underline">info@krishidhanseeds.com</a>
                </p>
                <p className="flex justify-between">
                  <span className="text-muted-foreground">Customer Care:</span>
                  <a href="mailto:customercare@krishidhanseeds.com" className="font-medium text-green-700 hover:underline">customercare@krishidhanseeds.com</a>
                </p>
                <p className="flex justify-between">
                  <span className="text-muted-foreground">Careers:</span>
                  <a href="mailto:careers@krishidhanseeds.com" className="font-medium text-green-700 hover:underline">careers@krishidhanseeds.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
