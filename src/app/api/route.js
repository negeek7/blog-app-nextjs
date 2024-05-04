import { NextResponse, NextRequest } from "next/server";
import fs from 'fs';

export async function GET() {
    console.log("REACH CODE I ROUTE>JS")
    return NextResponse.json({message: "Heelooo"})
  }