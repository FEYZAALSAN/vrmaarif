"use client";

/** Üst kampanya bandında gösterilecek metin — burayı güncelleyebilirsiniz. */
export const CAMPAIGN_TICKER_TEXT =
  "Henüz Yolun Başındayız. Hazırlık Sürecindeyiz. Takipte Kalın...";

const REPEAT = 8;

function TickerSegment({ suffix }: { suffix: string }) {
  return (
    <>
      {Array.from({ length: REPEAT }, (_, i) => (
        <span
          key={`${suffix}-${i}`}
          className="shrink-0 whitespace-nowrap px-8 text-sm font-semibold tracking-wide text-white"
        >
          {CAMPAIGN_TICKER_TEXT}
        </span>
      ))}
    </>
  );
}

export function CampaignTicker() {
  return (
    <div
      className="fixed left-0 right-0 top-0 z-[60] h-10 overflow-hidden bg-gradient-to-r from-indigo-800 via-violet-700 to-indigo-800 shadow-sm"
      role="region"
      aria-label="Kampanya duyurusu"
    >
      <div className="flex w-max animate-campaign-ticker items-center py-2.5">
        <div className="flex">
          <TickerSegment suffix="a" />
        </div>
        <div className="flex" aria-hidden>
          <TickerSegment suffix="b" />
        </div>
      </div>
    </div>
  );
}
