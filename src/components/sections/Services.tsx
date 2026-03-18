import { motion } from "framer-motion";
import { ClipboardCheck, FileText, UsersRound, Sprout, BarChart3, ShieldCheck, Scale } from "lucide-react";
import { services } from "@/data/content";
import SectionHeader from "@/components/ui/SectionHeader";

const iconMap: Record<string, React.ReactNode> = {
  ClipboardCheck: <ClipboardCheck size={24} />,
  FileText: <FileText size={24} />,
  UsersRound: <UsersRound size={24} />,
  Sprout: <Sprout size={24} />,
  BarChart3: <BarChart3 size={24} />,
  ShieldCheck: <ShieldCheck size={24} />,
  Scale: <Scale size={24} />,
};

const Services = () => (
  <section id="services" className="py-20 md:py-28 bg-surface">
    <div className="container mx-auto px-4 md:px-6">
      <SectionHeader
        title="Our Services"
        subtitle="End-to-end support for climate projects — from baseline to verification."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">
              {iconMap[service.icon]}
            </div>
            <h3 className="font-heading text-base font-semibold mb-2 text-foreground">{service.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
