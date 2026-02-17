import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import SlideWrapper from "@/components/presentation/SlideWrapper";
import SlideCover from "@/components/presentation/SlideCover";
import SlideProblem from "@/components/presentation/SlideProblem";
import SlideHowItWorks from "@/components/presentation/SlideHowItWorks";
import SlidePhotoWow from "@/components/presentation/SlidePhotoWow";
import SlideViral from "@/components/presentation/SlideViral";
import SlidePartner from "@/components/presentation/SlidePartner";
import SlideCTA from "@/components/presentation/SlideCTA";
import SlideNav from "@/components/presentation/SlideNav";
import { useEffect } from "react";

const TOTAL_SLIDES = 7;

const SPEAKER_NOTES = [
  "Добро пожаловать! Сегодня я расскажу вам о революционном приложении для романтических свиданий. Наше приложение помогает создавать незабываемые моменты. Первое свидание — бесплатно!",
  "Все мы знаем, как сложно придумать что-то новое. Рестораны, кино, прогулки — это скучно. Люди хотят эмоций, но не знают, где их взять. Мы решили эту проблему.",
  "Всего три шага — и у вас готов уникальный сценарий свидания. Отвечаете на вопросы, получаете персональный план, делитесь и впечатляете. Всё просто!",
  "А вот наша вау-функция: превращение обычного фото в романтическое произведение искусства. Посмотрите на трансформацию — из обычного фото в историю любви!",
  "Самое важное — наше приложение распространяется вирусно. Каждая открытка, видео или паспорт свидания — это новый пользователь. Органический рост без затрат на рекламу.",
  "Теперь о главном — партнёрская программа. Два уровня: вы получаете 20% с каждой покупки, ваш партнёр — 10%. Создавайте команду и зарабатывайте!",
  "Начните прямо сейчас. Получите реферальную ссылку, запустите команду и зарабатывайте на вирусном продукте. Ссылка на приложение в описании.",
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [showNotes, setShowNotes] = useState(false);

  const maxClicks = [2, 4, 5, 5, 5, 3, 5];

  const nextSlide = useCallback(() => {
    if (currentSlide < TOTAL_SLIDES - 1) {
      setCurrentSlide((s) => s + 1);
      setClickCount(0);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide((s) => s - 1);
      setClickCount(0);
    }
  }, [currentSlide]);

  const handleSlideClick = useCallback(() => {
    setClickCount((c) => {
      const next = c + 1;
      if (next > maxClicks[currentSlide]) {
        if (currentSlide < TOTAL_SLIDES - 1) {
          setCurrentSlide((s) => s + 1);
          return 0;
        }
      }
      return next;
    });
  }, [currentSlide]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        handleSlideClick();
      }
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowDown") nextSlide();
      if (e.key === "ArrowUp") prevSlide();
      if (e.key === "n" || e.key === "N") setShowNotes((s) => !s);
      if (e.key === "f" || e.key === "F") {
        document.documentElement.requestFullscreen?.();
      }
      if (e.key === "Escape") {
        document.exitFullscreen?.();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleSlideClick, nextSlide, prevSlide]);

  const slides = [
    <SlideCover key="cover" clickCount={clickCount} />,
    <SlideProblem key="problem" clickCount={clickCount} />,
    <SlideHowItWorks key="how" clickCount={clickCount} />,
    <SlidePhotoWow key="photo" clickCount={clickCount} />,
    <SlideViral key="viral" clickCount={clickCount} />,
    <SlidePartner key="partner" clickCount={clickCount} />,
    <SlideCTA key="cta" clickCount={clickCount} />,
  ];

  return (
    <div
      className="relative w-screen h-screen overflow-hidden slide-gradient cursor-pointer select-none"
      onClick={handleSlideClick}
    >
      {/* Particles bg */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              bottom: `-5%`,
              background: `hsla(${330 + Math.random() * 40}, 80%, 65%, ${0.15 + Math.random() * 0.2})`,
              animation: `particle ${8 + Math.random() * 12}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <SlideWrapper key={currentSlide}>{slides[currentSlide]}</SlideWrapper>
      </AnimatePresence>

      <SlideNav
        current={currentSlide}
        total={TOTAL_SLIDES}
        onPrev={prevSlide}
        onNext={nextSlide}
        onGoTo={(i) => { setCurrentSlide(i); setClickCount(0); }}
      />

      {/* Speaker notes */}
      {showNotes && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 glass-card-strong p-6 max-w-2xl z-50">
          <p className="text-sm text-foreground/80">{SPEAKER_NOTES[currentSlide]}</p>
        </div>
      )}

      {/* Hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-muted-foreground text-xs opacity-50 z-40">
        Клик / Пробел — далее • N — заметки • F — полный экран
      </div>
    </div>
  );
};

export default Index;
