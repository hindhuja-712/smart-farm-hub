import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ModuleCardProps {
  icon: LucideIcon;
  label: string;
  description?: string;
  path: string;
  color?: string;
  span?: boolean;
}

const ModuleCard = ({ icon: Icon, label, description, path, color, span }: ModuleCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.button
      onClick={() => navigate(path)}
      className={`bg-card rounded-2xl p-4 shadow-card text-left flex flex-col gap-2 min-h-[100px] transition-shadow hover:shadow-card-hover ${
        span ? "col-span-2" : ""
      }`}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", duration: 0.4, bounce: 0 }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: color || "hsl(var(--primary) / 0.12)" }}
      >
        <Icon
          size={22}
          style={{ color: color ? "hsl(var(--foreground))" : "hsl(var(--primary))" }}
        />
      </div>
      <div>
        <p className="font-semibold text-sm text-card-foreground">{label}</p>
        {description && (
          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{description}</p>
        )}
      </div>
    </motion.button>
  );
};

export default ModuleCard;
