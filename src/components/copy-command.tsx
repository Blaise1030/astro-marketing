import { useRef, useState } from "react";

type Props = {
  command: string;
  label?: string;
};

export function CopyCommand({ command, label = "Install with curl" }: Props) {
  const codeRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      const node = codeRef.current;
      if (!node) return;
      const range = document.createRange();
      range.selectNodeContents(node);
      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-section-line bg-section-panel text-left shadow-action-secondary">
      <div className="flex items-center justify-between gap-3 border-b border-section-line px-4 py-2.5">
        <p className="text-xs font-medium text-brand-muted">{label}</p>
        <button
          type="button"
          onClick={copy}
          className="rounded-full border border-section-line bg-linear-to-b from-secondary-top to-material px-2.5 py-1 text-xs font-medium text-brand-foreground transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto bg-ground px-4 py-4 font-mono text-[0.8125rem] leading-relaxed text-brand-foreground sm:text-sm">
        <code ref={codeRef}>{command}</code>
      </pre>
    </div>
  );
}
