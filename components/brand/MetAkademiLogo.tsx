"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import logoMark from "@/src/assets/metakademi-logo.png";

/** Harici dosya kullanmak isterseniz (public altından) */
export const METAKADEMI_LOGO_PATH = "/brand/metakademi-logo.png";

type MetAkademiLogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  iconOnly?: boolean;
  /** true: sadece `public` URL kullan (varsayılan: projeye gömülü PNG — her zaman yüklenir) */
  usePublicUrl?: boolean;
  logoSrc?: string;
};

const sizeToPx = { sm: 36, md: 44, lg: 52 } as const;

const slotSizes = {
  sm: "h-9 w-9 min-h-9 min-w-9",
  md: "h-11 w-11 min-h-11 min-w-11",
  lg: "h-[3.25rem] w-[3.25rem] min-h-[3.25rem] min-w-[3.25rem]",
} as const;

/**
 * Logo: `src/assets/metakademi-logo.png` derlemeye gömülür (kırık görsel olmaz).
 * usePublicUrl veya logoSrc ile `/brand/...` yoluna geçilebilir.
 */
export function MetAkademiLogo({
  className,
  size = "md",
  iconOnly = false,
  usePublicUrl = false,
  logoSrc,
}: MetAkademiLogoProps) {
  const [imgFailed, setImgFailed] = useState(false);
  const px = sizeToPx[size];

  const slotClass = cn(
    "relative shrink-0 overflow-hidden rounded-xl bg-black shadow-sm ring-1 ring-black/5",
    imgFailed && "border border-dashed border-slate-300 bg-slate-50 ring-0"
  );

  const externalSrc = logoSrc ?? (usePublicUrl ? METAKADEMI_LOGO_PATH : null);

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-heading select-none",
        className
      )}
    >
      <span className={cn(slotClass, slotSizes[size])}
        {...(iconOnly
          ? { role: "img" as const, "aria-label": "MetAkademi" }
          : { "aria-hidden": true as const })}
      >
        {externalSrc && !imgFailed ? (
          <img
            src={externalSrc}
            alt={iconOnly ? "MetAkademi" : ""}
            width={px}
            height={px}
            className="h-full w-full object-cover object-center"
            onError={() => setImgFailed(true)}
          />
        ) : !externalSrc && !imgFailed ? (
          <Image
            src={logoMark}
            alt={iconOnly ? "MetAkademi" : ""}
            width={px}
            height={px}
            className="h-full w-full object-cover object-center"
            priority
            sizes={`${px}px`}
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center px-0.5 text-center text-[0.55rem] font-semibold leading-tight text-slate-400">
            Logo
          </span>
        )}
      </span>

      {!iconOnly && (
        <span
          className={cn(
            "font-bold tracking-tight leading-none text-black",
            size === "sm" && "text-lg",
            size === "md" && "text-xl md:text-2xl",
            size === "lg" && "text-2xl md:text-3xl"
          )}
        >
          MetAkademi
        </span>
      )}
    </span>
  );
}
