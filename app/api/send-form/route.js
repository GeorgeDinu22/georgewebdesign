import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  console.log("FORMULAR PRIMIT: ", body);

  return NextResponse.json(
    { message: "Eroare din cauza mea" },
    { status: 402 }
  );
}