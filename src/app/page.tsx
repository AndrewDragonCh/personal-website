import { headers } from "next/headers";
import Link from "next/link";

export default async function Home() {
  const nonce = (await headers()).get("x-nonce") || "";

  return (
    <main>
      <div className="flex flex-col justify-center items-center h-screen" >
        <h1>Andrew Still</h1>
        <h2>Here are some quick links</h2>
        <div className="grid grid-cols-2 place-items-center">
          <Link className="m-2" href={"https://www.linkedin.com/in/andrew-still-yay/"} target="_blank"><h3>LinkedIn</h3></Link>
          <Link className="m-2" href={"https://docs.google.com/document/d/1aBypR-b4xcuaz5yupW8g150_mv21jKCaG4k0WnqPwbg/edit?usp=sharing"} target="_blank"><h3>Resume IN PROGRESS</h3></Link>
          <Link className="m-2" href={"https://github.com/AndrewDragonCh"} target="_blank"><h3>GitHub</h3></Link>
          <Link className="m-2" href={"https://www.credly.com/badges/d4f09d4c-567e-4be3-a9b6-7242eeab0847"} target="_blank"><h3>CompTIA A+</h3></Link>
        </div>
        <p className="mt-6">Please ignore the basic website, more to come.</p>
      </div>
      <script defer src="https://plausible.andrewstill.moe/js/script.js" data-domain="andrewstill.moe" nonce={nonce} />
    </main>
  );
}