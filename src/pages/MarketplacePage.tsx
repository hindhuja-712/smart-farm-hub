import { ShoppingCart, Plus, IndianRupee } from "lucide-react";
import { motion } from "framer-motion";
import BottomNav from "@/components/BottomNav";
import { useNavigate } from "react-router-dom";

const listings = [
  { id: 1, crop: "Organic Basmati Rice", qty: "50 quintals", price: "₹2,100/quintal", seller: "Vikram S.", location: "Dehradun, UK", fresh: true },
  { id: 2, crop: "Premium Wheat (HD-2967)", qty: "100 quintals", price: "₹2,400/quintal", seller: "Meena D.", location: "Indore, MP", fresh: false },
  { id: 3, crop: "Fresh Tomatoes", qty: "20 quintals", price: "₹1,200/quintal", seller: "Arjun P.", location: "Nashik, MH", fresh: true },
  { id: 4, crop: "Yellow Corn", qty: "75 quintals", price: "₹1,850/quintal", seller: "Sunita R.", location: "Raipur, CG", fresh: false },
];

const MarketplacePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="px-4 pt-6 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate("/")} className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
            <span className="text-lg">←</span>
          </button>
          <h1 className="text-lg font-bold text-foreground">Marketplace</h1>
        </div>
        <motion.button
          className="min-h-[40px] bg-primary text-primary-foreground rounded-xl font-semibold px-4 flex items-center gap-2 text-sm shadow-card"
          whileTap={{ scale: 0.97 }}
        >
          <Plus size={16} /> Sell
        </motion.button>
      </div>

      <div className="px-4 space-y-3">
        {listings.map((item, i) => (
          <motion.div
            key={item.id}
            className="bg-card rounded-2xl p-4 shadow-card"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-sm text-card-foreground">{item.crop}</h3>
                  {item.fresh && (
                    <span className="bg-primary/10 text-primary text-[10px] font-semibold px-2 py-0.5 rounded-full">NEW</span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-1">{item.seller} · {item.location}</p>
                <p className="text-xs text-muted-foreground">Qty: {item.qty}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-sm tabular-nums text-card-foreground">{item.price}</p>
              </div>
            </div>
            <motion.button
              className="w-full mt-3 min-h-[40px] bg-secondary text-secondary-foreground rounded-xl text-sm font-semibold"
              whileTap={{ scale: 0.97 }}
            >
              Contact Seller
            </motion.button>
          </motion.div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
};

export default MarketplacePage;
