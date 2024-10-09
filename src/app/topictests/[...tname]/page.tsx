"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, BookOpen, Clock, Trophy, CheckCircle } from "lucide-react"
import { useParams } from "next/navigation"
import Link from "next/link"

interface TopicDetails {
  id: string
  name: string
  category: string
  description: string
  difficulty: "Easy" | "Medium" | "Hard"
  progress: number
}

const mockTopicDetails: TopicDetails = {
  id: "topic-1",
  name: "Linear Equations",
  category: "Quant",
  description: "Master the fundamentals of linear equations and their applications in problem-solving.",
  difficulty: "Medium",
  progress: 35,
}



export default function TopicDetails() {
    const params = useParams<{ tname: string[] }>()
  const [topicDetails] = useState<TopicDetails>(mockTopicDetails)
  const tname = params?.tname || []
  

  return (
    <div className="min-h-screen mt-16 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <main className="container mx-auto px-8 py-8">
        <Link href="/topictests" className="inline-flex items-center text-purple-300 hover:text-purple-100 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Topics
        </Link>
        <Card className="bg-gray-800 border-gray-700 mb-6">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl text-purple-300">{decodeURIComponent(tname[0])}</CardTitle>
              </div>
              <Badge variant="secondary" className="text-sm">
                {topicDetails.difficulty}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-4">{`Master the fundamentals of ${decodeURIComponent(tname[0])} and its applications in problem-solving.`}</p>
            <div className="grid text-white grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-purple-400" />
                <span>10 Questions</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-purple-400" />
                <span>20 Minutes</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href={`/topictests/test/${tname.join("-")}`}>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Start Test
              </Button>
            </Link>
            
          </CardFooter>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-xl text-purple-300">Test Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-purple-400 mt-0.5" />
                <p className="text-gray-300">
                  <span className="font-semibold">Number of Questions:</span> 10
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-purple-400 mt-0.5" />
                <p className="text-gray-300">
                  <span className="font-semibold">Types of Questions:</span> Multiple Choice Questions (MCQs)
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-purple-400 mt-0.5" />
                <p className="text-gray-300">
                  <span className="font-semibold">Marking Scheme:</span> All questions have equal weightage. Every correct response gets +1 mark. There is no negative marking.
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-purple-400 mt-0.5" />
                <p className="text-gray-300">
                  <span className="font-semibold">Time Limit:</span> 20 minutes
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}