import {useLayoutEffect, useRef, useState} from 'react';

export default function AutoTextSize({children}: {children: string}) {
  const MIN_SIZE = 10;
  const MAX_SIZE = 68;

  const [size, setSize] = useState(MAX_SIZE);
  const textRef = useRef(document.createElement('span'));

  useLayoutEffect(() => {
    textRef.current.innerHTML = '';
    const parentContainerWidth = (textRef.current.parentNode as HTMLElement)
      .clientWidth;
    textRef.current.innerHTML = children;
    const currentTextWidth = textRef.current.offsetWidth;
    const {fontSize} = getComputedStyle(textRef.current);

    const currentFontSize = parseInt(fontSize, 10);
    const newValue = Math.min(
      Math.max(
        MIN_SIZE,
        (parentContainerWidth / currentTextWidth) * currentFontSize
      ),
      MAX_SIZE
    );
    setSize(newValue);
  }, [children]);

  return (
    <span
      style={{
        fontSize: `${Math.floor(size)}px`,
        lineHeight: Math.floor(1),
      }}
      ref={textRef}
    >
      {children}
    </span>
  );
}
