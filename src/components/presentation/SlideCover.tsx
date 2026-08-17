import { motion, AnimatePresence } from "framer-motion";
import heroCouple from "@/assets/hero-couple.jpg";
import { HeartHandshake, Sparkles } from "lucide-react";
import { PRESENTATION_TITLE } from "@/lib/presentation";

interface Props { clickCount: number; }

const SlideCover = ({ clickCount }: Props) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroCouple} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      </div>

      <div className="relative z-10 text-center px-8 max-w-5xl">
        {/* Animated key */}
        <AnimatePresence>
          {clickCount >= 0 && (
            <motion.div
              initial={{ rotate: -30, scale: 0.5, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8 inline-block"
            >
              <HeartHandshake size={48} className="text-neon-gold mx-auto neon-glow-gold md:w-20 md:h-20" strokeWidth={1.5} />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="heading-display text-4xl md:text-8xl text-gradient-pink leading-tight mb-4 md:mb-6"
        >
          {PRESENTATION_TITLE}
        </motion.h1>

        <AnimatePresence>
          {clickCount >= 1 && (
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="text-xl md:text-3xl text-foreground/80 font-light mb-4"
            >
              Не выбирайте между кино и рестораном. Получите необычный сценарий, созданный под вашу пару.
            </motion.p>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {clickCount >= 1 && (
            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-6"
            >
              <a href="https://mood-date-maker.lovable.app" target="_blank" rel="noopener noreferrer"
                className="btn-magic inline-flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                <Sparkles size={24} />
                Попробовать приложение
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <span className="text-lg">💕</span>
                <span className="text-sm">Первый сценарий — бесплатно</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SlideCover;
