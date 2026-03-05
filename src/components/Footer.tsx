import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-surface-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-accent font-bold text-xl mb-3">
              HAUL-A-STALL
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              Premium luxury restroom trailers for any occasion. Convenient,
              comfortable, and clean.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { href: "/gallery", label: "Gallery" },
                { href: "/quote", label: "Get a Quote" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted hover:text-accent text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-foreground font-semibold mb-3">Contact Us</h4>
            <div className="flex flex-col gap-2 text-sm text-muted">
              <a
                href="tel:+18444178255"
                className="hover:text-accent transition-colors"
              >
                (844) 417-8255
              </a>
              <a
                href="mailto:Contact@HaulAStall.com"
                className="hover:text-accent transition-colors"
              >
                Contact@HaulAStall.com
              </a>
              <p>Hours: By Appointment</p>
            </div>
          </div>
        </div>

        <div className="border-t border-surface-light/30 mt-8 pt-8 text-center text-muted text-sm">
          &copy; {new Date().getFullYear()} Haul-A-Stall. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
