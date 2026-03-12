import { Beaker, Droplets, Bug, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import BottomNav from "@/components/BottomNav";
import { useNavigate } from "react-router-dom";

const sections = [
  {
    title: "Fertilizer Recommendations",
    icon: Beaker,
    items: [
      { crop: "Rice", advice: "Apply DAP 100kg/ha at sowing, Urea 60kg/ha in 3 splits (transplanting, tillering, panicle)" },
      { crop: "Wheat", advice: "Basal dose: NPK 120:60:40 kg/ha. Top dress with 60kg Urea at first irrigation" },
      { crop: "Tomato", advice: "Apply 25 tons FYM/ha + NPK 120:80:80 kg/ha. Foliar spray of micronutrients during fruiting" },
    ],
  },
  {
    title: "Irrigation Schedule",
    icon: Droplets,
    items: [
      { crop: "Rice", advice: "Maintain 5cm standing water. Drain 10 days before harvest. Critical: tillering & flowering stage" },
      { crop: "Wheat", advice: "6 irrigations: CRI (21d), Tillering (40d), Jointing (60d), Flowering (80d), Milk (95d), Dough (105d)" },
      { crop: "Vegetables", advice: "Light irrigation every 3-4 days. Drip irrigation saves 40% water. Mulching reduces frequency" },
    ],
  },
  {
    title: "Pest Prevention",
    icon: Bug,
    items: [
      { crop: "General", advice: "Neem oil spray (5ml/L) every 15 days as preventive measure against common pests" },
      { crop: "Rice", advice: "Install pheromone traps for stem borer. Release Trichogramma cards at 50,000/ha" },
      { crop: "Cotton", advice: "Intercrop with marigold for bollworm management. Scout fields weekly during boll formation" },
    ],
  },
];

const FertilizerPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="px-4 pt-6 pb-4 flex items-center gap-3">
        <button onClick={() => navigate("/")} className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
          <span className="text-lg">←</span>
        </button>
        <h1 className="text-lg font-bold text-foreground">Farming Guidance</h1>
      </div>

      <div className="px-4 space-y-4">
        {sections.map((section, si) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: si * 0.1 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <section.icon size={18} className="text-primary" />
              <h2 className="font-bold text-sm text-foreground uppercase tracking-wider">{section.title}</h2>
            </div>
            <div className="space-y-3">
              {section.items.map((item, i) => (
                <div key={i} className="bg-card rounded-2xl p-4 shadow-card">
                  <p className="text-xs font-semibold text-primary mb-1">{item.crop}</p>
                  <p className="text-sm text-card-foreground leading-relaxed">{item.advice}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
};

export default FertilizerPage;
