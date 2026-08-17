import { motion, AnimatePresence } from "framer-motion";
import { MapPin, WalletCards, UsersRound, Sparkles, Flame } from "lucide-react";

interface Props { clickCount: number; }

const answers = [
  { icon: MapPin, label: "Город" },
  { icon: WalletCards, label: "Бюджет" },
  { icon: UsersRound, label: "Формат" },
  { icon: Sparkles, label: "Настроение" },
  { icon: Flame, label: "Смелость" },
];

const SlideProblem = ({ clickCount }: Props) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center px-8">
      <div className="max-w-5xl w-full text-center">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="heading-display text-3xl md:text-7xl text-gradient-pink mb-8 md:mb-16"
        >
          Пять ответов — готовое свидание
        </motion.h2>

        <div className="grid grid-cols-5 gap-2 md:gap-5 mb-8 md:mb-14">
          {answers.map((item, i) => (
            <AnimatePresence key={item.label}>
              {clickCount >= i + 1 && (
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="glass-card p-3 md:p-6 flex flex-col items-center gap-2 md:gap-4"
                >
                  <item.icon size={28} className="text-neon-pink md:w-10 md:h-10" strokeWidth={1.4} />
                  <span className="text-xs md:text-xl text-foreground">{item.label}</span>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>

        {/* Solution */}
        <AnimatePresence>
          {clickCount >= 5 && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <p className="text-2xl md:text-5xl font-bold text-gradient-gold heading-display">
                Персональный сценарий для вашего города и настроения
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SlideProblem;
