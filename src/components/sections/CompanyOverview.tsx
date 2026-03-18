import { motion } from "framer-motion";
import { companyOverview } from "@/data/content";
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
            title={companyOverview.title}
            subtitle={companyOverview.subtitle}
            centered={false}
          />
          <div className="space-y-4 mb-8">
            {companyOverview.description.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {companyOverview.highlights.map((h) => (
              <div key={h} className="flex items-center gap-2 text-sm font-medium text-foreground">
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
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 border border-border flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-full bg-accent/20 text-accent flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <p className="font-heading text-lg font-semibold text-foreground">Bhubaneswar, Odisha</p>
              <p className="text-muted-foreground text-sm">Driving climate impact across India</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CompanyOverview;
