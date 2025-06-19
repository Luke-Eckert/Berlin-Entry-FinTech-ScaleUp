"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, MapPin, ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#001d6c] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#fd4b2c] to-[#e03b1c] rounded-xl flex items-center justify-center">
                <div className="text-white font-bold">HoFT</div>
              </div>
              <div>
                <div className="text-xl font-bold">House of Finance</div>
                <div className="text-xl font-bold">& Tech Berlin</div>
              </div>
            </div>
            <p className="text-blue-100 leading-relaxed">
              Your dedicated partner for FinTech expansion in Europe. We provide end-to-end support from market
              assessment to regulatory navigation, funding, and team building.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#fd4b2c]">Key Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/company-registration"
                  className="text-blue-100 hover:text-[#fd4b2c] transition-colors flex items-center font-medium"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Company Registration
                </Link>
              </li>
              <li>
                <Link
                  href="/legal-compliance"
                  className="text-blue-100 hover:text-[#fd4b2c] transition-colors flex items-center font-medium"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Legal & Compliance
                </Link>
              </li>
              <li>
                <Link
                  href="/visa-permits"
                  className="text-blue-100 hover:text-[#fd4b2c] transition-colors flex items-center font-medium"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  EU Blue Card Guide
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#fd4b2c]">Contact & Support</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center text-blue-200 text-sm">
                <MapPin className="h-4 w-4 text-[#fd4b2c] mr-2 flex-shrink-0" />
                <span>Spittelmarkt Digital Hub, Berlin</span>
              </div>
              <div className="flex items-center text-blue-200 text-sm">
                <Mail className="h-4 w-4 text-[#fd4b2c] mr-2 flex-shrink-0" />
                <span>scaleup@hoft.berlin</span>
              </div>
            </div>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="your@email.com"
                className="bg-blue-800 border-blue-700 text-white placeholder:text-blue-300 rounded-lg"
              />
              <Button className="w-full bg-gradient-to-r from-[#fd4b2c] to-[#e03b1c] hover:from-[#e03b1c] hover:to-[#d02b0c] text-white font-semibold rounded-lg">
                Get Updates
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <p className="text-blue-200 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} House of Finance and Technology Berlin GmbH. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://www.hoft.berlin/imprint"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-[#fd4b2c] transition-colors text-sm font-medium"
              >
                Imprint
              </a>
              <a
                href="https://www.hoft.berlin/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-[#fd4b2c] transition-colors text-sm font-medium"
              >
                Privacy Policy
              </a>
            </div>
          </div>
          <p className="text-xs text-blue-300 text-center">
            This guide provides general information and does not constitute legal or financial advice. Consult with
            qualified professionals for specific advice tailored to your company's situation.
          </p>
        </div>
      </div>
    </footer>
  )
}
