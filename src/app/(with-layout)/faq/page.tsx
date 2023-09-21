import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2 text-center">FAQ</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is Payla free?</AccordionTrigger>
          <AccordionContent>
            Yes, Payla is completely free. You only pay for card processing
            fees. See{" "}
            <a
              href="https://stripe.com/en-nl/pricing"
              target="_blank"
              className="underline"
            >
              Stripe pricing
            </a>{" "}
            for more details.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What is payout schedule?</AccordionTrigger>
          <AccordionContent>
            Payla does not withhold your funds. Fund are immediately transferred
            to your Stripe account. Depending on your Stripe settings, the funds
            will then be transferred to your bank account based on your bank
            account.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Do I need to create account to use Payla?
          </AccordionTrigger>
          <AccordionContent>
            No, all you need is a Stripe account.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
