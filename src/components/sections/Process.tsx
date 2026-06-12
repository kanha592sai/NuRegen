import { motion } from "framer-motion";
import { processSteps } from "@/data/content";
import SectionHeader from "@/components/ui/SectionHeader";

const Process = () => (
  <section className="py-20 md:py-28 bg-primary">
    <div className="container mx-auto px-4 md:px-6">
      <SectionHeader title="Our Process" subtitle="A science-based framework delivering measurable, high-integrity climate outcomes" light />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {processSteps.map((step, i) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 relative z-10 h-full flex flex-col">
              <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-heading font-bold text-lg mb-4 shrink-0">
                {step.step}
              </div>
              <h3 className="font-heading text-lg font-semibold text-primary-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-primary-foreground/75 leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
