import Link from "next/link";
import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex">
      <nav className="w-[150px] flex flex-col min-h-full justify-between p-5">
        <ul className="flex flex-col gap-5">
          <li>
            <Link href="dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="courses">My Courses</Link>
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
      <article className="p-5 w-full">{children}</article>
    </main>
  );
}
