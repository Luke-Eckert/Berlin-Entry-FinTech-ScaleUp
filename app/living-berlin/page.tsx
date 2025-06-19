"use client"
import Link from "next/link"
import { ArrowLeft, Home, MapPin, Euro, Wifi, Car, Download, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function LivingBerlinPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section
        className="relative py-20"
        style={{
          backgroundImage: "url('/images/berlin-tech-workspace.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#5765cd]/90 to-[#5765cd]/70" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 mr-4" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <Badge className="bg-[#fd4b2c] text-white">Personal Relocation</Badge>
          </div>

          <h1 className="text-5xl font-bold text-white mb-6">Living in Berlin as a FinTech Professional</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Essential information for settling into Berlin's vibrant tech scene and building your life in Germany's
            startup capital.
          </p>
        </div>
      </section>

      {/* Housing Market */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001d6c] mb-8 text-center">Housing in Berlin</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            <Card className="border-l-4 border-l-[#001d6c] shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-[#001d6c]">
                  <Home className="h-6 w-6 mr-3" />
                  Rental Market Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="font-semibold text-[#001d6c] mb-2">Average Rent (2024)</div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-bold text-[#fd4b2c]">€18-25/m²</div>
                        <div className="text-gray-600">City Center</div>
                      </div>
                      <div>
                        <div className="font-bold text-[#fd4b2c]">€14-20/m²</div>
                        <div className="text-gray-600">Outer Districts</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-[#001d6c]">Popular FinTech Areas:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Mitte</span>
                        <span className="text-sm text-gray-600">€1,800-3,000 (1BR)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Kreuzberg</span>
                        <span className="text-sm text-gray-600">€1,500-2,500 (1BR)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Prenzlauer Berg</span>
                        <span className="text-sm text-gray-600">€1,600-2,800 (1BR)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Friedrichshain</span>
                        <span className="text-sm text-gray-600">€1,400-2,400 (1BR)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#fd4b2c] shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-[#fd4b2c]">
                  <MapPin className="h-6 w-6 mr-3" />
                  Finding Accommodation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-[#001d6c] mb-3">Best Platforms:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">ImmobilienScout24.de</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">WG-Gesucht.de (shared flats)</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">Immowelt.de</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">Facebook groups (expat communities)</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                      <div>
                        <div className="font-semibold text-yellow-800">Required Documents:</div>
                        <ul className="text-sm text-yellow-700 mt-1 space-y-1">
                          <li>• SCHUFA credit report (can be difficult to obtain initially)</li>
                          <li>• Employment contract</li>
                          <li>• Last 3 pay slips</li>
                          <li>• Bank statements</li>
                          <li>• Liability insurance (Haftpflichtversicherung)</li>
                          <li>• Copy of Passport/ID</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cost of Living */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001d6c] mb-8 text-center">Cost of Living</h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader className="bg-[#001d6c] text-white">
                <CardTitle className="flex items-center">
                  <Euro className="h-5 w-5 mr-2" />
                  Monthly Essentials
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Rent (1BR)</span>
                    <span className="font-semibold">€1,500-2,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Utilities (Heating Included)</span>
                    <span className="font-semibold">€200-300</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Health Insurance</span>
                    <span className="font-semibold">€200-400 (public) / €350-700+ (private)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Internet/Mobile</span>
                    <span className="font-semibold">€30-50</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Public Transport</span>
                    <span className="font-semibold">€63.42 (AB Zone Monthly Pass)</span>
                  </div>
                  <hr />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-[#fd4b2c]">€1,993-3,350</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="bg-[#5765cd] text-white">
                <CardTitle className="flex items-center">
                  <Euro className="h-5 w-5 mr-2" />
                  Food & Dining
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Groceries</span>
                    <span className="font-semibold">€300-500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Restaurant Meal</span>
                    <span className="font-semibold">€15-35</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Coffee</span>
                    <span className="font-semibold">€3-5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Beer (0.5L)</span>
                    <span className="font-semibold">€4-6</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Delivery</span>
                    <span className="font-semibold">€10-20</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="bg-[#fd4b2c] text-white">
                <CardTitle className="flex items-center">
                  <Euro className="h-5 w-5 mr-2" />
                  Lifestyle & Entertainment
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Gym Membership</span>
                    <span className="font-semibold">€30-80</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Cinema Ticket</span>
                    <span className="font-semibold">€12-18</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Theater/Concert</span>
                    <span className="font-semibold">€30-100+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Clothing</span>
                    <span className="font-semibold">€100-400</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Weekend Trip</span>
                    <span className="font-semibold">€200-500+</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-green-50 border border-green-200 p-6 rounded-xl text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Recommended Monthly Budget</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-[#fd4b2c]">€3,000-4,000</div>
                <div className="text-sm text-green-700">Comfortable Living</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#fd4b2c]">€4,000-6,000</div>
                <div className="text-sm text-green-700">Good Lifestyle</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#fd4b2c]">€6,000+</div>
                <div className="text-sm text-green-700">Premium Living</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001d6c] mb-8 text-center">Essential Services & Setup</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-l-4 border-l-[#001d6c] shadow-lg">
              <CardContent className="p-6">
                <Wifi className="h-8 w-8 text-[#001d6c] mb-4" />
                <h3 className="font-bold text-[#001d6c] mb-3">Internet & Mobile</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <div className="font-semibold">Internet Providers:</div>
                    <div className="text-gray-600">Telekom, Vodafone, O2, 1&1</div>
                  </div>
                  <div>
                    <div className="font-semibold">Speed:</div>
                    <div className="text-gray-600">50-1000 Mbps available</div>
                  </div>
                  <div>
                    <div className="font-semibold">Cost:</div>
                    <div className="text-gray-600">€30-70/month</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#5765cd] shadow-lg">
              <CardContent className="p-6">
                <Car className="h-8 w-8 text-[#5765cd] mb-4" />
                <h3 className="font-bold text-[#5765cd] mb-3">Transportation</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <div className="font-semibold">BVG Monthly Pass:</div>
                    <div className="text-gray-600">€63.42 (AB zones), €92.42 (ABC zones)</div>
                  </div>
                  <div>
                    <div className="font-semibold">Bike Sharing:</div>
                    <div className="text-gray-600">Nextbike, Lime, Tier</div>
                  </div>
                  <div>
                    <div className="font-semibold">Car Sharing:</div>
                    <div className="text-gray-600">ShareNow, Miles</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#fd4b2c] shadow-lg">
              <CardContent className="p-6">
                <Home className="h-8 w-8 text-[#fd4b2c] mb-4" />
                <h3 className="font-bold text-[#fd4b2c] mb-3">Banking</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <div className="font-semibold">Digital Banks:</div>
                    <div className="text-gray-600">N26, Revolut, Vivid Money</div>
                  </div>
                  <div>
                    <div className="font-semibold">Traditional:</div>
                    <div className="text-gray-600">Deutsche Bank, Commerzbank, Sparkasse</div>
                  </div>
                  <div>
                    <div className="font-semibold">Account Fee:</div>
                    <div className="text-gray-600">€0-10/month (can be higher for premium accounts)</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#e3fa6c] shadow-lg">
              <CardContent className="p-6">
                <CheckCircle className="h-8 w-8 text-[#7c8f00] mb-4" />
                <h3 className="font-bold text-[#7c8f00] mb-3">Registration</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <div className="font-semibold">Anmeldung:</div>
                    <div className="text-gray-600">
                      Required by law within 2 weeks of moving in. Appointments can be difficult to get.
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">Tax ID:</div>
                    <div className="text-gray-600">Automatic after registration. Can take several weeks to arrive.</div>
                  </div>
                  <div>
                    <div className="font-semibold">Health Insurance:</div>
                    <div className="text-gray-600">Mandatory for residents. Choose public or private.</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FinTech Community */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001d6c] mb-8 text-center">Berlin FinTech Community</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#001d6c]">Networking Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="font-semibold text-[#001d6c] mb-2">Regular Meetups</div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Berlin FinTech Meetup (monthly)</li>
                      <li>• Startup Grind Berlin</li>
                      <li>• TechTalk Berlin</li>
                      <li>• Women in FinTech</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="font-semibold text-[#001d6c] mb-2">Annual Conferences</div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• FinTech Week Berlin</li>
                      <li>• Money20/20 Europe</li>
                      <li>• TechCrunch Disrupt</li>
                      <li>• Slush Berlin</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#001d6c]">Co-working Spaces</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="font-semibold text-[#5765cd] mb-2">FinTech-Focused</div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Rocket Internet Campus</li>
                      <li>• APX (Axel Springer)</li>
                      <li>• GTEC (German Tech Entrepreneurship Center)</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="font-semibold text-[#5765cd] mb-2">General Tech Spaces</div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• WeWork (multiple locations)</li>
                      <li>• Mindspace</li>
                      <li>• Factory Berlin</li>
                      <li>• betahaus</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#5765cd] to-[#4a5bb8] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make Berlin Your Home?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get comprehensive guides and connect with the Berlin FinTech community
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#fd4b2c] hover:bg-[#e03b1c] text-white px-8 py-4" asChild>
              <Link href="/berlin-living-guide">
                <Download className="mr-2 h-5 w-5" />
                Download Living Guide
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4" asChild>
              <Link href="/contact-hoft">Join HoFT Community</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
