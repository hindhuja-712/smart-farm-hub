import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { motion } from "framer-motion";
import BottomNav from "@/components/BottomNav";
import { useNavigate } from "react-router-dom";

const crops = [
  { name: "Rice (Paddy)", price: "₹1,847", unit: "/quintal", change: "+2.3%", trend: "up" as const, mandi: "Delhi Mandi" },
  { name: "Wheat", price: "₹2,275", unit: "/quintal", change: "+0.8%", trend: "up" as const, mandi: "Lucknow Mandi" },
  { name: "Corn (Maize)", price: "₹1,962", unit: "/quintal", change: "-1.2%", trend: "down" as const, mandi: "Indore Mandi" },
  { name: "Millets (Bajra)", price: "₹2,350", unit: "/quintal", change: "+3.1%", trend: "up" as const, mandi: "Jaipur Mandi" },
  { name: "Soybean", price: "₹4,600", unit: "/quintal", change: "0.0%", trend: "flat" as const, mandi: "Nagpur Mandi" },
  { name: "Cotton", price: "₹6,080", unit: "/quintal", change: "-0.5%", trend: "down" as const, mandi: "Ahmedabad Mandi" },
  { name: "Sugarcane", price: "₹315", unit: "/quintal", change: "+1.5%", trend: "up" as const, mandi: "Kolhapur Mandi" },
];

const TrendIcon = ({ trend }: { trend: "up" | "down" | "flat" }) => {
  if (trend === "up") return <TrendingUp size={14} className="text-success" />;
  if (trend === "down") return <TrendingDown size={14} className="text-destructive" />;
  return <Minus size={14} className="text-muted-foreground" />;
};

const MarketPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="px-4 pt-6 pb-4 flex items-center gap-3">
        <button onClick={() => navigate("/")} className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
          <span className="text-lg">←</span>
        </button>
        <h1 className="text-lg font-bold text-foreground">Market Prices</h1>
      </div>

      <div className="px-4">
        <p className="text-xs text-muted-foreground mb-3">Live prices from nearby mandis · Updated 10 min ago</p>

        <div className="space-y-3">
          {crops.map((crop, i) => (
            <motion.div
              key={crop.name}
              className="bg-card rounded-2xl p-4 shadow-card"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, type: "spring", duration: 0.4, bounce: 0 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-sm text-card-foreground">{crop.name}</p>
                  <p className="text-xs text-muted-foreground">{crop.mandi}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-base tabular-nums text-card-foreground">{crop.price}</p>
                  <div className="flex items-center gap-1 justify-end">
                    <TrendIcon trend={crop.trend} />
                    <span className={`text-xs font-medium tabular-nums ${
                      crop.trend === "up" ? "text-success" : crop.trend === "down" ? "text-destructive" : "text-muted-foreground"
                    }`}>{crop.change}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default MarketPage;
