import { User, MapPin, Sprout, Phone, LogOut, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import BottomNav from "@/components/BottomNav";

const profileData = {
  name: "Rajesh Kumar",
  phone: "+91 98765 43210",
  location: "Pune, Maharashtra",
  farmType: "Mixed Farming",
  crops: ["Rice", "Wheat", "Tomatoes", "Cotton"],
};

const menuItems = [
  { label: "Edit Profile", path: "/profile/edit" },
  { label: "My Listings", path: "/marketplace" },
  { label: "Saved Recommendations", path: "/saved" },
  { label: "App Settings", path: "/settings" },
  { label: "Help & Support", path: "/help" },
];

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="px-4 pt-6 pb-4">
        <h1 className="text-lg font-bold text-foreground">Profile</h1>
      </div>

      {/* Profile Card */}
      <motion.div
        className="mx-4 bg-card rounded-2xl p-5 shadow-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
            <User size={32} className="text-primary" />
          </div>
          <div>
            <h2 className="font-bold text-lg text-card-foreground">{profileData.name}</h2>
            <div className="flex items-center gap-1 mt-0.5">
              <MapPin size={12} className="text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{profileData.location}</span>
            </div>
            <div className="flex items-center gap-1 mt-0.5">
              <Phone size={12} className="text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{profileData.phone}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center gap-2 mb-2">
            <Sprout size={14} className="text-primary" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{profileData.farmType}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {profileData.crops.map((crop) => (
              <span key={crop} className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                {crop}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Menu */}
      <div className="mx-4 mt-4 bg-card rounded-2xl shadow-card overflow-hidden">
        {menuItems.map((item, i) => (
          <button
            key={item.label}
            className={`w-full flex items-center justify-between px-4 py-3.5 text-left ${
              i < menuItems.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <span className="text-sm font-medium text-card-foreground">{item.label}</span>
            <ChevronRight size={16} className="text-muted-foreground" />
          </button>
        ))}
      </div>

      {/* Logout */}
      <div className="mx-4 mt-4">
        <motion.button
          className="w-full min-h-[48px] bg-destructive/10 text-destructive rounded-2xl font-semibold flex items-center justify-center gap-2"
          whileTap={{ scale: 0.97 }}
        >
          <LogOut size={18} />
          Log Out
        </motion.button>
      </div>

      <BottomNav />
    </div>
  );
};

export default ProfilePage;
