'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Menu, X } from 'lucide-react';
import { menuItems } from '@/constants/data';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'unset';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <nav className="fixed w-full top-0 z-50 px-4 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/80 dark:bg-black/50 backdrop-blur-xl rounded-full px-4 md:px-8 py-4 flex justify-between items-center border border-gray-200 dark:border-white/10 shadow-lg shadow-gray-200/20 dark:shadow-none">
            <Link
              href="/"
              className="text-2xl font-bold text-gray-900 dark:text-white"
            >
              Jensen<span className="text-red-500">.</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <NavigationMenu.Root className="relative">
                <NavigationMenu.List className="flex space-x-8">
                  {menuItems.map((item) => (
                    <NavigationMenu.Item key={item.href}>
                      <NavigationMenu.Link
                        className="text-gray-700 dark:text-white/90 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
                        href={item.href}
                      >
                        {item.label}
                      </NavigationMenu.Link>
                    </NavigationMenu.Item>
                  ))}
                </NavigationMenu.List>
              </NavigationMenu.Root>
            </div>

            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Link
                href="#contact"
                className="hidden md:block px-6 py-2.5 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-all shadow-sm"
              >
                Contact →
              </Link>

              <button
                onClick={toggleMenu}
                className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors text-gray-700 dark:text-white"
                aria-label="Toggle Menu"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-white/95 dark:bg-black/95 backdrop-blur-xl" />
            <nav className="relative h-full flex flex-col items-center justify-center space-y-8 text-2xl">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="text-gray-700 dark:text-white/90 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={closeMenu}
                className="px-8 py-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-all shadow-sm text-base"
              >
                Contact →
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
