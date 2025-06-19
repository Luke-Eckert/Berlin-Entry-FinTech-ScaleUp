import { ArrowRight, type LucideIcon } from "lucide-react"
import Link from "next/link"

interface InteractiveCardProps {
  icon: LucideIcon
  title: string
  description: string
  href: string
  linkText?: string
}

export default function InteractiveCard({
  icon: Icon,
  title,
  description,
  href,
  linkText = "Learn more",
}: InteractiveCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 h-full flex flex-col">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-blue-900">{title}</h3>
      </div>

      <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">{description}</p>

      <Link
        href={href}
        className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors duration-200 mt-auto"
      >
        {linkText}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
    </div>
  )
}
