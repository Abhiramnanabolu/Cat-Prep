'use client'

import Test from "@/components/ui/test"

const questions = [
  {
    id:"2222222222222222",
    question: "If $$a_1, a_2, ......$$ are in A.P., then, $$\\frac{1}{\\sqrt{a_1} + \\sqrt{a_2}} + \\frac{1}{\\sqrt{a_2} + \\sqrt{a_3}} + ....... + \\frac{1}{\\sqrt{a_n} + \\sqrt{a_{n + 1}}}$$ is equal to",
    options: JSON.stringify({
      "A": "$$\\frac{n}{\\sqrt{a_1} + \\sqrt{a_{n + 1}}}$$",
      "B": "$$\\frac{n - 1}{\\sqrt{a_1} + \\sqrt{a_{n - 1}}}$$",
      "C": "$$\\frac{n - 1}{\\sqrt{a_1} + \\sqrt{a_n}}$$",
      "D": "$$\\frac{n}{\\sqrt{a_1} - \\sqrt{a_{n + 1}}}$$"
    }),
    answer: "A",
    type: "Multiple Choice",
    topicId: "b72845d1-8be7-42b9-b242-07d12e369916",
    mockTestId: null
  },
  {
    id:"2222222222222222",
    question: "If $$a_1, a_2, ......$$ are in A.P., then, $$\\frac{1}{\\sqrt{a_1} + \\sqrt{a_2}} + \\frac{1}{\\sqrt{a_2} + \\sqrt{a_3}} + ....... + \\frac{1}{\\sqrt{a_n} + \\sqrt{a_{n + 1}}}$$ is equal to",
    options: JSON.stringify({
      "A": "$$\\frac{n}{\\sqrt{a_1} + \\sqrt{a_{n + 1}}}$$",
      "B": "$$\\frac{n - 1}{\\sqrt{a_1} + \\sqrt{a_{n - 1}}}$$",
      "C": "$$\\frac{n - 1}{\\sqrt{a_1} + \\sqrt{a_n}}$$",
      "D": "$$\\frac{n}{\\sqrt{a_1} - \\sqrt{a_{n + 1}}}$$"
    }),
    answer: "A",
    type: "Multiple Choice",
    topicId: "b72845d1-8be7-42b9-b242-07d12e369916",
    mockTestId: null
  },
  ];
  
export default function Testpage() {
  return (
    <div>
        <Test questions={questions} />
    </div>
)
}