import { headers } from "next/headers";
import Script from "next/script";

export default async function Home() {
  const nonce = headers().get("x-nonce") || "";

  return (
    <main>
      <div className="flex flex-col justify-center items-center h-screen" >
        <h1 className="text-6xl m-4">Coming Soon</h1>
        <p>Come back later</p>
      </div>
      <script defer src="https://plausible.andrewstill.moe/js/script.js" data-domain="andrewstill.moe" nonce={nonce} />
    </main>
  );
}