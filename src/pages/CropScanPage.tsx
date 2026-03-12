import { useState } from "react";
import { Camera, Upload, Loader2, Leaf, AlertTriangle, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BottomNav from "@/components/BottomNav";
import { useNavigate } from "react-router-dom";

type ScanState = "idle" | "scanning" | "result";

const mockResult = {
  disease: "Leaf Blight",
  confidence: 76,
  status: "Moderate Risk",
  description: "Leaf blight is a common fungal disease that causes browning and wilting of leaves, reducing crop yield if untreated.",
  treatments: [
    "Apply Mancozeb 75% WP @ 2g/L of water",
    "Use Copper Oxychloride spray at early stages",
    "Remove and destroy infected leaves",
  ],
  prevention: [
    "Use disease-resistant seed varieties",
    "Maintain proper plant spacing for air circulation",
    "Avoid overhead irrigation during humid conditions",
    "Rotate crops every 2-3 seasons",
  ],
};

const CropScanPage = () => {
  const [state, setState] = useState<ScanState>("idle");
  const navigate = useNavigate();

  const handleScan = () => {
    setState("scanning");
    setTimeout(() => setState("result"), 2500);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="px-4 pt-6 pb-4 flex items-center gap-3">
        <button onClick={() => navigate("/")} className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
          <span className="text-lg">←</span>
        </button>
        <h1 className="text-lg font-bold text-foreground">Crop Disease Scanner</h1>
      </div>

      <AnimatePresence mode="wait">
        {state === "idle" && (
          <motion.div
            key="idle"
            className="px-4 flex flex-col items-center gap-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="w-64 h-64 rounded-3xl bg-muted border-2 border-dashed border-border flex flex-col items-center justify-center gap-4">
              <Leaf size={48} className="text-primary" />
              <p className="text-sm text-muted-foreground text-center px-4">
                Take a photo or upload an image of the affected crop leaf
              </p>
            </div>

            <div className="flex gap-3 w-full max-w-xs">
              <motion.button
                onClick={handleScan}
                className="flex-1 min-h-[48px] bg-primary text-primary-foreground rounded-xl font-semibold flex items-center justify-center gap-2 shadow-card"
                whileTap={{ scale: 0.97 }}
              >
                <Camera size={20} /> Camera
              </motion.button>
              <motion.button
                onClick={handleScan}
                className="flex-1 min-h-[48px] bg-secondary text-secondary-foreground rounded-xl font-semibold flex items-center justify-center gap-2 shadow-card"
                whileTap={{ scale: 0.97 }}
              >
                <Upload size={20} /> Gallery
              </motion.button>
            </div>
          </motion.div>
        )}

        {state === "scanning" && (
          <motion.div
            key="scanning"
            className="px-4 flex flex-col items-center gap-6 mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative w-24 h-24">
              <Loader2 size={96} className="text-primary animate-spin" />
              <Leaf size={32} className="text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="text-center">
              <p className="font-bold text-foreground text-lg">Analyzing leaf...</p>
              <p className="text-sm text-muted-foreground mt-1">Checking for 25 known diseases</p>
            </div>
          </motion.div>
        )}

        {state === "result" && (
          <motion.div
            key="result"
            className="px-4 space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0 }}
          >
            {/* Result Header */}
            <div className="bg-card rounded-2xl p-4 shadow-card">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0">
                  <AlertTriangle size={24} className="text-destructive" />
                </div>
                <div className="flex-1">
                  <h2 className="font-bold text-lg text-card-foreground">{mockResult.disease}</h2>
                  <p className="text-sm text-muted-foreground">{mockResult.status}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="h-2 flex-1 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent rounded-full"
                        style={{ width: `${mockResult.confidence}%` }}
                      />
                    </div>
                    <span className="text-xs font-semibold tabular-nums text-accent-foreground">{mockResult.confidence}%</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{mockResult.description}</p>
            </div>

            {/* Treatments */}
            <div className="bg-card rounded-2xl p-4 shadow-card">
              <h3 className="font-bold text-sm text-card-foreground mb-3 uppercase tracking-wider">Treatment</h3>
              <div className="space-y-2.5">
                {mockResult.treatments.map((t, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle size={12} className="text-primary" />
                    </div>
                    <p className="text-sm text-card-foreground leading-relaxed">{t}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Prevention */}
            <div className="bg-card rounded-2xl p-4 shadow-card">
              <h3 className="font-bold text-sm text-card-foreground mb-3 uppercase tracking-wider">Prevention</h3>
              <div className="space-y-2.5">
                {mockResult.prevention.map((p, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Leaf size={12} className="text-success" />
                    </div>
                    <p className="text-sm text-card-foreground leading-relaxed">{p}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Find Shops */}
            <motion.button
              className="w-full min-h-[48px] bg-primary text-primary-foreground rounded-xl font-semibold shadow-card"
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/agri-shops")}
            >
              Find Nearby Agri-Shops for Treatment
            </motion.button>

            {/* Scan Again */}
            <button
              className="w-full min-h-[48px] bg-secondary text-secondary-foreground rounded-xl font-semibold"
              onClick={() => setState("idle")}
            >
              Scan Another Crop
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <BottomNav />
    </div>
  );
};

export default CropScanPage;
