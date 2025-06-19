"use client"
import { useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Plane, FileText, Clock, CheckCircle, Users, Home, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function VisaPermitsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section
        className="relative py-20"
        style={{
          backgroundImage: "url('/images/berlin-entrepreneurs.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#001d6c]/90 to-[#001d6c]/70" />

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

          <h1 className="text-5xl font-bold text-white mb-6">Visa & Work Permits for Germany</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Complete guide to obtaining work authorization in Germany as a FinTech entrepreneur or employee.
          </p>
        </div>
      </section>

      {/* Visa Types Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#001d6c] mb-8 text-center">Choose Your Visa Path</h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {/* EU Blue Card */}
            <Card className="border-2 border-[#001d6c] shadow-xl">
              <CardHeader className="bg-[#001d6c] text-white">
                <CardTitle className="flex items-center">
                  <Plane className="h-5 w-5 mr-2" />
                  EU Blue Card
                </CardTitle>
                <div className="text-blue-200">Most Popular for FinTech</div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="text-sm">
                    <div className="font-semibold text-[#fd4b2c] mb-2">Requirements:</div>
                    <ul className="space-y-1 text-gray-600">
                      <li>• University degree</li>
                      <li>• €48,300+ salary (FinTech: €43,759.8+)</li>
                      <li>• Job offer from German company</li>
                      <li>• Health insurance</li>
                    </ul>
                  </div>

                  <div className="text-sm">
                    <div className="font-semibold text-[#001d6c] mb-2">Benefits:</div>
                    <ul className="space-y-1 text-gray-600">
                      <li>• 4-year validity</li>
                      <li>• EU mobility rights</li>
                      <li>• Fast-track to permanent residence</li>
                      <li>• Family reunification</li>
                    </ul>
                  </div>

                  <Button className="w-full bg-[#001d6c] hover:bg-[#002244] text-white" asChild>
                    <Link href="#blue-card-details">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Skilled Worker Visa */}
            <Card className="border-2 border-gray-300 shadow-xl">
              <CardHeader className="bg-gray-100">
                <CardTitle className="flex items-center text-gray-700">
                  <Users className="h-5 w-5 mr-2" />
                  Skilled Worker Visa
                </CardTitle>
                <div className="text-gray-600">Alternative Option</div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="text-sm">
                    <div className="font-semibold text-[#fd4b2c] mb-2">Requirements:</div>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Vocational training or degree</li>
                      <li>• Job offer (any salary level)</li>
                      <li>• German language skills (B1)</li>
                      <li>• Recognition of qualifications</li>
                    </ul>
                  </div>

                  <div className="text-sm">
                    <div className="font-semibold text-[#001d6c] mb-2">Benefits:</div>
                    <ul className="space-y-1 text-gray-600">
                      <li>• 4-year validity</li>
                      <li>• No salary threshold</li>
                      <li>• Path to permanent residence</li>
                      <li>• Job mobility after 2 years</li>
                    </ul>
                  </div>

                  <Button className="w-full bg-gray-600 hover:bg-gray-700 text-white" asChild>
                    <Link href="#skilled-worker-details">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Startup Visa */}
            <Card className="border-2 border-[#fd4b2c] shadow-xl">
              <CardHeader className="bg-[#fd4b2c] text-white">
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Startup Visa
                </CardTitle>
                <div className="text-orange-100">For Entrepreneurs</div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="text-sm">
                    <div className="font-semibold text-[#fd4b2c] mb-2">Requirements:</div>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Innovative business idea</li>
                      <li>• University degree or experience</li>
                      <li>• Sufficient funding</li>
                      <li>• Business plan</li>
                    </ul>
                  </div>

                  <div className="text-sm">
                    <div className="font-semibold text-[#001d6c] mb-2">Benefits:</div>
                    <ul className="space-y-1 text-gray-600">
                      <li>• 3-year validity</li>
                      <li>• Self-employment allowed</li>
                      <li>• Can hire employees</li>
                      <li>• Extension possible</li>
                    </ul>
                  </div>

                  <Button className="w-full bg-[#fd4b2c] hover:bg-[#e03b1c] text-white" asChild>
                    <Link href="#startup-visa-details">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Assessment */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl text-center border border-blue-200">
            <h3 className="text-2xl font-bold text-[#001d6c] mb-4">Which Visa is Right for You?</h3>
            <p className="text-gray-600 mb-6">Take our assessment to find the best visa option for your situation</p>
            <Button size="lg" className="bg-[#fd4b2c] hover:bg-[#e03b1c] text-white" asChild>
              <Link href="/ai-quiz">Take Visa Assessment</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Detailed EU Blue Card Information */}
      <section className="py-16 bg-gray-50" id="blue-card-details">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#001d6c] mb-8 text-center">EU Blue Card - Complete Guide</h2>

          <div className="max-w-6xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-[#001d6c] text-2xl">
                  <Plane className="h-8 w-8 mr-3" />
                  EU Blue Card Application Process
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-[#001d6c] mb-4 text-xl">Salary Requirements 2024:</h4>
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                        <div className="font-semibold text-[#001d6c] text-lg">General Professions</div>
                        <div className="text-3xl font-bold text-[#fd4b2c]">€48,300</div>
                        <div className="text-sm text-gray-600">Gross annual salary minimum</div>
                      </div>
                      <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                        <div className="font-semibold text-[#001d6c] text-lg">Shortage Occupations</div>
                        <div className="text-3xl font-bold text-[#fd4b2c]">€43,759.8</div>
                        <div className="text-sm text-gray-600">IT, Engineering, Healthcare, etc.</div>
                      </div>
                    </div>

                    <h4 className="font-bold text-[#001d6c] mb-4 mt-8 text-xl">Required Documents:</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold">University Degree</div>
                          <div className="text-sm text-gray-600">Recognized by German authorities</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold">Employment Contract</div>
                          <div className="text-sm text-gray-600">Meeting salary requirements</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold">Health Insurance</div>
                          <div className="text-sm text-gray-600">Valid German health insurance</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold">Clean Criminal Record</div>
                          <div className="text-sm text-gray-600">From all countries of residence</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#001d6c] mb-4 text-xl">Application Process:</h4>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="bg-[#fd4b2c] text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-4 mt-0.5">
                          1
                        </div>
                        <div>
                          <div className="font-semibold text-lg">Degree Recognition</div>
                          <div className="text-sm text-gray-600">Submit to anabin database or ZAB (2-8 weeks)</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-[#fd4b2c] text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-4 mt-0.5">
                          2
                        </div>
                        <div>
                          <div className="font-semibold text-lg">Job Search</div>
                          <div className="text-sm text-gray-600">
                            Secure employment contract meeting salary threshold
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-[#fd4b2c] text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-4 mt-0.5">
                          3
                        </div>
                        <div>
                          <div className="font-semibold text-lg">Visa Application</div>
                          <div className="text-sm text-gray-600">Submit at German consulate (4-12 weeks)</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-[#fd4b2c] text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-4 mt-0.5">
                          4
                        </div>
                        <div>
                          <div className="font-semibold text-lg">Residence Permit</div>
                          <div className="text-sm text-gray-600">Register in Germany and get residence card</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 bg-green-50 border border-green-200 p-6 rounded-xl">
                      <h4 className="font-bold text-green-800 mb-3 text-lg">Fast-Track Benefits:</h4>
                      <ul className="text-sm text-green-700 space-y-2">
                        <li>• Permanent residence after 21 months (with B1 German)</li>
                        <li>• Permanent residence after 33 months (without German)</li>
                        <li>• Work anywhere in EU after 18 months</li>
                        <li>• Bring family members immediately</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline and Costs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#001d6c] mb-8 text-center">Timeline & Costs Overview</h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-l-4 border-l-[#001d6c] shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-[#001d6c] mb-4 flex items-center text-lg">
                  <Clock className="h-5 w-5 mr-2" />
                  EU Blue Card
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Processing Time:</span>
                    <span className="font-semibold">4-12 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Application Fee:</span>
                    <span className="font-semibold">€140</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Recognition:</span>
                    <span className="font-semibold">€100-600</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Total Cost:</span>
                    <span className="font-bold text-[#fd4b2c]">€240-740</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-gray-500 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-700 mb-4 flex items-center text-lg">
                  <Clock className="h-5 w-5 mr-2" />
                  Skilled Worker
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Processing Time:</span>
                    <span className="font-semibold">6-16 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Application Fee:</span>
                    <span className="font-semibold">€140</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Recognition:</span>
                    <span className="font-semibold">€100-600</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Total Cost:</span>
                    <span className="font-bold text-[#fd4b2c]">€240-740</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#fd4b2c] shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-[#fd4b2c] mb-4 flex items-center text-lg">
                  <Clock className="h-5 w-5 mr-2" />
                  Startup Visa
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Processing Time:</span>
                    <span className="font-semibold">8-20 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Application Fee:</span>
                    <span className="font-semibold">€140</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Legal Support:</span>
                    <span className="font-semibold">€2,000-5,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Total Cost:</span>
                    <span className="font-bold text-[#fd4b2c]">€2,140-5,140</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#001d6c] to-[#003399] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Visa Application?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get step-by-step guidance and connect with immigration experts
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-[#fd4b2c] hover:bg-[#e03b1c] text-white px-8 py-4" asChild>
              <Link href="/living-berlin">
                Next: Living in Berlin
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4" asChild>
              <Link href="/contact-hoft">Get Immigration Help</Link>
            </Button>
          </div>

          {/* Back to Home Button */}
          <Button variant="ghost" className="text-white hover:bg-white/10" asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
