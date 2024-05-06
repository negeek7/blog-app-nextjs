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
  } catch (error) {
    console.log(error, "ERRRERER")
    return NextResponse.json({ error: 'Failed to create post' });
  }
}

export async function PUT(req) {
  const payload = await req.json()
  try {
    const data = fs.readFileSync(process.cwd() + '/data.json', 'utf-8')
    const posts = JSON.parse(data)
    const updatedPosts = posts.map(p => p.id == payload.id ? payload : p)
    console.log(updatedPosts, "updatedPosts")
    fs.writeFileSync(process.cwd() + '/data.json', JSON.stringify(updatedPosts))
    return NextResponse.json({message: "Post successfully updated"})
  } catch (error) {
    console.log(error, "ERRRERER")
    return NextResponse.json({message: "Failed to update post"})
  }
}

export async function DELETE(req) {
  const payload = await req.json()
  try {
    const data = fs.readFileSync(process.cwd() + '/data.json', 'utf-8')
    const posts = JSON.parse(data)
    const postToBeDeleted = posts.findIndex(post => post.id === payload.id)
    if (postToBeDeleted > -1) {
      posts.splice(postToBeDeleted, 1)
      fs.writeFileSync(process.cwd() + '/data.json', JSON.stringify(posts))
      return NextResponse.json({ message: "Post successfully deleted" })
    } else {
      return NextResponse.json({ message: "Post not found" })
    }
  } catch (error) {
    console.log(error, "DELETE ERROR")
    return NextResponse.json({ message: "Failed to delete post" })
  }
}