"use client";

import { Button } from "@/components/ui/button";
import { AddNewCourseSchema } from "@/schemas/AddNewCourseSchema";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { MdOutlineCloudUpload } from "react-icons/md";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function AddNewCourse() {
  const form = useForm<z.infer<typeof AddNewCourseSchema>>({
    resolver: zodResolver(AddNewCourseSchema),
    defaultValues: {
      price: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof AddNewCourseSchema>) {
    console.log(values);
  }

  return (
    <main className="w-full flex items-center justify-center">
      <section className="max-w-[800px]">
        <article className="w-full flex items-center justify-between">
          <div>
            <h1 className="font-bold text-xl">Add a New Course</h1>
            <p className="font-semibold text-slate-500">
              Please fill in all the details of your course
            </p>
          </div>
          <div className="flex items-center gap-5">
            <Button variant="outline">Save as Draft</Button>
            <Button>Next</Button>
          </div>
        </article>
        <article className="mt-5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="h-[250px] w-full border border-slate-300 rounded-md flex flex-col items-center justify-center">
                <MdOutlineCloudUpload size={100} />
                <p className="font-semibold text-center">
                  Drag and drop or{" "}
                  <Button className="text-blue-500 p-0" variant="link">
                    Choose File{" "}
                  </Button>{" "}
                  to upload
                </p>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Course Type</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Theme" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Course Category</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Theme" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Course Duration</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Theme" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Course Certification</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Theme" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course Price</FormLabel>
                    <FormControl>
                      <Input placeholder="0.00" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course Description</FormLabel>
                    <FormControl>
                      <div>
                        <Textarea
                          placeholder="Type the course description here."
                          {...field}
                        />
                        <Separator />
                        <ToggleGroup type="multiple">
                          <ToggleGroupItem value="B">B</ToggleGroupItem>
                          <ToggleGroupItem value="I">
                            <i>I</i>
                          </ToggleGroupItem>
                          <ToggleGroupItem value="H">H</ToggleGroupItem>
                        </ToggleGroup>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center justify-between bg-slate-100 rounded-md border border-slate-100 p-5">
                <p className="font-semibold">Enable offer pricing</p> <Switch />
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Requirements</CardTitle>
                </CardHeader>
                <Separator />
                <CardContent>
                  <ul className="list-disc ml-5 mt-5">
                    <li>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Animi harum possimus iste nihil minima dolore quos,
                      cupiditate laborum nobis dolorem obcaecati necessitatibus.
                      Fugit nostrum magni amet debitis, dolore eligendi iusto?
                    </li>
                    <li>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Animi harum possimus iste nihil minima dolore quos,
                      cupiditate laborum nobis dolorem obcaecati necessitatibus.
                      Fugit nostrum magni amet debitis, dolore eligendi iusto?
                    </li>
                    <li>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Animi harum possimus iste nihil minima dolore quos,
                      cupiditate laborum nobis dolorem obcaecati necessitatibus.
                      Fugit nostrum magni amet debitis, dolore eligendi iusto?
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="text-blue-500">
                    Add Points
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Who this course is for: </CardTitle>
                </CardHeader>
                <Separator />
                <CardContent>
                  <ul className="list-disc ml-5 mt-5">
                    <li>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Animi harum possimus iste nihil minima dolore quos,
                      cupiditate laborum nobis dolorem obcaecati necessitatibus.
                      Fugit nostrum magni amet debitis, dolore eligendi iusto?
                    </li>
                    <li>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Animi harum possimus iste nihil minima dolore quos,
                      cupiditate laborum nobis dolorem obcaecati necessitatibus.
                      Fugit nostrum magni amet debitis, dolore eligendi iusto?
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="text-blue-500">
                    Add Points
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What will you Learn:</CardTitle>
                </CardHeader>
                <Separator />
                <CardContent>
                  <ul className="list-decimal ml-5 mt-5">
                    <li>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Animi harum possimus iste nihil minima dolore quos,
                      cupiditate laborum nobis dolorem obcaecati necessitatibus.
                      Fugit nostrum magni amet debitis, dolore eligendi iusto?
                    </li>
                    <li>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Animi harum possimus iste nihil minima dolore quos,
                      cupiditate laborum nobis dolorem obcaecati necessitatibus.
                      Fugit nostrum magni amet debitis, dolore eligendi iusto?
                    </li>
                    <li>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Animi harum possimus iste nihil minima dolore quos,
                      cupiditate laborum nobis dolorem obcaecati necessitatibus.
                      Fugit nostrum magni amet debitis, dolore eligendi iusto?
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="text-blue-500">
                    Add Points
                  </Button>
                </CardFooter>
              </Card>
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </article>
      </section>
    </main>
  );
}
