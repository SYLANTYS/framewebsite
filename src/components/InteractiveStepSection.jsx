"use client";

import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";

const steps = [
  {
    title: "Organize Topics",
    text: "Keep ideas grouped into clean topics so every thread, note, or reflection has a place to live.",
    image: "/images/topics.png",
  },
  {
    title: "Record What Matters",
    text: "Capture moments and thoughts quickly so important context does not disappear between sessions.",
    image: "/images/record.png",
  },
  {
    title: "Reflect With Feedback",
    text: "Review feedback in a focused view that helps you understand patterns and keep improving.",
    image: "/images/feedback.png",
  },
  {
    title: "Track Your Analytics",
    text: "See progress and activity at a glance with analytics that make your habits easier to understand.",
    image: "/images/analytics.png",
  },
];

export default function InteractiveStepSection() {
  const [activeStep, setActiveStep] = useState(0);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setActiveStep((prev) => (prev + 1) % steps.length),
    onSwipedRight: () =>
      setActiveStep((prev) => (prev - 1 + steps.length) % steps.length),
    preventScrollOnSwipe: true,
    trackMouse: true, // allows swiping with mouse drag
  });

  return (
    <section className="py-16 text-white px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image and Dots */}
        <div className="relative flex flex-col items-center" {...swipeHandlers}>
          {steps.map((step, idx) => (
            <Image
              key={idx}
              src={step.image}
              alt={step.title}
              width={1284}
              height={2778}
              className={`w-full max-w-xs rounded-3xl shadow-2xl border border-white/20 transition-all duration-300 ${
                activeStep === idx ? "opacity-100" : "opacity-0 absolute"
              }`}
            />
          ))}

          {/* Dots */}
          <div className="flex space-x-3 mt-4">
            {steps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === activeStep ? "bg-white scale-125" : "bg-white/30"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Clickable Text Boxes */}
        <div className="flex flex-col gap-4">
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`text-left p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                idx === activeStep
                  ? "border-2 border-white shadow-xl scale-[1.03]"
                  : "border-2 border-white/30 shadow-md hover:scale-[1.01]"
              }`}
            >
              <h4 className="text-lg font-semibold">{step.title}</h4>
              <p className="text-sm mt-1 text-white/80">{step.text}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
