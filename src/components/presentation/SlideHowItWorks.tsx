import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Wand2, Share2, FileText, MapPin, Quote, Heart } from "lucide-react";

interface Props { clickCount: number; }

const steps = [
  { num: "1️⃣", label: "Ответь на несколько вопросов", icon: MessageSquare },
  { num: "2️⃣", label: "Получи уникальный сценарий", icon: Wand2 },
  { num: "3️⃣", label: "Поделись и впечатли", icon: Share2 },
];

const cards = [
  { label: "Паспорт свидания", icon: FileText },
  { label: "План", icon: MapPin },
  { label: "Лозунг", icon: Quote },
  { label: "Открытка", icon: Heart },
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
          3 шага до идеального свидания
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, i) => (
              <AnimatePresence key={i}>
                {clickCount >= i + 1 && (
                  <motion.div
                    initial={{ x: -60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="glass-card p-4 md:p-6 flex items-center gap-3 md:gap-5"
                  >
                    <span className="text-2xl md:text-4xl">{step.num}</span>
                    <step.icon size={24} className="text-neon-pink md:w-8 md:h-8" strokeWidth={1.5} />
                    <span className="text-base md:text-2xl font-medium text-foreground">{step.label}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            ))}
          </div>

          {/* Cards */}
          <AnimatePresence>
            {clickCount >= 4 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 gap-4"
              >
                {cards.map((card, i) => (
                  <motion.div
                    key={card.label}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.15, duration: 0.4 }}
                    className="glass-card-strong p-3 md:p-5 flex flex-col items-center gap-2 md:gap-3 text-center"
                    style={{ animation: `float ${3 + i * 0.5}s ease-in-out infinite`, animationDelay: `${i * 0.3}s` }}
                  >
                    <card.icon size={24} className="text-neon-gold md:w-9 md:h-9" strokeWidth={1.5} />
                    <span className="text-sm md:text-lg font-medium text-foreground">✔ {card.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default SlideHowItWorks;
