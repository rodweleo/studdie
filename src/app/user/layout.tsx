import Link from "next/link";
import { Suspense } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoIosNotificationsOutline } from "react-icons/io";

export default function UserAccount({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex w-full h-full fixed">
      <nav className="flex flex-col min-h-full justify-between p-5">
        <ul className="flex flex-col gap-5">
          <li>
            <Link href="dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="lessons">Lessons</Link>
          </li>
          <li>
            <Link href="timetable">Timetable</Link>
          </li>
          <li>
            <Link href="homework">Homework</Link>
          </li>
          <li>
            <Link href="messages">Messages</Link>
          </li>
          <li>
            <Link href="assessments">Assessments</Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-5">
          <li>
            <Link href="support">Support</Link>
          </li>
          <li>
            <Link href="settings">Settings</Link>
          </li>
        </ul>
      </nav>
      <article className="p-5 w-full flex flex-col gap-5">
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
        <Suspense fallback={<div>Loading</div>}>{children}</Suspense>
      </article>
    </main>
  );
}
