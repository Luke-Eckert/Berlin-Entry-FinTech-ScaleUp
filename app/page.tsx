"use client"
import Link from "next/link"
import { ArrowRight, Building2, Users, Calendar, MapPin, Euro, Globe, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen pt-16">
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 29, 108, 0.75), rgba(0, 29, 108, 0.65)), url('/images/berlin-skyline-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="relative z-10 container mx-auto px-4 text-center text-white max-w-6xl">
          <div className="bg-white/15 backdrop-blur-sm p-4 rounded-2xl inline-block mb-8">
            <div className="text-2xl font-bold text-white">HoFT</div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">Start Your FinTech in Berlin</h1>

          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/15 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="text-3xl font-bold text-[#fd4b2c] mb-2">340+</div>
              <div className="text-white font-medium">Funded FinTech Start-ups</div>
            </div>
            <div className="bg-white/15 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="text-3xl font-bold text-[#fd4b2c] mb-2">€11.4B</div>
              <div className="text-white font-medium">Funding (Last 10 Years)</div>
            </div>
            <div className="bg-white/15 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="text-3xl font-bold text-[#fd4b2c] mb-2">450M</div>
              <div className="text-white font-medium">EU Market Access</div>
            </div>
          </div>

          <p className="text-xl mb-10 text-white/90 font-medium">Everything you need to know in one place</p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-[#fd4b2c] hover:bg-[#e03b1c] text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg"
              asChild
            >
              <Link href="/company-registration">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              className="bg-white text-[#001d6c] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-xl shadow-lg"
              asChild
            >
              <Link href="/ai-quiz">Take 2-Min Quiz</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-6 bg-gradient-to-r from-[#fd4b2c] to-[#e03b1c] text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center">
              <Calendar className="h-6 w-6 mr-3" />
              <div>
                <div className="font-bold text-lg">Latest from HoFT</div>
                <div className="text-sm opacity-90">Stay updated with Berlin's FinTech community</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge className="bg-white/20 text-white hover:bg-white/30 px-3 py-1">
                New: FinTech Regulatory Guide
              </Badge>
              <Badge className="bg-white/20 text-white hover:bg-white/30 px-3 py-1">Dec 15 - Networking Event</Badge>
              <Button
                variant="outline"
                size="sm"
                className="border-white text-white hover:bg-white hover:text-[#fd4b2c] font-semibold"
                asChild
              >
                <Link href="/events">View All Updates</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center text-[#001d6c] mb-6">Why Berlin?</h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Berlin has become Europe's most dynamic FinTech hub, offering unique advantages for companies looking to
            scale
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <Card className="border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: "url('/images/berlin-fintech-meeting.jpg')" }}
              >
                <div className="absolute inset-0 bg-[#001d6c]/85 flex items-center justify-center">
                  <Euro className="h-16 w-16 text-white" />
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="font-bold text-[#001d6c] mb-4 text-2xl">Funding Ecosystem</h3>
                <ul className="text-gray-600 space-y-3 text-sm leading-relaxed">
                  <li>• 200+ active VCs and family offices</li>
                  <li>• €2.3B invested in 2023 alone</li>
                  <li>• Government grants up to €2M</li>
                  <li>• Strong Series A-C funding pipeline</li>
                  <li>• Access to London and Zurich capital</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: "url('/images/berlin-business-district.jpg')" }}
              >
                <div className="absolute inset-0 bg-[#001d6c]/85 flex items-center justify-center">
                  <MapPin className="h-16 w-16 text-white" />
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="font-bold text-[#001d6c] mb-4 text-2xl">Strategic Location</h3>
                <ul className="text-gray-600 space-y-3 text-sm leading-relaxed">
                  <li>• Mitte: Banking and traditional finance</li>
                  <li>• Kreuzberg: FinTech startups and scale-ups</li>
                  <li>• Charlottenburg: Corporate headquarters</li>
                  <li>• Gateway to Eastern European markets</li>
                  <li>• 4-hour flight to major EU financial centers</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: "url('/images/berlin-entrepreneurs.jpg')" }}
              >
                <div className="absolute inset-0 bg-[#001d6c]/85 flex items-center justify-center">
                  <Users className="h-16 w-16 text-white" />
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="font-bold text-[#001d6c] mb-4 text-2xl">Talent & Community</h3>
                <ul className="text-gray-600 space-y-3 text-sm leading-relaxed">
                  <li>• 40+ universities producing tech talent</li>
                  <li>• 50,000+ developers in the city</li>
                  <li>• Strong collaborative culture</li>
                  <li>• Weekly FinTech meetups and events</li>
                  <li>• English-speaking business environment</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
              <Globe className="h-10 w-10 text-[#001d6c] mb-4" />
              <h4 className="font-bold text-[#001d6c] mb-3 text-xl">Regulatory Advantages</h4>
              <p className="text-gray-700 leading-relaxed">
                BaFin's progressive approach to FinTech regulation, regulatory sandbox programs, and clear licensing
                pathways make Berlin ideal for financial innovation.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border border-orange-200">
              <Briefcase className="h-10 w-10 text-[#001d6c] mb-4" />
              <h4 className="font-bold text-[#001d6c] mb-3 text-xl">Cost Efficiency</h4>
              <p className="text-gray-700 leading-relaxed">
                30-40% lower operational costs than London or Zurich, competitive salaries, and government incentives
                for international companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Action Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center text-[#001d6c] mb-6">What Do You Need Help With?</h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Choose your path and get step-by-step guidance
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Company Setup */}
            <div className="space-y-6">
              <div
                className="h-64 bg-cover bg-center relative rounded-2xl overflow-hidden shadow-xl"
                style={{ backgroundImage: "url('/images/berlin-business-registration.jpg')" }}
              >
                <div className="absolute inset-0 bg-[#001d6c]/85 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Building2 className="h-20 w-20 mx-auto mb-4" />
                    <h3 className="text-4xl font-bold">Company Setup</h3>
                    <p className="text-xl opacity-90 mt-2">Register & Launch Your Business</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  className="h-20 bg-[#001d6c] hover:bg-[#002244] text-white flex-col rounded-xl shadow-lg font-semibold"
                  asChild
                >
                  <Link href="/company-registration">
                    <div className="font-bold">Company</div>
                    <div className="text-sm opacity-90">Registration</div>
                  </Link>
                </Button>
                <Button
                  className="h-20 bg-[#001d6c] hover:bg-[#002244] text-white flex-col rounded-xl shadow-lg font-semibold"
                  asChild
                >
                  <Link href="/legal-compliance">
                    <div className="font-bold">Legal &</div>
                    <div className="text-sm opacity-90">Compliance</div>
                  </Link>
                </Button>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                <h4 className="font-bold text-[#001d6c] mb-4 text-lg">Quick Facts:</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="font-bold text-2xl text-[#fd4b2c]">6-8 Weeks</div>
                    <div className="text-gray-600">Setup Time</div>
                  </div>
                  <div>
                    <div className="font-bold text-2xl text-[#fd4b2c]">€25,000</div>
                    <div className="text-gray-600">Min Capital</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Relocation */}
            <div className="space-y-6">
              <div
                className="h-64 bg-cover bg-center relative rounded-2xl overflow-hidden shadow-xl"
                style={{ backgroundImage: "url('/images/berlin-entrepreneurs.jpg')" }}
              >
                <div className="absolute inset-0 bg-[#001d6c]/85 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Users className="h-20 w-20 mx-auto mb-4" />
                    <h3 className="text-4xl font-bold">Move to Berlin</h3>
                    <p className="text-xl opacity-90 mt-2">Visa, Housing & Life Setup</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  className="h-20 bg-[#001d6c] hover:bg-[#002244] text-white flex-col rounded-xl shadow-lg font-semibold"
                  asChild
                >
                  <Link href="/visa-permits">
                    <div className="font-bold">Visa &</div>
                    <div className="text-sm opacity-90">Permits</div>
                  </Link>
                </Button>
                <Button
                  className="h-20 bg-[#001d6c] hover:bg-[#002244] text-white flex-col rounded-xl shadow-lg font-semibold"
                  asChild
                >
                  <Link href="/living-berlin">
                    <div className="font-bold">Living</div>
                    <div className="text-sm opacity-90">in Berlin</div>
                  </Link>
                </Button>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                <h4 className="font-bold text-[#001d6c] mb-4 text-lg">Quick Facts:</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="font-bold text-2xl text-[#fd4b2c]">3-6 Months</div>
                    <div className="text-gray-600">Visa Process</div>
                  </div>
                  <div>
                    <div className="font-bold text-2xl text-[#fd4b2c]">€48,300</div>
                    <div className="text-gray-600">Blue Card Min</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Start CTA */}
      <section className="py-20 bg-gradient-to-r from-[#001d6c] to-[#003399] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Start Your Berlin Journey?</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Get personalized guidance and connect with Berlin's FinTech ecosystem
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-[#fd4b2c] hover:bg-[#e03b1c] text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg"
              asChild
            >
              <Link href="/ai-quiz">
                Take Assessment Quiz
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              className="bg-white text-[#001d6c] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-xl shadow-lg"
              asChild
            >
              <Link href="/contact-hoft">Join HoFT Network</Link>
            </Button>
          </div>

          <div className="mt-8 text-white/80">
            <p>Connect with 500+ FinTech founders • Access exclusive events • Get expert guidance</p>
          </div>
        </div>
      </section>
    </div>
  )
}
