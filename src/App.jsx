import React, { useLayoutEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/layouts/Header/Header";
import Footer from "./components/layouts/Footer/Footer";

function App() {
  const { pathname } = useLocation();
  const appRef = useRef(null);
  const mainRef = useRef(null);

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const scrollEverythingToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      if (mainRef.current) {
        mainRef.current.scrollTop = 0;
      }

      if (appRef.current) {
        const elements = appRef.current.querySelectorAll("*");

        elements.forEach((el) => {
          const style = window.getComputedStyle(el);
          const overflowY = style.overflowY;
          const overflow = style.overflow;

          const isScrollable =
            (overflowY === "auto" ||
              overflowY === "scroll" ||
              overflow === "auto" ||
              overflow === "scroll") &&
            el.scrollHeight > el.clientHeight;

          if (isScrollable) {
            el.scrollTop = 0;
          }
        });
      }
    };

    scrollEverythingToTop();
    requestAnimationFrame(scrollEverythingToTop);
    setTimeout(scrollEverythingToTop, 50);
  }, [pathname]);

  return (
    <div ref={appRef} className="flex flex-col min-h-screen">
      <Header />

      <main ref={mainRef} className="flex-1 bg-background">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;