import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { FaUsers } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa";
import { MdClass } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import Chart from "./Chart";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const RecentEnrollmentCard = ({
  name,
  division,
}: {
  name: string;
  division: string;
}) => {
  return (
    <div className="flex items-center gap-1">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <ul>
        <li>
          <h1 className="font-semibold">{name}</h1>
        </li>
        <li>
          <p>
            <span className="text-slate-500">Enrolled to:</span>{" "}
            <span className="text-blue-500 font-semibold">{division}</span>
          </p>
        </li>
      </ul>
    </div>
  );
};
export default function AdminDashboard() {
  return (
    <main>
      <article className="flex flex-col gap-5">
        <section className="flex gap-5 flex-wrap">
          <Card className="w-[250px]">
            <CardHeader>
              <CardTitle className="flex items-center gap-1"></CardTitle>
              <CardDescription>
                <FaUsers />
                Total Students
              </CardDescription>
            </CardHeader>
            <CardContent className="font-bold text-[30px]">1000</CardContent>
          </Card>
          <Card className="w-[250px]">
            <CardHeader>
              <CardDescription>
                <GiTeacher /> Total Live Sessions
              </CardDescription>
            </CardHeader>
            <CardContent className="font-bold text-[30px]">
              11,386 Hrs
            </CardContent>
          </Card>
          <Card className="w-[250px]">
            <CardHeader>
              <CardDescription>
                <MdClass /> Total Active Courses
              </CardDescription>
            </CardHeader>
            <CardContent className="font-bold text-[30px]">41</CardContent>
          </Card>
          <Card className="w-[250px]">
            <CardHeader>
              <CardDescription>
                <FaMoneyBillWave /> Net Income
              </CardDescription>
            </CardHeader>
            <CardContent className="font-bold text-[30px]">
              Ksh 40,452,765.65
            </CardContent>
          </Card>
        </section>
        <section className="flex justify-between">
          <section className="flex gap-2 justify-between ">
            <Chart />
            <div className="flex flex-wrap">
              <Card className="w-[350px] h-fit">
                <CardHeader>
                  <CardTitle>Enrollment Statistics</CardTitle>
                </CardHeader>
                <Separator />
                <div className="flex">
                  <div className="w-2/4 bg-blue-200 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="font-bold">96%</h3>
                      <p className="text-slate-500">Success Rate</p>
                    </div>
                  </div>
                  <div className="w-2/4">
                    <div className="bg-green-200 p-5 flex items-center justify-center">
                      <div className="text-center">
                        <h3 className="font-bold">2319</h3>
                        <p className="text-slate-500">People Completed.</p>
                      </div>
                    </div>
                    <div className="bg-purple-200 p-5 flex items-center justify-center">
                      <div className="text-center">
                        <h3 className="font-bold">7000</h3>
                        <p className="text-slate-500">Haven&apos;t finished.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="w-[350px] h-fit">
                <CardHeader>
                  <CardTitle>Recent Enrollment</CardTitle>
                </CardHeader>
                <Separator />
                <CardContent>
                  <ul className="flex flex-col gap-2.5">
                    <li>
                      <RecentEnrollmentCard
                        name="John Doe"
                        division="Fundamentals of UX Design"
                      />
                    </li>
                    <li>
                      <RecentEnrollmentCard
                        name="Rodwell Leo"
                        division="Introduction to AI Fundamentals"
                      />
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </section>
      </article>
    </main>
  );
}
