import React from 'react'
import { Star, Clock, Users, Book, Award, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CourseOverview() {
    return (
        <div className="container mx-auto p-4 bg-white">
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3">
                    <div className="flex items-center mb-6">
                        <Avatar className="h-16 w-16 mr-4">
                            <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Peter Sefton Demming" />
                            <AvatarFallback>PSD</AvatarFallback>
                        </Avatar>
                        <div>
                            <h2 className="text-xl font-bold">Peter Sefton Demming</h2>
                            <p className="text-gray-600">AI Expert and Creative Artist | Generative AI Expert</p>
                            <Button variant="outline" size="sm" className="mt-2">
                                Follow on LinkedIn
                            </Button>
                        </div>
                    </div>

                    <Card className="mb-6">
                        <CardHeader>
                            <CardTitle>Course details</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center mb-2">
                                <div className="text-3xl font-bold mr-2">4.7</div>
                                <div className="flex mr-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} className={`h-5 w-5 ${star <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                                    ))}
                                </div>
                                <div className="text-sm text-gray-600">(41,705 ratings)</div>
                            </div>
                            <p className="text-gray-700 mb-4">
                                Whether you work in film, marketing, healthcare, automobile, or real estate, generative AI is
                                changing the way your job is executed, and those who adapt early will reap its benefits sooner. AI
                                can now create images, videos, music, and text that rival or surpass human-made content. From
                                photography to true creative revolution, if you want to be part of the future that are advancing this
                                revolution, this course can get you started on your learning journey.
                            </p>
                            <p className="text-gray-700">
                                In this course, generative AI expert Peter Sefton Demming covers the basics of generative AI, with
                                topics including what it is, how it works, how to create your own content, different types of models,
                                and more. By the end of this course, you'll be able to:
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="mb-6">
                        <CardHeader>
                            <CardTitle>Learning objectives</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Differentiate between AI and the subcategories of AI</li>
                                <li>Determine the elements involved when a user creates their own content with AI</li>
                                <li>Describe the different types of generative AI models</li>
                                <li>Explain how variational autoencoders (VAEs) are used in anomaly detection</li>
                                <li>Articulate what executives and leaders should implement with AI</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="mb-6">
                        <CardHeader>
                            <CardTitle>Skills covered</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary">Generative AI</Badge>
                                <Badge variant="secondary">Artificial Intelligence (AI)</Badge>
                                <Badge variant="secondary">Generative AI Tools</Badge>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="mb-6">
                        <CardHeader>
                            <CardTitle>Learners</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center text-gray-700">
                                <Users className="mr-2 h-5 w-5" />
                                <span>34,588 already enrolled</span>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="mb-6">
                        <CardHeader>
                            <CardTitle>Professional Certifications and Continuing Education Units (CEUs)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center mb-4">
                                <img src="/placeholder.svg?height=50&width=100" alt="NASBA Logo" className="mr-4" />
                                <div>
                                    <p className="font-semibold">National Association of State Boards of Accountancy (NASBA)</p>
                                    <p className="text-sm text-gray-600">Continuing Professional Education Credit (CPE)</p>
                                    <p className="text-sm text-gray-600">Field of Study: Information Technology</p>
                                    <p className="text-sm text-gray-600">Sponsor identification number: 140340</p>
                                </div>
                            </div>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Earn CPE credits; the learner is expected to:</li>
                                <li>Complete all videos and chapter quizzes</li>
                                <li>Score 70% or higher on the final assessment</li>
                                <li>Score 70% or higher on final exam</li>
                            </ul>
                            <Button variant="link" className="mt-2">
                                Show more <ChevronDown className="ml-1 h-4 w-4" />
                            </Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Learner reviews</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center mb-4">
                                <div className="text-5xl font-bold mr-4">4.7</div>
                                <div className="flex-grow">
                                    <div className="flex items-center mb-1">
                                        <Progress value={80} className="h-2 flex-grow mr-2" />
                                        <span className="text-sm text-gray-600">80%</span>
                                    </div>
                                    <div className="flex items-center mb-1">
                                        <Progress value={15} className="h-2 flex-grow mr-2" />
                                        <span className="text-sm text-gray-600">15%</span>
                                    </div>
                                    <div className="flex items-center mb-1">
                                        <Progress value={3} className="h-2 flex-grow mr-2" />
                                        <span className="text-sm text-gray-600">3%</span>
                                    </div>
                                    <div className="flex items-center mb-1">
                                        <Progress value={1} className="h-2 flex-grow mr-2" />
                                        <span className="text-sm text-gray-600">1%</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Progress value={1} className="h-2 flex-grow mr-2" />
                                        <span className="text-sm text-gray-600">1%</span>
                                    </div>
                                </div>
                            </div>
                            <Button variant="outline" className="w-full">
                                See all reviews
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                <div className="lg:w-1/3">
                    <Card className="mb-6">
                        <CardHeader>
                            <CardTitle>Related to this course</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <Button variant="outline" className="w-full justify-start">
                                <Book className="mr-2 h-4 w-4" />
                                Exercise Files
                            </Button>
                            <Button variant="outline" className="w-full justify-start">
                                <Award className="mr-2 h-4 w-4" />
                                Certificates
                            </Button>
                            <Button variant="outline" className="w-full justify-start">
                                <Users className="mr-2 h-4 w-4" />
                                Certifying Organizations
                            </Button>
                            <Button variant="outline" className="w-full justify-start">
                                <Clock className="mr-2 h-4 w-4" />
                                1h 23m of course content
                            </Button>
                        </CardContent>
                    </Card>

                    <h3 className="text-xl font-bold mb-4">Related courses</h3>
                    {[1, 2, 3, 4, 5].map((index) => (
                        <Card key={index} className="mb-4">
                            <CardContent className="flex items-center p-4">
                                <img
                                    src="/placeholder.svg?height=60&width=100"
                                    alt={`Related Course ${index}`}
                                    className="w-24 h-14 object-cover rounded mr-4"
                                />
                                <div>
                                    <h4 className="font-semibold text-sm">Related Course Title {index}</h4>
                                    <p className="text-xs text-gray-600">Course description...</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}