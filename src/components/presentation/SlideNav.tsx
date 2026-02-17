import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";

interface SlideNavProps {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (i: number) => void;
  onRestart?: () => void;
}

const SlideNav = ({ current, total, onPrev, onNext, onGoTo, onRestart }: SlideNavProps) => (
  <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 md:gap-4 glass-card px-3 py-2 md:px-6 md:py-3"
    onClick={(e) => e.stopPropagation()}
  >
    <button onClick={onPrev} className="text-foreground/60 hover:text-foreground transition-colors disabled:opacity-30" disabled={current === 0}>
      <ChevronLeft size={20} />
    </button>
    <div className="flex gap-1.5 md:gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onGoTo(i)}
          className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
            i === current ? "bg-primary scale-125 shadow-[0_0_10px_hsla(330,100%,65%,0.5)]" : "bg-foreground/20 hover:bg-foreground/40"
          }`}
        />
      ))}
    </div>
    <button onClick={onNext} className="text-foreground/60 hover:text-foreground transition-colors disabled:opacity-30" disabled={current === total - 1}>
      <ChevronRight size={20} />
    </button>
    <span className="text-muted-foreground text-xs ml-2">{current + 1}/{total}</span>
    {current === total - 1 && onRestart && (
      <button onClick={onRestart} className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors text-xs ml-2">
        <RotateCcw size={14} />
        В начало
      </button>
    )}
  </div>
);

export default SlideNav;
