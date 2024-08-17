import { Button } from "@/components/ui/button";
import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";
import { ArrowRight, LogIn } from "lucide-react";
import FileUpload from "@/components/FileUpload";
//import { checkSubscription } from "@/lib/subscription";
//import SubscriptionButton from "@/components/SubscriptionButton";
import { db } from "@/lib/db";
import { chats } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export default async function Home() {
  const { userId } = await auth()
  const isAuth = !!userId
  return (
    <div className="w-screen min-h-screen bg-black">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="mr-3 text-5xl font-semibold text-[#18F500] tracking-[0.25em]">PDF GENEI</h1>
            <UserButton afterSignOutUrl="/"/>
          </div>

          <div className="flex mt-2">
            {isAuth && <Button className="border border-[#18F500] bg-transparent">Go to chats</Button>}
          </div>

          <p className="max-w-xl mt-1 text-lg text-lime-400 tracking-[0.25em]"> 
            An interactive learning and analysis problem 
          </p>
          <div className="w-full mt-4"> 
            {isAuth ? (
              <FileUpload/>
            ) : (
              <Link href="/sign-in">
                <Button>
                  Login 
                  <LogIn className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            )}
          </div>
          
          
        </div>
      </div>
    </div>

  );
}



