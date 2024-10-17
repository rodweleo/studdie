"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Award, Accessibility, Volume2, Eye, Monitor } from 'lucide-react'
import Link from "next/link"
import {useRouter} from "next/navigation"
export default function Home() {
  const router = useRouter()
  return (
    <div className="bg-background text-foreground">
      <header className="h-20 bg-white z-50 bg-opacity-50 backdrop-blur-md flex items-center justify-between shadow-md px-4 top-0 sticky">
        <Link href="/">Studdie</Link>
        <ul className="flex items-center gap-4">
          <li><Button variant="outline">Create Account</Button></li>
          <li><Button onClick={() => router.push("/auth/login")}>Login</Button></li>
        </ul>
      </header>
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-6">Learn Without Limits</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Empowering all learners with accessible, inclusive, and high-quality online education.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">Explore Courses</Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Inclusive Learning Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Volume2 className="h-10 w-10 mb-4" />, title: "Screen Readers", description: "Compatible with popular screen reading software" },
              { icon: <Eye className="h-10 w-10 mb-4" />, title: "Visual Adjustments", description: "Customizable contrast and text size options" },
              { icon: <Monitor className="h-10 w-10 mb-4" />, title: "Closed Captions", description: "Subtitles available for all video content" },
              { icon: <Monitor className="h-10 w-10 mb-4" />, title: "Keyboard Navigation", description: "Full course navigation without a mouse" },
            ].map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Web Development Fundamentals", category: "Technology", students: 10000, duration: "8 weeks" },
              { title: "Introduction to Psychology", category: "Social Sciences", students: 8500, duration: "6 weeks" },
              { title: "Digital Marketing Essentials", category: "Business", students: 9000, duration: "4 weeks" },
            ].map((course, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>{course.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {course.students.toLocaleString()} students
                    </span>
                    <span className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-1" />
                      {course.duration}
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Enroll Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Learners Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Alex Johnson", role: "Visual impairment", quote: "The screen reader compatibility and audio descriptions have made learning a joy again." },
              { name: "Sarah Lee", role: "Hearing impairment", quote: "With accurate closed captions, I can fully engage with video lectures and discussions." },
              { name: "Mike Chen", role: "Mobility challenges", quote: "Keyboard navigation support allows me to access all course materials effortlessly." },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <q className="italic">{testimonial.quote}</q>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center bg-[url('/images/Online-Learning-Makes-Education-More-Accessible-and-Inclusive1.jpeg')] bg-cover bg-fixed bg-no-repeat relative">
        <div className="absolute bg-black inset-0 bg-opacity-20 hidden"/>
        <div className="z-50">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-slate-100">
            Join thousands of learners from all backgrounds and abilities. Your next skill is just a click away.
          </p>
          <Button size="lg">Create Free Account</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">About Us</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Our Mission</a></li>
                <li><a href="#" className="hover:underline">Accessibility Statement</a></li>
                <li><a href="#" className="hover:underline">Partners</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Courses</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">All Categories</a></li>
                <li><a href="#" className="hover:underline">Free Courses</a></li>
                <li><a href="#" className="hover:underline">Certificates</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Help Center</a></li>
                <li><a href="#" className="hover:underline">Accessibility Tools</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">Newsletter</a></li>
                <li><a href="#" className="hover:underline">Social Media</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-muted-foreground/20 text-center">
            <p>&copy; 2024 Inclusive E-Learning Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}