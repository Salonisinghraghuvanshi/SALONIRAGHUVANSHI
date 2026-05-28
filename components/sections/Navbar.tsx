'use client';

import { useState } from 'react';
import { PrimaryButton } from '../PrimaryButton';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container-max flex items-center justify-between h-20">
        {/* Logo */}
        <div className="text-2xl font-serif font-bold">
          <span>Roberta</span>
          <span className="text-primary-accent ml-1">Lane</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-body-text font-dm-sans font-medium hover:text-primary-accent transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <PrimaryButton>Book a Consultation</PrimaryButton>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Menu className="w-6 h-6 text-body-text" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full">
              <div className="flex flex-col items-center gap-8 py-12">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-lg font-dm-sans font-medium text-body-text hover:text-primary-accent transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <PrimaryButton onClick={() => setIsOpen(false)}>
                  Book a Consultation
                </PrimaryButton>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
