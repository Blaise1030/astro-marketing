import { ArrowUp, FileText, Image, MessageSquare, Settings } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

const rail = [
  { icon: FileText, active: true },
  { icon: MessageSquare, active: false },
  { icon: Image, active: false },
  { icon: Settings, active: false },
]

/** A CSS-only sketch of the app: the agent chat beside a live preview. Decorative. */
export function ProductShot() {
  return (
    <figure className="shell pt-6">
      <div className="relative">
        <div className="pointer-events-none absolute -inset-x-4 -top-16 h-48 bg-[radial-gradient(ellipse_at_center,rgb(255_255_255/0.07),transparent_70%)] blur-2xl sm:-inset-x-16" />
        <Card
          aria-hidden="true"
          className="relative gap-0 overflow-hidden rounded-xl border border-hairline bg-panel p-0! shadow-2xl shadow-black/60 ring-0"
        >
          <div className="flex items-center gap-3 border-b border-hairline px-4 py-2.5">
            <div className="flex gap-1.5">
              <span className="size-2 rounded-full bg-hairline-strong" />
              <span className="size-2 rounded-full bg-hairline-strong" />
              <span className="size-2 rounded-full bg-hairline-strong" />
            </div>
            <div className="mx-auto flex items-center gap-2 font-mono text-[11px] text-muted-ink">
              <span className="text-faint">orso /</span>
              my-site
              <Badge
                variant="outline"
                className="h-5 gap-1.5 rounded-full border-hairline px-2 text-[10px] font-normal text-muted-ink"
              >
                <span className="size-1.5 rounded-full bg-live" />
                live
              </Badge>
            </div>
            <div className="hidden w-14 sm:block" />
          </div>

          <div className="grid md:grid-cols-[3.25rem_1fr_17.5rem]">
            <div className="hidden flex-col items-center gap-1.5 border-r border-hairline py-4 md:flex">
              {rail.map(({ icon: Icon, active }, index) => (
                <div
                  key={index}
                  className={
                    active
                      ? "flex size-8 items-center justify-center rounded-md border border-hairline-strong bg-white/[0.06] text-ink"
                      : "flex size-8 items-center justify-center rounded-md text-faint"
                  }
                >
                  <Icon className="size-3.5" strokeWidth={1.5} />
                </div>
              ))}
            </div>

            <div className="relative overflow-hidden bg-ground p-4 sm:p-6">
              <div className="dot-field pointer-events-none absolute inset-0 opacity-[0.06]" />
              <div className="relative mx-auto max-w-sm overflow-hidden rounded-lg border border-hairline bg-panel/80">
                <div className="flex items-center justify-between border-b border-hairline px-4 py-2.5">
                  <span className="text-[10px] font-semibold tracking-tight text-ink">orso</span>
                  <div className="flex gap-2.5">
                    <Skeleton className="h-1 w-6 rounded-full bg-hairline-strong" />
                    <Skeleton className="h-1 w-6 rounded-full bg-hairline-strong" />
                    <Skeleton className="h-1 w-5 rounded-full bg-hairline-strong" />
                  </div>
                </div>
                <div className="px-6 pb-6 pt-9">
                  <div className="space-y-2 text-center">
                    <Skeleton className="mx-auto h-2.5 w-4/5 rounded-full bg-ink/80" />
                    <Skeleton className="mx-auto h-2.5 w-3/5 rounded-full bg-ink/80" />
                    <Skeleton className="mx-auto mt-4 h-1.5 w-2/3 rounded-full bg-muted" />
                    <Skeleton className="mx-auto h-1.5 w-1/2 rounded-full bg-muted" />
                  </div>
                  <div className="mt-5 flex justify-center gap-2">
                    <Skeleton className="h-6 w-20 rounded-full bg-brand" />
                    <Skeleton className="h-6 w-20 rounded-full border border-hairline bg-transparent" />
                  </div>
                  <div className="mt-7 grid grid-cols-3 gap-2">
                    {Array.from({ length: 3 }).map((_, index) => (
                      <div key={index} className="rounded-md border border-hairline p-2">
                        <Skeleton className="h-1.5 w-7 rounded-full bg-hairline-strong" />
                        <Skeleton className="mt-2 h-1 w-full rounded-full bg-muted" />
                        <Skeleton className="mt-1 h-1 w-3/4 rounded-full bg-muted" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col border-t border-hairline bg-panel/60 p-4 md:border-t-0 md:border-l">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-faint">Agent</p>
                <span className="flex items-center gap-1.5 text-[10px] text-muted-ink">
                  <span className="size-1.5 rounded-full bg-live" />
                  Connected
                </span>
              </div>
              <div className="mt-4 flex flex-col gap-2.5">
                <Bubble variant="default" align="end">
                  <BubbleContent className="text-[12px]">
                    Change the headline to “Built for the whole team.”
                  </BubbleContent>
                </Bubble>
                <Bubble variant="outline" align="start">
                  <BubbleContent className="text-[12px] text-muted-ink">
                    Done — preview it on the left. Publish when you're happy.
                  </BubbleContent>
                </Bubble>
              </div>
              <div className="mt-6 flex items-center gap-2 rounded-lg border border-hairline bg-ground px-3 py-2">
                <span className="text-[11px] text-faint">Ask for a change…</span>
                <span className="ml-auto flex size-6 items-center justify-center rounded-md bg-brand text-on-brand">
                  <ArrowUp className="size-3" strokeWidth={2} />
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <figcaption className="sr-only">
        The Orso app: a conversation with the agent beside a live preview of the site.
      </figcaption>
    </figure>
  )
}
