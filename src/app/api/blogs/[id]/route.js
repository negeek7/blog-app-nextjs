import { NextResponse } from "next/server";
import fs from 'fs'

export async function GET(req, {params}) {
    const { id } = params;
    let blog;
    try {
        const blogData = JSON.parse(fs.readFileSync(process.cwd() + '/data.json', 'utf-8')) 
        blog = blogData.filter(item => item.id.toString() === id.toString())
        return NextResponse.json({ message: 'Success', blog: blog});
    } catch (error) {
        return NextResponse.json({ message: error});
    }
}