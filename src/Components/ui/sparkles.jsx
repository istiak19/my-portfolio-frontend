'use client';

import { useId, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion, useAnimation } from "framer-motion";
import { cn } from "../../lib/utils";

export const SparklesCore = ({
    id,
    className,
    background = "#0d47a1",
    minSize = 1,
    maxSize = 3,
    speed = 4,
    particleColor = "#ffffff",
    particleDensity = 120,
}) => {
    const [init, setInit] = useState(false);
    const generatedId = useId();
    const controls = useAnimation();

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => setInit(true));
    }, []);

    const particlesLoaded = async (container) => {
        if (container) {
            controls.start({ opacity: 1, transition: { duration: 1 } });
        }
    };

    return (
        <motion.div animate={controls} className={cn("opacity-0", className)}>
            {init && (
                <Particles
                    id={id || generatedId}
                    className="h-full w-full"
                    particlesLoaded={particlesLoaded}
                    options={{
                        background: { color: { value: background } },
                        fullScreen: { enable: false, zIndex: 1 },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: { enable: true, mode: "push" },
                                resize: true,
                            },
                            modes: {
                                push: { quantity: 4 },
                            },
                        },
                        particles: {
                            move: {
                                enable: true,
                                direction: "none",
                                speed: { min: 0.1, max: 1 },
                            },
                            number: {
                                value: particleDensity,
                                density: { enable: true, width: 400, height: 400 },
                            },
                            color: { value: particleColor },
                            opacity: {
                                value: { min: 0.1, max: 1 },
                                animation: {
                                    enable: true,
                                    speed: speed,
                                    sync: false,
                                },
                            },
                            size: {
                                value: { min: minSize, max: maxSize },
                            },
                            shape: { type: "circle" },
                        },
                        detectRetina: true,
                    }}
                />
            )}
        </motion.div>
    );
};