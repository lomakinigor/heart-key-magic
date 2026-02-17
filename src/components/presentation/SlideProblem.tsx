import { motion, AnimatePresence } from "framer-motion";
import { UtensilsCrossed, Film, Footprints } from "lucide-react";

interface Props { clickCount: number; }

const boringItems = [
  { icon: UtensilsCrossed, label: "Ресторан", delay: 0 },
  { icon: Film, label: "Кино", delay: 0.2 },
  { icon: Footprints, label: "Прогулка", delay: 0.4 },
];

const SlideProblem = ({ clickCount }: Props) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center px-8">
      <div className="max-w-5xl w-full text-center">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="heading-display text-5xl md:text-7xl text-gradient-pink mb-16"
        >
          Почему свидания стали скучными?
        </motion.h2>

        {/* Boring options */}
        <AnimatePresence>
          {clickCount >= 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-center gap-8 mb-16"
            >
              {boringItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: item.delay, duration: 0.5 }}
                  className="glass-card p-8 flex flex-col items-center gap-4 w-48"
                >
                  <item.icon size={48} className="text-muted-foreground" strokeWidth={1.2} />
                  <span className="text-xl text-muted-foreground line-through decoration-primary/60">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Emotional message */}
        <AnimatePresence>
          {clickCount >= 2 && (
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="mb-12"
            >
              <p className="text-2xl md:text-3xl text-foreground/70 font-light leading-relaxed">
                Она ждёт <span className="text-neon-pink font-semibold">эмоций</span>.
                <br />
                Ты не знаешь, чем <span className="text-neon-lavender font-semibold">удивить</span>.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Solution */}
        <AnimatePresence>
          {clickCount >= 3 && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <p className="text-4xl md:text-6xl font-bold text-gradient-gold heading-display">
                Мы решили это.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SlideProblem;
