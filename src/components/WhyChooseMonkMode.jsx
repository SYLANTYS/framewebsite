"use client";

import { SparkleIcon, LinkSimpleIcon, BrainIcon } from "@phosphor-icons/react";

function ReasonCard({ icon: Icon, title, desc }) {
  return (
    <div className="bg-gray-100 rounded-3xl p-6 max-sm:mx-5 text-left flex flex-col gap-3 shadow-lg">
      <Icon size={40} className="text-black" />
      <h4 className="text-lg font-bold">{title}</h4>
      <p className="text-sm text-gray-800">{desc}</p>
    </div>
  );
}

export default function WhyChooseMonkMode() {
  return (
    <section className="py-20 pb-40 bg-gray-300 text-black text-center">
      <h3 className="text-5xl mb-2">Why Choose FRAME?</h3>
      <p className="text-lg mb-20 text-zinc-700">
        FRAME turns speaking practice into a clear loop: record, review,
        improve, and repeat.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        <ReasonCard
          icon={SparkleIcon}
          title="Practice With Structure"
          desc="FRAME helps you prepare around your goals, speaking style, pacing, and the kind of communicator you want to become."
        />
        <ReasonCard
          icon={LinkSimpleIcon}
          title="Understand Your Delivery"
          desc="AI feedback breaks your speaking into clear areas like engagement, clarity, confidence, clips, and transcript-based insights."
        />
        <ReasonCard
          icon={BrainIcon}
          title="Improve Over Time"
          desc="Track practice history, streaks, scores, and recording stats so every session builds toward better communication."
        />
      </div>
    </section>
  );
}
