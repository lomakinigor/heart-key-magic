import { motion, AnimatePresence } from "framer-motion";
import { Link2, Users, TrendingUp, Rocket } from "lucide-react";

interface Props { clickCount: number; }

const ctaItems = [
  { icon: Link2, label: "Получить свою реферальную ссылку" },
  { icon: Users, label: "Запустить команду" },
  { icon: TrendingUp, label: "Зарабатывать на вирусном продукте" },
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
          Сегодня вы можете:
        </motion.h2>

        <div className="space-y-6 mb-16 max-w-2xl mx-auto">
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
              <p className="text-3xl md:text-7xl font-bold heading-display text-gradient-gold">
                Начните сегодня.
              </p>
              <a href="https://mood-date-maker.lovable.app" target="_blank" rel="noopener noreferrer"
                className="btn-magic inline-flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                <Rocket size={24} />
                Перейти в приложение
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SlideCTA;
