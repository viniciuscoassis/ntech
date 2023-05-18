'use client'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Client() {
  const router = useRouter();
  const session = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/');
    },
  });

  useEffect(() => {
  }, []);
  // return {session?.status === 'unauthenticated'? <div className='text-3xl'></div> : <div></div>;
  return <div></div>;
}
