"use client"

import {useRouter, usePathname} from "next/navigation"
import { Bell, BookmarkIcon, Users, ChevronsRight } from 'lucide-react'
import {useState, useEffect, useRef, useMemo } from "react"
import Image from "next/image";
import { Clock } from 'lucide-react';
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog"
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function Page(){
    const router = useRouter()
    const pathName = usePathname()
    const dialogRef = useRef<HTMLButtonElement | null>(null)
    const [score, setScore] = useState(0)
    const [percentageTimeRemaining, setPercentageTimeRemaining] = useState(100)
    const [generatedQuestions, setGeneratedQuestions] = useState([]); 
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const MAX_TIME_PER_QUIZ = 5;


    const category = useMemo(() => {
        const categoryFromPath = pathName.split("/")[4];
        return (
            categoryFromPath.slice(0, 1).toUpperCase() +
            categoryFromPath.slice(1).toLowerCase()
        );
    }, [pathName]);

    const generateCategoryQuestions = async (category) => {
        try{
            const genAI = new GoogleGenerativeAI("AIzaSyBGgdd3oxXhtMq9VYa_8h2_CnIq6OnTXd0");
            const model = genAI.getGenerativeModel({ 
                model: "gemini-1.5-flash",
                systemInstruction: "You are a Backend developer. Generate an array of questions on the topic I'll be giving you in this format:  {'question' 'Which team won the recent Champions League final?','options': ['Manchester City', 'Real Madrid', 'Liverpool', 'Chelsea'],'correctAnswer': 'Manchester City','time': 30,'score': 20}. Let the scores and the duration to complete the question be dependant on the  level of difficulty of the question. You can generate a maximum of 15 questions. Additionally, only return the response as an array.",
            });
            const prompt = `Create a quiz about the latest news in the ${category} world.`;
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();

            const generatedQuestions = JSON.parse(text.replace(/```json|```/g, '').trim());

            return generatedQuestions;
        }catch(e){
            return []
        }
    }

    useEffect(() => {
        const fetchQuestions = async () => {
            const questions = await generateCategoryQuestions(category);
            setGeneratedQuestions(questions);
        };

        if (category) {
            fetchQuestions();
        }
    }, [category]);


    const answerQuestion = (answer: string) => {
        if (answer === generatedQuestions[currentQuestion].correctAnswer) {
            setScore(score + 1)
        }
        if (currentQuestion < generatedQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        }else{
            if(dialogRef.current){
                dialogRef.current.click()
            }
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setPercentageTimeRemaining((prev) => prev - (100 / (MAX_TIME_PER_QUIZ + 1)))
        }, 1000)
    }, [percentageTimeRemaining])


    const skipCurrentQuestion = () => {
        if (currentQuestion < generatedQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } 
    }

    return (
        <div className="h-full">
            <main className="container grid place-items-center pt-20">
                <h1 className="font-bold text-3xl">Taking a Quiz on {pathName.split("/")[4].slice(0, 1).toUpperCase().concat(pathName.split("/")[4].slice(1, pathName.split("/")[4].length).toLowerCase())}</h1>
                {
                    generatedQuestions.length > 0 ? <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-4">
                    <div className="flex justify-between items-center mb-6">
                        <button title="Back to Quizzes" type="button" onClick={() => router.back()} className="text-purple-600 hover:text-purple-800">
                            ← Back to Quizzes
                        </button>
                        <h2 className="text-2xl font-semibold text-purple-800">Question {currentQuestion + 1}/{generatedQuestions.length}</h2>
                        <BookmarkIcon className="text-purple-600 hover:text-purple-800 cursor-pointer" />
                    </div>

                    <div className="space-y-5">
                        <h3 className="text-xl font-semibold text-purple-800 mb-4">
                            {generatedQuestions[currentQuestion].question}
                        </h3>
                        <div className="flex items-center gap-2.5">
                            <span>Time</span>
                            <Progress value={percentageTimeRemaining} backgroundColor="bg-orange-500" />
                            <span>00:04</span>
                        </div>
                        <div className="space-y-2">
                            {generatedQuestions[currentQuestion].options.map((option, index) => (
                                <button
                                    key={index}
                                    className="w-full text-left bg-purple-100 hover:bg-purple-200 rounded-xl p-4 text-purple-800 transition-colors"
                                    onClick={() => answerQuestion(option)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-between gap-4">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-6 py-4 transition-colors"><span>50/50</span> <span>Answers</span></button>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-6 py-4 transition-colors flex items-center gap-2.5"><Users /> <span>Audience Poll</span></button>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-6 py-4 transition-colors flex items-center gap-2.5"><Clock/>Add Time</button>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-6 py-4 transition-colors flex items-center gap-2.5" onClick={skipCurrentQuestion}><span>Skip</span> <ChevronsRight/></button>
                    </div>
                </div> : null
                }
            </main>
            <Dialog>
  <DialogTrigger className="hidden" ref={dialogRef}>Show Results</DialogTrigger>
  <DialogContent>
    <DialogTitle> <h2 className="text-3xl font-bold text-purple-800 text-center">Quiz Completed!</h2></DialogTitle>
    <div className="text-center">
                     
    <div className="relative space-y-2.5 grid place-items-center">
              <Image
                src="https://github.com/shadcn.png"
                alt="Profile"
                width={120}
                height={120}
                className="rounded-full mx-auto"
                unoptimized
              />
              <div className="bg-purple-500 text-white rounded-full px-3 py-1 text-sm font-semibold w-fit">
                Rank 432
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-purple-800">Roxane</h3>
            <p className="text-4xl font-bold text-purple-600">{score}/{generatedQuestions.length}</p>
            <p className="text-xl text-purple-800 mb-2">Congratulations!</p>
            <p className="text-purple-600 mb-6">
              You've completed this quiz. Keep challenging yourself with more {category} quizzes!
            </p>
            </div>
    <DialogFooter>
<div className="flex justify-between w-full space-x-4">
              <button
                className="bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-xl px-6 py-3 transition-colors"
              >
                More Quizzes
              </button>
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl px-6 py-3 transition-colors"
              >
                Share Result
              </button>
            </div>
  </DialogFooter>
  </DialogContent>
  
</Dialog>
            
        </div>
    )
}
