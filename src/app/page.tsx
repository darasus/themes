import {UiSection} from "@/components/UiSection"
import {ThemeCustomizer} from "@/components/theme-customizer"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"

export default function Home() {
  return (
    <div>
      <header>
        <ThemeCustomizer />
      </header>
      <main className="flex flex-col grow gap-6">
        <UiSection>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </UiSection>
        <UiSection>
          <Button>Purchase</Button>
        </UiSection>
        <UiSection>
          <Input />
        </UiSection>
      </main>
    </div>
  )
}
