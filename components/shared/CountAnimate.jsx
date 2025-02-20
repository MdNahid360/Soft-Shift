'use client'
import { useEffect, useState } from "react";
import { motion, useAnimation } from "motion/react";
import { useInView } from "react-intersection-observer";

const CountAnimate = ({ value }) => {
    const [count, setCount] = useState(0);
    const controls = useAnimation();
    const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            let start = 0;
            const duration = 2000;
            const interval = Math.floor(duration / value);

            const counter = setInterval(() => {
                start += 1;
                setCount(start);
                if (start >= value) clearInterval(counter);
            }, interval);
        }
    }, [inView, value]);

    return (
        <motion.h3
            ref={ref}
            animate={controls}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-light text-4xl font-bold font-manrope leading-normal"
        >
            {count}+
        </motion.h3>
    );
};

export default CountAnimate;