import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { CheckCircle } from "lucide-react";

const CompanyOverview = () => (
  <section id="about" className="py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader
            title="About NuRegen"
            subtitle="Regenerating Nature. Delivering Climate Impact."
            centered={false}
          />
          
          <h3 className="font-heading text-xl font-bold text-foreground mb-4">
            Building Climate Solutions for a Regenerative Future
          </h3>

          <div className="space-y-4 mb-8">
            <p className="text-muted-foreground leading-relaxed">
              <span className="font-medium text-foreground">NuRegen Private Limited</span> is a climate-tech enterprise focused on carbon markets, regenerative agriculture, and nature-based solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              NuRegen delivers end-to-end carbon project services covering baseline development, additionality assessment, project design, farmer aggregation, large-scale field implementation, and technology-enabled MRV.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The company specializes in direct measurement and quantification of GHG emissions, emissions reduction modelling, climate-smart agriculture, protocol development, ecosystem restoration, and stakeholder engagement to deliver science-based, high-integrity outcomes in nature-based carbon projects.
            </p>
            <p className="italic text-muted-foreground leading-relaxed border-l-2 border-accent pl-4 my-6 py-1">
              <span className="font-semibold text-foreground not-italic">Science-based. Execution-driven. Locally innovated.</span> NuRegen develops and implements high-integrity carbon projects that deliver measurable climate outcomes and long-term environmental value at scale.
            </p>
          </div>

          <h4 className="font-heading text-lg font-semibold text-foreground mb-4">Core Areas</h4>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "End-to-End Carbon Project Services",
              "Regenerative & Climate-Smart Agriculture",
              "Nature-Based Solutions",
              "GHG Measurement & Emission Quantification",
              "MRV & Climate Reporting",
              "Research, Training & Climate Advisory"
            ].map((h) => (
              <div key={h} className="flex items-center gap-2 text-sm font-medium text-foreground animate-fade-in">
                <CheckCircle size={16} className="text-accent shrink-0" />
                {h}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-md">
            <iframe
              src="https://maps.google.com/maps?q=Bhubaneswar,%20Odisha&t=&z=12&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NuRegen Location - Bhubaneswar, Odisha"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CompanyOverview;
