"use client";

import { cn } from "@/src/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

export const BackgroundBeamsWithCollision = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const parentRef = useRef<HTMLDivElement | null>(null);

    const beams = [
        { initialX: 10, translateX: 10, duration: 7, repeatDelay: 3, delay: 2 },
        { initialX: 200, translateX: 200, duration: 5, repeatDelay: 3, delay: 3 },
        { initialX: 400, translateX: 400, duration: 6, repeatDelay: 5 },
        { initialX: 600, translateX: 600, duration: 7, repeatDelay: 4 },
        { initialX: 800, translateX: 800, duration: 8, repeatDelay: 6 },
    ];

    return (
        <div
            ref={parentRef}
            className={cn(
                // ✅ allow dynamic height & remove items-center to prevent cropping
                "relative flex flex-col justify-start w-full overflow-hidden",
                "py-10 sm:py-16 md:py-20",
                className
            )}
        >
            {/* Beams animation (absolute, so it won’t affect layout height) */}
            <div className="absolute inset-0 pointer-events-none">
                {beams.map((beam, idx) => (
                    <CollisionMechanism
                        key={idx}
                        beamOptions={beam}
                        containerRef={containerRef}
                        parentRef={parentRef}
                    />
                ))}
            </div>

            {/* Actual content */}
            <div className="relative z-10 w-full px-4 sm:px-6 md:px-8">
                {children}
            </div>

            {/* Base shadow gradient */}
            <div
                ref={containerRef}
                className="absolute bottom-0 bg-neutral-100 dark:bg-neutral-900 w-full inset-x-0 pointer-events-none"
                style={{
                    boxShadow:
                        "0 0 24px rgba(34,42,53,0.06), 0 1px 1px rgba(0,0,0,0.05), 0 0 0 1px rgba(34,42,53,0.04), 0 0 4px rgba(34,42,53,0.08)",
                }}
            />
        </div>
    );
};

type BeamOptions = {
    initialX?: number;
    translateX?: number;
    initialY?: number;
    translateY?: number;
    rotate?: number;
    className?: string;
    duration?: number;
    delay?: number;
    repeatDelay?: number;
};

type CollisionMechanismProps = {
    containerRef: React.RefObject<HTMLDivElement | null>;
    parentRef: React.RefObject<HTMLDivElement | null>;
    beamOptions?: BeamOptions;
};

const CollisionMechanism = ({
    parentRef,
    containerRef,
    beamOptions = {},
}: CollisionMechanismProps) => {
    const beamRef = useRef<HTMLDivElement | null>(null);
    const [collision, setCollision] = useState<{
        detected: boolean;
        coordinates: { x: number; y: number } | null;
    }>({ detected: false, coordinates: null });

    useEffect(() => {
        const checkCollision = () => {
            if (beamRef.current && containerRef.current && parentRef.current) {
                const beamRect = beamRef.current.getBoundingClientRect();
                const containerRect = containerRef.current.getBoundingClientRect();
                const parentRect = parentRef.current.getBoundingClientRect();

                if (beamRect.bottom >= containerRect.top) {
                    const relativeX = beamRect.left - parentRect.left + beamRect.width / 2;
                    const relativeY = beamRect.bottom - parentRect.top;

                    setCollision({ detected: true, coordinates: { x: relativeX, y: relativeY } });
                    setTimeout(() => setCollision({ detected: false, coordinates: null }), 1500);
                }
            }
        };

        const interval = setInterval(checkCollision, 60);
        return () => clearInterval(interval);
    }, [containerRef, parentRef]);

    return (
        <>
            <motion.div
                ref={beamRef}
                initial={{
                    translateY: beamOptions.initialY || "-200px",
                    translateX: beamOptions.initialX || 0,
                }}
                animate={{
                    translateY: beamOptions.translateY || "1200px",
                    translateX: beamOptions.translateX || 0,
                }}
                transition={{
                    duration: beamOptions.duration || 6,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                    delay: beamOptions.delay || 0,
                    repeatDelay: beamOptions.repeatDelay || 0,
                }}
                className={cn(
                    "absolute left-0 top-10 m-auto h-10 w-px rounded-full bg-gradient-to-t from-indigo-500 via-purple-500 to-transparent opacity-70",
                    beamOptions.className
                )}
            />
            <AnimatePresence>
                {collision.detected && collision.coordinates && (
                    <Explosion
                        key={`${collision.coordinates.x}-${collision.coordinates.y}`}
                        style={{
                            left: `${collision.coordinates.x}px`,
                            top: `${collision.coordinates.y}px`,
                            transform: "translate(-50%, -50%)",
                        }}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

const Explosion = ({ ...props }: React.HTMLProps<HTMLDivElement>) => {
    const spans = Array.from({ length: 15 }, (_, index) => ({
        id: index,
        directionX: Math.floor(Math.random() * 80 - 40),
        directionY: Math.floor(Math.random() * -60 - 20),
    }));

    return (
        <div {...props} className={cn("absolute z-50 h-2 w-2", props.className)}>
            {spans.map((span) => (
                <motion.span
                    key={span.id}
                    initial={{ x: 0, y: 0, opacity: 1 }}
                    animate={{ x: span.directionX, y: span.directionY, opacity: 0 }}
                    transition={{ duration: Math.random() * 1 + 0.6, ease: "easeOut" }}
                    className="absolute h-1 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500"
                />
            ))}
        </div>
    );
};