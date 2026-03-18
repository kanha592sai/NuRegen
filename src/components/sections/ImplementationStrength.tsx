import { implementationStats } from "@/data/content";
import SectionHeader from "@/components/ui/SectionHeader";
import StatCard from "@/components/ui/StatCard";

const ImplementationStrength = () => (
  <section className="py-20 md:py-28 bg-primary">
    <div className="container mx-auto px-4 md:px-6">
      <SectionHeader
        title="Implementation at Scale"
        subtitle="Our extensive network enables large-scale climate project deployment across India."
        light
      />

      <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {implementationStats.map((stat, i) => (
          <StatCard key={stat.label} value={stat.value} label={stat.label} light index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ImplementationStrength;
