import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

export function About() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    type: "general"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      type: "general"
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Us Content */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            About Us
          </div>
          <h2 className="text-blue-900 mb-4">
            Your Partner in Workforce Solutions
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Vertix Group is a new force in warehouse and logistics staffing, built on a commitment 
            to excellence and personalized service. We connect skilled professionals with leading 
            companies across the UK, delivering quality placements you can depend on.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-blue-900 mb-6">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-6">
              We believe in creating meaningful connections between talented individuals and 
              companies that value their skills. Our mission is to provide reliable, efficient, 
              and personalized staffing solutions that drive success for everyone involved.
            </p>

            <h3 className="text-blue-900 mb-6">
              Why Choose Us?
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-gray-900 mb-1">Industry Expertise</div>
                  <div className="text-gray-600">Specialising in warehouse and logistics staffing across the UK</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-gray-900 mb-1">Rigorous Screening</div>
                  <div className="text-gray-600">Thorough background checks and skills assessments</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-gray-900 mb-1">24/7 Support</div>
                  <div className="text-gray-600">Always available when you need us most</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-gray-900 mb-1">UK Compliance</div>
                  <div className="text-gray-600">Full adherence to UK employment and safety standards</div>
                </div>
              </div>
            </div>

            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1676277757211-ebd7fdeb3d5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzYyNTY2MTc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Vertix Group team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-blue-900 mb-6">
                  Get in Touch
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+44 7493 940362"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="type">I am a... *</Label>
                    <select
                      id="type"
                      name="type"
                      required
                      value={formData.type}
                      onChange={handleChange}
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="employer">Employer looking for workers</option>
                      <option value="jobseeker">Job seeker</option>
                      <option value="current">Current employee</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      className="mt-1 min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Information Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-blue-900 mb-2">Visit Us</h4>
              <p className="text-gray-600">
                20 Wedlock Road<br />
                London, N1 7GU
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-blue-900 mb-2">Call Us</h4>
              <p className="text-gray-600">
                <a href="tel:02080507080" className="hover:text-blue-600 transition-colors">
                  020 8050 7080
                </a>
                <br />
                <a href="tel:+447493940362" className="hover:text-blue-600 transition-colors">
                  +44 7493 940362
                </a>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-blue-900 mb-2">Office Hours</h4>
              <p className="text-gray-600">
                Monday - Friday: 8am - 6pm<br />
                Saturday: 9am - 3pm<br />
                Sunday: Closed
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-blue-900 mb-2">Email Us</h4>
              <p className="text-gray-600 mb-4">
                For general inquiries, email us at{" "}
                <a href="mailto:info@vertix.co.uk" className="text-blue-600 hover:underline">
                  info@vertix.co.uk
                </a>
              </p>
              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
                <div>
                  <div className="text-gray-900 mb-1">For Employers:</div>
                  <a href="mailto:employers@vertix.co.uk" className="text-blue-600 hover:underline">
                    employers@vertix.co.uk
                  </a>
                </div>
                <div>
                  <div className="text-gray-900 mb-1">For Job Seekers:</div>
                  <a href="mailto:careers@vertix.co.uk" className="text-blue-600 hover:underline">
                    careers@vertix.co.uk
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}