import Link from "next/link"
import { Building2, Euro, Clock, CheckCircle, Download, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CompanySetupPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/berlin-business-registration.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#001d6c]/80" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Set Up Your Company</h1>
          <p className="text-xl opacity-90">Everything you need to register and launch in Germany</p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <Clock className="h-12 w-12 text-[#fd4b2c] mx-auto mb-4" />
              <div className="text-2xl font-bold text-[#001d6c] mb-2">6-8 Weeks</div>
              <div className="text-gray-600">Total Time</div>
            </div>
            <div>
              <Euro className="h-12 w-12 text-[#fd4b2c] mx-auto mb-4" />
              <div className="text-2xl font-bold text-[#001d6c] mb-2">€25,000</div>
              <div className="text-gray-600">Min Capital (GmbH)</div>
            </div>
            <div>
              <Building2 className="h-12 w-12 text-[#fd4b2c] mx-auto mb-4" />
              <div className="text-2xl font-bold text-[#001d6c] mb-2">2 Options</div>
              <div className="text-gray-600">GmbH or UG</div>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Structure */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#001d6c] mb-12">Pick Your Company Type</h2>

          <Tabs defaultValue="gmbh" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="gmbh" className="text-lg py-3">
                GmbH (Recommended)
              </TabsTrigger>
              <TabsTrigger value="ug" className="text-lg py-3">
                UG (Cheaper)
              </TabsTrigger>
            </TabsList>

            <TabsContent value="gmbh">
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-green-50">
                  <CardTitle className="text-2xl text-[#001d6c] flex items-center">
                    <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                    GmbH - The Professional Choice
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-green-600 mb-4">Why Choose GmbH?</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                          <span>Banks and investors take you seriously</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                          <span>Your personal assets are protected</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                          <span>Works across all of Europe</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                          <span>No weird profit rules</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#001d6c] mb-4">What You Need</h4>
                      <div className="bg-blue-50 rounded-lg p-4 mb-4">
                        <div className="text-3xl font-bold text-[#fd4b2c] mb-1">€25,000</div>
                        <div className="text-sm text-gray-600">Minimum money to start</div>
                      </div>
                      <ul className="space-y-2 text-gray-600">
                        <li>• One person to run the company</li>
                        <li>• German address for business</li>
                        <li>• About €1,000 for fees and paperwork</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ug">
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-orange-50">
                  <CardTitle className="text-2xl text-[#001d6c] flex items-center">
                    <AlertTriangle className="h-8 w-8 text-orange-600 mr-3" />
                    UG - The Budget Option
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-green-600 mb-4">Good Things</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                          <span>Only need €1 to start</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                          <span>Quick and cheap setup</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                          <span>Can upgrade to GmbH later</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-orange-600 mb-4">Not So Good</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                          <span>Banks don't trust you as much</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                          <span>Must save 25% of profits</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                          <span>Name must include "UG"</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Funding Considerations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#001d6c] mb-12">Funding Your Company</h2>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-[#001d6c] mb-2">Funding Requirements</h3>
              <p className="text-gray-600">
                Understand the capital needed for different company types (GmbH vs UG) and plan accordingly.
              </p>
              <ul className="list-disc pl-5 mt-2 text-gray-600">
                <li>GmbH: Minimum share capital of €25,000</li>
                <li>UG: Minimum share capital of €1 (but higher capital recommended)</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-[#001d6c] mb-2">Investment Readiness</h3>
              <p className="text-gray-600">
                Prepare your company for potential investors by having a solid business plan and financial projections.
              </p>
              <ul className="list-disc pl-5 mt-2 text-gray-600">
                <li>Develop a comprehensive business plan</li>
                <li>Create realistic financial projections</li>
                <li>Prepare a pitch deck</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-[#001d6c] mb-2">Capital Planning</h3>
              <p className="text-gray-600">
                Plan how you will use your capital effectively to ensure sustainable growth.
              </p>
              <ul className="list-disc pl-5 mt-2 text-gray-600">
                <li>Allocate funds for operational expenses</li>
                <li>Invest in marketing and sales</li>
                <li>Reserve funds for unexpected costs</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-[#001d6c] mb-2">Investor Relations</h3>
              <p className="text-gray-600">
                Establish good relationships with investors by providing regular updates and maintaining transparency.
              </p>
              <ul className="list-disc pl-5 mt-2 text-gray-600">
                <li>Provide regular updates on company performance</li>
                <li>Maintain open communication channels</li>
                <li>Be transparent about challenges and opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#001d6c] mb-12">How to Do It (Simple Steps)</h2>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                step: "1",
                title: "Pick a Name",
                description: "Choose your company name and check if it's available",
                time: "1 day",
                checklist: [
                  "Brainstorm potential company names",
                  "Check name availability with the German Trade Register",
                  "Ensure the name complies with legal requirements",
                ],
              },
              {
                step: "2",
                title: "Open Bank Account",
                description: "Put your money in a German bank",
                time: "1 week",
                checklist: [
                  "Research and select a suitable German bank",
                  "Prepare necessary documents (ID, address proof, etc.)",
                  "Schedule an appointment to open a business bank account",
                  "Deposit the required minimum capital",
                ],
              },
              {
                step: "3",
                title: "Write Company Rules",
                description: "Create the legal documents (or hire someone to do it)",
                time: "1 week",
                checklist: [
                  "Draft the articles of association (Gesellschaftsvertrag)",
                  "Define the company's purpose, registered office, and share capital",
                  "Consult with a lawyer or notary for legal compliance",
                ],
              },
              {
                step: "4",
                title: "Sign at Notary",
                description: "Make it official with a German notary",
                time: "1 day",
                checklist: [
                  "Schedule an appointment with a German notary",
                  "Review and sign the articles of association",
                  "Obtain notarization of the documents",
                ],
              },
              {
                step: "5",
                title: "Register Company",
                description: "Submit everything to the government",
                time: "2-3 weeks",
                checklist: [
                  "Submit the notarized articles of association to the Commercial Register (Handelsregister)",
                  "Pay the registration fees",
                  "Await official registration and entry in the Commercial Register",
                ],
              },
              {
                step: "6",
                title: "Get Tax Number",
                description: "Register for taxes",
                time: "1 week",
                checklist: [
                  "Register the company with the local tax office (Finanzamt)",
                  "Apply for a tax identification number (Steuernummer)",
                  "Obtain a VAT identification number (Umsatzsteuer-Identifikationsnummer) if applicable",
                ],
              },
              {
                step: "7",
                title: "Get Licenses",
                description: "Apply for any special permits you need",
                time: "2-6 months",
                checklist: [
                  "Identify any industry-specific licenses or permits required",
                  "Prepare and submit the necessary applications",
                  "Comply with all regulatory requirements",
                ],
              },
              {
                step: "8",
                title: "Start Business!",
                description: "You're ready to operate",
                time: "Done!",
                checklist: [
                  "Set up your business operations",
                  "Start marketing and sales activities",
                  "Comply with all ongoing legal and tax obligations",
                ],
              },
            ].map((step, index) => (
              <div key={index} className="flex items-start bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#fd4b2c] text-white rounded-full flex items-center justify-center font-bold text-lg mr-6 flex-shrink-0">
                  {step.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-[#001d6c]">{step.title}</h3>
                    <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">{step.time}</span>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                  {step.checklist && (
                    <ul className="list-disc pl-5 mt-2 text-gray-600">
                      {step.checklist.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#001d6c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need the Complete Guide?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Download our step-by-step checklist with all forms, contacts, and exact requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#fd4b2c] hover:bg-[#e03b1c] px-8 py-4" asChild>
              <Link href="/resources">
                <Download className="mr-2 h-5 w-5" />
                Download Free Guide
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4" asChild>
              <Link href="/join-ecosystem">Get Help from HoFT Network</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
