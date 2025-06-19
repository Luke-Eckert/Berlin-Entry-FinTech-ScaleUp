"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle, Brain, Target, Lightbulb, TrendingUp, AlertCircle, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function AIQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      id: 0,
      category: "Business Model",
      question: "What type of financial services does your company provide?",
      description: "This helps us understand your regulatory requirements and market positioning.",
      options: [
        {
          value: "payments",
          label: "Payment Processing & Transfers",
          description: "Money transfers, payment gateways, remittances",
        },
        {
          value: "lending",
          label: "Lending & Credit Services",
          description: "Personal loans, business lending, credit scoring",
        },
        {
          value: "banking",
          label: "Digital Banking & Deposits",
          description: "Neo-banking, current accounts, savings",
        },
        {
          value: "investment",
          label: "Investment & Wealth Management",
          description: "Robo-advisors, trading platforms, portfolio management",
        },
        {
          value: "insurance",
          label: "InsurTech Solutions",
          description: "Digital insurance, claims processing, risk assessment",
        },
        {
          value: "crypto",
          label: "Crypto & Blockchain",
          description: "Cryptocurrency exchange, DeFi, blockchain infrastructure",
        },
        {
          value: "regtech",
          label: "RegTech & Compliance",
          description: "Compliance software, AML/KYC, regulatory reporting",
        },
        {
          value: "other",
          label: "Other FinTech Services",
          description: "Accounting software, expense management, other",
        },
      ],
    },
    {
      id: 1,
      category: "Company Stage",
      question: "What is your current company development stage?",
      description: "Understanding your stage helps us recommend the right setup approach and timeline.",
      options: [
        { value: "idea", label: "Idea Stage", description: "Concept development, market research phase" },
        { value: "mvp", label: "MVP/Prototype", description: "Product in development, early testing" },
        { value: "pilot", label: "Pilot Customers", description: "Limited customer base, proving product-market fit" },
        { value: "revenue", label: "Generating Revenue", description: "Established customer base, growing revenue" },
        { value: "scaling", label: "Scaling Operations", description: "Expanding team, entering new markets" },
        { value: "established", label: "Established Company", description: "Mature operations, considering expansion" },
      ],
    },
    {
      id: 2,
      category: "Funding Status",
      question: "What is your current funding situation?",
      description: "This affects your capital requirements and setup strategy in Germany.",
      options: [
        { value: "bootstrap", label: "Self-Funded/Bootstrapped", description: "Using personal funds or revenue" },
        { value: "pre-seed", label: "Pre-Seed (Under €500K)", description: "Friends & family, angel investors" },
        { value: "seed", label: "Seed Round (€500K - €2M)", description: "Seed VCs, accelerator funding" },
        { value: "seriesA", label: "Series A (€2M - €10M)", description: "Institutional VCs, growth funding" },
        { value: "seriesB", label: "Series B+ (€10M+)", description: "Later stage funding, expansion capital" },
        { value: "seeking", label: "Currently Fundraising", description: "Actively seeking investment" },
      ],
    },
    {
      id: 3,
      category: "Regulatory Status",
      question: "What is your current regulatory licensing status?",
      description: "Understanding your licensing helps us plan your German regulatory strategy.",
      options: [
        { value: "none", label: "No Licenses", description: "Operating without specific financial licenses" },
        {
          value: "home-basic",
          label: "Basic Home Country License",
          description: "Simple registration or basic license",
        },
        {
          value: "home-full",
          label: "Full Home Country License",
          description: "Comprehensive financial services license",
        },
        {
          value: "eu-passport",
          label: "EU Passporting Rights",
          description: "Can operate across EU with current license",
        },
        { value: "multiple", label: "Multiple Jurisdictions", description: "Licensed in several countries" },
        { value: "planning", label: "Planning to Apply", description: "Researching licensing requirements" },
      ],
    },
    {
      id: 4,
      category: "Market Strategy",
      question: "What is your primary motivation for entering the German market?",
      description: "This helps us understand your strategic priorities and timeline.",
      options: [
        {
          value: "eu-gateway",
          label: "EU Market Gateway",
          description: "Use Germany to access broader European market",
        },
        {
          value: "regulation",
          label: "Regulatory Framework",
          description: "Benefit from strong German regulatory environment",
        },
        {
          value: "talent",
          label: "Talent & Ecosystem",
          description: "Access Berlin's tech talent and FinTech ecosystem",
        },
        {
          value: "funding",
          label: "Funding Opportunities",
          description: "Access German/EU investors and funding programs",
        },
        { value: "customers", label: "German Customer Base", description: "Target German consumers and businesses" },
        {
          value: "partnerships",
          label: "Strategic Partnerships",
          description: "Partner with German financial institutions",
        },
      ],
    },
    {
      id: 5,
      category: "Timeline & Resources",
      question: "What is your target timeline for German market entry?",
      description: "Timeline affects setup strategy and resource allocation.",
      options: [
        { value: "immediate", label: "Immediate (0-3 months)", description: "Need to start operations quickly" },
        { value: "short", label: "Short-term (3-6 months)", description: "Planning for near-term entry" },
        { value: "medium", label: "Medium-term (6-12 months)", description: "Strategic planning phase" },
        { value: "long", label: "Long-term (12+ months)", description: "Future expansion consideration" },
        {
          value: "flexible",
          label: "Flexible Timeline",
          description: "Depends on market conditions and opportunities",
        },
      ],
    },
    {
      id: 6,
      category: "Team & Operations",
      question: "What is your current team size and structure?",
      description: "Team size affects hiring strategy and operational setup in Germany.",
      options: [
        { value: "solo", label: "Solo Founder", description: "Just the founder(s)" },
        { value: "small", label: "Small Team (2-10)", description: "Core team, early employees" },
        { value: "medium", label: "Medium Team (11-50)", description: "Established team, multiple departments" },
        { value: "large", label: "Large Team (50+)", description: "Mature organization, multiple offices" },
        { value: "distributed", label: "Distributed Team", description: "Remote-first or multiple locations" },
      ],
    },
    {
      id: 7,
      category: "Specific Challenges",
      question: "What are your biggest concerns about entering the German market?",
      description: "Understanding your concerns helps us provide targeted recommendations.",
      options: [
        {
          value: "regulation",
          label: "Regulatory Complexity",
          description: "Navigating BaFin and compliance requirements",
        },
        {
          value: "language",
          label: "Language & Culture",
          description: "German language requirements and cultural differences",
        },
        { value: "costs", label: "Setup & Operating Costs", description: "Capital requirements and ongoing expenses" },
        { value: "timeline", label: "Time to Market", description: "Long setup processes and bureaucracy" },
        { value: "competition", label: "Market Competition", description: "Competing with established German players" },
        { value: "talent", label: "Hiring & Talent", description: "Finding and hiring the right team" },
        {
          value: "partnerships",
          label: "Finding Partners",
          description: "Connecting with the right business partners",
        },
      ],
    },
  ]

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value })
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const previousQuestion = () => {
    setCurrentQuestion(Math.max(0, currentQuestion - 1))
  }

  const getPersonalizedResults = () => {
    const serviceType = answers[0]
    const stage = answers[1]
    const funding = answers[2]
    const licenses = answers[3]
    const motivation = answers[4]
    const timeline = answers[5]
    const teamSize = answers[6]
    const concerns = answers[7]

    const results = {
      readinessScore: 0,
      recommendations: [] as any[],
      timeline: "",
      priority: "medium" as "low" | "medium" | "high",
      nextSteps: [] as string[],
    }

    // Calculate readiness score
    let score = 0
    if (stage === "revenue" || stage === "scaling" || stage === "established") score += 25
    if (funding === "seriesA" || funding === "seriesB") score += 20
    if (licenses === "home-full" || licenses === "eu-passport") score += 20
    if (teamSize === "medium" || teamSize === "large") score += 15
    if (timeline === "medium" || timeline === "long") score += 20

    results.readinessScore = Math.min(score, 100)

    // License recommendations
    if (serviceType === "payments") {
      results.recommendations.push({
        type: "license",
        title: "Payment Services License (PSD2)",
        description: "Required for payment processing services. Consider starting with a limited license scope.",
        priority: "high",
        timeline: "6-12 months",
        icon: "shield",
      })
    } else if (serviceType === "banking") {
      results.recommendations.push({
        type: "license",
        title: "Banking License or E-Money Institution",
        description: "Full banking license (€5M capital) or E-Money license (€350K) depending on services.",
        priority: "high",
        timeline: "12-18 months",
        icon: "building",
      })
    } else if (serviceType === "investment") {
      results.recommendations.push({
        type: "license",
        title: "Investment Services License",
        description: "Required for investment advice and portfolio management services.",
        priority: "high",
        timeline: "6-12 months",
        icon: "trending-up",
      })
    }

    // Company setup recommendations
    if (stage === "idea" || stage === "mvp") {
      results.recommendations.push({
        type: "setup",
        title: "Start with UG, Upgrade Later",
        description: "Begin with UG (€1 capital) for flexibility, upgrade to GmbH when ready for serious business.",
        priority: "medium",
        timeline: "4-6 weeks",
        icon: "lightbulb",
      })
    } else {
      results.recommendations.push({
        type: "setup",
        title: "GmbH Registration",
        description: "Register GmbH with €25,000 capital for credibility with banks, investors, and partners.",
        priority: "high",
        timeline: "6-8 weeks",
        icon: "building",
      })
    }

    // Funding recommendations
    if (funding === "bootstrap" || funding === "pre-seed") {
      results.recommendations.push({
        type: "funding",
        title: "German Public Funding Programs",
        description: "Explore EXIST grants, IBB funding, and other public programs for early-stage companies.",
        priority: "medium",
        timeline: "3-6 months",
        icon: "target",
      })
    }

    // Timeline assessment
    if (timeline === "immediate") {
      results.timeline = "Fast-track approach needed - consider temporary solutions while setting up properly"
      results.priority = "high"
    } else if (timeline === "short") {
      results.timeline = "Aggressive but achievable timeline with proper planning and resources"
      results.priority = "high"
    } else {
      results.timeline = "Comfortable timeline allows for thorough preparation and optimal setup"
      results.priority = "medium"
    }

    // Next steps based on concerns
    if (concerns === "regulation") {
      results.nextSteps.push("Schedule consultation with German FinTech lawyers")
      results.nextSteps.push("Join HoFT network for regulatory guidance")
    }
    if (concerns === "costs") {
      results.nextSteps.push("Download detailed cost breakdown guide")
      results.nextSteps.push("Explore public funding opportunities")
    }
    if (concerns === "timeline") {
      results.nextSteps.push("Create detailed project timeline with milestones")
      results.nextSteps.push("Consider parallel processing of company and personal setup")
    }

    return results
  }

  if (showResults) {
    const results = getPersonalizedResults()

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            {/* Results Header */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Your Personalized Market Entry Plan</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Based on your responses, here's your customized roadmap for entering the German FinTech market.
              </p>
            </div>

            {/* Readiness Score */}
            <div className="mb-16">
              <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Market Entry Readiness Score</h2>
                      <p className="text-blue-100">Based on your current stage, funding, and preparation level</p>
                    </div>
                    <div className="text-right">
                      <div className="text-5xl font-bold mb-2">{results.readinessScore}%</div>
                      <Badge
                        className={`${results.priority === "high" ? "bg-green-500" : results.priority === "medium" ? "bg-yellow-500" : "bg-red-500"} text-white`}
                      >
                        {results.priority === "high"
                          ? "High Readiness"
                          : results.priority === "medium"
                            ? "Medium Readiness"
                            : "Early Stage"}
                      </Badge>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Progress value={results.readinessScore} className="h-3" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recommendations */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Your Personalized Recommendations</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {results.recommendations.map((rec, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div
                            className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                              rec.priority === "high"
                                ? "bg-red-100"
                                : rec.priority === "medium"
                                  ? "bg-yellow-100"
                                  : "bg-green-100"
                            }`}
                          >
                            {rec.icon === "shield" && (
                              <CheckCircle
                                className={`h-6 w-6 ${rec.priority === "high" ? "text-red-600" : "text-blue-600"}`}
                              />
                            )}
                            {rec.icon === "building" && (
                              <TrendingUp
                                className={`h-6 w-6 ${rec.priority === "high" ? "text-red-600" : "text-blue-600"}`}
                              />
                            )}
                            {rec.icon === "lightbulb" && (
                              <Lightbulb
                                className={`h-6 w-6 ${rec.priority === "high" ? "text-red-600" : "text-blue-600"}`}
                              />
                            )}
                            {rec.icon === "target" && (
                              <Target
                                className={`h-6 w-6 ${rec.priority === "high" ? "text-red-600" : "text-blue-600"}`}
                              />
                            )}
                          </div>
                          <div>
                            <CardTitle className="text-xl text-gray-900">{rec.title}</CardTitle>
                            <p className="text-sm text-gray-500">Timeline: {rec.timeline}</p>
                          </div>
                        </div>
                        <Badge
                          variant={
                            rec.priority === "high"
                              ? "destructive"
                              : rec.priority === "medium"
                                ? "default"
                                : "secondary"
                          }
                        >
                          {rec.priority} priority
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed">{rec.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Timeline Assessment */}
            <div className="mb-16">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <AlertCircle className="h-8 w-8 text-orange-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">Timeline Assessment</h3>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">{results.timeline}</p>
                </CardContent>
              </Card>
            </div>

            {/* Next Steps */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Immediate Next Steps</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {results.nextSteps.map((step, index) => (
                  <Card key={index} className="border-0 shadow-lg bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-gray-700 font-medium">{step}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Ready to Take Action?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
                  <Download className="mr-2 h-5 w-5" />
                  Download Detailed Report
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
                  Apply to HoFT Network
                </Button>
                <Button
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg"
                >
                  Schedule Expert Call
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                <Brain className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">AI-Powered Market Entry Assessment</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get personalized recommendations for your German FinTech expansion based on your specific situation
            </p>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm font-medium text-gray-600">{Math.round(progress)}% complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <Card className="border-0 shadow-xl bg-white">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-t-lg pb-6">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-blue-600 border-blue-600">
                  {questions[currentQuestion].category}
                </Badge>
              </div>
              <CardTitle className="text-2xl text-gray-900 leading-tight">
                {questions[currentQuestion].question}
              </CardTitle>
              <p className="text-gray-600 mt-2">{questions[currentQuestion].description}</p>
            </CardHeader>
            <CardContent className="p-8">
              <RadioGroup value={answers[currentQuestion] || ""} onValueChange={handleAnswer}>
                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option) => (
                    <div key={option.value} className="relative">
                      <div className="flex items-start space-x-4 p-4 rounded-lg border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all cursor-pointer">
                        <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                        <div className="flex-1">
                          <Label htmlFor={option.value} className="text-gray-900 font-medium cursor-pointer block">
                            {option.label}
                          </Label>
                          <p className="text-gray-600 text-sm mt-1">{option.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </RadioGroup>

              <div className="flex justify-between mt-8">
                <Button variant="outline" onClick={previousQuestion} disabled={currentQuestion === 0} className="px-6">
                  Previous
                </Button>
                <Button
                  onClick={nextQuestion}
                  disabled={!answers[currentQuestion]}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6"
                >
                  {currentQuestion === questions.length - 1 ? "Get My Results" : "Next Question"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
