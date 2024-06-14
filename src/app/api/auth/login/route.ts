import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server';


export async function POST(request: NextApiRequest) {
  const username = new URL(request.url!).searchParams.get("username");

  return NextResponse.json({ message: `Welcome back ${username}` }, { status: 200 });
}