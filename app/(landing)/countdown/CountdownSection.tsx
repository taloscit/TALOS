"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

const getTimeLeft = (targetDate: number): TimeLeft => {
    const now = Date.now();
    const diff = Math.max(targetDate - now, 0);
    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    };
};

function FlipUnit({ value, label, opacityLabel }: { value: number; label: string; opacityLabel?: any }) {
    const padded = String(value).padStart(2, "0");
    const textClass = "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-6xl font-extrabold text-white tracking-wide leading-none";

    return (
        <div className="flex flex-col items-center">
            <div className="w-16 h-20 md:w-24 md:h-32 rounded-lg shadow-lg overflow-hidden relative bg-black border border-white/10">
                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-red-500 to-red-700" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-zinc-900" />
                <span className={textClass} style={{ clipPath: "inset(0 0 50% 0)" }}>{padded}</span>
                <span className={textClass} style={{ clipPath: "inset(50% 0 0 0)" }}>{padded}</span>
                <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-black/50" />
            </div>

            <motion.span
                style={{ opacity: opacityLabel }}
                className="mt-2 text-[10px] md:text-sm uppercase text-red-300 tracking-wider"
            >
                {label}
            </motion.span>
        </div>
    );
}

export default function CountdownSection() {
    const targetDate = new Date("2026-02-14T00:00:00").getTime();
    const [isMounted, setIsMounted] = useState(false);
    const [time, setTime] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    // Animation Refs & State
    const triggerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const [originY, setOriginY] = useState(0);
    const [navHeight, setNavHeight] = useState(0);

    useEffect(() => {
        setIsMounted(true);
        setTime(getTimeLeft(targetDate));

        const updatePosition = () => {
            if (triggerRef.current) {
                const rect = triggerRef.current.getBoundingClientRect();
                const navbar = document.getElementById("floating-navbar");
                const navbarHeight = navbar ? navbar.offsetHeight : 0;

                setOriginY(rect.top + window.scrollY);
                setNavHeight(navbarHeight);
            }
        };

        updatePosition();
        window.addEventListener("resize", updatePosition);

        const interval = setInterval(() => setTime(getTimeLeft(targetDate)), 1000);
        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", updatePosition);
        };
    }, [targetDate]);

    const labelMap = Object.entries(time);

    // Animation Transforms
    const scrollRange = [0, 300];
    const topPos = useTransform(scrollY, scrollRange, [originY, navHeight + 10]);

    const right = useTransform(scrollY, scrollRange, ["50%", "2%"]);
    const translateX = useTransform(scrollY, scrollRange, ["50%", "0%"]);
    const scale = useTransform(scrollY, scrollRange, [1, 0.4]);
    const opacityLabel = useTransform(scrollY, [0, 150], [1, 0]);

    return (
        <>
            {/* Placeholder to reserve space and measure position */}
            <div ref={triggerRef} className="w-full h-[180px] md:h-[220px]" />

            <motion.div
                style={{
                    position: "fixed",
                    top: isMounted ? topPos : undefined,
                    right,
                    translateX,
                    scale,
                    zIndex: 50,
                    transformOrigin: "right top",
                    opacity: isMounted ? 1 : 0
                }}
                className="flex flex-col items-center pointer-events-none"
            >
                <motion.p
                    style={{ opacity: opacityLabel }}
                    className="text-primary tracking-widest uppercase text-xs md:text-sm font-semibold mb-6 text-red-500 whitespace-nowrap"
                >
                    The Countdown Begins
                </motion.p>

                <div className="flex justify-center gap-3 md:gap-8">
                    {labelMap.map(([label, value]) => (
                        <FlipUnit
                            key={label}
                            value={isMounted ? (value as number) : 0}
                            label={label}
                        />
                    ))}
                </div>
            </motion.div>
        </>
    );
}
