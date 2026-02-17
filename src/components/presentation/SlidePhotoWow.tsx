import { motion, AnimatePresence } from "framer-motion";
import photoOriginal from "@/assets/photo-original.jpg";
import photoRomantic from "@/assets/photo-romantic.png";
import photoWedding from "@/assets/photo-wedding.jpg";
import romanticVideo from "@/assets/romantic-video.mp4";
import { useState, useEffect } from "react";

interface Props { clickCount: number; }

const SlidePhotoWow = ({ clickCount }: Props) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (clickCount >= 1 && clickCount <= 4) {
      setPhase(Math.min(clickCount, 3));
    }
  }, [clickCount]);

  const photos = [photoOriginal, photoRomantic, photoWedding];
  const labels = ["Обычное фото", "Романтическое фото", "Свадебный образ", "Оживлённое видео"];

  return (
    <div className="relative w-full h-full flex items-center justify-center px-8">
      <div className="max-w-6xl w-full">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="heading-display text-5xl md:text-7xl text-gradient-pink text-center mb-6"
        >
          Из обычного фото — в историю любви
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-xl text-muted-foreground mb-12"
        >
          Кликните, чтобы увидеть трансформацию →
        </motion.p>

        {/* Photo transformation */}
        <div className="flex justify-center mb-12">
        <div className="relative w-[500px] h-[360px] rounded-2xl overflow-hidden" style={{ animation: "pulse-glow 3s ease-in-out infinite" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={phase}
                initial={{ opacity: 0, scale: 1.1, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: -90 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                {phase < 3 ? (
                  <img
                    src={photos[phase]}
                    alt={labels[phase]}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    src={romanticVideo}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                  />
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4">
                  <span className="text-lg font-semibold text-foreground">{labels[phase]}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress dots */}
            <div className="absolute top-4 right-4 flex gap-2 z-10">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === phase ? "bg-primary scale-125" : "bg-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Features + prices */}
        <AnimatePresence>
          {clickCount >= 4 && (
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="grid grid-cols-3 gap-6 max-w-3xl mx-auto"
            >
              {[
                { feature: "2 свидания", price: "49 ₽", color: "text-neon-pink" },
                { feature: "Фото", price: "199 ₽", color: "text-neon-lavender" },
                { feature: "Видео", price: "499 ₽", color: "text-neon-gold" },
              ].map((item, i) => (
                <motion.div
                  key={item.feature}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.15 }}
                  className="glass-card-strong p-6 text-center"
                >
                  <p className="text-lg text-foreground/80 mb-2">{item.feature}</p>
                  <p className={`text-3xl font-bold ${item.color}`}>{item.price}</p>
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
