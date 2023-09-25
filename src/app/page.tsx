import {UiSection} from "@/components/UiSection"
import {ThemeCustomizer} from "@/components/theme-customizer"
import {Label} from "@/components/ui/label"

import {AccordionDemo} from "@/demo/AccordionDemo"
import {AlertDemo} from "@/demo/AlertDemo"
import {AlertDialogDemo} from "@/demo/AlertDialogDemo"
import {AspectRatioDemo} from "@/demo/AspectRatioDemo"
import {AvatarDemo} from "@/demo/AvatarDemo"
import {BadgeDemo} from "@/demo/BadgeDemo"
import {ButtonDemo} from "@/demo/ButtonDemo"
import {CalendarDemo} from "@/demo/CalendarDemo"
import {CardDemo} from "@/demo/CardDemo"
import {CheckboxDemo} from "@/demo/CheckboxDemo"
import {CollapsibleDemo} from "@/demo/CollapsibleDemo"
import {ComboboxDemo} from "@/demo/ComboboxDemo"
import {CommandDemo} from "@/demo/CommandDemo"
import {ContextMenuDemo} from "@/demo/ContextMenuDemo"
import {DataTableDemo} from "@/demo/DatatableDemo"
import {DatePickerDemo} from "@/demo/DatePicketDemo"
import {DialogDemo} from "@/demo/DialogDemo"
import {DropdownMenuDemo} from "@/demo/DropdownMenuDemo"
import {HoverCardDemo} from "@/demo/HoverCardDemo"
import {InputDemo} from "@/demo/InputDemo"
import {LabelDemo} from "@/demo/LabelDemo"
import {MenubarDemo} from "@/demo/MenubarDemo"
import {NavigationMenuDemo} from "@/demo/NavigationMenuDemo"
import {PopoverDemo} from "@/demo/PopoverDemo"
import {ProgressDemo} from "@/demo/ProgressDemo"
import {RadioGroupDemo} from "@/demo/RadioGroupDemo"
import {ScrollAreaDemo} from "@/demo/ScrollAreaDemo"
import {SelectDemo} from "@/demo/SelectDemo"
import {SeparatorDemo} from "@/demo/SeparatorDemo"
import {SheetDemo} from "@/demo/SheetDemo"
import {SkeletonDemo} from "@/demo/SkeletonDemo"
import {SliderDemo} from "@/demo/SliderDemo"
import {SwitchDemo} from "@/demo/SwitchDemo"
import {TableDemo} from "@/demo/TableDemo"
import {TabsDemo} from "@/demo/TabsDemo"
import {TextareaDemo} from "@/demo/TextareaDemo"
import {ToastDemo} from "@/demo/ToastDemo"
import {ToggleDemo} from "@/demo/ToggleDemo"
import {TooltipDemo} from "@/demo/TooltipDemo"

const items = [
  {name: "Accordion", demo: AccordionDemo},
  {name: "Alert", demo: AlertDemo},
  {name: "Alert dialog", demo: AlertDialogDemo},
  {name: "Aspect ratio", demo: AspectRatioDemo},
  {name: "Avatar", demo: AvatarDemo},
  {name: "Badge", demo: BadgeDemo},
  {name: "Button", demo: ButtonDemo},
  {name: "Calendar", demo: CalendarDemo},
  {name: "Card", demo: CardDemo},
  {name: "Checkbox", demo: CheckboxDemo},
  {name: "Collapsible", demo: CollapsibleDemo},
  {name: "Combobox", demo: ComboboxDemo},
  {name: "Command", demo: CommandDemo},
  {name: "Context menu", demo: ContextMenuDemo},
  {name: "Data table", demo: DataTableDemo},
  {name: "Date picker", demo: DatePickerDemo},
  {name: "Dialog", demo: DialogDemo},
  {name: "Dropdown menu", demo: DropdownMenuDemo},
  {name: "Hover card", demo: HoverCardDemo},
  {name: "Input", demo: InputDemo},
  {name: "Label", demo: LabelDemo},
  {name: "Menubar", demo: MenubarDemo},
  {name: "Navigation menu", demo: NavigationMenuDemo},
  {name: "Popover", demo: PopoverDemo},
  {name: "Progress", demo: ProgressDemo},
  {name: "Radio group", demo: RadioGroupDemo},
  {name: "Scroll area", demo: ScrollAreaDemo},
  {name: "Select", demo: SelectDemo},
  {name: "Separator", demo: SeparatorDemo},
  {name: "Sheet", demo: SheetDemo},
  {name: "Skeleton", demo: SkeletonDemo},
  {name: "Slider", demo: SliderDemo},
  {name: "Switch", demo: SwitchDemo},
  {name: "Table", demo: TableDemo},
  {name: "Tabs", demo: TabsDemo},
  {name: "Textarea", demo: TextareaDemo},
  {name: "Toast", demo: ToastDemo},
  {name: "Toggle", demo: ToggleDemo},
  {name: "Tooltip", demo: TooltipDemo},
]

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <header>
        <ThemeCustomizer />
      </header>
      <main className="flex flex-col grow gap-6">
        <div className="grid grid-cols-3 gap-6 justify-stretch">
          {items.map(({name, demo: Demo}) => (
            <div className="flex flex-col gap-2">
              <Label className="text-lg">{name}</Label>
              <UiSection key={name}>
                <Demo />
              </UiSection>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
