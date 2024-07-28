import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

function IntersectionObserverItem({children, func = () => {}, rootMargin = "-300px", childRef = useRef()}) {
    const { ref, inView, entry } = useInView({
        rootMargin: rootMargin,
      });
  
    useEffect(() => {
        if (childRef.current !== undefined) {
            if (inView) {
                func();
            }
        }
    }, [inView, childRef])

    return <div style={{ all: "unset"}} ref={ref}>
        {children}
    </div>
}

export default IntersectionObserverItem;
