'use client'


import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Github, Mail, Phone, Linkedin, Facebook, Twitter } from 'lucide-react'
import { login } from '@/app/auth/login/actions'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault()

  }

  const handlePhoneLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement phone login logic here
    console.log('Phone login:', phoneNumber)
  }

  const handleSocialLogin = (provider: string) => {
    // Implement social login logic here
    console.log('Social login with:', provider)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 space-y-8 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Welcome Back</h2>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        <Tabs defaultValue="email" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="email">Email</TabsTrigger>
            <TabsTrigger value="phone">Phone</TabsTrigger>
          </TabsList>
          <TabsContent value="email">
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" formAction={login} className="w-full">Sign In</Button>
            </form>
          </TabsContent>
          <TabsContent value="phone">
            <form onSubmit={handlePhoneLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">Send OTP</Button>
            </form>
          </TabsContent>
        </Tabs>

        <div className="relative">
          <Separator className="my-4" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-white px-2 text-gray-500 text-sm">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" onClick={() => handleSocialLogin('github')} className="w-full">
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </Button>
          <Button variant="outline" onClick={() => handleSocialLogin('google')} className="w-full">
            <Mail className="w-5 h-5 mr-2" />
            Google
          </Button>
          <Button variant="outline" onClick={() => handleSocialLogin('microsoft')} className="w-full">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z" />
            </svg>
            Microsoft
          </Button>
          <Button variant="outline" onClick={() => handleSocialLogin('linkedin')} className="w-full">
            <Linkedin className="w-5 h-5 mr-2" />
            LinkedIn
          </Button>
          <Button variant="outline" onClick={() => handleSocialLogin('facebook')} className="w-full">
            <Facebook className="w-5 h-5 mr-2" />
            Facebook
          </Button>
          <Button variant="outline" onClick={() => handleSocialLogin('twitter')} className="w-full">
            <Twitter className="w-5 h-5 mr-2" />
            Twitter
          </Button>
        </div>

        <div className="text-center text-sm">
          <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
          <span className="mx-2">•</span>
          <a href="#" className="text-blue-600 hover:underline">Sign up for an account</a>
        </div>
      </div>
    </div>
  )
}