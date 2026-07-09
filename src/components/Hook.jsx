"use client";

import Image from "next/image";
import DownloadButton from "./DownloadButton";

export default function Hook() {
  return (
    <section
      id="home"
      className="text-center py-20 pb-40 text-white bg-radial-[at_60%_50%] from-zinc-700 to-black to-75%"
    >
      <h2 className="text-5xl font-bold mb-4">Speak Better on Camera.</h2>
      <p className="max-w-xl mx-auto mb-6 text-lg">
        Record or upload a practice video, get AI feedback on engagement,
        clarity, and confidence, then track your progress as you improve.
      </p>
      <div className="flex justify-center">
        <DownloadButton scale="scale-125" />
      </div>

      <div className="flex items-center justify-center mt-20 px-6">
        <Image
          src="/images/home.png"
          alt="FRAME home screen"
          width={1284}
          height={2778}
          priority
          className="pointer-events-none select-none w-full max-w-sm rounded-3xl shadow-2xl ring-1 ring-white/20"
          draggable={false}
        />
      </div>
    </section>
  );
}
