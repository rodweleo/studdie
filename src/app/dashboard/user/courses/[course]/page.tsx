import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Clock, Users, Star, CheckCircle } from 'lucide-react'

export default function CoursePage() {
    const course = {
        title: "Advanced Machine Learning",
        description: "Dive deep into machine learning algorithms and applications. This course covers advanced topics in machine learning, including deep learning, reinforcement learning, and natural language processing.",
        instructor: {
            name: "Prof. John Doe",
            image: "/placeholder.svg?height=50&width=50",
            bio: "Professor of Computer Science with 15 years of experience in machine learning research and industry applications.",
        },
        duration: "12 weeks",
        level: "Advanced",
        rating: 4.8,
        students: 800,
        image: "/placeholder.svg?height=300&width=600",
        price: "$499",
        curriculum: [
            { title: "Introduction to Advanced ML Concepts", duration: "1 week" },
            { title: "Deep Learning Architectures", duration: "2 weeks" },
            { title: "Reinforcement Learning", duration: "2 weeks" },
            { title: "Natural Language Processing", duration: "2 weeks" },
            { title: "Computer Vision", duration: "2 weeks" },
            { title: "Advanced Topics and Research Areas", duration: "2 weeks" },
            { title: "Final Project", duration: "1 week" },
        ],
        reviews: [
            { user: "Alice", rating: 5, comment: "Excellent course! Challenging but very rewarding." },
            { user: "Bob", rating: 4, comment: "Great content, but could use more practical exercises." },
            { user: "Charlie", rating: 5, comment: "Prof. Doe is an amazing instructor. Learned so much!" },
        ],
    }

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                    <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
                    <p className="text-gray-600 mb-6">{course.description}</p>
                    <img src={course.image} alt={course.title} className="w-full rounded-lg mb-6" />

                    <Tabs defaultValue="curriculum" className="mb-6">
                        <TabsList>
                            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                            <TabsTrigger value="instructor">Instructor</TabsTrigger>
                            <TabsTrigger value="reviews">Reviews</TabsTrigger>
                        </TabsList>
                        <TabsContent value="curriculum">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Course Curriculum</CardTitle>
                                    <CardDescription>12 weeks of intensive learning</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    {course.curriculum.map((item, index) => (
                                        <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
                                            <div className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                                <span>{item.title}</span>
                                            </div>
                                            <span className="text-sm text-gray-500">{item.duration}</span>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="instructor">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Course Instructor</CardTitle>
                                </CardHeader>
                                <CardContent className="flex items-start gap-4">
                                    <Avatar className="w-20 h-20">
                                        <AvatarImage src={course.instructor.image} alt={course.instructor.name} />
                                        <AvatarFallback>{course.instructor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{course.instructor.name}</h3>
                                        <p className="text-gray-600">{course.instructor.bio}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="reviews">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Student Reviews</CardTitle>
                                    <CardDescription>See what our students are saying</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    {course.reviews.map((review, index) => (
                                        <div key={index} className="mb-4 pb-4 border-b last:border-b-0">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Avatar>
                                                    <AvatarFallback>{review.user[0]}</AvatarFallback>
                                                </Avatar>
                                                <span className="font-semibold">{review.user}</span>
                                                <div className="flex">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'fill-yellow-400' : 'fill-gray-200'}`} />
                                                    ))}
                                                </div>
                                            </div>
                                            <p className="text-gray-600">{review.comment}</p>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>

                <div>
                    <Card className="sticky top-4">
                        <CardHeader>
                            <CardTitle>Course Information</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between items-center">
                                    <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> Duration:</span>
                                    <span>{course.duration}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="flex items-center gap-2"><BookOpen className="h-4 w-4" /> Level:</span>
                                    <span>{course.level}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="flex items-center gap-2"><Users className="h-4 w-4" /> Students:</span>
                                    <span>{course.students}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="flex items-center gap-2"><Star className="h-4 w-4" /> Rating:</span>
                                    <span>{course.rating}/5</span>
                                </div>
                                <Progress value={80} className="w-full" />
                                <p className="text-sm text-center">80% Filled</p>
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col gap-4">
                            <div className="text-3xl font-bold text-center w-full">{course.price}</div>
                            <Button className="w-full">Enroll Now</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}