import { Download, FileText, Users, Calendar, BookOpen, CheckCircle } from "lucide-react"
import InteractiveCard from "@/components/interactive-card"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Resources & Tools</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to successfully establish and grow your FinTech business in Berlin
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InteractiveCard
              icon={Download}
              title="Berlin FinTech Guide 2025"
              description="Comprehensive 50-page guide covering EU Blue Card process, company registration, funding landscape, and growth strategies for Berlin's FinTech ecosystem."
              href="/download-guide"
              linkText="Download Free"
            />

            <InteractiveCard
              icon={FileText}
              title="Legal Templates"
              description="Ready-to-use legal documents, contracts, and compliance checklists specifically designed for FinTech companies operating in Germany."
              href="/templates"
              linkText="Access Templates"
            />

            <InteractiveCard
              icon={Users}
              title="Scale-Up Academy"
              description="Exclusive program for growth-stage FinTech companies with mentorship, workshops, and direct access to investors and partners."
              href="/scale-up-academy"
              linkText="Apply Now"
            />

            <InteractiveCard
              icon={Calendar}
              title="Events & Networking"
              description="Regular meetups, conferences, and networking events connecting Berlin's FinTech community with investors, regulators, and partners."
              href="/events"
              linkText="View Events"
            />

            <InteractiveCard
              icon={BookOpen}
              title="Knowledge Base"
              description="In-depth articles, case studies, and guides covering everything from BaFin regulations to market entry strategies."
              href="/knowledge-base"
              linkText="Explore Articles"
            />

            <InteractiveCard
              icon={CheckCircle}
              title="Compliance Checker"
              description="Interactive tool to help you understand and track your compliance requirements for operating a FinTech business in Germany."
              href="/compliance-checker"
              linkText="Check Compliance"
            />
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and valuable resources for FinTech entrepreneurs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <Download className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">EU Blue Card Checklist</h3>
                  <p className="text-gray-600">Updated for 2025 requirements</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Step-by-step checklist covering all requirements for the new 2025 EU Blue Card process, including
                document preparation, online application, and timeline expectations.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Download Checklist
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">FinTech Ecosystem Map</h3>
                  <p className="text-gray-600">Interactive Berlin overview</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Comprehensive map of Berlin's FinTech ecosystem including key players, investors, regulators, service
                providers, and networking opportunities.
              </p>
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                Explore Map
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
