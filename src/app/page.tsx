import { headers } from "next/headers";

export default async function Home() {
  const nonce = headers().get("x-nonce");

  return (
    <main>
      <div className="flex flex-col justify-center items-center h-screen" >
        <h1 className="text-6xl m-4">Coming Soon</h1>
        <p>Come back later</p>
      </div>
    </main>
  );
}