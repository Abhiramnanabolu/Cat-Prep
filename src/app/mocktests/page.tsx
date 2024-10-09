import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import QuestionComponent from "@/components/ui/question"
import Test from "@/components/ui/test"
import { Clock, BarChart } from "lucide-react"
import Link from "next/link"

export default function MockTests() {
  const mockTests = [
    { id: 1, name: "CAT 2022 Mock", questions: 66, duration: 120, difficulty: "Hard", progress: 0, },
    { id: 2, name: "CAT 2021 Mock", questions: 66, duration: 120, difficulty: "Medium", progress: 0 },
    { id: 3, name: "VARC Focused Mock", questions: 66, duration:120, difficulty: "Medium", progress: 0 },
    { id: 4, name: "DILR Focused Mock", questions: 66, duration: 120, difficulty: "Hard", progress: 0 },
    { id: 5, name: "Quant Focused Mock", questions: 66, duration: 120, difficulty: "Easy", progress: 0 },
  ]

 

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <main className="flex-1 mt-16 container mx-auto px-12 py-8">
        <h1 className="text-3xl font-bold mb-8 text-purple-200">Available Mock Tests</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockTests.map((test) => (
            <Card key={test.id} className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl text-purple-300">{test.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-2">
                  <Clock className="h-4 w-4 mr-2 text-gray-400" />
                  <span className="text-sm text-gray-300">{test.duration} minutes</span>
                </div>
                <div className="flex items-center mb-2">
                  <BarChart className="h-4 w-4 mr-2 text-gray-400" />
                  <span className="text-sm text-gray-300">{test.questions} questions</span>
                </div>
                <div className="flex items-center mb-4">
                  <span className="text-sm text-gray-300">Difficulty: {test.difficulty}</span>
                </div>
                {test.progress > 0 && (
                  <div className="mb-2">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-400">Progress</span>
                      <span className="text-sm text-gray-400">{test.progress}%</span>
                    </div>
                    <Progress value={test.progress} className="h-2" />
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  {test.progress === 0 ? "Start Test" : test.progress === 100 ? "Review Test" : "Continue Test"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <footer className="py-6 px-4 border-t border-gray-700">
        <p className="text-center text-sm text-gray-400">© 2024 CAT Prep.<Link className="hover:text-purple-500" href={"https://abhiramreddy.online"}> Abhiram Reddy Nanabolu</Link></p>
      </footer>
    </div>
  )
}