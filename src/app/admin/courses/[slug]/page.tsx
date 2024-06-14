import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GrLanguage } from "react-icons/gr";
import { PiStudentBold } from "react-icons/pi";
import { IoMdTime } from "react-icons/io";
import moment from "moment";
import { CiStar } from "react-icons/ci";

export default function Course({ params }: { params: { slug: string } }) {
  return (
    <main className="flex gap-5">
      <article className="space-y-4">
        <Image
          src="/images/AI.jpg"
          alt="Picture of the author"
          width={800}
          height={500}
          priority
        />
        <h1 className="font-bold text-2xl">
          {params.slug.replaceAll("-", " ")}
        </h1>
        <article>
          <section>
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h3 className="font-semibold">John Doe</h3>
            </div>
          </section>
          <section>
            <ul className="flex flex-wrap w-full gap-5 text-slate-500 font-medium">
              <li className="flex items-center">
                <ul className="flex items-center">
                  <li>
                    <CiStar />
                  </li>
                  <li>
                    <CiStar />
                  </li>
                  <li>
                    <CiStar />
                  </li>
                  <li>
                    <CiStar />
                  </li>
                  <li>
                    <CiStar />
                  </li>
                </ul>
                <span className="text-sm">(2345 ratings)</span>
              </li>
              <li className="flex items-center">
                <PiStudentBold /> <span className="text-sm">2590 students</span>
              </li>
              <li className="flex items-center">
                <IoMdTime />{" "}
                <span className="text-sm">
                  Last updated {moment().format("YYYY-MM-DD")}
                </span>
              </li>
              <li className="flex items-center">
                <GrLanguage /> <span className="text-sm">English</span>
              </li>
            </ul>
          </section>
        </article>
        <article className="space-y-2">
          <h2 className="font-semibold text-xl">About this Course</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
            fugiat maiores, non aliquam ad ex, eos omnis ratione repellat
            voluptatibus itaque perferendis accusantium! Porro ut id
            consectetur. Rem, cum quidem!
          </p>
          <Card>
            <CardHeader>
              <CardTitle>Course Content</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Getting Started</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Setup</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Chapter 1: Learning Numpy</AccordionTrigger>
                  <AccordionContent>
                    Yes. It's animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </article>
      </article>
      <aside className="w-[300px] float-right space-y-4">
        <Card className="w-[300px]">
          <CardHeader>
            <CardTitle>This course includes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li>Course Type: </li>
              <li>Total Duration: </li>
              <li>Total chapter: </li>
              <li>Total Quizzes: </li>
              <li>Seat Booked: </li>
              <li>Live Classes: </li>
              <li>Downloadable Resources: </li>
              <li>Certificates: </li>
              <li>Course Start Date: </li>
            </ul>
          </CardContent>
          <Separator />
          <div className="p-5">
            <span className="font-bold text-2xl">KSh 2,328</span>
          </div>
        </Card>

        <Card className="w-[300px]">
          <CardHeader>
            <CardTitle>Course Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <>
              <Progress value={16.67} />
              <p className="text-slate-500 text-sm">
                2 of 12 lessons completed.
              </p>
            </>
          </CardContent>
        </Card>

        <Card className="w-[300px]">
          <CardHeader>
            <CardTitle>Live Quiz Content</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li>Total Quizzes: </li>
              <li>Time Left: </li>
              <li>Total Participants: </li>
            </ul>
          </CardContent>
          <Separator />
          <Button variant="link" className="ml-2 text-blue-500 font-semibold">
            See results & responses
          </Button>
        </Card>

        <Card className="w-[300px]">
          <CardHeader>
            <CardTitle>Course Statistics</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap items-center justify-center gap-5">
            <div className="flex flex-col items-center bg-slate-100 p-2 rounded-md">
              <div className="h-20 w-20 rounded-full bg-blue-100"></div>
              <h3 className="text-sm font-semibold">Participation Rate</h3>
            </div>
            <div className="flex flex-col items-center bg-slate-100 p-2 rounded-md">
              <div className="h-20 w-20 rounded-full bg-blue-100"></div>
              <h3 className="text-sm font-semibold">Satisfactory Rate</h3>
            </div>
          </CardContent>
        </Card>
      </aside>
    </main>
  );
}
