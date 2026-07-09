"use client";

import { AppleLogoIcon } from "@phosphor-icons/react";

export default function DownloadButton({ scale = "" }) {
  return (
    <a
      href="https://apps.apple.com/us/app/cal-ai-calorie-tracker/id6480417616?ppid=0fdd527c-4a8a-4b3f-9db0-ee844938c041"
      className={`flex items-center bg-blue-500 text-white rounded-lg px-3 py-2 space-x-1 hover:bg-blue-500/95 transition max-w-fit ${scale}`}
    >
      <AppleLogoIcon size={28} weight="fill" />
      <div className="flex flex-col items-start leading-none">
        <span className="text-[9px] leading-none">Download on the</span>
        <span className="text-[16px] font-semibold leading-none">App Store</span>
      </div>
    </a>
  );
}
