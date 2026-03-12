import { Cloud, Droplets, Wind, Thermometer } from "lucide-react";
import { motion } from "framer-motion";

const WeatherWidget = () => {
  return (
    <motion.div
      className="bg-card rounded-2xl p-4 shadow-card col-span-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 0.4, bounce: 0, delay: 0.1 }}
    >
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Today's Weather</p>
          <p className="text-2xl font-bold text-card-foreground tabular-nums">28°C</p>
          <p className="text-sm text-muted-foreground">Partly Cloudy</p>
        </div>
        <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center">
          <Cloud size={32} className="text-accent" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="flex items-center gap-1.5 bg-muted rounded-xl px-2.5 py-2">
          <Droplets size={14} className="text-primary" />
          <span className="text-xs font-medium tabular-nums">72%</span>
        </div>
        <div className="flex items-center gap-1.5 bg-muted rounded-xl px-2.5 py-2">
          <Wind size={14} className="text-primary" />
          <span className="text-xs font-medium tabular-nums">12 km/h</span>
        </div>
        <div className="flex items-center gap-1.5 bg-muted rounded-xl px-2.5 py-2">
          <Thermometer size={14} className="text-primary" />
          <span className="text-xs font-medium tabular-nums">82% rain</span>
        </div>
      </div>
    </motion.div>
  );
};

export default WeatherWidget;
