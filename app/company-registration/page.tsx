"use client"
import { useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Building2, FileText, Clock, CheckCircle, Download, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CompanyRegistrationPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section
        className="relative py-20"
        style={{
          backgroundImage: "url('/images/berlin-business-registration.jpg')",
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
            <Badge className="bg-[#fd4b2c] text-white">Company Setup</Badge>
          </div>

          <h1 className="text-5xl font-bold text-white mb-6">Company Registration in Germany</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Complete step-by-step guide to registering your FinTech company in Berlin and launching your business in
            Germany.
          </p>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <div className="p-6">
              <Clock className="h-12 w-12 text-[#fd4b2c] mx-auto mb-4" />
              <div className="text-2xl font-bold text-[#001d6c] mb-2">6-8 Weeks</div>
              <div className="text-gray-600">Total Timeline</div>
            </div>
            <div className="p-6">
              <Building2 className="h-12 w-12 text-[#fd4b2c] mx-auto mb-4" />
              <div className="text-2xl font-bold text-[#001d6c] mb-2">€25,000</div>
              <div className="text-gray-600">Min Capital (GmbH)</div>
            </div>
            <div className="p-6">
              <FileText className="h-12 w-12 text-[#fd4b2c] mx-auto mb-4" />
              <div className="text-2xl font-bold text-[#001d6c] mb-2">8 Steps</div>
              <div className="text-gray-600">Registration Process</div>
            </div>
            <div className="p-6">
              <CheckCircle className="h-12 w-12 text-[#fd4b2c] mx-auto mb-4" />
              <div className="text-2xl font-bold text-[#001d6c] mb-2">€1,500</div>
              <div className="text-gray-600">Avg Setup Costs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Steps */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#001d6c] mb-12">Registration Process</h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                step: "1",
                title: "Company Name Reservation",
                description: "Reserve your company name with the German Trade Register",
                details: [
                  "Check name availability online",
                  "Ensure compliance with naming regulations",
                  "Reserve name for 6 months",
                  "Cost: €50-100",
                ],
                timeline: "1-2 days",
              },
              {
                step: "2",
                title: "Capital Deposit",
                description: "Deposit minimum share capital in German bank account",
                details: [
                  "Open temporary bank account",
                  "Deposit €25,000 (GmbH) or €1+ (UG)",
                  "Obtain bank confirmation letter",
                  "Keep funds frozen until registration",
                ],
                timeline: "3-5 days",
              },
              {
                step: "3",
                title: "Articles of Association",
                description: "Draft and prepare legal founding documents",
                details: [
                  "Define company purpose and activities",
                  "Specify share capital and ownership",
                  "Appoint managing directors",
                  "Legal review recommended",
                ],
                timeline: "1 week",
              },
              {
                step: "4",
                title: "Notary Appointment",
                description: "Notarize founding documents and sign agreements",
                details: [
                  "Schedule appointment with German notary",
                  "All shareholders must attend",
                  "Sign articles of association",
                  "Cost: €300-800",
                ],
                timeline: "1 day",
              },
              {
                step: "5",
                title: "Commercial Register Filing",
                description: "Submit registration to Handelsregister",
                details: [
                  "Notary submits documents automatically",
                  "Register reviews application",
                  "Company officially incorporated",
                  "Cost: €150",
                ],
                timeline: "2-3 weeks",
              },
              {
                step: "6",
                title: "Tax Registration",
                description: "Register with local tax office (Finanzamt)",
                details: [
                  "Submit tax registration form",
                  "Obtain tax identification number",
                  "Register for VAT if applicable",
                  "Set up tax advisor relationship",
                ],
                timeline: "1 week",
              },
              {
                step: "7",
                title: "Trade License",
                description: "Apply for Gewerbeanmeldung (trade registration)",
                details: [
                  "Register business activity",
                  "Obtain trade license",
                  "Register with trade association",
                  "Cost: €15-65",
                ],
                timeline: "1-2 days",
              },
              {
                step: "8",
                title: "Final Setup",
                description: "Complete remaining administrative requirements",
                details: [
                  "Open business bank account",
                  "Release share capital",
                  "Obtain business insurance",
                  "Set up accounting system",
                ],
                timeline: "1 week",
              },
            ].map((step, index) => (
              <Card key={index} className="border-l-4 border-l-[#fd4b2c] shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-[#fd4b2c] text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#001d6c]">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-[#001d6c] border-[#001d6c]">
                      {step.timeline}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#001d6c] mb-12">Required Documents</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-[#001d6c]">Personal Documents</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Valid Passport</div>
                      <div className="text-sm text-gray-600">All shareholders and directors</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Proof of Address</div>
                      <div className="text-sm text-gray-600">Recent utility bill or rental agreement</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Criminal Background Check</div>
                      <div className="text-sm text-gray-600">From country of residence</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">CV/Resume</div>
                      <div className="text-sm text-gray-600">Professional background of directors</div>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="bg-orange-50">
                <CardTitle className="text-[#001d6c]">Business Documents</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Business Plan</div>
                      <div className="text-sm text-gray-600">Detailed business model and projections</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Registered Office Address</div>
                      <div className="text-sm text-gray-600">German business address</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Bank Confirmation</div>
                      <div className="text-sm text-gray-600">Proof of capital deposit</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Articles of Association</div>
                      <div className="text-sm text-gray-600">Drafted and reviewed by legal counsel</div>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#001d6c] to-[#003399] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Register Your Company?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get expert guidance through every step of the registration process
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-[#fd4b2c] hover:bg-[#e03b1c] text-white px-8 py-4" asChild>
              <Link href="/legal-compliance">
                <Download className="mr-2 h-5 w-5" />
                Next: Legal & Compliance
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4" asChild>
              <Link href="/contact-hoft">Get Professional Help</Link>
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
