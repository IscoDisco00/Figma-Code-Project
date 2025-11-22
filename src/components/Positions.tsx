import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { MapPin, Clock, DollarSign } from "lucide-react";

export function Positions() {
  const openPositions = [
    {
      title: "Forklift Operator",
      location: "Seattle, WA",
      type: "Full-time",
      shift: "Day Shift",
      pay: "$18-22/hr",
      description: "Certified forklift operator needed for busy distribution center. Must have 2+ years experience."
    },
    {
      title: "Warehouse Associate",
      location: "Portland, OR",
      type: "Temporary",
      shift: "Night Shift",
      pay: "$16-18/hr",
      description: "General warehouse duties including picking, packing, and inventory management."
    },
    {
      title: "Logistics Coordinator",
      location: "Tacoma, WA",
      type: "Temp-to-Perm",
      shift: "Day Shift",
      pay: "$22-26/hr",
      description: "Coordinate inbound and outbound shipments. Experience with WMS systems preferred."
    },
    {
      title: "Shipping & Receiving Clerk",
      location: "Spokane, WA",
      type: "Full-time",
      shift: "Day Shift",
      pay: "$17-20/hr",
      description: "Process incoming and outgoing shipments, maintain accurate records."
    },
    {
      title: "Production Line Worker",
      location: "Seattle, WA",
      type: "Full-time",
      shift: "Swing Shift",
      pay: "$16-19/hr",
      description: "Assembly and quality control for manufacturing facility. No experience required, training provided."
    },
    {
      title: "Warehouse Supervisor",
      location: "Portland, OR",
      type: "Direct Hire",
      shift: "Day Shift",
      pay: "$55-65k/yr",
      description: "Lead warehouse team of 20+ associates. 3+ years supervisory experience required."
    }
  ];

  return (
    <section id="positions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            Current Openings
          </div>
          <h2 className="text-blue-900 mb-4">
            Find Your Next Opportunity
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our current job openings and take the next step in your warehouse and logistics career.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {openPositions.map((position, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary">{position.type}</Badge>
                </div>
                <CardTitle>{position.title}</CardTitle>
                <CardDescription>{position.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{position.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{position.shift}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <DollarSign className="w-4 h-4" />
                    <span>{position.pay}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            View All Positions
          </Button>
        </div>
      </div>
    </section>
  );
}
