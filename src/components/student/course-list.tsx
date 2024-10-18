import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Link from "next/link"
import CourseCard from './course-card'

export default function CourseList ({courses}){
    return (
        <div>
            <main className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-grow">
                    <Search className="absolute left-2 top-3 h-4 w-4 text-gray-500" />
                    <Input
                        type="search"
                        placeholder="Search courses..."
                        className="pl-8"
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
            </main>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map(course => (
                    <Link href={`courses/${course.id}`} key={course.id}>
                        <CourseCard course={course}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}