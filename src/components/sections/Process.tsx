import { motion } from "framer-motion";
import { processSteps } from "@/data/content";
import SectionHeader from "@/components/ui/SectionHeader";

const Process = () => (
  <section className="py-20 md:py-28 bg-primary">
    <div className="container mx-auto px-4 md:px-6">
      <SectionHeader title="Our Process" subtitle="A proven framework delivering measurable climate impact." light />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {processSteps.map((step, i) => (
          <motion.div
            key={step.step}
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Connector line */}
            {i < processSteps.length - 1 && (
              <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-primary-foreground/20 z-0" />
            )}

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 relative z-10">
              <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-heading font-bold text-lg mb-4">
                {step.step}
              </div>
              <h3 className="font-heading text-lg font-semibold text-primary-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
