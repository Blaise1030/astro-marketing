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
 */
export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <Accordion multiple keepMounted className="mt-8 space-y-3">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={faq.question}
          value={`faq-${index}`}
          className="rounded-xl border border-tertiary/30 transition-colors data-open:border-tertiary/60"
        >
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>
            <p>{faq.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
