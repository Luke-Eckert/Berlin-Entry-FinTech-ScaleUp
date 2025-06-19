import { ArrowRight, Globe, TrendingUp, Building2, Users, Shield, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MarketAccessPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/berlin-business-district.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">European Market Access</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-light">
            Leverage Germany's position as Europe's largest economy to access 450+ million consumers across the EU.
          </p>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-orange-500 font-semibold text-sm uppercase tracking-wide mb-4">EUROPEAN GATEWAY</div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 leading-tight">
              Germany serves as the gateway to Europe's single market, offering FinTech companies access to the world's
              largest economic bloc with unified regulations and currency.
            </h2>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
              Download Market Guide
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Market Size & Opportunity */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">Market Size & Opportunity</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-3">450M+</div>
              <div className="text-gray-900 font-semibold mb-1">EU Consumers</div>
              <div className="text-gray-600 text-sm">Single market access</div>
            </div>
            <div className="text-center bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <div className="text-4xl font-bold text-green-600 mb-3">€15.6T</div>
              <div className="text-gray-900 font-semibold mb-1">EU GDP</div>
              <div className="text-gray-600 text-sm">Combined market size</div>
            </div>
            <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-3">€4.3T</div>
              <div className="text-gray-900 font-semibold mb-1">German GDP</div>
              <div className="text-gray-600 text-sm">Europe's largest economy</div>
            </div>
            <div className="text-center bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl">
              <div className="text-4xl font-bold text-orange-600 mb-3">27</div>
              <div className="text-gray-900 font-semibold mb-1">EU Countries</div>
              <div className="text-gray-600 text-sm">Unified regulations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Advantages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">Regulatory Advantages</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardHeader className="pb-4">
                <Shield className="h-10 w-10 text-orange-500 mb-4" />
                <CardTitle className="text-xl text-blue-900">EU Passporting Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  German financial licenses provide automatic access to all EU markets through passporting rights.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Operate across 27 EU countries</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Single regulatory framework</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Reduced compliance costs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardHeader className="pb-4">
                <Globe className="h-10 w-10 text-blue-500 mb-4" />
                <CardTitle className="text-xl text-blue-900">Single Currency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Euro adoption eliminates currency risk across 19 EU countries representing 340+ million people.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>No foreign exchange risk</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Simplified pricing strategies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Easier financial planning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardHeader className="pb-4">
                <Building2 className="h-10 w-10 text-green-500 mb-4" />
                <CardTitle className="text-xl text-blue-900">GDPR Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  German data protection standards align with EU-wide GDPR requirements for seamless expansion.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Unified data protection rules</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Consumer trust advantage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Competitive differentiation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategic Location */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">
            Strategic Location Benefits
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Geographic Advantages</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <TrendingUp className="h-6 w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      <strong className="text-gray-900">Central European location</strong> provides easy access to both
                      Western and Eastern European markets
                    </span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="h-6 w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      <strong className="text-gray-900">Time zone alignment</strong> with major European financial
                      centers (London, Paris, Frankfurt)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="h-6 w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      <strong className="text-gray-900">Transport connectivity</strong> with excellent air, rail, and
                      road links across Europe
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Business Environment</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <Users className="h-6 w-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      <strong className="text-gray-900">Multilingual workforce</strong> with strong English proficiency
                      and European language skills
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-6 w-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      <strong className="text-gray-900">Cultural diversity</strong> reflecting European market
                      preferences and consumer behavior
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-6 w-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      <strong className="text-gray-900">International business culture</strong> facilitating
                      cross-border partnerships and expansion
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Entry Strategy */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">Market Entry Strategy</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Establish German Legal Entity</h3>
                  <p className="text-gray-600">
                    Register a GmbH in Germany to serve as your EU headquarters and obtain necessary regulatory
                    licenses.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Obtain Regulatory Approvals</h3>
                  <p className="text-gray-600">
                    Secure appropriate BaFin licenses that provide EU passporting rights for your specific services.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Develop Market-Specific Solutions</h3>
                  <p className="text-gray-600">
                    Adapt products and services to meet local market preferences and regulatory requirements across
                    target EU countries.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Scale Across EU Markets</h3>
                  <p className="text-gray-600">
                    Leverage passporting rights to expand operations to additional EU countries without requiring
                    separate licenses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Access European Markets?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Learn how to leverage Germany's strategic position for your European expansion strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3">
              Download Market Guide
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
