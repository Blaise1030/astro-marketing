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
    <div className="overflow-hidden bg-panel text-left">
      <div className="flex items-center justify-between gap-3 border-b border-hairline px-5 py-3">
        <p className="font-mono text-[11px] text-faint">{label}</p>
        <button
          type="button"
          onClick={copy}
          className="btn-quiet rounded-[8px] px-2.5 py-1 text-[12px] font-medium text-ink transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto px-5 py-5 font-mono text-[13px] leading-relaxed text-ink sm:text-[14px]">
        <code ref={codeRef}>{command}</code>
      </pre>
    </div>
  );
}
