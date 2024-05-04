import { NextResponse, NextRequest } from "next/server";
import fs from 'fs';

export async function GET() {
    const data = fs.readFileSync(process.cwd() + '/data.json', 'utf-8')
    console.log(data, "DATAs")
    return NextResponse.json(JSON.parse(data))
  }