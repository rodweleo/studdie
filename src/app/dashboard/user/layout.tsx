
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoIosNotificationsOutline } from "react-icons/io";
import StudentNav from "@/components/student/nav-bar";
import Link from "next/link";
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'


export default async function UserAccount({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/auth/login')
  }
  return (
      <div className="w-full h-full bg-slate-100">
        <header className="sticky top-0 z-50 flex items-center  w-full justify-around bg-white">
          <Link href="" className="font-bold text-2xl">Studdie</Link>
          <StudentNav />
          <section className="flex gap-5 items-center">
            <Input placeholder="Search" />
            <div className="flex items-center gap-2">
              <Button className="p-0 m-0 text-2xl bg-white text-black hover:bg-white">
                <IoIosNotificationsOutline />
              </Button>
              <Button className="flex gap-1 items-center p-0 m-0 bg-white hover:bg-white">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-md font-semibold text-black">John Doe</h3>
                  <p className="text-sm text-slate-500">@john_doe</p>
                </div>
              </Button>
            </div>
          </section>
        </header>
        <main className="h-full">
          {children}
        </main>
      </div>    
  );
}
