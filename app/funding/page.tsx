"use client"
import Link from "next/link"
import { ArrowLeft, TrendingUp, Users, Building2, Euro, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FundingPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section
        className="relative py-20"
        style={{
          backgroundImage: "url('/images/berlin-fintech-meeting.jpg')",
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

          <h1 className="text-5xl font-bold text-white mb-6">FinTech Funding in Berlin</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Access Europe's most dynamic funding ecosystem. From government grants to Series C rounds, Berlin offers comprehensive funding opportunities for FinTech companies.
          </p>
        </div>
      </section>

      {/* Funding Landscape */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001d6c] mb-8 text-center">Berlin's Funding Ecosystem</h2>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            <Card className="text-center border-2 border-[#001d6c] shadow-lg">
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 text-[#fd4b2c] mx-auto mb-4" />
                <div className="text-3xl font-bold text-[#001d6c] mb-2">€11.4B</div>
                <div className="text-sm text-gray-600">Total FinTech Funding (Last 10 Years)</div>
              </CardContent>
            </Card>
            
            <Card className="text-center border-2 border-[#5765cd] shadow-lg">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-[#fd4b2c] mx-auto mb-4" />
                <div className="text-3xl font-bold text-[#5765cd] mb-2">200+</div>
                <div className="text-sm text-gray-600">Active VCs & Family Offices</div>
              </CardContent>
            </Card>
            
            <Card className="text-center border-2 border-[#fd4b2c] shadow-lg">
              <CardContent className="p-6">
                <Building2 className="h-12 w-12 text-[#fd4b2c] mx-auto mb-4" />
                <div className="text-3xl font-bold text-[#fd4b2c] mb-2">340+</div>
                <div className="text-sm text-gray-600">Funded FinTech Startups</div>
              </CardContent>
            </Card>
            
            <Card className="text-center border-2 border-[#e3fa6c] shadow-lg">
              <CardContent className="p-6">
                <Euro className="h-12 w-12 text-[#7c8f00] mx-auto mb-4" />
                <div className="text-3xl font-bold text-[#7c8f00] mb-2">€2.3B</div>
                <div className="text-sm text-gray-600">Invested in 2023</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Funding Stages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#001d6c] mb-8 text-center">Funding by Stage</h2>
          
          <Tabs defaultValue="pre-seed" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="pre-seed">Pre-Seed</TabsTrigger>
              <TabsTrigger value="seed">Seed</TabsTrigger>
              <TabsTrigger value="series-a">Series A</TabsTrigger>
              <TabsTrigger value="series-b">Series B</TabsTrigger>
              <TabsTrigger value="growth">Growth</TabsTrigger>
            </TabsList>

            <TabsContent value="pre-seed" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-[#001d6c]">
                    <Star className="h-6 w-6 mr-3" />
                    Pre-Seed Funding (€50K - €500K)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-[#001d6c] mb-4">Government Grants & Support:</h4>
                      <div className="space-y-3">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <div className="font-semibold text-[#001d6c] mb-2">EXIST Startup Grant</div>
                          <div className="text-sm text-gray-600 mb-2">€125,000 for university-based startups</div>
                          <div className="text-xs text-gray-500">12-month funding for team of 3</div>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <div className="font-semibold text-[#001d6c] mb-2">Berlin Startup Stipend</div>
                          <div className="text-sm text-gray-600 mb-2">€2,000/month for 6 months</div>
                          <div className="text-xs text-gray-500">For innovative tech startups</div>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <div className="font-semibold text-[#001d6c] mb-2">IBB Innovation Grant</div>
                          <div className="text-sm text-gray-600 mb-2">Up to €200,000</div>
                          <div className="text-xs text-gray-500">Berlin-based innovation projects</div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-[#001d6c] mb-4">Angel Investors & Accelerators:</h4>
                      <div className="space-y-3">
                        <div className="border border-gray-200 p-4 rounded-lg">
                          <div className="font-semibold text-[#5765cd] mb-2">APX (Axel Springer)</div>
                          <div className="text-sm text-gray-600">€250K + 100-day program</div>
                        </div>
                        <div className="border border-gray-200 p-4 rounded-lg">
                          <div className="font-semibold text-[#5765cd] mb-2">Techstars Berlin</div>
                          <div className="text-sm text-gray-600">$120K + mentorship</div>
                        </div>
                        <div className="border border-gray-200 p-4 rounded-lg">
                          <div className="font-semibold text-[#5765cd] mb-2">Berlin Angels Network</div>
                          <div className="text-sm text-gray-600">€50K - €500K rounds</div>
                        </div>
                        <div className="border border-gray-200 p-4 rounded-lg">
                          <div className="font-semibold text-[#5765cd] mb-2">GTEC</div>
                          <div className="text-sm text-gray-600">€100K + 6-month program</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="seed" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-[#5765cd]\
