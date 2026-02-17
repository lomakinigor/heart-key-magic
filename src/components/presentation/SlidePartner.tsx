import { motion, AnimatePresence } from "framer-motion";
import { Users, ArrowDown, Percent } from "lucide-react";

interface Props { clickCount: number; }

const SlidePartner = ({ clickCount }: Props) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center px-8">
      <div className="max-w-5xl w-full text-center">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="heading-display text-3xl md:text-7xl text-gradient-gold mb-8 md:mb-16"
        >
          Партнёрская программа 2 уровня
        </motion.h2>

        {/* Diagram */}
        <AnimatePresence>
          {clickCount >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-6 mb-16"
            >
              {/* Level 1 */}
              <div className="glass-card-strong p-4 md:p-8 flex items-center gap-3 md:gap-6 w-full max-w-[400px]">
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-neon-pink to-neon-lavender flex items-center justify-center flex-shrink-0">
                  <Users size={20} className="text-foreground md:w-8 md:h-8" />
                </div>
                <div className="text-left">
                  <p className="text-lg md:text-2xl font-bold text-foreground">Вы</p>
                  <p className="text-sm md:text-lg text-muted-foreground">Уровень 1</p>
                </div>
                <div className="ml-auto flex items-center gap-1 md:gap-2">
                  <Percent size={20} className="text-neon-gold md:w-7 md:h-7" />
                  <span className="text-3xl md:text-5xl font-bold text-gradient-gold">20%</span>
                </div>
              </div>

              <ArrowDown size={32} className="text-neon-gold" />

              {/* Level 2 */}
              <div className="glass-card p-4 md:p-8 flex items-center gap-3 md:gap-6 w-full max-w-[400px]">
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-neon-lavender to-neon-gold/50 flex items-center justify-center flex-shrink-0">
                  <Users size={20} className="text-foreground md:w-8 md:h-8" />
                </div>
                <div className="text-left">
                  <p className="text-lg md:text-2xl font-bold text-foreground">Ваш партнёр</p>
                  <p className="text-sm md:text-lg text-muted-foreground">Уровень 2</p>
                </div>
                <div className="ml-auto flex items-center gap-1 md:gap-2">
                  <Percent size={20} className="text-neon-lavender md:w-7 md:h-7" />
                  <span className="text-3xl md:text-5xl font-bold text-neon-lavender">10%</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {clickCount >= 2 && (
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="space-y-6"
            >
              <p className="text-2xl md:text-3xl text-foreground/80 font-light">
                Создавайте команду.<br />
                Получайте <span className="text-neon-gold font-semibold">доход</span> с каждой покупки.
              </p>
              <a href="https://mood-date-maker.lovable.app" target="_blank" rel="noopener noreferrer"
                className="btn-partner inline-block" onClick={(e) => e.stopPropagation()}>
                Стать партнёром
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SlidePartner;
