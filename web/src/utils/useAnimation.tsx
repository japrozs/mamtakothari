import { RefObject, useEffect } from "react";

const useAnimation = (elem: RefObject<HTMLElement>) => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                elem.current?.style.setProperty("opacity", "100");
            }
        }, {});

        if (elem.current) {
            observer.observe(elem.current);
        }
        return () => {
            if (elem.current) {
                observer.unobserve(elem.current);
            }
        };
    }, [elem]);
};

export default useAnimation;
