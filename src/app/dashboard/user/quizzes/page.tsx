'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Trophy } from 'lucide-react'
import {useRouter} from "next/navigation"
import {Button} from "@/components/ui/button"
const quizCategories = [
    { name: 'Football', icon: '⚽️' },
    { name: 'Science', icon: '🧪' },
    { name: 'Fashion', icon: '👗' },
    { name: 'Movie', icon: '🎬' },
    { name: 'Music', icon: '🎵' },
    { name: 'History', icon: '🏛️' },
    { name: 'Geography', icon: '🌍' },
    { name: 'Literature', icon: '📚' },
]

const featuredQuizzes = [
    { name: 'Language Quiz', icon: '🗣️', questions: 15, difficulty: 'Medium' },
    { name: 'Exam Prep Quiz', icon: '📝', questions: 30, difficulty: 'Hard' },
    { name: 'General Knowledge', icon: '🧠', questions: 20, difficulty: 'Easy' },
    { name: 'Pop Culture Trivia', icon: '🎭', questions: 25, difficulty: 'Medium' },
]



export default function QuizzesPage() {
    const router = useRouter();
    const [currentScreen, setCurrentScreen] = useState('home')
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [timeLeft, setTimeLeft] = useState(60)

    const startQuiz = () => {
        setCurrentScreen('quiz')
        setCurrentQuestion(0)
        setScore(0)
        setTimeLeft(60)
    }


    return (
        <div className="min-h-screen">
            <main className="container mx-auto p-8">
                <div className="grid grid-cols-3 gap-8">
                        <div className="col-span-2">
                            <section className="bg-white rounded-3xl shadow-lg p-6 mb-8">
                                <h2 className="text-2xl font-semibold text-purple-800 mb-4">Daily Challenge</h2>
                                <div className="bg-purple-500 rounded-2xl p-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="text-white font-semibold">Progress</h3>
                                        <span className="text-purple-200">14/20 Questions</span>
                                    </div>
                                    <div className="bg-purple-400 rounded-full h-3 mb-2">
                                        <div className="bg-yellow-400 h-3 rounded-full" style={{ width: '70%' }}></div>
                                    </div>
                                    <div className="flex justify-between text-purple-200 text-sm">
                                        <span>70% Complete</span>
                                        <button className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-full">
                                            Continue
                                        </button>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-white rounded-3xl shadow-lg p-6 mb-8">
                                <h2 className="text-2xl font-semibold text-purple-800 mb-4">Quiz Categories</h2>
                                <div className="grid grid-cols-4 gap-4">
                                    {quizCategories.map((category) => (
                                        <button
                                            key={category.name}
                                            className="flex flex-col items-center p-4 bg-purple-100 rounded-2xl hover:bg-purple-200 transition-colors"
                                            onClick={() => router.push(`quizzes/${category.name.toLowerCase() }`)}
                                        >
                                            <div className="text-4xl mb-2">{category.icon}</div>
                                            <span className="text-purple-800 font-medium">{category.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </section>

                            <section className="bg-white rounded-3xl shadow-lg p-6">
                                <h2 className="text-2xl font-semibold text-purple-800 mb-4">Featured Quizzes</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    {featuredQuizzes.map((quiz) => (
                                        <button
                                            key={quiz.name}
                                            className="bg-purple-500 rounded-2xl p-4 text-left hover:bg-purple-600 transition-colors"
                                            onClick={startQuiz}
                                        >
                                            <div className="text-3xl mb-2">{quiz.icon}</div>
                                            <h4 className="text-white font-semibold text-lg mb-1">{quiz.name}</h4>
                                            <p className="text-purple-200">{quiz.questions} Questions</p>
                                            <div className="flex items-center mt-2">
                                                <Trophy className="w-4 h-4 text-yellow-400 mr-2" />
                                                <span className="text-purple-200">{quiz.difficulty}</span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </section>
                        </div>

                        <div className="col-span-1">
                            <section className="bg-white rounded-3xl shadow-lg p-6 mb-8">
                                <h2 className="text-2xl font-semibold text-purple-800 mb-4">Your Stats</h2>
                                <div className="flex items-center justify-center mb-4">
                                    <Image
                                        src="/placeholder.svg?height=100&width=100"
                                        alt="Profile"
                                        width={100}
                                        height={100}
                                        className="rounded-full"
                                    />
                                </div>
                                <h3 className="text-center text-xl font-semibold text-purple-800 mb-2">Roxane Horley</h3>
                                <p className="text-center text-purple-600 mb-4">Expert Quizzer</p>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-purple-800">Quizzes Completed:</span>
                                        <span className="font-semibold text-purple-600">127</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-purple-800">Average Score:</span>
                                        <span className="font-semibold text-purple-600">85%</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-purple-800">Global Rank:</span>
                                        <span className="font-semibold text-purple-600">#432</span>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-white rounded-3xl shadow-lg p-6">
                                <h2 className="text-2xl font-semibold text-purple-800 mb-4">Leaderboard</h2>
                                <div className="space-y-4">
                                    {[1, 2, 3, 4, 5].map((rank) => (
                                        <div key={rank} className="flex items-center">
                                            <span className="text-2xl font-bold text-purple-800 w-8">{rank}</span>
                                            <Image
                                                src="/placeholder.svg?height=40&width=40"
                                                alt={`Rank ${rank}`}
                                                width={40}
                                                height={40}
                                                className="rounded-full mr-4"
                                            />
                                            <div>
                                                <p className="font-semibold text-purple-800">User {rank}</p>
                                                <p className="text-sm text-purple-600">Score: {1000 - rank * 50}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button className="w-full mt-4 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-full transition-colors">
                                    View Full Leaderboard
                                </button>
                            </section>
                        </div>
                    </div>
            </main>
        </div>
    )
}