import {
  Camera,
  CloudSun,
  Sprout,
  Beaker,
  TrendingUp,
  ShoppingCart,
  Store,
  Users,
  Mic,
  Bell,
} from "lucide-react";
import { motion } from "framer-motion";
import BottomNav from "@/components/BottomNav";
import ModuleCard from "@/components/ModuleCard";
import WeatherWidget from "@/components/WeatherWidget";

const modules = [
  { icon: CloudSun, label: "Weather Alerts", description: "Real-time forecasts & warnings", path: "/weather", color: "hsl(200 80% 90%)" },
  { icon: Sprout, label: "Crop Guide", description: "Recommendations by season", path: "/crop-guide", color: "hsl(145 60% 88%)" },
  { icon: Beaker, label: "Fertilizer Tips", description: "Fertilizer & irrigation advice", path: "/fertilizer", color: "hsl(270 50% 90%)" },
  { icon: TrendingUp, label: "Market Prices", description: "Live mandi prices & trends", path: "/market", color: "hsl(35 90% 88%)" },
  { icon: ShoppingCart, label: "Marketplace", description: "Buy & sell crops directly", path: "/marketplace", color: "hsl(15 80% 90%)" },
  { icon: Store, label: "Agri-Shops", description: "Find nearby agri stores", path: "/agri-shops", color: "hsl(180 50% 88%)" },
  { icon: Users, label: "Community", description: "Connect with fellow farmers", path: "/community", color: "hsl(220 60% 90%)" },
  { icon: Bell, label: "Notifications", description: "Alerts & updates", path: "/notifications", color: "hsl(0 70% 90%)" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, duration: 0.4, bounce: 0 } },
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="px-4 pt-6 pb-2">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground font-medium">Welcome back,</p>
            <h1 className="text-xl font-bold text-foreground tracking-tight">Farmer 👋</h1>
          </div>
          <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
            <Bell size={20} className="text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Scan CTA */}
      <div className="px-4 mt-3">
        <motion.button
          className="w-full bg-primary rounded-2xl p-4 shadow-elevated flex items-center gap-4"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", duration: 0.4, bounce: 0 }}
          onClick={() => window.location.href = "/scan"}
        >
          <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
            <Camera size={26} className="text-primary-foreground" />
          </div>
          <div className="text-left">
            <p className="font-bold text-primary-foreground text-base">Scan Your Crop</p>
            <p className="text-primary-foreground/80 text-xs">AI-powered disease detection</p>
          </div>
        </motion.button>
      </div>

      {/* Weather */}
      <div className="px-4 mt-4 grid grid-cols-2 gap-3">
        <WeatherWidget />
      </div>

      {/* Module Grid */}
      <motion.div
        className="px-4 mt-4 grid grid-cols-2 gap-3"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {modules.map((mod) => (
          <motion.div key={mod.label} variants={item}>
            <ModuleCard {...mod} />
          </motion.div>
        ))}
      </motion.div>

      {/* Voice FAB */}
      <motion.button
        className="fixed bottom-20 right-4 z-50 w-14 h-14 rounded-full bg-accent shadow-elevated flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", duration: 0.3, bounce: 0 }}
      >
        <Mic size={24} className="text-accent-foreground" />
      </motion.button>

      <BottomNav />
    </div>
  );
};

export default Dashboard;
