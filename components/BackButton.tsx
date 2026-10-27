"use client";

import { useRouter, usePathname } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";

  function handleClick() {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isHome}
      aria-label="Go back"
      className={`nav-link ${isHome ? "invisible" : ""}`}
    >
      &lt; Back
    </button>
  );
}