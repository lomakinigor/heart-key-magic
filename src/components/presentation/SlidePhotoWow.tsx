import { motion, AnimatePresence } from "framer-motion";
import photoOriginal from "@/assets/photo-original.jpg";
import photoRomantic from "@/assets/photo-romantic.png";
import AnimatedPhoto from "./AnimatedPhoto";

interface Props { clickCount: number; }

const SlidePhotoWow = ({ clickCount }: Props) => {
  const visuals = [
    { label: "Обычное фото", kind: "image", src: photoOriginal },
    { label: "Романтическое фото", kind: "image", src: photoRomantic },
    { label: "Оживлённое фото", kind: "video", src: "" },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center px-5 md:px-8">
      <div className="max-w-6xl w-full">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="heading-display text-3xl md:text-6xl text-gradient-pink text-center mb-2 md:mb-3"
        >
          От снимка — к ожившему воспоминанию
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-sm md:text-lg text-muted-foreground mb-4 md:mb-6"
        >
          Одна фотография. Три состояния личной истории.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mb-4 md:mb-6">
          {visuals.map((visual, i) => (
            <AnimatePresence key={visual.label}>
              {clickCount >= i + 1 && (
                <motion.div data-reveal-step={i + 1} initial={{ y: 35, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="relative h-56 md:h-56 rounded-xl md:rounded-2xl overflow-hidden glass-card-strong">
                  {visual.kind === "video" ? (
                    <AnimatedPhoto />
                  ) : (
                    <img src={visual.src} alt={visual.label} className="w-full h-full object-cover" />
                  )}
                  <div className={`pointer-events-none absolute inset-x-0 p-4 md:p-5 ${visual.kind === "video" ? "top-0 bg-gradient-to-b from-background to-transparent" : "bottom-0 bg-gradient-to-t from-background to-transparent"}`}>
                    <span className="text-base md:text-xl font-semibold text-foreground">{visual.label}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>

        {/* Features + prices */}
        <AnimatePresence>
          {clickCount >= 4 && (
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 max-w-5xl mx-auto"
            >
              {[
                { feature: "Первый сценарий", price: "Бесплатно", color: "text-neon-gold" },
                { feature: "2 сценария", price: "49 ₽", color: "text-neon-pink" },
                { feature: "Портрет", price: "199 ₽", color: "text-neon-lavender" },
                { feature: "Оживлённое фото", price: "499 ₽", color: "text-neon-gold" },
              ].map((item, i) => (
                <motion.div
                  key={item.feature}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.15 }}
                  className="glass-card-strong p-2 md:p-4 text-center"
                >
                  <p className="text-sm md:text-lg text-foreground/80 mb-1 md:mb-2">{item.feature}</p>
                  <p className={`text-2xl md:text-3xl font-bold ${item.color}`}>{item.price}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SlidePhotoWow;
