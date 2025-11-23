"use client";

import { Button } from "~/components/ui/button";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "~/components/common/container";
import Image from "next/image";

type ComponentProps = {
  banner: {
    title: string;
    subtitle: string;
    buttonText: string;
  }[];
};

export const Banner = ({ banner }: ComponentProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % banner.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [banner.length]);

  const title = banner[activeIndex]?.title ?? "";
  const words = title.split(" ");

  const firstLine = words.slice(0, 2).join(" ");
  const secondLine = words.slice(2).join(" ");

  const bannerVariants = {
    hidden: { 
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeIn",
      },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
  };

  // CHANGED: Modified titleVariants to animate from above with adjusted y values
  const titleVariants = {
    hidden: { 
      y: -100, // Increased distance for more pronounced effect from above
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 1.8, 
        ease: "easeOut" 
      },
    },
    exit: {
      y: -100, // Exit upwards
      opacity: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeIn" 
      },
    },
  };

  // CHANGED: Modified subtitleVariants to animate from below
  const subtitleVariants = {
    hidden: { 
      y: -80, // Changed to positive to come from below
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 1.8, 
        ease: "easeOut" 
      },
    },
    exit: {
      y: 100, // Exit downwards
      opacity: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeIn" 
      },
    },
  };

  // CHANGED: Modified buttonVariants to animate from below
  const buttonVariants = {
    hidden: { 
      y: 100, // Changed to positive to come from below
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 1.3, 
        ease: "easeOut" 
      },
    },
    exit: {
      y: 100, // Exit downwards
      opacity: 1,
      transition: { 
        duration: 0.5, 
        ease: "easeIn" 
      },
    },
  };

  return (
    <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[calc(80dvh)] overflow-hidden bg-primary z-0">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/kashmir.jpg"
          alt="Banner background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Blue overlay with blend mode */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: '#0085CC',
            mixBlendMode: 'multiply',
            opacity: 0.9,
          }}
        />
      </div>
      <Container className="h-full relative z-[1]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            variants={bannerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 flex items-center px-3 sm:px-4 md:px-6 lg:px-8 w-full min-w-0 z-[1]"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full max-w-7xl mx-auto grid gap-2 sm:gap-3 md:gap-4 min-w-0 px-2"
            >
              {/* Responsive title with better mobile handling */}
              <motion.p
                variants={titleVariants}
                className="whitespace-normal font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold leading-tight sm:leading-snug md:leading-normal lg:leading-[4.5rem] xl:leading-[5.5rem] 2xl:leading-[6rem] text-white"
              >
                {firstLine} <span className="block">{secondLine}</span>
              </motion.p>
              <motion.p
                variants={subtitleVariants}
                className="mt-2 sm:mt-3 md:mt-4 font-text text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white max-w-3xl"
              >
                {banner[activeIndex]?.subtitle}
              </motion.p>
              <motion.div 
                variants={buttonVariants} 
                className="mt-4 sm:mt-5 md:mt-6"
              >
                <Button 
                  type="button"
                  variant="secondary"
                  size="lg" 
                  className="w-full sm:w-fit text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-6 md:px-8 py-2 sm:py-3"
                >
                  {banner[activeIndex]?.buttonText}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </Container>
      
      {/* Slider dots/indicators - Responsive positioning */}
      <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 left-0 right-0 z-[2] flex justify-center gap-1.5 sm:gap-2 px-4">
        {banner.map((_, index) => (
          <button
            key={index}
            className={`h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-white w-4 sm:w-6"
                : "bg-white/50 hover:bg-white/75"
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};