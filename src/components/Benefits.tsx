import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent } from "./ui/card";
import { Building2, Briefcase, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { RequestWorkersDialog } from "./RequestWorkersDialog";
import { useState } from "react";

export function Benefits() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const employerBenefits = [
    "Pre-screened and qualified candidates",
    "Reduced hiring time and costs",
    "Flexible staffing solutions (temp, temp-to-perm, direct hire)",
    "Payroll and benefits administration",
    "Ongoing support and quality assurance",
    "Industry-specific expertise"
  ];

  const jobSeekerBenefits = [
    "Access to top employers in your area",
    "Competitive wages and benefits",
    "Flexible scheduling options",
    "Career development opportunities",
    "Quick placement process",
    "Professional support throughout your assignment"
  ];

  return (
    <section id="employers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-blue-900 mb-4">
            Built for Success
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you're hiring or looking for work, we provide the support you need to succeed.
          </p>
        </div>

        <Tabs defaultValue="employers" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="employers" className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              For Employers
            </TabsTrigger>
            <TabsTrigger value="jobseekers" className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              For Job Seekers
            </TabsTrigger>
          </TabsList>

          <TabsContent value="employers">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-blue-900 mb-6">
                  Why Companies Choose Us
                </h3>
                <div className="space-y-4">
                  {employerBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button size="lg" className="mt-8" onClick={() => setDialogOpen(true)}>
                  Request Staff
                </Button>
              </div>
              <Card>
                <CardContent className="p-8">
                  <div className="mb-6 text-blue-600">Our Approach</div>
                  <blockquote className="text-gray-700 mb-4">
                    "At Vertix Group, we're building something different. Every placement is backed 
                    by our 3C guarantee - Competent, Compliant, and Committed. We're here to deliver 
                    quality staff who show up, stay, and perform at a high standard."
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-blue-900">Vertix Group Team</div>
                      <div className="text-gray-600">UK Warehouse & Logistics Specialists</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="jobseekers">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-blue-900 mb-6">
                  Your Career Partner
                </h3>
                <div className="space-y-4">
                  {jobSeekerBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button size="lg" className="mt-8" onClick={() => {
                  const aboutSection = document.getElementById("about");
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}>
                  Contact Us
                </Button>
              </div>
              <Card>
                <CardContent className="p-8">
                  <div className="mb-6 text-blue-600">Career Opportunities</div>
                  <blockquote className="text-gray-700 mb-4">
                    "We connect you with top companies across the UK. Whether you're starting out 
                    or advancing your career, we'll support you with competitive wages, flexible 
                    scheduling, and genuine opportunities for growth."
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-blue-900">Vertix Group Team</div>
                      <div className="text-gray-600">Career Development Support</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <RequestWorkersDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      </div>
    </section>
  );
}