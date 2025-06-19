"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const navigationItems = [
    {
      title: "Company Setup",
      items: [
        { title: "Company Registration", href: "/company-registration" },
        { title: "Legal & Compliance", href: "/legal-compliance" },
      ],
    },
    {
      title: "Personal Relocation",
      items: [
        { title: "Visa & Permits", href: "/visa-permits" },
        { title: "Living in Berlin", href: "/living-berlin" },
      ],
    },
  ]

  return (
    <nav className="fixed w-full top-0 z-50 bg-white shadow-lg border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="p-1.5 rounded-lg bg-[#001d6c]">
              <Image
                src="/images/hoft-logo-clean.png"
                alt="Berlin FinTech Guide"
                width={32}
                height={32}
                className="h-8 w-8"
              />
            </div>
            <div className="text-gray-900">
              <div className="text-lg font-bold">Berlin FinTech Guide</div>
              <div className="text-xs text-gray-500 font-medium">Powered by HoFT</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center px-3 py-2 text-gray-700 hover:text-[#001d6c] font-semibold transition-colors">
                  {item.title}
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>

                {activeDropdown === item.title && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#001d6c] transition-colors font-medium"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link href="/ai-quiz">
              <button className="px-6 py-2 border-2 border-[#001d6c] text-[#001d6c] rounded-lg font-semibold hover:bg-[#001d6c] hover:text-white transition-colors">
                AI Quiz
              </button>
            </Link>
            <Link href="/contact-hoft">
              <button className="px-6 py-2 bg-[#fd4b2c] text-white rounded-lg font-semibold hover:bg-[#e03b1c] transition-colors shadow-lg">
                Join HoFT
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-[#001d6c] transition-colors">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="space-y-1">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-semibold"
                  >
                    {item.title}
                    <ChevronDown
                      className={cn("h-4 w-4 transition-transform", activeDropdown === item.title && "rotate-180")}
                    />
                  </button>
                  {activeDropdown === item.title && (
                    <div className="pl-4 space-y-1">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-[#001d6c] hover:bg-gray-50 rounded-lg font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 space-y-3">
                <Link href="/ai-quiz" onClick={() => setIsOpen(false)}>
                  <button className="w-full px-4 py-3 border-2 border-[#001d6c] text-[#001d6c] rounded-lg font-semibold">
                    AI Quiz
                  </button>
                </Link>
                <Link href="/contact-hoft" onClick={() => setIsOpen(false)}>
                  <button className="w-full px-4 py-3 bg-[#fd4b2c] text-white rounded-lg font-semibold">
                    Join HoFT
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
