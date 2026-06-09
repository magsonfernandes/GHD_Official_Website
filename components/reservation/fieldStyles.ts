export const reservationTextClass = "reservation-ui uppercase";

/** Fixed grey — never inherits hero hover / white bar text colors; inset from top/bottom */
export const reservationDividerClass =
  "reservation-divider w-px shrink-0 self-center h-[calc(100%-1.25rem)] bg-[rgb(148_163_184/0.42)] md:h-[calc(100%-1.5rem)]";

/** Segment shell — no visible box edges; dividers live between segments */
export const segmentDividerClass = "flex h-full min-w-0 flex-1";

export const fieldSegmentClass =
  "reservation-ui uppercase flex h-full w-full min-w-0 items-center justify-start gap-2 rounded-none border-0 bg-transparent px-4 font-body text-[0.8125rem] font-normal text-charcoal outline-none transition-colors duration-300 hover:bg-black/[0.02] focus-visible:bg-black/[0.02] focus-visible:ring-0";

export const fieldSegmentHeroClass =
  "reservation-ui uppercase flex h-full w-full min-w-0 items-center justify-start gap-2 rounded-none border-0 bg-transparent px-4 font-body text-[0.8125rem] font-normal text-white outline-none transition-colors duration-300 hover:bg-white/[0.04] focus-visible:bg-white/[0.04] focus-visible:ring-0 group-hover/reservation:text-charcoal group-hover/reservation:hover:bg-black/[0.02] group-hover/reservation:focus-visible:bg-black/[0.02]";

/** @deprecated use fieldSegmentClass */
export const fieldTriggerClass = fieldSegmentClass;

/** @deprecated use fieldSegmentHeroClass */
export const fieldTriggerHeroClass = fieldSegmentHeroClass;

/** @deprecated use segmentDividerClass */
export const segmentDividerHeroClass = segmentDividerClass;

export const fieldPanelClass =
  "reservation-ui uppercase rounded-none border border-slate-200 bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.1)]";

export const searchSegmentClass =
  "flex h-full min-w-0 flex-1 items-center justify-center bg-transparent px-4 transition-colors duration-500 ease-out";
