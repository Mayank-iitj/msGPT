import React from 'react';
import { useSpring, animated } from 'react-spring';

export const useFadeIn = (duration = 500) => {
    return useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration },
    });
};

export const useSlideIn = (direction = 'left', duration = 500) => {
    const x = direction === 'left' ? -100 : 100;
    return useSpring({
        from: { transform: `translateX(${x}px)`, opacity: 0 },
        to: { transform: 'translateX(0)', opacity: 1 },
        config: { duration },
    });
};

export const FadeIn = ({ children, duration }) => {
    const fadeInProps = useFadeIn(duration);
    return <animated.div style={fadeInProps}>{children}</animated.div>;
};

export const SlideIn = ({ children, direction, duration }) => {
    const slideInProps = useSlideIn(direction, duration);
    return <animated.div style={slideInProps}>{children}</animated.div>;
};