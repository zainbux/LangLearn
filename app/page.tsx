import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const { userId } = auth();

  const url = `${
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : `https://lang-learn-git-main-zainbux99gmailcoms-projects.vercel.app`
  }/translate`;
  

  return (
    <main className="flex flex-col items-center justify-center p-10">
      <h1 className="text-3xl lg:text-6xl text-center pb-10 mb-5 font-light">
        LangLearn will teach you to speak to anyone, with the power of AI
      </h1>{" "}
      <Image
        src="/main.jpg"
        alt="logo"
        width={400}
        height={400}
      />

      {userId ? (
        <Link
          href="/translate"
          className="bg-blue-500 hover:bg-blue-600 w-full mt-10 lg:w-fit p-5 rounded-md text-white text-center cursor-pointer"
        >
          Translate Now
        </Link>
      ) : (
        <Button className="bg-blue-500 hover:bg-blue-600 w-full mt-10 lg:w-fit p-5">
          <SignInButton forceRedirectUrl={url} mode="modal">
            Sign In to Get Translating
          </SignInButton>
        </Button>
      )}

      {userId ? (
        <Link
          href="/"
          className="bg-blue-500  w-full mt-10 lg:w-fit p-5 rounded-md text-white text-center "
        >
          Vocabulary Deck
        </Link>
      ) : (
        <Button className="bg-blue-500 hover:bg-blue-600 w-full mt-10 lg:w-fit p-5">
          <SignInButton forceRedirectUrl={url} mode="modal">
            Sign In to Start Learning
          </SignInButton>
        </Button>
      )}  
    </main>
  );
}