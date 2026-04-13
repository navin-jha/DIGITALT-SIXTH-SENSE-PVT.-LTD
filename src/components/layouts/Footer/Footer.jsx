import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Logo / About */}
          <div>
            <h2 className="text-lg font-semibold">
              DIGITALT SIXTH SENSE <br /> PVT. LTD.
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Building modern web applications with great user experience.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm">

              <li
                className="hover:underline cursor-pointer"
                onClick={() => navigate("/")}
              >
                Home
              </li>

              <li
                className="hover:underline cursor-pointer"
                onClick={() => navigate("/about")}
              >
                About
              </li>

              <li
                className="hover:underline cursor-pointer"
                onClick={() => navigate("/contact")}
              >
                Contact
              </li>

            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold mb-2">Follow Us</h3>
            <div className="flex gap-4 text-sm">
              <span className="cursor-pointer">Facebook</span>
              <span className="cursor-pointer">Twitter</span>
              <span className="cursor-pointer">LinkedIn</span>
            </div>
          </div>

        </div>

        <div className="mt-6 border-t pt-4 text-center text-sm text-muted-foreground">
          © 2026 DIGITALT SIXTH SENSE PVT. LTD. All rights reserved.
        </div>

      </div>
    </footer>
  );
}