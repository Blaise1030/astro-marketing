import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export interface Faq {
  question: string
  answer: string
}

/**
 * The FAQ island. Astro renders each React component in a separate root, so
 * Base UI's compound parts have to live in one component rather than in the
 * .astro template — otherwise the Accordion context is lost.
 *
 * The stock chevrons are hidden in favour of a plus/minus mark, matching the
 * ruled, editorial accordion in the design.
 */
export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <Accordion multiple keepMounted className="border-y border-hairline">
      {faqs.map((faq, index) => (
        <AccordionItem key={faq.question} value={`faq-${index}`} className="border-hairline">
          <AccordionTrigger className="items-center gap-6 py-5 text-left text-[0.9375rem] font-normal hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden">
            <span>{faq.question}</span>
            <span aria-hidden="true" className="relative ml-auto size-4 shrink-0 text-muted-ink">
              <span className="absolute top-1/2 left-0 h-px w-4 -translate-y-1/2 bg-current" />
              <span className="absolute top-0 left-1/2 h-4 w-px -translate-x-1/2 bg-current transition-transform duration-200 group-aria-expanded/accordion-trigger:scale-y-0" />
            </span>
          </AccordionTrigger>
          <AccordionContent className="pb-5 pr-10 text-sm leading-relaxed text-muted-ink">
            <p>{faq.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
