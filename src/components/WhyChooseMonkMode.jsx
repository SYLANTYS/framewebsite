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
        FRAME keeps your personal growth tools clean, visual, and easy to
        revisit.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        <ReasonCard
          icon={SparkleIcon}
          title="Capture More Clearly"
          desc="FRAME keeps your thoughts, entries, and media close together so it is easier to return to what matters."
        />
        <ReasonCard
          icon={LinkSimpleIcon}
          title="Stay Connected"
          desc="Topics, records, feedback, and analytics work together instead of living in separate places."
        />
        <ReasonCard
          icon={BrainIcon}
          title="Build Better Patterns"
          desc="Review your progress over time so reflection turns into momentum."
        />
      </div>
    </section>
  );
}
