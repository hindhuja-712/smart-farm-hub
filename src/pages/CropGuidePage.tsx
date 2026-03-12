import { Sprout, Droplets, Beaker, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import BottomNav from "@/components/BottomNav";
import { useNavigate } from "react-router-dom";

const recommendations = [
  {
    crop: "Rice (Kharif)",
    season: "June – November",
    yield: "40-50 quintals/hectare",
    tips: ["Transplant seedlings 20-25 days old", "Maintain 5cm water level during tillering", "Apply zinc sulfate if deficiency observed"],
    icon: Sprout,
  },
  {
    crop: "Wheat (Rabi)",
    season: "November – April",
    yield: "35-45 quintals/hectare",
    tips: ["Sow by mid-November for best results", "First irrigation at crown root stage (21 days)", "Use HD-2967 or PBW-343 varieties"],
    icon: Leaf,
  },
  {
    crop: "Mustard (Rabi)",
    season: "October – March",
    yield: "12-15 quintals/hectare",
    tips: ["Suitable for drier regions", "First irrigation at 25-30 days", "Aphid control critical during flowering"],
    icon: Droplets,
  },
];

const CropGuidePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="px-4 pt-6 pb-4 flex items-center gap-3">
        <button onClick={() => navigate("/")} className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
          <span className="text-lg">←</span>
        </button>
        <h1 className="text-lg font-bold text-foreground">Crop Recommendations</h1>
      </div>

      <div className="px-4 mb-3">
        <p className="text-xs text-muted-foreground">Based on your location, soil type, and current season</p>
      </div>

      <div className="px-4 space-y-4">
        {recommendations.map((rec, i) => (
          <motion.div
            key={rec.crop}
            className="bg-card rounded-2xl p-4 shadow-card"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <rec.icon size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-card-foreground">{rec.crop}</h3>
                <p className="text-xs text-muted-foreground">{rec.season}</p>
              </div>
            </div>
            <div className="bg-muted rounded-xl px-3 py-2 mb-3">
              <p className="text-xs text-muted-foreground">Expected Yield</p>
              <p className="text-sm font-bold tabular-nums text-card-foreground">{rec.yield}</p>
            </div>
            <div className="space-y-2">
              {rec.tips.map((tip, j) => (
                <div key={j} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  <p className="text-xs text-muted-foreground leading-relaxed">{tip}</p>
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

export default CropGuidePage;
