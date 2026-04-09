import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/layouts/Header/Header";
import Footer from "./components/layouts/Footer/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-background">
        <div>
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;