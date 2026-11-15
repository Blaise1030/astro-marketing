import { FlipWords } from "@/components/ui/flip-words";

/** Inline "live specimen" in the hero headline: cycles through the agents Orso drives. */
export function AgentChip() {
  return (
    <span className="relative mx-1 inline-flex translate-y-[-0.06em] items-center gap-2 rounded-2xl border border-hairline-strong bg-panel py-1 pl-3 pr-1 align-middle text-[0.62em] leading-none shadow-[0_10px_40px_-12px_rgb(47_108_236/0.6)] sm:gap-3 sm:pl-4">
      <span className="size-2 shrink-0 rounded-full bg-live sm:size-2.5" />
      <FlipWords words={["Claude", "Cursor", "Codex"]} duration={2600} className="px-0 text-ink dark:text-ink" />
    </span>
  );
}
