"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react"

export default function QuestionComponent() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const correctAnswer = "B"

  const question = {
    text: "In a certain code, COMPUTER is written as RFUVQNPC. How will MEDICINE be written in that code?",
    options: [
      { id: "A", text: "EOJDJEFM" },
      { id: "B", text: "MFEJDJOE" },
      { id: "C", text: "EOJDEJFM" },
      { id: "D", text: "MFEDJJOE" },
    ],
  }

  const handleSubmit = () => {
    if (selectedAnswer) {
      setIsSubmitted(true)
    }
  }

  const getResultIcon = () => {
    if (!isSubmitted) return null
    if (selectedAnswer === correctAnswer) {
      return <CheckCircle2 className="h-6 w-6 text-green-500" />
    }
    return <XCircle className="h-6 w-6 text-red-500" />
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-4">
      <Card className="w-full max-w-2xl bg-gray-800 border-gray-700 text-white">
        <CardHeader>
          <CardTitle className="text-2xl text-purple-300 flex items-center justify-between">
            Question
            {getResultIcon()}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-6">{question.text}</p>
          <RadioGroup
            value={selectedAnswer || ""}
            onValueChange={setSelectedAnswer}
            className="space-y-3"
          >
            {question.options.map((option) => (
              <div
                key={option.id}
                className={`flex items-center space-x-2 p-3 rounded-lg border ${
                  isSubmitted
                    ? option.id === correctAnswer
                      ? "border-green-500 bg-green-500 bg-opacity-10"
                      : option.id === selectedAnswer
                      ? "border-red-500 bg-red-500 bg-opacity-10"
                      : "border-gray-700"
                    : "border-gray-700 hover:border-purple-500 transition-colors"
                }`}
              >
                <RadioGroupItem
                  value={option.id}
                  id={option.id}
                  disabled={isSubmitted}
                  className="text-purple-400"
                />
                <Label
                  htmlFor={option.id}
                  className="flex-grow text-lg cursor-pointer"
                >
                  {option.text}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            onClick={handleSubmit}
            disabled={!selectedAnswer || isSubmitted}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            Submit Answer
          </Button>
          {isSubmitted && (
            <div className="flex items-center space-x-2">
              <AlertCircle className="h-5 w-5 text-yellow-500" />
              <span className="text-sm text-gray-300">
                Correct Answer: {correctAnswer}
              </span>
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}