"use client"

import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, MessageSquare, ThumbsUp, Download, Play } from 'lucide-react'
import CourseOverview from '@/components/student/course-overview'
import CourseSidebar from '@/components/student/course-sidebar'


export default function CourseTabs() {
  const [activeTab, setActiveTab] = useState("overview")
  const [notes, setNotes] = useState("")
  const [interactiveTranscript, setInteractiveTranscript] = useState(true)

  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(e.target.value)
  }

  return (
    <div className="flex">
          <CourseSidebar/>
          <main className='w-full'>
              <div className="relative aspect-video bg-black">
                  <div className="absolute inset-0 flex items-center justify-center">
                      <Button variant="outline" size="icon" className="rounded-full bg-white/10 hover:bg-white/20">
                          <Play className="h-6 w-6" />
                      </Button>
                  </div>
              </div>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full p-4">
                  <TabsList className="grid w-1/2 grid-cols-4">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="qa">Q&A</TabsTrigger>
                      <TabsTrigger value="notebook">Notebook</TabsTrigger>
                      <TabsTrigger value="transcript">Transcript</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview">
                      <CourseOverview />
                  </TabsContent>

                  <TabsContent value="qa">
                      <Card>
                          <CardHeader>
                              <CardTitle>Q&A</CardTitle>
                          </CardHeader>
                          <CardContent>
                              <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                                  <h3 className="text-lg font-semibold mb-2">Looking for technical assistance?</h3>
                                  <p className="mb-2">Get assistance on downloading certificates and more.</p>
                                  <Button>Get help</Button>
                              </div>

                              <div className="space-y-6">
                                  {[
                                      {
                                          name: "Rahul Kulkarni",
                                          role: "Technical Project Manager at Persistent Systems",
                                          question: "Unable to link the course to my LinkedIn profile and download the certificate",
                                          likes: 1,
                                          answers: 0,
                                      },
                                      {
                                          name: "Kaylee Weatherspoon",
                                          role: "Undergraduate student at Rutgers University",
                                          question: "aren't humans trained on even...more finite datasets...",
                                          likes: 2,
                                          answers: 1,
                                      },
                                  ].map((item, index) => (
                                      <div key={index} className="border-b pb-4">
                                          <div className="flex items-start mb-2">
                                              <Avatar className="w-10 h-10 mr-3">
                                                  <AvatarFallback>{item.name[0]}</AvatarFallback>
                                              </Avatar>
                                              <div>
                                                  <h4 className="font-semibold">{item.name}</h4>
                                                  <p className="text-sm text-gray-500">{item.role}</p>
                                              </div>
                                          </div>
                                          <p className="mb-2">{item.question}</p>
                                          <div className="flex items-center text-sm text-gray-500">
                                              <Button variant="ghost" size="sm">
                                                  <ThumbsUp className="w-4 h-4 mr-1" />
                                                  Like ({item.likes})
                                              </Button>
                                              <Button variant="ghost" size="sm">
                                                  <MessageSquare className="w-4 h-4 mr-1" />
                                                  {item.answers === 0 ? "Be the first to answer" : `Answer (${item.answers})`}
                                              </Button>
                                          </div>
                                      </div>
                                  ))}
                              </div>

                              <div className="mt-6">
                                  <h3 className="text-lg font-semibold mb-2">Add your answer</h3>
                                  <Textarea placeholder="Type your answer here..." className="mb-2" />
                                  <Button>Post Answer</Button>
                              </div>
                          </CardContent>
                      </Card>
                  </TabsContent>

                  <TabsContent value="notebook">
                      <Card>
                          <CardHeader>
                              <CardTitle>Notebook</CardTitle>
                          </CardHeader>
                          <CardContent>
                              <div className="flex justify-between mb-4">
                                  <div>
                                      <Textarea
                                          placeholder="Type your note here to save for later."
                                          value={notes}
                                          onChange={handleNotesChange}
                                          className="min-h-[200px]"
                                      />
                                      <p className="text-sm text-gray-500 mt-2">
                                          {notes.length > 0 ? `${notes.split('\n').length} Notes taken` : '0 Notes taken'}
                                      </p>
                                      <p className="text-sm text-gray-500">Press Enter to save</p>
                                  </div>
                                  <div className="ml-4">
                                      <h3 className="text-lg font-semibold mb-2">Export your notes</h3>
                                      <p className="text-sm text-gray-500 mb-2">
                                          Get your notes for this course which includes description, chapters, and timestamps
                                      </p>
                                      <Button variant="outline">
                                          <Download className="w-4 h-4 mr-2" />
                                          Download
                                      </Button>
                                  </div>
                              </div>
                              {notes.length === 0 && (
                                  <div className="text-center mt-8">
                                      <img src="/placeholder.svg?height=100&width=100" alt="No notes" className="mx-auto mb-4" />
                                      <h3 className="text-lg font-semibold mb-2">No notes saved yet</h3>
                                      <p className="text-sm text-gray-500">Take notes to remember what you learned.</p>
                                  </div>
                              )}
                          </CardContent>
                      </Card>
                  </TabsContent>

                  <TabsContent value="transcript">
                      <Card>
                          <CardHeader>
                              <CardTitle className="flex justify-between items-center">
                                  <span>Transcript</span>
                                  <div className="flex items-center space-x-2">
                                      <span className="text-sm">Enable interactive transcripts</span>
                                      <Switch
                                          checked={interactiveTranscript}
                                          onCheckedChange={setInteractiveTranscript}
                                      />
                                  </div>
                              </CardTitle>
                          </CardHeader>
                          <CardContent>
                              <div className="flex justify-end mb-4">
                                  <DropdownMenu>
                                      <DropdownMenuTrigger asChild>
                                          <Button variant="outline">
                                              In this video <ChevronDown className="ml-2 h-4 w-4" />
                                          </Button>
                                      </DropdownMenuTrigger>
                                      <DropdownMenuContent>
                                          <DropdownMenuItem>Chapter 1</DropdownMenuItem>
                                          <DropdownMenuItem>Chapter 2</DropdownMenuItem>
                                          <DropdownMenuItem>Chapter 3</DropdownMenuItem>
                                      </DropdownMenuContent>
                                  </DropdownMenu>
                              </div>
                              <div className="prose max-w-none">
                                  <h3>The importance of generative AI</h3>
                                  <p>
                                      The advent of generative AI can be likened to the invention of photography and celluloid film,
                                      <strong>a true creative revolution</strong>. With photography, we no longer needed to rely on the
                                      interpretation of an artist to capture reality, and with generative AI, we no longer need artistic
                                      talent to draw or to sing. We can access now concise information in just a manner of seconds. We can
                                      also automatically generate text such as news articles or product descriptions. We can even design
                                      custom products like shoes or furniture. We can produce music, speech, visual effects, 3D assets and
                                      sound effects using algorithms trained on already existing data.
                                  </p>
                                  <p>
                                      I know you're like, it all sounds magic, doesn't it? Yeah, it does. But like Arthur C. Clark said, any
                                      sufficiently advanced technology is simply indistinguishable from magic. These machines are becoming 24
                                      hours, seven assistants ready to perform a variety of tasks for us, resulting in the manifestation of our
                                      vision almost in real time. By training on large data sets, we can reduce the burden of repetitive tasks
                                      and complex computations, enabling us to focus on more creative and more strategic activities which is the
                                      very essence of what work is really about.
                                  </p>
                                  {/* More paragraphs can be added here */}
                              </div>
                          </CardContent>
                      </Card>
                  </TabsContent>
              </Tabs>
          </main>
    </div>
  )
}
