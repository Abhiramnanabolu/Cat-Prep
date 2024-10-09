const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

let questions = [
  {
    "question": "If Hari is ready to board a train at 8:05 am from station M, then when is the earliest that he can reach station N?",
    "options": {
      "A": "9:11 am",
      "B": "9:06 am",
      "C": "9:01 am",
      "D": "9:13 am"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "5740e670-7052-4637-9ac2-474cd559791d",
    "mockTestId": null
  },
  {
    "question": "If Priya is ready to board a train at 10:25 am from station T, then when is the earliest that she can reach station S?",
    "options": {
      "A": "11:12 am",
      "B": "11:22 am",
      "C": "11:07 am",
      "D": "11:28 am"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "5740e670-7052-4637-9ac2-474cd559791d",
    "mockTestId": null
  },
  {
    "question": "Haripriya is expected to reach station S late. What is the latest time by which she must be ready to board at station S if she must reach station B before 1 am via station R?",
    "options": {
      "A": "11:39 pm",
      "B": "11:49 am",
      "C": "11:35 pm",
      "D": "11:43 pm"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "5740e670-7052-4637-9ac2-474cd559791d",
    "mockTestId": null
  },
  {
    "question": "What is the chance that the total number of widgets delivered in a day is 260 units and the route ends at Bikrampore?",
    "options": {
      "A": "33.33%",
      "B": "10.80%",
      "C": "17.64%",
      "D": "7.56%"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "5740e670-7052-4637-9ac2-474cd559791d",
    "mockTestId": null
  },
  {
    "question": "If the first location visited from the warehouse is Ahmednagar, then what is the chance that the total distance covered in the route is 40 km?",
    "options": {
      "A": "18%",
      "B": "5.4%",
      "C": "3.24%",
      "D": "30%"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "5740e670-7052-4637-9ac2-474cd559791d",
    "mockTestId": null
  },
  {
    "question": "If Ahmednagar is not the first location to be visited in a route and the total route distance is 29 km, then which of the following is a possible number of widgets delivered on that day?",
    "options": {
      "A": "210",
      "B": "220",
      "C": "200",
      "D": "250"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "5740e670-7052-4637-9ac2-474cd559791d",
    "mockTestId": null
  },
  {
    "question": "How many mango trees were there in total?",
    "options": {
      "A": "49",
      "B": "84",
      "C": "98",
      "D": "126"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "5740e670-7052-4637-9ac2-474cd559791d",
    "mockTestId": null
  },
  {
    "question": "Which of the following is the correct sequence of trees received by Abha, Bina, Chitra and Dipti in that order?",
    "options": {
      "A": "50, 69, 30, 56",
      "B": "54, 57, 34, 60",
      "C": "44, 87, 24, 50",
      "D": "60, 39, 40, 66"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "5740e670-7052-4637-9ac2-474cd559791d",
    "mockTestId": null
  },
  {
    "question": "How many pine trees did Chitra receive?",
    "options": {
      "A": "18",
      "B": "30",
      "C": "21",
      "D": "15"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "5740e670-7052-4637-9ac2-474cd559791d",
    "mockTestId": null
  },
  {
    "question": "Who got the plot with the smallest number of trees and how many trees did that plot have?",
    "options": {
      "A": "Dipti, 6 trees",
      "B": "Bina, 3 trees",
      "C": "Bina, 4 trees",
      "D": "Abha, 4 trees"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "5740e670-7052-4637-9ac2-474cd559791d",
    "mockTestId": null
  },
  {
    "question": "Which of the following statements is NOT true?",
    "options": {
      "A": "Chitra got 12 mango trees",
      "B": "Bina got 32 pine trees.",
      "C": "Abha got 41 teak trees.",
      "D": "Dipti got 56 mango trees"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "5740e670-7052-4637-9ac2-474cd559791d",
    "mockTestId": null
  },
  {
    "question": "Which column had the highest number of trees?",
    "options": {
      "A": "4",
      "B": "3",
      "C": "Cannot be determined",
      "D": "2"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "5740e670-7052-4637-9ac2-474cd559791d",
    "mockTestId": null
  },
  {
    "question": "Who is standing at intersection a?",
    "options": {
      "A": "W",
      "B": "Y",
      "C": "No one",
      "D": "V"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "5740e670-7052-4637-9ac2-474cd559791d",
    "mockTestId": null
  },
  {
    "question": "Who can V see?",
    "options": {
      "A": "Z only",
      "B": "U, W and Z only",
      "C": "U and Z only",
      "D": "U only"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "5740e670-7052-4637-9ac2-474cd559791d",
    "mockTestId": null
  },
  {
    "question": "What is the minimum number of street segments that X must cross to reach Y?",
    "options": {
      "A": "1",
      "B": "4",
      "C": "2",
      "D": "3"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "5740e670-7052-4637-9ac2-474cd559791d",
    "mockTestId": null
  },
  {
    "question": "Should a new person stand at intersection d, who among the six would she see?",
    "options": {
      "A": "W and X only",
      "B": "U and W only",
      "C": "U and Z only",
      "D": "V and X only"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "5740e670-7052-4637-9ac2-474cd559791d",
    "mockTestId": null
  },
  {
    "question": "If x is a positive real number such that $$x^8 + \\left(\\frac{1}{x}\\right)^8 = 47$$, then the value of $$x^9 + \\left(\\frac{1}{x}\\right)^9$$ is",
    "options": {
      "A": "$$40\\sqrt{5}$$",
      "B": "$$30\\sqrt{5}$$",
      "C": "$$36\\sqrt{5}$$",
      "D": "$$34\\sqrt{5}$$"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "b3a02404-19a3-49e1-b53e-a44ee45396b3",
    "mockTestId": null
  },
  {
    "question": "Any non-zero real numbers x,y such that $$y\\neq3$$ and $$\\frac{x}{y}<\\frac{x+3}{y-3}$$, Will satisfy the condition.",
    "options": {
      "A": "$$\\frac{x}{y}<\\frac{y}{x}$$",
      "B": "If $$y<0$$, and $$-x<y$$",
      "C": "If $$y>10$$, and $$-x>y$$",
      "D": "If $$x<0$$, and $$-x<y$$"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "b3a02404-19a3-49e1-b53e-a44ee45396b3",
    "mockTestId": null
  },
  {
    "question": "If $$x$$ and $$y$$ are positive real numbers such that $$\\log_{x}(x^2 + 12) = 4$$ and $$3 \\log_{y} x = 1$$, then $$x + y $$ equals",
    "options": {
      "A": "20",
      "B": "68",
      "C": "10",
      "D": "11"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "b3a02404-19a3-49e1-b53e-a44ee45396b3",
    "mockTestId": null
  },
  {
    "question": "Let n and m be two positive integers such that there are exactly 41 integers greater than $$8^m$$ and less than $$8^n$$, which can be expressed as powers of 2. Then, the smallest possible value of n + m is",
    "options": {
      "A": "42",
      "B": "44",
      "C": "14",
      "D": "16"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "b3a02404-19a3-49e1-b53e-a44ee45396b3",
    "mockTestId": null
  },
  {
    "question": "For some real numbers a and b, the system of equations $$x + y = 4$$ and $$(a+5)x+(b^2-15)y=8b$$ has infinitely many solutions for x and y. Then, the maximum possible value of ab is",
    "options": {
      "A": "33",
      "B": "25",
      "C": "15",
      "D": "55"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "b3a02404-19a3-49e1-b53e-a44ee45396b3",
    "mockTestId": null
  },
  {
    "question": "If $$\\sqrt{5x+9} + \\sqrt{5x - 9} = 3(2 + \\sqrt{2})$$, then $$\\sqrt{10x+9}$$ is equal to",
    "options": {
      "A": "$$3\\sqrt{31}$$",
      "B": "$$4\\sqrt{5}$$",
      "C": "$$3\\sqrt{7}$$",
      "D": "$$2\\sqrt{7}$$"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "b3a02404-19a3-49e1-b53e-a44ee45396b3",
    "mockTestId": null
  },
  {
    "question": "For a real number x, if $$\\frac{1}{2}, \\frac{\\log_3(2^x - 9)}{\\log_3 4}$$, and $$\\frac{\\log_5\\left(2^x + \\frac{17}{2}\\right)}{\\log_5 4}$$ are in an arithmetic progression, then the common difference is",
    "options": {
      "A": "$$\\log_4\\left(\\frac{3}{2}\\right)$$",
      "B": "$$\\log_4 7$$",
      "C": "$$\\log_4\\left(\\frac{23}{2}\\right)$$",
      "D": "$$\\log_4\\left(\\frac{7}{2}\\right)$$"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "b3a02404-19a3-49e1-b53e-a44ee45396b3",
    "mockTestId": null
  },
  {
    "question": "If $$x$$ and $$y$$ are real numbers such that $$x^{2} + (x - 2y - 1)^{2} = -4y(x + y)$$, then the value $$x - 2y$$ is",
    "options": {
      "A": "0",
      "B": "1",
      "C": "-1",
      "D": "2"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "b3a02404-19a3-49e1-b53e-a44ee45396b3",
    "mockTestId": null
  },
  {
    "question": "The sum of all possible values of x satisfying the equation $$2^{4x^{2}}-2^{2x^{2}+x+16}+2^{2x+30}=0$$, is",
    "options": {
      "A": "$$3$$",
      "B": "$$\\frac{3}{2}$$",
      "C": "$$\\frac{5}{2}$$",
      "D": "$$\\frac{1}{2}$$"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "b3a02404-19a3-49e1-b53e-a44ee45396b3",
    "mockTestId": null
  },
  {
    "question": "The population of a town in 2020 was 100000. The population decreased by y% from the year 2020 to 2021, and increased by x% from the year 2021 to 2022, where x and y are two natural numbers. If population in 2022 was greater than the population in 2020 and the difference between x and y is 10, then the lowest possible population of the town in 2021 was",
    "options": {
      "A": "72000",
      "B": "74000",
      "C": "73000",
      "D": "75000"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "b3a02404-19a3-49e1-b53e-a44ee45396b3",
    "mockTestId": null
  },
  {
    "question": "In an examination, the average marks of 4 girls and 6 boys is 24. Each of the girls has the same marks while each of the boys has the same marks. If the marks of any girl is at most double the marks of any boy, but not less than the marks of any boy, then the number of possible distinct integer values of the total marks of 2 girls and 6 boys is",
    "options": {
      "A": "21",
      "B": "20",
      "C": "22",
      "D": "19"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "b3a02404-19a3-49e1-b53e-a44ee45396b3",
    "mockTestId": null
  },
  {
    "question": "A merchant purchases a cloth at a rate of Rs.100 per meter and receives 5 cm length of cloth free for every 100 cm length of cloth purchased by him. He sells the same cloth at a rate of Rs.110 per meter but cheats his customers by giving 95 cm length of cloth for every 100 cm length of cloth purchased by the customers. If the merchant provides a 5% discount, the resulting profit earned by him is",
    "options": {
      "A": "4.2%",
      "B": "9.7%",
      "C": "15.5%",
      "D": "16%"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "3e41aefb-8c5f-41eb-bb26-bd4f4f86c4a0",
    "mockTestId": null
  },
  {
    "question": "A mixture P is formed by removing a certain amount of coffee from a coffee jar and replacing the same amount with cocoa powder. The same amount is again removed from mixture P and replaced with same amount of cocoa powder to form a new mixture Q. If the ratio of coffee and cocoa in the mixture Q is 16 : 9, then the ratio of cocoa in mixture P to that in mixture Q is",
    "options": {
      "A": "1 : 3",
      "B": "1 : 2",
      "C": "5 : 9",
      "D": "4 : 9"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "3e41aefb-8c5f-41eb-bb26-bd4f4f86c4a0",
    "mockTestId": null
  },
  {
    "question": "Pipes A and C are fill pipes while Pipe B is a drain pipe of a tank. Pipe B empties the full tank in one hour less than the time taken by Pipe A to fill the empty tank. When pipes A, B and C are turned on together, the empty tank is filled in two hours. If pipes B and C are turned on together when the tank is empty and Pipe B is turned off after one hour, then Pipe C takes another one hour and 15 minutes to fill the remaining tank. If Pipe A can fill the empty tank in less than five hours, then the time taken, in minutes, by Pipe C to fill the empty tank is",
    "options": {
      "A": "90",
      "B": "120",
      "C": "75",
      "D": "60"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "3e41aefb-8c5f-41eb-bb26-bd4f4f86c4a0",
    "mockTestId": null
  },
  {
    "question": "Anil borrows Rs 2 lakhs at an interest rate of 8% per annum, compounded half-yearly. He repays Rs 10320 at the end of the first year and closes the loan by paying the outstanding amount at the end of the third year. Then, the total interest, in rupees, paid over the three years is nearest to",
    "options": {
      "A": "45311",
      "B": "51311",
      "C": "33130",
      "D": "40991"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "3e41aefb-8c5f-41eb-bb26-bd4f4f86c4a0",
    "mockTestId": null
  },
  {
    "question": "Rahul, Rakshita and Gurmeet, working together, would have taken more than 7 days to finish a job. On the other hand, Rahul and Gurmeet, working together would have taken less than 15 days to finish the job. However, they all worked together for 6 days, followed by Rakshita, who worked alone for 3 more days to finish the job. If Rakshita had worked alone on the job then the number of days she would have taken to finish the job, cannot be",
    "options": {
      "A": "20",
      "B": "17",
      "C": "16",
      "D": "21"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "3e41aefb-8c5f-41eb-bb26-bd4f4f86c4a0",
    "mockTestId": null
  },
  {
    "question": "The minor angle between the hours hand and minutes hand of a clock was observed at 8:48 am. The minimum duration, in minutes, after 8.48 am when this angle increases by 50% is",
    "options": {
      "A": "$$\\frac{36}{11}$$",
      "B": "2",
      "C": "4",
      "D": "$$\\frac{24}{11}$$"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "3e41aefb-8c5f-41eb-bb26-bd4f4f86c4a0",
    "mockTestId": null
  },
  {
    "question": "Gita sells two objects A and B at the same price such that she makes a profit of 20% on object A and a loss of 10% on object B. If she increases the selling price such that objects A and B are still sold at an equal price and a profit of 10% is made on object B, then the profit made on object A will be nearest to",
    "options": {
      "A": "42%",
      "B": "45%",
      "C": "47%",
      "D": "49%"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "3e41aefb-8c5f-41eb-bb26-bd4f4f86c4a0",
    "mockTestId": null
  },
  {
    "question": "Ravi is driving at a speed of 40 km/h on a road. Vijay is 54 meters behind Ravi and driving in the same direction as Ravi. Ashok is driving along the same road from the opposite direction at a speed of 50 km/h and is 225 meters away from Ravi. The speed, in km/h, at which Vijay should drive so that all the three cross each other at the same time, is",
    "options": {
      "A": "58.8",
      "B": "67.2",
      "C": "61.6",
      "D": "64.4"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "3e41aefb-8c5f-41eb-bb26-bd4f4f86c4a0",
    "mockTestId": null
  },
  {
    "question": "Anil mixes cocoa with sugar in the ratio 3 : 2 to prepare mixture A, and coffee with sugar in the ratio 7 : 3 to prepare mixture B. He combines mixtures A and B in the ratio 2 : 3 to make a new mixture C. If he mixes C with an equal amount of milk to make a drink, then the percentage of sugar in this drink will be",
    "options": {
      "A": "17",
      "B": "16",
      "C": "21",
      "D": "24"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "3e41aefb-8c5f-41eb-bb26-bd4f4f86c4a0",
    "mockTestId": null
  },
  {
    "question": "Brishti went on an 8-hour trip in a car. Before the trip, the car had travelled a total of $$x$$ km till then, where $$x$$ is a whole number and is palindromic, i.e., $$x$$ remains unchanged when its digits are reversed. At the end of the trip, the car had travelled a total of 26862 km till then, this number again being palindromic. If Brishti never drove at more than 110 km/h, then the greatest possible average speed at which she drove during the trip, in km/h, was",
    "options": {
      "A": "110",
      "B": "90",
      "C": "100",
      "D": "80"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "3e41aefb-8c5f-41eb-bb26-bd4f4f86c4a0",
    "mockTestId": null
  },
  {
    "question": "Minu purchases a pair of sunglasses at Rs.1000 and sells to Kanu at 20% profit. Then, Kanu sells it back to Minu at 20% loss. Finally, Minu sells the same pair of sunglasses to Tanu. If the total profit made by Minu from all her transactions is Rs.500, then the percentage of profit made by Minu when she sold the pair of sunglasses to Tanu is",
    "options": {
      "A": "35.42%",
      "B": "52%",
      "C": "31.25%",
      "D": "26%"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "3e41aefb-8c5f-41eb-bb26-bd4f4f86c4a0",
    "mockTestId": null
  },
  {
    "question": "The price of a precious stone is directly proportional to the square of its weight. Sita has a precious stone weighing 18 units. If she breaks it into four pieces with each piece having distinct integer weight, then the difference between the highest and lowest possible values of the total price of the four pieces will be 288000. Then, the price of the original precious stone is",
    "options": {
      "A": "1944000",
      "B": "972000",
      "C": "1620000",
      "D": "1296000"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "3e41aefb-8c5f-41eb-bb26-bd4f4f86c4a0",
    "mockTestId": null
  },
  {
    "question": "There are three persons A, B and C in a room. If a person D joins the room, the average weight of the persons in the room reduces by x kg. Instead of D, if person E joins the room, the average weight of the persons in the room increases by 2x kg. If the weight of E is 12 kg more than that of D, then the value of x is",
    "options": {
      "A": "2",
      "B": "0.5",
      "C": "1",
      "D": "1.5"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "3e41aefb-8c5f-41eb-bb26-bd4f4f86c4a0",
    "mockTestId": null
  },
  {
    "question": "A boat takes 2 hours to travel downstream a river from port A to port B, and 3 hours to return to port A. Another boat takes a total of 6 hours to travel from port B to port A and return to port B. If the speeds of the boats and the river are constant, then the time, in hours, taken by the slower boat to travel from port A to port B is",
    "options": {
      "A": "$$12(\\sqrt{5} - 2)$$",
      "B": "$$3(3 + \\sqrt{5})$$",
      "C": "$$3(\\sqrt{5} - 1)$$",
      "D": "$$3(3 - \\sqrt{5})$$"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "3e41aefb-8c5f-41eb-bb26-bd4f4f86c4a0",
    "mockTestId": null
  },
  {
    "question": "In a company, 20% of the employees work in the manufacturing department. If the total salary obtained by all the manufacturing employees is one-sixth of the total salary obtained by all the employees in the company, then the ratio of the average salary obtained by the manufacturing employees to the average salary obtained by the nonmanufacturing employees is",
    "options": {
      "A": "6:5",
      "B": "4:5",
      "C": "5:4",
      "D": "5:6"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "3e41aefb-8c5f-41eb-bb26-bd4f4f86c4a0",
    "mockTestId": null
  },
  {
    "question": "The salaries of three friends Sita, Gita and Mita are initially in the ratio 5 : 6 : 7, respectively. In the first year, they get salary hikes of 20%, 25% and 20%, respectively. In the second year, Sita and Mita get salary hikes of 40% and 25%, respectively, and the salary of Gita becomes equal to the mean salary of the three friends. The salary hike of Gita in the second year is",
    "options": {
      "A": "25%",
      "B": "28%",
      "C": "26%",
      "D": "30%"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "3e41aefb-8c5f-41eb-bb26-bd4f4f86c4a0",
    "mockTestId": null
  },
  {
    "question": "There are three persons A, B and C in a room. If a person D joins the room, the average weight of the persons in the room reduces by x kg. Instead of D, if person E joins the room, the average weight of the persons in the room increases by 2x kg. If the weight of E is 12 kg more than that of D, then the value of x is",
    "options": {
      "A": "2",
      "B": "0.5",
      "C": "1",
      "D": "1.5"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "345e0268-4905-446d-888a-06e015b9c098",
    "mockTestId": null
  },
  {
    "question": "In a company, 20% of the employees work in the manufacturing department. If the total salary obtained by all the manufacturing employees is one-sixth of the total salary obtained by all the employees in the company, then the ratio of the average salary obtained by the manufacturing employees to the average salary obtained by the nonmanufacturing employees is",
    "options": {
      "A": "6:5",
      "B": "4:5",
      "C": "5:4",
      "D": "5:6"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "345e0268-4905-446d-888a-06e015b9c098",
    "mockTestId": null
  },
  {
    "question": "The average weight of students in a class increases by 600 gm when some new students join the class. If the average weight of the new students is 3 kg more than the average weight of the original students, then the ratio of the number of original students to the number of new students is",
    "options": {
      "A": "1 : 4",
      "B": "1 : 2",
      "C": "4 : 1",
      "D": "3 : 1"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "345e0268-4905-446d-888a-06e015b9c098",
    "mockTestId": null
  },
  {
    "question": "Manu earns ₹4000 per month and wants to save an average of ₹550 per month in a year. In the first nine months, his monthly expense was ₹3500, and he foresees that, tenth month onward, his monthly expense will increase to ₹3700. In order to meet his yearly savings target, his monthly earnings, in rupees, from the tenth month onward should be",
    "options": {
      "A": "4400",
      "B": "4200",
      "C": "4300",
      "D": "4350"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "345e0268-4905-446d-888a-06e015b9c098",
    "mockTestId": null
  },
  {
    "question": "The average of three integers is 13. When a natural number n is included, the average of these four integers remains an odd integer. The minimum possible value of n is",
    "options": {
      "A": "3",
      "B": "4",
      "C": "5",
      "D": "1"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "345e0268-4905-446d-888a-06e015b9c098",
    "mockTestId": null
  },
  {
    "question": "If a and b are non-negative real numbers such that a+ 2b = 6, then the average of the maximum and minimum possible values of (a+ b) is",
    "options": {
      "A": "3",
      "B": "4",
      "C": "3.5",
      "D": "4.5"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "345e0268-4905-446d-888a-06e015b9c098",
    "mockTestId": null
  },
  {
    "question": "Five students, including Amit, appear for an examination in which possible marks are integers between 0 and 50, both inclusive. The average marks for all the students is 38 and exactly three students got more than 32. If no two students got the same marks and Amit got the least marks among the five students, then the difference between the highest and lowest possible marks of Amit is",
    "options": {
      "A": "22",
      "B": "21",
      "C": "24",
      "D": "20"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "345e0268-4905-446d-888a-06e015b9c098",
    "mockTestId": null
  },
  {
    "question": "Onion is sold for 5 consecutive months at the rate of Rs 10, 20, 25, 25, and 50 per kg, respectively. A family spends a fixed amount of money on onion for each of the first three months, and then spends half that amount on onion for each of the next two months. The average expense for onion, in rupees per kg, for the family over these 5 months is closest to",
    "options": {
      "A": "26",
      "B": "18",
      "C": "16",
      "D": "20"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "345e0268-4905-446d-888a-06e015b9c098",
    "mockTestId": null
  },
  {
    "question": "A batsman played n + 2 innings and got out on all occasions. His average score in these n + 2 innings was 29 runs and he scored 38 and 15 runs in the last two innings. The batsman scored less than 38 runs in each of the first n innings. In these n innings, his average score was 30 runs and lowest score was x runs. The smallest possible value of x is",
    "options": {
      "A": "4",
      "B": "3",
      "C": "2",
      "D": "1"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "345e0268-4905-446d-888a-06e015b9c098",
    "mockTestId": null
  },
  {
    "question": "The average of 30 integers is 5. Among these 30 integers, there are exactly 20 which do not exceed 5. What is the highest possible value of the average of these 20 integers?",
    "options": {
      "A": "3.5",
      "B": "5",
      "C": "4.5",
      "D": "4"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "345e0268-4905-446d-888a-06e015b9c098",
    "mockTestId": null
  },
  {
    "question": "Ramesh and Gautam are among 22 students who write an examination. Ramesh scores 82.5. The average score of the 21 students other than Gautam is 62. The average score of all the 22 students is one more than the average score of the 21 students other than Ramesh. The score of Gautam is",
    "options": {
      "A": "53",
      "B": "51",
      "C": "48",
      "D": "49"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "345e0268-4905-446d-888a-06e015b9c098",
    "mockTestId": null
  },
  {
    "question": "In an apartment complex, the number of people aged 51 years and above is 30 and there are at most 39 people whose ages are below 51 years. The average age of all the people in the apartment complex is 38 years. What is the largest possible average age, in years, of the people whose ages are below 51 years?",
    "options": {
      "A": "27",
      "B": "25",
      "C": "26",
      "D": "28"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "345e0268-4905-446d-888a-06e015b9c098",
    "mockTestId": null
  },
  {
    "question": "The average height of 22 toddlers increases by 2 inches when two of them leave this group. If the average height of these two toddlers is one-third the average height of the original 22, then the average height, in inches, of the remaining 20 toddlers is",
    "options": {
      "A": "30",
      "B": "28",
      "C": "32",
      "D": "26"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "345e0268-4905-446d-888a-06e015b9c098",
    "mockTestId": null
  },
  {
    "question": "A class consists of 20 boys and 30 girls. In the mid-semester examination, the average score of the girls was 5 higher than that of the boys. In the final exam, however, the average score of the girls dropped by 3 while the average score of the entire class increased by 2. The increase in the average score of the boys is",
    "options": {
      "A": "9.5",
      "B": "10",
      "C": "4.5",
      "D": "6"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "345e0268-4905-446d-888a-06e015b9c098",
    "mockTestId": null
  },
  {
    "question": "Consider the set S = {2, 3, 4, ...., 2n+1}, where n is a positive integer larger than 2007. Define X as the average of the odd integers in S and Y as the average of the even integers in S. What is the value of X - Y ?",
    "options": {
      "A": "0",
      "B": "1",
      "C": "(1/2)*n",
      "D": "(n+1)/2n",
      "E": "2008"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "345e0268-4905-446d-888a-06e015b9c098",
    "mockTestId": null
  },
  {
    "question": "A mixture P is formed by removing a certain amount of coffee from a coffee jar and replacing the same amount with cocoa powder. The same amount is again removed from mixture P and replaced with same amount of cocoa powder to form a new mixture Q. If the ratio of coffee and cocoa in the mixture Q is 16 : 9, then the ratio of cocoa in mixture P to that in mixture Q is",
    "options": {
      "A": "1 : 3",
      "B": "1 : 2",
      "C": "5 : 9",
      "D": "4 : 9"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "9c5e80c2-f644-4776-a299-679680f946eb",
    "mockTestId": null
  },
  {
    "question": "Anil mixes cocoa with sugar in the ratio 3 : 2 to prepare mixture A, and coffee with sugar in the ratio 7 : 3 to prepare mixture B. He combines mixtures A and B in the ratio 2 : 3 to make a new mixture C. If he mixes C with an equal amount of milk to make a drink, then the percentage of sugar in this drink will be",
    "options": {
      "A": "17",
      "B": "16",
      "C": "21",
      "D": "24"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "9c5e80c2-f644-4776-a299-679680f946eb",
    "mockTestId": null
  },
  {
    "question": "There are three persons A, B and C in a room. If a person D joins the room, the average weight of the persons in the room reduces by x kg. Instead of D, if person E joins the room, the average weight of the persons in the room increases by 2x kg. If the weight of E is 12 kg more than that of D, then the value of x is",
    "options": {
      "A": "2",
      "B": "0.5",
      "C": "1",
      "D": "1.5"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "9c5e80c2-f644-4776-a299-679680f946eb",
    "mockTestId": null
  },
  {
    "question": "In a company, 20% of the employees work in the manufacturing department. If the total salary obtained by all the manufacturing employees is one-sixth of the total salary obtained by all the employees in the company, then the ratio of the average salary obtained by the manufacturing employees to the average salary obtained by the nonmanufacturing employees is",
    "options": {
      "A": "6:5",
      "B": "4:5",
      "C": "5:4",
      "D": "5:6"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "9c5e80c2-f644-4776-a299-679680f946eb",
    "mockTestId": null
  },
  {
    "question": "A glass contains 500 cc of milk and a cup contains 500 cc of water. From the glass, 150 cc of milk is transferred to the cup and mixed thoroughly. Next, 150 cc of this mixture is transferred from the cup to the glass. Now, the amount of water in the glass and the amount of milk in the cup are in the ratio",
    "options": {
      "A": "1 : 1",
      "B": "10 : 13",
      "C": "3 : 10",
      "D": "10 : 3"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "9c5e80c2-f644-4776-a299-679680f946eb",
    "mockTestId": null
  },
  {
    "question": "A mixture contains lemon juice and sugar syrup in equal proportion. If a new mixture is created by adding this mixture and sugar syrup in the ratio 1 : 3, then the ratio of lemon juice and sugar syrup in the new mixture is",
    "options": {
      "A": "1 : 4",
      "B": "1 : 5",
      "C": "1 : 6",
      "D": "1 : 7"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "9c5e80c2-f644-4776-a299-679680f946eb",
    "mockTestId": null
  },
  {
    "question": "There are two containers of the same volume, first container half-filled with sugar syrup and the second container half-filled with milk. Half the content of the first container is transferred to the second container, and then the half of this mixture is transferred back to the first container. Next, half the content of the first container is transferred back to the second container. Then the ratio of sugar syrup and milk in the second container is",
    "options": {
      "A": "4 : 5",
      "B": "6 : 5",
      "C": "5 : 4",
      "D": "5 : 6"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "9c5e80c2-f644-4776-a299-679680f946eb",
    "mockTestId": null
  },
  {
    "question": "If a certain weight of an alloy of silver and copper is mixed with 3 kg of pure silver, the resulting alloy will have 90% silver by weight. If the same weight of the initial alloy is mixed with 2 kg of another alloy which has 90% silver by weight, the resulting alloy will have 84% silver by weight. Then, the weight of the initial alloy, in kg, is",
    "options": {
      "A": "3.5",
      "B": "2.5",
      "C": "3",
      "D": "4"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "9c5e80c2-f644-4776-a299-679680f946eb",
    "mockTestId": null
  },
  {
    "question": "A person buys tea of three different qualities at ₹ 800, ₹ 500, and ₹ 300 per kg, respectively, and the amounts bought are in the proportion 2 : 3 : 5. She mixes all the tea and sells one-sixth of the mixture at ₹ 700 per kg. The price, in INR per kg, at which she should sell the remaining tea, to make an overall profit of 50%, is",
    "options": {
      "A": "653",
      "B": "688",
      "C": "692",
      "D": "675"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "9c5e80c2-f644-4776-a299-679680f946eb",
    "mockTestId": null
  },
  {
    "question": "Identical chocolate pieces are sold in boxes of two sizes, small and large. The large box is sold for twice the price of the small box. If the selling price per gram of chocolate in the large box is 12% less than that in the small box, then the percentage by which the weight of chocolate in the large box exceeds that in the small box is nearest to",
    "options": {
      "A": "144",
      "B": "127",
      "C": "135",
      "D": "124"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "9c5e80c2-f644-4776-a299-679680f946eb",
    "mockTestId": null
  },
  {
    "question": "Two alcohol solutions, A and B, are mixed in the proportion 1:3 by volume. The volume of the mixture is then doubled by adding solution A such that the resulting mixture has 72% alcohol. If solution A has 60% alcohol, then the percentage of alcohol in solution B is",
    "options": {
      "A": "90%",
      "B": "94%",
      "C": "92%",
      "D": "89%"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "9c5e80c2-f644-4776-a299-679680f946eb",
    "mockTestId": null
  },
  {
    "question": "An alloy is prepared by mixing three metals A, B and C in the proportion 3 : 4 : 7 by volume. Weights of the same volume of the metals A. B and C are in the ratio 5 : 2 : 6. In 130 kg of the alloy, the weight, in kg. of the metal C is",
    "options": {
      "A": "48",
      "B": "84",
      "C": "70",
      "D": "96"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "9c5e80c2-f644-4776-a299-679680f946eb",
    "mockTestId": null
  },
  {
    "question": "The strength of a salt solution is p% if 100 ml of the solution contains p grams of salt. Each of three vessels A, B, C contains 500 ml of salt solution of strengths 10%, 22%, and 32%, respectively. Now, 100 ml of the solution in vessel A is transferred to vessel B. Then, 100 ml of the solution in vessel B is transferred to vessel C. Finally, 100 ml of the solution in vessel C is transferred to vessel A. The strength, in percentage, of the resulting solution in vessel A is",
    "options": {
      "A": "15",
      "B": "13",
      "C": "12",
      "D": "14"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "9c5e80c2-f644-4776-a299-679680f946eb",
    "mockTestId": null
  },
  {
    "question": "A chemist mixes two liquids 1 and 2. One litre of liquid 1 weighs 1 kg and one litre of liquid 2 weighs 800 gm. If half litre of the mixture weighs 480 gm, then the percentage of liquid 1 in the mixture, in terms of volume, is",
    "options": {
      "A": "80",
      "B": "70",
      "C": "85",
      "D": "75"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "9c5e80c2-f644-4776-a299-679680f946eb",
    "mockTestId": null
  },
  {
    "question": "A mixture P is formed by removing a certain amount of coffee from a coffee jar and replacing the same amount with cocoa powder. The same amount is again removed from mixture P and replaced with same amount of cocoa powder to form a new mixture Q. If the ratio of coffee and cocoa in the mixture Q is 16 : 9, then the ratio of cocoa in mixture P to that in mixture Q is",
    "options": {
      "A": "1 : 3",
      "B": "1 : 2",
      "C": "5 : 9",
      "D": "4 : 9"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "a6455e49-f9aa-4d99-87db-614a16550bd3",
    "mockTestId": null
  },
  {
    "question": "Anil mixes cocoa with sugar in the ratio 3 : 2 to prepare mixture A, and coffee with sugar in the ratio 7 : 3 to prepare mixture B. He combines mixtures A and B in the ratio 2 : 3 to make a new mixture C. If he mixes C with an equal amount of milk to make a drink, then the percentage of sugar in this drink will be",
    "options": {
      "A": "17",
      "B": "16",
      "C": "21",
      "D": "24"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "a6455e49-f9aa-4d99-87db-614a16550bd3",
    "mockTestId": null
  },
  {
    "question": "The price of a precious stone is directly proportional to the square of its weight. Sita has a precious stone weighing 18 units. If she breaks it into four pieces with each piece having distinct integer weight, then the difference between the highest and lowest possible values of the total price of the four pieces will be 288000. Then, the price of the original precious stone is",
    "options": {
      "A": "1944000",
      "B": "972000",
      "C": "1620000",
      "D": "1296000"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "a6455e49-f9aa-4d99-87db-614a16550bd3",
    "mockTestId": null
  },
  {
    "question": "There are three persons A, B and C in a room. If a person D joins the room, the average weight of the persons in the room reduces by x kg. Instead of D, if person E joins the room, the average weight of the persons in the room increases by 2x kg. If the weight of E is 12 kg more than that of D, then the value of x is",
    "options": {
      "A": "2",
      "B": "0.5",
      "C": "1",
      "D": "1.5"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "a6455e49-f9aa-4d99-87db-614a16550bd3",
    "mockTestId": null
  },
  {
    "question": "In a company, 20% of the employees work in the manufacturing department. If the total salary obtained by all the manufacturing employees is one-sixth of the total salary obtained by all the employees in the company, then the ratio of the average salary obtained by the manufacturing employees to the average salary obtained by the nonmanufacturing employees is",
    "options": {
      "A": "6:5",
      "B": "4:5",
      "C": "5:4",
      "D": "5:6"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "a6455e49-f9aa-4d99-87db-614a16550bd3",
    "mockTestId": null
  },
  {
    "question": "The salaries of three friends Sita, Gita and Mita are initially in the ratio 5 : 6 : 7, respectively. In the first year, they get salary hikes of 20%, 25% and 20%, respectively. In the second year, Sita and Mita get salary hikes of 40% and 25%, respectively, and the salary of Gita becomes equal to the mean salary of the three friends. The salary hike of Gita in the second year is",
    "options": {
      "A": "25%",
      "B": "28%",
      "C": "26%",
      "D": "30%"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "a6455e49-f9aa-4d99-87db-614a16550bd3",
    "mockTestId": null
  },
  {
    "question": "The average weight of students in a class increases by 600 gm when some new students join the class. If the average weight of the new students is 3 kg more than the average weight of the original students, then the ratio of the number of original students to the number of new students is",
    "options": {
      "A": "1 : 4",
      "B": "1 : 2",
      "C": "4 : 1",
      "D": "3 : 1"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "a6455e49-f9aa-4d99-87db-614a16550bd3",
    "mockTestId": null
  },
  {
    "question": "Manu earns ₹4000 per month and wants to save an average of ₹550 per month in a year. In the first nine months, his monthly expense was ₹3500, and he foresees that, tenth month onward, his monthly expense will increase to ₹3700. In order to meet his yearly savings target, his monthly earnings, in rupees, from the tenth month onward should be",
    "options": {
      "A": "4400",
      "B": "4200",
      "C": "4300",
      "D": "4350"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "a6455e49-f9aa-4d99-87db-614a16550bd3",
    "mockTestId": null
  },
  {
    "question": "Ankita buys 4 kg cashews, 14 kg peanuts and 6 kg almonds when the cost of 7 kg cashews is the same as that of 30 kg peanuts or 9 kg almonds. She mixes all the three nuts and marks a price for the mixture in order to make a profit of ₹1752. She sells 4 kg of the mixture at this marked price and the remaining at a 20% discount on the marked price, thus making a total profit of ₹744. Then the amount, in rupees, that she had spent in buying almonds is",
    "options": {
      "A": "1680",
      "B": "1176",
      "C": "2520",
      "D": "1440"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "a6455e49-f9aa-4d99-87db-614a16550bd3",
    "mockTestId": null
  },
  {
    "question": "A glass contains 500 cc of milk and a cup contains 500 cc of water. From the glass, 150 cc of milk is transferred to the cup and mixed thoroughly. Next, 150 cc of this mixture is transferred from the cup to the glass. Now, the amount of water in the glass and the amount of milk in the cup are in the ratio",
    "options": {
      "A": "1 : 1",
      "B": "10 : 13",
      "C": "3 : 10",
      "D": "10 : 3"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "a6455e49-f9aa-4d99-87db-614a16550bd3",
    "mockTestId": null
  },
  {
    "question": "In an election, there were four candidates and 80% of the registered voters casted their votes. One of the candidates received 30% of the casted votes while the other three candidates received the remaining casted votes in the proportion 1 : 2 : 3. If the winner of the election received 2512 votes more than the candidate with the second highest votes, then the number of registered voters was",
    "options": {
      "A": "50240",
      "B": "40192",
      "C": "60288",
      "D": "62800"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "a6455e49-f9aa-4d99-87db-614a16550bd3",
    "mockTestId": null
  },
  {
    "question": "The average of three integers is 13. When a natural number n is included, the average of these four integers remains an odd integer. The minimum possible value of n is",
    "options": {
      "A": "3",
      "B": "4",
      "C": "5",
      "D": "1"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "a6455e49-f9aa-4d99-87db-614a16550bd3",
    "mockTestId": null
  },
  {
    "question": "A mixture contains lemon juice and sugar syrup in equal proportion. If a new mixture is created by adding this mixture and sugar syrup in the ratio 1 : 3, then the ratio of lemon juice and sugar syrup in the new mixture is",
    "options": {
      "A": "1 : 4",
      "B": "1 : 5",
      "C": "1 : 6",
      "D": "1 : 7"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "a6455e49-f9aa-4d99-87db-614a16550bd3",
    "mockTestId": null
  },
  {
    "question": "There are two containers of the same volume, first container half-filled with sugar syrup and the second container half-filled with milk. Half the content of the first container is transferred to the second container, and then the half of this mixture is transferred back to the first container. Next, half the content of the first container is transferred back to the second container. Then the ratio of sugar syrup and milk in the second container is",
    "options": {
      "A": "4 : 5",
      "B": "6 : 5",
      "C": "5 : 4",
      "D": "5 : 6"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "a6455e49-f9aa-4d99-87db-614a16550bd3",
    "mockTestId": null
  },
  {
    "question": "If a and b are non-negative real numbers such that a+ 2b = 6, then the average of the maximum and minimum possible values of (a+ b) is",
    "options": {
      "A": "3",
      "B": "4",
      "C": "3.5",
      "D": "4.5"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "a6455e49-f9aa-4d99-87db-614a16550bd3",
    "mockTestId": null
  },
  {
    "question": "Five students, including Amit, appear for an examination in which possible marks are integers between 0 and 50, both inclusive. The average marks for all the students is 38 and exactly three students got more than 32. If no two students got the same marks and Amit got the least marks among the five students, then the difference between the highest and lowest possible marks of Amit is",
    "options": {
      "A": "22",
      "B": "21",
      "C": "24",
      "D": "20"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "a6455e49-f9aa-4d99-87db-614a16550bd3",
    "mockTestId": null
  },
  {
    "question": "Let C be the circle $$x^{2} + y^{2} + 4x - 6y - 3 = 0$$ and L be the locus of the point of intersection of a pair of tangents to C with the angle between the two tangents equal to $$60^{\\circ}$$. Then, the point at which L touches the line $$x$$ = 6 is",
    "options": {
      "A": "(6, 6)",
      "B": "(6, 3)",
      "C": "(6, 8)",
      "D": "(6, 4)"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "89b5a7fc-9615-4e83-b8a5-8d8549b739fa",
    "mockTestId": null
  },
  {
    "question": "Let ABCD be a parallelogram such that the coordinates of its three vertices A, B, C are (1, 1), (3, 4) and (−2, 8), respectively. Then, the coordinates of the vertex D are",
    "options": {
      "A": "(0, 11)",
      "B": "(4, 5)",
      "C": "(−3, 4)",
      "D": "(−4, 5)"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "89b5a7fc-9615-4e83-b8a5-8d8549b739fa",
    "mockTestId": null
  },
  {
    "question": "The points (2,1) and (-3,-4) are opposite vertices of a parallelogram.If the other two vertices lie on the line $$x+9y+c=0$$, then c is",
    "options": {
      "A": "12",
      "B": "13",
      "C": "15",
      "D": "14"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "89b5a7fc-9615-4e83-b8a5-8d8549b739fa",
    "mockTestId": null
  },
  {
    "question": "The vertices of a triangle are (0,0), (4,0) and (3,9). The area of the circle passing through these three points is",
    "options": {
      "A": "$$\\frac{14\\pi}{3}$$",
      "B": "$$\\frac{123\\pi}{7}$$",
      "C": "$$\\frac{12\\pi}{5}$$",
      "D": "$$\\frac{205\\pi}{9}$$"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "89b5a7fc-9615-4e83-b8a5-8d8549b739fa",
    "mockTestId": null
  },
  {
    "question": "Given an equilateral triangle T1 with side 24 cm, a second triangle T2 is formed by joining the midpoints of the sides of T1. Then a third triangle T3 is formed by joining the midpoints of the sides of T2. If this process of forming triangles is continued, the sum of the areas, in sq cm, of infinitely many such triangles T1, T2, T3,... will be",
    "options": {
      "A": "$$188\\sqrt{3}$$",
      "B": "$$248\\sqrt{3}$$",
      "C": "$$164\\sqrt{3}$$",
      "D": "$$192\\sqrt{3}$$"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "89b5a7fc-9615-4e83-b8a5-8d8549b739fa",
    "mockTestId": null
  },
  {
    "question": "A triangle ABC has area 32 sq units and its side BC, of length 8 units, lies on the line x = 4. Then the shortest possible distance between A and the point (0,0) is",
    "options": {
      "A": "$$8$$ units",
      "B": "$$4$$ units",
      "C": "$$2\\sqrt{2}$$ units",
      "D": "$$4\\sqrt{2}$$ units"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "89b5a7fc-9615-4e83-b8a5-8d8549b739fa",
    "mockTestId": null
  },
  {
    "question": "The area of the closed region bounded by the equation I x I + I y I = 2 in the two-dimensional plane is",
    "options": {
      "A": "$$4\\pi$$ sq. units",
      "B": "4 sq. units",
      "C": "8 sq. units",
      "D": "$$2\\pi$$ sq. units"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "89b5a7fc-9615-4e83-b8a5-8d8549b739fa",
    "mockTestId": null
  },
  {
    "question": "The points (2, 5) and (6, 3) are two end points of a diagonal of a rectangle. If the other diagonal has the equation y =3x+c,then c is",
    "options": {
      "A": "-5",
      "B": "-6",
      "C": "-7",
      "D": "-8"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "89b5a7fc-9615-4e83-b8a5-8d8549b739fa",
    "mockTestId": null
  },
  {
    "question": "The shortest distance of the point $$(\\frac{1}{2},1)$$ from the curve y = I x -1I + I x + 1I is",
    "options": {
      "A": "1",
      "B": "0",
      "C": "$$\\sqrt{2}$$",
      "D": "$$\\sqrt{\\frac{3}{2}}$$"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "89b5a7fc-9615-4e83-b8a5-8d8549b739fa",
    "mockTestId": null
  },
  {
    "question": "Consider a triangle drawn on the X-Y plane with its three vertices at (41, 0), (0, 41) and (0, 0), each vertex being represented by its (X,Y) coordinates. The number of points with integer coordinates inside the triangle (excluding all the points on the boundary) is",
    "options": {
      "A": "780",
      "B": "800",
      "C": "820",
      "D": "741"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "89b5a7fc-9615-4e83-b8a5-8d8549b739fa",
    "mockTestId": null
  },
  {
    "question": "The area of the triangle whose vertices are (a,a), (a + 1, a + 1) and (a + 2, a) is[CAT 2002]",
    "options": {
      "A": "$$a^3$$",
      "B": "$$1$$",
      "C": "$$2a$$",
      "D": "$$2^{1/2}$$"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "89b5a7fc-9615-4e83-b8a5-8d8549b739fa",
    "mockTestId": null
  },
  {
    "question": "ABCD is a rhombus with the diagonals AC and BD intersection at the origin on the x-y plane. The equation of the straight line AD is x + y = 1. What is the equation of BC?",
    "options": {
      "A": "x+y=-1",
      "B": "x-y=-1",
      "C": "x+y=1",
      "D": "None of the above"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "89b5a7fc-9615-4e83-b8a5-8d8549b739fa",
    "mockTestId": null
  },
  {
    "question": "The points of intersection of three lines $$2x+3y-5=0, 5x-7y+2=0$$ and $$9x-5y-4=0$$",
    "options": {
      "A": "form a triangle",
      "B": "are on lines perpendicular to each other",
      "C": "are on lines parallel to each other",
      "D": "are coincident"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "89b5a7fc-9615-4e83-b8a5-8d8549b739fa",
    "mockTestId": null
  },
  {
    "question": "What is the distance between the points A(3, 8) and B(-2,-7)?",
    "options": {
      "A": "$$5 \\sqrt2$$",
      "B": "$$5$$",
      "C": "$$5 \\sqrt10$$",
      "D": "$$10 \\sqrt 2$$"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "89b5a7fc-9615-4e83-b8a5-8d8549b739fa",
    "mockTestId": null
  },
  {
    "question": "In a recent report, the gross enrolment ratios at the primary level, that is, the number of children enrolled in classes one to five as a proportion of all children aged 6 to 10, were shown to be very high for most states; in many cases they were way above 100 percent! These figures are not worth anything, since they are based on the official enrolment data compiled from school records. They might as well stand for ‘gross exaggeration ratios’.Which of the following options best supports the claim that the ratios are exaggerated?",
    "options": {
      "A": "The definition of gross enrolment ratio does not exclude, in its numerator, children below 6 years or above 10 years enrolled in classes one to five.",
      "B": "A school attendance study found that many children enrolled in the school records were not meeting a minimum attendance requirement of 80 percent.",
      "C": "A study estimated that close to 22 percent of children enrolled in the class one records were below 6 years of age and still to start going to school.",
      "D": "Demographic surveys show shifts in the population profile which indicate that the number of children in the age group 6 to 10 years is declining."
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "943d608a-f97c-46ea-8ea9-477691df86c6",
    "mockTestId": null
  },
  {
    "question": "Szymanski suggests that the problem of racism in football may be present even today. He begins by verifying an earlier hypothesis that clubs’ wage bills explain 90% of their performance. Thus, if players’ salaries were to be only based on their abilities, clubs that spend more should finish higher. If there is pay discrimination against some group of players — fewer teams bidding for black players thus lowering the salaries for blacks with the same ability as whites — that neat relation may no longer hold. He concludes that certain clubs seem to have achieved much less than what they could have, by not recruiting black players.Which of the following findings would best support Szymanski conclusions?",
    "options": {
      "A": "Certain clubs took advantage of the situation by hiring above-average shares of black players.",
      "B": "Clubs hired white players at relatively high wages and did not show proportionately good performance.",
      "C": "During the study period, clubs in towns with a history of discrimination against blacks, under-performed relative to their wage bills.",
      "D": "Clubs in one region, which had higher proportions of black players, had significantly lower wage bills than their counterparts in another region which had predominantly white players."
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "943d608a-f97c-46ea-8ea9-477691df86c6",
    "mockTestId": null
  },
  {
    "question": "The pressure on Italy’s 257 jails has been increasing rapidly. These jails are old and overcrowded. They are supposed to hold up to 43,000 people -9,000 fewer than now. San Vittore in Milan, which has 1,800 inmates, is designed for 800. The number of foreigners inside jails has also been increasing. The minister in charge of prisons fears that tensions may snap, and so has recommended to the government an amnesty policy.Which one of the following, if true, would have most influenced the recommendation of the minister?",
    "options": {
      "A": "Opinion polls have indicated that many Italians favour a general pardon.",
      "B": "The opposition may be persuaded to help since amnesties must by approved by a two-thirds majority in parliament.",
      "C": "During a recent visit to a large prison, the Pope, whose pronouncements are taken seriously, appealed for ‘a gesture of clemency.’",
      "D": "Shortly before the recommendation was made, 58 prisons reported disturbances in a period of two weeks."
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "943d608a-f97c-46ea-8ea9-477691df86c6",
    "mockTestId": null
  },
  {
    "question": "The offer of the government to make iodised salt available at a low price of one rupee per kilo is welcome, especially since the government seems to be so concerned about the ill effects of non-iodised salt. But it is doubtful whether the offer will actually be implemented. Way back in 1994, the government, in an earlier effort, had prepared reports outlining three new and simple but experimental methods for reducing the costs of iodisation to about five paise per kilo. But these reports have remained just those — reports on paper.Which one of the following, if true, most weakens the author’s contention that it is doubtful whether the offer will be actually implemented?",
    "options": {
      "A": "The government proposes to save on costs by using the three methods it has already devised for iodisation.",
      "B": "The chain of fair-price distribution outlets now covers all the districts of the state.",
      "C": "Many small-scale and joint-sector units have completed trials to use the three iodisation methods for regular production.",
      "D": "The government which initiated the earlier effort is in place even today and has more information on the effects of non-iodised salt."
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "943d608a-f97c-46ea-8ea9-477691df86c6",
    "mockTestId": null
  },
  {
    "question": "About 96% of Scandinavian moths have ears tuned to the ultrasonic pulses that bats, their predators, emit. But the remaining 4% do not have ears and are deaf. However, they have a larger wingspan than the hearing moths, and also have higher wing-loadings the ratio between a wing’s area and its weight — meaning higher maneuverability.\nWhich one of the following can be best inferred from the above passage?",
    "options": {
      "A": "A higher proportion of deaf moths than hearing moths fall prey to bats.",
      "B": "Deaf moths may try to avoid bats by frequent changes in their flight direction.",
      "C": "Deaf moths are faster than hearing moths, and so are less prone to becoming a bat’s dinner than hearing moths.",
      "D": "The large wingspan enables deaf moths to better receive and sense the pulses of their bat predators."
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "943d608a-f97c-46ea-8ea9-477691df86c6",
    "mockTestId": null
  },
  {
    "question": "Argentina’s beef cattle herd has dropped to under 50 million from 57 million ten years ago in 1990. The animals are worth less, too: prices fell by over a third last year, before recovering, slightly. Most local meat packers and processors are in financial trouble, and recent years have seen a string of plant closures. The Beef Producers’ Association has now come up with a massive advertisement campaign calling upon Argentines to eat more beef—their “juicy, healthy, rotund, plate- filling” steaks.Which one of the following, if true, would contribute most to a failure of the campaign?",
    "options": {
      "A": "There has been a change in consumer preference towards eating leaner meats like chicken and fish.",
      "B": "Prices of imported beef have been increasing, thus making locally grown beef more competitive in terms of pricing.",
      "C": "The inability to cross breed native cattle with improved varieties has not increased production to adequate levels.",
      "D": "Animal rights pressure groups have come up rapidly, demanding better and humane treatment of farmyard animals like beef cattle."
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "943d608a-f97c-46ea-8ea9-477691df86c6",
    "mockTestId": null
  },
  {
    "question": "The problem of traffic congestion in Athens has been testing the ingenuity of politicians and town planners for years. But the measures adopted to date have not succeeded in decreasing the number of cars en the roads in the city centre. In 1980, an odds and evens number- plate legislation was introduced, under which odd and even plates were banned in the city centre on alternate days, thereby expecting to halve the number of cars in the city centre. Then in 1993 it was decreed that all cars in use in the city centre must be fitted with catalytic converters; a regulation had just then been introduced, substantially reducing import taxes on cars with catalytic converters, the only condition being that the buyer of such a ‘clean’ car offered for destruction a car at least 15 years old.Which one of the following options, if true, would best support the claim that the measures adopted to date have not succeeded?",
    "options": {
      "A": "In the 1980s, many families purchased second cars with the requisite odd or even number plate.",
      "B": "In the mid-1990s, many families found it feasible to become first-time car owners by buying a car more than 15 years old and turning it in for a new car with catalytic converters.",
      "C": "Post-1993, many families-seized the opportunity to sell their more than 15 year-old cars and buy ‘clean’ cars from the open market, even if it meant forgoing the import tax subsidy.",
      "D": "All of the above."
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "943d608a-f97c-46ea-8ea9-477691df86c6",
    "mockTestId": null
  },
  {
    "question": "Although in the limited sense of freedom regarding appointments and internal working, the independence of the Central Bank is unequivocally ensured, the same cannot be said of its right to pursue monetary policy without co-ordination with the central government. The role of the Central Bank has turned out to be subordinate and advisory in nature.\nWhich of the following best supports the conclusion drawn in the passage?",
    "options": {
      "A": "A decision of the chairman of the Central Bank to increase the bank rate by two percentage points sent shock-waves in industry, academic and government circles alike.",
      "B": "Government has repeatedly resorted to monetisation of the debt despite the reservations of the Central Bank.",
      "C": "The Central Bank does not need the central government’s nod for replacing soiled currency notes.",
      "D": "The inability to remove coin shortage was a major shortcoming of this government."
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "943d608a-f97c-46ea-8ea9-477691df86c6",
    "mockTestId": null
  },
  {
    "question": "The theory of games is suggested to some extent by parlour games such as chess and bridge. Friedman illustrates two distinct features of these games. First, in a parlour game played for money, if one wins the other (others) loses (lose). Second, these games are games involving a strategy. In a game of chess, while choosing what action is to be taken, a player tries to guess how his/her opponent will react to the various actions he or she might take. In contrast, the card-pastime, ‘patience’ or ‘solitaire’ is played only against chance.Which one of the following can best be described as a “game”?",
    "options": {
      "A": "The team of Tenzing Norgay and Edmund Hillary climbing Mt. Everest for the first time in human history.",
      "B": "A national level essay writing competition.",
      "C": "A decisive war between the armed forces of India and Pakistan over Kashmir.",
      "D": "Oil Exporters’ Union deciding on world oil prices, completely disregarding the countries which have at most minimal oil production."
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "943d608a-f97c-46ea-8ea9-477691df86c6",
    "mockTestId": null
  },
  {
    "question": "Three airlines - IA, JA and SA - operate on the Delhi-Mumbai route. To increase the number of seats sold, SA reduced its fares and this was emulated by IA and JA immediately. The general belief was that the volume of air travel between Delhi and Mumbai would increase as a result. Which of the following, if true, would add credence to the general belief?",
    "options": {
      "A": "Increase in profitability of the three airlines.",
      "B": "Extension of the discount scheme to other routes.",
      "C": "A study that shows that air travellers in India are price-conscious.",
      "D": "A study that shows that as much as 80% of air travel in India is company-sponsored."
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "943d608a-f97c-46ea-8ea9-477691df86c6",
    "mockTestId": null
  },
  {
    "question": "According to McNeill, a Brahmin priest was expected to be able to recite at least one of the Vedas. The practice was essential for several centuries when the Vedas had not yet been written down. It must have had a selective effect, since priests would have been recruited from those able or willing to memorize long passages. It must have helped in the dissemination of the work, since a memorized passage can be duplicated many times.Which one of the following can be inferred from the above passage?",
    "options": {
      "A": "Reciting the Vedas was a Brahmin's obligation.",
      "B": "The Vedic priest was like a recorded audio cassette.",
      "C": "McNeill studied the behaviour of Brahmin priests.",
      "D": "Vedic hymns had not been scripted."
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "943d608a-f97c-46ea-8ea9-477691df86c6",
    "mockTestId": null
  },
  {
    "question": "Developed countries have made adequate provisions for social security for senior citizens. State insurers (as well as private ones) offer medicare and pension benefits to people who can no longer earn. In India, with the collapse of the joint family system, the traditional shelter of the elderly has disappeared. And a State faced with a financial crunch is not in a position to provide social security. So, it is advisable that the working population give serious thought to building a financial base for itself.Which one of the following, if it were to happen, weakens the conclusion drawn in the above passage the most?",
    "options": {
      "A": "The investable income of the working population, as a proportion of its total income, will grow in the future.",
      "B": "The insurance sector is underdeveloped and trends indicate that it will be extensively privatized in the future.",
      "C": "India is on a path of development that will take it to a developed country status, with all its positive and negative implications.",
      "D": "If the working population builds a stronger financial base, there will be a revival of the joint family system."
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "943d608a-f97c-46ea-8ea9-477691df86c6",
    "mockTestId": null
  },
  {
    "question": "Various studies have shown that our forested and hilly regions and, in general, areas where biodiversity—as reflected in the variety of flora—is high, are the places where poverty appears to be high. And these same areas are also the ones where educational performance seems to be poor. Therefore, it may be surmised that, even disregarding poverty status, richness in biodiversity goes hand in hand with educational backwardness.Which one of the following statements, if true, can be said to best provide supporting evidence for the surmise mentioned in the passage?",
    "options": {
      "A": "In regions where there is little variety in flora, educational performance is seen to be as good as in regions with high variety in flora, when poverty levels are high.",
      "B": "Regions which show high biodiversity also exhibit poor educational performance, at low levels of poverty.",
      "C": "Regions which show high biodiversity reveal high levels of poverty and poor educational performance.",
      "D": "In regions where there is low biodiversity, at all levels of poverty, educational performance is seen to be good."
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "943d608a-f97c-46ea-8ea9-477691df86c6",
    "mockTestId": null
  },
  {
    "question": "Cigarettes constitute a mere 20% of tobacco consumption in India, and fewer than 15% of the 200 million tobacco users consume cigarettes., Yet these 15% contribute nearly 90% of the tax revenues to the Exchequer from the tobacco sector. The punitive cigarette taxation regime has kept the tax base narrow, and reducing taxes will expand this base.Which one of the following best bolsters the conclusion that reducing duties will expand the tax base'?",
    "options": {
      "A": "The cigarette manufacturers’ association has decided to indulge in aggressive promotion.",
      "B": "There is a likelihood that tobacco consumers will shift to cigarette smoking if cigarette prices were to reduce.",
      "C": "The cigarette manufacturers are lobbying for a reduction on duties.",
      "D": "An increase in duties on non-cigarette tobacco may lead to a shift in favour of cigarette smoking."
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "943d608a-f97c-46ea-8ea9-477691df86c6",
    "mockTestId": null
  },
  {
    "question": "Thomas Malthus, the British clergyman turned economist, predicted that the planet would not be able to support the human population for long. His explanation was that human population grows at a geometric rate, while the food supply grows only at an arithmetic rate.Which one of the following, if true, would not undermine the thesis offered by Malthus?",
    "options": {
      "A": "Population growth can be slowed down by the voluntary choices of individuals and not just by natural disasters.",
      "B": "The capacity of the planet to feed a growing human population can be enhanced through biotechnological means.",
      "C": "Human systems, and natural systems like food supply, follow natural laws of growth which have remained constant, and will remain unchanged.",
      "D": "Human beings can colonize other planetary systems on a regular and on-going basis to accommodate a growing population."
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "943d608a-f97c-46ea-8ea9-477691df86c6",
    "mockTestId": null
  },
  {
    "question": "The company's coffee crop for 1998-99 totalled 8079 tonnes, an all time record. The increase over the previous year's production of 5830 tonnes was 38.58%. The previous highest crop was 6089 tonnes in 1970-71. The company had fixed a target of 8000 tonnes to be realized by the year 2000-01, and this has been achieved two years earlier, thanks to the emphasis laid on the key areas of irrigation, replacement of unproductive coffee bushes, intensive refilling and improved agricultural practices. It is now our endeavour to reach the target of 10000 tonnes in the year 2001-02. Which one of the following would contribute most to making the target of 10000 tonnes in 2001-02 unrealistic?",
    "options": {
      "A": "The potential of the productivity enhancing measures implemented up to now has been exhausted.",
      "B": "The total company land under coffee has remained constant since 1969 when an estate in the Nilgiri Hills was acquired.",
      "C": "The sensitivity of the crop to climatic factors makes predictions about production uncertain.",
      "D": "The target-setting procedures in the company have been proved to be sound by the achievement of the 8000 tonne target."
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "943d608a-f97c-46ea-8ea9-477691df86c6",
    "mockTestId": null
  },
  {
    "question": "Animals in general are shrewd in proportion as they cultivate society. Elephants and beavers show the greatest signs of this sagacity when they are together in large numbers, but when man invades their communities they lose all their spirit of industry. Among insects, the labours of the bee and the ant have attracted the attention and admiration of naturalists, but all their sagacity seems to be lost upon separation, and a single bee or ant seems destitute of every degree of industry. It becomes the most stupid insect imaginable, and it languishes and soon dies.Which of the following can be inferred from the above passage?",
    "options": {
      "A": "Humankind is responsible for the destruction of the natural habitat of animals and insects.",
      "B": "Animals, in general, are unable to function effectively outside their normal social environment.",
      "C": "Naturalists have great admiration for bees and ants, despite their lack of industry upon separation.",
      "D": "Elephants and beavers are smarter than bees and ants in the presence of human beings."
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "943d608a-f97c-46ea-8ea9-477691df86c6",
    "mockTestId": null
  },
  {
    "question": "Efficiency is all right in its place, in the shop, the factory, the store. The trouble with efficiency is that it wants to rule our play as well as our work; it won't be content to reign in the shop, it follows us home. It can be inferred from the above passage that",
    "options": {
      "A": "efficiency can become all-pervading.",
      "B": "efficiency does not always pay.",
      "C": "efficiency can be more of a torture than a blessing.",
      "D": "None of these"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "943d608a-f97c-46ea-8ea9-477691df86c6",
    "mockTestId": null
  },
  {
    "question": "In order to ease the traffic congestion, the transport planners decided to have a sophisticated system of elevated monorail travel in the city. However, it was pointed out by somebody that a metro rail system would be a more effective solution to the traffic problem. The plan was thus stalled. Moreover, since a budget had not been drawn up for the project, it was deemed fit to stall the work of the monorail for some time. In the meanwhile, the traffic planners of the city decided to build an efficient system of subways and flyovers in the city with the aim of easing the same problem. At the instant when the planners were preparing to award the contracts to the concerned parties, the transport planners came up with the contention that the subways interfered with the site of a pillar of the monorail system. The traffic planners had to give up the idea and think of other possible solutions.Which of the following can we infer from the above passage?",
    "options": {
      "A": "The city authorities felt that the monorail system was essentially impractical.",
      "B": "There is a strong contention between the two groups of planners in the city.",
      "C": "The projects would be stalled for an indefinite period.",
      "D": "None of these"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "943d608a-f97c-46ea-8ea9-477691df86c6",
    "mockTestId": null
  },
  {
    "question": "The company encourages its managers to interact regularly, without a pre-set agenda, to discuss issues concerning the company and society. This idea has been borrowed from the ancient Indian concept of religious congregation, called satsang. Designations are forgotten during these meetings; hence, it is not uncommon in these meetings to find a sales engineer questioning the CEO on some corporate policy or his knowledge of customers. Based on the information provided in the above passage, it can be inferred that",
    "options": {
      "A": "the company is concerned about its reputation with its employees.",
      "B": "the company believes in fostering the spirit of dialogue without degenerating it into a positioning based debate.",
      "C": "the company had some inter-personnel problems in the past due to which it felt the need for these corporate satsangs.",
      "D": "All of these"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "943d608a-f97c-46ea-8ea9-477691df86c6",
    "mockTestId": null
  },
  {
    "question": "The total sales (in ₹ million) in 2019 from products in office supplies category is closest to",
    "options": {
      "A": "18.0",
      "B": "16.5",
      "C": "13.5",
      "D": "12.5"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "b1621f32-4c55-4344-9e5b-a7d204abea00",
    "mockTestId": null
  },
  {
    "question": "The percentage increase in sales in Furniture category from 2019 to 2020 is closest to",
    "options": {
      "A": "20%",
      "B": "8%",
      "C": "25%",
      "D": "1%"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "b1621f32-4c55-4344-9e5b-a7d204abea00",
    "mockTestId": null
  },
  {
    "question": "The improvement index for a category is the maximum percentage increase in sales from 2019 to 2020 among any of its subcategories. The correct order of categories in increasing order of this improvement index is",
    "options": {
      "A": "furniture, technology, office supply",
      "B": "technology, furniture, office supply",
      "C": "office supply, technology, furniture",
      "D": "office supply, furniture, technology"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "b1621f32-4c55-4344-9e5b-a7d204abea00",
    "mockTestId": null
  },
  {
    "question": "The number of times in which the composition of team T2 and the number of times in which composition of team T4 remained unchanged in two successive months are:",
    "options": {
      "A": "(2,1)",
      "B": "(1,0)",
      "C": "(0,0)",
      "D": "(1,1)"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "b1621f32-4c55-4344-9e5b-a7d204abea00",
    "mockTestId": null
  },
  {
    "question": "The number of SE in T1 and T5 for the projects in the third month are, respectively:",
    "options": {
      "A": "(0,2)",
      "B": "(0,3)",
      "C": "(1,2)",
      "D": "(1,3)"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "b1621f32-4c55-4344-9e5b-a7d204abea00",
    "mockTestId": null
  },
  {
    "question": "Which of the following CANNOT be the total credit points earned by any employee from the projects?",
    "options": {
      "A": "140",
      "B": "150",
      "C": "170",
      "D": "200"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "b1621f32-4c55-4344-9e5b-a7d204abea00",
    "mockTestId": null
  },
  {
    "question": "One of the employees named Aneek scored 185 points. Which of the following CANNOT be true?",
    "options": {
      "A": "Aneek worked only in teams T1, T2, T3, and T4.",
      "B": "Aneek worked only in teams T1,T2, T4, and T5.",
      "C": "Aneek worked only in teams T2,T3, T4, and T5.",
      "D": "Aneek worked only in teams T1,T3, T4, and T5."
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "b1621f32-4c55-4344-9e5b-a7d204abea00",
    "mockTestId": null
  },
  {
    "question": "What is the approximate cost per unit in rupees, if the company produces and sells 1400 units in the year 2007?",
    "options": {
      "A": "104",
      "B": "107",
      "C": "110",
      "D": "115",
      "E": "116"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "b1621f32-4c55-4344-9e5b-a7d204abea00",
    "mockTestId": null
  },
  {
    "question": "What is the minimum number of units that the company needs to produce and sell to avoid any loss?",
    "options": {
      "A": "313",
      "B": "350",
      "C": "384",
      "D": "747",
      "E": "928"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "b1621f32-4c55-4344-9e5b-a7d204abea00",
    "mockTestId": null
  },
  {
    "question": "If the company reduces the price by 5%, it can produce and sell as many units as it desires. How many units the company should produce to maximize its profit?",
    "options": {
      "A": "1400",
      "B": "1600",
      "C": "1800",
      "D": "1900",
      "E": "2000"
    },
    "answer": "E",
    "type": "Multiple Choice",
    "topicId": "b1621f32-4c55-4344-9e5b-a7d204abea00",
    "mockTestId": null
  },
  {
    "question": "Given that the company cannot sell more than 1700 units, and it will have to reduce the price by Rs.5 for all units if it wants to sell more than 1400 units. What is the maximum profit that can be realized provided that the company sells more than 1400 units?",
    "options": {
      "A": "25,400",
      "B": "24,400",
      "C": "31,400",
      "D": "32,900",
      "E": "32,000"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "b1621f32-4c55-4344-9e5b-a7d204abea00",
    "mockTestId": null
  },
  {
    "question": "How many times was the issue of securities under-subscribed, i.e., how often did the total amount mobilized fall short of the amount notified?",
    "options": {
      "A": "0",
      "B": "1",
      "C": "2",
      "D": "3"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "b1621f32-4c55-4344-9e5b-a7d204abea00",
    "mockTestId": null
  },
  {
    "question": "Which of the following is true?",
    "options": {
      "A": "The second round issues have a higher maturity than the first round for all dates.",
      "B": "The second round issue of any date has a lower maturity only when the first round notified amount exceeds that of the second round.",
      "C": "On at least one occasion, the second round issue having lower maturity received a higher number of competitive bids.",
      "D": "None of the above three statements is true."
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "b1621f32-4c55-4344-9e5b-a7d204abea00",
    "mockTestId": null
  },
  {
    "question": "Which of the following statements is NOT true?",
    "options": {
      "A": "Competitive bids received always exceed non-competitive bids received.",
      "B": "The number of competitive bids accepted does not always exceed the number of non-competitive bids accepted.",
      "C": "The value of competitive bids accepted on any particular date is never higher for higher maturity.",
      "D": "The value of non-competitive bids accepted in the first round is always greater than that in the second round."
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "b1621f32-4c55-4344-9e5b-a7d204abea00",
    "mockTestId": null
  },
  {
    "question": "In which category was the percentage of spam emails increasing but at a decreasing rate?",
    "options": {
      "A": "Financial",
      "B": "Scams",
      "C": "Products",
      "D": "None of the above"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "b1621f32-4c55-4344-9e5b-a7d204abea00",
    "mockTestId": null
  },
  {
    "question": "In the health category, the number of spam emails received in December 2002 as compared to June 2003.",
    "options": {
      "A": "was larger",
      "B": "was smaller",
      "C": "was equal",
      "D": "cannot be determined"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "b1621f32-4c55-4344-9e5b-a7d204abea00",
    "mockTestId": null
  },
  {
    "question": "In the financial category, the number of spam emails received in September 2002 as compared to March 2003.",
    "options": {
      "A": "was larger",
      "B": "was smaller",
      "C": "was equal",
      "D": "cannot be determined"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "b1621f32-4c55-4344-9e5b-a7d204abea00",
    "mockTestId": null
  },
  {
    "question": "How many operations (Spain, North Africa and Middle East,..) of the company accounted for less than 5% of the total revenue earned in 1999?",
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "None of these"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "b1621f32-4c55-4344-9e5b-a7d204abea00",
    "mockTestId": null
  },
  {
    "question": "How many operations (Spain, North Africa and Middle East…) of the company witnessed more than 200% increase in revenue from 1999 to 2000?",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "None of these"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "b1621f32-4c55-4344-9e5b-a7d204abea00",
    "mockTestId": null
  },
  {
    "question": "Who among the following did not appear for the Mathematics examination?",
    "options": {
      "A": "Alva",
      "B": "Carl",
      "C": "Foni",
      "D": "Esha"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "d4d9d7ce-6bf4-4adb-8d77-4e136e87e36b",
    "mockTestId": null
  },
  {
    "question": "Which students did not appear for the English examination?",
    "options": {
      "A": "Carl and Deep",
      "B": "Cannot be determined",
      "C": "Alva and Bithi",
      "D": "Esha and Foni"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "d4d9d7ce-6bf4-4adb-8d77-4e136e87e36b",
    "mockTestId": null
  },
  {
    "question": "What BEST can be concluded about the students who did not appear for the Hindi examination?",
    "options": {
      "A": "Deep and Esha",
      "B": "Alva and Deep",
      "C": "Alva and Esha",
      "D": "Two among Alva, Deep and Esha"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "d4d9d7ce-6bf4-4adb-8d77-4e136e87e36b",
    "mockTestId": null
  },
  {
    "question": "What BEST can be concluded about the students who missed the Science examination?",
    "options": {
      "A": "Bithi and one out of Alva and Deep",
      "B": "Alva and Bithi",
      "C": "Deep and Bithi",
      "D": "Alva and Deep"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "d4d9d7ce-6bf4-4adb-8d77-4e136e87e36b",
    "mockTestId": null
  },
  {
    "question": "Among the following days, the largest fraction of orders booked on which day was lost?",
    "options": {
      "A": "15th",
      "B": "16th",
      "C": "13th",
      "D": "14th"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "d4d9d7ce-6bf4-4adb-8d77-4e136e87e36b",
    "mockTestId": null
  },
  {
    "question": "On which of the following days was the number of orders booked the highest?",
    "options": {
      "A": "12th",
      "B": "15th",
      "C": "13th",
      "D": "14th"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "d4d9d7ce-6bf4-4adb-8d77-4e136e87e36b",
    "mockTestId": null
  },
  {
    "question": "The delivery ratio for a given day is defined as the ratio of the number of orders booked on that day which are delivered on the next day to the number of orders booked on that day which are delivered on the second day after booking. On which of the following days, was the delivery ratio the highest?",
    "options": {
      "A": "15th",
      "B": "16th",
      "C": "13th",
      "D": "14th"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "d4d9d7ce-6bf4-4adb-8d77-4e136e87e36b",
    "mockTestId": null
  },
  {
    "question": "The average time taken to deliver orders booked on a particular day is computed as follows. Let the number of orders delivered the next day be x and the number of orders delivered the day after be y. Then the average time to deliver order is $$\\frac{(x+2y)}{(x+y)}$$. On which of the following days was the average time taken to deliver orders booked the least?",
    "options": {
      "A": "15th",
      "B": "13th",
      "C": "14th",
      "D": "16th"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "d4d9d7ce-6bf4-4adb-8d77-4e136e87e36b",
    "mockTestId": null
  },
  {
    "question": "What is the approximate percentage change in the average gross of the HR department due to transfer of a 40-year old person with basic pay of Rs. 8000 from the Marketing department?",
    "options": {
      "A": "9%",
      "B": "11%",
      "C": "13%",
      "D": "15%",
      "E": "17%"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "d4d9d7ce-6bf4-4adb-8d77-4e136e87e36b",
    "mockTestId": null
  },
  {
    "question": "There was a mutual transfer of an employee between Marketing and Finance departments and transfer of one employee from Marketing to HR. As a result, the average age of finance department increased by one year and that of Marketing department remained the same. What is the new average age of HR department?",
    "options": {
      "A": "30",
      "B": "35",
      "C": "40",
      "D": "45",
      "E": "cannot be determined"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "d4d9d7ce-6bf4-4adb-8d77-4e136e87e36b",
    "mockTestId": null
  },
  {
    "question": "If two employees (each with a basic pay of Rs. 6000) are transferred from Maintenance department to HR department and one person (with a basic pay of Rs. 8000) was transferred from Marketing department to HR department, what will be the percentage change in average basic pay of HR department?",
    "options": {
      "A": "10.5%",
      "B": "12.5%",
      "C": "15%",
      "D": "30%",
      "E": "40%"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "d4d9d7ce-6bf4-4adb-8d77-4e136e87e36b",
    "mockTestId": null
  },
  {
    "question": "What is the lowest possible fare, in rupees, from A to J?",
    "options": {
      "A": "2275",
      "B": "2850",
      "C": "2890",
      "D": "2930",
      "E": "3340"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "d4d9d7ce-6bf4-4adb-8d77-4e136e87e36b",
    "mockTestId": null
  },
  {
    "question": "The company plans to introduce a direct flight between A and J. The market research results indicate that all its existing passengers travelling between A and J will use this direct flight if it is priced 5% below the minimum price that they pay at present. What should the company charge approximately, in rupees, for this direct flight?",
    "options": {
      "A": "1991",
      "B": "2161",
      "C": "2707",
      "D": "2745",
      "E": "2783"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "d4d9d7ce-6bf4-4adb-8d77-4e136e87e36b",
    "mockTestId": null
  },
  {
    "question": "If the airports C, D and H are closed down owing to security reasons, what would be the minimum price, in rupees, to be paid by a passenger travelling from A to J?",
    "options": {
      "A": "2275",
      "B": "2615",
      "C": "2850",
      "D": "2945",
      "E": "3190"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "d4d9d7ce-6bf4-4adb-8d77-4e136e87e36b",
    "mockTestId": null
  },
  {
    "question": "If the prices include a margin of 10% over the total cost that the company incurs, what is the minimum cost per kilometer that the company incurs in flying from A to J?",
    "options": {
      "A": "0.77",
      "B": "0.88",
      "C": "0.99",
      "D": "1.06",
      "E": "1.08"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "d4d9d7ce-6bf4-4adb-8d77-4e136e87e36b",
    "mockTestId": null
  },
  {
    "question": "If the prices include a margin of 15% over the total cost that the company incurs, which among the following is the distance to be covered in flying from A to J that minimizes the total cost of travel for the company?",
    "options": {
      "A": "2170",
      "B": "2180",
      "C": "2315",
      "D": "2350",
      "E": "2390"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "d4d9d7ce-6bf4-4adb-8d77-4e136e87e36b",
    "mockTestId": null
  },
  {
    "question": "How much did Dipan get in English Paper II?",
    "options": {
      "A": "94",
      "B": "96.5",
      "C": "97",
      "D": "98",
      "E": "99"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "d4d9d7ce-6bf4-4adb-8d77-4e136e87e36b",
    "mockTestId": null
  },
  {
    "question": "Students who obtained Group Scores of at least 95 in every group are eligible to apply for a prize. Among those who are eligible, the student obtaining the highest Group Score in Social Science Group is awarded this prize. The prize was awarded to:",
    "options": {
      "A": "Shreya",
      "B": "Ram",
      "C": "Ayesha",
      "D": "Dipan",
      "E": "no one from the top ten"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "d4d9d7ce-6bf4-4adb-8d77-4e136e87e36b",
    "mockTestId": null
  },
  {
    "question": "The sequence of categories -- Art, Binders, Paper and Phones -- in decreasing order of average processing time of their orders in this period is:",
    "options": {
      "A": "Art, Binders, Paper, Phones",
      "B": "Phones, Art, Binders, Paper",
      "C": "Phones, Binders, Art, Paper",
      "D": "Paper, Binders, Art, Phones"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "dc921046-527b-4df7-bb90-f549103430e8",
    "mockTestId": null
  },
  {
    "question": "Approximately what percentage of orders had a processing time of one day during the period Sep 1 to Sep 22 (both dates inclusive)?",
    "options": {
      "A": "22%",
      "B": "16%",
      "C": "20%",
      "D": "25%"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "dc921046-527b-4df7-bb90-f549103430e8",
    "mockTestId": null
  },
  {
    "question": "Which of the following statements is/are true?I: The total project-month was the same for the four employees.II: The total employee-month was the same for the five projects.",
    "options": {
      "A": "Only II",
      "B": "Both I and II",
      "C": "Neither I nor II",
      "D": "Only I"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "dc921046-527b-4df7-bb90-f549103430e8",
    "mockTestId": null
  },
  {
    "question": "Which employees did not work in multiple projects for any of the months in 2020?",
    "options": {
      "A": "Only Abani, Bahni and Danni",
      "B": "Only Abani and Bahni",
      "C": "All four of them",
      "D": "Only Tinni"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "dc921046-527b-4df7-bb90-f549103430e8",
    "mockTestId": null
  },
  {
    "question": "The project duration, measured in terms of the number of months, is the time during which at least one employee worked in the project. Which of the following pairs of the projects had the same duration?",
    "options": {
      "A": "Project 1, Project 5",
      "B": "Project 4, Project 5",
      "C": "Project 3, Project 5",
      "D": "Project 3, Project 4"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "dc921046-527b-4df7-bb90-f549103430e8",
    "mockTestId": null
  },
  {
    "question": "The list of employees in decreasing order of annual completion index is:",
    "options": {
      "A": "Danni, Tinni, Bahni, Abani",
      "B": "Bahni, Abani, Tinni, Danni",
      "C": "Danni, Tinni, Abani, Bahni",
      "D": "Tinni, Danni, Abani, Bahni"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "dc921046-527b-4df7-bb90-f549103430e8",
    "mockTestId": null
  },
  {
    "question": "What is the number of Matches played by the champion?A. The entry list for the tournament consists of 83 players?B. The champion received one bye.",
    "options": {
      "A": "Q can be answered from A alone but not from B alone.",
      "B": "Q can be answered from B alone but not from A alone.",
      "C": "Q can be answered from A alone as well as from B alone.",
      "D": "Q can be answered from A and B together but not from any of them alone.",
      "E": "Q cannot be answered even from A and B together."
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "d1bdc0e4-ac1e-49eb-ac04-57a524c9fb7e",
    "mockTestId": null
  },
  {
    "question": "If the number of players, say n, in the first round was between 65 and 128, then what is the exact value of n?A. Exactly one player received a bye in the entire tournament.B. One player received a bye while moving on to the fourth round from the third round.",
    "options": {
      "A": "Q can be answered from A alone but not from B alone.",
      "B": "Q can be answered from B alone but not from A alone.",
      "C": "Q can be answered from A alone as well as from B alone.",
      "D": "Q can be answered from A and B together but not from any of them alone.",
      "E": "Q cannot be answered even from A and B together."
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "d1bdc0e4-ac1e-49eb-ac04-57a524c9fb7e",
    "mockTestId": null
  },
  {
    "question": "In a particular school, sixty students were athletes. Ten among them were also among the top academic performers. How many top academic performers were in the school?A. Sixty per cent of the top academic performers were not athletes.B. All the top academic performers were not necessarily athletes.",
    "options": {
      "A": "The question can be answered by using the statement A alone but not by using the statement B alone.",
      "B": "The question can be answered by using the statement B alone but not by using the statement A alone.",
      "C": "The question can be answered by using either of the statements alone",
      "D": "The question can be answered by using both the statements together but not by either of the statements alone.",
      "E": "The question cannot be answered on the basis of the two statements."
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "d1bdc0e4-ac1e-49eb-ac04-57a524c9fb7e",
    "mockTestId": null
  },
  {
    "question": "Five students Atul, Bala, Chetan, Dev and Ernesto were the only ones who participated in a quiz contest. They were ranked based on their scores in the contest. Dev got a higher rank as compared to Ernesto, while Bala got a higher rank as compared to Chetan. Chetan’s rank was lower than the median. Who among the five got the highest rank?A. Atul was the last rank holder.B. Bala was not among the top two rank holders.",
    "options": {
      "A": "The question can be answered by using the statement A alone but not by using the statement B alone.",
      "B": "The question can be answered by using the statement B alone but not by using the statement A alone.",
      "C": "The question can be answered by using either of the statements alone.",
      "D": "The question can be answered by using both the statements together but not by either of the statements alone.",
      "E": "The question cannot be answered on the basis of the two statements."
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "d1bdc0e4-ac1e-49eb-ac04-57a524c9fb7e",
    "mockTestId": null
  },
  {
    "question": "Thirty per cent of the employees of a call centre are males. Ten per cent of the female employees have an engineering background. What is the percentage of male employees with engineering background?A. Twenty five per cent of the employees have engineering background.B. Number of male employees having an engineering background is 20% more than the number of female employees having an engineering background",
    "options": {
      "A": "The question can be answered by using the statement A alone but not by using the statement B alone.",
      "B": "The question can be answered by using the statement B alone but not by using the statement A alone.",
      "C": "The question can be answered by using either of the statements alone.",
      "D": "The question can be answered by using both the statements together but not by either of the statements alone.",
      "E": "The question cannot be answered on the basis of the two statements."
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "d1bdc0e4-ac1e-49eb-ac04-57a524c9fb7e",
    "mockTestId": null
  },
  {
    "question": "In a football match, at the half-time, Mahindra and Mahindra Club was trailing by three goals. Did it win the match?A. In the second-half Mahindra and Mahindra Club scored four goals.B. The opponent scored four goals in the match.",
    "options": {
      "A": "The question can be answered by using the statement A alone but not by using the statement B alone.",
      "B": "The question can be answered by using the statement B alone but not by using the statement A alone.",
      "C": "The question can be answered by using either of the statements alone.",
      "D": "The question can be answered by using both the statements together but not by either of the statements alone.",
      "E": "The question cannot be answered on the basis of the two statements."
    },
    "answer": "E",
    "type": "Multiple Choice",
    "topicId": "d1bdc0e4-ac1e-49eb-ac04-57a524c9fb7e",
    "mockTestId": null
  },
  {
    "question": "The average weight of a class of 100 students is 45 kg. The class consists of two sections, I and II, each with 50 students. The average weight, $$W_I$$ , of Section I is smaller than the average weight, $$W_{II}$$ , of Section II. If the heaviest student, say Deepak, of Section II is moved to Section I, and the lightest student, say Poonam, of Section I is moved to Section II, then the average weights of the two sections are switched, i.e., the average weight of Section I becomes $$W_{II}$$ and that of Section II becomes $$W_I$$ . What is the weight of Poonam?A: $$W_{II} - W_I = 1.0 $$B: Moving Deepak from Section II to I (without any move from I to II) makes the average weights of the two sections equal.",
    "options": {
      "A": "The question can be answered using A alone but not using B alone.",
      "B": "The question can be answered using B alone but not using A alone.",
      "C": "The question can be answered using A and B together, but not using either A or B alone.",
      "D": "The question cannot be answered even using A and B together.",
      "E": "None of these"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "d1bdc0e4-ac1e-49eb-ac04-57a524c9fb7e",
    "mockTestId": null
  },
  {
    "question": "ABC Corporation is required to maintain at least 400 Kilolitres of water at all times in its factory, in order to meet safety and regulatory requirements. ABC is considering the suitability of a spherical tank with uniform wall thickness for the purpose. The outer diameter of the tank is 10 meters. Is the tank capacity adequate to meet ABC’s requirements?A: The inner diameter of the tank is at least 8 meters.B: The tank weighs 30,000 kg when empty, and is made of a material with density of 3 gm/cc.",
    "options": {
      "A": "The question can be answered using A alone but not using B alone.",
      "B": "The question can be answered using B alone but not using A alone.",
      "C": "The question can be answered using A and B together, but not using either A or B alone.",
      "D": "The question cannot be answered even using A and B together.",
      "E": "None of these"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "d1bdc0e4-ac1e-49eb-ac04-57a524c9fb7e",
    "mockTestId": null
  },
  {
    "question": "Consider integers x, y and z. What is the minimum possible value of $$x^2 + y^2 + z^2$$?A: x + y + z = 89B: Among x, y, z two are equal.",
    "options": {
      "A": "The question can be answered using A alone but not using B alone.",
      "B": "The question can be answered using B alone but not using A alone.",
      "C": "The question can be answered using A and B together, but not using either A or B alone.",
      "D": "The question cannot be answered even using A and B together.",
      "E": "None of these"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "d1bdc0e4-ac1e-49eb-ac04-57a524c9fb7e",
    "mockTestId": null
  },
  {
    "question": "Rahim plans to draw a square JKLM with a point O on the side JK but is not successful. Why is Rahim unable to draw the square?A: The length of OM is twice that of OL.B: The length of OM is 4 cm",
    "options": {
      "A": "The question can be answered using A alone but not using B alone.",
      "B": "The question can be answered using B alone but not using A alone.",
      "C": "The question can be answered using A and B together, but not using either A or B alone.",
      "D": "The question cannot be answered even using A and B together.",
      "E": "None of these"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "d1bdc0e4-ac1e-49eb-ac04-57a524c9fb7e",
    "mockTestId": null
  },
  {
    "question": "Zakib spends 30% of his income on his children's education, 20% on recreation and 10% on healthcare. The corresponding percentage for Supriyo are 40%, 25%, and 13%. Who spends more on children's education?A. Zakib spends more on recreation than Supriyo.B. Supriyo spends more on healthcare than Zakib.",
    "options": {
      "A": "The question can be answered by using one of the statements alone but not by using the other statement alone.",
      "B": "The question can be answered by using either of the statements alone.",
      "C": "The question can be answered by using both statements together but not by either statement alone.",
      "D": "The question cannot be answered on the basis of the two statements."
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "d1bdc0e4-ac1e-49eb-ac04-57a524c9fb7e",
    "mockTestId": null
  },
  {
    "question": "Four candidates for an award obtain distinct scores in a test. Each of the four casts a vote to choose the winner of the award. The candidate who gets the largest number of votes wins the award. In case of a tie in the voting process, the candidate with the highest score wins the award. Who wins the award?A. The candidates with top three scores each vote for the top score amongst the other three.B. The candidate with the lowest score votes for the player with the second highest score.",
    "options": {
      "A": "The question can be answered by using one of the statements alone but not by using the other statement alone.",
      "B": "The question can be answered by using either of the statements alone.",
      "C": "The question can be answered by using both statements together but not by either statement alone.",
      "D": "The question cannot be answered on the basis of the two statements."
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "d1bdc0e4-ac1e-49eb-ac04-57a524c9fb7e",
    "mockTestId": null
  },
  {
    "question": "In a class of 30 students, Rashmi secured the third rank among the girls, while her brother Kumar studying in the same class secured the sixth rank in the whole class. Between the two, who had a better overall rank?A. Kumar was among the top 25% of the boys merit list in the class in which 60% were boys.B. There were three boys among the top five rank holders, and three girls among the top ten rank holders.",
    "options": {
      "A": "The question can be answered by using one of the statements alone but not by using the other statement alone.",
      "B": "The question can be answered by using either of the statements alone.",
      "C": "The question can be answered by using both statements together but not by either statement alone.",
      "D": "The question cannot be answered on the basis of the two statements."
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "d1bdc0e4-ac1e-49eb-ac04-57a524c9fb7e",
    "mockTestId": null
  },
  {
    "question": "Tarak is standing 2 steps to the left of a red mark and 3 steps to the right of a blue mark. He tosses a coin. If it comes up heads, he moves one step to the right; otherwise he moves one step to the left. He keeps doing this until he reaches one of the two marks, and then he stops.At which mark does he stop?A. He stops after 21 coin tosses.B. He obtains three more tails than heads.",
    "options": {
      "A": "The question can be answered by using one of the statements alone but not by using the other statement alone.",
      "B": "The question can be answered by using either of the statements alone.",
      "C": "The question can be answered by using both statements together but not by either statement alone.",
      "D": "The question cannot be answered on the basis of the two statements."
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "d1bdc0e4-ac1e-49eb-ac04-57a524c9fb7e",
    "mockTestId": null
  },
  {
    "question": "Ravi spent less than Rs. 75 to buy one kilogram each of potato, onion, and gourd. Which one of the three vegetables bought was the costliest?A. 2 kg potato and 1 kg gourd cost less than 1 kg potato and 2 kg gourd.B. 1 kg potato and 2 kg onion together cost the same as 1 kg onion and 2 kg gourd.",
    "options": {
      "A": "The question can be answered by using one of the statements alone but not by using the other statement alone.",
      "B": "The question can be answered by using either of the statements alone.",
      "C": "The question can be answered by using both statements together but not by either statement alone.",
      "D": "The question cannot be answered on the basis of the two statements."
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "d1bdc0e4-ac1e-49eb-ac04-57a524c9fb7e",
    "mockTestId": null
  },
  {
    "question": "Nandini paid for an article using currency notes of denominations Re. 1, Rs. 2, Rs. 5, and Rs. 10 using at least one note of each denomination. The total number of five and ten rupee notes used was one more than the total number of one and two rupee notes used. What was the price of the article?A. Nandini used a total of 13 currency notes.B. The price of the article was a multiple of Rs. 10.",
    "options": {
      "A": "The question can be answered by using one of the statements alone but not by using the other statement alone.",
      "B": "The question can be answered by using either of the statements alone.",
      "C": "The question can be answered by using both statements together but not by either statement alone.",
      "D": "The question cannot be answered on the basis of the two statements."
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "d1bdc0e4-ac1e-49eb-ac04-57a524c9fb7e",
    "mockTestId": null
  },
  {
    "question": "F and M are father and mother of S, respectively. S has four uncles and three aunts. F has two siblings. The siblings of F and M are unmarried. How many brothers does M have?A. F has two brothers.B. M has five siblings.",
    "options": {
      "A": "The questions can be answered by one of the statements, but not by the other",
      "B": "The question can be answered using either of the two statements alone.",
      "C": "The questions can be answered using both the statements together, but cannot be answered using either statement alone.",
      "D": "The question cannot be answered even by using both the statements together."
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "d1bdc0e4-ac1e-49eb-ac04-57a524c9fb7e",
    "mockTestId": null
  },
  {
    "question": "A game consists of tossing a coin successively. There is an entry fee of Rs. 10 and an additional fee of Re. 1 for each toss of coin. The game is considered to have ended normally when the coin turns heads on two consecutive throws. In this case the player is paid Rs. 100. Alternatively, the player can choose to terminate the game prematurely after any of the tosses. Ram has incurred a loss of Rs. 50 by playing this game. How many times did he toss the coin?A. The game ended normally.B. The total number of tails obtained in the game was 138.",
    "options": {
      "A": "The questions can be answered by one of the statements, but not by the other",
      "B": "The question can be answered using either of the two statements alone.",
      "C": "The questions can be answered using both the statements together, but cannot be answered using either statement alone.",
      "D": "The question cannot be answered even by using both the statements together."
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "d1bdc0e4-ac1e-49eb-ac04-57a524c9fb7e",
    "mockTestId": null
  },
  {
    "question": "Each packet of SOAP costs Rs. 10. Inside each packet is a gift coupon labelled with one of the letters S, O, A and P. If a customer submits four such coupons that make up the word SOAP, the customer gets a free SOAP packets. Ms. X kept buying packet after packet of SOAP till she could get one set of coupons that formed the word SOAP. How many coupons with label P did she get in the above process?A. The last label obtained by her was S and the total amount spent was Rs. 210.B. The total number of vowels obtained was 18.",
    "options": {
      "A": "The questions can be answered by one of the statements, but not by the other",
      "B": "The question can be answered using either of the two statements alone.",
      "C": "The questions can be answered using both the statements together, but cannot be answered using either statement alone.",
      "D": "The question cannot be answered even by using both the statements together."
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "d1bdc0e4-ac1e-49eb-ac04-57a524c9fb7e",
    "mockTestId": null
  },
  {
    "question": "If A and B run a race, then A wins by 60 seconds. If B and C run the same race, then B wins by 30 seconds. Assuming that C maintains a uniform speed what is the time taken by C to finish the race?A. A and C run the same race and A wins by 375 metres.B. The length of the race is 1 km.",
    "options": {
      "A": "The questions can be answered by one of the statements, but not by the other",
      "B": "The question can be answered using either of the two statements alone.",
      "C": "The questions can be answered using both the statements together, but cannot be answered using either statement alone.",
      "D": "The question cannot be answered even by using both the statements together."
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "d1bdc0e4-ac1e-49eb-ac04-57a524c9fb7e",
    "mockTestId": null
  },
  {
    "question": "In 2000, what was the ratio of the number of dead males to dead females among those being tracked?",
    "options": {
      "A": "71 : 69",
      "B": "41 : 43",
      "C": "129 : 131",
      "D": "109 : 107"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "cd5e8d02-9c2e-48c9-a2ee-e31c4c8fbc7d",
    "mockTestId": null
  },
  {
    "question": "How many people who were being tracked and who were between 30 and 40 years of age in 1980 survived until 2010?",
    "options": {
      "A": "110",
      "B": "90",
      "C": "190",
      "D": "310"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "cd5e8d02-9c2e-48c9-a2ee-e31c4c8fbc7d",
    "mockTestId": null
  },
  {
    "question": "How many individuals who were being tracked and who were less than 30 years of age in 1980 survived until 2020?",
    "options": {
      "A": "240",
      "B": "580",
      "C": "470",
      "D": "230"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "cd5e8d02-9c2e-48c9-a2ee-e31c4c8fbc7d",
    "mockTestId": null
  },
  {
    "question": "In the two states where the highest total number of cases are registered, the ratio of the total number of cases in IPC crimes to the total number in SLL crimes is closest to",
    "options": {
      "A": "3 : 2",
      "B": "19 : 20",
      "C": "11 : 10",
      "D": "1 : 9"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "cd5e8d02-9c2e-48c9-a2ee-e31c4c8fbc7d",
    "mockTestId": null
  },
  {
    "question": "Which of the following is DEFINITELY true about the ranks of states/UT in the ‘other crimes’ category?i) Tamil Nadu: 2ii) Puducherry: 3",
    "options": {
      "A": "both i) and ii)",
      "B": "only ii)",
      "C": "neither i) , nor ii)",
      "D": "only i)"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "cd5e8d02-9c2e-48c9-a2ee-e31c4c8fbc7d",
    "mockTestId": null
  },
  {
    "question": "What is the percentage increase in sales in December 2017 as compared to the sales in December 2016?",
    "options": {
      "A": "38.46",
      "B": "22.22",
      "C": "28.57",
      "D": "50.00"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "cd5e8d02-9c2e-48c9-a2ee-e31c4c8fbc7d",
    "mockTestId": null
  },
  {
    "question": "In which quarter of 2017 was the percentage increase in sales from the same quarter of 2016 the highest?",
    "options": {
      "A": "Q2",
      "B": "Q1",
      "C": "Q4",
      "D": "Q3"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "cd5e8d02-9c2e-48c9-a2ee-e31c4c8fbc7d",
    "mockTestId": null
  },
  {
    "question": "During which quarter was the percentage decrease in sales from the previous quarter’s sales the highest?",
    "options": {
      "A": "Q2 of 2017",
      "B": "Q4 of 2017",
      "C": "Q2 of 2016",
      "D": "Q1 of 2017"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "cd5e8d02-9c2e-48c9-a2ee-e31c4c8fbc7d",
    "mockTestId": null
  },
  {
    "question": "During which month was the percentage increase in sales from the previous month’s sales the highest?",
    "options": {
      "A": "March of 2017",
      "B": "October of 2017",
      "C": "March of 2016",
      "D": "October of 2016"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "cd5e8d02-9c2e-48c9-a2ee-e31c4c8fbc7d",
    "mockTestId": null
  },
  {
    "question": "Benga and Delma, two countries categorized as happy, are tied with the same total score. What is themaximum score they can have?",
    "options": {
      "A": "14",
      "B": "15",
      "C": "16",
      "D": "17"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "cd5e8d02-9c2e-48c9-a2ee-e31c4c8fbc7d",
    "mockTestId": null
  },
  {
    "question": "If Benga scores 16 and Delma scores 15, then what is the maximum number of countries with a score of 13?",
    "options": {
      "A": "0",
      "B": "1",
      "C": "2",
      "D": "3"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "cd5e8d02-9c2e-48c9-a2ee-e31c4c8fbc7d",
    "mockTestId": null
  },
  {
    "question": "The difference between the estimated subscription in Europe in 2008 and what it would have been if it were computed using the percentage growth rate of 2007 (over 2006), is closest to:",
    "options": {
      "A": "50",
      "B": "80",
      "C": "20",
      "D": "10",
      "E": "0"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "cd5e8d02-9c2e-48c9-a2ee-e31c4c8fbc7d",
    "mockTestId": null
  },
  {
    "question": "In 2003, sixty percent of subscribers in Europe were men. Given that women subscribers increase at the rate of 10 percent annum and men at the rate of 5 percent per annum, what is the approximate percentage growth of subscribers between 2003 and 2010 in Europe? The subscription prices are volatile and may change each year.",
    "options": {
      "A": "62",
      "B": "15",
      "C": "78",
      "D": "84",
      "E": "50"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "cd5e8d02-9c2e-48c9-a2ee-e31c4c8fbc7d",
    "mockTestId": null
  },
  {
    "question": "Consider the annual percent change in the gap between subscription revenues in the US and Europe. What is the year in which the absolute value of this change is the highest?",
    "options": {
      "A": "03 - 04",
      "B": "05 - 06",
      "C": "06 - 07",
      "D": "08 - 09",
      "E": "09 - 10"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "cd5e8d02-9c2e-48c9-a2ee-e31c4c8fbc7d",
    "mockTestId": null
  },
  {
    "question": "What percentage of ACs sold were of Non-inverter type?",
    "options": {
      "A": "33.33%",
      "B": "75.00%",
      "C": "25.00%",
      "D": "20.00%"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "13de7735-4cbe-4c3c-9bd1-3fe80b08ed9b",
    "mockTestId": null
  },
  {
    "question": "The COMPLETE list of customers who gave the maximum total rating points to Ravi is",
    "options": {
      "A": "Atal",
      "B": "Bihari",
      "C": "Bihari and Chirag",
      "D": "Atal and Bihari"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "13de7735-4cbe-4c3c-9bd1-3fe80b08ed9b",
    "mockTestId": null
  },
  {
    "question": "What BEST can be concluded about the tip amount given by Deepak?",
    "options": {
      "A": "Either ₹0 or ₹30 or ₹50",
      "B": "Either ₹30 or ₹50",
      "C": "₹50",
      "D": "₹30"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "13de7735-4cbe-4c3c-9bd1-3fe80b08ed9b",
    "mockTestId": null
  },
  {
    "question": "In which parameter did Atal give the maximum rating points to Ravi?",
    "options": {
      "A": "Hygiene",
      "B": "Behaviour",
      "C": "Timeliness",
      "D": "Packaging"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "13de7735-4cbe-4c3c-9bd1-3fe80b08ed9b",
    "mockTestId": null
  },
  {
    "question": "What rating did Deepak give on Packaging?",
    "options": {
      "A": "7",
      "B": "8",
      "C": "5",
      "D": "6"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "13de7735-4cbe-4c3c-9bd1-3fe80b08ed9b",
    "mockTestId": null
  },
  {
    "question": "5 ml of content from bottle A is mixed with 5 ml of content from bottle B. The resultant mixture, when tested, detects the presence of I. If it is known that bottle A contains only P, what BEST can be concluded about the volume of I in bottle B?",
    "options": {
      "A": "1 ml",
      "B": "Less than 1 ml",
      "C": "10 ml",
      "D": "10 ml or more"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "13de7735-4cbe-4c3c-9bd1-3fe80b08ed9b",
    "mockTestId": null
  },
  {
    "question": "There are four bottles. It is known that either one or two of these bottles contain(s) only P, while the remaining ones contain 85% P and 15% I. What is the minimum number of tests required to ascertain the exact number of bottles containing only P?",
    "options": {
      "A": "4",
      "B": "2",
      "C": "3",
      "D": "1"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "13de7735-4cbe-4c3c-9bd1-3fe80b08ed9b",
    "mockTestId": null
  },
  {
    "question": "What BEST can be concluded about the number of units of fruit salad sold in the first hour?",
    "options": {
      "A": "Either 1 or 2.",
      "B": "Either 0 or 1 or 2.",
      "C": "Exactly 2.",
      "D": "Exactly 1."
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "13de7735-4cbe-4c3c-9bd1-3fe80b08ed9b",
    "mockTestId": null
  },
  {
    "question": "Which of the following is NECESSARILY true?",
    "options": {
      "A": "Ganga did not sell any leftover mangoes.",
      "B": "Ganga did not sell any leftover apples.",
      "C": "Narmada sold one unit of leftover milk.",
      "D": "Kaveri sold one unit of leftover mangoes."
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "13de7735-4cbe-4c3c-9bd1-3fe80b08ed9b",
    "mockTestId": null
  },
  {
    "question": "What BEST can be concluded about the total number of units of milk the three women had in the beginning?",
    "options": {
      "A": "Either 19 or 20 units.",
      "B": "Either 18 or 19 or 20 units.",
      "C": "Either 18 or 19 units.",
      "D": "Either 17 or 18 or 19 units."
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "13de7735-4cbe-4c3c-9bd1-3fe80b08ed9b",
    "mockTestId": null
  },
  {
    "question": "If Damodaran does not get a bonus, what is the maximum possible value of his final rating?",
    "options": {
      "A": "3.4",
      "B": "3.2",
      "C": "3.6",
      "D": "3.8"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "13de7735-4cbe-4c3c-9bd1-3fe80b08ed9b",
    "mockTestId": null
  },
  {
    "question": "If Eman gets a bonus, what is the minimum possible value of his final rating?",
    "options": {
      "A": "3.2",
      "B": "2.8",
      "C": "3.4",
      "D": "3.0"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "13de7735-4cbe-4c3c-9bd1-3fe80b08ed9b",
    "mockTestId": null
  },
  {
    "question": "If all five drivers get bonus, what is the minimum possible value of the monthly payment (in rupees) that a driver gets?",
    "options": {
      "A": "1750",
      "B": "1600",
      "C": "1740",
      "D": "1700"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "13de7735-4cbe-4c3c-9bd1-3fe80b08ed9b",
    "mockTestId": null
  },
  {
    "question": "If all five drivers get bonus, what is the maximum possible value of the monthly payment (in rupees) that a driver gets?",
    "options": {
      "A": "1960",
      "B": "2050",
      "C": "1950",
      "D": "1900"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "13de7735-4cbe-4c3c-9bd1-3fe80b08ed9b",
    "mockTestId": null
  },
  {
    "question": "If the number of Old visitors buying Platinum tickets was equal to the number of Middle-aged visitors buying Platinum tickets, then which among the following could be the total number of Platinum tickets sold?",
    "options": {
      "A": "34",
      "B": "36",
      "C": "38",
      "D": "32"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "2bab5ec8-a2a4-4b60-a50e-6369ae68caa7",
    "mockTestId": null
  },
  {
    "question": "Which of the following statements MUST be FALSE?",
    "options": {
      "A": "The numbers of Gold and Platinum tickets bought by Young visitors were equal",
      "B": "The numbers of Middle-aged and Young visitors buying Gold tickets were equal",
      "C": "The numbers of Old and Middle-aged visitors buying Platinum tickets were equal",
      "D": "The numbers of Old and Middle-aged visitors buying Economy tickets were equal"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "2bab5ec8-a2a4-4b60-a50e-6369ae68caa7",
    "mockTestId": null
  },
  {
    "question": "Considering all three years, which company had the highest annual profit?",
    "options": {
      "A": "Company A",
      "B": "Company D",
      "C": "Company B",
      "D": "Company C"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "a1ae3268-7354-4c25-81f7-c2ca51847fb6",
    "mockTestId": null
  },
  {
    "question": "Which of the four companies experienced the highest annual loss in any of the years?",
    "options": {
      "A": "Company C",
      "B": "Company A",
      "C": "Company B",
      "D": "Company D"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "a1ae3268-7354-4c25-81f7-c2ca51847fb6",
    "mockTestId": null
  },
  {
    "question": "The ratio of a company's annual profit to its annual costs is a measure of its performance. Which of the four companies had the lowest value of this ratio in 2019?",
    "options": {
      "A": "Company A",
      "B": "Company D",
      "C": "Company B",
      "D": "Company C"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "a1ae3268-7354-4c25-81f7-c2ca51847fb6",
    "mockTestId": null
  },
  {
    "question": "The total number of employees lost in 2019 and 2020 was the least for:",
    "options": {
      "A": "Company B",
      "B": "Company D",
      "C": "Company A",
      "D": "Company C"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "a1ae3268-7354-4c25-81f7-c2ca51847fb6",
    "mockTestId": null
  },
  {
    "question": "Profit per employee is the ratio of a company's profit to its employee strength. For this purpose, the employee strength in a year is the average of the employee strength at the beginning of that year and the beginning of the next year. In 2020, which of the four companies had the highest profit per employee?",
    "options": {
      "A": "Company D",
      "B": "Company C",
      "C": "Company B",
      "D": "Company A"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "a1ae3268-7354-4c25-81f7-c2ca51847fb6",
    "mockTestId": null
  },
  {
    "question": "On which aspect is the median score of the five vendors the least?",
    "options": {
      "A": "Customer Service",
      "B": "Cost",
      "C": "Reliability",
      "D": "Quality"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "a1ae3268-7354-4c25-81f7-c2ca51847fb6",
    "mockTestId": null
  },
  {
    "question": "A vendor's final score is the average of their scores on all six aspects. Which vendor has the highest final score?",
    "options": {
      "A": "Vendor 4",
      "B": "Vendor 2",
      "C": "Vendor 1",
      "D": "Vendor 3"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "a1ae3268-7354-4c25-81f7-c2ca51847fb6",
    "mockTestId": null
  },
  {
    "question": "List of all the vendors who are among the top two scorers on the maximum number of aspects is:",
    "options": {
      "A": "Vendor 2, Vendor 3 and Vendor 4",
      "B": "Vendor 1 and Vendor 5",
      "C": "Vendor 2 and Vendor 5",
      "D": "Vendor 1 and Vendor 2"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "a1ae3268-7354-4c25-81f7-c2ca51847fb6",
    "mockTestId": null
  },
  {
    "question": "List of all the vendors who are among the top three vendors on all six aspects is:",
    "options": {
      "A": "Vendor 1 and Vendor 3",
      "B": "None of the Vendors",
      "C": "Vendor 3",
      "D": "Vendor 1"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "a1ae3268-7354-4c25-81f7-c2ca51847fb6",
    "mockTestId": null
  },
  {
    "question": "If a ‘Heavy Monsoon State’ is defined as a state with actual rainfall from June-August, 2019 of 900 mm or more, then approximately what percentage of ‘Heavy Monsoon States’ have a negative deviation from respective LPAs in 2019?",
    "options": {
      "A": "42.86",
      "B": "75.00",
      "C": "57.14",
      "D": "14.29"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "a1ae3268-7354-4c25-81f7-c2ca51847fb6",
    "mockTestId": null
  },
  {
    "question": "If a ‘Low Monsoon State’ is defined as a state with actual rainfall from June-August, 2019 of 750 mm or less, then what is the median ‘deviation from LPA’ (as defined in the Y-axis of the figure) of ‘Low Monsoon States’?",
    "options": {
      "A": "-10%",
      "B": "10%",
      "C": "-20%",
      "D": "-30%"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "a1ae3268-7354-4c25-81f7-c2ca51847fb6",
    "mockTestId": null
  },
  {
    "question": "What is the average rainfall of all states that have actual rainfall of 600 mm or less in 2019 and have a negative deviation from LPA?",
    "options": {
      "A": "367 mm",
      "B": "500 mm",
      "C": "450 mm",
      "D": "460 mm"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "a1ae3268-7354-4c25-81f7-c2ca51847fb6",
    "mockTestId": null
  },
  {
    "question": "The LPA of a state for a year is defined as the average rainfall in the preceding 10 years considering the period of June-August. For example, LPA in 2018 is the average rainfall during 2009-2018 and LPA in 2019 is the average rainfall during 2010-2019. It is also observed that the actual rainfall in Gujarat in 2019 is 20% more than the rainfall in 2009. The LPA of Gujarat in 2019 is closest to",
    "options": {
      "A": "475 mm",
      "B": "505 mm",
      "C": "490 mm",
      "D": "525 mm"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "a1ae3268-7354-4c25-81f7-c2ca51847fb6",
    "mockTestId": null
  },
  {
    "question": "What was the ratio of revenue generated from the Produce department in 2017 to that in 2018?",
    "options": {
      "A": "16 : 9",
      "B": "4 : 3",
      "C": "9 : 16",
      "D": "8 : 5"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "a1ae3268-7354-4c25-81f7-c2ca51847fb6",
    "mockTestId": null
  },
  {
    "question": "What was the approximate difference in profit percentages of the store in 2017 and 2018?",
    "options": {
      "A": "15.5",
      "B": "25.0",
      "C": "8.3",
      "D": "33.3"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "a1ae3268-7354-4c25-81f7-c2ca51847fb6",
    "mockTestId": null
  },
  {
    "question": "Considering all companies' products, which product category had the highest revenue?",
    "options": {
      "A": "No-hope",
      "B": "Blockbuster",
      "C": "Doubtful",
      "D": "Promising"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "a1ae3268-7354-4c25-81f7-c2ca51847fb6",
    "mockTestId": null
  },
  {
    "question": "Which of the following is the correct sequence of numbers of products Bravo had in No-hope, Doubtful, Promising and Blockbuster categories respectively?",
    "options": {
      "A": "1,3,1,2",
      "B": "1,3,1,3",
      "C": "3,3,1,2",
      "D": "2,3,1,2"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "a1ae3268-7354-4c25-81f7-c2ca51847fb6",
    "mockTestId": null
  },
  {
    "question": "Which of the following statements is NOT correct?",
    "options": {
      "A": "Alfa's revenue from Blockbuster products was the same as Charlie's revenue from Promising products",
      "B": "Bravo's revenue from Blockbuster products was greater than Alfa's revenue from Doubtful products",
      "C": "Bravo and Charlie had the same revenues from No-hope products",
      "D": "The total revenue from No-hope products was less than the total revenue from Doubtful products"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "a1ae3268-7354-4c25-81f7-c2ca51847fb6",
    "mockTestId": null
  },
  {
    "question": "A US citizen is hurt in an accident and requires an angioplasty, hip replacement and a knee replacement. Cost of foreign travel and stay is not a consideration since the government will take care of it. Which country will result in the cheapest package, taking cost of poor quality into account?",
    "options": {
      "A": "India",
      "B": "Thailand",
      "C": "Malaysia",
      "D": "Singapore",
      "E": "USA"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "506892ed-96ba-4328-bf32-91f5846a1b69",
    "mockTestId": null
  },
  {
    "question": "Taking the cost of poor quality into account, which country/countries will be the most expensive for knee replacement?",
    "options": {
      "A": "India",
      "B": "Thailand",
      "C": "Malaysia",
      "D": "Singapore",
      "E": "India and Singapore"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "506892ed-96ba-4328-bf32-91f5846a1b69",
    "mockTestId": null
  },
  {
    "question": "Approximately, what difference in amount in Bahts will it make to a Thai citizen if she were to get a hysterectomy done in India instead of in her native country, taking into account the cost of poor quality? It costs 7500 Bahts for oneway travel between Thailand and India.",
    "options": {
      "A": "23500",
      "B": "40500",
      "C": "57500",
      "D": "67500",
      "E": "75000"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "506892ed-96ba-4328-bf32-91f5846a1b69",
    "mockTestId": null
  },
  {
    "question": "The rupee value increases to Rs.35 for a US Dollar, and all other things including quality, remain the same. What is the approximate difference in cost, in US Dollars, between Singapore and India for a Spinal Fusion, taking this change into account?",
    "options": {
      "A": "700",
      "B": "2500",
      "C": "4500",
      "D": "8000",
      "E": "No difference"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "506892ed-96ba-4328-bf32-91f5846a1b69",
    "mockTestId": null
  },
  {
    "question": "For how many Indian players is it possible to calculate the exact M-index?",
    "options": {
      "A": "0",
      "B": "1",
      "C": "2",
      "D": "More than 2"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "506892ed-96ba-4328-bf32-91f5846a1b69",
    "mockTestId": null
  },
  {
    "question": "Among the players mentioned, who can have the lowest R-index from the tournament?",
    "options": {
      "A": "Only Kaif, Rahul or Yuvraj",
      "B": "Only Kaif or Rahul",
      "C": "Only Kaif or Yuvraj",
      "D": "Only Kaif"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "506892ed-96ba-4328-bf32-91f5846a1b69",
    "mockTestId": null
  },
  {
    "question": "How many players among those listed definitely scored less than Yuvraj in the tournament?",
    "options": {
      "A": "0",
      "B": "1",
      "C": "2",
      "D": "More than 2"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "506892ed-96ba-4328-bf32-91f5846a1b69",
    "mockTestId": null
  },
  {
    "question": "Which of the players had the best M-index from the tournament?",
    "options": {
      "A": "Rahul",
      "B": "Saurav",
      "C": "Virender",
      "D": "Yuvraj"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "506892ed-96ba-4328-bf32-91f5846a1b69",
    "mockTestId": null
  },
  {
    "question": "To which country does University 5 belong?",
    "options": {
      "A": "India or Netherlands but not USA",
      "B": "India or USA but not Netherlands",
      "C": "Netherlands or USA but not India",
      "D": "India or USA but not UK"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "506892ed-96ba-4328-bf32-91f5846a1b69",
    "mockTestId": null
  },
  {
    "question": "University 1 can belong to",
    "options": {
      "A": "UK",
      "B": "Canada",
      "C": "Netherlands",
      "D": "USA"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "506892ed-96ba-4328-bf32-91f5846a1b69",
    "mockTestId": null
  },
  {
    "question": "Which among the listed countries can possibly host three of the eight listed universities?",
    "options": {
      "A": "None",
      "B": "Only UK",
      "C": "Only India",
      "D": "Both India and UK"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "506892ed-96ba-4328-bf32-91f5846a1b69",
    "mockTestId": null
  },
  {
    "question": "Visitors from how many universities from UK visited Prof. Singh's homepage in the three days?",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "506892ed-96ba-4328-bf32-91f5846a1b69",
    "mockTestId": null
  },
  {
    "question": "What is the number of children of age 9 years or less whose height does not exceed 135 cm?",
    "options": {
      "A": "48",
      "B": "45",
      "C": "3",
      "D": "Cannot be determined"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "506892ed-96ba-4328-bf32-91f5846a1b69",
    "mockTestId": null
  },
  {
    "question": "How many children of age more than 10 years are taller than 150 cm and do not weigh more than 48 kg?",
    "options": {
      "A": "16",
      "B": "40",
      "C": "9",
      "D": "Cannot be determined"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "506892ed-96ba-4328-bf32-91f5846a1b69",
    "mockTestId": null
  },
  {
    "question": "Among the children older than 6 years but not exceeding 12 years, how many weigh more than 38 kg.?",
    "options": {
      "A": "34",
      "B": "52",
      "C": "44",
      "D": "Cannot be determined"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "506892ed-96ba-4328-bf32-91f5846a1b69",
    "mockTestId": null
  },
  {
    "question": "What is the least cost of sending one unit from any refinery to any district?",
    "options": {
      "A": "95.2",
      "B": "0",
      "C": "205.7",
      "D": "284.5"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "506892ed-96ba-4328-bf32-91f5846a1b69",
    "mockTestId": null
  },
  {
    "question": "What is the least cost of sending one unit from any refinery to the district AAB?",
    "options": {
      "A": "0",
      "B": "284.5",
      "C": "95.2",
      "D": "None of these"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "506892ed-96ba-4328-bf32-91f5846a1b69",
    "mockTestId": null
  },
  {
    "question": "What is the least cost of sending one unit from refinery BB to any district?",
    "options": {
      "A": "284.5",
      "B": "311.8",
      "C": "451.1",
      "D": "None of these"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "506892ed-96ba-4328-bf32-91f5846a1b69",
    "mockTestId": null
  },
  {
    "question": "What is the least cost of sending petrol from refinery BB to district AAA?",
    "options": {
      "A": "765.6",
      "B": "1137.3",
      "C": "1154.3",
      "D": "None of these"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "506892ed-96ba-4328-bf32-91f5846a1b69",
    "mockTestId": null
  },
  {
    "question": "How many possible ways are there for sending petrol from any refinery to any district?",
    "options": {
      "A": "63",
      "B": "42",
      "C": "54",
      "D": "378"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "506892ed-96ba-4328-bf32-91f5846a1b69",
    "mockTestId": null
  },
  {
    "question": "How many cosmetic products did not have FDA approval?",
    "options": {
      "A": "10",
      "B": "Cannot be determined",
      "C": "50",
      "D": "60"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "f31ad5ec-2d3d-4fe4-8a0c-e4121c2ea518",
    "mockTestId": null
  },
  {
    "question": "Which among the following options best represents the number of domestic cosmetic products that had both the approvals?",
    "options": {
      "A": "At least 10 and at most 60",
      "B": "At least 10 and at most 80",
      "C": "At least 20 and at most 70",
      "D": "At least 20 and at most 50"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "f31ad5ec-2d3d-4fe4-8a0c-e4121c2ea518",
    "mockTestId": null
  },
  {
    "question": "If 70 cosmetic products did not have EU approval, then how many nutrition products had both the approvals?",
    "options": {
      "A": "50",
      "B": "30",
      "C": "10",
      "D": "20"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "f31ad5ec-2d3d-4fe4-8a0c-e4121c2ea518",
    "mockTestId": null
  },
  {
    "question": "Which of the following can be determined from the given information?I. The number of boys who are interested in attending a 1-day event and are neither dancers nor singers.II. The number of female dancers who are interested in attending a 1-day event.",
    "options": {
      "A": "Only I",
      "B": "Neither I nor II",
      "C": "Only II",
      "D": "Both I and II"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "f31ad5ec-2d3d-4fe4-8a0c-e4121c2ea518",
    "mockTestId": null
  },
  {
    "question": "What fraction of the class are interested in attending a 2-day event?",
    "options": {
      "A": "$$\\frac{7}{10}$$",
      "B": "$$\\frac{7}{13}$$",
      "C": "$$\\frac{9}{13}$$",
      "D": "$$\\frac{2}{3}$$"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "f31ad5ec-2d3d-4fe4-8a0c-e4121c2ea518",
    "mockTestId": null
  },
  {
    "question": "What BEST can be concluded about the number of male dancers who are interested in attending a 1-day event?",
    "options": {
      "A": "5 or 6",
      "B": "6",
      "C": "5",
      "D": "4 or 6"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "f31ad5ec-2d3d-4fe4-8a0c-e4121c2ea518",
    "mockTestId": null
  },
  {
    "question": "How many female dancers are interested in attending a 2-day event?",
    "options": {
      "A": "2",
      "B": "1",
      "C": "0",
      "D": "Cannot be determined"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "f31ad5ec-2d3d-4fe4-8a0c-e4121c2ea518",
    "mockTestId": null
  },
  {
    "question": "Who among the following is DEFINITELY an expert in tabla but not in either mridangam or ghatam?",
    "options": {
      "A": "F",
      "B": "C",
      "C": "A",
      "D": "H"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "f31ad5ec-2d3d-4fe4-8a0c-e4121c2ea518",
    "mockTestId": null
  },
  {
    "question": "Who among the following is DEFINITELY an expert in mridangam but not in either tabla or ghatam?",
    "options": {
      "A": "B",
      "B": "J",
      "C": "G",
      "D": "E"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "f31ad5ec-2d3d-4fe4-8a0c-e4121c2ea518",
    "mockTestId": null
  },
  {
    "question": "Which of the following pairs CANNOT have any musician who is an expert in both tabla and mridangam but not in ghatam?",
    "options": {
      "A": "F and G",
      "B": "C and E",
      "C": "A and B",
      "D": "C and F"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "f31ad5ec-2d3d-4fe4-8a0c-e4121c2ea518",
    "mockTestId": null
  },
  {
    "question": "If C is an expert in mridangam and F is not, then which are the three musicians who are experts in tabla but not in either mridangam or ghatam?",
    "options": {
      "A": "E, F and H",
      "B": "C, G and H",
      "C": "E, G and H",
      "D": "C, E and G"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "f31ad5ec-2d3d-4fe4-8a0c-e4121c2ea518",
    "mockTestId": null
  },
  {
    "question": "What was the total number of schools having exactly three of the four facilities?",
    "options": {
      "A": "64",
      "B": "50",
      "C": "200",
      "D": "80"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "f31ad5ec-2d3d-4fe4-8a0c-e4121c2ea518",
    "mockTestId": null
  },
  {
    "question": "What was the number of schools having facilities F2 and F4?",
    "options": {
      "A": "185",
      "B": "95",
      "C": "45",
      "D": "85"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "f31ad5ec-2d3d-4fe4-8a0c-e4121c2ea518",
    "mockTestId": null
  },
  {
    "question": "Let $$0 \\leq a \\leq x \\leq 100$$ and $$f(x) = \\mid x - a \\mid + \\mid x - 100 \\mid + \\mid x - a - 50\\mid$$. Then the maximum value of f(x) becomes 100 when a is equal to",
    "options": {
      "A": "25",
      "B": "100",
      "C": "50",
      "D": "0"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "3e09ac3c-766f-448a-803b-a4751d4e16b3",
    "mockTestId": null
  },
  {
    "question": "Let $$f(x)$$ be a quadratic polynomial in $$x$$ such that $$f(x) \\geq 0$$ for all real numbers $$x$$. If f(2) = 0 and f( 4) = 6, then f(-2) is equal to",
    "options": {
      "A": "12",
      "B": "24",
      "C": "6",
      "D": "36"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "3e09ac3c-766f-448a-803b-a4751d4e16b3",
    "mockTestId": null
  },
  {
    "question": "Let r be a real number and $$f(x) = \\begin{cases}2x -r & ifx \\geq r\\\\ r &ifx < r\\end{cases}$$. Then, the equation $$f(x) = f(f(x))$$ holds for all real values of $$x$$ where",
    "options": {
      "A": "$$x > r$$",
      "B": "$$x \\leq r$$",
      "C": "$$x \\neq r$$",
      "D": "$$x \\geq r$$"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "3e09ac3c-766f-448a-803b-a4751d4e16b3",
    "mockTestId": null
  },
  {
    "question": "If $$f(x)=x^{2}-7x$$ and $$g(x)=x+3$$, then the minimum value of $$f(g(x))-3x$$ is:",
    "options": {
      "A": "-20",
      "B": "-12",
      "C": "-15",
      "D": "-16"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "3e09ac3c-766f-448a-803b-a4751d4e16b3",
    "mockTestId": null
  },
  {
    "question": "Let $$f(x)=x^{2}+ax+b$$ and $$g(x)=f(x+1)-f(x-1)$$. If $$f(x)\\geq0$$ for all real x, and $$g(20)=72$$. then the smallest possible value of b is",
    "options": {
      "A": "16",
      "B": "4",
      "C": "1",
      "D": "0"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "3e09ac3c-766f-448a-803b-a4751d4e16b3",
    "mockTestId": null
  },
  {
    "question": "The number of real-valued solutions of the equation $$2^{x}+2^{-x}=2-(x-2)^{2}$$ is:",
    "options": {
      "A": "1",
      "B": "2",
      "C": "infinite",
      "D": "0"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "3e09ac3c-766f-448a-803b-a4751d4e16b3",
    "mockTestId": null
  },
  {
    "question": "In a group of 10 students, the mean of the lowest 9 scores is 42 while the mean of the highest 9 scores is 47. For the entire group of 10 students, the maximum possible mean exceeds the minimum possible mean by",
    "options": {
      "A": "5",
      "B": "4",
      "C": "3",
      "D": "6"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "3e09ac3c-766f-448a-803b-a4751d4e16b3",
    "mockTestId": null
  },
  {
    "question": "The area, in sq. units, enclosed by the lines $$x=2,y=\\mid x-2\\mid+4$$, the X-axis and the Y-axis is equal to",
    "options": {
      "A": "10",
      "B": "6",
      "C": "8",
      "D": "12"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "3e09ac3c-766f-448a-803b-a4751d4e16b3",
    "mockTestId": null
  },
  {
    "question": "If $$f(x+y)=f(x)f(y)$$ and $$f(5)=4$$, then $$f(10)-f(-10)$$ is equal to",
    "options": {
      "A": "14.0625",
      "B": "0",
      "C": "15.9375",
      "D": "3"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "3e09ac3c-766f-448a-803b-a4751d4e16b3",
    "mockTestId": null
  },
  {
    "question": "If $$f(5+x)=f(5-x)$$ for every real x, and $$f(x)=0$$ has four distinct real roots, then the sum of these roots is",
    "options": {
      "A": "0",
      "B": "40",
      "C": "10",
      "D": "20"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "3e09ac3c-766f-448a-803b-a4751d4e16b3",
    "mockTestId": null
  },
  {
    "question": "In how many ways can a pair of integers (x , a) be chosen such that $$x^{2}-2\\mid x\\mid+\\mid a-2\\mid=0$$ ?",
    "options": {
      "A": "6",
      "B": "5",
      "C": "4",
      "D": "7"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "3e09ac3c-766f-448a-803b-a4751d4e16b3",
    "mockTestId": null
  },
  {
    "question": "The number of the real roots of the equation $$2 \\cos (x(x + 1)) = 2^x + 2^{-x}$$ is",
    "options": {
      "A": "2",
      "B": "1",
      "C": "infinite",
      "D": "0"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "3e09ac3c-766f-448a-803b-a4751d4e16b3",
    "mockTestId": null
  },
  {
    "question": "A triangle is drawn with its vertices on the circle C such that one of its sides is a diameter of C and the other two sides have their lengths in the ratio a : b. If the radius of the circle is r, then the area of the triangle is",
    "options": {
      "A": "$$\\frac{abr^{2}}{2(a^{2}+b^{2})}$$",
      "B": "$$\\frac{2abr^{2}}{a^{2}+b^{2}}$$",
      "C": "$$\\frac{4abr^{2}}{a^{2}+b^{2}}$$",
      "D": "$$\\frac{abr^{2}}{a^{2}+b^{2}}$$"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "428ab0d7-4c39-4b26-a7dc-f9dd27e02792",
    "mockTestId": null
  },
  {
    "question": "Let C be the circle $$x^{2} + y^{2} + 4x - 6y - 3 = 0$$ and L be the locus of the point of intersection of a pair of tangents to C with the angle between the two tangents equal to $$60^{\\circ}$$. Then, the point at which L touches the line $$x$$ = 6 is",
    "options": {
      "A": "(6, 6)",
      "B": "(6, 3)",
      "C": "(6, 8)",
      "D": "(6, 4)"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "428ab0d7-4c39-4b26-a7dc-f9dd27e02792",
    "mockTestId": null
  },
  {
    "question": "Let $$\\triangle ABC$$ be an isosceles triangle such that AB and AC are of equal length. AD is the altitude from A on BC and BE is the altitude from B on AC. If AD and BE intersect at O such that $$\\angle AOB = 105^\\circ$$, then $$\\frac{AD}{BE}$$ equals",
    "options": {
      "A": "$$\\sin 15^\\circ$$",
      "B": "$$\\cos 15^\\circ$$",
      "C": "$$2 \\cos 15^\\circ$$",
      "D": "$$2 \\sin 15^\\circ$$"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "428ab0d7-4c39-4b26-a7dc-f9dd27e02792",
    "mockTestId": null
  },
  {
    "question": "A quadrilateral ABCD is inscribed in a circle such that AB : CD = 2 : 1 and BC : AD = 5 : 4. If AC and BD intersect at the point E, then AE : CE equals",
    "options": {
      "A": "2 : 1",
      "B": "1 : 2",
      "C": "8 : 5",
      "D": "5 : 8"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "428ab0d7-4c39-4b26-a7dc-f9dd27e02792",
    "mockTestId": null
  },
  {
    "question": "A rectangle with the largest possible area is drawn inside a semicircle of radius 2 cm. Then, the ratio of the lengths of the largest to the smallest side of this rectangle is",
    "options": {
      "A": "2 : 1",
      "B": "1 : 1",
      "C": "$$\\sqrt{5} : 1$$",
      "D": "$$\\sqrt{2} : 1$$"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "428ab0d7-4c39-4b26-a7dc-f9dd27e02792",
    "mockTestId": null
  },
  {
    "question": "In a rectangle ABCD, AB = 9 cm and BC = 6 cm. P and Q are two points on BC such that the areas of the figures ABP, APQ, and AQCD are in geometric progression. If the area of the figure AQCD is four times the area of triangle ABP, then BP : PQ : QC is",
    "options": {
      "A": "1:2:4",
      "B": "1:2:1",
      "C": "2:4:1",
      "D": "1:1:2"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "428ab0d7-4c39-4b26-a7dc-f9dd27e02792",
    "mockTestId": null
  },
  {
    "question": "In triangle ABC, altitudes AD and BE are drawn to the corresponding bases. If $$\\angle BAC = 45^{\\circ}$$ and $$\\angle ABC=\\theta\\ $$, then $$\\frac{AD}{BE}$$ equals",
    "options": {
      "A": "$$\\sqrt{2} \\cos \\theta$$",
      "B": "$$\\frac{(\\sin \\theta + \\cos \\theta)}{\\sqrt{2}}$$",
      "C": "1",
      "D": "$$\\sqrt{2} \\sin \\theta$$"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "428ab0d7-4c39-4b26-a7dc-f9dd27e02792",
    "mockTestId": null
  },
  {
    "question": "The lengths of all four sides of a quadrilateral are integer valued. If three of its sides are of length 1 cm, 2 cm and 4 cm, then the total number of possible lengths of the fourth side is",
    "options": {
      "A": "3",
      "B": "4",
      "C": "6",
      "D": "5"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "428ab0d7-4c39-4b26-a7dc-f9dd27e02792",
    "mockTestId": null
  },
  {
    "question": "All the vertices of a rectangle lie on a circle of radius R. If the perimeter of the rectangle is P, then the area of the rectangle is",
    "options": {
      "A": "$$\\frac{P^2}{16} - R^2$$",
      "B": "$$\\frac{P^2}{8} - 2R^2$$",
      "C": "$$\\frac{P^2}{2} - 2PR$$",
      "D": "$$\\frac{P^2}{8} - \\frac{R^2}{2}$$"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "428ab0d7-4c39-4b26-a7dc-f9dd27e02792",
    "mockTestId": null
  },
  {
    "question": "In a triangle ABC, AB = AC = 8 cm. A circle drawn with BC as diameter passes through A. Another circle drawn with center at A passes through Band C. Then the area, in sq. cm, of the overlapping region between the two circles is",
    "options": {
      "A": "$$16\\pi$$",
      "B": "$$16(\\pi - 1)$$",
      "C": "$$32(\\pi - 1)$$",
      "D": "$$32\\pi$$"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "428ab0d7-4c39-4b26-a7dc-f9dd27e02792",
    "mockTestId": null
  },
  {
    "question": "Let ABCD be a parallelogram such that the coordinates of its three vertices A, B, C are (1, 1), (3, 4) and (−2, 8), respectively. Then, the coordinates of the vertex D are",
    "options": {
      "A": "(0, 11)",
      "B": "(4, 5)",
      "C": "(−3, 4)",
      "D": "(−4, 5)"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "428ab0d7-4c39-4b26-a7dc-f9dd27e02792",
    "mockTestId": null
  },
  {
    "question": "The length of each side of an equilateral triangle ABC is 3 cm. Let D be a point on BC such that the area of triangle ADC is half the area of triangle ABD. Then the length of AD, in cm, is",
    "options": {
      "A": "$$\\sqrt{8}$$",
      "B": "$$\\sqrt{6}$$",
      "C": "$$\\sqrt{7}$$",
      "D": "$$\\sqrt{5}$$"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "428ab0d7-4c39-4b26-a7dc-f9dd27e02792",
    "mockTestId": null
  },
  {
    "question": "If the area of a regular hexagon is equal to the area of an equilateral triangle of side 12 cm, then the length, in cm, of each side of the hexagon is",
    "options": {
      "A": "$$4\\sqrt{6}$$",
      "B": "$$6\\sqrt{6}$$",
      "C": "$$\\sqrt{6}$$",
      "D": "$$2\\sqrt{6}$$"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "428ab0d7-4c39-4b26-a7dc-f9dd27e02792",
    "mockTestId": null
  },
  {
    "question": "Suppose the length of each side of a regular hexagon ABCDEF is 2 cm.It T is the mid point of CD,then the length of AT, in cm, is",
    "options": {
      "A": "$$\\sqrt{13}$$",
      "B": "$$\\sqrt{14}$$",
      "C": "$$\\sqrt{12}$$",
      "D": "$$\\sqrt{15}$$"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "428ab0d7-4c39-4b26-a7dc-f9dd27e02792",
    "mockTestId": null
  },
  {
    "question": "If a rhombus has area 12 sq cm and side length 5 cm, then the length, in cm, of its longer diagonal is",
    "options": {
      "A": "$$\\sqrt{37}+\\sqrt{13}$$",
      "B": "$$\\sqrt{13}+\\sqrt{12}$$",
      "C": "$$\\frac{\\sqrt{37}+\\sqrt{13}}{2}$$",
      "D": "$$\\frac{\\sqrt{13}+\\sqrt{12}}{2}$$"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "428ab0d7-4c39-4b26-a7dc-f9dd27e02792",
    "mockTestId": null
  },
  {
    "question": "Any non-zero real numbers x,y such that $$y\\neq3$$ and $$\\frac{x}{y}<\\frac{x+3}{y-3}$$, Will satisfy the condition.",
    "options": {
      "A": "$$\\frac{x}{y}<\\frac{y}{x}$$",
      "B": "If $$y<0$$, and $$-x<y$$",
      "C": "If $$y>10$$, and $$-x>y$$",
      "D": "If $$x<0$$, and $$-x<y$$"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "c4feb570-1603-46c1-9d00-44cb9c267638",
    "mockTestId": null
  },
  {
    "question": "Let n and m be two positive integers such that there are exactly 41 integers greater than $$8^m$$ and less than $$8^n$$, which can be expressed as powers of 2. Then, the smallest possible value of n + m is",
    "options": {
      "A": "42",
      "B": "44",
      "C": "14",
      "D": "16"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "c4feb570-1603-46c1-9d00-44cb9c267638",
    "mockTestId": null
  },
  {
    "question": "If $$x$$ and $$y$$ are real numbers such that $$x^{2} + (x - 2y - 1)^{2} = -4y(x + y)$$, then the value $$x - 2y$$ is",
    "options": {
      "A": "0",
      "B": "1",
      "C": "-1",
      "D": "2"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "c4feb570-1603-46c1-9d00-44cb9c267638",
    "mockTestId": null
  },
  {
    "question": "The population of a town in 2020 was 100000. The population decreased by y% from the year 2020 to 2021, and increased by x% from the year 2021 to 2022, where x and y are two natural numbers. If population in 2022 was greater than the population in 2020 and the difference between x and y is 10, then the lowest possible population of the town in 2021 was",
    "options": {
      "A": "72000",
      "B": "74000",
      "C": "73000",
      "D": "75000"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "c4feb570-1603-46c1-9d00-44cb9c267638",
    "mockTestId": null
  },
  {
    "question": "In an examination, the average marks of 4 girls and 6 boys is 24. Each of the girls has the same marks while each of the boys has the same marks. If the marks of any girl is at most double the marks of any boy, but not less than the marks of any boy, then the number of possible distinct integer values of the total marks of 2 girls and 6 boys is",
    "options": {
      "A": "21",
      "B": "20",
      "C": "22",
      "D": "19"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "c4feb570-1603-46c1-9d00-44cb9c267638",
    "mockTestId": null
  },
  {
    "question": "If $$p^{2}+q^{2}-29=2pq-20=52-2pq$$, then the difference between the maximum and minimum possible value of $$(p^{3}-q^{3})$$",
    "options": {
      "A": "243",
      "B": "486",
      "C": "378",
      "D": "189"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "c4feb570-1603-46c1-9d00-44cb9c267638",
    "mockTestId": null
  },
  {
    "question": "The number of integers n that satisfy the inequalities $$\\mid n - 60 \\mid < \\mid n - 100 \\mid < \\mid n - 20 \\mid$$ is",
    "options": {
      "A": "21",
      "B": "19",
      "C": "18",
      "D": "20"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "c4feb570-1603-46c1-9d00-44cb9c267638",
    "mockTestId": null
  },
  {
    "question": "For a real number x the condition $$\\mid3x-20\\mid+\\mid3x-40\\mid=20$$ necessarily holds if",
    "options": {
      "A": "$$10<x<15$$",
      "B": "$$9<x<14$$",
      "C": "$$7<x<12$$",
      "D": "$$6<x<11$$"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "c4feb570-1603-46c1-9d00-44cb9c267638",
    "mockTestId": null
  },
  {
    "question": "$$f(x) = \\frac{x^2 + 2x - 15}{x^2 - 7x - 18}$$ is negative if and only if",
    "options": {
      "A": "-5 < x < -2 or 3 < x < 9",
      "B": "x < -5 or -2 < x < 3",
      "C": "-2 < x < 3 or x > 9",
      "D": "x < -5 or 3 < x < 9"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "c4feb570-1603-46c1-9d00-44cb9c267638",
    "mockTestId": null
  },
  {
    "question": "Among 100 students, $$x_1$$ have birthdays in January, $$X_2$$ have birthdays in February, and so on. If $$x_0=max(x_1,x_2,....,x_{12})$$, then the smallest possible value of $$x_0$$ is",
    "options": {
      "A": "8",
      "B": "9",
      "C": "10",
      "D": "12"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "c4feb570-1603-46c1-9d00-44cb9c267638",
    "mockTestId": null
  },
  {
    "question": "For real x, the maximum possible value of $$\\frac{x}{\\sqrt{1+x^{4}}}$$ is",
    "options": {
      "A": "$$\\frac{1}{2}$$",
      "B": "$$1$$",
      "C": "$$\\frac{1}{\\sqrt{3}}$$",
      "D": "$$\\frac{1}{\\sqrt{2}}$$"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "c4feb570-1603-46c1-9d00-44cb9c267638",
    "mockTestId": null
  },
  {
    "question": "For some real numbers a and b, the system of equations $$x + y = 4$$ and $$(a+5)x+(b^2-15)y=8b$$ has infinitely many solutions for x and y. Then, the maximum possible value of ab is",
    "options": {
      "A": "33",
      "B": "25",
      "C": "15",
      "D": "55"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "a739db54-f7c2-4724-96cc-69dd94cc469f",
    "mockTestId": null
  },
  {
    "question": "If $$c=\\frac{16x}{y}+\\frac{49y}{x}$$ for some non-zero real numbers x and y, then c cannot take the value",
    "options": {
      "A": "$$60$$",
      "B": "$$-50$$",
      "C": "$$-70$$",
      "D": "$$-60$$"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "a739db54-f7c2-4724-96cc-69dd94cc469f",
    "mockTestId": null
  },
  {
    "question": "Let a and b be natural numbers. If $$a^2 + ab + a = 14$$ and $$b^2 + ab + b = 28$$, then $$(2a + b)$$ equals",
    "options": {
      "A": "8",
      "B": "7",
      "C": "10",
      "D": "9"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "a739db54-f7c2-4724-96cc-69dd94cc469f",
    "mockTestId": null
  },
  {
    "question": "The largest real value of a for which the equation $$\\mid x + a \\mid + \\mid x - 1 \\mid = 2$$ has an infinite number of solutions for x is",
    "options": {
      "A": "-1",
      "B": "0",
      "C": "1",
      "D": "2"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "a739db54-f7c2-4724-96cc-69dd94cc469f",
    "mockTestId": null
  },
  {
    "question": "A shop owner bought a total of 64 shirts from a wholesale market that came in two sizes, small and large. The price of a small shirt was INR 50 less than that of a large shirt. She paid a total of INR 5000 for the large shirts, and a total of INR 1800 for the small shirts. Then, the price of a large shirt and a small shirt together, in INR, is",
    "options": {
      "A": "175",
      "B": "150",
      "C": "200",
      "D": "225"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "a739db54-f7c2-4724-96cc-69dd94cc469f",
    "mockTestId": null
  },
  {
    "question": "A basket of 2 apples, 4 oranges and 6 mangoes costs the same as a basket of 1 apple, 4 oranges and 8 mangoes, or a basket of 8 oranges and 7 mangoes. Then the number of mangoes in a basket of mangoes that has the same cost as the other baskets is",
    "options": {
      "A": "11",
      "B": "13",
      "C": "10",
      "D": "12"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "a739db54-f7c2-4724-96cc-69dd94cc469f",
    "mockTestId": null
  },
  {
    "question": "If $$3x+2\\mid y\\mid+y=7$$ and $$x+\\mid x \\mid+3y=1$$ then $$x+2y$$ is:",
    "options": {
      "A": "$$-\\frac{4}{3}$$",
      "B": "$$\\frac{8}{3}$$",
      "C": "$$0$$",
      "D": "$$1$$"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "a739db54-f7c2-4724-96cc-69dd94cc469f",
    "mockTestId": null
  },
  {
    "question": "Let k be a constant. The equations $$kx + y = 3$$ and $$4x + ky = 4$$ have a unique solution if and only if",
    "options": {
      "A": "$$\\mid k\\mid\\neq2$$",
      "B": "$$\\mid k\\mid=2$$",
      "C": "$$k\\neq2$$",
      "D": "$$k=2$$"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "a739db54-f7c2-4724-96cc-69dd94cc469f",
    "mockTestId": null
  },
  {
    "question": "In May, John bought the same amount of rice and the same amount of wheat as he had bought in April, but spent ₹ 150 more due to price increase of rice and wheat by 20% and 12%, respectively. If John had spent ₹ 450 on rice in April, then how much did he spend on wheat in May?",
    "options": {
      "A": "Rs.560",
      "B": "Rs.570",
      "C": "Rs.590",
      "D": "Rs.580"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "a739db54-f7c2-4724-96cc-69dd94cc469f",
    "mockTestId": null
  },
  {
    "question": "Aron bought some pencils and sharpeners. Spending the same amount of money as Aron, Aditya bought twice as many pencils and 10 less sharpeners. If the cost of one sharpener is ₹ 2 more than the cost of a pencil, then the minimum possible number of pencils bought by Aron and Aditya together is",
    "options": {
      "A": "33",
      "B": "27",
      "C": "30",
      "D": "36"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "a739db54-f7c2-4724-96cc-69dd94cc469f",
    "mockTestId": null
  },
  {
    "question": "Let A, B and C be three positive integers such that the sum of A and the mean of B and C is 5. In addition, the sum of B and the mean of A and C is 7. Then the sum of A and B is",
    "options": {
      "A": "5",
      "B": "4",
      "C": "6",
      "D": "7"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "a739db54-f7c2-4724-96cc-69dd94cc469f",
    "mockTestId": null
  },
  {
    "question": "In 2010, a library contained a total of 11500 books in two categories - fiction and nonfiction. In 2015, the library contained a total of 12760 books in these two categories. During this period, there was 10% increase in the fiction category while there was 12% increase in the non-fiction category. How many fiction books were in the library in 2015?",
    "options": {
      "A": "6160",
      "B": "6600",
      "C": "6000",
      "D": "5500"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "a739db54-f7c2-4724-96cc-69dd94cc469f",
    "mockTestId": null
  },
  {
    "question": "If $$x$$ and $$y$$ are positive real numbers such that $$\\log_{x}(x^2 + 12) = 4$$ and $$3 \\log_{y} x = 1$$, then $$x + y $$ equals",
    "options": {
      "A": "20",
      "B": "68",
      "C": "10",
      "D": "11"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "57d414bb-96af-4a70-a84c-9e0e1e4f8a81",
    "mockTestId": null
  },
  {
    "question": "For a real number a, if $$\\frac{\\log_{15}{a}+\\log_{32}{a}}{(\\log_{15}{a})(\\log_{32}{a})}=4$$ then a must lie in the range",
    "options": {
      "A": "$$2<a<3$$",
      "B": "$$3<a<4$$",
      "C": "$$4<a<5$$",
      "D": "$$a>5$$"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "57d414bb-96af-4a70-a84c-9e0e1e4f8a81",
    "mockTestId": null
  },
  {
    "question": "If Y is a negative number such that $$2^{Y^2({\\log_{3}{5})}}=5^{\\log_{2}{3}}$$, then Y equals to:",
    "options": {
      "A": "$$\\log_{2}(\\frac{1}{5})$$",
      "B": "$$\\log_{2}(\\frac{1}{3})$$",
      "C": "$$-\\log_{2}(\\frac{1}{5})$$",
      "D": "$$-\\log_{2}(\\frac{1}{3})$$"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "57d414bb-96af-4a70-a84c-9e0e1e4f8a81",
    "mockTestId": null
  },
  {
    "question": "If $$\\log_{a}{30}=A,\\log_{a}({\\frac{5}{3}})=-B$$ and $$\\log_2{a}=\\frac{1}{3}$$, then $$\\log_3{a}$$ equals",
    "options": {
      "A": "$$\\frac{2}{A+B-3}$$",
      "B": "$$\\frac{2}{A+B}-3$$",
      "C": "$$\\frac{A+B}{2}-3$$",
      "D": "$$\\frac{A+B-3}{2}$$"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "57d414bb-96af-4a70-a84c-9e0e1e4f8a81",
    "mockTestId": null
  },
  {
    "question": "The value of $$\\log_{a}({\\frac{a}{b}})+\\log_{b}({\\frac{b}{a}})$$, for $$1<a\\leq b$$ cannot be equal to",
    "options": {
      "A": "0",
      "B": "-1",
      "C": "1",
      "D": "-0.5"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "57d414bb-96af-4a70-a84c-9e0e1e4f8a81",
    "mockTestId": null
  },
  {
    "question": "The real root of the equation $$2^{6x} + 2^{3x + 2} - 21 = 0$$ is",
    "options": {
      "A": "$$\\log_{2}{9}$$",
      "B": "$$\\frac{\\log_{2}{3}}{3}$$",
      "C": "$$\\log_{2}{27}$$",
      "D": "$$\\frac{\\log_{2}{7}}{3}$$"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "57d414bb-96af-4a70-a84c-9e0e1e4f8a81",
    "mockTestId": null
  },
  {
    "question": "Let x and y be positive real numbers such that$$\\log_{5}{(x + y)} + \\log_{5}{(x - y)} = 3,$$ and $$\\log_{2}{y} - \\log_{2}{x} = 1 - \\log_{2}{3}$$. Then $$xy$$ equals",
    "options": {
      "A": "150",
      "B": "25",
      "C": "100",
      "D": "250"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "57d414bb-96af-4a70-a84c-9e0e1e4f8a81",
    "mockTestId": null
  },
  {
    "question": "If x is a positive quantity such that $$2^{x}=3^{\\log_{5}{2}}$$. then x is equal to",
    "options": {
      "A": "$$\\log_{5}{8}$$",
      "B": "$$1+\\log_{3}({\\frac{5}{3}})$$",
      "C": "$$\\log_{5}{9}$$",
      "D": "$$1+\\log_{5}({\\frac{3}{5}})$$"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "57d414bb-96af-4a70-a84c-9e0e1e4f8a81",
    "mockTestId": null
  },
  {
    "question": "If $$\\log_{12}{81}=p$$, then $$3(\\dfrac{4-p}{4+p})$$ is equal to",
    "options": {
      "A": "$$\\log_{4}{16}$$",
      "B": "$$\\log_{6}{16}$$",
      "C": "$$\\log_{2}{8}$$",
      "D": "$$\\log_{6}{8}$$"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "57d414bb-96af-4a70-a84c-9e0e1e4f8a81",
    "mockTestId": null
  },
  {
    "question": "$$\\frac{1}{log_{2}100}-\\frac{1}{log_{4}100}+\\frac{1}{log_{5}100}-\\frac{1}{log_{10}100}+\\frac{1}{log_{20}100}-\\frac{1}{log_{25}100}+\\frac{1}{log_{50}100}$$=?",
    "options": {
      "A": "$$\\frac{1}{2}$$",
      "B": "10",
      "C": "0",
      "D": "−4"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "57d414bb-96af-4a70-a84c-9e0e1e4f8a81",
    "mockTestId": null
  },
  {
    "question": "If p$$^{3}$$ = q$$^{4}$$ = r$$^{5}$$ = s$$^{6}$$, then the value of $$log_{s}{(pqr)}$$ is equal to",
    "options": {
      "A": "$$\\frac{47}{10}$$",
      "B": "$$\\frac{24}{5}$$",
      "C": "$$\\frac{16}{5}$$",
      "D": "$$1$$"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "57d414bb-96af-4a70-a84c-9e0e1e4f8a81",
    "mockTestId": null
  },
  {
    "question": "If $$\\log_{2}({5+\\log_{3}{a}})=3$$ and $$\\log_{5}({4a+12+\\log_{2}{b}})=3$$, then a + b is equal to",
    "options": {
      "A": "59",
      "B": "40",
      "C": "32",
      "D": "67"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "57d414bb-96af-4a70-a84c-9e0e1e4f8a81",
    "mockTestId": null
  },
  {
    "question": "Suppose, $$\\log_3 x = \\log_{12} y = a$$, where $$x, y$$ are positive numbers. If $$G$$ is the geometric mean of x and y, and $$\\log_6 G$$ is equal to",
    "options": {
      "A": "$$\\sqrt{a}$$",
      "B": "2a",
      "C": "a/2",
      "D": "a"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "57d414bb-96af-4a70-a84c-9e0e1e4f8a81",
    "mockTestId": null
  },
  {
    "question": "If x is a real number such that $$\\log_{3}5= \\log_{5}(2 + x)$$, then which of the following is true?",
    "options": {
      "A": "0 < x < 3",
      "B": "23 < x < 30",
      "C": "x > 30",
      "D": "3 < x < 23"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "57d414bb-96af-4a70-a84c-9e0e1e4f8a81",
    "mockTestId": null
  },
  {
    "question": "The value of $$\\log_{0.008}\\sqrt{5}+\\log_{\\sqrt{3}}81-7$$ is equal to",
    "options": {
      "A": "1/3",
      "B": "2/3",
      "C": "5/6",
      "D": "7/6"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "57d414bb-96af-4a70-a84c-9e0e1e4f8a81",
    "mockTestId": null
  },
  {
    "question": "If x is a positive real number such that $$x^8 + \\left(\\frac{1}{x}\\right)^8 = 47$$, then the value of $$x^9 + \\left(\\frac{1}{x}\\right)^9$$ is",
    "options": {
      "A": "$$40\\sqrt{5}$$",
      "B": "$$30\\sqrt{5}$$",
      "C": "$$36\\sqrt{5}$$",
      "D": "$$34\\sqrt{5}$$"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "9c60f82b-c167-473b-8c8f-9346835eaf2b",
    "mockTestId": null
  },
  {
    "question": "If $$x$$ and $$y$$ are positive real numbers such that $$\\log_{x}(x^2 + 12) = 4$$ and $$3 \\log_{y} x = 1$$, then $$x + y $$ equals",
    "options": {
      "A": "20",
      "B": "68",
      "C": "10",
      "D": "11"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "9c60f82b-c167-473b-8c8f-9346835eaf2b",
    "mockTestId": null
  },
  {
    "question": "If $$\\sqrt{5x+9} + \\sqrt{5x - 9} = 3(2 + \\sqrt{2})$$, then $$\\sqrt{10x+9}$$ is equal to",
    "options": {
      "A": "$$3\\sqrt{31}$$",
      "B": "$$4\\sqrt{5}$$",
      "C": "$$3\\sqrt{7}$$",
      "D": "$$2\\sqrt{7}$$"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "9c60f82b-c167-473b-8c8f-9346835eaf2b",
    "mockTestId": null
  },
  {
    "question": "For a real number a, if $$\\frac{\\log_{15}{a}+\\log_{32}{a}}{(\\log_{15}{a})(\\log_{32}{a})}=4$$ then a must lie in the range",
    "options": {
      "A": "$$2<a<3$$",
      "B": "$$3<a<4$$",
      "C": "$$4<a<5$$",
      "D": "$$a>5$$"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "9c60f82b-c167-473b-8c8f-9346835eaf2b",
    "mockTestId": null
  },
  {
    "question": "If Y is a negative number such that $$2^{Y^2({\\log_{3}{5})}}=5^{\\log_{2}{3}}$$, then Y equals to:",
    "options": {
      "A": "$$\\log_{2}(\\frac{1}{5})$$",
      "B": "$$\\log_{2}(\\frac{1}{3})$$",
      "C": "$$-\\log_{2}(\\frac{1}{5})$$",
      "D": "$$-\\log_{2}(\\frac{1}{3})$$"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "9c60f82b-c167-473b-8c8f-9346835eaf2b",
    "mockTestId": null
  },
  {
    "question": "If $$\\log_{a}{30}=A,\\log_{a}({\\frac{5}{3}})=-B$$ and $$\\log_2{a}=\\frac{1}{3}$$, then $$\\log_3{a}$$ equals",
    "options": {
      "A": "$$\\frac{2}{A+B-3}$$",
      "B": "$$\\frac{2}{A+B}-3$$",
      "C": "$$\\frac{A+B}{2}-3$$",
      "D": "$$\\frac{A+B-3}{2}$$"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "9c60f82b-c167-473b-8c8f-9346835eaf2b",
    "mockTestId": null
  },
  {
    "question": "The value of $$\\log_{a}({\\frac{a}{b}})+\\log_{b}({\\frac{b}{a}})$$, for $$1<a\\leq b$$ cannot be equal to",
    "options": {
      "A": "0",
      "B": "-1",
      "C": "1",
      "D": "-0.5"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "9c60f82b-c167-473b-8c8f-9346835eaf2b",
    "mockTestId": null
  },
  {
    "question": "If $$x=(4096)^{7+4\\sqrt{3}}$$, then which of the following equals to 64?",
    "options": {
      "A": "$$\\frac{x^{7}}{x^{2\\sqrt{3}}}$$",
      "B": "$$\\frac{x^{\\frac{7}{2}}}{x^{\\frac{4}{\\sqrt{3}}}}$$",
      "C": "$$\\frac{x^{\\frac{7}{2}}}{x^{2{\\sqrt{3}}}}$$",
      "D": "$$\\frac{x^{7}}{x^{4\\sqrt{3}}}$$"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "9c60f82b-c167-473b-8c8f-9346835eaf2b",
    "mockTestId": null
  },
  {
    "question": "If $$(5.55)^x = (0.555)^y = 1000$$, then the value of $$\\frac{1}{x} - \\frac{1}{y}$$ is",
    "options": {
      "A": "$$\\frac{1}{3}$$",
      "B": "3",
      "C": "1",
      "D": "$$\\frac{2}{3}$$"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "9c60f82b-c167-473b-8c8f-9346835eaf2b",
    "mockTestId": null
  },
  {
    "question": "The real root of the equation $$2^{6x} + 2^{3x + 2} - 21 = 0$$ is",
    "options": {
      "A": "$$\\log_{2}{9}$$",
      "B": "$$\\frac{\\log_{2}{3}}{3}$$",
      "C": "$$\\log_{2}{27}$$",
      "D": "$$\\frac{\\log_{2}{7}}{3}$$"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "9c60f82b-c167-473b-8c8f-9346835eaf2b",
    "mockTestId": null
  },
  {
    "question": "If m and n are integers such that $$(\\surd2)^{19} 3^4 4^2 9^m 8^n = 3^n 16^m (\\sqrt[4]{64})$$ then m is",
    "options": {
      "A": "-20",
      "B": "-24",
      "C": "-12",
      "D": "-16"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "9c60f82b-c167-473b-8c8f-9346835eaf2b",
    "mockTestId": null
  },
  {
    "question": "Let x and y be positive real numbers such that$$\\log_{5}{(x + y)} + \\log_{5}{(x - y)} = 3,$$ and $$\\log_{2}{y} - \\log_{2}{x} = 1 - \\log_{2}{3}$$. Then $$xy$$ equals",
    "options": {
      "A": "150",
      "B": "25",
      "C": "100",
      "D": "250"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "9c60f82b-c167-473b-8c8f-9346835eaf2b",
    "mockTestId": null
  },
  {
    "question": "If x is a positive quantity such that $$2^{x}=3^{\\log_{5}{2}}$$. then x is equal to",
    "options": {
      "A": "$$\\log_{5}{8}$$",
      "B": "$$1+\\log_{3}({\\frac{5}{3}})$$",
      "C": "$$\\log_{5}{9}$$",
      "D": "$$1+\\log_{5}({\\frac{3}{5}})$$"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "9c60f82b-c167-473b-8c8f-9346835eaf2b",
    "mockTestId": null
  },
  {
    "question": "Which of the following houses is definitely occupied?",
    "options": {
      "A": "A1",
      "B": "D2",
      "C": "B1",
      "D": "F2"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "54521288-3fc8-4015-ba6a-7e250a5d2565",
    "mockTestId": null
  },
  {
    "question": "Which of the following options best describes the number of vacant houses in Row-2?",
    "options": {
      "A": "Exactly 3",
      "B": "Either 3 or 4",
      "C": "Exactly 2",
      "D": "Either 2 or 3"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "54521288-3fc8-4015-ba6a-7e250a5d2565",
    "mockTestId": null
  },
  {
    "question": "Which house in Block YY has parking space?",
    "options": {
      "A": "E1",
      "B": "F2",
      "C": "E2",
      "D": "F1"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "54521288-3fc8-4015-ba6a-7e250a5d2565",
    "mockTestId": null
  },
  {
    "question": "Initially cars numbered 1, 2, 3, and 4 arrive among which 1 and 4 are SUVs while 2 and 3 are compact cars. Car 1 then leaves, followed by the arrivals of car 5 (a compact car) and car 6 (an SUV). Car 4 then leaves. Then car 7 (an SUV) and car 8 (a compact car) arrive. At this moment, which among the following numbered car is parked next to car 3?",
    "options": {
      "A": "8",
      "B": "5",
      "C": "6",
      "D": "7"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "54521288-3fc8-4015-ba6a-7e250a5d2565",
    "mockTestId": null
  },
  {
    "question": "Suppose eight cars have arrived, of which two have left. Also suppose that car 4 is a compact and car 7 is an SUV. Which of the following is a POSSIBLE current configuration of the parking lot?",
    "options": {
      "A": "8, 2, 3, V, 6, 5, 7",
      "B": "V, 2, 3, 7, 5, 6, 8",
      "C": "8, 2, 3, V, 5, 7, 6",
      "D": "8, 2, 3, V, 5, 6, 7"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "54521288-3fc8-4015-ba6a-7e250a5d2565",
    "mockTestId": null
  },
  {
    "question": "Suppose the sequence at some point of time is 4, 5, 6, V, 3. Which of the following is NOT necessarily true?",
    "options": {
      "A": "Car 4 is a compact.",
      "B": "Car 1 is an SUV.",
      "C": "Car 3 is an SUV",
      "D": "Car 5 is a compact."
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "54521288-3fc8-4015-ba6a-7e250a5d2565",
    "mockTestId": null
  },
  {
    "question": "Suppose that car 4 is not the first car to leave and that the sequence at a time between the arrival of the car 7 and car 8 is V, 7, 3, 6, 5. Then which of the following statements MUST be false?",
    "options": {
      "A": "Car 2 is a compact.",
      "B": "Car 7 is a compact.",
      "C": "Car 4 is an SUV.",
      "D": "Car 6 is a compact."
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "54521288-3fc8-4015-ba6a-7e250a5d2565",
    "mockTestId": null
  },
  {
    "question": "Which of the following is true?",
    "options": {
      "A": "The second performance was composed by Dyu.",
      "B": "The third performance was composed by Dyu.",
      "C": "The third performance was composed by Ashman.",
      "D": "The second performance was composed by Gagan."
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "54521288-3fc8-4015-ba6a-7e250a5d2565",
    "mockTestId": null
  },
  {
    "question": "Which of the following is FALSE?",
    "options": {
      "A": "Samragni did not perform in any item composed by Ashman.",
      "B": "Princess did not perform in any item composed by Dyu.",
      "C": "Rani did not perform in any item composed by Badal.",
      "D": "Queen did not perform in any item composed by Gagan."
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "54521288-3fc8-4015-ba6a-7e250a5d2565",
    "mockTestId": null
  },
  {
    "question": "The sixth performance was composed by:",
    "options": {
      "A": "Badal",
      "B": "Dyu",
      "C": "Ashman",
      "D": "Gagan"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "54521288-3fc8-4015-ba6a-7e250a5d2565",
    "mockTestId": null
  },
  {
    "question": "Which pair of performances were composed by the same composer?",
    "options": {
      "A": "The first and the seventh",
      "B": "The third and the seventh",
      "C": "The second and the sixth",
      "D": "The first and the sixth"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "54521288-3fc8-4015-ba6a-7e250a5d2565",
    "mockTestId": null
  },
  {
    "question": "The second question in ET was prepared by:",
    "options": {
      "A": "Chetan",
      "B": "Beti",
      "C": "Esha",
      "D": "Dave"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "54521288-3fc8-4015-ba6a-7e250a5d2565",
    "mockTestId": null
  },
  {
    "question": "How many 5‐mark questions were there in MT and ET combined?",
    "options": {
      "A": "13",
      "B": "12",
      "C": "10",
      "D": "Cannot be determined"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "54521288-3fc8-4015-ba6a-7e250a5d2565",
    "mockTestId": null
  },
  {
    "question": "Who prepared 15-mark questions for MT and ET?",
    "options": {
      "A": "Only Beti, Dave, Esha and Fakir",
      "B": "Only Dave and Fakir",
      "C": "Only Esha and Fakir",
      "D": "Only Dave, Esha and Fakir"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "54521288-3fc8-4015-ba6a-7e250a5d2565",
    "mockTestId": null
  },
  {
    "question": "If the number of coins distributed to Q is twice the number distributed to P then which one of the following is necessarily true?",
    "options": {
      "A": "R gets an even number of coins.",
      "B": "R gets an odd number of coins.",
      "C": "S gets an even number of coins.",
      "D": "S gets an odd number of coins."
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "f734c607-9216-47ad-ba37-b536c09dbca2",
    "mockTestId": null
  },
  {
    "question": "If R gets at least two more coins than S, then which one of the following is necessarily true?",
    "options": {
      "A": "Q gets at least two more coins than S.",
      "B": "Q gets more coins than P.",
      "C": "P gets more coins than S.",
      "D": "P and Q together get at least five coins."
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "f734c607-9216-47ad-ba37-b536c09dbca2",
    "mockTestId": null
  },
  {
    "question": "If Q gets fewer coins than R, then which one of the following is not necessarily true?",
    "options": {
      "A": "P and Q together get at least four coins.",
      "B": "Q and S together get at least four coins.",
      "C": "R and S together get at least five coins.",
      "D": "P and R together get at least five coins."
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "f734c607-9216-47ad-ba37-b536c09dbca2",
    "mockTestId": null
  },
  {
    "question": "The maximum number of coins collected by any one of them cannot exceed",
    "options": {
      "A": "64",
      "B": "36",
      "C": "54",
      "D": "None of these"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "f734c607-9216-47ad-ba37-b536c09dbca2",
    "mockTestId": null
  },
  {
    "question": "If A collected 54 coins, then the difference in the number of coins between the one who collected maximum number of coins and the one who collected the second highest number of coins must be at least",
    "options": {
      "A": "12",
      "B": "24",
      "C": "30",
      "D": "None of these"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "f734c607-9216-47ad-ba37-b536c09dbca2",
    "mockTestId": null
  },
  {
    "question": "If A collected 54 coins and B collected two more coins than twice the number of coins collected by C, then the number of coins collected by B could be",
    "options": {
      "A": "28",
      "B": "20",
      "C": "26",
      "D": "22"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "f734c607-9216-47ad-ba37-b536c09dbca2",
    "mockTestId": null
  },
  {
    "question": "The largest of N (less than 50) that ensures a win for B is",
    "options": {
      "A": "46",
      "B": "47",
      "C": "48",
      "D": "49"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "f734c607-9216-47ad-ba37-b536c09dbca2",
    "mockTestId": null
  },
  {
    "question": "The smallest value of N (greater than 5) that ensures a win for B is",
    "options": {
      "A": "7",
      "B": "6",
      "C": "10",
      "D": "8"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "f734c607-9216-47ad-ba37-b536c09dbca2",
    "mockTestId": null
  },
  {
    "question": "What BEST can be said about the amount of money that Ritesh had with him at the end of Round 8?",
    "options": {
      "A": "₹4 or ₹5",
      "B": "Exactly ₹5",
      "C": "₹5 or ₹6",
      "D": "Exactly ₹6"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "9fc7f0e6-54c4-4a78-85a4-5fd2641db782",
    "mockTestId": null
  },
  {
    "question": "What BEST can be said about the amount of money that Pulak had with him at the end of Round 6?",
    "options": {
      "A": "Exactly ₹12",
      "B": "Exactly ₹11",
      "C": "₹12 or ₹13",
      "D": "₹11 or ₹12"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "9fc7f0e6-54c4-4a78-85a4-5fd2641db782",
    "mockTestId": null
  },
  {
    "question": "Which of the following pairings was made in Round 5?",
    "options": {
      "A": "Qasim and Suresh",
      "B": "Pulak and Ritesh",
      "C": "Pulak and Qasim",
      "D": "Pulak and Suresh"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "9fc7f0e6-54c4-4a78-85a4-5fd2641db782",
    "mockTestId": null
  },
  {
    "question": "How many goals were scored in Match 7?",
    "options": {
      "A": "3",
      "B": "2",
      "C": "1",
      "D": "Cannot be determined"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "9fc7f0e6-54c4-4a78-85a4-5fd2641db782",
    "mockTestId": null
  },
  {
    "question": "Which of the following is the correct sequence of goals scored in matches 1, 3, 5 and 7?",
    "options": {
      "A": "5, 1, 0, 1",
      "B": "3, 1, 2, 1",
      "C": "3, 2, 1, 2",
      "D": "4, 1, 2, 1"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "9fc7f0e6-54c4-4a78-85a4-5fd2641db782",
    "mockTestId": null
  },
  {
    "question": "Which of the following statement(s) is/are true?Statement-1: Amla and Sarita never scored goals in the same match.Statement-2: Harita and Sarita never scored goals in the same match.",
    "options": {
      "A": "Statement-1 only",
      "B": "Statement-2 only",
      "C": "Both the statements",
      "D": "None of the statements"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "9fc7f0e6-54c4-4a78-85a4-5fd2641db782",
    "mockTestId": null
  },
  {
    "question": "Which of the following statement(s) is/are false?Statement-1: In every match at least one player scored a goal.Statement-2: No two players scored goals in the same number of matches.",
    "options": {
      "A": "None of the statements",
      "B": "Statement-1 only",
      "C": "Both the statements",
      "D": "Statement-2 only"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "9fc7f0e6-54c4-4a78-85a4-5fd2641db782",
    "mockTestId": null
  },
  {
    "question": "If Harita scored goals in one more match as compared to Sarita, which of the following statement(s) is/are necessarily true?Statement-1: Amla scored goals in consecutive matches.Statement-2: Sarita scored goals in consecutive matches.",
    "options": {
      "A": "Statement-2 only",
      "B": "None of the statements",
      "C": "Statement-1 only",
      "D": "Both the statements"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "9fc7f0e6-54c4-4a78-85a4-5fd2641db782",
    "mockTestId": null
  },
  {
    "question": "Which two players got the double?",
    "options": {
      "A": "P1, P8",
      "B": "P2, P4",
      "C": "P8, P10",
      "D": "P1, P10"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "9fc7f0e6-54c4-4a78-85a4-5fd2641db782",
    "mockTestId": null
  },
  {
    "question": "Who won the silver medal?",
    "options": {
      "A": "P5",
      "B": "P7",
      "C": "P9",
      "D": "P1"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "9fc7f0e6-54c4-4a78-85a4-5fd2641db782",
    "mockTestId": null
  },
  {
    "question": "Who threw the last javelin in the event?",
    "options": {
      "A": "P7",
      "B": "P1",
      "C": "P9",
      "D": "P10"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "9fc7f0e6-54c4-4a78-85a4-5fd2641db782",
    "mockTestId": null
  },
  {
    "question": "What was the final score (in m) of the silver-medalist?",
    "options": {
      "A": "89.6",
      "B": "88.4",
      "C": "88.6",
      "D": "87.2"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "9fc7f0e6-54c4-4a78-85a4-5fd2641db782",
    "mockTestId": null
  },
  {
    "question": "Which of the following can be the final score (in m) of P8?",
    "options": {
      "A": "81.9",
      "B": "0",
      "C": "82.7",
      "D": "85.1"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "9fc7f0e6-54c4-4a78-85a4-5fd2641db782",
    "mockTestId": null
  },
  {
    "question": "By how much did the gold medalist improve his score (in m) in the second phase?",
    "options": {
      "A": "1.0",
      "B": "2.0",
      "C": "2.4",
      "D": "1.2"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "9fc7f0e6-54c4-4a78-85a4-5fd2641db782",
    "mockTestId": null
  },
  {
    "question": "Who among the following was DEFINITELY NOT ranked first in his/her group?",
    "options": {
      "A": "Dipen",
      "B": "Aruna",
      "C": "Brij",
      "D": "Chitra"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "9fc7f0e6-54c4-4a78-85a4-5fd2641db782",
    "mockTestId": null
  },
  {
    "question": "Which of the following pairs must have played against each other in the championship?",
    "options": {
      "A": "Deb, Donna",
      "B": "Azul, Biju",
      "C": "Donna, Chetan",
      "D": "Chitra, Dipen"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "9fc7f0e6-54c4-4a78-85a4-5fd2641db782",
    "mockTestId": null
  },
  {
    "question": "Who won the championship?",
    "options": {
      "A": "Chitra",
      "B": "Aruna",
      "C": "Brij",
      "D": "Cannot be determined"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "9fc7f0e6-54c4-4a78-85a4-5fd2641db782",
    "mockTestId": null
  },
  {
    "question": "Who among the following did NOT play against Chitra in the championship?",
    "options": {
      "A": "Aruna",
      "B": "Chetan",
      "C": "Dipen",
      "D": "Biju"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "9fc7f0e6-54c4-4a78-85a4-5fd2641db782",
    "mockTestId": null
  },
  {
    "question": "Which two candidates can belong to the same department?",
    "options": {
      "A": "Prof. Pakrasi and Prof. Qureshi",
      "B": "Prof. Pakrasi and Prof. Samuel",
      "C": "Prof. Qureshi and Prof. Ramaswamy",
      "D": "Prof. Ramaswamy and Prof. Samuel"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "47e0645a-db44-4951-b2cd-b39cd07b51e2",
    "mockTestId": null
  },
  {
    "question": "Which of the following can be the number of votes that Prof. Qureshi received from a single department?",
    "options": {
      "A": "7",
      "B": "6",
      "C": "8",
      "D": "9"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "47e0645a-db44-4951-b2cd-b39cd07b51e2",
    "mockTestId": null
  },
  {
    "question": "If Prof. Samuel belongs to B&H, which of the following statements is/are true?Statement A: Prof. Pakrasi belongs to M&S.Statement B: Prof. Ramaswamy belongs to O&Q",
    "options": {
      "A": "Neither statement A nor statement B",
      "B": "Only statement B",
      "C": "Only statement A",
      "D": "Both statements A and B"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "47e0645a-db44-4951-b2cd-b39cd07b51e2",
    "mockTestId": null
  },
  {
    "question": "What best can be concluded about the candidate from O&Q?",
    "options": {
      "A": "It was Prof. Samuel.",
      "B": "It was either Prof. Ramaswamy or Prof. Samuel.",
      "C": "It was Prof. Ramaswamy.",
      "D": "It was either Prof. Pakrasi or Prof. Qureshi."
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "47e0645a-db44-4951-b2cd-b39cd07b51e2",
    "mockTestId": null
  },
  {
    "question": "Which of the following statements is/are true?Statement A: Non-candidates from M&S voted for Prof. Qureshi.Statement B: Non-candidates from F&A voted for Prof. Qureshi.",
    "options": {
      "A": "Both statements A and B",
      "B": "Only statement B",
      "C": "Only statement A",
      "D": "Neither statement A nor statement B"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "47e0645a-db44-4951-b2cd-b39cd07b51e2",
    "mockTestId": null
  },
  {
    "question": "What was the total amount spent on tickets (in Rs.) by Bipasha?",
    "options": {
      "A": "90",
      "B": "120",
      "C": "110",
      "D": "100"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "47e0645a-db44-4951-b2cd-b39cd07b51e2",
    "mockTestId": null
  },
  {
    "question": "Which were all the rides that Anjali completed by 2:00 pm?",
    "options": {
      "A": "Ride-1 and Ride-3",
      "B": "Ride-1, Ride-2, and Ride-3",
      "C": "Ride-1, Ride-2, and Ride-4",
      "D": "Ride-1 and Ride-4"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "47e0645a-db44-4951-b2cd-b39cd07b51e2",
    "mockTestId": null
  },
  {
    "question": "Which ride was taken by all three visitors?",
    "options": {
      "A": "Ride-1",
      "B": "Ride-4",
      "C": "Ride-3",
      "D": "Ride-2"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "47e0645a-db44-4951-b2cd-b39cd07b51e2",
    "mockTestId": null
  },
  {
    "question": "How many households did Lahur meet on the second day?",
    "options": {
      "A": "between 21 and 29",
      "B": "20 or less",
      "C": "more than 35",
      "D": "between 30 and 35"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "47e0645a-db44-4951-b2cd-b39cd07b51e2",
    "mockTestId": null
  },
  {
    "question": "How many households did Tohri meet on the first day?",
    "options": {
      "A": "between 21 and 40",
      "B": "between 11 and 20",
      "C": "more than 40",
      "D": "10 or less"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "47e0645a-db44-4951-b2cd-b39cd07b51e2",
    "mockTestId": null
  },
  {
    "question": "Which of the following statements is FALSE?",
    "options": {
      "A": "Among the three, Tohri had the highest success rate on the second day.",
      "B": "Tohri had a higher success rate on the first day compared to the second day.",
      "C": "Among the three, Tohri had the highest success rate on the first day.",
      "D": "Among the three, Lahur had the lowest success rate on the first day."
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "47e0645a-db44-4951-b2cd-b39cd07b51e2",
    "mockTestId": null
  },
  {
    "question": "Who among the following definitely received a token from Bithi but not from Dhanavi?",
    "options": {
      "A": "Pragnyaa",
      "B": "Rasheeda",
      "C": "Qahira",
      "D": "Tantra"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "47e0645a-db44-4951-b2cd-b39cd07b51e2",
    "mockTestId": null
  },
  {
    "question": "Which of the following could be the amount of funding that Tantra received?(a) Rs. 66,000(b) Rs. 165,000",
    "options": {
      "A": "Neither (a) nor (b)",
      "B": "Only (b)",
      "C": "Only (a)",
      "D": "Both (a) and (b)"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "47e0645a-db44-4951-b2cd-b39cd07b51e2",
    "mockTestId": null
  },
  {
    "question": "Which one among the following stations is visited the largest number of times?",
    "options": {
      "A": "Station C",
      "B": "Station E",
      "C": "Station D",
      "D": "Station F"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "c89c22a9-cc5c-4af6-a2a2-a633c992067f",
    "mockTestId": null
  },
  {
    "question": "Which team patrols the street connecting Stations D and E at 10:15 hrs?",
    "options": {
      "A": "Team 4",
      "B": "Team 1",
      "C": "Team 2",
      "D": "Team 3"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "c89c22a9-cc5c-4af6-a2a2-a633c992067f",
    "mockTestId": null
  },
  {
    "question": "How many teams pass through Station C in a day?",
    "options": {
      "A": "4",
      "B": "3",
      "C": "1",
      "D": "2"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "c89c22a9-cc5c-4af6-a2a2-a633c992067f",
    "mockTestId": null
  },
  {
    "question": "Which of the following is the closest to the time when Nandini’s application process got over?",
    "options": {
      "A": "9:50 am",
      "B": "9:37 am",
      "C": "9:35 am",
      "D": "9:45 am"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "c89c22a9-cc5c-4af6-a2a2-a633c992067f",
    "mockTestId": null
  },
  {
    "question": "Which of the following statements is false?",
    "options": {
      "A": "The application process of Osman was completed before 9:45 am.",
      "B": "The application process of Mahira started after Nandini’s.",
      "C": "The application process of Osman was completed before Vijay’s.",
      "D": "The application process of Mahira was completed before Nandini’s."
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "c89c22a9-cc5c-4af6-a2a2-a633c992067f",
    "mockTestId": null
  },
  {
    "question": "When did the application processing for all US applicants get over on that day?",
    "options": {
      "A": "2:05 pm",
      "B": "2:25 pm",
      "C": "2:00 pm",
      "D": "3:40 pm"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "c89c22a9-cc5c-4af6-a2a2-a633c992067f",
    "mockTestId": null
  },
  {
    "question": "What is the correct sequence of number of papers written by B, C, E and G, respectively?",
    "options": {
      "A": "1, 2, 2, 3",
      "B": "1, 3, 3, 1",
      "C": "3, 1, 1, 3",
      "D": "1, 2, 2, 1"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "c89c22a9-cc5c-4af6-a2a2-a633c992067f",
    "mockTestId": null
  },
  {
    "question": "Which of the following statement(s) MUST be true?Statement A: Every issue had at least one paper by author(s) from each country.Statement B: Every issue had at most two papers by author(s) from each area.",
    "options": {
      "A": "Both the statements",
      "B": "Only Statement B",
      "C": "Only Statement A",
      "D": "Neither of the statements"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "c89c22a9-cc5c-4af6-a2a2-a633c992067f",
    "mockTestId": null
  },
  {
    "question": "Which of the following statements is FALSE?",
    "options": {
      "A": "Every issue had at least one paper by author(s) from Automation area.",
      "B": "Every issue had exactly one paper by a Chinese author.",
      "C": "Every issue had exactly two papers by authors from Logistics area.",
      "D": "Every issue had exactly two papers by Indian authors."
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "c89c22a9-cc5c-4af6-a2a2-a633c992067f",
    "mockTestId": null
  },
  {
    "question": "Which of the following statements is FALSE?",
    "options": {
      "A": "There were exactly two papers by authors from Manufacturing area in the January issue.",
      "B": "There was exactly one paper by an author from Manufacturing area in the April issue.",
      "C": "There was exactly one paper by an author from Logistics area in the October issue.",
      "D": "There were exactly two papers by authors from Manufacturing area in the July issue."
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "c89c22a9-cc5c-4af6-a2a2-a633c992067f",
    "mockTestId": null
  },
  {
    "question": "Which of the following is the correct sequence of number of papers by authors from Automation, Manufacturing and Logistics areas, respectively?",
    "options": {
      "A": "6, 5, 7",
      "B": "6, 6, 6",
      "C": "6, 7, 5",
      "D": "5, 6, 7"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "c89c22a9-cc5c-4af6-a2a2-a633c992067f",
    "mockTestId": null
  },
  {
    "question": "Which one of the following statements is true?",
    "options": {
      "A": "Two seminars are scheduled in the first slot.",
      "B": "Only one seminar is scheduled in the second slot.",
      "C": "Three seminars are scheduled in the first slot.",
      "D": "Three seminars are scheduled in the last slot."
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "c89c22a9-cc5c-4af6-a2a2-a633c992067f",
    "mockTestId": null
  },
  {
    "question": "Who all are NOT guiding any Economics students?",
    "options": {
      "A": "Q, R and S",
      "B": "P, Q and R",
      "C": "P, R and S",
      "D": "P, Q and S"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "c89c22a9-cc5c-4af6-a2a2-a633c992067f",
    "mockTestId": null
  },
  {
    "question": "Which of the following statements is necessarily true?",
    "options": {
      "A": "Q is guiding G.",
      "B": "H is an Economics student.",
      "C": "S is guiding F.",
      "D": "B is scheduled in the first slot."
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "c89c22a9-cc5c-4af6-a2a2-a633c992067f",
    "mockTestId": null
  },
  {
    "question": "If D is scheduled in a slot later than Q's, then which of the following two statement(s) is(are) true?(i) E and H are guided by T.(ii) G is guided by Q.",
    "options": {
      "A": "Only (ii)",
      "B": "Neither (i) nor (ii)",
      "C": "Only (i)",
      "D": "Both (i) and (ii)"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "c89c22a9-cc5c-4af6-a2a2-a633c992067f",
    "mockTestId": null
  },
  {
    "question": "While Balbir had his back turned, a dog ran into his butcher shop, snatched a piece of meat off the counter and ran out. Balbir was mad when he realised what had happened. He asked three other shopkeepers, who had seen the dog, to describe it. The shopkeepers really did not want to help Balbir. So each of them made a statement which contained one truth and one lie.. Shopkeeper number 1 said: “The dog had black hair and a long tail.”. Shopkeeper number 2 said: “The dog had a short tail and wore a collar.”. Shopkeeper number 3 said: “The dog had white hair and no collar.”Based on the above statements, which of the following could be a correct description?",
    "options": {
      "A": "The dog had white hair, short tail and no collar",
      "B": "The dog had white hair, long tail and a collar",
      "C": "The dog had black hair, long tail and a collar",
      "D": "The dog had black hair, long tail and no collar"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "65737119-9560-4c5a-8b99-dfe577835617",
    "mockTestId": null
  },
  {
    "question": "P, Q, R and S are four statements. Relation between these statements is as follows.I. If P is true, then Q must be true.II. If Q is true, then R must be true.III. If S is true, then either Q is false or R is false.Which of the following must be true?",
    "options": {
      "A": "If P is true, then S is false",
      "B": "If S is false, then Q must be true",
      "C": "If Q is true, then P must be true",
      "D": "If R is true, then Q must be true"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "65737119-9560-4c5a-8b99-dfe577835617",
    "mockTestId": null
  },
  {
    "question": "Saira, Mumtaz and Zeenat have a ball, a pen and a pencil, and each girl has just one object in hand. Among the following statements, only one is true and the other two are false.\nI. Saira has a ball.\nII. Mumtaz does not have the ball.\nIII. Zeenat does not have the pen.Who has the ball?",
    "options": {
      "A": "Saira",
      "B": "Mumtaz",
      "C": "Zeenat",
      "D": "Cannot be determined"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "65737119-9560-4c5a-8b99-dfe577835617",
    "mockTestId": null
  },
  {
    "question": "A triangle is drawn with its vertices on the circle C such that one of its sides is a diameter of C and the other two sides have their lengths in the ratio a : b. If the radius of the circle is r, then the area of the triangle is",
    "options": {
      "A": "$$\\frac{abr^{2}}{2(a^{2}+b^{2})}$$",
      "B": "$$\\frac{2abr^{2}}{a^{2}+b^{2}}$$",
      "C": "$$\\frac{4abr^{2}}{a^{2}+b^{2}}$$",
      "D": "$$\\frac{abr^{2}}{a^{2}+b^{2}}$$"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "785c9b13-fa97-4dae-b6b7-b1a701cdbcba",
    "mockTestId": null
  },
  {
    "question": "A rectangle with the largest possible area is drawn inside a semicircle of radius 2 cm. Then, the ratio of the lengths of the largest to the smallest side of this rectangle is",
    "options": {
      "A": "2 : 1",
      "B": "1 : 1",
      "C": "$$\\sqrt{5} : 1$$",
      "D": "$$\\sqrt{2} : 1$$"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "785c9b13-fa97-4dae-b6b7-b1a701cdbcba",
    "mockTestId": null
  },
  {
    "question": "In a rectangle ABCD, AB = 9 cm and BC = 6 cm. P and Q are two points on BC such that the areas of the figures ABP, APQ, and AQCD are in geometric progression. If the area of the figure AQCD is four times the area of triangle ABP, then BP : PQ : QC is",
    "options": {
      "A": "1:2:4",
      "B": "1:2:1",
      "C": "2:4:1",
      "D": "1:1:2"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "785c9b13-fa97-4dae-b6b7-b1a701cdbcba",
    "mockTestId": null
  },
  {
    "question": "All the vertices of a rectangle lie on a circle of radius R. If the perimeter of the rectangle is P, then the area of the rectangle is",
    "options": {
      "A": "$$\\frac{P^2}{16} - R^2$$",
      "B": "$$\\frac{P^2}{8} - 2R^2$$",
      "C": "$$\\frac{P^2}{2} - 2PR$$",
      "D": "$$\\frac{P^2}{8} - \\frac{R^2}{2}$$"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "785c9b13-fa97-4dae-b6b7-b1a701cdbcba",
    "mockTestId": null
  },
  {
    "question": "If the area of a regular hexagon is equal to the area of an equilateral triangle of side 12 cm, then the length, in cm, of each side of the hexagon is",
    "options": {
      "A": "$$4\\sqrt{6}$$",
      "B": "$$6\\sqrt{6}$$",
      "C": "$$\\sqrt{6}$$",
      "D": "$$2\\sqrt{6}$$"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "785c9b13-fa97-4dae-b6b7-b1a701cdbcba",
    "mockTestId": null
  },
  {
    "question": "If a rhombus has area 12 sq cm and side length 5 cm, then the length, in cm, of its longer diagonal is",
    "options": {
      "A": "$$\\sqrt{37}+\\sqrt{13}$$",
      "B": "$$\\sqrt{13}+\\sqrt{12}$$",
      "C": "$$\\frac{\\sqrt{37}+\\sqrt{13}}{2}$$",
      "D": "$$\\frac{\\sqrt{13}+\\sqrt{12}}{2}$$"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "785c9b13-fa97-4dae-b6b7-b1a701cdbcba",
    "mockTestId": null
  },
  {
    "question": "The cost of fencing a rectangular plot is ₹ 200 per ft along one side, and ₹ 100 per ft along the three other sides. If the area of the rectangular plot is 60000 sq. ft, then the lowest possible cost of fencing all four sides, in INR, is",
    "options": {
      "A": "120000",
      "B": "90000",
      "C": "100000",
      "D": "160000"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "785c9b13-fa97-4dae-b6b7-b1a701cdbcba",
    "mockTestId": null
  },
  {
    "question": "Let ABCD be a parallelogram. The lengths of the side AD and the diagonal AC are 10cm and 20cm, respectively. If the angle $$\\angle ADC$$ is equal to $$30^{0}$$ then the area of the parallelogram, in sq.cm is",
    "options": {
      "A": "$$\\frac{25(\\sqrt{5}+\\sqrt{15})}{2}$$",
      "B": "$$25(\\sqrt{3}+\\sqrt{15})$$",
      "C": "$$\\frac{25(\\sqrt{3}+\\sqrt{15})}{2}$$",
      "D": "$${25(\\sqrt{5}+\\sqrt{15})}$$"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "785c9b13-fa97-4dae-b6b7-b1a701cdbcba",
    "mockTestId": null
  },
  {
    "question": "A solid right circular cone of height 27 cm is cut into two pieces along a plane parallel to its base at a height of 18 cm from the base. If the difference in volume of the two pieces is 225 cc, the volume, in cc, of the original cone is",
    "options": {
      "A": "243",
      "B": "232",
      "C": "256",
      "D": "264"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "785c9b13-fa97-4dae-b6b7-b1a701cdbcba",
    "mockTestId": null
  },
  {
    "question": "On a rectangular metal sheet of area 135 sq in, a circle is painted such that the circle touches two opposite sides. If the area of the sheet left unpainted is two-thirds of the painted area then the perimeter of the rectangle in inches is",
    "options": {
      "A": "$$3\\sqrt{\\pi}(5+\\frac{12}{\\pi})$$",
      "B": "$$4\\sqrt{\\pi}(3+\\frac{9}{\\pi})$$",
      "C": "$$3\\sqrt{\\pi}(\\frac{5}{2}+\\frac{6}{\\pi})$$",
      "D": "$$5\\sqrt{\\pi}(3+\\frac{9}{\\pi})$$"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "785c9b13-fa97-4dae-b6b7-b1a701cdbcba",
    "mockTestId": null
  },
  {
    "question": "The sum of the perimeters of an equilateral triangle and a rectangle is 90cm. The area, T, of the triangle and the area, R, of the rectangle, both in sq cm, satisfying the relationship $$R=T^{2}$$. If the sides of the rectangle are in the ratio 1:3, then the length, in cm, of the longer side of the rectangle, is",
    "options": {
      "A": "27",
      "B": "21",
      "C": "24",
      "D": "18"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "785c9b13-fa97-4dae-b6b7-b1a701cdbcba",
    "mockTestId": null
  },
  {
    "question": "A circle is inscribed in a rhombus with diagonals 12 cm and 16 cm. The ratio of the area of circle to the area of rhombus is",
    "options": {
      "A": "$$\\frac{6\\pi}{25}$$",
      "B": "$$\\frac{5\\pi}{18}$$",
      "C": "$$\\frac{3\\pi}{25}$$",
      "D": "$$\\frac{2\\pi}{15}$$"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "785c9b13-fa97-4dae-b6b7-b1a701cdbcba",
    "mockTestId": null
  },
  {
    "question": "The person having the largest Erdos number at the end of the conference must have had Erdos number (at that time):",
    "options": {
      "A": "5",
      "B": "7",
      "C": "9",
      "D": "14",
      "E": "15"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "1d3eedff-8cbf-4c75-ac7a-4cdab0db28c9",
    "mockTestId": null
  },
  {
    "question": "How many participants in the conference did not change their Erdos number during the conference?",
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "5",
      "E": "Cannot be determined"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "1d3eedff-8cbf-4c75-ac7a-4cdab0db28c9",
    "mockTestId": null
  },
  {
    "question": "The Erdos number of C at the end of the conference was:",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4",
      "E": "5"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "1d3eedff-8cbf-4c75-ac7a-4cdab0db28c9",
    "mockTestId": null
  },
  {
    "question": "The Erdos number of E at the beginning of the conference was:",
    "options": {
      "A": "2",
      "B": "5",
      "C": "6",
      "D": "7",
      "E": "8"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "1d3eedff-8cbf-4c75-ac7a-4cdab0db28c9",
    "mockTestId": null
  },
  {
    "question": "How many participants had the same Erdos number at the beginning of the conference?",
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "5",
      "E": "Cannot be determined"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "1d3eedff-8cbf-4c75-ac7a-4cdab0db28c9",
    "mockTestId": null
  },
  {
    "question": "In a hospital there were 200 diabetes, 150 hyperglycaemia and 150 gastro-enteritis patients. Of these, 80 patients were treated for both diabetices and hyperglycaemia. Sixty patients were treated for gastro-enteritis and hyperglycaemia, while 70 were treated for diabetes and gastroenteritis. Some of these patients have all the three diseases. Dr. Dennis treats patients with only gastro-enteritis. Dr. Paul is a generalist. Therefore, he can treat patients with multiple diseases. Patients always prefer a specialist for their disease. If Dr. Dennis had 80 patients, then the other three doctors can be arranged in terms of the number of patients treated as:",
    "options": {
      "A": "Paul > Gerard > Hormis",
      "B": "Paul > Hormis > Gerard",
      "C": "Gerard > Paul > Hormis",
      "D": "Cannot be determined"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "1d3eedff-8cbf-4c75-ac7a-4cdab0db28c9",
    "mockTestId": null
  },
  {
    "question": "How many total oranges were in the basket at the end of the above sequence?",
    "options": {
      "A": "1",
      "B": "4",
      "C": "3",
      "D": "2"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "1d3eedff-8cbf-4c75-ac7a-4cdab0db28c9",
    "mockTestId": null
  },
  {
    "question": "How many total fruits will be in the basket at the end of the above order sequence?",
    "options": {
      "A": "9",
      "B": "8",
      "C": "11",
      "D": "10"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "1d3eedff-8cbf-4c75-ac7a-4cdab0db28c9",
    "mockTestId": null
  },
  {
    "question": "The sum of A and B is given by:",
    "options": {
      "A": "/(@ (A, B),2)",
      "B": "X(@(A, B), 2)",
      "C": "@(/(A, B), 2",
      "D": "@ (X(A, B), 2)"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "1d3eedff-8cbf-4c75-ac7a-4cdab0db28c9",
    "mockTestId": null
  },
  {
    "question": "Average of A, B and C is given by:",
    "options": {
      "A": "@ (/(@(/(B, A), 2), C), 3)",
      "B": "X(@(/(@(B, A), 3), C), 2)",
      "C": "/((X(@ (B, A), 2), C), 3)",
      "D": "/(X(@ (/(@(B, A), 2), C), 3), 2)"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "1d3eedff-8cbf-4c75-ac7a-4cdab0db28c9",
    "mockTestId": null
  },
  {
    "question": "Three labeled boxes containing red and white cricket balls are all mislabeled. It is known that one of the boxes contains only white balls and one only red balls. The third contains a mixture of red and white balls. You are required to correctly label the boxes with the labels red, white and red and white by picking a sample of one ball from only one box. What is the label on the box you should sample?",
    "options": {
      "A": "White",
      "B": "Red",
      "C": "Red and White",
      "D": "Not possible to determine from a sample of one ball"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "1d3eedff-8cbf-4c75-ac7a-4cdab0db28c9",
    "mockTestId": null
  },
  {
    "question": "$$\\frac{(2\\#1)}{(1 \\triangledown 2)}$$ =",
    "options": {
      "A": "$$\\frac{1}{8}$$",
      "B": "$$1$$",
      "C": "$$\\frac{3}{8}$$",
      "D": "$$3$$"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "1d3eedff-8cbf-4c75-ac7a-4cdab0db28c9",
    "mockTestId": null
  },
  {
    "question": "$$\\frac{((1\\#1) \\# 2) - (10^{1.3} \\triangledown \\log_{10}{0.1})}{1 \\triangledown 2}$$",
    "options": {
      "A": "$$\\frac{3}{8}$$",
      "B": "$$\\frac{4.\\log_{10}{0.1}}{8}$$",
      "C": "$$\\frac{(4 + 10^{13})}{8}$$",
      "D": "None of these"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "1d3eedff-8cbf-4c75-ac7a-4cdab0db28c9",
    "mockTestId": null
  },
  {
    "question": "There were 'x' pigeons and 'y' mynahs in a cage. One fine morning, 'p' birds escaped to freedom. The bird-keeper, knowing only that p = 7, was able to figure out without looking into the cage that at least one pigeon had escaped. Which of the following does not represent a possible (x,y) pair?",
    "options": {
      "A": "(10,8)",
      "B": "(7,2)",
      "C": "(25,6)",
      "D": "(12,4)"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "1d3eedff-8cbf-4c75-ac7a-4cdab0db28c9",
    "mockTestId": null
  },
  {
    "question": "Facts, which deal with pieces of information that one has heard, seen or read, and which are open to discovery or verification (the answer option indicates such a statement with an `F’).Inferences,which are conclusions drawn about the unknown, on the basis of the known (the answer option indicates such a statement with an `I’).Judgements which are opinions that imply approval or disapproval of persons, objects, situations and occurrences in the past, the present or the future (the answer option indicates such a statement with a J)Select the answer option that best describes the set of four statements.1.So much of our day-to-day focus seems to be on getting things done, trudging our way through the tasks of living - it can feel like a treadmill that gets you nowhere; where is the childlike joy?2.We are not doing the things that make us happy; that which brings us joy; the things that we cannot wait to do because we enjoy them so much.3.This is the stuff that joyful living is made of - identifying your calling and committing yourself wholeheartedly to it.4.When this happens, each moment becomes a celebration of you; there is a rush of energy that comes with feeling completely immersed in doing what you love most.",
    "options": {
      "A": "IIIJ",
      "B": "IFIJ",
      "C": "JFJJ",
      "D": "JJJJ",
      "E": "JFII"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "83782f22-fa4c-493b-aa64-79ba3affe431",
    "mockTestId": null
  },
  {
    "question": "Facts, which deal with pieces of information that one has heard, seen or read, and which are open to discovery or verification (the answer option indicates such a statement with an `F’).Inferences,which are conclusions drawn about the unknown, on the basis of the known (the answer option indicates such a statement with an `I’).Judgements which are opinions that imply approval or disapproval of persons, objects, situations and occurrences in the past, the present or the future (the answer option indicates such a statement with a J)Select the answer option that best describes the set of four statements.1.Given the poor quality of service in the public sector, the HIV/AIDS affected should be switching to private initiatives that supply anti-retroviral drugs (ARVs) at a low cost.2.The government has been supplying free drugs since 2004, and 35000 have benefited up to now - though the size of the affected population is 150 times this number.3.The recent initiatives of networks and companies like AIDSCare Network, Emcure,  Reliance-Cipla-CII, would lead to availability of much-needed drugs to a larger number of  affected people.4.But how ironic it is that we should face a perennial shortage of drugs when India is one of  the world’s largest suppliers of generic drugs to the developing world.",
    "options": {
      "A": "JFIJ",
      "B": "JIIJ",
      "C": "IFIJ",
      "D": "IFFJ",
      "E": "JFII"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "83782f22-fa4c-493b-aa64-79ba3affe431",
    "mockTestId": null
  },
  {
    "question": "Facts, which deal with pieces of information that one has heard, seen or read, and which are open to discovery or verification (the answer option indicates such a statement with an `F’).Inferences,which are conclusions drawn about the unknown, on the basis of the known (the answer option indicates such a statement with an `I’).Judgements which are opinions that imply approval or disapproval of persons, objects, situations and occurrences in the past, the present or the future (the answer option indicates such a statement with a J)Select the answer option that best describes the set of four statements.1.According to all statistical indications, the Sarva Shiksha Abhiyan has managed to keep pace with its ambitious goals.2.The Mid-day Meal Scheme has been a significant incentive for the poor to send their little ones to school, thus establishing the vital link between healthy bodies and healthy minds.3.Only about 13 million children in the age group of 6 to 14 years are out of school.4.The goal of universalisation of elementary education has to be a pre-requisite for the evolution and development of our country.",
    "options": {
      "A": "IIFJ",
      "B": "JIIJ",
      "C": "IJFJ",
      "D": "IJFI",
      "E": "JIFT"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "83782f22-fa4c-493b-aa64-79ba3affe431",
    "mockTestId": null
  },
  {
    "question": "Facts, which deal with pieces of information that one has heard, seen or read, and which are open to discovery or verification (the answer option indicates such a statement with an `F’).Inferences,which are conclusions drawn about the unknown, on the basis of the known (the answer option indicates such a statement with an `I’).Judgements which are opinions that imply approval or disapproval of persons, objects, situations and occurrences in the past, the present or the future (the answer option indicates such a statement with a J)Select the answer option that best describes the set of four statements.1.We should not be hopelessly addicted to an erroneous belief that corruption in India is caused by the crookedness of Indians.2.The truth is that we have more red tape - we take eighty-nine days to start a small business, Australians take two.3.Red tape leads to corruption and distorts a people’s character.4.Every red tape procedure is a point of contact with an official, and such contacts have the potential to become opportunities for money to change hands.",
    "options": {
      "A": "JFIF",
      "B": "JFJJ",
      "C": "JIJF",
      "D": "IFJF",
      "E": "JFJI"
    },
    "answer": "E",
    "type": "Multiple Choice",
    "topicId": "83782f22-fa4c-493b-aa64-79ba3affe431",
    "mockTestId": null
  },
  {
    "question": "Facts, which deal with pieces of information that one has heard, seen or read, and which are open to discovery or verification (the answer option indicates such a statement with an `F’).Inferences,which are conclusions drawn about the unknown, on the basis of the known (the answer option indicates such a statement with an `I’).Judgements which are opinions that imply approval or disapproval of persons, objects, situations and occurrences in the past, the present or the future (the answer option indicates such a statement with a J)Select the answer option that best describes the set of four statements.1.Inequitable distribution of all kinds of resources is certainly one of the strongest and most   sinister sources of conflict.2.Even without war, we know that conflicts continue to trouble us - they only change in character.3.Extensive disarmament is the only insurance for our future; imagine the amount of resources that can be released and redeployed.4.The economies of the industrialized western world derive 20% of their income from the  sale of all kinds of arms.",
    "options": {
      "A": "IJJI",
      "B": "JIJF",
      "C": "IIJF",
      "D": "JIIF",
      "E": "IJIF"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "83782f22-fa4c-493b-aa64-79ba3affe431",
    "mockTestId": null
  },
  {
    "question": "A. No cowboys laugh. Some who laugh are sphinxes. Some sphinxes are not cowboys.B. All ghosts are fluorescent. Some ghosts do not sing. Some singers are not fluorescent.C. Cricketers indulge in swearing. Those who swear are hanged. Some who are hanged are not cricketers.D. Some crazy people are pianists. All crazy people are whistlers. Some whistlers are pianists.",
    "options": {
      "A": "A and B",
      "B": "C only",
      "C": "A and D",
      "D": "D only"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "83782f22-fa4c-493b-aa64-79ba3affe431",
    "mockTestId": null
  },
  {
    "question": "A. All good people are knights. All warriors are good people. All knights are warriors.B. No footballers are ministers. All footballers are tough. Some ministers are players.C. All pizzas are snacks. Some meals are pizzas. Some meals are snacks.D. Some barkers are musk-deer. All barkers are sloth bears. Some sloth bears are musk-deer.",
    "options": {
      "A": "C and D",
      "B": "B and C",
      "C": "A only",
      "D": "C only"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "83782f22-fa4c-493b-aa64-79ba3affe431",
    "mockTestId": null
  },
  {
    "question": "A. Dinosaurs are pre-historic creatures. Water-buffaloes are not dinosaurs. Water-buffaloes are not pre- historic creatures.B. All politicians are frank. No frank people are crocodiles. No crocodiles are politicians.C. No diamond is quartz. No opal is quartz. Diamonds are opals.D. All monkeys like bananas. Some GI Joes like bananas. Some GI Joes are monkeys.",
    "options": {
      "A": "C only",
      "B": "B only",
      "C": "A and D",
      "D": "B and C"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "83782f22-fa4c-493b-aa64-79ba3affe431",
    "mockTestId": null
  },
  {
    "question": "A. All earthquakes cause havoc. Some landslides cause havoc. Some earthquakes cause landslides.B. All glass things are transparent. Some curios are glass things. Some curios are transparent.C. All clay objects are brittle. All XY are clay objects. Some XY are brittle.D. No criminal is a patriot. Ram is not a patriot. Ram is a criminal.",
    "options": {
      "A": "D only",
      "B": "B only",
      "C": "C and B",
      "D": "A only"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "83782f22-fa4c-493b-aa64-79ba3affe431",
    "mockTestId": null
  },
  {
    "question": "A. MD is an actor. Some actors are pretty. MD is pretty.B. Some men are cops. All cops are brave. Some brave people are cops.C. All cops are brave. Some men are cops. Some men are brave.D. All actors are pretty; MD is not an actor; MD is not pretty.",
    "options": {
      "A": "D only",
      "B": "C only",
      "C": "A only",
      "D": "B and C"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "83782f22-fa4c-493b-aa64-79ba3affe431",
    "mockTestId": null
  },
  {
    "question": "A. All IIMs are in India. No BIMs are in India. No IIMs are BIMs.B. All IIMs are in India. No BIMs are in India. No BIMs are IIMs.C. Some IIMs are not in India. Some BIMs are not in India. Some IIMs are BIMs.D. Some IIMs are not in India. Some BIMs are not in India. Some BIMs are IIMs.",
    "options": {
      "A": "A and B",
      "B": "C and D",
      "C": "A only",
      "D": "B only"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "83782f22-fa4c-493b-aa64-79ba3affe431",
    "mockTestId": null
  },
  {
    "question": "A. All mammals are viviparous. Some fish are viviparous. Some fish are mammals.B. All birds are oviparous. Some fish are not oviparous. Some fish are birds.C. No mammal is oviparous. Some creatures are oviparous and some are not. Some creatures are not mammals.D. Some creatures are mammals. Some creatures are viviparous. Some mammals are viviparous.",
    "options": {
      "A": "A only",
      "B": "B only",
      "C": "C only",
      "D": "D only"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "83782f22-fa4c-493b-aa64-79ba3affe431",
    "mockTestId": null
  },
  {
    "question": "A. Many singers are not writers. All poets are singers. Some poets are not writers.B. Giants climb beanstalks. Some chicken do not climb beanstalks. Some chicken are not giants.C. All explorers live in snowdrifts. Some penguins live in snowdrifts. Some penguins are explorers.D. Amar is taller than Akbar. Anthony is shorter than Amar. Akbar is shorter than Anthony.",
    "options": {
      "A": "A only",
      "B": "B only",
      "C": "B and C",
      "D": "D only"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "83782f22-fa4c-493b-aa64-79ba3affe431",
    "mockTestId": null
  },
  {
    "question": "A. A few farmers are rocket scientists. Some rocket scientists catch snakes. A few farmers catch snakes.B. Poonam is a kangaroo. Some kangaroos are made of teak. Poonam is made of teak.C. No bulls eat grass. All matadors eat grass. No matadors are bulls.D. Some skunks drive Cadillacs. All skunks are polar bears. Some polar bears drive Cadillacs.",
    "options": {
      "A": "B only",
      "B": "A and C",
      "C": "C only",
      "D": "C and D"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "83782f22-fa4c-493b-aa64-79ba3affe431",
    "mockTestId": null
  },
  {
    "question": "A. All software companies employ knowledge workers.B. Tara Tech employs knowledge workers.C. Tara Tech is a software company.D. Some software companies employ knowledge workers.E. Tara Tech employs only knowledge workers.",
    "options": {
      "A": "ABC",
      "B": "ACB",
      "C": "CDB",
      "D": "ACE"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "83782f22-fa4c-493b-aa64-79ba3affe431",
    "mockTestId": null
  },
  {
    "question": "A. Traffic congestion increases carbon monoxide in the environment.B. Increase in carbon monoxide is hazardous to health.C. Traffic congestion is hazardous to health.D. Some traffic congestion does not cause increased carbon monoxide.E. Some traffic congestion is not hazardous to health.",
    "options": {
      "A": "CBA",
      "B": "BDE",
      "C": "CDE",
      "D": "BAC"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "83782f22-fa4c-493b-aa64-79ba3affe431",
    "mockTestId": null
  },
  {
    "question": "A. Apples are not sweets.B. Some apples are sweet.C. All sweets are tasty.D. Some apples are not tasty.E. No apple is tasty.",
    "options": {
      "A": "CEA",
      "B": "BDC",
      "C": "CBD",
      "D": "EAC"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "83782f22-fa4c-493b-aa64-79ba3affe431",
    "mockTestId": null
  },
  {
    "question": "A. Some towns in India are polluted.B. All polluted towns should be destroyed.C. Town Meghana should be destroyed.D. Town Meghana is polluted.E. Some towns in India should be destroyed.",
    "options": {
      "A": "BDE",
      "B": "BAE",
      "C": "ADE",
      "D": "CDB"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "83782f22-fa4c-493b-aa64-79ba3affe431",
    "mockTestId": null
  },
  {
    "question": "A. No patriot is a criminal.B. Bundledas is not a criminal.C. Bundledas is a patriot.D. Bogusdas is not a patriot.E. Bogusdas is a criminal.",
    "options": {
      "A": "ACB",
      "B": "ABC",
      "C": "ADE",
      "D": "ABE"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "83782f22-fa4c-493b-aa64-79ba3affe431",
    "mockTestId": null
  },
  {
    "question": "A. Ant eaters like ants.B. Boys are ant eaters.C. Balaram is an ant eater.D. Balaram likes ants.E. Balaram may eat ants.",
    "options": {
      "A": "DCA",
      "B": "ADC",
      "C": "ABE",
      "D": "ACD"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "83782f22-fa4c-493b-aa64-79ba3affe431",
    "mockTestId": null
  },
  {
    "question": "Let both the series $$a_{1},a_{2},a_{3}$$... and $$b_{1},b_{2},b_{3}$$... be in arithmetic progression such that the common differences of both the series are prime numbers. If $$a_{5}=b_{9},a_{19}=b_{19}$$ and $$b_{2}=0$$, then $$a_{11}$$ equals",
    "options": {
      "A": "86",
      "B": "79",
      "C": "83",
      "D": "84"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "1de28ed4-ccc2-431b-b862-76b9596b21e0",
    "mockTestId": null
  },
  {
    "question": "The value of $$1 + \\left(1 + \\frac{1}{3}\\right)\\frac{1}{4} + \\left(1 + \\frac{1}{3} + \\frac{1}{9}\\right)\\frac{1}{16} + \\left(1 + \\frac{1}{3} + \\frac{1}{9} + \\frac{1}{27}\\right)\\frac{1}{64} + -------$$ is",
    "options": {
      "A": "$$\\frac{15}{13}$$",
      "B": "$$\\frac{27}{12}$$",
      "C": "$$\\frac{15}{8}$$",
      "D": "$$\\frac{16}{11}$$"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "1de28ed4-ccc2-431b-b862-76b9596b21e0",
    "mockTestId": null
  },
  {
    "question": "Let $$a_n = 46 + 8n$$ and $$b_n = 98 + 4n$$ be two sequences for natural numbers $$n \\leq 100$$. Then, the sum of all terms common to both the sequences is",
    "options": {
      "A": "14900",
      "B": "14798",
      "C": "15000",
      "D": "14602"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "1de28ed4-ccc2-431b-b862-76b9596b21e0",
    "mockTestId": null
  },
  {
    "question": "For any natural number n, suppose the sum of the first n terms of an arithmetic progression is $$(n + 2n^2)$$. If the $$n^{th}$$ term of the progression is divisible by 9, then the smallest possible value of n is",
    "options": {
      "A": "9",
      "B": "4",
      "C": "7",
      "D": "8"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "1de28ed4-ccc2-431b-b862-76b9596b21e0",
    "mockTestId": null
  },
  {
    "question": "On day one, there are 100 particles in a laboratory experiment. On day n, where $$n\\ge2$$, one out of every n articles produces another particle. If the total number of particles in the laboratory experiment increases to 1000 on day  m, then m equals",
    "options": {
      "A": "19",
      "B": "16",
      "C": "18",
      "D": "17"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "1de28ed4-ccc2-431b-b862-76b9596b21e0",
    "mockTestId": null
  },
  {
    "question": "Consider the arithmetic progression 3, 7, 11, ... and let $$A_n$$ denote the sum of the first n terms of this progression. Then the value of $$\\frac{1}{25} \\sum_{n=1}^{25} A_{n}$$ is",
    "options": {
      "A": "455",
      "B": "442",
      "C": "415",
      "D": "404"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "1de28ed4-ccc2-431b-b862-76b9596b21e0",
    "mockTestId": null
  },
  {
    "question": "Consider a sequence of real numbers, $$x_{1},x_{2},x_{3},...$$ such that $$x_{n+1}=x_{n}+n-1$$ for all $$n\\geq1$$. If $$x_{1}=-1$$ then $$x_{100}$$ is equal to",
    "options": {
      "A": "4849",
      "B": "4949",
      "C": "4950",
      "D": "4850"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "1de28ed4-ccc2-431b-b862-76b9596b21e0",
    "mockTestId": null
  },
  {
    "question": "For a sequence of real numbers $$x_{1},x_{2},...x_{n}$$, If $$x_{1}-x_{2}+x_{3}-....+(-1)^{n+1}x_{n}=n^{2}+2n$$ for all natural numbers n, then the sum $$x_{49}+x_{50}$$ equals",
    "options": {
      "A": "200",
      "B": "2",
      "C": "-200",
      "D": "-2"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "1de28ed4-ccc2-431b-b862-76b9596b21e0",
    "mockTestId": null
  },
  {
    "question": "If $$x_0 = 1, x_1 = 2$$, and $$x_{n + 2} = \\frac{1 + x_{n + 1}}{x_n}, n = 0, 1, 2, 3, ......,$$ then $$x_{2021}$$ is equal to",
    "options": {
      "A": "4",
      "B": "1",
      "C": "3",
      "D": "2"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "1de28ed4-ccc2-431b-b862-76b9596b21e0",
    "mockTestId": null
  },
  {
    "question": "The natural numbers are divided into groups as (1), (2, 3, 4), (5, 6, 7, 8, 9), ….. and so on. Then, the sum of the numbers in the 15th group is equal to",
    "options": {
      "A": "6119",
      "B": "6090",
      "C": "4941",
      "D": "7471"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "1de28ed4-ccc2-431b-b862-76b9596b21e0",
    "mockTestId": null
  },
  {
    "question": "If $$x_1=-1$$ and $$x_m=x_{m+1}+(m+1)$$ for every positive integer m, then $$X_{100}$$ equals",
    "options": {
      "A": "-5050",
      "B": "-5151",
      "C": "-5051",
      "D": "-5150"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "1de28ed4-ccc2-431b-b862-76b9596b21e0",
    "mockTestId": null
  },
  {
    "question": "Let $$a_1, a_2, ...$$ be integers such that$$a_1 - a_2 + a_3 - a_4 + .... + (-1)^{n - 1} a_n = n,$$ for all $$n \\geq 1.$$Then $$a_{51} + a_{52} + .... + a_{1023}$$ equals",
    "options": {
      "A": "0",
      "B": "1",
      "C": "10",
      "D": "-1"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "1de28ed4-ccc2-431b-b862-76b9596b21e0",
    "mockTestId": null
  },
  {
    "question": "If the population of a town is p in the beginning of any year then it becomes 3 + 2p in the beginning of the next year. If the population in the beginning of 2019 is 1000, then the population in the beginning of 2034 will be",
    "options": {
      "A": "$$(1003)^{15} + 6$$",
      "B": "$$(997)^{15} - 3$$",
      "C": "$$(997)2^{14} + 3$$",
      "D": "$$(1003)2^{15} - 3$$"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "1de28ed4-ccc2-431b-b862-76b9596b21e0",
    "mockTestId": null
  },
  {
    "question": "If $$a_{1}=\\frac{1}{2\\times5},a_{2}=\\frac{1}{5\\times8},a_{3}=\\frac{1}{8\\times11},...,$$ then $$a_{1}+a_{2}+a_{3}+...+a_{100}$$ is",
    "options": {
      "A": "$$\\frac{25}{151}$$",
      "B": "$$\\frac{1}{2}$$",
      "C": "$$\\frac{1}{4}$$",
      "D": "$$\\frac{111}{55}$$"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "1de28ed4-ccc2-431b-b862-76b9596b21e0",
    "mockTestId": null
  },
  {
    "question": "Let a, b, m and n be natural numbers such that $$a>1$$ and $$b>1$$. If $$a^{m}b^{n}=144^{145}$$, then the largest possible value of $$n-m$$ is",
    "options": {
      "A": "580",
      "B": "290",
      "C": "289",
      "D": "579"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "d8cc1ca9-60df-4b5b-99d9-be66f1bfd966",
    "mockTestId": null
  },
  {
    "question": "Let n be the least positive integer such that 168 is a factor of $$1134^{n}$$. If m is the least positive integer such that $$1134^{n}$$ is a factor of $$168^{m}$$, then m + n equals",
    "options": {
      "A": "9",
      "B": "15",
      "C": "12",
      "D": "24"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "d8cc1ca9-60df-4b5b-99d9-be66f1bfd966",
    "mockTestId": null
  },
  {
    "question": "For any natural numbers m, n, and k, such that k divides both $$m+2n$$ and $$3m+4n$$, k must be a common divisor of",
    "options": {
      "A": "m and n",
      "B": "2m and 3n",
      "C": "m and 2n",
      "D": "2m and n"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "d8cc1ca9-60df-4b5b-99d9-be66f1bfd966",
    "mockTestId": null
  },
  {
    "question": "The number of all natural numbers up to 1000 with non-repeating digits is",
    "options": {
      "A": "504",
      "B": "648",
      "C": "738",
      "D": "585"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "d8cc1ca9-60df-4b5b-99d9-be66f1bfd966",
    "mockTestId": null
  },
  {
    "question": "Consider six distinct natural numbers such that the average of the two smallest numbers is 14, and the average of the two largest numbers is 28. Then, the maximum possible value of the average of these six numbers is",
    "options": {
      "A": "23",
      "B": "24",
      "C": "23.5",
      "D": "22.5"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "d8cc1ca9-60df-4b5b-99d9-be66f1bfd966",
    "mockTestId": null
  },
  {
    "question": "For some natural number n, assume that (15,000)! is divisible by (n!)!. The largest possible value of n is",
    "options": {
      "A": "4",
      "B": "7",
      "C": "6",
      "D": "5"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "d8cc1ca9-60df-4b5b-99d9-be66f1bfd966",
    "mockTestId": null
  },
  {
    "question": "Let m and n be natural numbers such that n is even and $$0.2<\\frac{m}{20},\\frac{n}{m},\\frac{n}{11}<0.5$$. Then $$m-2n$$ equals",
    "options": {
      "A": "3",
      "B": "1",
      "C": "2",
      "D": "4"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "d8cc1ca9-60df-4b5b-99d9-be66f1bfd966",
    "mockTestId": null
  },
  {
    "question": "How many of the integers 1, 2, … , 120, are divisible by none of 2, 5 and 7?",
    "options": {
      "A": "42",
      "B": "41",
      "C": "40",
      "D": "43"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "d8cc1ca9-60df-4b5b-99d9-be66f1bfd966",
    "mockTestId": null
  },
  {
    "question": "How many pairs(a, b) of positive integers are there such that $$a\\leq b$$ and $$ab=4^{2017}$$ ?",
    "options": {
      "A": "2018",
      "B": "2019",
      "C": "2017",
      "D": "2020"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "d8cc1ca9-60df-4b5b-99d9-be66f1bfd966",
    "mockTestId": null
  },
  {
    "question": "The passage given below is followed by four alternate summaries. Choose the option that best captures the essence of the passage.Manipulating information was a feature of history long before modern journalism established rules of integrity. A record dates back to ancient Rome, when Antony met Cleopatra and his political enemy Octavian launched a smear campaign against him with “short, sharp slogans written upon coins.” The perpetrator became the first Roman Emperor and “fake news had allowed Octavian to hack the republican system once and for all”. But the 21st century has seen the weaponization of information on an unprecedented scale. Powerful new technology makes the fabrication of content simple, and social networks amplify falsehoods peddled by States, populist politicians, and dishonest corporate entities. The platforms have become fertile ground for computational propaganda, ‘trolling’ and ‘troll armies’.",
    "options": {
      "A": "Disinformation, which is mediated by technology today, is not new and has existed since ancient times.",
      "B": "People need to become critical of what they read, since historically, weaponization of information has led to corruption.",
      "C": "Use of misinformation for attaining power, a practice that is as old as the Octavian era, is currently fueled by technology.",
      "D": "Octavian used fake news to manipulate people and attain power and influence, just as people do today"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "9893b5d6-95a7-48d5-9dff-63ff4361e413",
    "mockTestId": null
  },
  {
    "question": "The passage given below is followed by four alternate summaries. Choose the option that best captures the essence of the passage.People spontaneously create counterfactual alternatives to reality when they think “if only” or “what if” and imagine how the past could have been different. The mind computes counterfactuals for many reasons. Counterfactuals explain the past and prepare for the future, they implicate various relations including causal ones, and they affect intentions and decisions. They modulate emotions such as regret and relief, and they support moral judgments such as blame. The ability to create counterfactuals develops throughout childhood and contributes to reasoning about other people's beliefs, including their false beliefs.",
    "options": {
      "A": "Counterfactuals help people to prepare for the future by understanding intentions and making decisions.",
      "B": "People create counterfactual alternatives to reality for various reasons, including reasoning about other people's beliefs.",
      "C": "Counterfactual alternatives to reality are created for a variety of reasons and is part of one's developmental process.",
      "D": "Counterfactual thinking helps to reverse past and future actions and reason out false beliefs."
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "9893b5d6-95a7-48d5-9dff-63ff4361e413",
    "mockTestId": null
  },
  {
    "question": "The passage given below is followed by four alternate summaries. Choose the option that best captures the essence of the passage.The weight of society’s expectations is hardly a new phenomenon but it has become particularly draining over recent decades, perhaps because expectations themselves are so multifarious and contradictory. The perfectionism of the 1950s was rooted in the norms of mass culture and captured in famous advertising images of the ideal white American family that now seem self-satirising. In that era, perfectionism meant seamlessly conforming to values, behaviour and appearance: chiselled confidence for men, demure graciousness for women. The perfectionist was under pressure to look like everyone else, only more so. The perfectionists of today, by contrast, feel an obligation to stand out through their idiosyncratic style and wit if they are to gain a foothold in the attention economy.",
    "options": {
      "A": "The image of perfectionism is reflected in and perpetuated by the media; and people do their best to adhere to these ideals.",
      "B": "Though long-standing, the pressure to appear perfect and thereby attract attention, has evolved over time from one of conformism to one of non-conformism.",
      "C": "The pressure to appear perfect has been the cause of tension and conflict because the idea itself has been in a state of flux and hard to define.",
      "D": "The desire to attract attention is so deep-rooted in individual consciousness that people are willing to go to any lengths to achieve it."
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "9893b5d6-95a7-48d5-9dff-63ff4361e413",
    "mockTestId": null
  },
  {
    "question": "The passage given below is followed by four alternate summaries. Choose the option that best captures the essence of the passage.Colonialism is not a modern phenomenon. World history is full of examples of one society gradually expanding by incorporating adjacent territory and settling its people on newly conquered territory. In the sixteenth century, colonialism changed decisively because of technological developments in navigation that began to connect more remote parts of the world. The modern European colonial project emerged when it became possible to move large numbers of people across the ocean and to maintain political control in spite of geographical dispersion. The term colonialism is used to describe the process of European settlement, violent dispossession and politicaldomination over the rest of the world, including the Americas, Australia, and parts of Africa and Asia.",
    "options": {
      "A": "As a result of developments in navigation technology, European colonialism, led to the displacement of indigenous populations and global political changes in the 16th century.",
      "B": "Colonialism, conceptualized in the 16th century, allowed colonizers to expand their territories, establish settlements, and exercise political power.",
      "C": "Technological advancements in navigation in the 16th century, transformed colonialism, enabling Europeans to establish settlements and exert political dominance over distant regions.",
      "D": "Colonialism surged in the 16th century due to advancements in navigation, enabling British settlements abroad and global dominance."
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "9893b5d6-95a7-48d5-9dff-63ff4361e413",
    "mockTestId": null
  },
  {
    "question": "The passage given below is followed by four alternate summaries. Choose the option that best captures the essence of the passage.Heatwaves are becoming longer, frequent and intense due to climate change. The impacts of extreme heat are unevenly experienced; with older people and young children, those with pre-existing medical conditions and on low incomes significantly more vulnerable. Adaptation to heatwaves is a significant public policy concern. Research conducted among at-risk people in the UK reveals that even vulnerable people do not perceive themselves as at risk of extreme heat; therefore, early warnings of extreme heat events do not perform as intended. This suggests that understanding how extreme heat is narrated is very important. The news media play a central role in this process and can help warn people about the potential danger, as well as about impacts on infrastructure and society.",
    "options": {
      "A": "Protection from heat waves is important but current reports and public policies seem ineffective.",
      "B": "People are vulnerable to heatwaves caused due to climate change, measures taken are ineffective.",
      "C": "Heatwaves pose an enormous risk; the media plays a pivotal role in alerting people to this danger.",
      "D": "News stories help in warning about heatwaves, but they have to become more effective."
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "9893b5d6-95a7-48d5-9dff-63ff4361e413",
    "mockTestId": null
  },
  {
    "question": "The passage given below is followed by four alternate summaries. Choose the option that best captures the essence of the passage.Gradually, life for the island’s birds is improving. Antarctic prions and white-headed petrels, which also nest in burrows, had managed to cling on in some sites while pests were on the island. Their numbers are now increasing. “It’s fantastic and so exciting,” Shaw says. As birds return to breed, they also poo. This adds nutrients to the soil, which in turn helps the plants to grow back stronger. Tall plants then help burrowing birds hide from predatory skuas. “It’s this wonderful feedback loop,” Shaw says. Today, the “pretty paddock” that Houghton first experienced has been transformed. “The tussock is over your head, and you’re dodging all these penguin tunnels,” she says. The orchids and tiny herb that had been protected by fencing have started turning up all over the place.",
    "options": {
      "A": "There is an increasing number of predatory birds and plants on the island despite the presence of pests which is a positive development.",
      "B": "In the absence of pests, life on the island is now protected, and there has been a revival of a variety of birds and plants.",
      "C": "Flowering plants, herbs and birds are now being protected on this wonderful Antarctic island.",
      "D": "There is a huge positive transformation of the ecosystem of the island when brought under environmental protection."
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "9893b5d6-95a7-48d5-9dff-63ff4361e413",
    "mockTestId": null
  },
  {
    "question": "The passage given below is followed by four alternate summaries. Choose the option that best captures the essence of the passage.Tamsin Blanchard, curator of Fashion Open Studio, an initiative by a campaign group showcasing the work of ethical designers says, “We're all drawn to an exquisite piece of embroidery, a colourful textile or even a style of dressing that might have originated from another heritage. [But] this magpie mentality, where all of culture and history is up for grabs as 'inspiration', has accelerated since the proliferation of social media...Where once a fashion student might research the history and traditions of a particular item of clothing with care and respect, we now have a world where images are lifted from image libraries without a care for their cultural significance. It's easier than ever to steal a motif or a craft technique and transfer it on to a piece of clothing that is either mass produced or appears on a runway without credit or compensation to their original communities.\"",
    "options": {
      "A": "Copying an embroidery design or pattern of textile from native communities who own them is tantamount to stealing, and they need to be compensated.",
      "B": "Media has encouraged mass production; images are copied effortlessly without care or concern for the interests of ethnic communities.",
      "C": "Taking fashion ideas from any cultural group without their consent is a form of appropriation without giving due credit, compensation, and respect.",
      "D": "Cultural collaboration is the need of the hour. Beautiful design ideas of indigenous people need to be showcased and shared worldwide."
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "9893b5d6-95a7-48d5-9dff-63ff4361e413",
    "mockTestId": null
  },
  {
    "question": "The passage given below is followed by four alternate summaries. Choose the option that best captures the essence of the passage.Petitioning is an expeditious democratic tradition, used frequently in prior centuries, by which citizens can bring issues directly to governments. As expressions of collective voice, they support procedural democracy by shaping agendas. They can also recruit citizens to causes, give voice to the voteless, and apply the discipline of rhetorical argument that clarifies a point of view. By contrast, elections are limited in several respects: they involve only a few candidates, and thus fall far short of a representative democracy. Further, voters’ choices are not specific to particular policies or laws, and elections are episodic, whereas the voice of the people needs to be heard and integrated constantly into democratic government.",
    "options": {
      "A": "By giving citizens greater control over shaping political and democratic agendas, political petitions are invaluable as they represent an ideal form of a representative democracy.",
      "B": "Citizens become less inclined to petitioning as it enables vocal citizens to shape political agendas, but this needs to change to strengthen democracies today.",
      "C": "Petitioning has been important to democratic functioning, as it supplements the electoral process by enabling ongoing engagement with the government.",
      "D": "Petitioning is definitely more representative of the collective voice, and the functioning of democratic government could improve if we relied more on petitioning rather than holding periodic elections."
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "9893b5d6-95a7-48d5-9dff-63ff4361e413",
    "mockTestId": null
  },
  {
    "question": "The passage given below is followed by four alternate summaries. Choose the option that best captures the essence of the passage.It’s not that modern historians of medieval Africa have been ignorant about contacts between Ethiopia and Europe; they just had the power dynamic reversed. The traditional narrative stressed Ethiopia as weak and in trouble in the face of aggression from external forces, so Ethiopia sought military assistance from their fellow Christians to the north. But the real story, buried in plain sight in medieval diplomatic texts, simply had not yet been put together by modern scholars. Recent research pushes scholars of medieval Europe to imagine a much more richly connected medieval world: at the beginning of the so-called Age of Exploration, there is evidence that the kings of Ethiopia were sponsoring their own missions of diplomacy, faith and commerce.",
    "options": {
      "A": "Medieval texts have documented how strong connections between the Christian communities of Ethiopia and Europe were invaluable in establishing military and trade links between the two civilisations.",
      "B": "Historians were under the illusion that Ethiopia needed military protection from their neighbours, but in fact the country had close commercial and religious connections with them.",
      "C": "Medieval texts have been ‘cherry-picked’ to promote a view of Ethiopia as weak and in need of Europe’s military help with aggressive neighbours, but recent studies reveal it was a well-connected and outward-looking culture.",
      "D": "Medieval historical sources selectively promoted the narrative that powerful European forces were called on to protect weak African civilisations such as Ethiopia, but this is far from reality."
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "9893b5d6-95a7-48d5-9dff-63ff4361e413",
    "mockTestId": null
  },
  {
    "question": "The passage given below is followed by four alternate summaries. Choose the option that best captures the essence of the passage.To defend the sequence of alphabetisation may seem bizarre, so obvious is its application that it is hard to imagine a reference, catalogue or listing without it. But alphabetical order was not an immediate consequence of the alphabet itself. In the Middle Ages, deference for ecclesiastical tradition left scholars reluctant to categorise things according to the alphabet — to do so would be a rejection of the divine order. The rediscovery of the ancient Greek and Roman classics necessitated more efficient ways of ordering, searching and referencing texts. Government bureaucracy in the 16th and 17th centuries quickened the advance of alphabetical order, bringing with it pigeonholes, notebooks and card indexes.",
    "options": {
      "A": "Unlike the alphabet, once the efficacy of the alphabetic sequence became apparent to scholars and administrators, its use became widespread.",
      "B": "The alphabetic order took several centuries to gain common currency because of religious beliefs and a lack of appreciation of its efficacy in the ordering of things.",
      "C": "The ban on the use by scholars of any form of categorisation - but the divinely ordained one - delayed the adoption of the alphabetic sequence by several centuries.",
      "D": "While adoption of the written alphabet was easily accomplished, it took scholars several centuries to accept the alphabetic sequence as a useful tool in their work."
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "9893b5d6-95a7-48d5-9dff-63ff4361e413",
    "mockTestId": null
  },
  {
    "question": "The passage given below is followed by four alternate summaries. Choose the option that best captures the essence of the passage.There's a common idea that museum artworks are somehow timeless objects available to admire for generations to come. But many are objects of decay. Even the most venerable Old Master paintings don't escape: pigments discolour, varnishes crack, canvases warp. This challenging fact of art-world life is down to something that sounds more like a thread from a morality tale: inherent vice. Damien Hirst's iconic shark floating in a tank - entitled The Physical Impossibility of Death in the Mind of Someone Living - is a work that put a spotlight on inherent vice. When he made it in 1991, Hirst got himself in a pickle by not using the right kind of pickle to preserve the giant fish. The result was that the shark began to decompose quite quickly - its preserving liquid clouding, the skin wrinkling, and an unpleasant smell wafting from the tank.",
    "options": {
      "A": "Museums are left with the moral responsibility of restoring and preserving the artworks since artists cannot preserve their works beyond their life.",
      "B": "Museums have to guard timeless art treasures from intrinsic defects such as the deterioration of paint, polish and canvas.",
      "C": "The role of museums has evolved to ensure that the artworks are preserved forever in addition to guarding and displaying them.",
      "D": "Artworks may not last forever; they may deteriorate with time, and the challenge is to slow down their degeneration."
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "9893b5d6-95a7-48d5-9dff-63ff4361e413",
    "mockTestId": null
  },
  {
    "question": "The passage given below is followed by four alternate summaries. Choose the option that best captures the essence of the passage.Today, many of the debates about behavioural control in the age of big data echo Cold War-era anxieties about brainwashing, insidious manipulation and repression in the ‘technological society’. In his book Psychopolitics, Han warns of the sophisticated use of targeted online content, enabling ‘influence to take place on a pre-reflexive level’. On our current trajectory, “freedom will prove to have been merely an interlude.” The fear is that the digital age has not liberated us but exposed us, by offering up our private lives to machine-learning algorithms that can process masses of personal and behavioural data. In a world of influencers and digital entrepreneurs, it’s not easy to imagine the resurgence of a culture engendered through disconnect and disaffiliation, but concerns over the threat of online targeting, polarisation and big data have inspired recent polemics about the need to rediscover solitude and disconnect.",
    "options": {
      "A": "Rather than freeing us, digital technology is enslaving us by collecting personal information and influencing our online behaviour.",
      "B": "With big data making personal information freely available, the debate on the nature of freedom and the need for privacy has resurfaced.",
      "C": "The role of technology in influencing public behaviour is reminiscent of the manner in which behaviour was manipulated during the Cold War.",
      "D": "The notion of freedom and privacy is at stake in a world where artificial intelligence is capable of influencing behaviour through data gathered online."
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "9893b5d6-95a7-48d5-9dff-63ff4361e413",
    "mockTestId": null
  },
  {
    "question": "The passage given below is followed by four alternate summaries. Choose the option that best captures the essence of the passage.All that we think we know about how life hangs together is really some kind of illusion that we have perpetrated on ourselves because of our limited vision. What appear to be inanimate objects such as stones turn out not only to be alive in the same way that we are, but also in many infinitesimal ways to be affected by stimuli just as humans are. The distinction between animate and inanimate simply cannot be made when you enter the world of quantum mechanics and try to determine how those apparent subatomic particles, of which you and everything else in our universe is composed, are all tied together. The point is that physics and metaphysics show there is a pattern to the universe that goes beyond our capacity to grasp it with our brains.",
    "options": {
      "A": "The effect of stimuli is similar in inanimate objects when compared to animate objects or living beings.",
      "B": "Quantum physics indicates that an astigmatic view of reality results in erroneous assumptions about the universe.",
      "C": "The inanimate world is both sentient and cognizant like its animate counterpart.",
      "D": "Arbitrary distinctions between inanimate and animate objects disappear at the scale at which quantum mechanics works."
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "9893b5d6-95a7-48d5-9dff-63ff4361e413",
    "mockTestId": null
  },
  {
    "question": "The passage given below is followed by four alternate summaries. Choose the option that best captures the essence of the passage.Several of the world’s earliest cities were organised along egalitarian lines. In some regions, urban populations governed themselves for centuries without any indication of the temples and palaces that would later emerge; in others, temples and palaces never emerged at all, and there is simply no evidence of a class of administrators or any other sort of ruling stratum. It would seem that the mere fact of urban life does not, necessarily, imply any particular form of political organization, and never did. Far from resigning us to inequality, the picture that is now emerging of humanity’s past may open our eyes to egalitarian possibilities we otherwise would have never considered.",
    "options": {
      "A": "The lack of hierarchical administration in ancient cities can be deduced by the absence of religious and regal structures such as temples and palaces.",
      "B": "Contrary to our assumption that urban settlements have always involved hierarchical political and administrative structures, ancient cities were not organised in this way.",
      "C": "The emergence of a class of administrators and ruling stratum transformed the egalitarian urban life of ancient cities to the hierarchical civic organisations of today.",
      "D": "We now have the evidence in support of the existence of an egalitarian urban life in some ancient cities, where political and civic organisation was far less hierarchical."
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "9893b5d6-95a7-48d5-9dff-63ff4361e413",
    "mockTestId": null
  },
  {
    "question": "The passage given below is followed by four alternate summaries. Choose the option that best captures the essence of the passage.“It does seem to me that the job of comedy is to offend, or have the potential to offend, and it cannot be drained of that potential,” Rowan Atkinson said of cancel culture.“Every joke has a victim. That’s the definition of a joke. Someone or something or an idea is made to look ridiculous.” The Netflix star continued, “I think you’ve got to be very, very careful about saying what you’re allowed to make jokes about. You’ve always got to kick up? Really?” He added, “There are lots of extremely smug and self-satisfied people in what would be deemed lower down in society, who also deserve to be pulled up. In a proper free society, you should be allowed to make jokes about absolutely anything.”",
    "options": {
      "A": "All jokes target someone and one should be able to joke about anyone in the society, which is inconsistent with cancel culture.",
      "B": "Every joke needs a victim and one needs to include people from lower down the society and not just the upper class.",
      "C": "Victims of jokes must not only be politicians and royalty, but also arrogant people from lower classes should be mentioned by comedians.",
      "D": "Cancel culture does not understand the role and duty of comedians, which is to deride and mock everyone."
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "9893b5d6-95a7-48d5-9dff-63ff4361e413",
    "mockTestId": null
  },
  {
    "question": "The passage given below is followed by four alternate summaries. Choose the option that best captures the essence of the passage.McGurk and MacDonald (1976) reported a powerful multisensory illusion occurring with audio-visual speech. They recorded a voice articulating a consonant ‘ba-ba-ba’ and dubbed it with a face articulating another consonant ‘ga-ga-ga’. Even though the acoustic speech signal was well recognized alone, it was heard as another consonant after dubbing with incongruent visual speech i.e., ‘da-da-da’. The illusion, termed as the McGurk effect, has been replicated many times, and it has sparked an abundance of research. The reason for the great impact is that this is a striking demonstration of multisensory integration, where that auditory and visual information is merged into a unified, integrated percept.",
    "options": {
      "A": "Visual speech mismatched with auditory speech can result in the perception of an entirely different message: this illusion is known as the McGurk effect.",
      "B": "When the quality of auditory information is poor, the visual information wins over the auditory information.",
      "C": "The McGurk effect which is a demonstration of multisensory integration has been replicated many times.",
      "D": "When the auditory speech signal does not match the visual speech movements, the acoustic speech signal is confusing and integration of the two is imperfect."
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "9893b5d6-95a7-48d5-9dff-63ff4361e413",
    "mockTestId": null
  },
  {
    "question": "The passage given below is followed by four alternate summaries. Choose the option that best captures the essence of the passage.Biologists who publish their research directly to the Web have been labelled as “rogue”, but physicists have been routinely publishing research digitally (“preprints”), prior to submitting in a peer-reviewed journal. Advocates of preprints argue that quick and open dissemination of research speeds up scientific progress and allows for wider access to knowledge. But some journals still don’t accept research previously published as a preprint. Even if the idea of preprints is gaining ground, one of the biggest barriers for biologists is how they would be viewed by members of their conservative research community.",
    "options": {
      "A": "One of the advantages of digital preprints of research is they hasten the dissemination process, but these are not accepted by most scientific communities.",
      "B": "Compared to biologists, physicists are less conservative in their acceptance of digital pre-publication of research papers, which allows for faster dissemination of knowledge.",
      "C": "While digital publication of research is gaining popularity in many scientific disciplines, almost all peer-reviewed journals are reluctant to accept papers that have been published before.",
      "D": "Preprints of research are frowned on by some scientific fields as they do not undergo a rigourous reviewing process but are accepted among biologists as a quick way to disseminate information."
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "9893b5d6-95a7-48d5-9dff-63ff4361e413",
    "mockTestId": null
  },
  {
    "question": "The passage given below is followed by four alternate summaries. Choose the option that best captures the essence of the passage.Foreign peacekeepers often exist in a bubble in the poor countries in which they are deployed; they live in posh compounds, drive fancy vehicles, and distance themselves from locals. This may be partially justified as they are outsiders, living in constant fear, performing a job that is emotionally draining. But they are often despised by the locals, and many would like them to leave. A better solution would be bottom-up peacebuilding, which would involve their spending more time working with communities, understanding their grievances and earning their trust, rather than only meeting government officials.",
    "options": {
      "A": "Peacekeeping duties would be more effectively performed by local residents given their better understanding, knowledge and rapport with their own communities.",
      "B": "The environment in poor countries has tended to make foreign peacekeeping forces live in enclaves, but it is time to change this scenario.",
      "C": "Extravagant lifestyles and an aloof attitude among the foreigners working as peacekeepers in poor countries have justifiably made them the target of local anger.",
      "D": "Peacekeeping forces in foreign countries have tended to be aloof for valid reasons but would be more effective if they worked more closely with local communities."
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "9893b5d6-95a7-48d5-9dff-63ff4361e413",
    "mockTestId": null
  },
  {
    "question": "The passage given below is followed by four alternate summaries. Choose the option that best captures the essence of the passage.People view idleness as a sin and industriousness as a virtue, and in the process have developed an unsatisfactory relationship with their jobs. Work has become a way for them to keep busy, even though many find their work meaningless. In their need for activity people undertake what was once considered work (fishing, gardening) as hobbies. The opposing view is that hard work has made us prosperous and improved our levels of health and education. It has also brought innovation and labour and time-saving devices, which have lessened life’s drudgery.",
    "options": {
      "A": "Despite some detractors, hard work is essential in today’s world to enable economic progress, for education and health and to propel innovations that make life easier.",
      "B": "Hard work has overtaken all aspects of our lives and has enabled economic prosperity, but it is important that people reserve their leisure time for some idleness.",
      "C": "Some believe that hard work has been glorified to the extent that it has become meaningless, and led to greater idleness, but it has also had enormous positive impacts on everyday life.",
      "D": "While the idealisation of hard work has propelled people into meaningless jobs and endless activity, it has also led to tremendous social benefits from prosperity and innovation."
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "9893b5d6-95a7-48d5-9dff-63ff4361e413",
    "mockTestId": null
  },
  {
    "question": "The passage given below is followed by four alternate summaries. Choose the option that best captures the essence of the passage.Creativity is now viewed as the engine of economic progress. Various organizations are devoted to its study and promotion; there are encyclopedias and handbooks surveying creativity research. But this proliferating success has tended to erode creativity’s stable identity: it has become so invested with value that it has become impossible to police its meaning and the practices that supposedly identify and encourage it. Many people and organizations committed to producing original thoughts now feel that undue obsession with the idea of creativity gets in the way of real creativity.",
    "options": {
      "A": "The obsession with original thought, how it can be promoted and researched, has made it impossible for people and organizations to define the concept anymore.",
      "B": "The industry that has built up around researching what comprises and encourages creativity has destroyed the creative process itself.",
      "C": "Creativity has proliferated to the extent that is no longer a stable process, and its mutating identity has stifled the creative process.",
      "D": "The value assigned to creativity today has assumed such proportions that the concept itself has lost its real meaning and this is hampering the engendering of real creativity."
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "9893b5d6-95a7-48d5-9dff-63ff4361e413",
    "mockTestId": null
  },
  {
    "question": "In a company, 20% of the employees work in the manufacturing department. If the total salary obtained by all the manufacturing employees is one-sixth of the total salary obtained by all the employees in the company, then the ratio of the average salary obtained by the manufacturing employees to the average salary obtained by the nonmanufacturing employees is",
    "options": {
      "A": "6:5",
      "B": "4:5",
      "C": "5:4",
      "D": "5:6"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "e98d52fb-b47c-468d-addf-aef9a160916b",
    "mockTestId": null
  },
  {
    "question": "The salaries of three friends Sita, Gita and Mita are initially in the ratio 5 : 6 : 7, respectively. In the first year, they get salary hikes of 20%, 25% and 20%, respectively. In the second year, Sita and Mita get salary hikes of 40% and 25%, respectively, and the salary of Gita becomes equal to the mean salary of the three friends. The salary hike of Gita in the second year is",
    "options": {
      "A": "25%",
      "B": "28%",
      "C": "26%",
      "D": "30%"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "e98d52fb-b47c-468d-addf-aef9a160916b",
    "mockTestId": null
  },
  {
    "question": "In an election, there were four candidates and 80% of the registered voters casted their votes. One of the candidates received 30% of the casted votes while the other three candidates received the remaining casted votes in the proportion 1 : 2 : 3. If the winner of the election received 2512 votes more than the candidate with the second highest votes, then the number of registered voters was",
    "options": {
      "A": "50240",
      "B": "40192",
      "C": "60288",
      "D": "62800"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "e98d52fb-b47c-468d-addf-aef9a160916b",
    "mockTestId": null
  },
  {
    "question": "In a tournament, a team has played 40 matches so far and won 30% of them. If they win 60% of the remaining matches, their overall win percentage will be 50%. Suppose they win 90% of the remaining matches, then the total number of matches won by the team in the tournament will be",
    "options": {
      "A": "80",
      "B": "78",
      "C": "84",
      "D": "86"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "e98d52fb-b47c-468d-addf-aef9a160916b",
    "mockTestId": null
  },
  {
    "question": "The total of male and female populations in a city increased by 25% from 1970 to 1980. During the same period, the male population increased by 40% while the female population increased by 20%. From 1980 to 1990, the female population increased by 25%. In 1990, if the female population is twice the male population, then the percentage increase in the total of male and female populations in the city from 1970 to 1990 is",
    "options": {
      "A": "68.25",
      "B": "68.75",
      "C": "68.50",
      "D": "69.25"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "e98d52fb-b47c-468d-addf-aef9a160916b",
    "mockTestId": null
  },
  {
    "question": "If a certain weight of an alloy of silver and copper is mixed with 3 kg of pure silver, the resulting alloy will have 90% silver by weight. If the same weight of the initial alloy is mixed with 2 kg of another alloy which has 90% silver by weight, the resulting alloy will have 84% silver by weight. Then, the weight of the initial alloy, in kg, is",
    "options": {
      "A": "3.5",
      "B": "2.5",
      "C": "3",
      "D": "4"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "e98d52fb-b47c-468d-addf-aef9a160916b",
    "mockTestId": null
  },
  {
    "question": "Identical chocolate pieces are sold in boxes of two sizes, small and large. The large box is sold for twice the price of the small box. If the selling price per gram of chocolate in the large box is 12% less than that in the small box, then the percentage by which the weight of chocolate in the large box exceeds that in the small box is nearest to",
    "options": {
      "A": "144",
      "B": "127",
      "C": "135",
      "D": "124"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "e98d52fb-b47c-468d-addf-aef9a160916b",
    "mockTestId": null
  },
  {
    "question": "Two alcohol solutions, A and B, are mixed in the proportion 1:3 by volume. The volume of the mixture is then doubled by adding solution A such that the resulting mixture has 72% alcohol. If solution A has 60% alcohol, then the percentage of alcohol in solution B is",
    "options": {
      "A": "90%",
      "B": "94%",
      "C": "92%",
      "D": "89%"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "e98d52fb-b47c-468d-addf-aef9a160916b",
    "mockTestId": null
  },
  {
    "question": "The strength of a salt solution is p% if 100 ml of the solution contains p grams of salt. Each of three vessels A, B, C contains 500 ml of salt solution of strengths 10%, 22%, and 32%, respectively. Now, 100 ml of the solution in vessel A is transferred to vessel B. Then, 100 ml of the solution in vessel B is transferred to vessel C. Finally, 100 ml of the solution in vessel C is transferred to vessel A. The strength, in percentage, of the resulting solution in vessel A is",
    "options": {
      "A": "15",
      "B": "13",
      "C": "12",
      "D": "14"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "e98d52fb-b47c-468d-addf-aef9a160916b",
    "mockTestId": null
  },
  {
    "question": "The salaries of Ramesh, Ganesh and Rajesh were in the ratio 6:5:7 in 2010, and in the ratio 3:4:3 in 2015. If Ramesh’s salary increased by 25% during 2010-2015, then the percentage increase in Rajesh’s salary during this period is closest to",
    "options": {
      "A": "10",
      "B": "7",
      "C": "9",
      "D": "8"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "e98d52fb-b47c-468d-addf-aef9a160916b",
    "mockTestId": null
  },
  {
    "question": "In an examination, the maximum possible score is N while the pass mark is 45% of N. A candidate obtains 36 marks, but falls short of the pass mark by 68%. Which one of the following is then correct?",
    "options": {
      "A": "$$N \\leq 200$$.",
      "B": "$$243 \\leq N \\leq 252$$.",
      "C": "$$201 \\leq N \\leq 242$$.",
      "D": "$$N \\geq 253$$."
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "e98d52fb-b47c-468d-addf-aef9a160916b",
    "mockTestId": null
  },
  {
    "question": "A 20% ethanol solution is mixed with another ethanol solution, say, S of unknown concentration in the proportion 1:3 by volume. This mixture is then mixed with an equal volume of 20% ethanol solution. If the resultant mixture is a 31.25% ethanol solution, then the unknown concentration of S is",
    "options": {
      "A": "30%",
      "B": "40%",
      "C": "50%",
      "D": "60%"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "e98d52fb-b47c-468d-addf-aef9a160916b",
    "mockTestId": null
  },
  {
    "question": "The number of girls appearing for an admission test is twice the number of boys. If 30% of the girls and 45% of the boys get admission, the percentage of candidates who do not get admission is",
    "options": {
      "A": "35",
      "B": "50",
      "C": "60",
      "D": "65"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "e98d52fb-b47c-468d-addf-aef9a160916b",
    "mockTestId": null
  },
  {
    "question": "In a village, the production of food grains increased by 40% and the per capita production of food grains increased by 27% during a certain period. The percentage by which the population of the village increased during the same period is nearest to",
    "options": {
      "A": "16",
      "B": "13",
      "C": "10",
      "D": "7"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "e98d52fb-b47c-468d-addf-aef9a160916b",
    "mockTestId": null
  },
  {
    "question": "The arithmetic mean of all the distinct numbers that can be obtained by rearranging the digits in 1421, including itself, is",
    "options": {
      "A": "2222",
      "B": "2442",
      "C": "2592",
      "D": "3333"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "32feac84-abed-46db-855b-cf66cafeea6a",
    "mockTestId": null
  },
  {
    "question": "The number of integers greater than 2000 that can be formed with the digits 0, 1, 2, 3, 4, 5, using each digit at most once, is",
    "options": {
      "A": "1440",
      "B": "1200",
      "C": "1480",
      "D": "1420"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "32feac84-abed-46db-855b-cf66cafeea6a",
    "mockTestId": null
  },
  {
    "question": "In how many ways can 7 identical erasers be distributed among 4 kids in such a way that each kid gets at least one eraser but nobody gets more than 3 erasers?",
    "options": {
      "A": "16",
      "B": "20",
      "C": "14",
      "D": "15"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "32feac84-abed-46db-855b-cf66cafeea6a",
    "mockTestId": null
  },
  {
    "question": "How many integers, greater than 999 but not greater than 4000, can be formed with the digits 0, 1, 2, 3 and 4, if repetition of digits is allowed?",
    "options": {
      "A": "499",
      "B": "500",
      "C": "375",
      "D": "376"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "32feac84-abed-46db-855b-cf66cafeea6a",
    "mockTestId": null
  },
  {
    "question": "What is the number of distinct terms in the expansion of $$(a + b + c)^{20}$$?",
    "options": {
      "A": "231",
      "B": "253",
      "C": "242",
      "D": "210",
      "E": "228"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "32feac84-abed-46db-855b-cf66cafeea6a",
    "mockTestId": null
  },
  {
    "question": "Neelam rides her bicycle from her house at A to her office at B, taking the shortest path. Then the number of possible shortest paths that she can choose is[CAT 2008]",
    "options": {
      "A": "60",
      "B": "75",
      "C": "45",
      "D": "90",
      "E": "72"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "32feac84-abed-46db-855b-cf66cafeea6a",
    "mockTestId": null
  },
  {
    "question": "Neelam rides her bicycle from her house at A to her club at C, via B taking the shortest path. Then the number of possible shortest paths that she can choose is[CAT 2008]",
    "options": {
      "A": "1170",
      "B": "630",
      "C": "792",
      "D": "1200",
      "E": "936"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "32feac84-abed-46db-855b-cf66cafeea6a",
    "mockTestId": null
  },
  {
    "question": "A merchant purchases a cloth at a rate of Rs.100 per meter and receives 5 cm length of cloth free for every 100 cm length of cloth purchased by him. He sells the same cloth at a rate of Rs.110 per meter but cheats his customers by giving 95 cm length of cloth for every 100 cm length of cloth purchased by the customers. If the merchant provides a 5% discount, the resulting profit earned by him is",
    "options": {
      "A": "4.2%",
      "B": "9.7%",
      "C": "15.5%",
      "D": "16%"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "35d9dcfa-cb3f-4e5c-bf2e-6c65121b8864",
    "mockTestId": null
  },
  {
    "question": "Gita sells two objects A and B at the same price such that she makes a profit of 20% on object A and a loss of 10% on object B. If she increases the selling price such that objects A and B are still sold at an equal price and a profit of 10% is made on object B, then the profit made on object A will be nearest to",
    "options": {
      "A": "42%",
      "B": "45%",
      "C": "47%",
      "D": "49%"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "35d9dcfa-cb3f-4e5c-bf2e-6c65121b8864",
    "mockTestId": null
  },
  {
    "question": "Minu purchases a pair of sunglasses at Rs.1000 and sells to Kanu at 20% profit. Then, Kanu sells it back to Minu at 20% loss. Finally, Minu sells the same pair of sunglasses to Tanu. If the total profit made by Minu from all her transactions is Rs.500, then the percentage of profit made by Minu when she sold the pair of sunglasses to Tanu is",
    "options": {
      "A": "35.42%",
      "B": "52%",
      "C": "31.25%",
      "D": "26%"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "35d9dcfa-cb3f-4e5c-bf2e-6c65121b8864",
    "mockTestId": null
  },
  {
    "question": "Raj invested ₹ 10000 in a fund. At the end of first year, he incurred a loss but his balance was more than ₹ 5000. This balance, when invested for another year, grew and the percentage of growth in the second year was five times the percentage of loss in the first year. If the gain of Raj from the initial investment over the two year period is 35%, then the percentage of loss in the first year is",
    "options": {
      "A": "5",
      "B": "15",
      "C": "17",
      "D": "10"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "35d9dcfa-cb3f-4e5c-bf2e-6c65121b8864",
    "mockTestId": null
  },
  {
    "question": "Anil, Bobby, and Chintu jointly invest in a business and agree to share the overall profit in proportion to their investments. Anil’s share of investment is 70%. His share of profit decreases by ₹ 420 if the overall profit goes down from 18% to 15%. Chintu’s share of profit increases by ₹ 80 if the overall profit goes up from 15% to 17%. The amount, in INR, invested by Bobby is",
    "options": {
      "A": "2000",
      "B": "2400",
      "C": "2200",
      "D": "1800"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "35d9dcfa-cb3f-4e5c-bf2e-6c65121b8864",
    "mockTestId": null
  },
  {
    "question": "A man buys 35 kg of sugar and sets a marked price in order to make a 20% profit. He sells 5 kg at this price, and 15 kg at a 10% discount. Accidentally, 3 kg of sugar is wasted. He sells the remaining sugar by raising the marked price by p percent so as to make an overall profit of 15%. Then p is nearest to",
    "options": {
      "A": "22",
      "B": "35",
      "C": "25",
      "D": "31"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "35d9dcfa-cb3f-4e5c-bf2e-6c65121b8864",
    "mockTestId": null
  },
  {
    "question": "Anil buys 12 toys and labels each with the same selling price. He sells 8 toys initially at 20% discount on the labeled price. Then he sells the remaining 4 toys at an additional 25% discount on the discounted price. Thus, he gets a total of Rs 2112, and makes a 10% profit. With no discounts, his percentage of profit would have been",
    "options": {
      "A": "50",
      "B": "60",
      "C": "54",
      "D": "55"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "35d9dcfa-cb3f-4e5c-bf2e-6c65121b8864",
    "mockTestId": null
  },
  {
    "question": "On selling a pen at 5% loss and a book at 15% gain, Karim gains Rs. 7. If he sells the pen at 5% gain and the book at 10% gain, he gains Rs. 13. What is the cost price of the book in Rupees?",
    "options": {
      "A": "95",
      "B": "85",
      "C": "80",
      "D": "100"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "35d9dcfa-cb3f-4e5c-bf2e-6c65121b8864",
    "mockTestId": null
  },
  {
    "question": "A shopkeeper sells two tables, each procured at cost price p, to Amal and Asim at a profit of 20% and at a loss of 20%, respectively. Amal sells his table to Bimal at a profit of 30%, while Asim sells his table to Barun at a loss of 30%. If the amounts paid by Bimal and Barun are x and y, respectively, then (x − y) / p equals",
    "options": {
      "A": "1",
      "B": "1.2",
      "C": "0.50",
      "D": "0.7"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "35d9dcfa-cb3f-4e5c-bf2e-6c65121b8864",
    "mockTestId": null
  },
  {
    "question": "Mukesh purchased 10 bicycles in 2017, all at the same price. He sold six of these at a profit of 25% and the remaining four at a loss of 25%. If he made a total profit of Rs. 2000, then his purchase price of a bicycle, in Rupees, was",
    "options": {
      "A": "6000",
      "B": "8000",
      "C": "4000",
      "D": "2000"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "35d9dcfa-cb3f-4e5c-bf2e-6c65121b8864",
    "mockTestId": null
  },
  {
    "question": "If a seller gives a discount of 15% on retail price, she still makes a profit of 2%. Which of the following ensures that she makes a profit of 20%?",
    "options": {
      "A": "Give a discount of 5% on retail price.",
      "B": "Give a discount of 2% on retail price.",
      "C": "Increase the retail price by 2%.",
      "D": "Sell at retail price."
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "35d9dcfa-cb3f-4e5c-bf2e-6c65121b8864",
    "mockTestId": null
  },
  {
    "question": "The manufacturer of a table sells it to a wholesale dealer at a profit of 10%. The wholesale dealer sells the table to a retailer at a profit of 30% Finally, the retailer sells it to a customer at a profit of 50%. If the customer pays Rs 4290 for the table, then its manufacturing cost (in Rs) is",
    "options": {
      "A": "1500",
      "B": "2000",
      "C": "2500",
      "D": "3000"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "35d9dcfa-cb3f-4e5c-bf2e-6c65121b8864",
    "mockTestId": null
  },
  {
    "question": "Mayank buys some candies for Rs 15 a dozen and an equal number of different candies for Rs 12 a dozen. He sells all for Rs 16.50 a dozen and makes a profit of Rs 150. How many dozens of candies did he buy altogether?",
    "options": {
      "A": "50",
      "B": "30",
      "C": "25",
      "D": "45"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "35d9dcfa-cb3f-4e5c-bf2e-6c65121b8864",
    "mockTestId": null
  },
  {
    "question": "If Fatima sells 60 identical toys at a 40% discount on the printed price, then she makes 20% profit. Ten of these toys are destroyed in fire. While selling the rest, how much discount should be given on the printed price so that she can make the same amount of profit?",
    "options": {
      "A": "30%",
      "B": "25%",
      "C": "24%",
      "D": "28%"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "35d9dcfa-cb3f-4e5c-bf2e-6c65121b8864",
    "mockTestId": null
  },
  {
    "question": "The owner of an art shop conducts his business in the following manner: every once in a while he raises his prices by X%, then a while later he reduces all the new prices by X%. After one such updown cycle, the price of a painting decreased by Rs. 441. After a second up-down cycle the painting was sold for Rs. 1,944.81. What was the original price of the painting?",
    "options": {
      "A": "Rs. 2,756.25",
      "B": "Rs. 2,256.25",
      "C": "Rs. 2,500",
      "D": "Rs. 2,000"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "35d9dcfa-cb3f-4e5c-bf2e-6c65121b8864",
    "mockTestId": null
  },
  {
    "question": "After allowing a discount of 11.11%, a trader still makes a gain of 14.28%. At how many percentage above the cost price does he mark on his goods?",
    "options": {
      "A": "28.56%",
      "B": "35%",
      "C": "22.22%",
      "D": "None of these"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "35d9dcfa-cb3f-4e5c-bf2e-6c65121b8864",
    "mockTestId": null
  },
  {
    "question": "A merchant purchases a cloth at a rate of Rs.100 per meter and receives 5 cm length of cloth free for every 100 cm length of cloth purchased by him. He sells the same cloth at a rate of Rs.110 per meter but cheats his customers by giving 95 cm length of cloth for every 100 cm length of cloth purchased by the customers. If the merchant provides a 5% discount, the resulting profit earned by him is",
    "options": {
      "A": "4.2%",
      "B": "9.7%",
      "C": "15.5%",
      "D": "16%"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "ce2f994a-a7cf-4397-8201-7fcd0391df44",
    "mockTestId": null
  },
  {
    "question": "Anil borrows Rs 2 lakhs at an interest rate of 8% per annum, compounded half-yearly. He repays Rs 10320 at the end of the first year and closes the loan by paying the outstanding amount at the end of the third year. Then, the total interest, in rupees, paid over the three years is nearest to",
    "options": {
      "A": "45311",
      "B": "51311",
      "C": "33130",
      "D": "40991"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "ce2f994a-a7cf-4397-8201-7fcd0391df44",
    "mockTestId": null
  },
  {
    "question": "Gita sells two objects A and B at the same price such that she makes a profit of 20% on object A and a loss of 10% on object B. If she increases the selling price such that objects A and B are still sold at an equal price and a profit of 10% is made on object B, then the profit made on object A will be nearest to",
    "options": {
      "A": "42%",
      "B": "45%",
      "C": "47%",
      "D": "49%"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "ce2f994a-a7cf-4397-8201-7fcd0391df44",
    "mockTestId": null
  },
  {
    "question": "Minu purchases a pair of sunglasses at Rs.1000 and sells to Kanu at 20% profit. Then, Kanu sells it back to Minu at 20% loss. Finally, Minu sells the same pair of sunglasses to Tanu. If the total profit made by Minu from all her transactions is Rs.500, then the percentage of profit made by Minu when she sold the pair of sunglasses to Tanu is",
    "options": {
      "A": "35.42%",
      "B": "52%",
      "C": "31.25%",
      "D": "26%"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "ce2f994a-a7cf-4397-8201-7fcd0391df44",
    "mockTestId": null
  },
  {
    "question": "Nitu has an initial capital of ₹20,000. Out of this, she invests ₹8,000 at 5.5% in bank A, ₹5,000 at 5.6% in bank B and the remaining amount at x% in bank C, each rate being simple interest per annum. Her combined annual interest income from these investments is equal to 5% of the initial capital. If she had invested her entire initial capital in bank C alone, then her annual interest income, in rupees, would have been",
    "options": {
      "A": "700",
      "B": "800",
      "C": "900",
      "D": "1000"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "ce2f994a-a7cf-4397-8201-7fcd0391df44",
    "mockTestId": null
  },
  {
    "question": "Alex invested his savings in two parts. The simple interest earned on the first part at 15% per annum for 4 years is the same as the simple interest earned on the second part at 12% per annum for 3 years. Then, the percentage of his savings invested in the first part is",
    "options": {
      "A": "37.5%",
      "B": "62.5%",
      "C": "60%",
      "D": "40%"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "ce2f994a-a7cf-4397-8201-7fcd0391df44",
    "mockTestId": null
  },
  {
    "question": "Raj invested ₹ 10000 in a fund. At the end of first year, he incurred a loss but his balance was more than ₹ 5000. This balance, when invested for another year, grew and the percentage of growth in the second year was five times the percentage of loss in the first year. If the gain of Raj from the initial investment over the two year period is 35%, then the percentage of loss in the first year is",
    "options": {
      "A": "5",
      "B": "15",
      "C": "17",
      "D": "10"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "ce2f994a-a7cf-4397-8201-7fcd0391df44",
    "mockTestId": null
  },
  {
    "question": "Anil invests some money at a fixed rate of interest, compounded annually. If the interests accrued during the second and third year are ₹ 806.25 and ₹ 866.72, respectively, the interest accrued, in INR, during the fourth year is nearest to",
    "options": {
      "A": "929.48",
      "B": "934.65",
      "C": "931.72",
      "D": "926.84"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "ce2f994a-a7cf-4397-8201-7fcd0391df44",
    "mockTestId": null
  },
  {
    "question": "Bank A offers 6% interest rate per annum compounded half-yearly. Bank B and Bank C offer simple interest but the annual interest rate offered by Bank C is twice that of Bank B. Raju invests a certain amount in Bank B for a certain period and Rupa invests ₹ 10,000 in Bank C for twice that period. The interest that would accrue to Raju during that period is equal to the interest that would have accrued had he invested the same amount in Bank A for one year. The interest accrued, in INR, to Rupa is",
    "options": {
      "A": "3436",
      "B": "2436",
      "C": "2346",
      "D": "1436"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "ce2f994a-a7cf-4397-8201-7fcd0391df44",
    "mockTestId": null
  },
  {
    "question": "Anil, Bobby, and Chintu jointly invest in a business and agree to share the overall profit in proportion to their investments. Anil’s share of investment is 70%. His share of profit decreases by ₹ 420 if the overall profit goes down from 18% to 15%. Chintu’s share of profit increases by ₹ 80 if the overall profit goes up from 15% to 17%. The amount, in INR, invested by Bobby is",
    "options": {
      "A": "2000",
      "B": "2400",
      "C": "2200",
      "D": "1800"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "ce2f994a-a7cf-4397-8201-7fcd0391df44",
    "mockTestId": null
  },
  {
    "question": "In the final examination, Bishnu scored 52% and Asha scored 64%. The marks obtained by Bishnu is 23 less, and that by Asha is 34 more than the marks obtained by Ramesh. The marks obtained by Geeta, who scored 84%, is",
    "options": {
      "A": "357",
      "B": "417",
      "C": "439",
      "D": "399"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "ce2f994a-a7cf-4397-8201-7fcd0391df44",
    "mockTestId": null
  },
  {
    "question": "A man buys 35 kg of sugar and sets a marked price in order to make a 20% profit. He sells 5 kg at this price, and 15 kg at a 10% discount. Accidentally, 3 kg of sugar is wasted. He sells the remaining sugar by raising the marked price by p percent so as to make an overall profit of 15%. Then p is nearest to",
    "options": {
      "A": "22",
      "B": "35",
      "C": "25",
      "D": "31"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "ce2f994a-a7cf-4397-8201-7fcd0391df44",
    "mockTestId": null
  },
  {
    "question": "For a real number x, if $$\\frac{1}{2}, \\frac{\\log_3(2^x - 9)}{\\log_3 4}$$, and $$\\frac{\\log_5\\left(2^x + \\frac{17}{2}\\right)}{\\log_5 4}$$ are in an arithmetic progression, then the common difference is",
    "options": {
      "A": "$$\\log_4\\left(\\frac{3}{2}\\right)$$",
      "B": "$$\\log_4 7$$",
      "C": "$$\\log_4\\left(\\frac{23}{2}\\right)$$",
      "D": "$$\\log_4\\left(\\frac{7}{2}\\right)$$"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "b72845d1-8be7-42b9-b242-07d12e369916",
    "mockTestId": null
  },
  {
    "question": "For some positive and distinct real numbers $$x, y$$ and z, if $$\\frac{1}{\\sqrt{y}+\\sqrt{z}}$$ is the arithmetic mean of $$\\frac{1}{\\sqrt{x}+\\sqrt{z}}$$ and $$\\frac{1}{\\sqrt{x}+\\sqrt{y}}$$, then the relationship which will always hold true, is",
    "options": {
      "A": "$$\\sqrt{x}, \\sqrt{z}$$ and $$\\sqrt{y}$$ are in arithmetic progression",
      "B": "y, x and z are in arithmetic progression",
      "C": "x, y and z are in arithmetic progression",
      "D": "$$\\sqrt{x}, \\sqrt{y}$$ and $$\\sqrt{z}$$ are in arithmetic progression"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "b72845d1-8be7-42b9-b242-07d12e369916",
    "mockTestId": null
  },
  {
    "question": "Let both the series $$a_{1},a_{2},a_{3}$$... and $$b_{1},b_{2},b_{3}$$... be in arithmetic progression such that the common differences of both the series are prime numbers. If $$a_{5}=b_{9},a_{19}=b_{19}$$ and $$b_{2}=0$$, then $$a_{11}$$ equals",
    "options": {
      "A": "86",
      "B": "79",
      "C": "83",
      "D": "84"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "b72845d1-8be7-42b9-b242-07d12e369916",
    "mockTestId": null
  },
  {
    "question": "The value of $$1 + \\left(1 + \\frac{1}{3}\\right)\\frac{1}{4} + \\left(1 + \\frac{1}{3} + \\frac{1}{9}\\right)\\frac{1}{16} + \\left(1 + \\frac{1}{3} + \\frac{1}{9} + \\frac{1}{27}\\right)\\frac{1}{64} + -------$$ is",
    "options": {
      "A": "$$\\frac{15}{13}$$",
      "B": "$$\\frac{27}{12}$$",
      "C": "$$\\frac{15}{8}$$",
      "D": "$$\\frac{16}{11}$$"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "b72845d1-8be7-42b9-b242-07d12e369916",
    "mockTestId": null
  },
  {
    "question": "Let $$a_n = 46 + 8n$$ and $$b_n = 98 + 4n$$ be two sequences for natural numbers $$n \\leq 100$$. Then, the sum of all terms common to both the sequences is",
    "options": {
      "A": "14900",
      "B": "14798",
      "C": "15000",
      "D": "14602"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "b72845d1-8be7-42b9-b242-07d12e369916",
    "mockTestId": null
  },
  {
    "question": "For any natural number n, suppose the sum of the first n terms of an arithmetic progression is $$(n + 2n^2)$$. If the $$n^{th}$$ term of the progression is divisible by 9, then the smallest possible value of n is",
    "options": {
      "A": "9",
      "B": "4",
      "C": "7",
      "D": "8"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "b72845d1-8be7-42b9-b242-07d12e369916",
    "mockTestId": null
  },
  {
    "question": "On day one, there are 100 particles in a laboratory experiment. On day n, where $$n\\ge2$$, one out of every n articles produces another particle. If the total number of particles in the laboratory experiment increases to 1000 on day  m, then m equals",
    "options": {
      "A": "19",
      "B": "16",
      "C": "18",
      "D": "17"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "b72845d1-8be7-42b9-b242-07d12e369916",
    "mockTestId": null
  },
  {
    "question": "Consider the arithmetic progression 3, 7, 11, ... and let $$A_n$$ denote the sum of the first n terms of this progression. Then the value of $$\\frac{1}{25} \\sum_{n=1}^{25} A_{n}$$ is",
    "options": {
      "A": "455",
      "B": "442",
      "C": "415",
      "D": "404"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "b72845d1-8be7-42b9-b242-07d12e369916",
    "mockTestId": null
  },
  {
    "question": "Three positive integers x, y and z are in arithmetic progression. If $$y-x>2$$ and $$xyz=5(x+y+z)$$, then z-x equals",
    "options": {
      "A": "8",
      "B": "12",
      "C": "14",
      "D": "10"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "b72845d1-8be7-42b9-b242-07d12e369916",
    "mockTestId": null
  },
  {
    "question": "Consider a sequence of real numbers, $$x_{1},x_{2},x_{3},...$$ such that $$x_{n+1}=x_{n}+n-1$$ for all $$n\\geq1$$. If $$x_{1}=-1$$ then $$x_{100}$$ is equal to",
    "options": {
      "A": "4849",
      "B": "4949",
      "C": "4950",
      "D": "4850"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "b72845d1-8be7-42b9-b242-07d12e369916",
    "mockTestId": null
  },
  {
    "question": "For a sequence of real numbers $$x_{1},x_{2},...x_{n}$$, If $$x_{1}-x_{2}+x_{3}-....+(-1)^{n+1}x_{n}=n^{2}+2n$$ for all natural numbers n, then the sum $$x_{49}+x_{50}$$ equals",
    "options": {
      "A": "200",
      "B": "2",
      "C": "-200",
      "D": "-2"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "b72845d1-8be7-42b9-b242-07d12e369916",
    "mockTestId": null
  },
  {
    "question": "If $$x_0 = 1, x_1 = 2$$, and $$x_{n + 2} = \\frac{1 + x_{n + 1}}{x_n}, n = 0, 1, 2, 3, ......,$$ then $$x_{2021}$$ is equal to",
    "options": {
      "A": "4",
      "B": "1",
      "C": "3",
      "D": "2"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "b72845d1-8be7-42b9-b242-07d12e369916",
    "mockTestId": null
  },
  {
    "question": "The natural numbers are divided into groups as (1), (2, 3, 4), (5, 6, 7, 8, 9), ….. and so on. Then, the sum of the numbers in the 15th group is equal to",
    "options": {
      "A": "6119",
      "B": "6090",
      "C": "4941",
      "D": "7471"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "b72845d1-8be7-42b9-b242-07d12e369916",
    "mockTestId": null
  },
  {
    "question": "If $$x_1=-1$$ and $$x_m=x_{m+1}+(m+1)$$ for every positive integer m, then $$X_{100}$$ equals",
    "options": {
      "A": "-5050",
      "B": "-5151",
      "C": "-5051",
      "D": "-5150"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "b72845d1-8be7-42b9-b242-07d12e369916",
    "mockTestId": null
  },
  {
    "question": "Let the m-th and n-th terms of a geometric progression be $$\\frac{3}{4}$$ and 12. respectively, where $$m < n$$. If the common ratio of the progression is an integer r, then the smallest possible value of $$r + n - m$$ is",
    "options": {
      "A": "6",
      "B": "2",
      "C": "-4",
      "D": "-2"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "b72845d1-8be7-42b9-b242-07d12e369916",
    "mockTestId": null
  },
  {
    "question": "If $$a_1, a_2, ......$$ are in A.P., then, $$\\frac{1}{\\sqrt{a_1} + \\sqrt{a_2}} + \\frac{1}{\\sqrt{a_2} + \\sqrt{a_3}} + ....... + \\frac{1}{\\sqrt{a_n} + \\sqrt{a_{n + 1}}}$$ is equal to",
    "options": {
      "A": "$$\\frac{n}{\\sqrt{a_1} + \\sqrt{a_{n + 1}}}$$",
      "B": "$$\\frac{n - 1}{\\sqrt{a_1} + \\sqrt{a_{n - 1}}}$$",
      "C": "$$\\frac{n - 1}{\\sqrt{a_1} + \\sqrt{a_n}}$$",
      "D": "$$\\frac{n}{\\sqrt{a_1} - \\sqrt{a_{n + 1}}}$$"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "b72845d1-8be7-42b9-b242-07d12e369916",
    "mockTestId": null
  },
  {
    "question": "The sum of all possible values of x satisfying the equation $$2^{4x^{2}}-2^{2x^{2}+x+16}+2^{2x+30}=0$$, is",
    "options": {
      "A": "$$3$$",
      "B": "$$\\frac{3}{2}$$",
      "C": "$$\\frac{5}{2}$$",
      "D": "$$\\frac{1}{2}$$"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "126dd56b-e2cb-46dc-863a-0acb13833811",
    "mockTestId": null
  },
  {
    "question": "Suppose k is any integer such that the equation $$2x^{2}+kx+5=0$$ has no real roots and the equation $$x^{2}+(k-5)x+1=0$$ has two distinct real roots for x. Then, the number of possible values of k is",
    "options": {
      "A": "9",
      "B": "7",
      "C": "8",
      "D": "13"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "126dd56b-e2cb-46dc-863a-0acb13833811",
    "mockTestId": null
  },
  {
    "question": "If $$(3+2\\sqrt{2})$$ is a root of the equation $$ax^{2}+bx+c=0$$ and $$(4+2\\sqrt{3})$$ is a root of the equation $$ay^{2}+my+n=0$$ where a, b, c, m and n are integers, then the value of $$(\\frac{b}{m}+\\frac{c-2b}{n})$$ is",
    "options": {
      "A": "0",
      "B": "1",
      "C": "3",
      "D": "4"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "126dd56b-e2cb-46dc-863a-0acb13833811",
    "mockTestId": null
  },
  {
    "question": "Let r and c be real numbers. If r and -r are roots of $$5x^{3} + cx^{2} - 10x + 9 = 0$$, then c equals",
    "options": {
      "A": "$$-\\frac{9}{2}$$",
      "B": "$$\\frac{9}{2}$$",
      "C": "-4",
      "D": "4"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "126dd56b-e2cb-46dc-863a-0acb13833811",
    "mockTestId": null
  },
  {
    "question": "Let a, b, c be non-zero real numbers such that $$b^2 < 4ac$$, and $$f(x) = ax^2 + bx + c$$. If the set S consists of all integers m such that f(m) < 0, then the set S must necessarily be",
    "options": {
      "A": "the set of al!I positive integers",
      "B": "the set of all integers",
      "C": "either the empty set or the set of all integers",
      "D": "the empty set"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "126dd56b-e2cb-46dc-863a-0acb13833811",
    "mockTestId": null
  },
  {
    "question": "The minimum possible value of $$\\frac{x^{2} - 6x + 10}{3-x}$$, for $$x < 3$$, is",
    "options": {
      "A": "$$-\\frac{1}{2}$$",
      "B": "2",
      "C": "$$\\frac{1}{2}$$",
      "D": "-2"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "126dd56b-e2cb-46dc-863a-0acb13833811",
    "mockTestId": null
  },
  {
    "question": "Suppose one of the roots of the equation $$ax^{2}-bx+c=0$$ is $$2+\\sqrt{3}$$, Where a,b and c are rational numbers and $$a\\neq0$$. If $$b=c^{3}$$ then $$\\mid a\\mid$$ equals.",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "126dd56b-e2cb-46dc-863a-0acb13833811",
    "mockTestId": null
  },
  {
    "question": "For all real values of x, the range of the function $$f(x)=\\frac{x^{2}+2x+4}{2x^{2}+4x+9}$$ is:",
    "options": {
      "A": "$$[\\frac{4}{9},\\frac{8}{9}]$$",
      "B": "$$[\\frac{3}{7},\\frac{8}{9})$$",
      "C": "$$(\\frac{3}{7},\\frac{1}{2})$$",
      "D": "$$[\\frac{3}{7},\\frac{1}{2})$$"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "126dd56b-e2cb-46dc-863a-0acb13833811",
    "mockTestId": null
  },
  {
    "question": "Consider the pair of equations: $$x^{2}-xy-x=22$$ and $$y^{2}-xy+y=34$$. If $$x>y$$, then $$x-y$$ equals",
    "options": {
      "A": "6",
      "B": "4",
      "C": "7",
      "D": "8"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "126dd56b-e2cb-46dc-863a-0acb13833811",
    "mockTestId": null
  },
  {
    "question": "If r is a constant such that $$\\mid x^2 - 4x - 13 \\mid = r$$ has exactly three distinct real roots, then the value of r is",
    "options": {
      "A": "17",
      "B": "21",
      "C": "15",
      "D": "18"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "126dd56b-e2cb-46dc-863a-0acb13833811",
    "mockTestId": null
  },
  {
    "question": "Let m and n be positive integers, If $$x^{2}+mx+2n=0$$ and $$x^{2}+2nx+m=0$$  have real roots, then the smallest possible value of $$m+n$$ is",
    "options": {
      "A": "7",
      "B": "6",
      "C": "8",
      "D": "5"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "126dd56b-e2cb-46dc-863a-0acb13833811",
    "mockTestId": null
  },
  {
    "question": "How many disticnt positive integer-valued solutions exist to the equation $$(x^{2}-7x+11)^{(x^{2}-13x+42)}=1$$ ?",
    "options": {
      "A": "8",
      "B": "4",
      "C": "2",
      "D": "6"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "126dd56b-e2cb-46dc-863a-0acb13833811",
    "mockTestId": null
  },
  {
    "question": "The number of integers that satisfy the equality $$(x^{2}-5x+7)^{x+1}=1$$ is",
    "options": {
      "A": "3",
      "B": "2",
      "C": "4",
      "D": "5"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "126dd56b-e2cb-46dc-863a-0acb13833811",
    "mockTestId": null
  },
  {
    "question": "The product of the distinct roots of $$\\mid x^2 - x - 6 \\mid = x + 2$$ is",
    "options": {
      "A": "−16",
      "B": "-4",
      "C": "-24",
      "D": "-8"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "126dd56b-e2cb-46dc-863a-0acb13833811",
    "mockTestId": null
  },
  {
    "question": "What is the maximum number of customers that the ATM can serve with a stock of fifty 500 rupee notes and a sufficient number of notes of other denominations, if all the customers are to be served with at most 20 notes per withdrawal?",
    "options": {
      "A": "12",
      "B": "10",
      "C": "13",
      "D": "16"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "bdbb4c7e-0714-46d7-9805-3f282f07aaae",
    "mockTestId": null
  },
  {
    "question": "What is the number of 500 rupee notes required to serve 50 customers with 500 rupee notes as their preferences and another 50 customers with 100 rupee notes as their preferences, if the total number of notes to be dispensed is the smallest possible?",
    "options": {
      "A": "900",
      "B": "800",
      "C": "750",
      "D": "1400"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "bdbb4c7e-0714-46d7-9805-3f282f07aaae",
    "mockTestId": null
  },
  {
    "question": "The brand that had the highest revenue in 2016 is:",
    "options": {
      "A": "Cxqi",
      "B": "Bysi",
      "C": "Azra",
      "D": "Dipq"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "bdbb4c7e-0714-46d7-9805-3f282f07aaae",
    "mockTestId": null
  },
  {
    "question": "The brand that had the highest profit in 2016 is:",
    "options": {
      "A": "Bysi",
      "B": "Dipq",
      "C": "Cxqi",
      "D": "Azra"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "bdbb4c7e-0714-46d7-9805-3f282f07aaae",
    "mockTestId": null
  },
  {
    "question": "The brand that had the highest profit in 2017 is:",
    "options": {
      "A": "Bysi",
      "B": "Azra",
      "C": "Cxqi",
      "D": "Dipq"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "bdbb4c7e-0714-46d7-9805-3f282f07aaae",
    "mockTestId": null
  },
  {
    "question": "The complete list of brands whose profits went up in 2017 from 2016 is:",
    "options": {
      "A": "Azra, Bysi, Dipq",
      "B": "Cxqi, Azra, Dipq",
      "C": "Azra, Bysi, Cxqi",
      "D": "Bysi, Cxqi, Dipq"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "bdbb4c7e-0714-46d7-9805-3f282f07aaae",
    "mockTestId": null
  },
  {
    "question": "How many units of currency C did the outlet sell on that day?",
    "options": {
      "A": "22000",
      "B": "19000",
      "C": "6000",
      "D": "3000"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "bdbb4c7e-0714-46d7-9805-3f282f07aaae",
    "mockTestId": null
  },
  {
    "question": "What was the buying exchange rate of currency C with respect to currency L on that day?",
    "options": {
      "A": "1.10",
      "B": "0.95",
      "C": "2.20",
      "D": "1.90"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "bdbb4c7e-0714-46d7-9805-3f282f07aaae",
    "mockTestId": null
  },
  {
    "question": "What is Akhil's score on Day 1?",
    "options": {
      "A": "5",
      "B": "7",
      "C": "6",
      "D": "8"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "2e77b432-2f38-4915-bc89-ca062f7dfefd",
    "mockTestId": null
  },
  {
    "question": "Who attains the maximum total score?",
    "options": {
      "A": "Cannot be determined",
      "B": "Akhil",
      "C": "Bimal",
      "D": "Chatur"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "2e77b432-2f38-4915-bc89-ca062f7dfefd",
    "mockTestId": null
  },
  {
    "question": "If the total score of Bimal is a multiple of 3, what is the score of Akhil on Day 2?",
    "options": {
      "A": "Cannot be determined",
      "B": "5",
      "C": "6",
      "D": "4"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "2e77b432-2f38-4915-bc89-ca062f7dfefd",
    "mockTestId": null
  },
  {
    "question": "What is the total number of coins in all the boxes in the $$3^{rd}$$ row?",
    "options": {
      "A": "36",
      "B": "30",
      "C": "15",
      "D": "45"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "2e77b432-2f38-4915-bc89-ca062f7dfefd",
    "mockTestId": null
  },
  {
    "question": "How many boxes have at least one sack containing 9 coins?",
    "options": {
      "A": "3",
      "B": "4",
      "C": "5",
      "D": "8"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "2e77b432-2f38-4915-bc89-ca062f7dfefd",
    "mockTestId": null
  },
  {
    "question": "Which of the following statements is necessarily false?",
    "options": {
      "A": "D2 sold the highest number of ACs.",
      "B": "D4 sold more Split ACs as compared to D3.",
      "C": "D1 and D3 sold an equal number of Split ACs.",
      "D": "D1 and D3 together sold more ACs as compared to D2 and D4 together."
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "2e77b432-2f38-4915-bc89-ca062f7dfefd",
    "mockTestId": null
  },
  {
    "question": "If D3 and D4 sold an equal number of ACs, then what was the number of Non-inverter ACs sold by D2?",
    "options": {
      "A": "4",
      "B": "5",
      "C": "7",
      "D": "6"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "2e77b432-2f38-4915-bc89-ca062f7dfefd",
    "mockTestId": null
  },
  {
    "question": "How many students took AI?",
    "options": {
      "A": "60",
      "B": "210",
      "C": "90",
      "D": "270"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "2e77b432-2f38-4915-bc89-ca062f7dfefd",
    "mockTestId": null
  },
  {
    "question": "How many students got A grade in AI?",
    "options": {
      "A": "99",
      "B": "42",
      "C": "84",
      "D": "63"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "2e77b432-2f38-4915-bc89-ca062f7dfefd",
    "mockTestId": null
  },
  {
    "question": "How many non-CS students got B grade in ML?",
    "options": {
      "A": "165",
      "B": "75",
      "C": "25",
      "D": "90"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "2e77b432-2f38-4915-bc89-ca062f7dfefd",
    "mockTestId": null
  },
  {
    "question": "If Roopa leaves home with 30 flowers, the number of flowers she offers to each deity is:",
    "options": {
      "A": "30",
      "B": "31",
      "C": "32",
      "D": "33"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "2e77b432-2f38-4915-bc89-ca062f7dfefd",
    "mockTestId": null
  },
  {
    "question": "The minimum number of flowers that could be offered to each deity is:",
    "options": {
      "A": "0",
      "B": "15",
      "C": "16",
      "D": "Cannot be determined"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "2e77b432-2f38-4915-bc89-ca062f7dfefd",
    "mockTestId": null
  },
  {
    "question": "On the basis of information in the passage, which one of the following is NOT a reason for the failure of policies seeking to address climate change?",
    "options": {
      "A": "The greed of organisations benefiting from non-renewable energy resources.",
      "B": "The global dominance of oil economies and international politics built around it.",
      "C": "The marginalised status of non-European ways of looking at nature and the environment.",
      "D": "The decentralised characteristic of renewable energy resources like solar power."
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "cf6fec07-dccf-4024-96e1-83be19f23671",
    "mockTestId": null
  },
  {
    "question": "Which one of the following, if true, would make the reviewer’s choice of the pronoun “who” for Gaia inappropriate?",
    "options": {
      "A": "Modern western science discovers new evidence for the Earth being an inanimate object.",
      "B": "There is a direct cause-effect relationship between human activities and global climate change.",
      "C": "Ghosh’s book has a different title: “The Nutmeg’s Revenge”.",
      "D": "Non-European societies have perceived the Earth as a non-living source of all resources."
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "cf6fec07-dccf-4024-96e1-83be19f23671",
    "mockTestId": null
  },
  {
    "question": "All of the following can be inferred from the reviewer’s discussion of “The Nutmeg’s Curse”, EXCEPT:",
    "options": {
      "A": "the history of climate change is deeply intertwined with the history of colonialism.",
      "B": "the contemporary dominant perception of nature and the environment was put in place by processes of colonialism.",
      "C": "environmental preservation policy makers can learn a lot from non-European and/or pre-colonial societies.",
      "D": "academic discourses have always served the function of raising awareness about environmental preservation."
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "cf6fec07-dccf-4024-96e1-83be19f23671",
    "mockTestId": null
  },
  {
    "question": "Which one of the following best explains the primary purpose of the discussion of the colonisation of the Banda islands in “The Nutmeg’s Curse”?",
    "options": {
      "A": "To illustrate the role played by the cultivation of certain crops in the plantation mode in contributing to climate change.",
      "B": "To illustrate the first instance in history when the processes responsible for climate change were initiated.",
      "C": "To illustrate how systemic violence against the colonised constituted the cornerstone of colonialism.",
      "D": "To illustrate how colonialism represented and perpetuated the mindset that has led to climate change."
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "cf6fec07-dccf-4024-96e1-83be19f23671",
    "mockTestId": null
  },
  {
    "question": "According to the author, companies like ThredUP have not caught on in the UK for all of the following reasons EXCEPT that:",
    "options": {
      "A": "recycling is currently not financially attractive for luxury brands.",
      "B": "luxury brands want to maintain their brand image.",
      "C": "luxury brands do not like their product to be devalued.",
      "D": "the British don’t buy second-hand clothing."
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "cf6fec07-dccf-4024-96e1-83be19f23671",
    "mockTestId": null
  },
  {
    "question": "Based on the passage, we can infer that the opposite of fast fashion, ‘slow fashion’, would most likely refer to clothes that:",
    "options": {
      "A": "are of high quality and long lasting.",
      "B": "do not bleed toxins and dyes.",
      "C": "are sold by genuine vintage stores.",
      "D": "do not shed microfibres."
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "cf6fec07-dccf-4024-96e1-83be19f23671",
    "mockTestId": null
  },
  {
    "question": "The act of “thrifting”, as described in the passage, can be considered ironic because it:",
    "options": {
      "A": "has created environmental problems.",
      "B": "is not cost-effective for retailers",
      "C": "offers luxury clothing at cut-rate prices.",
      "D": "is an anti-consumerist attitude."
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "cf6fec07-dccf-4024-96e1-83be19f23671",
    "mockTestId": null
  },
  {
    "question": "The central idea of the passage would be undermined if:",
    "options": {
      "A": "customers bought all their clothes online.",
      "B": "clothes were not thrown and burnt in landfills",
      "C": "second-hand stores sold only high-quality clothes.",
      "D": "Primark and Boohoo recycled their clothes for vintage stores"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "cf6fec07-dccf-4024-96e1-83be19f23671",
    "mockTestId": null
  },
  {
    "question": "All of the following are advanced by the author as reasons why non-geographers disregard geographic influences on human phenomena EXCEPT their:",
    "options": {
      "A": "lingering impressions of past geographic analyses that were politically offensive.",
      "B": "belief in the central role of humans, unrelated to physical surroundings, in influencing phenomena.",
      "C": "disciplinary training which typically does not include technical knowledge of geography.",
      "D": "dismissal of explanations that involve geographical causes for human behaviour."
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "cf6fec07-dccf-4024-96e1-83be19f23671",
    "mockTestId": null
  },
  {
    "question": "The author criticises scholars who are not geographers for all of the following reasons EXCEPT:",
    "options": {
      "A": "their rejection of the role of biogeographic factors in social and cultural phenomena.",
      "B": "their outdated interpretations of past cultural and historical phenomena.",
      "C": "the importance they place on the role of individual decisions when studying human phenomena",
      "D": "their labelling of geographic explanations as deterministic."
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "cf6fec07-dccf-4024-96e1-83be19f23671",
    "mockTestId": null
  },
  {
    "question": "All of the following can be inferred from the passage EXCEPT:",
    "options": {
      "A": "individual dictat and contingency were not the causal factors for the use of fur clothing in some very cold climates.",
      "B": "agricultural practices changed drastically in the Australian continent after it was colonised.",
      "C": "while most human phenomena result from culture and individual choice, some have bio-geographic origins.",
      "D": "several academic studies of human phenomena in the past involved racist interpretations."
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "cf6fec07-dccf-4024-96e1-83be19f23671",
    "mockTestId": null
  },
  {
    "question": "The examples of the Inuit and Aboriginal Australians are offered in the passage to show:",
    "options": {
      "A": "human resourcefulness across cultures in adapting to their surroundings.",
      "B": "how physical circumstances can dictate human behaviour and cultures.",
      "C": "that despite geographical isolation, traditional societies were self-sufficient and adaptive.",
      "D": "how environmental factors lead to comparatively divergent paths in livelihoods and development."
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "cf6fec07-dccf-4024-96e1-83be19f23671",
    "mockTestId": null
  },
  {
    "question": "Which one of the following statements is not true about migration in the Indian Ocean world?",
    "options": {
      "A": "The Indian Ocean world’s migration networks connected the global north with the global south.",
      "B": "Geographical location rather than geographical proximity determined the choice of destination for migrants.",
      "C": "The Indian Ocean world’s migration networks were shaped by religious and commercial histories of the region.",
      "D": "Migration in the Indian Ocean world was an ambivalent experience."
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "cf6fec07-dccf-4024-96e1-83be19f23671",
    "mockTestId": null
  },
  {
    "question": "On the basis of the nature of the relationship between the items in each pair below, choose the odd pair out:",
    "options": {
      "A": "Indian Ocean novels : Outward-looking",
      "B": "Postcolonial novels : Border-crossing",
      "C": "Indian Ocean world : Slavery",
      "D": "Postcolonial novels : Anti-colonial nationalism"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "cf6fec07-dccf-4024-96e1-83be19f23671",
    "mockTestId": null
  },
  {
    "question": "All of the following statements, if true, would weaken the passage’s claim about the relationship between mainstream English-language fiction and Indian Ocean novels EXCEPT:",
    "options": {
      "A": "the depiction of Africa in most Indian Ocean novels is driven by a postcolonial nostalgia for an idyllic past",
      "B": "the depiction of Africa in most Indian Ocean novels is driven by an Orientalist imagination of its cultural crudeness.",
      "C": "very few mainstream English-language novels have historically been set in American and European metropolitan centres.",
      "D": "most mainstream English-language novels have historically privileged the Christian, white, male experience of travel and adventure."
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "cf6fec07-dccf-4024-96e1-83be19f23671",
    "mockTestId": null
  },
  {
    "question": "All of the following claims contribute to the “remapping” discussed by the passage,EXCEPT:",
    "options": {
      "A": "Indian Ocean novels have gone beyond the specifics of national concerns to explore rich regional pasts.",
      "B": "the world of early international trade and commerce was not the sole domain of white Europeans.",
      "C": "cosmopolitanism originated in the West and travelled to the East through globalisation.",
      "D": "the global south, as opposed to the global north, was the first centre of globalisation."
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "cf6fec07-dccf-4024-96e1-83be19f23671",
    "mockTestId": null
  },
  {
    "question": "Which one of the following statements best expresses the paradox of patrimony laws?",
    "options": {
      "A": "They were aimed at protecting cultural property, but instead reduced business for auctioneers like Sotheby’s.",
      "B": "They were intended to protect cultural property, but instead resulted in the neglect of historical sites.",
      "C": "They were intended to protect cultural property, but instead resulted in the withholding of national treasure from museums.",
      "D": "They were aimed at protecting cultural property, but instead reduced new archaeological discoveries."
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "cf6fec07-dccf-4024-96e1-83be19f23671",
    "mockTestId": null
  },
  {
    "question": "It can be inferred from the passage that archaeological sites are considered important by some source countries because they:",
    "options": {
      "A": "are a symbol of Western imperialism.",
      "B": "are subject to strict patrimony laws.",
      "C": "generate funds for future discoveries.",
      "D": "give a boost to the tourism sector."
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "cf6fec07-dccf-4024-96e1-83be19f23671",
    "mockTestId": null
  },
  {
    "question": "Which one of the following statements, if true, would undermine the central idea of the passage?",
    "options": {
      "A": "Affluent archaeologically-rich source countries can afford to carry out their own excavations.",
      "B": "Museums established in economically deprived archaeologically-rich source countries can display the antiques discovered there.",
      "C": "UNESCO finances archaeological research in poor, but archaeologically-rich source countries.",
      "D": "Western countries will have to apologise to countries for looting their cultural property in the past century."
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "cf6fec07-dccf-4024-96e1-83be19f23671",
    "mockTestId": null
  },
  {
    "question": "From the passage we can infer that the author is likely to advise poor, but archaeologically-rich source countries to do all of the following, EXCEPT:",
    "options": {
      "A": "fund institutes in other countries to undertake archaeological exploration in the source country reaping the benefits of cutting-edge techniques.",
      "B": "allow foreign countries to analyse and exhibit the archaeological finds made in the source country.",
      "C": "to find ways to motivate other countries to finance archaeological explorations in their country.",
      "D": "adopt China’s strategy of dropping its cultural property laws and carrying out archaeological research through international collaboration."
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "cf6fec07-dccf-4024-96e1-83be19f23671",
    "mockTestId": null
  },
  {
    "question": "How many of the integers 1, 2, … , 120, are divisible by none of 2, 5 and 7?",
    "options": {
      "A": "42",
      "B": "41",
      "C": "40",
      "D": "43"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "84a20ce2-e2a2-4470-b8f9-06e53acd1641",
    "mockTestId": null
  },
  {
    "question": "Let $$n!=1*2*3* ...*n$$ for integer $$n \\geq 1$$.If $$p = 1!+(2*2!)+(3*3!)+... +(10*10!)$$, then $$p+2$$ when divided by 11! leaves a remainder of",
    "options": {
      "A": "10",
      "B": "0",
      "C": "7",
      "D": "1"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "84a20ce2-e2a2-4470-b8f9-06e53acd1641",
    "mockTestId": null
  },
  {
    "question": "If x = $$(16^3 + 17^3+ 18^3+ 19^3 )$$, then x divided by 70 leaves a remainder of",
    "options": {
      "A": "0",
      "B": "1",
      "C": "69",
      "D": "35"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "84a20ce2-e2a2-4470-b8f9-06e53acd1641",
    "mockTestId": null
  },
  {
    "question": "The remainder, when $$(15^{23} + 23^{23})$$ is divided by 19, is",
    "options": {
      "A": "4",
      "B": "15",
      "C": "0",
      "D": "18"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "84a20ce2-e2a2-4470-b8f9-06e53acd1641",
    "mockTestId": null
  },
  {
    "question": "How many even integers n, where $$100 \\leq n \\leq 200$$ , are divisible neither by seven nor by nine?",
    "options": {
      "A": "40",
      "B": "37",
      "C": "39",
      "D": "38"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "84a20ce2-e2a2-4470-b8f9-06e53acd1641",
    "mockTestId": null
  },
  {
    "question": "The number of positive integers n in the range $$12 \\leq n \\leq 40$$ such that the product (n -1)*(n - 2)*…*3*2*1 is not divisible by n is",
    "options": {
      "A": "5",
      "B": "7",
      "C": "13",
      "D": "14"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "84a20ce2-e2a2-4470-b8f9-06e53acd1641",
    "mockTestId": null
  },
  {
    "question": "When $$2^{256}$$ is divided by 17, the remainder would be",
    "options": {
      "A": "1",
      "B": "16",
      "C": "14",
      "D": "None of these"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "84a20ce2-e2a2-4470-b8f9-06e53acd1641",
    "mockTestId": null
  },
  {
    "question": "After the division of a number successively by 3, 4 and 7, the remainders obtained are 2, 1 and 4 respectively. What will be the remainder if 84 divides the same number?",
    "options": {
      "A": "80",
      "B": "75",
      "C": "41",
      "D": "53"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "84a20ce2-e2a2-4470-b8f9-06e53acd1641",
    "mockTestId": null
  },
  {
    "question": "$$7^{6n} - 6^{6n}$$, where n is an integer > 0, is divisible by",
    "options": {
      "A": "13",
      "B": "127",
      "C": "559",
      "D": "All of these"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "84a20ce2-e2a2-4470-b8f9-06e53acd1641",
    "mockTestId": null
  },
  {
    "question": "Let $$b$$ be a positive integer and $$a = b^2 - b$$. If $$b \\geq 4$$ , then $$a^2 - 2a$$ is divisible by",
    "options": {
      "A": "15",
      "B": "20",
      "C": "24",
      "D": "All of these"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "84a20ce2-e2a2-4470-b8f9-06e53acd1641",
    "mockTestId": null
  },
  {
    "question": "Let n be the number of different five-digit numbers, divisible by 4 with the digits 1, 2, 3, 4, 5 and 6, no digit being repeated in the numbers. What is the value of n?",
    "options": {
      "A": "144",
      "B": "168",
      "C": "192",
      "D": "None of these"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "84a20ce2-e2a2-4470-b8f9-06e53acd1641",
    "mockTestId": null
  },
  {
    "question": "Let N = 1421 * 1423 * 1425. What is the remainder when N is divided by 12?",
    "options": {
      "A": "0",
      "B": "9",
      "C": "3",
      "D": "6"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "84a20ce2-e2a2-4470-b8f9-06e53acd1641",
    "mockTestId": null
  },
  {
    "question": "The integers 34041 and 32506 when divided by a three-digit integer n leave the same remainder. What is n?",
    "options": {
      "A": "289",
      "B": "367",
      "C": "453",
      "D": "307"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "84a20ce2-e2a2-4470-b8f9-06e53acd1641",
    "mockTestId": null
  },
  {
    "question": "Let N = $$55^3 + 17^3 - 72^3$$. N is divisible by:",
    "options": {
      "A": "both 7 and 13",
      "B": "both 3 and 13",
      "C": "both 17 and 7",
      "D": "both 3 and 17"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "84a20ce2-e2a2-4470-b8f9-06e53acd1641",
    "mockTestId": null
  },
  {
    "question": "The remainder when $$7^{84}$$ is divided by $$342$$ is :",
    "options": {
      "A": "0",
      "B": "1",
      "C": "49",
      "D": "341"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "84a20ce2-e2a2-4470-b8f9-06e53acd1641",
    "mockTestId": null
  },
  {
    "question": "A certain number, when divided by 899, leaves a remainder 63. Find the remainder when the same number is divided by 29.",
    "options": {
      "A": "5",
      "B": "4",
      "C": "1",
      "D": "Cannot be determined"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "84a20ce2-e2a2-4470-b8f9-06e53acd1641",
    "mockTestId": null
  },
  {
    "question": "A number is formed by writing first 54 natural numbers next to each other as 12345678910111213 ... Find the remainder when this number is divided by 8.",
    "options": {
      "A": "1",
      "B": "7",
      "C": "2",
      "D": "0"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "84a20ce2-e2a2-4470-b8f9-06e53acd1641",
    "mockTestId": null
  },
  {
    "question": "If m and n are integers divisible by 5, which of the following is not necessarily true?",
    "options": {
      "A": "m - n is divisible by 5",
      "B": "$$m^2$$ - $$n^2$$ is divisible by 25",
      "C": "m + n is divisible by 10",
      "D": "None of these"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "84a20ce2-e2a2-4470-b8f9-06e53acd1641",
    "mockTestId": null
  },
  {
    "question": "Find the minimum integral value of n such that the division $$\\frac{55n}{124}$$ leaves no remainder.",
    "options": {
      "A": "124",
      "B": "123",
      "C": "31",
      "D": "62"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "84a20ce2-e2a2-4470-b8f9-06e53acd1641",
    "mockTestId": null
  },
  {
    "question": "Which one among the following stations is visited the largest number of times?",
    "options": {
      "A": "Station C",
      "B": "Station E",
      "C": "Station D",
      "D": "Station F"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "bfdae6cf-81e8-4a7d-bd81-d79268f077d6",
    "mockTestId": null
  },
  {
    "question": "Which team patrols the street connecting Stations D and E at 10:15 hrs?",
    "options": {
      "A": "Team 4",
      "B": "Team 1",
      "C": "Team 2",
      "D": "Team 3"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "bfdae6cf-81e8-4a7d-bd81-d79268f077d6",
    "mockTestId": null
  },
  {
    "question": "How many teams pass through Station C in a day?",
    "options": {
      "A": "4",
      "B": "3",
      "C": "1",
      "D": "2"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "bfdae6cf-81e8-4a7d-bd81-d79268f077d6",
    "mockTestId": null
  },
  {
    "question": "If the underlying principle is to be satisfied in such a way that the journey between any two cities can be performed using only direct (non-stop) flights, then the minimum number of direct flights to be scheduled is:",
    "options": {
      "A": "45",
      "B": "90",
      "C": "180",
      "D": "135"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "bfdae6cf-81e8-4a7d-bd81-d79268f077d6",
    "mockTestId": null
  },
  {
    "question": "Suppose three of the ten cities are to be developed as hubs. A hub is a city which is connected with every other city by direct flights each way, both in the morning as well as in the evening. The only direct flights which will be scheduled are originating and/or terminating in one of the hubs. Then the minimum number of direct flights that need to be scheduled so that the underlying principle of the airline to serve all the ten cities is met without visiting more than one hub during one trip is:",
    "options": {
      "A": "54",
      "B": "120",
      "C": "96",
      "D": "60"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "bfdae6cf-81e8-4a7d-bd81-d79268f077d6",
    "mockTestId": null
  },
  {
    "question": "If all the cars follow the police order, what is the difference in travel time (in minutes) between a car which takes the route A-N-B and a car that takes the route A-M-B?",
    "options": {
      "A": "1",
      "B": "0.1",
      "C": "0.2",
      "D": "0.9"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "bfdae6cf-81e8-4a7d-bd81-d79268f077d6",
    "mockTestId": null
  },
  {
    "question": "A new one-way road is built from M to N. Each car now has three possible routes to travel from A to B: A-M-B, A-N-B and A-M-N-B. On the road from M to N, one car takes 7 minutes and each additional car increases the travel time per car by j. minute. Assume that any car taking the A-M-N-B route travels the A-M portion at the same time as other cars taking the A-M-B route, and the N-B portion at the same time as other cars taking the A-N-B route.If all the cars follow the police order, what is the minimum travel time (in minutes) from A to B? (Assume that the police department would never order all the cars to take the same route.)",
    "options": {
      "A": "26",
      "B": "32",
      "C": "29.9",
      "D": "30"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "bfdae6cf-81e8-4a7d-bd81-d79268f077d6",
    "mockTestId": null
  },
  {
    "question": "How many questions were DEFINITELY disapproved by Bimal?",
    "options": {
      "A": "3",
      "B": "4",
      "C": "7",
      "D": "5"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "e9942027-0b89-4fd2-8a5a-4567010511ec",
    "mockTestId": null
  },
  {
    "question": "The approval ratio of a reviewer is the ratio of the number of questions (s)he approved to the number of questions (s)he reviewed. Which option best describes Amal’s approval ratio?",
    "options": {
      "A": "either 0.25 or 0.75",
      "B": "0.25",
      "C": "lies between 0.25 and 0.50",
      "D": "lies between 0.25 and 0.75"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "e9942027-0b89-4fd2-8a5a-4567010511ec",
    "mockTestId": null
  },
  {
    "question": "How many questions created by Amal or Bimal were disapproved by at least one of the other reviewers?",
    "options": {
      "A": "7",
      "B": "4",
      "C": "5",
      "D": "2"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "e9942027-0b89-4fd2-8a5a-4567010511ec",
    "mockTestId": null
  },
  {
    "question": "Who among the following four is not a member of Team 2?",
    "options": {
      "A": "Paula",
      "B": "Terence",
      "C": "Quentin",
      "D": "Sally"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "e9942027-0b89-4fd2-8a5a-4567010511ec",
    "mockTestId": null
  },
  {
    "question": "Who among the following four people is a part of exactly two teams?",
    "options": {
      "A": "Paula",
      "B": "Quentin",
      "C": "Sally",
      "D": "Robert"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "e9942027-0b89-4fd2-8a5a-4567010511ec",
    "mockTestId": null
  },
  {
    "question": "Who among the five people is a member of all teams?",
    "options": {
      "A": "Terence",
      "B": "Sally",
      "C": "Paula",
      "D": "No one"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "e9942027-0b89-4fd2-8a5a-4567010511ec",
    "mockTestId": null
  },
  {
    "question": "Apart from Chinese and English, which languages are spoken by Team 1?",
    "options": {
      "A": "Arabic and French",
      "B": "Basque and French",
      "C": "Arabic and Basque",
      "D": "Basque and Dutch"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "e9942027-0b89-4fd2-8a5a-4567010511ec",
    "mockTestId": null
  },
  {
    "question": "What could be the size of a team that includes K?",
    "options": {
      "A": "2 or 3",
      "B": "2 or 4",
      "C": "3 or 4",
      "D": "Only 2",
      "E": "Only 4"
    },
    "answer": "E",
    "type": "Multiple Choice",
    "topicId": "e9942027-0b89-4fd2-8a5a-4567010511ec",
    "mockTestId": null
  },
  {
    "question": "In how many ways a team can be constituted so that the team includes N?",
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "5",
      "E": "6"
    },
    "answer": "E",
    "type": "Multiple Choice",
    "topicId": "e9942027-0b89-4fd2-8a5a-4567010511ec",
    "mockTestId": null
  },
  {
    "question": "What would be the size of the largest possible team?",
    "options": {
      "A": "8",
      "B": "7",
      "C": "6",
      "D": "5",
      "E": "cannot be determined"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "e9942027-0b89-4fd2-8a5a-4567010511ec",
    "mockTestId": null
  },
  {
    "question": "Who can be a member of a team of size 5?",
    "options": {
      "A": "K",
      "B": "L",
      "C": "M",
      "D": "P",
      "E": "R"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "e9942027-0b89-4fd2-8a5a-4567010511ec",
    "mockTestId": null
  },
  {
    "question": "Who cannot be a member of a team of size 3?",
    "options": {
      "A": "L",
      "B": "M",
      "C": "N",
      "D": "P",
      "E": "Q"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "e9942027-0b89-4fd2-8a5a-4567010511ec",
    "mockTestId": null
  },
  {
    "question": "If Chetan sold 10 shares of MCS on three consecutive days, while Michael sold 10 shares only once during the five days, what was the price of MCS at the end of day 3?",
    "options": {
      "A": "Rs 90",
      "B": "Rs 100",
      "C": "Rs 110",
      "D": "Rs 120",
      "E": "Rs 130"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "e9942027-0b89-4fd2-8a5a-4567010511ec",
    "mockTestId": null
  },
  {
    "question": "If Michael ended up with Rs 100 less cash than Chetan at the end of day 5, what was the difference in the number of shares possessed by Michael and Chetan (at the end of day 5)?",
    "options": {
      "A": "Michael had 10 less shares than Chetan.",
      "B": "Michael had 10 more shares than Chetan.",
      "C": "Chetan had 10 more shares than Michael.",
      "D": "Chetan had 20 more shares than Michael.",
      "E": "Both had the same number of shares."
    },
    "answer": "E",
    "type": "Multiple Choice",
    "topicId": "e9942027-0b89-4fd2-8a5a-4567010511ec",
    "mockTestId": null
  },
  {
    "question": "If Chetan ended up with Rs 1300 more cash than Michael at the end of day 5, what was the price of MCS share at the end of day 4?",
    "options": {
      "A": "Rs 90",
      "B": "Rs 100",
      "C": "Rs 110",
      "D": "Rs 120",
      "E": "Not uniquely determinable"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "e9942027-0b89-4fd2-8a5a-4567010511ec",
    "mockTestId": null
  },
  {
    "question": "What could have been the maximum possible increase in combined cash balance of Chetan and Michael at the end of the fifth day?",
    "options": {
      "A": "Rs 3700",
      "B": "Rs 4000",
      "C": "Rs 4700",
      "D": "Rs 5000",
      "E": "Rs 6000"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "e9942027-0b89-4fd2-8a5a-4567010511ec",
    "mockTestId": null
  },
  {
    "question": "If Michael ended up with 20 more shares than Chetan at the end of day 5, what was the price of the share at the end of day 3?",
    "options": {
      "A": "Rs 90",
      "B": "Rs 100",
      "C": "Rs 110",
      "D": "Rs 120",
      "E": "Rs 130"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "e9942027-0b89-4fd2-8a5a-4567010511ec",
    "mockTestId": null
  },
  {
    "question": "A. In 1849, a poor Bavarian imigrant named Levi StraussB. landed in San Francisco, California,C. at the invitation of his brother-in-law David SternD. owner of dry goods business.E. This dry goods business would later became known as Levi Strauss & Company.[CAT 2008]",
    "options": {
      "A": "B only",
      "B": "B and C",
      "C": "A and B",
      "D": "A only",
      "E": "A, B and D"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "0d8db630-e794-4d0f-b8ec-4b47615b0dd7",
    "mockTestId": null
  },
  {
    "question": "A. In response to the allegations and condemnation pouring in,B. Nike implemented comprehensive changes in their labour policy.C. Perhaps sensing the rising tide of global labour concerns,D. from the public would become a prominent media issue,E. Nike sought to be a industry leader in employee relations.[CAT 2008]",
    "options": {
      "A": "D and E",
      "B": "D only",
      "C": "A and E",
      "D": "A and D",
      "E": "B, C and E"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "0d8db630-e794-4d0f-b8ec-4b47615b0dd7",
    "mockTestId": null
  },
  {
    "question": "A. Charges and countercharges mean nothingB. to the few million who have lost their home.C. The nightmare is far from over, for the governmentD. is still unable to reach hundreds who are marooned.E. The death count have just begun.[CAT 2008]",
    "options": {
      "A": "A only",
      "B": "C only",
      "C": "A and C",
      "D": "A, C and D",
      "E": "D only"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "0d8db630-e794-4d0f-b8ec-4b47615b0dd7",
    "mockTestId": null
  },
  {
    "question": "A. I did not know what to make of you.B. Because you had lived in India, I associate you more with my parents than with me.C. And yet you were unlike my cousins in Calcutta, who seem so innocent and obedient when I visited them.D. You were not curious about me in the least.E. Although you did make effort to meet me.[CAT 2008]",
    "options": {
      "A": "A only",
      "B": "A and B",
      "C": "A and E",
      "D": "D only",
      "E": "A and D"
    },
    "answer": "E",
    "type": "Multiple Choice",
    "topicId": "0d8db630-e794-4d0f-b8ec-4b47615b0dd7",
    "mockTestId": null
  },
  {
    "question": "In each question, there are five sentences or parts of sentences that form a paragraph. Identify the sentence(s) or part(s) of sentence(s) that is/are correct in terms of grammar and usage. Then, choose the most appropriate option.A. When I returned to home, I began to readB. everything I could get my hand on about Israel.C. That same year Israel’s Jewish Agency sentD. a Shaliach a sort of recruiter to Minneapolis.E. I became one of his most active devotees.[CAT 2007]",
    "options": {
      "A": "C & E",
      "B": "C only",
      "C": "E only",
      "D": "B, C & E",
      "E": "C, D & E"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "0d8db630-e794-4d0f-b8ec-4b47615b0dd7",
    "mockTestId": null
  },
  {
    "question": "In each question, there are five sentences or parts of sentences that form a paragraph. Identify the sentence(s) or part(s) of sentence(s) that is/are correct in terms of grammar and usage. Then, choose the most appropriate option.A. So once an economy is actually in recession,B. The authorities can, in principle, move the economyC. Out of slump - assuming hypotheticallyD. That they know how to - by a temporary stimuli.E. In the longer term, however, such policies have no affect on the overall behaviour of the economy.",
    "options": {
      "A": "A, B & E",
      "B": "B, C & E",
      "C": "C & D",
      "D": "E only",
      "E": "B only"
    },
    "answer": "E",
    "type": "Multiple Choice",
    "topicId": "0d8db630-e794-4d0f-b8ec-4b47615b0dd7",
    "mockTestId": null
  },
  {
    "question": "In each question, there are five sentences or parts of sentences that form a paragraph. Identify the sentence(s) or part(s) of sentence(s) that is/are correct in terms of grammar and usage. Then, choose the most appropriate option.A. It is sometimes told that democraticB. government originated in the city-statesC. of ancient Greece. Democratic ideals have been handed to us from that time.D. In truth, however, this is an unhelpful assertion.E. The Greeks gave us the word, hence did not provide us with a model.",
    "options": {
      "A": "A, B & D",
      "B": "B, C & D",
      "C": "B & D",
      "D": "B only",
      "E": "D only"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "0d8db630-e794-4d0f-b8ec-4b47615b0dd7",
    "mockTestId": null
  },
  {
    "question": "Some sentences are grammatically incorrect or inappropriate. Select the option that indicates the grammatically correct and appropriate sentence(s).A. When virtuoso teams begin their work, individuals are in and group consensus is out.B. As project progresses, however, the individual stars harness themselves to the product of the group.C. Sooner or later, the members break through their own egocentrism and become a plurality with single-minded focus on the goal.D. In short, they morph into a powerful team with a shared identity.",
    "options": {
      "A": "A&C",
      "B": "A&D",
      "C": "B&D",
      "D": "A,C&D"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "0d8db630-e794-4d0f-b8ec-4b47615b0dd7",
    "mockTestId": null
  },
  {
    "question": "Some sentences are grammatically incorrect or inappropriate. Select the option that indicates the grammatically correct and appropriate sentence(s).A. Large reductions in the ozone layer, which sits about 15-30 km above the Earth, take place each winter over the polar regions, especially the Antarctic, as low temperatures allow the formation of stratospheric clouds that assist chemical reactions breaking down ozone.B. Industrial chemicals containing chlorine and bromine have been blamed for thinning the layer because they attack the ozone molecules, making them to break apart.C. Many an offending chemicals have now been banned.D. It will still take several decades before these substances have disappeared from the atmosphere.",
    "options": {
      "A": "D",
      "B": "B&D",
      "C": "A&D",
      "D": "A&C"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "0d8db630-e794-4d0f-b8ec-4b47615b0dd7",
    "mockTestId": null
  },
  {
    "question": "Some sentences are grammatically incorrect or inappropriate. Select the option that indicates the grammatically correct and appropriate sentence(s).A. The balance of power will shift to the East as China and India evolve.B. Rarely the economic ascent of two still relatively poor nations has been watched with such a mixture of awe, opportunism, and trepidation.C. Postwar era witnessed economic miracles in Japan and South Korea, but neither was populous enough to power worldwide growth or change the game in a complete spectrum of industries.D. China and India, by contrast, possess the weight and dynamism to transform the 21st-century global economy.",
    "options": {
      "A": "A,B&C",
      "B": "A&D",
      "C": "C",
      "D": "C&D"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "0d8db630-e794-4d0f-b8ec-4b47615b0dd7",
    "mockTestId": null
  },
  {
    "question": "Some sentences are grammatically incorrect or inappropriate. Select the option that indicates the grammatically correct and appropriate sentence(s).A. People have good reason to care about the welfare of animals.B. Ever since Enlightenment, their treatment has been seen as a measure of mankind's humanity.C. It is no coincidence that William Wilberforce and Sir Thomas Foxwell Buxton, two leaders of the movement to abolish the slave trade, helped found the Royal Society for the Prevention of Cruelty to Animals in 1820s.D. An increasing number of people go further: mankind has a duty not to cause pain to animals that have the capacity to suffer.",
    "options": {
      "A": "A&D",
      "B": "B",
      "C": "A&C",
      "D": "C&D"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "0d8db630-e794-4d0f-b8ec-4b47615b0dd7",
    "mockTestId": null
  },
  {
    "question": "Identify the incorrect sentence or sentencesA. It was a tough situation and Manasi was taking pains to make it better.B. Slowly her efforts gave fruit and things started improving.C. Everyone complemented her for her good work.D. She was very happy and thanked everyone",
    "options": {
      "A": "A",
      "B": "D",
      "C": "B and C",
      "D": "A and C"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "0d8db630-e794-4d0f-b8ec-4b47615b0dd7",
    "mockTestId": null
  },
  {
    "question": "Identify the incorrect sentence or sentencesA. Harish told Raj to plead guilty.B. Raj pleaded guilty of stealing money from the shop.C. The court found Raj guilty of all the crimes he was charged with.D. He was sentenced for three years in jail",
    "options": {
      "A": "A and C",
      "B": "B and D",
      "C": "A, C, and D",
      "D": "B, C, and D"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "0d8db630-e794-4d0f-b8ec-4b47615b0dd7",
    "mockTestId": null
  },
  {
    "question": "Identify the incorrect sentence or sentencesA. Last Sunday, Archana had nothing to do.B. After waking up, she lay on the bed thinking of what to do.C. At 11 o'clock she took shower and got ready.E. She spent most of the day shopping",
    "options": {
      "A": "B and C",
      "B": "C",
      "C": "A and B",
      "D": "B, C, and D"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "0d8db630-e794-4d0f-b8ec-4b47615b0dd7",
    "mockTestId": null
  },
  {
    "question": "Fill in the Blanks: Many people suggest _______ and still other would like to convince people not to buy pirated cassettes.",
    "options": {
      "A": "to bring down audiocassette prices to reduce the incidence of music piracy, others advocate strong legal action against the offenders,",
      "B": "bringing down audiocassette prices to reduce the incidents of music piracy, others are advocating strong legal action against offenders,",
      "C": "bringing down audiocassette prices to reduce the incidents of music piracy, others advocate strong legal action against offenders,",
      "D": "audiocassette prices to be brought down to reduce incidents of music piracy, others advocate that strong legal action must be taken against offenders,"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "0d8db630-e794-4d0f-b8ec-4b47615b0dd7",
    "mockTestId": null
  },
  {
    "question": "Fill in the Blanks: The ancient Egyptians believed ______ so that when these objects were magically reanimated through the correct rituals, they would be able to functions effectively.",
    "options": {
      "A": "that it was essential that things they portrayed must have every relevant feature shown as clearly as possible",
      "B": "it was essential for things they portray to have had every relevant feature shown as clearly as possible,",
      "C": "it was essential that the things they portrayed had every relevant feature shown as clearly as possible.",
      "D": "that when they portrayed things, it should have every relevant feature shown as clearly as possible"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "0d8db630-e794-4d0f-b8ec-4b47615b0dd7",
    "mockTestId": null
  },
  {
    "question": "Fill in the Blanks: Archaeologists believe that the pieces of red-ware pottery excavated recently near Bhavnagar and ______ shed light on a hitherto dark 600-year period in the Harappan history of Gujarat.",
    "options": {
      "A": "estimated with a reasonable certainty as being about 3400 years old,",
      "B": "are estimated reasonably certain to be about 3400 years old,",
      "C": "estimated at about 3400 years old with reasonable certainty,",
      "D": "estimated with reasonable certainty to be about 3400 years old,"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "0d8db630-e794-4d0f-b8ec-4b47615b0dd7",
    "mockTestId": null
  },
  {
    "question": "Choose the option that conforms most closely to Standard English usage.",
    "options": {
      "A": "The running of large businesses consist of getting somebody to make something that somebody else sold to somebody else for more than its cost.",
      "B": "The running of a large business consists of getting somebody to make something that somebody else will sell to somebody else for more than it costs.",
      "C": "The running of a large business consists of getting somebody to sell something that somebody else made for more than it cost.",
      "D": "The running of large businesses consist of getting somebody to make something else that somebody else will sell to somebody else for more than it costs.",
      "E": "None of the above"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "0d8db630-e794-4d0f-b8ec-4b47615b0dd7",
    "mockTestId": null
  },
  {
    "question": "Choose the option that conforms most closely to Standard English usage.",
    "options": {
      "A": "From the sixteenth century onwards, people started feeling disdainful and self-conscious about their body and its products that led to a heightened focus on emotional and bodily regulations.",
      "B": "The heightened focus on controlling the body and emotions comes from disdain and selfconsciousness about the body and its products, found in the sixteenth century.",
      "C": "From the sixteenth century onwards, a growing disdain for and self-consciousness about the body and its products took hold, leading to a heightened focus on emotional and bodily regulation.",
      "D": "The heightened focus on emotional and bodily regulations started from the sixteenth century onwards, when people felt disdain and self-consciousness about the body and its products."
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "0d8db630-e794-4d0f-b8ec-4b47615b0dd7",
    "mockTestId": null
  },
  {
    "question": "Choose the option that conforms most closely to Standard English usage.",
    "options": {
      "A": "We are forced to fall back on fatalism as an explanation of irrational events.",
      "B": "We are forced to falling back on the fatalism as an explanation of irrational events.",
      "C": "We are forced to fall back on fatalism as explanations of irrational events.",
      "D": "We are forced to fall back to fatalism as an explanation of irrational events."
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "0d8db630-e794-4d0f-b8ec-4b47615b0dd7",
    "mockTestId": null
  },
  {
    "question": "Anil borrows Rs 2 lakhs at an interest rate of 8% per annum, compounded half-yearly. He repays Rs 10320 at the end of the first year and closes the loan by paying the outstanding amount at the end of the third year. Then, the total interest, in rupees, paid over the three years is nearest to",
    "options": {
      "A": "45311",
      "B": "51311",
      "C": "33130",
      "D": "40991"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "092b495e-ed0f-45bd-9034-14a68b551b7a",
    "mockTestId": null
  },
  {
    "question": "Nitu has an initial capital of ₹20,000. Out of this, she invests ₹8,000 at 5.5% in bank A, ₹5,000 at 5.6% in bank B and the remaining amount at x% in bank C, each rate being simple interest per annum. Her combined annual interest income from these investments is equal to 5% of the initial capital. If she had invested her entire initial capital in bank C alone, then her annual interest income, in rupees, would have been",
    "options": {
      "A": "700",
      "B": "800",
      "C": "900",
      "D": "1000"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "092b495e-ed0f-45bd-9034-14a68b551b7a",
    "mockTestId": null
  },
  {
    "question": "Alex invested his savings in two parts. The simple interest earned on the first part at 15% per annum for 4 years is the same as the simple interest earned on the second part at 12% per annum for 3 years. Then, the percentage of his savings invested in the first part is",
    "options": {
      "A": "37.5%",
      "B": "62.5%",
      "C": "60%",
      "D": "40%"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "092b495e-ed0f-45bd-9034-14a68b551b7a",
    "mockTestId": null
  },
  {
    "question": "Anil invests some money at a fixed rate of interest, compounded annually. If the interests accrued during the second and third year are ₹ 806.25 and ₹ 866.72, respectively, the interest accrued, in INR, during the fourth year is nearest to",
    "options": {
      "A": "929.48",
      "B": "934.65",
      "C": "931.72",
      "D": "926.84"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "092b495e-ed0f-45bd-9034-14a68b551b7a",
    "mockTestId": null
  },
  {
    "question": "Bank A offers 6% interest rate per annum compounded half-yearly. Bank B and Bank C offer simple interest but the annual interest rate offered by Bank C is twice that of Bank B. Raju invests a certain amount in Bank B for a certain period and Rupa invests ₹ 10,000 in Bank C for twice that period. The interest that would accrue to Raju during that period is equal to the interest that would have accrued had he invested the same amount in Bank A for one year. The interest accrued, in INR, to Rupa is",
    "options": {
      "A": "3436",
      "B": "2436",
      "C": "2346",
      "D": "1436"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "092b495e-ed0f-45bd-9034-14a68b551b7a",
    "mockTestId": null
  },
  {
    "question": "For which firm(s) can the amounts raised by them be concluded with certainty in each year?",
    "options": {
      "A": "Only Bzygoo and Czechy and Drjbna",
      "B": "Only Czechy and Drjbna",
      "C": "Only Drjbna",
      "D": "Only Czechy"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "d046e5e9-8f6d-42f4-9ff1-a83690d47a4b",
    "mockTestId": null
  },
  {
    "question": "What best can be concluded about the total amount of money raised in 2015?",
    "options": {
      "A": "It is either Rs. 7 crores or Rs. 8 crores or Rs. 9 crores.",
      "B": "It is exactly Rs. 8 crores.",
      "C": "It is either Rs. 7 crores or Rs. 8 crores.",
      "D": "It is either Rs. 8 crores or Rs. 9 crores."
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "d046e5e9-8f6d-42f4-9ff1-a83690d47a4b",
    "mockTestId": null
  },
  {
    "question": "If Elavalaki raised Rs. 3 crores in 2013, then what is the smallest possible total amount of money (in Rs. crores) that could have been raised by all the companies in 2012?",
    "options": {
      "A": "12",
      "B": "9",
      "C": "11",
      "D": "10"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "d046e5e9-8f6d-42f4-9ff1-a83690d47a4b",
    "mockTestId": null
  },
  {
    "question": "If the total amount of money raised in 2014 is Rs. 12 crores, then which of the following is not possible?",
    "options": {
      "A": "Bzygoo raised the same amount of money as Elavalaki in 2013.",
      "B": "Alfloo raised the same amount of money as Drjbna in 2013.",
      "C": "Alfloo raised the same amount of money as Bzygoo in 2014.",
      "D": "Bzygoo raised more money than Elavalaki in 2014."
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "d046e5e9-8f6d-42f4-9ff1-a83690d47a4b",
    "mockTestId": null
  },
  {
    "question": "Which of the following statements can be true?I. The number of offline registrations was the smallest in May.II. The total number of registrations was the smallest in February.",
    "options": {
      "A": "Both I and II",
      "B": "Only II",
      "C": "Neither I nor II",
      "D": "Only I"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "d046e5e9-8f6d-42f4-9ff1-a83690d47a4b",
    "mockTestId": null
  },
  {
    "question": "What best can be concluded about the number of offline registrations in February?",
    "options": {
      "A": "80",
      "B": "50 or 80",
      "C": "30 or 50 or 80",
      "D": "50"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "d046e5e9-8f6d-42f4-9ff1-a83690d47a4b",
    "mockTestId": null
  },
  {
    "question": "Which pair of months definitely had the same total number of registrations?I. January and AprilII. February and May",
    "options": {
      "A": "Both I and II",
      "B": "Only II",
      "C": "Only I",
      "D": "Neither I nor II"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "d046e5e9-8f6d-42f4-9ff1-a83690d47a4b",
    "mockTestId": null
  },
  {
    "question": "What was the weight of the test component?",
    "options": {
      "A": "0.60",
      "B": "0.50",
      "C": "0.75",
      "D": "0.40"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "d046e5e9-8f6d-42f4-9ff1-a83690d47a4b",
    "mockTestId": null
  },
  {
    "question": "What was the maximum aggregate score obtained by the students?",
    "options": {
      "A": "68",
      "B": "80",
      "C": "62",
      "D": "66"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "d046e5e9-8f6d-42f4-9ff1-a83690d47a4b",
    "mockTestId": null
  },
  {
    "question": "Which of the following pairs of students were part of the same project team?i) Amala and Bimanii) Koli and Mathew",
    "options": {
      "A": "Only ii)",
      "B": "Only i)",
      "C": "Neither i) nor ii)",
      "D": "Both i) and ii)"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "d046e5e9-8f6d-42f4-9ff1-a83690d47a4b",
    "mockTestId": null
  },
  {
    "question": "Which among the following restaurants gave its median rating to exactly one of the workers?",
    "options": {
      "A": "R2",
      "B": "R5",
      "C": "R4",
      "D": "R3"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "d046e5e9-8f6d-42f4-9ff1-a83690d47a4b",
    "mockTestId": null
  },
  {
    "question": "Pipes A and C are fill pipes while Pipe B is a drain pipe of a tank. Pipe B empties the full tank in one hour less than the time taken by Pipe A to fill the empty tank. When pipes A, B and C are turned on together, the empty tank is filled in two hours. If pipes B and C are turned on together when the tank is empty and Pipe B is turned off after one hour, then Pipe C takes another one hour and 15 minutes to fill the remaining tank. If Pipe A can fill the empty tank in less than five hours, then the time taken, in minutes, by Pipe C to fill the empty tank is",
    "options": {
      "A": "90",
      "B": "120",
      "C": "75",
      "D": "60"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "584a82d7-00b7-45f7-99d8-41ce40d536a4",
    "mockTestId": null
  },
  {
    "question": "Rahul, Rakshita and Gurmeet, working together, would have taken more than 7 days to finish a job. On the other hand, Rahul and Gurmeet, working together would have taken less than 15 days to finish the job. However, they all worked together for 6 days, followed by Rakshita, who worked alone for 3 more days to finish the job. If Rakshita had worked alone on the job then the number of days she would have taken to finish the job, cannot be",
    "options": {
      "A": "20",
      "B": "17",
      "C": "16",
      "D": "21"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "584a82d7-00b7-45f7-99d8-41ce40d536a4",
    "mockTestId": null
  },
  {
    "question": "A group of N people worked on a project. They finished 35% of the project by working 7 hours a day for 10 days. Thereafter, 10 people left the group and the remaining people finished the rest of the project in 14 days by working 10 hours a day. Then the value of N is",
    "options": {
      "A": "150",
      "B": "23",
      "C": "36",
      "D": "140"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "584a82d7-00b7-45f7-99d8-41ce40d536a4",
    "mockTestId": null
  },
  {
    "question": "One day, Rahul started a work at 9 AM and Gautam joined him two hours later. They then worked together and completed the work at 5 PM the same day. If both had started at 9 AM and worked together, the work would have been completed 30 minutes earlier. Working alone, the time Rahul would have taken, in hours, to complete the work is",
    "options": {
      "A": "11.5",
      "B": "10",
      "C": "12.5",
      "D": "12"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "584a82d7-00b7-45f7-99d8-41ce40d536a4",
    "mockTestId": null
  },
  {
    "question": "Anu, Vinu and Manu can complete a work alone in 15 days, 12 days and 20 days, respectively. Vinu works everyday. Anu works only on alternate days starting from the first day while Manu works only on alternate days starting from the second day. Then, the number of days needed to complete the work is",
    "options": {
      "A": "5",
      "B": "8",
      "C": "6",
      "D": "7"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "584a82d7-00b7-45f7-99d8-41ce40d536a4",
    "mockTestId": null
  },
  {
    "question": "Anil can paint a house in 60 days while Bimal can paint it in 84 days. Anil starts painting and after 10 days, Bimal and Charu join him. Together, they complete the painting in 14 more days. If they are paid a total of ₹ 21000 for the job, then the share of Charu, in INR, proportionate to the work done by him, is",
    "options": {
      "A": "9000",
      "B": "9200",
      "C": "9100",
      "D": "9150"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "584a82d7-00b7-45f7-99d8-41ce40d536a4",
    "mockTestId": null
  },
  {
    "question": "Two pipes A and B are attached to an empty water tank. Pipe A fills the tank while pipe B drains it. If pipe A is opened at 2 pm and pipe B is opened at 3 pm, then the tank becomes full at 10 pm. Instead, if pipe A is opened at 2 pm and pipe B is opened at 4 pm, then the tank becomes full at 6 pm. If pipe B is not opened at all, then the time, in minutes, taken to fill the tank is",
    "options": {
      "A": "144",
      "B": "140",
      "C": "264",
      "D": "120"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "584a82d7-00b7-45f7-99d8-41ce40d536a4",
    "mockTestId": null
  },
  {
    "question": "At their usual efficiency levels, A and B together finish a task in 12 days. If A had worked half as efficiently as she usually does, and B had worked thrice as efficiently as he usually does, the task would have been completed in 9 days. How many days would A take to finish the task if she works alone at her usual efficiency?",
    "options": {
      "A": "36",
      "B": "24",
      "C": "18",
      "D": "12"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "584a82d7-00b7-45f7-99d8-41ce40d536a4",
    "mockTestId": null
  },
  {
    "question": "Anil alone can do a job in 20 days while Sunil alone can do it in 40 days. Anil starts the job, and after 3 days, Sunil joins him. Again, after a few more days, Bimal joins them and they together finish the job. If Bimal has done 10% of the job, then in how many days was the job done?",
    "options": {
      "A": "12",
      "B": "13",
      "C": "15",
      "D": "14"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "584a82d7-00b7-45f7-99d8-41ce40d536a4",
    "mockTestId": null
  },
  {
    "question": "Humans and robots can both perform a job but at different efficiencies. Fifteen humans and five robots working together take thirty days to finish the job, whereas five humans and fifteen robots working together take sixty days to finish it. How many days will fifteen humans working together (without any robot) take to finish it?",
    "options": {
      "A": "45",
      "B": "36",
      "C": "32",
      "D": "40"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "584a82d7-00b7-45f7-99d8-41ce40d536a4",
    "mockTestId": null
  },
  {
    "question": "The minor angle between the hours hand and minutes hand of a clock was observed at 8:48 am. The minimum duration, in minutes, after 8.48 am when this angle increases by 50% is",
    "options": {
      "A": "$$\\frac{36}{11}$$",
      "B": "2",
      "C": "4",
      "D": "$$\\frac{24}{11}$$"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "1962dda0-97e1-4cd6-88d2-802d69574eef",
    "mockTestId": null
  },
  {
    "question": "Ravi is driving at a speed of 40 km/h on a road. Vijay is 54 meters behind Ravi and driving in the same direction as Ravi. Ashok is driving along the same road from the opposite direction at a speed of 50 km/h and is 225 meters away from Ravi. The speed, in km/h, at which Vijay should drive so that all the three cross each other at the same time, is",
    "options": {
      "A": "58.8",
      "B": "67.2",
      "C": "61.6",
      "D": "64.4"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "1962dda0-97e1-4cd6-88d2-802d69574eef",
    "mockTestId": null
  },
  {
    "question": "Brishti went on an 8-hour trip in a car. Before the trip, the car had travelled a total of $$x$$ km till then, where $$x$$ is a whole number and is palindromic, i.e., $$x$$ remains unchanged when its digits are reversed. At the end of the trip, the car had travelled a total of 26862 km till then, this number again being palindromic. If Brishti never drove at more than 110 km/h, then the greatest possible average speed at which she drove during the trip, in km/h, was",
    "options": {
      "A": "110",
      "B": "90",
      "C": "100",
      "D": "80"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "1962dda0-97e1-4cd6-88d2-802d69574eef",
    "mockTestId": null
  },
  {
    "question": "A boat takes 2 hours to travel downstream a river from port A to port B, and 3 hours to return to port A. Another boat takes a total of 6 hours to travel from port B to port A and return to port B. If the speeds of the boats and the river are constant, then the time, in hours, taken by the slower boat to travel from port A to port B is",
    "options": {
      "A": "$$12(\\sqrt{5} - 2)$$",
      "B": "$$3(3 + \\sqrt{5})$$",
      "C": "$$3(\\sqrt{5} - 1)$$",
      "D": "$$3(3 - \\sqrt{5})$$"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "1962dda0-97e1-4cd6-88d2-802d69574eef",
    "mockTestId": null
  },
  {
    "question": "Trains A and B start traveling at the same time towards each other with constant speeds from stations X and Y, respectively. Train A reaches station Y in 10 minutes while train B takes 9 minutes to reach station X after meeting train A. Then the total time taken, in minutes, by train B to travel from station Y to station X is",
    "options": {
      "A": "6",
      "B": "15",
      "C": "10",
      "D": "12"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "1962dda0-97e1-4cd6-88d2-802d69574eef",
    "mockTestId": null
  },
  {
    "question": "Two ships meet mid-ocean, and then, one ship goes south and the other ship goes west, both travelling at constant speeds. Two hours later, they are 60 km apart. If the speed of one of the ships is 6 km per hour more than the other one, then the speed, in km per hour, of the slower ship is",
    "options": {
      "A": "20",
      "B": "12",
      "C": "18",
      "D": "24"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "1962dda0-97e1-4cd6-88d2-802d69574eef",
    "mockTestId": null
  },
  {
    "question": "Two cars travel from different locations at constant speeds. To meet each other after starting at the same time, they take 1.5 hours if they travel towards each other, but 10.5 hours if they travel in the same direction. If the speed of the slower car is 60 km/hr, then the distance traveled, in km, by the slower car when it meets the other car while traveling towards each other, is",
    "options": {
      "A": "100",
      "B": "90",
      "C": "120",
      "D": "150"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "1962dda0-97e1-4cd6-88d2-802d69574eef",
    "mockTestId": null
  },
  {
    "question": "Two ships are approaching a port along straight routes at constant speeds. Initially, the two ships and the port formed an equilateral triangle with sides of length 24 km. When the slower ship travelled 8 km, the triangle formed by the new positions of the two ships and the port became right-angled. When the faster ship reaches the port, the distance, in km, between the other ship and the port will be",
    "options": {
      "A": "4",
      "B": "12",
      "C": "8",
      "D": "6"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "1962dda0-97e1-4cd6-88d2-802d69574eef",
    "mockTestId": null
  },
  {
    "question": "Two trains cross each other in 14 seconds when running in opposite directions along parallel tracks. The faster train is 160 m long and crosses a lamp post in 12 seconds. If the speed of the other train is 6 km/hr less than the faster one, its length, in m, is",
    "options": {
      "A": "184",
      "B": "192",
      "C": "190",
      "D": "180"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "1962dda0-97e1-4cd6-88d2-802d69574eef",
    "mockTestId": null
  },
  {
    "question": "Two trains A and B were moving in opposite directions, their speeds being in the ratio 5 : 3. The front end of A crossed the rear end of B 46 seconds after the front ends of the trains had crossed each other. It took another 69 seconds for the rear ends of the trains to cross each other. The ratio of length of train A to that of train B is",
    "options": {
      "A": "3:2",
      "B": "5:3",
      "C": "2:3",
      "D": "2:1"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "1962dda0-97e1-4cd6-88d2-802d69574eef",
    "mockTestId": null
  },
  {
    "question": "The distance from B to C is thrice that from A to B. Two trains travel from A to C via B. The speed of train 2 is double that of train 1 while traveling from A to B and their speeds are interchanged while traveling from B to C. The ratio of the time taken by train 1 to that taken by train 2 in travelling from A to C is",
    "options": {
      "A": "5:7",
      "B": "4:1",
      "C": "1:4",
      "D": "7:5"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "1962dda0-97e1-4cd6-88d2-802d69574eef",
    "mockTestId": null
  },
  {
    "question": "In a car race, car A beats car B by 45 km. car B beats car C by 50 km. and car A beats car C by 90 km. The distance (in km) over which the race has been conducted is",
    "options": {
      "A": "475",
      "B": "450",
      "C": "500",
      "D": "550"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "1962dda0-97e1-4cd6-88d2-802d69574eef",
    "mockTestId": null
  },
  {
    "question": "Vimla starts for office every day at 9 am and reaches exactly on time if she drives at her usual speed of 40 km/hr. She is late by 6 minutes if she drives at 35 km/hr. One day, she covers two-thirds of her distance to office in one-thirds of her usual total time to reach office, and then stops for 8 minutes. The speed, in km/hr, at which she should drive the remaining distance to reach office exactly on time is",
    "options": {
      "A": "29",
      "B": "26",
      "C": "28",
      "D": "27"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "1962dda0-97e1-4cd6-88d2-802d69574eef",
    "mockTestId": null
  },
  {
    "question": "A and B are two points on a straight line. Ram runs from A to B while Rahim runs from B to A. After crossing each other. Ram and Rahim reach their destination in one minute and four minutes, respectively. if they start at the same time, then the ratio of Ram's speed to Rahim's speed is",
    "options": {
      "A": "$$\\frac{1}{2}$$",
      "B": "$$\\sqrt{2}$$",
      "C": "$$2$$",
      "D": "$$2\\sqrt{2}$$"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "1962dda0-97e1-4cd6-88d2-802d69574eef",
    "mockTestId": null
  },
  {
    "question": "Two circular tracks T1 and T2 of radii 100 m and 20 m, respectively touch at a point A. Starting from A at the same time, Ram and Rahim are walking on track T1 and track T2 at speeds 15 km/hr and 5 km/hr respectively. The number of full rounds that Ram will make before he meets Rahim again for the first time is",
    "options": {
      "A": "5",
      "B": "3",
      "C": "2",
      "D": "4"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "1962dda0-97e1-4cd6-88d2-802d69574eef",
    "mockTestId": null
  },
  {
    "question": "A and B are two railway stations 90 km apart. A train leaves A at 9:00 am, heading towards B at a speed of 40 km/hr. Another train leaves B at 10:30 am, heading towards A at a speed of 20 km/hr. The trains meet each other at",
    "options": {
      "A": "11 : 45 am",
      "B": "11 : 20 am",
      "C": "11 : 00 am",
      "D": "10 : 45 am"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "1962dda0-97e1-4cd6-88d2-802d69574eef",
    "mockTestId": null
  },
  {
    "question": "Leaving home at the same time, Amal reaches the office at 10:15 am if he travels at 8 km/hr, and at 9:40 am if he travels at 15 km/hr. Leaving home at 9.10 am, at what speed, in km/hr, must he travel so as to reach office exactly at 10 am?",
    "options": {
      "A": "13",
      "B": "12",
      "C": "14",
      "D": "11"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "1962dda0-97e1-4cd6-88d2-802d69574eef",
    "mockTestId": null
  },
  {
    "question": "Pipes A and C are fill pipes while Pipe B is a drain pipe of a tank. Pipe B empties the full tank in one hour less than the time taken by Pipe A to fill the empty tank. When pipes A, B and C are turned on together, the empty tank is filled in two hours. If pipes B and C are turned on together when the tank is empty and Pipe B is turned off after one hour, then Pipe C takes another one hour and 15 minutes to fill the remaining tank. If Pipe A can fill the empty tank in less than five hours, then the time taken, in minutes, by Pipe C to fill the empty tank is",
    "options": {
      "A": "90",
      "B": "120",
      "C": "75",
      "D": "60"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "cb122feb-5a55-4dbb-acbf-e6937c549bd3",
    "mockTestId": null
  },
  {
    "question": "Rahul, Rakshita and Gurmeet, working together, would have taken more than 7 days to finish a job. On the other hand, Rahul and Gurmeet, working together would have taken less than 15 days to finish the job. However, they all worked together for 6 days, followed by Rakshita, who worked alone for 3 more days to finish the job. If Rakshita had worked alone on the job then the number of days she would have taken to finish the job, cannot be",
    "options": {
      "A": "20",
      "B": "17",
      "C": "16",
      "D": "21"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "cb122feb-5a55-4dbb-acbf-e6937c549bd3",
    "mockTestId": null
  },
  {
    "question": "The minor angle between the hours hand and minutes hand of a clock was observed at 8:48 am. The minimum duration, in minutes, after 8.48 am when this angle increases by 50% is",
    "options": {
      "A": "$$\\frac{36}{11}$$",
      "B": "2",
      "C": "4",
      "D": "$$\\frac{24}{11}$$"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "cb122feb-5a55-4dbb-acbf-e6937c549bd3",
    "mockTestId": null
  },
  {
    "question": "Ravi is driving at a speed of 40 km/h on a road. Vijay is 54 meters behind Ravi and driving in the same direction as Ravi. Ashok is driving along the same road from the opposite direction at a speed of 50 km/h and is 225 meters away from Ravi. The speed, in km/h, at which Vijay should drive so that all the three cross each other at the same time, is",
    "options": {
      "A": "58.8",
      "B": "67.2",
      "C": "61.6",
      "D": "64.4"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "cb122feb-5a55-4dbb-acbf-e6937c549bd3",
    "mockTestId": null
  },
  {
    "question": "Brishti went on an 8-hour trip in a car. Before the trip, the car had travelled a total of $$x$$ km till then, where $$x$$ is a whole number and is palindromic, i.e., $$x$$ remains unchanged when its digits are reversed. At the end of the trip, the car had travelled a total of 26862 km till then, this number again being palindromic. If Brishti never drove at more than 110 km/h, then the greatest possible average speed at which she drove during the trip, in km/h, was",
    "options": {
      "A": "110",
      "B": "90",
      "C": "100",
      "D": "80"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "cb122feb-5a55-4dbb-acbf-e6937c549bd3",
    "mockTestId": null
  },
  {
    "question": "A boat takes 2 hours to travel downstream a river from port A to port B, and 3 hours to return to port A. Another boat takes a total of 6 hours to travel from port B to port A and return to port B. If the speeds of the boats and the river are constant, then the time, in hours, taken by the slower boat to travel from port A to port B is",
    "options": {
      "A": "$$12(\\sqrt{5} - 2)$$",
      "B": "$$3(3 + \\sqrt{5})$$",
      "C": "$$3(\\sqrt{5} - 1)$$",
      "D": "$$3(3 - \\sqrt{5})$$"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "cb122feb-5a55-4dbb-acbf-e6937c549bd3",
    "mockTestId": null
  },
  {
    "question": "Trains A and B start traveling at the same time towards each other with constant speeds from stations X and Y, respectively. Train A reaches station Y in 10 minutes while train B takes 9 minutes to reach station X after meeting train A. Then the total time taken, in minutes, by train B to travel from station Y to station X is",
    "options": {
      "A": "6",
      "B": "15",
      "C": "10",
      "D": "12"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "cb122feb-5a55-4dbb-acbf-e6937c549bd3",
    "mockTestId": null
  },
  {
    "question": "A group of N people worked on a project. They finished 35% of the project by working 7 hours a day for 10 days. Thereafter, 10 people left the group and the remaining people finished the rest of the project in 14 days by working 10 hours a day. Then the value of N is",
    "options": {
      "A": "150",
      "B": "23",
      "C": "36",
      "D": "140"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "cb122feb-5a55-4dbb-acbf-e6937c549bd3",
    "mockTestId": null
  },
  {
    "question": "Two ships meet mid-ocean, and then, one ship goes south and the other ship goes west, both travelling at constant speeds. Two hours later, they are 60 km apart. If the speed of one of the ships is 6 km per hour more than the other one, then the speed, in km per hour, of the slower ship is",
    "options": {
      "A": "20",
      "B": "12",
      "C": "18",
      "D": "24"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "cb122feb-5a55-4dbb-acbf-e6937c549bd3",
    "mockTestId": null
  },
  {
    "question": "Two cars travel from different locations at constant speeds. To meet each other after starting at the same time, they take 1.5 hours if they travel towards each other, but 10.5 hours if they travel in the same direction. If the speed of the slower car is 60 km/hr, then the distance traveled, in km, by the slower car when it meets the other car while traveling towards each other, is",
    "options": {
      "A": "100",
      "B": "90",
      "C": "120",
      "D": "150"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "cb122feb-5a55-4dbb-acbf-e6937c549bd3",
    "mockTestId": null
  },
  {
    "question": "Two ships are approaching a port along straight routes at constant speeds. Initially, the two ships and the port formed an equilateral triangle with sides of length 24 km. When the slower ship travelled 8 km, the triangle formed by the new positions of the two ships and the port became right-angled. When the faster ship reaches the port, the distance, in km, between the other ship and the port will be",
    "options": {
      "A": "4",
      "B": "12",
      "C": "8",
      "D": "6"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "cb122feb-5a55-4dbb-acbf-e6937c549bd3",
    "mockTestId": null
  },
  {
    "question": "Two trains cross each other in 14 seconds when running in opposite directions along parallel tracks. The faster train is 160 m long and crosses a lamp post in 12 seconds. If the speed of the other train is 6 km/hr less than the faster one, its length, in m, is",
    "options": {
      "A": "184",
      "B": "192",
      "C": "190",
      "D": "180"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "cb122feb-5a55-4dbb-acbf-e6937c549bd3",
    "mockTestId": null
  },
  {
    "question": "One day, Rahul started a work at 9 AM and Gautam joined him two hours later. They then worked together and completed the work at 5 PM the same day. If both had started at 9 AM and worked together, the work would have been completed 30 minutes earlier. Working alone, the time Rahul would have taken, in hours, to complete the work is",
    "options": {
      "A": "11.5",
      "B": "10",
      "C": "12.5",
      "D": "12"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "cb122feb-5a55-4dbb-acbf-e6937c549bd3",
    "mockTestId": null
  },
  {
    "question": "Anu, Vinu and Manu can complete a work alone in 15 days, 12 days and 20 days, respectively. Vinu works everyday. Anu works only on alternate days starting from the first day while Manu works only on alternate days starting from the second day. Then, the number of days needed to complete the work is",
    "options": {
      "A": "5",
      "B": "8",
      "C": "6",
      "D": "7"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "cb122feb-5a55-4dbb-acbf-e6937c549bd3",
    "mockTestId": null
  },
  {
    "question": "In a class of 100 students, 73 like coffee, 80 like tea and 52 like lemonade. It may be possible that some students do not like any of these three drinks. Then the difference between the maximum and minimum possible number of students who like all the three drinks is",
    "options": {
      "A": "47",
      "B": "53",
      "C": "52",
      "D": "48"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "8ac2a2d3-db4e-42d3-b31d-d57dfb06adbf",
    "mockTestId": null
  },
  {
    "question": "Students in a college have to choose at least two subjects from chemistry, mathematics and physics. The number of students choosing all three subjects is 18, choosing mathematics as one of their subjects is 23 and choosing physics as one of their subjects is 25. The smallest possible number of students who could choose chemistry as one of their subjects is",
    "options": {
      "A": "22",
      "B": "21",
      "C": "20",
      "D": "19"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "8ac2a2d3-db4e-42d3-b31d-d57dfb06adbf",
    "mockTestId": null
  },
  {
    "question": "A club has 256 members of whom 144 can play football, 123 can play tennis, and 132 can play cricket. Moreover, 58 members can play both football and tennis, 25 can play both cricket and tennis, while 63 can play both football and cricket. If every member can play at least one game, then the number of members who can play only tennis is",
    "options": {
      "A": "38",
      "B": "32",
      "C": "45",
      "D": "43"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "8ac2a2d3-db4e-42d3-b31d-d57dfb06adbf",
    "mockTestId": null
  },
  {
    "question": "If among 200 students, 105 like pizza and 134 like burger, then the number of students who like only burger can possibly be",
    "options": {
      "A": "23",
      "B": "26",
      "C": "96",
      "D": "93"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "8ac2a2d3-db4e-42d3-b31d-d57dfb06adbf",
    "mockTestId": null
  },
  {
    "question": "If A = {$$6^{2n} -35n - 1$$}, where $$n$$ = 1,2,3,... and B = {35($$n$$-1)}, where $$n$$ = 1,2,3,... then which of the following is true?",
    "options": {
      "A": "Every member of A is in B and at least one member of B is not in A",
      "B": "Neither every member of A is in B nor every member of B is in A",
      "C": "Every member of B is in A.",
      "D": "At least one member of A is not in B"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "8ac2a2d3-db4e-42d3-b31d-d57dfb06adbf",
    "mockTestId": null
  },
  {
    "question": "A survey was conducted of 100 people to find out whether they had read recent issues of Golmal, a monthly magazine. The summarized information regarding readership in 3 months is given below:Only September: 18;September but not August: 23;September and July: 8;September:28;July: 48;July and August: 10;none of the three months: 24What is the number of surveyed people who have read exactly two consecutive issues (out of the three)?",
    "options": {
      "A": "7",
      "B": "9",
      "C": "12",
      "D": "14",
      "E": "17"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "8ac2a2d3-db4e-42d3-b31d-d57dfb06adbf",
    "mockTestId": null
  },
  {
    "question": "Based on the information given above, the minimum number of volunteers involved in both FR and TR projects, but not in the ER project is:",
    "options": {
      "A": "1",
      "B": "3",
      "C": "4",
      "D": "5"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "8ac2a2d3-db4e-42d3-b31d-d57dfb06adbf",
    "mockTestId": null
  },
  {
    "question": "Which of the following additional information would enable to find the exact number of volunteers involved in various projects?",
    "options": {
      "A": "Twenty volunteers are involved in FR.",
      "B": "Four volunteers are involved in all the three projects.",
      "C": "Twenty three volunteers are involved in exactly one project.",
      "D": "No need for any additional information."
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "8ac2a2d3-db4e-42d3-b31d-d57dfb06adbf",
    "mockTestId": null
  },
  {
    "question": "After some time, the volunteers who were involved in all the three projects were asked to withdraw from one project. As a result, one of the volunteers opted out of the TR project, and one opted out of the ER project, while the remaining ones involved in all the three projects opted out of the FR project. Which of the following statements, then, necessarily follows?",
    "options": {
      "A": "The number of volunteers in the ER Project is even.",
      "B": "More volunteers are now in FR project as compared to ER project.",
      "C": "More volunteers are now in TR project as compared to ER project.",
      "D": "The number of volunteers in the FR Project is even."
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "8ac2a2d3-db4e-42d3-b31d-d57dfb06adbf",
    "mockTestId": null
  },
  {
    "question": "After the withdrawal of volunteers, as indicated in the previous question, some new volunteers joined the NGO. Each one of them was allotted only one project in a manner such that, the number of volunteers working in one project alone for each of the three projects became identical. At that point, it was also found that the number of volunteers involved in FR and ER projects was the same as the number of volunteers involved in TR and ER projects. Which of the projects now has the highest number of volunteers?",
    "options": {
      "A": "ER",
      "B": "FR",
      "C": "TR",
      "D": "Cannot be determined"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "8ac2a2d3-db4e-42d3-b31d-d57dfb06adbf",
    "mockTestId": null
  },
  {
    "question": "What is the number of projects in which Gyani alone is involved?",
    "options": {
      "A": "Uniquely equal to zero.",
      "B": "Uniquely equal to 1.",
      "C": "Uniquely equal to 4.",
      "D": "Cannot be determined uniquely."
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "8ac2a2d3-db4e-42d3-b31d-d57dfb06adbf",
    "mockTestId": null
  },
  {
    "question": "What is the number of projects in which Medha alone is involved?",
    "options": {
      "A": "Uniquely equal to zero.",
      "B": "Uniquely equal to 1.",
      "C": "Uniquely equal to 4.",
      "D": "Cannot be determined uniquely."
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "8ac2a2d3-db4e-42d3-b31d-d57dfb06adbf",
    "mockTestId": null
  },
  {
    "question": "Shyam visited Ram during his brief vacation. In the mornings they both would go for yoga. In the evenings they would play tennis. To have more fun, they indulge only in one activity per day, i.e. either they went for yoga or played tennis each day. There were days when they were lazy and stayed home all day long. There were 24 mornings when they did nothing, 14 evenings when they stayed at home, and a total of 22 days when they did yoga or played tennis. For how many days Shyam stayed with Ram?",
    "options": {
      "A": "32",
      "B": "24",
      "C": "30",
      "D": "None of these"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "8ac2a2d3-db4e-42d3-b31d-d57dfb06adbf",
    "mockTestId": null
  },
  {
    "question": "On her walk through the park, Hamsa collected 50 coloured leaves, all either maple or oak. She sorted them by category when she got home, and found the following:The number of red oak leaves with spots is even and positive.The number of red oak leaves without any spot equals the number of red maple leaves without spots.All non-red oak leaves have spots, and there are five times as many of them as there are red spotted oak leaves.There are no spotted maple leaves that are not red.There are exactly 6 red spotted maple leaves.There are exactly 22 maple leaves that are neither spotted nor red.How many oak leaves did she collect?",
    "options": {
      "A": "22",
      "B": "17",
      "C": "25",
      "D": "18"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "8ac2a2d3-db4e-42d3-b31d-d57dfb06adbf",
    "mockTestId": null
  },
  {
    "question": "In a survey of political preference, 78% of those asked were in favor of at least one of the proposals: I, II and III. 50% of those asked favored proposal I, 30% favored proposal II, and 20% favored proposal III. If 5% of those asked favored all three of the proposals, what percentage of those asked favored more than one of the 3 proposals.",
    "options": {
      "A": "10",
      "B": "12",
      "C": "17",
      "D": "22"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "8ac2a2d3-db4e-42d3-b31d-d57dfb06adbf",
    "mockTestId": null
  },
  {
    "question": "What is the maximum percentage of people who can watch all the three channels?",
    "options": {
      "A": "12.5%",
      "B": "8.5%",
      "C": "15%",
      "D": "Data insufficient"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "8ac2a2d3-db4e-42d3-b31d-d57dfb06adbf",
    "mockTestId": null
  },
  {
    "question": "If 5% of people watched DD and CNN, 10% watched DD and BBC, then what percentage of people watched BBC and CNN only?",
    "options": {
      "A": "2%",
      "B": "5%",
      "C": "8.5%",
      "D": "Cannot be determined"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "8ac2a2d3-db4e-42d3-b31d-d57dfb06adbf",
    "mockTestId": null
  },
  {
    "question": "Referring to the previous question, what percentage of people watched all the three channels?",
    "options": {
      "A": "3.5%",
      "B": "0%",
      "C": "8.5%",
      "D": "Cannot be determined"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "8ac2a2d3-db4e-42d3-b31d-d57dfb06adbf",
    "mockTestId": null
  },
  {
    "question": "There is a sentence that is missing in the paragraph below. Look at the paragraph and decide where (option 1, 2, 3, or 4) the following sentence would best fit.Sentence: The discovery helps to explain archeological similarities between the Paleolithic peoples of China, Japan, and the Americas.Paragraph: The researchers also uncovered an unexpected genetic link between Native Americans and Japanese people. ___(1)___. During the deglaciation period, another group branched out from northern coastal China and travelled to Japan. ___(2)___. \"We were surprised to find that this ancestral source also contributed to the Japanese gene pool, especially the indigenous Ainus,\" says Li. ___(3)___. They shared similarities in how they crafted stemmed projectile points for arrowheads and spears. ___(4)___. \"This suggests that the Pleistocene connection among the Americas, China, and Japan was not confined to culture but also to genetics,\" says senior author Qing-Peng Kong, an evolutionary geneticist at the Chinese Academy of Sciences.",
    "options": {
      "A": "Option 2",
      "B": "Option 3",
      "C": "Option 1",
      "D": "Option 4"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "936923c4-5e7e-411e-acac-591dd6d00b37",
    "mockTestId": null
  },
  {
    "question": "There is a sentence that is missing in the paragraph below. Look at the paragraph and decide where (option 1, 2, 3, or 4) the following sentence would best fit.Sentence: Dualism was long held as the defining feature of developing countries in contrast to developed countries, where frontier technologies and high productivity were assumed to prevail.Paragraph: ___(1)___. At the core of development economics lies the idea of ‘productive dualism’: that poor countries’ economies are split between a narrow ‘modern’ sector that uses advanced technologies and a larger ‘traditional’ sector characterized by very low productivity.___(2)___. While this distinction between developing and advanced economies may have made some sense in the 1950s and 1960s, it no longer appears to be very relevant. A combination of forces have produced a widening gap between the winners and those left behind.___(3)___. Convergence between poor and rich parts of the economy was arrested and regional disparities widened.___(4)___. As a result, policymakers in advanced economies are now grappling with the same questions that have long preoccupied developing economies: mainly how to close the gap with the more advanced parts of the economy.",
    "options": {
      "A": "Option 1",
      "B": "Option 2",
      "C": "Option 3",
      "D": "Option 4"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "936923c4-5e7e-411e-acac-591dd6d00b37",
    "mockTestId": null
  },
  {
    "question": "There is a sentence that is missing in the paragraph below. Look at the paragraph and decide where (option 1, 2, 3, or 4) the following sentence would best fit.Sentence: Beyond undermining the monopoly of the State on the use of force, armed conflict also creates an environment that can enable organized crime to prosper.Paragraph: ___(1)___. Linkages between illicit arms, organized crime, and armed conflict can reinforce one another while also escalating and prolonging violence and eroding governance.___(2)___. Financial gains from crime can lengthen or intensify armed conflicts by creating revenue streams for non-State armed groups (NSAGs).___(3)___. In this context, when hostilities cease and parties to a conflict move towards a peaceful resolution, the widespread availability of surplus arms and ammunition can contribute to a situation of ‘criminalized peace’ that obstructs sustainable peacebuilding efforts.___(4)___.",
    "options": {
      "A": "Option 4",
      "B": "Option 3",
      "C": "Option 1",
      "D": "Option 2"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "936923c4-5e7e-411e-acac-591dd6d00b37",
    "mockTestId": null
  },
  {
    "question": "There is a sentence that is missing in the paragraph below. Look at the paragraph and decide where (option 1, 2, 3, or 4) the following sentence would best fit.Sentence: This philosophical cut at one’s core beliefs, values, and way of life is difficult enough.Paragraph: The experience of reading philosophy is often disquieting. When reading philosophy, the values around which one has heretofore organised one’s life may come to look provincial, flatly wrong, or even evil. ___(1)___. When beliefs previously held as truths are rendered implausible, new beliefs, values, and ways of living may be required. ___(2)___. What’s worse, philosophers admonish each other to remain unsutured until such time as a defensible new answer is revealed or constructed. Sometimes, philosophical writing is even strictly critical in that it does not even attempt to provide an alternative after tearing down a cultural or conceptual citadel. ___(3)___. The reader of philosophy must be prepared for the possibility of this experience. While reading philosophy can help one clarify one’s values, and even make one self-conscious for the first time of the fact that there are good reasons for believing what one believes, it can also generate unremediated doubt that is difficult to live with. ___(4)___.",
    "options": {
      "A": "Option 1",
      "B": "Option 4",
      "C": "Option 3",
      "D": "Option 2"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "936923c4-5e7e-411e-acac-591dd6d00b37",
    "mockTestId": null
  },
  {
    "question": "There is a sentence that is missing in the paragraph below. Look at the paragraph and decide where (option 1, 2, 3, or 4) the following sentence would best fit.Sentence: And probably much earlier, moving the documentation for kissing back 1,000 years compared to what was acknowledged in the scientific community.Paragraph: Research has hypothesised that the earliest evidence of human lip kissing originated in a very specific geographical location in South Asia 3,500 years ago.___(1)___. From there it may have spread to other regions, simultaneously accelerating the spread of the herpes simplex virus 1. According to Dr Troels Pank Arbøll and Dr Sophie Lund Rasmussen, who in a new article in the journal Science draw on a range of written sources from the earliest Mesopotamian societies, kissing was already a well-established practice 4,500 years ago in the Middle East.___(2)___. In ancient Mesopotamia, people wrote in cuneiform script on clay tablets.___(3)___. Many thousands of these clay tablets have survived to this day, and they contain clear examples that kissing was considered a part of romantic intimacy in ancient times.___(4)___. “Kissing could also have been part of friendships and family members' relations,\" says Dr Troels Pank Arbøll, an expert on the history of medicine in Mesopotamia.",
    "options": {
      "A": "Option 3",
      "B": "Option 4",
      "C": "Option 1",
      "D": "Option 2"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "936923c4-5e7e-411e-acac-591dd6d00b37",
    "mockTestId": null
  },
  {
    "question": "There is a sentence that is missing in the paragraph below. Look at the paragraph and decide where (option 1, 2, 3, or 4) the following sentence would best fit.Sentence: For theoretical purposes, arguments may be considered as freestanding entities, abstracted from their contexts of use in actual human activities.Paragraph : ___(1)___. An argument can be defined as a complex symbolic structure where some parts, known as the premises, offer support to another part, the conclusion. Alternatively, an argument can be viewed as a complex speech act consisting of one or more acts of premising (which assert propositions in favor of the conclusion), an act of concluding, and a stated or implicit marker (“hence”, “therefore”) that indicates that the conclusion follows from the premises.___(2)___. The relation of support between premises and conclusion can be cashed out in different ways: the premises may guarantee the truth of the conclusion, or make its truth more probable; the premises may imply the conclusion; the premises may make the conclusion more acceptable (or assertible).___(3)___. But depending on one’s explanatory goals, there is also much to be gained from considering arguments as they in fact occur in human communicative practices.___(4)___.",
    "options": {
      "A": "Option 4",
      "B": "Option 2",
      "C": "Option 1",
      "D": "Option 3"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "936923c4-5e7e-411e-acac-591dd6d00b37",
    "mockTestId": null
  },
  {
    "question": "The passage given below is followed by four alternate summaries. Choose the option that best captures the essence of the passage.Manipulating information was a feature of history long before modern journalism established rules of integrity. A record dates back to ancient Rome, when Antony met Cleopatra and his political enemy Octavian launched a smear campaign against him with “short, sharp slogans written upon coins.” The perpetrator became the first Roman Emperor and “fake news had allowed Octavian to hack the republican system once and for all”. But the 21st century has seen the weaponization of information on an unprecedented scale. Powerful new technology makes the fabrication of content simple, and social networks amplify falsehoods peddled by States, populist politicians, and dishonest corporate entities. The platforms have become fertile ground for computational propaganda, ‘trolling’ and ‘troll armies’.",
    "options": {
      "A": "Disinformation, which is mediated by technology today, is not new and has existed since ancient times.",
      "B": "People need to become critical of what they read, since historically, weaponization of information has led to corruption.",
      "C": "Use of misinformation for attaining power, a practice that is as old as the Octavian era, is currently fueled by technology.",
      "D": "Octavian used fake news to manipulate people and attain power and influence, just as people do today"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "936923c4-5e7e-411e-acac-591dd6d00b37",
    "mockTestId": null
  },
  {
    "question": "The passage given below is followed by four alternate summaries. Choose the option that best captures the essence of the passage.People spontaneously create counterfactual alternatives to reality when they think “if only” or “what if” and imagine how the past could have been different. The mind computes counterfactuals for many reasons. Counterfactuals explain the past and prepare for the future, they implicate various relations including causal ones, and they affect intentions and decisions. They modulate emotions such as regret and relief, and they support moral judgments such as blame. The ability to create counterfactuals develops throughout childhood and contributes to reasoning about other people's beliefs, including their false beliefs.",
    "options": {
      "A": "Counterfactuals help people to prepare for the future by understanding intentions and making decisions.",
      "B": "People create counterfactual alternatives to reality for various reasons, including reasoning about other people's beliefs.",
      "C": "Counterfactual alternatives to reality are created for a variety of reasons and is part of one's developmental process.",
      "D": "Counterfactual thinking helps to reverse past and future actions and reason out false beliefs."
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "936923c4-5e7e-411e-acac-591dd6d00b37",
    "mockTestId": null
  },
  {
    "question": "Anita wore a beautiful broach (A)/brooch (B) on the lapel of her jacket.\nIf you want to complain about the amenities in your neighbourhood, please meet your councillor(A)/counsellor(B).\nI would like your advice(A)/advise(B) on which job I should choose.\nThe last scene provided a climactic(A)/climatic(B) ending to the film.\nJeans that flair(A)/flare(B) at the bottom are in fashion these days.",
    "options": {
      "A": "BABAA",
      "B": "BABAB",
      "C": "BAAAB",
      "D": "ABABA",
      "E": "BAABA"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "5ba35943-dc89-401b-8d50-72a7c25668e0",
    "mockTestId": null
  },
  {
    "question": "The cake had lots of currents(A)/currants(B) and nuts in it.\nIf you engage in such exceptional(A)/exceptionable(B) behaviour, I will be forced to punish you.\nHe has the same capacity as an adult to consent(A)/assent(B) to surgical treatment.\nThe minister is obliged (A)/compelled(B) to report regularly to a parliamentary board.\nHis analysis of the situation is far too sanguine(A)/genuine(B).",
    "options": {
      "A": "BBABA",
      "B": "BBAAA",
      "C": "BBBBA",
      "D": "ABBAB",
      "E": "BABAB"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "5ba35943-dc89-401b-8d50-72a7c25668e0",
    "mockTestId": null
  },
  {
    "question": "She managed to bite back the ironic(A)/caustic(B) retort on the tip of her tongue.\nHe gave an impassioned and valid(A)/cogent(B) plea for judicial reform.\nI am not adverse(A)/averse(B) to helping out.\nThe coupe(A)/coup(B) broke away as the train climbed the hill.\nThey heard the bells peeling(A)/pealing(B) far and wide.",
    "options": {
      "A": "BBABA",
      "B": "BBBAB",
      "C": "BAABB",
      "D": "ABBAA",
      "E": "BBBBA"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "5ba35943-dc89-401b-8d50-72a7c25668e0",
    "mockTestId": null
  },
  {
    "question": "We were not successful in defusing(A)/diffusing(B) the Guru’s ideas.\nThe students baited(A)/bated(B) the instructor with irrelevant questions.\nThe hoard(A)/horde(B) rushed into the campus.\nThe prisoner’s interment(A)/internment(B) came to an end with his early release.\nThe hockey team could not deal with his unsociable(A)/unsocial(B) tendencies.",
    "options": {
      "A": "BABBA",
      "B": "BBABB",
      "C": "BABAA",
      "D": "ABBAB",
      "E": "AABBA"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "5ba35943-dc89-401b-8d50-72a7c25668e0",
    "mockTestId": null
  },
  {
    "question": "Choose the option in which the usage of the word is incorrect or inappropriate.Run[CAT 2008]",
    "options": {
      "A": "I must run fast to catch up with him.",
      "B": "Our team scored a goal against the run of play.",
      "C": "You can’t run over him like that.",
      "D": "The newly released book is enjoying a popular run.",
      "E": "This film is a run-of-the-mill production."
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "5ba35943-dc89-401b-8d50-72a7c25668e0",
    "mockTestId": null
  },
  {
    "question": "Choose the option in which the usage of the word is incorrect or inappropriate.Round[CAT 2008]",
    "options": {
      "A": "The police fired a round of tear gas shells.",
      "B": "The shop is located round the corner.",
      "C": "We took a ride on the merry-go-round.",
      "D": "The doctor is on a hospital round.",
      "E": "I shall proceed further only after you come round to admitting it."
    },
    "answer": "E",
    "type": "Multiple Choice",
    "topicId": "5ba35943-dc89-401b-8d50-72a7c25668e0",
    "mockTestId": null
  },
  {
    "question": "Choose the option in which the usage of the word is incorrect or inappropriate.Buckle[CAT 2008]",
    "options": {
      "A": "After the long hike our knees were beginning to buckle.",
      "B": "The horse suddenly broke into a buckle.",
      "C": "The accused did not buckle under police interrogation.",
      "D": "Sometimes, an earthquake can make a bridge buckle.",
      "E": "People should learn to buckle up as soon as they get into a car."
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "5ba35943-dc89-401b-8d50-72a7c25668e0",
    "mockTestId": null
  },
  {
    "question": "Choose the option in which the usage of the word is incorrect or inappropriate.File[CAT 2008]",
    "options": {
      "A": "You will find the paper in the file under C.",
      "B": "I need to file an insurance claim.",
      "C": "The cadets were marching in a single file.",
      "D": "File your nails before you apply nail polish.",
      "E": "When the parade was on, a soldier broke the file."
    },
    "answer": "E",
    "type": "Multiple Choice",
    "topicId": "5ba35943-dc89-401b-8d50-72a7c25668e0",
    "mockTestId": null
  },
  {
    "question": "The genocides in Bosnia and Rwanda, apart from being mis-described in the most sinister and _______ manner as ‘ethnic cleansing’, were also blamed, in further hand-washing rhetoric, on something dark and interior to _______ and perpetrators alike.",
    "options": {
      "A": "innovative; communicator",
      "B": "enchanting; leaders",
      "C": "disingenuous; victims",
      "D": "exigent; exploiters",
      "E": "tragic; sufferers"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "5ba35943-dc89-401b-8d50-72a7c25668e0",
    "mockTestId": null
  },
  {
    "question": "As navigators, calendar makers, and other __________ of the night sky accumulated evidence to the contrary, ancient astronomers were forced to __________ that certain bodies might move in circles about points, which in turn moved in circles about the earth.",
    "options": {
      "A": "scrutinizers; believe",
      "B": "observers; agree",
      "C": "scrutinizers; suggest",
      "D": "observers; concede",
      "E": "students; conclude"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "5ba35943-dc89-401b-8d50-72a7c25668e0",
    "mockTestId": null
  },
  {
    "question": "Every human being, after the first few days of his life, is a product of two factors: on the one hand, there is his __________ endowment; and on the other hand, there is the effect of environment, including _____",
    "options": {
      "A": "constitutional; weather",
      "B": "congenital; education",
      "C": "personal; climate",
      "D": "economic; learning",
      "E": "genetic; pedagogy"
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "5ba35943-dc89-401b-8d50-72a7c25668e0",
    "mockTestId": null
  },
  {
    "question": "Exhaustion of natural resources, destruction of individual initiative by governments, control over men’s minds by central _______ of education and propaganda are some of the major evils which appear to be on the increase as a result of the impact of science upon minds suited by _______ to an earlier kind of world.",
    "options": {
      "A": "tenets; fixation",
      "B": "aspects; inhibitions",
      "C": "institutions; inhibitions",
      "D": "organs; tradition",
      "E": "departments; repulsion"
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "5ba35943-dc89-401b-8d50-72a7c25668e0",
    "mockTestId": null
  },
  {
    "question": "The cricket council that was [A] / were [B] elected last March is [A] / are [B] at sixes and sevens over new rules.The critics censored [A] / censured [B] the new movie because of its social inaccessibility.Amit’s explanation for missing the meeting was credulous [A] / credible [B].She coughed discreetly [A] / discretely [B] to announce her presence.",
    "options": {
      "A": "BBAAA",
      "B": "AAABA",
      "C": "BBBBA",
      "D": "AABBA",
      "E": "BBBAA"
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "5ba35943-dc89-401b-8d50-72a7c25668e0",
    "mockTestId": null
  },
  {
    "question": "The further [A] / farther [B] he pushed himself, the more disillusioned he grew.For the crowds it was more of a historical [A] / historic [B] event; for their leader, it was just another day.The old man has a healthy distrust [A] / mistrust [B] for all new technology.This film is based on a real [A] / true [B] story.One suspects that the compliment [A] / complement [B] was backhanded",
    "options": {
      "A": "BABAB",
      "B": "ABBBA",
      "C": "BAABA",
      "D": "BBAAB",
      "E": "ABABA"
    },
    "answer": "E",
    "type": "Multiple Choice",
    "topicId": "5ba35943-dc89-401b-8d50-72a7c25668e0",
    "mockTestId": null
  },
  {
    "question": "Regrettably [A] / Regretfully [B] I have to decline your invitation.\nI am drawn to the poetic, sensual [A] / sensuous [B] quality of her paintings.\nHe was besides [A] / beside [B] himself with rage when I told him what I had done.\nAfter brushing against a stationary [A] / stationery [B] truck my car turned turtle.\nAs the water began to rise over[A]/above[B] the danger mark, the signs of an imminent flood were clear.",
    "options": {
      "A": "BAABA",
      "B": "BBBAA",
      "C": "AAABA",
      "D": "BBAAB",
      "E": "BBBAB"
    },
    "answer": "E",
    "type": "Multiple Choice",
    "topicId": "5ba35943-dc89-401b-8d50-72a7c25668e0",
    "mockTestId": null
  },
  {
    "question": "Choose the option in which the usage of the word is incorrect or inappropriate.\"Near\"",
    "options": {
      "A": "I got there just after you left - a near miss!",
      "B": "She and her near friend left early.",
      "C": "The war led to a near doubling of oil prices.",
      "D": "They came near to tears seeing the plight of the victims."
    },
    "answer": "B",
    "type": "Multiple Choice",
    "topicId": "5ba35943-dc89-401b-8d50-72a7c25668e0",
    "mockTestId": null
  },
  {
    "question": "Choose the option in which the usage of the word is incorrect or inappropriate.\"Hand\"[CAT 2005]",
    "options": {
      "A": "I have my hand full, I cannot do it today.",
      "B": "The minister visited the jail to see the breach at first hand.",
      "C": "The situation is getting out of hand here!",
      "D": "When the roof of my house was blown away, he was willing to lend me a hand."
    },
    "answer": "A",
    "type": "Multiple Choice",
    "topicId": "5ba35943-dc89-401b-8d50-72a7c25668e0",
    "mockTestId": null
  },
  {
    "question": "Choose the option in which the usage of the word is incorrect or inappropriate.\"For\"",
    "options": {
      "A": "He has a great eye for detail.",
      "B": "We are waiting for the day.",
      "C": "I can’t bear for her to be angry.",
      "D": "It couldn’t be done for ever."
    },
    "answer": "D",
    "type": "Multiple Choice",
    "topicId": "5ba35943-dc89-401b-8d50-72a7c25668e0",
    "mockTestId": null
  },
  {
    "question": "The following question has a paragraph with one italicized word that does not make sense. Choose the most appropriate replacement for that word from the options given below the paragraph.Intelligent design derives from an early 19th-century explanation of the natural world given by an English clergyman, William Paley. Paley was the populariser of the famous watchmaker analogy. Proponents of intelligent design are $${crupping}$$ Paley's argument with a new gloss from molecular biology.",
    "options": {
      "A": "destroying",
      "B": "testing",
      "C": "resurrecting",
      "D": "questioning"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "5ba35943-dc89-401b-8d50-72a7c25668e0",
    "mockTestId": null
  },
  {
    "question": "The following question has a paragraph with one italicized word that does not make sense. Choose the most appropriate replacement for that word from the options given below the paragraph.Women squat, heads covered, beside huge piles of limp fodder and $$blunk$$ oil lamps, and just about all the cows in the three towns converge upon this spot. Sinners, supplicants and yes, even scallywags hand over a few coins for a crack at redemption and a handful of grass.",
    "options": {
      "A": "shining",
      "B": "bright",
      "C": "sputtering",
      "D": "effulgent"
    },
    "answer": "C",
    "type": "Multiple Choice",
    "topicId": "5ba35943-dc89-401b-8d50-72a7c25668e0",
    "mockTestId": null
  }
]

async function main() {
  for (const q of questions) {
    const question = await prisma.question.create({
      data:{
        question: q.question,
        options: q.options,
        answer: q.answer,
        type: q.type,
        topicId: q.topicId,
        mockTestId: q.mockTestId
      }
    });
  }
  

  console.log('All questions added');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
