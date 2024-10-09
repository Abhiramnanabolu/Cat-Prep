'use client'

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, CheckCircle, XCircle, RotateCcw, Home } from "lucide-react"
import Link from "next/link"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Progress } from "@/components/ui/progress"
import MathRenderer from "../MathRenderer";

interface Question {
  id: string;
  question: string;
  options: string;
  answer: string;
  type: string;
  topicId: string | null;
  mockTestId: string | null;
}

interface TestProps {
  questions: Question[];
}

export default function Test({ questions }: TestProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionStatus, setQuestionStatus] = useState<string[]>(Array(questions.length).fill("not-viewed"));
  const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>(Array(questions.length).fill(null));
  const [score, setScore] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const storedStatus = localStorage.getItem("questionStatus");
    const storedAnswers = localStorage.getItem("selectedAnswers");
    const storedIndex = localStorage.getItem("currentQuestionIndex");

    if (storedStatus) setQuestionStatus(JSON.parse(storedStatus));
    if (storedAnswers) setSelectedAnswers(JSON.parse(storedAnswers));
    if (storedIndex) setCurrentQuestionIndex(Number(storedIndex));
  }, [questions]);

  useEffect(() => {
    localStorage.setItem("questionStatus", JSON.stringify(questionStatus));
    localStorage.setItem("selectedAnswers", JSON.stringify(selectedAnswers));
    localStorage.setItem("currentQuestionIndex", currentQuestionIndex.toString());
  }, [questionStatus, selectedAnswers, currentQuestionIndex]);

  const handleAnswerChange = (value: string) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = value;
    setSelectedAnswers(newSelectedAnswers);

    const newQuestionStatus = [...questionStatus];
    newQuestionStatus[currentQuestionIndex] = "answered";
    setQuestionStatus(newQuestionStatus);
  };

  const handleQuestionChange = (index: number) => {
    if (index < 0 || index >= questions.length) {
      return;
    }
    setCurrentQuestionIndex(index);
    if (questionStatus[index] === "not-viewed") {
      const newQuestionStatus = [...questionStatus];
      newQuestionStatus[index] = "viewed";
      setQuestionStatus(newQuestionStatus);
    }
  };

  const handleNavigation = (direction: "prev" | "next") => {
    const newIndex = direction === "prev" ? currentQuestionIndex - 1 : currentQuestionIndex + 1;
    if (newIndex >= 0 && newIndex < questions.length) {
      handleQuestionChange(newIndex);
    }
  };

  const handleSubmit = () => {
    let correctAnswersCount = 0;

    // Calculate correct answers
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.answer) {
        correctAnswersCount++;
      }
    });

    setScore(correctAnswersCount);
    localStorage.removeItem("questionStatus");
    localStorage.removeItem("selectedAnswers");
    localStorage.removeItem("currentQuestionIndex");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "answered":
        return "bg-green-500";
      case "viewed":
        return "bg-yellow-500";
      default:
        return "bg-gray-700";
    }
  };

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <p className="text-red-500">{error}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (score !== null) {
    const percentage = (score / questions.length) * 100

    const getScoreMessage = () => {
      if (percentage >= 80) return "Excellent work!"
      if (percentage >= 60) return "Good job!"
      if (percentage >= 40) return "Nice effort!"
      return "Keep practicing!"
    }

    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white p-4">
        <Card className="w-full max-w-md bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-300 flex items-center justify-center">
              <Trophy className="mr-2 h-6 w-6" />
              Test Completed
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="text-center mb-6">
              <p className="text-4xl text-white font-bold mb-2">{score} / {questions.length}</p>
              <p className="text-lg text-gray-300">{getScoreMessage()}</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Correct Answers: {score}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <XCircle className="h-5 w-5 text-red-500 mr-2" />
                <span>Incorrect Answers: {questions.length - score}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/topictests" passHref>
              <Button onClick={() => setScore(null)} variant="outline" className="flex-1 mr-2">
                <RotateCcw className="mr-2 h-4 w-4" />
                Retry Test
              </Button>
            </Link>
            <Link href="/topictests" passHref>
              <Button className="flex-1 ml-2 bg-purple-600 hover:bg-purple-700">
                <Home className="mr-2 h-4 w-4" />
                Back to Topics
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    )
  }

  if (!questions || questions.length === 0 || currentQuestionIndex >= questions.length) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <p>No questions available.</p>
          </CardContent>
        </Card>
      </div>
    );
  }
  const currentOptions = questions[currentQuestionIndex].options;

  return (
    <main className="flex flex-col md:flex-row mt-16 container mx-auto px-4 md:px-12 py-8 min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="w-full md:w-4/5 mb-8 md:mb-0 md:mr-8">
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-300">
              Question {currentQuestionIndex + 1}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg w-full mb-6">
              <MathRenderer math={questions[currentQuestionIndex].question}/>
            </p>
            <RadioGroup
              value={selectedAnswers[currentQuestionIndex] || ""}
              onValueChange={handleAnswerChange}
              className="space-y-3"
            >
              {Object.entries(currentOptions).map(([key, text]) => (
                <div
                  key={key}
                  className="flex items-center space-x-2 p-3 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors"
                >
                  <RadioGroupItem
                    value={key}
                    id={`${currentQuestionIndex}-${key}`}
                    className="text-purple-400 border-purple-500 hover:border-purple-600 transition-colors"
                  />
                  <Label
                    htmlFor={`${currentQuestionIndex}-${key}`}
                    className="flex-grow text-lg cursor-pointer"
                  >
                    <MathRenderer math={text}/>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              onClick={() => handleNavigation("prev")}
              disabled={currentQuestionIndex === 0}
              className="bg-purple-600 hover:bg-purple-700"
            >
              <ChevronLeft className="mr-2 h-4 w-4" /> Previous
            </Button>
            {currentQuestionIndex === questions.length - 1 ? (
              <Button
                onClick={handleSubmit}
                className="bg-green-600 hover:bg-green-700"
              >
                Submit Test
              </Button>
            ) : (
              <Button
                onClick={() => handleNavigation("next")}
                className="bg-purple-600 hover:bg-purple-700"
              >
                Next <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
      <div className="w-full md:w-1/5">
        <div className="flex flex-wrap justify-center md:justify-start">
          {questionStatus.map((status, index) => (
            <button
              key={index}
              className={`w-12 h-12 flex items-center justify-center rounded-lg m-1 border-2 border-gray-700 ${getStatusColor(
                status
              )}`}
              onClick={() => handleQuestionChange(index)}
            >
              <span className="text-sm font-semibold">{index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
