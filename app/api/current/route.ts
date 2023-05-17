import serverAuth from '@/libs/serverAuth';
import { NextResponse } from 'next/server';
export async function GET(
  req: Request
) {
  try {
    const { currentUser } = await serverAuth(req);
    return NextResponse.json(currentUser);
  } catch (error) {
    console.log(error);
   return;
}}
