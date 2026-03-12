import { Sprout, Leaf, Droplets } from "lucide-react";
import { motion } from "framer-motion";
import BottomNav from "@/components/BottomNav";

const crops = [
  { name: "Rice (Paddy)", stage: "Tillering", health: 85, daysPlanted: 42, nextAction: "Apply second dose of Urea (30kg/ha)" },
  { name: "Wheat", stage: "Germination", health: 92, daysPlanted: 12, nextAction: "First irrigation at crown root stage (21 days)" },
  { name: "Tomatoes", stage: "Fruiting", health: 68, daysPlanted: 75, nextAction: "Check for leaf curl virus. Apply calcium spray." },
];

const FarmPage = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="px-4 pt-6 pb-4">
        <h1 className="text-lg font-bold text-foreground">My Farm</h1>
        <p className="text-xs text-muted-foreground">Track your active crops</p>
      </div>

      <div className="px-4 space-y-4">
        {crops.map((crop, i) => (
          <motion.div
            key={crop.name}
            className="bg-card rounded-2xl p-4 shadow-card"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Sprout size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-card-foreground">{crop.name}</h3>
                  <p className="text-xs text-muted-foreground">{crop.stage} · Day {crop.daysPlanted}</p>
                </div>
              </div>
            </div>
            {/* Health bar */}
            <div className="mb-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-muted-foreground">Crop Health</span>
                <span className={`text-xs font-bold tabular-nums ${crop.health >= 80 ? "text-success" : crop.health >= 60 ? "text-accent" : "text-destructive"}`}>
                  {crop.health}%
                </span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${crop.health >= 80 ? "bg-success" : crop.health >= 60 ? "bg-accent" : "bg-destructive"}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${crop.health}%` }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                />
              </div>
            </div>
            <div className="bg-muted rounded-xl px-3 py-2.5">
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">Next Action</p>
              <p className="text-xs text-card-foreground mt-0.5">{crop.nextAction}</p>
            </div>
          </motion.div>
        ))}

        <motion.button
          className="w-full min-h-[48px] bg-primary text-primary-foreground rounded-xl font-semibold shadow-card flex items-center justify-center gap-2"
          whileTap={{ scale: 0.97 }}
        >
          <Leaf size={18} /> Add New Crop
        </motion.button>
      </div>

      <BottomNav />
    </div>
  );
};

export default FarmPage;
