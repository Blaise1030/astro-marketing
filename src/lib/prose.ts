/** Shared Tailwind Typography classes for rendered Markdown (blog posts, help docs, legal pages). */
export const proseClass = [
  "prose break-words dark:prose-invert",
  "prose-headings:font-medium prose-headings:tracking-[-0.025em]",
  "prose-p:text-[15.5px] prose-p:leading-[1.75] prose-li:text-[15.5px]",
  "prose-a:text-brand-ink prose-a:decoration-brand/30 prose-a:underline-offset-4 hover:prose-a:decoration-brand",
  "prose-code:font-mono prose-code:text-[0.88em] prose-code:before:content-none prose-code:after:content-none",
  "prose-code:rounded-md prose-code:bg-ink/[0.05] prose-code:px-1.5 prose-code:py-0.5 prose-code:font-normal",
  "prose-pre:rounded-[16px] prose-pre:border prose-pre:border-hairline prose-pre:bg-raised prose-pre:text-ink",
  "[&_pre_code]:bg-transparent [&_pre_code]:p-0",
  "prose-blockquote:border-l-brand prose-blockquote:font-normal prose-blockquote:not-italic",
  "prose-hr:border-dashed prose-hr:border-hairline-strong",
  "prose-img:h-auto prose-img:max-w-full prose-img:rounded-[16px]",
].join(" ");
