import { getPageData } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  const pageData = getPageData('contact');
  const paragraphs = pageData?.paragraphs || [];

  // Helper to parse contact info
  const parseContact = (text: string) => {
    // Simple parsing logic based on the text format
    const parts = text.split(/Phone:|Fax:|Phone No:/);
    const address = parts[0]?.trim();
    const phone = parts[1]?.trim().replace(',', '');
    const fax = parts[2]?.trim();
    return { address, phone, fax };
  };

  const offices = paragraphs.slice(0, 4).map((p, i) => {
    const { address, phone, fax } = parseContact(p);
    let title = "Office";
    if (i === 0) title = "Registered Office (Indore)";
    if (i === 1) title = "Seed Capital (Jalna)";
    if (i === 2) title = "Corporate Office (Pune)";
    if (i === 3) title = "Pune Office 2";

    return { title, address, phone, fax };
  });

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      {/* Header Section */}
      <section className="relative bg-gray-900 text-white py-24 md:py-32 overflow-hidden w-full">
        <div className="absolute inset-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop" alt="Office" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
        <div className="container mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="mb-2 px-4 py-2 bg-white/20 text-white hover:bg-white/20 text-sm font-semibold backdrop-blur-sm border border-white/20">
              Get in Touch
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              We are here to assist you. Reach out to our offices across India.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-16 space-y-20 w-full">

        <div className="grid gap-8 md:grid-cols-2">
          {offices.map((office, idx) => (
            <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white group">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-green-700 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{office.title}</h3>
                </div>

                <div className="space-y-4 pl-16">
                  <p className="text-gray-600 leading-relaxed">
                    {office.address}
                  </p>

                  {office.phone && (
                    <div className="flex items-center gap-3 text-gray-700">
                      <Phone className="w-4 h-4 text-green-600" />
                      <span className="font-medium">{office.phone}</span>
                    </div>
                  )}

                  {office.fax && (
                    <div className="flex items-center gap-3 text-gray-700">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">Fax: {office.fax}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Email Section */}
        <div className="bg-green-900 rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Email Us</h2>
          <p className="text-green-100 mb-8 text-lg">For general inquiries and customer support</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:info@krishidhanseeds.com" className="px-6 py-3 bg-white text-green-900 rounded-xl font-bold hover:bg-green-50 transition-colors">
              info@krishidhanseeds.com
            </a>
            <a href="mailto:customercare@krishidhanseeds.com" className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-colors">
              customercare@krishidhanseeds.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
