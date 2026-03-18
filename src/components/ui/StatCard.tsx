import { motion } from "framer-motion";

interface StatCardProps {
  value: string;
  label: string;
  light?: boolean;
  index?: number;
}

const StatCard = ({ value, label, light = false, index = 0 }: StatCardProps) => (
  <motion.div
    className={`rounded-2xl p-6 text-center ${light ? "bg-white/10 backdrop-blur-sm border border-white/20" : "bg-card border border-border shadow-sm"}`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
  >
    <div className={`font-heading text-3xl md:text-4xl font-bold mb-1 ${light ? "text-accent" : "text-accent"}`}>
      {value}
    </div>
    <div className={`text-sm font-medium ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
      {label}
    </div>
  </motion.div>
);

export default StatCard;
