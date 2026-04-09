import React from 'react'

export default function Footer() {
    return (
      <footer className="border-t bg-background">
        <div className="container mx-auto px-4 py-8">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Logo / About */}
            <div>
              <h2 className="text-lg font-semibold">DIGITALT SIXTH SENSE
                PVT. LTD.</h2>
              <p className="text-sm text-muted-foreground mt-2">
                Building modern web applications with great user experience.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-sm font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/about" className="hover:underline">About</a></li>
                <li><a href="/contact" className="hover:underline">Contact</a></li>
              </ul>
            </div>

            {/* Social / Contact */}
            <div>
              <h3 className="text-sm font-semibold mb-2">Follow Us</h3>
              <div className="flex gap-4 text-sm">
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">LinkedIn</a>
              </div>
            </div>

          </div>

          {/* Bottom */}
          <div className="mt-6 border-t pt-4 text-center text-sm text-muted-foreground">
            © 2026 DIGITALT SIXTH SENSE PVT. LTD. All rights reserved.
          </div>

        </div>
      </footer>
    );
  };


