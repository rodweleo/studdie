"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function MyCourses() {
  const router = useRouter();

  return (
    <main className="w-full">
      <article>
        <Separator />
        <section className="flex items-center bg-blue-500 w-full h-36 p-5">
          <section className="w-full flex gap-5 items-center">
            <div className="flex items-center gap-1">
              <div className="h-10 w-10 bg-slate-300 rounded-full"></div>
              <ul>
                <li className="font-bold">Active Courses</li>
                <li>1</li>
              </ul>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-10 w-10 bg-slate-300 rounded-full"></div>
              <ul>
                <li className="font-bold">Participation Rate</li>
                <li>96%</li>
              </ul>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-10 w-10 bg-slate-300 rounded-full"></div>
              <ul>
                <li className="font-bold">Satisfactory Level</li>
                <li>Satisfied</li>
              </ul>
            </div>
          </section>
          <Button onClick={() => router.push("/admin/courses/add-new-course")}>
            Add a New Course
          </Button>
        </section>
      </article>

      <article className="mt-5">
        <section className="flex items-center justify-between">
          <h1 className="font-bold">My Courses</h1>
          <section>
            <Input placeholder="Search course" />
          </section>
        </section>
        <section>
          <Tabs defaultValue="active">
            <TabsList>
              <TabsTrigger value="active">Active Courses (1)</TabsTrigger>
              <TabsTrigger value="completed">Completed (0)</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming Courses (16)</TabsTrigger>
              <TabsTrigger value="paused">Paused (0)</TabsTrigger>
            </TabsList>
            <TabsContent value="active">
              <ActiveCourses />
            </TabsContent>
            <TabsContent value="password">
              Change your password here.
            </TabsContent>
          </Tabs>
        </section>
      </article>
    </main>
  );
}

const ActiveCourses = () => {
  const router = useRouter();
  return (
    <article className="flex flex-wrap gap-5">
      <Link href="courses/foundations-of-artificial-intelligence_1">
        <Card className="max-w-[300px]">
          <Image
            src="/images/AI.jpg"
            alt="Picture of the author"
            width={300}
            height={50}
          />
          <CardHeader>
            <CardTitle>Foundations of Artificial Intelligence</CardTitle>
            <CardDescription className="line-clamp-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
              repellat quam expedita veritatis aperiam odio doloribus officia id
              esse, quasi nam necessitatibus, quaerat, animi accusamus corporis
              recusandae? Autem, quo ad?
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex items-center justify-between">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="bg-blue-100 px-4 py-1 rounded-md text-blue-500 font-bold">
              Free
            </span>
          </CardFooter>
        </Card>
      </Link>
    </article>
  );
};
