"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { raceData } from "@/data/race";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
}

function calculateTimeLeft(targetDate: string): TimeLeft {
  const difference = new Date(targetDate + "T00:00:00").getTime() - new Date().getTime();
  if (difference <= 0) return { days: 0, hours: 0, minutes: 0 };

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
  };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    setTimeLeft(calculateTimeLeft(raceData.date));
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(raceData.date));
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Días", value: timeLeft.days },
    { label: "Horas", value: timeLeft.hours },
    { label: "Min", value: timeLeft.minutes },
  ];

  return (
    <section className="py-20 px-4 bg-[#0B0B0B]">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[#FF5A1F] text-sm uppercase tracking-widest mb-8">Quedan</p>
        <div className="flex justify-center gap-8 md:gap-16">
          {units.map((unit, i) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <span className="text-5xl md:text-7xl font-black text-white tabular-nums">
                {String(unit.value).padStart(2, "0")}
              </span>
              <span className="text-white/40 text-sm mt-2 uppercase tracking-wider">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>
        <p className="text-white/30 text-sm mt-8">
          hasta el {new Date(raceData.date + "T00:00:00").toLocaleDateString("es-ES", {
            day: "numeric",
            month: "long",
          })}
        </p>
      </div>
    </section>
  );
}