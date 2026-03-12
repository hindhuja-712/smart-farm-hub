import { Store, Phone, MapPin, Star } from "lucide-react";
import { motion } from "framer-motion";
import BottomNav from "@/components/BottomNav";
import { useNavigate } from "react-router-dom";

const shops = [
  { name: "Krishna Agri Center", type: "Fertilizers & Seeds", distance: "2.3 km", rating: 4.5, phone: "+91 98765 11111", address: "Market Road, Pune" },
  { name: "Farm Fresh Supplies", type: "Equipment & Tools", distance: "3.8 km", rating: 4.2, phone: "+91 98765 22222", address: "Station Road, Pune" },
  { name: "Green Growth Seeds", type: "Seeds & Pesticides", distance: "5.1 km", rating: 4.7, phone: "+91 98765 33333", address: "NH Road, Pune" },
  { name: "Kisan Seva Kendra", type: "All Agricultural Products", distance: "6.4 km", rating: 4.0, phone: "+91 98765 44444", address: "Bus Stand Area, Pune" },
];

const AgriShopsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="px-4 pt-6 pb-4 flex items-center gap-3">
        <button onClick={() => navigate("/")} className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
          <span className="text-lg">←</span>
        </button>
        <h1 className="text-lg font-bold text-foreground">Agri-Shops Nearby</h1>
      </div>

      <div className="px-4 space-y-3">
        {shops.map((shop, i) => (
          <motion.div
            key={shop.name}
            className="bg-card rounded-2xl p-4 shadow-card"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
          >
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Store size={22} className="text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm text-card-foreground">{shop.name}</h3>
                  <div className="flex items-center gap-0.5">
                    <Star size={12} className="text-accent fill-accent" />
                    <span className="text-xs font-medium tabular-nums">{shop.rating}</span>
                  </div>
                </div>
                <p className="text-xs text-primary font-medium">{shop.type}</p>
                <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin size={11} /> {shop.distance}</span>
                  <span className="flex items-center gap-1"><Phone size={11} /> {shop.phone}</span>
                </div>
              </div>
            </div>
            <motion.button
              className="w-full mt-3 min-h-[40px] bg-secondary text-secondary-foreground rounded-xl text-sm font-semibold"
              whileTap={{ scale: 0.97 }}
            >
              Call Shop
            </motion.button>
          </motion.div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
};

export default AgriShopsPage;
