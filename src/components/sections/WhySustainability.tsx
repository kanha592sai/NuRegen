import { motion } from "framer-motion";
import { Leaf, TreePine, Users } from "lucide-react";
import { sustainabilityCards } from "@/data/content";
import SectionHeader from "@/components/ui/SectionHeader";

const iconMap: Record<string, React.ReactNode> = {
  Leaf: <Leaf size={28} />,
  TreePine: <TreePine size={28} />,
  Users: <Users size={28} />,
};

const WhySustainability = () => (
  <section className="py-20 md:py-28 bg-surface">
    <div className="container mx-auto px-4 md:px-6">
      <SectionHeader
        title="Why Sustainability Matters"
        subtitle="Building a resilient future through responsible climate action and community empowerment."
      />

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {sustainabilityCards.map((card, i) => (
          <motion.div
            key={card.title}
            className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5">
              {iconMap[card.icon]}
            </div>
            <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">{card.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhySustainability;
