import { Cloud, Droplets, Wind, Thermometer, AlertTriangle, Sun, CloudRain } from "lucide-react";
import { motion } from "framer-motion";
import BottomNav from "@/components/BottomNav";
import { useNavigate } from "react-router-dom";

const forecast = [
  { day: "Mon", icon: Sun, temp: "32°", rain: "10%" },
  { day: "Tue", icon: CloudRain, temp: "28°", rain: "82%" },
  { day: "Wed", icon: CloudRain, temp: "26°", rain: "90%" },
  { day: "Thu", icon: Cloud, temp: "29°", rain: "40%" },
  { day: "Fri", icon: Sun, temp: "31°", rain: "15%" },
];

const alerts = [
  { type: "warning", title: "Heavy Rainfall Expected", desc: "82% chance of rain tomorrow. Secure harvested crops.", icon: CloudRain },
  { type: "danger", title: "Pest Risk Alert", desc: "High humidity increases risk of aphid infestation on rice crops.", icon: AlertTriangle },
];

const WeatherPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="px-4 pt-6 pb-4 flex items-center gap-3">
        <button onClick={() => navigate("/")} className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
          <span className="text-lg">←</span>
        </button>
        <h1 className="text-lg font-bold text-foreground">Weather Alerts</h1>
      </div>

      {/* Current Weather */}
      <motion.div
        className="mx-4 bg-card rounded-2xl p-5 shadow-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Current</p>
            <p className="text-4xl font-bold text-card-foreground tabular-nums mt-1">28°C</p>
            <p className="text-sm text-muted-foreground mt-1">Partly Cloudy · Feels like 31°C</p>
          </div>
          <Cloud size={56} className="text-accent" />
        </div>
        <div className="grid grid-cols-3 gap-2 mt-4">
          <div className="bg-muted rounded-xl p-3 text-center">
            <Droplets size={16} className="text-primary mx-auto" />
            <p className="text-xs text-muted-foreground mt-1">Humidity</p>
            <p className="text-sm font-bold tabular-nums">72%</p>
          </div>
          <div className="bg-muted rounded-xl p-3 text-center">
            <Wind size={16} className="text-primary mx-auto" />
            <p className="text-xs text-muted-foreground mt-1">Wind</p>
            <p className="text-sm font-bold tabular-nums">12 km/h</p>
          </div>
          <div className="bg-muted rounded-xl p-3 text-center">
            <Thermometer size={16} className="text-primary mx-auto" />
            <p className="text-xs text-muted-foreground mt-1">UV Index</p>
            <p className="text-sm font-bold tabular-nums">High</p>
          </div>
        </div>
      </motion.div>

      {/* 5-Day Forecast */}
      <div className="px-4 mt-4">
        <h2 className="font-bold text-sm text-foreground mb-3 uppercase tracking-wider">5-Day Forecast</h2>
        <div className="bg-card rounded-2xl shadow-card overflow-hidden">
          {forecast.map((day, i) => (
            <div key={day.day} className={`flex items-center justify-between px-4 py-3 ${i < forecast.length - 1 ? "border-b border-border" : ""}`}>
              <span className="text-sm font-medium w-10">{day.day}</span>
              <day.icon size={20} className="text-accent" />
              <span className="text-sm font-bold tabular-nums w-10 text-right">{day.temp}</span>
              <div className="flex items-center gap-1">
                <Droplets size={12} className="text-primary" />
                <span className="text-xs tabular-nums text-muted-foreground">{day.rain}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Alerts */}
      <div className="px-4 mt-4">
        <h2 className="font-bold text-sm text-foreground mb-3 uppercase tracking-wider">Active Alerts</h2>
        <div className="space-y-3">
          {alerts.map((alert, i) => (
            <motion.div
              key={i}
              className={`rounded-2xl p-4 shadow-card ${alert.type === "danger" ? "bg-destructive/10 border border-destructive/20" : "bg-accent/10 border border-accent/20"}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <div className="flex items-start gap-3">
                <alert.icon size={20} className={alert.type === "danger" ? "text-destructive" : "text-accent"} />
                <div>
                  <p className="font-bold text-sm text-foreground">{alert.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{alert.desc}</p>
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

export default WeatherPage;
