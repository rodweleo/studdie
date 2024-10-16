import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import Link from "next/link";

export default function Page() {
    return (
        <main className="w-full flex gap-5 overflow-y-auto">
            <article className="w-full flex flex-col gap-5 overflow-y-auto">
                <Card className="bg-blue-500 text-white w-full">
                    <CardHeader>
                        <CardTitle>Welcome back, James</CardTitle>
                        <CardDescription className="text-white">
                            {" "}
                            You&apos;ve learned 70% of your goal this week! Keep it up and
                            improve your progress.
                        </CardDescription>
                    </CardHeader>
                </Card>

                <section className="flex flex-wrap gap-5">
                    <Card className="w-fit">
                        <CardHeader>
                            <CardTitle>Attendance</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col items-start ">
                            <span className="font-bold text-[30px]">19/20</span>
                        </CardContent>
                        <CardFooter>
                            <p>Well done! You&apos;re attending all lessons. Keep going!</p>
                        </CardFooter>
                    </Card>
                    <Card className="w-fit">
                        <CardHeader>
                            <CardTitle>Homework</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col items-start ">
                            <span className="font-bold text-[30px]">19/20</span>
                        </CardContent>
                        <CardFooter>
                            <p>Don&apos;t forget about your next homework.</p>
                        </CardFooter>
                    </Card>
                    <Card className="w-fit">
                        <CardHeader>
                            <CardTitle>Rating</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <span className="font-bold text-[30px]">19/20</span>
                        </CardContent>
                        <CardFooter>
                            <Link href="reports" className="text-blue-500 font-bold">
                                Go to Reports
                            </Link>
                        </CardFooter>
                    </Card>
                </section>
            </article>
            <Card className="w-[500px] h-fit">
                <CardHeader>
                    <CardTitle>Homework progress</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-5">
                    <div>
                        <h2 className="font-semibold">To do</h2>
                        <ul>
                            <li>Rational inequalities: AI Assessment #5</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-semibold">On review</h2>
                        <ul>
                            <li>Rational inequalities: AI Assessment #5</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-semibold">Completed</h2>
                        <ul>
                            <li>Rational inequalities: AI Assessment #5</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </main>
    );
}
