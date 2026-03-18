import { motion } from "framer-motion";

const JoinMovement = () => (
  <section id="contact" className="py-20 md:py-28 bg-gradient-to-br from-accent to-primary">
    <div className="container mx-auto px-4 md:px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Join the Climate Movement
        </h2>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8 text-white/80 text-sm md:text-base">
          <span>✓ Sustainable Solutions</span>
          <span>✓ Lower Emissions</span>
          <span>✓ Real Climate Impact</span>
        </div>
        <a
          href="mailto:info@nuregen.in"
          className="inline-block bg-white text-primary px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors"
        >
          Collaborate With Us
        </a>
      </motion.div>
    </div>
  </section>
);

export default JoinMovement;
