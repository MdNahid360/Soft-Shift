'use client';

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const AnimationWrapper = ({ children }) => {
    const text = useRef(null);
    const { scrollYProgress } = useScroll({
        target: text,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [1, 0.8, 0.2], [1, 1, 1]);
    const x = useTransform(scrollYProgress, [1, 0.4, 0], [0, 0, -1000]);

    return (
        <div
            ref={text}
            className='text-4xl font-[900] py-2'>
            <motion.div style={{
                transition: 'all 0.2s ease',
                opacity,
                x,
            }}>
                {children}
            </motion.div>


        </div>
    )
}

export default AnimationWrapper;