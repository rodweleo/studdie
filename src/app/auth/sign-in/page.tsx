"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SignInSchema } from "@/schemas/SignInSchema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export default function SignIn() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      username: "leorodwel86@gmail.com",
      password: "12345678",
    },
  });

  async function onSubmit(values: z.infer<typeof SignInSchema>) {
    setIsAuthenticating(true);

    try {
      const response = await axios.post("/api/auth/login", values, {
        params: {
          ...values,
        },
      });
      setIsAuthenticating(false);
      toast({
        title: "Authentication",
        description: response.data.message,
      });

      setTimeout(() => {
        toast({
          title: "Redirecting...",
          description: "You are about to be redirected to our account",
        });
      }, 2000);

      setTimeout(() => {
        router.push("/user/dashboard", {
          scroll: false,
        });
      }, 2000);
    } catch (e) {
      setIsAuthenticating(false);
      console.log(e);
    }
  }
  return (
    <main className="flex items-center justify-center w-full min-h-screen">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card className="max-w-[400px]">
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
              <CardDescription>
                Enter your email address and password to access your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="abc@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="********"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit">
                {isAuthenticating ? "Please wait" : "Sign In"}
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </main>
  );
}
