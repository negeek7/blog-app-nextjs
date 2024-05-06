import { NextResponse, NextRequest } from "next/server";
import fs from 'fs';

export async function GET() {
    return NextResponse.json({message: "Hello CrissCross Labs"})
  }