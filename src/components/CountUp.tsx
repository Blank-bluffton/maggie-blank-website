'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

interface CountUpProps {
  value: string | number;
  duration?: number;
  className?: string;
}

const numberPattern = /\d[\d,]*(?:\.\d+)?/g;

function formatValue(value: string, progress: number) {
  return value.replace(numberPattern, (token) => {
    const hasDecimal = token.includes('.');
    const decimals = hasDecimal ? token.split('.')[1].length : 0;
    const target = Number(token.replace(/,/g, ''));
    const current = target * progress;

    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(hasDecimal ? current : Math.round(current));
  });
}

export default function CountUp({ value, duration = 1100, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const valueText = String(value);
  const startValue = useMemo(() => formatValue(valueText, 0), [valueText]);
  const [displayValue, setDisplayValue] = useState(startValue);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0;
    if (reduceMotion) {
      frame = requestAnimationFrame(() => setDisplayValue(valueText));
      return () => cancelAnimationFrame(frame);
    }

    let hasStarted = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasStarted) return;
        hasStarted = true;
        const startTime = performance.now();

        const tick = (now: number) => {
          const linearProgress = Math.min((now - startTime) / duration, 1);
          const easedProgress = 1 - Math.pow(1 - linearProgress, 3);
          setDisplayValue(formatValue(valueText, easedProgress));

          if (linearProgress < 1) {
            frame = requestAnimationFrame(tick);
          } else {
            setDisplayValue(valueText);
          }
        };

        frame = requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [duration, valueText]);

  return <span ref={ref} className={className}>{displayValue}</span>;
}
