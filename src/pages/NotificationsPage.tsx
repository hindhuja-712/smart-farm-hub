import { Bell, CloudRain, AlertTriangle, TrendingUp, Sprout } from "lucide-react";
import { motion } from "framer-motion";
import BottomNav from "@/components/BottomNav";
import { useNavigate } from "react-router-dom";

const notifications = [
  { id: 1, type: "weather", icon: CloudRain, title: "Heavy Rain Tomorrow", desc: "82% chance of rain. Protect harvested crops and avoid spraying.", time: "10 min ago", color: "text-accent" },
  { id: 2, type: "pest", icon: AlertTriangle, title: "Pest Risk: Aphids", desc: "High humidity in your area increases aphid risk on rice. Apply neem oil.", time: "1 hour ago", color: "text-destructive" },
  { id: 3, type: "market", icon: TrendingUp, title: "Rice Price Up ↑ 2.3%", desc: "Rice prices at Delhi Mandi reached ₹1,847/quintal. Good time to sell.", time: "3 hours ago", color: "text-success" },
  { id: 4, type: "crop", icon: Sprout, title: "Irrigation Reminder", desc: "Your wheat crop is at tillering stage (40 days). Schedule second irrigation.", time: "5 hours ago", color: "text-primary" },
  { id: 5, type: "weather", icon: CloudRain, title: "Temperature Drop", desc: "Temperature dropping to 12°C tonight. Cover nursery beds.", time: "1 day ago", color: "text-accent" },
];

const NotificationsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="px-4 pt-6 pb-4 flex items-center gap-3">
        <button onClick={() => navigate("/")} className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
          <span className="text-lg">←</span>
        </button>
        <h1 className="text-lg font-bold text-foreground">Notifications</h1>
      </div>

      <div className="px-4 space-y-3">
        {notifications.map((n, i) => (
          <motion.div
            key={n.id}
            className="bg-card rounded-2xl p-4 shadow-card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06 }}
          >
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-muted flex items-center justify-center shrink-0">
                <n.icon size={18} className={n.color} />
              </div>
              <div className="flex-1">
                <p className="font-bold text-sm text-card-foreground">{n.title}</p>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{n.desc}</p>
                <p className="text-[10px] text-muted-foreground/60 mt-1.5">{n.time}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
};

export default NotificationsPage;
