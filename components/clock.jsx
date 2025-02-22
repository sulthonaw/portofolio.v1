"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function AnimatedClock() {
  const [time, setTime] = useState(getCurrentTime());

  // Helper function to get the current time and split into digits
  function getCurrentTime() {
    const now = new Date();
    return {
      hours: String(now.getHours()).padStart(2, "0").split(""),
      minutes: String(now.getMinutes()).padStart(2, "0").split(""),
      seconds: String(now.getSeconds()).padStart(2, "0").split(""),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [time]);

  // Animation variants
  const slideVariant = {
    initial: { y: -10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 10, opacity: 0 },
  };

  return (
    <div className="text-sm">
      <p className="text-slate-600">Malang, Indonesia</p>
      <div className="flex space-x-2 items-center">
        {/* Hours */}
        <div className="flex flex-row items-center">
          {time.hours.map((digit, index) => (
            <AnimatePresence mode="popLayout" key={index}>
              <motion.div key={digit} variants={slideVariant} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
                <p>{digit}</p>
              </motion.div>
            </AnimatePresence>
          ))}
        </div>

        {/* Separator */}
        <div className="">:</div>

        {/* Minutes */}
        <div className="flex flex-row items-center">
          {time.minutes.map((digit, index) => (
            <AnimatePresence mode="popLayout" key={index}>
              <motion.div key={digit} variants={slideVariant} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
                <p>{digit}</p>
              </motion.div>
            </AnimatePresence>
          ))}
        </div>

        {/* Separator */}
        <div className="">:</div>

        {/* Seconds */}
        <div className="flex flex-row items-center">
          {time.seconds.map((digit, index) => (
            <AnimatePresence mode="popLayout" key={index}>
              <motion.div key={digit} variants={slideVariant} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
                <p>{digit}</p>
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
      </div>
    </div>
  );
}
