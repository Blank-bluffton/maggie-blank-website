'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  location: string;
  role: string;
}

interface TestimonialCarouselProps {
  headline: string;
  items: Testimonial[];
}

export default function TestimonialCarousel({ headline, items }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Quote className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {headline}
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-12"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-cyan-600 text-cyan-600" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8">
                "{items[currentIndex].quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {items[currentIndex].author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">{items[currentIndex].author}</p>
                  <p className="text-gray-600 text-sm">
                    {items[currentIndex].role} · {items[currentIndex].location}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 glass rounded-full hover:bg-gray-200 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-800" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 bg-cyan-600' 
                      : 'bg-gray-400 hover:bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 glass rounded-full hover:bg-gray-200 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gray-800" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
