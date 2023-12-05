"use client";
import { Prompt } from "@/components/card";
import Modal from "@/components/poupop";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [ispoupop, setIspoupop] = useState<boolean>(false);

  function Menu() {
    setIspoupop(!ispoupop);
  }

  function DiscordRedirect() {
    window.open("https://discord.gg/A7RtTbavEW", "_blank");
  }

  return (
    <main className="flex flex-col items-center justify-center text-center absolute inset-0 gap-5">
      <>
        <h1 className="text-3xl">BETA OPEN</h1>
      </>

      <h1>Larean Priston Tale</h1>
      <div className="flex gap-4">
        <button onClick={Menu}>
          <p className="bg-cyan-600 p-2 rounded-lg text-white">Criar Conta</p>
        </button>
        <button onClick={DiscordRedirect}>
          <p className="bg-[#5865F2] p-2 rounded-lg text-white">Discord</p>
        </button>
        <button>
          <p className="bg-yellow-500 p-2 rounded-lg text-white">Download!</p>
        </button>
      </div>

      {ispoupop && <Modal setIspoupop={setIspoupop} />}
      <iframe
        src="https://discord.com/widget?id=1181632791935471636&theme=dark"
        width="350"
        height="500"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      ></iframe>
      <Prompt />
    </main>
  );
}
