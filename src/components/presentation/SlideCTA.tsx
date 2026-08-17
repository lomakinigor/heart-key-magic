import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit, Share2, Users, ShieldCheck, Rocket, BriefcaseBusiness } from "lucide-react";

interface Props { clickCount: number; }

const ctaItems = [
  { icon: BrainCircuit, label: "AI-генерация сценариев" },
  { icon: Share2, label: "Фото, видео и социальное распространение" },
  { icon: Users, label: "Партнёрский кабинет" },
  { icon: ShieldCheck, label: "Административный контур" },
];

const SlideCTA = ({ clickCount }: Props) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center px-8">
      <div className="max-w-5xl w-full text-center">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="heading-display text-3xl md:text-7xl text-gradient-pink mb-8 md:mb-16"
        >
          Готовый цифровой продукт
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-3 md:gap-5 mb-8 md:mb-12 max-w-4xl mx-auto">
          {ctaItems.map((item, i) => (
            <AnimatePresence key={i}>
              {clickCount >= i + 1 && (
                <motion.div
                  initial={{ x: -60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="glass-card p-4 md:p-6 flex items-center gap-3 md:gap-5"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-neon-pink to-neon-lavender flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} className="text-foreground md:w-6 md:h-6" />
                  </div>
                  <span className="text-base md:text-2xl font-medium text-foreground text-left">✔ {item.label}</span>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>

        <AnimatePresence>
          {clickCount >= 4 && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="space-y-8"
            >
              <p className="text-2xl md:text-5xl font-bold heading-display text-gradient-gold">
                Посмотрите, как он работает
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://mood-date-maker.lovable.app" target="_blank" rel="noopener noreferrer"
                  className="btn-magic inline-flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                  <Rocket size={24} />
                  Попробовать приложение
                </a>
                <a href="https://portfolio-web-sigma-ruddy.vercel.app" target="_blank" rel="noopener noreferrer"
                  className="btn-partner inline-flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                  <BriefcaseBusiness size={24} />
                  Вернуться в портфолио
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SlideCTA;
