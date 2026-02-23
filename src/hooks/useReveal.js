import { useState, useEffect, useRef } from 'react';

export function useReveal() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const io = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
            { threshold: 0.08 }
        );
        if (ref.current) io.observe(ref.current);
        return () => io.disconnect();
    }, []);
    return [ref, visible];
}

export function Reveal({ children, delay = 0, direction = "up" }) {
    const [ref, visible] = useReveal();
    const offsets = {
        up: "translateY(36px)",
        down: "translateY(-36px)",
        left: "translateX(36px)",
        right: "translateX(-36px)",
        none: "none",
    };
    return (
        <div
            ref={ref}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : offsets[direction],
                transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
            }}
        >
            {children}
        </div>
    );
}
