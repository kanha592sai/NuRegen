import { motion } from "framer-motion";
import { Sprout, Factory, TreeDeciduous, Wheat, Trees, CloudSun } from "lucide-react";
import { focusAreas } from "@/data/content";
import SectionHeader from "@/components/ui/SectionHeader";

const iconMap: Record<string, React.ReactNode> = {
  Sprout: <Sprout size={24} />,
  Factory: <Factory size={24} />,
  TreeDeciduous: <TreeDeciduous size={24} />,
  Wheat: <Wheat size={24} />,
  Trees: <Trees size={24} />,
  CloudSun: <CloudSun size={24} />,
};

const CoreFocusAreas = () => (
  <section id="focus" className="py-20 md:py-28 bg-surface">
    <div className="container mx-auto px-4 md:px-6">
      <SectionHeader
        title="Core Focus Areas"
        subtitle="Six pillars driving our approach to climate action and sustainable agriculture."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {focusAreas.map((area, i) => (
          <motion.div
            key={area.title}
            className="bg-card rounded-2xl p-7 border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
              {iconMap[area.icon]}
            </div>
            <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">{area.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CoreFocusAreas;
