"use client";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  testimonial: {
    text: string;
    author: string;
    title: string;
    company: string;
  };
  isVisible: boolean;
  direction?: number;
}

export function TestimonialCard({ testimonial, direction = 0 }: TestimonialCardProps) {
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.5,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.8,
        bounce: 0.3,
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.5,
      transition: {
        type: "spring",
        duration: 0.5,
      },
    }),
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <motion.div
      initial="enter"
      animate="center"
      exit="exit"
      custom={direction}
      variants={variants as any}
      className="relative bg-white rounded-xl shadow-lg p-8"
    >
      <div className="relative z-10">
        {/* Quote Icon */}
        <svg
          className="w-10 h-10 mb-4 text-[var(--color-accent)]/20"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>

        {/* Testimonial Text */}
        <p className="relative mt-4 text-base font-normal text-gray-700 mb-6">
          {testimonial.text}
        </p>

        {/* Author Info */}
        <div className="relative mt-6 pt-6 border-t border-gray-300">
          <p className="font-bold text-[var(--color-accent)] text-lg">{testimonial.author}</p>
          <p className="mt-1 text-sm font-semibold text-gray-700">
            {testimonial.title}
          </p>
          <p className="mt-1 text-sm text-gray-600">
            {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
