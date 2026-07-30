"use client";

import Image from "next/image";
import DownloadButton from "./DownloadButton";

export default function Hook() {
  return (
    <section
      id="home"
      className="text-center py-20 pb-40 text-white bg-radial-[at_60%_50%] from-zinc-700 to-black to-75%"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Build Confidence on Camera.</h2>
      <p className="max-w-xl mx-auto mb-6 text-lg">
        Upload a video and discover how you come across on camera. Get clear feedback to improve your speaking skills.
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
