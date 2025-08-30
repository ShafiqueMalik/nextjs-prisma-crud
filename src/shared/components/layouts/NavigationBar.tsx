'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/cabins', label: 'Cabins' },
  { href: '/about', label: 'About' },
  { href: '/guest-area', label: 'Guest area' },
];

export default function NavigationBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-background border-b sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <img src="/logo.png" alt="Logo" className="h-8 w-8" />
          The Wild Oasis
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-primary transition">
              {link.label}
            </Link>
          ))}
          <Button variant="outline" size="sm" className="ml-2">
            Sign in
          </Button>
        </div>
        {/* Mobile Hamburger */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-background border-t px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-primary transition">
              {link.label}
            </Link>
          ))}
          <Button variant="outline" size="sm" className="mt-2">
            Sign in
          </Button>
        </div>
      )}
    </nav>
  );
}
