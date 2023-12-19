import { auth } from "@/app/auth";
import { NextResponse } from "next/server";
export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();
    auth[0].username = username;
    auth[0].password = password;

    console.log(auth);
  } catch (error) {
    console.log({ error });
  }

  return NextResponse.json({ message: "success" });
}
