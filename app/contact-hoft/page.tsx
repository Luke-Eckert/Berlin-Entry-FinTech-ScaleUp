import { Mail, MapPin, Users, Calendar, ArrowRight, Building2, TrendingUp, Network } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Image from "next/image"

export default function ContactHoFTPage() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-white shadow-lg rounded-2xl p-6">
              <Image src="/images/hoft-logo-clean.png" alt="HoFT Logo" width={80} height={80} className="h-16 w-auto" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Join Our FinTech Ecosystem</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            House of Finance & Tech Berlin connects international FinTech companies with Germany's regulatory landscape,
            business ecosystem, and growth opportunities. Apply to join our network or Scale-Up Academy.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Support FinTech Companies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not a consulting firm - we're an ecosystem platform connecting you with the right resources and
              opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Network className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ecosystem Access</h3>
                <p className="text-gray-600 leading-relaxed">
                  Connect with 340+ FinTech companies, investors, regulators, and service providers in Berlin's
                  ecosystem.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-green-100">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Scale-Up Academy</h3>
                <p className="text-gray-600 leading-relaxed">
                  Exclusive program for growth-stage companies with mentorship, workshops, and investor connections.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Events & Networking</h3>
                <p className="text-gray-600 leading-relaxed">
                  Regular events, workshops, and networking opportunities with industry leaders and decision makers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Apply to Join Our Network</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tell us about your company and how you'd like to engage with Berlin's FinTech ecosystem
            </p>
          </div>

          <Card className="border-0 shadow-xl bg-white">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-t-lg">
              <CardTitle className="text-2xl text-gray-900 text-center">Network Application</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form className="space-y-8">
                {/* Company Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Building2 className="h-5 w-5 mr-2 text-blue-600" />
                    Company Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input id="companyName" placeholder="Enter your company name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Website</Label>
                      <Input id="website" placeholder="https://yourcompany.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="industry">FinTech Sector</Label>
                      <Input id="industry" placeholder="e.g., Digital Banking, Payments, InsurTech" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="stage">Company Stage</Label>
                      <Input id="stage" placeholder="e.g., Seed, Series A, Growth" />
                    </div>
                  </div>
                </div>

                {/* Contact Person */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Users className="h-5 w-5 mr-2 text-green-600" />
                    Contact Person
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="title">Job Title</Label>
                      <Input id="title" placeholder="e.g., CEO, Founder, Head of Business Development" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                  </div>
                </div>

                {/* Interest Areas */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">What are you most interested in?</h3>
                  <RadioGroup defaultValue="">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="network" id="network" />
                        <Label htmlFor="network" className="flex-1">
                          <strong>General Network Membership</strong> - Access to ecosystem, events, and resources
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="scaleup" id="scaleup" />
                        <Label htmlFor="scaleup" className="flex-1">
                          <strong>Scale-Up Academy</strong> - Intensive program for growth-stage companies
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="partnership" id="partnership" />
                        <Label htmlFor="partnership" className="flex-1">
                          <strong>Strategic Partnership</strong> - Deeper collaboration opportunities
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="speaking" id="speaking" />
                        <Label htmlFor="speaking" className="flex-1">
                          <strong>Speaking & Events</strong> - Share expertise at our events
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                {/* Company Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Tell us about your company</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your business model, target market, and what makes your company unique..."
                    rows={4}
                  />
                </div>

                {/* German Market Interest */}
                <div className="space-y-2">
                  <Label htmlFor="germanMarket">Why are you interested in the German market?</Label>
                  <Textarea
                    id="germanMarket"
                    placeholder="Share your German market strategy, timeline, and specific goals..."
                    rows={3}
                  />
                </div>

                <div className="pt-6">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-lg font-semibold">
                    Submit Application
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600">Have questions about our ecosystem or application process?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-8 text-center">
                <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">For general inquiries and applications</p>
                <a href="mailto:ecosystem@hoft.berlin" className="text-blue-600 font-semibold hover:text-blue-700">
                  ecosystem@hoft.berlin
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
              <CardContent className="p-8 text-center">
                <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-4">Located in Berlin's Digital Hub</p>
                <p className="text-green-600 font-semibold">
                  Spittelmarkt Digital Hub
                  <br />
                  Berlin, Germany
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About HoFT */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-white shadow-lg rounded-2xl p-6">
              <Image src="/images/hoft-logo-clean.png" alt="HoFT Logo" width={60} height={60} className="h-12 w-auto" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About House of Finance & Tech Berlin</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            We're Berlin's premier platform connecting international FinTech companies with Germany's regulatory
            landscape, business ecosystem, and growth opportunities. Our mission is to accelerate FinTech innovation by
            providing access to the right networks, knowledge, and opportunities.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">340+</div>
              <div className="text-gray-600">FinTech Companies</div>
              <div className="text-sm text-gray-500">In our network</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Countries</div>
              <div className="text-sm text-gray-500">Represented</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
              <div className="text-gray-600">Events</div>
              <div className="text-sm text-gray-500">Hosted annually</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
