import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Package, Truck, Users, Clock, Settings, BarChart } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Package,
      title: "Warehouse Operations",
      description: "Experienced pickers, packers, and inventory specialists ready to optimize your operations."
    },
    {
      icon: Truck,
      title: "Forklift Operators",
      description: "Certified forklift operators with safety training and years of experience."
    },
    {
      icon: Users,
      title: "Logistics Coordinators",
      description: "Skilled coordinators to manage your supply chain and distribution needs."
    },
    {
      icon: Clock,
      title: "Shift Coverage",
      description: "Flexible staffing solutions for all shifts, including overnight and weekends."
    },
    {
      icon: Settings,
      title: "Production Line Workers",
      description: "Reliable workers for assembly, quality control, and manufacturing roles."
    },
    {
      icon: BarChart,
      title: "Warehouse Management",
      description: "Supervisors and managers to oversee your warehouse operations effectively."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            Our Services
          </div>
          <h2 className="text-blue-900 mb-4">
            Comprehensive Staffing Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From temporary staffing to permanent placements, we provide skilled professionals 
            across all areas of warehouse and logistics operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow border-gray-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
