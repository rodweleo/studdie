"use client"

import { useState, Suspense } from 'react'
import { Search, Filter, BookOpen, Clock, Star, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Link from "next/link"
import { usePathname } from 'next/navigation'

const courses = [
    {
        id: 1,
        title: "Introduction to Computer Science",
        description: "Learn the basics of computer science and programming.",
        instructor: "Dr. Jane Smith",
        duration: "8 weeks",
        level: "Beginner",
        rating: 4.5,
        students: 1500,
        image: "/placeholder.svg?height=100&width=200",
    },
    {
        id: 2,
        title: "Advanced Machine Learning",
        description: "Dive deep into machine learning algorithms and applications.",
        instructor: "Prof. John Doe",
        duration: "12 weeks",
        level: "Advanced",
        rating: 4.8,
        students: 800,
        image: "/placeholder.svg?height=100&width=200",
    },
    {
        id: 3,
        title: "Web Development Bootcamp",
        description: "Build modern web applications from scratch.",
        instructor: "Sarah Johnson",
        duration: "10 weeks",
        level: "Intermediate",
        rating: 4.6,
        students: 2000,
        image: "/placeholder.svg?height=100&width=200",
    },
    // Add more courses as needed
]

export default function CourseDashboard() {
    const pathName = usePathname()
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedLevel, setSelectedLevel] = useState("")

    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedLevel === "" || course.level === selectedLevel)
    )

    return (
        <div>
            <Suspense fallback={<p>Loading...</p>}>
                <main className="container mx-auto p-4">
                    <h1 className="text-3xl font-bold mb-4">Courses</h1>
                    <div className="flex flex-col md:flex-row gap-4 mb-8">
                        <div className="relative flex-grow">
                            <Search className="absolute left-2 top-3 h-4 w-4 text-gray-500" />
                            <Input
                                type="search"
                                placeholder="Search courses..."
                                className="pl-8"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <Select>
                            <SelectTrigger className="w-full md:w-[180px]">
                                <SelectValue placeholder="Select Level" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="All">All Levels</SelectItem>
                                <SelectItem value="Beginner">Beginner</SelectItem>
                                <SelectItem value="Intermediate">Intermediate</SelectItem>
                                <SelectItem value="Advanced">Advanced</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredCourses.map(course => (
                            <Link href={`courses/${course.id}`} key={course.id}>
                                <Card key={course.id} className="flex flex-col">
                                    <CardHeader>
                                        <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded-t-lg" />
                                        <CardTitle>{course.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <p className="text-sm text-gray-600 mb-4">{course.description}</p>
                                        <div className="flex items-center gap-2 mb-2">
                                            <BookOpen className="h-4 w-4" />
                                            <span className="text-sm">{course.instructor}</span>
                                        </div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <Clock className="h-4 w-4" />
                                            <span className="text-sm">{course.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <Star className="h-4 w-4 fill-yellow-400" />
                                            <span className="text-sm">{course.rating} ({course.students} students)</span>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex justify-between items-center">
                                        <Badge>{course.level}</Badge>
                                        <Button>Enroll Now</Button>
                                    </CardFooter>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </main>
            </Suspense>
            
        </div>
    )
}