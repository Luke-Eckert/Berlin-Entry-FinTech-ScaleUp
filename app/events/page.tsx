import Image from "next/image"
import { Calendar, MapPin, Clock, Users, Filter, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[400px] w-full overflow-hidden">
        <Image src="/images/berlin-fintech-meeting.jpg" alt="HoFT Events" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001d6c]/80 to-[#001d6c]/40" />
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">HoFT Events</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
            Connect with Berlin's FinTech ecosystem through workshops, networking events, and expert sessions.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter and Search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-[#001d6c]" />
            <h2 className="text-2xl font-bold text-[#001d6c]">Upcoming Events</h2>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge className="bg-[#001d6c] hover:bg-[#001d6c]/90 cursor-pointer">All Events</Badge>
            <Badge className="bg-[#5765cd] hover:bg-[#5765cd]/90 cursor-pointer">Workshops</Badge>
            <Badge className="bg-[#fd4b2c] hover:bg-[#fd4b2c]/90 cursor-pointer">Networking</Badge>
            <Badge className="bg-gray-500 hover:bg-gray-600 cursor-pointer">Conferences</Badge>
            <Badge className="bg-[#afd6f7] text-[#001d6c] hover:bg-[#afd6f7]/90 cursor-pointer">Online</Badge>
          </div>
        </div>

        {/* Featured Event */}
        <div className="relative overflow-hidden rounded-xl mb-12 bg-white shadow-lg border border-gray-100">
          <div className="md:flex">
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <Image src="/images/berlin-tech-workspace.jpg" alt="FinTech Summit 2025" fill className="object-cover" />
              <div className="absolute top-4 left-4">
                <Badge className="bg-[#fd4b2c] hover:bg-[#fd4b2c]/90">Featured</Badge>
              </div>
            </div>
            <div className="md:w-1/2 p-6 md:p-8">
              <h3 className="text-2xl font-bold text-[#001d6c] mb-2">Berlin FinTech Summit 2025</h3>
              <p className="text-gray-600 mb-4">
                Join the largest gathering of FinTech innovators, investors, and regulators in Berlin. Network with 500+
                industry leaders and discover the latest trends.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-[#fd4b2c]" />
                  <span className="text-sm">June 25-26, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-[#fd4b2c]" />
                  <span className="text-sm">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#fd4b2c]" />
                  <span className="text-sm">Station Berlin, Luckenwalder Str.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#fd4b2c]" />
                  <span className="text-sm">500+ Attendees</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button className="bg-[#fd4b2c] hover:bg-[#fd4b2c]/90">Register Now</Button>
                <Button
                  variant="outline"
                  className="border-[#001d6c] text-[#001d6c] hover:bg-[#001d6c] hover:text-white"
                >
                  Add to Calendar
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Events Tabs */}
        <Tabs defaultValue="upcoming" className="mb-12">
          <TabsList className="mb-6">
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-6">
            {/* Event Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Event 1 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/images/berlin-entrepreneurs.jpg"
                    alt="BaFin Licensing Workshop"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#5765cd] hover:bg-[#5765cd]/90">Workshop</Badge>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-[#001d6c] mb-2">BaFin Licensing Workshop</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-[#fd4b2c]" />
                    <span className="text-sm text-gray-600">July 12, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="h-4 w-4 text-[#fd4b2c]" />
                    <span className="text-sm text-gray-600">HoFT Campus, Kreuzberg</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Step-by-step guidance on navigating BaFin's licensing process for FinTech startups.
                  </p>
                  <Button className="w-full bg-[#001d6c] hover:bg-[#001d6c]/90">Register</Button>
                </div>
              </div>

              {/* Event 2 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/images/berlin-business-district.jpg"
                    alt="Investor Networking Night"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#fd4b2c] hover:bg-[#fd4b2c]/90">Networking</Badge>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-[#001d6c] mb-2">Investor Networking Night</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-[#fd4b2c]" />
                    <span className="text-sm text-gray-600">July 18, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="h-4 w-4 text-[#fd4b2c]" />
                    <span className="text-sm text-gray-600">Factory Berlin, Görlitzer Park</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Connect with VCs and angel investors focused on early-stage FinTech startups.
                  </p>
                  <Button className="w-full bg-[#001d6c] hover:bg-[#001d6c]/90">Register</Button>
                </div>
              </div>

              {/* Event 3 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/images/berlin-startup-office.jpg"
                    alt="EU Payments Regulation Webinar"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#afd6f7] text-[#001d6c] hover:bg-[#afd6f7]/90">Online</Badge>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-[#001d6c] mb-2">EU Payments Regulation Webinar</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-[#fd4b2c]" />
                    <span className="text-sm text-gray-600">July 22, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="h-4 w-4 text-[#fd4b2c]" />
                    <span className="text-sm text-gray-600">2:00 PM - 3:30 PM CEST</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Expert insights on PSD3 and what it means for payment startups in the EU.
                  </p>
                  <Button className="w-full bg-[#001d6c] hover:bg-[#001d6c]/90">Register</Button>
                </div>
              </div>
            </div>

            {/* More Events Button */}
            <div className="text-center mt-8">
              <Button variant="outline" className="border-[#001d6c] text-[#001d6c] hover:bg-[#001d6c] hover:text-white">
                View All Events
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="past">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Past Event 1 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-shadow opacity-80">
                <div className="relative h-48">
                  <Image
                    src="/images/berlin-business-registration.jpg"
                    alt="FinTech Founders Meetup"
                    fill
                    className="object-cover grayscale"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gray-500">Past Event</Badge>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-[#001d6c] mb-2">FinTech Founders Meetup</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">May 15, 2025</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    120+ founders shared experiences and lessons learned in the Berlin FinTech scene.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-[#001d6c] text-[#001d6c] hover:bg-[#001d6c] hover:text-white"
                  >
                    View Photos
                  </Button>
                </div>
              </div>

              {/* Past Event 2 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-shadow opacity-80">
                <div className="relative h-48">
                  <Image
                    src="/images/berlin-skyline-hero.jpg"
                    alt="Blockchain in Banking Conference"
                    fill
                    className="object-cover grayscale"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gray-500">Past Event</Badge>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-[#001d6c] mb-2">Blockchain in Banking Conference</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">April 28, 2025</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Major German banks discussed blockchain integration strategies and use cases.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-[#001d6c] text-[#001d6c] hover:bg-[#001d6c] hover:text-white"
                  >
                    View Recordings
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Event Calendar */}
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#001d6c]">Event Calendar</h2>
            <Button variant="outline" className="border-[#001d6c] text-[#001d6c] hover:bg-[#001d6c] hover:text-white">
              <Calendar className="h-4 w-4 mr-2" />
              Subscribe to Calendar
            </Button>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <p className="text-gray-600">Interactive calendar view coming soon!</p>
            <p className="text-sm text-gray-500 mt-2">Subscribe to our calendar to stay updated with all HoFT events</p>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#001d6c] to-[#5765cd] p-8 text-white">
          <div className="absolute right-0 bottom-0 opacity-10">
            <Calendar className="h-64 w-64" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-2xl font-bold mb-4">Never Miss an Event</h2>
            <p className="mb-6">
              Subscribe to our events newsletter and be the first to know about upcoming workshops, networking
              opportunities, and exclusive HoFT community gatherings.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-md text-gray-900 flex-grow"
              />
              <Button className="bg-[#fd4b2c] hover:bg-[#fd4b2c]/90 whitespace-nowrap">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Download Resources */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#001d6c] mb-2">Event Resources</h2>
            <p className="text-gray-600">Download guides and resources from our past events</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
              <h3 className="font-bold text-[#001d6c] mb-2">BaFin Licensing Guide</h3>
              <p className="text-sm text-gray-600 mb-4 flex-grow">
                Complete walkthrough of the licensing process with templates and checklists.
              </p>
              <Button className="w-full flex items-center justify-center gap-2">
                <Download className="h-4 w-4" />
                Download PDF
              </Button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
              <h3 className="font-bold text-[#001d6c] mb-2">EU Market Entry Playbook</h3>
              <p className="text-sm text-gray-600 mb-4 flex-grow">
                Strategic guide for FinTechs entering the European market through Berlin.
              </p>
              <Button className="w-full flex items-center justify-center gap-2">
                <Download className="h-4 w-4" />
                Download PDF
              </Button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
              <h3 className="font-bold text-[#001d6c] mb-2">Investor Pitch Deck Template</h3>
              <p className="text-sm text-gray-600 mb-4 flex-grow">
                Customizable pitch deck template used by successful Berlin FinTech startups.
              </p>
              <Button className="w-full flex items-center justify-center gap-2">
                <Download className="h-4 w-4" />
                Download PPT
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
