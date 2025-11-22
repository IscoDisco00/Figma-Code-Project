import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

interface RequestWorkersDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function RequestWorkersDialog({ open, onOpenChange }: RequestWorkersDialogProps) {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    workersNeeded: "",
    positionType: "",
    startDate: "",
    duration: "",
    requirements: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Worker request submitted:", formData);
    alert("Thank you! We'll contact you within 24 hours to discuss your staffing needs.");
    onOpenChange(false);
    setFormData({
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      workersNeeded: "",
      positionType: "",
      startDate: "",
      duration: "",
      requirements: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Request Workers</DialogTitle>
          <DialogDescription>
            Fill out the form below and our team will contact you within 24 hours to discuss your staffing needs.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="companyName">Company Name *</Label>
              <Input
                id="companyName"
                name="companyName"
                required
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Your Company"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="contactName">Contact Name *</Label>
              <Input
                id="contactName"
                name="contactName"
                required
                value={formData.contactName}
                onChange={handleChange}
                placeholder="John Doe"
                className="mt-1"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@company.com"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567"
                className="mt-1"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="workersNeeded">Number of Workers Needed *</Label>
              <Input
                id="workersNeeded"
                name="workersNeeded"
                type="number"
                required
                min="1"
                value={formData.workersNeeded}
                onChange={handleChange}
                placeholder="5"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="positionType">Position Type *</Label>
              <select
                id="positionType"
                name="positionType"
                required
                value={formData.positionType}
                onChange={handleChange}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a position type</option>
                <option value="warehouse-associate">Warehouse Associate</option>
                <option value="forklift-operator">Forklift Operator</option>
                <option value="logistics-coordinator">Logistics Coordinator</option>
                <option value="shipping-receiving">Shipping & Receiving</option>
                <option value="production-worker">Production Worker</option>
                <option value="supervisor">Supervisor/Manager</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="startDate">Start Date *</Label>
              <Input
                id="startDate"
                name="startDate"
                type="date"
                required
                value={formData.startDate}
                onChange={handleChange}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="duration">Employment Duration *</Label>
              <select
                id="duration"
                name="duration"
                required
                value={formData.duration}
                onChange={handleChange}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select duration</option>
                <option value="temporary">Temporary (1-3 months)</option>
                <option value="temp-to-perm">Temp-to-Permanent</option>
                <option value="permanent">Direct Hire/Permanent</option>
                <option value="seasonal">Seasonal</option>
              </select>
            </div>
          </div>

          <div>
            <Label htmlFor="requirements">Special Requirements or Additional Information</Label>
            <Textarea
              id="requirements"
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              placeholder="Certifications needed, shift preferences, experience requirements, etc."
              className="mt-1 min-h-[100px]"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              Submit Request
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
