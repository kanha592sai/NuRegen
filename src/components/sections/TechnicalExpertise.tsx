import { motion } from "framer-motion";
import { technicalExpertise } from "@/data/content";
import SectionHeader from "@/components/ui/SectionHeader";
import { Zap } from "lucide-react";

const TechnicalExpertise = () => (
  <section className="py-20 md:py-28 bg-primary">
    <div className="container mx-auto px-4 md:px-6">
      <SectionHeader
        title="Technical Expertise"
        subtitle="Deep domain knowledge in carbon accounting, climate science, and global compliance standards."
        light
      />

      <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {technicalExpertise.map((item, i) => (
          <motion.div
            key={item}
            className="flex items-center gap-2 bg-foreground/10 border border-primary-foreground/10 rounded-full px-5 py-3 text-sm font-medium text-primary-foreground shadow-sm backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <Zap size={14} className="text-accent" />
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechnicalExpertise;
