import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function IntersectionObserverItem({ children, func = () => {}, rootMargin = '-300px', childRef }) {
  const { ref, inView } = useInView({
    rootMargin: rootMargin,
  });

  useEffect(() => {
    if (childRef?.current !== undefined) {
      if (inView) {
        func();
      }
    }
  }, [inView, childRef, func]);

  return (
    <div style={{ all: 'unset' }} ref={ref}>
      {children}
    </div>
  );
}

export default IntersectionObserverItem;
