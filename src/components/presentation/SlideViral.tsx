import { motion, AnimatePresence } from "framer-motion";
import { Mail, Video, FileText, Users, ArrowRight } from "lucide-react";

interface Props { clickCount: number; }

const viralPaths = [
  { from: "Открытка", icon: Mail, to: "Пересылка", result: "Новый пользователь" },
  { from: "Видео", icon: Video, to: "Ссылка", result: "Новый пользователь" },
  { from: "Паспорт", icon: FileText, to: "Переход", result: "Новый пользователь" },
];

const SlideViral = ({ clickCount }: Props) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center px-8">
      <div className="max-w-5xl w-full text-center">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="heading-display text-5xl md:text-7xl text-gradient-pink mb-16"
        >
          Это приложение распространяется само.
        </motion.h2>

        {/* Viral paths */}
        <div className="space-y-6 mb-16">
          {viralPaths.map((path, i) => (
            <AnimatePresence key={i}>
              {clickCount >= i + 1 && (
                <motion.div
                  initial={{ x: -80, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="glass-card p-6 flex items-center justify-center gap-6 max-w-3xl mx-auto"
                >
                  <div className="flex items-center gap-3">
                    <path.icon size={28} className="text-neon-pink" strokeWidth={1.5} />
                    <span className="text-xl font-medium">{path.from}</span>
                  </div>
                  <ArrowRight size={24} className="text-neon-gold" />
                  <span className="text-xl text-foreground/70">{path.to}</span>
                  <ArrowRight size={24} className="text-neon-gold" />
                  <div className="flex items-center gap-2">
                    <Users size={24} className="text-neon-lavender" />
                    <span className="text-xl font-semibold text-neon-lavender">{path.result}</span>
                  </div>
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
            >
              <p className="text-4xl md:text-6xl font-bold heading-display text-gradient-gold">
                Каждое свидание = новые пользователи.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SlideViral;
