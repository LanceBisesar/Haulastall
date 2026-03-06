import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="hero-gradient text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <Image
              src="/logo.png"
              alt="Haul-A-Stall"
              width={200}
              height={130}
              className="h-14 w-auto brightness-0 invert mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed">
              Premium luxury restroom trailers for weddings, events, construction
              sites, and more. Convenient, comfortable, and clean.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-accent mb-4 text-sm tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/gallery", label: "Our Trailers" },
                { href: "/photos", label: "Gallery" },
                { href: "/contact", label: "Contact Us" },
                { href: "/faq", label: "FAQ" },
                { href: "/quote", label: "Get a Quote" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-accent mb-4 text-sm tracking-wider uppercase">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a
                  href="tel:+18444178255"
                  className="hover:text-accent transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (844) 417-8255
                </a>
              </li>
              <li>
                <a
                  href="mailto:Contact@HaulAStall.com"
                  className="hover:text-accent transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact@HaulAStall.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                New York, NY
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Haul-A-Stall, LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://www.yelp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-accent transition-colors"
              aria-label="Yelp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.16 12.594l-4.995 1.405c-.263.074-.468.193-.607.352a.863.863 0 00-.149.851c.07.217.238.386.46.469l5.087 1.874c.225.083.468.069.684-.041a.876.876 0 00.452-.58l.427-2.32a.872.872 0 00-.169-.716.881.881 0 00-.649-.339l-.541.045zm-5.594 3.78l-2.853 4.172c-.157.228-.198.476-.114.717a.878.878 0 00.55.524l2.249.72a.883.883 0 00.716-.061.876.876 0 00.429-.565l.881-4.762c.064-.345-.051-.61-.312-.787-.263-.18-.552-.194-.872-.038l-.674.08zm-2.135-2.988l1.962-4.652c.131-.312.104-.595-.08-.835a.88.88 0 00-.738-.378H11.14a.886.886 0 00-.722.344.874.874 0 00-.15.731l1.372 5.013c.103.37.34.554.699.554.328 0 .572-.126.731-.378l.361-.399zM7.17 14.471l-4.467-2.613c-.274-.16-.55-.173-.824-.04a.865.865 0 00-.498.639l-.365 2.343c-.043.287.04.551.248.757.208.205.467.302.769.277l4.997-.377c.361-.027.597-.19.703-.485.105-.297.026-.563-.239-.795l-.324.294zm1.15-2.153l1.486-4.874c.106-.35.049-.637-.177-.862-.225-.226-.49-.336-.793-.336H4.81a.867.867 0 00-.647.303.884.884 0 00-.208.71l.572 4.767c.052.336.243.547.57.633.326.086.6.001.82-.259l2.403.918z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
