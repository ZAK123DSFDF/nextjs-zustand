import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    profile: "this is profile",
  });
}
