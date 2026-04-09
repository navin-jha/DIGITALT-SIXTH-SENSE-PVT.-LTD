import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }

        const scrollToTop = () => {
            const scrollingElement =
                document.scrollingElement || document.documentElement || document.body;

            if (scrollingElement) {
                scrollingElement.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "auto",
                });
            }

            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        };

        scrollToTop();

        const id = setTimeout(scrollToTop, 0);
        const id2 = setTimeout(scrollToTop, 50);

        return () => {
            clearTimeout(id);
            clearTimeout(id2);
        };
    }, [pathname]);

    return null;
};

export default ScrollToTop;