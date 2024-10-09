"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, BrainCircuit, MessageSquareText, Search } from "lucide-react"
import Link from "next/link"

interface Category {
  name: string
  icon: React.ReactNode
  topics: string[]
}

const categories: Category[] = [
  {
    name: "Quant",
    icon: <BookOpen className="h-5 w-5" />,
    topics: [
      "Progressions and Series",
      "Averages, Ratio and Proportion",
      "Linear Equations",
      "Geometry",
      "Probability",
      "Venn Diagrams",
      "Logarithms, Surds and Indices",
      "Data Sufficiency",
      "Functions, Graphs and Statistics",
      "Quadratic Equations",
      "Time, Distance and Work",
      "Profit, Loss and Interest",
      "Number Systems",
      "Inequalities",
      "Time and Work",
      "Averages, Mixtures, Alligations",
      "Number Series",
      "Arithmetic",
      "Algebra",
      "Coordinate Geometry",
      "Logarithms",
      "Percentages",
      "Profit and Loss",
      "Averages",
      "Remainders",
      "Simple Interest and Compound Interest",
      "Time Speed Distance",
      "Mensuration"
    ]
  },
  {
    name: "DILR",
    icon: <BrainCircuit className="h-5 w-5" />,
    topics: [
      "LR Scheduling",
      "2D & 3D LR",
      "DI with Connected Data Sets",
      "DI Maxima-Minima",
      "LR Coins and Weights",
      "Miscellaneous LR",
      "Table with Missing Values",
      "LR Games and Tournaments",
      "DI Special Charts",
      "DILR Venn Diagrams",
      "Data Interpretation Basics",
      "LR Arrangement",
      "DI Miscellaneous",
      "DI Charts",
      "Data change over a period",
      "Quant Based DI",
      "Quant Based LR",
      "LR Puzzles",
      "Selection With Condition",
      "LR Truth Lie Concept",
      "Data Interpretation",
      "Routes and Networks"
    ]
  },
  {
    name: "VARC",
    icon: <MessageSquareText className="h-5 w-5" />,
    topics: [
      "Sentence Correction",
      "Para Completion and Summary",
      "Vocabulary",
      "Reading Comprehension",
      "Miscellaneous",
      "Critical Reasoning",
      "Verbal Ability",
    ]
  }
]

export default function TopicTests() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCategories = categories.map(category => ({
    ...category,
    topics: category.topics.filter(topic =>
      topic.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }))

  return (
    <div className="min-h-screen mt-16 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-purple-300">Topic-wise Tests</h1>
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search topics..."
              className="pl-10 bg-gray-800 border-gray-700 text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <Tabs defaultValue="Quant" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            {categories.map((category) => (
              <TabsTrigger key={category.name} value={category.name} className="text-lg">
                <span className="flex items-center">
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
          {filteredCategories.map((category) => (
            <TabsContent key={category.name} value={category.name}>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-300 flex items-center">
                    {category.icon}
                    <span className="ml-2">{category.name} Topics</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.topics.map((topic) => (
                      <Link
                        key={topic}
                        href={`/topictests/${topic}`}
                      >
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left hover:bg-purple-700 hover:text-white transition-colors"
                        >
                          <span className="truncate">{topic}</span>
                        </Button>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </main>
    </div>
  )
}