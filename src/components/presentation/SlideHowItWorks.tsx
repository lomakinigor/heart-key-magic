import { motion, AnimatePresence } from "framer-motion";
import { Route, ClipboardCheck, CloudRain, Send, BookHeart } from "lucide-react";

interface Props { clickCount: number; }

const features = [
  { label: "Маршрут по этапам", icon: Route },
  { label: "Список подготовки", icon: ClipboardCheck },
  { label: "План Б", icon: CloudRain },
  { label: "Романтическое приглашение", icon: Send },
  { label: "Паспорт свидания", icon: BookHeart },
];

const SlideHowItWorks = ({ clickCount }: Props) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center px-8">
      <div className="max-w-6xl w-full">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="heading-display text-3xl md:text-7xl text-gradient-pink text-center mb-8 md:mb-16"
        >
          Не просто идея — готовый сценарий
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-5">
          {features.map((feature, i) => (
            <AnimatePresence key={feature.label}>
              {clickCount >= i + 1 && (
                <motion.div
                  initial={{ y: 35, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="glass-card-strong p-4 md:p-6 flex flex-col items-center justify-center gap-3 text-center min-h-32 md:min-h-52"
                >
                  <feature.icon size={30} className="text-neon-gold md:w-11 md:h-11" strokeWidth={1.4} />
                  <span className="text-sm md:text-xl font-medium text-foreground">{feature.label}</span>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
        <AnimatePresence>
          {clickCount >= 5 && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-sm md:text-xl text-muted-foreground mt-7">
              Результатом можно поделиться через Telegram, ВК и MAX
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SlideHowItWorks;
