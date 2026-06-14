import { NextResponse } from "next/server";
import requests from "./data";

export async function GET() {
  return NextResponse.json(requests);
}
