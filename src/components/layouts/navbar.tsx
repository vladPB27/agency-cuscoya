"use client";

import Link from "next/link";
import { Menu, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Tours", href: "/landingPage/tours" },
  { name: "Acerca de", href: "/" },
  { name: "Contacto", href: "/landingPage/contact" },
];

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-white font-bold">
            CY
          </div>
          <span className="text-lg font-semibold">
            Cusco<span className="text-blue-600">Ya</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-blue-600 transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden md:flex">
          <Link
            href="/destinations"
            className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition hover:bg-blue-600 hover:text-white"
          >
            Explore Destinations
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* MOBILE MENU */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[280px]">
              <div className="flex flex-col gap-6 mt-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                ))}

                <Link
                  href="/destinations"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white"
                >
                  Explore Destinations
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}
