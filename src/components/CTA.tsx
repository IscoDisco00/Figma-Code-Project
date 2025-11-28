import { Button } from "./ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { RequestWorkersDialog } from "./RequestWorkersDialog";
import { useState } from "react";

export function CTA() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">
            Ready to Get Started?
          </h2>
          <p className="max-w-2xl mx-auto text-blue-100">
            Whether you need skilled workers or are searching for your next opportunity, 
            we're here to help you succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 text-gray-900">
            <h3 className="text-blue-900 mb-4">
              For Employers
            </h3>
            <p className="text-gray-600 mb-6">
              Find qualified warehouse and logistics professionals to meet your staffing needs.
            </p>
            <Button size="lg" className="w-full group" onClick={() => setDialogOpen(true)}>
              Request Workers
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="bg-white rounded-xl p-8 text-gray-900">
            <h3 className="text-blue-900 mb-4">
              For Job Seekers
            </h3>
            <p className="text-gray-600 mb-6">
              Explore opportunities with top companies in the warehouse and logistics industry.
            </p>
            <Button size="lg" className="w-full group" onClick={() => {
              const aboutSection = document.getElementById("about");
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}>
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        <RequestWorkersDialog open={dialogOpen} onOpenChange={setDialogOpen} />

        <div className="mt-16 text-center">
          <p className="text-blue-100 mb-4">
            Prefer to speak with someone directly?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="tel:+44 7493 940362" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
              <Phone className="w-5 h-5" />
              <span>+44 7493 940362</span>
            </a>
            <a href="mailto:info@vertix.co.uk" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
              <Mail className="w-5 h-5" />
              <span>info@vertix.co.uk</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}