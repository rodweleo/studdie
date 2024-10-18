import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Filter, BookOpen, Clock, Star, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
export default function CourseCard({course}){
    return (
        <Card key={course.id} className="flex flex-col">
            <CardHeader>
                <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded-t-lg" />
                <CardTitle>{course.title}</CardTitle>
                <p className="text-sm text-gray-600 mb-4">{course.description}</p>
            </CardHeader>
            <CardContent className="flex-grow">
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
    )
}