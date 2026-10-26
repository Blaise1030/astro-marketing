import { Badge } from "@/components/ui/badge"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

/** A CSS-only sketch of the app: the agent chat beside a live preview. Decorative. */
export function ProductShot() {
  return (
    <figure className="mx-auto max-w-5xl px-8 pb-6">
      <Card aria-hidden="true" className="gap-0 overflow-hidden p-0!">
        <CardHeader className="flex flex-row items-center gap-3 border-b border-tertiary/30 px-4 py-3">
          <div className="flex gap-1.5">
            <Skeleton className="size-2.5 rounded-full" />
            <Skeleton className="size-2.5 rounded-full" />
            <Skeleton className="size-2.5 rounded-full" />
          </div>
          <Badge variant="outline" className="mx-auto">
            <span className="size-1.5 rounded-full bg-link" />
            orso / my-site — live preview
          </Badge>
          <div className="w-10" />
        </CardHeader>
        <div className="grid md:grid-cols-[3rem_1fr_15rem]">
          <div className="hidden flex-col items-center gap-3 border-r border-tertiary/30 py-4 md:flex">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="size-6 rounded-md" />
            ))}
          </div>
          <div className="bg-foreground/[0.03] p-6">
            <Card size="sm" className="mx-auto max-w-96">
              <CardContent>
                <div className="flex items-center justify-between">
                  <Skeleton className="h-2 w-14 rounded-full" />
                  <div className="flex gap-2">
                    <Skeleton className="h-1.5 w-6 rounded-full" />
                    <Skeleton className="h-1.5 w-6 rounded-full" />
                    <Skeleton className="h-1.5 w-6 rounded-full" />
                  </div>
                </div>
                <div className="mt-8 space-y-2 text-center">
                  <Skeleton className="mx-auto h-3 w-4/5 rounded-full" />
                  <Skeleton className="mx-auto h-3 w-3/5 rounded-full" />
                  <Skeleton className="mx-auto mt-3 h-1.5 w-2/3 rounded-full" />
                  <Skeleton className="mx-auto h-1.5 w-1/2 rounded-full" />
                </div>
                <div className="mt-5 flex justify-center gap-2">
                  <Skeleton className="h-6 w-20 rounded-md bg-brand" />
                  <Skeleton className="h-6 w-20 rounded-md border border-tertiary/40 bg-transparent" />
                </div>
                <div className="mt-6 grid grid-cols-3 gap-2">
                  <Skeleton className="h-12 rounded-md border border-tertiary/30 bg-transparent" />
                  <Skeleton className="h-12 rounded-md border border-tertiary/30 bg-transparent" />
                  <Skeleton className="h-12 rounded-md border border-tertiary/30 bg-transparent" />
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="hidden flex-col gap-3 border-l border-tertiary/30 p-4 md:flex">
            <Bubble variant="default" align="end">
              <BubbleContent>Change the headline to “Built for the whole team.”</BubbleContent>
            </Bubble>
            <Bubble variant="outline" align="start">
              <BubbleContent>Done — preview it on the left. Publish when you're happy.</BubbleContent>
            </Bubble>
            <div className="mt-auto flex items-center gap-2 rounded-md border border-tertiary/30 px-3 py-2">
              <Skeleton className="h-1.5 w-16 rounded-full" />
              <Skeleton className="ml-auto size-5 rounded-md bg-brand" />
            </div>
          </div>
        </div>
      </Card>
      <figcaption className="sr-only">
        The Orso app: a conversation with the agent beside a live preview of the site.
      </figcaption>
    </figure>
  )
}
