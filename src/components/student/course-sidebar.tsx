"use client"

import React, { useState } from 'react'
import { ChevronDown, ChevronRight, X, Play, FileQuestion } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

interface SectionItem {
    title: string
    duration: string
    type: 'video' | 'quiz'
    questions?: number
}

interface Section {
    title: string
    items: SectionItem[]
}

const courseSections: Section[] = [
    {
        title: "Interview Fundamentals",
        items: [
            { title: "Salary negotiation approach and tips", duration: "1m 37s", type: "video" },
            { title: "What to expect for each interview round", duration: "2m 41s", type: "video" },
            { title: "How to improve your body language in an interview", duration: "2m 8s", type: "video" },
            { title: "How to research a company before your interview", duration: "2m 5s", type: "video" },
            { title: "How to dress for an interview", duration: "2m 5s", type: "video" },
            { title: "How to handle radio silence after the interview", duration: "2m 10s", type: "video" },
            { title: "Chapter Quiz", duration: "4 questions", type: "quiz", questions: 4 },
        ],
    },
    {
        title: "1. Tell Me About Yourself",
        items: [
            { title: "How to approach this question", duration: "2m 5s", type: "video" },
            { title: "Candidate answer and feedback", duration: "1m 42s", type: "video" },
            { title: "Chapter Quiz", duration: "2 questions", type: "quiz", questions: 2 },
        ],
    },
    {
        title: "2. What Is Your Greatest Strength?",
        items: [
            { title: "How to approach this question", duration: "1m 21s", type: "video" },
            { title: "Candidate answer and feedback", duration: "1m 36s", type: "video" },
            { title: "Chapter Quiz", duration: "2 questions", type: "quiz", questions: 2 },
        ],
    },
    {
        title: "3. What Is Your Greatest Weakness?",
        items: [
            { title: "How to approach this question", duration: "1m 16s", type: "video" },
            { title: "Candidate answer and feedback", duration: "1m 57s", type: "video" },
        ],
    },
]

const SidebarItem: React.FC<{ item: SectionItem }> = ({ item }) => {
    return (
        <div className="flex items-center py-2 px-4 text-sm text-gray-300 hover:bg-gray-700 rounded-md cursor-pointer">
            {item.type === 'video' ? (
                <Play className="h-4 w-4 mr-2 flex-shrink-0" />
            ) : (
                <FileQuestion className="h-4 w-4 mr-2 flex-shrink-0" />
            )}
            <div className="flex flex-col">
                <span className="flex-grow">{item.title}</span>
                <span className="text-xs text-gray-400">{item.duration}</span>
            </div>
        </div>
    )
}

export default function CourseSidebar() {
    const [openSections, setOpenSections] = useState<string[]>(["Interview Fundamentals"])

    const toggleSection = (title: string) => {
        setOpenSections(prev =>
            prev.includes(title)
                ? prev.filter(t => t !== title)
                : [...prev, title]
        )
    }

    return (
        <div className="sticky top-16 w-96 bg-gray-800 text-white h-screen overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
                <h2 className="text-lg font-semibold">Course Contents</h2>
                <Button variant="ghost" size="icon">
                    <X className="h-4 w-4" />
                </Button>
            </div>
            <div className="px-2 space-y-2">
                {courseSections.map((section, index) => (
                    <Collapsible
                        key={index}
                        open={openSections.includes(section.title)}
                        onOpenChange={() => toggleSection(section.title)}
                    >
                        <CollapsibleTrigger asChild>
                            <Button
                                variant="ghost"
                                className={cn(
                                    "flex w-full justify-between px-4 py-6 font-medium",
                                    openSections.includes(section.title) ? "bg-gray-700" : ""
                                )}
                            >
                                {section.title}
                                {openSections.includes(section.title) ? (
                                    <ChevronDown className="h-4 w-4" />
                                ) : (
                                    <ChevronRight className="h-4 w-4" />
                                )}
                            </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                            {section.items.map((item, itemIndex) => (
                                <SidebarItem key={itemIndex} item={item} />
                            ))}
                        </CollapsibleContent>
                    </Collapsible>
                ))}
            </div>
        </div>
    )
}