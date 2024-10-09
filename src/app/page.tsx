'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, ClipboardList, Brain, ArrowRight } from "lucide-react"
import { signIn , signOut } from "next-auth/react"
import { useSession } from "next-auth/react"
import Link from "next/link"

export default function Component() {
  const session = useSession()
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      
      <main className="flex-1 mt-16">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-purple-200">
                  Master the CAT Exam
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Comprehensive mock tests and topic-wise practice for Common Admission Test preparation.
                </p>
              </div>
              <Button variant="secondary" size="lg" className="bg-purple-600 text-white hover:bg-purple-700 mt-4">
                Start Practicing Now
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-purple-200">
              Prepare Effectively
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-purple-300">
                    <ClipboardList className="h-8 w-8 text-purple-400 mr-2" />
                    Mock Tests
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Full-length CAT mock exams</li>
                    <li>Simulated test environment</li>
                    <li>Detailed performance analysis</li>
                    <li>Timed sections for VARC, DILR, and Quant</li>
                  </ul>
                  <Button className="mt-4 bg-purple-600 text-white hover:bg-purple-700">
                    Take a Mock Test <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-purple-300">
                    <Brain className="h-8 w-8 text-purple-400 mr-2" />
                    Topic-wise Tests
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Focused practice on specific topics</li>
                    <li>Covers all CAT exam sections</li>
                    <li>Difficulty levels from easy to advanced</li>
                    <li>Instant feedback and explanations</li>
                  </ul>
                  <Link href={'/topictests/'}>
                    <Button className="mt-4 bg-purple-600 text-white hover:bg-purple-700">
                      Explore Topics <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-200">
                  Ready to Ace Your CAT?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start your preparation journey today with our comprehensive test series.
                </p>
              </div>
              {session?.data?.user ? (
              <Link href={'/topictests/'}>
                <Button size="lg" className="bg-purple-600 text-white hover:bg-purple-700">
                  Get Started Now
                </Button>
              </Link> ): (
                <Button size="lg" onClick={()=>{signIn("google")}} className="bg-purple-600 text-white hover:bg-purple-700">
                  Get Started Now
                </Button>
              )}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-700">
        <p className="text-xs text-gray-400">© 2024 CAT Prep. Abhiram Reddy Nanabolu.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs text-gray-400 hover:text-purple-300 transition-colors" target="_blank" href="https://github.com/Abhiramnanabolu">
            Github
          </Link>
          <Link className="text-xs text-gray-400 hover:text-purple-300 transition-colors" target="_blank" href="https://abhiramreddy.online/">
            Portfolio
          </Link>
        </nav>
      </footer>
    </div>
  )
}