import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight } from 'lucide-react';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Delivering Market Leading Software",
    description: "At SJ IT LTD we are the proud pioneers of leading Software Solutions. Developed in house by our team of dedicated software professionals and with a proven record across a range of Projects.",
    buttonText: "About Us",
    buttonClass: "bg-[#ef4444] hover:bg-red-600 text-white"
  },
  {
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Streamline Your IT & Automation Workflow",
    description: "Empowering businesses with top-tier software solutions, graphic design, and full-scale IT automation tailored to your unique needs.",
    buttonText: "Explore Our Services",
    buttonClass: "bg-blue-600 hover:bg-blue-700 text-white"
  },
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Expert Web Development Solutions",
    description: "We build intuitive, robust, and scalable web applications designed to drive your business forward and attract more customers.",
    buttonText: "Learn More",
    buttonClass: "bg-cyan-500 hover:bg-cyan-600 text-white"
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <motion.div
          key={`content-${currentSlide}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl mt-16"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-[1.1]">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-serif max-w-2xl">
            {slides[currentSlide].description}
          </p>
          <button className={`px-8 py-3.5 rounded text-lg font-bold transition-all ${slides[currentSlide].buttonClass}`}>
            {slides[currentSlide].buttonText}
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all ${currentSlide === idx ? 'bg-[#ef4444] scale-125' : 'bg-white/50 hover:bg-white/80'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
