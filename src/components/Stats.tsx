// FIX: Commented out 'CheckCircle2' as it is declared but never used (TS6133 error)
import { /* CheckCircle2, */ Award, Shield, Heart } from "lucide-react";

export function Stats() {
  const pillars = [
    {
      icon: Award,
      title: "Competent",
      description: "Every worker is skills-checked, assessed, and trained to perform at a high standard. No guesswork, no compromises, just qualified professionals ready to contribute from day one."
    },
    {
      icon: Shield,
      title: "Compliant",
      description: "From Right-to-Work to H&S readiness, every placement meets strict UK compliance standards. We protect your workplace legally and operationally with thorough, documented verification."
    },
    {
      icon: Heart,
      title: "Committed",
      description: "We build loyalty through fairness and respect, giving clients workers who show up, stay, and deliver. Lower turnover means better performance and reduced operational disruption."
    }
  ];

  return (
    <section className="py-20 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-white mb-4">
            The Vertix 3C
          </h2>
          <p className="text-blue-100 max-w-3xl mx-auto">
            Our foundation rests on three pillars that define every placement we make. 
            These aren't just values, they're guarantees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition-colors">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white mb-4">{pillar.title}</h3>
                <p className="text-blue-100">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}