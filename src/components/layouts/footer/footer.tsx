import Link from "next/link";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-blue-600 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          
          {/* BRAND */}
          <div>
            <h3 className="text-xl font-bold">
              Cusco<span className="text-white">Ya</span>
            </h3>
            <p className="mt-3 text-sm">
              Descubre experiencias inolvidables con guías locales confiables y paquetes asequibles.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-white">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-white">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="mb-4 font-semibold">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Guided Tours</li>
              <li>Private Trip</li>
              <li>Custom Packages</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="mb-4 font-semibold">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-600" />
                Cusco, Perú
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-600" />
                +51 900 671 114
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-600" />
                cuscoya@gmail.com
              </li>
            </ul>

            {/* SOCIAL */}
            <div className="mt-4 flex gap-3">
              <Link href="#">
                <Facebook className="h-5 w-5 hover:text-blue-600" />
              </Link>
              <Link href="#">
                <Instagram className="h-5 w-5 hover:text-blue-600" />
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 border-t pt-6 text-center text-sm">
          © {new Date().getFullYear()} CuscoYa. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
