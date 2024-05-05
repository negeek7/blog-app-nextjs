import { NextResponse, NextRequest } from "next/server";
import fs from 'fs';

export async function GET() {
  try {
    const data = fs.readFileSync(process.cwd() + '/data.json', 'utf-8')
    return NextResponse.json(JSON.parse(data))
  } catch (error) {
    return NextResponse.json({ message: error })
  }
}

export async function POST(req) {
  const payload = await req.json();
  try {
    const newPost = payload;
    const data = fs.readFileSync(process.cwd() + '/data.json', 'utf-8');
    const posts = JSON.parse(data);
    posts.push({...newPost, id: posts[posts.length-1].id + 1});
    fs.writeFileSync(process.cwd() + '/data.json', JSON.stringify(posts));
    return NextResponse.json({ message: 'Post created successfully' });
  } catch (err) {
    console.log(err, "ERRRERER")
    return NextResponse.json({ error: 'Failed to create post' });
  }
}