import {MouseEvent, useLayoutEffect, useState} from 'react';

import styles from './rippleEffect.module.scss';

const useDebouncedRippleCleanUp = (
  rippleCount: number,
  duration: number,
  cleanUpFunction: () => void
) => {
  useLayoutEffect(() => {
    let bounce: null | ReturnType<typeof setTimeout> = null;
    if (rippleCount > 0) {
      clearTimeout(Number(bounce));

      bounce = setTimeout(() => {
        cleanUpFunction();
        clearTimeout(Number(bounce));
      }, duration * 4);
    }

    return () => clearTimeout(Number(bounce));
  }, [rippleCount, duration, cleanUpFunction]);
};

function Ripple({
  duration = 850,
  color = '#fff',
}: {
  duration?: number;
  color?: string;
}) {
  interface RippleArrayProps {
    x: number;
    y: number;
    size: number;
  }
  const [rippleArray, setRippleArray] = useState<RippleArrayProps[]>([]);

  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([]);
  });

  const addRipple = (event: MouseEvent<HTMLDivElement | HTMLAnchorElement>) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;
    const x = event.pageX - rippleContainer.x - size / 2;
    const y = event.pageY - rippleContainer.y - size / 2;
    const newRipple = {
      x,
      y,
      size,
    };

    setRippleArray([...rippleArray, newRipple]);
  };

  return (
    /* EN - The <div> element has a parent <button> element that triggers the interaction. */
    /* PL - Element <div> ma element nadrzędny <button>, który wywołuje interakcję */
    /* eslint-disable-next-line jsx-a11y/no-static-element-interactions */
    <div className={styles.ripple} onMouseDown={addRipple}>
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => (
          <span
            key={`span${index.toString()}`}
            style={{
              top: ripple.y,
              left: ripple.x,
              width: ripple.size,
              height: ripple.size,

              backgroundColor: color,
            }}
          />
        ))}
    </div>
  );
}

export default Ripple;
