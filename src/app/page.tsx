import { Route } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import Script from "next/script";

export default async function Home() {
  const nonce = headers().get("x-nonce") || "";

  return (
    <main>
      <div className="flex flex-col justify-center items-center h-screen" >
        <h1 className="text-8xl m-4">Andrew Still</h1>
        <p className="text-3xl mt-1">Here are some quick links</p>
        <div className="grid grid-cols-2 mt-4 place-items-center">
          <Link className="text-2xl m-2" href={"https://www.linkedin.com/in/andrew-still-yay/"} target="_blank">LinkedIn</Link>
          <Link className="text-2xl m-2" href={"https://docs.google.com/document/d/1aBypR-b4xcuaz5yupW8g150_mv21jKCaG4k0WnqPwbg/edit?usp=sharing"} target="_blank">Resume IN PROGRESS</Link>
          <Link className="text-2xl m-2" href={"https://github.com/AndrewDragonCh"} target="_blank">GitHub</Link>
          <Link className="text-2xl m-2" href={"https://www.credly.com/badges/d4f09d4c-567e-4be3-a9b6-7242eeab0847"} target="_blank">CompTIA A+</Link>
        </div>
        <p className="mt-8">Please ignore the basic website, more to come.</p>
      </div>
      <script defer src="https://plausible.andrewstill.moe/js/script.js" data-domain="andrewstill.moe" nonce={nonce} />
    </main>
  );
}