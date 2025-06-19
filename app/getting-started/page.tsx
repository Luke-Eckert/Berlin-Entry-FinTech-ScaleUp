import { ArrowRight, CheckCircle, Clock, Users, Building2, FileText, Plane, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/berlin-startup-office.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Getting Started in Berlin</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-light">
            Your comprehensive guide to establishing your FinTech business in Europe's financial technology capital.
          </p>
        </div>
      </section>

      {/* 2025 Blue Card Update */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-6">
              NEW: 2025 EU BLUE CARD IMPROVEMENTS
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 leading-tight">
              Streamlined Process: Lower Requirements, Faster Processing, Better Benefits
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-green-600 mb-2">€43,760</div>
                <div className="text-sm text-gray-600">
                  Minimum salary for shortage occupations (down from previous thresholds)
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600 mb-2">2-4 months</div>
                <div className="text-sm text-gray-600">Processing time (reduced from 6+ months)</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-orange-600 mb-2">Online</div>
                <div className="text-sm text-gray-600">Application process now available digitally</div>
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
              Learn About Blue Card Process
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Dual-Track Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">
            Dual-Track Approach: Company + Personal Setup
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 mb-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Why Run Both Processes in Parallel?</h3>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Our streamlined approach combines both personal relocation and company registration into a parallel
                  process, reducing your total setup time from 6+ months to just 2-4 months.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-sm bg-white">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center text-xl text-blue-900">
                      <Building2 className="h-6 w-6 text-orange-500 mr-3" />
                      Company Level
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>GmbH incorporation with €25,000 minimum capital</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Commercial register entry and trade office registration</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>German business bank account opening</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Tax registration and VAT ID</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>BaFin licensing strategy (partner vs. own license)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm bg-white">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center text-xl text-blue-900">
                      <Users className="h-6 w-6 text-blue-500 mr-3" />
                      Individual Level
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>EU Blue Card application (€43,760 minimum salary)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Housing search and rental agreements</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Address registration (Anmeldung)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Health insurance and personal banking</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Family reunification (including parents in 2025)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">Your Step-by-Step Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Initial Assessment & Planning",
                  duration: "Week 1-2",
                  icon: FileText,
                  tasks: [
                    "Market readiness assessment with AI quiz",
                    "Business model validation for German market",
                    "Initial legal structure consultation",
                    "Funding strategy planning",
                  ],
                },
                {
                  step: "2",
                  title: "Legal Foundation Setup",
                  duration: "Week 3-6",
                  icon: Building2,
                  tasks: [
                    "GmbH articles of association drafting",
                    "Notarization and initial capital deposit",
                    "Commercial register application",
                    "German business address establishment",
                  ],
                },
                {
                  step: "3",
                  title: "Blue Card Application",
                  duration: "Week 4-8 (Parallel)",
                  icon: Plane,
                  tasks: [
                    "Online Blue Card application submission",
                    "Document preparation and translation",
                    "Appointment scheduling with authorities",
                    "Family reunification planning",
                  ],
                },
                {
                  step: "4",
                  title: "Operational Setup",
                  duration: "Week 7-12",
                  icon: CreditCard,
                  tasks: [
                    "German business bank account opening",
                    "Tax registration and VAT ID",
                    "BaFin licensing pathway selection",
                    "Office space and team hiring",
                  ],
                },
              ].map((phase, index) => (
                <Card key={index} className="border-0 shadow-lg bg-white overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex">
                      <div className="w-20 bg-gradient-to-b from-blue-500 to-blue-600 flex items-center justify-center">
                        <div className="text-white font-bold text-2xl">{phase.step}</div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <phase.icon className="h-6 w-6 text-blue-500 mr-3" />
                            <h3 className="text-xl font-bold text-blue-900">{phase.title}</h3>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            {phase.duration}
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {phase.tasks.map((task, taskIndex) => (
                            <li key={taskIndex} className="flex items-start text-gray-600">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Requirements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">Key Requirements Checklist</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-blue-900">For GmbH Registration</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Minimum €25,000 share capital</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>German business address</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Managing director appointment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Notarized articles of association</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-blue-900">For EU Blue Card</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>€43,760+ annual salary (shortage occupations)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>University degree or equivalent</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Employment contract with German company</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Health insurance coverage</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-blue-900">For BaFin Licensing</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Fit and proper management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Viable business plan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Sufficient initial capital</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>AML/CTF compliance systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Berlin Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Take our AI-powered readiness assessment to get personalized recommendations for your FinTech expansion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3">
              Take AI Readiness Quiz
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3"
            >
              Download Complete Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
