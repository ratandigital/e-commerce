import { NextResponse } from "next/server"

NextResponse

export async function GET(req, res) {
  return NextResponse.json({text: 'this is test'})

}