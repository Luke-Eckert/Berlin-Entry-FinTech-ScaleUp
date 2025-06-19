"use client"
import Link from "next/link"
import { ArrowLeft, Shield, FileText, AlertTriangle, CheckCircle, Download, Clock, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LegalCompliancePage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section
        className="relative py-20"
        style={{
          backgroundImage: "url('/images/berlin-business-district.jpg')",
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

          <h1 className="text-5xl font-bold text-white mb-6">Legal & Compliance for FinTech</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Navigate German financial regulations, BaFin licensing, and compliance requirements for your FinTech
            business.
          </p>
        </div>
      </section>

      {/* BaFin License Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001d6c] mb-8 text-center">BaFin License Requirements</h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {/* Payment Institution */}
            <Card className="border-2 border-[#001d6c] shadow-lg">
              <CardHeader className="bg-[#001d6c] text-white">
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Payment Institution
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="text-sm">
                    <div className="font-semibold text-[#fd4b2c] mb-2">Required For:</div>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Payment processing</li>
                      <li>• Money transfers</li>
                      <li>• Payment initiation services</li>
                      <li>• Account information services</li>
                    </ul>
                  </div>

                  <div className="text-sm">
                    <div className="font-semibold text-[#001d6c] mb-2">Capital Requirements:</div>
                    <div className="text-gray-600">€20,000 - €125,000</div>
                  </div>

                  <div className="text-sm">
                    <div className="font-semibold text-[#001d6c] mb-2">Timeline:</div>
                    <div className="text-gray-600">6-12 months</div>
                  </div>

                  <Button className="w-full bg-[#001d6c] hover:bg-[#002244] text-white" asChild>
                    <Link href="#payment-details">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* E-Money Institution */}
            <Card className="border-2 border-[#5765cd] shadow-lg">
              <CardHeader className="bg-[#5765cd] text-white">
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  E-Money Institution
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="text-sm">
                    <div className="font-semibold text-[#fd4b2c] mb-2">Required For:</div>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Digital wallets</li>
                      <li>• Prepaid cards</li>
                      <li>• E-money issuance</li>
                      <li>• Stored value products</li>
                    </ul>
                  </div>

                  <div className="text-sm">
                    <div className="font-semibold text-[#001d6c] mb-2">Capital Requirements:</div>
                    <div className="text-gray-600">€350,000</div>
                  </div>

                  <div className="text-sm">
                    <div className="font-semibold text-[#001d6c] mb-2">Timeline:</div>
                    <div className="text-gray-600">9-15 months</div>
                  </div>

                  <Button className="w-full bg-[#5765cd] hover:bg-[#4a5bb8] text-white" asChild>
                    <Link href="#emoney-details">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Banking License */}
            <Card className="border-2 border-[#fd4b2c] shadow-lg">
              <CardHeader className="bg-[#fd4b2c] text-white">
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Banking License
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="text-sm">
                    <div className="font-semibold text-white mb-2">Required For:</div>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Deposit taking</li>
                      <li>• Lending services</li>
                      <li>• Credit provision</li>
                      <li>• Full banking services</li>
                    </ul>
                  </div>

                  <div className="text-sm">
                    <div className="font-semibold text-[#001d6c] mb-2">Capital Requirements:</div>
                    <div className="text-gray-600">€5,000,000+</div>
                  </div>

                  <div className="text-sm">
                    <div className="font-semibold text-[#001d6c] mb-2">Timeline:</div>
                    <div className="text-gray-600">12-24 months</div>
                  </div>

                  <Button className="w-full bg-[#fd4b2c] hover:bg-[#e03b1c] text-white" asChild>
                    <Link href="#banking-details">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Assessment */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-[#001d6c] mb-4">Not Sure Which License You Need?</h3>
            <p className="text-gray-600 mb-6">Take our quick assessment to determine your regulatory requirements</p>
            <Button size="lg" className="bg-[#fd4b2c] hover:bg-[#e03b1c] text-white" asChild>
              <Link href="/ai-quiz">Take License Assessment</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Detailed License Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="payment" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="payment">Payment Institution</TabsTrigger>
              <TabsTrigger value="emoney">E-Money Institution</TabsTrigger>
              <TabsTrigger value="banking">Banking License</TabsTrigger>
            </TabsList>

            <TabsContent value="payment" className="mt-8" id="payment-details">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-[#001d6c]">
                    <Shield className="h-6 w-6 mr-3" />
                    Payment Institution License (PI)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-[#001d6c] mb-4">Application Requirements:</h4>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-semibold">Business Plan</div>
                            <div className="text-sm text-gray-600">Detailed 3-year financial projections</div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-semibold">Risk Management</div>
                            <div className="text-sm text-gray-600">Comprehensive risk assessment framework</div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-semibold">AML/KYC Procedures</div>
                            <div className="text-sm text-gray-600">Anti-money laundering compliance program</div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-semibold">IT Security Concept</div>
                            <div className="text-sm text-gray-600">Technical and organizational measures</div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-semibold">Management Fit & Proper</div>
                            <div className="text-sm text-gray-600">Background checks for key personnel</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-[#001d6c] mb-4">Ongoing Obligations:</h4>
                      <div className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <div className="font-semibold text-[#001d6c]">Reporting Requirements</div>
                          <div className="text-sm text-gray-600">Monthly and annual reports to BaFin</div>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <div className="font-semibold text-[#001d6c]">Capital Adequacy</div>
                          <div className="text-sm text-gray-600">Maintain minimum capital ratios</div>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <div className="font-semibold text-[#001d6c]">Client Fund Safeguarding</div>
                          <div className="text-sm text-gray-600">Segregate customer funds</div>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <div className="font-semibold text-[#001d6c]">Audit Requirements</div>
                          <div className="text-sm text-gray-600">Annual external audits</div>
                        </div>
                      </div>

                      <div className="mt-6 bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                        <div className="flex items-start">
                          <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                          <div>
                            <div className="font-semibold text-yellow-800">Application Fee:</div>
                            <div className="text-sm text-yellow-700">€5,000 - €25,000 depending on services</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* More Detailed Information */}
                  <div className="mt-8">
                    <h4 className="font-bold text-[#001d6c] mb-4">Detailed Application Process:</h4>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                      <li>
                        <span className="font-semibold">Initial Consultation:</span> Discuss your business model with
                        BaFin.
                      </li>
                      <li>
                        <span className="font-semibold">Document Preparation:</span> Compile all required documents
                        (business plan, risk analysis, etc.).
                      </li>
                      <li>
                        <span className="font-semibold">Application Submission:</span> Submit the application package to
                        BaFin.
                      </li>
                      <li>
                        <span className="font-semibold">Review and Q&A:</span> Respond to BaFin's queries and provide
                        additional information.
                      </li>
                      <li>
                        <span className="font-semibold">On-site Inspection:</span> Prepare for an inspection of your
                        business premises.
                      </li>
                      <li>
                        <span className="font-semibold">License Granting:</span> Receive your Payment Institution
                        license.
                      </li>
                    </ol>
                  </div>

                  {/* Specific Documentation Requirements */}
                  <div className="mt-8">
                    <h4 className="font-bold text-[#001d6c] mb-4">Specific Documentation Requirements:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>Detailed Business Plan with financial forecasts</li>
                      <li>Organizational chart and governance structure</li>
                      <li>Description of IT systems and security measures</li>
                      <li>AML/KYC policies and procedures</li>
                      <li>Risk management framework</li>
                      <li>Outsourcing agreements (if applicable)</li>
                      <li>Proof of initial capital</li>
                    </ul>
                  </div>

                  {/* Timeline Expectations with Milestones */}
                  <div className="mt-8">
                    <h4 className="font-bold text-[#001d6c] mb-4">Timeline Expectations with Milestones:</h4>
                    <ul className="list-none pl-0 space-y-2 text-gray-600">
                      <li>
                        <span className="font-semibold">Month 1-2:</span> Preparation of documents and initial
                        consultation.
                      </li>
                      <li>
                        <span className="font-semibold">Month 3-4:</span> Formal application submission.
                      </li>
                      <li>
                        <span className="font-semibold">Month 5-7:</span> BaFin review and Q&A.
                      </li>
                      <li>
                        <span className="font-semibold">Month 8-10:</span> On-site inspection.
                      </li>
                      <li>
                        <span className="font-semibold">Month 11-12:</span> License approval.
                      </li>
                    </ul>
                  </div>

                  {/* Cost Breakdowns */}
                  <div className="mt-8">
                    <h4 className="font-bold text-[#001d6c] mb-4">Cost Breakdowns:</h4>
                    <ul className="list-none pl-0 space-y-2 text-gray-600">
                      <li>
                        <span className="font-semibold">Application Fees:</span> €5,000 - €25,000
                      </li>
                      <li>
                        <span className="font-semibold">Legal & Consulting Fees:</span> €10,000 - €50,000
                      </li>
                      <li>
                        <span className="font-semibold">IT Infrastructure Setup:</span> €5,000 - €20,000
                      </li>
                      <li>
                        <span className="font-semibold">Compliance Software:</span> €2,000 - €10,000 annually
                      </li>
                    </ul>
                  </div>

                  {/* Ongoing Compliance Obligations */}
                  <div className="mt-8">
                    <h4 className="font-bold text-[#001d6c] mb-4">Ongoing Compliance Obligations:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>Regular reporting to BaFin</li>
                      <li>Maintaining adequate capital</li>
                      <li>Conducting annual audits</li>
                      <li>Ongoing AML/KYC compliance</li>
                      <li>Data protection and GDPR compliance</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="emoney" className="mt-8" id="emoney-details">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-[#5765cd]">
                    <Shield className="h-6 w-6 mr-3" />
                    E-Money Institution License (EMI)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-[#5765cd] mb-4">Key Requirements:</h4>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-semibold">Initial Capital €350,000</div>
                            <div className="text-sm text-gray-600">Must be maintained at all times</div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-semibold">Governance Structure</div>
                            <div className="text-sm text-gray-600">Board composition and oversight</div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-semibold">Operational Resilience</div>
                            <div className="text-sm text-gray-600">Business continuity planning</div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-semibold">Customer Protection</div>
                            <div className="text-sm text-gray-600">E-money redemption guarantees</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-[#5765cd] mb-4">Permitted Activities:</h4>
                      <div className="space-y-3">
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <div className="font-semibold text-[#5765cd] mb-2">Core Services</div>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Issue electronic money</li>
                            <li>• Provide payment services</li>
                            <li>• Distribute e-money through agents</li>
                          </ul>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <div className="font-semibold text-[#5765cd] mb-2">Additional Services</div>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Payment account services</li>
                            <li>• Credit-related services</li>
                            <li>• Financial and operational services</li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6 bg-green-50 border border-green-200 p-4 rounded-lg">
                        <div className="font-semibold text-green-800 mb-2">EU Passporting Rights</div>
                        <div className="text-sm text-green-700">
                          Operate across all EU member states with single license
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* More Detailed Information */}
                  <div className="mt-8">
                    <h4 className="font-bold text-[#5765cd] mb-4">Detailed Application Process:</h4>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                      <li>
                        <span className="font-semibold">Pre-Application Meeting:</span> Discuss your business model with
                        BaFin.
                      </li>
                      <li>
                        <span className="font-semibold">Document Preparation:</span> Compile all required documents
                        (business plan, risk analysis, etc.).
                      </li>
                      <li>
                        <span className="font-semibold">Application Submission:</span> Submit the application package to
                        BaFin.
                      </li>
                      <li>
                        <span className="font-semibold">Review and Q&A:</span> Respond to BaFin's queries and provide
                        additional information.
                      </li>
                      <li>
                        <span className="font-semibold">On-site Inspection:</span> Prepare for an inspection of your
                        business premises.
                      </li>
                      <li>
                        <span className="font-semibold">License Granting:</span> Receive your E-Money Institution
                        license.
                      </li>
                    </ol>
                  </div>

                  {/* Specific Documentation Requirements */}
                  <div className="mt-8">
                    <h4 className="font-bold text-[#5765cd] mb-4">Specific Documentation Requirements:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>Detailed Business Plan with financial forecasts</li>
                      <li>Organizational chart and governance structure</li>
                      <li>Description of IT systems and security measures</li>
                      <li>AML/KYC policies and procedures</li>
                      <li>Risk management framework</li>
                      <li>Outsourcing agreements (if applicable)</li>
                      <li>Proof of initial capital (€350,000)</li>
                      <li>Safeguarding of Funds Policy</li>
                    </ul>
                  </div>

                  {/* Timeline Expectations with Milestones */}
                  <div className="mt-8">
                    <h4 className="font-bold text-[#5765cd] mb-4">Timeline Expectations with Milestones:</h4>
                    <ul className="list-none pl-0 space-y-2 text-gray-600">
                      <li>
                        <span className="font-semibold">Month 1-3:</span> Preparation of documents and pre-application
                        meeting.
                      </li>
                      <li>
                        <span className="font-semibold">Month 4-5:</span> Formal application submission.
                      </li>
                      <li>
                        <span className="font-semibold">Month 6-9:</span> BaFin review and Q&A.
                      </li>
                      <li>
                        <span className="font-semibold">Month 10-12:</span> On-site inspection.
                      </li>
                      <li>
                        <span className="font-semibold">Month 13-15:</span> License approval.
                      </li>
                    </ul>
                  </div>

                  {/* Cost Breakdowns */}
                  <div className="mt-8">
                    <h4 className="font-bold text-[#5765cd] mb-4">Cost Breakdowns:</h4>
                    <ul className="list-none pl-0 space-y-2 text-gray-600">
                      <li>
                        <span className="font-semibold">Application Fees:</span> €10,000 - €30,000
                      </li>
                      <li>
                        <span className="font-semibold">Legal & Consulting Fees:</span> €20,000 - €75,000
                      </li>
                      <li>
                        <span className="font-semibold">IT Infrastructure Setup:</span> €10,000 - €30,000
                      </li>
                      <li>
                        <span className="font-semibold">Compliance Software:</span> €5,000 - €15,000 annually
                      </li>
                    </ul>
                  </div>

                  {/* Ongoing Compliance Obligations */}
                  <div className="mt-8">
                    <h4 className="font-bold text-[#5765cd] mb-4">Ongoing Compliance Obligations:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>Regular reporting to BaFin</li>
                      <li>Maintaining adequate capital (€350,000)</li>
                      <li>Conducting annual audits</li>
                      <li>Ongoing AML/KYC compliance</li>
                      <li>Data protection and GDPR compliance</li>
                      <li>Safeguarding of Funds</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="banking" className="mt-8" id="banking-details">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-[#fd4b2c]">
                    <Shield className="h-6 w-6 mr-3" />
                    Full Banking License
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-[#fd4b2c] mb-4">Stringent Requirements:</h4>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <AlertTriangle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-semibold">Minimum Capital €5M</div>
                            <div className="text-sm text-gray-600">Tier 1 capital requirements</div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <AlertTriangle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-semibold">Extensive Documentation</div>
                            <div className="text-sm text-gray-600">Hundreds of pages of applications</div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <AlertTriangle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-semibold">Senior Management</div>
                            <div className="text-sm text-gray-600">Proven banking experience required</div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <AlertTriangle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-semibold">Comprehensive Systems</div>
                            <div className="text-sm text-gray-600">Full banking infrastructure</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
                        <h4 className="font-bold text-red-800 mb-3">⚠️ Consider Alternatives First</h4>
                        <p className="text-sm text-red-700 mb-3">
                          Full banking licenses are extremely complex and expensive. Most FinTech companies should
                          consider:
                        </p>
                        <ul className="text-sm text-red-700 space-y-1">
                          <li>• Banking-as-a-Service partnerships</li>
                          <li>• Payment institution licenses</li>
                          <li>• E-money institution licenses</li>
                          <li>• Regulatory sandbox programs</li>
                        </ul>
                      </div>

                      <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
                        <h4 className="font-bold text-orange-800 mb-3">Typical Costs</h4>
                        <div className="space-y-2 text-sm text-orange-700">
                          <div className="flex justify-between">
                            <span>Legal & Consulting:</span>
                            <span>€500K - €2M</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Application Fees:</span>
                            <span>€50K - €100K</span>
                          </div>
                          <div className="flex justify-between">
                            <span>IT Infrastructure:</span>
                            <span>€1M - €5M</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Ongoing Compliance:</span>
                            <span>€500K+ annually</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* More Detailed Information */}
                  <div className="mt-8">
                    <h4 className="font-bold text-[#fd4b2c] mb-4">Detailed Application Process:</h4>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                      <li>
                        <span className="font-semibold">Initial Consultation with BaFin:</span> Discuss your business
                        plan and intentions.
                      </li>
                      <li>
                        <span className="font-semibold">Preparation of Extensive Documentation:</span> Prepare all
                        required documents, including business plan, risk analysis, and compliance framework.
                      </li>
                      <li>
                        <span className="font-semibold">Submission of Application Package:</span> Submit the complete
                        application package to BaFin.
                      </li>
                      <li>
                        <span className="font-semibold">BaFin Review and Q&A:</span> Respond to BaFin's queries and
                        provide additional information as needed.
                      </li>
                      <li>
                        <span className="font-semibold">On-Site Inspection:</span> Prepare for a thorough inspection of
                        your business premises and systems.
                      </li>
                      <li>
                        <span className="font-semibold">License Granting:</span> Receive your full banking license.
                      </li>
                    </ol>
                  </div>

                  {/* Specific Documentation Requirements */}
                  <div className="mt-8">
                    <h4 className="font-bold text-[#fd4b2c] mb-4">Specific Documentation Requirements:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>Detailed Business Plan with comprehensive financial forecasts</li>
                      <li>Organizational chart and governance structure</li>
                      <li>Description of IT systems and security measures</li>
                      <li>AML/KYC policies and procedures</li>
                      <li>Risk management framework</li>
                      <li>Outsourcing agreements (if applicable)</li>
                      <li>Proof of initial capital (€5,000,000+)</li>
                      <li>Comprehensive Compliance Manual</li>
                      <li>Internal Audit Procedures</li>
                    </ul>
                  </div>

                  {/* Timeline Expectations with Milestones */}
                  <div className="mt-8">
                    <h4 className="font-bold text-[#fd4b2c] mb-4">Timeline Expectations with Milestones:</h4>
                    <ul className="list-none pl-0 space-y-2 text-gray-600">
                      <li>
                        <span className="font-semibold">Month 1-6:</span> Initial consultation and preparation of
                        extensive documentation.
                      </li>
                      <li>
                        <span className="font-semibold">Month 7-9:</span> Formal application submission.
                      </li>
                      <li>
                        <span className="font-semibold">Month 10-18:</span> BaFin review and Q&A.
                      </li>
                      <li>
                        <span className="font-semibold">Month 19-22:</span> On-site inspection.
                      </li>
                      <li>
                        <span className="font-semibold">Month 23-24:</span> License approval.
                      </li>
                    </ul>
                  </div>

                  {/* Cost Breakdowns */}
                  <div className="mt-8">
                    <h4 className="font-bold text-[#fd4b2c] mb-4">Cost Breakdowns:</h4>
                    <ul className="list-none pl-0 space-y-2 text-gray-600">
                      <li>
                        <span className="font-semibold">Application Fees:</span> €50,000 - €100,000
                      </li>
                      <li>
                        <span className="font-semibold">Legal & Consulting Fees:</span> €500,000 - €2,000,000
                      </li>
                      <li>
                        <span className="font-semibold">IT Infrastructure Setup:</span> €1,000,000 - €5,000,000
                      </li>
                      <li>
                        <span className="font-semibold">Compliance Software:</span> €100,000 - €500,000 annually
                      </li>
                      <li>
                        <span className="font-semibold">Ongoing Compliance Costs:</span> €500,000+ annually
                      </li>
                    </ul>
                  </div>

                  {/* Ongoing Compliance Obligations */}
                  <div className="mt-8">
                    <h4 className="font-bold text-[#fd4b2c] mb-4">Ongoing Compliance Obligations:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>Regular reporting to BaFin</li>
                      <li>Maintaining adequate capital (€5,000,000+)</li>
                      <li>Conducting annual audits</li>
                      <li>Ongoing AML/KYC compliance</li>
                      <li>Data protection and GDPR compliance</li>
                      <li>Operational Risk Management</li>
                      <li>Liquidity Management</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Compliance Framework */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001d6c] mb-8 text-center">Essential Compliance Areas</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-l-4 border-l-[#001d6c] shadow-lg">
              <CardContent className="p-6">
                <Shield className="h-8 w-8 text-[#001d6c] mb-4" />
                <h3 className="font-bold text-[#001d6c] mb-3">AML/KYC</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Customer identification</li>
                  <li>• Transaction monitoring</li>
                  <li>• Suspicious activity reporting</li>
                  <li>• Record keeping</li>
                </ul>
                <Button size="sm" className="mt-4 w-full bg-[#001d6c] hover:bg-[#002244] text-white" asChild>
                  <Link href="/aml-guide">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#5765cd] shadow-lg">
              <CardContent className="p-6">
                <FileText className="h-8 w-8 text-[#5765cd] mb-4" />
                <h3 className="font-bold text-[#5765cd] mb-3">Data Protection</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• GDPR compliance</li>
                  <li>• Data processing agreements</li>
                  <li>• Privacy by design</li>
                  <li>• Breach notification</li>
                </ul>
                <Button size="sm" className="mt-4 w-full bg-[#5765cd] hover:bg-[#4a5bb8] text-white" asChild>
                  <Link href="/gdpr-guide">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#fd4b2c] shadow-lg">
              <CardContent className="p-6">
                <Building2 className="h-8 w-8 text-[#fd4b2c] mb-4" />
                <h3 className="font-bold text-[#fd4b2c] mb-3">Operational Risk</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Business continuity</li>
                  <li>• Incident management</li>
                  <li>• Outsourcing oversight</li>
                  <li>• Change management</li>
                </ul>
                <Button size="sm" className="mt-4 w-full bg-[#fd4b2c] hover:bg-[#e03b1c] text-white" asChild>
                  <Link href="/operational-risk-guide">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#e3fa6c] shadow-lg">
              <CardContent className="p-6">
                <Clock className="h-8 w-8 text-[#7c8f00] mb-4" />
                <h3 className="font-bold text-[#7c8f00] mb-3">Reporting</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Regulatory reporting</li>
                  <li>• Statistical reporting</li>
                  <li>• Audit trails</li>
                  <li>• Management information</li>
                </ul>
                <Button size="sm" className="mt-4 w-full bg-[#7c8f00] hover:bg-[#6a7700] text-white" asChild>
                  <Link href="/reporting-guide">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          {/* More Actionable Guides and Resources */}
          <div className="mt-8">
            <h4 className="text-xl font-bold text-[#001d6c] mb-4 text-center">
              Explore Our Compliance Guides and Resources
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Link href="/aml-guide" className="block">
                <Card className="border-l-4 border-l-[#001d6c] shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Shield className="h-6 w-6 text-[#001d6c] mb-2" />
                    <h5 className="font-semibold text-[#001d6c] mb-1">AML/KYC Guide</h5>
                    <p className="text-sm text-gray-600">
                      Understand anti-money laundering and know your customer requirements.
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/gdpr-guide" className="block">
                <Card className="border-l-4 border-l-[#5765cd] shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <FileText className="h-6 w-6 text-[#5765cd] mb-2" />
                    <h5 className="font-semibold text-[#5765cd] mb-1">GDPR Compliance Guide</h5>
                    <p className="text-sm text-gray-600">
                      Navigate data protection regulations and ensure GDPR compliance.
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/operational-risk-guide" className="block">
                <Card className="border-l-4 border-l-[#fd4b2c] shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Building2 className="h-6 w-6 text-[#fd4b2c] mb-2" />
                    <h5 className="font-semibold text-[#fd4b2c] mb-1">Operational Risk Management</h5>
                    <p className="text-sm text-gray-600">Manage operational risks and ensure business continuity.</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/reporting-guide" className="block">
                <Card className="border-l-4 border-l-[#e3fa6c] shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Clock className="h-6 w-6 text-[#7c8f00] mb-2" />
                    <h5 className="font-semibold text-[#7c8f00] mb-1">Regulatory Reporting Guide</h5>
                    <p className="text-sm text-gray-600">
                      Meet regulatory reporting requirements and maintain audit trails.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#001d6c] to-[#003399] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help with Regulatory Compliance?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get expert guidance on licensing, compliance frameworks, and regulatory strategy
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#fd4b2c] hover:bg-[#e03b1c] text-white px-8 py-4" asChild>
              <Link href="/compliance-guide">
                <Download className="mr-2 h-5 w-5" />
                Download Compliance Guide
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white hover:bg-white/10 px-8 py-4 text-slate-700" asChild>
              <Link href="/contact-hoft">Get Expert Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
